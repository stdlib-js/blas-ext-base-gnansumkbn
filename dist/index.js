"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var g=q(function(F,y){
var l=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist');function P(e,r,t,c){var i,u,a,s,n,v,f,o;if(i=r.data,u=r.accessors[0],s=c,t===0)return l(u(i,s))?0:e*u(i,s);for(a=0,f=0,o=0;o<e;o++)n=u(i,s),l(n)===!1&&(v=a+n,m(a)>=m(n)?f+=a-v+n:f+=n-v+a,a=v),s+=t;return a+f}y.exports=P
});var b=q(function(G,x){
var R=require('@stdlib/array-base-arraylike2object/dist'),k=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist'),h=g();function w(e,r,t,c){var i,u,a,s,n,v,f;if(e<=0)return 0;if(v=R(r),v.accessorProtocol)return h(e,v,t,c);if(u=c,t===0)return k(r[u])?0:e*r[u];for(i=0,n=0,f=0;f<e;f++)a=r[u],k(a)===!1&&(s=i+a,p(i)>=p(a)?n+=i-s+a:n+=a-s+i,i=s),u+=t;return i+n}x.exports=w
});var j=q(function(H,d){
var z=require('@stdlib/strided-base-stride2offset/dist'),A=b();function B(e,r,t){return A(e,r,t,z(e,t))}d.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=j(),D=b();C(O,"ndarray",D);module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
