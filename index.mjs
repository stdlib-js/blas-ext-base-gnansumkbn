// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";function n(r,n,s){var i,a,d,m,o,f;if(r<=0)return 0;if(1===r||0===s)return e(n[0])?0:n[0];for(a=s<0?(1-r)*s:0,i=0,o=0,f=0;f<r;f++)d=n[a],!1===e(d)&&(m=i+d,t(i)>=t(d)?o+=i-m+d:o+=d-m+i,i=m),a+=s;return i+o}function s(r,n,s,i){var a,d,m,o,f,l;if(r<=0)return 0;if(1===r||0===s)return e(n[i])?0:n[i];for(d=i,a=0,f=0,l=0;l<r;l++)m=n[d],!1===e(m)&&(o=a+m,t(a)>=t(m)?f+=a-o+m:f+=m-o+a,a=o),d+=s;return a+f}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
