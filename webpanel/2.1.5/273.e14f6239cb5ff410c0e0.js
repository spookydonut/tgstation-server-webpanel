(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[273],{17273:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(67814),o=n(67294),a=n(35005),c=n(32258),l=n(94716),u=n(62318),i=n(86828),s=n(43489),f=n(44012),p=n(7205),m=n(42078);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(P,e);var t,n,y,v,O=(y=P,v=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(y);if(v){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function P(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,P),(t=O.call(this,e)).save=t.save.bind(x(t)),t.state={values:{}},t}return t=P,(n=[{key:"save",value:function(){m.Z.saveconfig(this.state.values),this.setState({values:{}})}},{key:"render",value:function(){var e=this,t=Object.entries(p.Z);return o.createElement(o.Fragment,null,t.map((function(t){var n,a=g(t,2),p=a[0],m=a[1],y=p,v=o.createRef(),O=o.createRef(),w=e.state.values[y]||m,E=function(){e.setState((function(t){var n=e.state.values[y]?d({},e.state.values[y]):d({},m);return n.value="enum"===w.type?O.current.selectedOptions[0].value:"bool"===w.type?v.current.checked:v.current.value,{values:d(d({},t.values),{},h({},y,n))}}))},j=Math.random().toString();return o.createElement(u.Z,{key:w.id},o.createElement(u.Z.Prepend,{className:"w-40 flex-grow-1 flex-xl-grow-0 overflow-auto mb-2 mb-xl-0"},o.createElement(i.Z,{overlay:(n=w.id+".desc",o.createElement(s.Z,{id:n},o.createElement(f.Z,{id:n})))},(function(t){var n=t.ref,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,["ref"]);return o.createElement(u.Z.Text,b({className:"flex-fill ".concat(e.state.values[y]?"font-weight-bold":"")},a),o.createElement(f.Z,{id:w.id}),o.createElement("div",{className:"ml-auto",ref:n},o.createElement(r.G,{fixedWidth:!0,icon:"info"})))}))),o.createElement("div",{className:"flex-grow-1 w-100 w-xl-auto d-flex mb-3 mb-xl-0"},"enum"===w.type?o.createElement("select",{className:"flex-fill mb-0 ".concat(e.state.values[y]?"font-weight-bold":""),ref:O,onChange:E,defaultValue:w.value},Object.values(w.possibleValues).map((function(e){return o.createElement(f.Z,{key:e,id:"".concat(w.id,".enum.").concat(e)},(function(t){return o.createElement("option",{value:e},t)}))}))):"bool"===w.type?o.createElement("label",{htmlFor:j,className:"d-flex justify-content-center align-content-center flex-grow-1 w-100 w-xl-auto mb-0"},o.createElement(c.Z.Check,{inline:!0,type:"switch",custom:!0,id:j,className:"m-auto",label:"",ref:v,onChange:E,checked:w.value})):o.createElement(l.Z,{custom:!0,type:"num"===w.type?"number":"pwd"===w.type?"password":"text",className:"flex-fill mb-0 ".concat(e.state.values[y]?"font-weight-bold":""),min:"num"===w.type?w.min:void 0,max:"num"===w.type?w.max:void 0,ref:v,onChange:E,value:w.value}),e.state.values[y]?o.createElement(u.Z.Append,{onClick:function(){e.setState((function(e){for(var t={},n=0,r=Object.entries(e.values);n<r.length;n++){var o=g(r[n],2),a=o[0],c=o[1];a!==y&&(t[a]=c)}return{values:t}}))}},o.createElement(u.Z.Text,null,o.createElement(r.G,{fixedWidth:!0,icon:"undo"}))):""))})),o.createElement("br",null),o.createElement("div",{className:"text-center"},o.createElement(a.Z,{className:"px-5",onClick:this.save,disabled:!Object.keys(this.state.values).length},o.createElement(f.Z,{id:"generic.save"}))))}}])&&w(t.prototype,n),P}(o.Component)},62318:function(e,t,n){"use strict";var r=n(19756),o=n(22122),a=n(94184),c=n.n(a),l=n(67294),u=n(44680),i=n(76792),s=(0,u.Z)("input-group-append"),f=(0,u.Z)("input-group-prepend"),p=(0,u.Z)("input-group-text",{Component:"span"}),m=l.forwardRef((function(e,t){var n=e.bsPrefix,a=e.size,u=e.className,s=e.as,f=void 0===s?"div":s,p=(0,r.Z)(e,["bsPrefix","size","className","as"]);return n=(0,i.vE)(n,"input-group"),l.createElement(f,(0,o.Z)({ref:t},p,{className:c()(u,n,a&&n+"-"+a)}))}));m.displayName="InputGroup";var y=(0,o.Z)({},m,{Text:p,Radio:function(e){return l.createElement(p,null,l.createElement("input",(0,o.Z)({type:"radio"},e)))},Checkbox:function(e){return l.createElement(p,null,l.createElement("input",(0,o.Z)({type:"checkbox"},e)))},Append:s,Prepend:f});t.Z=y}}]);
//# sourceMappingURL=273.e14f6239cb5ff410c0e0.js.map