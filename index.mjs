// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";var n=e,s=t;var i=e,a=t;var d=function(r,e,t){var i,a,d,m,o,f;if(r<=0)return 0;if(1===r||0===t)return n(e[0])?0:e[0];for(a=t<0?(1-r)*t:0,i=0,o=0,f=0;f<r;f++)d=e[a],!1===n(d)&&(m=i+d,s(i)>=s(d)?o+=i-m+d:o+=d-m+i,i=m),a+=t;return i+o},m=function(r,e,t,n){var s,d,m,o,f,l;if(r<=0)return 0;if(1===r||0===t)return i(e[n])?0:e[n];for(d=n,s=0,f=0,l=0;l<r;l++)m=e[d],!1===i(m)&&(o=s+m,a(s)>=a(m)?f+=s-o+m:f+=m-o+s,s=o),d+=t;return s+f};r(d,"ndarray",m);var o=d;export{o as default,m as ndarray};
//# sourceMappingURL=index.mjs.map
