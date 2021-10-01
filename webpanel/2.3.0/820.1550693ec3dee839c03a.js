"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[820],{34820:function(e,r,n){var t=n(75798),o=n(36800),i=n(38592),a=n(65022),c=n(34233),u=n(7205);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function d(e,r,n,t,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?r(u):Promise.resolve(u).then(t,o)}function l(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){d(i,t,o,a,c,"next",e)}function c(e){d(i,t,o,a,c,"throw",e)}a(void 0)}))}}function f(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function R(e,r){return R=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},R(e,r)}function p(e,r){if(r&&("object"===s(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}r.Z=new(function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&R(e,r)}(_,e);var r,n,t,s,d,w,h,O,v,Z=(O=_,v=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=y(O);if(v){var n=y(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return p(this,e)});function _(){var e;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,_),(e=Z.call(this))._cachedAdminInfo=void 0,e.loadingAdminInfo=!1,a.Z.on("purgeCache",(function(){e._cachedAdminInfo=void 0})),e}return r=_,n=[{key:"cachedAdminInfo",get:function(){return this._cachedAdminInfo}},{key:"getAdminInfo",value:(h=l((function*(){var e,r=this;if(yield a.Z.wait4Init(),this._cachedAdminInfo)return this._cachedAdminInfo;if(this.loadingAdminInfo)return yield new Promise((function(e){r.on("loadAdminInfo",(function n(t){e(t),r.removeListener("loadAdminInfo",n)}))}));this.loadingAdminInfo=!0;try{e=yield a.Z.apiClient.AdministrationController_Read()}catch(e){var n=new i.Z({code:i.G.ERROR,error:e});return this.emit("loadAdminInfo",n),this.loadingAdminInfo=!1,n}switch(e.status){case 200:var t=new i.Z({code:i.G.OK,payload:e.data});return this._cachedAdminInfo=t,this.emit("loadAdminInfo",t),this.loadingAdminInfo=!1,t;case 424:var c=e.data,u=new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_GITHUB_RATE,{errorMessage:c},e)});return this.emit("loadAdminInfo",u),this.loadingAdminInfo=!1,u;case 429:var s=e.data,d=new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_GITHUB_ERROR,{errorMessage:s},e)});return this.emit("loadAdminInfo",d),this.loadingAdminInfo=!1,d;default:var l=new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.UNHANDLED_RESPONSE,{axiosResponse:e},e)});return this.emit("loadAdminInfo",l),this.loadingAdminInfo=!1,l}})),function(){return h.apply(this,arguments)})},{key:"restartServer",value:(w=l((function*(){var e;yield a.Z.wait4Init();try{e=yield a.Z.apiClient.AdministrationController_Delete()}catch(e){return new i.Z({code:i.G.ERROR,error:e})}switch(e.status){case 204:return new i.Z({code:i.G.OK,payload:null});case 422:var r=e.data;return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_WATCHDOG_UNAVAIL,{errorMessage:r},e)});default:return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.UNHANDLED_RESPONSE,{axiosResponse:e},e)})}})),function(){return w.apply(this,arguments)})},{key:"updateServer",value:(d=l((function*(e){var r;yield a.Z.wait4Init();try{r=yield a.Z.apiClient.AdministrationController_Update(null,{newVersion:e})}catch(e){return new i.Z({code:i.G.ERROR,error:e})}switch(r.status){case 202:return new i.Z({code:i.G.OK,payload:null});case 410:var n=r.data;return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_VERSION_NOT_FOUND,{errorMessage:n},r)});case 422:var t=r.data;return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_WATCHDOG_UNAVAIL,{errorMessage:t},r)});case 424:var c=r.data;return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_GITHUB_RATE,{errorMessage:c},r)});case 429:var u=r.data;return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_GITHUB_ERROR,{errorMessage:u},r)});default:return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.UNHANDLED_RESPONSE,{axiosResponse:r},r)})}})),function(e){return d.apply(this,arguments)})},{key:"getLogs",value:(s=l((function*(e){var r,n=e.page,t=void 0===n?1:n,c=e.pageSize,s=void 0===c?u.Z.itemsperpage.value:c;yield a.Z.wait4Init();try{r=yield a.Z.apiClient.AdministrationController_ListLogs({pageSize:s,page:t})}catch(e){return new i.Z({code:i.G.ERROR,error:e})}switch(r.status){case 200:return new i.Z({code:i.G.OK,payload:r.data});case 409:var d=r.data;return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_LOGS_IO_ERROR,{errorMessage:d},r)});default:return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.UNHANDLED_RESPONSE,{axiosResponse:r},r)})}})),function(e){return s.apply(this,arguments)})},{key:"getLog",value:(t=l((function*(e){var r;yield a.Z.wait4Init();try{r=yield a.Z.apiClient.AdministrationController_GetLog({path:e})}catch(e){return new i.Z({code:i.G.ERROR,error:e})}switch(r.status){case 200:var n=yield c.Z.Download(r.data.fileTicket);if(n.code===i.G.OK){var t=Object.assign({content:n.payload},r.data);return new i.Z({code:i.G.OK,payload:t})}return new i.Z({code:i.G.ERROR,error:n.error});case 409:var u=r.data;return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.ADMIN_LOGS_IO_ERROR,{errorMessage:u},r)});default:return new i.Z({code:i.G.ERROR,error:new o.ZP(o.jK.UNHANDLED_RESPONSE,{axiosResponse:r},r)})}})),function(e){return t.apply(this,arguments)})}],n&&f(r.prototype,n),_}(t.S))}}]);
//# sourceMappingURL=820.1550693ec3dee839c03a.js.map