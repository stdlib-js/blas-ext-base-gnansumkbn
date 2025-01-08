"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=o(function(j,m){
var q=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-abs/dist');function p(e,r,i,l){var a,u,n,t,s,v;if(e<=0)return 0;if(u=l,i===0)return q(r[u])?0:e*r[u];for(a=0,s=0,v=0;v<e;v++)n=r[u],q(n)===!1&&(t=a+n,c(a)>=c(n)?s+=a-t+n:s+=n-t+a,a=t),u+=i;return a+s}m.exports=p
});var b=o(function(w,y){
var g=require('@stdlib/strided-base-stride2offset/dist'),k=f();function x(e,r,i){return k(e,r,i,g(e,i))}y.exports=x
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),R=f();O(d,"ndarray",R);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
