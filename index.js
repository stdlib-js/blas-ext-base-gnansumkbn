// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return e!=e}function c(e){return Math.abs(e)}function _(e,t,r){var n,o,i,u,a,l;if(e<=0)return 0;if(1===e||0===r)return f(t[0])?0:t[0];for(o=r<0?(1-e)*r:0,n=0,a=0,l=0;l<e;l++)!1===f(i=t[o])&&(u=n+i,c(n)>=c(i)?a+=n-u+i:a+=i-u+n,n=u),o+=r;return n+a}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&u&&u.call(e,t,r.set),e},e(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){var o,i,u,a,l,_;if(e<=0)return 0;if(1===e||0===r)return f(t[n])?0:t[n];for(i=n,o=0,l=0,_=0;_<e;_++)!1===f(u=t[i])&&(a=o+u,c(o)>=c(u)?l+=o-a+u:l+=u-a+o,o=a),i+=r;return o+l}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).gnansumkbn=t();
//# sourceMappingURL=index.js.map