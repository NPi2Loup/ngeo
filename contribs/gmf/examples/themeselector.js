goog.provide('gmfapp.themeselector');

// webpack: import './themeselector.css';
/** @suppress {extraRequire} */
goog.require('gmf.theme.module');
goog.require('gmf.layertree.TreeManager');

/** @type {!angular.Module} **/
gmfapp.themeselector.module = angular.module('gmfapp', [
  'gettext',
  gmf.layertree.TreeManager.module.name,
  gmf.theme.module.name,
]);

gmfapp.themeselector.module.value('gmfTreeUrl',
  'https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background');

gmfapp.themeselector.module.constant('angularLocaleScript', '../build/angular-locale_{{locale}}.js');


/**
 * @constructor
 * @param {angular.$http} $http Angular's $http service.
 * @param {gmf.theme.Themes} gmfThemes Themes service.
 * @param {gmf.theme.Manager} gmfThemeManager gmf Tree Manager service.
 * @ngInject
 */
gmfapp.themeselector.MainController = function($http, gmfThemes, gmfThemeManager) {

  /**
   * @param {gmfThemes.GmfTheme} theme Theme.
   * @return {boolean} Theme is 'Enseignement'
   * @export
   */
  this.filter = function(theme) {
    return theme.name !== 'Enseignement';
  };

  /**
   * @type {gmf.theme.Manager}
   * @export
   */
  this.manager = gmfThemeManager;

  gmfThemes.loadThemes();
};


gmfapp.themeselector.module.controller('MainController', gmfapp.themeselector.MainController);
