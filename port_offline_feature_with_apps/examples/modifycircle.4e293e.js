(function(r){function e(e){var a=e[0];var i=e[1];var u=e[2];var s,v,c=0,f=[];for(;c<a.length;c++){v=a[c];if(n[v]){f.push(n[v][0])}n[v]=0}for(s in i){if(Object.prototype.hasOwnProperty.call(i,s)){r[s]=i[s]}}if(l)l(e);while(f.length){f.shift()()}o.push.apply(o,u||[]);return t()}function t(){var r;for(var e=0;e<o.length;e++){var t=o[e];var a=true;for(var u=1;u<t.length;u++){var s=t[u];if(n[s]!==0)a=false}if(a){o.splice(e--,1);r=i(i.s=t[0])}}return r}var a={};var n={15:0};var o=[];function i(e){if(a[e]){return a[e].exports}var t=a[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,i);t.l=true;return t.exports}i.m=r;i.c=a;i.d=function(r,e,t){if(!i.o(r,e)){Object.defineProperty(r,e,{configurable:false,enumerable:true,get:t})}};i.r=function(r){Object.defineProperty(r,"__esModule",{value:true})};i.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};i.d(e,"a",e);return e};i.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)};i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var s=u.push.bind(u);u.push=e;u=u.slice();for(var v=0;v<u.length;v++)e(u[v]);var l=s;o.push([372,0]);return t()})({371:function(r,e,t){"use strict";t.r(e);var a=t(487);var n=t.n(a);var o=t(61);var i=t(272);var u=t(19);var s=t(25);var v=t(17);var l=t(38);var c=t(35);var f=t(34);var p=t(146);var h=t(29);var w=t(33);var b=t(14);var d=t(22);var g={};var y=angular.module("app",["gettext",d["a"].name]);g.MainController=function(){this.map=new u["a"]({layers:[new v["a"]({source:new c["b"]})],view:new s["a"]({center:[-10997148,4569099],zoom:4})});var r=this.map;var e=new p["a"]([-10691093,4966327],465e3);this.features=new w["b"];var t=new b["a"]({geometry:Object(h["c"])(e),color:"#000000",label:"Circle 1",opacity:"0.5",stroke:"2"});t.set(o["a"].IS_CIRCLE,true);this.features.push(t);var a=new f["b"]({features:this.features});var n=new l["a"]({source:a});n.setMap(r);this.interaction=new i["a"]({features:this.features});var d=this.interaction;d.setActive(true);r.addInteraction(d)};y.controller("MainController",g.MainController);e["default"]=g},372:function(r,e,t){t(53);t(55);r.exports=t(371)},487:function(r,e){}});
//# sourceMappingURL=modifycircle.4e293e.js.map