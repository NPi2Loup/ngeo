!function(c){function e(e){for(var t,r,n=e[0],o=e[1],a=e[2],l=0,i=[];l<n.length;l++)r=n[l],s[r]&&i.push(s[r][0]),s[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(c[t]=o[t]);for(h&&h(e);i.length;)i.shift()();return p.push.apply(p,a||[]),u()}function u(){for(var e,t=0;t<p.length;t++){for(var r=p[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==s[a]&&(n=!1)}n&&(p.splice(t--,1),e=l(l.s=r[0]))}return e}var r={},s={39:0},p=[];function l(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=c,l.c=r,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var h=n;p.push([523,0]),u()}({523:function(e,t,r){r(52),r(53),e.exports=r(524)},524:function(e,t,r){"use strict";r.r(t);r(525);var i=r(1),n=r(19),o=r(90),a=r(227),l=r(18),c=r(26),u=r(17),s=r(42),p=r(6),h=r(31),d=r(37),f={};f.module=angular.module("app",["gettext",n.a.name,a.a.name]),f.searchComponent={bindings:{map:"=appSearchMap"},controller:"AppSearchController",template:'<input type="text" placeholder="search…" ngeo-search="$ctrl.options" ngeo-search-datasets="$ctrl.datasets" ngeo-search-listeners="$ctrl.listeners">'},f.module.component("appSearch",f.searchComponent),f.SearchController=function(e,o,a,t){this.$element=e,this.map,this.vectorLayer_=this.createVectorLayer_();var r=this.createAndInitBloodhound_(t);this.options={highlight:!0,hint:void 0,minLength:void 0},this.datasets=[{source:r.ttAdapter(),display:function(e){return e.get("label")},templates:{header:function(){return'<div class="ngeo-header">Addresses</div>'},suggestion:function(e){var t=e,r=o.$new(!0);r.feature=t,r.click=function(e){window.alert(t.get("label")),e.stopPropagation()};var n="<p>"+t.get("label")+'<button ng-click="click($event)">i</button></p>';return a(n)(r)}}}],this.listeners={select:f.SearchController.select_.bind(this)}},f.SearchController.$inject=["$element","$rootScope","$compile","ngeoSearchCreateGeoJSONBloodhound"],f.SearchController.prototype.$onInit=function(){var e=this.$element.find("input");e.on("focus blur",function(){e.val("")})},f.SearchController.prototype.createVectorLayer_=function(){var e=new s.a({source:new d.a});return e.setMap(this.map),e},f.SearchController.prototype.createAndInitBloodhound_=function(e){var t=e("https://geomapfish-demo-dc.camptocamp.com/2.4/fulltextsearch?query=%QUERY",void 0,p.g("EPSG:3857"),o.a);return t.initialize(),t},f.SearchController.select_=function(e,t,r){var n=t,o=n.getGeometry(),a=this.map.getSize();i.a.assert(void 0!==a);var l=this.vectorLayer_.getSource();l.clear(!0),l.addFeature(n),this.map.getView().fit(o,{size:a,maxZoom:16})},f.module.controller("AppSearchController",f.SearchController),f.MainController=function(){this.map=new l.a({layers:[new u.a({source:new h.b})],view:new c.a({center:[0,0],zoom:4})})},f.module.controller("MainController",f.MainController),t.default=f},525:function(e,t){}});
//# sourceMappingURL=search.f05c1e.js.map