!function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],u=0,h=[];u<l.length;u++)i=l[u],o[i]&&h.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(p&&p(t);h.length;)h.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={20:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=c;a.push([374,0]),r()}({373:function(e,t,r){"use strict";r.r(t);r(491);var n=r(1),o=r(17),a=r(187),i=r(8),l=r(43),c=r(53),s=r(36),p=r(57),u={},h=angular.module("app",["gettext",o.a.name,a.a.name]);u.locationSearchComponent={bindings:{map:"=appSearchMap"},controller:"AppSearchController",template:'<input type="text" placeholder="Search…" ngeo-search="$ctrl.options" ngeo-search-datasets="$ctrl.datasets" ngeo-search-listeners="$ctrl.listeners">'},h.component("appLocationSearch",u.locationSearchComponent),u.SearchController=function(e){this.map;var t=this.createAndInitBloodhound_(e,10);this.options={highlight:!0,hint:void 0,minLength:void 0},this.datasets=[{source:t.ttAdapter(),limit:10,display:function(e){return e.get("label_no_html")},templates:{header:function(){return'<div class="ngeo-header">Locations</div>'},suggestion:function(e){return"<p>"+e.get("label")+"</p>"}}}],this.listeners={select:u.SearchController.select_.bind(this)}},u.SearchController.$inject=["ngeoCreateLocationSearchBloodhound"],u.SearchController.prototype.createAndInitBloodhound_=function(e,t){var r=i.g("EPSG:3857");n.a.assert(null!==r);var o=e({targetProjection:r,limit:t,origins:"gazetteer",prepare:function(e,t){return t.url+="&lang=fr",t}});return o.initialize(),o},u.SearchController.select_=function(e,t,r){var o=t.get("bbox"),a=this.map.getSize();n.a.assert(void 0!==a);this.map.getView().fit(o,{size:a,maxZoom:16})},h.controller("AppSearchController",u.SearchController),u.MainController=function(){this.map=new l.a({layers:[new s.a({source:new p.b})],view:new c.a({center:[0,0],zoom:4})})},h.controller("MainController",u.MainController),t.default=u},374:function(e,t,r){r(40),r(39),e.exports=r(373)},491:function(e,t){}});
//# sourceMappingURL=locationsearch.de2f8e.js.map