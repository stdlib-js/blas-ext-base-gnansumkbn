"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var g=q(function(F,y){
var l=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist');function P(e,r,n,c){var i,s,a,t,u,v,f,o;if(i=r.data,s=r.accessors[0],t=c,n===0)return l(s(i,t))?0:e*s(i,t);for(a=0,f=0,o=0;o<e;o++)u=s(i,t),l(u)===!1&&(v=a+u,m(a)>=m(u)?f+=a-v+u:f+=u-v+a,a=v),t+=n;return a+f}y.exports=P
});var b=q(function(G,x){
var R=require('@stdlib/array-base-arraylike2object/dist'),k=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist'),h=g();function w(e,r,n,c){var i,s,a,t,u,v,f;if(e<=0)return 0;if(v=R(r),v.accessorProtocol)return h(e,v,n,c);if(s=c,n===0)return k(r[s])?0:e*r[s];for(i=0,u=0,f=0;f<e;f++)a=r[s],k(a)===!1&&(t=i+a,p(i)>=p(a)?u+=i-t+a:u+=a-t+i,i=t),s+=n;return i+u}x.exports=w
});var j=q(function(H,d){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=b();function B(e,r,n){return A(e,r,n,z(e,n))}d.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=j(),D=b();C(O,"ndarray",D);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
