// The MIT License (MIT)
//
// Copyright (c) 2016-2020 Camptocamp SA
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import angular from 'angular';
import ngeoMiscFilters from 'ngeo/misc/filters.js';
import ngeoGeometryType from 'ngeo/GeometryType.js';
import ngeoInteractionMeasureArea from 'ngeo/interaction/MeasureArea.js';
import ngeoInteractionMeasureLength from 'ngeo/interaction/MeasureLength.js';
import ngeoMiscEventHelper from 'ngeo/misc/EventHelper.js';
import {toMulti} from 'ngeo/utils.js';
import {getUid as olUtilGetUid} from 'ol/util.js';
import olCollection from 'ol/Collection.js';
import {listen} from 'ol/events.js';
import olFeature from 'ol/Feature.js';
import olInteractionDraw from 'ol/interaction/Draw.js';
import olStyleStyle from 'ol/style/Style.js';


/**
 * @type {angular.IModule}
 * @hidden
 */
const module = angular.module('ngeoCreatefeature', [
  ngeoMiscEventHelper.name,
  ngeoMiscFilters.name,
]);


/**
 * A directive used to draw vector features of a single geometry type using
 * either a 'draw' or 'measure' interaction. Once a feature is finished being
 * drawn, it is added to a collection of features.
 *
 * The geometry types supported are:
 *  - Point
 *  - LineString
 *  - Polygon
 *
 * Example:
 *
 *     <a
 *       href
 *       translate
 *       ngeo-btn
 *       ngeo-createfeature
 *       ngeo-createfeature-active="ctrl.createPointActive"
 *       ngeo-createfeature-features="ctrl.features"
 *       ngeo-createfeature-geom-type="ctrl.pointGeomType"
 *       ngeo-createfeature-map="::ctrl.map"
 *       class="btn btn-default ngeo-createfeature-point"
 *       ng-class="{active: ctrl.createPointActive}"
 *       ng-model="ctrl.createPointActive">
 *     </a>
 *
 * @htmlAttribute {boolean} ngeo-createfeature-active Whether the directive is
 *     active or not.
 * @htmlAttribute {import("ol/Collection.js").default} ngeo-createfeature-features The collection of
 *     features where to add those created by this directive.
 * @htmlAttribute {string} ngeo-createfeature-geom-type Determines the type
 *     of geometry this directive should draw.
 * @htmlAttribute {import("ol/Map.js").default} ngeo-createfeature-map The map.
 *
 * @return {angular.IDirective} The directive specs.
 * @ngdoc directive
 * @ngname ngeoCreatefeature
 */
function editingCreateFeatureComponent() {
  return {
    controller: 'ngeoCreatefeatureController',
    bindToController: true,
    scope: {
      'active': '=ngeoCreatefeatureActive',
      'features': '=ngeoCreatefeatureFeatures',
      'geomType': '=ngeoCreatefeatureGeomType',
      'map': '=ngeoCreatefeatureMap'
    }
  };
}

module.directive('ngeoCreatefeature', editingCreateFeatureComponent);


/**
 * @param {angular.gettext.gettextCatalog} gettextCatalog Gettext catalog.
 * @param {angular.ICompileService} $compile Angular compile service.
 * @param {angular.IFilterService} $filter Angular filter
 * @param {angular.auto.IInjectorService} $injector Angular injector service.
 * @param {angular.IScope} $scope Scope.
 * @param {angular.ITimeoutService} $timeout Angular timeout service.
 * @param {import("ngeo/misc/EventHelper.js").EventHelper} ngeoEventHelper Ngeo event helper service
 * @constructor
 * @private
 * @hidden
 * @ngInject
 * @ngdoc controller
 * @ngname ngeoCreatefeatureController
 */
function Controller(gettextCatalog, $compile, $filter, $injector, $scope, $timeout, ngeoEventHelper) {

  /**
   * @type {boolean}
   */
  this.active = false;

  /**
   * @type {?import("ol/Collection.js").default<olFeature<import("ol/geom/Geometry.js").default>>|import("ol/source/Vector.js").default<import("ol/geom/Geometry.js").default>}
   */
  this.features = null;

  /**
   * @type {string}
   */
  this.geomType = '';

  /**
   * @type {?import("ol/Map.js").default}
   */
  this.map = null;

  /**
   * @type {angular.gettext.gettextCatalog}
   * @private
   */
  this.gettextCatalog_ = gettextCatalog;

  /**
   * @type {angular.ICompileService}
   * @private
   */
  this.compile_ = $compile;

  /**
   * @type {angular.IFilterService}
   * @private
   */
  this.filter_ = $filter;

  /**
   * @type {angular.IScope}
   * @private
   */
  this.scope_ = $scope;

  /**
   * @type {angular.ITimeoutService}
   * @private
   */
  this.timeout_ = $timeout;

  /**
   * @type {import("ngeo/misc/EventHelper.js").EventHelper}
   * @private
   */
  this.ngeoEventHelper_ = ngeoEventHelper;

  /**
   * @type {angular.auto.IInjectorService}
   * @private
   */
  this.injector_ = $injector;

  /**
   * The draw or measure interaction responsible of drawing the vector feature.
   * The actual type depends on the geometry type.
   * @type {?import("ol/interaction/Interaction.js").default}
   * @private
   */
  this.interaction_ = null;


  // == Event listeners ==
  $scope.$watch(
    () => this.active,
    (newVal) => {
      if (!this.interaction_) {
        throw new Error('Missing interaction');
      }
      this.interaction_.setActive(newVal);
    }
  );
}


