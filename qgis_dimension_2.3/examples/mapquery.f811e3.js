!function(e){function o(o){for(var t,l,u=o[0],s=o[1],i=o[2],m=0,c=[];m<u.length;m++)l=u[m],n[l]&&c.push(n[l][0]),n[l]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);for(p&&p(o);c.length;)c.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,o=0;o<a.length;o++){for(var r=a[o],t=!0,u=1;u<r.length;u++){var s=r[u];0!==n[s]&&(t=!1)}t&&(a.splice(o--,1),e=l(l.s=r[0]))}return e}var t={},n={18:0},a=[];function l(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=t,l.d=function(e,o,r){l.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(o,"a",o),o},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=o,u=u.slice();for(var i=0;i<u.length;i++)o(u[i]);var p=s;a.push([370,0]),r()}({369:function(e,o,r){"use strict";r.r(o);r(489);var t=r(74),n=r(134),a=r(137),l=r(17),u=r(99),s=r(66),i=r(111),p=r(241),m=r(43),c=r(53),f=r(113),y=r(36),h=r(104),v=r(57),d={};d.module=angular.module("app",["gettext",n.a.module.name,l.a.name,u.a.name,i.a.module.name,p.a.name]),d.module.value("ngeoQueryOptions",{limit:20}),d.queryresultComponent={controller:"AppQueryresultController",template:r(291)},d.module.component("appQueryresult",d.queryresultComponent),d.QueryresultController=function(e){this.result=e},d.QueryresultController.$inject=["ngeoQueryResult"],d.module.controller("AppQueryresultController",d.QueryresultController),d.MainController=function(e,o,r){this.dummyActive=!1,this.queryActive=!0;var n=new f.a({source:new h.a({url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",params:{LAYERS:"bus_stop"}})}),l=new f.a({source:new h.a({url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",params:{LAYERS:"information"}})});this.map=new m.a({layers:[new y.a({source:new v.b}),l,n],view:new c.a({projection:t.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})}),o.map=this.map,o.collection.push(new a.a({id:1,name:"bus_stop",visible:!0,wmsUrl:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",ogcLayers:[{name:"bus_stop",queryable:!0}]})),o.collection.push(new a.a({id:2,name:"information",visible:!0,wmsUrl:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",ogcLayers:[{name:"information",queryable:!0}]}));var u=new s.a(this,"queryActive");r.registerTool("mapTools",u,!0);var i=new s.a(this,"dummyActive");r.registerTool("mapTools",i)},d.MainController.$inject=["$scope","ngeoDataSources","ngeoToolActivateMgr"],d.MainController.prototype.getSetDummyActive=function(e){if(void 0===e)return this.dummyActive;this.dummyActive=e},d.module.controller("MainController",d.MainController),o.default=d},370:function(e,o,r){r(40),r(39),e.exports=r(369)},489:function(e,o){}});
//# sourceMappingURL=mapquery.f811e3.js.map