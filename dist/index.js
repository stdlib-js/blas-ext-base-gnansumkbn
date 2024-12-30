"use strict";var c=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var o=c(function(w,m){
var q=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-abs/dist');function x(n,r,t){var e,a,u,i,v,s;if(n<=0)return 0;if(n===1||t===0)return q(r[0])?0:r[0];for(t<0?a=(1-n)*t:a=0,e=0,v=0,s=0;s<n;s++)u=r[a],q(u)===!1&&(i=e+u,l(e)>=l(u)?v+=e-i+u:v+=u-i+e,e=i),a+=t;return e+v}m.exports=x
});var g=c(function(z,y){
var b=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist');function O(n,r,t,e){var a,u,i,v,s,f;if(n<=0)return 0;if(n===1||t===0)return b(r[e])?0:r[e];for(u=e,a=0,s=0,f=0;f<n;f++)i=r[u],b(i)===!1&&(v=a+i,p(a)>=p(i)?s+=a-v+i:s+=i-v+a,a=v),u+=t;return a+s}y.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=o(),h=g();R(k,"ndarray",h);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
