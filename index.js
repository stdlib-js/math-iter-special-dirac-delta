// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterDiracDelta=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,a=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(c.call(t,r)||a.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=r;function f(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[j],r=m(t,j);try{t[j]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[j]=e:delete t[j],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function O(t){return p(t)||h(t)}function S(){return new Function("return this;")()}f(O,"isPrimitive",p),f(O,"isObject",h);var E="object"==typeof self?self:null,P="object"==typeof window?window:null,T="object"==typeof global?global:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(P)return P;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),A=N.document&&N.document.childNodes,x=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;f(V,"REGEXP",B);var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function I(t){return null!==t&&"object"==typeof t}function k(t){var r,e,n,o;if(("Object"===(e=g(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=B.exec(n.toString()))return r[1]}return I(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}f(I,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!F(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(I));var C="function"==typeof y||"object"==typeof x||"function"==typeof A?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};function G(t){return"function"===C(t)}function L(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&G(t.next)}function D(t){return"number"==typeof t}var M=Number,R=M.prototype.toString;var U=s();function X(t){return"object"==typeof t&&(t instanceof M||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function Y(t){return D(t)||X(t)}f(Y,"isPrimitive",D),f(Y,"isObject",X);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,H=Object.getPrototypeOf;z=G(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!F(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&G(r.constructor)&&"[object Function]"===g(r.constructor)&&m(r,"isPrototypeOf")&&G(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function W(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,e){var n,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!G(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(n={invalid:NaN},arguments.length>2&&(u=W(n,e)))throw u;return f(o={},"next",c),f(o,"return",a),q&&G(t[q])&&f(o,q,l),o;function c(){var e;return i?{done:!0}:(e=t.next()).done?(i=!0,e):{value:D(e.value)?r(e.value):n.invalid,done:!1}}function a(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return Z(t[q](),r,n)}}var $=Number.POSITIVE_INFINITY;function tt(t){return function(t){return t!=t}(t)?NaN:0===t?$:0}return function(t){return Z(t,tt)}}));
//# sourceMappingURL=index.js.map
