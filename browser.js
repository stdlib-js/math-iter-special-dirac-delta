// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var e,n,a;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,a=parseInt(n,10),!isFinite(a)){if(!t(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===r.specifier||10!==e)&&(a=4294967295+a+1),a<0?(n=(-a).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=a.toString(e),a||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===u.call(r.specifier)?u.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,b,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,O=isNaN,T=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,u,f,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((u=parseInt(n.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(u)?String(n.arg):_(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,o;for(t=[],o=0,n=B.exec(r);n;)(e=r.slice(o,B.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),o=B.lastIndex,n=B.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){return"string"==typeof r}function P(r){var e,t,n;if(!A(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=k(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var F,I=Object.prototype,C=I.toString,L=I.__defineGetter__,N=I.__defineSetter__,R=I.__lookupGetter__,$=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(r,e,t.get),u&&N&&N.call(r,e,t.set),r};var M=F;function G(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=/./;function X(r){return"boolean"==typeof r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString,z=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&z.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,H="function"==typeof q?q.toStringTag:"",J=W()?function(r){var e,t,n;if(null==r)return D.call(r);t=r[H],e=Y(r,H);try{r[H]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[H]=t:delete r[H],n}:function(r){return D.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=W();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return X(r)||er(r)}function nr(){return new Function("return this;")()}G(tr,"isPrimitive",X),G(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,ar=function(r){if(arguments.length){if(!X(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;G(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var br=sr;function yr(r){return null!==r&&"object"==typeof r}var gr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr);function dr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=pr.exec(n.toString()))return e[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(yr,"isObjectLikeArray",gr);var vr="function"==typeof U||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?dr(r).toLowerCase():e};function hr(r){return"function"===vr(r)}var wr=/./;function mr(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function jr(r){return"boolean"==typeof r}var Er=Boolean.prototype.toString,_r=W();function Or(r){return"object"==typeof r&&(r instanceof K||(_r?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Tr(r){return jr(r)||Or(r)}function Sr(){return new Function("return this;")()}mr(Tr,"isPrimitive",jr),mr(Tr,"isObject",Or);var xr="object"==typeof self?self:null,Br="object"==typeof window?window:null,Vr="object"==typeof globalThis?globalThis:null,kr=function(r){if(arguments.length){if(!jr(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Sr()}if(Vr)return Vr;if(xr)return xr;if(Br)return Br;throw new Error("unexpected error. Unable to resolve global object.")}(),Ar=kr.document&&kr.document.childNodes,Pr=Int8Array;function Fr(){return/^\s*function\s*([^(]*)/i}var Ir=/^\s*function\s*([^(]*)/i;function Cr(r){return null!==r&&"object"==typeof r}mr(Fr,"REGEXP",Ir);var Lr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr);function Nr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ir.exec(n.toString()))return e[1]}return Cr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}mr(Cr,"isObjectLikeArray",Lr);var Rr="function"==typeof wr||"object"==typeof Pr||"function"==typeof Ar?function(r){return Nr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Nr(r).toLowerCase():e};function $r(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&function(r){return"function"===Rr(r)}(r.next)}function Mr(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Gr(r){return"number"==typeof r}var Ur=Number,Xr=Ur.prototype.toString,Zr=W();function Wr(r){return"object"==typeof r&&(r instanceof Ur||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Dr(r){return Gr(r)||Wr(r)}Mr(Dr,"isPrimitive",Gr),Mr(Dr,"isObject",Wr);var zr="function"==typeof q&&"symbol"==typeof q("foo")&&Y(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,Yr=/./;function qr(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Hr(r){return"boolean"==typeof r}var Jr=Boolean.prototype.toString,Kr=W();function Qr(r){return"object"==typeof r&&(r instanceof K||(Kr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function re(r){return Hr(r)||Qr(r)}function ee(){return new Function("return this;")()}qr(re,"isPrimitive",Hr),qr(re,"isObject",Qr);var te="object"==typeof self?self:null,ne="object"==typeof window?window:null,oe="object"==typeof globalThis?globalThis:null,ie=function(r){if(arguments.length){if(!Hr(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ee()}if(oe)return oe;if(te)return te;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ie.document&&ie.document.childNodes,ae=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var fe=/^\s*function\s*([^(]*)/i;function le(r){return null!==r&&"object"==typeof r}qr(ce,"REGEXP",fe);var se=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(le);function pe(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fe.exec(n.toString()))return e[1]}return le(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}qr(le,"isObjectLikeArray",se);var be="function"==typeof Yr||"object"==typeof ae||"function"==typeof ue?function(r){return pe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?pe(r).toLowerCase():e};function ye(r){return"function"===be(r)}var ge=Object,de=/./;function ve(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function he(r){return"boolean"==typeof r}var we=Boolean.prototype.toString,me=W();function je(r){return"object"==typeof r&&(r instanceof K||(me?function(r){try{return we.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Ee(r){return he(r)||je(r)}function _e(){return new Function("return this;")()}ve(Ee,"isPrimitive",he),ve(Ee,"isObject",je);var Oe="object"==typeof self?self:null,Te="object"==typeof window?window:null,Se="object"==typeof globalThis?globalThis:null,xe=function(r){if(arguments.length){if(!he(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _e()}if(Se)return Se;if(Oe)return Oe;if(Te)return Te;throw new Error("unexpected error. Unable to resolve global object.")}(),Be=xe.document&&xe.document.childNodes,Ve=Int8Array;function ke(){return/^\s*function\s*([^(]*)/i}var Ae=/^\s*function\s*([^(]*)/i;function Pe(r){return null!==r&&"object"==typeof r}ve(ke,"REGEXP",Ae);var Fe=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pe);function Ie(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ae.exec(n.toString()))return e[1]}return Pe(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ve(Pe,"isObjectLikeArray",Fe);var Ce,Le,Ne="function"==typeof de||"object"==typeof Ve||"function"==typeof Be?function(r){return Ie(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Ie(r).toLowerCase():e},Re=Object.getPrototypeOf;Le=Object.getPrototypeOf,Ce="function"===Ne(Le)?Re:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var $e=Ce,Me=Object.prototype;function Ge(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(e=function(r){return null==r?null:(r=ge(r),$e(r))}(r),!e||!Y(r,"constructor")&&Y(e,"constructor")&&ye(e.constructor)&&"[object Function]"===J(e.constructor)&&Y(e,"isPrototypeOf")&&ye(e.isPrototypeOf)&&(e===Me||function(r){var e;for(e in r)if(!Y(r,e))return!1;return!0}(r)))}function Ue(r,e){return Ge(e)?(Y(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Xe(r,e,t){var n,o,i,u;if(!$r(r))throw new TypeError(P("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!hr(e))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=Ue(n,t)))throw i;return G(o={},"next",a),G(o,"return",c),zr&&hr(r[zr])&&G(o,zr,f),o;function a(){var t;return u?{done:!0}:(t=r.next()).done?(u=!0,t):{value:Gr(t.value)?e(t.value):n.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Xe(r[zr](),e,n)}}var Ze=Number.POSITIVE_INFINITY;function We(r){return function(r){return r!=r}(r)?NaN:0===r?Ze:0}return function(r){return Xe(r,We)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterDiracDelta=e();
//# sourceMappingURL=browser.js.map
