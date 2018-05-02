(function(e){function t(t){var a=t[0];var n=t[1];var o=t[2];var l,c,u=0,g=[];for(;u<a.length;u++){c=a[u];if(r[c]){g.push(r[c][0])}r[c]=0}for(l in n){if(Object.prototype.hasOwnProperty.call(n,l)){e[l]=n[l]}}if(p)p(t);while(g.length){g.shift()()}i.push.apply(i,o||[]);return s()}function s(){var e;for(var t=0;t<i.length;t++){var s=i[t];var a=true;for(var o=1;o<s.length;o++){var l=s[o];if(r[l]!==0)a=false}if(a){i.splice(t--,1);e=n(n.s=s[0])}}return e}var a={};var r={31:0};var i=[];function n(t){if(a[t]){return a[t].exports}var s=a[t]={i:t,l:false,exports:{}};e[t].call(s.exports,s,s.exports,n);s.l=true;return s.exports}n.m=e;n.c=a;n.d=function(e,t,s){if(!n.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:s})}};n.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=o.push.bind(o);o.push=t;o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;i.push([411,0]);return s()})({322:function(e,t,s){"use strict";var a=s(309);var r=s.n(a);var i=s(2);var n=s(202);var o=s(73);var l=s(1);var c=s(522);var p=s.n(c);var u=function e(t,s,a){this.sce_=t;this.gettextCatalog_=s;this.createPopup_=a;o["a"].call(this);var r=angular.element('<div class="ngeo-disclaimer"></div>');angular.element(document.body).append(r);this.container_=r;this.messages_={}};u.$inject=["$sce","gettextCatalog","ngeoCreatePopup"];u.$inject=["$sce","gettextCatalog","ngeoCreatePopup"];l["d"](u,o["a"]);u.prototype.alert=function(e){this.show(e)};u.prototype.close=function(e){var t=this.getMessageObjects(e);t.forEach(this.closeMessage_,this)};u.prototype.showMessage=function(e){var t=this;var s=this.gettextCatalog_;var a=e.type;i["a"].assertString(a,"Type should be set.");var r=this.getMessageUid_(e);if(this.messages_[r]!==undefined){return}var n=e.popup===true;if(n){var l=this.createPopup_();var c=this.sce_.trustAsHtml(e.msg);l.open({autoDestroy:true,content:c,title:"&nbsp;"});l.scope.$watch("open",function(s,a){if(!s){t.closeMessage_(e)}});this.messages_[r]=l}else{var p=["alert","fade","alert-dismissible"];switch(a){case o["a"].Type.ERROR:p.push("alert-danger");break;case o["a"].Type.INFORMATION:p.push("alert-info");break;case o["a"].Type.SUCCESS:p.push("alert-success");break;case o["a"].Type.WARNING:p.push("alert-warning");break;default:break}var u=angular.element('<div role="alert" class="'+p.join(" ")+'"></div>');var g=angular.element('<button type="button" class="close" data-dismiss="alert" aria-label="'+s.getString("Close")+'"><span aria-hidden="true" class="fa fa-times"></span></button>');var h=angular.element("<span />").html(e.msg);u.append(g).append(h);var f=void 0;if(e.target){f=angular.element(e.target)}else{f=this.container_}f.append(u);u.addClass("in");u.on("closed.bs.alert",function(){t.closeMessage_(e)});this.messages_[r]=u}};u.prototype.getMessageUid_=function(e){return e.msg+"-"+e.type};u.prototype.closeMessage_=function(e){var t=this.getMessageUid_(e);var s=this.messages_[t];if(s===undefined){return}if(s instanceof n["a"]){if(s.getOpen()){s.setOpen(false)}}else{if(s.hasClass("in")){s.alert("close")}}delete this.messages_[t]};u.module=angular.module("ngeoDisclaimer",[n["a"].module.name]);u.module.service("ngeoDisclaimer",u);t["a"]=u},410:function(e,t,s){"use strict";s.r(t);(function(e){var a=s(503);var r=s.n(a);var i=s(300);var n=s.n(i);var o=s(322);var l=s(73);var c=s(19);var p=s(26);var u=s(17);var g=s(35);var h=s(23);var f={};f.module=angular.module("app",["gettext",h["a"].name,o["a"].module.name]);f.MainController=function(t){this.disclaimer=t;this.map=new c["a"]({layers:[new u["a"]({source:new g["b"]})],view:new p["a"]({center:[0,0],zoom:4})});this.successMsg_="Disclaimer with success style";this.infoMsg_="Disclaimer with info style";this.warningMsg_="Disclaimer with warning style";this.errorMsg_="Disclaimer with error style";this.inMapMsgs_=["Disclaimer inside the map","An other message ","Map contributors","This is a long message inside a map"];e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})};f.MainController.$inject=["ngeoDisclaimer"];f.MainController.prototype.success=function(){this.disclaimer.success(this.successMsg_)};f.MainController.prototype.info=function(){this.disclaimer.info(this.infoMsg_)};f.MainController.prototype.warn=function(){this.disclaimer.warn(this.warningMsg_)};f.MainController.prototype.error=function(){this.disclaimer.error(this.errorMsg_)};f.MainController.prototype.inMap=function(){this.inMapMsgs_.forEach(function(e){this.disclaimer.alert({msg:e,target:angular.element("#disclaimers-in-map"),type:l["a"].Type.WARNING})},this)};f.MainController.prototype.closeAll=function(){this.disclaimer.close({msg:this.successMsg_,type:l["a"].Type.SUCCESS});this.disclaimer.close({msg:this.infoMsg_,type:l["a"].Type.INFORMATION});this.disclaimer.close({msg:this.warningMsg_,type:l["a"].Type.WARNING});this.disclaimer.close({msg:this.errorMsg_,type:l["a"].Type.ERROR});this.inMapMsgs_.forEach(function(e){this.disclaimer.close({msg:e,type:l["a"].Type.WARNING})},this)};f.module.controller("MainController",f.MainController);t["default"]=f}).call(this,s(51))},411:function(e,t,s){s(53);s(55);e.exports=s(410)},503:function(e,t){}});
//# sourceMappingURL=disclaimer.b9683c.js.map