(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="186",ci={ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dd=0,Lc=1,Nd=2,hr=1,Id=2,or=3,ns=0,un=1,wn=2,hi=0,ur=1,Dc=2,Nc=3,Ic=4,Ud=5,Rs=100,Od=101,Fd=102,kd=103,Bd=104,zd=200,Hd=201,Gd=202,Vd=203,au=204,ou=205,Wd=206,Xd=207,qd=208,Yd=209,$d=210,Kd=211,Zd=212,Jd=213,Qd=214,Yo=0,$o=1,Ko=2,_r=3,Zo=4,Jo=5,Qo=6,jo=7,lu=0,jd=1,ef=2,$n=0,cu=1,hu=2,uu=3,Vl=4,du=5,fu=6,pu=7,mu=300,is=301,ks=302,eo=303,to=304,Fa=306,Ma=1e3,ai=1001,el=1002,qt=1003,tf=1004,Ur=1005,jt=1006,no=1007,Yi=1008,vn=1009,gu=1010,xu=1011,yr=1012,Wl=1013,Zn=1014,Un=1015,Jn=1016,Xl=1017,ql=1018,vr=1020,_u=35902,yu=35899,vu=1021,bu=1022,On=1023,pi=1026,$i=1027,Yl=1028,$l=1029,ss=1030,Kl=1031,Zl=1033,xa=33776,_a=33777,ya=33778,va=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37488,cl=37489,Ea=37490,hl=37491,ul=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,yl=37816,vl=37817,bl=37818,Sl=37819,wl=37820,Ml=37821,El=36492,Tl=36494,Al=36495,Rl=36283,Cl=36284,Ta=36285,Pl=36286,nf=3200,Ll=0,sf=1,Ci="",cn="srgb",Aa="srgb-linear",Ra="linear",yt="srgb",io=7680,rf=519,af=512,of=513,lf=514,Jl=515,cf=516,hf=517,Ql=518,uf=519,df=35044,Uc="300 es",Yn=2e3,br=2001;function ff(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pf(){const n=Sr("canvas");return n.style.display="block",n}const Oc={};function Fc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Su(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=Su(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ct(...n){n=Su(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ds(...n){const e=n.join(" ");e in Oc||(Oc[e]=!0,Ve(...n))}function mf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const gf={[Yo]:$o,[Ko]:Qo,[Zo]:jo,[_r]:Jo,[$o]:Yo,[Qo]:Ko,[jo]:Zo,[Jo]:_r};class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kc=1234567;const Ns=Math.PI/180,wr=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function jl(n,e){return(n%e+e)%e}function xf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _f(n,e,t){return n!==e?(t-n)/(e-n):0}function dr(n,e,t){return(1-t)*n+t*e}function yf(n,e,t,i){return dr(n,e,1-Math.exp(-t*i))}function vf(n,e=1){return e-Math.abs(jl(n,e*2)-e)}function bf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Sf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mf(n,e){return n+Math.random()*(e-n)}function Ef(n){return n*(.5-Math.random())}function Tf(n){n!==void 0&&(kc=n);let e=kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Af(n){return n*Ns}function Rf(n){return n*wr}function Cf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Pf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Df(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+i)/2),c=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*c,l*u,l*d,o*h);break;case"YZY":n.set(l*d,o*c,l*u,o*h);break;case"ZXZ":n.set(l*u,l*d,o*c,o*h);break;case"XZX":n.set(o*c,l*p,l*f,o*h);break;case"YXY":n.set(l*f,o*c,l*p,o*h);break;case"ZYZ":n.set(l*p,l*f,o*c,o*h);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wu={DEG2RAD:Ns,RAD2DEG:wr,generateUUID:ls,clamp:je,euclideanModulo:jl,mapLinear:xf,inverseLerp:_f,lerp:dr,damp:yf,pingpong:vf,smoothstep:bf,smootherstep:Sf,randInt:wf,randFloat:Mf,randFloatSpread:Ef,seededRandom:Tf,degToRad:Af,radToDeg:Rf,isPowerOfTwo:Cf,ceilPowerOfTwo:Pf,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:an,denormalize:Cs},gc=class gc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gc.prototype.isVector2=!0;let re=gc;class Rn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==d||h!==f||c!==p){let g=l*d+h*f+c*p+u*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),A=Math.sin(S);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A,l=l*m+d*o,h=h*m+f*o,c=c*m+p*o,u=u*m+_*o}else{l=l*m+d*o,h=h*m+f*o,c=c*m+p*o,u=u*m+_*o;const S=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=S,h*=S,c*=S,u*=S}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+c*u+l*f-h*d,e[t+1]=l*p+c*d+h*u-o*f,e[t+2]=h*p+c*f+o*d-l*u,e[t+3]=c*p-o*u-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*f*p,this._y=h*f*u-d*c*p,this._z=h*c*p+d*f*u,this._w=h*c*u-d*f*p;break;case"YXZ":this._x=d*c*u+h*f*p,this._y=h*f*u-d*c*p,this._z=h*c*p-d*f*u,this._w=h*c*u+d*f*p;break;case"ZXY":this._x=d*c*u-h*f*p,this._y=h*f*u+d*c*p,this._z=h*c*p+d*f*u,this._w=h*c*u-d*f*p;break;case"ZYX":this._x=d*c*u-h*f*p,this._y=h*f*u+d*c*p,this._z=h*c*p-d*f*u,this._w=h*c*u+d*f*p;break;case"YZX":this._x=d*c*u+h*f*p,this._y=h*f*u+d*c*p,this._z=h*c*p-d*f*u,this._w=h*c*u-d*f*p;break;case"XZY":this._x=d*c*u-h*f*p,this._y=h*f*u-d*c*p,this._z=h*c*p+d*f*u,this._w=h*c*u+d*f*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-s*o,this._w=a*c-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xc=class xc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*i),c=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=s+l*u+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xc.prototype.isVector3=!0;let F=xc;const so=new F,Bc=new Rn,_c=class _c{constructor(e,t,i,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,h)}set(e,t,i,s,r,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],S=s[1],A=s[4],b=s[7],E=s[2],M=s[5],D=s[8];return r[0]=a*_+o*S+l*E,r[3]=a*g+o*A+l*M,r[6]=a*m+o*b+l*D,r[1]=h*_+c*S+u*E,r[4]=h*g+c*A+u*M,r[7]=h*m+c*b+u*D,r[2]=d*_+f*S+p*E,r[5]=d*g+f*A+p*M,r[8]=d*m+f*b+p*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+s*r*h-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*r,f=h*r-a*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(s*h-c*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(c*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-h*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ro.makeScale(e,t)),this}rotate(e){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ro.makeRotation(-e)),this}translate(e,t){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_c.prototype.isMatrix3=!0;let Ke=_c;const ro=new Ke,zc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nf(){const n={enabled:!0,workingColorSpace:Aa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Aa]:{primaries:e,whitePoint:i,transfer:Ra,toXYZ:zc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:zc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const ot=Nf();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class If{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Sr("canvas")),us.width=e.width,us.height=e.height;const s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uf=0;class ec{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ao(s[a].image)):r.push(ao(s[a]))}else r=ao(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?If.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Of=0;const oo=new F;class $t extends Oi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=ai,s=ai,r=jt,a=Yi,o=On,l=vn,h=$t.DEFAULT_ANISOTROPY,c=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=ls(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ma:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ma:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=mu;$t.DEFAULT_ANISOTROPY=1;const yc=class yc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,b=(f+1)/2,E=(m+1)/2,M=(c+d)/4,D=(u+_)/4,y=(p+g)/4;return A>b&&A>E?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=M/i,r=D/i):b>E?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=M/s,r=y/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=D/r,s=y/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-_)/S,this.z=(d-c)/S,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yc.prototype.isVector4=!0;let Pt=yc;class Ff extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new $t(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ec(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Ff{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mu extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kf extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Oa=class Oa{constructor(e,t,i,s,r,a,o,l,h,c,u,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,h,c,u,d,f,p,_,g)}set(e,t,i,s,r,a,o,l,h,c,u,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*c,f=a*u,p=o*c,_=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=f+p*h,t[5]=d-_*h,t[9]=-o*l,t[2]=_-d*h,t[6]=p+f*h,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,f=l*u,p=h*c,_=h*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,f=l*u,p=h*c,_=h*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*c,t[9]=_-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,f=a*u,p=o*c,_=o*u;t[0]=l*c,t[4]=p*h-f,t[8]=d*h+_,t[1]=l*u,t[5]=_*h+d,t[9]=f*h-p,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*h,p=o*l,_=o*h;t[0]=l*c,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*h,p=o*l,_=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+_,t[5]=a*c,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*c,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,zf)}lookAt(e,t,i){const s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),yi.crossVectors(i,gn),yi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),yi.crossVectors(i,gn)),yi.normalize(),Or.crossVectors(gn,yi),s[0]=yi.x,s[4]=Or.x,s[8]=gn.x,s[1]=yi.y,s[5]=Or.y,s[9]=gn.y,s[2]=yi.z,s[6]=Or.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],S=i[3],A=i[7],b=i[11],E=i[15],M=s[0],D=s[4],y=s[8],R=s[12],U=s[1],x=s[5],C=s[9],I=s[13],P=s[2],O=s[6],W=s[10],V=s[14],Q=s[3],N=s[7],z=s[11],K=s[15];return r[0]=a*M+o*U+l*P+h*Q,r[4]=a*D+o*x+l*O+h*N,r[8]=a*y+o*C+l*W+h*z,r[12]=a*R+o*I+l*V+h*K,r[1]=c*M+u*U+d*P+f*Q,r[5]=c*D+u*x+d*O+f*N,r[9]=c*y+u*C+d*W+f*z,r[13]=c*R+u*I+d*V+f*K,r[2]=p*M+_*U+g*P+m*Q,r[6]=p*D+_*x+g*O+m*N,r[10]=p*y+_*C+g*W+m*z,r[14]=p*R+_*I+g*V+m*K,r[3]=S*M+A*U+b*P+E*Q,r[7]=S*D+A*x+b*O+E*N,r[11]=S*y+A*C+b*W+E*z,r[15]=S*R+A*I+b*V+E*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],S=l*f-h*d,A=o*f-h*u,b=o*d-l*u,E=a*f-h*c,M=a*d-l*c,D=a*u-o*c;return t*(_*S-g*A+m*b)-i*(p*S-g*E+m*M)+s*(p*A-_*E+m*D)-r*(p*b-_*M+g*D)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10];return t*(a*c-o*h)-i*(r*c-o*l)+s*(r*h-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],S=t*o-i*a,A=t*l-s*a,b=t*h-r*a,E=i*l-s*o,M=i*h-r*o,D=s*h-r*l,y=c*_-u*p,R=c*g-d*p,U=c*m-f*p,x=u*g-d*_,C=u*m-f*_,I=d*m-f*g,P=S*I-A*C+b*x+E*U-M*R+D*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=(o*I-l*C+h*x)*O,e[1]=(s*C-i*I-r*x)*O,e[2]=(_*D-g*M+m*E)*O,e[3]=(d*M-u*D-f*E)*O,e[4]=(l*U-a*I-h*R)*O,e[5]=(t*I-s*U+r*R)*O,e[6]=(g*b-p*D-m*A)*O,e[7]=(c*D-d*b+f*A)*O,e[8]=(a*C-o*U+h*y)*O,e[9]=(i*U-t*C-r*y)*O,e[10]=(p*M-_*b+m*S)*O,e[11]=(u*b-c*M-f*S)*O,e[12]=(o*R-a*x-l*y)*O,e[13]=(t*x-i*R+s*y)*O,e[14]=(_*A-p*E-g*S)*O,e[15]=(c*E-u*A+d*S)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,u=o+o,d=r*h,f=r*c,p=r*u,_=a*c,g=a*u,m=o*u,S=l*h,A=l*c,b=l*u,E=i.x,M=i.y,D=i.z;return s[0]=(1-(_+m))*E,s[1]=(f+b)*E,s[2]=(p-A)*E,s[3]=0,s[4]=(f-b)*M,s[5]=(1-(d+m))*M,s[6]=(g+S)*M,s[7]=0,s[8]=(p+A)*D,s[9]=(g-S)*D,s[10]=(1-(d+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);const h=1/a,c=1/o,u=1/l;return Ln.elements[0]*=h,Ln.elements[1]*=h,Ln.elements[2]*=h,Ln.elements[4]*=c,Ln.elements[5]*=c,Ln.elements[6]*=c,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Yn,l=!1){const h=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Yn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===br)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Yn,l=!1){const h=this.elements,c=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Yn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===br)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=p,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Oa.prototype.isMatrix4=!0;let lt=Oa;const ds=new F,Ln=new lt,Bf=new F(0,0,0),zf=new F(1,1,1),yi=new F,Or=new F,gn=new F,Gc=new lt,Vc=new Rn;class Di{constructor(e=0,t=0,i=0,s=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-je(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hf=0;const Wc=new F,fs=new Rn,jn=new lt,Fr=new F,Js=new F,Gf=new F,Vf=new Rn,Xc=new F(1,0,0),qc=new F(0,1,0),Yc=new F(0,0,1),$c={type:"added"},Wf={type:"removed"},ps={type:"childadded",child:null},lo={type:"childremoved",child:null};class kt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new F,t=new Di,i=new Rn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Js,Fr,this.up):jn.lookAt(Fr,Js,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(jn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),ps.child=e,this.dispatchEvent(ps),ps.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wf),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new F(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ki extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xf={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(h,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,p=.005;h.inputState.pinching&&d>f+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ki;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ho(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=jl(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ho(a,r,e+1/3),this.g=ho(a,r,e),this.b=ho(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=cn){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=Eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return ot.workingToColorSpace(Jt.copy(this),e),Math.round(je(Jt.r*255,0,255))*65536+Math.round(je(Jt.g*255,0,255))*256+Math.round(je(Jt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=cn){ot.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,s=Jt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(kr);const i=dr(vi.h,kr.h,t),s=dr(vi.s,kr.s,t),r=dr(vi.l,kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ye;Ye.NAMES=Eu;class nc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=i}clone(){return new nc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qf extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Dn=new F,ei=new F,uo=new F,ti=new F,ms=new F,gs=new F,Kc=new F,fo=new F,po=new F,mo=new F,go=new Pt,xo=new Pt,_o=new Pt;class Mn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),ei.subVectors(i,t),uo.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(ei),l=Dn.dot(uo),h=ei.dot(ei),c=ei.dot(uo),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*l-o*c)*d,p=(a*c-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return go.setScalar(0),xo.setScalar(0),_o.setScalar(0),go.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,i),_o.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(go,r.x),a.addScaledVector(xo,r.y),a.addScaledVector(_o,r.z),a}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),ei.subVectors(e,t),Dn.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Dn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ms.subVectors(s,i),gs.subVectors(r,i),fo.subVectors(e,i);const l=ms.dot(fo),h=gs.dot(fo);if(l<=0&&h<=0)return t.copy(i);po.subVectors(e,s);const c=ms.dot(po),u=gs.dot(po);if(c>=0&&u<=c)return t.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(ms,a);mo.subVectors(e,r);const f=ms.dot(mo),p=gs.dot(mo);if(p>=0&&f<=p)return t.copy(r);const _=f*h-l*p;if(_<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(i).addScaledVector(gs,o);const g=c*p-f*u;if(g<=0&&u-c>=0&&f-p>=0)return Kc.subVectors(r,s),o=(u-c)/(u-c+(f-p)),t.copy(s).addScaledVector(Kc,o);const m=1/(g+_+d);return a=_*m,o=d*m,t.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),zr.subVectors(this.max,Qs),xs.subVectors(e.a,Qs),_s.subVectors(e.b,Qs),ys.subVectors(e.c,Qs),bi.subVectors(_s,xs),Si.subVectors(ys,_s),Hi.subVectors(xs,ys);let t=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-Hi.z,Hi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,Hi.z,0,-Hi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-Hi.y,Hi.x,0];return!yo(t,xs,_s,ys,zr)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,xs,_s,ys,zr))?!1:(Hr.crossVectors(bi,Si),t=[Hr.x,Hr.y,Hr.z],yo(t,xs,_s,ys,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new F,new F,new F,new F,new F,new F,new F,new F],Nn=new F,Br=new Fi,xs=new F,_s=new F,ys=new F,bi=new F,Si=new F,Hi=new F,Qs=new F,zr=new F,Hr=new F,Gi=new F;function yo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Gi.fromArray(n,r);const o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),h=t.dot(Gi),c=i.dot(Gi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Ft=new F,Gr=new re;let Yf=0;class tn extends Oi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=df,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Tu extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Au extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const $f=new Fi,js=new F,vo=new F;class qs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$f.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(js,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(vo)),this.expandByPoint(js.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Kf=0;const Sn=new lt,bo=new kt,vs=new F,xn=new Fi,er=new Fi,Wt=new F;class Dt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?Au:Tu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return bo.lookAt(e),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(xn.min,er.min),xn.expandByPoint(Wt),Wt.addVectors(xn.max,er.max),xn.expandByPoint(Wt)):(xn.expandByPoint(er.min),xn.expandByPoint(er.max))}xn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Wt.fromBufferAttribute(o,h),l&&(vs.fromBufferAttribute(e,h),Wt.add(vs)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new F,l[y]=new F;const h=new F,c=new F,u=new F,d=new re,f=new re,p=new re,_=new F,g=new F;function m(y,R,U){h.fromBufferAttribute(i,y),c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,U),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,U),c.sub(h),u.sub(h),f.sub(d),p.sub(d);const x=1/(f.x*p.y-p.x*f.y);isFinite(x)&&(_.copy(c).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(x),g.copy(u).multiplyScalar(f.x).addScaledVector(c,-p.x).multiplyScalar(x),o[y].add(_),o[R].add(_),o[U].add(_),l[y].add(g),l[R].add(g),l[U].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let y=0,R=S.length;y<R;++y){const U=S[y],x=U.start,C=U.count;for(let I=x,P=x+C;I<P;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const A=new F,b=new F,E=new F,M=new F;function D(y){E.fromBufferAttribute(s,y),M.copy(E);const R=o[y];A.copy(R),A.sub(E.multiplyScalar(E.dot(R))).normalize(),b.crossVectors(M,R);const x=b.dot(l[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,x)}for(let y=0,R=S.length;y<R;++y){const U=S[y],x=U.start,C=U.count;for(let I=x,P=x+C;I<P;I+=3)D(e.getX(I+0)),D(e.getX(I+1)),D(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,h=new F,c=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,g),o.add(c),l.add(c),h.add(c),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let m=0;m<c;m++)d[p++]=h[f++]}return new tn(d,c,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=e(l,i);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new F,Zf=new F,Jf=new Ke;class In{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=So.subVectors(i,t).cross(Zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(So),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jf.getNormalMatrix(e),s=this.coplanarPoint(So).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Qf=0;class Ys extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=ur,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=ou,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new In().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ii=new F,wo=new F,Vr=new F,Wr=new F;class ka{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wo.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(wo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Wr.dot(this.direction),l=-Wr.dot(Vr),h=Wr.lengthSq(),c=Math.abs(1-a*a);let u,d,f,p;if(c>0)if(u=a*l-o,d=a*o-l,p=r*c,u>=0)if(d>=-p)if(d<=p){const _=1/c;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wo).addScaledVector(Vr,d),f}intersectSphere(e,t){if(e.radius<0)return null;ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=i.x-a.x,S=i.y-a.y,A=i.z-a.z,b=Math.abs(l),E=Math.abs(h),M=Math.abs(c);let D,y,R,U,x,C,I,P,O,W,V,Q;if(b>=E&&b>=M?(R=l,C=u,O=p,Q=m,l>=0?(D=h,y=c,U=d,x=f,I=_,P=g,W=S,V=A):(D=c,y=h,U=f,x=d,I=g,P=_,W=A,V=S)):E>=M?(R=h,C=d,O=_,Q=S,h>=0?(D=c,y=l,U=f,x=u,I=g,P=p,W=A,V=m):(D=l,y=c,U=u,x=f,I=p,P=g,W=m,V=A)):(R=c,C=f,O=g,Q=A,c>=0?(D=l,y=h,U=u,x=d,I=p,P=_,W=m,V=S):(D=h,y=l,U=d,x=u,I=_,P=p,W=S,V=m)),R===0)return null;const N=D/R,z=y/R,K=1/R,ye=U-N*C,pe=x-z*C,nt=I-N*O,Ze=P-z*O,it=W-N*Q,J=V-z*Q,ie=it*Ze-J*nt,Se=ye*J-pe*it,We=nt*pe-Ze*ye;if(s){if(ie<0||Se<0||We<0)return null}else if((ie<0||Se<0||We<0)&&(ie>0||Se>0||We>0))return null;const Ae=ie+Se+We;if(Ae===0)return null;const Xe=K*(ie*C+Se*O+We*Q);return(Ae>0?Xe<0:Xe>0)?null:this.at(Xe/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ki extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zc=new lt,Vi=new ka,Xr=new qs,Jc=new F,qr=new F,Yr=new F,$r=new F,Mo=new F,Kr=new F,Qc=new F,Zr=new F;class Ut extends kt{constructor(e=new Dt,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],u=r[l];c!==0&&(Mo.fromBufferAttribute(u,e),a?Kr.addScaledVector(Mo,c):Kr.addScaledVector(Mo.sub(t),c))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(Xr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Xr,Jc)===null||Vi.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Zc.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Zc),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,E=A;b<E;b+=3){const M=o.getX(b),D=o.getX(b+1),y=o.getX(b+2);s=Jr(this,m,e,i,h,c,u,M,D,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const S=o.getX(g),A=o.getX(g+1),b=o.getX(g+2);s=Jr(this,a,e,i,h,c,u,S,A,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,E=A;b<E;b+=3){const M=b,D=b+1,y=b+2;s=Jr(this,m,e,i,h,c,u,M,D,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const S=g,A=g+1,b=g+2;s=Jr(this,a,e,i,h,c,u,S,A,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function jf(n,e,t,i,s,r,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ns,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Zr);return h<t.near||h>t.far?null:{distance:h,point:Zr.clone(),object:n}}function Jr(n,e,t,i,s,r,a,o,l,h){n.getVertexPosition(o,qr),n.getVertexPosition(l,Yr),n.getVertexPosition(h,$r);const c=jf(n,e,t,i,qr,Yr,$r,Qc);if(c){const u=new F;Mn.getBarycoord(Qc,qr,Yr,$r,u),s&&(c.uv=Mn.getInterpolatedAttribute(s,o,l,h,u,new re)),r&&(c.uv1=Mn.getInterpolatedAttribute(r,o,l,h,u,new re)),a&&(c.normal=Mn.getInterpolatedAttribute(a,o,l,h,u,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:h,normal:new F,materialIndex:0};Mn.getNormal(qr,Yr,$r,d.normal),c.face=d,c.barycoord=u}return c}class Ru extends $t{constructor(e=null,t=1,i=1,s,r,a,o,l,h=qt,c=qt,u,d){super(null,a,o,l,h,c,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jc extends tn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new lt,eh=new lt,Qr=[],th=new Fi,ep=new lt,tr=new Ut,nr=new qs;class Pi extends Ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ep)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),th.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),nr.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(i),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),eh.multiplyMatrices(i,bs),tr.matrixWorld=eh,tr.raycast(e,Qr);for(let a=0,o=Qr.length;a<o;a++){const l=Qr[a];l.instanceId=r,l.object=this,t.push(l)}Qr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ru(new Float32Array(s*this.count),s,this.count,Yl,Un));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wi=new qs,tp=new re(.5,.5),jr=new F;class ic{constructor(e=new In,t=new In,i=new In,s=new In,r=new In,a=new In){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],S=r[12],A=r[13],b=r[14],E=r[15];if(s[0].setComponents(h-a,f-c,m-p,E-S).normalize(),s[1].setComponents(h+a,f+c,m+p,E+S).normalize(),s[2].setComponents(h+o,f+u,m+_,E+A).normalize(),s[3].setComponents(h-o,f-u,m-_,E-A).normalize(),i)s[4].setComponents(l,d,g,b).normalize(),s[5].setComponents(h-l,f-d,m-g,E-b).normalize();else if(s[4].setComponents(h-l,f-d,m-g,E-b).normalize(),t===Yn)s[5].setComponents(h+l,f+d,m+g,E+b).normalize();else if(t===br)s[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);const t=tp.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(jr.x=s.normal.x>0?e.max.x:e.min.x,jr.y=s.normal.y>0?e.max.y:e.min.y,jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dr extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new F,Pa=new F,nh=new lt,ir=new ka,ea=new qs,Eo=new F,ih=new F;class np extends kt{constructor(e=new Dt,t=new Dr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ca.fromBufferAttribute(t,s-1),Pa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new dt(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;nh.copy(s).invert(),ir.copy(e.ray).applyMatrix4(nh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=h){const m=c.getX(_),S=c.getX(_+1),A=ta(this,e,ir,l,m,S,_);A&&t.push(A)}if(this.isLineLoop){const _=c.getX(p-1),g=c.getX(f),m=ta(this,e,ir,l,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=h){const m=ta(this,e,ir,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=ta(this,e,ir,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ta(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ca.fromBufferAttribute(o,s),Pa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ca,Pa,Eo,ih)>i)return;Eo.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Eo);if(!(h<e.near||h>e.far))return{distance:h,point:ih.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const sh=new F,rh=new F;class sc extends np{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)sh.fromBufferAttribute(t,s),rh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sh.distanceTo(rh);e.setAttribute("lineDistance",new dt(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cu extends $t{constructor(e=[],t=is,i,s,r,a,o,l,h,c){super(e,t,i,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ip extends $t{constructor(e,t,i,s,r,a,o,l,h){super(e,t,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mr extends $t{constructor(e,t,i=Zn,s,r,a,o=qt,l=qt,h,c=pi,u=1){if(c!==pi&&c!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class sp extends Mr{constructor(e,t=Zn,i=is,s,r,a=qt,o=qt,l,h=pi){const c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,s,r,a,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Pu extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cn extends Dt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2));function p(_,g,m,S,A,b,E,M,D,y,R){const U=b/D,x=E/y,C=b/2,I=E/2,P=M/2,O=D+1,W=y+1;let V=0,Q=0;const N=new F;for(let z=0;z<W;z++){const K=z*x-I;for(let ye=0;ye<O;ye++){const pe=ye*U-C;N[_]=pe*S,N[g]=K*A,N[m]=P,h.push(N.x,N.y,N.z),N[_]=0,N[g]=0,N[m]=M>0?1:-1,c.push(N.x,N.y,N.z),u.push(ye/D),u.push(1-z/y),V+=1}}for(let z=0;z<y;z++)for(let K=0;K<D;K++){const ye=d+K+O*z,pe=d+K+O*(z+1),nt=d+(K+1)+O*(z+1),Ze=d+(K+1)+O*z;l.push(ye,pe,Ze),l.push(pe,nt,Ze),Q+=6}o.addGroup(f,Q,R),f+=Q,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hn extends Dt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],f=[];let p=0;const _=[],g=i/2;let m=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(c),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function S(){const b=new F,E=new F;let M=0;const D=(t-e)/i;for(let y=0;y<=r;y++){const R=[],U=y/r,x=U*(t-e)+e;for(let C=0;C<=s;C++){const I=C/s,P=I*l+o,O=Math.sin(P),W=Math.cos(P);E.x=x*O,E.y=-U*i+g,E.z=x*W,u.push(E.x,E.y,E.z),b.set(O,D,W).normalize(),d.push(b.x,b.y,b.z),f.push(I,1-U),R.push(p++)}_.push(R)}for(let y=0;y<s;y++)for(let R=0;R<r;R++){const U=_[R][y],x=_[R+1][y],C=_[R+1][y+1],I=_[R][y+1];(e>0||R!==0)&&(c.push(U,x,I),M+=3),(t>0||R!==r-1)&&(c.push(x,C,I),M+=3)}h.addGroup(m,M,0),m+=M}function A(b){const E=p,M=new re,D=new F;let y=0;const R=b===!0?e:t,U=b===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,g*U,0),d.push(0,U,0),f.push(.5,.5),p++;const x=p;for(let C=0;C<=s;C++){const P=C/s*l+o,O=Math.cos(P),W=Math.sin(P);D.x=R*W,D.y=g*U,D.z=R*O,u.push(D.x,D.y,D.z),d.push(0,U,0),M.x=O*.5+.5,M.y=W*.5*U+.5,f.push(M.x,M.y),p++}for(let C=0;C<s;C++){const I=E+C,P=x+C;b===!0?c.push(P,P+1,I):c.push(P+1,P,I),y+=3}h.addGroup(m,y,b===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Us extends hn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ba extends Dt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),h(i),c(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const A=new F,b=new F,E=new F;for(let M=0;M<t.length;M+=3)f(t[M+0],A),f(t[M+1],b),f(t[M+2],E),l(A,b,E,S)}function l(S,A,b,E){const M=E+1,D=[];for(let y=0;y<=M;y++){D[y]=[];const R=S.clone().lerp(b,y/M),U=A.clone().lerp(b,y/M),x=M-y;for(let C=0;C<=x;C++)C===0&&y===M?D[y][C]=R:D[y][C]=R.clone().lerp(U,C/x)}for(let y=0;y<M;y++)for(let R=0;R<2*(M-y)-1;R++){const U=Math.floor(R/2);R%2===0?(d(D[y][U+1]),d(D[y+1][U]),d(D[y][U])):(d(D[y][U+1]),d(D[y+1][U+1]),d(D[y+1][U]))}}function h(S){const A=new F;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(S),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function c(){const S=new F;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];const b=g(S)/2/Math.PI+.5,E=m(S)/Math.PI+.5;a.push(b,1-E)}p(),u()}function u(){for(let S=0;S<a.length;S+=6){const A=a[S+0],b=a[S+2],E=a[S+4],M=Math.max(A,b,E),D=Math.min(A,b,E);M>.9&&D<.1&&(A<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,A){const b=S*3;A.x=e[b+0],A.y=e[b+1],A.z=e[b+2]}function p(){const S=new F,A=new F,b=new F,E=new F,M=new re,D=new re,y=new re;for(let R=0,U=0;R<r.length;R+=9,U+=6){S.set(r[R+0],r[R+1],r[R+2]),A.set(r[R+3],r[R+4],r[R+5]),b.set(r[R+6],r[R+7],r[R+8]),M.set(a[U+0],a[U+1]),D.set(a[U+2],a[U+3]),y.set(a[U+4],a[U+5]),E.copy(S).add(A).add(b).divideScalar(3);const x=g(E);_(M,U+0,S,x),_(D,U+2,A,x),_(y,U+4,b,x)}}function _(S,A,b,E){E<0&&S.x===1&&(a[A]=S.x-1),b.x===0&&b.z===0&&(a[A]=E/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.vertices,e.indices,e.radius,e.detail)}}class rc extends Ba{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rc(e.radius,e.detail)}}const na=new F,ia=new F,To=new F,sa=new Mn;class Lu extends Dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ns*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(h[0]=a.getX(p),h[1]=a.getX(p+1),h[2]=a.getX(p+2)):(h[0]=p,h[1]=p+1,h[2]=p+2);const{a:_,b:g,c:m}=sa;if(_.fromBufferAttribute(o,h[0]),g.fromBufferAttribute(o,h[1]),m.fromBufferAttribute(o,h[2]),sa.getNormal(To),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const A=(S+1)%3,b=u[S],E=u[A],M=sa[c[S]],D=sa[c[A]],y=`${b}_${E}`,R=`${E}_${b}`;R in d&&d[R]?(To.dot(d[R].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(D.x,D.y,D.z)),d[R]=null):y in d||(d[y]={index0:h[S],index1:h[A],normal:To.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];na.fromBufferAttribute(o,_),ia.fromBufferAttribute(o,g),f.push(na.x,na.y,na.z),f.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new dt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const c=i[s],d=i[s+1]-c,f=(a-c)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new F,s=[],r=[],a=[],o=new F,l=new lt;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new F)}r[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ac extends Qn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rp extends ac{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function oc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,f*=c,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const ah=new F,oh=new F,Ao=new oc,Ro=new oc,Co=new oc;class ap extends Qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=s[(o-1)%r]:(oh.subVectors(s[0],s[1]).add(s[0]),h=oh);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(ah.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=ah),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(h.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(c),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Ao.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,p,_,g),Ro.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,p,_,g),Co.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,p,_,g)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),Ro.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Co.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return i.set(Ao.calc(l),Ro.calc(l),Co.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lh(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function op(n,e){const t=1-n;return t*t*e}function lp(n,e){return 2*(1-n)*n*e}function cp(n,e){return n*n*e}function fr(n,e,t,i){return op(n,e)+lp(n,t)+cp(n,i)}function hp(n,e){const t=1-n;return t*t*t*e}function up(n,e){const t=1-n;return 3*t*t*n*e}function dp(n,e){return 3*(1-n)*n*n*e}function fp(n,e){return n*n*n*e}function pr(n,e,t,i,s){return hp(n,e)+up(n,t)+dp(n,i)+fp(n,s)}class Du extends Qn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(pr(e,s.x,r.x,a.x,o.x),pr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pp extends Qn{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(pr(e,s.x,r.x,a.x,o.x),pr(e,s.y,r.y,a.y,o.y),pr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nu extends Qn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mp extends Qn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iu extends Qn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(fr(e,s.x,r.x,a.x),fr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gp extends Qn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(fr(e,s.x,r.x,a.x),fr(e,s.y,r.y,a.y),fr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uu extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],c=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(lh(o,l.x,h.x,c.x,u.x),lh(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var Dl=Object.freeze({__proto__:null,ArcCurve:rp,CatmullRomCurve3:ap,CubicBezierCurve:Du,CubicBezierCurve3:pp,EllipseCurve:ac,LineCurve:Nu,LineCurve3:mp,QuadraticBezierCurve:Iu,QuadraticBezierCurve3:gp,SplineCurve:Uu});class xp extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}}class ch extends xp{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Nu(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Iu(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Du(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Uu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const h=new ac(e,t,i,s,r,a,o,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class za extends ch{constructor(e){super(e),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ch().fromJSON(s))}return this}}function _p(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Ou(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h;if(i&&(r=wp(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let c=o,u=l;for(let d=t;d<s;d+=t){const f=n[d],p=n[d+1];f<o&&(o=f),p<l&&(l=p),f>c&&(c=f),p>u&&(u=p)}h=Math.max(c-o,u-l),h=h!==0?32767/h:0}return Er(r,a,t,o,l,h,0),a}function Ou(n,e,t,i,s){let r;if(s===Ip(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=hh(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=hh(a/i|0,n[a],n[a+1],r);return r&&Bs(r,r.next)&&(Ar(r),r=r.next),r}function rs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Bs(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Ar(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Er(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Rp(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,h=n.next;if(r?vp(n,i,s,r):yp(n)){e.push(l.i,n.i,h.i),Ar(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=bp(rs(n),e),Er(n,e,t,i,s,r,2)):a===2&&Sp(n,e,t,i,s,r):Er(rs(n),e,t,i,s,r,1);break}}}function yp(n){const e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=Math.min(s,r,a),u=Math.min(o,l,h),d=Math.max(s,r,a),f=Math.max(o,l,h);let p=i.next;for(;p!==e;){if(p.x>=c&&p.x<=d&&p.y>=u&&p.y<=f&&lr(s,o,r,l,a,h,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function vp(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Lt(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,c=s.y,u=r.y,d=a.y,f=Math.min(o,l,h),p=Math.min(c,u,d),_=Math.max(o,l,h),g=Math.max(c,u,d),m=Nl(f,p,e,t,i),S=Nl(_,g,e,t,i);let A=n.prevZ,b=n.nextZ;for(;A&&A.z>=m&&b&&b.z<=S;){if(A.x>=f&&A.x<=_&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&lr(o,c,l,u,h,d,A.x,A.y)&&Lt(A.prev,A,A.next)>=0||(A=A.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&lr(o,c,l,u,h,d,b.x,b.y)&&Lt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;A&&A.z>=m;){if(A.x>=f&&A.x<=_&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&lr(o,c,l,u,h,d,A.x,A.y)&&Lt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;b&&b.z<=S;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&lr(o,c,l,u,h,d,b.x,b.y)&&Lt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function bp(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Bs(i,s)&&ku(i,t,t.next,s)&&Tr(i,s)&&Tr(s,i)&&(e.push(i.i,t.i,s.i),Ar(t),Ar(t.next),t=n=s),t=t.next}while(t!==n);return rs(t)}function Sp(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lp(a,o)){let l=Bu(a,o);a=rs(a,a.next),l=rs(l,l.next),Er(a,e,t,i,s,r,0),Er(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function wp(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,h=Ou(n,o,l,i,!1);h===h.next&&(h.steiner=!0),s.push(Pp(h))}s.sort(Mp);for(let r=0;r<s.length;r++)t=Ep(s[r],t);return t}function Mp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ep(n,e){const t=Tp(n,e);if(!t)return e;const i=Bu(t,n);return rs(i,i.next),rs(t,t.next)}function Tp(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(Bs(n,t))return t;do{if(Bs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,h=a.y;let c=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Fu(s<h?i:r,s,l,h,s<h?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);Tr(t,n)&&(u<c||u===c&&(t.x>a.x||t.x===a.x&&Ap(a,t)))&&(a=t,c=u)}t=t.next}while(t!==o);return a}function Ap(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function Rp(n,e,t,i){let s=n;do s.z===0&&(s.z=Nl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Cp(s)}function Cp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let h=0;h<t&&(o++,a=a.nextZ,!!a);h++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Nl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Pp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fu(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function lr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Fu(n,e,t,i,s,r,a,o)}function Lp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Dp(n,e)&&(Tr(n,e)&&Tr(e,n)&&Np(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||Bs(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Bs(n,e){return n.x===e.x&&n.y===e.y}function ku(n,e,t,i){const s=aa(Lt(n,e,t)),r=aa(Lt(n,e,i)),a=aa(Lt(t,i,n)),o=aa(Lt(t,i,e));return!!(s!==r&&a!==o||s===0&&ra(n,t,e)||r===0&&ra(n,i,e)||a===0&&ra(t,n,i)||o===0&&ra(t,e,i))}function ra(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function aa(n){return n>0?1:n<0?-1:0}function Dp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ku(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Tr(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function Np(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Bu(n,e){const t=Il(n.i,n.x,n.y),i=Il(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function hh(n,e,t,i){const s=Il(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ar(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Il(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ip(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Up{static triangulate(e,t,i=2){return _p(e,t,i)}}class oi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return oi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];uh(e),dh(i,e);let a=e.length;t.forEach(uh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,dh(i,t[l]);const o=Up.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function uh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function dh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class lc extends Dt{constructor(e=new za([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const h=e[o];a(h)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Op;let A,b=!1,E,M,D,y;if(m){A=m.getSpacedPoints(c),b=!0,d=!1;const se=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(c,se),M=new F,D=new F,y=new F}d||(g=0,f=0,p=0,_=0);const R=o.extractPoints(h);let U=R.shape;const x=R.holes;if(!oi.isClockWise(U)){U=U.reverse();for(let se=0,oe=x.length;se<oe;se++){const le=x[se];oi.isClockWise(le)&&(x[se]=le.reverse())}}function I(se){const le=10000000000000001e-36;let ce=se[0];for(let fe=1;fe<=se.length;fe++){const He=fe%se.length,Be=se[He],qe=Be.x-ce.x,$e=Be.y-ce.y,k=qe*qe+$e*$e,ft=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ce.x),Math.abs(ce.y)),st=le*ft*ft;if(k<=st){se.splice(He,1),fe--;continue}ce=Be}}I(U),x.forEach(I);const P=x.length,O=U;for(let se=0;se<P;se++){const oe=x[se];U=U.concat(oe)}function W(se,oe,le){return oe||ct("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(oe,le)}const V=U.length;function Q(se,oe,le){let ce,fe,He;const Be=se.x-oe.x,qe=se.y-oe.y,$e=le.x-se.x,k=le.y-se.y,ft=Be*Be+qe*qe,st=Be*k-qe*$e;if(Math.abs(st)>Number.EPSILON){const L=Math.sqrt(ft),v=Math.sqrt($e*$e+k*k),X=oe.x-qe/L,$=oe.y+Be/L,j=le.x-k/v,he=le.y+$e/v,de=((j-X)*k-(he-$)*$e)/(Be*k-qe*$e);ce=X+Be*de-se.x,fe=$+qe*de-se.y;const ee=ce*ce+fe*fe;if(ee<=2)return new re(ce,fe);He=Math.sqrt(ee/2)}else{let L=!1;Be>Number.EPSILON?$e>Number.EPSILON&&(L=!0):Be<-Number.EPSILON?$e<-Number.EPSILON&&(L=!0):Math.sign(qe)===Math.sign(k)&&(L=!0),L?(ce=-qe,fe=Be,He=Math.sqrt(ft)):(ce=Be,fe=qe,He=Math.sqrt(ft/2))}return new re(ce/He,fe/He)}const N=[];for(let se=0,oe=O.length,le=oe-1,ce=se+1;se<oe;se++,le++,ce++)le===oe&&(le=0),ce===oe&&(ce=0),N[se]=Q(O[se],O[le],O[ce]);const z=[];let K,ye=N.concat();for(let se=0,oe=P;se<oe;se++){const le=x[se];K=[];for(let ce=0,fe=le.length,He=fe-1,Be=ce+1;ce<fe;ce++,He++,Be++)He===fe&&(He=0),Be===fe&&(Be=0),K[ce]=Q(le[ce],le[He],le[Be]);z.push(K),ye=ye.concat(K)}let pe;if(g===0)pe=oi.triangulateShape(O,x);else{const se=[],oe=[];for(let le=0;le<g;le++){const ce=le/g,fe=f*Math.cos(ce*Math.PI/2),He=p*Math.sin(ce*Math.PI/2)+_;for(let Be=0,qe=O.length;Be<qe;Be++){const $e=W(O[Be],N[Be],He);Se($e.x,$e.y,-fe),ce===0&&se.push($e)}for(let Be=0,qe=P;Be<qe;Be++){const $e=x[Be];K=z[Be];const k=[];for(let ft=0,st=$e.length;ft<st;ft++){const L=W($e[ft],K[ft],He);Se(L.x,L.y,-fe),ce===0&&k.push(L)}ce===0&&oe.push(k)}}pe=oi.triangulateShape(se,oe)}const nt=pe.length,Ze=p+_;for(let se=0;se<V;se++){const oe=d?W(U[se],ye[se],Ze):U[se];b?(D.copy(E.normals[0]).multiplyScalar(oe.x),M.copy(E.binormals[0]).multiplyScalar(oe.y),y.copy(A[0]).add(D).add(M),Se(y.x,y.y,y.z)):Se(oe.x,oe.y,0)}for(let se=1;se<=c;se++)for(let oe=0;oe<V;oe++){const le=d?W(U[oe],ye[oe],Ze):U[oe];b?(D.copy(E.normals[se]).multiplyScalar(le.x),M.copy(E.binormals[se]).multiplyScalar(le.y),y.copy(A[se]).add(D).add(M),Se(y.x,y.y,y.z)):Se(le.x,le.y,u/c*se)}for(let se=g-1;se>=0;se--){const oe=se/g,le=f*Math.cos(oe*Math.PI/2),ce=p*Math.sin(oe*Math.PI/2)+_;for(let fe=0,He=O.length;fe<He;fe++){const Be=W(O[fe],N[fe],ce);Se(Be.x,Be.y,u+le)}for(let fe=0,He=x.length;fe<He;fe++){const Be=x[fe];K=z[fe];for(let qe=0,$e=Be.length;qe<$e;qe++){const k=W(Be[qe],K[qe],ce);b?Se(k.x,k.y+A[c-1].y,A[c-1].x+le):Se(k.x,k.y,u+le)}}}it(),J();function it(){const se=s.length/3;if(d){let oe=0,le=V*oe;for(let ce=0;ce<nt;ce++){const fe=pe[ce];We(fe[2]+le,fe[1]+le,fe[0]+le)}oe=c+g*2,le=V*oe;for(let ce=0;ce<nt;ce++){const fe=pe[ce];We(fe[0]+le,fe[1]+le,fe[2]+le)}}else{for(let oe=0;oe<nt;oe++){const le=pe[oe];We(le[2],le[1],le[0])}for(let oe=0;oe<nt;oe++){const le=pe[oe];We(le[0]+V*c,le[1]+V*c,le[2]+V*c)}}i.addGroup(se,s.length/3-se,0)}function J(){const se=s.length/3;let oe=0;ie(O,oe),oe+=O.length;for(let le=0,ce=x.length;le<ce;le++){const fe=x[le];ie(fe,oe),oe+=fe.length}i.addGroup(se,s.length/3-se,1)}function ie(se,oe){let le=se.length;for(;--le>=0;){const ce=le;let fe=le-1;fe<0&&(fe=se.length-1);for(let He=0,Be=c+g*2;He<Be;He++){const qe=V*He,$e=V*(He+1),k=oe+ce+qe,ft=oe+fe+qe,st=oe+fe+$e,L=oe+ce+$e;Ae(k,ft,st,L)}}}function Se(se,oe,le){l.push(se),l.push(oe),l.push(le)}function We(se,oe,le){Xe(se),Xe(oe),Xe(le);const ce=s.length/3,fe=S.generateTopUV(i,s,ce-3,ce-2,ce-1);xt(fe[0]),xt(fe[1]),xt(fe[2])}function Ae(se,oe,le,ce){Xe(se),Xe(oe),Xe(ce),Xe(oe),Xe(le),Xe(ce);const fe=s.length/3,He=S.generateSideWallUV(i,s,fe-6,fe-3,fe-2,fe-1);xt(He[0]),xt(He[1]),xt(He[3]),xt(He[1]),xt(He[2]),xt(He[3])}function Xe(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function xt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Fp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dl[s.type]().fromJSON(s)),new lc(i,e.options)}}const Op={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],h=e[s*3],c=e[s*3+1];return[new re(r,a),new re(o,l),new re(h,c)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],h=e[i*3],c=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-c)<Math.abs(a-h)?[new re(a,1-l),new re(h,1-u),new re(d,1-p),new re(_,1-m)]:[new re(o,1-l),new re(c,1-u),new re(f,1-p),new re(g,1-m)]}};function Fp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class si extends Ba{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new si(e.radius,e.detail)}}class Bi extends Dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,u=e/o,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<c;m++){const S=m*d-a;for(let A=0;A<h;A++){const b=A*u-r;p.push(b,-S,0),_.push(0,0,1),g.push(A/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const A=S+h*m,b=S+h*(m+1),E=S+1+h*(m+1),M=S+1+h*m;f.push(A,b,M),f.push(b,E,M)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.widthSegments,e.heightSegments)}}class cc extends Dt{constructor(e=new za([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(a,2));function h(c){const u=s.length/3,d=c.extractPoints(t);let f=d.shape;const p=d.holes;oi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const S=p[g];oi.isClockWise(S)===!0&&(p[g]=S.reverse())}const _=oi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){const S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,m=_.length;g<m;g++){const S=_[g],A=S[0]+u,b=S[1]+u,E=S[2]+u;i.push(A,b,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return kp(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new cc(i,e.curveSegments)}}function kp(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Ni extends Dt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let h=0;const c=[],u=new F,d=new F,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){const S=[],A=m/i,b=a+A*o,E=e*Math.cos(b),M=Math.sqrt(e*e-E*E);let D=0;m===0&&a===0?D=.5/t:m===i&&l===Math.PI&&(D=-.5/t);for(let y=0;y<=t;y++){const R=y/t,U=s+R*r;u.x=-M*Math.cos(U),u.y=E,u.z=M*Math.sin(U),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(R+D,1-A),S.push(h++)}c.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const A=c[m][S+1],b=c[m][S],E=c[m+1][S],M=c[m+1][S+1];(m!==0||a>0)&&f.push(A,b,M),(m!==i-1||l<Math.PI)&&f.push(b,E,M)}this.setIndex(f),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ji extends Dt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],h=[],c=[],u=[],d=new F,f=new F,p=new F;for(let _=0;_<=i;_++){const g=a+_/i*o;for(let m=0;m<=s;m++){const S=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(S),f.y=(e+t*Math.cos(g))*Math.sin(S),f.z=t*Math.sin(g),h.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),p.subVectors(f,d).normalize(),c.push(p.x,p.y,p.z),u.push(m/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){const m=(s+1)*_+g-1,S=(s+1)*(_-1)+g-1,A=(s+1)*(_-1)+g,b=(s+1)*_+g;l.push(m,S,b),l.push(S,A,b)}this.setIndex(l),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(fh(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(fh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=zs(n[t]);for(const s in i)e[s]=i[s]}return e}function fh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const zp={clone:zs,merge:on};var Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vp extends kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nt extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wp extends Nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xp extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qp extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Po={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(ph(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!ph(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function ph(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Yp{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const f=h[u],p=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $p=new Yp;class hc{constructor(e){this.manager=e!==void 0?e:$p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ss=new WeakMap;class Kp extends hc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Po.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ss.get(a);u===void 0&&(u=[],Ss.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Sr("img");function l(){c(),t&&t(this);const u=Ss.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ss.delete(this),r.manager.itemEnd(e)}function h(u){c(),s&&s(u),Po.remove(`image:${e}`);const d=Ss.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}Ss.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Po.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Zp extends hc{constructor(e){super(e)}load(e,t,i,s){const r=new $t,a=new Kp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ha extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Jp extends Ha{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Lo=new lt,mh=new F,gh=new F;class Hu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(mh),gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oa=new F,la=new Rn,Gn=new F;class Gu extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oa,la,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(oa,la,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new F,xh=new re,_h=new re;class yn extends Gu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,xh,_h),t.subVectors(_h,xh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Qp extends Hu{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class jp extends Ha{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Qp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ga extends Gu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class e0 extends Hu{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t0 extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new e0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class n0 extends Ha{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,Ms=1;class i0 extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(ws,Ms,e,t);s.layers=this.layers,this.add(s);const r=new yn(ws,Ms,e,t);r.layers=this.layers,this.add(r);const a=new yn(ws,Ms,e,t);a.layers=this.layers,this.add(a);const o=new yn(ws,Ms,e,t);o.layers=this.layers,this.add(o);const l=new yn(ws,Ms,e,t);l.layers=this.layers,this.add(l);const h=new yn(ws,Ms,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class s0 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yh=new lt;class Vu{constructor(e,t,i=0,s=1/0){this.ray=new ka(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(e,t=!0,i=[]){return Ul(e,this,i,t),i.sort(vh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ul(e[s],this,i,t);return i.sort(vh),i}}function vh(n,e){return n.distance-e.distance}function Ul(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Ul(r[a],e,t,!0)}}class bh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const vc=class vc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};vc.prototype.isMatrix2=!0;let Sh=vc;const ca=new Fi;class r0 extends sc{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Dt;r.setIndex(new tn(i,1)),r.setAttribute("position",new tn(s,3)),super(r,new Dr({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ca.setFromObject(this.object),ca.isEmpty())return;const e=ca.min,t=ca.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class a0 extends Oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wh(n,e,t,i){const s=o0(i);switch(t){case vu:return n*e;case Yl:return n*e/s.components*s.byteLength;case $l:return n*e/s.components*s.byteLength;case ss:return n*e*2/s.components*s.byteLength;case Kl:return n*e*2/s.components*s.byteLength;case bu:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case Zl:return n*e*4/s.components*s.byteLength;case xa:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ya:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(n,16)*Math.max(e,8)/4;case tl:case il:return Math.max(n,8)*Math.max(e,8)/2;case rl:case al:case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case Ea:case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case El:case Tl:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rl:case Cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ta:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(n){switch(n){case vn:case gu:return{byteLength:1,components:1};case yr:case xu:case Jn:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case Zn:case Wl:case Un:return{byteLength:4,components:1};case _u:case yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function l0(n){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,u=h.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){const c=l.array,u=l.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,c);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];n.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,w0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,I0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,om=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ym=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:c0,alphahash_pars_fragment:h0,alphamap_fragment:u0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:x0,batching_vertex:_0,begin_vertex:y0,beginnormal_vertex:v0,bsdfs:b0,iridescence_fragment:S0,bumpmap_pars_fragment:w0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:A0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:P0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:I0,displacementmap_pars_vertex:U0,displacementmap_vertex:O0,emissivemap_fragment:F0,emissivemap_pars_fragment:k0,colorspace_fragment:B0,colorspace_pars_fragment:z0,envmap_fragment:H0,envmap_common_pars_fragment:G0,envmap_pars_fragment:V0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:tm,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:$0,fog_pars_fragment:K0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:j0,lights_pars_begin:em,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:am,lights_physical_pars_fragment:om,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:hm,lightprobes_pars_fragment:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:xm,map_particle_fragment:_m,map_particle_pars_fragment:ym,metalnessmap_fragment:vm,metalnessmap_pars_fragment:bm,morphinstance_vertex:Sm,morphcolor_vertex:wm,morphnormal_vertex:Mm,morphtarget_pars_vertex:Em,morphtarget_vertex:Tm,normal_fragment_begin:Am,normal_fragment_maps:Rm,normal_pars_fragment:Cm,normal_pars_vertex:Pm,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Om,opaque_fragment:Fm,packing:km,premultiplied_alpha_fragment:Bm,project_vertex:zm,dithering_fragment:Hm,dithering_pars_fragment:Gm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:qm,shadowmap_vertex:Ym,shadowmask_pars_fragment:$m,skinbase_vertex:Km,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:Qm,specularmap_fragment:jm,specularmap_pars_fragment:eg,tonemapping_fragment:tg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:sg,uv_pars_fragment:rg,uv_pars_vertex:ag,uv_vertex:og,worldpos_vertex:lg,background_vert:cg,background_frag:hg,backgroundCube_vert:ug,backgroundCube_frag:dg,cube_vert:fg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distance_vert:xg,distance_frag:_g,equirect_vert:yg,equirect_frag:vg,linedashed_vert:bg,linedashed_frag:Sg,meshbasic_vert:wg,meshbasic_frag:Mg,meshlambert_vert:Eg,meshlambert_frag:Tg,meshmatcap_vert:Ag,meshmatcap_frag:Rg,meshnormal_vert:Cg,meshnormal_frag:Pg,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ng,meshphysical_frag:Ig,meshtoon_vert:Ug,meshtoon_frag:Og,points_vert:Fg,points_frag:kg,shadow_vert:Bg,shadow_frag:zg,sprite_vert:Hg,sprite_frag:Gg},be={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Wn={basic:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:on([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:on([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:on([be.points,be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:on([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:on([be.common,be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:on([be.sprite,be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:on([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:on([be.lights,be.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Wn.physical={uniforms:on([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const ha={r:0,b:0,g:0},Vg=new lt,Xu=new Ke;Xu.set(-1,0,0,0,1,0,0,0,1);function Wg(n,e,t,i,s,r){const a=new Ye(0);let o=s===!0?0:1,l,h,c=null,u=0,d=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const b=S.backgroundBlurriness>0;A=e.get(A,b)}return A}function p(S){let A=!1;const b=f(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),A=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,A){const b=f(A);b&&(b.isCubeTexture||b.mapping===Fa)?(h===void 0&&(h=new Ut(new Cn(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:zs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,M,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Xu),h.material.toneMapped=ot.getTransfer(b.colorSpace)!==yt,(c!==b||u!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,c=b,u=b.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ut(new Bi(2,2),new kn({name:"BackgroundMaterial",uniforms:zs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ot.getTransfer(b.colorSpace)!==yt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(c!==b||u!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=b,u=b.version,d=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,A){S.getRGB(ha,zu(n)),t.buffers.color.setClear(ha.r,ha.g,ha.b,A,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Xg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(x,C,I,P,O){let W=!1;const V=u(x,P,I,C);r!==V&&(r=V,h(r.object)),W=f(x,P,I,O),W&&p(x,P,I,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,b(x,C,I,P),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function h(x){return n.bindVertexArray(x)}function c(x){return n.deleteVertexArray(x)}function u(x,C,I,P){const O=P.wireframe===!0;let W=i[C.id];W===void 0&&(W={},i[C.id]=W);const V=x.isInstancedMesh===!0?x.id:0;let Q=W[V];Q===void 0&&(Q={},W[V]=Q);let N=Q[I.id];N===void 0&&(N={},Q[I.id]=N);let z=N[O];return z===void 0&&(z=d(l()),N[O]=z),z}function d(x){const C=[],I=[],P=[];for(let O=0;O<t;O++)C[O]=0,I[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:P,object:x,attributes:{},index:null}}function f(x,C,I,P){const O=r.attributes,W=C.attributes;let V=0;const Q=I.getAttributes();for(const N in Q)if(Q[N].location>=0){const K=O[N];let ye=W[N];if(ye===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),K===void 0||K.attribute!==ye||ye&&K.data!==ye.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function p(x,C,I,P){const O={},W=C.attributes;let V=0;const Q=I.getAttributes();for(const N in Q)if(Q[N].location>=0){let K=W[N];K===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const ye={};ye.attribute=K,K&&K.data&&(ye.data=K.data),O[N]=ye,V++}r.attributes=O,r.attributesNum=V,r.index=P}function _(){const x=r.newAttributes;for(let C=0,I=x.length;C<I;C++)x[C]=0}function g(x){m(x,0)}function m(x,C){const I=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;I[x]=1,P[x]===0&&(n.enableVertexAttribArray(x),P[x]=1),O[x]!==C&&(n.vertexAttribDivisor(x,C),O[x]=C)}function S(){const x=r.newAttributes,C=r.enabledAttributes;for(let I=0,P=C.length;I<P;I++)C[I]!==x[I]&&(n.disableVertexAttribArray(I),C[I]=0)}function A(x,C,I,P,O,W,V){V===!0?n.vertexAttribIPointer(x,C,I,O,W):n.vertexAttribPointer(x,C,I,P,O,W)}function b(x,C,I,P){_();const O=P.attributes,W=I.getAttributes(),V=C.defaultAttributeValues;for(const Q in W){const N=W[Q];if(N.location>=0){let z=O[Q];if(z===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(z=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(z=x.instanceColor)),z!==void 0){const K=z.normalized,ye=z.itemSize,pe=e.get(z);if(pe===void 0)continue;const nt=pe.buffer,Ze=pe.type,it=pe.bytesPerElement,J=Ze===n.INT||Ze===n.UNSIGNED_INT||z.gpuType===Wl;if(z.isInterleavedBufferAttribute){const ie=z.data,Se=ie.stride,We=z.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<N.locationSize;Ae++)m(N.location+Ae,ie.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<N.locationSize;Ae++)g(N.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Ae=0;Ae<N.locationSize;Ae++)A(N.location+Ae,ye/N.locationSize,Ze,K,Se*it,(We+ye/N.locationSize*Ae)*it,J)}else{if(z.isInstancedBufferAttribute){for(let ie=0;ie<N.locationSize;ie++)m(N.location+ie,z.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ie=0;ie<N.locationSize;ie++)g(N.location+ie);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let ie=0;ie<N.locationSize;ie++)A(N.location+ie,ye/N.locationSize,Ze,K,ye*it,ye/N.locationSize*ie*it,J)}}else if(V!==void 0){const K=V[Q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(N.location,K);break;case 3:n.vertexAttrib3fv(N.location,K);break;case 4:n.vertexAttrib4fv(N.location,K);break;default:n.vertexAttrib1fv(N.location,K)}}}}S()}function E(){R();for(const x in i){const C=i[x];for(const I in C){const P=C[I];for(const O in P){const W=P[O];for(const V in W)c(W[V].object),delete W[V];delete P[O]}}delete i[x]}}function M(x){if(i[x.id]===void 0)return;const C=i[x.id];for(const I in C){const P=C[I];for(const O in P){const W=P[O];for(const V in W)c(W[V].object),delete W[V];delete P[O]}}delete i[x.id]}function D(x){for(const C in i){const I=i[C];for(const P in I){const O=I[P];if(O[x.id]===void 0)continue;const W=O[x.id];for(const V in W)c(W[V].object),delete W[V];delete O[x.id]}}}function y(x){for(const C in i){const I=i[C],P=x.isInstancedMesh===!0?x.id:0,O=I[P];if(O!==void 0){for(const W in O){const V=O[W];for(const Q in V)c(V[Q].object),delete V[Q];delete O[W]}delete I[P],Object.keys(I).length===0&&delete i[C]}}}function R(){U(),a=!0,r!==s&&(r=s,h(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:U,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function qg(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),t.update(h,i,c))}function o(l,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let d=0;for(let f=0;f<c;f++)d+=h[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Yg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==On&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const y=D===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==vn&&D!==Un&&!y&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(Ve("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:b,maxSamples:E,samples:M}}function $g(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new In,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?c(null):h();else{const S=r?0:i,A=S*4;let b=m.clippingState||null;l.value=b,b=c(p,d,A,f);for(let E=0;E!==A;++E)b[E]=t[E];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,b=f;A!==_;++A,b+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Ls=4,Kg=6,Zg=20,Jg=256,sr=new Ga,Mh=new Ye;let Do=null,No=0,Io=0,Uo=!1;const Qg=new F,Xi=new F;class Eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Qg}=r;Do=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,No,Io),this._renderer.xr.enabled=Uo,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Jn,format:On,colorSpace:Aa,depthBuffer:!1},s=Th(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jg(r)),this._blurMaterial=tx(r,e,t),this._ggxMaterial=ex(r,e,t)}return s}_compileMaterial(e){const t=new Ut(new Dt,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,i,s,r){const l=new yn(90,1,t,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Mh),u.toneMapping=$n,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Cn,new ki({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(Mh),m=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,h[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[A],r.y,r.z)):b===1?(l.up.set(0,0,h[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[A],r.z)):(l.up.set(0,h[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[A]));const E=this._cubeSize;Es(s,b*E,A>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===is||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,sr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,h=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(h*h-c*c),d=h*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[i],g=3*_*(i>p-Ls?i-p+Ls:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Es(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,sr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Es(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,sr)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const h=o.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;const c=this._sizeLods[s],u=3*c*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),d=4*(this._cubeSize-c);Es(t,u,d,3*c,2*c),a.setRenderTarget(t),a.render(l,sr)}}function jg(n){const e=[],t=[];let i=n;const s=n-Ls+1+Kg;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],u=6,d=6,f=3,p=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let m=0;m<u;m++){const S=m%3*2/3-1,A=m>2?0:-1,b=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];p.set(b,f*d*m);for(let E=0;E<d;E++){const M=c[E*2]*2-1,D=c[E*2+1]*2-1;m===0?Xi.set(1,D,M):m===1?Xi.set(-M,1,-D):m===2?Xi.set(-M,D,1):m===3?Xi.set(-1,D,-M):m===4?Xi.set(-M,-1,D):Xi.set(M,D,-1),Xi.toArray(_,(m*d+E)*f)}}const g=new Dt;g.setAttribute("position",new tn(p,f)),g.setAttribute("outputDirection",new tn(_,f)),t.push(new Ut(g,null)),i>Ls&&i--}return{lodMeshes:t,sizeLods:e}}function Th(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ex(n,e,t){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function tx(n,e,t){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Zg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ah(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Rh(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class qu extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Cu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cn(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:hi});r.uniforms.tEquirect.value=t;const a=new Ut(s,r),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=jt),new i0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function nx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===eo||f===to)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new qu(p.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",h),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===eo||f===to,_=f===is||f===ks;if(p||_){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Eh(n)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new Eh(n)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d,f){return f===eo?d.mapping=is:f===to&&(d.mapping=ks),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function ix(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ds("WebGLRenderer: "+i+" extension not supported."),s}}}function sx(n,e,t,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let A=0,b=S.length;A<b;A+=3){const E=S[A+0],M=S[A+1],D=S[A+2];d.push(E,M,M,D,D,E)}}else{const S=p.array;_=p.version;for(let A=0,b=S.length/3-1;A<b;A+=3){const E=A+0,M=A+1,D=A+2;d.push(E,M,M,D,D,E)}}const g=new(p.count>=65535?Au:Tu)(d,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function rx(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function h(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function c(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function ax(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ct("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ox(n,e,t){const i=new WeakMap,s=new Pt;function r(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let U=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var f=U;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let E=o.attributes.position.count*b,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*M*4*u),y=new Mu(D,E,M,u);y.type=Un,y.needsUpdate=!0;const R=b*4;for(let x=0;x<u;x++){const C=m[x],I=S[x],P=A[x],O=E*M*4*x;for(let W=0;W<C.count;W++){const V=W*R;p===!0&&(s.fromBufferAttribute(C,W),D[O+V+0]=s.x,D[O+V+1]=s.y,D[O+V+2]=s.z,D[O+V+3]=0),_===!0&&(s.fromBufferAttribute(I,W),D[O+V+4]=s.x,D[O+V+5]=s.y,D[O+V+6]=s.z,D[O+V+7]=0),g===!0&&(s.fromBufferAttribute(P,W),D[O+V+8]=s.x,D[O+V+9]=s.y,D[O+V+10]=s.z,D[O+V+11]=P.itemSize===4?s.w:1)}}d={count:u,texture:y,size:new re(E,M)},i.set(o,d),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function lx(n,e,t,i,s){let r=new WeakMap;function a(h){const c=s.render.frame,u=h.geometry,d=e.get(h,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const cx={[cu]:"LINEAR_TONE_MAPPING",[hu]:"REINHARD_TONE_MAPPING",[uu]:"CINEON_TONE_MAPPING",[Vl]:"ACES_FILMIC_TONE_MAPPING",[fu]:"AGX_TONE_MAPPING",[pu]:"NEUTRAL_TONE_MAPPING",[du]:"CUSTOM_TONE_MAPPING"};function hx(n,e,t,i,s,r){const a=new Fn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const h=new Dt;h.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new dt([0,2,0,0,2,0],2));const c=new Vp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ut(h,c),d=new Ga(-1,1,1,-1,0,1);let f=null,p=null,_=!1,g,m=null,S=[],A=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let M=0;M<S.length;M++){const D=S[M];D.setSize&&D.setSize(b,E)}},this.setEffects=function(b){S=b,A=S.length>0&&S[0].isRenderPass===!0;const E=a.width,M=a.height;S.length>0&&o===null&&(o=new Fn(E,M,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(E,M,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<S.length;D++){const y=S[D];y.setSize&&y.setSize(E,M)}},this.begin=function(b,E){if(_||b.toneMapping===$n&&S.length===0)return!1;if(m=E,E!==null){const M=E.width,D=E.height;(a.width!==M||a.height!==D)&&this.setSize(M,D)}return A===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=$n,!0},this.hasRenderPass=function(){return A},this.end=function(b,E){b.toneMapping=g,_=!0;let M=a,D=o;for(let y=0;y<S.length;y++){const R=S[y];R.enabled!==!1&&(R.render(b,D,M,E),R.needsSwap!==!1&&(M=D,D=D===o?l:o))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,c.defines={},ot.getTransfer(f)===yt&&(c.defines.SRGB_TRANSFER="");const y=cx[p];y&&(c.defines[y]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(m),b.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}const Yu=new $t,Ol=new Mr(1,1),$u=new Mu,Ku=new kf,Zu=new Cu,Ch=[],Ph=[],Lh=new Float32Array(16),Dh=new Float32Array(9),Nh=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wa(n,e){let t=Ph[e];t===void 0&&(t=new Int32Array(e),Ph[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ux(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),Gt(t,i)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Dh.set(i),n.uniformMatrix3fv(this.addr,!1,Dh),Gt(t,i)}}function xx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Lh.set(i),n.uniformMatrix4fv(this.addr,!1,Lh),Gt(t,i)}}function _x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function vx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function Tx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ol.compareFunction=t.isReversedDepthBuffer()?Ql:Jl,r=Ol):r=Yu,t.setTexture2D(e||r,s)}function Ax(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ku,s)}function Rx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Zu,s)}function Cx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||$u,s)}function Px(n){switch(n){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return vx;case 35669:case 35673:return bx;case 5125:return Sx;case 36294:return wx;case 36295:return Mx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Lx(n,e){n.uniform1fv(this.addr,e)}function Dx(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function Nx(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function Ix(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function Ux(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ox(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Fx(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kx(n,e){n.uniform1iv(this.addr,e)}function Bx(n,e){n.uniform2iv(this.addr,e)}function zx(n,e){n.uniform3iv(this.addr,e)}function Hx(n,e){n.uniform4iv(this.addr,e)}function Gx(n,e){n.uniform1uiv(this.addr,e)}function Vx(n,e){n.uniform2uiv(this.addr,e)}function Wx(n,e){n.uniform3uiv(this.addr,e)}function Xx(n,e){n.uniform4uiv(this.addr,e)}function qx(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ol:a=Yu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Yx(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ku,r[a])}function $x(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zu,r[a])}function Kx(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$u,r[a])}function Zx(n){switch(n){case 5126:return Lx;case 35664:return Dx;case 35665:return Nx;case 35666:return Ix;case 35674:return Ux;case 35675:return Ox;case 35676:return Fx;case 5124:case 35670:return kx;case 35667:case 35671:return Bx;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return Gx;case 36294:return Vx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Kx}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Px(t.type)}}class Qx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zx(t.type)}}class jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Ih(n,e){n.seq.push(e),n.map[e.id]=e}function e1(n,e,t){const i=n.name,s=i.length;for(Oo.lastIndex=0;;){const r=Oo.exec(i),a=Oo.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){Ih(t,h===void 0?new Jx(o,n,e):new Qx(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new jx(o),Ih(t,u)),t=u}}}class ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);e1(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Uh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const t1=37297;let n1=0;function i1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Oh=new Ke;function s1(n){ot._getMatrix(Oh,ot.workingColorSpace,n);const e=`mat3( ${Oh.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Ra:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+i1(n.getShaderSource(e),o)}else return r}function r1(n,e){const t=s1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const a1={[cu]:"Linear",[hu]:"Reinhard",[uu]:"Cineon",[Vl]:"ACESFilmic",[fu]:"AgX",[pu]:"Neutral",[du]:"Custom"};function o1(n,e){const t=a1[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ua=new F;function l1(){ot.getLuminanceCoefficients(ua);const n=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function h1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function u1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function cr(n){return n!==""}function kh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const d1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(n){return n.replace(d1,p1)}const f1=new Map;function p1(n,e){let t=tt[e];if(t===void 0){const i=f1.get(e);if(i!==void 0)t=tt[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fl(t)}const m1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(m1,g1)}function g1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const x1={[hr]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function _1(n){return x1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y1={[is]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function v1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":y1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const b1={[ks]:"ENVMAP_MODE_REFRACTION"};function S1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":b1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w1={[lu]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[ef]:"ENVMAP_BLENDING_ADD"};function M1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":w1[n.combine]||"ENVMAP_BLENDING_NONE"}function E1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function T1(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_1(t),h=v1(t),c=S1(t),u=M1(t),d=E1(t),f=c1(t),p=h1(r),_=s.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(cr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(g=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?tt.tonemapping_pars_fragment:"",t.toneMapping!==$n?o1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,r1("linearToOutputTexel",t.outputColorSpace),l1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=Fl(a),a=kh(a,t),a=Bh(a,t),o=Fl(o),o=kh(o,t),o=Bh(o,t),a=zh(a),o=zh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=S+g+a,b=S+m+o,E=Uh(s,s.VERTEX_SHADER,A),M=Uh(s,s.FRAGMENT_SHADER,b);s.attachShader(_,E),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(x){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(M)||"",O=C.trim(),W=I.trim(),V=P.trim();let Q=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,M);else{const z=Fh(s,E,"vertex"),K=Fh(s,M,"fragment");ct("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+O+`
`+z+`
`+K)}else O!==""?Ve("WebGLProgram: Program Info Log:",O):(W===""||V==="")&&(N=!1);N&&(x.diagnostics={runnable:Q,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:V,prefix:m}})}s.deleteShader(E),s.deleteShader(M),y=new ba(s,_),R=u1(s,_)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,t1)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=M,this}let A1=0;class R1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new C1(e),t.set(e,i)),i}}class C1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function P1(n){return n===ss||n===Ea||n===Ta}function L1(n,e,t,i,s,r){const a=new tc,o=new R1,l=new Set,h=[],c=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,R,U,x,C,I){const P=x.fog,O=C.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?x.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Q=e.get(y.envMap||W,V),N=Q&&Q.mapping===Fa?Q.image.height:null,z=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ve("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const K=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ye=K!==void 0?K.length:0;let pe=0;O.morphAttributes.position!==void 0&&(pe=1),O.morphAttributes.normal!==void 0&&(pe=2),O.morphAttributes.color!==void 0&&(pe=3);let nt,Ze,it,J;if(z){const Et=Wn[z];nt=Et.vertexShader,Ze=Et.fragmentShader}else{nt=y.vertexShader,Ze=y.fragmentShader;const Et=o.getVertexShaderStage(y),pt=o.getFragmentShaderStage(y);o.update(y,Et,pt),it=Et.id,J=pt.id}const ie=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),We=C.isInstancedMesh===!0,Ae=C.isBatchedMesh===!0,Xe=!!y.map,xt=!!y.matcap,se=!!Q,oe=!!y.aoMap,le=!!y.lightMap,ce=!!y.bumpMap&&y.wireframe===!1,fe=!!y.normalMap,He=!!y.displacementMap,Be=!!y.emissiveMap,qe=!!y.metalnessMap,$e=!!y.roughnessMap,k=y.anisotropy>0,ft=y.clearcoat>0,st=y.dispersion>0,L=y.retroreflectivity>0,v=y.iridescence>0,X=y.sheen>0,$=y.transmission>0,j=k&&!!y.anisotropyMap,he=ft&&!!y.clearcoatMap,de=ft&&!!y.clearcoatNormalMap,ee=ft&&!!y.clearcoatRoughnessMap,ne=v&&!!y.iridescenceMap,me=v&&!!y.iridescenceThicknessMap,Ue=X&&!!y.sheenColorMap,ve=X&&!!y.sheenRoughnessMap,ge=!!y.specularMap,Oe=!!y.specularColorMap,Ge=!!y.specularIntensityMap,Qe=$&&!!y.transmissionMap,G=$&&!!y.thicknessMap,xe=!!y.gradientMap,te=!!y.alphaMap,_e=y.alphaTest>0,Ee=!!y.alphaHash,ae=!!y.extensions;let Fe=$n;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const Ne={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:nt,fragmentShader:Ze,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&C._colorsTexture!==null,instancing:We,instancingColor:We&&C.instanceColor!==null,instancingMorph:We&&C.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:xt,envMap:se,envMapMode:se&&Q.mapping,envMapCubeUVHeight:N,aoMap:oe,lightMap:le,bumpMap:ce,normalMap:fe,displacementMap:He,emissiveMap:Be,normalMapObjectSpace:fe&&y.normalMapType===sf,normalMapTangentSpace:fe&&y.normalMapType===Ll,packedNormalMap:fe&&y.normalMapType===Ll&&P1(y.normalMap.format),metalnessMap:qe,roughnessMap:$e,anisotropy:k,anisotropyMap:j,clearcoat:ft,clearcoatMap:he,clearcoatNormalMap:de,clearcoatRoughnessMap:ee,dispersion:st,retroreflection:L,iridescence:v,iridescenceMap:ne,iridescenceThicknessMap:me,sheen:X,sheenColorMap:Ue,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:Oe,specularIntensityMap:Ge,transmission:$,transmissionMap:Qe,thicknessMap:G,gradientMap:xe,opaque:y.transparent===!1&&y.blending===ur&&y.alphaToCoverage===!1,alphaMap:te,alphaTest:_e,alphaHash:Ee,combine:y.combine,mapUv:Xe&&p(y.map.channel),aoMapUv:oe&&p(y.aoMap.channel),lightMapUv:le&&p(y.lightMap.channel),bumpMapUv:ce&&p(y.bumpMap.channel),normalMapUv:fe&&p(y.normalMap.channel),displacementMapUv:He&&p(y.displacementMap.channel),emissiveMapUv:Be&&p(y.emissiveMap.channel),metalnessMapUv:qe&&p(y.metalnessMap.channel),roughnessMapUv:$e&&p(y.roughnessMap.channel),anisotropyMapUv:j&&p(y.anisotropyMap.channel),clearcoatMapUv:he&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(y.sheenRoughnessMap.channel),specularMapUv:ge&&p(y.specularMap.channel),specularColorMapUv:Oe&&p(y.specularColorMap.channel),specularIntensityMapUv:Ge&&p(y.specularIntensityMap.channel),transmissionMapUv:Qe&&p(y.transmissionMap.channel),thicknessMapUv:G&&p(y.thicknessMap.channel),alphaMapUv:te&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(fe||k),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!O.attributes.uv&&(Xe||te),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&fe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:pe,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:Be&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wn,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function g(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)R.push(U),R.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(m(R,y),S(R,y),R.push(n.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function m(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function S(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){const R=f[y.type];let U;if(R){const x=Wn[R];U=zp.clone(x.uniforms)}else U=y.uniforms;return U}function b(y,R){let U=c.get(R);return U!==void 0?++U.usedTimes:(U=new T1(n,R,y,s),h.push(U),c.set(R,U)),U}function E(y){if(--y.usedTimes===0){const R=h.indexOf(y);h[R]=h[h.length-1],h.pop(),c.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function D(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:A,acquireProgram:b,releaseProgram:E,releaseShaderCache:M,programs:h,dispose:D}}function D1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function N1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,g,m){let S=n[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function l(d,f,p,_,g,m,S){S.reversedDepth===!0&&(g=-g);const A=o(d,f,p,_,g,m);p.transmission>0?i.push(A):p.transparent===!0?s.push(A):t.push(A)}function h(d,f,p,_,g,m){const S=o(d,f,p,_,g,m);p.transmission>0?i.unshift(S):p.transparent===!0?s.unshift(S):t.unshift(S)}function c(d,f){t.length>1&&t.sort(d||N1),i.length>1&&i.sort(f||Gh),s.length>1&&s.sort(f||Gh)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:u,sort:c}}function I1(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Vh,n.set(i,[a])):s>=r.length?(a=new Vh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function U1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ye};break;case"SpotLight":t={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function O1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let F1=0;function k1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B1(n){const e=new U1,t=O1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new F);const s=new F,r=new lt,a=new lt;function o(h){let c=0,u=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,S=0,A=0,b=0,E=0,M=0,D=0,y=0,R=0,U=0;h.sort(k1);for(let C=0,I=h.length;C<I;C++){const P=h[C],O=P.color,W=P.intensity,V=P.distance;let Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ss?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=O.r*W,u+=O.g*W,d+=O.b*W;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],W);U++}else if(P.isSunLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,K=t.get(P);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[p]=K,i.sunShadowMap[p]=Q;const ye=z.getViewportCount();for(let pe=0;pe<ye;pe++)i.sunShadowMatrix[_+pe]=z.getMatrix(pe),i.sunShadowCascade[_+pe]=z._cascadeData[pe];_+=ye,p++}i.sun[f]=N,f++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,K=t.get(P);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=Q,i.directionalShadowMatrix[g]=P.shadow.matrix,E++}i.directional[g]=N,g++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(O).multiplyScalar(W),N.distance=V,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[S]=N;const z=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,z.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[S]=z.matrix,P.castShadow){const K=t.get(P);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.spotShadow[S]=K,i.spotShadowMap[S]=Q,D++}S++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(O).multiplyScalar(W),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[A]=N,A++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const z=P.shadow,K=t.get(P);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=P.shadow.matrix,M++}i.point[m]=N,m++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(W),N.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[b]=N,b++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const x=i.hash;(x.sunLength!==f||x.directionalLength!==g||x.pointLength!==m||x.spotLength!==S||x.rectAreaLength!==A||x.hemiLength!==b||x.numSunShadows!==p||x.numDirectionalShadows!==E||x.numPointShadows!==M||x.numSpotShadows!==D||x.numSpotMaps!==y||x.numLightProbes!==U)&&(i.sun.length=f,i.directional.length=g,i.spot.length=S,i.rectArea.length=A,i.point.length=m,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+y-R,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,x.sunLength=f,x.directionalLength=g,x.pointLength=m,x.spotLength=S,x.rectAreaLength=A,x.hemiLength=b,x.numSunShadows=p,x.numDirectionalShadows=E,x.numPointShadows=M,x.numSpotShadows=D,x.numSpotMaps=y,x.numLightProbes=U,i.version=F1++)}function l(h,c){let u=0,d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){const b=h[S];if(b.isSunLight){const E=i.sun[u];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),u++}else if(b.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Wh(n){const e=new B1(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function h(){e.setup(t)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function z1(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Wh(n),e.set(s,[o])):r>=a.length?(o=new Wh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,V1=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],W1=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Xh=new lt,rr=new F,Fo=new F;function X1(n,e,t){let i=new ic;const s=new re,r=new re,a=new Pt,o=new Xp,l=new qp,h={},c=t.maxTextureSize,u={[ns]:un,[un]:ns,[wn]:wn},d=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:H1,fragmentShader:G1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Dt;p.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let m=this.type;this.render=function(M,D,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Id&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hr);const R=n.getRenderTarget(),U=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),C=n.state;C.setBlending(hi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const I=m!==this.type;I&&D.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=M.length;P<O;P++){const W=M[P],V=W.shadow;if(V===void 0){Ve("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Q=V.getFrameExtents();s.multiply(Q),r.copy(V.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y));const N=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=N,V.map===null||I===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===or){if(W.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Fn(s.x,s.y,{format:ss,type:Jn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new Mr(s.x,s.y,Un),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=pi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt}else W.isPointLight?(V.map=new qu(s.x),V.map.depthTexture=new sp(s.x,Zn)):(V.map=new Fn(s.x,s.y),V.map.depthTexture=new Mr(s.x,s.y,Zn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=pi,this.type===hr?(V.map.depthTexture.compareFunction=N?Ql:Jl,V.map.depthTexture.minFilter=jt,V.map.depthTexture.magFilter=jt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const z=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,y);for(let K=0;K<z;K++){const ye=V.getCamera(K);if(W.isPointLight){const pe=V.camera,nt=V.matrix,Ze=W.distance||pe.far;Ze!==pe.far&&(pe.far=Ze,pe.updateProjectionMatrix()),rr.setFromMatrixPosition(W.matrixWorld),pe.position.copy(rr),Fo.copy(pe.position),Fo.add(V1[K]),pe.up.copy(W1[K]),pe.lookAt(Fo),pe.updateMatrixWorld(),nt.makeTranslation(-rr.x,-rr.y,-rr.z),Xh.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Xh,pe.coordinateSystem,pe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,K),n.clear();else{K===0&&(n.setRenderTarget(V.map),n.clear());const pe=V.getViewport(K);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),C.viewport(a)}i=V.getFrustum(K),b(D,y,ye,W,this.type)}V.isPointLightShadow!==!0&&this.type===or&&S(V,y),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(R,U,x)};function S(M,D){const y=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Fn(s.x,s.y,{format:ss,type:Jn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(D,null,y,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(D,null,y,f,_,null)}function A(M,D,y,R){let U=null;const x=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(x!==void 0)U=x;else if(U=y.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const C=U.uuid,I=D.uuid;let P=h[C];P===void 0&&(P={},h[C]=P);let O=P[I];O===void 0&&(O=U.clone(),P[I]=O,D.addEventListener("dispose",E)),U=O}if(U.visible=D.visible,U.wireframe=D.wireframe,R===or?U.side=D.shadowSide!==null?D.shadowSide:D.side:U.side=D.shadowSide!==null?D.shadowSide:u[D.side],U.alphaMap=D.alphaMap,U.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,U.map=D.map,U.clipShadows=D.clipShadows,U.clippingPlanes=D.clippingPlanes,U.clipIntersection=D.clipIntersection,U.displacementMap=D.displacementMap,U.displacementScale=D.displacementScale,U.displacementBias=D.displacementBias,U.wireframeLinewidth=D.wireframeLinewidth,U.linewidth=D.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const C=n.properties.get(U);C.light=y}return U}function b(M,D,y,R,U){if(M.visible===!1)return;if(M.layers.test(D.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&U===or)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const I=e.update(M),P=M.material;if(Array.isArray(P)){const O=I.groups;for(let W=0,V=O.length;W<V;W++){const Q=O[W],N=P[Q.materialIndex];if(N&&N.visible){const z=A(M,N,R,U);M.onBeforeShadow(n,M,D,y,I,z,Q),n.renderBufferDirect(y,null,I,z,M,Q),M.onAfterShadow(n,M,D,y,I,z,Q)}}}else if(P.visible){const O=A(M,P,R,U);M.onBeforeShadow(n,M,D,y,I,O,null),n.renderBufferDirect(y,null,I,O,M,null),M.onAfterShadow(n,M,D,y,I,O,null)}}const C=M.children;for(let I=0,P=C.length;I<P;I++)b(C[I],D,y,R,U)}function E(M){M.target.removeEventListener("dispose",E);for(const y in h){const R=h[y],U=M.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function q1(n,e){function t(){let G=!1;const xe=new Pt;let te=null;const _e=new Pt(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!G&&(n.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){G=Ee},setClear:function(Ee,ae,Fe,Ne,Et){Et===!0&&(Ee*=Ne,ae*=Ne,Fe*=Ne),xe.set(Ee,ae,Fe,Ne),_e.equals(xe)===!1&&(n.clearColor(Ee,ae,Fe,Ne),_e.copy(xe))},reset:function(){G=!1,te=null,_e.set(-1,0,0,0)}}}function i(){let G=!1,xe=!1,te=null,_e=null,Ee=null;return{setReversed:function(ae){if(xe!==ae){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;const Ne=Ee;Ee=null,this.setClear(Ne)}},getReversed:function(){return xe},setTest:function(ae){ae?ie(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(ae){te!==ae&&!G&&(n.depthMask(ae),te=ae)},setFunc:function(ae){if(xe&&(ae=gf[ae]),_e!==ae){switch(ae){case Yo:n.depthFunc(n.NEVER);break;case $o:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case Zo:n.depthFunc(n.EQUAL);break;case Jo:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=ae}},setLocked:function(ae){G=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,xe&&(ae=1-ae),n.clearDepth(ae))},reset:function(){G=!1,te=null,_e=null,Ee=null,xe=!1}}}function s(){let G=!1,xe=null,te=null,_e=null,Ee=null,ae=null,Fe=null,Ne=null,Et=null;return{setTest:function(pt){G||(pt?ie(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(pt){xe!==pt&&!G&&(n.stencilMask(pt),xe=pt)},setFunc:function(pt,Pn,zn){(te!==pt||_e!==Pn||Ee!==zn)&&(n.stencilFunc(pt,Pn,zn),te=pt,_e=Pn,Ee=zn)},setOp:function(pt,Pn,zn){(ae!==pt||Fe!==Pn||Ne!==zn)&&(n.stencilOp(pt,Pn,zn),ae=pt,Fe=Pn,Ne=zn)},setLocked:function(pt){G=pt},setClear:function(pt){Et!==pt&&(n.clearStencil(pt),Et=pt)},reset:function(){G=!1,xe=null,te=null,_e=null,Ee=null,ae=null,Fe=null,Ne=null,Et=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,A=null,b=null,E=null,M=null,D=null,y=new Ye(0,0,0),R=0,U=!1,x=null,C=null,I=null,P=null,O=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=Q>=1):N.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=Q>=2);let z=null,K={};const ye=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),nt=new Pt().fromArray(ye),Ze=new Pt().fromArray(pe);function it(G,xe,te,_e){const Ee=new Uint8Array(4),ae=n.createTexture();n.bindTexture(G,ae),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<te;Fe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(xe+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ae}const J={};J[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(_r),ce(!1),fe(Lc),ie(n.CULL_FACE),oe(hi);function ie(G){c[G]!==!0&&(n.enable(G),c[G]=!0)}function Se(G){c[G]!==!1&&(n.disable(G),c[G]=!1)}function We(G,xe){return d[G]!==xe?(n.bindFramebuffer(G,xe),d[G]=xe,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xe),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ae(G,xe){let te=p,_e=!1;if(G){te=f.get(xe),te===void 0&&(te=[],f.set(xe,te));const Ee=G.textures;if(te.length!==Ee.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Fe=Ee.length;ae<Fe;ae++)te[ae]=n.COLOR_ATTACHMENT0+ae;te.length=Ee.length,_e=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,_e=!0);_e&&n.drawBuffers(te)}function Xe(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const xt={[Rs]:n.FUNC_ADD,[Od]:n.FUNC_SUBTRACT,[Fd]:n.FUNC_REVERSE_SUBTRACT};xt[kd]=n.MIN,xt[Bd]=n.MAX;const se={[zd]:n.ZERO,[Hd]:n.ONE,[Gd]:n.SRC_COLOR,[au]:n.SRC_ALPHA,[$d]:n.SRC_ALPHA_SATURATE,[qd]:n.DST_COLOR,[Wd]:n.DST_ALPHA,[Vd]:n.ONE_MINUS_SRC_COLOR,[ou]:n.ONE_MINUS_SRC_ALPHA,[Yd]:n.ONE_MINUS_DST_COLOR,[Xd]:n.ONE_MINUS_DST_ALPHA,[Kd]:n.CONSTANT_COLOR,[Zd]:n.ONE_MINUS_CONSTANT_COLOR,[Jd]:n.CONSTANT_ALPHA,[Qd]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(G,xe,te,_e,Ee,ae,Fe,Ne,Et,pt){if(G===hi){g===!0&&(Se(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),G!==Ud){if(G!==m||pt!==U){if((S!==Rs||E!==Rs)&&(n.blendEquation(n.FUNC_ADD),S=Rs,E=Rs),pt)switch(G){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFunc(n.ONE,n.ONE);break;case Nc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ic:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ct("WebGLState: Invalid blending: ",G);break}else switch(G){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nc:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",G);break}A=null,b=null,M=null,D=null,y.set(0,0,0),R=0,m=G,U=pt}return}Ee=Ee||xe,ae=ae||te,Fe=Fe||_e,(xe!==S||Ee!==E)&&(n.blendEquationSeparate(xt[xe],xt[Ee]),S=xe,E=Ee),(te!==A||_e!==b||ae!==M||Fe!==D)&&(n.blendFuncSeparate(se[te],se[_e],se[ae],se[Fe]),A=te,b=_e,M=ae,D=Fe),(Ne.equals(y)===!1||Et!==R)&&(n.blendColor(Ne.r,Ne.g,Ne.b,Et),y.copy(Ne),R=Et),m=G,U=!1}function le(G,xe){G.side===wn?Se(n.CULL_FACE):ie(n.CULL_FACE);let te=G.side===un;xe&&(te=!te),ce(te),G.blending===ur&&G.transparent===!1?oe(hi):oe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const _e=G.stencilWrite;o.setTest(_e),_e&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){x!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),x=G)}function fe(G){G!==Dd?(ie(n.CULL_FACE),G!==C&&(G===Lc?n.cullFace(n.BACK):G===Nd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),C=G}function He(G){G!==I&&(V&&n.lineWidth(G),I=G)}function Be(G,xe,te){G?(ie(n.POLYGON_OFFSET_FILL),(P!==xe||O!==te)&&(P=xe,O=te,a.getReversed()&&(xe=-xe),n.polygonOffset(xe,te))):Se(n.POLYGON_OFFSET_FILL)}function qe(G){G?ie(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function $e(G){G===void 0&&(G=n.TEXTURE0+W-1),z!==G&&(n.activeTexture(G),z=G)}function k(G,xe,te){te===void 0&&(z===null?te=n.TEXTURE0+W-1:te=z);let _e=K[te];_e===void 0&&(_e={type:void 0,texture:void 0},K[te]=_e),(_e.type!==G||_e.texture!==xe)&&(z!==te&&(n.activeTexture(te),z=te),n.bindTexture(G,xe||J[G]),_e.type=G,_e.texture=xe)}function ft(){const G=K[z];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function st(){try{n.compressedTexImage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function v(){try{n.texSubImage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function X(){try{n.texSubImage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function he(){try{n.texStorage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function de(){try{n.texStorage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function ee(){try{n.texImage2D(...arguments)}catch(G){ct("WebGLState:",G)}}function ne(){try{n.texImage3D(...arguments)}catch(G){ct("WebGLState:",G)}}function me(G){return u[G]!==void 0?u[G]:n.getParameter(G)}function Ue(G,xe){u[G]!==xe&&(n.pixelStorei(G,xe),u[G]=xe)}function ve(G){nt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),nt.copy(G))}function ge(G){Ze.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ze.copy(G))}function Oe(G,xe){let te=h.get(xe);te===void 0&&(te=new WeakMap,h.set(xe,te));let _e=te.get(G);_e===void 0&&(_e=n.getUniformBlockIndex(xe,G.name),te.set(G,_e))}function Ge(G,xe){const _e=h.get(xe).get(G);l.get(xe)!==_e&&(n.uniformBlockBinding(xe,_e,G.__bindingPointIndex),l.set(xe,_e))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},u={},z=null,K={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,A=null,b=null,E=null,M=null,D=null,y=new Ye(0,0,0),R=0,U=!1,x=null,C=null,I=null,P=null,O=null,nt.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Se,bindFramebuffer:We,drawBuffers:Ae,useProgram:Xe,setBlending:oe,setMaterial:le,setFlipSided:ce,setCullFace:fe,setLineWidth:He,setPolygonOffset:Be,setScissorTest:qe,activeTexture:$e,bindTexture:k,unbindTexture:ft,compressedTexImage2D:st,compressedTexImage3D:L,texImage2D:ee,texImage3D:ne,pixelStorei:Ue,getParameter:me,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:he,texStorage3D:de,texSubImage2D:v,texSubImage3D:X,compressedTexSubImage2D:$,compressedTexSubImage3D:j,scissor:ve,viewport:ge,reset:Qe}}function Y1(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new re,c=new WeakMap,u=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,v){return p?new OffscreenCanvas(L,v):Sr("canvas")}function g(L,v,X){let $=1;const j=st(L);if((j.width>X||j.height>X)&&($=X/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor($*j.width),de=Math.floor($*j.height);d===void 0&&(d=_(he,de));const ee=v?_(he,de):d;return ee.width=he,ee.height=de,ee.getContext("2d").drawImage(L,0,0,he,de),Ve("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+he+"x"+de+")."),ee}else return"data"in L&&Ve("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function m(L){return L.generateMipmaps}function S(L){n.generateMipmap(L)}function A(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,v,X,$,j,he=!1){if(L!==null){if(n[L]!==void 0)return n[L];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de;$&&(de=e.get("EXT_texture_norm16"),de||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=v;if(v===n.RED&&(X===n.FLOAT&&(ee=n.R32F),X===n.HALF_FLOAT&&(ee=n.R16F),X===n.UNSIGNED_BYTE&&(ee=n.R8),X===n.UNSIGNED_SHORT&&de&&(ee=de.R16_EXT),X===n.SHORT&&de&&(ee=de.R16_SNORM_EXT)),v===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.R8UI),X===n.UNSIGNED_SHORT&&(ee=n.R16UI),X===n.UNSIGNED_INT&&(ee=n.R32UI),X===n.BYTE&&(ee=n.R8I),X===n.SHORT&&(ee=n.R16I),X===n.INT&&(ee=n.R32I)),v===n.RG&&(X===n.FLOAT&&(ee=n.RG32F),X===n.HALF_FLOAT&&(ee=n.RG16F),X===n.UNSIGNED_BYTE&&(ee=n.RG8),X===n.UNSIGNED_SHORT&&de&&(ee=de.RG16_EXT),X===n.SHORT&&de&&(ee=de.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RG8UI),X===n.UNSIGNED_SHORT&&(ee=n.RG16UI),X===n.UNSIGNED_INT&&(ee=n.RG32UI),X===n.BYTE&&(ee=n.RG8I),X===n.SHORT&&(ee=n.RG16I),X===n.INT&&(ee=n.RG32I)),v===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),X===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),X===n.UNSIGNED_INT&&(ee=n.RGB32UI),X===n.BYTE&&(ee=n.RGB8I),X===n.SHORT&&(ee=n.RGB16I),X===n.INT&&(ee=n.RGB32I)),v===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),X===n.UNSIGNED_INT&&(ee=n.RGBA32UI),X===n.BYTE&&(ee=n.RGBA8I),X===n.SHORT&&(ee=n.RGBA16I),X===n.INT&&(ee=n.RGBA32I)),v===n.RGB&&(X===n.UNSIGNED_SHORT&&de&&(ee=de.RGB16_EXT),X===n.SHORT&&de&&(ee=de.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),v===n.RGBA){const ne=he?Ra:ot.getTransfer(j);X===n.FLOAT&&(ee=n.RGBA32F),X===n.HALF_FLOAT&&(ee=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ee=ne===yt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&de&&(ee=de.RGBA16_EXT),X===n.SHORT&&de&&(ee=de.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(L,v){let X;return L?v===null||v===Zn||v===vr?X=n.DEPTH24_STENCIL8:v===Un?X=n.DEPTH32F_STENCIL8:v===yr&&(X=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===vr?X=n.DEPTH_COMPONENT24:v===Un?X=n.DEPTH_COMPONENT32F:v===yr&&(X=n.DEPTH_COMPONENT16),X}function M(L,v){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==qt&&L.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function D(L){const v=L.target;v.removeEventListener("dispose",D),R(v),v.isVideoTexture&&c.delete(v),v.isHTMLTexture&&u.delete(v)}function y(L){const v=L.target;v.removeEventListener("dispose",y),x(v)}function R(L){const v=i.get(L);if(v.__webglInit===void 0)return;const X=L.source,$=f.get(X);if($){const j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&U(L),Object.keys($).length===0&&f.delete(X)}i.remove(L)}function U(L){const v=i.get(L);n.deleteTexture(v.__webglTexture);const X=L.source,$=f.get(X);delete $[v.__cacheKey],a.memory.textures--}function x(L){const v=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[$][j]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const X=L.textures;for(let $=0,j=X.length;$<j;$++){const he=i.get(X[$]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(X[$])}i.remove(L)}let C=0;function I(){C=0}function P(){return C}function O(L){C=L}function W(){const L=C;return L>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function V(L){const v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function Q(L,v){const X=i.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const $=L.image;if($===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(X,L,v);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+v)}function N(L,v){const X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){Se(X,L,v);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+v)}function z(L,v){const X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){Se(X,L,v);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+v)}function K(L,v){const X=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){We(X,L,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+v)}const ye={[Ma]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},pe={[qt]:n.NEAREST,[tf]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[no]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},nt={[af]:n.NEVER,[uf]:n.ALWAYS,[of]:n.LESS,[Jl]:n.LEQUAL,[lf]:n.EQUAL,[Ql]:n.GEQUAL,[cf]:n.GREATER,[hf]:n.NOTEQUAL};function Ze(L,v){if(v.type===Un&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jt||v.magFilter===no||v.magFilter===Ur||v.magFilter===Yi||v.minFilter===jt||v.minFilter===no||v.minFilter===Ur||v.minFilter===Yi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ye[v.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ye[v.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ye[v.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,pe[v.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,nt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qt||v.minFilter!==Ur&&v.minFilter!==Yi||v.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function it(L,v){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",D));const $=v.source;let j=f.get($);j===void 0&&(j={},f.set($,j));const he=V(v);if(he!==L.__cacheKey){j[he]===void 0&&(j[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),j[he].usedTimes++;const de=j[L.__cacheKey];de!==void 0&&(j[L.__cacheKey].usedTimes--,de.usedTimes===0&&U(v)),L.__cacheKey=he,L.__webglTexture=j[he].texture}return X}function J(L,v,X){return Math.floor(Math.floor(L/X)/v)}function ie(L,v,X,$){const he=L.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,X,$,v.data);else{he.sort((Ue,ve)=>Ue.start-ve.start);let de=0;for(let Ue=1;Ue<he.length;Ue++){const ve=he[de],ge=he[Ue],Oe=ve.start+ve.count,Ge=J(ge.start,v.width,4),Qe=J(ve.start,v.width,4);ge.start<=Oe+1&&Ge===Qe&&J(ge.start+ge.count-1,v.width,4)===Ge?ve.count=Math.max(ve.count,ge.start+ge.count-ve.start):(++de,he[de]=ge)}he.length=de+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Ue=0,ve=he.length;Ue<ve;Ue++){const ge=he[Ue],Oe=Math.floor(ge.start/4),Ge=Math.ceil(ge.count/4),Qe=Oe%v.width,G=Math.floor(Oe/v.width),xe=Ge,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Qe,G,xe,te,X,$,v.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Se(L,v,X){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const j=it(L,v),he=v.source;t.bindTexture($,L.__webglTexture,n.TEXTURE0+X);const de=i.get(he);if(he.version!==de.__version||j===!0){if(t.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const te=ot.getPrimaries(ot.workingColorSpace),_e=v.colorSpace===Ci?null:ot.getPrimaries(v.colorSpace),Ee=v.colorSpace===Ci||te===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let ne=g(v.image,!1,s.maxTextureSize);ne=ft(v,ne);const me=r.convert(v.format,v.colorSpace),Ue=r.convert(v.type);let ve=b(v.internalFormat,me,Ue,v.normalized,v.colorSpace,v.isVideoTexture);Ze($,v);let ge;const Oe=v.mipmaps,Ge=v.isVideoTexture!==!0,Qe=de.__version===void 0||j===!0,G=he.dataReady,xe=M(v,ne);if(v.isDepthTexture)ve=E(v.format===$i,v.type),Qe&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,ve,ne.width,ne.height,0,me,Ue,null));else if(v.isDataTexture)if(Oe.length>0){Ge&&Qe&&t.texStorage2D(n.TEXTURE_2D,xe,ve,Oe[0].width,Oe[0].height);for(let te=0,_e=Oe.length;te<_e;te++)ge=Oe[te],Ge?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Ue,ge.data):t.texImage2D(n.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,Ue,ge.data);v.generateMipmaps=!1}else Ge?(Qe&&t.texStorage2D(n.TEXTURE_2D,xe,ve,ne.width,ne.height),G&&ie(v,ne,me,Ue)):t.texImage2D(n.TEXTURE_2D,0,ve,ne.width,ne.height,0,me,Ue,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ge&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ve,Oe[0].width,Oe[0].height,ne.depth);for(let te=0,_e=Oe.length;te<_e;te++)if(ge=Oe[te],v.format!==On)if(me!==null)if(Ge){if(G)if(v.layerUpdates.size>0){const Ee=wh(ge.width,ge.height,v.format,v.type);for(const ae of v.layerUpdates){const Fe=ge.data.subarray(ae*Ee/ge.data.BYTES_PER_ELEMENT,(ae+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ae,ge.width,ge.height,1,me,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ne.depth,0,ge.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ne.depth,me,Ue,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ne.depth,0,me,Ue,ge.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ge&&Qe&&t.texStorage2D(n.TEXTURE_2D,xe,ve,Oe[0].width,Oe[0].height);for(let te=0,_e=Oe.length;te<_e;te++)ge=Oe[te],v.format!==On?me!==null?Ge?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,te,ve,ge.width,ge.height,0,ge.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Ue,ge.data):t.texImage2D(n.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,Ue,ge.data)}else if(v.isDataArrayTexture)if(Ge){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ve,ne.width,ne.height,ne.depth),G)if(v.layerUpdates.size>0){const te=wh(ne.width,ne.height,v.format,v.type);for(const _e of v.layerUpdates){const Ee=ne.data.subarray(_e*te/ne.data.BYTES_PER_ELEMENT,(_e+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,ne.width,ne.height,1,me,Ue,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Ue,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,me,Ue,ne.data);else if(v.isData3DTexture)Ge?(Qe&&t.texStorage3D(n.TEXTURE_3D,xe,ve,ne.width,ne.height,ne.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Ue,ne.data)):t.texImage3D(n.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,me,Ue,ne.data);else if(v.isFramebufferTexture){if(Qe)if(Ge)t.texStorage2D(n.TEXTURE_2D,xe,ve,ne.width,ne.height);else{let te=ne.width,_e=ne.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ve,te,_e,0,me,Ue,null),te>>=1,_e>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),u.add(v),te.onpaint=_e=>{const Ee=_e.changedElements;for(const ae of u)Ee.includes(ae.image)&&(ae.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{const Ee=n.RGBA,ae=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ee,ae,Fe,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ge&&Qe){const te=st(Oe[0]);t.texStorage2D(n.TEXTURE_2D,xe,ve,te.width,te.height)}for(let te=0,_e=Oe.length;te<_e;te++)ge=Oe[te],Ge?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me,Ue,ge):t.texImage2D(n.TEXTURE_2D,te,ve,me,Ue,ge);v.generateMipmaps=!1}else if(Ge){if(Qe){const te=st(ne);t.texStorage2D(n.TEXTURE_2D,xe,ve,te.width,te.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ue,ne)}else t.texImage2D(n.TEXTURE_2D,0,ve,me,Ue,ne);m(v)&&S($),de.__version=he.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function We(L,v,X){if(v.image.length!==6)return;const $=it(L,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+X);const he=i.get(j);if(j.version!==he.__version||$===!0){t.activeTexture(n.TEXTURE0+X);const de=ot.getPrimaries(ot.workingColorSpace),ee=v.colorSpace===Ci?null:ot.getPrimaries(v.colorSpace),ne=v.colorSpace===Ci||de===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const me=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!me&&!Ue?ve[ae]=g(v.image[ae],!0,s.maxCubemapSize):ve[ae]=Ue?v.image[ae].image:v.image[ae],ve[ae]=ft(v,ve[ae]);const ge=ve[0],Oe=r.convert(v.format,v.colorSpace),Ge=r.convert(v.type),Qe=b(v.internalFormat,Oe,Ge,v.normalized,v.colorSpace),G=v.isVideoTexture!==!0,xe=he.__version===void 0||$===!0,te=j.dataReady;let _e=M(v,ge);Ze(n.TEXTURE_CUBE_MAP,v);let Ee;if(me){G&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Qe,ge.width,ge.height);for(let ae=0;ae<6;ae++){Ee=ve[ae].mipmaps;for(let Fe=0;Fe<Ee.length;Fe++){const Ne=Ee[Fe];v.format!==On?Oe!==null?G?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ne.width,Ne.height,Oe,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Qe,Ne.width,Ne.height,0,Ne.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ne.width,Ne.height,Oe,Ge,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Qe,Ne.width,Ne.height,0,Oe,Ge,Ne.data)}}}else{if(Ee=v.mipmaps,G&&xe){Ee.length>0&&_e++;const ae=st(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Qe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ue){G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Oe,Ge,ve[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Qe,ve[ae].width,ve[ae].height,0,Oe,Ge,ve[ae].data);for(let Fe=0;Fe<Ee.length;Fe++){const Et=Ee[Fe].image[ae].image;G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Et.width,Et.height,Oe,Ge,Et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Qe,Et.width,Et.height,0,Oe,Ge,Et.data)}}else{G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,Ge,ve[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Qe,Oe,Ge,ve[ae]);for(let Fe=0;Fe<Ee.length;Fe++){const Ne=Ee[Fe];G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Oe,Ge,Ne.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Qe,Oe,Ge,Ne.image[ae])}}}m(v)&&S(n.TEXTURE_CUBE_MAP),he.__version=j.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function Ae(L,v,X,$,j,he){const de=r.convert(X.format,X.colorSpace),ee=r.convert(X.type),ne=b(X.internalFormat,de,ee,X.normalized,X.colorSpace),me=i.get(v),Ue=i.get(X);if(Ue.__renderTarget=v,!me.__hasExternalTextures){const ve=Math.max(1,v.width>>he),ge=Math.max(1,v.height>>he);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,he,ne,ve,ge,v.depth,0,de,ee,null):t.texImage2D(j,he,ne,ve,ge,0,de,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,Ue.__webglTexture,0,qe(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,Ue.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(L,v,X){if(n.bindRenderbuffer(n.RENDERBUFFER,L),v.depthBuffer){const $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,he=E(v.stencilBuffer,j),de=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(v),he,v.width,v.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(v),he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,L)}else{const $=v.textures;for(let j=0;j<$.length;j++){const he=$[j],de=r.convert(he.format,he.colorSpace),ee=r.convert(he.type),ne=b(he.internalFormat,de,ee,he.normalized,he.colorSpace);$e(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(v),ne,v.width,v.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(v),ne,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ne,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(L,v,X){const $=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",D)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,v.depthTexture);const me=r.convert(v.depthTexture.format),Ue=r.convert(v.depthTexture.type);let ve;v.depthTexture.format===pi?ve=n.DEPTH_COMPONENT24:v.depthTexture.format===$i&&(ve=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,v.width,v.height,0,me,Ue,null)}}else Q(v.depthTexture,0);const he=j.__webglTexture,de=qe(v),ee=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,ne=v.depthTexture.format===$i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===pi)$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,he,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,he,0);else if(v.depthTexture.format===$i)$e(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,he,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(L){const v=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(X)for(let $=0;$<6;$++)xt(v.__webglFramebuffer[$],L,$);else{const $=L.texture.mipmaps;$&&$.length>0?xt(v.__webglFramebuffer[0],L,0):xt(v.__webglFramebuffer,L,0)}else if(X){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),Xe(v.__webglDepthbuffer[$],L,!1);else{const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,he)}}else{const $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Xe(v.__webglDepthbuffer,L,!1);else{const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(L,v,X){const $=i.get(L);v!==void 0&&Ae($.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&se(L)}function le(L){const v=L.texture,X=i.get(L),$=i.get(v);L.addEventListener("dispose",y);const j=L.textures,he=L.isWebGLCubeRenderTarget===!0,de=j.length>1;if(de||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),he){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let ne=0;ne<v.mipmaps.length;ne++)X.__webglFramebuffer[ee][ne]=n.createFramebuffer()}else X.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<v.mipmaps.length;ee++)X.__webglFramebuffer[ee]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(de)for(let ee=0,ne=j.length;ee<ne;ee++){const me=i.get(j[ee]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(L.samples>0&&$e(L)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<j.length;ee++){const ne=j[ee];X.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const me=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),ve=b(ne.internalFormat,me,Ue,ne.normalized,ne.colorSpace,L.isXRRenderTarget===!0),ge=qe(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ve,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,v);for(let ee=0;ee<6;ee++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)Ae(X.__webglFramebuffer[ee][ne],L,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else Ae(X.__webglFramebuffer[ee],L,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(v)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ee=0,ne=j.length;ee<ne;ee++){const me=j[ee],Ue=i.get(me);let ve=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ue.__webglTexture),Ze(ve,me),Ae(X.__webglFramebuffer,L,me,n.COLOR_ATTACHMENT0+ee,ve,0),m(me)&&S(ve)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,$.__webglTexture),Ze(ee,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)Ae(X.__webglFramebuffer[ne],L,v,n.COLOR_ATTACHMENT0,ee,ne);else Ae(X.__webglFramebuffer,L,v,n.COLOR_ATTACHMENT0,ee,0);m(v)&&S(ee),t.unbindTexture()}L.depthBuffer&&se(L)}function ce(L){const v=L.textures;for(let X=0,$=v.length;X<$;X++){const j=v[X];if(m(j)){const he=A(L),de=i.get(j).__webglTexture;t.bindTexture(he,de),S(he),t.unbindTexture()}}}const fe=[],He=[];function Be(L){if(L.samples>0){if($e(L)===!1){const v=L.textures,X=L.width,$=L.height;let j=n.COLOR_BUFFER_BIT;const he=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(L),ee=v.length>1;if(ee)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ne=L.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<v.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ue=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,X,$,0,0,X,$,j,n.NEAREST),l===!0&&(fe.length=0,He.length=0,fe.push(n.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(fe.push(he),He.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ue=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const v=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function qe(L){return Math.min(s.maxSamples,L.samples)}function $e(L){const v=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function k(L){const v=a.render.frame;c.get(L)!==v&&(c.set(L,v),L.update())}function ft(L,v){const X=L.colorSpace,$=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Aa&&X!==Ci&&(ot.getTransfer(X)===yt?($!==On||j!==vn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",X)),v}function st(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.getTextureUnits=P,this.setTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=oe,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $1(n,e){function t(i,s=Ci){let r;const a=ot.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===Xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_u)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gu)return n.BYTE;if(i===xu)return n.SHORT;if(i===yr)return n.UNSIGNED_SHORT;if(i===Wl)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===Un)return n.FLOAT;if(i===Jn)return n.HALF_FLOAT;if(i===vu)return n.ALPHA;if(i===bu)return n.RGB;if(i===On)return n.RGBA;if(i===pi)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===Yl)return n.RED;if(i===$l)return n.RED_INTEGER;if(i===ss)return n.RG;if(i===Kl)return n.RG_INTEGER;if(i===Zl)return n.RGBA_INTEGER;if(i===xa||i===_a||i===ya||i===va)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rl||i===al||i===ol||i===ll||i===cl||i===Ea||i===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rl||i===al)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ol)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ll)return r.COMPRESSED_R11_EAC;if(i===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ea)return r.COMPRESSED_RG11_EAC;if(i===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===xl||i===_l||i===yl||i===vl||i===bl||i===Sl||i===wl||i===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ul)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ml)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===Tl||i===Al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===El)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Cl||i===Ta||i===Pl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class J1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Pu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new kn({vertexShader:K1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q1 extends Oi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new J1,m={},S=t.getContextAttributes();let A=null,b=null;const E=[],M=[],D=new re;let y=null,R=null;const U=new yn;U.viewport=new Pt;const x=new yn;x.viewport=new Pt;const C=[U,x],I=new s0;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=E[J];return ie===void 0&&(ie=new co,E[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=E[J];return ie===void 0&&(ie=new co,E[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=E[J];return ie===void 0&&(ie=new co,E[J]=ie),ie.getHandSpace()};function W(J){const ie=M.indexOf(J.inputSource);if(ie===-1)return;const Se=E[ie];Se!==void 0&&(Se.update(J.inputSource,J.frame,h||a),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<E.length;J++){const ie=M[J];ie!==null&&(M[J]=null,E[J].disconnect(ie))}P=null,O=null,g.reset();for(const J in m)delete m[J];if(e.setRenderTarget(A),f=null,d=null,u=null,s=null,b=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(D.width,D.height,!1),R!==null){const J=R.camera;J.fov=R.fov,J.zoom=R.zoom,J.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,We=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?$i:pi,We=S.stencil?vr:Zn);const Xe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Fn(d.textureWidth,d.textureHeight,{format:On,type:vn,depthTexture:new Mr(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Fn(f.framebufferWidth,f.framebufferHeight,{format:On,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(J){for(let ie=0;ie<J.removed.length;ie++){const Se=J.removed[ie],We=M.indexOf(Se);We>=0&&(M[We]=null,E[We].disconnect(Se))}for(let ie=0;ie<J.added.length;ie++){const Se=J.added[ie];let We=M.indexOf(Se);if(We===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=M.length){M.push(Se),We=Xe;break}else if(M[Xe]===null){M[Xe]=Se,We=Xe;break}if(We===-1)break}const Ae=E[We];Ae&&Ae.connect(Se)}}const N=new F,z=new F;function K(J,ie,Se){N.setFromMatrixPosition(ie.matrixWorld),z.setFromMatrixPosition(Se.matrixWorld);const We=N.distanceTo(z),Ae=ie.projectionMatrix.elements,Xe=Se.projectionMatrix.elements,xt=Ae[14]/(Ae[10]-1),se=Ae[14]/(Ae[10]+1),oe=(Ae[9]+1)/Ae[5],le=(Ae[9]-1)/Ae[5],ce=(Ae[8]-1)/Ae[0],fe=(Xe[8]+1)/Xe[0],He=xt*ce,Be=xt*fe,qe=We/(-ce+fe),$e=qe*-ce;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($e),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const k=xt+qe,ft=se+qe,st=He-$e,L=Be+(We-$e),v=oe*se/ft*k,X=le*se/ft*k;J.projectionMatrix.makePerspective(st,L,v,X,k,ft),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ye(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ie=J.near,Se=J.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),I.near=x.near=U.near=ie,I.far=x.far=U.far=Se,(P!==I.near||O!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,O=I.far),I.layers.mask=J.layers.mask|6,U.layers.mask=I.layers.mask&-5,x.layers.mask=I.layers.mask&-3;const We=J.parent,Ae=I.cameras;ye(I,We);for(let Xe=0;Xe<Ae.length;Xe++)ye(Ae[Xe],We);Ae.length===2?K(I,U,x):I.projectionMatrix.copy(U.projectionMatrix),R===null&&J.isPerspectiveCamera&&(R={camera:J,fov:J.fov,zoom:J.zoom}),pe(J,I,We)};function pe(J,ie,Se){Se===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(J){return m[J]};let nt=null;function Ze(J,ie){if(c=ie.getViewerPose(h||a),p=ie,c!==null){const Se=c.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let We=!1;Se.length!==I.cameras.length&&(I.cameras.length=0,We=!0);for(let se=0;se<Se.length;se++){const oe=Se[se];let le=null;if(f!==null)le=f.getViewport(oe);else{const fe=u.getViewSubImage(d,oe);le=fe.viewport,se===0&&(e.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(b))}let ce=C[se];ce===void 0&&(ce=new yn,ce.layers.enable(se),ce.viewport=new Pt,C[se]=ce),ce.matrix.fromArray(oe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(oe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),se===0&&(I.matrix.copy(ce.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),We===!0&&I.cameras.push(ce)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const se=u.getDepthInformation(Se[0]);se&&se.isValid&&se.texture&&g.init(se,s.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let se=0;se<Se.length;se++){const oe=Se[se].camera;if(oe){let le=m[oe];le||(le=new Pu,m[oe]=le);const ce=u.getCameraImage(oe);le.sourceTexture=ce}}}}for(let Se=0;Se<E.length;Se++){const We=M[Se],Ae=E[Se];We!==null&&Ae!==void 0&&Ae.update(We,ie,h||a)}nt&&nt(J,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}const it=new Wu;it.setAnimationLoop(Ze),this.setAnimationLoop=function(J){nt=J},this.dispose=function(){}}}const j1=new lt,Ju=new Ke;Ju.set(-1,0,0,0,1,0,0,0,1);function e_(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,zu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,A,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),c(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,A):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),A=S.envMap,b=S.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ju),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function t_(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const M=E.program;i.uniformBlockBinding(b,M)}function h(b,E){let M=s[b.id];M===void 0&&(g(b),M=c(b),s[b.id]=M,b.addEventListener("dispose",S));const D=E.program;i.updateUBOMapping(b,D);const y=e.render.frame;r[b.id]!==y&&(d(b),r[b.id]=y)}function c(b){const E=u();b.__bindingPointIndex=E;const M=n.createBuffer(),D=b.__size,y=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=s[b.id],M=b.uniforms,D=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let y=0,R=M.length;y<R;y++){const U=M[y];if(Array.isArray(U))for(let x=0,C=U.length;x<C;x++)f(U[x],y,x,D);else f(U,y,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,E,M,D){if(_(b,E,M,D)===!0){const y=b.__offset,R=b.value;if(Array.isArray(R)){let U=0;for(let x=0;x<R.length;x++){const C=R[x],I=m(C);p(C,b.__data,U),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,b.__data)}}function p(b,E,M){typeof b=="number"||typeof b=="boolean"?E[0]=b:b.isMatrix3?(E[0]=b.elements[0],E[1]=b.elements[1],E[2]=b.elements[2],E[3]=0,E[4]=b.elements[3],E[5]=b.elements[4],E[6]=b.elements[5],E[7]=0,E[8]=b.elements[6],E[9]=b.elements[7],E[10]=b.elements[8],E[11]=0):ArrayBuffer.isView(b)?E.set(new b.constructor(b.buffer,b.byteOffset,E.length)):b.toArray(E,M)}function _(b,E,M,D){const y=b.value,R=E+"_"+M;if(D[R]===void 0)return typeof y=="number"||typeof y=="boolean"?D[R]=y:ArrayBuffer.isView(y)?D[R]=y.slice():D[R]=y.clone(),!0;{const U=D[R];if(typeof y=="number"||typeof y=="boolean"){if(U!==y)return D[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(U.equals(y)===!1)return U.copy(y),!0}}return!1}function g(b){const E=b.uniforms;let M=0;const D=16;for(let R=0,U=E.length;R<U;R++){const x=Array.isArray(E[R])?E[R]:[E[R]];for(let C=0,I=x.length;C<I;C++){const P=x[C],O=Array.isArray(P.value)?P.value:[P.value];for(let W=0,V=O.length;W<V;W++){const Q=O[W],N=m(Q),z=M%D,K=z%N.boundary,ye=z+K;M+=K,ye!==0&&D-ye<N.storage&&(M+=D-ye),P.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=M,M+=N.storage}}}const y=M%D;return y>0&&(M+=D-y),b.__size=M,b.__cache={},this}function m(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",b),E}function S(b){const E=b.target;E.removeEventListener("dispose",S);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:h,dispose:A}}const n_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function i_(){return Vn===null&&(Vn=new Ru(n_,16,16,ss,Jn),Vn.name="DFG_LUT",Vn.minFilter=jt,Vn.magFilter=jt,Vn.wrapS=ai,Vn.wrapT=ai,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class s_{constructor(e={}){const{canvas:t=pf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=f,g=new Set([Zl,Kl,$l]),m=new Set([vn,Zn,yr,vr,Xl,ql]),S=new Uint32Array(4),A=new Int32Array(4),b=new F;let E=null,M=null;const D=[],y=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let x=!1,C=null,I=null,P=null,O=null;this._outputColorSpace=cn;let W=0,V=0,Q=null,N=-1,z=null;const K=new Pt,ye=new Pt;let pe=null;const nt=new Ye(0);let Ze=0,it=t.width,J=t.height,ie=1,Se=null,We=null;const Ae=new Pt(0,0,it,J),Xe=new Pt(0,0,it,J);let xt=!1;const se=new ic;let oe=!1,le=!1;const ce=new lt,fe=new F,He=new Pt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function $e(){return Q===null?ie:1}let k=i;function ft(w,H){return t.getContext(w,H)}let st,L,v,X,$,j,he,de,ee,ne,me,Ue,ve,ge,Oe,Ge,Qe,G,xe,te,_e,Ee,ae;try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gl}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),k===null){const H="webgl2";if(k=ft(H,w),k===null)throw ft(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(w){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),ct("WebGLRenderer: "+w.message),w}function Fe(){st=new ix(k),st.init(),_e=new $1(k,st),L=new Yg(k,st,e,_e),v=new q1(k,st),L.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),I=k.createFramebuffer(),P=k.createFramebuffer(),O=k.createFramebuffer(),X=new ax(k),$=new D1,j=new Y1(k,st,v,$,L,_e,X),he=new nx(U),de=new l0(k),Ee=new Xg(k,de),ee=new sx(k,de,X,Ee),ne=new lx(k,ee,de,Ee,X),G=new ox(k,L,j),Oe=new $g($),me=new L1(U,he,st,L,Ee,Oe),Ue=new e_(U,$),ve=new I1,ge=new z1(st),Qe=new Wg(U,he,v,ne,p,l),Ge=new X1(U,ne,L),ae=new t_(k,X,L,v),xe=new qg(k,st,X),te=new rx(k,st,X),X.programs=me.programs,U.capabilities=L,U.extensions=st,U.properties=$,U.renderLists=ve,U.shadowMap=Ge,U.state=v,U.info=X}_!==vn&&(R=new hx(_,t.width,t.height,o,s,r));const Ne=new Q1(U,k);this.xr=Ne,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(w){w!==void 0&&(ie=w,this.setSize(it,J,!1))},this.getSize=function(w){return w.set(it,J)},this.setSize=function(w,H,Z=!0){if(Ne.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}it=w,J=H,t.width=Math.floor(w*ie),t.height=Math.floor(H*ie),Z===!0&&(t.style.width=w+"px",t.style.height=H+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(it*ie,J*ie).floor()},this.setDrawingBufferSize=function(w,H,Z){it=w,J=H,ie=Z,t.width=Math.floor(w*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(_===vn){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(K)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,H,Z,q){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,H,Z,q),v.viewport(K.copy(Ae).multiplyScalar(ie).round())},this.getScissor=function(w){return w.copy(Xe)},this.setScissor=function(w,H,Z,q){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,H,Z,q),v.scissor(ye.copy(Xe).multiplyScalar(ie).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){v.setScissorTest(xt=w)},this.setOpaqueSort=function(w){Se=w},this.setTransparentSort=function(w){We=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,Z=!0){let q=0;if(w){let Y=!1;if(Q!==null){const Me=Q.texture.format;Y=g.has(Me)}if(Y){const Me=Q.texture.type,Ce=m.has(Me),we=Qe.getClearColor(),Le=Qe.getClearAlpha(),Ie=we.r,et=we.g,rt=we.b;Ce?(S[0]=Ie,S[1]=et,S[2]=rt,S[3]=Le,k.clearBufferuiv(k.COLOR,0,S)):(A[0]=Ie,A[1]=et,A[2]=rt,A[3]=Le,k.clearBufferiv(k.COLOR,0,A))}else q|=k.COLOR_BUFFER_BIT}H&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),C=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),Qe.dispose(),ve.dispose(),ge.dispose(),$.dispose(),he.dispose(),ne.dispose(),Ee.dispose(),ae.dispose(),me.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Sc),Ne.removeEventListener("sessionend",wc),zi.stop()};function Et(w){w.preventDefault(),Fc("WebGLRenderer: Context Lost."),x=!0}function pt(){Fc("WebGLRenderer: Context Restored."),x=!1;const w=X.autoReset,H=Ge.enabled,Z=Ge.autoUpdate,q=Ge.needsUpdate,Y=Ge.type;Fe(),X.autoReset=w,Ge.enabled=H,Ge.autoUpdate=Z,Ge.needsUpdate=q,Ge.type=Y}function Pn(w){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function zn(w){const H=w.target;H.removeEventListener("dispose",zn),Ed(H)}function Ed(w){Td(w),$.remove(w)}function Td(w){const H=$.get(w).programs;H!==void 0&&(H.forEach(function(Z){me.releaseProgram(Z)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,Z,q,Y,Me){H===null&&(H=Be);const Ce=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,we=Cd(w,H,Z,q,Y);v.setMaterial(q,Ce);let Le=Z.index,Ie=1;if(q.wireframe===!0){if(Le=ee.getWireframeAttribute(Z),Le===void 0)return;Ie=2}const et=Z.drawRange,rt=Z.attributes.position;let De=et.start*Ie,mt=(et.start+et.count)*Ie;Me!==null&&(De=Math.max(De,Me.start*Ie),mt=Math.min(mt,(Me.start+Me.count)*Ie)),Le!==null?(De=Math.max(De,0),mt=Math.min(mt,Le.count)):rt!=null&&(De=Math.max(De,0),mt=Math.min(mt,rt.count));const Ot=mt-De;if(Ot<0||Ot===1/0)return;Ee.setup(Y,q,we,Z,Le);let Rt,Mt=xe;if(Le!==null&&(Rt=de.get(Le),Mt=te,Mt.setIndex(Rt)),Y.isMesh)q.wireframe===!0?(v.setLineWidth(q.wireframeLinewidth*$e()),Mt.setMode(k.LINES)):Mt.setMode(k.TRIANGLES);else if(Y.isLine){let Kt=q.linewidth;Kt===void 0&&(Kt=1),v.setLineWidth(Kt*$e()),Y.isLineSegments?Mt.setMode(k.LINES):Y.isLineLoop?Mt.setMode(k.LINE_LOOP):Mt.setMode(k.LINE_STRIP)}else Y.isPoints?Mt.setMode(k.POINTS):Y.isSprite&&Mt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,Re=Y._multiDrawCounts,sn=Y._multiDrawCount,ut=Le?de.get(Le).bytesPerElement:1,bn=$.get(q).currentProgram.getUniforms();for(let Hn=0;Hn<sn;Hn++)bn.setValue(k,"_gl_DrawID",Hn),Mt.render(Kt[Hn]/ut,Re[Hn])}else if(Y.isInstancedMesh)Mt.renderInstances(De,Ot,Y.count);else if(Z.isInstancedBufferGeometry){const Kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Re=Math.min(Z.instanceCount,Kt);Mt.renderInstances(De,Ot,Re)}else Mt.render(De,Ot)};function bc(w,H,Z,q){C!==null&&w.isNodeMaterial&&C.setObject(q,w),oe===!0&&Oe.setState(w,Z,!1),w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Ir(w,H,q),w.side=ns,w.needsUpdate=!0,Ir(w,H,q),w.side=wn):Ir(w,H,q)}this.compile=function(w,H,Z=null){Z===null&&(Z=w),C!==null&&C.renderStart(w,H,Z),M=ge.get(Z),M.init(H),y.push(M),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),w!==Z&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights(),C!==null&&C.updateLights(M.state.lightsArray),le=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,le),oe===!0&&Oe.setGlobalState(this.clippingPlanes,H),C!==null&&Ge.render(M.state.shadowsArray,Z,H);const q=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const we=Me[Ce];bc(we,Z,H,Y),q.add(we)}else bc(Me,Z,H,Y),q.add(Me)}),M=y.pop(),C!==null&&C.renderEnd(),q},this.compileAsync=function(w,H,Z=null){const q=this.compile(w,H,Z);return new Promise(Y=>{function Me(){if(q.forEach(function(Ce){const Le=$.get(Ce).currentProgram;(Le===void 0||Le.isReady())&&q.delete(Ce)}),q.size===0){Y(w);return}setTimeout(Me,10)}st.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Qa=null;function Ad(w){Qa&&Qa(w)}function Sc(){zi.stop()}function wc(){zi.start()}const zi=new Wu;zi.setAnimationLoop(Ad),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(w){Qa=w,Ne.setAnimationLoop(w),w===null?zi.stop():zi.start()},Ne.addEventListener("sessionstart",Sc),Ne.addEventListener("sessionend",wc),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C!==null&&C.renderStart(w,H);const Z=Ne.enabled===!0&&Ne.isPresenting===!0,q=R!==null&&(Q===null||Z)&&R.begin(U,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(H),H=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,H,Q),M=ge.get(w,y.length),M.init(H),M.state.textureUnits=j.getTextureUnits(),y.push(M),ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),se.setFromProjectionMatrix(ce,Yn,H.reversedDepth),le=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,le),E=ve.get(w,D.length),E.init(),D.push(E),Ne.enabled===!0&&Ne.isPresenting===!0){const Ce=U.xr.getDepthSensingMesh();Ce!==null&&ja(Ce,H,-1/0,U.sortObjects)}ja(w,H,0,U.sortObjects),E.finish(),C!==null&&C.updateLights(M.state.lightsArray),U.sortObjects===!0&&E.sort(Se,We),qe=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,qe&&Qe.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Oe.beginShadows();const Y=M.state.shadowsArray;if(Ge.render(Y,w,H),oe===!0&&Oe.endShadows(),(q&&R.hasRenderPass())===!1){const Ce=E.opaque,we=E.transmissive;if(M.setupLights(),H.isArrayCamera){const Le=H.cameras;if(we.length>0)for(let Ie=0,et=Le.length;Ie<et;Ie++){const rt=Le[Ie];Ec(Ce,we,w,rt)}qe&&Qe.render(w);for(let Ie=0,et=Le.length;Ie<et;Ie++){const rt=Le[Ie];Mc(E,w,rt,rt.viewport)}}else we.length>0&&Ec(Ce,we,w,H),qe&&Qe.render(w),Mc(E,w,H)}Q!==null&&V===0&&(j.updateMultisampleRenderTarget(Q),j.updateRenderTargetMipmap(Q)),q&&R.end(U),w.isScene===!0&&w.onAfterRender(U,w,H),Ee.resetDefaultState(),N=-1,z=null,y.pop(),y.length>0?(M=y[y.length-1],j.setTextureUnits(M.state.textureUnits),oe===!0&&Oe.setGlobalState(U.clippingPlanes,M.state.camera)):M=null,D.pop(),D.length>0?E=D[D.length-1]:E=null,C!==null&&C.renderEnd()};function ja(w,H,Z,q){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(se)){q&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const Ce=ne.update(w),we=w.material;we.visible&&E.push(w,Ce,we,Z,He.z,null,H)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(se))){const Ce=ne.update(w),we=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),He.copy(Ce.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(we)){const Le=Ce.groups;for(let Ie=0,et=Le.length;Ie<et;Ie++){const rt=Le[Ie],De=we[rt.materialIndex];De&&De.visible&&E.push(w,Ce,De,Z,He.z,rt,H)}}else we.visible&&E.push(w,Ce,we,Z,He.z,null,H)}}const Me=w.children;for(let Ce=0,we=Me.length;Ce<we;Ce++)ja(Me[Ce],H,Z,q)}function Mc(w,H,Z,q){const{opaque:Y,transmissive:Me,transparent:Ce}=w;M.setupLightsView(Z),oe===!0&&Oe.setGlobalState(U.clippingPlanes,Z),q&&v.viewport(K.copy(q)),Y.length>0&&Nr(Y,H,Z),Me.length>0&&Nr(Me,H,Z),Ce.length>0&&Nr(Ce,H,Z),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ec(w,H,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){const De=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new Fn(1,1,{generateMipmaps:!0,type:De?Jn:vn,minFilter:Yi,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Me=M.state.transmissionRenderTarget[q.id],Ce=q.viewport||K;Me.setSize(Ce.z*U.transmissionResolutionScale,Ce.w*U.transmissionResolutionScale);const we=U.getRenderTarget(),Le=U.getActiveCubeFace(),Ie=U.getActiveMipmapLevel();U.setRenderTarget(Me),U.getClearColor(nt),Ze=U.getClearAlpha(),Ze<1&&U.setClearColor(16777215,.5),U.clear(),qe&&Qe.render(Z);const et=U.toneMapping;U.toneMapping=$n;const rt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),oe===!0&&Oe.setGlobalState(U.clippingPlanes,q),Nr(w,Z,q),j.updateMultisampleRenderTarget(Me),j.updateRenderTargetMipmap(Me),st.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let mt=0,Ot=H.length;mt<Ot;mt++){const Rt=H[mt],{object:Mt,geometry:Kt,material:Re,group:sn}=Rt;if(Re.side===wn&&Mt.layers.test(q.layers)){const ut=Re.side;Re.side=un,Re.needsUpdate=!0,Tc(Mt,Z,q,Kt,Re,sn),Re.side=ut,Re.needsUpdate=!0,De=!0}}De===!0&&(j.updateMultisampleRenderTarget(Me),j.updateRenderTargetMipmap(Me))}U.setRenderTarget(we,Le,Ie),U.setClearColor(nt,Ze),rt!==void 0&&(q.viewport=rt),U.toneMapping=et}function Nr(w,H,Z){const q=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Me=w.length;Y<Me;Y++){const Ce=w[Y],{object:we,geometry:Le,group:Ie}=Ce;let et=Ce.material;et.allowOverride===!0&&q!==null&&(et=q),we.layers.test(Z.layers)&&Tc(we,H,Z,Le,et,Ie)}}function Tc(w,H,Z,q,Y,Me){C!==null&&Y.isNodeMaterial&&C.setObject(w,Y),w.onBeforeRender(U,H,Z,q,Y,Me),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(U,H,Z,q,w,Me),Y.transparent===!0&&Y.side===wn&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,U.renderBufferDirect(Z,H,q,Y,w,Me),Y.side=ns,Y.needsUpdate=!0,U.renderBufferDirect(Z,H,q,Y,w,Me),Y.side=wn):U.renderBufferDirect(Z,H,q,Y,w,Me),w.onAfterRender(U,H,Z,q,Y,Me)}function Ir(w,H,Z){H.isScene!==!0&&(H=Be);const q=$.get(w),Y=M.state.lights,Me=M.state.shadowsArray,Ce=Y.state.version,we=me.getParameters(w,Y.state,Me,H,Z,M.state.lightProbeGridArray),Le=me.getProgramCacheKey(we);let Ie=q.programs;q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;const et=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;q.envMap=he.get(w.envMap||q.environment,et),q.envMapRotation=q.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",zn),Ie=new Map,q.programs=Ie);let rt=Ie.get(Le);if(rt!==void 0){if(q.currentProgram===rt&&q.lightsStateVersion===Ce)return Rc(w,we),rt}else we.uniforms=me.getUniforms(w),C!==null&&w.isNodeMaterial&&C.build(w,Z,we),w.onBeforeCompile(we,U),rt=me.acquireProgram(we,Le),Ie.set(Le,rt),q.uniforms=we.uniforms;const De=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Oe.uniform),Rc(w,we),q.needsLights=Ld(w),q.lightsStateVersion=Ce,q.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.sunLights.value=Y.state.sun,De.sunLightShadows.value=Y.state.sunShadow,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.sunShadowMatrix.value=Y.state.sunShadowMatrix,De.sunShadowCascade.value=Y.state.sunShadowCascade,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=rt,q.uniformsList=null,rt}function Ac(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=ba.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Rc(w,H){const Z=$.get(w);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Rd(w,H){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;b.setFromMatrixPosition(H.matrixWorld);for(let Z=0,q=w.length;Z<q;Z++){const Y=w[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(b))return Y}return null}function Cd(w,H,Z,q,Y){H.isScene!==!0&&(H=Be),j.resetTextureUnits();const Me=H.fog,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,we=Q===null?U.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ot.workingColorSpace,Le=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ie=he.get(q.envMap||Ce,Le),et=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,rt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,Ot=!!Z.morphAttributes.color;let Rt=$n;q.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Rt=U.toneMapping);const Mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Kt=Mt!==void 0?Mt.length:0,Re=$.get(q),sn=M.state.lights;if(oe===!0&&(le===!0||w!==z)){const Tt=w===z&&q.id===N;Oe.setState(q,w,Tt)}let ut=!1;q.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==sn.state.version||Re.outputColorSpace!==we||Y.isBatchedMesh&&Re.batching===!1||!Y.isBatchedMesh&&Re.batching===!0||Y.isBatchedMesh&&Re.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Re.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Re.instancing===!1||!Y.isInstancedMesh&&Re.instancing===!0||Y.isSkinnedMesh&&Re.skinning===!1||!Y.isSkinnedMesh&&Re.skinning===!0||Y.isInstancedMesh&&Re.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Re.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Re.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Re.instancingMorph===!1&&Y.morphTexture!==null||Re.envMap!==Ie||q.fog===!0&&Re.fog!==Me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Oe.numPlanes||Re.numIntersection!==Oe.numIntersection)||Re.vertexAlphas!==et||Re.vertexTangents!==rt||Re.morphTargets!==De||Re.morphNormals!==mt||Re.morphColors!==Ot||Re.toneMapping!==Rt||Re.morphTargetsCount!==Kt||!!Re.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Re.__version=q.version);let bn=Re.currentProgram;ut===!0&&(bn=Ir(q,H,Y),C&&q.isNodeMaterial&&C.onUpdateProgram(q,bn,Re));let Hn=!1,gi=!1,cs=!1;const bt=bn.getUniforms(),It=Re.uniforms;if(v.useProgram(bn.program)&&(Hn=!0,gi=!0,cs=!0),q.id!==N&&(N=q.id,gi=!0),Re.needsLights){const Tt=Rd(M.state.lightProbeGridArray,Y);Re.lightProbeGrid!==Tt&&(Re.lightProbeGrid=Tt,gi=!0)}if(Hn||z!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),bt.setValue(k,"projectionMatrix",w.projectionMatrix),bt.setValue(k,"viewMatrix",w.matrixWorldInverse);const _i=bt.map.cameraPosition;_i!==void 0&&_i.setValue(k,fe.setFromMatrixPosition(w.matrixWorld)),L.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,gi=!0,cs=!0)}if(Re.needsLights&&(sn.state.sunShadowMap.length>0&&bt.setValue(k,"sunShadowMap",sn.state.sunShadowMap,j),sn.state.directionalShadowMap.length>0&&bt.setValue(k,"directionalShadowMap",sn.state.directionalShadowMap,j),sn.state.spotShadowMap.length>0&&bt.setValue(k,"spotShadowMap",sn.state.spotShadowMap,j),sn.state.pointShadowMap.length>0&&bt.setValue(k,"pointShadowMap",sn.state.pointShadowMap,j)),Y.isSkinnedMesh){bt.setOptional(k,Y,"bindMatrix"),bt.setOptional(k,Y,"bindMatrixInverse");const Tt=Y.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),bt.setValue(k,"boneTexture",Tt.boneTexture,j))}Y.isBatchedMesh&&(bt.setOptional(k,Y,"batchingTexture"),bt.setValue(k,"batchingTexture",Y._matricesTexture,j),bt.setOptional(k,Y,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",Y._indirectTexture,j),bt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",Y._colorsTexture,j));const xi=Z.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&G.update(Y,Z,bn),(gi||Re.receiveShadow!==Y.receiveShadow)&&(Re.receiveShadow=Y.receiveShadow,bt.setValue(k,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(It.envMapIntensity.value=H.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=i_()),gi){if(bt.setValue(k,"toneMappingExposure",U.toneMappingExposure),Re.needsLights&&Pd(It,cs),Me&&q.fog===!0&&Ue.refreshFogUniforms(It,Me),Ue.refreshMaterialUniforms(It,q,ie,J,M.state.transmissionRenderTarget[w.id]),Re.needsLights&&Re.lightProbeGrid){const Tt=Re.lightProbeGrid;It.probesSH.value=Tt.texture,It.probesMin.value.copy(Tt.boundingBox.min),It.probesMax.value.copy(Tt.boundingBox.max),It.probesResolution.value.copy(Tt.resolution)}ba.upload(k,Ac(Re),It,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ba.upload(k,Ac(Re),It,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(k,"center",Y.center),bt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(k,"normalMatrix",Y.normalMatrix),bt.setValue(k,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const Tt=q.uniformsGroups;for(let _i=0,hs=Tt.length;_i<hs;_i++){const Pc=Tt[_i];ae.update(Pc,bn),ae.bind(Pc,bn)}}return bn}function Pd(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.sunLights.needsUpdate=H,w.sunLightShadows.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Ld(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,H,Z){const q=$.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(w.texture).__webglTexture=H,$.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const Z=$.get(w);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(w,H=0,Z=0){Q=w,W=H,V=Z;let q=null,Y=!1,Me=!1;if(w){const we=$.get(w);if(we.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(k.FRAMEBUFFER,we.__webglFramebuffer),K.copy(w.viewport),ye.copy(w.scissor),pe=w.scissorTest,v.viewport(K),v.scissor(ye),v.setScissorTest(pe),N=-1;return}else if(we.__webglFramebuffer===void 0)j.setupRenderTarget(w);else if(we.__hasExternalTextures)j.rebindTextures(w,$.get(w.texture).__webglTexture,$.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&$.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Me=!0);const Ie=$.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[H])?q=Ie[H][Z]:q=Ie[H],Y=!0):w.samples>0&&j.useMultisampledRTT(w)===!1?q=$.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?q=Ie[Z]:q=Ie,K.copy(w.viewport),ye.copy(w.scissor),pe=w.scissorTest}else K.copy(Ae).multiplyScalar(ie).floor(),ye.copy(Xe).multiplyScalar(ie).floor(),pe=xt;if(Z!==0&&(q=I),v.bindFramebuffer(k.FRAMEBUFFER,q)&&v.drawBuffers(w,q),v.viewport(K),v.scissor(ye),v.setScissorTest(pe),Y){const we=$.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,we.__webglTexture,Z)}else if(Me){const we=H;for(let Le=0;Le<w.textures.length;Le++){const Ie=$.get(w.textures[Le]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Le,Ie.__webglTexture,Z,we)}}else if(w!==null&&Z!==0){const we=$.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,Z)}N=-1};function Cc(w){const H=$.get(w);return(H.__readFormat!==w.format||H.__readType!==w.type)&&(H.__readFormat=w.format,H.__readType=w.type,H.__formatReadable=L.textureFormatReadable(w.format),H.__typeReadable=L.textureTypeReadable(w.type)),H}this.readRenderTargetPixels=function(w,H,Z,q,Y,Me,Ce,we=0){if(!(w&&w.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){v.bindFramebuffer(k.FRAMEBUFFER,Le);try{const Ie=w.textures[we],et=Ie.format,rt=Ie.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);const De=Cc(Ie);if(De.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-q&&Z>=0&&Z<=w.height-Y&&k.readPixels(H,Z,q,Y,_e.convert(et),_e.convert(rt),Me)}finally{const Ie=Q!==null?$.get(Q).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,H,Z,q,Y,Me,Ce,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=$.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(H>=0&&H<=w.width-q&&Z>=0&&Z<=w.height-Y){v.bindFramebuffer(k.FRAMEBUFFER,Le);const Ie=w.textures[we],et=Ie.format,rt=Ie.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);const De=Cc(Ie);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),k.readPixels(H,Z,q,Y,_e.convert(et),_e.convert(rt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ot=Q!==null?$.get(Q).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,Ot);const Rt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await mf(k,Rt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,mt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(mt),k.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,Z=0){const q=Math.pow(2,-Z),Y=Math.floor(w.image.width*q),Me=Math.floor(w.image.height*q),Ce=H!==null?H.x:0,we=H!==null?H.y:0;j.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Ce,we,Y,Me),v.unbindTexture()},this.copyTextureToTexture=function(w,H,Z=null,q=null,Y=0,Me=0){let Ce,we,Le,Ie,et,rt,De,mt,Ot;const Rt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(Z!==null)Ce=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Ie=Z.min.x,et=Z.min.y,rt=Z.isBox3?Z.min.z:0;else{const It=Math.pow(2,-Y);Ce=Math.floor(Rt.width*It),we=Math.floor(Rt.height*It),w.isDataArrayTexture?Le=Rt.depth:w.isData3DTexture?Le=Math.floor(Rt.depth*It):Le=1,Ie=0,et=0,rt=0}q!==null?(De=q.x,mt=q.y,Ot=q.z):(De=0,mt=0,Ot=0);const Mt=_e.convert(H.format),Kt=_e.convert(H.type);let Re;H.isData3DTexture?(j.setTexture3D(H,0),Re=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(j.setTexture2DArray(H,0),Re=k.TEXTURE_2D_ARRAY):(j.setTexture2D(H,0),Re=k.TEXTURE_2D),v.activeTexture(k.TEXTURE0),v.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const sn=v.getParameter(k.UNPACK_ROW_LENGTH),ut=v.getParameter(k.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(k.UNPACK_SKIP_PIXELS),Hn=v.getParameter(k.UNPACK_SKIP_ROWS),gi=v.getParameter(k.UNPACK_SKIP_IMAGES);v.pixelStorei(k.UNPACK_ROW_LENGTH,Rt.width),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt.height),v.pixelStorei(k.UNPACK_SKIP_PIXELS,Ie),v.pixelStorei(k.UNPACK_SKIP_ROWS,et),v.pixelStorei(k.UNPACK_SKIP_IMAGES,rt);const cs=w.isDataArrayTexture||w.isData3DTexture,bt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const It=$.get(w),xi=$.get(H),Tt=$.get(It.__renderTarget),_i=$.get(xi.__renderTarget);v.bindFramebuffer(k.READ_FRAMEBUFFER,Tt.__webglFramebuffer),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let hs=0;hs<Le;hs++)cs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(w).__webglTexture,Y,rt+hs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(H).__webglTexture,Me,Ot+hs)),k.blitFramebuffer(Ie,et,Ce,we,De,mt,Ce,we,k.DEPTH_BUFFER_BIT,k.NEAREST);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||$.has(w)){const It=$.get(w),xi=$.get(H);v.bindFramebuffer(k.READ_FRAMEBUFFER,P),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let Tt=0;Tt<Le;Tt++)cs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,It.__webglTexture,Y,rt+Tt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,It.__webglTexture,Y),bt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xi.__webglTexture,Me,Ot+Tt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xi.__webglTexture,Me),Y!==0?k.blitFramebuffer(Ie,et,Ce,we,De,mt,Ce,we,k.COLOR_BUFFER_BIT,k.NEAREST):bt?k.copyTexSubImage3D(Re,Me,De,mt,Ot+Tt,Ie,et,Ce,we):k.copyTexSubImage2D(Re,Me,De,mt,Ie,et,Ce,we);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else bt?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Re,Me,De,mt,Ot,Ce,we,Le,Mt,Kt,Rt.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Re,Me,De,mt,Ot,Ce,we,Le,Mt,Rt.data):k.texSubImage3D(Re,Me,De,mt,Ot,Ce,we,Le,Mt,Kt,Rt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,De,mt,Ce,we,Mt,Kt,Rt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,De,mt,Rt.width,Rt.height,Mt,Rt.data):k.texSubImage2D(k.TEXTURE_2D,Me,De,mt,Ce,we,Mt,Kt,Rt);v.pixelStorei(k.UNPACK_ROW_LENGTH,sn),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut),v.pixelStorei(k.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(k.UNPACK_SKIP_ROWS,Hn),v.pixelStorei(k.UNPACK_SKIP_IMAGES,gi),Me===0&&H.generateMipmaps&&k.generateMipmap(Re),v.unbindTexture()},this.initRenderTarget=function(w){$.get(w).__webglFramebuffer===void 0&&j.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?j.setTextureCube(w,0):w.isData3DTexture?j.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?j.setTexture2DArray(w,0):j.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){W=0,V=0,Q=null,v.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const qh={type:"change"},uc={type:"start"},Qu={type:"end"},da=new ka,Yh=new In,r_=Math.cos(70*wu.DEG2RAD),Bt=new F,dn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ko=1e-6;class ju extends a0{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Rn,this._lastTargetPosition=new F,this._quat=new Rn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bh,this._sphericalDelta=new bh,this._scale=1,this._panOffset=new F,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new F,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=o_.bind(this),this._onPointerDown=a_.bind(this),this._onPointerUp=l_.bind(this),this._onContextMenu=m_.bind(this),this._onMouseWheel=u_.bind(this),this._onKeyDown=d_.bind(this),this._onTouchStart=f_.bind(this),this._onTouchMove=p_.bind(this),this._onMouseDown=c_.bind(this),this._onMouseMove=h_.bind(this),this._interceptControlDown=g_.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=vt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qh),this.update(),this.state=vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Bt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(da.origin.copy(this.object.position),da.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(da.direction))<r_?this.object.lookAt(this.target):(Yh.setFromNormalAndCoplanarPoint(this.object.up,this.target),da.intersectPlane(Yh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ko||this._lastTargetPosition.distanceToSquared(this.target)>ko?(this.dispatchEvent(qh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?dn/60*this.autoRotateSpeed*e:dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/t.clientHeight),this._rotateUp(dn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function a_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function o_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function l_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qu),this.state=vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function c_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ci.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=vt.DOLLY;break;case ci.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=vt.ROTATE}break;case ci.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(uc)}function h_(n){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function u_(n){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(n.preventDefault(),this.dispatchEvent(uc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qu))}function d_(n){this.enabled!==!1&&this._handleKeyDown(n)}function f_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=vt.TOUCH_ROTATE;break;case qn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=vt.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(uc)}function p_(n){switch(this._trackPointer(n),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=vt.NONE}}function m_(n){this.enabled!==!1&&n.preventDefault()}function g_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class __ extends kt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new re(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}}const Ts=new F,$h=new lt,Kh=new lt,Zh=new F,Jh=new F;class y_{constructor(e={}){const t=this;let i,s,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),$h.copy(_.matrixWorldInverse),Kh.multiplyMatrices(_.projectionMatrix,$h),c(p,p,_),this.sortObjects&&f(p)},this.setSize=function(p,_){i=p,s=_,r=i/2,a=s/2,l.style.width=p+"px",l.style.height=_+"px"};function h(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,g=p.children.length;_<g;_++)h(p.children[_])}function c(p,_,g){if(p.visible===!1){h(p);return}if(p.isCSS2DObject){Ts.setFromMatrixPosition(p.matrixWorld),Ts.applyMatrix4(Kh);const m=Ts.z>=-1&&Ts.z<=1&&p.layers.test(g.layers)===!0,S=p.element;if(S.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,_,g);const b=100*p.center.x,E=100*p.center.y;S.style.transformOrigin=`${b}% ${E}%`;const M=-p.rotation2D,D=Ts.x*r+r,y=-Ts.y*a+a;S.style.transform=`translate(${-b}%, ${-E}%) translate(${D}px, ${y}px) rotate(${M}rad)`,S.parentNode!==l&&l.appendChild(S),p.onAfterRender(t,_,g)}const A={distanceToCameraSquared:u(g,p)};o.objects.set(p,A)}for(let m=0,S=p.children.length;m<S;m++)c(p.children[m],_,g)}function u(p,_){return Zh.setFromMatrixPosition(p.matrixWorld),Jh.setFromMatrixPosition(_.matrixWorld),Zh.distanceToSquared(Jh)}function d(p){const _=[];return p.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(p){const _=d(p).sort(function(m,S){if(m.renderOrder!==S.renderOrder)return S.renderOrder-m.renderOrder;const A=o.objects.get(m).distanceToCameraSquared,b=o.objects.get(S).distanceToCameraSquared;return A-b}),g=_.length;for(let m=0,S=_.length;m<S;m++)_[m].element.style.zIndex=g-m}}}let Bo=7;const Pe=()=>(Bo=Bo*16807%2147483647,(Bo-1)/2147483646);let Xn=1;function v_(n){Xn=n}function St(n=512){n=Math.max(64,Math.round(n*Xn));const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d",{willReadFrequently:!0});return t.scale(n/(n/Xn),n/(n/Xn)),[e,t]}function fn(n,e,t=2,i=!1){const s=n.width,r=n.getContext("2d").getImageData(0,0,s,s).data,a=document.createElement("canvas");a.width=a.height=s;const o=a.getContext("2d"),l=o.createImageData(s,s),h=(c,u)=>{c=(c+s)%s,u=(u+s)%s;const d=(u*s+c)*4,f=(r[d]*.3+r[d+1]*.59+r[d+2]*.11)/255;return i?1-f:f};for(let c=0;c<s;c++)for(let u=0;u<s;u++){const d=(h(u+1,c)-h(u-1,c))*t,f=(h(u,c+1)-h(u,c-1))*t,p=Math.hypot(d,f,1),_=(c*s+u)*4;l.data[_]=(-d/p*.5+.5)*255,l.data[_+1]=(f/p*.5+.5)*255,l.data[_+2]=(1/p*.5+.5)*255,l.data[_+3]=255}return o.putImageData(l,0,0),_t(a,e,!1)}function _t(n,e,t=!0){const i=new ip(n);return i.wrapS=i.wrapT=Ma,i.repeat.set(1/e,1/e),t&&(i.colorSpace=cn),i.anisotropy=4,i}function rn(n,e,t,i,s){for(let r=0;r<s;r++){n.fillStyle=i[Pe()*i.length|0],n.globalAlpha=t*Pe();const a=1+Pe()*2.5;n.fillRect(Pe()*e,Pe()*e,a,a)}n.globalAlpha=1}function b_(){const n={};{const[e,t]=St(256);t.fillStyle="#efebe3",t.fillRect(0,0,256,256),rn(t,256,.25,["#ffffff","#ddd6ca","#e6e0d5"],5e3),n.stucco=_t(e,6)}{const[e,t]=St(256);t.fillStyle="#f2ece2",t.fillRect(0,0,256,256),rn(t,256,.18,["#fbf7f0","#e4dccf"],3e3),n.plaster=_t(e,6)}{const[e,t]=St(512);t.fillStyle="#2b2724",t.fillRect(0,0,512,512);const i=512/12;for(let s=0;s<12;s++){const r=30+Pe()*14;t.fillStyle=`rgb(${r+6},${r+2},${r})`,t.fillRect(s*i,0,i-2,512);for(let a=0;a<140;a++)t.fillStyle=Pe()<.5?"#1c1a18":"#45403a",t.globalAlpha=.5,t.fillRect(s*i+Pe()*i,Pe()*512,2+Pe()*8,1+Pe()*2);t.globalAlpha=1,t.fillStyle="#151311",t.fillRect(s*i+i-2,0,2,512)}n.charred=_t(e,6)}{const[e,t]=St(512);let i=0;const s=["#b98d6c","#c49a78","#a87d5f","#cfa888","#b48a6a","#9f7558","#c8a080"];for(;i<512;){const r=10+Pe()*34;t.fillStyle=s[Pe()*s.length|0],t.fillRect(0,i,512,r),i+=r}rn(t,512,.35,["#8a654b","#dcc0a2","#9a7458"],9e3),n.rammed=_t(e,8)}{const[e,t]=St(512);t.fillStyle="#9d968a",t.fillRect(0,0,512,512);const i=4,s=512/i;for(let r=0;r<i;r++){let a=-Pe()*100;for(;a<512;){const o=90+Pe()*120,l=175+Pe()*25;t.fillStyle=`rgb(${l},${l-6},${l-16})`,t.fillRect(a+2,r*s+2,o-4,s-4),a+=o}}rn(t,512,.25,["#8e877b","#d8d1c4"],6e3),n.stone=_t(e,8)}{const[e,t]=St(256);t.fillStyle="#6f6a62",t.fillRect(0,0,256,256);for(let i=0;i<4;i++){let s=-Pe()*60;for(;s<256;){const r=40+Pe()*70,a=120+Pe()*30;t.fillStyle=`rgb(${a},${a-4},${a-10})`,t.fillRect(s+2,i*64+2,r-3,60),s+=r}}n.plinth=_t(e,4)}{const[e,t]=St(512);t.fillStyle="#c9a57a",t.fillRect(0,0,512,512);const i=512/8;for(let s=0;s<8;s++){let r=-Pe()*300;for(;r<512;){const a=200+Pe()*250,o=Pe()*18;t.fillStyle=`rgb(${200+o},${164+o},${118+o})`,t.fillRect(s*i+1,r+1,i-2,a-2);for(let l=0;l<18;l++){t.strokeStyle="rgba(140,100,60,0.15)",t.beginPath();const h=s*i+Pe()*i;t.moveTo(h,r),t.lineTo(h+Pe()*6-3,r+a),t.stroke()}r+=a}}n.oak=_t(e,6)}{const[e,t]=St(256);t.fillStyle="#8a6a4a",t.fillRect(0,0,256,256);for(let i=0;i<10;i++){const s=Pe()*20;t.fillStyle=`rgb(${150+s},${115+s},${80+s})`,t.fillRect(i*25.6+1,0,23.6,256)}n.deck=_t(e,4)}{const[e,t]=St(256);t.fillStyle="#b07a4f",t.fillRect(0,0,256,256);for(let i=0;i<16;i++){const s=Pe()*22;t.fillStyle=`rgb(${176+s},${122+s},${80+s})`,t.fillRect(0,i*16+1,256,14)}n.soffit=_t(e,4)}{const[e,t]=St(256);t.fillStyle="#cfc58e",t.fillRect(0,0,256,256);for(let i=0;i<256;i+=3)t.fillStyle=i%6?"#c4b97f":"#d8cf9c",t.fillRect(0,i,256,2);t.fillStyle="#3d4a35",t.fillRect(0,0,256,6),t.fillRect(0,125,256,6),t.fillRect(0,0,6,256),n.tatami=_t(e,6)}{const[e,t]=St(256);t.fillStyle="#3b3b39",t.fillRect(0,0,256,256),rn(t,256,.7,["#555552","#2a2a29","#6b6658"],6e3),n.rubber=_t(e,4)}{const[e,t]=St(256);t.fillStyle="#6a645c",t.fillRect(0,0,256,256);for(let i=0;i<8;i++)t.fillStyle="#7d776e",t.fillRect(i*32,0,3,256),t.fillStyle="#4e4943",t.fillRect(i*32+3,0,2,256);n.seam=_t(e,12)}{const[e,t]=St(256);t.fillStyle="#d9d4c8",t.fillRect(0,0,256,256),rn(t,256,.6,["#bfb8aa","#eeeae2","#a9a294"],9e3);for(let i=0;i<256;i+=16)t.strokeStyle="rgba(150,142,128,0.45)",t.lineWidth=2,t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();n.gravel=_t(e,6)}{const[e,t]=St(256);t.fillStyle="#5f8c3c",t.fillRect(0,0,256,256),rn(t,256,.5,["#4f7a30","#77a24e","#6a9545"],8e3),n.turf=_t(e,6)}{const[e,t]=St(512);t.fillStyle="#a3a46e",t.fillRect(0,0,512,512),rn(t,512,.5,["#8f9660","#b8b37e","#868c55","#b0a46c"],26e3),rn(t,512,.9,["#e2c75a","#d18bb0","#f2f0e6","#c97a4a","#9a7fc4"],2200),n.meadow=_t(e,30)}{const[e,t]=St(256);t.fillStyle="#c08552",t.fillRect(0,0,256,256);for(let i=0;i<12;i++){const s=Pe()*20;t.fillStyle=`rgb(${190+s},${132+s},${82+s})`,t.fillRect(0,i*21+1,256,19)}n.cedar=_t(e,4)}{const[e,t]=St(256);t.fillStyle="#a9a59e",t.fillRect(0,0,256,256),rn(t,256,.3,["#97938c","#c2beb6"],5e3),n.concrete=_t(e,6)}{const[e,t]=St(256);t.fillStyle="#f6f6f4",t.fillRect(0,0,256,256);for(let i=0;i<140;i++){const s=Pe()*256,r=Pe()*256,a=10+Pe()*40,o=t.createRadialGradient(s,r,0,s,r,a),l=Pe()<.5?"rgba(255,255,255,0.35)":"rgba(226,226,222,0.22)";o.addColorStop(0,l),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(s-a,r-a,a*2,a*2)}rn(t,256,.12,["#fdfdfc","#e8e8e5"],2500),n.lime=_t(e,8),n.limeN=fn(e,8,1.2)}{const[e,t]=St(512);t.fillStyle="#b98544",t.fillRect(0,0,512,512);const i=512/7;for(let s=0;s<7;s++){let r=-Pe()*300;for(;r<512;){const a=220+Pe()*260,o=Pe()*22-8;t.fillStyle=`rgb(${200+o},${143+o},${78+o*.6})`,t.fillRect(s*i+1,r+1,i-2,a-2);for(let l=0;l<26;l++){t.strokeStyle=`rgba(${120+Pe()*30},${70+Pe()*20},30,${.08+Pe()*.14})`,t.lineWidth=1+Pe(),t.beginPath();const h=s*i+Pe()*i;t.moveTo(h,r),t.bezierCurveTo(h+Pe()*8-4,r+a*.3,h+Pe()*8-4,r+a*.7,h+Pe()*6-3,r+a),t.stroke()}t.fillStyle="rgba(70,40,15,0.6)",t.fillRect(s*i,r,i,1.5),r+=a}t.fillStyle="rgba(70,40,15,0.55)",t.fillRect(s*i,0,1.5,512)}n.honey=_t(e,7),n.honeyN=fn(e,7,1.5)}{const[e,t]=St(512);t.fillStyle="#6e4e2e",t.fillRect(0,0,512,512);const i=512/(5*Math.SQRT2)/1,s=5*i,r=Math.SQRT1_2;for(let a=-8;a<=8;a++)for(let o=-30;o<=30;o++)for(const l of[0,1]){const h=o*i+a*s,c=o*i-a*s+(l?i:0),[u,d,f,p]=l?[h,c,i,s]:[h,c,s,i];t.setTransform(Xn*r,-Xn*r,Xn*r,Xn*r,0,0);const _=Pe()*26-6;t.fillStyle=`rgb(${200+_},${160+_},${110+_*.8})`,t.fillRect(u+1.2,d+1.2,f-2.4,p-2.4);for(let g=0;g<4;g++)t.fillStyle="rgba(120,80,40,0.13)",l?t.fillRect(u+2+Pe()*(f-4),d+2,1,p-4):t.fillRect(u+2,d+2+Pe()*(p-4),f-4,1)}t.setTransform(Xn,0,0,Xn,0,0),n.herring=_t(e,2.4),n.herringN=fn(e,2.4,2.2)}{const[e,t]=St(512);t.fillStyle="#f2efea",t.fillRect(0,0,512,512),rn(t,512,.1,["#e5e0d8","#ffffff"],4e3);for(let i=0;i<14;i++){let s=Pe()*512,r=Pe()*512;t.strokeStyle=i%4?"rgba(150,140,128,0.35)":"rgba(160,128,80,0.45)",t.lineWidth=i%4?.8+Pe():2+Pe()*2,t.beginPath(),t.moveTo(s,r);for(let a=0;a<30;a++)s+=20+Pe()*10,r+=Pe()*30-15,t.lineTo(s%512,r),s>512&&(s-=512,t.moveTo(s,r));t.stroke()}n.marble=_t(e,6)}{const[e,t]=St(256);t.fillStyle="#2b2c2c",t.fillRect(0,0,256,256),rn(t,256,.35,["#3a3b3b","#1f2020","#45464a"],7e3);for(let i=0;i<6;i++)t.strokeStyle="rgba(120,120,118,0.18)",t.lineWidth=.6,t.beginPath(),t.moveTo(Pe()*256,0),t.lineTo(Pe()*256,256),t.stroke();t.fillStyle="#1a1a1a",t.fillRect(0,0,256,1.5),t.fillRect(0,0,1.5,256),t.fillRect(0,128,256,1.5),n.blackstone=_t(e,4),n.blackstoneN=fn(e,4,1.5)}{const[e,t]=St(256);t.fillStyle="#e8e4da",t.fillRect(0,0,256,256);const i=8,s=256/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Pe(),l=t.createLinearGradient(a*s,r*s,a*s+s,r*s+s);l.addColorStop(0,`rgb(${40+o*30},${110+o*40},${84+o*30})`),l.addColorStop(.6,`rgb(${30+o*20},${92+o*34},${70+o*24})`),l.addColorStop(1,`rgb(${56+o*30},${130+o*40},${100+o*30})`),t.fillStyle=l,t.fillRect(a*s+2,r*s+2,s-4,s-4),t.fillStyle="rgba(255,255,255,0.18)",t.fillRect(a*s+4,r*s+4,s*.3,2)}n.zellige=_t(e,1.33),n.zelligeN=fn(e,1.33,3)}{const[e,t]=St(256);t.fillStyle="#e8d8b8",t.fillRect(0,0,256,256);for(let i=0;i<10;i++){const s=Pe()*14;t.fillStyle=`rgb(${232+s*.5},${214+s},${178+s})`,t.fillRect(0,i*25.6+1,256,23.6)}rn(t,256,.15,["#d6c39c","#f4ead6"],1500),n.aspen=_t(e,3),n.aspenN=fn(e,3,1.5)}{const[e,t]=St(256);t.fillStyle="#5f5a52",t.fillRect(0,0,512,512);const i=[];for(let l=0;l<26;l++)i.push([Pe()*512,Pe()*512]);const s=t.getImageData(0,0,e.width,e.height),r=e.width,a=512/r,o=i.map(()=>{const l=150+Pe()*45;return[l,l-6-Pe()*8,l-16-Pe()*14]});for(let l=0;l<r;l++)for(let h=0;h<r;h++){let c=1e9,u=1e9,d=0;const f=h*a,p=l*a;for(let S=0;S<i.length;S++)for(const A of[-512,0,512])for(const b of[-512,0,512]){const E=Math.hypot(f-i[S][0]-A,p-i[S][1]-b);E<c?(u=c,c=E,d=S):E<u&&(u=E)}const _=(l*r+h)*4,g=u-c<5?.45:1,m=.92+Pe()*.12;s.data[_]=o[d][0]*g*m,s.data[_+1]=o[d][1]*g*m,s.data[_+2]=o[d][2]*g*m,s.data[_+3]=255}t.putImageData(s,0,0),n.flag=_t(e,12),n.flagN=fn(e,12,2.5)}{const[e,t]=St(256);t.fillStyle="#3d5a50",t.fillRect(0,0,256,256);const i=8,s=256/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Pe()*26;t.fillStyle=`rgb(${82+o},${128+o},${112+o})`,t.fillRect(a*s+1.5,r*s+1.5,s-3,s-3)}n.pooltile=_t(e,4),n.pooltileN=fn(e,4,2)}{const[e,t]=St(256);t.fillStyle="#b8b0a2",t.fillRect(0,0,256,256);for(let i=0;i<4;i++)for(let s=0;s<2;s++){const r=214+Pe()*16;t.fillStyle=`rgb(${r},${r-6},${r-18})`,t.fillRect(s*128+i%2*64+1,i*64+1,126,62),t.fillRect(s*128+i%2*64+1-256,i*64+1,126,62)}rn(t,256,.15,["#c9c1b2","#ece6da"],3e3),n.stonetile=_t(e,8),n.stonetileN=fn(e,8,1.6)}{const[e,t]=St(128);t.fillStyle="#e4dccd",t.fillRect(0,0,128,128);for(let i=0;i<128;i+=2)t.fillStyle="rgba(190,178,158,0.25)",t.fillRect(0,i,128,1),t.fillRect(i,0,1,128);n.linen=_t(e,1.5)}return n.charredN=fn(n.charred.image,6,2.5),n.seamN=fn(n.seam.image,12,3),n.tatamiN=fn(n.tatami.image,6,1.5),n.rammedN=fn(n.rammed.image,8,1.2),n.gravelN=fn(n.gravel.image,6,2),n}function ed(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Dt;let h=0;for(let c=0;c<n.length;++c){const u=n[c];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(t){let c=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+c);c+=n[d].attributes.position.count}l.setIndex(u)}for(const c in r){const u=Qh(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in a){const u=a[c][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[c].length;++_)f.push(a[c][_][d]);const p=Qh(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(p)}}}return l}function Qh(n){let e,t,i,s=-1,r=0;for(let h=0;h<n.length;++h){const c=n[h];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const a=new e(r),o=new tn(a,t,i);let l=0;for(let h=0;h<n.length;++h){const c=n[h];if(c.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=c.count;d<f;d++)for(let p=0;p<t;p++){const _=c.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(c.array,l);l+=c.count*t}return s!==void 0&&(o.gpuType=s),o}const S_={302:"clay",303:"stone",304:"hinoki",305:"sage",404:"earth"},w_=[["h",55,50.5,72],["v",72,27.5,55]],M_=[{id:"101",name:"Kitchen",wing:"Living Pavilion",x0:20,y0:55,x1:36,y1:79,h:12,floor:"bigtile",cond:!0,notes:'Kitchen Round 1 (swipe results Oct 11): two-island layout. A 10-ft quartzite waterfall island with stools along one side, a work island with flush induction, rift white oak flat-slab handleless cabinets, a 48" pro gas range with a high-heat wok burner under a hood hidden in the cabinetry, an integrated quartzite sink carved from the counter under a garden-view window, a lift-and-slide wall that pockets fully open to the pergola, a skylight with a linear suspended light, open oak shelves, an appliance garage, a built-in stainless fridge, a steam oven wall, the walk-in pantry and the hydroponic herb wall.',fin:'One continuous large-format pale near-white stone-look tile floor (120x120 / 60x120 cm, thin tight joints) through kitchen, dining + living, no thresholds; smooth white painted walls; rift white oak flat-slab handleless cabinets, flush inset in face frames (finger-pull reveals); honed quartzite counters, waterfall island + integrated quartzite sink; honed marble slab backsplash (zellige alternate); 48" pro gas range with wok burner; hidden 1,500 m3/h hood insert in oak cabinetry; brushed stainless faucet; built-in stainless fridge; steam oven + wall oven column; flush 2-zone induction in the work island; open rift oak shelves; skylight + linear suspended LED',floorName:"Large-format pale near-white stone-look tile, 120x120 / 60x120 cm, thin tight joints (one continuous floor: kitchen, dining, living)",w:16,d:24,area:384},{id:"102",name:"Dining",wing:"Living Pavilion",x0:36,y0:55,x1:50,y1:79,h:12,floor:"bigtile",cond:!0,notes:"Seats eight under exposed fir beams and a big paper lantern. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north.",fin:"Continuous large-format pale near-white stone-look tile (120x120 / 60x120 cm, thin tight joints); smooth white painted walls; warm oak beam canopy; framed art as the color; dining table (open item); mixed chairs: Windsor (walnut) on the courtyard side, Shaker (cherry) on the north side; paper lantern",floorName:"Large-format pale near-white stone-look tile, 120x120 / 60x120 cm, thin tight joints (one continuous floor: kitchen, dining, living)",w:14,d:24,area:336},{id:"103",name:"Living",wing:"Living Pavilion",x0:50,y0:55,x1:72,y1:79,h:12,floor:"bigtile",cond:!0,notes:"The heart of the house, fully open to the garden: 21 ft of pocketing glass to the courtyard and a big fixed mountain-view window to the north. Flat floor (the sunken conversation pit was dropped, Oct 20 deck) with a low modular sofa group, cognac leather lounge chair, paper lanterns, shoji screens to the dining room, and art on the east wall. A slim linear gas fire sits in a lime-plaster plinth (no stone fireplace).",fin:"Continuous large-format pale near-white stone-look tile (120x120 / 60x120 cm, thin tight joints); smooth white painted walls; warm pale plaster fireplace wall (accent); warm oak beam canopy; low linen sofa group (flat floor); classic leather lounger; paper lanterns over the seating + woven pendants by the north window; shoji screens; frameless corner glass at the courtyard corner; bronze frames elsewhere; art wall",floorName:"Large-format pale near-white stone-look tile, 120x120 / 60x120 cm, thin tight joints (one continuous floor: kitchen, dining, living)",w:22,d:24,area:528},{id:"104",name:"Walk-in Pantry",wing:"Living Pavilion",x0:10,y0:67,x1:20,y1:79,h:10,floor:"stonetile",cond:!0,notes:"Floor-to-ceiling open honey-oak shelving, second fridge, appliance counter.",fin:"Large-format honed limestone; smooth white painted walls; walnut open shelving",floorName:"Large-format honed limestone",w:10,d:12,area:120},{id:"105",name:"Mudroom + Gear",wing:"Living Pavilion",x0:10,y0:55,x1:20,y1:67,h:10,floor:"stonetile",cond:!0,notes:"Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash.",fin:"Large-format honed limestone; smooth white painted walls; built-in walnut cubbies; stone dog wash",floorName:"Large-format honed limestone",w:10,d:12,area:120},{id:"201",name:"Master Bedroom",wing:"Sleeping Wing",x0:72,y0:59,x1:86,y1:83,h:11,floor:"honey",cond:!0,notes:"Floor-to-ceiling glass to the mountains with sheer linen curtains, cove lighting, and a big fan under a wood ceiling. Low linen-wrapped bed against a lime-plaster headwall ledge (no wood platform or headboard), and a pair of lounge chairs at the view window.",fin:"Walnut floor; pale near-white plaster headwall (accent); smooth white painted walls; built-in cherry joinery; shoji doors; wood ceiling with cove lighting; sheer linen curtains; big ceiling fan; linen bed; bronze window frames",floorName:"Wide-plank walnut",w:14,d:24,area:336},{id:"202",name:"Master Bath",wing:"Sleeping Wing",x0:86,y0:69,x1:98,y1:83,h:10,floor:"stone",cond:!0,notes:"Deep Japanese hinoki soaking tub at the corner window under a skylight. Open walk-in rain shower behind a black-stone wall (no glass enclosure), one long floating oak vanity with integrated stone basins and matte black taps, and a WC room. Opens to a walled bath garden.",fin:"Honed limestone floor and walls; green zellige shower wall; hinoki soaking tub; built-in cherry vanity recessed into the wall, flush inset doors, integrated basins; unlacquered brass taps (mount: open item); skylight",floorName:"Honed limestone",w:12,d:14,area:168},{id:"203",name:"Master Closet",wing:"Sleeping Wing",x0:86,y0:59,x1:98,y1:69,h:10,floor:"honey",cond:!0,notes:"Walk-in closet with honey-oak millwork and a center island.",fin:"Walnut floor; cherry millwork; smooth white painted walls; shoji door",floorName:"Wide-plank walnut",w:12,d:10,area:120},{id:"204",name:"East Engawa Gallery",wing:"Sleeping Wing",x0:72,y0:14,x1:78,y1:59,h:10,floor:"honey",cond:!0,notes:"Glazed engawa along the courtyard: honey-oak floor, sliding glass, a long low bench and wall-mounted art. Links living, bedrooms and the wellness wing.",fin:"Walnut floor; smooth white painted walls; bronze sliding glass",floorName:"Wide-plank walnut",w:6,d:45,area:270},{id:"205",name:"Laundry",wing:"Sleeping Wing",x0:78,y0:14,x1:88,y1:24,h:10,floor:"stone",cond:!0,notes:"Stays in the sleeping wing, now at its south end off the east engawa: stacked W/D pair, folding counter, drying rack. Window to the south.",fin:"Honed limestone; smooth white painted walls; white cabinets",floorName:"Honed limestone",w:10,d:10,area:100},{id:"206",name:"Linen + Mechanical",wing:"Sleeping Wing",x0:78,y0:56,x1:104,y1:59,h:10,floor:"concrete",cond:!0,notes:"Shallow linen + mechanical closet run along the kids' wing: linen shelves, heat pump air handler, ERV, water heating.",fin:"Sealed concrete; smooth white painted walls",floorName:"Sealed concrete",w:26,d:3,area:78},{id:"207",name:"Kids' Room 1",wing:"Sleeping Wing",x0:90,y0:43,x1:104,y1:56,h:14,floor:"honey",cond:!0,notes:"Grow-into-teen 14 x 13 ft room: bed under a bunk/play loft (about 8 x 13 ft at 7 ft up, ladder), a desk by the east window, window-seat reading nook, cube shelves, small bouldering wall. Reached through its walk-in closet; shares the Jack-and-Jill bath.",fin:"Walnut floor; smooth white painted walls; cherry desk, window seat and cube shelves; oak bunk/play loft with rail; bouldering panel",floorName:"Wide-plank walnut",w:14,d:13,area:182},{id:"208",name:"Jack-and-Jill Bath",wing:"Sleeping Wing",x0:84,y0:37,x1:104,y1:43,h:10,floor:"stone",cond:!0,notes:"Kept: Jack-and-Jill between the two kids' rooms, one room with two sinks (a double cherry vanity), WC and a tiled tub-shower, lockable from each side. 20 x 6 ft.",fin:"Honed limestone; white tile tub-shower; cherry double vanity; unlacquered brass taps",floorName:"Honed limestone",w:20,d:6,area:120},{id:"209",name:"Kids' Room 2",wing:"Sleeping Wing",x0:90,y0:24,x1:104,y1:37,h:14,floor:"honey",cond:!0,notes:"Kids only now (no longer the guest room). Grow-into-teen 14 x 13 ft room: twin/full bed under a bunk/play loft (about 8 x 13 ft at 7 ft up, ladder), a desk by the east window, window seat, cube shelves. Reached through its walk-in closet; no courtyard door (courtyard is reached from the engawa gallery). Shares the Jack-and-Jill bath.",fin:"Walnut floor; smooth white painted walls; cherry desk, window seat and cube shelves; oak bunk/play loft with rail",floorName:"Wide-plank walnut",w:14,d:13,area:182},{id:"211",name:"Pool Equipment",wing:"Sleeping Wing",x0:88,y0:14,x1:98,y1:24,h:9,floor:"concrete",cond:!1,notes:"Unconditioned. Saltwater pool equipment: variable-speed pump, cartridge filter, heat pump heater and the salt chlorine generator cell (replace the cell about every 3-5 years). Ties into the utility yard next door. Exterior access only.",fin:"Sealed concrete",floorName:"Sealed concrete",w:10,d:10,area:100},{id:"212",name:"Kids' Entry + Lockers",wing:"Sleeping Wing",x0:78,y0:24,x1:84,y1:40,h:10,floor:"honey",cond:!0,notes:"The one kids' entry (replaces the two vestibules): one door from the east engawa, a bench and a row of honey-oak lockers with hooks and cubbies. Leads to both rooms' walk-in closets and the study nook.",fin:"Walnut floor; smooth white painted walls; cherry lockers + bench",floorName:"Wide-plank walnut",w:6,d:16,area:96},{id:"213",name:"Shared Study Nook",wing:"Sleeping Wing",x0:78,y0:40,x1:84,y1:56,h:10,floor:"honey",cond:!0,notes:"Shared homework nook open to the kids' entry: a 14-ft built-in desk for two, task lights, a pin-board wall and book shelves. Each room also has its own desk.",fin:"Walnut floor; smooth white painted walls; cherry built-in desk + shelves; cork pin wall",floorName:"Wide-plank walnut",w:6,d:16,area:96},{id:"301",name:"South Covered Walkway",wing:"Wellness + Gym Wing",x0:36,y0:22,x1:72,y1:27,h:10,floor:"flagstone",cond:!1,notes:"Open-air covered walkway (not conditioned) under the wellness-wing eave, closing the courtyard ring. Flagstone floor, open to the courtyard, with glass doors into the east and west galleries.",fin:"Flagstone floor; open-air, covered by the wellness-wing roof; cedar soffit",floorName:"Flagstone (open-air)",w:36,d:5,area:180},{id:"302",name:"Exercise Room",wing:"Wellness + Gym Wing",x0:28,y0:-5,x1:50,y1:22,h:12,floor:"oakplank",cond:!0,notes:"Gym-forward wing (Oct 29 decks): warm oak plank floor, calm pale clay plaster walls, warm cove light + wall wash, and a full glass wall to the garden. Free-weights rack, cardio machines (treadmill, bike, rower) AND a large open mat floor, a yoga props wall with bolsters, open cubbies, a mirror wall and the rig. Teen-friendly, durable finishes.",fin:"Warm oak plank floor; calm pale clay plaster walls (accent); high wood ceiling; warm cove light + wall wash; full glass wall to the garden; mirror wall; free-weights rack; treadmill, bike, rower; large open mat floor; open cubbies; yoga props wall + bolsters",floorName:"Warm oak plank",w:22,d:27,area:594},{id:"303",name:"Wet Room",wing:"Wellness + Gym Wing",x0:50,y0:4,x1:66,y1:22,h:10,floor:"stone",cond:!0,notes:"Wet room: cold plunge in sage handmade tile set flush into the floor with a honed non-slip stone surround, freestanding deep soak tub, rain showers, brushed warm brass fixtures, recovery chairs.",fin:"Honed non-slip stone floor; smooth white walls; cold plunge in sage handmade tile flush into the floor; freestanding deep soak tub; brushed warm brass fixtures",floorName:"Honed limestone",w:16,d:18,area:288},{id:"304",name:"Sauna",wing:"Wellness + Gym Wing",x0:50,y0:-5,x1:58,y1:4,h:8,floor:"hinoki",cond:!0,notes:"Pale hinoki sauna with tiered hinoki benches and warm under-bench LED for longer spa sessions; electric rock heater.",fin:"Pale hinoki walls, ceiling and benches; warm under-bench LED; electric rock heater",floorName:"Pale hinoki duckboard",w:8,d:9,area:72},{id:"305",name:"Steam Room",wing:"Wellness + Gym Wing",x0:58,y0:-5,x1:66,y1:4,h:8,floor:"sage",cond:!0,notes:"Steam room in sage handmade tile (walls, floor and heated bench).",fin:"Sage handmade tile floor, walls and heated bench",floorName:"Sage handmade tile",w:8,d:9,area:72},{id:"306",name:"Changing + Towels",wing:"Wellness + Gym Wing",x0:66,y0:-5,x1:72,y1:22,h:10,floor:"stone",cond:!0,notes:"Compact changing niche: open cubbies, bench, hooks, towels, rinse shower; pool access.",fin:"Honed limestone; smooth white walls; compact changing niche with open cubbies",floorName:"Honed limestone",w:6,d:27,area:162},{id:"401",name:"Entry Genkan",wing:"Studio + Arrival",x0:18,y0:46,x1:30,y1:55,h:10,floor:"stonetile",cond:!0,notes:"Entry gallery: pale near-white plaster gallery wall (accent) hung with framed art, stone genkan, step-up to the oak floor. The first view lines up across the engawa into the courtyard.",fin:"Large-format honed limestone; pale near-white plaster gallery wall (accent) with framed art; smooth white walls; kumiko lattice screen; bronze front door",floorName:"Large-format honed limestone",w:12,d:9,area:108},{id:"402",name:"Coat + Shoe Closet",wing:"Studio + Arrival",x0:22,y0:40,x1:26,y1:46,h:10,floor:"honey",cond:!0,notes:"Coat and shoe storage.",fin:"Walnut floor; walnut millwork",floorName:"Wide-plank walnut",w:4,d:6,area:24},{id:"403",name:"Powder Room",wing:"Studio + Arrival",x0:26,y0:40,x1:30,y1:46,h:10,floor:"stone",cond:!0,notes:"Compact powder room by the entry: integrated stone basin, smooth white walls.",fin:"Honed limestone; smooth white painted walls; integrated stone basin; unlacquered brass tap",floorName:"Honed limestone",w:4,d:6,area:24},{id:"404",name:"Tea + Reading Room",wing:"Studio + Arrival",x0:18,y0:28,x1:30,y1:40,h:9,floor:"tatami",cond:!0,notes:"Tea + reading room kept warm (not white): warm natural earth/clay plaster, natural wood, tatami and shoji. Tokonoma, low tea table, zabuton, book shelves; futons in the fusuma closet.",fin:"Tatami; warm natural earth/clay plaster; natural wood; shoji to the engawa; fusuma closet doors; tokonoma; book shelves; futon storage",floorName:"Tatami (8 mats)",w:12,d:12,area:144},{id:"405",name:"Sound Lock + AV Closet",wing:"Studio + Arrival",x0:18,y0:22,x1:30,y1:28,h:10,floor:"honey",cond:!0,notes:"Sound lock vestibule between the west engawa and the studio: two solid-core doors with full perimeter seals and automatic drop seals, so one is always closed. Also holds the AV rack and instrument storage.",fin:"Walnut floor; smooth white painted walls; two solid-core doors with perimeter + drop seals",floorName:"Wide-plank walnut",w:12,d:6,area:72},{id:"406",name:"West Engawa Gallery",wing:"Studio + Arrival",x0:30,y0:22,x1:36,y1:55,h:10,floor:"honey",cond:!0,notes:"Glazed engawa from the entry to the office and great room.",fin:"Walnut floor; smooth white painted walls; bronze sliding glass",floorName:"Wide-plank walnut",w:6,d:33,area:198},{id:"407",name:"Isolated Studio / Office",wing:"Studio + Arrival",x0:0,y0:0,x1:28,y1:22,h:14,floor:"honey",cond:!0,notes:"Isolated studio / office, quieter and white-based: smooth white walls with fabric acoustic panels on walls and ceiling, framed art as the color, walnut accents. Quieter walnut sit-stand desk at the garden window with two monitors and a mesh ergonomic chair; a recline chair + ottoman in its own nook; a bright music wall with piano + guitar wall, electric drum kit, small mixer, mic + karaoke screen; whiteboard + shelving display wall; ceiling projector + screen; printer/scanner in an open niche shelf. Daylight plus evening RGB accent lighting. Room-within-a-room isolation kept (STC 60+, NC-20), entered through the sound lock (405).",fin:"Floated walnut floor on isolation pads; decoupled inner walls; smooth white walls; fabric acoustic panels on walls + ceiling clouds; framed art as color; bright music wall; walnut desk + accents; laminated double glazing; solid-core sealed doors; daylight + evening RGB accent lighting",floorName:"Wide-plank walnut",w:28,d:22,area:616},{id:"408",name:"Guest Bedroom",wing:"Studio + Arrival",x0:4,y0:32,x1:18,y1:46,h:10,floor:"honey",cond:!0,notes:"Full guest suite near the entry (west): 14 x 14 ft bedroom with a queen bed, reading chair and garden windows to the west. Reached from the genkan by a short guest hall, away from the family rooms.",fin:"Walnut floor; smooth white painted walls; shoji to the hall; linen bed; bronze windows",floorName:"Wide-plank walnut",w:14,d:14,area:196},{id:"409",name:"Guest Bath",wing:"Studio + Arrival",x0:4,y0:22,x1:12,y1:32,h:10,floor:"stone",cond:!0,notes:"Guest full bath: walk-in shower, vanity, WC.",fin:"Honed limestone; tiled walk-in shower; cherry vanity; unlacquered brass taps",floorName:"Honed limestone",w:8,d:10,area:80},{id:"410",name:"Guest Closet",wing:"Studio + Arrival",x0:12,y0:22,x1:18,y1:32,h:10,floor:"honey",cond:!0,notes:"Guest walk-in closet with luggage bench.",fin:"Walnut floor; walnut millwork",floorName:"Wide-plank walnut",w:6,d:10,area:60},{id:"411",name:"Guest Hall",wing:"Studio + Arrival",x0:18,y0:40,x1:22,y1:46,h:10,floor:"honey",cond:!0,notes:"Short hall from the genkan to the guest suite.",fin:"Walnut floor; smooth white painted walls",floorName:"Wide-plank walnut",w:4,d:6,area:24},{id:"214",name:"Kids' 2 Walk-in Closet",wing:"Sleeping Wing",x0:84,y0:24,x1:90,y1:37,h:10,floor:"honey",cond:!0,notes:"Small walk-through closet (6 x 13 ft) between the kids' entry and Kids' Room 2: hanging, drawers, a mirror.",fin:"Walnut floor; white closet millwork",floorName:"Wide-plank walnut",w:6,d:13,area:78},{id:"215",name:"Kids' 1 Walk-in Closet",wing:"Sleeping Wing",x0:84,y0:43,x1:90,y1:56,h:10,floor:"honey",cond:!0,notes:"Small walk-through closet (6 x 13 ft) between the study nook and Kids' Room 1.",fin:"Walnut floor; white closet millwork",floorName:"Wide-plank walnut",w:6,d:13,area:78}],E_=[{o:"h",c:55,a:10,b:18,pos:"105",neg:null,ext:!0,h:10,feats:[{a:11,b:17,k:"window",x:[3,7]}]},{o:"h",c:55,a:18,b:20,pos:"105",neg:"401",ext:!1,h:10,feats:[]},{o:"h",c:55,a:20,b:30,pos:"101",neg:"401",ext:!1,h:12,feats:[]},{o:"h",c:55,a:30,b:36,pos:"101",neg:"406",ext:!1,h:12,feats:[{a:30,b:36,k:"open",x:null}]},{o:"h",c:55,a:36,b:50,pos:"102",neg:null,ext:!0,h:12,feats:[{a:36.5,b:49.5,k:"glass",x:null}]},{o:"h",c:55,a:50,b:72,pos:"103",neg:null,ext:!0,h:12,feats:[{a:50.5,b:72,k:"fixed",x:null}]},{o:"h",c:79,a:10,b:20,pos:null,neg:"104",ext:!0,h:10,feats:[]},{o:"h",c:79,a:20,b:36,pos:null,neg:"101",ext:!0,h:12,feats:[{a:20.8,b:25.8,k:"window",x:[3,7.5]},{a:26.2,b:30,k:"window",x:[3.6,7.5]},{a:30.5,b:35.6,k:"glass",x:null}]},{o:"h",c:79,a:36,b:50,pos:null,neg:"102",ext:!0,h:12,feats:[{a:37,b:49,k:"glass",x:null}]},{o:"h",c:79,a:50,b:72,pos:null,neg:"103",ext:!0,h:12,feats:[{a:51,b:71,k:"fixed",x:null}]},{o:"v",c:20,a:55,b:67,pos:"101",neg:"105",ext:!1,h:12,feats:[{a:59,b:62,k:"door",x:null}]},{o:"v",c:20,a:67,b:79,pos:"101",neg:"104",ext:!1,h:12,feats:[{a:71,b:74,k:"door",x:null}]},{o:"v",c:36,a:22,b:27,pos:"301",neg:"406",ext:!1,h:10,feats:[{a:22.5,b:26.5,k:"glass",x:null}]},{o:"v",c:36,a:27,b:55,pos:null,neg:"406",ext:!0,h:10,feats:[{a:27.5,b:54.5,k:"glass",x:null}]},{o:"v",c:36,a:55,b:79,pos:"102",neg:"101",ext:!1,h:12,feats:[{a:55,b:79,k:"open",x:null}]},{o:"v",c:50,a:-5,b:4,pos:"304",neg:"302",ext:!1,h:12,feats:[]},{o:"v",c:50,a:4,b:22,pos:"303",neg:"302",ext:!1,h:12,feats:[{a:10,b:13,k:"door",x:null}]},{o:"v",c:50,a:55,b:79,pos:"103",neg:"102",ext:!1,h:12,feats:[{a:55,b:79,k:"open",x:null}]},{o:"v",c:72,a:-5,b:14,pos:null,neg:"306",ext:!0,h:10,feats:[]},{o:"v",c:72,a:14,b:22,pos:"204",neg:"306",ext:!1,h:10,feats:[{a:16,b:19,k:"door",x:null}]},{o:"v",c:72,a:22,b:27,pos:"204",neg:"301",ext:!1,h:10,feats:[{a:22.5,b:26.5,k:"glass",x:null}]},{o:"v",c:72,a:27,b:55,pos:"204",neg:null,ext:!0,h:10,feats:[{a:27.5,b:55,k:"fixed",x:null}]},{o:"v",c:72,a:55,b:59,pos:"204",neg:"103",ext:!1,h:12,feats:[{a:55,b:59,k:"open",x:null}]},{o:"v",c:72,a:59,b:79,pos:"201",neg:"103",ext:!1,h:12,feats:[]},{o:"v",c:72,a:79,b:83,pos:"201",neg:null,ext:!0,h:11,feats:[]},{o:"h",c:67,a:10,b:20,pos:"104",neg:"105",ext:!1,h:10,feats:[]},{o:"v",c:10,a:55,b:67,pos:"105",neg:null,ext:!0,h:10,feats:[{a:59,b:62,k:"exdoor",x:null}]},{o:"v",c:10,a:67,b:79,pos:"104",neg:null,ext:!0,h:10,feats:[{a:71,b:77,k:"window",x:[3,7]}]},{o:"h",c:59,a:72,b:78,pos:"201",neg:"204",ext:!1,h:11,feats:[{a:73,b:77,k:"slide",x:null}]},{o:"h",c:59,a:78,b:86,pos:"201",neg:"206",ext:!1,h:11,feats:[]},{o:"h",c:59,a:86,b:98,pos:"203",neg:"206",ext:!1,h:10,feats:[]},{o:"h",c:59,a:98,b:104,pos:null,neg:"206",ext:!0,h:10,feats:[]},{o:"h",c:83,a:72,b:86,pos:null,neg:"201",ext:!0,h:11,feats:[{a:73,b:85,k:"fixed",x:null}]},{o:"h",c:83,a:86,b:98,pos:null,neg:"202",ext:!0,h:10,feats:[{a:88,b:97,k:"window",x:[2,8]}]},{o:"v",c:86,a:59,b:69,pos:"203",neg:"201",ext:!1,h:11,feats:[{a:61,b:64,k:"door",x:null}]},{o:"v",c:86,a:69,b:83,pos:"202",neg:"201",ext:!1,h:11,feats:[{a:71,b:74.5,k:"slide",x:null}]},{o:"h",c:69,a:86,b:98,pos:"202",neg:"203",ext:!1,h:10,feats:[]},{o:"v",c:98,a:14,b:24,pos:null,neg:"211",ext:!0,h:9,feats:[]},{o:"v",c:98,a:59,b:69,pos:null,neg:"203",ext:!0,h:10,feats:[{a:62,b:67,k:"window",x:[6,8]}]},{o:"v",c:98,a:69,b:83,pos:null,neg:"202",ext:!0,h:10,feats:[{a:71,b:82,k:"window",x:[2,8]}]},{o:"h",c:14,a:72,b:78,pos:"204",neg:null,ext:!0,h:10,feats:[{a:73,b:77,k:"exdoor",x:null}]},{o:"h",c:14,a:78,b:88,pos:"205",neg:null,ext:!0,h:10,feats:[{a:81,b:85,k:"window",x:[5.5,8]}]},{o:"h",c:14,a:88,b:98,pos:"211",neg:null,ext:!0,h:9,feats:[{a:94,b:97,k:"exdoor",x:null}]},{o:"v",c:78,a:14,b:24,pos:"205",neg:"204",ext:!1,h:10,feats:[{a:17,b:21,k:"door",x:null}]},{o:"v",c:78,a:24,b:40,pos:"212",neg:"204",ext:!1,h:10,feats:[{a:30,b:33,k:"door",x:null}]},{o:"v",c:78,a:40,b:56,pos:"213",neg:"204",ext:!1,h:10,feats:[]},{o:"v",c:78,a:56,b:59,pos:"206",neg:"204",ext:!1,h:10,feats:[{a:56.3,b:58.7,k:"door",x:null}]},{o:"h",c:24,a:78,b:84,pos:"212",neg:"205",ext:!1,h:10,feats:[]},{o:"h",c:24,a:84,b:88,pos:"214",neg:"205",ext:!1,h:10,feats:[]},{o:"h",c:24,a:88,b:90,pos:"214",neg:"211",ext:!1,h:10,feats:[]},{o:"h",c:24,a:90,b:98,pos:"209",neg:"211",ext:!1,h:14,feats:[]},{o:"h",c:24,a:98,b:104,pos:"209",neg:null,ext:!0,h:14,feats:[]},{o:"v",c:88,a:14,b:24,pos:"211",neg:"205",ext:!1,h:10,feats:[]},{o:"h",c:56,a:78,b:84,pos:"206",neg:"213",ext:!1,h:10,feats:[]},{o:"h",c:56,a:84,b:90,pos:"206",neg:"215",ext:!1,h:10,feats:[]},{o:"h",c:56,a:90,b:104,pos:"206",neg:"207",ext:!1,h:14,feats:[]},{o:"v",c:104,a:24,b:37,pos:null,neg:"209",ext:!0,h:14,feats:[{a:27,b:34,k:"window",x:[2.5,8]}]},{o:"v",c:104,a:37,b:43,pos:null,neg:"208",ext:!0,h:10,feats:[{a:38,b:41,k:"window",x:[5,7]}]},{o:"v",c:104,a:43,b:56,pos:null,neg:"207",ext:!0,h:14,feats:[{a:46,b:53,k:"window",x:[2.5,8]}]},{o:"v",c:104,a:56,b:59,pos:null,neg:"206",ext:!0,h:10,feats:[]},{o:"h",c:43,a:84,b:90,pos:"215",neg:"208",ext:!1,h:10,feats:[]},{o:"h",c:43,a:90,b:104,pos:"207",neg:"208",ext:!1,h:14,feats:[{a:96,b:99,k:"door",x:null}]},{o:"v",c:90,a:24,b:37,pos:"209",neg:"214",ext:!1,h:14,feats:[{a:32,b:35,k:"door",x:null}]},{o:"v",c:90,a:43,b:56,pos:"207",neg:"215",ext:!1,h:14,feats:[{a:45,b:48,k:"door",x:null}]},{o:"h",c:37,a:84,b:90,pos:"208",neg:"214",ext:!1,h:10,feats:[]},{o:"h",c:37,a:90,b:104,pos:"208",neg:"209",ext:!1,h:14,feats:[{a:96,b:99,k:"door",x:null}]},{o:"v",c:84,a:24,b:37,pos:"214",neg:"212",ext:!1,h:10,feats:[{a:28,b:31,k:"door",x:null}]},{o:"v",c:84,a:37,b:40,pos:"208",neg:"212",ext:!1,h:10,feats:[]},{o:"v",c:84,a:40,b:43,pos:"208",neg:"213",ext:!1,h:10,feats:[]},{o:"v",c:84,a:43,b:56,pos:"215",neg:"213",ext:!1,h:10,feats:[{a:49,b:52,k:"door",x:null}]},{o:"h",c:40,a:18,b:22,pos:"411",neg:"404",ext:!1,h:10,feats:[]},{o:"h",c:40,a:22,b:26,pos:"402",neg:"404",ext:!1,h:10,feats:[]},{o:"h",c:40,a:26,b:30,pos:"403",neg:"404",ext:!1,h:10,feats:[]},{o:"h",c:40,a:78,b:84,pos:"213",neg:"212",ext:!1,h:10,feats:[{a:78,b:84,k:"open",x:null}]},{o:"h",c:22,a:0,b:4,pos:null,neg:"407",ext:!0,h:14,feats:[]},{o:"h",c:22,a:4,b:12,pos:"409",neg:"407",ext:!1,h:14,feats:[]},{o:"h",c:22,a:12,b:18,pos:"410",neg:"407",ext:!1,h:14,feats:[]},{o:"h",c:22,a:18,b:28,pos:"405",neg:"407",ext:!1,h:14,feats:[{a:23,b:27,k:"door",x:null}]},{o:"h",c:22,a:28,b:30,pos:"405",neg:"302",ext:!1,h:12,feats:[]},{o:"h",c:22,a:30,b:36,pos:"406",neg:"302",ext:!1,h:12,feats:[]},{o:"h",c:22,a:36,b:50,pos:"301",neg:"302",ext:!1,h:12,feats:[{a:36,b:42,k:"slide",x:null}]},{o:"h",c:22,a:50,b:66,pos:"301",neg:"303",ext:!1,h:10,feats:[{a:56,b:59,k:"door",x:null}]},{o:"h",c:22,a:66,b:72,pos:"301",neg:"306",ext:!1,h:10,feats:[{a:67,b:70,k:"door",x:null}]},{o:"h",c:27,a:36,b:72,pos:null,neg:"301",ext:!0,h:10,feats:[{a:36,b:72,k:"open",x:null}]},{o:"h",c:-5,a:28,b:50,pos:"302",neg:null,ext:!0,h:12,feats:[{a:28.5,b:49.5,k:"glass",x:null}]},{o:"h",c:-5,a:50,b:58,pos:"304",neg:null,ext:!0,h:8,feats:[{a:51,b:57,k:"window",x:[3,6]}]},{o:"h",c:-5,a:58,b:66,pos:"305",neg:null,ext:!0,h:8,feats:[]},{o:"h",c:-5,a:66,b:72,pos:"306",neg:null,ext:!0,h:10,feats:[{a:68,b:71,k:"exdoor",x:null}]},{o:"v",c:28,a:-5,b:0,pos:"302",neg:null,ext:!0,h:12,feats:[]},{o:"v",c:28,a:0,b:22,pos:"302",neg:"407",ext:!1,h:14,feats:[]},{o:"h",c:4,a:50,b:58,pos:"303",neg:"304",ext:!1,h:10,feats:[{a:52,b:54.5,k:"door",x:null}]},{o:"h",c:4,a:58,b:66,pos:"303",neg:"305",ext:!1,h:10,feats:[{a:61,b:63.5,k:"door",x:null}]},{o:"v",c:66,a:-5,b:4,pos:"306",neg:"305",ext:!1,h:10,feats:[]},{o:"v",c:66,a:4,b:22,pos:"306",neg:"303",ext:!1,h:10,feats:[{a:10,b:13,k:"door",x:null}]},{o:"v",c:58,a:-5,b:4,pos:"305",neg:"304",ext:!1,h:8,feats:[]},{o:"h",c:46,a:4,b:18,pos:null,neg:"408",ext:!0,h:10,feats:[{a:7,b:15,k:"window",x:[3,7]}]},{o:"h",c:46,a:18,b:22,pos:"401",neg:"411",ext:!1,h:10,feats:[{a:18.6,b:21.4,k:"door",x:null}]},{o:"h",c:46,a:22,b:26,pos:"401",neg:"402",ext:!1,h:10,feats:[{a:22.5,b:25.5,k:"door",x:null}]},{o:"h",c:46,a:26,b:30,pos:"401",neg:"403",ext:!1,h:10,feats:[]},{o:"v",c:18,a:22,b:28,pos:"405",neg:"410",ext:!1,h:10,feats:[]},{o:"v",c:18,a:28,b:32,pos:"404",neg:"410",ext:!1,h:10,feats:[]},{o:"v",c:18,a:32,b:40,pos:"404",neg:"408",ext:!1,h:10,feats:[]},{o:"v",c:18,a:40,b:46,pos:"411",neg:"408",ext:!1,h:10,feats:[{a:41.5,b:44.5,k:"door",x:null}]},{o:"v",c:18,a:46,b:55,pos:"401",neg:null,ext:!0,h:10,feats:[{a:49,b:53,k:"front",x:null}]},{o:"v",c:30,a:22,b:28,pos:"406",neg:"405",ext:!1,h:10,feats:[{a:23,b:26,k:"door",x:null}]},{o:"v",c:30,a:28,b:40,pos:"406",neg:"404",ext:!1,h:10,feats:[{a:30,b:38,k:"slide",x:null}]},{o:"v",c:30,a:40,b:46,pos:"406",neg:"403",ext:!1,h:10,feats:[{a:41.5,b:44,k:"door",x:null}]},{o:"v",c:30,a:46,b:55,pos:"406",neg:"401",ext:!1,h:10,feats:[{a:47,b:54,k:"open",x:null}]},{o:"v",c:22,a:40,b:46,pos:"402",neg:"411",ext:!1,h:10,feats:[]},{o:"v",c:26,a:40,b:46,pos:"403",neg:"402",ext:!1,h:10,feats:[]},{o:"h",c:28,a:18,b:30,pos:"404",neg:"405",ext:!1,h:10,feats:[]},{o:"h",c:0,a:0,b:28,pos:"407",neg:null,ext:!0,h:14,feats:[{a:7,b:25,k:"glass",x:null}]},{o:"v",c:0,a:0,b:22,pos:"407",neg:null,ext:!0,h:14,feats:[{a:4,b:18,k:"window",x:[2.5,9]}]},{o:"h",c:32,a:4,b:12,pos:"408",neg:"409",ext:!1,h:10,feats:[{a:6,b:9,k:"door",x:null}]},{o:"h",c:32,a:12,b:18,pos:"408",neg:"410",ext:!1,h:10,feats:[{a:13.5,b:16.5,k:"door",x:null}]},{o:"v",c:4,a:22,b:32,pos:"409",neg:null,ext:!0,h:10,feats:[{a:24,b:28,k:"window",x:[5,7]}]},{o:"v",c:4,a:32,b:46,pos:"408",neg:null,ext:!0,h:10,feats:[{a:35,b:43,k:"window",x:[2.5,8]}]},{o:"v",c:12,a:22,b:32,pos:"410",neg:"409",ext:!1,h:10,feats:[]}],T_=[{room:"104",label:"Pantry shelving",x0:10.4,y0:68,x1:11.8,y1:78.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"104",label:"Pantry shelving",x0:18.2,y0:72,x1:19.6,y1:78.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"105",label:"Cubbies + bench",x0:10.4,y0:62.5,x1:12,y1:66.6,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"105",label:"Dog wash",x0:16.5,y0:55.4,x1:19.6,y1:58,h:2.6,z0:0,color:"mat:stone",shape:"box"},{room:"201",label:"Low linen-wrapped bed (king)",x0:76,y0:69.4,x1:82.6,y1:76,h:1.6,z0:0,color:"mat:linen",shape:"bed"},{room:"201",label:"Pale plaster headwall ledge",x0:75,y0:68.4,x1:83.6,y1:69.4,h:3.4,z0:0,color:"mat:plaster",shape:"box"},{room:"201",label:"Pair of lounge chairs",x0:74,y0:78.4,x1:80.6,y1:81.2,h:2.5,z0:0,color:"#b9a27e",shape:"lounge2"},{room:"201",label:"Sheer linen curtains",x0:73,y0:82.3,x1:85,y1:82.5,h:10.3,z0:.1,color:"#f6f1e6",shape:"curtain"},{room:"201",label:"Big fan under wood ceiling",x0:76.5,y0:69.5,x1:82.5,y1:75.5,h:.6,z0:9.6,color:"#6b4a33",shape:"fan"},{room:"201",label:"Cove lighting",x0:72.3,y0:59.3,x1:85.7,y1:82.7,h:.12,z0:10.2,color:"#ffd9a0",shape:"cove"},{room:"201",label:"Rug",x0:75,y0:67.2,x1:84,y1:78,h:.05,z0:0,color:"#cdbfa6",shape:"box"},{room:"202",label:"Deep hinoki soaking tub by the window",x0:93,y0:78,x1:97.4,y1:82.4,h:2.3,z0:0,color:"#e2c894",shape:"tub"},{room:"202",label:"Walk-in rain shower (floor: open item, limestone shown)",x0:86.6,y0:75.4,x1:92,y1:82.4,h:.12,z0:0,color:"mat:stone",shape:"box"},{room:"202",label:"Green zellige shower wall + unlacquered brass rain head",x0:86.6,y0:74.9,x1:91.2,y1:75.4,h:7.5,z0:0,color:"mat:zellige",shape:"box"},{room:"202",label:"Floating built-in cherry vanity (flush inset doors), integrated basins",x0:95.4,y0:69.6,x1:97.4,y1:76.5,h:1.5,z0:1.4,color:"mat:cherry",shape:"vanity"},{room:"202",label:"WC",x0:87,y0:69.6,x1:89,y1:72,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"203",label:"Closet millwork",x0:86.4,y0:59.4,x1:88.4,y1:68.6,h:7.5,z0:0,color:"mat:cherry",shape:"box"},{room:"203",label:"Closet millwork",x0:95.6,y0:59.4,x1:97.6,y1:68.6,h:7.5,z0:0,color:"mat:cherry",shape:"box"},{room:"203",label:"Island",x0:90.5,y0:62,x1:93.5,y1:66,h:3,z0:0,color:"mat:cherry",shape:"box"},{room:"211",label:"Pump + filter",x0:90,y0:15,x1:96,y1:18,h:3,z0:0,color:"mat:steel",shape:"box"},{room:"211",label:"Salt chlorine generator cell + controller",x0:92,y0:21,x1:96.5,y1:23.4,h:4.5,z0:0,color:"#9aa0a3",shape:"box"},{room:"405",label:"Gear racks",x0:18.4,y0:22.4,x1:29.6,y1:24,h:7,z0:0,color:"mat:steel",shape:"box"},{room:"102",label:"Honey-oak dining table (8)",x0:39,y0:64,x1:47,y1:68,h:2.5,z0:0,color:"mat:honey",shape:"table"},{room:"102",label:"Windsor chairs (walnut)",x0:39.5,y0:62.4,x1:46.5,y1:63.6,h:1.5,z0:0,color:"mat:honey",shape:"chairs"},{room:"102",label:"Shaker chairs (cherry)",x0:39.5,y0:68.4,x1:46.5,y1:69.6,h:1.5,z0:0,color:"mat:cherry",shape:"chairs"},{room:"102",label:"Paper lantern",x0:41,y0:64.5,x1:45,y1:67.5,h:2.4,z0:6.6,color:"#f4ecdc",shape:"lantern"},{room:"102",label:"Shoji screens",x0:49.7,y0:72.5,x1:50,y1:78.8,h:8,z0:0,color:"#f4ecdc",shape:"shoji"},{room:"103",label:"Low modular sofa",x0:51.8,y0:61.3,x1:67.2,y1:63.6,h:1,z0:0,color:"mat:linen",shape:"sofa"},{room:"103",label:"Low modular sofa",x0:51.8,y0:70.4,x1:67.2,y1:72.7,h:1,z0:0,color:"mat:linen",shape:"sofa"},{room:"103",label:"Low modular sofa",x0:51.8,y0:63.6,x1:54.1,y1:70.4,h:1,z0:0,color:"mat:linen",shape:"sofa"},{room:"103",label:"Coffee table",x0:57,y0:65.2,x1:63,y1:68.8,h:.8,z0:0,color:"#6b4a33",shape:"box"},{room:"103",label:"Paper lanterns",x0:55.5,y0:64,x1:63.5,y1:70,h:2,z0:7,color:"#f4ecdc",shape:"lanterns"},{room:"103",label:"Woven pendant",x0:52.3,y0:75.2,x1:54.3,y1:77.2,h:1.6,z0:6.6,color:"#b48a56",shape:"woven"},{room:"103",label:"Woven pendant",x0:58,y0:75.2,x1:60,y1:77.2,h:1.6,z0:6.6,color:"#b48a56",shape:"woven"},{room:"103",label:"Linear gas fire in plaster plinth",x0:69.4,y0:61,x1:71.4,y1:73,h:1.6,z0:0,color:"mat:warmplaster",shape:"fire"},{room:"103",label:"Leather lounge chair",x0:52,y0:74.6,x1:55.2,y1:78,h:2.6,z0:0,color:"#8a5a34",shape:"lounge"},{room:"204",label:"Low bench",x0:76.8,y0:29.5,x1:77.6,y1:44.5,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"401",label:"Genkan bench",x0:26,y0:53.6,x1:29.6,y1:54.6,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"404",label:"Fusuma closet doors",x0:18.6,y0:28.15,x1:29.4,y1:28.45,h:7,z0:0,color:"#e9dfc9",shape:"fusuma"},{room:"401",label:"Kumiko lattice screen",x0:27.2,y0:47.6,x1:27.45,y1:52.4,h:7,z0:0,color:"mat:honey",shape:"kumiko"},{room:"404",label:"Tokonoma",x0:18.4,y0:32,x1:20,y1:37,h:1,z0:0,color:"#6b4a33",shape:"box"},{room:"404",label:"Low table + zabuton",x0:22.5,y0:32,x1:26.5,y1:36,h:1.2,z0:0,color:"#6b4a33",shape:"lowtable"},{room:"404",label:"Paper andon lantern",x0:27.5,y0:37.6,x1:28.5,y1:38.6,h:2.2,z0:0,color:"#f4ecdc",shape:"andon"},{room:"404",label:"Shoji screens",x0:29.55,y0:30,x1:29.75,y1:34.5,h:8,z0:0,color:"#f4ecdc",shape:"shoji"},{room:"101",label:"Rift white oak base cabinets (north run)",x0:20.6,y0:76.4,x1:30.3,y1:78.6,h:2.85,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:"Honed quartzite counter (north run)",x0:20.5,y0:76.3,x1:30.4,y1:78.7,h:.15,z0:2.85,color:"mat:marble",shape:"box"},{room:"101",label:"Integrated quartzite sink + brushed stainless faucet",x0:26.6,y0:76.5,x1:29.6,y1:78.4,h:.25,z0:2.72,color:"mat:marble",shape:"box"},{room:"101",label:"Honed marble slab backsplash",x0:20.6,y0:78.45,x1:30.3,y1:78.62,h:.9,z0:3,color:"mat:marble",shape:"box"},{room:"101",label:"Rift white oak base cabinets (range wall)",x0:20.6,y0:55.3,x1:30,y1:57.5,h:2.85,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:"Honed quartzite counter (range wall)",x0:20.5,y0:55.2,x1:30.1,y1:57.6,h:.15,z0:2.85,color:"mat:marble",shape:"box"},{room:"101",label:'Pro gas range 48" with wok burner',x0:23,y0:55.35,x1:27,y1:57.7,h:3,z0:0,color:"mat:steel",shape:"box"},{room:"101",label:"Hidden hood insert in oak cabinetry (1,500 m3/h)",x0:22.6,y0:55.3,x1:27.4,y1:57.1,h:3.4,z0:6.4,color:"mat:oak",shape:"box"},{room:"101",label:"Honed marble slab backsplash (range wall)",x0:20.6,y0:55.3,x1:30,y1:55.45,h:3.4,z0:3,color:"mat:marble",shape:"box"},{room:"101",label:"Open rift oak shelves",x0:27.6,y0:55.3,x1:29.8,y1:56.3,h:3.2,z0:4.2,color:"mat:oak",shape:"shelves"},{room:"101",label:"Appliance garage (oak pocket doors)",x0:20.4,y0:62.4,x1:22.6,y1:64.4,h:3,z0:2.85,color:"mat:oak",shape:"box"},{room:"101",label:"Appliance garage base",x0:20.4,y0:62.4,x1:22.6,y1:64.4,h:2.85,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:'Built-in stainless fridge 36"',x0:20.4,y0:64.5,x1:22.6,y1:67.5,h:7.2,z0:0,color:"mat:steel",shape:"box"},{room:"101",label:"Steam oven + wall oven column (oak)",x0:20.4,y0:67.6,x1:22.6,y1:70.6,h:8.5,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:"Work island: rift oak + quartzite, flush induction",x0:23.5,y0:60.5,x1:31.5,y1:63.5,h:2.85,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:"Work island quartzite top",x0:23.4,y0:60.4,x1:31.6,y1:63.6,h:.15,z0:2.85,color:"mat:marble",shape:"box"},{room:"101",label:"Quartzite waterfall island 10' (stools one side)",x0:23,y0:67,x1:33,y1:71,h:2.85,z0:.15,color:"mat:oak",shape:"box"},{room:"101",label:"Quartzite waterfall island top",x0:22.9,y0:66.9,x1:33.1,y1:71.1,h:.18,z0:2.85,color:"mat:marble",shape:"box"},{room:"101",label:"Waterfall edge west",x0:22.9,y0:66.9,x1:23.15,y1:71.1,h:3.03,z0:0,color:"mat:marble",shape:"box"},{room:"101",label:"Waterfall edge east",x0:32.85,y0:66.9,x1:33.1,y1:71.1,h:3.03,z0:0,color:"mat:marble",shape:"box"},{room:"101",label:"Stools",x0:24,y0:71.4,x1:32,y1:72.6,h:2.5,z0:0,color:"#6b4a33",shape:"stools"},{room:"101",label:"Skylight light well (glazed)",x0:24,y0:68.4,x1:32,y1:70.6,h:.3,z0:11.6,color:"mat:glass",shape:"box"},{room:"101",label:"Linear suspended LED pendant",x0:24,y0:69.3,x1:32,y1:69.7,h:.15,z0:8.6,color:"mat:lamp",shape:"box"},{room:"205",label:"Washer/dryer",x0:78.4,y0:20.6,x1:82.6,y1:23.6,h:3,z0:0,color:"#f3f1ec",shape:"box"},{room:"205",label:"Fold counter",x0:83,y0:21.6,x1:87.6,y1:23.6,h:3,z0:0,color:"mat:lacq",shape:"box"},{room:"206",label:"Air handler + ERV",x0:99.8,y0:56.3,x1:103.6,y1:58.7,h:6,z0:0,color:"mat:steel",shape:"box"},{room:"206",label:"Linen shelves",x0:86,y0:56.3,x1:92,y1:58.7,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"212",label:"Honey-oak lockers + hooks",x0:83.2,y0:24.4,x1:83.9,y1:39.6,h:7,z0:0,color:"mat:cherry",shape:"box"},{room:"212",label:"Bench",x0:78.4,y0:34,x1:79.6,y1:39.6,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"213",label:"Built-in study desk for two",x0:82.2,y0:41,x1:83.9,y1:55,h:2.5,z0:0,color:"mat:cherry",shape:"table"},{room:"213",label:"Book shelves",x0:78.3,y0:50,x1:78.9,y1:55.6,h:7,z0:0,color:"mat:cherry",shape:"box"},{room:"214",label:"Closet millwork",x0:84.3,y0:24.3,x1:85.8,y1:36.7,h:7.5,z0:0,color:"mat:lacq",shape:"box"},{room:"215",label:"Closet millwork",x0:84.3,y0:43.3,x1:85.8,y1:55.7,h:7.5,z0:0,color:"mat:lacq",shape:"box"},{room:"209",label:"Bed under loft",x0:92,y0:25,x1:95.5,y1:31.6,h:1.4,z0:0,color:"mat:linen",shape:"bed"},{room:"209",label:"Bunk / play loft (7 ft up)",x0:90.2,y0:24.2,x1:98,y1:36.8,h:.8,z0:7,color:"mat:honey",shape:"box"},{room:"209",label:"Desk by the window",x0:102,y0:31,x1:103.8,y1:35.6,h:2.5,z0:0,color:"mat:cherry",shape:"table"},{room:"209",label:"Window-seat reading nook",x0:102.2,y0:26,x1:103.8,y1:30.5,h:1.6,z0:0,color:"mat:cherry",shape:"seat"},{room:"209",label:"Low cube shelves + bins",x0:98.5,y0:24.3,x1:101.8,y1:25.5,h:2.4,z0:0,color:"mat:cherry",shape:"cubes"},{room:"207",label:"Bed under loft",x0:92,y0:49,x1:95.5,y1:55.6,h:1.4,z0:0,color:"mat:linen",shape:"bed"},{room:"207",label:"Bunk / play loft (7 ft up)",x0:90.2,y0:43.2,x1:98,y1:55.8,h:.8,z0:7,color:"mat:honey",shape:"box"},{room:"207",label:"Desk by the window",x0:102,y0:44,x1:103.8,y1:48.6,h:2.5,z0:0,color:"mat:cherry",shape:"table"},{room:"207",label:"Window-seat reading nook",x0:102.2,y0:49.5,x1:103.8,y1:54,h:1.6,z0:0,color:"mat:cherry",shape:"seat"},{room:"207",label:"Small bouldering wall + mat",x0:98.4,y0:55.6,x1:103.6,y1:55.9,h:8,z0:0,color:"mat:honey",shape:"kidwall"},{room:"208",label:"Tub-shower",x0:84.4,y0:37.4,x1:89,y1:42.6,h:1.8,z0:0,color:"#f3f1ec",shape:"box"},{room:"208",label:"Double vanity (two sinks)",x0:91,y0:37.3,x1:95,y1:38.6,h:2.8,z0:0,color:"mat:cherry",shape:"box"},{room:"208",label:"WC",x0:101.5,y0:40.5,x1:103.5,y1:42.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"402",label:"Coats + shoes",x0:22.4,y0:40.4,x1:25.6,y1:41.6,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"403",label:"Integrated stone vanity",x0:26.4,y0:40.3,x1:29.6,y1:41.3,h:2.8,z0:0,color:"mat:stone",shape:"box"},{room:"403",label:"WC",x0:27,y0:43.6,x1:29,y1:45.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"404",label:"Book shelves",x0:18.3,y0:38.4,x1:24,y1:39.7,h:7,z0:0,color:"mat:cherry",shape:"box"},{room:"404",label:"Reading lamp",x0:26.5,y0:33,x1:27.2,y1:33.7,h:4.5,z0:0,color:"#efe6d3",shape:"box"},{room:"408",label:"Queen bed",x0:8,y0:36,x1:13.2,y1:42.6,h:1.6,z0:0,color:"mat:linen",shape:"bed"},{room:"408",label:"Reading chair",x0:14.5,y0:43,x1:16.8,y1:45.3,h:2.5,z0:0,color:"#b9a27e",shape:"box"},{room:"409",label:"Walk-in shower",x0:4.4,y0:22.4,x1:8.4,y1:26.4,h:.12,z0:0,color:"mat:stone",shape:"box"},{room:"409",label:"Vanity",x0:10.5,y0:26,x1:11.6,y1:30.5,h:2.8,z0:0,color:"mat:cherry",shape:"box"},{room:"409",label:"WC",x0:4.5,y0:29.4,x1:6.5,y1:31.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"410",label:"Closet millwork",x0:12.3,y0:22.3,x1:17.7,y1:23.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"407",label:"Quieter walnut sit-stand desk at the garden window",x0:10,y0:1.6,x1:16.5,y1:4.2,h:2.5,z0:0,color:"mat:honey",shape:"standdesk"},{room:"407",label:"Two monitors",x0:11,y0:3.4,x1:15.5,y1:3.6,h:1.2,z0:3.1,color:"#2a2a2a",shape:"box"},{room:"407",label:"Mesh ergonomic chair",x0:12.4,y0:4.8,x1:14.2,y1:6.6,h:3.4,z0:0,color:"#3a3a3a",shape:"box"},{room:"407",label:"Recline chair + ottoman (nook)",x0:2.2,y0:14.6,x1:5.4,y1:18.6,h:2.6,z0:0,color:"#b9a27e",shape:"lounge"},{room:"407",label:"Bright music wall (accent panel)",x0:22.4,y0:20.75,x1:26.4,y1:20.85,h:8,z0:.5,color:"#e8b83a",shape:"box"},{room:"407",label:"Digital piano",x0:21.5,y0:8,x1:23.3,y1:13,h:2.6,z0:0,color:"#1f1f1f",shape:"piano"},{room:"407",label:"Guitar wall",x0:17.4,y0:20.55,x1:21.8,y1:20.75,h:7.2,z0:3,color:"#a8743f",shape:"guitarwall"},{room:"407",label:"Electric drum kit",x0:19.5,y0:14.2,x1:24.5,y1:19.2,h:3.5,z0:0,color:"#2a2a2a",shape:"drums"},{room:"407",label:"Small mixer desk (walnut)",x0:23.6,y0:2.2,x1:26.4,y1:4.4,h:2.5,z0:0,color:"mat:honey",shape:"table"},{room:"407",label:"Mic stand",x0:17,y0:12.5,x1:17.8,y1:13.3,h:5.5,z0:0,color:"#9aa0a3",shape:"box"},{room:"407",label:"Karaoke screen",x0:26.45,y0:9.5,x1:26.6,y1:14.5,h:3,z0:3.5,color:"#20242a",shape:"box"},{room:"407",label:"Whiteboard",x0:1.15,y0:4.5,x1:1.3,y1:10,h:4,z0:3,color:"#fbfbf8",shape:"box"},{room:"407",label:"Walnut display shelving",x0:1.15,y0:10.4,x1:2.3,y1:14,h:1,z0:1,color:"mat:honey",shape:"shelves"},{room:"407",label:"Framed art (color accent)",x0:1.2,y0:10.8,x1:1.4,y1:13.6,h:2.6,z0:5.4,color:"#2f6fb0",shape:"art"},{room:"407",label:"Ceiling projector",x0:12.6,y0:10,x1:14,y1:11.2,h:.6,z0:11.6,color:"#e8e6e0",shape:"box"},{room:"407",label:"Projection screen",x0:9.8,y0:20.65,x1:16.8,y1:20.8,h:4.5,z0:3.2,color:"#fbfbf8",shape:"box"},{room:"407",label:"Printer/scanner in open niche shelf",x0:5.5,y0:19.6,x1:8.5,y1:20.8,h:3.2,z0:0,color:"#f3f1ec",shape:"shelves"},{room:"407",label:"Fabric acoustic panels (east)",x0:26.6,y0:15,x1:26.8,y1:20,h:4.5,z0:3,color:"#e4e1da",shape:"apanels"},{room:"407",label:"Fabric acoustic panels (east)",x0:26.6,y0:2.5,x1:26.8,y1:8.8,h:4.5,z0:3,color:"#e4e1da",shape:"apanels"},{room:"407",label:"Fabric acoustic panels (west)",x0:1.2,y0:15,x1:1.4,y1:20,h:4.5,z0:3,color:"#e4e1da",shape:"apanels"},{room:"407",label:"Acoustic ceiling clouds",x0:4,y0:4,x1:24,y1:18,h:.3,z0:11.8,color:"#f4f2ec",shape:"clouds"},{room:"407",label:"Layered pendant over the desk",x0:12.5,y0:2.4,x1:14.5,y1:4,h:1.2,z0:7.2,color:"#efe6d3",shape:"layered"},{room:"407",label:"Evening RGB accent strip (music wall)",x0:17.5,y0:20.6,x1:26,y1:20.7,h:.1,z0:9.2,color:"#b04de0",shape:"rgb"},{room:"407",label:"Evening RGB accent strip (east)",x0:26.5,y0:3,x1:26.6,y1:19,h:.1,z0:9.2,color:"#b04de0",shape:"rgb"},{room:"407",label:"Inner isolation wall (east)",x0:26.9,y0:.6,x1:27.4,y1:21.4,h:12.6,z0:0,color:"mat:drywall",shape:"box"},{room:"407",label:"Inner isolation wall (north)",x0:9.6,y0:20.9,x1:22.6,y1:21.4,h:12.6,z0:0,color:"mat:drywall",shape:"box"},{room:"407",label:"Inner isolation wall (west)",x0:.6,y0:18.6,x1:1.1,y1:21.4,h:12.6,z0:0,color:"mat:drywall",shape:"box"},{room:"407",label:"Inner isolation wall (west)",x0:.6,y0:.6,x1:1.1,y1:3.4,h:12.6,z0:0,color:"mat:drywall",shape:"box"},{room:"407",label:"Rug",x0:8.5,y0:6.5,x1:16.5,y1:12.5,h:.05,z0:0,color:"#e6e1d6",shape:"box"},{room:"302",label:"Large open mat floor",x0:30,y0:6.5,x1:40,y1:19.5,h:.06,z0:0,color:"#c9cfbd",shape:"box"},{room:"302",label:"Free-weights rack",x0:42.6,y0:20.7,x1:49.4,y1:21.8,h:3,z0:0,color:"#2a2a2a",shape:"krack"},{room:"302",label:"Lifting tiles",x0:41.5,y0:15,x1:49,y1:20.4,h:.06,z0:0,color:"mat:rubber",shape:"box"},{room:"302",label:"Treadmill",x0:41,y0:2.5,x1:47.5,y1:5.6,h:4.4,z0:0,color:"#2a2a2a",shape:"treadmill"},{room:"302",label:"Bike",x0:41.5,y0:7,x1:45,y1:9,h:3.6,z0:0,color:"#3a3a3a",shape:"box"},{room:"302",label:"Rower",x0:41,y0:-2.6,x1:48.5,y1:-.8,h:1.7,z0:0,color:"mat:honey",shape:"rower"},{room:"302",label:"Rig with rings + rope",x0:30.8,y0:-3.5,x1:35.8,y1:2.5,h:9.5,z0:0,color:"#2a2a2a",shape:"rig"},{room:"302",label:"Open cubbies",x0:28.3,y0:-4,x1:29.6,y1:5.5,h:4.5,z0:0,color:"mat:oak",shape:"cubes"},{room:"302",label:"Yoga props wall + bolsters",x0:28.3,y0:7,x1:29.4,y1:18,h:1,z0:.8,color:"mat:oak",shape:"shelves"},{room:"302",label:"Mirror wall",x0:49.58,y0:7,x1:49.74,y1:18,h:7.5,z0:.3,color:"#dfe7ea",shape:"mirror"},{room:"302",label:"Warm cove light",x0:28.4,y0:-4.6,x1:49.6,y1:21.6,h:.12,z0:11.4,color:"#ffd9a0",shape:"cove"},{room:"302",label:"Warm wall wash (north)",x0:30,y0:21.5,x1:49,y1:21.7,h:.1,z0:10.8,color:"#ffd9a0",shape:"rgb"},{room:"303",label:"Honed non-slip stone surround",x0:58.6,y0:15.4,x1:65.8,y1:21.8,h:.03,z0:0,color:"mat:stone",shape:"box"},{room:"303",label:"Cold plunge, sage tile, flush with the floor",x0:59.6,y0:16.4,x1:64.8,y1:20.8,h:.05,z0:0,color:"mat:sage",shape:"plunge"},{room:"303",label:"Freestanding deep soak tub",x0:59.5,y0:6,x1:65,y1:9.4,h:2.3,z0:0,color:"#f3f1ec",shape:"tub"},{room:"303",label:"Rain showers, brushed warm brass",x0:51,y0:18.2,x1:56,y1:21.6,h:.12,z0:0,color:"mat:stone",shape:"box"},{room:"303",label:"Brushed brass rain heads",x0:52,y0:19.5,x1:55,y1:20.2,h:.1,z0:7.4,color:"mat:brass",shape:"box"},{room:"303",label:"Zero-gravity recovery chairs",x0:51,y0:5,x1:56,y1:8,h:2.4,z0:0,color:"#b9a27e",shape:"lounge2"},{room:"304",label:"Tiered pale hinoki benches",x0:50.4,y0:-.6,x1:57.6,y1:3.6,h:3,z0:0,color:"mat:hinoki",shape:"benches"},{room:"304",label:"Warm under-bench LED",x0:50.5,y0:-.5,x1:57.5,y1:-.4,h:.08,z0:1.3,color:"#ffb060",shape:"rgb"},{room:"304",label:"Electric rock heater",x0:56.2,y0:-4.4,x1:57.6,y1:-2.6,h:2.6,z0:0,color:"#2f2c29",shape:"heater"},{room:"305",label:"Heated sage-tile bench",x0:58.4,y0:.8,x1:65.6,y1:3.6,h:1.6,z0:0,color:"mat:sage",shape:"box"},{room:"306",label:"Compact changing niche: open cubbies",x0:70.6,y0:-4,x1:71.6,y1:6,h:6,z0:0,color:"mat:oak",shape:"cubes"},{room:"306",label:"Bench",x0:66.6,y0:0,x1:67.8,y1:6,h:1.5,z0:0,color:"mat:oak",shape:"box"},{room:"401",label:"Pale plaster gallery wall (accent)",x0:19,y0:54.3,x1:25,y1:54.8,h:9,z0:0,color:"mat:plaster",shape:"box"},{room:"401",label:"Framed art",x0:20,y0:54.05,x1:24,y1:54.25,h:3.5,z0:3.5,color:"#d9543a",shape:"art"},{room:"401",label:"Framed art",x0:25,y0:46.25,x1:29,y1:46.45,h:4,z0:3.5,color:"#2f6fb0",shape:"art"},{room:"103",label:"Framed art (large)",x0:71.4,y0:64,x1:71.6,y1:71,h:4.2,z0:3.8,color:"#e8b83a",shape:"art"},{room:"102",label:"Framed art",x0:36.2,y0:66,x1:36.4,y1:72,h:3.5,z0:4,color:"#3f8f7a",shape:"art"},{room:"204",label:"Framed art",x0:77.55,y0:30,x1:77.75,y1:35,h:3.5,z0:4,color:"#d9543a",shape:"art"},{room:"204",label:"Framed art",x0:77.55,y0:40,x1:77.75,y1:45,h:3.5,z0:4,color:"#2f6fb0",shape:"art"},{room:"406",label:"Framed art",x0:30.25,y0:38.5,x1:30.45,y1:41,h:3,z0:4,color:"#e8b83a",shape:"art"},{room:"411",label:"Framed art",x0:18.25,y0:40.4,x1:21.8,y1:40.6,h:2.6,z0:4.2,color:"#8e5cc2",shape:"art"}],A_=[{he:14.6,hv:12.6,id:"living",oh:{e:0,n:8,s:6,w:6},type:"butterfly",valley:67,wall:12,x0:10,x1:72,y0:55,y1:79},{axis:"y",h0:11.6,h1:13.4,holes:[[93,78,97,82]],id:"master",oh:{e:6,n:6,s:0,w:0},type:"shed",x0:72,x1:98,y0:59,y1:83},{axis:"x",h0:11.8,h1:10.6,id:"east",oh:{e:6,n:0,s:6,w:6},type:"shed",x0:72,x1:84,y0:14,y1:59},{axis:"y",h0:14,h1:12.6,id:"south",oh:{e:0,n:6,s:6,w:0},type:"shed",x0:28,x1:72,y0:-5,y1:27},{axis:"y",h0:16,h1:14.6,holes:[[13,9,19,14]],id:"office",oh:{e:6,n:0,s:6,w:6},type:"shed",x0:0,x1:28,y0:0,y1:22},{axis:"x",h0:11.8,h1:10.6,id:"west",oh:{e:6,n:0,s:0,w:6},type:"shed",x0:18,x1:36,y0:22,y1:55},{axis:"x",h0:16,h1:15,id:"kids",oh:{e:6,n:0,s:0,w:0},type:"shed",x0:84,x1:104,y0:24,y1:59},{axis:"x",h0:11.8,h1:10.6,id:"laundry",oh:{e:6,n:0,s:6,w:0},type:"shed",x0:84,x1:98,y0:14,y1:24},{axis:"x",h0:11,h1:12,id:"guest",oh:{e:0,n:6,s:0,w:6},type:"shed",x0:4,x1:18,y0:22,y1:46}],R_={atu:{x0:103,x1:115,y0:-3,y1:3},bale:{h:9,x0:90,x1:97,y0:-27,y1:-19},bathgarden:{x0:98,x1:106,y0:69,y1:83},bikes:{x0:4,x1:7.5,y0:62,y1:72},carport:{x0:-44,x1:-20,y0:30,y1:54},climb:{h:17,oh:5,wall:12,x0:-22,x1:-4,y0:0,y1:18},condensers:[[119,1],[119,5],[119,9]],cshower:{x0:66.5,x1:71.5,y0:27.5,y1:31.5},drainfield:{x0:30,x1:90,y0:-74,y1:-52},entrycourt:{x0:-20,x1:18,y0:46,y1:55},firepit:{cx:58,cy:99,r:7},frontgarden:[[-16,38,-2,46],[-16,57,2,62]],lane:{x0:-32,x1:43,y0:-16,y1:-8},lanterns:[],lawn:{x0:39,x1:69,y0:42,y1:50},maples:[[41.5,47]],bamboo:[[37.6,31],[37.6,34.5],[70.4,45],[70.4,49]],bodhi:{cx:62,cy:47},orchard:[[-56,70],[-46,70],[-56,80],[-46,80],[-56,90],[-46,90],[-36,94]],outdoor_shower:{x0:72.5,x1:77.5,y0:4,y1:10},pergola:{x0:19,x1:37,y0:81,y1:95},pool:{x0:54,x1:88,y0:-22,y1:-10},pooldeck:{x0:48,x1:98,y0:-28,y1:-5},power:{x0:125,x1:135,y0:-4,y1:5},pullup:{x0:45,x1:48.5,y0:-10,y1:-8},service:[[-62,2],[-62,-38],[118,-38],[118,-6]],shadetree:{cx:53,cy:45},tanks:[[106,18,5],[117,18,5]],util:{gate:[112,124],x0:100,x1:136,y0:-6,y1:24},veg:{x0:-30,x1:-6,y0:64,y1:86},veranda:{x0:36,x1:72,y0:79,y1:87},walkway:{h:9,x0:-20,x1:13,y0:48,y1:54},water:{x0:57,x1:68,y0:31,y1:39},watertreat:{x0:124,x1:135,y0:13,y1:23},well:{cx:140,cy:95}},C_={"Living Pavilion":"whiteplaster","Sleeping Wing":"whiteplaster","Wellness + Gym Wing":"whiteplaster","Studio + Arrival":"whiteplaster"},P_={205:"charred",211:"charred",306:"charred",401:"teak"},L_=6334,D_={x0:36,y0:27,x1:72,y1:55},N_=[{id:"C1",name:"Climbing Pavilion",x0:-22,y0:0,x1:-4,y1:18,w:18,d:18,area:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. 16-ft-wide, 12-ft-high kids' bouldering wall on the north side facing the sprint lane, over a 12-inch poured-rubber soft-fall surface. Sits in the active zone with the gym, sprint lane and a second bike rack."}],at={wallMat:S_,frameless:w_,rooms:M_,walls:E_,furn:T_,roofs:A_,site:R_,clad:C_,cladOvr:P_,total:L_,courtyard:D_,covered:N_},gt=49,At=44,Yt=(n,e,t=0)=>new F(n-gt,t,-(e-At)),td=new In(new F(0,-1,0),1e5),nd=[td];function I_(){const n=b_(),e={},t=i=>new Nt(i);e.stucco=t({map:n.stucco,roughness:.92}),e.plaster=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.25,.25),roughness:.95,color:16776438}),e.warmplaster=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.3,.3),roughness:.95,color:16182236}),e.drywall=t({color:16250610,roughness:.9}),e.clay=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.35,.35),roughness:.96,color:15919064}),e.hinoki=t({map:n.aspen,normalMap:n.aspenN,normalScale:new re(.3,.3),roughness:.7,color:16773334}),e.sage=t({map:n.zellige,normalMap:n.zelligeN,roughness:.3,color:14937819}),e.charred=t({map:n.charred,normalMap:n.charredN,roughness:.82}),e.rammed=t({map:n.rammed,normalMap:n.rammedN,normalScale:new re(.6,.6),roughness:.95}),e.stone=t({map:n.stone,roughness:.8,color:16314592}),e.flag=t({map:n.flag,normalMap:n.flagN,roughness:.88}),e.plinth=t({map:n.stone,roughness:.85,color:15985887}),e.oak=t({map:n.oak,roughness:.6}),e.honey=t({map:n.honey,normalMap:n.honeyN,normalScale:new re(.5,.5),roughness:.48,color:9067840}),e.cherry=t({map:n.honey,normalMap:n.honeyN,normalScale:new re(.5,.5),roughness:.45,color:13666914}),e.herring=t({map:n.herring,normalMap:n.herringN,normalScale:new re(.6,.6),roughness:.5,color:13212264}),e.stonetile=t({map:n.stonetile,normalMap:n.stonetileN,normalScale:new re(.5,.5),roughness:.62,color:16183005}),e.bluestone=t({map:n.stonetile,normalMap:n.stonetileN,roughness:.75,color:9279907}),e.basalt=t({map:n.stonetile,normalMap:n.stonetileN,roughness:.8,color:5922144}),e.granite=t({map:n.stone,roughness:.92,color:12894392}),e.slate=t({map:n.flag,normalMap:n.flagN,roughness:.85,color:7831946}),e.soapstone=t({map:n.marble,roughness:.6,color:8358533}),e.earth=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.7,.7),roughness:.97,color:14268559}),e.whiteplaster=t({normalMap:n.limeN,normalScale:new re(.08,.08),roughness:.88,color:16316145}),e.bronze=t({color:5127468,roughness:.4,metalness:.65}),e.blackstone=t({map:n.blackstone,normalMap:n.blackstoneN,normalScale:new re(.4,.4),roughness:.42}),e.marble=t({map:n.marble,roughness:.18}),e.paver=t({map:n.stonetile,normalMap:n.stonetileN,roughness:.85,color:16776437}),e.bigtile=t({map:n.stonetile,normalMap:n.stonetileN,normalScale:new re(.2,.2),roughness:.4,color:16777215}),e.zellige=t({map:n.zellige,normalMap:n.zelligeN,roughness:.12,metalness:.05}),e.aspen=t({map:n.aspen,normalMap:n.aspenN,normalScale:new re(.4,.4),roughness:.7}),e.pooltile=t({map:n.pooltile,normalMap:n.pooltileN,roughness:.3}),e.linen=t({map:n.linen,color:15920352,roughness:.95}),e.lacq=t({color:16052973,roughness:.32}),e.steel=t({color:12106942,roughness:.3,metalness:.85}),e.deck=t({map:n.deck,roughness:.8}),e.soffit=t({map:n.soffit,roughness:.7,color:15250556}),e.tatami=t({map:n.tatami,normalMap:n.tatamiN,roughness:.9}),e.rubber=t({map:n.rubber,roughness:.95}),e.seam=t({map:n.seam,normalMap:n.seamN,roughness:.42,metalness:.35,color:15132390}),e.gravel=t({map:n.gravel,normalMap:n.gravelN,roughness:1}),e.turf=t({map:n.turf,roughness:1}),e.meadow=t({map:n.meadow,roughness:1}),e.cedar=t({map:n.cedar,roughness:.8}),e.concrete=t({map:n.concrete,roughness:.9}),e.frame=t({color:2039067,roughness:.45,metalness:.5}),e.glass=new Wp({color:13624294,roughness:.05,metalness:0,transparent:!0,opacity:.22,depthWrite:!1,side:wn,emissive:0}),e.sheer=t({color:16513006,roughness:1,transparent:!0,opacity:.45,side:wn,depthWrite:!1}),e.paper=t({color:16183264,roughness:1,emissive:16767392,emissiveIntensity:.25}),e.paper.name="lamp",e.lamp=t({color:16773590,emissive:16762746,emissiveIntensity:.6}),e.lamp.name="lamp",e.rgb=t({color:11554272,emissive:10173439,emissiveIntensity:1.2}),e.mirror=t({color:13226966,roughness:.04,metalness:.9}),e.brass=t({color:11833164,roughness:.48,metalness:.85}),e.leather=t({color:9067060,roughness:.55}),e.water=t({color:5087155,roughness:.08,metalness:.1,transparent:!0,opacity:.88}),e.poolwater=t({color:4168338,roughness:.05,metalness:.1,transparent:!0,opacity:.8}),e.white=t({color:15855335,roughness:.6}),e.dark=t({color:2894375,roughness:.7}),e.fir=t({color:13146726,roughness:.7}),e.teak=t({map:n.honey,normalMap:n.honeyN,normalScale:new re(.4,.4),color:14196838,roughness:.55}),e.copper=t({color:12088138,roughness:.35,metalness:.85}),e.highlight=new ki({color:7700575,transparent:!0,opacity:.28,depthWrite:!1}),e.c={};for(const i of["drywall","warmplaster","clay","hinoki","sage","paver","bigtile","copper","cherry","bluestone","basalt","granite","slate","soapstone","earth","whiteplaster","bronze","brass","teak","stucco","plaster","charred","rammed","cedar","stone","frame","glass","oak","fir","honey","herring","stonetile","blackstone","marble","zellige","aspen","linen","lacq","steel","sheer","paper","lamp","rgb","mirror","brass","leather","water","rubber","tatami","white","dark","teak","flag"]){const s=e[i].clone();s.name=e[i].name,s.clippingPlanes=nd,s.clipShadows=!0,e.c[i]=s}return e.T=n,e}const zo={};function ue(n){if(!zo[n]){const e=new Nt({color:new Ye(n),roughness:.75});e.clippingPlanes=nd,e.clipShadows=!0,zo[n]=e}return zo[n]}let La=null;function U_(n){return typeof n=="string"&&n.startsWith("mat:")?La.c[n.slice(4)]||La[n.slice(4)]:ue(n)}function Qi(n,e,t){const i=new Cn(n,e,t),s=i.attributes.uv,r=[[t,e],[t,e],[n,t],[n,t],[n,e],[n,e]];for(let a=0;a<6;a++)for(let o=0;o<4;o++){const l=a*4+o;s.setXY(l,s.getX(l)*r[a][0],s.getY(l)*r[a][1])}return i}class O_{constructor(){this.b=new Map}add(e,t,i){const s=e+"|"+t.uuid;this.b.has(s)||this.b.set(s,{layer:e,mat:t,geos:[]}),this.b.get(s).geos.push(i.index?i.toNonIndexed():i)}build(e,t={}){for(const{layer:i,mat:s,geos:r}of this.b.values()){const a=r.map(c=>{const u=new Dt;return u.setAttribute("position",c.attributes.position),u.setAttribute("normal",c.attributes.normal),c.attributes.uv?u.setAttribute("uv",c.attributes.uv):u.setAttribute("uv",new tn(new Float32Array(c.attributes.position.count*2),2)),u}),o=ed(a,!1),l=new Ut(o,s),h=s.transparent;l.castShadow=!h&&i!=="ground",l.receiveShadow=!s.transparent||s===void 0,i==="glass"&&(l.renderOrder=2,l.castShadow=!1),e[i].add(l)}}}const zt=new O_;function T(n,e,t,i,s,r,a,o,l){const h=Math.abs(s-t),c=Math.abs(r-i),u=Math.abs(o-a);if(h<.001||c<.001||u<.001)return;let d=Qi(h,u,c);if(d.translate((t+s)/2-gt,(a+o)/2,-((i+r)/2-At)),l){d=d.toNonIndexed();const f=d.attributes.position;for(let p=0;p<f.count;p++)f.setY(p,f.getY(p)+l(f.getX(p)+gt,At-f.getZ(p)));d.computeVertexNormals()}if(Array.isArray(e)){const f=[0,1,2,3,4,5],p=d.index?d.toNonIndexed():d;f.forEach(_=>{const g=new Dt;for(const m of["position","normal","uv"]){const S=p.attributes[m];g.setAttribute(m,new tn(S.array.slice(_*6*S.itemSize,(_+1)*6*S.itemSize),S.itemSize))}zt.add(n,e[_],g)})}else zt.add(n,e,d)}function ke(n,e,t,i,s,r,a,o=20,l){const h=new hn(l??s,s,a-r,o);h.translate(t-gt,(r+a)/2,-(i-At)),zt.add(n,e,h)}function Xt(n,e,t,i,s,r){t.translate(i-gt,r,-(s-At)),zt.add(n,e,t)}const dc=at.roofs;function Sa(n,e,t){const[i,s,r]=n.axis==="x"?[e,n.x0,n.x1]:[t,n.y0,n.y1];return n.h0+(n.h1-n.h0)*(i-s)/(r-s)}function as(n,e){let t=null;for(const i of dc){if(n<i.x0-.01||n>i.x1+.01||e<i.y0-.01||e>i.y1+.01)continue;let s;if(i.type==="flat")s=i.h-.6;else if(i.type==="shed")s=Sa(i,n,e)-.6;else{const r=i.y1+i.oh.n,a=i.y0-i.oh.s;s=e>=i.valley?i.hv+(i.he-i.hv)*(e-i.valley)/(r-i.valley):i.hv+(i.he-i.hv)*(i.valley-e)/(i.valley-a)}t=t===null?s:Math.max(t,s)}return t??10}function F_(n){for(const e of dc){const t=e.x0-e.oh.w,i=e.x1+e.oh.e,s=e.y0-e.oh.s,r=e.y1+e.oh.n;if(e.type==="shed"){const a=(c,u)=>Sa(e,c,u)-(e.axis==="x"?e.h0+(e.h1-e.h0)*((e.x0+e.x1)/2-e.x0)/(e.x1-e.x0):e.h0+(e.h1-e.h0)*((e.y0+e.y1)/2-e.y0)/(e.y1-e.y0)),o=Sa(e,(e.x0+e.x1)/2,(e.y0+e.y1)/2),l=[n.seam,n.seam,n.seam,n.soffit,n.seam,n.seam];let h=[[t,s,i,r]];for(const[c,u,d,f]of e.holes||[]){h=[[t,s,i,u],[t,f,i,r],[t,u,c,f],[d,u,i,f]];const p=Sa(e,(c+d)/2,(u+f)/2);T("roof",n.frame,c-.25,u-.25,d+.25,f+.25,p+.35,p+.75),T("roof",n.glass,c,u,d,f,p+.7,p+.78)}for(const[c,u,d,f]of h)T("roof",l,c,u,d,f,o-.6,o+.4,a);T("roof",n.seam,t,s,i,r,o+.35,o+.45,a);for(const[c,u,d,f]of[[t-.08,s-.08,i+.08,s+.12],[t-.08,r-.12,i+.08,r+.08],[t-.08,s,t+.12,r],[i-.12,s,i+.08,r]])T("roof",n.copper,c,u,d,f,o-.7,o+.5,a)}else if(e.type==="flat"){const a=e.h-.6,o=e.h+.4;T("roof",[n.seam,n.seam,n.seam,n.soffit,n.seam,n.seam],t,s,i,r,a,o),T("roof",n.seam,t,s,i,r,o-.05,o+.05);for(const[l,h,c,u]of[[t-.08,s-.08,i+.08,s+.12],[t-.08,r-.12,i+.08,r+.08],[t-.08,s,t+.12,r],[i-.12,s,i+.08,r]])T("roof",n.copper,l,h,c,u,a-.1,o+.1)}else{const o=i-t,l=(t+i)/2-gt,h=(u,d,f,p,_,g,m,S=0)=>{const A=-(u-At),b=-(f-At),E=Math.hypot(A-b,d-p),M=Qi(g??o,.9,E),D=Math.atan2(p-d,A-b);M.rotateX(D),M.translate(m??l,(d+p)/2+.9/2-S,(A+b)/2);const y=M.toNonIndexed();_.forEach((R,U)=>{const x=new Dt;for(const C of["position","normal","uv"]){const I=y.attributes[C];x.setAttribute(C,new tn(I.array.slice(U*6*I.itemSize,(U+1)*6*I.itemSize),I.itemSize))}zt.add("roof",R,x)})},c=[n.seam,n.seam,n.seam,n.soffit,n.seam,n.seam];h(s,e.he,e.valley,e.hv,c),h(e.valley,e.hv,r,e.he,c);for(let u=e.x0+10;u<e.x1;u+=8){const d=[n.c.fir,n.c.fir,n.c.fir,n.c.fir,n.c.fir,n.c.fir];h(e.y0,as(u,e.y0),e.valley,e.hv,d,.55,u-gt,1.1),h(e.valley,e.hv,e.y1,as(u,e.y1),d,.55,u-gt,1.1)}T("roof",n.copper,t,e.valley-.4,i,e.valley+.4,e.hv+.6,e.hv+.95)}}}function k_(n){const e=at.rooms.find(t=>t.id===n);return e&&(at.cladOvr[n]||at.clad[e.wing])||"stucco"}const Da=[];function B_(n){const e=[...n.feats].sort((s,r)=>s.a-r.a),t=[];let i=n.a;for(const s of e)s.a>i+1e-6&&t.push({a:i,b:s.a,k:"solid"}),t.push({a:s.a,b:s.b,k:s.k,x:s.x}),i=s.b;return n.b>i+1e-6&&t.push({a:i,b:n.b,k:"solid"}),t}const Na=(n,e)=>n.o==="h"?[e,n.c]:[n.c,e];function Ho(n,e,t,i,s,r,a,o,l){const h=new za;if(h.moveTo(i,r),h.lineTo(s,r),a!=null)h.lineTo(s,a),h.lineTo(i,a);else{const d=[s];if(t.o==="v")for(const _ of dc)_.type==="butterfly"&&t.c>=_.x0-.01&&t.c<=_.x1+.01&&_.valley>i&&_.valley<s&&d.unshift(_.valley);d.sort((_,g)=>g-_);for(const _ of d){const[g,m]=Na(t,_);h.lineTo(_,as(g,m))}const[f,p]=Na(t,i);h.lineTo(i,as(f,p))}h.closePath();const c=new lc(h,{depth:l-o,bevelEnabled:!1,steps:1}),u=new lt;t.o==="h"?u.makeTranslation(-gt,0,-(t.c-At)-l):(u.makeRotationY(Math.PI/2),u.premultiply(new lt().makeTranslation(t.c-gt+o,0,At))),c.applyMatrix4(u),zt.add(n,e,c)}function fa(n,e,t,i,s,r){const a=e.ext?.75:.45;let o=t,l=i;if(e.ext&&(Math.abs(t-e.a)<1e-6&&(o-=a/2),Math.abs(i-e.b)<1e-6&&(l+=a/2)),e.ext){const h=e.pos||e.neg,c=e.pos?-1:1,u=n.c[k_(h)],d=jh(n,h),f=c>0?[0,a/2]:[-a/2,0],p=c>0?[-a/2,0]:[0,a/2];Ho("walls",u,e,o,l,s,r,f[0],f[1]),Ho("walls",d,e,o,l,s,r,p[0],p[1])}else{const h=u=>e.pos===u||e.neg===u,c=["304","305","303","404","302"].find(h);Ho("walls",jh(n,c),e,t-a/2+.001,i+a/2-.001,s,r,-a/2,a/2)}}function jh(n,e){return n.c[(at.wallMat||{})[e]||"drywall"]}function eu(n,e,t,i,s,r,a){const l=(u,d,f,p,_,g,m,S)=>{e.o==="h"?T(S,m,u,e.c+_,d,e.c+g,f,p):T(S,m,e.c+_,u,e.c+g,d,f,p)};if(l(t,i,s,r,-.08/2,.08/2,n.c.glass,"glass"),l(t,i,s,s+.25,-.18,.18,n.c.copper,"walls"),l(t,i,r-.3,r,-.18,.18,n.c.copper,"walls"),(at.frameless||[]).some(([u,d,f,p])=>u===e.o&&Math.abs(d-e.c)<.01&&t<p&&i>f))return void Da.push({s:e,a:t,b:i});const c=Math.max(1,Math.round((i-t)/(a?5.5:8)));for(let u=0;u<=c;u++){const d=t+(i-t)*u/c;l(d-.09,d+.09,s,r,-.15,.15,n.c.copper,"walls")}Da.push({s:e,a:t,b:i})}function z_(n){for(const e of at.walls)for(const t of B_(e)){const[i,s]=Na(e,(t.a+t.b)/2),r=as(i,s);if(t.k==="solid")fa(n,e,t.a,t.b,0,null),Da.push({s:e,a:t.a,b:t.b});else if(t.k!=="open")if(["door","exdoor","slide","front"].includes(t.k)){const a=t.k==="front"?9:t.k==="slide"?8:7.5;if(r>a+.05&&fa(n,e,t.a,t.b,a,null),t.k==="front"){const l=t.b-t.a,h=Qi(l*.62,a-.05,.22);h.translate(l*.31,a/2,0),h.rotateY(-.55);const[c,u]=Na(e,t.a+l*.19);h.translate(c-gt,0,-(u-At)),zt.add("walls",n.c.teak,h)}const o=["201","203","207","209","212","213","404"];if((t.k==="door"||t.k==="slide")&&(o.includes(e.pos)||o.includes(e.neg))&&!["405","407"].includes(e.pos)&&!["405","407"].includes(e.neg)){const l=t.b-t.a,h=Math.max(1.6,l*.5),c=.24,u=(p,_,g,m,S,A,b)=>{e.o==="h"?T("furn",b,p,e.c+S,_,e.c+A,g,m):T("furn",b,e.c+S,p,e.c+A,_,g,m)},d=t.a,f=t.a+h;u(d,f,.05,a-.1,c-.02,c+.02,n.c.paper),u(d,f,0,.15,c-.06,c+.06,n.c.cherry),u(d,f,a-.2,a-.05,c-.06,c+.06,n.c.cherry);for(const p of[d,d+h/2-.04,f-.08])u(p,p+.08,0,a-.05,c-.06,c+.06,n.c.cherry);for(let p=1;p<5;p++){const _=(a-.1)*p/5;u(d,f,_-.03,_+.03,c-.05,c+.05,n.c.cherry)}}}else if(t.k==="window"){const[a,o]=t.x;fa(n,e,t.a,t.b,0,a),eu(n,e,t.a,t.b,a,Math.min(o,r),!1),r>o+.05&&fa(n,e,t.a,t.b,o,null)}else(t.k==="glass"||t.k==="fixed")&&eu(n,e,t.a,t.b,0,r,t.k==="glass")}}const H_={bigtile:"bigtile",oakplank:"oak",sage:"sage",hinoki:"hinoki",oak:"oak",honey:"honey",herring:"herring",stonetile:"stonetile",blackstone:"blackstone",aspen:"aspen",stone:"stone",tatami:"tatami",rubber:"rubber",cedar:"cedar",concrete:"concrete"},id=[];function G_(n,e){const t=new ki({visible:!1});for(const i of at.rooms){const s=n[H_[i.floor]]||n.oak,r=[n.plinth,n.plinth,s,n.plinth,n.plinth,n.plinth],a=at.furn.find(c=>c.room===i.id&&c.shape==="pit");a?(T("floors",r,i.x0,i.y0,i.x1,a.y0,-1.8,0),T("floors",r,i.x0,a.y1,i.x1,i.y1,-1.8,0),T("floors",r,i.x0,a.y0,a.x0,a.y1,-1.8,0),T("floors",r,a.x1,a.y0,i.x1,a.y1,-1.8,0),T("floors",[n.herring,n.herring,n.herring,n.herring,n.herring,n.herring],a.x0,a.y0,a.x1,a.y1,-2,-1.5)):T("floors",r,i.x0,i.y0,i.x1,i.y1,-1.8,0);const o=as((i.x0+i.x1)/2,(i.y0+i.y1)/2),l=new Cn(i.w-.2,o,i.d-.2);l.translate((i.x0+i.x1)/2-gt,o/2,-((i.y0+i.y1)/2-At));const h=new Ut(l,t);h.userData.room=i.id,e.pick.add(h),id.push(h)}}const B="furn",Qt="detail";function V_(n){return at.rooms.find(e=>e.id===n)}function Ti(n,e,t,i,s,r,a=1,o=12){const l=new Ni(r,o,Math.max(6,o/2));l.scale(1,a,1),Xt(n,e,l,t,i,s)}function W_(n,e,t){const i=V_(e.room),s=e.y0-i.y0<i.y1-e.y1,r=s?e.y0:e.y1,a=s?1:-1;T(B,n.c.dark,e.x0+.3,e.y0+.3,e.x1-.3,e.y1-.3,0,.35),T(B,t,e.x0,e.y0,e.x1,e.y1,.35,e.h-.35),T(B,n.c.white,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,e.h-.35,e.h),T(B,ue("#d8cdb8"),e.x0-.05,Math.min(r+a*2.2,r+a*(e.y1-e.y0)*.95),e.x1+.05,Math.max(r+a*2.2,r+a*(e.y1-e.y0)*.95),e.h-.3,e.h+.12);const o=e.x1-e.x0>4.5?2:1;for(let l=0;l<o;l++){const h=(e.x1-e.x0-.6)/o,c=e.x0+.3+l*h;T(B,n.c.linen,c+.1,Math.min(r+a*.3,r+a*1.6),c+h-.1,Math.max(r+a*.3,r+a*1.6),e.h,e.h+.45)}}function X_(n,e,t){const i=Math.max(1,Math.round((n.x1-n.x0)/2.2)),s=1.6;for(let r=0;r<i;r++){const a=n.x0+(n.x1-n.x0)*(r+.5)/i;T(B,e,a-s/2,n.y0,a+s/2,n.y1,1.45,1.6),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([l,h])=>T(B,ue("#6b4a33"),a+l*(s/2-.1)-.05,h<0?n.y0+.05:n.y1-.15,a+l*(s/2-.1)+.05,h<0?n.y0+.15:n.y1-.05,0,1.45));const o=t?n.y0:n.y1-.12;T(B,ue("#6b4a33"),a-s/2,o,a+s/2,o+.12,1.6,2.9)}}function Go(n,e,t,i,s,r,a){T(B,n.c.frame,e+.2,t+.2,i-.2,s-.2,0,.5),T(B,r,e,t,i,s,.5,1.25);const o=a?t:s-.6,l=a?t+.6:s;T(B,r,e,o,i,l,1.25,2.7),T(B,r,e,t,e+.35,s,1.25,1.9),T(B,r,i-.35,t,i,s,1.25,1.9)}function q_(n,e,t,i,s){const r=new hn(.62,.62,s,18);r.rotateX(Math.PI/2),Xt(B,ue(t),r,n,i,e);const a=new hn(.48,.48,s,18);a.rotateX(Math.PI/2),Xt(B,ue(t),a,n,i,e+.75),T(B,ue("#3a2a20"),n-.08,i-s/2,n+.08,i+s/2,e+1,e+2.6),T(B,ue("#2a1d15"),n-.13,i-s/2,n+.13,i+s/2,e+2.6,e+3)}function Y_(n){La=n;for(const e of at.furn){if(e.shape==="pit")continue;const t=U_(e.color),i=e.z0,s=e.z0+Math.max(e.h,.04),r=(e.x0+e.x1)/2,a=(e.y0+e.y1)/2,o=e.x1-e.x0,l=e.y1-e.y0,h=o>=l;switch(e.shape){case"island":T(B,n.c.lacq,e.x0+.4,e.y0+1.2,e.x1-.4,e.y1-.1,0,2.85),T(B,n.c.soapstone,e.x0+.15,e.y0,e.x1-.15,e.y1,2.85,3),T(B,t,e.x0,e.y0,e.x0+.15,e.y1,0,3),T(B,t,e.x0,e.y0+.2,e.x0+.15,e.y1,0,2.85),T(B,t,e.x1-.15,e.y0,e.x1,e.y1,0,3);break;case"stools":{const c=Math.round(o/1.7);for(let u=0;u<c;u++){const d=e.x0+o*(u+.5)/c;ke(B,t,d,a,.62,s-.12,s,16),ke(B,n.c.frame,d,a,.07,0,s-.12,6);const f=new Ji(.4,.035,4,16);f.rotateX(Math.PI/2),Xt(B,n.c.brass,f,d,a,.85),ke(B,n.c.frame,d,a,.5,0,.05,14)}break}case"range":T(B,t,e.x0,e.y0,e.x1,e.y1,0,s-.05),T(B,n.c.dark,e.x0+.1,e.y0+.1,e.x1-.1,e.y1-.2,s-.05,s+.05),T(B,n.c.dark,e.x0+.3,e.y0-.02,e.x1-.3,e.y0+.02,.6,2.2);for(let c=0;c<5;c++)ke(Qt,n.c.frame,e.x0+.4+c*.55,e.y0-.05,.08,2.6,2.75,8);break;case"hood":T(B,n.c.glass,e.x0,e.y0,e.x1,e.y1,i,s),T(B,n.c.steel,e.x0+.1,e.y0+.1,e.x1-.1,e.y1-.1,i-.06,i),T(B,n.c.steel,r-.5,e.y1-1.1,r+.5,e.y1-.05,s,12);break;case"sink":T(B,t,e.x0,e.y0,e.x1,e.y0+.12,i,i+.95),T(B,t,e.x0,e.y0,e.x1,e.y1-.2,i,i+.12),T(B,n.c.dark,e.x0+.15,e.y0+.15,e.x1-.15,e.y1-.3,i+.12,i+.13),ke(B,n.c.brass,r,e.y1-.15,.06,3,4.2,8),T(B,n.c.brass,r-.05,e.y1-.95,r+.05,e.y1-.15,4.1,4.2),ke(B,n.c.brass,r,e.y1-.95,.05,3.85,4.15,8);break;case"shelves":for(let c=0;c<3;c++){const u=i+c*1.3;T(B,t,e.x0,e.y0,e.x1,e.y1,u,u+.13);for(let d=0;d<5;d++){const f=e.y0+.4+d*(l-.8)/4;(d+c)%3?ke(Qt,n.c.white,r,f,.28,u+.13,u+.55+d%2*.25,10):T(Qt,ue("#c4b49a"),r-.2,f-.3,r+.2,f+.3,u+.13,u+.9)}}break;case"pendants":{for(let c=0;c<3;c++){const u=e.x0+o*(c+.5)/3;c%2===0?(Ti(B,n.c.glass,u,a,i+.5,.62,1.1),Ti(B,n.c.lamp,u,a,i+.45,.18,1)):Ti(B,n.c.paper,u,a,i+.5,.8,1.15),ke(B,n.c.brass,u,a,.02,i+1.1,11.8,4)}break}case"woven":{const c=new Ni(Math.min(o,l)/2,18,10,0,Math.PI*2,0,Math.PI*.62);Xt(B,t,c,r,a,i);for(let u=0;u<4;u++){const d=Math.min(o,l)/2*(.95-u*.15);ke(B,ue("#8a6438"),r,a,d,i+.15+u*.28,i+.2+u*.28,18)}ke(B,n.c.lamp,r,a,.25,i-.3,i-.1,10),ke(B,n.c.frame,r,a,.02,i+e.h*.6,11.8,4);break}case"fusuma":{const u=o/4;for(let d=0;d<4;d++){const f=e.x0+d*u;T(B,t,f+.04,e.y0,f+u-.04,e.y1,.1,s-.1),T(B,n.c.cherry,f,e.y0-.02,f+.06,e.y1+.02,0,s),ke(B,n.c.dark,f+u-.5,e.y0-.03,.12,3.2,3.5,10)}T(B,n.c.cherry,e.x0,e.y0-.02,e.x1,e.y1+.02,s-.12,s);break}case"kumiko":{T(B,n.c.paper,e.x0+.08,e.y0,e.x1-.08,e.y1,.4,s-.1);const c=l>o,u=c?l:o;for(let d=0;d<=Math.round(u/.5);d++){const f=(c?e.y0:e.x0)+d*u/Math.round(u/.5);c?T(B,t,e.x0-.02,f-.03,e.x1+.02,f+.03,.4,s):T(B,t,f-.03,e.y0-.02,f+.03,e.y1+.02,.4,s)}for(let d=.4;d<=s;d+=.5)T(B,t,e.x0-.02,e.y0-.02,e.x1+.02,e.y1+.02,d,d+.05);T(B,t,e.x0-.05,e.y0,e.x1+.05,e.y1,0,.4);break}case"table":T(B,t,e.x0,e.y0,e.x1,e.y1,s-.15,s),[[e.x0+.4,e.y0+.4],[e.x1-.6,e.y0+.4],[e.x0+.4,e.y1-.6],[e.x1-.6,e.y1-.6]].forEach(([c,u])=>T(B,t,c,u,c+.2,u+.2,0,s-.15));break;case"chairs":X_(e,t,e.y0>70);break;case"lantern":Ti(B,n.c.paper,r,a,i+e.h/2,Math.min(o,l)/2,e.h/Math.min(o,l)),ke(B,n.c.frame,r,a,.02,i+e.h,11.8,4);break;case"lanterns":[[e.x0+1.5,e.y0+2,1.3,7.6],[r,a,1.8,7],[e.x1-1.5,e.y1-2,1.1,8]].forEach(([c,u,d,f])=>{Ti(B,n.c.paper,c,u,f,d,1.15),ke(B,n.c.frame,c,u,.02,f+d,11.8,4)});break;case"shoji":{const c=Math.max(1,Math.round((h?o:l)/3));for(let u=0;u<c;u++){const d=u/c,f=(u+1)/c,p=u%2*.25,[_,g]=h?[e.x0+o*d,e.x0+o*f]:[e.y0+l*d,e.y0+l*f],m=(S,A,b,E,M,D,y)=>h?T(B,y,S,e.y0+M,A,e.y0+D,b,E):T(B,y,e.x0+M,S,e.x0+D,A,b,E);m(_,g,.1,s-.2,p+.07,p+.13,n.c.paper);for(let S=0;S<=3;S++){const A=_+(g-_)*S/3;m(A-.04,A+.04,0,s,p,p+.2,ue("#5a4632"))}for(let S=0;S<=s;S+=1)m(_,g,S,S+.06,p,p+.2,ue("#5a4632"))}break}case"sofa":{const c=Math.max(1,Math.round((h?o:l)/2.8));for(let u=0;u<c;u++){const d=u/c,f=(u+1)/c,[p,_,g,m]=h?[e.x0+o*d+.04,e.y0,e.x0+o*f-.04,e.y1]:[e.x0,e.y0+l*d+.04,e.x1,e.y0+l*f-.04];T(B,t,p,_,g,m,i,i+e.h*.75),T(B,t,p+.05,_+.05,g-.05,m-.05,i+e.h*.75,i+e.h)}e.room==="407"&&T(B,t,e.x0,e.y1-.8,e.x1,e.y1,i,i+2.6);break}case"fire":T(B,t,e.x0,e.y0,e.x1,e.y1,0,s),T(B,n.c.dark,e.x0-.02,e.y0+1.5,e.x0+.4,e.y1-1.5,.6,1.3);{const c=new Nt({color:16747069,emissive:16738842,emissiveIntensity:1.4});T(B,c,e.x0-.03,e.y0+1.8,e.x0+.1,e.y1-1.8,.65,.95)}break;case"lounge":Go(n,e.x0,e.y0,e.x1,e.y1,n.c.leather,!1),T(B,n.c.leather,e.x0+.4,e.y0-1.8,e.x1-.4,e.y0-.3,.3,1.25);break;case"lounge2":Go(n,e.x0,e.y0,e.x0+2.6,e.y1,t,!0),Go(n,e.x1-2.6,e.y0,e.x1,e.y1,t,!0),ke(B,n.c.honey,r,a,.7,0,1.6,16);break;case"art":{const[u]=h?[[e.x0-.2,e.y0,e.x1+.2,e.y1],0]:[[e.x0,e.y0-.2,e.x1,e.y1+.2],0];T(B,n.c.frame,u[0],u[1],u[2],u[3],i-.2,s+.2);const d=h?[e.x0,e.y0-.03,e.x1,e.y1+.03]:[e.x0-.03,e.y0,e.x1+.03,e.y1];T(B,t,d[0],d[1],d[2],d[3],i,s);const f=h?o:l;for(let p=0;p<3;p++){const _=.15+p*.28,g=["#2f4a3c","#b8643f","#e8dfc9"][p];h?T(B,ue(g),e.x0+f*_,e.y0-.05,e.x0+f*(_+.22),e.y1+.05,i+.6+p*.5,s-.8+p*.2):T(B,ue(g),e.x0-.05,e.y0+f*_,e.x1+.05,e.y0+f*(_+.22),i+.6+p*.5,s-.8+p*.2)}break}case"bed":W_(n,e,t);break;case"curtain":{T(B,n.c.sheer,e.x0+1.6,e.y0,e.x1-1.6,e.y1,i,s);for(const c of[e.x0,e.x1-1.6])for(let u=0;u<6;u++)T(B,n.c.linen,c+u*.27,e.y0-u%2*.15,c+u*.27+.22,e.y1+.1-u%2*.15,i,s);T(B,n.c.frame,e.x0,e.y0,e.x1,e.y1,s,s+.08);break}case"fan":ke(B,n.c.frame,r,a,.05,i,10.6,6),ke(B,t,r,a,.35,i-.15,i+.15,14);for(let c=0;c<3;c++){const u=Qi(2.6,.06,.5);u.translate(1.6,0,0),u.rotateY(c*Math.PI*2/3+.3),Xt(B,t,u,r,a,i)}break;case"cove":{T(B,n.c.lamp,e.x0,e.y0,e.x1,e.y0+.3,i,s),T(B,n.c.lamp,e.x0,e.y1-.3,e.x1,e.y1,i,s),T(B,n.c.lamp,e.x0,e.y0,e.x0+.3,e.y1,i,s),T(B,n.c.lamp,e.x1-.3,e.y0,e.x1,e.y1,i,s);break}case"tub":{T(B,t,e.x0,e.y0,e.x1,e.y1,0,.3),T(B,t,e.x0,e.y0,e.x1,e.y0+.28,0,s),T(B,t,e.x0,e.y1-.28,e.x1,e.y1,0,s),T(B,t,e.x0,e.y0,e.x0+.28,e.y1,0,s),T(B,t,e.x1-.28,e.y0,e.x1,e.y1,0,s),T(B,n.c.water,e.x0+.28,e.y0+.28,e.x1-.28,e.y1-.28,.3,s-.35),T(B,t,e.x0+.28,e.y0+.28,e.x0+1.4,e.y1-.28,.3,1.2);break}case"vanity":T(B,t,e.x0,e.y0,e.x1,e.y1,i,i+e.h),T(B,n.c.blackstone,e.x0-.05,e.y0-.05,e.x1,e.y1+.05,i+e.h,i+e.h+.15);for(const c of[e.y0+l*.28,e.y0+l*.72])T(B,n.c.dark,e.x0+.35,c-.8,e.x1-.5,c+.8,i+e.h+.14,i+e.h+.16),T(B,n.c.frame,e.x1-.35,c-.04,e.x1-.1,c+.04,i+e.h+.15,i+e.h+1),T(B,n.c.frame,e.x1-.7,c-.04,e.x1-.1,c+.04,i+e.h+.92,i+e.h+1);T(B,n.c.mirror,e.x1+.08,e.y0+.3,e.x1+.2,e.y1-.3,4.2,7.2);break;case"seat":T(B,t,e.x0,e.y0,e.x1,e.y1,0,1.35),T(B,n.c.linen,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,1.35,1.65);for(let c=0;c<3;c++)T(B,ue(["#a7b39a","#e2c894","#d9cbb5"][c]),e.x1-.5,e.y0+.6+c*2.1,e.x1-.1,e.y0+2+c*2.1,1.65,2.8);break;case"cubes":{T(B,t,e.x0,e.y0,e.x1,e.y1,0,s);const c=Math.round((h?o:l)/1.1),u=["#a7b39a","#e2c894","#c98f6a","#8fa9b8"];for(let d=0;d<c;d++)for(let f=0;f<2;f++){const p=(d+.08)/c,_=(d+.92)/c,g=.15+f*1.1,m=g+.9,S=ue(u[(d+f)%4]);h?T(Qt,S,e.x0+o*p,e.y1-.02,e.x0+o*_,e.y1+.05,g,m):T(Qt,S,e.x1-.02,e.y0+l*p,e.x1+.05,e.y0+l*_,g,m)}break}case"beanbags":{const c=o>3?2:1;for(let u=0;u<c;u++)Ti(B,t,e.x0+o*(u+.5)/c,a+(u?.4:-.3),.55,1.05,.55,14);break}case"kidwall":{T(B,t,e.x0,e.y0,e.x1,e.y1,0,s);const c=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2"],u=h?o:l;for(let d=0;d<24;d++){const f=.05+d*37%100/100*.9,p=.6+d*53%100/100*(s-1.2),_=(h?e.x0:e.y0)+u*f;h?T(Qt,ue(c[d%5]),_,e.y1,_+.3,e.y1+.18,p,p+.25):T(Qt,ue(c[d%5]),e.x1,_,e.x1+.18,_+.3,p,p+.25)}h?T(B,ue("#4f5e66"),e.x0,e.y1,e.x1,e.y1+3.2,0,.6):T(B,ue("#4f5e66"),e.x1,e.y0,e.x1+3.2,e.y1,0,.6);break}case"rig":{[[e.x0,e.y0],[e.x1-.3,e.y0],[e.x0,e.y1-.3],[e.x1-.3,e.y1-.3]].forEach(([u,d])=>{T(B,t,u,d,u+.3,d+.3,0,s),T(B,t,u-.4,d-.4,u+.3+.4,d+.3+.4,0,.05)}),T(B,t,e.x0,e.y0,e.x1,e.y0+.3,s-.3,s),T(B,t,e.x0,e.y1-.3,e.x1,e.y1,s-.3,s);for(let u=0;u<4;u++){const d=e.x0+o*(u+.5)/4;ke(B,n.c.steel,d,a,.06,s-.25,s-.1,6),T(B,n.c.steel,d-.05,e.y0,d+.05,e.y1,s-.25,s-.12)}for(const u of[a-.9,a+.9]){T(B,ue("#c9b48e"),e.x0+1.15,u-.03,e.x0+1.25,u+.03,6.2,s-.2);const d=new Ji(.4,.07,6,18);Xt(B,n.c.honey,d,e.x0+1.2,u,5.8)}ke(B,ue("#c8b083"),e.x1-1,a,.09,.4,s-.2,8),ke(B,ue("#c8b083"),e.x1-1,a,.35,.05,.4,10);break}case"frame":{[[e.x0,e.y0],[e.x1-.25,e.y0],[e.x0,e.y1-.25],[e.x1-.25,e.y1-.25]].forEach(([d,f])=>T(B,t,d,f,d+.25,f+.25,i,s)),T(B,t,e.x0,e.y0,e.x1,e.y0+.25,s-.25,s),T(B,t,e.x0,e.y1-.25,e.x1,e.y1,s-.25,s),T(B,t,e.x0,e.y0,e.x0+.25,e.y1,s-.25,s),T(B,t,e.x1-.25,e.y0,e.x1,e.y1,s-.25,s),T(B,ue("#e6dccb"),e.x0+.2,e.y0+.2,e.x1-.2,e.y1-.2,1.9,2.4),T(B,t,e.x0,e.y0,e.x1,e.y1,0,1.9);for(let d=1;d<4;d++)T(B,n.c.steel,e.x0+o*d/4,e.y0,e.x0+o*d/4+.06,e.y1,s-.5,s-.44);break}case"reformer":T(B,t,e.x0,e.y0,e.x1,e.y1,.3,.8),[[e.x0+.2,e.y0],[e.x1-.5,e.y0],[e.x0+.2,e.y1-.3],[e.x1-.5,e.y1-.3]].forEach(([c,u])=>T(B,t,c,u,c+.3,u+.3,0,.3)),T(B,ue("#e6dccb"),e.x0+2.2,e.y0+.15,e.x0+4.6,e.y1-.15,.8,s),T(B,n.c.steel,e.x1-.5,e.y0,e.x1-.35,e.y1,.8,2);break;case"rower":T(B,t,e.x0,a-.3,e.x1-1.2,a+.3,.5,.75),T(B,t,e.x0,a-.5,e.x0+.3,a+.5,0,.75),T(B,ue("#2a2a2a"),e.x0+1.4,a-.45,e.x0+2.4,a+.45,.75,1);{const c=new hn(.95,.95,.9,20);c.rotateZ(Math.PI/2),c.rotateY(Math.PI/2),Xt(B,n.c.glass,c,e.x1-.95,a,.95),T(B,n.c.water,e.x1-1.7,a-.35,e.x1-.2,a+.35,.3,.9),T(B,t,e.x1-2,a-.6,e.x1-1.8,a+.6,0,1.9)}break;case"treadmill":T(B,t,e.x0,e.y0,e.x1,e.y1,0,.6),T(B,ue("#1a1a1a"),e.x0+.3,e.y0+.3,e.x1-1,e.y1-.3,.6,.65),T(B,t,e.x1-.9,e.y0,e.x1-.6,e.y0+.25,.6,s),T(B,t,e.x1-.9,e.y1-.25,e.x1-.6,e.y1,.6,s),T(B,t,e.x1-1.3,e.y0,e.x1-.6,e.y1,s-.3,s);break;case"krack":T(B,t,e.x0,e.y0,e.x0+.2,e.y1,0,s),T(B,t,e.x1-.2,e.y0,e.x1,e.y1,0,s),T(B,t,e.x0,e.y0,e.x1,e.y1,1.6,1.7),T(B,t,e.x0,e.y0,e.x1,e.y1,s-.1,s);for(let c=0;c<8;c++){const u=e.x0+.5+c*(o-1)/7;for(const d of[1.7,s]){const f=new hn(.17+c*.012,.17+c*.012,.25,10);f.rotateX(Math.PI/2),Xt(Qt,ue("#1d1d1d"),f.clone(),u,e.y0+.25,d+.2),Xt(Qt,ue("#1d1d1d"),f,u,e.y1-.25,d+.2)}}for(let c=0;c<6;c++){const u=e.x0+.6+c*1.05;Ti(Qt,ue("#232323"),u,e.y0-.6,.35+c*.03,.35+c*.03,1,10);const d=new Ji(.22,.05,4,10,Math.PI);Xt(Qt,ue("#232323"),d,u,e.y0-.6,.65+c*.06)}break;case"bands":{for(let u=0;u<3;u++)T(B,t,e.x0,e.y0+u*(l-.3)/2,e.x1,e.y0+u*(l-.3)/2+.3,0,s);for(const u of[3.5,5.5,7.6])T(B,n.c.steel,e.x1-.2,e.y0,e.x1,e.y1,u,u+.1);const c=["#d0573c","#3f7fbf","#4e9a52","#e8c547","#2a2a2a"];for(let u=0;u<10;u++)T(Qt,ue(c[u%5]),e.x1,e.y0+.6+u*.85,e.x1+.06,e.y0+.75+u*.85,5.6-u%3*.8,7.6);break}case"mirror":T(B,n.c.mirror,e.x0,e.y0,e.x1,e.y1,i,s),T(B,n.c.frame,e.x0-.02,e.y0,e.x1+.02,e.y1,i-.05,i);break;case"plunge":{T(B,t,e.x0,e.y0,e.x1,e.y0+.35,0,s),T(B,t,e.x0,e.y1-.35,e.x1,e.y1,0,s),T(B,t,e.x0,e.y0,e.x0+.35,e.y1,0,s),T(B,t,e.x1-.35,e.y0,e.x1,e.y1,0,s),T(B,n.c.zellige,e.x0+.35,e.y0+.35,e.x1-.35,e.y1-.35,-.02,0),T(B,n.c.water,e.x0+.35,e.y0+.35,e.x1-.35,e.y1-.35,0,s-.12);break}case"benches":{T(B,t,e.x0,e.y0,e.x1,e.y0+1.8,1.4,1.6),T(B,t,e.x0,e.y0+1.8,e.x1,e.y1,s-.2,s),T(B,t,e.x0,e.y0+1.6,e.x1,e.y0+1.8,1.6,s),T(B,n.c.lamp,e.x0,e.y0+.15,e.x1,e.y0+.25,1.3,1.38),T(B,n.c.lamp,e.x0,e.y0+1.95,e.x1,e.y0+2.05,s-.3,s-.22),T(B,t,e.x0,e.y1-.2,e.x1,e.y1,s,s+2.5);break}case"heater":T(B,t,e.x0,e.y0,e.x1,e.y1,.3,s-.4);for(let c=0;c<9;c++){const u=new rc(.22,0);Xt(B,ue(c%2?"#6d6a66":"#8a8580"),u,e.x0+.3+c%3*.4,e.y0+.4+Math.floor(c/3)*.5,s-.3)}for(let c=0;c<4;c++)T(B,n.c.aspen,e.x0-.2+c*.5,e.y1+.1,e.x0-.05+c*.5,e.y1+.2,.2,s);break;case"lowtable":T(B,t,e.x0,e.y0,e.x1,e.y1,.9,1.2),T(B,t,e.x0+.3,e.y0+.3,e.x1-.3,e.y1-.3,0,.9),[[r,e.y0-1],[r,e.y1+1],[e.x0-1,a],[e.x1+1,a]].forEach(([c,u])=>T(B,ue("#6f7a55"),c-.85,u-.85,c+.85,u+.85,0,.3));break;case"andon":T(B,n.c.paper,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,.3,s),[[e.x0,e.y0],[e.x1-.08,e.y0],[e.x0,e.y1-.08],[e.x1-.08,e.y1-.08]].forEach(([c,u])=>T(B,ue("#3d2c20"),c,u,c+.08,u+.08,0,s));break;case"standdesk":T(B,t,e.x0,e.y0,e.x1,e.y1,s-.12,s);for(const c of[e.x0+.5,e.x1-.7])T(B,n.c.frame,c,a-.1,c+.2,a+.1,0,s-.12),T(B,n.c.frame,c-.1,e.y0+.2,c+.3,e.y1-.2,0,.1);T(B,n.c.frame,r-1.4,e.y0+.5,r+1.4,e.y0+.6,s+.5,s+2),T(B,n.c.frame,r-.1,e.y0+.55,r+.1,e.y0+.9,s,s+.6),T(Qt,ue("#bfc3c5"),r-.6,e.y1-1.1,r+.6,e.y1-.4,s,s+.04),ke(B,n.c.frame,r,e.y1+1.4,.1,0,1.6,8),T(B,ue("#4a4a46"),r-.9,e.y1+.6,r+.9,e.y1+2.2,1.6,1.85),T(B,ue("#4a4a46"),r-.9,e.y1+2,r+.9,e.y1+2.25,1.85,3.6);break;case"studio":T(B,t,e.x0,e.y0,e.x1,e.y1,s-.15,s),T(B,n.c.frame,e.x0+.2,e.y0+.2,e.x0+2.2,e.y1-.2,0,s-.15),T(B,n.c.frame,e.x1-2.2,e.y0+.2,e.x1-.2,e.y1-.2,0,s-.15),T(B,ue("#2b2b2b"),r-1.6,e.y1-1.6,r+1.6,e.y1-.2,s,s+.25);for(let c=0;c<12;c++)T(Qt,ue(c%3?"#cfcfcf":"#e8c547"),r-1.4+c*.25,e.y1-1.3,r-1.3+c*.25,e.y1-.6,s+.25,s+.32);T(B,ue("#1d1d1d"),e.x0+.5,e.y0+.4,e.x0+1.4,e.y0+1.4,s,s+.15);for(let c=0;c<16;c++)T(Qt,ue("#d0573c"),e.x0+.58+c%4*.2,e.y0+.48+Math.floor(c/4)*.22,e.x0+.72+c%4*.2,e.y0+.62+Math.floor(c/4)*.22,s+.15,s+.18);T(B,n.c.frame,r-2.6,e.y0+.3,r-.2,e.y0+.4,s+.6,s+2),T(B,n.c.frame,r+.2,e.y0+.3,r+2.6,e.y0+.4,s+.6,s+2);for(const c of[e.x0+.4,e.x1-1.3])T(B,ue("#2a2a2a"),c,e.y0+.2,c+.9,e.y0+1.1,s,s+1.3);break;case"piano":T(B,t,e.x0,e.y0,e.x1,e.y1,2.15,2.6),T(B,t,e.x0,e.y0,e.x1-.4,e.y0+.15,0,2.15),T(B,t,e.x0,e.y1-.15,e.x1-.4,e.y1,0,2.15),T(B,n.c.white,e.x1-.55,e.y0+.2,e.x1-.05,e.y1-.2,2.6,2.66);for(let c=0;c<16;c++)T(Qt,ue("#111"),e.x1-.55,e.y0+.3+c*.27,e.x1-.25,e.y0+.4+c*.27,2.66,2.72);T(B,t,e.x1+1,a-.9,e.x1+2,a+.9,1.4,1.65);break;case"drums":{[[0,-1.4,.9,1.1],[-1.5,0,.6,2.4],[1.5,.2,.55,2.6],[-.8,1.3,.5,2.8],[.9,1.4,.5,2.8],[-2,1.6,.7,3.6],[2.1,1.7,.75,3.8]].forEach(([c,u,d,f],p)=>{p>=5?(ke(B,ue("#b39a5a"),r+c,a+u,d,f,f+.05,16),ke(B,t,r+c,a+u,.05,0,f,6)):ke(B,p===0?ue("#444"):t,r+c,a+u,d,p===0?0:f-.35,p===0?1.8:f,16)}),ke(B,ue("#6f7a55"),r,a-2.6,.6,0,1.6,12);break}case"guitarwall":{T(B,n.c.honey,e.x0,e.y0+.1,e.x1,e.y1,i+2.9,i+3.1);const c=["#c98a3c","#1d1d1d","#a33a2a","#e6d3a8"],u=4;for(let d=0;d<u;d++)q_(e.x0+o*(d+.5)/u,i,c[d],e.y0+.05,.28);break}case"apanels":{const c=Math.floor(l/4.2);for(let u=0;u<c;u++){const d=e.y0+u*(l/c)+.2;T(B,ue(["#8d8a72","#6f7a68","#a39a86"][u%3]),e.x0,d,e.x1,d+l/c-.4,i+u%2*.6,i+4.5+u%2*.6)}break}case"clouds":for(let c=0;c<2;c++)for(let u=0;u<2;u++){const d=e.x0+c*o/2+.4,f=e.y0+u*l/2+.4;T(B,t,d,f,d+o/2-.8,f+l/2-.8,i+(c+u)%2*.4,i+.3+(c+u)%2*.4)}break;case"ribs":{const c=Math.floor(o/.9);for(let u=0;u<=c;u++){const d=e.x0+u*o/c,f=.3+.55*(.5+.5*Math.sin(u/c*Math.PI*2.2));T(B,t,d-.12,e.y0,d+.12,e.y1,s-f,s)}break}case"layered":ke(B,n.c.frame,r,a,.02,i+e.h,12.8,4),[[1.1,0],[.8,.35],[.5,.7]].forEach(([c,u])=>ke(B,t,r,a,c*.35,i+u,i+u+.25,18,c)),ke(B,n.c.lamp,r,a,.3,i-.05,i,12),ke(B,n.c.frame,23.7,15,.02,7.6,12.8,4),[[1.1,0],[.8,.35],[.5,.7]].forEach(([c,u])=>ke(B,t,23.7,15,c*.35,6.6+u,6.85+u,18,c));break;case"rgb":T(B,n.c.rgb,e.x0,e.y0,e.x1,e.y1,i,s);break;default:T(B,t,e.x0,e.y0,e.x1,e.y1,i,s),e.label.includes("Mic")&&ke(B,ue("#222"),r,a,.18,s,s+.45,10)}}}function tu(n,e,t,i,s,r,a,o,l=.45,h=.15){const c=Math.hypot(s-t,r-i),u=Math.floor(c/l);for(let d=0;d<=u;d++){const f=d/u,p=t+(s-t)*f,_=i+(r-i)*f;T(n,e,p-h/2,_-h/2,p+h/2,_+h/2,a,o)}}function $_(n,e){const t=at.site,i=-1.7,s=new Bi(1600,1600,1,1);s.rotateX(-Math.PI/2);const r=s.attributes.uv;for(let x=0;x<r.count;x++)r.setXY(x,r.getX(x)*1600,r.getY(x)*1600);const a=new Ut(s,n.meadow);a.position.y=i,a.receiveShadow=!0,e.ground.add(a);const o=at.courtyard,l=[n.plinth,n.plinth,n.flag,n.plinth,n.plinth,n.plinth];T("site",[n.plinth,n.plinth,n.paver,n.plinth,n.plinth,n.plinth],o.x0,o.y0,o.x1,o.y1,i,-.3);{const x=[n.teak,n.teak,n.teak,n.teak,n.teak,n.teak],C=[n.granite,n.granite,n.granite,n.granite,n.granite,n.granite];T("site",x,o.x0,o.y1-4.5,o.x1,o.y1,-.3,-.05),T("site",C,o.x0+4.5,o.y1-5.8,o.x1-4.5,o.y1-4.5,-.3,-.18),T("site",x,o.x0,o.y0+.2,o.x0+4.5,o.y1-4.5,-.3,-.05),T("site",C,o.x0+4.5,o.y0+5.5,o.x0+5.8,o.y1-5.8,-.3,-.18),T("site",x,o.x1-4.5,o.y0+5,o.x1,o.y1-4.5,-.3,-.05),T("site",C,o.x1-5.8,o.y0+5.5,o.x1-4.5,o.y1-5.8,-.3,-.18);for(let I=o.x0+6;I<o.x1-5;I+=3)T("detail",n.lamp,I,o.y1-5.82,I+.5,o.y1-5.78,-.26,-.22);for(let I=o.y0+7;I<o.y1-6;I+=3)T("detail",n.lamp,o.x0+5.78,I,o.x0+5.82,I+.5,-.26,-.22),T("detail",n.lamp,o.x1-5.82,I,o.x1-5.78,I+.5,-.26,-.22);for(let I=o.x0+1;I<=o.x1-1;I+=1.6){const P=Math.sin((I-o.x0)/8*Math.PI)*.5;ke("detail",n.lamp,I,o.y1-6.2,.09,8.6-Math.abs(P),8.78-Math.abs(P),6)}[[o.x1-4,34],[o.x1-4,41.5]].forEach(([I,P])=>{T("site",n.c.teak,I-1.1,P,I+1.1,P+6,-.05,.9),T("site",n.c.linen,I-1,P+.2,I+1,P+4.4,.9,1.25);const O=Qi(2,.3,1.8);O.rotateX(-.9),O.translate(I-gt,1.6,-(P+5.2-At)),zt.add("site",n.c.teak,O)})}const h=t.lawn;T("site",[n.plinth,n.plinth,n.turf,n.plinth,n.plinth,n.plinth],h.x0,h.y0,h.x1,h.y1,-.5,-.28);const c=t.water;T("site",n.c.granite,c.x0-.7,c.y0-.7,c.x1+.7,c.y1+.7,i,.15),T("site",[n.water,n.water,n.water,n.water,n.water,n.water],c.x0,c.y0,c.x1,c.y1,i,.05),ke("site",n.c.stone,c.x0-1.8,c.y0+2.5,1.2,-.3,1.1,12),ke("site",n.water,c.x0-1.8,c.y0+2.5,.8,1.1,1.13,12),T("site",n.c.fir,c.x0-1.85,c.y0+2.5,c.x0-.2,c.y0+2.62,1.6,1.72);const u=t.bodhi||t.shadetree;ke("site",ue("#8b8277"),u.cx,u.cy,.8,-.3,10,10,.5);{const x=new Nt({color:8364102,roughness:.9});[[0,0,17,5.6],[2.8,1.6,15.5,3.7],[-2.8,-1.2,16,3.8],[1.2,-2.8,19,3.4],[-1.6,2.4,19.5,3.5],[0,0,22,3.2]].forEach(([C,I,P,O])=>{const W=new si(O,1);W.scale(1,.72,1),W.translate(u.cx+C-gt,P,-(u.cy+I-At)),zt.add("site",x,W)})}{const x=new Nt({color:12076074,roughness:.9}),C=new Nt({color:13658670,roughness:.9});t.maples.forEach(([I,P],O)=>{ke("site",n.dark,I,P,.22,-.3,4.5,6,.14),[[0,0,5.6,2.5],[1.3,.6,4.9,1.8],[-1.4,-.6,5.1,1.9],[.4,-1.2,6.5,1.6]].forEach(([W,V,Q,N])=>{const z=new si(N,1);z.scale(1.15,.55,1.15),z.translate(I+W-gt,Q,-(P+V-At)),zt.add("site",O%2?C:x,z)})})}{const x=new Nt({color:11059050,roughness:.7}),C=new Nt({color:10272858,roughness:.9});(t.bamboo||[]).forEach(([I,P])=>{for(let O=0;O<7;O++){const W=I+O*37%10/10-.5,V=P+O*53%10/10-.5,Q=11+O%3*2;ke("site",x,W,V,.09,-.3,Q,6);const N=new si(.9,0);N.scale(.8,1.6,.8),N.translate(W-gt,Q-.8,-(V-At)),zt.add("site",C,N)}})}[[u.cx+1.2,u.cy-1.2],[u.cx-1.2,u.cy+1],...t.maples.map(([x,C])=>[x+.8,C-.8])].forEach(([x,C])=>ke("detail",n.lamp,x,C,.25,-.3,-.18,10)),T("detail",n.lamp,o.x0+6,o.y0+.3,o.x1-6,o.y0+.45,-.3,-.22);{const x=t.water.x0-4.5,C=(t.water.y0+t.water.y1)/2;T("site",n.c.teak,x-1.3,C-1.3,x+1.3,C+1.3,1.1,1.3),T("site",n.c.teak,x-1,C-1,x+1,C+1,-.3,1.1),[[x-2.9,C],[x+2.9,C]].forEach(([I,P])=>{T("site",n.c.teak,I-.9,P-.9,I+.9,P+.9,1.2,1.4),[[-.8,-.8],[.65,-.8],[-.8,.65],[.65,.65]].forEach(([O,W])=>T("site",n.c.teak,I+O,P+W,I+O+.15,P+W+.15,-.3,1.2)),T("site",n.c.teak,I-.9,P+.75,I+.9,P+.9,1.4,3),T("site",n.c.linen,I-.8,P-.8,I+.8,P+.7,1.4,1.6)})}t.lanterns.forEach(([x,C])=>{ke("site",n.c.stone,x,C,.55,-.3,.1,6),ke("site",n.c.stone,x,C,.2,.1,1.8,6),T("site",n.c.stone,x-.5,C-.5,x+.5,C+.5,1.8,2.6),T("site",n.paper,x-.32,C-.52,x+.32,C+.52,1.95,2.45),ke("site",n.c.stone,x,C,.15,2.6,3.3,6,.9),ke("site",n.c.stone,x,C,.05,3.3,3.55,6,.18)});for(let x=0;x<0;x++){const C=Math.PI*(1.05+x*.06),I=Qi(1.25,.18,1.5);I.translate(0,0,0),I.rotateY(C+Math.PI/2);const P=6.2;if(Xt("site",n.teak,I,u.cx+Math.cos(C)*P,u.cy+Math.sin(C)*P,1.4),x%2===0){const O=Qi(.25,1.4,1.1);O.rotateY(C+Math.PI/2),Xt("site",n.c.blackstone,O,u.cx+Math.cos(C)*P,u.cy+Math.sin(C)*P,0)}}{const x=new Nt({color:4156213,roughness:.8});[[38.5,29.5],[69.5,51.5],[54,29]].forEach(([C,I],P)=>{for(let O=0;O<5;O++){const W=new Us(.5,3+O%3,4);W.rotateZ((O-2)*.35),W.rotateY(O*1.3),Xt("site",x,W,C+(O-2)*.3,I+(O*7%3-1)*.3,1)}})}{const x=[];for(let V=39;V<=69;V+=6)x.push([V,28.4],[V,53.8]);for(let V=34;V<=50;V+=5.3)x.push([37.2,V],[70.8,V]);const C=new hn(.07,.09,1.3,6);C.translate(0,.65,0);const I=new Pi(C,n.bronze,x.length),P=new Ni(.42,12,6,0,Math.PI*2,0,Math.PI/2);P.scale(1,.55,1);const O=new Pi(P,n.lamp,x.length),W=new lt;x.forEach(([V,Q],N)=>{W.makeTranslation(V-gt,-.3,-(Q-At)),I.setMatrixAt(N,W),W.makeTranslation(V-gt,1.35,-(Q-At)),O.setMatrixAt(N,W)}),e.detail.add(I),e.detail.add(O)}{const x=t.cshower;T("site",n.c.blackstone,x.x0,x.y0,x.x1,x.y1,-.3,-.18),T("site",n.c.charred,x.x0,x.y1-.3,x.x1,x.y1,-.3,7),T("site",n.c.charred,x.x0,x.y0,x.x0+.3,x.y1,-.3,7),T("site",n.c.brass,x.x0+2.4,x.y1-.5,x.x0+2.55,x.y1-.3,-.2,7.2),T("site",n.c.brass,x.x0+2.3,x.y1-1.6,x.x0+2.65,x.y1-.4,7,7.15),ke("site",n.c.brass,x.x0+2.47,x.y1-1.5,.45,6.85,7,14)}const d=t.pooldeck,f=t.pool;{const x=[n.plinth,n.plinth,n.basalt,n.plinth,n.plinth,n.plinth];T("site",n.granite,f.x0-1.5,f.y0-1.5,f.x1+1.5,f.y1+1.5,i,-.95),T("site",x,d.x0,d.y0,d.x1,f.y0,i,-1),T("site",x,d.x0,f.y1,d.x1,d.y1,i,-1),T("site",x,d.x0,f.y0,f.x0,f.y1,i,-1),T("site",x,f.x1,f.y0,d.x1,f.y1,i,-1)}T("site",n.pooltile,f.x0,f.y0,f.x1,f.y1,-5.6,-5.4),T("site",n.pooltile,f.x0,f.y0-.02,f.x1,f.y0+.02,-5.4,-1),T("site",n.pooltile,f.x0,f.y1-.02,f.x1,f.y1+.02,-5.4,-1),T("site",n.pooltile,f.x0-.02,f.y0,f.x0+.02,f.y1,-5.4,-1),T("site",n.pooltile,f.x1-.02,f.y0,f.x1+.02,f.y1,-5.4,-1),T("site",n.poolwater,f.x0,f.y0,f.x1,f.y1,-5.4,-1.4);{const x=t.bale;T("site",n.c.honey,x.x0,x.y0,x.x1,x.y1,-1,.4),T("site",n.c.linen,x.x0+.4,x.y0+.4,x.x1-.4,x.y1-.4,.4,.9),[[x.x0+1,x.y0+2],[x.x1-2,x.y0+2],[x.x0+1.5,x.y1-1.5]].forEach(([C,I],P)=>T("site",ue(["#a7b39a","#e2c894","#c98f6a"][P]),C,I,C+1.2,I+1.2,.9,1.5)),[[x.x0,x.y0],[x.x1-.5,x.y0],[x.x0,x.y1-.5],[x.x1-.5,x.y1-.5]].forEach(([C,I])=>T("site",n.c.fir,C,I,C+.5,I+.5,.4,x.h)),T("site",[n.seam,n.seam,n.seam,n.soffit,n.seam,n.seam],x.x0-3,x.y0-3,x.x1+3,x.y1+3,x.h,x.h+.6,(C,I)=>(I-(x.y0+x.y1)/2)*.12)}for(let x=0;x<3;x++)T("site",n.c.teak,60+x*7,-27,62.5+x*7,-23.5,-1,-.5),T("site",n.c.linen,60.1+x*7,-26.9,62.4+x*7,-23.6,-.5,-.25);const p=t.outdoor_shower;T("site",n.stone,p.x0,p.y0,p.x1,p.y1,-1.2,-.9),T("site",n.c.charred,p.x0,p.y0,p.x0+.3,p.y1,-.9,7),T("site",n.c.charred,p.x0,p.y0,p.x1,p.y0+.3,-.9,7),T("site",n.brass,p.x0+.3,p.y0+2.4,p.x0+.5,p.y0+2.6,-.9,7.2),T("site",n.brass,p.x0+.3,p.y0+2.4,p.x0+1.5,p.y0+2.6,7,7.2),ke("site",n.brass,p.x0+1.4,p.y0+2.5,.4,6.85,7,12);const _=t.lane;T("site",n.turf,_.x0,_.y0,_.x1,_.y1,i,-1.05);for(let x=0;x<=4;x++){const C=_.x0+x*15;T("site",n.white,C-.15,_.y0,C+.15,_.y1,-1.05,-1.02)}T("site",n.white,_.x0,(_.y0+_.y1)/2-.08,_.x1,(_.y0+_.y1)/2+.08,-1.05,-1.03),T("site",n.c.charred,_.x1+.5,_.y0-1,_.x1+1.5,_.y1+1,i,2.5);{const x=t.pullup;[x.x0,x.x1-.3].forEach(C=>T("site",n.frame,C,(x.y0+x.y1)/2-.15,C+.3,(x.y0+x.y1)/2+.15,-1.05,8.5)),T("site",n.steel,x.x0,(x.y0+x.y1)/2-.05,x.x1,(x.y0+x.y1)/2+.05,8,8.12),T("site",n.steel,x.x0,(x.y0+x.y1)/2-.05,x.x1,(x.y0+x.y1)/2+.05,5.6,5.72)}T("site",n.flag,4,-8,50,0,i,-1.05);const g=t.veg;T("site",n.gravel,g.x0,g.y0,g.x1,g.y1,i,-1.1);for(let x=0;x<4;x++){const C=g.x0+1.5+x*5.8;T("site",n.c.fir,C,g.y0+2,C+4,g.y0+20,i,.6),T("site",ue("#4a3a2c"),C+.2,g.y0+2.2,C+3.8,g.y0+19.8,.6,.65);for(let I=0;I<8;I++){const P=new si(.75,0);P.translate(C+2-gt,1.1,-(g.y0+3.5+I*2.1-At)),zt.add("site",ue(I%3?"#5f8a3e":"#7aa64c"),P)}}tu("site",n.c.fir,g.x0,g.y0,g.x0,g.y1,i,3.5,1.2,.2),tu("site",n.c.fir,g.x0,g.y1,g.x1,g.y1,i,3.5,1.2,.2);{const x=new hn(.25,.35,5,6);x.translate(0,2.5,0);const C=new si(3.2,1);C.scale(1,.8,1);const I=new Ni(.28,6,4),P=t.orchard.length,O=new Pi(x,n.dark,P),W=new Pi(C,new Nt({color:6195770,roughness:.9}),P),V=new Pi(I,new Nt({color:13783086,roughness:.5}),P*8),Q=new lt;t.orchard.forEach(([N,z],K)=>{Q.makeTranslation(N-gt,i,-(z-At)),O.setMatrixAt(K,Q),Q.makeTranslation(N-gt,i+7.2,-(z-At)),W.setMatrixAt(K,Q);for(let ye=0;ye<8;ye++){const pe=ye*.785+K;Q.makeTranslation(N-gt+Math.cos(pe)*2.9,i+6.2+ye%3*.8,-(z-At)+Math.sin(pe)*2.9),V.setMatrixAt(K*8+ye,Q)}}),[O,W].forEach(N=>{N.castShadow=!0,e.site.add(N)}),e.detail.add(V)}const m=t.bikes;T("site",n.stone,m.x0-1,m.y0,m.x1,m.y1,i,-1.05);const S=new Nt({color:2236962,roughness:.7});for(let x=0;x<4;x++){const C=m.y0+1.2+x*2.4;T("site",n.frame,m.x0+.2,C-.05,m.x1-.2,C+.05,-1.05,1.3),[0,2.5].forEach(I=>{const P=new Ji(1.1,.12,6,18);P.rotateY(Math.PI/2*0),P.translate(m.x0-1.2+I-gt,0,-(C-At)),zt.add("site",S,P)}),T("site",ue(["#a3613d","#3f7fbf","#4e9a52","#e8c547"][x]),m.x0-1.2,C-.06,m.x0+1.3,C+.06,.6,.75)}const A=t.entrycourt;T("site",n.flag,A.x0,A.y0,A.x1,A.y1,i,-1.05),T("site",n.gravel,-46,16,-20,58,i,-1.1);const b=new za;[[-90,4],[-60,10],[-44,24],[-46,16],[-62,0],[-90,-6]].forEach(([x,C],I)=>I?b.lineTo(x-gt,C-At):b.moveTo(x-gt,C-At));const E=new cc(b);E.rotateX(-Math.PI/2),E.scale(1,1,1),E.translate(0,i+.08,0),zt.add("site",n.gravel,E);const M=t.carport;[[M.x0,M.y0],[M.x1-.4,M.y0],[M.x0,M.y1-.4],[M.x1-.4,M.y1-.4],[M.x0,(M.y0+M.y1)/2],[M.x1-.4,(M.y0+M.y1)/2]].forEach(([x,C])=>T("site",n.frame,x,C,x+.4,C+.4,i,9));{const x=(C,I)=>(C-(M.x0+M.x1)/2)*.06;T("site",[n.frame,n.frame,n.seam,n.frame,n.frame,n.frame],M.x0-3,M.y0-3,M.x1+3,M.y1+3,9,9.7,x)}T("site",ue("#8d9399"),M.x0+3,M.y0+3,M.x0+9.5,M.y1-4,i,3.6),T("site",ue("#5b6e5a"),M.x0+13,M.y0+3,M.x0+19.5,M.y1-4,i,4.8),T("site",n.c.whiteplaster,1,36,2,47,i,4);{const x=new Nt({color:10134106,roughness:1}),C=new Nt({color:5205564,roughness:.9});t.frontgarden.forEach(([I,P,O,W],V)=>{T("site",n.plinth,I,P,O,W,i,-1),T("site",ue("#4a3a2c"),I+.3,P+.3,O-.3,W-.3,-1,-.95);for(let Q=0;Q<18;Q++){const N=I+1+(Q*37+V*11)%100/100*(O-I-2),z=P+1+Q*59%100/100*(W-P-2);if(Q%3){const K=new Us(.7,2.2,5);Xt("site",x,K,N,z,.1)}else Ti("site",C,N,z,-.3,1.1,.7,8)}}),ke("site",n.dark,-10,44,.25,i,7,6,.15),[[0,0,9,3],[1.5,1,8,2],[-1.4,-.8,8.3,2.2]].forEach(([I,P,O,W])=>{const V=new si(W,1);V.scale(1,.75,1),Xt("site",new Nt({color:9085004,roughness:.9}),V,-10+I,44+P,O)})}{const x=t.walkway;T("site",n.flag,x.x0,x.y0,x.x1+5,x.y1,i,-1);for(let C=x.x0+.5;C<x.x1;C+=6)T("site",n.frame,C,x.y0+.3,C+.3,x.y0+.6,-1,x.h),T("site",n.frame,C,x.y1-.6,C+.3,x.y1-.3,-1,x.h);T("site",[n.frame,n.frame,n.seam,n.soffit,n.frame,n.frame],x.x0-.5,x.y0-1,x.x1+.5,x.y1+1,x.h,x.h+.5,(C,I)=>(I-(x.y0+x.y1)/2)*-.08)}const D=t.veranda;T("site",l,D.x0,D.y0,D.x1,D.y1,i,-.25);const y=t.pergola;T("site",l,y.x0,y.y0,y.x1,y.y1,i,-.25),[[y.x0,y.y0+.5],[y.x1-.7,y.y0+.5],[y.x0,y.y1-.7],[y.x1-.7,y.y1-.7]].forEach(([x,C])=>T("site",n.c.charred,x,C,x+.7,C+.7,-.25,9)),T("site",n.c.charred,y.x0-1,y.y0+.5,y.x1+1,y.y0+1.1,8.4,9.2),T("site",n.c.charred,y.x0-1,y.y1-1.1,y.x1+1,y.y1-.5,8.4,9.2);for(let x=y.x0;x<=y.x1;x+=1.2)T("site",n.c.fir,x,y.y0-.5,x+.25,y.y1+.5,9.2,9.7);T("site",ue("#6b4a33"),23,85,33,89,2.2,2.5),[23.5,32].forEach(x=>T("site",ue("#6b4a33"),x,85.5,x+.4,88.5,-.25,2.2)),T("site",ue("#d9cbb5"),23,83.4,33,84.6,-.25,1.3),T("site",ue("#d9cbb5"),23,89.4,33,90.6,-.25,1.3);const R=t.firepit;{const x=new hn(R.r+1.5,R.r+1.5,.5,40);x.translate(R.cx-gt,i+.2,-55),zt.add("site",n.flag,x),ke("site",n.c.stone,R.cx,R.cy,2.8,i,-.2,28),ke("site",n.dark,R.cx,R.cy,2.1,-.2,-.18,24);for(let P=0;P<4;P++){const O=P*Math.PI/2+.4,W=new hn(R.r-.6,R.r-.6,1.4,20,1,!0,O,1);W.translate(R.cx-gt,i+1.2,-55),zt.add("site",n.c.stone,W)}const C=new Nt({color:16747069,emissive:16738842,emissiveIntensity:1.5});C.name="fire";const I=new Us(.9,1.6,8);I.translate(R.cx-gt,.6,-55),zt.add("site",C,I)}{const x=t.climb,C=x.oh;T("site",[n.plinth,n.plinth,n.stone,n.plinth,n.plinth,n.plinth],x.x0-1,x.y0-1,x.x1+1,x.y1+1,i,-1),T("site",ue("#b5694a"),x.x0,x.y0,x.x1,x.y1,-1,-.6),[[x.x0,x.y0],[x.x1-.7,x.y0],[x.x0,x.y1-.7],[x.x1-.7,x.y1-.7]].forEach(([P,O])=>T("site",n.c.fir,P,O,P+.7,O+.7,-.6,x.h-1)),T("site",n.c.fir,x.x0-.5,x.y0,x.x1+.5,x.y0+.7,x.h-2,x.h-1),T("site",n.c.fir,x.x0-.5,x.y1-.7,x.x1+.5,x.y1,x.h-2,x.h-1);for(let P=x.x0+3;P<x.x1-1;P+=3)T("site",n.c.fir,P,x.y0-C+.5,P+.35,x.y1+C-.5,x.h-1,x.h-.6);T("site",[n.seam,n.seam,n.seam,n.soffit,n.seam,n.seam],x.x0-C,x.y0-C,x.x1+C,x.y1+C,x.h-.6,x.h+.3,(P,O)=>(O-(x.y0+x.y1)/2)*.07),T("site",n.c.charred,x.x0+1,x.y1-1.6,x.x1-1,x.y1-.9,-.6,x.wall),T("site",n.c.fir,x.x0+1.2,x.y1-2,x.x1-1.2,x.y1-1.6,-.4,x.wall-.2);const I=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2","#f1eee7"];for(let P=0;P<84;P++){const O=x.x0+1.6+P*37%100/100*14.6,W=.6+P*53%100/100*(x.wall-1.4);T("detail",ue(I[P%6]),O,x.y1-2.3,O+.38,x.y1-2,W,W+.3)}T("site",ue("#d9cbb5"),x.x0+9,x.y1-3.4,x.x0+12,x.y1-2,4,6.5),T("site",ue("#55524c"),x.x0+1.2,x.y1-8,x.x1-1.2,x.y1-2.3,-.6,.4),[x.x0+5.5,x.x0+10.5].forEach(P=>T("site",ue("#3d3b37"),P,x.y1-8,P+.08,x.y1-2.3,.4,.42)),T("site",ue("#d9cbb5"),x.x0+3,x.y1-3,x.x0+5.5,x.y1-2,8.5,10.5);for(let P=0;P<4;P++){const O=x.y0+3+P*2.4;T("site",n.frame,x.x1-2.2,O-.05,x.x1-.9,O+.05,-.6,1.8),[0,2.3].forEach(W=>{const V=new Ji(1,.11,6,18);V.translate(x.x1-3.6+W-gt,.5,-(O-At)),zt.add("site",S,V)}),T("site",ue(["#4e9a52","#e8c547","#3f7fbf","#a3613d"][P]),x.x1-3.6,O-.06,x.x1-1.2,O+.06,1,1.15)}T("site",n.stone,x.x1+1,2,4,6,i,-1)}{const x=t.util,C=7,I=x.gate;T("site",n.gravel,x.x0,x.y0,x.x1,x.y1,i,-1.15),T("site",n.c.charred,x.x0,x.y1-.4,x.x1,x.y1,i,C),T("site",n.c.charred,x.x0,x.y0,x.x0+.4,x.y1,i,C),T("site",n.c.charred,x.x1-.4,x.y0,x.x1,x.y1,i,C),T("site",n.c.charred,x.x0,x.y0,I[0],x.y0+.4,i,C),T("site",n.c.charred,I[1],x.y0,x.x1,x.y0+.4,i,C),T("site",n.c.charred,I[0]+.3,x.y0-.6,I[0]+5.8,x.y0-.3,-.6,C-.6),T("site",n.c.charred,I[1]-5.8,x.y0-.6,I[1]-.3,x.y0-.3,-.6,C-.6),t.tanks.forEach(([N,z,K])=>{ke("site",ue("#5f6b5a"),N,z,K,-1.1,8.5,28),ke("site",ue("#4f5a4b"),N,z,K*.98,8.5,9.2,28)});const P=t.watertreat;T("site",n.concrete||n.stone,P.x0,P.y0,P.x1,P.y1,i,-.6),T("site",[n.seam,n.seam,n.seam,n.soffit,n.seam,n.seam],P.x0-.5,P.y0-.5,P.x1+.5,P.y1+.5,8.4,8.8),T("site",n.c.charred,P.x0,P.y1-.4,P.x1,P.y1,-.6,8.4),T("site",n.c.charred,P.x1-.4,P.y0,P.x1,P.y1,-.6,8.4),[[P.x0+.8,.9,"#3f7fbf"],[P.x0+2.3,.9,"#9aa0a3"],[P.x0+3.8,.9,"#9aa0a3"],[P.x0+5.3,.6,"#c9c2b4"]].forEach(([N,z,K])=>ke("site",ue(K),N,P.y1-1.6,z*.6,-.6,4.5,14)),ke("site",ue("#2f4f7a"),P.x0+7.6,P.y1-1.8,.9,-.6,4.8,16),T("site",ue("#2a2a2a"),P.x0+1,P.y0+1.5,P.x0+3.5,P.y0+4,-.6,1.8);const O=t.atu;T("site",ue("#7d7a70"),O.x0,O.y0,O.x1,O.y1,i,-1),[O.x0+2,O.x0+6,O.x0+10].forEach(N=>ke("site",ue("#3d4a3a"),N,(O.y0+O.y1)/2,1,-1,-.8,16));const W=t.power;T("site",n.stone,W.x0,W.y0,W.x1,W.y1,i,-.6),T("site",ue("#e6e3dc"),W.x0+.5,W.y0+.5,W.x0+6,W.y0+3.5,-.6,3.6),T("site",ue("#2d2d2d"),W.x0+.5,W.y1-3.2,W.x0+3.5,W.y1-.8,-.6,4.2),T("site",ue("#2d2d2d"),W.x0+4.2,W.y1-3.2,W.x0+7.2,W.y1-.8,-.6,4.2),t.condensers.forEach(([N,z])=>{T("site",ue("#cfccc4"),N,z,N+3,z+3,-.6,3.2),ke("site",ue("#3a3a3a"),N+1.5,z+1.5,1.1,3.2,3.3,18)});for(let N=0;N<t.service.length-1;N++){const[z,K]=t.service[N],[ye,pe]=t.service[N+1];T("site",n.gravel,Math.min(z,ye)-5,Math.min(K,pe)-5,Math.max(z,ye)+5,Math.max(K,pe)+5,i,-1.2)}const V=t.drainfield;T("site",ue("#9fb07a"),V.x0,V.y0,V.x1,V.y1,i,-1.25);for(let N=V.y0+3;N<V.y1;N+=5)T("site",ue("#8a9c66"),V.x0+2,N,V.x1-2,N+.6,i,-1.2);const Q=t.well;ke("site",ue("#7d7a70"),Q.cx,Q.cy,1.6,i,1.2,16),ke("site",n.c.charred,Q.cx,Q.cy,.5,1.2,3.2,10)}{for(let x=28.6;x<=45.4;x+=.42)T("site",n.c.teak,17.1,x,17.35,x+.16,-.2,8.2);T("site",n.c.copper,17,28.4,17.45,45.6,8.2,8.5),T("site",n.c.teak,17,28.4,17.45,45.6,-.3,0)}const U=t.bathgarden;T("site",n.c.charred,U.x1-.5,U.y0,U.x1,U.y1,i,7),T("site",n.c.charred,U.x0,U.y1-.5,U.x1,U.y1,i,7),T("site",n.gravel,U.x0,U.y0,U.x1-.5,U.y1-.5,i,-1.1),T("site",n.flag,72,0,78,14,i,-.9),T("site",n.flag,66,-0,72,1,i,-.95)}function K_(n){const e=new hn(.35,.5,1,6);e.translate(0,.5,0);const t=new Us(1,1,7);t.translate(0,.5,0);const i=new si(1,1),s=[];let r=11;const a=()=>(r=r*16807%2147483647,r/2147483647);for(let f=0;f<400&&s.length<120;f++){const p=-170+a()*420,_=-140+a()*340;p>-70&&p<135&&_>-50&&_<125||_>90&&p>-40&&p<140||_<-45&&p>-80&&p<130||p>-100&&p<-40&&_>-10&&_<30||s.push([p,_,a()])}const o=new Pi(e,new Nt({color:14605008,roughness:.9}),s.length),l=new Pi(t,new Nt({color:4085046,roughness:.9}),s.length),h=new Pi(i,new Nt({color:12038218,roughness:.9}),s.length),c=new lt;let u=0,d=0;s.forEach(([f,p,_],g)=>{const m=p>60?_<.6:_<.35,S=m?26+_*30:22+_*16;c.compose(Yt(f,p,-1.7),new Rn,new F(1,m?S*.25:S*.6,1)),o.setMatrixAt(g,c),m?(c.compose(Yt(f,p,S*.18),new Rn,new F(5+_*3,S*.85,5+_*3)),l.setMatrixAt(u++,c)):(c.compose(Yt(f,p,S*.7),new Rn,new F(4+_*2,S*.32,4+_*2)),h.setMatrixAt(d++,c))}),l.count=u,h.count=d,[o,l,h].forEach(f=>{f.castShadow=!0,f.receiveShadow=!0,n.site.add(f)})}function pa(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function sd(n,e){const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,a=s*s*(3-2*s),o=r*r*(3-2*r),l=pa(t,i),h=pa(t+1,i),c=pa(t,i+1),u=pa(t+1,i+1);return l+(h-l)*a+(c-l)*o+(l-h-c+u)*a*o}function Z_(n,e){let t=0,i=.5,s=1;for(let r=0;r<6;r++){const a=1-Math.abs(sd(n*s,e*s)*2-1);t+=a*a*i,i*=.5,s*=2.05}return t}function J_(n){const r=[],a=[],o=[],l=new Ye(9278560),h=new Ye(3952439),c=new Ye(8748660),u=new Ye(16119540),d=new Ye(11845835),f=(m,S,A)=>{const b=Math.min(1,Math.max(0,(A-m)/(S-m)));return b*b*(3-2*b)};for(let m=0;m<=90;m++){const S=m/90,A=700+19300*Math.pow(S,1.9);for(let b=0;b<=320;b++){const E=b/320*Math.PI*2,M=Math.sin(E)*A,D=-Math.cos(E)*A,y=.55+.75*Math.pow(Math.max(0,Math.cos(E)),2),R=sd(M/600+9,D/600+2)*260*f(900,2600,A)*(1-f(5e3,9e3,A)*.5),U=Math.pow(Z_(M/5200+3.1,D/5200+7.7),1.6)*A*.5*y*f(2400,6e3,A);let x=R+U;A>15e3&&(x*=1-f(15e3,2e4,A)*.6),x+=-1.75,r.push(M,x,D);const C=l.clone();C.lerp(h,f(40,260,x)),x>900&&C.lerp(c,f(900,1500,x)),x>1700&&C.lerp(u,f(1700,2100,x)),C.lerp(d,Math.min(.42,f(3e3,2e4,A)*.5)),a.push(C.r,C.g,C.b)}}for(let m=0;m<90;m++)for(let S=0;S<320;S++){const A=m*321+S,b=A+320+1;o.push(A,A+1,b,b,A+1,b+1)}const p=new Dt;p.setAttribute("position",new dt(r,3)),p.setAttribute("color",new dt(a,3)),p.setIndex(o),p.computeVertexNormals();const _=new Nt({vertexColors:!0,roughness:1});_.fog=!1;const g=new Ut(p,_);n.mtn.add(g)}const Xa=[{id:"U1",name:"Rainwater Tanks",wing:"Outdoor",x0:100.5,y0:12.5,x1:122.5,y1:23.5,notes:"Two 10-ft-diameter tanks (about 5,000 gal each) fed by gutters and leaders from the big standing-seam roofs, with first-flush diverters. Backup from the well (or municipal water where available).",floor:"Concrete pads",fin:"Dark green steel tanks inside the charred-timber screen"},{id:"U2",name:"Water Treatment",wing:"Outdoor",x0:124,y0:13,x1:135,y1:23,notes:"Roofed lean-to: pressure pump with pressure tank, sediment filter, carbon filter, UV sterilizer and a water softener, then on to the house.",floor:"Concrete pad",fin:"Charred timber; standing-seam roof"},{id:"U3",name:"Septic + Aerobic Treatment",wing:"Outdoor",x0:103,y0:-3,x1:115,y1:3,notes:"Buried septic tank plus an aerobic treatment unit (ATU), lids at grade for pumping from the service lane. Feeds the drain field down-slope to the south-east, well away from the vegetable garden and the well.",floor:"Gravel over buried tanks",fin:"Traffic-rated lids"},{id:"U4",name:"Generator + Battery Pad",wing:"Outdoor",x0:125,y0:-4,x1:135,y1:5,notes:"Standby generator plus two home batteries tied to roof solar, on a concrete pad with clearance from the screen.",floor:"Concrete pad",fin:"Concrete"},{id:"U5",name:"HVAC Condensers",wing:"Outdoor",x0:118.5,y0:.5,x1:122.5,y1:12.5,notes:"Three heat-pump condensers (house zones plus the studio's decoupled system) on pads, line sets running to the sleeping and wellness wings.",floor:"Concrete pads",fin:"Screened by charred timber"},{id:"U",name:"Utility Yard",wing:"Outdoor",x0:100,y0:-6,x1:136,y1:24,area:0,notes:"36 x 30 ft screened service yard beside the Pool Equipment room (211, which keeps the pool pump, filter and salt cell) and the wellness wing. 7-ft charred-timber screen matching the house, with a 12-ft service gate on the gravel service lane from the drive for pump trucks and deliveries.",floor:"Compacted gravel + concrete pads",fin:"Charred-timber screen; gravel; concrete pads"},{id:"U6",name:"Drain Field",wing:"Outdoor",x0:30,y0:-74,x1:90,y1:-52,notes:"On-site wastewater drain field in the south meadow below the service lane, more than 100 ft from the vegetable garden and the well, kept clear of the service lane. Size to the perc test.",floor:"Meadow grass",fin:"Meadow over trenches"},{id:"U7",name:"Well",wing:"Outdoor",x0:137,y0:92,x1:143,y1:98,notes:"Well head up-slope in the north-east, far from the drain field. Backup supply to the rainwater tanks.",floor:"Gravel",fin:"Stone pad; charred timber cover"},{id:"C",name:"Courtyard",wing:"Outdoor",x0:36,y0:27,x1:72,y1:55,notes:"Quiet morning-tea court, 36 x 28 ft (Oct 28 + Oct 29 decks): pale stone pavers, a hard stone band leading at the engawa edge, a still reflecting pool with slightly raised coping, one bodhi tree and one Japanese maple with light bamboo in layered planting that leaves more breathing room, tree uplights and a linear ground wash, and movable timber chairs with a low timber table for tea for two by the pool. Cedar engawa under the eaves.",floor:"Pale stone pavers; hard stone band; cedar engawa",fin:"Pale stone pavers; granite band + raised coping; reflecting pool; bodhi + maple + bamboo; timber chairs + low table; ground wash + uplights"},{id:"P",name:"Saltwater Pool",wing:"Outdoor",x0:54,y0:-22,x1:88,y1:-10,notes:"Small 34 x 12 ft saltwater pool lined in green stone tile, on the sunny south side outside the wellness wing. A salt chlorine generator in the Pool Equipment room (cell replaced about every 3-5 years), marine-grade 316 stainless fittings, a sealed basalt deck with flamed-granite coping, teak loungers, and a bale pavilion at the east end.",floor:"Basalt deck, flamed-granite coping",fin:"Green stone pool tile; basalt deck; flamed-granite coping; 316 stainless fittings; teak and linen loungers"},{id:"B",name:"Bale Pavilion",wing:"Outdoor",x0:90,y0:-27,x1:97,y1:-19,notes:"Balinese-style bale by the pool: a raised honey-oak platform with linen cushions under a low standing-seam roof on fir posts.",floor:"Honey-oak platform",fin:"Honey oak; fir posts; standing-seam roof; linen cushions"},{id:"L",name:"Turf Sprint Lane",wing:"Outdoor",x0:-32,y0:-16,x1:43,y1:-8,notes:"20 yards (60 ft) of turf marked every 5 yards, plus a 15-ft run-out to a charred-timber end wall. An outdoor pull-up station stands at the gym end.",floor:"Synthetic turf",fin:"Turf; charred-timber end wall; black steel pull-up station"},{id:"V",name:"Vegetable Garden",wing:"Outdoor",x0:-30,y0:64,x1:-6,y1:86,notes:"Loved: four 4 x 18 ft cedar raised beds inside a slatted deer fence, a few steps from the mudroom and pantry, with a small orchard of fruit trees beside it.",floor:"Gravel",fin:"Cedar beds; gravel paths; fruit trees"},{id:"F",name:"Round Stone Fire Pit",wing:"Outdoor",x0:51,y0:92,x1:65,y1:106,notes:"Round stone fire pit with a curved stone seat wall on a flagstone circle, facing the mountains off the covered veranda.",floor:"Flagstone",fin:"Natural stone ring and seat walls; flagstone"},{id:"D",name:"Pergola Dining",wing:"Outdoor",x0:19,y0:81,x1:37,y1:95,notes:"Outdoor table for ten under a charred-timber and fir pergola, next to the kitchen and the view.",floor:"Flagstone",fin:"Flagstone; charred timber and fir pergola"},{id:"W",name:"Climbing Pavilion",wing:"Outdoor",x0:-22,y0:0,x1:-4,y1:18,area:0,cov:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. A full 16-ft-wide, 12-ft-high climbing wall from day one sits on the north side facing the sprint lane, over poured-rubber soft-fall and thick crash pads. The roof was raised to 17 ft so the beams clear the top of the wall by about 3 ft and the roof by about 4 ft. Sits in the active zone with the exercise room, sprint lane and a 4-bike rack. Covered outdoor area, not conditioned.",floor:"Poured-rubber soft-fall + crash pads",equip:["Climbing wall 16' × 12'","Two bouldering volumes","Crash pads","4-bike rack"],fin:"Fir frame; standing-seam roof at 17 ft; charred fascia; poured rubber"},{id:"S",name:"Outdoor Shower",wing:"Outdoor",x0:72.5,y0:4,x1:77.5,y1:10,notes:"Loved: stone shower by the pool behind solid charred-timber walls (no slat enclosure), next to the changing room.",floor:"Stone",fin:"Charred timber walls; stone floor; brass rain head"},{id:"Q",name:"Courtyard Shower",wing:"Outdoor",x0:66.5,y0:27.5,x1:71.5,y1:31.5,notes:"A second open-air shower in the courtyard corner by the wellness wing, with a charred-timber privacy wall and a brass rain head.",floor:"Black stone",fin:"Black stone; charred timber; brass"},{id:"K",name:"Bike Racks",wing:"Outdoor",x0:3,y0:62,x1:7.5,y1:72,notes:"Six-bike rack under the mudroom eave, with gear storage just inside.",floor:"Stone",fin:"Stone; black steel"},{id:"R",name:"Carport",wing:"Outdoor",x0:-44,y0:30,x1:-20,y1:54,notes:"Modern black carport for two cars: slim black steel posts and a low standing-seam roof, off the gravel drive. A covered walkway leads past the front garden to the door.",floor:"Gravel",fin:"Black steel; standing-seam roof; gravel drive"},{id:"E",name:"Covered Walkway + Front Garden",wing:"Outdoor",x0:-20,y0:48,x1:13,y1:54,notes:"Black-steel covered walkway on flagstone from the carport to the front door, past front-garden beds of grasses, low shrubs and a multi-stem tree.",floor:"Flagstone",fin:"Flagstone; black steel; standing-seam roof; planted beds"}];function Q_(n){const e=I_();return La=e,F_(e),z_(e),G_(e,n),Y_(e),$_(e,n),zt.build(n),K_(n),J_(n),{M:e,blocking:Da,roofUnder:as}}window.mwEncUrl=window.mwEncUrl||function(n){return new Promise(function(e,t){var i=0;(function s(){if(window.mwEncFile)return window.mwEncFile.decrypt(n).then(function(r){e(r.url)},t);if(++i>150)return t(new Error("enc viewer missing"));setTimeout(s,100)})()})};const Te=n=>document.getElementById(n),mr=.09290304,nu=.3048,Zi=n=>{const e=Math.floor(n+1e-6),t=Math.round((n-e)*12);return t?`${e}' ${t}"`:`${e}'`},Kn=()=>window.innerWidth<700,Bn=Te("viewport"),wt=new s_({antialias:!0,powerPreference:"high-performance"});wt.setPixelRatio(Math.min(window.devicePixelRatio,2));wt.outputColorSpace=cn;wt.toneMapping=Vl;wt.toneMappingExposure=1.05;wt.shadowMap.enabled=!0;wt.shadowMap.type=hr;wt.localClippingEnabled=!0;Bn.appendChild(wt.domElement);const Ks=new y_;Ks.domElement.style.position="absolute";Ks.domElement.style.inset="0";Ks.domElement.style.pointerEvents="none";Bn.appendChild(Ks.domElement);const Vt=new qf,mn={};for(const n of["walls","glass","roof","floors","furn","detail","site","ground","mtn","pick","labels","fx"])mn[n]=new Ki,mn[n].name=n,Vt.add(mn[n]);mn.pick.visible=!0;const wa={top:{value:new Ye(9417681)},mid:{value:new Ye(14673638)},bot:{value:new Ye(15328470)}},rd=new Ut(new Ni(3e4,32,16),new kn({side:un,depthWrite:!1,fog:!1,uniforms:wa,vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vp; void main(){ float h = vp.y; vec3 c = h>0.0 ? mix(mid, top, pow(clamp(h*2.2,0.0,1.0),0.7)) : mix(mid, bot, clamp(-h*8.0,0.0,1.0)); gl_FragColor = vec4(c,1.0);
#include <colorspace_fragment>
}`}));rd.renderOrder=-10;Vt.add(rd);Vt.fog=new nc(14015968,1600,9e3);const kl=new Jp(15397631,9140830,1.15);Vt.add(kl);const ad=new n0(16774374,.35);Vt.add(ad);const An=new t0(16773596,2.6);An.castShadow=!0;An.shadow.mapSize.set(Kn()?1024:2048,Kn()?1024:2048);Object.assign(An.shadow.camera,{left:-150,right:150,top:150,bottom:-150,near:10,far:900});An.shadow.bias=-4e-4;An.shadow.normalBias=.6;Vt.add(An);Vt.add(An.target);const od=[];v_(Kn()?.5:1);const{M:Bl,blocking:j_,roofUnder:qa}=Q_(mn),ld=new Set;Vt.traverse(n=>{n.material&&n.material.name==="lamp"&&ld.add(n.material)});let zl=null;mn.site.traverse(n=>{n.material&&n.material.name==="fire"&&(zl=n.material)});for(const n of at.rooms){if(n.area<90||!n.cond)continue;const e=new jp(16763274,0,34,1.6),t=Yt((n.x0+n.x1)/2,(n.y0+n.y1)/2,Math.min(9,qa((n.x0+n.x1)/2,(n.y0+n.y1)/2)-1.5));e.position.copy(t),mn.fx.add(e),od.push(e)}const gr=new ki({transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});let qi=null;fetch("./plan_overlay.json").then(n=>n.json()).then(n=>{window.mwEncUrl("files/35o73egm3y39.enc").then(e=>new Zp().load(e,t=>{t.colorSpace=cn,t.anisotropy=8,gr.map=t,gr.needsUpdate=!0;const i=n.x1-n.x0,s=n.y1-n.y0,r=new Bi(i,s);r.rotateX(-Math.PI/2),qi=new Ut(r,gr),qi.position.copy(Yt((n.x0+n.x1)/2,(n.y0+n.y1)/2,.06)),qi.renderOrder=3,qi.visible=ze.overlay,Vt.add(qi)})).catch(()=>{})});const ji=new Ut(new Bi(1,1).rotateX(-Math.PI/2),Bl.highlight);ji.visible=!1;ji.renderOrder=4;Vt.add(ji);const Os=new sc(new Lu(new Cn(1,1,1)),new Dr({color:5069118}));Os.visible=!1;Vt.add(Os);const Ct=new yn(42,1,.5,6e4),En=new Ga(-1,1,1,-1,.5,3e3);let di=Ct;const nn=new ju(Ct,wt.domElement);nn.enableDamping=!0;nn.dampingFactor=.08;nn.maxPolarAngle=1.5;nn.minDistance=4;nn.maxDistance=1400;nn.screenSpacePanning=!0;nn.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN};const en=new ju(En,wt.domElement);en.enableRotate=!1;en.screenSpacePanning=!0;en.enableDamping=!0;en.minZoom=.4;en.maxZoom=8;en.mouseButtons={LEFT:ci.PAN,MIDDLE:ci.DOLLY,RIGHT:ci.PAN};en.touches={ONE:qn.PAN,TWO:qn.DOLLY_PAN};en.enabled=!1;const Fs={aerial:{name:"Aerial",cam:[0,-128,76],tgt:[50,56,28],fov:50,roof:!1,title:"The whole house.",kicker:"A DRAWING-BASED SPATIAL STUDY"},courtyard:{name:"Courtyard",cam:[39,29.5,6.2],tgt:[67,43,6],roof:!0,title:"The courtyard.",kicker:"VIEW · REFLECTING POOL, BODHI + MAPLE",fov:62},living:{name:"Living",cam:[48,20,54],tgt:[58,67,0],roof:!1,cut:8,title:"Living pavilion.",kicker:"ROOMS 101-103 · ROOF HIDDEN"},office:{name:"Studio",cam:[48,-38,58],tgt:[16,11,0],roof:!1,cut:8,title:"Isolated studio / office.",kicker:"ROOM 407 · ROOM-WITHIN-A-ROOM · TARGET STC 60+"},wellness:{name:"Wellness",cam:[70,-44,58],tgt:[52,8,0],roof:!1,cut:8,title:"Wellness + gym wing.",kicker:"ROOMS 301-306 · ON THE POOL · ROOF HIDDEN"},bath:{name:"Bath",cam:[93,66,22],tgt:[93.8,78,0],roof:!1,cut:8,title:"Master bath.",kicker:"ROOM 202 · HINOKI SOAKING TUB BY THE WINDOW, SKYLIGHT",fov:55},utility:{name:"Utility",cam:[126,-46,62],tgt:[118,9,0],roof:!1,title:"Utility yard.",kicker:"OUTDOORS · SCREENED SERVICE YARD · WATER, WASTEWATER, POWER, HVAC",fov:50},climb:{name:"Climbing",cam:[-4,-34,9],tgt:[-13,14,8],roof:!0,title:"Climbing pavilion.",kicker:"OUTDOORS · COVERED OPEN-AIR · NOT CONDITIONED",fov:50},kitchen:{name:"Kitchen",cam:[30,43,27],tgt:[39,70,0],roof:!1,cut:8,title:"Kitchen + living.",kicker:"ROOMS 101-103 · QUARTZITE ISLANDS, FLAT-FLOOR LIVING",fov:50},gym:{name:"Gym",cam:[52,-12,24],tgt:[38,11,2],roof:!1,cut:8,title:"Exercise room.",kicker:"ROOM 302 · GYM-FORWARD: WEIGHTS, CARDIO, OPEN MATS",fov:50},kids:{name:"Kids",cam:[112,20,38],tgt:[94,40,0],roof:!1,cut:8,title:"Kids' rooms.",kicker:"ROOMS 207-215 · GROW-INTO-TEEN ROOMS, BUNK/PLAY LOFTS, WALK-INS, STUDY NOOK",fov:52},entry:{name:"Entry",cam:[-18,31,6],tgt:[17,51,6.5],roof:!0,title:"Arrival + entry.",kicker:"EXTERIOR · WHITE PLASTER, TEAK ENTRY, COPPER TRIM",fov:55},exterior:{name:"Exterior",cam:[118,-52,26],tgt:[60,25,6],roof:!0,title:"From the pool.",kicker:"EXTERIOR · WHITE PLASTER, YAKISUGI PANELS, TEAK SOFFITS, COPPER EDGES",fov:50},aerialroof:{name:"Aerial (roof)",cam:[-40,-110,80],tgt:[50,45,5],roof:!0,fov:50,title:"The whole house.",kicker:"EXTERIOR · ROOF ON"},engawa:{name:"Engawa",cam:[44,33,5.5],tgt:[74,46,5],roof:!0,title:"Engawa + courtyard.",kicker:"TEAK ENGAWA, SLATTED SCREENS",fov:60},tatami:{name:"Tatami",cam:[37,22,22],tgt:[24,34,2],roof:!1,cut:8,title:"Tea + reading room.",kicker:"ROOM 404 · TATAMI, SHOJI, WARM EARTH PLASTER",fov:50},master:{name:"Master",cam:[124,33,64],tgt:[86,71,0],roof:!1,cut:8,title:"Master suite.",kicker:"ROOMS 201-203 · ROOF HIDDEN"}},ze={mode:"orbit",light:"day",roof:!1,cut:!1,cutH:4.5,furn:!0,labels:!1,overlay:!1,ovOp:.85,site:!0,mtn:!0,shadows:!0,sel:null,view:"aerial"},Ya=[],cd=new Set(["402","405","211","206","403","306","205","203","204","301","406","104","105","210","208"]),hd=new Set(["402","405","211","212","213"]),ey=new Set(["W","101","103","201","207","209","302","303","407","404","401","C","P","L"]),ty=new Set(["W","103","201","209","302","407","P","L"]);function ud(n,e){if(hd.has(n.id))return;const t=document.createElement("div");t.className="rlabel"+(["204","301","406"].includes(n.id)?" gal":"")+(e?" out":"")+(cd.has(n.id)||e?" minor":"")+(ey.has(n.id)?" key":"")+(ty.has(n.id)?" key2":""),t.innerHTML=e?`${n.name}`:`<span class="num">${n.id}</span>${n.name.replace(" + Conversation Pit","").replace(" Gallery","")}`,t.addEventListener("click",s=>{s.stopPropagation(),Vs(n.id,!0)});const i=new __(t);i.userData={item:n,outdoor:e},mn.labels.add(i),Ya.push(i)}at.rooms.forEach(n=>ud(n,!1));Xa.forEach(n=>ud(n,!0));function fc(){for(const n of Ya){const e=n.userData.item;let t=(e.x0+e.x1)/2,i=(e.y0+e.y1)/2;e.id==="103"&&(t=61,i=58),e.id==="K"&&(t=2,i=70),e.id==="105"&&(i=58),e.id==="404"&&(i=31),e.id==="403"&&(i=44),e.id==="C"&&(i=44,t=47),e.id==="204"&&(i=42),e.id==="406"&&(i=34),e.id==="301"&&(t=54);let s=1.5;n.userData.outdoor||(s=ze.mode==="plan"?1:ze.roof&&ze.mode!=="walk"?qa(t,i)+2.2:4),n.userData.outdoor&&(s=e.id==="C"?2.5:3),n.position.copy(Yt(t,i,s))}}const dd=["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"];function ny(){const n=Te("room-list"),e=Te("chips"),t=(s,r,a,o,l)=>{const h=document.createElement("button");h.dataset.id=s,h.innerHTML=l?`<span class="n">${r}</span>${a}`:`<span class="n">${r}</span><span>${a}</span>`,h.onclick=()=>s==="all"?fd():Vs(s,!0),o.appendChild(h)};t("all","⌂","Whole house",n),t("all","⌂","Whole house",e,!0);for(const s of dd){const r=document.createElement("div");r.className="grp",r.textContent=s.toUpperCase(),n.appendChild(r),at.rooms.filter(a=>a.wing===s&&!hd.has(a.id)).forEach(a=>{t(a.id,a.id,a.name,n),cd.has(a.id)||t(a.id,a.id,a.name,e,!0)})}const i=document.createElement("div");i.className="grp",i.textContent="OUTDOORS",n.appendChild(i),Xa.forEach(s=>{t(s.id,"·",s.name,n),["C","W","P","L","V","U"].includes(s.id)&&t(s.id,"·",s.name,e,!0)}),document.querySelectorAll('[data-id="all"]').forEach(s=>s.classList.add("on"))}ny();Te("hdr-total").textContent=`${at.total.toLocaleString()} SF conditioned (${Math.round(at.total*mr)} m²)`;const Hs=Te("views");Object.entries(Fs).forEach(([n,e])=>{const t=document.createElement("button");t.textContent=e.name,t.dataset.view=n,t.onclick=()=>Zs(n),Hs.appendChild(t)});let ln=null;function pc(n,e,t,i=1100,s="inout"){const r=Ct.position.clone(),a=nn.target.clone(),o=Ct.fov,l=performance.now();ln={p0:r,t0:a,f0:o,p1:n,t1v:e,f1:t??42,start:l,dur:i,ease:s}}function Gs(n,e){Te("cap-kicker").textContent=n,Te("cap-title").textContent=e}function Zs(n,e){const t=Fs[n];ze.view=n,typeof os<"u"&&(os=null,Te("btn-back").hidden=!0),ze.mode!=="orbit"&&Ii("orbit"),mi(t.roof),fi(!!t.cut,t.cut||4.5),Hs.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l.dataset.view===n));const i=Kn()&&n==="aerial",s=i?[49,-178,104]:t.cam,r=i?[49,46,22]:t.tgt,a=Yt(...s.slice(0,2),s[2]),o=Yt(...r.slice(0,2),r[2]);if(Kn()&&n!=="courtyard"&&n!=="aerial"){const l=a.clone().sub(o).multiplyScalar(n==="aerial"?1.2:1.45);a.copy(o).add(l)}e?(Ct.position.copy(a),nn.target.copy(o),Ct.fov=t.fov??42,Ct.updateProjectionMatrix(),nn.update(),ln=null):pc(a,o,t.fov),Gs(t.kicker,t.title)}function fd(){Ws(),Zs("aerial"),document.querySelectorAll("[data-id]").forEach(n=>n.classList.toggle("on",n.dataset.id==="all"))}function Rr(n){return at.rooms.find(e=>e.id===n)||Xa.find(e=>e.id===n)}function Vs(n,e){const t=Rr(n);if(!t)return;ze.sel=n,document.querySelectorAll("[data-id]").forEach(u=>u.classList.toggle("on",u.dataset.id===n)),document.querySelectorAll(".chips button.on, .room-list button.on").forEach(u=>{var d;return(d=u.scrollIntoView)==null?void 0:d.call(u,{block:"nearest",inline:"center",behavior:"smooth"})}),Ya.forEach(u=>u.element.classList.toggle("on",u.userData.item.id===n));const i=t.x1-t.x0,s=t.y1-t.y0,r=(t.x0+t.x1)/2,a=(t.y0+t.y1)/2,o=!t.area,l=t.cov??t.area??Math.round(i*s),h=o?.3:qa(r,a);ji.scale.set(i,1,s),ji.position.copy(Yt(r,a,o?.2:.08)),ji.visible=!0,Os.scale.set(i,Math.max(.2,h),s),Os.position.copy(Yt(r,a,Math.max(.2,h)/2)),Os.visible=!0,Te("info").hidden=!1,Te("info-kicker").textContent=o?"OUTDOORS · SITE":`ROOM ${t.id} · ${t.wing.toUpperCase()}`,Te("info-title").textContent=t.name,Te("info-notes").textContent=t.notes,Te("info-size").textContent=`${Zi(i)} × ${Zi(s)}  (${(i*nu).toFixed(1)} × ${(s*nu).toFixed(1)} m)`,Te("info-area").textContent=`${l.toLocaleString()} SF · ${(l*mr).toFixed(1)} m²${!o&&!t.cond?" (unconditioned)":""}${t.cov?" covered (not conditioned)":""}`,Te("info-ceil").parentElement.hidden=o,Te("info-ceil").textContent=o?"":`${Zi(t.h)} (roof deck ${Zi(Math.round(h*2)/2)})`,Te("info-floor").textContent=o?t.floor:t.floorName||t.floor,Te("info-fin").textContent=t.fin||"",Te("info-fin").parentElement.hidden=!t.fin;const c=t.equip||[...new Set(at.furn.filter(u=>u.room===n&&u.shape!=="pit").map(u=>u.label))];if(Te("info-equip").innerHTML=c.map(u=>`<span>${u}</span>`).join(""),Te("info-walk").parentElement.hidden=o&&n!=="C",Gs(o?"OUTDOORS":`ROOM ${t.id} / SPATIAL STUDY`,t.name),e&&ze.mode==="orbit"){os||(os={p:Ct.position.clone(),t:nn.target.clone(),fov:Ct.fov,roof:ze.roof,cut:ze.cut,cutH:ze.cutH,view:ze.view}),o||(mi(!1),fi(!0,Math.min(8,Math.max(6,(t.h||10)-2))));const u=o?4:Math.min(h,10),d=Math.max(11,.5*Math.hypot(i,s,u)+3),f=42,p=wu.degToRad(f)/2,_=Math.atan(Math.tan(p)*Ct.aspect),g=d/Math.sin(Math.min(p,_))*(Kn()?1.5:1.3),m=Yt(r,a,u*.25),S=new F(.55,1.05,.8).normalize();pc(m.clone().add(S.multiplyScalar(g)),m,f,600,"out"),Hs.querySelectorAll("button").forEach(A=>A.classList.remove("on")),Te("btn-back").hidden=!1}e&&ze.mode==="plan"&&(en.target.copy(Yt(r,a,0)),En.position.set(en.target.x,400,en.target.z+.01),En.zoom=Math.min(4,70/Math.max(i,s,14)),En.updateProjectionMatrix()),e&&ze.mode==="walk"&&Ia(r,a)}let os=null;function pd(){Xs(),Ws(),Te("btn-back").hidden=!0;const n=os;if(os=null,!n){Zs("aerial");return}mi(n.roof),fi(n.cut,n.cutH),pc(n.p,n.t,n.fov,600,"out"),n.view&&Fs[n.view]&&(Hs.querySelectorAll("button").forEach(e=>e.classList.toggle("on",e.dataset.view===n.view)),Gs(Fs[n.view].kicker,Fs[n.view].title))}function Ws(){ze.sel=null,Te("info").hidden=!0,ji.visible=!1,Os.visible=!1,Ya.forEach(n=>n.element.classList.remove("on"))}Te("info-close").onclick=Ws;Te("info-walk").onclick=()=>{const n=Rr(ze.sel);n&&(Ii("walk"),Ia((n.x0+n.x1)/2,(n.y0+n.y1)/2))};function mi(n){ze.roof=n,mn.roof.visible=n,Bn.classList.toggle("roof-on",n),Te("ly-roof").checked=n;const e=Te("btn-roof");e.setAttribute("aria-pressed",n),e.querySelector("span").textContent=n?"Roof On":"Roof Off",fc()}function fi(n,e){ze.cut=n,e!=null&&(ze.cutH=e),td.constant=n?ze.cutH:1e5,Te("ly-cut").checked=n,Te("cut-val").textContent=Zi(ze.cutH),Te("cut-h").value=ze.cutH}function xr(n){ze.overlay=n,qi&&(qi.visible=n),Te("ly-overlay").checked=n}Te("btn-roof").onclick=()=>mi(!ze.roof);Te("ly-roof").onchange=n=>mi(n.target.checked);Te("ly-cut").onchange=n=>fi(n.target.checked);Te("cut-h").oninput=n=>fi(!0,parseFloat(n.target.value));Te("ly-furn").onchange=n=>{ze.furn=n.target.checked,mn.furn.visible=ze.furn,mn.detail.visible=ze.furn};Bn.classList.add("labels-off");Te("ly-labels").onchange=n=>{ze.labels=n.target.checked,Bn.classList.toggle("labels-off",!ze.labels)};Te("ly-overlay").onchange=n=>xr(n.target.checked);Te("ov-op").oninput=n=>{gr.opacity=parseFloat(n.target.value),Te("ov-val").textContent=Math.round(gr.opacity*100)+"%"};Te("ly-site").onchange=n=>{mn.site.visible=n.target.checked};Te("ly-mtn").onchange=n=>{mn.mtn.visible=n.target.checked};Te("ly-shadow").onchange=n=>{An.castShadow=n.target.checked};Te("btn-layers").onclick=()=>{Te("layers").hidden=!Te("layers").hidden};Te("layers-close").onclick=()=>{Te("layers").hidden=!0};function $a(n){var i,s;document.getElementById("app").classList.toggle("evening",n!=="day"),ze.light=n,document.querySelectorAll("#light-seg button").forEach(r=>r.classList.toggle("on",r.dataset.light===n));const e=n==="day";wa.top.value.set(e?8826064:2831696),wa.mid.value.set(e?14936294:14260844),wa.bot.value.set(e?15328470:7035472),Vt.fog.color.set(e?14015968:9272184),kl.intensity=e?1.15:.35,kl.color.set(e?15397631:9213632),ad.intensity=e?.35:.12,An.intensity=e?2.6:.9,An.color.set(e?16773596:16751194);const t=e?new F(-.55,.78,.62):new F(.85,.16,.35);An.position.copy(t.normalize().multiplyScalar(400)),An.target.position.set(0,0,0),od.forEach(r=>r.intensity=e?0:260),ld.forEach(r=>r.emissiveIntensity=e?r.color.r>.97?.5:.2:1.8),(i=Bl.glass.emissive)==null||i.set(e?0:3811860),(s=Bl.c.glass.emissive)==null||s.set(e?0:5913624),zl&&(zl.emissiveIntensity=e?1.2:4),wt.toneMappingExposure=e?1.05:1.25}document.querySelectorAll("#light-seg button").forEach(n=>n.onclick=()=>$a(n.dataset.light));const Je={x:16,y:54,yaw:-Math.PI/2,pitch:0,keys:{}};function Ii(n){const e=ze.mode;if(ze.mode=n,Bn.classList.toggle("plan-mode",n==="plan"),Bn.classList.toggle("walk-mode",n==="walk"),document.querySelectorAll("#mode-seg button").forEach(t=>t.classList.toggle("on",t.dataset.mode===n)),nn.enabled=n==="orbit",en.enabled=n==="plan",Te("walk-pad").hidden=n!=="walk",Hs.hidden=n==="walk",n==="plan")di=En,mi(!1),fi(!0,4.5),xr(!0),en.target.copy(Yt(Kn()?49:40,Kn()?56:47,0)),En.position.set(en.target.x,400,en.target.z+.01),En.zoom=Kn()?.56:.92,Ka(),Te("hint").textContent="Drag to pan · Scroll or pinch to zoom · Tap a room",Gs(`PLAN VIEW · DRAWING OVERLAY ON 3D CUT AT 4' 6"`,"Floor plan."),Hs.querySelectorAll("button").forEach(t=>t.classList.remove("on"));else if(n==="walk"){if(di=Ct,fi(!1),xr(!1),mi(!0),Ct.fov=68,Ct.updateProjectionMatrix(),e!=="walk"){const t=ze.sel&&Rr(ze.sel);t?Ia((t.x0+t.x1)/2,(t.y0+t.y1)/2):Ia(16,54,-Math.PI/2)}Te("hint").textContent="Drag to look · W A S D or arrows to move · Esc to exit",Gs(`WALK THROUGH · EYE HEIGHT 5' 4"`,ze.sel?Rr(ze.sel).name:"Entry genkan.")}else di=Ct,fi(!1),xr(!1),Ct.fov=42,Ct.updateProjectionMatrix(),Te("hint").textContent="Drag to orbit · Scroll or pinch to zoom · Right-drag or two fingers to pan · Tap a room",e!=="orbit"&&Zs("aerial",!0);fc()}document.querySelectorAll("#mode-seg button").forEach(n=>n.onclick=()=>Ii(n.dataset.mode));function Ia(n,e,t){if(Je.x=n,Je.y=e,Je.pitch=0,t!=null)Je.yaw=t;else{const i=50-n,s=44-e;Je.yaw=Math.atan2(-i,s)+Math.PI,Je.yaw=Math.atan2(i,s)}}function Vo(n,e){if(n<-150||n>220||e<-120||e>200)return!0;for(const{s:t,a:i,b:s}of j_){const[r,a,o,l]=t.o==="h"?[i,t.c,s,t.c]:[t.c,i,t.c,s],h=o-r,c=l-a,u=Math.max(0,Math.min(1,((n-r)*h+(e-a)*c)/(h*h+c*c))),d=n-(r+h*u),f=e-(a+c*u);if(d*d+f*f<.8*.8)return!0}return!1}function iy(n){const e=Je.keys;let t=0,i=0;if((e.KeyW||e.ArrowUp||e.f)&&(t+=1),(e.KeyS||e.ArrowDown||e.b)&&(t-=1),(e.KeyA||e.ArrowLeft||e.l)&&(i-=1),(e.KeyD||e.ArrowRight||e.r)&&(i+=1),t||i){const l=9*n,h=Math.sin(Je.yaw),c=Math.cos(Je.yaw),u=(h*t+c*i)*l,d=(c*t-h*i)*l;Vo(Je.x+u,Je.y+d)?Vo(Je.x+u,Je.y)?Vo(Je.x,Je.y+d)||(Je.y+=d):Je.x+=u:(Je.x+=u,Je.y+=d)}const s=at.rooms.find(l=>Je.x>=l.x0&&Je.x<=l.x1&&Je.y>=l.y0&&Je.y<=l.y1),a=(s?s.id==="103"&&Je.x>49&&Je.x<65&&Je.y>66&&Je.y<78?-1.5:0:-1)+5.33;Ct.position.copy(Yt(Je.x,Je.y,a));const o=new F(Math.sin(Je.yaw)*Math.cos(Je.pitch),Math.sin(Je.pitch),-Math.cos(Je.yaw)*Math.cos(Je.pitch));Ct.lookAt(Ct.position.clone().add(o)),s&&s.id!==Je.room&&(Je.room=s.id,Gs(`WALK THROUGH · EYE HEIGHT 5' 4"`,s.name))}window.addEventListener("keydown",n=>{if(ze.mode==="walk"){if(n.code==="Escape"){Ii("orbit");return}Je.keys[n.code]=!0,n.code.startsWith("Arrow")&&n.preventDefault()}});window.addEventListener("keyup",n=>{Je.keys[n.code]=!1});document.querySelectorAll("#walk-pad button").forEach(n=>{const e=n.dataset.k,t=s=>{s.preventDefault(),Je.keys[e]=!0},i=()=>{Je.keys[e]=!1};n.addEventListener("pointerdown",t),n.addEventListener("pointerup",i),n.addEventListener("pointerleave",i),n.addEventListener("pointercancel",i)});const Wo=new Vu;let Tn=null;wt.domElement.addEventListener("pointerdown",n=>{Tn={x:n.clientX,y:n.clientY,t:performance.now(),lx:n.clientX,ly:n.clientY},ze.mode==="walk"&&wt.domElement.setPointerCapture(n.pointerId)});wt.domElement.addEventListener("pointermove",n=>{ze.mode==="walk"&&Tn&&(Je.yaw+=(n.clientX-Tn.lx)*.005,Je.pitch=Math.max(-1.2,Math.min(1.2,Je.pitch-(n.clientY-Tn.ly)*.004)),Tn.lx=n.clientX,Tn.ly=n.clientY)});wt.domElement.addEventListener("pointerup",n=>{if(!Tn)return;const e=Math.hypot(n.clientX-Tn.x,n.clientY-Tn.y),t=performance.now()-Tn.t;if(Tn=null,e>6||t>600||ze.mode==="walk")return;const i=wt.domElement.getBoundingClientRect();new re((n.clientX-i.left)/i.width*2-1,-((n.clientY-i.top)/i.height)*2+1);const s=md(n.clientX,n.clientY);if(n.pointerType==="touch"||n.pointerType==="pen"){if(!s){Xs(),Ws();return}if(Cr===s){Vs(s,!0);return}gd(s,null);return}if(s){Vs(s,!0);return}Xs(),Ws()});function md(n,e){const t=wt.domElement.getBoundingClientRect(),i=new re((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1);Wo.setFromCamera(i,di);const s=Wo.intersectObjects(id,!1)[0];if(s)return s.object.userData.room;const r=Wo.ray.intersectPlane(new In(new F(0,1,0),1),new F);if(r){const a=r.x+gt,o=-r.z+At,l=Xa.find(h=>a>=h.x0&&a<=h.x1&&o>=h.y0&&o<=h.y1);if(l)return l.id}return null}const sy=new ki({color:7566195,transparent:!0,opacity:.18,depthWrite:!1,side:wn}),es=new Ut(new Bi(1,1).rotateX(-Math.PI/2),sy);es.visible=!1;es.renderOrder=5;Vt.add(es);const ri=new Ut(new Cn(1,1,1),new ki({color:13948116,transparent:!0,opacity:.12,depthWrite:!1}));ri.visible=!1;ri.renderOrder=5;Vt.add(ri);const ts=new sc(new Lu(new Cn(1,1,1)),new Dr({color:1513239,transparent:!0,opacity:.85}));ts.visible=!1;ts.renderOrder=6;Vt.add(ts);const _n=document.createElement("div");_n.className="hovertag";_n.hidden=!0;_n.setAttribute("role","status");Bn.appendChild(_n);let Cr=null,iu=null,su=0,ma=0;function gd(n,e){const t=Rr(n);if(!t)return Xs();const i=t.x1-t.x0,s=t.y1-t.y0,r=(t.x0+t.x1)/2,a=(t.y0+t.y1)/2,o=!t.area;if(Cr!==n){Cr=n;const l=o?.4:Math.min(qa(r,a),ze.roof?99:30);es.scale.set(i,1,s),es.position.copy(Yt(r,a,o?.25:.12)),ri.scale.set(i-.1,Math.max(.3,l),s-.1),ri.position.copy(Yt(r,a,Math.max(.3,l)/2)),ts.scale.copy(ri.scale),ts.position.copy(ri.position),es.visible=ts.visible=!0,ri.visible=!o;const h=t.cov??t.area??Math.round(i*s);_n.innerHTML=`<b>${t.name}</b><span>${Zi(i)} × ${Zi(s)} · ${h.toLocaleString()} SF</span>`,_n.hidden=!1,wt.domElement.style.cursor="pointer"}if(e)_n.style.left=e[0]+"px",_n.style.top=e[1]+"px",_n.classList.remove("center");else{const l=Yt(r,a,o?1:2).project(di),h=wt.domElement.getBoundingClientRect();_n.style.left=(l.x+1)/2*h.width+"px",_n.style.top=(1-l.y)/2*h.height+"px",_n.classList.add("center")}}function Xs(){Cr=null,es.visible=ri.visible=ts.visible=!1,_n.hidden=!0,wt.domElement.style.cursor=""}wt.domElement.addEventListener("pointermove",n=>{if(n.pointerType!=="mouse"||ze.mode==="walk"||Tn&&n.buttons)return;const e=wt.domElement.getBoundingClientRect();iu=[n.clientX,n.clientY,n.clientX-e.left,n.clientY-e.top],!ma&&(ma=requestAnimationFrame(function t(i){if(i-su<40){ma=requestAnimationFrame(t);return}ma=0,su=i;const[s,r,a,o]=iu,l=md(s,r);l?gd(l,[a,o]):Cr&&Xs()}))});wt.domElement.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&Xs()});window.addEventListener("keydown",n=>{n.code==="Escape"&&ze.mode!=="walk"&&(os||ze.sel)&&pd()});Te("btn-back").onclick=pd;function Pr(n){const e=Te("toast");e.textContent=n,e.hidden=!1,clearTimeout(Pr._t),Pr._t=setTimeout(()=>e.hidden=!0,2200)}Te("t-reset").onclick=()=>{ze.mode==="walk"&&Ii("orbit"),ze.mode==="plan"?Ii("plan"):fd()};Te("t-save").onclick=()=>{try{wt.render(Vt,di);const n=document.createElement("a");n.href=wt.domElement.toDataURL("image/png"),n.download="weberman-residence.png",n.click(),Pr("Saved a view of the model.")}catch{Pr("The image could not be saved.")}};Te("t-full").onclick=()=>{var e;const n=document.documentElement;document.fullscreenElement?document.exitFullscreen():(((e=n.requestFullscreen)==null?void 0:e.call(n))??Promise.reject()).catch(()=>Pr("Full screen is unavailable in this browser."))};function mc(n,e){Te("modal-title").textContent=n,Te("modal-body").innerHTML=e,Te("modal").hidden=!1}Te("modal-close").onclick=()=>Te("modal").hidden=!0;Te("modal").onclick=n=>{n.target.id==="modal"&&(Te("modal").hidden=!0)};const xd=()=>`<table>${dd.map(n=>`<tr><td colspan="3"><b>${n}</b></td></tr>`+at.rooms.filter(e=>e.wing===n).map(e=>`<tr><td>${e.id}</td><td>${e.name}${e.cond?"":" (unconditioned)"}</td><td style="text-align:right">${e.area} SF · ${(e.area*mr).toFixed(1)} m²</td></tr>`).join("")).join("")}<tr><td colspan="3"><b>Covered Outdoor (Not Conditioned)</b></td></tr>${(at.covered||[]).map(n=>`<tr><td>${n.id}</td><td>${n.name}</td><td style="text-align:right">${n.area} SF · ${(n.area*mr).toFixed(1)} m²</td></tr>`).join("")}<tr><td></td><td><b>Total Conditioned</b></td><td style="text-align:right"><b>${at.total.toLocaleString()} SF · ${Math.round(at.total*mr)} m²</b></td></tr></table>`;Te("btn-drawings").onclick=()=>{mc("Drawings",'<div class="tabs"><button class="on" data-img="files/wo8o586bms0e.enc">Floor Plan</button><button data-img="files/v6xu73yamn4h.enc">Site Plan</button><button data-img="prog">Room Program</button></div><div id="dw"><img data-enc-img="files/wo8o586bms0e.enc" alt="Floor plan"></div>'),document.querySelectorAll(".tabs button").forEach(n=>n.onclick=()=>{document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("on",e===n)),Te("dw").innerHTML=n.dataset.img==="prog"?xd():`<img data-enc-img="${n.dataset.img}" alt="${n.textContent}">`})};const _d=`<h3>Concept</h3><p>A low, warm courtyard house for a mountain site, drawing on Bali, Japan and mid-century modernism rather than the cabin. Four single-storey pavilions wrap a 36 × 28 ft courtyard: <b>living</b> to the north facing the mountains, <b>sleeping</b> to the east, <b>wellness + gym</b> to the south on the pool, and <b>studio + arrival</b> to the west. Glazed engawas on the east and west and an open-air covered walkway on the south link them all, so every room looks into the garden. Deep 6 to 8 ft eaves, a butterfly roof over the living pavilion, standing seam metal, white lime-plaster panels with charred-timber siding, bronze windows, walnut and cherry inside, limestone, a cedar engawa and rammed earth.</p>
<h3>Model Notes</h3><p>Geometry is generated from the same plan data as the 2D drawings. Wall heights run up to the underside of each roof: 10 to 14 ft, with the butterfly roof rising from 12' 7" at the valley to about 14' at the walls. Areas are measured to wall centerlines. Furniture and equipment are simple blocks at true size. The lot, grades and mountain backdrop are illustrative only.</p>${xd()}`;Te("btn-about").onclick=()=>mc("About This Model",_d);Te("btn-notes").onclick=()=>mc("Model Notes",_d);function Ka(){const n=Bn.clientWidth,e=Bn.clientHeight;wt.setSize(n,e),Ks.setSize(n,e),Ct.aspect=n/e,Ct.updateProjectionMatrix();const t=62;En.left=-t*n/e,En.right=t*n/e,En.top=t,En.bottom=-t,En.updateProjectionMatrix()}window.addEventListener("resize",Ka);new ResizeObserver(Ka).observe(Bn);let ru=performance.now(),ry=0;function yd(n){const e=Math.min(.05,(n-ru)/1e3);if(ru=n,ln&&ze.mode==="orbit"){let i=Math.min(1,(n-ln.start)/ln.dur);const s=ln.ease==="out"?1-Math.pow(1-i,3):i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;Ct.position.lerpVectors(ln.p0,ln.p1,s),nn.target.lerpVectors(ln.t0,ln.t1v,s),Ct.fov=ln.f0+(ln.f1-ln.f0)*s,Ct.updateProjectionMatrix(),i>=1&&(ln=null)}ze.mode==="orbit"?nn.update():ze.mode==="plan"?en.update():iy(e);const t=ze.mode==="orbit"?Ct.position.distanceTo(nn.target):ze.mode==="plan"?999:0;mn.detail.visible=ze.furn&&t<(Kn()?150:240),wt.render(Vt,di),Ks.render(Vt,di),++ry===3&&(Te("loading").classList.add("done"),window.__ready=!0),requestAnimationFrame(yd)}Ka();$a("day");fc();const Ui=new URLSearchParams(location.search);Zs(Fs[Ui.get("view")]?Ui.get("view"):"aerial",!0);Ui.get("mode")&&Ii(Ui.get("mode"));Ui.get("light")==="eve"&&$a("eve");Ui.get("roof")!=="1"&&mi(!1);Ui.get("room")&&Vs(Ui.get("room"),!0);requestAnimationFrame(yd);nn.addEventListener("start",()=>{ln=null});window.app={goView:Zs,setMode:Ii,select:Vs,deselect:Ws,setRoof:mi,setLight:$a,setCut:fi,setOverlay:xr,state:ze,renderer:wt,scene:Vt,get camera(){return di}};const ay=49,oy=44,As=(n,e,t=0)=>new F(n-ay,t,-(e-oy)),ga={arch:{_:14075816},struct:{footing:9277331,column:10987949,beam:12172223,slab:13619668,pool:10467007,_:11580086},framing:{wall:14998731,lintel:10330277,_:14275267},roof:{rafter:5199972,purlin:10134445,trimmer:3093563,_:7042176},elec:{panel:1513239,outlet:14260736,light:15911244,equip:12024095,homerun:14725953,feeder:9067008,data:2450411,lv:1981066,lvrun:6333946,ap:3900150,solar:2042436,_:14260736},plumb:{fixture:16119285,main:3108831,branch:6000111,drain:8018482,vent:9408399,rain:2072207,pool:959942,poolpipe:2275542,equip:7041664,_:3108831},hvac:{indoor:15790320,outdoor:13093324,lineset:12088115,duct:10134961,diffuser:14672872,exhaust:8029841,erv:9147809,sauna:12730636,steam:9741240,dehum:8161172,_:10134961},solar:{module:2042436,inverter:1513239,battery:4144966,enclosure:10265519,dc:14753096,_:2042436},water:{tank:4153151,zone:1483594,ff:1013358,pump:947344,treat:165063,well:3108831,pipe:959977,mains:8141549,shed:11051678,_:959977},ctrl:{device:8141549,link:10980346,leak:14362487,_:8141549},farm:{coop:9133620,run:10724259,bed:7032618,compost:5981750,greywater:8141549,nook:12575696,rack:1483594,hvac:15066597,sensor:8141549,equip:7566195,pipe:8141549,_:5078031},site:{tank:4153151,equip:8028038,pad:12434877,well:3108831,pipe:4937059,_:8028038}},ly=14042437,cy={arch:"Architecture",struct:"Structure",framing:"Framing",roof:"Roof",elec:"Electrical",plumb:"Plumbing",hvac:"HVAC",site:"Site Utilities",water:"Water + Rainwater",solar:"Solar",ctrl:"Controls",farm:"Landscape + Farm"},hy=["walls","glass","floors","furn","detail"];function uy(n){const e=n[0];if(e==="b"){const[,t,i,s,r,a,o]=n,l=new Cn(Math.max(.05,r-t),Math.max(.05,o-s),Math.max(.05,a-i)),h=As((t+r)/2,(i+a)/2,(s+o)/2);return l.translate(h.x,h.y,h.z),[l]}if(e==="s"){const[,t,i,s,r,a,o,l,h]=n,c=As(t,i,s),u=As(r,a,o),d=c.distanceTo(u),f=new Cn(l,h,d),p=new kt;return p.position.copy(c).add(u).multiplyScalar(.5),p.lookAt(u),p.updateMatrix(),f.applyMatrix4(p.matrix),[f]}if(e==="c"){const[,t,i,s,r,a]=n,o=new hn(s,s,Math.max(.05,a-r),20),l=As(t,i,(r+a)/2);return o.translate(l.x,l.y,l.z),[o]}if(e==="p"){const[,t,i]=n,s=Math.max(.07,i/2),r=[];for(let a=1;a<t.length;a++){const o=As(...t[a-1]),l=As(...t[a]),h=o.distanceTo(l);if(h<.001)continue;const c=new hn(s,s,h,8,1,!1),u=new Rn().setFromUnitVectors(new F(0,1,0),l.clone().sub(o).normalize());c.applyQuaternion(u);const d=o.clone().add(l).multiplyScalar(.5);if(c.translate(d.x,d.y,d.z),r.push(c),a<t.length-1){const f=new Ni(s,8,6);f.translate(l.x,l.y,l.z),r.push(f)}}return r}return[]}function dy(n){return n.map(e=>{const t=e.index?e.toNonIndexed():e;for(const i of Object.keys(t.attributes))["position","normal"].includes(i)||t.deleteAttribute(i);return t})}function fy(n){fetch("./"+"bim/bim.json").then(t=>t.json()).then(t=>py(n,t)).catch(t=>console.warn("BIM layers unavailable",t))}function py(n,e){const{scene:t,renderer:i}=n,r=i.domElement.parentElement.parentElement,a=new Ki;a.name="bim",t.add(a);const o={},l={},h=[],c=e.rooms||{};for(const N of e.layers){const z=new Ki;z.name="bim-"+N.id,z.visible=!1,a.add(z),o[N.id]=z}const u=N=>{let z=(ga[N.layer]||{})[N.cat]??(ga[N.layer]||{})._??8947848;/Hot Water/.test(N.system)&&(z=ly);const K=N.layer+z;return l[K]||(l[K]=new Nt({color:z,roughness:.75,metalness:N.layer==="roof"?.35:.05})),l[K]},d=new ki({transparent:!0,opacity:0,depthWrite:!1});for(const N of e.elements){if(!N.g||!N.g.length)continue;const z=dy(N.g.flatMap(uy));if(!z.length)continue;const K=z.length===1?z[0]:ed(z,!1),ye=new Ut(K,N.layer==="arch"?d:u(N));ye.userData.bim=N,ye.castShadow=N.layer!=="arch",ye.receiveShadow=!1,o[N.layer].add(ye),h.push(ye)}const f=hy.map(N=>t.getObjectByName(N)).filter(Boolean);o.arch.visible=!0;const p=Object.fromEntries(e.layers.map(N=>[N.id,N.id==="arch"])),_={};for(const N of e.elements)_[N.layer]=(_[N.layer]||0)+1;const g=Object.fromEntries(e.layers.map(N=>[N.id,N.sheet])),m=document.createElement("button");m.className="bim-btn mw-hover",m.id="bim-btn",m.type="button",m.setAttribute("aria-expanded","false"),m.setAttribute("aria-controls","bim-panel"),m.title="Building Systems Layers",m.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg><span>Systems</span>',(r.querySelector(".right-ctrls")||r).appendChild(m);const A=document.createElement("section");A.className="bim-panel",A.id="bim-panel",A.hidden=!0,A.setAttribute("aria-label","Layers");const b=N=>"#"+(ga[N][Object.keys(ga[N])[0]]??8947848).toString(16).padStart(6,"0");A.innerHTML='<div class="bim-head"><div><h2>Layers</h2><p class="bim-sub">One shared model drives the 3D view and the Design Development sheets. Tap an element for its properties.</p></div><button class="bim-x mw-hover" type="button" aria-label="Close layers">×</button></div>'+e.layers.map(N=>`<div class="bim-row"><label class="bim-tg mw-hover" title="${N.desc}"><span class="bim-sw" style="background:${b(N.id)}"></span><span class="bim-name">${N.name} <span class="bim-n">${_[N.id]||0}</span></span><input type="checkbox" data-layer="${N.id}" ${p[N.id]?"checked":""} aria-label="Show ${N.name}"><i></i></label><a class="bim-link mw-hover" href="#" data-sheet-view="${N.sheet}" data-sheet="${N.sheet}" aria-label="View Sheet ${N.sheet} (${N.name})">View Sheet</a><a class="bim-link pdf mw-hover" href="https://webermanapps.github.io/blueprint-dashboard/#mw-projects" target="_blank" rel="noopener" aria-label="${N.sheet} PDF">PDF</a></div>`).join("")+'<div class="bim-foot"><a class="bim-link primary mw-hover" href="https://webermanapps.github.io/blueprint-dashboard/#mw-projects" target="_blank" rel="noopener">Full Set (PDF)</a><button class="bim-link mw-hover" type="button" data-act="all">Show All Systems</button></div><p class="bim-note">Design Development, Not for Construction. Sizes are concept placeholders for a Thai engineer to verify.</p>',r.appendChild(A);const E=document.createElement("div");E.className="bim-props",E.hidden=!0,E.setAttribute("role","dialog"),E.setAttribute("aria-label","Element Properties"),r.appendChild(E);const M=N=>{A.hidden=!N,m.setAttribute("aria-expanded",String(N))};m.addEventListener("click",()=>M(A.hidden)),A.querySelector(".bim-x").addEventListener("click",()=>M(!1));function D(){for(const K in p)o[K].visible=p[K];for(const K of f)K.visible=p.arch&&(K.name!=="furn"&&K.name!=="detail"?!0:n.state.furn!==!1);n.setRoof&&(!p.arch&&n.state.roof?n.setRoof(!1):p.arch&&!n.state.roof&&D._roofWas&&n.setRoof(!0)),D._roofWas=n.state.roof||D._roofWas,A.querySelectorAll("input[data-layer]").forEach(K=>K.checked=p[K.dataset.layer]);const N=new URL(location.href),z=Object.keys(p).filter(K=>p[K]&&K!=="arch");z.length?N.searchParams.set("layers",z.join(",")):N.searchParams.delete("layers"),p.arch?N.searchParams.delete("arch"):N.searchParams.set("arch","0"),history.replaceState(null,"",N),R&&y&&!y.parent.visible&&x()}D._roofWas=n.state.roof,A.addEventListener("change",N=>{const z=N.target.dataset.layer;z&&(p[z]=N.target.checked,D())}),A.querySelector('[data-act="all"]').addEventListener("click",()=>{const N=Object.keys(p).some(z=>z!=="arch"&&!p[z]);for(const z in p)z!=="arch"&&(p[z]=N);p.arch=!N,D()});let y=null,R=null;const U=new Dr({color:657930,depthTest:!1,transparent:!0});function x(){R&&(t.remove(R),R.geometry.dispose()),R=null,y=null,E.hidden=!0}function C(N){x(),y=N;const z=N.userData.bim;R=new r0(N,657930),R.material=U,R.renderOrder=20,t.add(R);const K=z.room?c[z.room]?`${c[z.room]} (${z.room})`:z.room:z.rooms?z.rooms.map(nt=>c[nt]||nt).join(" / "):"",ye=[["Type",z.type],["Size",z.size],["System",z.system],z.tag&&["Mark",z.tag],z.circuit&&["Circuit",z.circuit],K&&["Location",K],z.grid&&["Grid",z.grid],z.spec&&["Build-Up",z.spec],z.standard&&["Standard",z.standard],z.wall_type&&["Wall Type",z.wall_type]].filter(Boolean),pe=g[z.layer];E.innerHTML=`<button class="bim-x mw-hover" type="button" aria-label="Close properties">×</button><div class="bim-k">${cy[z.layer]} · ${z.id}</div><h3>${I(z.type)}</h3><dl>${ye.map(([nt,Ze])=>`<dt>${nt}</dt><dd>${I(String(Ze))}</dd>`).join("")}</dl><a class="bim-link mw-hover" href="#" data-sheet-view="${pe}">View Sheet ${pe}</a>`,E.querySelector(".bim-x").addEventListener("click",x),E.hidden=!1}const I=N=>N.replace(/[&<>"]/g,z=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[z]),P=N=>{for(let z=N;z;z=z.parent)if(!z.visible)return!1;return!0},O=new Vu;let W=null;const V=i.domElement;V.addEventListener("pointerdown",N=>{W={x:N.clientX,y:N.clientY,t:performance.now()}},!0),V.addEventListener("pointerup",N=>{if(!W)return;const z=Math.hypot(N.clientX-W.x,N.clientY-W.y),K=performance.now()-W.t;if(W=null,z>6||K>600||n.state.mode==="walk"||!Object.keys(p).some(J=>J!=="arch"&&p[J])&&A.hidden)return;const pe=V.getBoundingClientRect();O.setFromCamera(new re((N.clientX-pe.left)/pe.width*2-1,-((N.clientY-pe.top)/pe.height)*2+1),n.camera);const nt=h.filter(J=>P(J)&&(J.userData.bim.layer!=="arch"||!A.hidden)),Ze=[];for(const J of f)P(J)&&Ze.push(J);const it=O.intersectObjects([...nt,...Ze],!0).find(J=>J.object.visible&&(J.object.userData.bim||Ze.length));it&&it.object.userData.bim&&(N.stopImmediatePropagation(),C(it.object))},!0),window.addEventListener("keydown",N=>{N.key==="Escape"&&(E.hidden?A.hidden||M(!1):x())}),function N(){R&&y&&R.update(),requestAnimationFrame(N)}();const Q=new URLSearchParams(location.search);if(Q.get("layers"))for(const N of Q.get("layers").split(","))N in p&&(p[N]=!0);Q.get("arch")==="0"&&(p.arch=!1),(Q.get("layers")||Q.get("arch"))&&D(),Q.get("panel")==="1"&&M(!0),window.bim={state:p,apply:D,setOpen:M,show:C,layerGroups:o,model:e,select:N=>{const z=h.find(K=>K.userData.bim.id===N);return z&&C(z),!!z}}}(function n(){window.app&&window.app.scene?fy(window.app):setTimeout(n,50)})();(function(){if(window.__mwSheetView)return;window.__mwSheetView=1;var n={"A-101":"files/hfmeac2npsaj.enc","A-102":"files/x5xy4cf5sqen.enc","A-201":"files/b9svxh0rqhb1.enc","A-301":"files/9b8no0a9fi86.enc","A-401":"files/7a1wq30fh9i0.enc","E-101":"files/60xxdwnxyulx.enc","E-102":"files/y2ulryrb4b60.enc","E-103":"files/2344ij11c8m2.enc","G-001":"files/hqbt2phf1aj4.enc","G-002":"files/ekyouw0mqf74.enc","G-003":"files/jc2zfl5dljri.enc","M-101":"files/7an5wbq2s1qb.enc","P-101":"files/gbag9ut7d1kv.enc","P-102":"files/ltfumoacq1uh.enc","P-103":"files/bu0paxket3de.enc","S-101":"files/lsu6vd6sm8af.enc","S-102":"files/d475sqykwe1a.enc"};function e(){var t=document.getElementById("mw-sheet-ov");t&&t.remove()}document.addEventListener("keydown",function(t){t.key==="Escape"&&e()}),document.addEventListener("click",function(t){var i=t.target.closest&&t.target.closest("[data-sheet-view]");if(i){t.preventDefault(),t.stopPropagation();var s=i.getAttribute("data-sheet-view"),r=n[s];if(r){e();var a=document.createElement("div");a.id="mw-sheet-ov",a.setAttribute("role","dialog"),a.setAttribute("aria-label","Sheet "+s),a.style.cssText="position:fixed;inset:0;z-index:2147483000;background:rgba(10,10,10,.88);display:flex;align-items:center;justify-content:center;padding:60px 12px 12px;box-sizing:border-box";var o=document.createElement("button");o.type="button",o.className="mw-hover",o.setAttribute("aria-label","Close sheet"),o.textContent="×",o.style.cssText="position:absolute;top:10px;right:10px;width:44px;height:44px;border:0;background:#fff;color:#0a0a0a;font-size:26px;line-height:1;cursor:pointer";var l=document.createElement("div");l.style.cssText="width:100%;height:100%;overflow:auto;display:flex;align-items:center;justify-content:center";var h=document.createElement("img");h.alt="Sheet "+s,h.setAttribute("data-enc-img",r),h.style.cssText="max-width:100%;max-height:100%;background:#fff",l.appendChild(h),a.appendChild(o),a.appendChild(l),a.addEventListener("click",function(c){(c.target===a||c.target===l||c.target===o)&&e()}),document.body.appendChild(a)}}},!0)})();const Za={101:[{n:1,f:"files/lzcncwi3qbvf.enc",c:"Wide view"},{n:2,f:"files/5sinthefafx7.enc",c:"Reverse angle"},{n:3,f:"files/3blf7t2ahugp.enc",c:"Detail"}],102:[{n:1,f:"files/tw356afzqrs6.enc",c:"Wide view"},{n:2,f:"files/m7imdskc3xx1.enc",c:"Reverse angle"}],103:[{n:1,f:"files/5get28zls9fy.enc",c:"Wide view"},{n:2,f:"files/49icvnervpv0.enc",c:"Toward the courtyard"}],201:[{n:1,f:"files/sqiowimoawot.enc",c:"Wide view"},{n:2,f:"files/d9kn45a3vbr0.enc",c:"From the window, evening"}],202:[{n:1,f:"files/bp6sz3swgcji.enc",c:"Wide view"},{n:2,f:"files/81o63v51px03.enc",c:"Toward the vanity + shower"}],302:[{n:1,f:"files/b5am6v1y8u34.enc",c:"Wide view"},{n:2,f:"files/gmcyk181xpvz.enc",c:"Weights + mirror wall"}],303:[{n:1,f:"files/2ceuyvzbhn8b.enc",c:"Wide view"},{n:2,f:"files/wg46jgp7l49z.enc",c:"Flush sage cold plunge"}],407:[{n:1,f:"files/j6oibc06crmn.enc",c:"Wide view"},{n:2,f:"files/24dd3cr4y7gj.enc",c:"Desk side, evening"}],404:[{n:1,f:"files/levtavz2p0f6.enc",c:"Wide view"},{n:2,f:"files/2f4n11vn3drx.enc",c:"Shoji open to the engawa"}],401:[{n:1,f:"files/e20qfih2zpin.enc",c:"Wide view"},{n:2,f:"files/qw9ieoavpzg3.enc",c:"Toward the front door"}],104:[{n:1,f:"files/s464xyfjstve.enc",c:"Wide view"},{n:2,f:"files/tnikodrfadsq.enc",c:"Reverse angle"}],105:[{n:1,f:"files/ql6rkuckz1uv.enc",c:"Wide view"},{n:2,f:"files/eo45590ldlkz.enc",c:"Reverse angle"}],203:[{n:1,f:"files/lun7iwa2fcft.enc",c:"Wide view"},{n:2,f:"files/szimnfnzazyq.enc",c:"Detail"}],204:[{n:1,f:"files/s8hw958b6nfx.enc",c:"Wide view"},{n:2,f:"files/k8x31ercn7aq.enc",c:"From the courtyard"}],205:[{n:1,f:"files/y7acsx1xcefo.enc",c:"Wide view"},{n:2,f:"files/lp7r3zz6ilze.enc",c:"Reverse angle"}],206:[{n:1,f:"files/vu4gt5touazr.enc",c:"Wide view"},{n:2,f:"files/k5m4gr5iuftg.enc",c:"From the hall"}],207:[{n:1,f:"files/18z8qxt52uvu.enc",c:"Wide view"},{n:2,f:"files/o7mert81649a.enc",c:"From the play loft"}],208:[{n:1,f:"files/i5evq9e0fqec.enc",c:"Wide view"},{n:2,f:"files/sm6zwva3ouk4.enc",c:"Reverse angle"}],209:[{n:1,f:"files/2nb8igo228pc.enc",c:"Wide view"},{n:2,f:"files/ns39kg9di6jq.enc",c:"Reverse angle"}],211:[{n:1,f:"files/1ger8t1ntjmq.enc",c:"Wide view"},{n:2,f:"files/486q5mm8nisc.enc",c:"From the courtyard"}],212:[{n:1,f:"files/fv8t0opuaeib.enc",c:"Wide view"},{n:2,f:"files/s6o4mkzyijwf.enc",c:"Reverse angle"}],213:[{n:1,f:"files/wtmg3mkhjuha.enc",c:"Wide view"},{n:2,f:"files/4sxqwn3w9cpq.enc",c:"Along the desk"}],301:[{n:1,f:"files/4didl8d9wn9o.enc",c:"Wide view"},{n:2,f:"files/vscrjzksedk7.enc",c:"Golden hour"}],304:[{n:1,f:"files/8cj5h0is1cxw.enc",c:"Wide view"},{n:2,f:"files/jotwb63fp4c9.enc",c:"From the top bench"}],305:[{n:1,f:"files/z61o3he5415e.enc",c:"Wide view"},{n:2,f:"files/9viaivvgf0l3.enc",c:"Reverse angle"}],306:[{n:1,f:"files/oxupvvpvmnqh.enc",c:"Wide view"},{n:2,f:"files/rjb4du6dx7r5.enc",c:"Reverse angle"}],402:[{n:1,f:"files/889doa0pvd37.enc",c:"Wide view"},{n:2,f:"files/oat4c2kyoui2.enc",c:"From the genkan"}],403:[{n:1,f:"files/2fbex21b2f8f.enc",c:"Wide view"},{n:2,f:"files/ha9kuotr0hf1.enc",c:"Detail"}],405:[{n:1,f:"files/u47bq5855dka.enc",c:"Wide view"},{n:2,f:"files/okujf032xpaq.enc",c:"Toward the front door"}],406:[{n:1,f:"files/ynx3lv5rar4r.enc",c:"Wide view"},{n:2,f:"files/9ecud2tiwpns.enc",c:"From the courtyard at dusk"}],408:[{n:1,f:"files/qb84d3inx1f5.enc",c:"Wide view"},{n:2,f:"files/e1xthtre2i46.enc",c:"Reverse angle"}],409:[{n:1,f:"files/5x9zyhifslli.enc",c:"Wide view"},{n:2,f:"files/d09h996rkuov.enc",c:"From the shower"}],410:[{n:1,f:"files/3i2t9p2biwni.enc",c:"Wide view"},{n:2,f:"files/36uuq7d2ed5i.enc",c:"Reverse angle"}],411:[{n:1,f:"files/y6jcc55zk1yo.enc",c:"Wide view"},{n:2,f:"files/5jkn119av0vo.enc",c:"Reverse angle"}],214:[{n:1,f:"files/h40vzt43m0q4.enc",c:"Wide view"},{n:2,f:"files/e6q6a0irgwlm.enc",c:"Detail"}],215:[{n:1,f:"files/9hkwk8kz7aww.enc",c:"Wide view"},{n:2,f:"files/3zbfqmrd7c2o.enc",c:"Reverse angle"}],MED:[{n:1,f:"files/wzillp6fjs8k.enc",c:"Wide view"},{n:2,f:"files/210ji8xq4pqk.enc",c:"Seated view to the garden window"},{n:3,f:"files/elzujs6b0srz.enc",c:"Detail"}],CY:[{n:1,f:"files/uipm89dliv8z.enc",c:"Wide view"},{n:2,f:"files/r0qoblpq6qyi.enc",c:"Golden hour"}]},ht=n=>document.getElementById(n),Li=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Xo=n=>{const e=Math.floor(n+1e-6),t=Math.round((n-e)*12);return t?`${e}' ${t}"`:`${e}'`},pn=at.courtyard,my={MED:{id:"MED",name:"Quiet Meditation Room",wing:"Proposed · not in the plan yet",proposed:!0,sizeText:"About 10' × 10' (proposed)",notes:"Proposed only. Location and size are not drawn into the plan yet, and the model geometry has not changed. Picks from the Meditation Room deck (Nov 7): cozy cave-like mood, empty and minimal.",fin:"Tatami floor; zafu + zabuton; warm dark earth plaster; hinoki wood lining; small garden window behind shoji; flat ceiling; hidden cove light + one low lantern. Scent object still open (hinoki incense tray vs none)."},CY:{id:"CY",name:"Courtyard",wing:"Outdoors",sizeText:`${pn.x1-pn.x0}' × ${pn.y1-pn.y0}'`,notes:"Bodhi tree, Japanese maple and light bamboo around a reflecting pool, pale pavers, a stone band and timber chairs. Ringed by white plaster pavilions, glazed engawa, honey teak soffits and copper trim.",fin:"Pale stone pavers; reflecting pool; bodhi + maple + light bamboo; white smooth plaster walls; yakisugi feature panels; honey teak soffits; copper roof-edge trim"}},vd=n=>my[n]||at.rooms.find(e=>e.id===n),Ja=3,bd=Math.min(...at.rooms.map(n=>n.x0))-Ja,gy=Math.max(...at.rooms.map(n=>n.x1))+Ja,xy=Math.min(...at.rooms.map(n=>n.y0))-Ja,Sd=Math.max(...at.rooms.map(n=>n.y1))+Ja,Mi=n=>n-bd,Ei=n=>Sd-n,_y={bigtile:"#f3f1ea",stonetile:"#ece8de",stone:"#e9e6dc",honey:"#efe4d2",oakplank:"#ecdcc2",hinoki:"#f1e3c4",sage:"#dfe6d6",tatami:"#e6dfbf",flagstone:"#e4e1d8",concrete:"#e4e3df"};function yy(){const n=gy-bd,e=Sd-xy;let t=`<svg class="p2-svg" viewBox="0 0 ${n} ${e}" role="img" aria-label="Floor plan of the whole house. Select a room to see its views.">`;t+=`<rect x="${Mi(pn.x0)}" y="${Ei(pn.y1)}" width="${pn.x1-pn.x0}" height="${pn.y1-pn.y0}" class="p2-cy" data-room="CY" tabindex="0" role="button" aria-label="Courtyard, open views"><title>Courtyard</title></rect>`,t+=`<text class="p2-cyl" x="${Mi((pn.x0+pn.x1)/2)}" y="${Ei((pn.y0+pn.y1)/2)}">COURTYARD</text>`;for(const r of at.rooms){const a=r.x1-r.x0,o=r.y1-r.y0,l=!!Za[r.id];t+=`<g class="p2-room${l?"":" nogal"}" data-room="${r.id}" tabindex="0" role="button" aria-label="${Li(r.name)}, ${a} by ${o} feet${l?", open views":""}"><title>${Li(r.name)}</title>`,t+=`<rect x="${Mi(r.x0)}" y="${Ei(r.y1)}" width="${a}" height="${o}" fill="${_y[r.floor]||"#efede6"}"/>`;const h=Mi((r.x0+r.x1)/2),c=Ei((r.y0+r.y1)/2),u=o>a*2.4&&a<=8,d=u?o:a,f=u?a:o,p=b=>Math.min(2,f/(b.length*1.25+1.1),...b.map(E=>.86*d/(E.length*.56))),_=r.name.split(" "),g=[[r.name]];for(let b=1;b<_.length;b++)g.push([_.slice(0,b).join(" "),_.slice(b).join(" ")]);let m=g[0],S=p(m);for(const b of g){const E=p(b);E>S*1.08&&(S=E,m=b)}const A=u?` transform="rotate(-90 ${h} ${c})"`:"";S>=.85?(m.forEach((b,E)=>{t+=`<text class="p2-t"${A} x="${h}" y="${c+(E-(m.length-1)/2)*S*1.15-S*.25}" font-size="${S.toFixed(2)}">${Li(b)}</text>`}),t+=`<text class="p2-d"${A} x="${h}" y="${c+m.length/2*S*1.15+.35}" font-size="${Math.min(S*.72,1.3).toFixed(2)}">${a}' × ${o}'</text>`):t+=`<text class="p2-n"${A} x="${h}" y="${c+.45}" font-size="${Math.max(1,Math.min(1.5,Math.min(a,o)/3))}">${r.id}</text>`,t+="</g>"}for(const r of at.walls){const a=r.o==="h",o=(u,d,f)=>a?`<line class="${f}" x1="${Mi(u)}" y1="${Ei(r.c)}" x2="${Mi(d)}" y2="${Ei(r.c)}"/>`:`<line class="${f}" x1="${Mi(r.c)}" y1="${Ei(u)}" x2="${Mi(r.c)}" y2="${Ei(d)}"/>`,l=(r.feats||[]).slice().sort((u,d)=>u.a-d.a);let h=r.a;const c=r.ext?"p2-w ext":"p2-w";for(const u of l){u.a>h&&(t+=o(h,u.a,c));const d=u.k;d==="window"||d==="glass"||d==="fixed"||d==="slide"?t+=o(u.a,u.b,"p2-gl"):d!=="open"&&(t+=o(u.a,u.b,"p2-dr")),h=Math.max(h,u.b)}h<r.b&&(t+=o(h,r.b,c))}const i=n-4;return t+=`<g class="p2-north" transform="translate(${i} 5)"><path d="M0 -3 L1.4 1.6 L0 .8 L-1.4 1.6Z"/><text y="4.2">N</text></g>`,t+=`<g class="p2-scale" transform="translate(3 ${e-1.6})"><line x1="0" y1="0" x2="20" y2="0"/><line x1="0" y1="-.6" x2="0" y2=".6"/><line x1="10" y1="-.6" x2="10" y2=".6"/><line x1="20" y1="-.6" x2="20" y2=".6"/><text x="21" y=".5">20 ft</text></g>`,t+"</svg>"}function vy(){const n=ht("shell"),e=document.createElement("section");e.id="plan2d",e.className="p2",e.setAttribute("aria-label","2D floor plan with room photos");const t=at.rooms.filter(i=>Za[i.id]).length;e.innerHTML=`<div class="p2-head"><div><div class="p2-k">2D FLOOR PLAN · ${at.total.toLocaleString()} SF</div><div class="p2-h">Tap any room to see it.</div></div>
    <div class="p2-legend"><span><i class="lg gl"></i>Glass / window</span><span><i class="lg dr"></i>Door</span></div></div>
    <div class="p2-wrap" data-ptr-ignore>${yy()}</div>
    <div class="p2-foot"><button class="p2-prop" data-room="MED"><b>Proposed</b> Quiet Meditation Room · 3 views<span>Not placed in the plan yet</span></button>
    <p class="p2-note">${t} rooms + the courtyard each have AI-generated concept views based on the agreed finishes and room sizes. They are design concepts, not photos, and may not match exact window and door positions.</p></div>`,n.appendChild(e),e.addEventListener("click",i=>{const s=i.target.closest("[data-room]");s&&Ua(s.dataset.room)}),e.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&i.target.closest("[data-room]")&&(i.preventDefault(),Ua(i.target.closest("[data-room]").dataset.room))})}let wd=!0;function Lr(n){wd=n,ht("plan2d").hidden=!n,ht("shell").classList.toggle("p2-on",n),document.querySelectorAll("#mode-seg button").forEach(e=>e.classList.toggle("on",n?e.dataset.mode==="rooms":e.classList.contains("on")&&e.dataset.mode!=="rooms"))}function by(){const n=ht("mode-seg"),e=document.createElement("button");e.dataset.mode="rooms",e.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="9" cy="10" r="1.6"/><path d="M3 17l5-4 4 3 3-2 6 4"/></svg><span>Rooms + Photos</span>',n.prepend(e),e.onclick=()=>Lr(!0),n.querySelectorAll('button:not([data-mode="rooms"])').forEach(t=>t.addEventListener("click",()=>{Lr(!1),t.classList.add("on")})),["room-list","chips"].forEach(t=>{var i;return(i=ht(t))==null?void 0:i.addEventListener("click",s=>{if(!wd)return;const r=s.target.closest("[data-id]");if(!r)return;const a=r.dataset.id==="C"?"CY":r.dataset.id;if(r.dataset.id==="all"){s.stopPropagation(),li();return}Za[a]&&vd(a)&&(s.stopPropagation(),Ua(a))},!0)})}let Ai=null,Ri=0,Ps=null;function Sy(){const n=document.createElement("div");n.id="rg",n.className="rg",n.hidden=!0,n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-labelledby","rg-title"),n.innerHTML=`<div class="rg-card">
    <div class="rg-top"><button class="rg-back" id="rg-back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 6l-6 6 6 6"/></svg><span>Back to plan</span></button>
      <div class="rg-tt"><div class="rg-k" id="rg-k"></div><h2 id="rg-title"></h2></div><button class="rg-x" id="rg-x" aria-label="Close room views">×</button></div>
    <div class="rg-stage" data-ptr-ignore><button class="rg-nav prev" id="rg-prev" aria-label="Previous view">‹</button>
      <figure><div class="rg-img"><img id="rg-img" alt=""><div class="rg-load" id="rg-load">Unlocking image…</div></div><figcaption id="rg-cap"></figcaption></figure>
      <button class="rg-nav next" id="rg-next" aria-label="Next view">›</button></div>
    <div class="rg-thumbs" id="rg-thumbs" role="tablist" aria-label="Views"></div>
    <div class="rg-info"><div class="rg-meta" id="rg-meta"></div><p id="rg-notes"></p><p class="rg-fin" id="rg-fin"></p>
      <p class="rg-prov">AI-generated concept image (Nov 8, 2026) from the room size and agreed finishes. Not a photo or a construction drawing.</p></div></div>`,document.body.appendChild(n),ht("rg-back").onclick=li,ht("rg-x").onclick=li,ht("rg-prev").onclick=()=>ar(-1),ht("rg-next").onclick=()=>ar(1),n.addEventListener("click",i=>{i.target===n&&li()}),document.addEventListener("keydown",i=>{n.hidden||(i.key==="Escape"?li():i.key==="ArrowLeft"?ar(-1):i.key==="ArrowRight"&&ar(1))});let e=null;const t=n.querySelector(".rg-stage");t.addEventListener("touchstart",i=>{e=i.touches[0].clientX},{passive:!0}),t.addEventListener("touchend",i=>{if(e==null)return;const s=i.changedTouches[0].clientX-e;Math.abs(s)>45&&ar(s<0?1:-1),e=null})}const qo=new Map;function Md(n){return qo.has(n)||qo.set(n,window.mwEncUrl(n)),qo.get(n)}function Ua(n){const e=vd(n),t=Za[n];if(!e||!t)return;Ai={id:n,it:e,views:t},Ri=0,Ps=document.activeElement;const i=!e.proposed&&at.rooms.includes(e);ht("rg-k").textContent=e.proposed?"PROPOSED · NOT IN THE PLAN YET":`${i?"ROOM "+e.id+" · ":""}${(e.wing||"").toUpperCase()}`,ht("rg-title").textContent=e.name;const s=i?`${Xo(e.x1-e.x0)} × ${Xo(e.y1-e.y0)}`:e.sizeText;ht("rg-meta").innerHTML=`<span><b>Size</b>${Li(s)}</span>`+(i?`<span><b>Area</b>${e.area} SF</span><span><b>Ceiling</b>${Xo(e.h)}</span>`:"")+(i&&e.floorName?`<span class="wide"><b>Floor</b>${Li(e.floorName)}</span>`:""),ht("rg-notes").textContent=e.notes||"",ht("rg-fin").innerHTML=e.fin?`<b>Finishes</b> ${Li(e.fin)}`:"",ht("rg-thumbs").innerHTML=t.map((r,a)=>`<button role="tab" data-i="${a}" aria-label="View ${a+1}: ${Li(r.c)}"><img alt="" data-f="${r.f}"><span>${Li(r.c)}</span></button>`).join(""),ht("rg-thumbs").querySelectorAll("button").forEach(r=>r.onclick=()=>Hl(+r.dataset.i)),ht("rg-thumbs").querySelectorAll("img").forEach(r=>Md(r.dataset.f).then(a=>{r.src=a}).catch(()=>{})),document.querySelectorAll(".p2 [data-room]").forEach(r=>r.classList.toggle("on",r.dataset.room===n)),ht("rg").hidden=!1,document.body.classList.add("rg-open"),Hl(0),ht("rg-x").focus()}function Hl(n){if(!Ai)return;const e=Ai.views.length;Ri=(n+e)%e;const t=Ai.views[Ri],i=ht("rg-img"),s=ht("rg-load");i.removeAttribute("src"),i.alt=`${Ai.it.name}: ${t.c}`,s.hidden=!1,s.textContent="Unlocking image…",ht("rg-cap").textContent=`View ${Ri+1} of ${e} · ${t.c}`;const r=t.f;Md(r).then(a=>{Ai&&Ai.views[Ri].f===r&&(i.src=a,s.hidden=!0)}).catch(()=>{s.textContent='This image could not be unlocked. Re-open the page and enter the password with "Remember this device" on.'}),ht("rg-thumbs").querySelectorAll("button").forEach((a,o)=>{a.classList.toggle("on",o===Ri),a.setAttribute("aria-selected",o===Ri)}),ht("rg-prev").hidden=ht("rg-next").hidden=e<2}function ar(n){Hl(Ri+n)}function li(){var n;ht("rg").hidden||(ht("rg").hidden=!0,document.body.classList.remove("rg-open"),Ai=null,(n=Ps==null?void 0:Ps.focus)==null||n.call(Ps))}function wy(){const n=document.createElement("nav");n.className="bnav",n.setAttribute("aria-label","App");const e={home:'<path d="M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10"/>',rep:'<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/>',ask:'<path d="M4 5h16v11H9l-5 4z"/>',more:'<circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/>'};n.innerHTML=[["home","Home"],["rep","Reports"],["ask","Ask"],["more","More"]].map(([i,s])=>`<button data-nav="${i}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${e[i]}</svg><span>${s}</span></button>`).join(""),document.body.appendChild(n),document.body.classList.add("has-bnav");const t=i=>n.querySelector(`[data-nav="${i}"]`);t("home").classList.add("on"),t("home").onclick=()=>{li(),ht("modal").hidden=!0,Lr(!0)},t("rep").onclick=()=>{li(),ht("btn-drawings").click()},t("ask").onclick=()=>{const i=document.querySelector(".mw-chat-btn");i?i.click():t("ask").disabled=!0},t("more").onclick=()=>{li();const i=ht("modal-body");ht("modal-title").textContent="More",ht("modal").hidden=!1,i.innerHTML='<div class="more-list"><button data-m="3d">3D model + walk-through</button><button data-m="about">About this model</button><a href="https://webermanapps.github.io/blueprint-dashboard/" target="_blank" rel="noopener">Blueprint Dashboard ↗</a></div>',i.querySelector('[data-m="3d"]').onclick=()=>{ht("modal").hidden=!0,document.querySelector('#mode-seg [data-mode="orbit"]').click()},i.querySelector('[data-m="about"]').onclick=()=>ht("btn-about").click()},setTimeout(()=>{document.querySelector(".mw-chat-btn")||(t("ask").hidden=!0)},4e3)}vy();by();Sy();wy();Lr(!0);window.__p2={openGallery:Ua,closeGallery:li,showPlan:Lr};