/**
 * Initialize the directive.
 */
Controller.prototype.$onInit = function() {
  this.active = this.active === true;
  const gettextCatalog = this.gettextCatalog_;

  // Create the draw or measure interaction depending on the geometry type
  let interaction;
  if (this.geomType === ngeoGeometryType.POINT ||
      this.geomType === ngeoGeometryType.MULTI_POINT
  ) {
    interaction = new olInteractionDraw({
      type: /** @type {import("ol/geom/GeometryType.js").default} */ ('Point')
    });
  } else if (this.geomType === ngeoGeometryType.LINE_STRING ||
      this.geomType === ngeoGeometryType.MULTI_LINE_STRING
  ) {
    const helpMsg = gettextCatalog.getString('Click to start drawing length');
    const contMsg = gettextCatalog.getString(
      'Click to continue drawing<br/>' +
      'Double-click or click last point to finish'
    );

    /** @type {import('ngeo/interaction/Measure.js').MeasureOptions} */
    const options = {
      style: new olStyleStyle(),
      startMsg: this.compile_(`<div translate>${helpMsg}</div>`)(this.scope_)[0],
      continueMsg: this.compile_(`<div translate>${contMsg}</div>`)(this.scope_)[0],
    };
    if (this.injector_.has('ngeoSnappingTolerance')) {
      options.tolerance = this.injector_.get('ngeoSnappingTolerance');
    }
    if (this.injector_.has('ngeoSnappingSource')) {
      options.source = this.injector_.get('ngeoSnappingSource');
    }

    interaction = new ngeoInteractionMeasureLength(
      this.filter_('ngeoUnitPrefix'),
      gettextCatalog,
      options
    );
  } else if (this.geomType === ngeoGeometryType.POLYGON ||
      this.geomType === ngeoGeometryType.MULTI_POLYGON
  ) {
    const helpMsg = gettextCatalog.getString('Click to start drawing area');
    const contMsg = gettextCatalog.getString(
      'Click to continue drawing<br/>' +
      'Double-click or click starting point to finish'
    );

    interaction = new ngeoInteractionMeasureArea(
      this.filter_('ngeoUnitPrefix'),
      gettextCatalog,
      {
        style: new olStyleStyle(),
        startMsg: this.compile_(`<div translate>${helpMsg}</div>`)(this.scope_)[0],
        continueMsg: this.compile_(`<div translate>${contMsg}</div>`)(this.scope_)[0]
      }
    );
  }

  if (!interaction) {
    throw new Error('Missing interaction');
  }
  if (!this.map) {
    throw new Error('Missing map');
  }

  interaction.setActive(this.active);
  this.interaction_ = interaction;
  this.map.addInteraction(interaction);

  const uid = olUtilGetUid(this);
  if (interaction instanceof olInteractionDraw) {
    this.ngeoEventHelper_.addListenerKey(
      uid,
      listen(interaction, 'drawend', this.handleDrawEnd_, this)
    );
  } else if (interaction instanceof ngeoInteractionMeasureLength ||
      interaction instanceof ngeoInteractionMeasureArea) {
    this.ngeoEventHelper_.addListenerKey(
      uid,
      listen(interaction, 'measureend', this.handleDrawEnd_, this)
    );
  }
};


/**
 * Called when a feature is finished being drawn. Add the feature to the
 * collection.
 * @param {Event|import('ol/events/Event.js').default|import('ngeo/interaction/Measure.js').MeasureEvent} event
 *    Event.
 */
Controller.prototype.handleDrawEnd_ = function(event) {
  let sketch;
  // @ts-ignore: evt should be of type {import('ol/interaction/Draw.js').DrawEvent but he is private
  if (event.feature) {
    // @ts-ignore: evt should be of type {import('ol/interaction/Draw.js').DrawEvent but he is private
    sketch = event.feature;
  } else {
    sketch = /** @type {import('ngeo/interaction/Measure.js').MeasureEvent} */(event).detail.feature;
  }
  console.assert(sketch);

  // convert to multi if geomType is multi and feature is not
  let geometry = sketch.getGeometry();
  const type = geometry.getType();
  if (this.geomType.indexOf('Multi') != type.indexOf('Multi')) {
    geometry = toMulti(geometry);
  }
  const feature = new olFeature(geometry);
  if (this.features instanceof olCollection) {
    this.features.push(feature);
  } else {
    if (!this.features) {
      throw new Error('Missing features');
    }
    this.features.addFeature(feature);
  }
};


/**
 * Cleanup event listeners and remove the interaction from the map.
 */
Controller.prototype.$onDestroy = function() {
  this.timeout_(() => {
    if (!this.map) {
      throw new Error('Missing map');
    }
    if (!this.interaction_) {
      throw new Error('Missing interaction');
    }
    const uid = olUtilGetUid(this);
    this.ngeoEventHelper_.clearListenerKey(uid);
    this.interaction_.setActive(false);
    this.map.removeInteraction(this.interaction_);
  }, 0);
};

module.controller('ngeoCreatefeatureController', Controller);
export default module;
