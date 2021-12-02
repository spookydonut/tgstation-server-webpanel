"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[791],{8425:function(e,t,r){r.d(t,{t:function(){return u}});var n=r(7294),a=r(5171),o=r.n(a),s=r(7961);function i(e){return n.createElement(o(),{src:e.obj,name:"JSON",theme:"tube",iconStyle:"triangle",collapsed:!0,displayDataTypes:!1})}function u(e){return s.ZP.showjson.value?n.createElement("div",{className:"text-left"},n.createElement(i,{obj:e.obj})):n.createElement(n.Fragment,null)}},1791:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n=r(5861),a=r(7326),o=r(1721),s=r(7757),i=r.n(s),u=r(7294),c=r(5005),l=r(1555),d=r(4716),p=r(2318),m=r(5293),f=r(3489),v=r(4012),h=r(724),b=r.n(h),E=r(5977),g=r(2480),w=r(6846),y=r(3803),Z=r(5631),k=r(6942),x=r(4615),S=r(7162),R=r(7347),O=r(2638),A=r(2527),C=r(7961),L=r(6755);function N(e,t,r){return j.apply(this,arguments)}function j(){return(j=(0,n.Z)(i().mark((function e(t,r,n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.endpoint.merge(r,n),C.ZP.githubtoken.value&&(a.headers.authorization="token "+C.ZP.githubtoken.value),e.abrupt("return",t(a));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return P.apply(this,arguments)}function P(){return(P=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C.ZP.githubtoken.value){e.next=4;break}return e.abrupt("return",{type:"token",tokenType:"pat",token:C.ZP.githubtoken.value});case 4:return e.abrupt("return",{type:"unauthenticated"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(){return Object.assign(I.bind(null),{hook:N.bind(null)})},V=new(function(e){function t(){var t;(t=e.call(this)||this).apiClient=void 0;var r=O.v.plugin(S.X,R.O);return t.apiClient=new r({authStrategy:G,userAgent:"tgstation-server-control-panel/"+L.q4,baseUrl:"https://api.github.com",throttle:{onRateLimit:function(e,t){return console.warn("Request quota exhausted for request "+t.method+" "+t.url),0===t.request.retryCount&&(console.log("Retrying after "+e+" seconds!"),!0)},onAbuseLimit:function(e,t){console.warn("Abuse detected for request "+t.method+" "+t.url)}}}),t}return(0,o.Z)(t,e),t.prototype.getVersions=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,o,s,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.owner,n=t.repo,a=t.current,o=t.all,u=0,e.prev=2,e.next=5,this.apiClient.paginate(this.apiClient.repos.listReleases,{owner:r,repo:n},(function(e,t){return e.data.reduce((function(e,r){var n,s,i=/tgstation-server-v([\d.]+)/.exec(null!=(n=r.name)?n:"");if(!i)return e;if("4"!==i[1][0])return e;var c=i[1],l=!1;if(c<=a){if(u>=3&&!o)return t(),e;u++,l=!0}return e.push({version:c,body:null!=(s=r.body)?s:"",current:c===a,old:l}),e}),[])}));case 5:s=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",new y.Z({code:y.G.ERROR,error:new w.ZP(w.jK.GITHUB_FAIL,{jsError:e.t0})}));case 11:return e.abrupt("return",new y.Z({code:y.G.OK,payload:s}));case 12:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),t}(A.TypedEmitter)),_=V,U=r(1320),q=r(3e3),F=r(8425),K=r(5855);function T(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=function(e){function t(t){var r;return(r=e.call(this,t)||this).loadNotes=r.loadNotes.bind((0,a.Z)(r)),r.updateServer=r.updateServer.bind((0,a.Z)(r)),r.state={versions:[],errors:[],loading:!0},r}(0,o.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=[]).push(this.loadVersions()),e.next=4,Promise.all(t);case 4:this.setState({loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.componentWillUnmount=function(){this.state.timer&&window.clearInterval(this.state.timer)},r.addError=function(e){this.setState((function(t){var r=Array.from(t.errors);return r.push(e),{errors:r}}))},r.loadVersions=function(){var e=(0,n.Z)(i().mark((function e(){var t,r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.Z.getAdminInfo();case 2:t=e.sent,e.t0=t.code,e.next=e.t0===y.G.ERROR?6:e.t0===y.G.OK?7:24;break;case 6:return e.abrupt("return",this.addError(t.error));case 7:if(r=t.payload.trackedRepositoryUrl,n=/https?:\/\/(github\.com)\/(.*?)\/(.*)/.exec(r)){e.next=12;break}return e.abrupt("return",this.addError(new w.ZP(w.jK.APP_FAIL,{jsError:Error("Unknown repository url format: "+r)})));case 12:if("github.com"===n[1]){e.next=15;break}return this.setState({versions:[{body:"Updates unavailable to non github repos",version:"Updates unavailable to non github repos",current:!0,old:!0}]}),e.abrupt("return");case 15:return e.next=17,_.getVersions({owner:n[2],repo:n[3],current:this.context.serverInfo.version,all:!!this.props.match.params.all});case 17:a=e.sent,console.log("Version info: ",a),e.t1=a.code,e.next=e.t1===y.G.ERROR?22:e.t1===y.G.OK?23:24;break;case 22:return e.abrupt("return",this.addError(a.error));case 23:this.setState({versions:a.payload});case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.loadNotes=function(){for(var e,t=this,r=T(this.state.versions);!(e=r()).done;){var n=e.value;if(n.version===this.state.selectedOption){var a=window.setInterval((function(){t.setState((function(e){return void 0===e.secondsLeft||null===e.secondsLeft?e:1===e.secondsLeft?(window.clearInterval(e.timer),{timer:null,secondsLeft:null}):{secondsLeft:e.secondsLeft-1}}))}),1e3);return void this.setState({selectedVersion:n,timer:a,secondsLeft:10})}}},r.updateServer=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.selectedOption){e.next=4;break}return console.error("Attempted to update server to a no version"),this.setState({selectedVersion:void 0}),e.abrupt("return");case 4:return e.next=6,g.Z.updateServer(this.state.selectedOption);case 6:t=e.sent,e.t0=t.code,e.next=e.t0===y.G.ERROR?10:e.t0===y.G.OK?12:15;break;case 10:return this.addError(t.error),e.abrupt("break",15);case 12:Z.Z.autoLogin=!1,window.setInterval((0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.Z.getCurrentUser(!0);case 2:if(e.sent.code===y.G.ERROR)window.location.reload();case 4:case"end":return e.stop()}}),e)}))),2e3),this.setState({updating:!0});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.render=function(){var e=this;if(this.state.updating)return u.createElement(K.Z,{text:"loading.updating"});if(this.state.loading)return u.createElement(K.Z,{text:"loading.version"});var t=function(t){e.setState({selectedOption:t.target.value})},r="number"==typeof this.state.secondsLeft;return u.createElement(u.Fragment,null,u.createElement(F.t,{obj:this.state.versions}),u.createElement("div",{className:"text-center"},this.state.errors.map((function(t,r){if(t)return u.createElement(q.ZP,{key:r,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[r]=void 0,{errors:t}}))}})}))),this.state.selectedVersion?u.createElement(u.Fragment,null,u.createElement("div",{className:"text-center"},u.createElement(c.Z,{className:"mr-3",onClick:function(){return e.setState({selectedVersion:void 0})}},u.createElement(v.Z,{id:"generic.goback"})),u.createElement(m.Z,{overlay:u.createElement(f.Z,{id:"timing-tooltip"},u.createElement(v.Z,{id:"view.admin.update.wait"})),show:r},u.createElement(c.Z,{onClick:this.updateServer,disabled:r},u.createElement(v.Z,{id:"generic.continue"}),r?" ["+this.state.secondsLeft+"]":"")),u.createElement("h3",null,u.createElement(v.Z,{id:"view.admin.update.releasenotes"})),u.createElement("hr",null)),u.createElement(b(),{source:this.state.selectedVersion.body})):u.createElement("div",{className:"text-center"},u.createElement("h3",{className:"mb-4"},u.createElement(v.Z,{id:"view.admin.update.selectversion"})),u.createElement(l.Z,{xs:8,md:6,className:"mx-auto"},this.state.versions.map((function(r,n){return u.createElement(p.Z,{className:"mb-3",key:r.version},u.createElement(p.Z.Prepend,null,u.createElement(p.Z.Radio,{id:r.version,name:"version",disabled:r.current,value:r.version,checked:e.state.selectedOption===r.version,onChange:t})),u.createElement(d.Z,{as:"label",htmlFor:r.version,disabled:!0},r.version,r.current?u.createElement(v.Z,{id:"view.admin.update.current"}):"",0==n?u.createElement(v.Z,{id:"view.admin.update.latest"}):""))})),u.createElement(c.Z,{variant:"link",onClick:function(){var t;e.props.history.push((null!=(t=U.$w.admin_update.link)?t:U.$w.admin_update.route)+"all/",{reload:!0})},disabled:!!this.props.match.params.all},u.createElement(v.Z,{id:"view.admin.update.showall"})),u.createElement("br",null),u.createElement(c.Z,{onClick:this.loadNotes,disabled:!this.state.selectedOption},u.createElement(v.Z,{id:"generic.continue"})))))},t}(u.Component);D.contextType=x.f;var M=(0,E.EN)(D)}}]);
//# sourceMappingURL=791.adfd4bf3a772d5eacacf.bundle.js.map