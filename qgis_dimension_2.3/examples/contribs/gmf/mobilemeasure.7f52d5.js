!function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);for(h&&h(e);p.length;)p.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={14:0},r=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=l;r.push([427,0]),i()}({398:function(t,e,i){"use strict";i.r(e);i(556);var a=i(43),n=i(184),r=i(107),s=i(194),o=i(1),l=i(163),c=i(69),h=i(3),u=i(2),p=i(21),g=i(36),f=i(51),d=i(34),m=i(85),v=i(33),y=i(89),_=i(76),w=function(t){v.a.call(this,{handleEvent:g.b}),this.changeEventKey_=null,this.type_=t.type,this.minPoints_=t.minPoints?t.minPoints:"Polygon"===this.type_?3:2,this.sketchFeature_=null,this.sketchPoints_=[],this.sketchPoint_=null,this.overlay_=new y.a({source:new _.b({useSpatialIndex:!1,wrapX:!!t.wrapX&&t.wrapX}),style:t.style||l.a.getDefaultDrawStyleFunction(),updateWhileAnimating:!0,updateWhileInteracting:!0}),u.a(this,"change:active",this.updateState_,this),this.set("dirty",!1),this.set("drawing",!1),this.set("valid",!1)};h.d(w,v.a),w.prototype.setMap=function(t){this.getMap()&&this.changeEventKey_&&u.e(this.changeEventKey_),v.a.prototype.setMap.call(this,t),t&&(this.changeEventKey_=u.a(t.getView(),"change:center",this.handleViewCenterChange_,this)),this.updateState_()},w.prototype.getDirty=function(){return this.get("dirty")},w.prototype.getDrawing=function(){return this.get("drawing")},w.prototype.getValid=function(){return this.get("valid")},w.prototype.getFeature=function(){return this.sketchFeature_},w.prototype.addToDrawing=function(){var t=this.getActive(),e=this.getDrawing();if(t&&e){var i=void 0,a=this.getSketchPointGeometry_().getCoordinates(),n=void 0;if("Point"===this.type_){if(!this.sketchFeature_){this.sketchFeature_=new p.a(new d.a(a));var r=new c.a("drawstart",{feature:this.sketchFeature_});this.dispatchEvent(r)}return i=this.sketchFeature_.getGeometry(),o.a.assertInstanceof(i,m.a),void i.setCoordinates(a)}if("LineString"===this.type_)if(this.sketchPoints_.push(this.sketchPoint_),this.sketchFeature_)i=this.sketchFeature_.getGeometry(),o.a.assertInstanceof(i,m.a),(n=i.getCoordinates()).push(a.slice()),i.setCoordinates(n);else{n=[a.slice(),a.slice()],this.sketchFeature_=new p.a(new f.a(n));var s=new c.a("drawstart",{feature:this.sketchFeature_});this.dispatchEvent(s)}this.getDirty()&&this.set("dirty",!1);var l=this.getValid();"LineString"===this.type_&&(n.length>=this.minPoints_?l||this.set("valid",!0):l&&this.set("valid",!1)),this.sketchPoint_=null,this.updateSketchFeatures_()}},w.prototype.clearDrawing=function(){this.setActive(!1),this.setActive(!0)},w.prototype.finishDrawing=function(){var t=this.getActive(),e=this.getDrawing();if(t&&e){this.sketchPoint_&&this.addToDrawing(),this.set("drawing",!1);var i=new c.a("drawend",{feature:this.sketchFeature_});this.dispatchEvent(i)}},w.prototype.startDrawing_=function(){this.set("drawing",!0),this.createOrUpdateSketchPoint_(),this.updateSketchFeatures_(),"Point"===this.type_&&this.addToDrawing()},w.prototype.modifyDrawing_=function(){if(this.sketchFeature_){var t=this.getCenter_();if("LineString"===this.type_){var e=this.sketchFeature_.getGeometry();o.a.assertInstanceof(e,m.a);var i=e.getCoordinates();i.pop(),i.push(t),e.setCoordinates(i)}this.getDirty()||this.set("dirty",!0)}},w.prototype.abortDrawing_=function(){var t=this.sketchFeature_;return(t||this.sketchPoints_.length>0)&&(this.sketchFeature_=null,this.sketchPoint_=null,this.overlay_.getSource().clear(!0)),this.sketchPoints_=[],this.set("dirty",!1),this.set("drawing",!1),this.set("valid",!1),t},w.prototype.updateState_=function(){var t=this.getMap(),e=this.getActive();t&&e?this.startDrawing_():this.abortDrawing_(),this.overlay_.setMap(e?t:null)},w.prototype.handleViewCenterChange_=function(t){var e=this.getActive(),i=this.getDrawing();e&&i&&(this.createOrUpdateSketchPoint_(),"Point"===this.type_?this.addToDrawing():(this.modifyDrawing_(),this.updateSketchFeatures_()))},w.prototype.createOrUpdateSketchPoint_=function(){var t=this.getCenter_();this.sketchPoint_?this.getSketchPointGeometry_().setCoordinates(t):this.sketchPoint_=new p.a(new d.a(t))},w.prototype.updateSketchFeatures_=function(){var t=[];this.sketchFeature_&&t.push(this.sketchFeature_),this.sketchPoint_&&t.push(this.sketchPoint_);var e=this.overlay_.getSource();e.clear(!0),e.addFeatures(t),e.addFeatures(this.sketchPoints_)},w.prototype.getSketchPointGeometry_=function(){o.a.assert(this.sketchPoint_,"sketch point should be thruty");var t=this.sketchPoint_.getGeometry();return o.a.assertInstanceof(t,d.a),t},w.prototype.getCenter_=function(){var t=this.getMap().getView().getCenter();return o.a.assertArray(t),t};var C=w,k=i(11),b=function(t,e,i){var a=void 0!==i?i:{};k.a(a,{displayHelpTooltip:!1}),s.a.call(this,t,e,a)};h.d(b,s.a),b.prototype.createDrawInteraction=function(t,e){return new C({type:"LineString",style:t,source:e})};var M=b,P=i(86),D=i(47),S=i(143),F=i(38),A=i(15),I=angular.module("gmfMobileMeasureLength",[r.a.name]);I.value("gmfMobileMeasureLengthTemplateUrl",function(t,e){var i=e.gmfMobileMeasureLengthTemplateurl;return void 0!==i?i:"gmf/measure/lengthComponent"}),I.run(["$templateCache",function(t){t.put("gmf/measure/lengthComponent",i(426))}]),I.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurelengthActive",precision:"<?gmfMobileMeasurelengthPrecision",map:"=gmfMobileMeasurelengthMap",sketchStyle:"=?gmfMobileMeasurelengthSketchstyle"},controller:"GmfMobileMeasureLengthController as ctrl",bindToController:!0,templateUrl:t,link:function(t,e,i,a){a.init()}}},I.component_.$inject=["gmfMobileMeasureLengthTemplateUrl"],I.directive("gmfMobileMeasurelength",I.component_),I.Controller_=function(t,e,i){var a=this;this.scope_=t,this.filter_=e,this.gettextCatalog_=i,this.map,this.active,this.scope_.$watch(function(){return a.active},function(t){a.measure.setActive(t)}),this.precision,this.sketchStyle=new A.c({fill:new D.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new F.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new S.a({stroke:new F.a({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})}),this.measure,this.drawInteraction,this.dirty=!1,this.drawing=!1,this.valid=!1},I.Controller_.$inject=["$scope","$filter","gettextCatalog"],I.Controller_.prototype.init=function(){this.measure=new M(this.filter_("ngeoUnitPrefix"),this.gettextCatalog_,{precision:this.precision,sketchStyle:this.sketchStyle}),this.measure.setActive(this.active),P.a.interaction(this.measure),this.drawInteraction=this.measure.getDrawInteraction();var t=this.drawInteraction;P.a.interaction(t),Object.defineProperty(this,"hasPoints",{get:function(){return null!==this.drawInteraction.getFeature()}}),u.a(t,"change:dirty",function(){this.dirty=t.getDirty(),this.dirty&&this.scope_.$apply()},this),u.a(t,"change:drawing",function(){this.drawing=t.getDrawing()},this),u.a(t,"change:valid",function(){this.valid=t.getValid()},this),this.map.addInteraction(this.measure)},I.Controller_.prototype.addPoint=function(){this.drawInteraction.addToDrawing()},I.Controller_.prototype.clear=function(){this.drawInteraction.clearDrawing()},I.Controller_.prototype.finish=function(){this.drawInteraction.finishDrawing()},I.Controller_.prototype.deactivate=function(){this.active=!1},I.controller("GmfMobileMeasureLengthController",I.Controller_);var x=I,L=i(189),T=i(88),E=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};k.a(i,{displayHelpTooltip:!1}),T.a.call(this,i),this.format_=t,this.coordFormat_=e};h.d(E,T.a),E.prototype.createDrawInteraction=function(t,e){return new C({type:"Point",style:t,source:e})},E.prototype.handleMeasure=function(t){var e=o.a.assertInstanceof(this.sketchFeature.getGeometry(),d.a),i=this.decimals;t(T.a.getFormattedPoint(e,i,this.format_,this.coordFormat_),e.getLastCoordinate())};var $=E,j=i(134),V=angular.module("gmfMobileMeasurePoint",[L.a.module.name,j.a.name]);V.value("gmfMobileMeasurePointTemplateUrl",function(t,e){var i=e.gmfMobileMeasurePointTemplateurl;return void 0!==i?i:"gmf/measure/pointComponent"}),V.run(["$templateCache",function(t){t.put("gmf/measure/pointComponent",i(425))}]),V.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurepointActive",getCoordinateDecimalsFn:"&?gmfMobileMeasurepointCoordinatedecimals",getLayersConfigFn:"&gmfMobileMeasurepointLayersconfig",map:"=gmfMobileMeasurepointMap",sketchStyle:"=?gmfMobileMeasurepointSketchstyle",format:"<gmfMobileMeasurepointFormat"},controller:"GmfMobileMeasurePointController as ctrl",bindToController:!0,templateUrl:t,link:function(t,e,i,a){a.init()}}},V.component_.$inject=["gmfMobileMeasurePointTemplateUrl"],V.directive("gmfMobileMeasurepoint",V.component_),V.Controller_=function(t,e,i,a,n){var r=this;this.gmfRaster_=a,this.ngeoDebounce_=n,this.gettextCatalog_=t,this.$filter_=i,this.map,this.active,e.$watch(function(){return r.active},function(t){r.measure.setActive(t),r.handleMeasureActiveChange_()});var s=this.getCoordinateDecimalsFn;this.coordinateDecimals=s?s():0,this.layersConfig,this.sketchStyle,void 0===this.sketchStyle&&(this.sketchStyle=new A.c({fill:new D.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new F.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new S.a({stroke:new F.a({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})})),this.format,this.measure,this.drawInteraction,this.mapViewPropertyChangeEventKey_=null},V.Controller_.$inject=["gettextCatalog","$scope","$filter","gmfRaster","ngeoDebounce"],V.Controller_.prototype.init=function(){this.measure=new $(this.$filter_("ngeoNumberCoordinates"),this.format||"{x}, {y}",{decimals:this.coordinateDecimals,sketchStyle:this.sketchStyle}),this.measure.setActive(this.active),P.a.interaction(this.measure),this.drawInteraction=this.measure.getDrawInteraction(),P.a.interaction(this.drawInteraction);var t=this.getLayersConfigFn();o.a.assert(Array.isArray(t)),this.layersConfig=t,this.map.addInteraction(this.measure)},V.Controller_.prototype.deactivate=function(){this.active=!1},V.Controller_.prototype.translate=function(t){return this.gettextCatalog_.getString(t)},V.Controller_.prototype.handleMeasureActiveChange_=function(){if(this.measure.getActive()){var t=this.map.getView();this.mapViewPropertyChangeEventKey_=u.a(t,"propertychange",this.ngeoDebounce_(this.getMeasure_.bind(this),300,!0),this),this.getMeasure_()}else this.mapViewPropertyChangeEventKey_&&(u.e(this.mapViewPropertyChangeEventKey_),this.mapViewPropertyChangeEventKey_=null)},V.Controller_.prototype.getMeasure_=function(){var t=this,e=this.map.getView().getCenter();o.a.assertArray(e);var i={layers:this.layersConfig.map(function(t){return t.name}).join(",")};this.gmfRaster_.getRaster(e,i).then(function(e){var i=t.measure.getTooltipElement(),a=document.createElement("div");a.className="gmf-mobile-measure-point";var n=t.layersConfig,r=Array.isArray(n),s=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(s>=n.length)break;o=n[s++]}else{if((s=n.next()).done)break;o=s.value}var l=o,c=l.name;if(c in e){var h=e[c],u=document.createElement("div");u.className="gmf-mobile-measure-point-"+c;var p=l.unit||"",g=l.decimals&&l.decimals>0||0;h=t.$filter_("number")(h,g),u.innerHTML=[t.translate(c),": ",h," ",p].join(""),a.appendChild(u)}}var f=i.getElementsByClassName("gmf-mobile-measure-point");f[0]&&f[0].remove(),i.appendChild(a)})},V.controller("GmfMobileMeasurePointController",V.Controller_),V.LayerConfig;var G=V,U=i(105),O=i(45),K=i(59),R=i(73),N=i(374),H=i(54),X=i(83),J={};J.module=angular.module("gmfapp",["gettext",a.a.name,n.a.module.name,x.name,G.name,U.a.name]),J.module.value("gmfRasterUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/raster"),J.module.constant("defaultTheme","Demo"),J.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),J.MainController=function(t){var e=t.getMapCenter()||[537635,152640],i=t.getMapZoom()||3;this.map=new K.a({layers:[new H.a({source:new X.a})],view:new R.a({projection:O.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:e,zoom:i})}),this.map.addControl(new N.a),this.measureLengthActive=!1,this.measurePointLayersConfig=[{name:"aster",unit:"m",decimals:2},{name:"srtm",unit:"m"}],this.measurePointActive=!1},J.MainController.$inject=["gmfPermalink"],J.module.controller("MainController",J.MainController);e.default=J},425:function(t,e){t.exports='<a class="btn btn-default" ng-if=ctrl.active ng-click=ctrl.deactivate()> <span class="fa fa-times"></span> {{\'Close\' | translate}} </a> '},426:function(t,e){t.exports='<a class="btn btn-default" ng-if="ctrl.drawing && (!ctrl.valid)" ng-click=ctrl.addPoint()> <span class="fa fa-check"></span> {{\'Set as starting point\' | translate}} </a> <a class="btn btn-default" ng-if=ctrl.dirty ng-click=ctrl.addPoint()> <span class="fa fa-plus"></span> {{\'Add new point\' | translate}} </a> <a class="btn btn-default" ng-if="ctrl.drawing && ctrl.valid && !ctrl.dirty" ng-click=ctrl.finish()> <span class="fa fa-check"></span> {{\'Terminate\' | translate}} </a> <a class="btn btn-default" ng-if=ctrl.valid ng-click=ctrl.clear()> <span class="fa fa-repeat"></span> {{\'Clear\' | translate}} </a> <a class="btn btn-default" ng-if=ctrl.active ng-click=ctrl.deactivate()> <span class="fa fa-times"></span> {{\'Close\' | translate}} </a> '},427:function(t,e,i){i(61),i(60),t.exports=i(398)},556:function(t,e){}});
//# sourceMappingURL=mobilemeasure.7f52d5.js.map