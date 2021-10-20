"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[478],{80478:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r,o,a=n(67294),i=n(5977),u=n(48155),l=n(15402),c=n(38592),f=n(49896),s=n(42540),d=n(43307),y=n(67814),m=n(35005),p=n(32258),v=n(62318),b=n(15293),h=n(43489),g=n(44012),O=["ref"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){e.Boolean="boolean",e.Number="number",e.String="string",e.Password="password",e.Enum="enum"}(o||(o={}));var P=a.forwardRef((function(e,t){return a.createElement(p.Z.Control,{value:e.value,onChange:function(t){return e.onChange(t.target.value)},disabled:e.disabled,ref:t})})),C=a.forwardRef((function(e,t){return a.createElement(p.Z.Control,{value:e.value,onChange:function(t){return e.onChange(t.target.value)},disabled:e.disabled,type:"password",ref:t})})),x=a.forwardRef((function(e,t){var n=Math.random().toString();return a.createElement("label",{htmlFor:n,className:"d-flex m-0 flex-grow-1 justify-content-center align-content-center"},a.createElement(p.Z.Check,{id:n,checked:e.value,onChange:function(t){return e.onChange(t.target.checked)},type:"switch",className:"m-auto",disabled:e.disabled,ref:t}))})),k=a.forwardRef((function(e,t){return a.createElement(p.Z.Control,{value:e.value,onChange:function(t){return e.onChange(isNaN(t.target.valueAsNumber)?t.target.value:t.target.valueAsNumber)},disabled:e.disabled,min:e.min,max:e.max,type:"number",ref:t})})),Z=a.forwardRef((function(e,t){return a.createElement(p.Z.Control,{value:e.value,onChange:function(t){return e.onChange(parseInt(t.target.value))},disabled:e.disabled,as:"select",custom:!0,ref:t},Object.entries(e.enum).filter((function(e){var t=j(e,1)[0];return isNaN(parseInt(t))})).map((function(t){var n=j(t,2),r=n[0],o=n[1];return a.createElement(g.Z,{id:"".concat(e.name,".").concat(r),key:r},(function(e){return a.createElement("option",{key:o,value:o},e)}))})))})),N=(E(r={},o.Enum,0),E(r,o.Number,0),E(r,o.Boolean,!1),E(r,o.String,""),E(r,o.Password,""),r);function I(e){var t,n,r,i=j((0,a.useState)(null!==(t=e.defaultValue)&&void 0!==t?t:N[e.type]),2),u=i[0],l=i[1],c=(0,a.useRef)(null);(0,a.useEffect)((function(){var t;l(null!==(t=e.defaultValue)&&void 0!==t?t:N[e.type])}),[e.defaultValue]),(0,a.useEffect)((function(){c.current&&(c.current.checkValidity()?c.current.classList.remove("is-invalid"):c.current.classList.add("is-invalid")),s(u)}),[u]);var f,s=function(t){var n,r,a,i,u,l;switch(e.type){case o.Boolean:return void e.onChange(t,null===(n=null===(r=c.current)||void 0===r?void 0:r.checkValidity())||void 0===n||n);case o.Number:return void e.onChange(t,null===(a=null===(i=c.current)||void 0===i?void 0:i.checkValidity())||void 0===a||a);case o.String:case o.Password:case o.Enum:return void e.onChange(t,null===(u=null===(l=c.current)||void 0===l?void 0:l.checkValidity())||void 0===u||u)}},d=(E(n={string:P,password:C,boolean:x},o.Number,void 0),E(n,o.Enum,void 0),n),p=null!==(r=u!=e.defaultValue)&&void 0!==r?r:N[e.type];return a.createElement(v.Z,null,a.createElement(b.Z,{overlay:(f=e.tooltip,f?a.createElement(h.Z,{id:f},a.createElement(g.Z,{id:f})):a.createElement(a.Fragment,null)),show:!!e.tooltip&&void 0},(function(t){var n=t.ref,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,O);return a.createElement(v.Z.Prepend,{className:"w-40"},a.createElement(v.Z.Text,w({className:"flex-grow-1"},r),a.createElement("span",{className:p?"font-weight-bold":""},a.createElement(g.Z,{id:e.name})),e.tooltip?a.createElement("div",{className:"ml-auto",ref:n},a.createElement(y.G,{icon:"info"})):null))})),e.type===o.Number?a.createElement(k,{value:u,onChange:function(e){return l(e)},name:e.name,disabled:e.disabled,max:e.max,min:e.min,ref:c}):e.type===o.Enum?a.createElement(Z,{value:u,onChange:function(e){return l(e)},name:e.name,enum:e.enum,disabled:e.disabled}):a.createElement(d[e.type],{value:u,onChange:function(e){return l(e)},disabled:e.disabled,name:e.type,ref:c}),a.createElement(v.Z.Append,null,a.createElement(m.Z,{style:{visibility:!p||e.disabled?"hidden":void 0},variant:"danger",onClick:function(){var t;return l(null!==(t=e.defaultValue)&&void 0!==t?t:N[e.type])}},a.createElement(y.G,{icon:"undo"}))))}var A=["disabled"];function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function _(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=L(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function U(e){var t=new Map,n=new Map,r=B((0,a.useState)({}),2),o=r[0],i=r[1];(0,a.useEffect)((function(){Object.keys(e.fields).forEach((function(e){i((function(t){return D(D({},t),{},T({},e,{}))}))}))}),[]),Object.entries(e.fields).forEach((function(e){var r,o=B(e,2),i=o[0],u=o[1];n.set(i,u),t.set(u,(0,a.useState)(null!==(r=u.defaultValue)&&void 0!==r?r:N[u.type]))}));var u,l=!1,c=!1,f=_(n);try{for(f.s();!(u=f.n()).done;){var s=B(u.value,2),d=s[0],y=s[1],p=B(t.get(y),1)[0],v=o[d];if(y.defaultValue!=p&&(l=!0),null!=v&&v.invalid&&(c=!0),l&&c)break}}catch(e){f.e(e)}finally{f.f()}return a.createElement("div",null,Object.entries(e.fields).map((function(n){var r=B(n,2),o=r[0],u=r[1],l=u.disabled,c=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(u,A);return a.createElement(I,V({key:o},c,{disabled:e.readOnly||l,onChange:function(e,n){t.get(u)[1](e),i((function(e){return D(D({},e),{},T({},o,D(D({},e[o]),{},{invalid:!n})))}))}}))})),a.createElement("div",{className:"text-center mt-2"},a.createElement(b.Z,{overlay:a.createElement(h.Z,{id:"form-invalid"},a.createElement(g.Z,{id:"generic.invalid_form"})),show:!!c&&void 0},a.createElement(m.Z,{variant:e.readOnly||c?"danger":"success",disabled:e.readOnly||!l||c,onClick:function(){var r,o={},a=_(n);try{for(a.s();!(r=a.n()).done;){var i=B(r.value,2),u=i[0],l=i[1],c=B(t.get(l),1)[0];(l.alwaysInclude||c!=l.defaultValue)&&(o[u]=c)}}catch(e){a.e(e)}finally{a.f()}e.onSave(o)}},a.createElement(g.Z,{id:"generic.save"})))))}function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t,n,r,o,a,i){try{var u=e[a](i),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,o)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},H(e,t)}function J(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Q(e)}function Q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(p,e);var t,n,r,i,f,y,m=(f=p,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(f);if(y){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=m.call(this,e)).editInstance=t.editInstance.bind(Q(t)),t.state={errors:[]},t}return t=p,n=[{key:"addError",value:function(e){this.setState((function(t){var n=Array.from(t.errors);return n.push(e),{errors:n}}))}},{key:"editInstance",value:(r=function*(e){var t=yield l.Z.editInstance($($({},e),{},{id:this.context.instance.id}));t.code===c.G.OK?this.context.reloadInstance():this.addError(t.error)},i=function(){var e=this,t=arguments;return new Promise((function(n,o){var a=r.apply(e,t);function i(e){q(a,n,o,i,u,"next",e)}function u(e){q(a,n,o,i,u,"throw",e)}i(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=function(t){return(0,s.D0)((0,s.Zg)(e.context.user),t)},n={name:{name:"fields.instance.name",type:o.String,defaultValue:this.context.instance.name,disabled:!t(u.c2.Rename)},path:{name:"fields.instance.path",type:o.String,defaultValue:this.context.instance.path,disabled:!t(u.c2.Relocate)},chatBotLimit:{name:"fields.instance.chatbotlimit",type:o.Number,min:0,defaultValue:this.context.instance.chatBotLimit,disabled:!t(u.c2.SetChatBotLimit)},autoUpdateInterval:{name:"fields.instance.autoupdate",type:o.Number,min:0,defaultValue:this.context.instance.autoUpdateInterval,disabled:!t(u.c2.SetAutoUpdate)},configurationType:{name:"fields.instance.filemode",type:o.Enum,enum:u.c7,defaultValue:this.context.instance.configurationType,disabled:!t(u.c2.SetConfiguration)}};return a.createElement("div",{className:"text-center"},this.state.errors.map((function(t,n){if(t)return a.createElement(d.Z,{key:n,error:t,onClose:function(){return e.setState((function(e){var t=Array.from(e.errors);return t[n]=void 0,{errors:t}}))}})})),a.createElement(U,{fields:n,onSave:this.editInstance}))}}],n&&z(t.prototype,n),p}(a.Component);X.contextType=f.g;var Y=(0,i.EN)(X)}}]);
//# sourceMappingURL=478.6383892e79912e37078c.js.map