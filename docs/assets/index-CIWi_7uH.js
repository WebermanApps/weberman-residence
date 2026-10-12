(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tl="186",ri={ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cd=0,pc=1,hd=2,er=1,ud=2,Js=3,$i=0,hn=1,bn=2,ai=0,tr=1,mc=2,gc=3,xc=4,dd=5,vs=100,fd=101,pd=102,md=103,gd=104,xd=200,_d=201,yd=202,vd=203,Gh=204,Vh=205,bd=206,Sd=207,Md=208,wd=209,Ed=210,Td=211,Ad=212,Rd=213,Cd=214,Do=0,Io=1,No=2,lr=3,Uo=4,Oo=5,Fo=6,ko=7,Wh=0,Pd=1,Ld=2,qn=0,Xh=1,qh=2,Yh=3,Al=4,$h=5,Kh=6,Zh=7,Jh=300,Ki=301,Cs=302,Ha=303,Ga=304,Ea=306,fa=1e3,ii=1001,Bo=1002,Xt=1003,Dd=1004,wr=1005,Qt=1006,Va=1007,Bi=1008,_n=1009,Qh=1010,jh=1011,cr=1012,Rl=1013,$n=1014,In=1015,Kn=1016,Cl=1017,Pl=1018,hr=1020,eu=35902,tu=35899,nu=1021,iu=1022,Nn=1023,hi=1026,zi=1027,Ll=1028,Dl=1029,Zi=1030,Il=1031,Nl=1033,aa=33776,oa=33777,la=33778,ca=33779,zo=35840,Ho=35841,Go=35842,Vo=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,$o=37489,pa=37490,Ko=37491,Zo=37808,Jo=37809,Qo=37810,jo=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,ma=36285,ml=36286,Id=3200,gl=0,Nd=1,bi="",ln="srgb",ga="srgb-linear",xa="linear",xt="srgb",Wa=7680,Ud=519,Od=512,Fd=513,kd=514,Ul=515,Bd=516,zd=517,Ol=518,Hd=519,Gd=35044,_c="300 es",Xn=2e3,ur=2001;function Vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wd(){const n=dr("canvas");return n.style.display="block",n}const yc={};function vc(...n){const e="THREE."+n.shift();console.log(e,...n)}function su(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=su(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=su(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ms(...n){const e=n.join(" ");e in yc||(yc[e]=!0,Ve(...n))}function Xd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const qd={[Do]:Io,[No]:Fo,[Uo]:ko,[lr]:Oo,[Io]:Do,[Fo]:No,[ko]:Uo,[Oo]:lr};class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const ws=Math.PI/180,fr=180/Math.PI;function es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Fl(n,e){return(n%e+e)%e}function Yd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function $d(n,e,t){return n!==e?(t-n)/(e-n):0}function nr(n,e,t){return(1-t)*n+t*e}function Kd(n,e,t,i){return nr(n,e,1-Math.exp(-t*i))}function Zd(n,e=1){return e-Math.abs(Fl(n,e*2)-e)}function Jd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function jd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ef(n,e){return n+Math.random()*(e-n)}function tf(n){return n*(.5-Math.random())}function nf(n){n!==void 0&&(bc=n);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sf(n){return n*ws}function rf(n){return n*fr}function af(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function of(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function lf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cf(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),h=r((e+i)/2),c=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*c,l*u,l*d,o*h);break;case"YZY":n.set(l*d,o*c,l*u,o*h);break;case"ZXZ":n.set(l*u,l*d,o*c,o*h);break;case"XZX":n.set(o*c,l*p,l*f,o*h);break;case"YXY":n.set(l*f,o*c,l*p,o*h);break;case"ZYZ":n.set(l*p,l*f,o*c,o*h);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ru={DEG2RAD:ws,RAD2DEG:fr,generateUUID:es,clamp:et,euclideanModulo:Fl,mapLinear:Yd,inverseLerp:$d,lerp:nr,damp:Kd,pingpong:Zd,smoothstep:Jd,smootherstep:Qd,randInt:jd,randFloat:ef,randFloatSpread:tf,seededRandom:nf,degToRad:sf,radToDeg:rf,isPowerOfTwo:af,ceilPowerOfTwo:of,floorPowerOfTwo:lf,setQuaternionFromProperEuler:cf,normalize:rn,denormalize:bs},jl=class jl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jl.prototype.isVector2=!0;let re=jl;class Tn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==d||h!==f||c!==p){let g=l*d+h*f+c*p+u*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),A=Math.sin(S);m=Math.sin(m*S)/A,o=Math.sin(o*S)/A,l=l*m+d*o,h=h*m+f*o,c=c*m+p*o,u=u*m+_*o}else{l=l*m+d*o,h=h*m+f*o,c=c*m+p*o,u=u*m+_*o;const S=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=S,h*=S,c*=S,u*=S}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+c*u+l*f-h*d,e[t+1]=l*p+c*d+h*u-o*f,e[t+2]=h*p+c*f+o*d-l*u,e[t+3]=c*p-o*u-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*f*p,this._y=h*f*u-d*c*p,this._z=h*c*p+d*f*u,this._w=h*c*u-d*f*p;break;case"YXZ":this._x=d*c*u+h*f*p,this._y=h*f*u-d*c*p,this._z=h*c*p-d*f*u,this._w=h*c*u+d*f*p;break;case"ZXY":this._x=d*c*u-h*f*p,this._y=h*f*u+d*c*p,this._z=h*c*p+d*f*u,this._w=h*c*u-d*f*p;break;case"ZYX":this._x=d*c*u-h*f*p,this._y=h*f*u+d*c*p,this._z=h*c*p-d*f*u,this._w=h*c*u+d*f*p;break;case"YZX":this._x=d*c*u+h*f*p,this._y=h*f*u+d*c*p,this._z=h*c*p-d*f*u,this._w=h*c*u-d*f*p;break;case"XZY":this._x=d*c*u-h*f*p,this._y=h*f*u-d*c*p,this._z=h*c*p+d*f*u,this._w=h*c*u+d*f*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+s*h-r*l,this._y=s*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-s*o,this._w=a*c-i*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const h=Math.acos(o),c=Math.sin(h);l=Math.sin(l*h)/c,t=Math.sin(t*h)/c,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ec=class ec{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*i),c=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=s+l*u+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ec.prototype.isVector3=!0;let F=ec;const Xa=new F,Sc=new Tn,tc=class tc{constructor(e,t,i,s,r,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,h)}set(e,t,i,s,r,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],S=s[1],A=s[4],b=s[7],T=s[2],R=s[5],C=s[8];return r[0]=a*_+o*S+l*T,r[3]=a*g+o*A+l*R,r[6]=a*m+o*b+l*C,r[1]=h*_+c*S+u*T,r[4]=h*g+c*A+u*R,r[7]=h*m+c*b+u*C,r[2]=d*_+f*S+p*T,r[5]=d*g+f*A+p*R,r[8]=d*m+f*b+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+s*r*h-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*r,f=h*r-a*l,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(s*h-c*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(c*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-h*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qa.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tc.prototype.isMatrix3=!0;let Ze=tc;const qa=new Ze,Mc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){const n={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ga]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:Mc,fromXYZ:wc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Mc,fromXYZ:wc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const at=hf();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class uf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=dr("canvas")),is.width=e.width,is.height=e.height;const s=is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let df=0;class kl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ya(s[a].image)):r.push(Ya(s[a]))}else r=Ya(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let ff=0;const $a=new F;class Yt extends Ri{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=ii,s=ii,r=Qt,a=Bi,o=Nn,l=_n,h=Yt.DEFAULT_ANISOTROPY,c=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=es(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Jh;Yt.DEFAULT_ANISOTROPY=1;const nc=class nc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,b=(f+1)/2,T=(m+1)/2,R=(c+d)/4,C=(u+_)/4,v=(p+g)/4;return A>b&&A>T?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=R/i,r=C/i):b>T?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=R/s,r=v/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=v/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-_)/S,this.z=(d-c)/S,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nc.prototype.isVector4=!0;let Ct=nc;class pf extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Yt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new kl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends pf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class au extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mf extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wa=class wa{constructor(e,t,i,s,r,a,o,l,h,c,u,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,h,c,u,d,f,p,_,g)}set(e,t,i,s,r,a,o,l,h,c,u,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=c,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*c,f=a*u,p=o*c,_=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=f+p*h,t[5]=d-_*h,t[9]=-o*l,t[2]=_-d*h,t[6]=p+f*h,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,f=l*u,p=h*c,_=h*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,f=l*u,p=h*c,_=h*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*c,t[9]=_-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,f=a*u,p=o*c,_=o*u;t[0]=l*c,t[4]=p*h-f,t[8]=d*h+_,t[1]=l*u,t[5]=_*h+d,t[9]=f*h-p,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*h,p=o*l,_=o*h;t[0]=l*c,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*h,p=o*l,_=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+_,t[5]=a*c,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*c,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,xf)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),mi.crossVectors(i,pn),mi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),mi.crossVectors(i,pn)),mi.normalize(),Er.crossVectors(pn,mi),s[0]=mi.x,s[4]=Er.x,s[8]=pn.x,s[1]=mi.y,s[5]=Er.y,s[9]=pn.y,s[2]=mi.z,s[6]=Er.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],S=i[3],A=i[7],b=i[11],T=i[15],R=s[0],C=s[4],v=s[8],w=s[12],N=s[1],O=s[5],x=s[9],I=s[13],L=s[2],D=s[6],G=s[10],H=s[14],J=s[3],U=s[7],k=s[11],q=s[15];return r[0]=a*R+o*N+l*L+h*J,r[4]=a*C+o*O+l*D+h*U,r[8]=a*v+o*x+l*G+h*k,r[12]=a*w+o*I+l*H+h*q,r[1]=c*R+u*N+d*L+f*J,r[5]=c*C+u*O+d*D+f*U,r[9]=c*v+u*x+d*G+f*k,r[13]=c*w+u*I+d*H+f*q,r[2]=p*R+_*N+g*L+m*J,r[6]=p*C+_*O+g*D+m*U,r[10]=p*v+_*x+g*G+m*k,r[14]=p*w+_*I+g*H+m*q,r[3]=S*R+A*N+b*L+T*J,r[7]=S*C+A*O+b*D+T*U,r[11]=S*v+A*x+b*G+T*k,r[15]=S*w+A*I+b*H+T*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],S=l*f-h*d,A=o*f-h*u,b=o*d-l*u,T=a*f-h*c,R=a*d-l*c,C=a*u-o*c;return t*(_*S-g*A+m*b)-i*(p*S-g*T+m*R)+s*(p*A-_*T+m*C)-r*(p*b-_*R+g*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10];return t*(a*c-o*h)-i*(r*c-o*l)+s*(r*h-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],S=t*o-i*a,A=t*l-s*a,b=t*h-r*a,T=i*l-s*o,R=i*h-r*o,C=s*h-r*l,v=c*_-u*p,w=c*g-d*p,N=c*m-f*p,O=u*g-d*_,x=u*m-f*_,I=d*m-f*g,L=S*I-A*x+b*O+T*N-R*w+C*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=(o*I-l*x+h*O)*D,e[1]=(s*x-i*I-r*O)*D,e[2]=(_*C-g*R+m*T)*D,e[3]=(d*R-u*C-f*T)*D,e[4]=(l*N-a*I-h*w)*D,e[5]=(t*I-s*N+r*w)*D,e[6]=(g*b-p*C-m*A)*D,e[7]=(c*C-d*b+f*A)*D,e[8]=(a*x-o*N+h*v)*D,e[9]=(i*N-t*x-r*v)*D,e[10]=(p*R-_*b+m*S)*D,e[11]=(u*b-c*R-f*S)*D,e[12]=(o*w-a*O-l*v)*D,e[13]=(t*O-i*w+s*v)*D,e[14]=(_*A-p*T-g*S)*D,e[15]=(c*T-u*A+d*S)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-s*l,h*l+s*o,0,h*o+s*l,c*o+i,c*l-s*a,0,h*l-s*o,c*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,u=o+o,d=r*h,f=r*c,p=r*u,_=a*c,g=a*u,m=o*u,S=l*h,A=l*c,b=l*u,T=i.x,R=i.y,C=i.z;return s[0]=(1-(_+m))*T,s[1]=(f+b)*T,s[2]=(p-A)*T,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(d+m))*R,s[6]=(g+S)*R,s[7]=0,s[8]=(p+A)*C,s[9]=(g-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ss.set(s[0],s[1],s[2]).length();const o=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);const h=1/a,c=1/o,u=1/l;return Cn.elements[0]*=h,Cn.elements[1]*=h,Cn.elements[2]*=h,Cn.elements[4]*=c,Cn.elements[5]*=c,Cn.elements[6]*=c,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Xn,l=!1){const h=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Xn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ur)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Xn,l=!1){const h=this.elements,c=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Xn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===ur)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=p,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};wa.prototype.isMatrix4=!0;let ot=wa;const ss=new F,Cn=new ot,gf=new F(0,0,0),xf=new F(1,1,1),mi=new F,Er=new F,pn=new F,Ec=new ot,Tc=new Tn;class wi{constructor(e=0,t=0,i=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _f=0;const Ac=new F,rs=new Tn,Jn=new ot,Tr=new F,Gs=new F,yf=new F,vf=new Tn,Rc=new F(1,0,0),Cc=new F(0,1,0),Pc=new F(0,0,1),Lc={type:"added"},bf={type:"removed"},as={type:"childadded",child:null},Ka={type:"childremoved",child:null};class Ft extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new F,t=new wi,i=new Tn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Cc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Cc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Tr.copy(e):Tr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Gs,Tr,this.up):Jn.lookAt(Tr,Gs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Jn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),as.child=e,this.dispatchEvent(as),as.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bf),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new F(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hi extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sf={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(h,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,p=.005;h.inputState.pinching&&d>f+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Fl(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ja(a,r,e+1/3),this.g=Ja(a,r,e),this.b=Ja(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=ou[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return at.workingToColorSpace(Zt.copy(this),e),Math.round(et(Zt.r*255,0,255))*65536+Math.round(et(Zt.g*255,0,255))*256+Math.round(et(Zt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=ln){at.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Ar);const i=nr(gi.h,Ar.h,t),s=nr(gi.s,Ar.s,t),r=nr(gi.l,Ar.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ye;Ye.NAMES=ou;class zl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=i}clone(){return new zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Mf extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pn=new F,Qn=new F,Qa=new F,jn=new F,os=new F,ls=new F,Dc=new F,ja=new F,eo=new F,to=new F,no=new Ct,io=new Ct,so=new Ct;class Sn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),Qn.subVectors(i,t),Qa.subVectors(e,t);const a=Pn.dot(Pn),o=Pn.dot(Qn),l=Pn.dot(Qa),h=Qn.dot(Qn),c=Qn.dot(Qa),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*l-o*c)*d,p=(a*c-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(e,t),io.fromBufferAttribute(e,i),so.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(no,r.x),a.addScaledVector(io,r.y),a.addScaledVector(so,r.z),a}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),Qn.subVectors(e,t),Pn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Pn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,i),ls.subVectors(r,i),ja.subVectors(e,i);const l=os.dot(ja),h=ls.dot(ja);if(l<=0&&h<=0)return t.copy(i);eo.subVectors(e,s);const c=os.dot(eo),u=ls.dot(eo);if(c>=0&&u<=c)return t.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(os,a);to.subVectors(e,r);const f=os.dot(to),p=ls.dot(to);if(p>=0&&f<=p)return t.copy(r);const _=f*h-l*p;if(_<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(i).addScaledVector(ls,o);const g=c*p-f*u;if(g<=0&&u-c>=0&&f-p>=0)return Dc.subVectors(r,s),o=(u-c)/(u-c+(f-p)),t.copy(s).addScaledVector(Dc,o);const m=1/(g+_+d);return a=_*m,o=d*m,t.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ci{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Cr.subVectors(this.max,Vs),cs.subVectors(e.a,Vs),hs.subVectors(e.b,Vs),us.subVectors(e.c,Vs),xi.subVectors(hs,cs),_i.subVectors(us,hs),Ii.subVectors(cs,us);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Ii.z,Ii.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Ii.z,0,-Ii.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Ii.y,Ii.x,0];return!ro(t,cs,hs,us,Cr)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,cs,hs,us,Cr))?!1:(Pr.crossVectors(xi,_i),t=[Pr.x,Pr.y,Pr.z],ro(t,cs,hs,us,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new F,new F,new F,new F,new F,new F,new F,new F],Ln=new F,Rr=new Ci,cs=new F,hs=new F,us=new F,xi=new F,_i=new F,Ii=new F,Vs=new F,Cr=new F,Pr=new F,Ni=new F;function ro(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ni.fromArray(n,r);const o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),h=t.dot(Ni),c=i.dot(Ni);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Ot=new F,Lr=new re;let wf=0;class en extends Ri{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gd,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class lu extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cu extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ef=new Ci,Ws=new F,ao=new F;class Fs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ef.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(ao)),this.expandByPoint(Ws.copy(e.center).sub(ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tf=0;const vn=new ot,oo=new Ft,ds=new F,mn=new Ci,Xs=new Ci,Vt=new F;class Lt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?cu:lu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(mn.min,Xs.min),mn.expandByPoint(Vt),Vt.addVectors(mn.max,Xs.max),mn.expandByPoint(Vt)):(mn.expandByPoint(Xs.min),mn.expandByPoint(Xs.max))}mn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Vt.fromBufferAttribute(o,h),l&&(ds.fromBufferAttribute(e,h),Vt.add(ds)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new en(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new F,l[v]=new F;const h=new F,c=new F,u=new F,d=new re,f=new re,p=new re,_=new F,g=new F;function m(v,w,N){h.fromBufferAttribute(i,v),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,N),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,N),c.sub(h),u.sub(h),f.sub(d),p.sub(d);const O=1/(f.x*p.y-p.x*f.y);isFinite(O)&&(_.copy(c).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(O),g.copy(u).multiplyScalar(f.x).addScaledVector(c,-p.x).multiplyScalar(O),o[v].add(_),o[w].add(_),o[N].add(_),l[v].add(g),l[w].add(g),l[N].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const N=S[v],O=N.start,x=N.count;for(let I=O,L=O+x;I<L;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const A=new F,b=new F,T=new F,R=new F;function C(v){T.fromBufferAttribute(s,v),R.copy(T);const w=o[v];A.copy(w),A.sub(T.multiplyScalar(T.dot(w))).normalize(),b.crossVectors(R,w);const O=b.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,O)}for(let v=0,w=S.length;v<w;++v){const N=S[v],O=N.start,x=N.count;for(let I=O,L=O+x;I<L;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,h=new F,c=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,g),o.add(c),l.add(c),h.add(c),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let m=0;m<c;m++)d[p++]=h[f++]}return new en(d,c,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],h=e(l,i);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new F,Af=new F,Rf=new Ze;class Dn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=lo.subVectors(i,t).cross(Af.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(lo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Rf.getNormalMatrix(e),s=this.coplanarPoint(lo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Cf=0;class ks extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=tr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Dn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ti=new F,co=new F,Dr=new F,Ir=new F;class Ta{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){co.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(co);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=Ir.dot(this.direction),l=-Ir.dot(Dr),h=Ir.lengthSq(),c=Math.abs(1-a*a);let u,d,f,p;if(c>0)if(u=a*l-o,d=a*o-l,p=r*c,u>=0)if(d>=-p)if(d<=p){const _=1/c;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(co).addScaledVector(Dr,d),f}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,h=o.y,c=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=i.x-a.x,S=i.y-a.y,A=i.z-a.z,b=Math.abs(l),T=Math.abs(h),R=Math.abs(c);let C,v,w,N,O,x,I,L,D,G,H,J;if(b>=T&&b>=R?(w=l,x=u,D=p,J=m,l>=0?(C=h,v=c,N=d,O=f,I=_,L=g,G=S,H=A):(C=c,v=h,N=f,O=d,I=g,L=_,G=A,H=S)):T>=R?(w=h,x=d,D=_,J=S,h>=0?(C=c,v=l,N=f,O=u,I=g,L=p,G=A,H=m):(C=l,v=c,N=u,O=f,I=p,L=g,G=m,H=A)):(w=c,x=f,D=g,J=A,c>=0?(C=l,v=h,N=u,O=d,I=p,L=_,G=m,H=S):(C=h,v=l,N=d,O=u,I=_,L=p,G=S,H=m)),w===0)return null;const U=C/w,k=v/w,q=1/w,ue=N-U*x,fe=O-k*x,$e=I-U*D,Je=L-k*D,it=G-U*J,Q=H-k*J,ie=it*Je-Q*$e,Se=ue*Q-fe*it,We=$e*fe-Je*ue;if(s){if(ie<0||Se<0||We<0)return null}else if((ie<0||Se<0||We<0)&&(ie>0||Se>0||We>0))return null;const Ae=ie+Se+We;if(Ae===0)return null;const Xe=q*(ie*x+Se*D+We*J);return(Ae>0?Xe<0:Xe>0)?null:this.at(Xe/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pi extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ic=new ot,Ui=new Ta,Nr=new Fs,Nc=new F,Ur=new F,Or=new F,Fr=new F,ho=new F,kr=new F,Uc=new F,Br=new F;class Nt extends Ft{constructor(e=new Lt,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=o[l],u=r[l];c!==0&&(ho.fromBufferAttribute(u,e),a?kr.addScaledVector(ho,c):kr.addScaledVector(ho.sub(t),c))}t.add(kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Nr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Nr,Nc)===null||Ui.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Ic.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Ic),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),A=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,T=A;b<T;b+=3){const R=o.getX(b),C=o.getX(b+1),v=o.getX(b+2);s=zr(this,m,e,i,h,c,u,R,C,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const S=o.getX(g),A=o.getX(g+1),b=o.getX(g+2);s=zr(this,a,e,i,h,c,u,S,A,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),A=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,T=A;b<T;b+=3){const R=b,C=b+1,v=b+2;s=zr(this,m,e,i,h,c,u,R,C,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const S=g,A=g+1,b=g+2;s=zr(this,a,e,i,h,c,u,S,A,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Pf(n,e,t,i,s,r,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===$i,o),l===null)return null;Br.copy(o),Br.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Br);return h<t.near||h>t.far?null:{distance:h,point:Br.clone(),object:n}}function zr(n,e,t,i,s,r,a,o,l,h){n.getVertexPosition(o,Ur),n.getVertexPosition(l,Or),n.getVertexPosition(h,Fr);const c=Pf(n,e,t,i,Ur,Or,Fr,Uc);if(c){const u=new F;Sn.getBarycoord(Uc,Ur,Or,Fr,u),s&&(c.uv=Sn.getInterpolatedAttribute(s,o,l,h,u,new re)),r&&(c.uv1=Sn.getInterpolatedAttribute(r,o,l,h,u,new re)),a&&(c.normal=Sn.getInterpolatedAttribute(a,o,l,h,u,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:h,normal:new F,materialIndex:0};Sn.getNormal(Ur,Or,Fr,d.normal),c.face=d,c.barycoord=u}return c}class hu extends Yt{constructor(e=null,t=1,i=1,s,r,a,o,l,h=Xt,c=Xt,u,d){super(null,a,o,l,h,c,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oc extends en{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new ot,Fc=new ot,Hr=[],kc=new Ci,Lf=new ot,qs=new Nt,Ys=new Fs;class Si extends Nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Lf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fs),kc.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(kc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fs),Ys.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),Fc.multiplyMatrices(i,fs),qs.matrixWorld=Fc,qs.raycast(e,Hr);for(let a=0,o=Hr.length;a<o;a++){const l=Hr[a];l.instanceId=r,l.object=this,t.push(l)}Hr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hu(new Float32Array(s*this.count),s,this.count,Ll,In));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oi=new Fs,Df=new re(.5,.5),Gr=new F;class Hl{constructor(e=new Dn,t=new Dn,i=new Dn,s=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],S=r[12],A=r[13],b=r[14],T=r[15];if(s[0].setComponents(h-a,f-c,m-p,T-S).normalize(),s[1].setComponents(h+a,f+c,m+p,T+S).normalize(),s[2].setComponents(h+o,f+u,m+_,T+A).normalize(),s[3].setComponents(h-o,f-u,m-_,T-A).normalize(),i)s[4].setComponents(l,d,g,b).normalize(),s[5].setComponents(h-l,f-d,m-g,T-b).normalize();else if(s[4].setComponents(h-l,f-d,m-g,T-b).normalize(),t===Xn)s[5].setComponents(h+l,f+d,m+g,T+b).normalize();else if(t===ur)s[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){Oi.center.set(0,0,0);const t=Df.distanceTo(e.center);return Oi.radius=.7071067811865476+t,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Gr.x=s.normal.x>0?e.max.x:e.min.x,Gr.y=s.normal.y>0?e.max.y:e.min.y,Gr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class br extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _a=new F,ya=new F,Bc=new ot,$s=new Ta,Vr=new Fs,uo=new F,zc=new F;class If extends Ft{constructor(e=new Lt,t=new br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_a.fromBufferAttribute(t,s-1),ya.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_a.distanceTo(ya);e.setAttribute("lineDistance",new ht(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Bc.copy(s).invert(),$s.copy(e.ray).applyMatrix4(Bc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=h){const m=c.getX(_),S=c.getX(_+1),A=Wr(this,e,$s,l,m,S,_);A&&t.push(A)}if(this.isLineLoop){const _=c.getX(p-1),g=c.getX(f),m=Wr(this,e,$s,l,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=h){const m=Wr(this,e,$s,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Wr(this,e,$s,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wr(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(_a.fromBufferAttribute(o,s),ya.fromBufferAttribute(o,r),t.distanceSqToSegment(_a,ya,uo,zc)>i)return;uo.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(uo);if(!(h<e.near||h>e.far))return{distance:h,point:zc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Hc=new F,Gc=new F;class Gl extends If{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Hc.fromBufferAttribute(t,s),Gc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Hc.distanceTo(Gc);e.setAttribute("lineDistance",new ht(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uu extends Yt{constructor(e=[],t=Ki,i,s,r,a,o,l,h,c){super(e,t,i,s,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nf extends Yt{constructor(e,t,i,s,r,a,o,l,h){super(e,t,i,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pr extends Yt{constructor(e,t,i=$n,s,r,a,o=Xt,l=Xt,h,c=hi,u=1){if(c!==hi&&c!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Uf extends pr{constructor(e,t=$n,i=Ki,s,r,a=Xt,o=Xt,l,h=hi){const c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,s,r,a,o,l,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class du extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class An extends Lt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2));function p(_,g,m,S,A,b,T,R,C,v,w){const N=b/C,O=T/v,x=b/2,I=T/2,L=R/2,D=C+1,G=v+1;let H=0,J=0;const U=new F;for(let k=0;k<G;k++){const q=k*O-I;for(let ue=0;ue<D;ue++){const fe=ue*N-x;U[_]=fe*S,U[g]=q*A,U[m]=L,h.push(U.x,U.y,U.z),U[_]=0,U[g]=0,U[m]=R>0?1:-1,c.push(U.x,U.y,U.z),u.push(ue/C),u.push(1-k/v),H+=1}}for(let k=0;k<v;k++)for(let q=0;q<C;q++){const ue=d+q+D*k,fe=d+q+D*(k+1),$e=d+(q+1)+D*(k+1),Je=d+(q+1)+D*k;l.push(ue,fe,Je),l.push(fe,$e,Je),J+=6}o.addGroup(f,J,w),f+=J,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cn extends Lt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],f=[];let p=0;const _=[],g=i/2;let m=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(c),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function S(){const b=new F,T=new F;let R=0;const C=(t-e)/i;for(let v=0;v<=r;v++){const w=[],N=v/r,O=N*(t-e)+e;for(let x=0;x<=s;x++){const I=x/s,L=I*l+o,D=Math.sin(L),G=Math.cos(L);T.x=O*D,T.y=-N*i+g,T.z=O*G,u.push(T.x,T.y,T.z),b.set(D,C,G).normalize(),d.push(b.x,b.y,b.z),f.push(I,1-N),w.push(p++)}_.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){const N=_[w][v],O=_[w+1][v],x=_[w+1][v+1],I=_[w][v+1];(e>0||w!==0)&&(c.push(N,O,I),R+=3),(t>0||w!==r-1)&&(c.push(O,x,I),R+=3)}h.addGroup(m,R,0),m+=R}function A(b){const T=p,R=new re,C=new F;let v=0;const w=b===!0?e:t,N=b===!0?1:-1;for(let x=1;x<=s;x++)u.push(0,g*N,0),d.push(0,N,0),f.push(.5,.5),p++;const O=p;for(let x=0;x<=s;x++){const L=x/s*l+o,D=Math.cos(L),G=Math.sin(L);C.x=w*G,C.y=g*N,C.z=w*D,u.push(C.x,C.y,C.z),d.push(0,N,0),R.x=D*.5+.5,R.y=G*.5*N+.5,f.push(R.x,R.y),p++}for(let x=0;x<s;x++){const I=T+x,L=O+x;b===!0?c.push(L,L+1,I):c.push(L+1,L,I),v+=3}h.addGroup(m,v,b===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ts extends cn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ts(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Aa extends Lt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),h(i),c(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const A=new F,b=new F,T=new F;for(let R=0;R<t.length;R+=3)f(t[R+0],A),f(t[R+1],b),f(t[R+2],T),l(A,b,T,S)}function l(S,A,b,T){const R=T+1,C=[];for(let v=0;v<=R;v++){C[v]=[];const w=S.clone().lerp(b,v/R),N=A.clone().lerp(b,v/R),O=R-v;for(let x=0;x<=O;x++)x===0&&v===R?C[v][x]=w:C[v][x]=w.clone().lerp(N,x/O)}for(let v=0;v<R;v++)for(let w=0;w<2*(R-v)-1;w++){const N=Math.floor(w/2);w%2===0?(d(C[v][N+1]),d(C[v+1][N]),d(C[v][N])):(d(C[v][N+1]),d(C[v+1][N+1]),d(C[v+1][N]))}}function h(S){const A=new F;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(S),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function c(){const S=new F;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];const b=g(S)/2/Math.PI+.5,T=m(S)/Math.PI+.5;a.push(b,1-T)}p(),u()}function u(){for(let S=0;S<a.length;S+=6){const A=a[S+0],b=a[S+2],T=a[S+4],R=Math.max(A,b,T),C=Math.min(A,b,T);R>.9&&C<.1&&(A<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,A){const b=S*3;A.x=e[b+0],A.y=e[b+1],A.z=e[b+2]}function p(){const S=new F,A=new F,b=new F,T=new F,R=new re,C=new re,v=new re;for(let w=0,N=0;w<r.length;w+=9,N+=6){S.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),R.set(a[N+0],a[N+1]),C.set(a[N+2],a[N+3]),v.set(a[N+4],a[N+5]),T.copy(S).add(A).add(b).divideScalar(3);const O=g(T);_(R,N+0,S,O),_(C,N+2,A,O),_(v,N+4,b,O)}}function _(S,A,b,T){T<0&&S.x===1&&(a[A]=S.x-1),b.x===0&&b.z===0&&(a[A]=T/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.vertices,e.indices,e.radius,e.detail)}}class Ra extends Aa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ra(e.radius,e.detail)}}const Xr=new F,qr=new F,fo=new F,Yr=new Sn;class fu extends Lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(ws*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(h[0]=a.getX(p),h[1]=a.getX(p+1),h[2]=a.getX(p+2)):(h[0]=p,h[1]=p+1,h[2]=p+2);const{a:_,b:g,c:m}=Yr;if(_.fromBufferAttribute(o,h[0]),g.fromBufferAttribute(o,h[1]),m.fromBufferAttribute(o,h[2]),Yr.getNormal(fo),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const A=(S+1)%3,b=u[S],T=u[A],R=Yr[c[S]],C=Yr[c[A]],v=`${b}_${T}`,w=`${T}_${b}`;w in d&&d[w]?(fo.dot(d[w].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(C.x,C.y,C.z)),d[w]=null):v in d||(d[v]={index0:h[S],index1:h[A],normal:fo.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];Xr.fromBufferAttribute(o,_),qr.fromBufferAttribute(o,g),f.push(Xr.x,Xr.y,Xr.z),f.push(qr.x,qr.y,qr.z)}this.setAttribute("position",new ht(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const c=i[s],d=i[s+1]-c,f=(a-c)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new F,s=[],r=[],a=[],o=new F,l=new ot;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new F)}r[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vl extends Zn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Of extends Vl{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,f*=c,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Vc=new F,Wc=new F,po=new Wl,mo=new Wl,go=new Wl;class Ff extends Zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=s[(o-1)%r]:(Wc.subVectors(s[0],s[1]).add(s[0]),h=Wc);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(Vc.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Vc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(h.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(c),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),po.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,p,_,g),mo.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,p,_,g),go.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,p,_,g)}else this.curveType==="catmullrom"&&(po.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),mo.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),go.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return i.set(po.calc(l),mo.calc(l),go.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xc(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function kf(n,e){const t=1-n;return t*t*e}function Bf(n,e){return 2*(1-n)*n*e}function zf(n,e){return n*n*e}function ir(n,e,t,i){return kf(n,e)+Bf(n,t)+zf(n,i)}function Hf(n,e){const t=1-n;return t*t*t*e}function Gf(n,e){const t=1-n;return 3*t*t*n*e}function Vf(n,e){return 3*(1-n)*n*n*e}function Wf(n,e){return n*n*n*e}function sr(n,e,t,i,s){return Hf(n,e)+Gf(n,t)+Vf(n,i)+Wf(n,s)}class pu extends Zn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(sr(e,s.x,r.x,a.x,o.x),sr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xf extends Zn{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(sr(e,s.x,r.x,a.x,o.x),sr(e,s.y,r.y,a.y,o.y),sr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mu extends Zn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qf extends Zn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends Zn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ir(e,s.x,r.x,a.x),ir(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yf extends Zn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ir(e,s.x,r.x,a.x),ir(e,s.y,r.y,a.y),ir(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xu extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],c=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Xc(o,l.x,h.x,c.x,u.x),Xc(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var xl=Object.freeze({__proto__:null,ArcCurve:Of,CatmullRomCurve3:Ff,CubicBezierCurve:pu,CubicBezierCurve3:Xf,EllipseCurve:Vl,LineCurve:mu,LineCurve3:qf,QuadraticBezierCurve:gu,QuadraticBezierCurve3:Yf,SplineCurve:xu});class $f extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new xl[s.type]().fromJSON(s))}return this}}class qc extends $f{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new mu(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new gu(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new pu(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new xu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const h=new Vl(e,t,i,s,r,a,o,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ca extends qc{constructor(e){super(e),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new qc().fromJSON(s))}return this}}function Kf(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=_u(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,h;if(i&&(r=ep(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let c=o,u=l;for(let d=t;d<s;d+=t){const f=n[d],p=n[d+1];f<o&&(o=f),p<l&&(l=p),f>c&&(c=f),p>u&&(u=p)}h=Math.max(c-o,u-l),h=h!==0?32767/h:0}return mr(r,a,t,o,l,h,0),a}function _u(n,e,t,i,s){let r;if(s===up(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Yc(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Yc(a/i|0,n[a],n[a+1],r);return r&&Ps(r,r.next)&&(xr(r),r=r.next),r}function Ji(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ps(t,t.next)||Pt(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function mr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&rp(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,h=n.next;if(r?Jf(n,i,s,r):Zf(n)){e.push(l.i,n.i,h.i),xr(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=Qf(Ji(n),e),mr(n,e,t,i,s,r,2)):a===2&&jf(n,e,t,i,s,r):mr(Ji(n),e,t,i,s,r,1);break}}}function Zf(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=Math.min(s,r,a),u=Math.min(o,l,h),d=Math.max(s,r,a),f=Math.max(o,l,h);let p=i.next;for(;p!==e;){if(p.x>=c&&p.x<=d&&p.y>=u&&p.y<=f&&Qs(s,o,r,l,a,h,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jf(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Pt(s,r,a)>=0)return!1;const o=s.x,l=r.x,h=a.x,c=s.y,u=r.y,d=a.y,f=Math.min(o,l,h),p=Math.min(c,u,d),_=Math.max(o,l,h),g=Math.max(c,u,d),m=_l(f,p,e,t,i),S=_l(_,g,e,t,i);let A=n.prevZ,b=n.nextZ;for(;A&&A.z>=m&&b&&b.z<=S;){if(A.x>=f&&A.x<=_&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&Qs(o,c,l,u,h,d,A.x,A.y)&&Pt(A.prev,A,A.next)>=0||(A=A.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Qs(o,c,l,u,h,d,b.x,b.y)&&Pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;A&&A.z>=m;){if(A.x>=f&&A.x<=_&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&Qs(o,c,l,u,h,d,A.x,A.y)&&Pt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;b&&b.z<=S;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Qs(o,c,l,u,h,d,b.x,b.y)&&Pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Qf(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ps(i,s)&&vu(i,t,t.next,s)&&gr(i,s)&&gr(s,i)&&(e.push(i.i,t.i,s.i),xr(t),xr(t.next),t=n=s),t=t.next}while(t!==n);return Ji(t)}function jf(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lp(a,o)){let l=bu(a,o);a=Ji(a,a.next),l=Ji(l,l.next),mr(a,e,t,i,s,r,0),mr(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function ep(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,h=_u(n,o,l,i,!1);h===h.next&&(h.steiner=!0),s.push(op(h))}s.sort(tp);for(let r=0;r<s.length;r++)t=np(s[r],t);return t}function tp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function np(n,e){const t=ip(n,e);if(!t)return e;const i=bu(t,n);return Ji(i,i.next),Ji(t,t.next)}function ip(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(Ps(n,t))return t;do{if(Ps(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,h=a.y;let c=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&yu(s<h?i:r,s,l,h,s<h?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);gr(t,n)&&(u<c||u===c&&(t.x>a.x||t.x===a.x&&sp(a,t)))&&(a=t,c=u)}t=t.next}while(t!==o);return a}function sp(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function rp(n,e,t,i){let s=n;do s.z===0&&(s.z=_l(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ap(s)}function ap(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let h=0;h<t&&(o++,a=a.nextZ,!!a);h++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function _l(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function op(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function yu(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Qs(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&yu(n,e,t,i,s,r,a,o)}function lp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!cp(n,e)&&(gr(n,e)&&gr(e,n)&&hp(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||Ps(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ps(n,e){return n.x===e.x&&n.y===e.y}function vu(n,e,t,i){const s=Kr(Pt(n,e,t)),r=Kr(Pt(n,e,i)),a=Kr(Pt(t,i,n)),o=Kr(Pt(t,i,e));return!!(s!==r&&a!==o||s===0&&$r(n,t,e)||r===0&&$r(n,i,e)||a===0&&$r(t,n,i)||o===0&&$r(t,e,i))}function $r(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Kr(n){return n>0?1:n<0?-1:0}function cp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function gr(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function hp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function bu(n,e){const t=yl(n.i,n.x,n.y),i=yl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Yc(n,e,t,i){const s=yl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function up(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class dp{static triangulate(e,t,i=2){return Kf(e,t,i)}}class si{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return si.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];$c(e),Kc(i,e);let a=e.length;t.forEach($c);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Kc(i,t[l]);const o=dp.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function $c(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Xl extends Lt{constructor(e=new Ca([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const h=e[o];a(h)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:fp;let A,b=!1,T,R,C,v;if(m){A=m.getSpacedPoints(c),b=!0,d=!1;const se=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(c,se),R=new F,C=new F,v=new F}d||(g=0,f=0,p=0,_=0);const w=o.extractPoints(h);let N=w.shape;const O=w.holes;if(!si.isClockWise(N)){N=N.reverse();for(let se=0,oe=O.length;se<oe;se++){const le=O[se];si.isClockWise(le)&&(O[se]=le.reverse())}}function I(se){const le=10000000000000001e-36;let ce=se[0];for(let me=1;me<=se.length;me++){const He=me%se.length,Be=se[He],qe=Be.x-ce.x,Ke=Be.y-ce.y,B=qe*qe+Ke*Ke,ut=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ce.x),Math.abs(ce.y)),st=le*ut*ut;if(B<=st){se.splice(He,1),me--;continue}ce=Be}}I(N),O.forEach(I);const L=O.length,D=N;for(let se=0;se<L;se++){const oe=O[se];N=N.concat(oe)}function G(se,oe,le){return oe||lt("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(oe,le)}const H=N.length;function J(se,oe,le){let ce,me,He;const Be=se.x-oe.x,qe=se.y-oe.y,Ke=le.x-se.x,B=le.y-se.y,ut=Be*Be+qe*qe,st=Be*B-qe*Ke;if(Math.abs(st)>Number.EPSILON){const P=Math.sqrt(ut),y=Math.sqrt(Ke*Ke+B*B),X=oe.x-qe/P,K=oe.y+Be/P,j=le.x-B/y,he=le.y+Ke/y,pe=((j-X)*B-(he-K)*Ke)/(Be*B-qe*Ke);ce=X+Be*pe-se.x,me=K+qe*pe-se.y;const ee=ce*ce+me*me;if(ee<=2)return new re(ce,me);He=Math.sqrt(ee/2)}else{let P=!1;Be>Number.EPSILON?Ke>Number.EPSILON&&(P=!0):Be<-Number.EPSILON?Ke<-Number.EPSILON&&(P=!0):Math.sign(qe)===Math.sign(B)&&(P=!0),P?(ce=-qe,me=Be,He=Math.sqrt(ut)):(ce=Be,me=qe,He=Math.sqrt(ut/2))}return new re(ce/He,me/He)}const U=[];for(let se=0,oe=D.length,le=oe-1,ce=se+1;se<oe;se++,le++,ce++)le===oe&&(le=0),ce===oe&&(ce=0),U[se]=J(D[se],D[le],D[ce]);const k=[];let q,ue=U.concat();for(let se=0,oe=L;se<oe;se++){const le=O[se];q=[];for(let ce=0,me=le.length,He=me-1,Be=ce+1;ce<me;ce++,He++,Be++)He===me&&(He=0),Be===me&&(Be=0),q[ce]=J(le[ce],le[He],le[Be]);k.push(q),ue=ue.concat(q)}let fe;if(g===0)fe=si.triangulateShape(D,O);else{const se=[],oe=[];for(let le=0;le<g;le++){const ce=le/g,me=f*Math.cos(ce*Math.PI/2),He=p*Math.sin(ce*Math.PI/2)+_;for(let Be=0,qe=D.length;Be<qe;Be++){const Ke=G(D[Be],U[Be],He);Se(Ke.x,Ke.y,-me),ce===0&&se.push(Ke)}for(let Be=0,qe=L;Be<qe;Be++){const Ke=O[Be];q=k[Be];const B=[];for(let ut=0,st=Ke.length;ut<st;ut++){const P=G(Ke[ut],q[ut],He);Se(P.x,P.y,-me),ce===0&&B.push(P)}ce===0&&oe.push(B)}}fe=si.triangulateShape(se,oe)}const $e=fe.length,Je=p+_;for(let se=0;se<H;se++){const oe=d?G(N[se],ue[se],Je):N[se];b?(C.copy(T.normals[0]).multiplyScalar(oe.x),R.copy(T.binormals[0]).multiplyScalar(oe.y),v.copy(A[0]).add(C).add(R),Se(v.x,v.y,v.z)):Se(oe.x,oe.y,0)}for(let se=1;se<=c;se++)for(let oe=0;oe<H;oe++){const le=d?G(N[oe],ue[oe],Je):N[oe];b?(C.copy(T.normals[se]).multiplyScalar(le.x),R.copy(T.binormals[se]).multiplyScalar(le.y),v.copy(A[se]).add(C).add(R),Se(v.x,v.y,v.z)):Se(le.x,le.y,u/c*se)}for(let se=g-1;se>=0;se--){const oe=se/g,le=f*Math.cos(oe*Math.PI/2),ce=p*Math.sin(oe*Math.PI/2)+_;for(let me=0,He=D.length;me<He;me++){const Be=G(D[me],U[me],ce);Se(Be.x,Be.y,u+le)}for(let me=0,He=O.length;me<He;me++){const Be=O[me];q=k[me];for(let qe=0,Ke=Be.length;qe<Ke;qe++){const B=G(Be[qe],q[qe],ce);b?Se(B.x,B.y+A[c-1].y,A[c-1].x+le):Se(B.x,B.y,u+le)}}}it(),Q();function it(){const se=s.length/3;if(d){let oe=0,le=H*oe;for(let ce=0;ce<$e;ce++){const me=fe[ce];We(me[2]+le,me[1]+le,me[0]+le)}oe=c+g*2,le=H*oe;for(let ce=0;ce<$e;ce++){const me=fe[ce];We(me[0]+le,me[1]+le,me[2]+le)}}else{for(let oe=0;oe<$e;oe++){const le=fe[oe];We(le[2],le[1],le[0])}for(let oe=0;oe<$e;oe++){const le=fe[oe];We(le[0]+H*c,le[1]+H*c,le[2]+H*c)}}i.addGroup(se,s.length/3-se,0)}function Q(){const se=s.length/3;let oe=0;ie(D,oe),oe+=D.length;for(let le=0,ce=O.length;le<ce;le++){const me=O[le];ie(me,oe),oe+=me.length}i.addGroup(se,s.length/3-se,1)}function ie(se,oe){let le=se.length;for(;--le>=0;){const ce=le;let me=le-1;me<0&&(me=se.length-1);for(let He=0,Be=c+g*2;He<Be;He++){const qe=H*He,Ke=H*(He+1),B=oe+ce+qe,ut=oe+me+qe,st=oe+me+Ke,P=oe+ce+Ke;Ae(B,ut,st,P)}}}function Se(se,oe,le){l.push(se),l.push(oe),l.push(le)}function We(se,oe,le){Xe(se),Xe(oe),Xe(le);const ce=s.length/3,me=S.generateTopUV(i,s,ce-3,ce-2,ce-1);mt(me[0]),mt(me[1]),mt(me[2])}function Ae(se,oe,le,ce){Xe(se),Xe(oe),Xe(ce),Xe(oe),Xe(le),Xe(ce);const me=s.length/3,He=S.generateSideWallUV(i,s,me-6,me-3,me-2,me-1);mt(He[0]),mt(He[1]),mt(He[3]),mt(He[1]),mt(He[2]),mt(He[3])}function Xe(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function mt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return pp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xl[s.type]().fromJSON(s)),new Xl(i,e.options)}}const fp={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],h=e[s*3],c=e[s*3+1];return[new re(r,a),new re(o,l),new re(h,c)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],h=e[i*3],c=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-c)<Math.abs(a-h)?[new re(a,1-l),new re(h,1-u),new re(d,1-p),new re(_,1-m)]:[new re(o,1-l),new re(c,1-u),new re(f,1-p),new re(g,1-m)]}};function pp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Mi extends Aa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Mi(e.radius,e.detail)}}class Li extends Lt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),h=o+1,c=l+1,u=e/o,d=t/l,f=[],p=[],_=[],g=[];for(let m=0;m<c;m++){const S=m*d-a;for(let A=0;A<h;A++){const b=A*u-r;p.push(b,-S,0),_.push(0,0,1),g.push(A/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const A=S+h*m,b=S+h*(m+1),T=S+1+h*(m+1),R=S+1+h*m;f.push(A,b,R),f.push(b,T,R)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends Lt{constructor(e=new Ca([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(a,2));function h(c){const u=s.length/3,d=c.extractPoints(t);let f=d.shape;const p=d.holes;si.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const S=p[g];si.isClockWise(S)===!0&&(p[g]=S.reverse())}const _=si.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){const S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,m=_.length;g<m;g++){const S=_[g],A=S[0]+u,b=S[1]+u,T=S[2]+u;i.push(A,b,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return mp(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new ql(i,e.curveSegments)}}function mp(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Ei extends Lt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let h=0;const c=[],u=new F,d=new F,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){const S=[],A=m/i,b=a+A*o,T=e*Math.cos(b),R=Math.sqrt(e*e-T*T);let C=0;m===0&&a===0?C=.5/t:m===i&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){const w=v/t,N=s+w*r;u.x=-R*Math.cos(N),u.y=T,u.z=R*Math.sin(N),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+C,1-A),S.push(h++)}c.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const A=c[m][S+1],b=c[m][S],T=c[m+1][S],R=c[m+1][S+1];(m!==0||a>0)&&f.push(A,b,R),(m!==i-1||l<Math.PI)&&f.push(b,T,R)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vi extends Lt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],h=[],c=[],u=[],d=new F,f=new F,p=new F;for(let _=0;_<=i;_++){const g=a+_/i*o;for(let m=0;m<=s;m++){const S=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(S),f.y=(e+t*Math.cos(g))*Math.sin(S),f.z=t*Math.sin(g),h.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),p.subVectors(f,d).normalize(),c.push(p.x,p.y,p.z),u.push(m/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){const m=(s+1)*_+g-1,S=(s+1)*(_-1)+g-1,A=(s+1)*(_-1)+g,b=(s+1)*_+g;l.push(m,S,b),l.push(S,A,b)}this.setIndex(l),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Zc(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Zc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=Ls(n[t]);for(const s in i)e[s]=i[s]}return e}function Zc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function gp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Su(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const xp={clone:Ls,merge:an};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vp extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dt extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bp extends Dt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sp extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mp extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Jc(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Jc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Jc(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class wp{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const f=h[u],p=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ep=new wp;class Yl{constructor(e){this.manager=e!==void 0?e:Ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ps=new WeakMap;class Tp extends Yl{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=xo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ps.get(a);u===void 0&&(u=[],ps.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=dr("img");function l(){c(),t&&t(this);const u=ps.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ps.delete(this),r.manager.itemEnd(e)}function h(u){c(),s&&s(u),xo.remove(`image:${e}`);const d=ps.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Ap extends Yl{constructor(e){super(e)}load(e,t,i,s){const r=new Yt,a=new Tp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Pa extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Rp extends Pa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _o=new ot,Qc=new F,jc=new F;class Mu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(_o,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===ur||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zr=new F,Jr=new Tn,zn=new F;class wu extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zr,Jr,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Zr,Jr,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new F,eh=new re,th=new re;class xn extends wu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/h,s*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Cp extends Mu{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}}class Pp extends Pa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Cp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class La extends wu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lp extends Mu{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dp extends Pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Lp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ip extends Pa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ms=-90,gs=1;class Np extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(ms,gs,e,t);s.layers=this.layers,this.add(s);const r=new xn(ms,gs,e,t);r.layers=this.layers,this.add(r);const a=new xn(ms,gs,e,t);a.layers=this.layers,this.add(a);const o=new xn(ms,gs,e,t);o.layers=this.layers,this.add(o);const l=new xn(ms,gs,e,t);l.layers=this.layers,this.add(l);const h=new xn(ms,gs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const h of t)this.remove(h);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Up extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nh=new ot;class Eu{constructor(e,t,i=0,s=1/0){this.ray=new Ta(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(e,t=!0,i=[]){return vl(e,this,i,t),i.sort(ih),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)vl(e[s],this,i,t);return i.sort(ih),i}}function ih(n,e){return n.distance-e.distance}function vl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)vl(r[a],e,t,!0)}}class sh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ic=class ic{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};ic.prototype.isMatrix2=!0;let rh=ic;const Qr=new Ci;class Op extends Gl{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new Lt;r.setIndex(new en(i,1)),r.setAttribute("position",new en(s,3)),super(r,new br({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Qr.setFromObject(this.object),Qr.isEmpty())return;const e=Qr.min,t=Qr.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Fp extends Ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ah(n,e,t,i){const s=kp(i);switch(t){case nu:return n*e;case Ll:return n*e/s.components*s.byteLength;case Dl:return n*e/s.components*s.byteLength;case Zi:return n*e*2/s.components*s.byteLength;case Il:return n*e*2/s.components*s.byteLength;case iu:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case Nl:return n*e*4/s.components*s.byteLength;case aa:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Vo:return Math.max(n,16)*Math.max(e,8)/4;case zo:case Go:return Math.max(n,8)*Math.max(e,8)/2;case Wo:case Xo:case Yo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qo:case pa:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hl:case ul:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ma:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kp(n){switch(n){case _n:case Qh:return{byteLength:1,components:1};case cr:case jh:case Kn:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case $n:case Rl:case In:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Bp(n){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,u=h.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,h,c),o.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,h){const c=l.array,u=l.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,c);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];n.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:s,remove:r,update:a}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jp=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,h0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,D0=`#ifdef USE_ENVMAP
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
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
#endif`,k0=`uniform sampler2D dfgLUT;
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
}`,B0=`
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Em=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Km=`#define DISTANCE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,jm=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:zp,alphahash_pars_fragment:Hp,alphamap_fragment:Gp,alphamap_pars_fragment:Vp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:$p,batching_vertex:Kp,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:jp,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:a0,color_pars_vertex:o0,color_vertex:l0,common:c0,cube_uv_reflection_fragment:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:f0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:x0,envmap_fragment:_0,envmap_common_pars_fragment:y0,envmap_pars_fragment:v0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:D0,envmap_vertex:S0,fog_vertex:M0,fog_pars_vertex:w0,fog_fragment:E0,fog_pars_fragment:T0,gradientmap_pars_fragment:A0,lightmap_pars_fragment:R0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:L0,lights_toon_fragment:I0,lights_toon_pars_fragment:N0,lights_phong_fragment:U0,lights_phong_pars_fragment:O0,lights_physical_fragment:F0,lights_physical_pars_fragment:k0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:H0,lightprobes_pars_fragment:G0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:$0,map_particle_fragment:K0,map_particle_pars_fragment:Z0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:j0,morphcolor_vertex:em,morphnormal_vertex:tm,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:sm,normal_fragment_maps:rm,normal_pars_fragment:am,normal_pars_vertex:om,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:dm,iridescence_pars_fragment:fm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:xm,dithering_fragment:_m,dithering_pars_fragment:ym,roughnessmap_fragment:vm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Mm,shadowmap_vertex:wm,shadowmask_pars_fragment:Em,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:Cm,specularmap_fragment:Pm,specularmap_pars_fragment:Lm,tonemapping_fragment:Dm,tonemapping_pars_fragment:Im,transmission_fragment:Nm,transmission_pars_fragment:Um,uv_pars_fragment:Om,uv_pars_vertex:Fm,uv_vertex:km,worldpos_vertex:Bm,background_vert:zm,background_frag:Hm,backgroundCube_vert:Gm,backgroundCube_frag:Vm,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distance_vert:$m,distance_frag:Km,equirect_vert:Zm,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:jm,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:xg,sprite_vert:_g,sprite_frag:yg},be={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Gn={basic:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:an([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:an([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ye(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:an([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:an([be.points,be.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:an([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:an([be.common,be.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:an([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:an([be.sprite,be.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:an([be.common,be.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:an([be.lights,be.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Gn.physical={uniforms:an([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const jr={r:0,b:0,g:0},vg=new ot,Au=new Ze;Au.set(-1,0,0,0,1,0,0,0,1);function bg(n,e,t,i,s,r){const a=new Ye(0);let o=s===!0?0:1,l,h,c=null,u=0,d=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){const b=S.backgroundBlurriness>0;A=e.get(A,b)}return A}function p(S){let A=!1;const b=f(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),A=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,A){const b=f(A);b&&(b.isCubeTexture||b.mapping===Ea)?(h===void 0&&(h=new Nt(new An(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ls(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Au),h.material.toneMapped=at.getTransfer(b.colorSpace)!==xt,(c!==b||u!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,c=b,u=b.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Nt(new Li(2,2),new On({name:"BackgroundMaterial",uniforms:Ls(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=at.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(c!==b||u!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=b,u=b.version,d=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,A){S.getRGB(jr,Su(n)),t.buffers.color.setClear(jr.r,jr.g,jr.b,A,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Sg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(O,x,I,L,D){let G=!1;const H=u(O,L,I,x);r!==H&&(r=H,h(r.object)),G=f(O,L,I,D),G&&p(O,L,I,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(O,x,I,L),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function h(O){return n.bindVertexArray(O)}function c(O){return n.deleteVertexArray(O)}function u(O,x,I,L){const D=L.wireframe===!0;let G=i[x.id];G===void 0&&(G={},i[x.id]=G);const H=O.isInstancedMesh===!0?O.id:0;let J=G[H];J===void 0&&(J={},G[H]=J);let U=J[I.id];U===void 0&&(U={},J[I.id]=U);let k=U[D];return k===void 0&&(k=d(l()),U[D]=k),k}function d(O){const x=[],I=[],L=[];for(let D=0;D<t;D++)x[D]=0,I[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:I,attributeDivisors:L,object:O,attributes:{},index:null}}function f(O,x,I,L){const D=r.attributes,G=x.attributes;let H=0;const J=I.getAttributes();for(const U in J)if(J[U].location>=0){const q=D[U];let ue=G[U];if(ue===void 0&&(U==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),U==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),q===void 0||q.attribute!==ue||ue&&q.data!==ue.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function p(O,x,I,L){const D={},G=x.attributes;let H=0;const J=I.getAttributes();for(const U in J)if(J[U].location>=0){let q=G[U];q===void 0&&(U==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),U==="instanceColor"&&O.instanceColor&&(q=O.instanceColor));const ue={};ue.attribute=q,q&&q.data&&(ue.data=q.data),D[U]=ue,H++}r.attributes=D,r.attributesNum=H,r.index=L}function _(){const O=r.newAttributes;for(let x=0,I=O.length;x<I;x++)O[x]=0}function g(O){m(O,0)}function m(O,x){const I=r.newAttributes,L=r.enabledAttributes,D=r.attributeDivisors;I[O]=1,L[O]===0&&(n.enableVertexAttribArray(O),L[O]=1),D[O]!==x&&(n.vertexAttribDivisor(O,x),D[O]=x)}function S(){const O=r.newAttributes,x=r.enabledAttributes;for(let I=0,L=x.length;I<L;I++)x[I]!==O[I]&&(n.disableVertexAttribArray(I),x[I]=0)}function A(O,x,I,L,D,G,H){H===!0?n.vertexAttribIPointer(O,x,I,D,G):n.vertexAttribPointer(O,x,I,L,D,G)}function b(O,x,I,L){_();const D=L.attributes,G=I.getAttributes(),H=x.defaultAttributeValues;for(const J in G){const U=G[J];if(U.location>=0){let k=D[J];if(k===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),k!==void 0){const q=k.normalized,ue=k.itemSize,fe=e.get(k);if(fe===void 0)continue;const $e=fe.buffer,Je=fe.type,it=fe.bytesPerElement,Q=Je===n.INT||Je===n.UNSIGNED_INT||k.gpuType===Rl;if(k.isInterleavedBufferAttribute){const ie=k.data,Se=ie.stride,We=k.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<U.locationSize;Ae++)m(U.location+Ae,ie.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<U.locationSize;Ae++)g(U.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Ae=0;Ae<U.locationSize;Ae++)A(U.location+Ae,ue/U.locationSize,Je,q,Se*it,(We+ue/U.locationSize*Ae)*it,Q)}else{if(k.isInstancedBufferAttribute){for(let ie=0;ie<U.locationSize;ie++)m(U.location+ie,k.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ie=0;ie<U.locationSize;ie++)g(U.location+ie);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ie=0;ie<U.locationSize;ie++)A(U.location+ie,ue/U.locationSize,Je,q,ue*it,ue/U.locationSize*ie*it,Q)}}else if(H!==void 0){const q=H[J];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(U.location,q);break;case 3:n.vertexAttrib3fv(U.location,q);break;case 4:n.vertexAttrib4fv(U.location,q);break;default:n.vertexAttrib1fv(U.location,q)}}}}S()}function T(){w();for(const O in i){const x=i[O];for(const I in x){const L=x[I];for(const D in L){const G=L[D];for(const H in G)c(G[H].object),delete G[H];delete L[D]}}delete i[O]}}function R(O){if(i[O.id]===void 0)return;const x=i[O.id];for(const I in x){const L=x[I];for(const D in L){const G=L[D];for(const H in G)c(G[H].object),delete G[H];delete L[D]}}delete i[O.id]}function C(O){for(const x in i){const I=i[x];for(const L in I){const D=I[L];if(D[O.id]===void 0)continue;const G=D[O.id];for(const H in G)c(G[H].object),delete G[H];delete D[O.id]}}}function v(O){for(const x in i){const I=i[x],L=O.isInstancedMesh===!0?O.id:0,D=I[L];if(D!==void 0){for(const G in D){const H=D[G];for(const J in H)c(H[J].object),delete H[J];delete D[G]}delete I[L],Object.keys(I).length===0&&delete i[x]}}}function w(){N(),a=!0,r!==s&&(r=s,h(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function Mg(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),t.update(h,i,c))}function o(l,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let d=0;for(let f=0;f<c;f++)d+=h[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_n&&C!==In&&!v&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(Ve("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:b,maxSamples:T,samples:R}}function Eg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Dn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?c(null):h();else{const S=r?0:i,A=S*4;let b=m.clippingState||null;l.value=b,b=c(p,d,A,f);for(let T=0;T!==A;++T)b[T]=t[T];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,b=f;A!==_;++A,b+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const Ss=4,Tg=6,Ag=20,Rg=256,Ks=new La,oh=new Ye;let yo=null,vo=0,bo=0,So=!1;const Cg=new F,Fi=new F;class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Cg}=r;yo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yo,vo,bo),this._renderer.xr.enabled=So,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Kn,format:Nn,colorSpace:ga,depthBuffer:!1},s=ch(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pg(r)),this._blurMaterial=Dg(r,e,t),this._ggxMaterial=Lg(r,e,t)}return s}_compileMaterial(e){const t=new Nt(new Lt,e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,i,s,r){const l=new xn(90,1,t,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(oh),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new An,new Pi({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(oh),m=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,h[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[A],r.y,r.z)):b===1?(l.up.set(0,0,h[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[A],r.z)):(l.up.set(0,h[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[A]));const T=this._cubeSize;xs(s,b*T,A>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ki||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,h=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(h*h-c*c),d=h*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[i],g=3*_*(i>p-Ss?i-p+Ss:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,xs(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,Ks),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,xs(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,Ks)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const h=o.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;const c=this._sizeLods[s],u=3*c*(s>this._lodMax-Ss?s-this._lodMax+Ss:0),d=4*(this._cubeSize-c);xs(t,u,d,3*c,2*c),a.setRenderTarget(t),a.render(l,Ks)}}function Pg(n){const e=[],t=[];let i=n;const s=n-Ss+1+Tg;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],u=6,d=6,f=3,p=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let m=0;m<u;m++){const S=m%3*2/3-1,A=m>2?0:-1,b=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];p.set(b,f*d*m);for(let T=0;T<d;T++){const R=c[T*2]*2-1,C=c[T*2+1]*2-1;m===0?Fi.set(1,C,R):m===1?Fi.set(-R,1,-C):m===2?Fi.set(-R,C,1):m===3?Fi.set(-1,C,-R):m===4?Fi.set(-R,-1,C):Fi.set(R,C,-1),Fi.toArray(_,(m*d+T)*f)}}const g=new Lt;g.setAttribute("position",new en(p,f)),g.setAttribute("outputDirection",new en(_,f)),t.push(new Nt(g,null)),i>Ss&&i--}return{lodMeshes:t,sizeLods:e}}function ch(n,e,t){const i=new Un(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Lg(n,e,t){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Dg(n,e,t){return new On({name:"SphericalGaussianBlur",defines:{SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Da(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function hh(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function uh(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Da(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ru extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new uu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ai});r.uniforms.tEquirect.value=t;const a=new Nt(s,r),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Qt),new Np(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Ig(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ha||f===Ga)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Ru(p.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",h),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===Ha||f===Ga,_=f===Ki||f===Cs;if(p||_){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new lh(n)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new lh(n)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function o(d,f){return f===Ha?d.mapping=Ki:f===Ga&&(d.mapping=Cs),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Ng(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ms("WebGLRenderer: "+i+" extension not supported."),s}}}function Ug(n,e,t,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let A=0,b=S.length;A<b;A+=3){const T=S[A+0],R=S[A+1],C=S[A+2];d.push(T,R,R,C,C,T)}}else{const S=p.array;_=p.version;for(let A=0,b=S.length/3-1;A<b;A+=3){const T=A+0,R=A+1,C=A+2;d.push(T,R,R,C,C,T)}}const g=new(p.count>=65535?cu:lu)(d,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function Og(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function h(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function c(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Fg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kg(n,e,t){const i=new WeakMap,s=new Ct;function r(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let N=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var f=N;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let T=o.attributes.position.count*b,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*R*4*u),v=new au(C,T,R,u);v.type=In,v.needsUpdate=!0;const w=b*4;for(let O=0;O<u;O++){const x=m[O],I=S[O],L=A[O],D=T*R*4*O;for(let G=0;G<x.count;G++){const H=G*w;p===!0&&(s.fromBufferAttribute(x,G),C[D+H+0]=s.x,C[D+H+1]=s.y,C[D+H+2]=s.z,C[D+H+3]=0),_===!0&&(s.fromBufferAttribute(I,G),C[D+H+4]=s.x,C[D+H+5]=s.y,C[D+H+6]=s.z,C[D+H+7]=0),g===!0&&(s.fromBufferAttribute(L,G),C[D+H+8]=s.x,C[D+H+9]=s.y,C[D+H+10]=s.z,C[D+H+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new re(T,R)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Bg(n,e,t,i,s){let r=new WeakMap;function a(h){const c=s.render.frame,u=h.geometry,d=e.get(h,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function l(h){const c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const zg={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[Al]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[$h]:"CUSTOM_TONE_MAPPING"};function Hg(n,e,t,i,s,r){const a=new Un(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const h=new Lt;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));const c=new vp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Nt(h,c),d=new La(-1,1,1,-1,0,1);let f=null,p=null,_=!1,g,m=null,S=[],A=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),l!==null&&l.setSize(b,T);for(let R=0;R<S.length;R++){const C=S[R];C.setSize&&C.setSize(b,T)}},this.setEffects=function(b){S=b,A=S.length>0&&S[0].isRenderPass===!0;const T=a.width,R=a.height;S.length>0&&o===null&&(o=new Un(T,R,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Un(T,R,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){const v=S[C];v.setSize&&v.setSize(T,R)}},this.begin=function(b,T){if(_||b.toneMapping===qn&&S.length===0)return!1;if(m=T,T!==null){const R=T.width,C=T.height;(a.width!==R||a.height!==C)&&this.setSize(R,C)}return A===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=qn,!0},this.hasRenderPass=function(){return A},this.end=function(b,T){b.toneMapping=g,_=!0;let R=a,C=o;for(let v=0;v<S.length;v++){const w=S[v];w.enabled!==!1&&(w.render(b,C,R,T),w.needsSwap!==!1&&(R=C,C=C===o?l:o))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,c.defines={},at.getTransfer(f)===xt&&(c.defines.SRGB_TRANSFER="");const v=zg[p];v&&(c.defines[v]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=R.texture,b.setRenderTarget(m),b.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}const Cu=new Yt,bl=new pr(1,1),Pu=new au,Lu=new mf,Du=new uu,dh=[],fh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=dh[s];if(r===void 0&&(r=new Float32Array(s),dh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=fh[e];t===void 0&&(t=new Int32Array(e),fh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;gh.set(i),n.uniformMatrix2fv(this.addr,!1,gh),Ht(t,i)}}function Yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;mh.set(i),n.uniformMatrix3fv(this.addr,!1,mh),Ht(t,i)}}function $g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,i))return;ph.set(i),n.uniformMatrix4fv(this.addr,!1,ph),Ht(t,i)}}function Kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function ix(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bl.compareFunction=t.isReversedDepthBuffer()?Ol:Ul,r=bl):r=Cu,t.setTexture2D(e||r,s)}function sx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Lu,s)}function rx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Du,s)}function ax(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Pu,s)}function ox(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return $g;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return jg;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ax}}function lx(n,e){n.uniform1fv(this.addr,e)}function cx(n,e){const t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function hx(n,e){const t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function ux(n,e){const t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function dx(n,e){const t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fx(n,e){const t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function px(n,e){const t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mx(n,e){n.uniform1iv(this.addr,e)}function gx(n,e){n.uniform2iv(this.addr,e)}function xx(n,e){n.uniform3iv(this.addr,e)}function _x(n,e){n.uniform4iv(this.addr,e)}function yx(n,e){n.uniform1uiv(this.addr,e)}function vx(n,e){n.uniform2uiv(this.addr,e)}function bx(n,e){n.uniform3uiv(this.addr,e)}function Sx(n,e){n.uniform4uiv(this.addr,e)}function Mx(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=bl:a=Cu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function wx(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Lu,r[a])}function Ex(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Du,r[a])}function Tx(n,e,t){const i=this.cache,s=e.length,r=Ia(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Ht(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Pu,r[a])}function Ax(n){switch(n){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return _x;case 5125:return yx;case 36294:return vx;case 36295:return bx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}class Rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ox(t.type)}}class Cx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}}class Px{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function xh(n,e){n.seq.push(e),n.map[e.id]=e}function Lx(n,e,t){const i=n.name,s=i.length;for(Mo.lastIndex=0;;){const r=Mo.exec(i),a=Mo.lastIndex;let o=r[1];const l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){xh(t,h===void 0?new Rx(o,n,e):new Cx(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Px(o),xh(t,u)),t=u}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Lx(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function _h(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Dx=37297;let Ix=0;function Nx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const yh=new Ze;function Ux(n){at._getMatrix(yh,at.workingColorSpace,n);const e=`mat3( ${yh.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case xa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Nx(n.getShaderSource(e),o)}else return r}function Ox(n,e){const t=Ux(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Fx={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[Al]:"ACESFilmic",[Kh]:"AgX",[Zh]:"Neutral",[$h]:"Custom"};function kx(n,e){const t=Fx[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new F;function Bx(){at.getLuminanceCoefficients(ea);const n=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Hx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Gx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function js(n){return n!==""}function bh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(n){return n.replace(Vx,Xx)}const Wx=new Map;function Xx(n,e){let t=nt[e];if(t===void 0){const i=Wx.get(e);if(i!==void 0)t=nt[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sl(t)}const qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(n){return n.replace(qx,Yx)}function Yx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const $x={[er]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Kx(n){return $x[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zx={[Ki]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Ea]:"ENVMAP_TYPE_CUBE_UV"};function Jx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Zx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qx={[Cs]:"ENVMAP_MODE_REFRACTION"};function jx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e_={[Wh]:"ENVMAP_BLENDING_MULTIPLY",[Pd]:"ENVMAP_BLENDING_MIX",[Ld]:"ENVMAP_BLENDING_ADD"};function t_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":e_[n.combine]||"ENVMAP_BLENDING_NONE"}function n_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function i_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Kx(t),h=Jx(t),c=jx(t),u=t_(t),d=n_(t),f=zx(t),p=Hx(r),_=s.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(js).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(js).join(`
`),m.length>0&&(m+=`
`)):(g=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?nt.tonemapping_pars_fragment:"",t.toneMapping!==qn?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Ox("linearToOutputTexel",t.outputColorSpace),Bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=Sl(a),a=bh(a,t),a=Sh(a,t),o=Sl(o),o=bh(o,t),o=Sh(o,t),a=Mh(a),o=Mh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=S+g+a,b=S+m+o,T=_h(s,s.VERTEX_SHADER,A),R=_h(s,s.FRAGMENT_SHADER,b);s.attachShader(_,T),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(O){if(n.debug.checkShaderErrors){const x=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(R)||"",D=x.trim(),G=I.trim(),H=L.trim();let J=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,R);else{const k=vh(s,T,"vertex"),q=vh(s,R,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+D+`
`+k+`
`+q)}else D!==""?Ve("WebGLProgram: Program Info Log:",D):(G===""||H==="")&&(U=!1);U&&(O.diagnostics={runnable:J,programLog:D,vertexShader:{log:G,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(T),s.deleteShader(R),v=new ha(s,_),w=Gx(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,Dx)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ix++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let s_=0;class r_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new a_(e),t.set(e,i)),i}}class a_{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}}function o_(n){return n===Zi||n===pa||n===ma}function l_(n,e,t,i,s,r){const a=new Bl,o=new r_,l=new Set,h=[],c=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,N,O,x,I){const L=O.fog,D=x.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?O.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,J=e.get(v.envMap||G,H),U=J&&J.mapping===Ea?J.image.height:null,k=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ue=q!==void 0?q.length:0;let fe=0;D.morphAttributes.position!==void 0&&(fe=1),D.morphAttributes.normal!==void 0&&(fe=2),D.morphAttributes.color!==void 0&&(fe=3);let $e,Je,it,Q;if(k){const Mt=Gn[k];$e=Mt.vertexShader,Je=Mt.fragmentShader}else{$e=v.vertexShader,Je=v.fragmentShader;const Mt=o.getVertexShaderStage(v),dt=o.getFragmentShaderStage(v);o.update(v,Mt,dt),it=Mt.id,Q=dt.id}const ie=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),We=x.isInstancedMesh===!0,Ae=x.isBatchedMesh===!0,Xe=!!v.map,mt=!!v.matcap,se=!!J,oe=!!v.aoMap,le=!!v.lightMap,ce=!!v.bumpMap&&v.wireframe===!1,me=!!v.normalMap,He=!!v.displacementMap,Be=!!v.emissiveMap,qe=!!v.metalnessMap,Ke=!!v.roughnessMap,B=v.anisotropy>0,ut=v.clearcoat>0,st=v.dispersion>0,P=v.retroreflectivity>0,y=v.iridescence>0,X=v.sheen>0,K=v.transmission>0,j=B&&!!v.anisotropyMap,he=ut&&!!v.clearcoatMap,pe=ut&&!!v.clearcoatNormalMap,ee=ut&&!!v.clearcoatRoughnessMap,ne=y&&!!v.iridescenceMap,ge=y&&!!v.iridescenceThicknessMap,Ue=X&&!!v.sheenColorMap,ve=X&&!!v.sheenRoughnessMap,xe=!!v.specularMap,Oe=!!v.specularColorMap,Ge=!!v.specularIntensityMap,je=K&&!!v.transmissionMap,W=K&&!!v.thicknessMap,_e=!!v.gradientMap,te=!!v.alphaMap,ye=v.alphaTest>0,Ee=!!v.alphaHash,ae=!!v.extensions;let Fe=qn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const Ie={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:$e,fragmentShader:Je,defines:v.defines,customVertexShaderID:it,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&x._colorsTexture!==null,instancing:We,instancingColor:We&&x.instanceColor!==null,instancingMorph:We&&x.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xe,matcap:mt,envMap:se,envMapMode:se&&J.mapping,envMapCubeUVHeight:U,aoMap:oe,lightMap:le,bumpMap:ce,normalMap:me,displacementMap:He,emissiveMap:Be,normalMapObjectSpace:me&&v.normalMapType===Nd,normalMapTangentSpace:me&&v.normalMapType===gl,packedNormalMap:me&&v.normalMapType===gl&&o_(v.normalMap.format),metalnessMap:qe,roughnessMap:Ke,anisotropy:B,anisotropyMap:j,clearcoat:ut,clearcoatMap:he,clearcoatNormalMap:pe,clearcoatRoughnessMap:ee,dispersion:st,retroreflection:P,iridescence:y,iridescenceMap:ne,iridescenceThicknessMap:ge,sheen:X,sheenColorMap:Ue,sheenRoughnessMap:ve,specularMap:xe,specularColorMap:Oe,specularIntensityMap:Ge,transmission:K,transmissionMap:je,thicknessMap:W,gradientMap:_e,opaque:v.transparent===!1&&v.blending===tr&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:ye,alphaHash:Ee,combine:v.combine,mapUv:Xe&&p(v.map.channel),aoMapUv:oe&&p(v.aoMap.channel),lightMapUv:le&&p(v.lightMap.channel),bumpMapUv:ce&&p(v.bumpMap.channel),normalMapUv:me&&p(v.normalMap.channel),displacementMapUv:He&&p(v.displacementMap.channel),emissiveMapUv:Be&&p(v.emissiveMap.channel),metalnessMapUv:qe&&p(v.metalnessMap.channel),roughnessMapUv:Ke&&p(v.roughnessMap.channel),anisotropyMapUv:j&&p(v.anisotropyMap.channel),clearcoatMapUv:he&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&p(v.sheenRoughnessMap.channel),specularMapUv:xe&&p(v.specularMap.channel),specularColorMapUv:Oe&&p(v.specularColorMap.channel),specularIntensityMapUv:Ge&&p(v.specularIntensityMap.channel),transmissionMapUv:je&&p(v.transmissionMap.channel),thicknessMapUv:W&&p(v.thicknessMap.channel),alphaMapUv:te&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(me||B),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!D.attributes.uv&&(Xe||te),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&me===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:fe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Xe&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Be&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===bn,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)w.push(N),w.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(m(w,v),S(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const w=f[v.type];let N;if(w){const O=Gn[w];N=xp.clone(O.uniforms)}else N=v.uniforms;return N}function b(v,w){let N=c.get(w);return N!==void 0?++N.usedTimes:(N=new i_(n,w,v,s),h.push(N),c.set(w,N)),N}function T(v){if(--v.usedTimes===0){const w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),c.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:A,acquireProgram:b,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:C}}function c_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function h_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Eh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Th(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,g,m){let S=n[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function l(d,f,p,_,g,m,S){S.reversedDepth===!0&&(g=-g);const A=o(d,f,p,_,g,m);p.transmission>0?i.push(A):p.transparent===!0?s.push(A):t.push(A)}function h(d,f,p,_,g,m){const S=o(d,f,p,_,g,m);p.transmission>0?i.unshift(S):p.transparent===!0?s.unshift(S):t.unshift(S)}function c(d,f){t.length>1&&t.sort(d||h_),i.length>1&&i.sort(f||Eh),s.length>1&&s.sort(f||Eh)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:u,sort:c}}function u_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Th,n.set(i,[a])):s>=r.length?(a=new Th,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function d_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ye};break;case"SpotLight":t={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function f_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let p_=0;function m_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function g_(n){const e=new d_,t=f_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new F);const s=new F,r=new ot,a=new ot;function o(h){let c=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,S=0,A=0,b=0,T=0,R=0,C=0,v=0,w=0,N=0;h.sort(m_);for(let x=0,I=h.length;x<I;x++){const L=h[x],D=L.color,G=L.intensity,H=L.distance;let J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zi?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=D.r*G,u+=D.g*G,d+=D.b*G;else if(L.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],G);N++}else if(L.isSunLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[p]=q,i.sunShadowMap[p]=J;const ue=k.getViewportCount();for(let fe=0;fe<ue;fe++)i.sunShadowMatrix[_+fe]=k.getMatrix(fe),i.sunShadowCascade[_+fe]=k._cascadeData[fe];_+=ue,p++}i.sun[f]=U,f++}else if(L.isDirectionalLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.directionalShadow[g]=q,i.directionalShadowMap[g]=J,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=U,g++}else if(L.isSpotLight){const U=e.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(D).multiplyScalar(G),U.distance=H,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[S]=U;const k=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,k.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[S]=k.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.spotShadow[S]=q,i.spotShadowMap[S]=J,C++}S++}else if(L.isRectAreaLight){const U=e.get(L);U.color.copy(D).multiplyScalar(G),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[A]=U,A++}else if(L.isPointLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=U,m++}else if(L.isHemisphereLight){const U=e.get(L);U.skyColor.copy(L.color).multiplyScalar(G),U.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[b]=U,b++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const O=i.hash;(O.sunLength!==f||O.directionalLength!==g||O.pointLength!==m||O.spotLength!==S||O.rectAreaLength!==A||O.hemiLength!==b||O.numSunShadows!==p||O.numDirectionalShadows!==T||O.numPointShadows!==R||O.numSpotShadows!==C||O.numSpotMaps!==v||O.numLightProbes!==N)&&(i.sun.length=f,i.directional.length=g,i.spot.length=S,i.rectArea.length=A,i.point.length=m,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=N,O.sunLength=f,O.directionalLength=g,O.pointLength=m,O.spotLength=S,O.rectAreaLength=A,O.hemiLength=b,O.numSunShadows=p,O.numDirectionalShadows=T,O.numPointShadows=R,O.numSpotShadows=C,O.numSpotMaps=v,O.numLightProbes=N,i.version=p_++)}function l(h,c){let u=0,d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){const b=h[S];if(b.isSunLight){const T=i.sun[u];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),u++}else if(b.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(b.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Ah(n){const e=new g_(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){s.push(d)}function h(){e.setup(t)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function x_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ah(n),e.set(s,[o])):r>=a.length?(o=new Ah(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
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
}`,v_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],b_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Rh=new ot,Zs=new F,wo=new F;function S_(n,e,t){let i=new Hl;const s=new re,r=new re,a=new Ct,o=new Sp,l=new Mp,h={},c=t.maxTextureSize,u={[$i]:hn,[hn]:$i,[bn]:bn},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:__,fragmentShader:y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Lt;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let m=this.type;this.render=function(R,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===ud&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=er);const w=n.getRenderTarget(),N=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),x=n.state;x.setBlending(ai),x.buffers.depth.getReversed()===!0?x.buffers.color.setClear(0,0,0,0):x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);const I=m!==this.type;I&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(D=>D.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,D=R.length;L<D;L++){const G=R[L],H=G.shadow;if(H===void 0){Ve("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));const U=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=U,H.map===null||I===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Js){if(G.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Un(s.x,s.y,{format:Zi,type:Kn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new pr(s.x,s.y,In),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=hi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt}else G.isPointLight?(H.map=new Ru(s.x),H.map.depthTexture=new Uf(s.x,$n)):(H.map=new Un(s.x,s.y),H.map.depthTexture=new pr(s.x,s.y,$n)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=hi,this.type===er?(H.map.depthTexture.compareFunction=U?Ol:Ul,H.map.depthTexture.minFilter=Qt,H.map.depthTexture.magFilter=Qt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const k=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();G.isPointLight!==!0&&H.updateMatrices(G,v);for(let q=0;q<k;q++){const ue=H.getCamera(q);if(G.isPointLight){const fe=H.camera,$e=H.matrix,Je=G.distance||fe.far;Je!==fe.far&&(fe.far=Je,fe.updateProjectionMatrix()),Zs.setFromMatrixPosition(G.matrixWorld),fe.position.copy(Zs),wo.copy(fe.position),wo.add(v_[q]),fe.up.copy(b_[q]),fe.lookAt(wo),fe.updateMatrixWorld(),$e.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Rh.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Rh,fe.coordinateSystem,fe.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,q),n.clear();else{q===0&&(n.setRenderTarget(H.map),n.clear());const fe=H.getViewport(q);a.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),x.viewport(a)}i=H.getFrustum(q),b(C,v,ue,G,this.type)}H.isPointLightShadow!==!0&&this.type===Js&&S(H,v),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,N,O)};function S(R,C){const v=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Un(s.x,s.y,{format:Zi,type:Kn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,v,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,v,f,_,null)}function A(R,C,v,w){let N=null;const O=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)N=O;else if(N=v.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const x=N.uuid,I=C.uuid;let L=h[x];L===void 0&&(L={},h[x]=L);let D=L[I];D===void 0&&(D=N.clone(),L[I]=D,C.addEventListener("dispose",T)),N=D}if(N.visible=C.visible,N.wireframe=C.wireframe,w===Js?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:u[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const x=n.properties.get(N);x.light=v}return N}function b(R,C,v,w,N){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===Js)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const I=e.update(R),L=R.material;if(Array.isArray(L)){const D=I.groups;for(let G=0,H=D.length;G<H;G++){const J=D[G],U=L[J.materialIndex];if(U&&U.visible){const k=A(R,U,w,N);R.onBeforeShadow(n,R,C,v,I,k,J),n.renderBufferDirect(v,null,I,k,R,J),R.onAfterShadow(n,R,C,v,I,k,J)}}}else if(L.visible){const D=A(R,L,w,N);R.onBeforeShadow(n,R,C,v,I,D,null),n.renderBufferDirect(v,null,I,D,R,null),R.onAfterShadow(n,R,C,v,I,D,null)}}const x=R.children;for(let I=0,L=x.length;I<L;I++)b(x[I],C,v,w,N)}function T(R){R.target.removeEventListener("dispose",T);for(const v in h){const w=h[v],N=R.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function M_(n,e){function t(){let W=!1;const _e=new Ct;let te=null;const ye=new Ct(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!W&&(n.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,ae,Fe,Ie,Mt){Mt===!0&&(Ee*=Ie,ae*=Ie,Fe*=Ie),_e.set(Ee,ae,Fe,Ie),ye.equals(_e)===!1&&(n.clearColor(Ee,ae,Fe,Ie),ye.copy(_e))},reset:function(){W=!1,te=null,ye.set(-1,0,0,0)}}}function i(){let W=!1,_e=!1,te=null,ye=null,Ee=null;return{setReversed:function(ae){if(_e!==ae){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),_e=ae;const Ie=Ee;Ee=null,this.setClear(Ie)}},getReversed:function(){return _e},setTest:function(ae){ae?ie(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(ae){te!==ae&&!W&&(n.depthMask(ae),te=ae)},setFunc:function(ae){if(_e&&(ae=qd[ae]),ye!==ae){switch(ae){case Do:n.depthFunc(n.NEVER);break;case Io:n.depthFunc(n.ALWAYS);break;case No:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Uo:n.depthFunc(n.EQUAL);break;case Oo:n.depthFunc(n.GEQUAL);break;case Fo:n.depthFunc(n.GREATER);break;case ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=ae}},setLocked:function(ae){W=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,_e&&(ae=1-ae),n.clearDepth(ae))},reset:function(){W=!1,te=null,ye=null,Ee=null,_e=!1}}}function s(){let W=!1,_e=null,te=null,ye=null,Ee=null,ae=null,Fe=null,Ie=null,Mt=null;return{setTest:function(dt){W||(dt?ie(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(dt){_e!==dt&&!W&&(n.stencilMask(dt),_e=dt)},setFunc:function(dt,Rn,kn){(te!==dt||ye!==Rn||Ee!==kn)&&(n.stencilFunc(dt,Rn,kn),te=dt,ye=Rn,Ee=kn)},setOp:function(dt,Rn,kn){(ae!==dt||Fe!==Rn||Ie!==kn)&&(n.stencilOp(dt,Rn,kn),ae=dt,Fe=Rn,Ie=kn)},setLocked:function(dt){W=dt},setClear:function(dt){Mt!==dt&&(n.clearStencil(dt),Mt=dt)},reset:function(){W=!1,_e=null,te=null,ye=null,Ee=null,ae=null,Fe=null,Ie=null,Mt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,A=null,b=null,T=null,R=null,C=null,v=new Ye(0,0,0),w=0,N=!1,O=null,x=null,I=null,L=null,D=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const U=n.getParameter(n.VERSION);U.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(U)[1]),H=J>=1):U.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),H=J>=2);let k=null,q={};const ue=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),$e=new Ct().fromArray(ue),Je=new Ct().fromArray(fe);function it(W,_e,te,ye){const Ee=new Uint8Array(4),ae=n.createTexture();n.bindTexture(W,ae),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<te;Fe++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(_e+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return ae}const Q={};Q[n.TEXTURE_2D]=it(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=it(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=it(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=it(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(lr),ce(!1),me(pc),ie(n.CULL_FACE),oe(ai);function ie(W){c[W]!==!0&&(n.enable(W),c[W]=!0)}function Se(W){c[W]!==!1&&(n.disable(W),c[W]=!1)}function We(W,_e){return d[W]!==_e?(n.bindFramebuffer(W,_e),d[W]=_e,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_e),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ae(W,_e){let te=p,ye=!1;if(W){te=f.get(_e),te===void 0&&(te=[],f.set(_e,te));const Ee=W.textures;if(te.length!==Ee.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Fe=Ee.length;ae<Fe;ae++)te[ae]=n.COLOR_ATTACHMENT0+ae;te.length=Ee.length,ye=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ye=!0);ye&&n.drawBuffers(te)}function Xe(W){return _!==W?(n.useProgram(W),_=W,!0):!1}const mt={[vs]:n.FUNC_ADD,[fd]:n.FUNC_SUBTRACT,[pd]:n.FUNC_REVERSE_SUBTRACT};mt[md]=n.MIN,mt[gd]=n.MAX;const se={[xd]:n.ZERO,[_d]:n.ONE,[yd]:n.SRC_COLOR,[Gh]:n.SRC_ALPHA,[Ed]:n.SRC_ALPHA_SATURATE,[Md]:n.DST_COLOR,[bd]:n.DST_ALPHA,[vd]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[wd]:n.ONE_MINUS_DST_COLOR,[Sd]:n.ONE_MINUS_DST_ALPHA,[Td]:n.CONSTANT_COLOR,[Ad]:n.ONE_MINUS_CONSTANT_COLOR,[Rd]:n.CONSTANT_ALPHA,[Cd]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(W,_e,te,ye,Ee,ae,Fe,Ie,Mt,dt){if(W===ai){g===!0&&(Se(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),W!==dd){if(W!==m||dt!==N){if((S!==vs||T!==vs)&&(n.blendEquation(n.FUNC_ADD),S=vs,T=vs),dt)switch(W){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.ONE,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",W);break}else switch(W){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gc:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",W);break}A=null,b=null,R=null,C=null,v.set(0,0,0),w=0,m=W,N=dt}return}Ee=Ee||_e,ae=ae||te,Fe=Fe||ye,(_e!==S||Ee!==T)&&(n.blendEquationSeparate(mt[_e],mt[Ee]),S=_e,T=Ee),(te!==A||ye!==b||ae!==R||Fe!==C)&&(n.blendFuncSeparate(se[te],se[ye],se[ae],se[Fe]),A=te,b=ye,R=ae,C=Fe),(Ie.equals(v)===!1||Mt!==w)&&(n.blendColor(Ie.r,Ie.g,Ie.b,Mt),v.copy(Ie),w=Mt),m=W,N=!1}function le(W,_e){W.side===bn?Se(n.CULL_FACE):ie(n.CULL_FACE);let te=W.side===hn;_e&&(te=!te),ce(te),W.blending===tr&&W.transparent===!1?oe(ai):oe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);const ye=W.stencilWrite;o.setTest(ye),ye&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Be(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(W){O!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),O=W)}function me(W){W!==cd?(ie(n.CULL_FACE),W!==x&&(W===pc?n.cullFace(n.BACK):W===hd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),x=W}function He(W){W!==I&&(H&&n.lineWidth(W),I=W)}function Be(W,_e,te){W?(ie(n.POLYGON_OFFSET_FILL),(L!==_e||D!==te)&&(L=_e,D=te,a.getReversed()&&(_e=-_e),n.polygonOffset(_e,te))):Se(n.POLYGON_OFFSET_FILL)}function qe(W){W?ie(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Ke(W){W===void 0&&(W=n.TEXTURE0+G-1),k!==W&&(n.activeTexture(W),k=W)}function B(W,_e,te){te===void 0&&(k===null?te=n.TEXTURE0+G-1:te=k);let ye=q[te];ye===void 0&&(ye={type:void 0,texture:void 0},q[te]=ye),(ye.type!==W||ye.texture!==_e)&&(k!==te&&(n.activeTexture(te),k=te),n.bindTexture(W,_e||Q[W]),ye.type=W,ye.texture=_e)}function ut(){const W=q[k];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function st(){try{n.compressedTexImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function y(){try{n.texSubImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function X(){try{n.texSubImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function he(){try{n.texStorage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function pe(){try{n.texStorage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function ee(){try{n.texImage2D(...arguments)}catch(W){lt("WebGLState:",W)}}function ne(){try{n.texImage3D(...arguments)}catch(W){lt("WebGLState:",W)}}function ge(W){return u[W]!==void 0?u[W]:n.getParameter(W)}function Ue(W,_e){u[W]!==_e&&(n.pixelStorei(W,_e),u[W]=_e)}function ve(W){$e.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),$e.copy(W))}function xe(W){Je.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Je.copy(W))}function Oe(W,_e){let te=h.get(_e);te===void 0&&(te=new WeakMap,h.set(_e,te));let ye=te.get(W);ye===void 0&&(ye=n.getUniformBlockIndex(_e,W.name),te.set(W,ye))}function Ge(W,_e){const ye=h.get(_e).get(W);l.get(_e)!==ye&&(n.uniformBlockBinding(_e,ye,W.__bindingPointIndex),l.set(_e,ye))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},u={},k=null,q={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,A=null,b=null,T=null,R=null,C=null,v=new Ye(0,0,0),w=0,N=!1,O=null,x=null,I=null,L=null,D=null,$e.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Se,bindFramebuffer:We,drawBuffers:Ae,useProgram:Xe,setBlending:oe,setMaterial:le,setFlipSided:ce,setCullFace:me,setLineWidth:He,setPolygonOffset:Be,setScissorTest:qe,activeTexture:Ke,bindTexture:B,unbindTexture:ut,compressedTexImage2D:st,compressedTexImage3D:P,texImage2D:ee,texImage3D:ne,pixelStorei:Ue,getParameter:ge,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:he,texStorage3D:pe,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:K,compressedTexSubImage3D:j,scissor:ve,viewport:xe,reset:je}}function w_(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new re,c=new WeakMap,u=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return p?new OffscreenCanvas(P,y):dr("canvas")}function g(P,y,X){let K=1;const j=st(P);if((j.width>X||j.height>X)&&(K=X/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(K*j.width),pe=Math.floor(K*j.height);d===void 0&&(d=_(he,pe));const ee=y?_(he,pe):d;return ee.width=he,ee.height=pe,ee.getContext("2d").drawImage(P,0,0,he,pe),Ve("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+he+"x"+pe+")."),ee}else return"data"in P&&Ve("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function S(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(P,y,X,K,j,he=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let pe;K&&(pe=e.get("EXT_texture_norm16"),pe||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===n.RED&&(X===n.FLOAT&&(ee=n.R32F),X===n.HALF_FLOAT&&(ee=n.R16F),X===n.UNSIGNED_BYTE&&(ee=n.R8),X===n.UNSIGNED_SHORT&&pe&&(ee=pe.R16_EXT),X===n.SHORT&&pe&&(ee=pe.R16_SNORM_EXT)),y===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.R8UI),X===n.UNSIGNED_SHORT&&(ee=n.R16UI),X===n.UNSIGNED_INT&&(ee=n.R32UI),X===n.BYTE&&(ee=n.R8I),X===n.SHORT&&(ee=n.R16I),X===n.INT&&(ee=n.R32I)),y===n.RG&&(X===n.FLOAT&&(ee=n.RG32F),X===n.HALF_FLOAT&&(ee=n.RG16F),X===n.UNSIGNED_BYTE&&(ee=n.RG8),X===n.UNSIGNED_SHORT&&pe&&(ee=pe.RG16_EXT),X===n.SHORT&&pe&&(ee=pe.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RG8UI),X===n.UNSIGNED_SHORT&&(ee=n.RG16UI),X===n.UNSIGNED_INT&&(ee=n.RG32UI),X===n.BYTE&&(ee=n.RG8I),X===n.SHORT&&(ee=n.RG16I),X===n.INT&&(ee=n.RG32I)),y===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),X===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),X===n.UNSIGNED_INT&&(ee=n.RGB32UI),X===n.BYTE&&(ee=n.RGB8I),X===n.SHORT&&(ee=n.RGB16I),X===n.INT&&(ee=n.RGB32I)),y===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),X===n.UNSIGNED_INT&&(ee=n.RGBA32UI),X===n.BYTE&&(ee=n.RGBA8I),X===n.SHORT&&(ee=n.RGBA16I),X===n.INT&&(ee=n.RGBA32I)),y===n.RGB&&(X===n.UNSIGNED_SHORT&&pe&&(ee=pe.RGB16_EXT),X===n.SHORT&&pe&&(ee=pe.RGB16_SNORM_EXT),X===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),X===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),y===n.RGBA){const ne=he?xa:at.getTransfer(j);X===n.FLOAT&&(ee=n.RGBA32F),X===n.HALF_FLOAT&&(ee=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ee=ne===xt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT&&pe&&(ee=pe.RGBA16_EXT),X===n.SHORT&&pe&&(ee=pe.RGBA16_SNORM_EXT),X===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(P,y){let X;return P?y===null||y===$n||y===hr?X=n.DEPTH24_STENCIL8:y===In?X=n.DEPTH32F_STENCIL8:y===cr&&(X=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$n||y===hr?X=n.DEPTH_COMPONENT24:y===In?X=n.DEPTH_COMPONENT32F:y===cr&&(X=n.DEPTH_COMPONENT16),X}function R(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Xt&&P.minFilter!==Qt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function C(P){const y=P.target;y.removeEventListener("dispose",C),w(y),y.isVideoTexture&&c.delete(y),y.isHTMLTexture&&u.delete(y)}function v(P){const y=P.target;y.removeEventListener("dispose",v),O(y)}function w(P){const y=i.get(P);if(y.__webglInit===void 0)return;const X=P.source,K=f.get(X);if(K){const j=K[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&N(P),Object.keys(K).length===0&&f.delete(X)}i.remove(P)}function N(P){const y=i.get(P);n.deleteTexture(y.__webglTexture);const X=P.source,K=f.get(X);delete K[y.__cacheKey],a.memory.textures--}function O(P){const y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let j=0;j<y.__webglFramebuffer[K].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[K][j]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=P.textures;for(let K=0,j=X.length;K<j;K++){const he=i.get(X[K]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(X[K])}i.remove(P)}let x=0;function I(){x=0}function L(){return x}function D(P){x=P}function G(){const P=x;return P>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),x+=1,P}function H(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function J(P,y){const X=i.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const K=P.image;if(K===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(X,P,y);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+y)}function U(P,y){const X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Se(X,P,y);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+y)}function k(P,y){const X=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Se(X,P,y);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+y)}function q(P,y){const X=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&X.__version!==P.version){We(X,P,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+y)}const ue={[fa]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},fe={[Xt]:n.NEAREST,[Dd]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},$e={[Od]:n.NEVER,[Hd]:n.ALWAYS,[Fd]:n.LESS,[Ul]:n.LEQUAL,[kd]:n.EQUAL,[Ol]:n.GEQUAL,[Bd]:n.GREATER,[zd]:n.NOTEQUAL};function Je(P,y){if(y.type===In&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qt||y.magFilter===Va||y.magFilter===wr||y.magFilter===Bi||y.minFilter===Qt||y.minFilter===Va||y.minFilter===wr||y.minFilter===Bi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ue[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ue[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ue[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,fe[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,$e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xt||y.minFilter!==wr&&y.minFilter!==Bi||y.type===In&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function it(P,y){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",C));const K=y.source;let j=f.get(K);j===void 0&&(j={},f.set(K,j));const he=H(y);if(he!==P.__cacheKey){j[he]===void 0&&(j[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),j[he].usedTimes++;const pe=j[P.__cacheKey];pe!==void 0&&(j[P.__cacheKey].usedTimes--,pe.usedTimes===0&&N(y)),P.__cacheKey=he,P.__webglTexture=j[he].texture}return X}function Q(P,y,X){return Math.floor(Math.floor(P/X)/y)}function ie(P,y,X,K){const he=P.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,X,K,y.data);else{he.sort((Ue,ve)=>Ue.start-ve.start);let pe=0;for(let Ue=1;Ue<he.length;Ue++){const ve=he[pe],xe=he[Ue],Oe=ve.start+ve.count,Ge=Q(xe.start,y.width,4),je=Q(ve.start,y.width,4);xe.start<=Oe+1&&Ge===je&&Q(xe.start+xe.count-1,y.width,4)===Ge?ve.count=Math.max(ve.count,xe.start+xe.count-ve.start):(++pe,he[pe]=xe)}he.length=pe+1;const ee=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ue=0,ve=he.length;Ue<ve;Ue++){const xe=he[Ue],Oe=Math.floor(xe.start/4),Ge=Math.ceil(xe.count/4),je=Oe%y.width,W=Math.floor(Oe/y.width),_e=Ge,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,je,W,_e,te,X,K,y.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function Se(P,y,X){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const j=it(P,y),he=y.source;t.bindTexture(K,P.__webglTexture,n.TEXTURE0+X);const pe=i.get(he);if(he.version!==pe.__version||j===!0){if(t.activeTexture(n.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const te=at.getPrimaries(at.workingColorSpace),ye=y.colorSpace===bi?null:at.getPrimaries(y.colorSpace),Ee=y.colorSpace===bi||te===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ne=g(y.image,!1,s.maxTextureSize);ne=ut(y,ne);const ge=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let ve=b(y.internalFormat,ge,Ue,y.normalized,y.colorSpace,y.isVideoTexture);Je(K,y);let xe;const Oe=y.mipmaps,Ge=y.isVideoTexture!==!0,je=pe.__version===void 0||j===!0,W=he.dataReady,_e=R(y,ne);if(y.isDepthTexture)ve=T(y.format===zi,y.type),je&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,ve,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,ve,ne.width,ne.height,0,ge,Ue,null));else if(y.isDataTexture)if(Oe.length>0){Ge&&je&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Oe[0].width,Oe[0].height);for(let te=0,ye=Oe.length;te<ye;te++)xe=Oe[te],Ge?W&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,xe.width,xe.height,ge,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,te,ve,xe.width,xe.height,0,ge,Ue,xe.data);y.generateMipmaps=!1}else Ge?(je&&t.texStorage2D(n.TEXTURE_2D,_e,ve,ne.width,ne.height),W&&ie(y,ne,ge,Ue)):t.texImage2D(n.TEXTURE_2D,0,ve,ne.width,ne.height,0,ge,Ue,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,Oe[0].width,Oe[0].height,ne.depth);for(let te=0,ye=Oe.length;te<ye;te++)if(xe=Oe[te],y.format!==Nn)if(ge!==null)if(Ge){if(W)if(y.layerUpdates.size>0){const Ee=ah(xe.width,xe.height,y.format,y.type);for(const ae of y.layerUpdates){const Fe=xe.data.subarray(ae*Ee/xe.data.BYTES_PER_ELEMENT,(ae+1)*Ee/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ae,xe.width,xe.height,1,ge,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,ge,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,ve,xe.width,xe.height,ne.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ne.depth,ge,Ue,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,ve,xe.width,xe.height,ne.depth,0,ge,Ue,xe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ge&&je&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Oe[0].width,Oe[0].height);for(let te=0,ye=Oe.length;te<ye;te++)xe=Oe[te],y.format!==Nn?ge!==null?Ge?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,ve,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?W&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,xe.width,xe.height,ge,Ue,xe.data):t.texImage2D(n.TEXTURE_2D,te,ve,xe.width,xe.height,0,ge,Ue,xe.data)}else if(y.isDataArrayTexture)if(Ge){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,ne.width,ne.height,ne.depth),W)if(y.layerUpdates.size>0){const te=ah(ne.width,ne.height,y.format,y.type);for(const ye of y.layerUpdates){const Ee=ne.data.subarray(ye*te/ne.data.BYTES_PER_ELEMENT,(ye+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ye,ne.width,ne.height,1,ge,Ue,Ee)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ue,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,ge,Ue,ne.data);else if(y.isData3DTexture)Ge?(je&&t.texStorage3D(n.TEXTURE_3D,_e,ve,ne.width,ne.height,ne.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ue,ne.data)):t.texImage3D(n.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,ge,Ue,ne.data);else if(y.isFramebufferTexture){if(je)if(Ge)t.texStorage2D(n.TEXTURE_2D,_e,ve,ne.width,ne.height);else{let te=ne.width,ye=ne.height;for(let Ee=0;Ee<_e;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ve,te,ye,0,ge,Ue,null),te>>=1,ye>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),u.add(y),te.onpaint=ye=>{const Ee=ye.changedElements;for(const ae of u)Ee.includes(ae.image)&&(ae.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{const Ee=n.RGBA,ae=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ee,ae,Fe,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ge&&je){const te=st(Oe[0]);t.texStorage2D(n.TEXTURE_2D,_e,ve,te.width,te.height)}for(let te=0,ye=Oe.length;te<ye;te++)xe=Oe[te],Ge?W&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge,Ue,xe):t.texImage2D(n.TEXTURE_2D,te,ve,ge,Ue,xe);y.generateMipmaps=!1}else if(Ge){if(je){const te=st(ne);t.texStorage2D(n.TEXTURE_2D,_e,ve,te.width,te.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ue,ne)}else t.texImage2D(n.TEXTURE_2D,0,ve,ge,Ue,ne);m(y)&&S(K),pe.__version=he.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function We(P,y,X){if(y.image.length!==6)return;const K=it(P,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+X);const he=i.get(j);if(j.version!==he.__version||K===!0){t.activeTexture(n.TEXTURE0+X);const pe=at.getPrimaries(at.workingColorSpace),ee=y.colorSpace===bi?null:at.getPrimaries(y.colorSpace),ne=y.colorSpace===bi||pe===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ge=y.isCompressedTexture||y.image[0].isCompressedTexture,Ue=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!ge&&!Ue?ve[ae]=g(y.image[ae],!0,s.maxCubemapSize):ve[ae]=Ue?y.image[ae].image:y.image[ae],ve[ae]=ut(y,ve[ae]);const xe=ve[0],Oe=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type),je=b(y.internalFormat,Oe,Ge,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,_e=he.__version===void 0||K===!0,te=j.dataReady;let ye=R(y,xe);Je(n.TEXTURE_CUBE_MAP,y);let Ee;if(ge){W&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,je,xe.width,xe.height);for(let ae=0;ae<6;ae++){Ee=ve[ae].mipmaps;for(let Fe=0;Fe<Ee.length;Fe++){const Ie=Ee[Fe];y.format!==Nn?Oe!==null?W?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ie.width,Ie.height,Oe,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,je,Ie.width,Ie.height,0,Ie.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ie.width,Ie.height,Oe,Ge,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,je,Ie.width,Ie.height,0,Oe,Ge,Ie.data)}}}else{if(Ee=y.mipmaps,W&&_e){Ee.length>0&&ye++;const ae=st(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ue){W?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Oe,Ge,ve[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,ve[ae].width,ve[ae].height,0,Oe,Ge,ve[ae].data);for(let Fe=0;Fe<Ee.length;Fe++){const Mt=Ee[Fe].image[ae].image;W?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Mt.width,Mt.height,Oe,Ge,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,je,Mt.width,Mt.height,0,Oe,Ge,Mt.data)}}else{W?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,Ge,ve[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Oe,Ge,ve[ae]);for(let Fe=0;Fe<Ee.length;Fe++){const Ie=Ee[Fe];W?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Oe,Ge,Ie.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,je,Oe,Ge,Ie.image[ae])}}}m(y)&&S(n.TEXTURE_CUBE_MAP),he.__version=j.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ae(P,y,X,K,j,he){const pe=r.convert(X.format,X.colorSpace),ee=r.convert(X.type),ne=b(X.internalFormat,pe,ee,X.normalized,X.colorSpace),ge=i.get(y),Ue=i.get(X);if(Ue.__renderTarget=y,!ge.__hasExternalTextures){const ve=Math.max(1,y.width>>he),xe=Math.max(1,y.height>>he);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,he,ne,ve,xe,y.depth,0,pe,ee,null):t.texImage2D(j,he,ne,ve,xe,0,pe,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ke(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,Ue.__webglTexture,0,qe(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,j,Ue.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(P,y,X){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){const K=y.depthTexture,j=K&&K.isDepthTexture?K.type:null,he=T(y.stencilBuffer,j),pe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ke(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(y),he,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(y),he,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,P)}else{const K=y.textures;for(let j=0;j<K.length;j++){const he=K[j],pe=r.convert(he.format,he.colorSpace),ee=r.convert(he.type),ne=b(he.internalFormat,pe,ee,he.normalized,he.colorSpace);Ke(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe(y),ne,y.width,y.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe(y),ne,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ne,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(P,y,X){const K=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(y.depthTexture);if(j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Je(n.TEXTURE_CUBE_MAP,y.depthTexture);const ge=r.convert(y.depthTexture.format),Ue=r.convert(y.depthTexture.type);let ve;y.depthTexture.format===hi?ve=n.DEPTH_COMPONENT24:y.depthTexture.format===zi&&(ve=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ve,y.width,y.height,0,ge,Ue,null)}}else J(y.depthTexture,0);const he=j.__webglTexture,pe=qe(y),ee=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+X:n.TEXTURE_2D,ne=y.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===hi)Ke(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,he,0);else if(y.depthTexture.format===zi)Ke(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,he,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(P){const y=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=K}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let K=0;K<6;K++)mt(y.__webglFramebuffer[K],P,K);else{const K=P.texture.mipmaps;K&&K.length>0?mt(y.__webglFramebuffer[0],P,0):mt(y.__webglFramebuffer,P,0)}else if(X){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),Xe(y.__webglDepthbuffer[K],P,!1);else{const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,he)}}else{const K=P.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Xe(y.__webglDepthbuffer,P,!1);else{const j=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(P,y,X){const K=i.get(P);y!==void 0&&Ae(K.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&se(P)}function le(P){const y=P.texture,X=i.get(P),K=i.get(y);P.addEventListener("dispose",v);const j=P.textures,he=P.isWebGLCubeRenderTarget===!0,pe=j.length>1;if(pe||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,a.memory.textures++),he){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let ne=0;ne<y.mipmaps.length;ne++)X.__webglFramebuffer[ee][ne]=n.createFramebuffer()}else X.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)X.__webglFramebuffer[ee]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ee=0,ne=j.length;ee<ne;ee++){const ge=i.get(j[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Ke(P)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<j.length;ee++){const ne=j[ee];X.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const ge=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),ve=b(ne.internalFormat,ge,Ue,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),xe=qe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,ve,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Je(n.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Ae(X.__webglFramebuffer[ee][ne],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else Ae(X.__webglFramebuffer[ee],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(y)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ee=0,ne=j.length;ee<ne;ee++){const ge=j[ee],Ue=i.get(ge);let ve=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ue.__webglTexture),Je(ve,ge),Ae(X.__webglFramebuffer,P,ge,n.COLOR_ATTACHMENT0+ee,ve,0),m(ge)&&S(ve)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,K.__webglTexture),Je(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Ae(X.__webglFramebuffer[ne],P,y,n.COLOR_ATTACHMENT0,ee,ne);else Ae(X.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,ee,0);m(y)&&S(ee),t.unbindTexture()}P.depthBuffer&&se(P)}function ce(P){const y=P.textures;for(let X=0,K=y.length;X<K;X++){const j=y[X];if(m(j)){const he=A(P),pe=i.get(j).__webglTexture;t.bindTexture(he,pe),S(he),t.unbindTexture()}}}const me=[],He=[];function Be(P){if(P.samples>0){if(Ke(P)===!1){const y=P.textures,X=P.width,K=P.height;let j=n.COLOR_BUFFER_BIT;const he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(P),ee=y.length>1;if(ee)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Ue=i.get(y[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,X,K,0,0,X,K,j,n.NEAREST),l===!0&&(me.length=0,He.length=0,me.push(n.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(me.push(he),He.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);const Ue=i.get(y[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function qe(P){return Math.min(s.maxSamples,P.samples)}function Ke(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(P){const y=a.render.frame;c.get(P)!==y&&(c.set(P,y),P.update())}function ut(P,y){const X=P.colorSpace,K=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==ga&&X!==bi&&(at.getTransfer(X)===xt?(K!==Nn||j!==_n)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",X)),y}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=I,this.getTextureUnits=L,this.setTextureUnits=D,this.setTexture2D=J,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=oe,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E_(n,e){function t(i,s=bi){let r;const a=at.getTransfer(s);if(i===_n)return n.UNSIGNED_BYTE;if(i===Cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qh)return n.BYTE;if(i===jh)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===$n)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===nu)return n.ALPHA;if(i===iu)return n.RGB;if(i===Nn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===Ll)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===Zi)return n.RG;if(i===Il)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===aa||i===oa||i===la||i===ca)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zo||i===Ho||i===Go||i===Vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===pa||i===Ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wo||i===Xo)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===qo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yo)return r.COMPRESSED_R11_EAC;if(i===$o)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return r.COMPRESSED_RG11_EAC;if(i===Ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zo||i===Jo||i===Qo||i===jo||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===il)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ol)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===ul||i===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hl)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fl||i===pl||i===ma||i===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new du(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new On({vertexShader:T_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Ri{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new R_,m={},S=t.getContextAttributes();let A=null,b=null;const T=[],R=[],C=new re;let v=null,w=null;const N=new xn;N.viewport=new Ct;const O=new xn;O.viewport=new Ct;const x=[N,O],I=new Up;let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=T[Q];return ie===void 0&&(ie=new Za,T[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=T[Q];return ie===void 0&&(ie=new Za,T[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=T[Q];return ie===void 0&&(ie=new Za,T[Q]=ie),ie.getHandSpace()};function G(Q){const ie=R.indexOf(Q.inputSource);if(ie===-1)return;const Se=T[ie];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,h||a),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let Q=0;Q<T.length;Q++){const ie=R[Q];ie!==null&&(R[Q]=null,T[Q].disconnect(ie))}L=null,D=null,g.reset();for(const Q in m)delete m[Q];if(e.setRenderTarget(A),f=null,d=null,u=null,s=null,b=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),w!==null){const Q=w.camera;Q.fov=w.fov,Q.zoom=w.zoom,Q.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,We=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?zi:hi,We=S.stencil?hr:$n);const Xe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Un(d.textureWidth,d.textureHeight,{format:Nn,type:_n,depthTexture:new pr(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Un(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),it.setContext(s),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(Q){for(let ie=0;ie<Q.removed.length;ie++){const Se=Q.removed[ie],We=R.indexOf(Se);We>=0&&(R[We]=null,T[We].disconnect(Se))}for(let ie=0;ie<Q.added.length;ie++){const Se=Q.added[ie];let We=R.indexOf(Se);if(We===-1){for(let Xe=0;Xe<T.length;Xe++)if(Xe>=R.length){R.push(Se),We=Xe;break}else if(R[Xe]===null){R[Xe]=Se,We=Xe;break}if(We===-1)break}const Ae=T[We];Ae&&Ae.connect(Se)}}const U=new F,k=new F;function q(Q,ie,Se){U.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(Se.matrixWorld);const We=U.distanceTo(k),Ae=ie.projectionMatrix.elements,Xe=Se.projectionMatrix.elements,mt=Ae[14]/(Ae[10]-1),se=Ae[14]/(Ae[10]+1),oe=(Ae[9]+1)/Ae[5],le=(Ae[9]-1)/Ae[5],ce=(Ae[8]-1)/Ae[0],me=(Xe[8]+1)/Xe[0],He=mt*ce,Be=mt*me,qe=We/(-ce+me),Ke=qe*-ce;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ke),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const B=mt+qe,ut=se+qe,st=He-Ke,P=Be+(We-Ke),y=oe*se/ut*B,X=le*se/ut*B;Q.projectionMatrix.makePerspective(st,P,y,X,B,ut),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,Se=Q.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),I.near=O.near=N.near=ie,I.far=O.far=N.far=Se,(L!==I.near||D!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,D=I.far),I.layers.mask=Q.layers.mask|6,N.layers.mask=I.layers.mask&-5,O.layers.mask=I.layers.mask&-3;const We=Q.parent,Ae=I.cameras;ue(I,We);for(let Xe=0;Xe<Ae.length;Xe++)ue(Ae[Xe],We);Ae.length===2?q(I,N,O):I.projectionMatrix.copy(N.projectionMatrix),w===null&&Q.isPerspectiveCamera&&(w={camera:Q,fov:Q.fov,zoom:Q.zoom}),fe(Q,I,We)};function fe(Q,ie,Se){Se===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(Q){return m[Q]};let $e=null;function Je(Q,ie){if(c=ie.getViewerPose(h||a),p=ie,c!==null){const Se=c.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let We=!1;Se.length!==I.cameras.length&&(I.cameras.length=0,We=!0);for(let se=0;se<Se.length;se++){const oe=Se[se];let le=null;if(f!==null)le=f.getViewport(oe);else{const me=u.getViewSubImage(d,oe);le=me.viewport,se===0&&(e.setRenderTargetTextures(b,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(b))}let ce=x[se];ce===void 0&&(ce=new xn,ce.layers.enable(se),ce.viewport=new Ct,x[se]=ce),ce.matrix.fromArray(oe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(oe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),se===0&&(I.matrix.copy(ce.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),We===!0&&I.cameras.push(ce)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const se=u.getDepthInformation(Se[0]);se&&se.isValid&&se.texture&&g.init(se,s.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let se=0;se<Se.length;se++){const oe=Se[se].camera;if(oe){let le=m[oe];le||(le=new du,m[oe]=le);const ce=u.getCameraImage(oe);le.sourceTexture=ce}}}}for(let Se=0;Se<T.length;Se++){const We=R[Se],Ae=T[Se];We!==null&&Ae!==void 0&&Ae.update(We,ie,h||a)}$e&&$e(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}const it=new Tu;it.setAnimationLoop(Je),this.setAnimationLoop=function(Q){$e=Q},this.dispose=function(){}}}const P_=new ot,Iu=new Ze;Iu.set(-1,0,0,0,1,0,0,0,1);function L_(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Su(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,A,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),c(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,A):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),A=S.envMap,b=S.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Iu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function D_(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const R=T.program;i.uniformBlockBinding(b,R)}function h(b,T){let R=s[b.id];R===void 0&&(g(b),R=c(b),s[b.id]=R,b.addEventListener("dispose",S));const C=T.program;i.updateUBOMapping(b,C);const v=e.render.frame;r[b.id]!==v&&(d(b),r[b.id]=v)}function c(b){const T=u();b.__bindingPointIndex=T;const R=n.createBuffer(),C=b.__size,v=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,R),R}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=s[b.id],R=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,w=R.length;v<w;v++){const N=R[v];if(Array.isArray(N))for(let O=0,x=N.length;O<x;O++)f(N[O],v,O,C);else f(N,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,T,R,C){if(_(b,T,R,C)===!0){const v=b.__offset,w=b.value;if(Array.isArray(w)){let N=0;for(let O=0;O<w.length;O++){const x=w[O],I=m(x);p(x,b.__data,N),typeof x!="number"&&typeof x!="boolean"&&!x.isMatrix3&&!ArrayBuffer.isView(x)&&(N+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,b.__data)}}function p(b,T,R){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,R)}function _(b,T,R,C){const v=b.value,w=T+"_"+R;if(C[w]===void 0)return typeof v=="number"||typeof v=="boolean"?C[w]=v:ArrayBuffer.isView(v)?C[w]=v.slice():C[w]=v.clone(),!0;{const N=C[w];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return C[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function g(b){const T=b.uniforms;let R=0;const C=16;for(let w=0,N=T.length;w<N;w++){const O=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,I=O.length;x<I;x++){const L=O[x],D=Array.isArray(L.value)?L.value:[L.value];for(let G=0,H=D.length;G<H;G++){const J=D[G],U=m(J),k=R%C,q=k%U.boundary,ue=k+q;R+=q,ue!==0&&C-ue<U.storage&&(R+=C-ue),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=R,R+=U.storage}}}const v=R%C;return v>0&&(R+=C-v),b.__size=R,b.__cache={},this}function m(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",b),T}function S(b){const T=b.target;T.removeEventListener("dispose",S);const R=a.indexOf(T.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function A(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:h,dispose:A}}const I_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function N_(){return Hn===null&&(Hn=new hu(I_,16,16,Zi,Kn),Hn.name="DFG_LUT",Hn.minFilter=Qt,Hn.magFilter=Qt,Hn.wrapS=ii,Hn.wrapT=ii,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class U_{constructor(e={}){const{canvas:t=Wd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=f,g=new Set([Nl,Il,Dl]),m=new Set([_n,$n,cr,hr,Cl,Pl]),S=new Uint32Array(4),A=new Int32Array(4),b=new F;let T=null,R=null;const C=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let O=!1,x=null,I=null,L=null,D=null;this._outputColorSpace=ln;let G=0,H=0,J=null,U=-1,k=null;const q=new Ct,ue=new Ct;let fe=null;const $e=new Ye(0);let Je=0,it=t.width,Q=t.height,ie=1,Se=null,We=null;const Ae=new Ct(0,0,it,Q),Xe=new Ct(0,0,it,Q);let mt=!1;const se=new Hl;let oe=!1,le=!1;const ce=new ot,me=new F,He=new Ct,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ke(){return J===null?ie:1}let B=i;function ut(M,V){return t.getContext(M,V)}let st,P,y,X,K,j,he,pe,ee,ne,ge,Ue,ve,xe,Oe,Ge,je,W,_e,te,ye,Ee,ae;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Rn,!1),B===null){const V="webgl2";if(B=ut(V,M),B===null)throw ut(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(M){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),lt("WebGLRenderer: "+M.message),M}function Fe(){st=new Ng(B),st.init(),ye=new E_(B,st),P=new wg(B,st,e,ye),y=new M_(B,st),P.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),I=B.createFramebuffer(),L=B.createFramebuffer(),D=B.createFramebuffer(),X=new Fg(B),K=new c_,j=new w_(B,st,y,K,P,ye,X),he=new Ig(N),pe=new Bp(B),Ee=new Sg(B,pe),ee=new Ug(B,pe,X,Ee),ne=new Bg(B,ee,pe,Ee,X),W=new kg(B,P,j),Oe=new Eg(K),ge=new l_(N,he,st,P,Ee,Oe),Ue=new L_(N,K),ve=new u_,xe=new x_(st),je=new bg(N,he,y,ne,p,l),Ge=new S_(N,ne,P),ae=new D_(B,X,P,y),_e=new Mg(B,st,X),te=new Og(B,st,X),X.programs=ge.programs,N.capabilities=P,N.extensions=st,N.properties=K,N.renderLists=ve,N.shadowMap=Ge,N.state=y,N.info=X}_!==_n&&(w=new Hg(_,t.width,t.height,o,s,r));const Ie=new C_(N,B);this.xr=Ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const M=st.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=st.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(it,Q,!1))},this.getSize=function(M){return M.set(it,Q)},this.setSize=function(M,V,Z=!0){if(Ie.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}it=M,Q=V,t.width=Math.floor(M*ie),t.height=Math.floor(V*ie),Z===!0&&(t.style.width=M+"px",t.style.height=V+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(it*ie,Q*ie).floor()},this.setDrawingBufferSize=function(M,V,Z){it=M,Q=V,ie=Z,t.width=Math.floor(M*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,M,V)},this.setEffects=function(M){if(_===_n){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let V=0;V<M.length;V++)if(M[V].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(q)},this.getViewport=function(M){return M.copy(Ae)},this.setViewport=function(M,V,Z,Y){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,V,Z,Y),y.viewport(q.copy(Ae).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(Xe)},this.setScissor=function(M,V,Z,Y){M.isVector4?Xe.set(M.x,M.y,M.z,M.w):Xe.set(M,V,Z,Y),y.scissor(ue.copy(Xe).multiplyScalar(ie).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(M){y.setScissorTest(mt=M)},this.setOpaqueSort=function(M){Se=M},this.setTransparentSort=function(M){We=M},this.getClearColor=function(M){return M.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,Z=!0){let Y=0;if(M){let $=!1;if(J!==null){const we=J.texture.format;$=g.has(we)}if($){const we=J.texture.type,Ce=m.has(we),Me=je.getClearColor(),Le=je.getClearAlpha(),Ne=Me.r,tt=Me.g,rt=Me.b;Ce?(S[0]=Ne,S[1]=tt,S[2]=rt,S[3]=Le,B.clearBufferuiv(B.COLOR,0,S)):(A[0]=Ne,A[1]=tt,A[2]=rt,A[3]=Le,B.clearBufferiv(B.COLOR,0,A))}else Y|=B.COLOR_BUFFER_BIT}V&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),x=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),je.dispose(),ve.dispose(),xe.dispose(),K.dispose(),he.dispose(),ne.dispose(),Ee.dispose(),ae.dispose(),ge.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",rc),Ie.removeEventListener("sessionend",ac),Di.stop()};function Mt(M){M.preventDefault(),vc("WebGLRenderer: Context Lost."),O=!0}function dt(){vc("WebGLRenderer: Context Restored."),O=!1;const M=X.autoReset,V=Ge.enabled,Z=Ge.autoUpdate,Y=Ge.needsUpdate,$=Ge.type;Fe(),X.autoReset=M,Ge.enabled=V,Ge.autoUpdate=Z,Ge.needsUpdate=Y,Ge.type=$}function Rn(M){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function kn(M){const V=M.target;V.removeEventListener("dispose",kn),nd(V)}function nd(M){id(M),K.remove(M)}function id(M){const V=K.get(M).programs;V!==void 0&&(V.forEach(function(Z){ge.releaseProgram(Z)}),M.isShaderMaterial&&ge.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,Z,Y,$,we){V===null&&(V=Be);const Ce=$.isMesh&&$.matrixWorld.determinantAffine()<0,Me=ad(M,V,Z,Y,$);y.setMaterial(Y,Ce);let Le=Z.index,Ne=1;if(Y.wireframe===!0){if(Le=ee.getWireframeAttribute(Z),Le===void 0)return;Ne=2}const tt=Z.drawRange,rt=Z.attributes.position;let De=tt.start*Ne,ft=(tt.start+tt.count)*Ne;we!==null&&(De=Math.max(De,we.start*Ne),ft=Math.min(ft,(we.start+we.count)*Ne)),Le!==null?(De=Math.max(De,0),ft=Math.min(ft,Le.count)):rt!=null&&(De=Math.max(De,0),ft=Math.min(ft,rt.count));const Ut=ft-De;if(Ut<0||Ut===1/0)return;Ee.setup($,Y,Me,Z,Le);let Tt,St=_e;if(Le!==null&&(Tt=pe.get(Le),St=te,St.setIndex(Tt)),$.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*Ke()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if($.isLine){let $t=Y.linewidth;$t===void 0&&($t=1),y.setLineWidth($t*Ke()),$.isLineSegments?St.setMode(B.LINES):$.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else $.isPoints?St.setMode(B.POINTS):$.isSprite&&St.setMode(B.TRIANGLES);if($.isBatchedMesh)if(st.get("WEBGL_multi_draw"))St.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $t=$._multiDrawStarts,Re=$._multiDrawCounts,nn=$._multiDrawCount,ct=Le?pe.get(Le).bytesPerElement:1,yn=K.get(Y).currentProgram.getUniforms();for(let Bn=0;Bn<nn;Bn++)yn.setValue(B,"_gl_DrawID",Bn),St.render($t[Bn]/ct,Re[Bn])}else if($.isInstancedMesh)St.renderInstances(De,Ut,$.count);else if(Z.isInstancedBufferGeometry){const $t=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Re=Math.min(Z.instanceCount,$t);St.renderInstances(De,Ut,Re)}else St.render(De,Ut)};function sc(M,V,Z,Y){x!==null&&M.isNodeMaterial&&x.setObject(Y,M),oe===!0&&Oe.setState(M,Z,!1),M.transparent===!0&&M.side===bn&&M.forceSinglePass===!1?(M.side=hn,M.needsUpdate=!0,Mr(M,V,Y),M.side=$i,M.needsUpdate=!0,Mr(M,V,Y),M.side=bn):Mr(M,V,Y)}this.compile=function(M,V,Z=null){Z===null&&(Z=M),x!==null&&x.renderStart(M,V,Z),R=xe.get(Z),R.init(V),v.push(R),Z.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),M!==Z&&M.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),R.setupLights(),x!==null&&x.updateLights(R.state.lightsArray),le=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,le),oe===!0&&Oe.setGlobalState(this.clippingPlanes,V),x!==null&&Ge.render(R.state.shadowsArray,Z,V);const Y=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const we=$.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){const Me=we[Ce];sc(Me,Z,V,$),Y.add(Me)}else sc(we,Z,V,$),Y.add(we)}),R=v.pop(),x!==null&&x.renderEnd(),Y},this.compileAsync=function(M,V,Z=null){const Y=this.compile(M,V,Z);return new Promise($=>{function we(){if(Y.forEach(function(Ce){const Le=K.get(Ce).currentProgram;(Le===void 0||Le.isReady())&&Y.delete(Ce)}),Y.size===0){$(M);return}setTimeout(we,10)}st.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ba=null;function sd(M){Ba&&Ba(M)}function rc(){Di.stop()}function ac(){Di.start()}const Di=new Tu;Di.setAnimationLoop(sd),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(M){Ba=M,Ie.setAnimationLoop(M),M===null?Di.stop():Di.start()},Ie.addEventListener("sessionstart",rc),Ie.addEventListener("sessionend",ac),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;x!==null&&x.renderStart(M,V);const Z=Ie.enabled===!0&&Ie.isPresenting===!0,Y=w!==null&&(J===null||Z)&&w.begin(N,J);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(V),V=Ie.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,V,J),R=xe.get(M,v.length),R.init(V),R.state.textureUnits=j.getTextureUnits(),v.push(R),ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),se.setFromProjectionMatrix(ce,Xn,V.reversedDepth),le=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,le),T=ve.get(M,C.length),T.init(),C.push(T),Ie.enabled===!0&&Ie.isPresenting===!0){const Ce=N.xr.getDepthSensingMesh();Ce!==null&&za(Ce,V,-1/0,N.sortObjects)}za(M,V,0,N.sortObjects),T.finish(),x!==null&&x.updateLights(R.state.lightsArray),N.sortObjects===!0&&T.sort(Se,We),qe=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,qe&&je.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Oe.beginShadows();const $=R.state.shadowsArray;if(Ge.render($,M,V),oe===!0&&Oe.endShadows(),(Y&&w.hasRenderPass())===!1){const Ce=T.opaque,Me=T.transmissive;if(R.setupLights(),V.isArrayCamera){const Le=V.cameras;if(Me.length>0)for(let Ne=0,tt=Le.length;Ne<tt;Ne++){const rt=Le[Ne];lc(Ce,Me,M,rt)}qe&&je.render(M);for(let Ne=0,tt=Le.length;Ne<tt;Ne++){const rt=Le[Ne];oc(T,M,rt,rt.viewport)}}else Me.length>0&&lc(Ce,Me,M,V),qe&&je.render(M),oc(T,M,V)}J!==null&&H===0&&(j.updateMultisampleRenderTarget(J),j.updateRenderTargetMipmap(J)),Y&&w.end(N),M.isScene===!0&&M.onAfterRender(N,M,V),Ee.resetDefaultState(),U=-1,k=null,v.pop(),v.length>0?(R=v[v.length-1],j.setTextureUnits(R.state.textureUnits),oe===!0&&Oe.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,x!==null&&x.renderEnd()};function za(M,V,Z,Y){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLightProbeGrid)R.pushLightProbeGrid(M);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(se)){Y&&He.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const Ce=ne.update(M),Me=M.material;Me.visible&&T.push(M,Ce,Me,Z,He.z,null,V)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(se))){const Ce=ne.update(M),Me=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),He.copy(M.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),He.copy(Ce.boundingSphere.center)),He.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){const Le=Ce.groups;for(let Ne=0,tt=Le.length;Ne<tt;Ne++){const rt=Le[Ne],De=Me[rt.materialIndex];De&&De.visible&&T.push(M,Ce,De,Z,He.z,rt,V)}}else Me.visible&&T.push(M,Ce,Me,Z,He.z,null,V)}}const we=M.children;for(let Ce=0,Me=we.length;Ce<Me;Ce++)za(we[Ce],V,Z,Y)}function oc(M,V,Z,Y){const{opaque:$,transmissive:we,transparent:Ce}=M;R.setupLightsView(Z),oe===!0&&Oe.setGlobalState(N.clippingPlanes,Z),Y&&y.viewport(q.copy(Y)),$.length>0&&Sr($,V,Z),we.length>0&&Sr(we,V,Z),Ce.length>0&&Sr(Ce,V,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function lc(M,V,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Y.id]===void 0){const De=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Y.id]=new Un(1,1,{generateMipmaps:!0,type:De?Kn:_n,minFilter:Bi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}const we=R.state.transmissionRenderTarget[Y.id],Ce=Y.viewport||q;we.setSize(Ce.z*N.transmissionResolutionScale,Ce.w*N.transmissionResolutionScale);const Me=N.getRenderTarget(),Le=N.getActiveCubeFace(),Ne=N.getActiveMipmapLevel();N.setRenderTarget(we),N.getClearColor($e),Je=N.getClearAlpha(),Je<1&&N.setClearColor(16777215,.5),N.clear(),qe&&je.render(Z);const tt=N.toneMapping;N.toneMapping=qn;const rt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),R.setupLightsView(Y),oe===!0&&Oe.setGlobalState(N.clippingPlanes,Y),Sr(M,Z,Y),j.updateMultisampleRenderTarget(we),j.updateRenderTargetMipmap(we),st.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ft=0,Ut=V.length;ft<Ut;ft++){const Tt=V[ft],{object:St,geometry:$t,material:Re,group:nn}=Tt;if(Re.side===bn&&St.layers.test(Y.layers)){const ct=Re.side;Re.side=hn,Re.needsUpdate=!0,cc(St,Z,Y,$t,Re,nn),Re.side=ct,Re.needsUpdate=!0,De=!0}}De===!0&&(j.updateMultisampleRenderTarget(we),j.updateRenderTargetMipmap(we))}N.setRenderTarget(Me,Le,Ne),N.setClearColor($e,Je),rt!==void 0&&(Y.viewport=rt),N.toneMapping=tt}function Sr(M,V,Z){const Y=V.isScene===!0?V.overrideMaterial:null;for(let $=0,we=M.length;$<we;$++){const Ce=M[$],{object:Me,geometry:Le,group:Ne}=Ce;let tt=Ce.material;tt.allowOverride===!0&&Y!==null&&(tt=Y),Me.layers.test(Z.layers)&&cc(Me,V,Z,Le,tt,Ne)}}function cc(M,V,Z,Y,$,we){x!==null&&$.isNodeMaterial&&x.setObject(M,$),M.onBeforeRender(N,V,Z,Y,$,we),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(N,V,Z,Y,M,we),$.transparent===!0&&$.side===bn&&$.forceSinglePass===!1?($.side=hn,$.needsUpdate=!0,N.renderBufferDirect(Z,V,Y,$,M,we),$.side=$i,$.needsUpdate=!0,N.renderBufferDirect(Z,V,Y,$,M,we),$.side=bn):N.renderBufferDirect(Z,V,Y,$,M,we),M.onAfterRender(N,V,Z,Y,$,we)}function Mr(M,V,Z){V.isScene!==!0&&(V=Be);const Y=K.get(M),$=R.state.lights,we=R.state.shadowsArray,Ce=$.state.version,Me=ge.getParameters(M,$.state,we,V,Z,R.state.lightProbeGridArray),Le=ge.getProgramCacheKey(Me);let Ne=Y.programs;Y.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;const tt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Y.envMap=he.get(M.envMap||Y.environment,tt),Y.envMapRotation=Y.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",kn),Ne=new Map,Y.programs=Ne);let rt=Ne.get(Le);if(rt!==void 0){if(Y.currentProgram===rt&&Y.lightsStateVersion===Ce)return uc(M,Me),rt}else Me.uniforms=ge.getUniforms(M),x!==null&&M.isNodeMaterial&&x.build(M,Z,Me),M.onBeforeCompile(Me,N),rt=ge.acquireProgram(Me,Le),Ne.set(Le,rt),Y.uniforms=Me.uniforms;const De=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Oe.uniform),uc(M,Me),Y.needsLights=ld(M),Y.lightsStateVersion=Ce,Y.needsLights&&(De.ambientLightColor.value=$.state.ambient,De.lightProbe.value=$.state.probe,De.sunLights.value=$.state.sun,De.sunLightShadows.value=$.state.sunShadow,De.directionalLights.value=$.state.directional,De.directionalLightShadows.value=$.state.directionalShadow,De.spotLights.value=$.state.spot,De.spotLightShadows.value=$.state.spotShadow,De.rectAreaLights.value=$.state.rectArea,De.ltc_1.value=$.state.rectAreaLTC1,De.ltc_2.value=$.state.rectAreaLTC2,De.pointLights.value=$.state.point,De.pointLightShadows.value=$.state.pointShadow,De.hemisphereLights.value=$.state.hemi,De.sunShadowMatrix.value=$.state.sunShadowMatrix,De.sunShadowCascade.value=$.state.sunShadowCascade,De.directionalShadowMatrix.value=$.state.directionalShadowMatrix,De.spotLightMatrix.value=$.state.spotLightMatrix,De.spotLightMap.value=$.state.spotLightMap,De.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=R.state.lightProbeGridArray.length>0,Y.currentProgram=rt,Y.uniformsList=null,rt}function hc(M){if(M.uniformsList===null){const V=M.currentProgram.getUniforms();M.uniformsList=ha.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function uc(M,V){const Z=K.get(M);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function rd(M,V){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let Z=0,Y=M.length;Z<Y;Z++){const $=M[Z];if($.texture!==null&&$.boundingBox.containsPoint(b))return $}return null}function ad(M,V,Z,Y,$){V.isScene!==!0&&(V=Be),j.resetTextureUnits();const we=V.fog,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,Me=J===null?N.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:at.workingColorSpace,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ne=he.get(Y.envMap||Ce,Le),tt=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,rt=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!Z.morphAttributes.position,ft=!!Z.morphAttributes.normal,Ut=!!Z.morphAttributes.color;let Tt=qn;Y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Tt=N.toneMapping);const St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$t=St!==void 0?St.length:0,Re=K.get(Y),nn=R.state.lights;if(oe===!0&&(le===!0||M!==k)){const wt=M===k&&Y.id===U;Oe.setState(Y,M,wt)}let ct=!1;Y.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==nn.state.version||Re.outputColorSpace!==Me||$.isBatchedMesh&&Re.batching===!1||!$.isBatchedMesh&&Re.batching===!0||$.isBatchedMesh&&Re.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Re.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Re.instancing===!1||!$.isInstancedMesh&&Re.instancing===!0||$.isSkinnedMesh&&Re.skinning===!1||!$.isSkinnedMesh&&Re.skinning===!0||$.isInstancedMesh&&Re.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Re.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Re.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Re.instancingMorph===!1&&$.morphTexture!==null||Re.envMap!==Ne||Y.fog===!0&&Re.fog!==we||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Oe.numPlanes||Re.numIntersection!==Oe.numIntersection)||Re.vertexAlphas!==tt||Re.vertexTangents!==rt||Re.morphTargets!==De||Re.morphNormals!==ft||Re.morphColors!==Ut||Re.toneMapping!==Tt||Re.morphTargetsCount!==$t||!!Re.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Re.__version=Y.version);let yn=Re.currentProgram;ct===!0&&(yn=Mr(Y,V,$),x&&Y.isNodeMaterial&&x.onUpdateProgram(Y,yn,Re));let Bn=!1,di=!1,ts=!1;const yt=yn.getUniforms(),It=Re.uniforms;if(y.useProgram(yn.program)&&(Bn=!0,di=!0,ts=!0),Y.id!==U&&(U=Y.id,di=!0),Re.needsLights){const wt=rd(R.state.lightProbeGridArray,$);Re.lightProbeGrid!==wt&&(Re.lightProbeGrid=wt,di=!0)}if(Bn||k!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),yt.setValue(B,"projectionMatrix",M.projectionMatrix),yt.setValue(B,"viewMatrix",M.matrixWorldInverse);const pi=yt.map.cameraPosition;pi!==void 0&&pi.setValue(B,me.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yt.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,di=!0,ts=!0)}if(Re.needsLights&&(nn.state.sunShadowMap.length>0&&yt.setValue(B,"sunShadowMap",nn.state.sunShadowMap,j),nn.state.directionalShadowMap.length>0&&yt.setValue(B,"directionalShadowMap",nn.state.directionalShadowMap,j),nn.state.spotShadowMap.length>0&&yt.setValue(B,"spotShadowMap",nn.state.spotShadowMap,j),nn.state.pointShadowMap.length>0&&yt.setValue(B,"pointShadowMap",nn.state.pointShadowMap,j)),$.isSkinnedMesh){yt.setOptional(B,$,"bindMatrix"),yt.setOptional(B,$,"bindMatrixInverse");const wt=$.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),yt.setValue(B,"boneTexture",wt.boneTexture,j))}$.isBatchedMesh&&(yt.setOptional(B,$,"batchingTexture"),yt.setValue(B,"batchingTexture",$._matricesTexture,j),yt.setOptional(B,$,"batchingIdTexture"),yt.setValue(B,"batchingIdTexture",$._indirectTexture,j),yt.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&yt.setValue(B,"batchingColorTexture",$._colorsTexture,j));const fi=Z.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&W.update($,Z,yn),(di||Re.receiveShadow!==$.receiveShadow)&&(Re.receiveShadow=$.receiveShadow,yt.setValue(B,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(It.envMapIntensity.value=V.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=N_()),di){if(yt.setValue(B,"toneMappingExposure",N.toneMappingExposure),Re.needsLights&&od(It,ts),we&&Y.fog===!0&&Ue.refreshFogUniforms(It,we),Ue.refreshMaterialUniforms(It,Y,ie,Q,R.state.transmissionRenderTarget[M.id]),Re.needsLights&&Re.lightProbeGrid){const wt=Re.lightProbeGrid;It.probesSH.value=wt.texture,It.probesMin.value.copy(wt.boundingBox.min),It.probesMax.value.copy(wt.boundingBox.max),It.probesResolution.value.copy(wt.resolution)}ha.upload(B,hc(Re),It,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ha.upload(B,hc(Re),It,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yt.setValue(B,"center",$.center),yt.setValue(B,"modelViewMatrix",$.modelViewMatrix),yt.setValue(B,"normalMatrix",$.normalMatrix),yt.setValue(B,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const wt=Y.uniformsGroups;for(let pi=0,ns=wt.length;pi<ns;pi++){const fc=wt[pi];ae.update(fc,yn),ae.bind(fc,yn)}}return yn}function od(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.sunLights.needsUpdate=V,M.sunLightShadows.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function ld(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(M,V,Z){const Y=K.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(M.texture).__webglTexture=V,K.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){const Z=K.get(M);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(M,V=0,Z=0){J=M,G=V,H=Z;let Y=null,$=!1,we=!1;if(M){const Me=K.get(M);if(Me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),q.copy(M.viewport),ue.copy(M.scissor),fe=M.scissorTest,y.viewport(q),y.scissor(ue),y.setScissorTest(fe),U=-1;return}else if(Me.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(Me.__hasExternalTextures)j.rebindTextures(M,K.get(M.texture).__webglTexture,K.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const tt=M.depthTexture;if(Me.__boundDepthTexture!==tt){if(tt!==null&&K.has(tt)&&(M.width!==tt.image.width||M.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(we=!0);const Ne=K.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[V])?Y=Ne[V][Z]:Y=Ne[V],$=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?Y=K.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[Z]:Y=Ne,q.copy(M.viewport),ue.copy(M.scissor),fe=M.scissorTest}else q.copy(Ae).multiplyScalar(ie).floor(),ue.copy(Xe).multiplyScalar(ie).floor(),fe=mt;if(Z!==0&&(Y=I),y.bindFramebuffer(B.FRAMEBUFFER,Y)&&y.drawBuffers(M,Y),y.viewport(q),y.scissor(ue),y.setScissorTest(fe),$){const Me=K.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Me.__webglTexture,Z)}else if(we){const Me=V;for(let Le=0;Le<M.textures.length;Le++){const Ne=K.get(M.textures[Le]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,Z,Me)}}else if(M!==null&&Z!==0){const Me=K.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,Z)}U=-1};function dc(M){const V=K.get(M);return(V.__readFormat!==M.format||V.__readType!==M.type)&&(V.__readFormat=M.format,V.__readType=M.type,V.__formatReadable=P.textureFormatReadable(M.format),V.__typeReadable=P.textureTypeReadable(M.type)),V}this.readRenderTargetPixels=function(M,V,Z,Y,$,we,Ce,Me=0){if(!(M&&M.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=K.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){y.bindFramebuffer(B.FRAMEBUFFER,Le);try{const Ne=M.textures[Me],tt=Ne.format,rt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const De=dc(Ne);if(De.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-Y&&Z>=0&&Z<=M.height-$&&B.readPixels(V,Z,Y,$,ye.convert(tt),ye.convert(rt),we)}finally{const Ne=J!==null?K.get(J).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,V,Z,Y,$,we,Ce,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=K.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le)if(V>=0&&V<=M.width-Y&&Z>=0&&Z<=M.height-$){y.bindFramebuffer(B.FRAMEBUFFER,Le);const Ne=M.textures[Me],tt=Ne.format,rt=Ne.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const De=dc(Ne);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(V,Z,Y,$,ye.convert(tt),ye.convert(rt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Ut=J!==null?K.get(J).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Ut);const Tt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xd(B,Tt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ft),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ft),B.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,Z=0){const Y=Math.pow(2,-Z),$=Math.floor(M.image.width*Y),we=Math.floor(M.image.height*Y),Ce=V!==null?V.x:0,Me=V!==null?V.y:0;j.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Ce,Me,$,we),y.unbindTexture()},this.copyTextureToTexture=function(M,V,Z=null,Y=null,$=0,we=0){let Ce,Me,Le,Ne,tt,rt,De,ft,Ut;const Tt=M.isCompressedTexture?M.mipmaps[we]:M.image;if(Z!==null)Ce=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Ne=Z.min.x,tt=Z.min.y,rt=Z.isBox3?Z.min.z:0;else{const It=Math.pow(2,-$);Ce=Math.floor(Tt.width*It),Me=Math.floor(Tt.height*It),M.isDataArrayTexture?Le=Tt.depth:M.isData3DTexture?Le=Math.floor(Tt.depth*It):Le=1,Ne=0,tt=0,rt=0}Y!==null?(De=Y.x,ft=Y.y,Ut=Y.z):(De=0,ft=0,Ut=0);const St=ye.convert(V.format),$t=ye.convert(V.type);let Re;V.isData3DTexture?(j.setTexture3D(V,0),Re=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(j.setTexture2DArray(V,0),Re=B.TEXTURE_2D_ARRAY):(j.setTexture2D(V,0),Re=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const nn=y.getParameter(B.UNPACK_ROW_LENGTH),ct=y.getParameter(B.UNPACK_IMAGE_HEIGHT),yn=y.getParameter(B.UNPACK_SKIP_PIXELS),Bn=y.getParameter(B.UNPACK_SKIP_ROWS),di=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Tt.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(B.UNPACK_SKIP_ROWS,tt),y.pixelStorei(B.UNPACK_SKIP_IMAGES,rt);const ts=M.isDataArrayTexture||M.isData3DTexture,yt=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){const It=K.get(M),fi=K.get(V),wt=K.get(It.__renderTarget),pi=K.get(fi.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,wt.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let ns=0;ns<Le;ns++)ts&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(M).__webglTexture,$,rt+ns),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(V).__webglTexture,we,Ut+ns)),B.blitFramebuffer(Ne,tt,Ce,Me,De,ft,Ce,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||K.has(M)){const It=K.get(M),fi=K.get(V);y.bindFramebuffer(B.READ_FRAMEBUFFER,L),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,D);for(let wt=0;wt<Le;wt++)ts?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,$,rt+wt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,$),yt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fi.__webglTexture,we,Ut+wt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fi.__webglTexture,we),$!==0?B.blitFramebuffer(Ne,tt,Ce,Me,De,ft,Ce,Me,B.COLOR_BUFFER_BIT,B.NEAREST):yt?B.copyTexSubImage3D(Re,we,De,ft,Ut+wt,Ne,tt,Ce,Me):B.copyTexSubImage2D(Re,we,De,ft,Ne,tt,Ce,Me);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yt?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(Re,we,De,ft,Ut,Ce,Me,Le,St,$t,Tt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Re,we,De,ft,Ut,Ce,Me,Le,St,Tt.data):B.texSubImage3D(Re,we,De,ft,Ut,Ce,Me,Le,St,$t,Tt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,De,ft,Ce,Me,St,$t,Tt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,De,ft,Tt.width,Tt.height,St,Tt.data):B.texSubImage2D(B.TEXTURE_2D,we,De,ft,Ce,Me,St,$t,Tt);y.pixelStorei(B.UNPACK_ROW_LENGTH,nn),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),y.pixelStorei(B.UNPACK_SKIP_PIXELS,yn),y.pixelStorei(B.UNPACK_SKIP_ROWS,Bn),y.pixelStorei(B.UNPACK_SKIP_IMAGES,di),we===0&&V.generateMipmaps&&B.generateMipmap(Re),y.unbindTexture()},this.initRenderTarget=function(M){K.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){G=0,H=0,J=null,y.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const Ch={type:"change"},$l={type:"start"},Nu={type:"end"},ta=new Ta,Ph=new Dn,O_=Math.cos(70*ru.DEG2RAD),kt=new F,un=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eo=1e-6;class Uu extends Fp{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Tn,this._lastTargetPosition=new F,this._quat=new Tn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sh,this._sphericalDelta=new sh,this._scale=1,this._panOffset=new F,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new F,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k_.bind(this),this._onPointerDown=F_.bind(this),this._onPointerUp=B_.bind(this),this._onContextMenu=q_.bind(this),this._onMouseWheel=G_.bind(this),this._onKeyDown=V_.bind(this),this._onTouchStart=W_.bind(this),this._onTouchMove=X_.bind(this),this._onMouseDown=z_.bind(this),this._onMouseMove=H_.bind(this),this._interceptControlDown=Y_.bind(this),this._interceptControlUp=$_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=_t.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ch),this.update(),this.state=_t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=kt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new F(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ta.origin.copy(this.object.position),ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ta.direction))<O_?this.object.lookAt(this.target):(Ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),ta.intersectPlane(Ph,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eo||this._lastTargetPosition.distanceToSquared(this.target)>Eo?(this.dispatchEvent(Ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;kt.copy(s).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(un*this._rotateDelta.x/t.clientHeight),this._rotateUp(un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function F_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function k_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function B_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nu),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function z_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case ri.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case ri.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent($l)}function H_(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function G_(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent($l),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nu))}function V_(n){this.enabled!==!1&&this._handleKeyDown(n)}function W_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Wn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case Wn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent($l)}function X_(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function q_(n){this.enabled!==!1&&n.preventDefault()}function Y_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class K_ extends Ft{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new re(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}}const _s=new F,Lh=new ot,Dh=new ot,Ih=new F,Nh=new F;class Z_{constructor(e={}){const t=this;let i,s,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Lh.copy(_.matrixWorldInverse),Dh.multiplyMatrices(_.projectionMatrix,Lh),c(p,p,_),this.sortObjects&&f(p)},this.setSize=function(p,_){i=p,s=_,r=i/2,a=s/2,l.style.width=p+"px",l.style.height=_+"px"};function h(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,g=p.children.length;_<g;_++)h(p.children[_])}function c(p,_,g){if(p.visible===!1){h(p);return}if(p.isCSS2DObject){_s.setFromMatrixPosition(p.matrixWorld),_s.applyMatrix4(Dh);const m=_s.z>=-1&&_s.z<=1&&p.layers.test(g.layers)===!0,S=p.element;if(S.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,_,g);const b=100*p.center.x,T=100*p.center.y;S.style.transformOrigin=`${b}% ${T}%`;const R=-p.rotation2D,C=_s.x*r+r,v=-_s.y*a+a;S.style.transform=`translate(${-b}%, ${-T}%) translate(${C}px, ${v}px) rotate(${R}rad)`,S.parentNode!==l&&l.appendChild(S),p.onAfterRender(t,_,g)}const A={distanceToCameraSquared:u(g,p)};o.objects.set(p,A)}for(let m=0,S=p.children.length;m<S;m++)c(p.children[m],_,g)}function u(p,_){return Ih.setFromMatrixPosition(p.matrixWorld),Nh.setFromMatrixPosition(_.matrixWorld),Ih.distanceToSquared(Nh)}function d(p){const _=[];return p.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(p){const _=d(p).sort(function(m,S){if(m.renderOrder!==S.renderOrder)return S.renderOrder-m.renderOrder;const A=o.objects.get(m).distanceToCameraSquared,b=o.objects.get(S).distanceToCameraSquared;return A-b}),g=_.length;for(let m=0,S=_.length;m<S;m++)_[m].element.style.zIndex=g-m}}}let To=7;const Pe=()=>(To=To*16807%2147483647,(To-1)/2147483646);let Vn=1;function J_(n){Vn=n}function vt(n=512){n=Math.max(64,Math.round(n*Vn));const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d",{willReadFrequently:!0});return t.scale(n/(n/Vn),n/(n/Vn)),[e,t]}function dn(n,e,t=2,i=!1){const s=n.width,r=n.getContext("2d").getImageData(0,0,s,s).data,a=document.createElement("canvas");a.width=a.height=s;const o=a.getContext("2d"),l=o.createImageData(s,s),h=(c,u)=>{c=(c+s)%s,u=(u+s)%s;const d=(u*s+c)*4,f=(r[d]*.3+r[d+1]*.59+r[d+2]*.11)/255;return i?1-f:f};for(let c=0;c<s;c++)for(let u=0;u<s;u++){const d=(h(u+1,c)-h(u-1,c))*t,f=(h(u,c+1)-h(u,c-1))*t,p=Math.hypot(d,f,1),_=(c*s+u)*4;l.data[_]=(-d/p*.5+.5)*255,l.data[_+1]=(f/p*.5+.5)*255,l.data[_+2]=(1/p*.5+.5)*255,l.data[_+3]=255}return o.putImageData(l,0,0),gt(a,e,!1)}function gt(n,e,t=!0){const i=new Nf(n);return i.wrapS=i.wrapT=fa,i.repeat.set(1/e,1/e),t&&(i.colorSpace=ln),i.anisotropy=4,i}function sn(n,e,t,i,s){for(let r=0;r<s;r++){n.fillStyle=i[Pe()*i.length|0],n.globalAlpha=t*Pe();const a=1+Pe()*2.5;n.fillRect(Pe()*e,Pe()*e,a,a)}n.globalAlpha=1}function Q_(){const n={};{const[e,t]=vt(256);t.fillStyle="#efebe3",t.fillRect(0,0,256,256),sn(t,256,.25,["#ffffff","#ddd6ca","#e6e0d5"],5e3),n.stucco=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#f2ece2",t.fillRect(0,0,256,256),sn(t,256,.18,["#fbf7f0","#e4dccf"],3e3),n.plaster=gt(e,6)}{const[e,t]=vt(512);t.fillStyle="#2b2724",t.fillRect(0,0,512,512);const i=512/12;for(let s=0;s<12;s++){const r=30+Pe()*14;t.fillStyle=`rgb(${r+6},${r+2},${r})`,t.fillRect(s*i,0,i-2,512);for(let a=0;a<140;a++)t.fillStyle=Pe()<.5?"#1c1a18":"#45403a",t.globalAlpha=.5,t.fillRect(s*i+Pe()*i,Pe()*512,2+Pe()*8,1+Pe()*2);t.globalAlpha=1,t.fillStyle="#151311",t.fillRect(s*i+i-2,0,2,512)}n.charred=gt(e,6)}{const[e,t]=vt(512);let i=0;const s=["#b98d6c","#c49a78","#a87d5f","#cfa888","#b48a6a","#9f7558","#c8a080"];for(;i<512;){const r=10+Pe()*34;t.fillStyle=s[Pe()*s.length|0],t.fillRect(0,i,512,r),i+=r}sn(t,512,.35,["#8a654b","#dcc0a2","#9a7458"],9e3),n.rammed=gt(e,8)}{const[e,t]=vt(512);t.fillStyle="#9d968a",t.fillRect(0,0,512,512);const i=4,s=512/i;for(let r=0;r<i;r++){let a=-Pe()*100;for(;a<512;){const o=90+Pe()*120,l=175+Pe()*25;t.fillStyle=`rgb(${l},${l-6},${l-16})`,t.fillRect(a+2,r*s+2,o-4,s-4),a+=o}}sn(t,512,.25,["#8e877b","#d8d1c4"],6e3),n.stone=gt(e,8)}{const[e,t]=vt(256);t.fillStyle="#6f6a62",t.fillRect(0,0,256,256);for(let i=0;i<4;i++){let s=-Pe()*60;for(;s<256;){const r=40+Pe()*70,a=120+Pe()*30;t.fillStyle=`rgb(${a},${a-4},${a-10})`,t.fillRect(s+2,i*64+2,r-3,60),s+=r}}n.plinth=gt(e,4)}{const[e,t]=vt(512);t.fillStyle="#c9a57a",t.fillRect(0,0,512,512);const i=512/8;for(let s=0;s<8;s++){let r=-Pe()*300;for(;r<512;){const a=200+Pe()*250,o=Pe()*18;t.fillStyle=`rgb(${200+o},${164+o},${118+o})`,t.fillRect(s*i+1,r+1,i-2,a-2);for(let l=0;l<18;l++){t.strokeStyle="rgba(140,100,60,0.15)",t.beginPath();const h=s*i+Pe()*i;t.moveTo(h,r),t.lineTo(h+Pe()*6-3,r+a),t.stroke()}r+=a}}n.oak=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#8a6a4a",t.fillRect(0,0,256,256);for(let i=0;i<10;i++){const s=Pe()*20;t.fillStyle=`rgb(${150+s},${115+s},${80+s})`,t.fillRect(i*25.6+1,0,23.6,256)}n.deck=gt(e,4)}{const[e,t]=vt(256);t.fillStyle="#b07a4f",t.fillRect(0,0,256,256);for(let i=0;i<16;i++){const s=Pe()*22;t.fillStyle=`rgb(${176+s},${122+s},${80+s})`,t.fillRect(0,i*16+1,256,14)}n.soffit=gt(e,4)}{const[e,t]=vt(256);t.fillStyle="#cfc58e",t.fillRect(0,0,256,256);for(let i=0;i<256;i+=3)t.fillStyle=i%6?"#c4b97f":"#d8cf9c",t.fillRect(0,i,256,2);t.fillStyle="#3d4a35",t.fillRect(0,0,256,6),t.fillRect(0,125,256,6),t.fillRect(0,0,6,256),n.tatami=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#3b3b39",t.fillRect(0,0,256,256),sn(t,256,.7,["#555552","#2a2a29","#6b6658"],6e3),n.rubber=gt(e,4)}{const[e,t]=vt(256);t.fillStyle="#6a645c",t.fillRect(0,0,256,256);for(let i=0;i<8;i++)t.fillStyle="#7d776e",t.fillRect(i*32,0,3,256),t.fillStyle="#4e4943",t.fillRect(i*32+3,0,2,256);n.seam=gt(e,12)}{const[e,t]=vt(256);t.fillStyle="#d9d4c8",t.fillRect(0,0,256,256),sn(t,256,.6,["#bfb8aa","#eeeae2","#a9a294"],9e3);for(let i=0;i<256;i+=16)t.strokeStyle="rgba(150,142,128,0.45)",t.lineWidth=2,t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();n.gravel=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#5f8c3c",t.fillRect(0,0,256,256),sn(t,256,.5,["#4f7a30","#77a24e","#6a9545"],8e3),n.turf=gt(e,6)}{const[e,t]=vt(512);t.fillStyle="#a3a46e",t.fillRect(0,0,512,512),sn(t,512,.5,["#8f9660","#b8b37e","#868c55","#b0a46c"],26e3),sn(t,512,.9,["#e2c75a","#d18bb0","#f2f0e6","#c97a4a","#9a7fc4"],2200),n.meadow=gt(e,30)}{const[e,t]=vt(256);t.fillStyle="#c08552",t.fillRect(0,0,256,256);for(let i=0;i<12;i++){const s=Pe()*20;t.fillStyle=`rgb(${190+s},${132+s},${82+s})`,t.fillRect(0,i*21+1,256,19)}n.cedar=gt(e,4)}{const[e,t]=vt(256);t.fillStyle="#a9a59e",t.fillRect(0,0,256,256),sn(t,256,.3,["#97938c","#c2beb6"],5e3),n.concrete=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#f6f6f4",t.fillRect(0,0,256,256);for(let i=0;i<140;i++){const s=Pe()*256,r=Pe()*256,a=10+Pe()*40,o=t.createRadialGradient(s,r,0,s,r,a),l=Pe()<.5?"rgba(255,255,255,0.35)":"rgba(226,226,222,0.22)";o.addColorStop(0,l),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(s-a,r-a,a*2,a*2)}sn(t,256,.12,["#fdfdfc","#e8e8e5"],2500),n.lime=gt(e,8),n.limeN=dn(e,8,1.2)}{const[e,t]=vt(512);t.fillStyle="#b98544",t.fillRect(0,0,512,512);const i=512/7;for(let s=0;s<7;s++){let r=-Pe()*300;for(;r<512;){const a=220+Pe()*260,o=Pe()*22-8;t.fillStyle=`rgb(${200+o},${143+o},${78+o*.6})`,t.fillRect(s*i+1,r+1,i-2,a-2);for(let l=0;l<26;l++){t.strokeStyle=`rgba(${120+Pe()*30},${70+Pe()*20},30,${.08+Pe()*.14})`,t.lineWidth=1+Pe(),t.beginPath();const h=s*i+Pe()*i;t.moveTo(h,r),t.bezierCurveTo(h+Pe()*8-4,r+a*.3,h+Pe()*8-4,r+a*.7,h+Pe()*6-3,r+a),t.stroke()}t.fillStyle="rgba(70,40,15,0.6)",t.fillRect(s*i,r,i,1.5),r+=a}t.fillStyle="rgba(70,40,15,0.55)",t.fillRect(s*i,0,1.5,512)}n.honey=gt(e,7),n.honeyN=dn(e,7,1.5)}{const[e,t]=vt(512);t.fillStyle="#6e4e2e",t.fillRect(0,0,512,512);const i=512/(5*Math.SQRT2)/1,s=5*i,r=Math.SQRT1_2;for(let a=-8;a<=8;a++)for(let o=-30;o<=30;o++)for(const l of[0,1]){const h=o*i+a*s,c=o*i-a*s+(l?i:0),[u,d,f,p]=l?[h,c,i,s]:[h,c,s,i];t.setTransform(Vn*r,-Vn*r,Vn*r,Vn*r,0,0);const _=Pe()*26-6;t.fillStyle=`rgb(${200+_},${160+_},${110+_*.8})`,t.fillRect(u+1.2,d+1.2,f-2.4,p-2.4);for(let g=0;g<4;g++)t.fillStyle="rgba(120,80,40,0.13)",l?t.fillRect(u+2+Pe()*(f-4),d+2,1,p-4):t.fillRect(u+2,d+2+Pe()*(p-4),f-4,1)}t.setTransform(Vn,0,0,Vn,0,0),n.herring=gt(e,2.4),n.herringN=dn(e,2.4,2.2)}{const[e,t]=vt(512);t.fillStyle="#f2efea",t.fillRect(0,0,512,512),sn(t,512,.1,["#e5e0d8","#ffffff"],4e3);for(let i=0;i<14;i++){let s=Pe()*512,r=Pe()*512;t.strokeStyle=i%4?"rgba(150,140,128,0.35)":"rgba(160,128,80,0.45)",t.lineWidth=i%4?.8+Pe():2+Pe()*2,t.beginPath(),t.moveTo(s,r);for(let a=0;a<30;a++)s+=20+Pe()*10,r+=Pe()*30-15,t.lineTo(s%512,r),s>512&&(s-=512,t.moveTo(s,r));t.stroke()}n.marble=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#2b2c2c",t.fillRect(0,0,256,256),sn(t,256,.35,["#3a3b3b","#1f2020","#45464a"],7e3);for(let i=0;i<6;i++)t.strokeStyle="rgba(120,120,118,0.18)",t.lineWidth=.6,t.beginPath(),t.moveTo(Pe()*256,0),t.lineTo(Pe()*256,256),t.stroke();t.fillStyle="#1a1a1a",t.fillRect(0,0,256,1.5),t.fillRect(0,0,1.5,256),t.fillRect(0,128,256,1.5),n.blackstone=gt(e,4),n.blackstoneN=dn(e,4,1.5)}{const[e,t]=vt(256);t.fillStyle="#e8e4da",t.fillRect(0,0,256,256);const i=8,s=256/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Pe(),l=t.createLinearGradient(a*s,r*s,a*s+s,r*s+s);l.addColorStop(0,`rgb(${40+o*30},${110+o*40},${84+o*30})`),l.addColorStop(.6,`rgb(${30+o*20},${92+o*34},${70+o*24})`),l.addColorStop(1,`rgb(${56+o*30},${130+o*40},${100+o*30})`),t.fillStyle=l,t.fillRect(a*s+2,r*s+2,s-4,s-4),t.fillStyle="rgba(255,255,255,0.18)",t.fillRect(a*s+4,r*s+4,s*.3,2)}n.zellige=gt(e,1.33),n.zelligeN=dn(e,1.33,3)}{const[e,t]=vt(256);t.fillStyle="#e8d8b8",t.fillRect(0,0,256,256);for(let i=0;i<10;i++){const s=Pe()*14;t.fillStyle=`rgb(${232+s*.5},${214+s},${178+s})`,t.fillRect(0,i*25.6+1,256,23.6)}sn(t,256,.15,["#d6c39c","#f4ead6"],1500),n.aspen=gt(e,3),n.aspenN=dn(e,3,1.5)}{const[e,t]=vt(256);t.fillStyle="#5f5a52",t.fillRect(0,0,512,512);const i=[];for(let l=0;l<26;l++)i.push([Pe()*512,Pe()*512]);const s=t.getImageData(0,0,e.width,e.height),r=e.width,a=512/r,o=i.map(()=>{const l=150+Pe()*45;return[l,l-6-Pe()*8,l-16-Pe()*14]});for(let l=0;l<r;l++)for(let h=0;h<r;h++){let c=1e9,u=1e9,d=0;const f=h*a,p=l*a;for(let S=0;S<i.length;S++)for(const A of[-512,0,512])for(const b of[-512,0,512]){const T=Math.hypot(f-i[S][0]-A,p-i[S][1]-b);T<c?(u=c,c=T,d=S):T<u&&(u=T)}const _=(l*r+h)*4,g=u-c<5?.45:1,m=.92+Pe()*.12;s.data[_]=o[d][0]*g*m,s.data[_+1]=o[d][1]*g*m,s.data[_+2]=o[d][2]*g*m,s.data[_+3]=255}t.putImageData(s,0,0),n.flag=gt(e,12),n.flagN=dn(e,12,2.5)}{const[e,t]=vt(256);t.fillStyle="#3d5a50",t.fillRect(0,0,256,256);const i=8,s=256/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Pe()*26;t.fillStyle=`rgb(${82+o},${128+o},${112+o})`,t.fillRect(a*s+1.5,r*s+1.5,s-3,s-3)}n.pooltile=gt(e,4),n.pooltileN=dn(e,4,2)}{const[e,t]=vt(256);t.fillStyle="#b8b0a2",t.fillRect(0,0,256,256);for(let i=0;i<4;i++)for(let s=0;s<2;s++){const r=214+Pe()*16;t.fillStyle=`rgb(${r},${r-6},${r-18})`,t.fillRect(s*128+i%2*64+1,i*64+1,126,62),t.fillRect(s*128+i%2*64+1-256,i*64+1,126,62)}sn(t,256,.15,["#c9c1b2","#ece6da"],3e3),n.stonetile=gt(e,8),n.stonetileN=dn(e,8,1.6)}{const[e,t]=vt(128);t.fillStyle="#e4dccd",t.fillRect(0,0,128,128);for(let i=0;i<128;i+=2)t.fillStyle="rgba(190,178,158,0.25)",t.fillRect(0,i,128,1),t.fillRect(i,0,1,128);n.linen=gt(e,1.5)}return n.charredN=dn(n.charred.image,6,2.5),n.seamN=dn(n.seam.image,12,3),n.tatamiN=dn(n.tatami.image,6,1.5),n.rammedN=dn(n.rammed.image,8,1.2),n.gravelN=dn(n.gravel.image,6,2),n}function Ou(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Lt;let h=0;for(let c=0;c<n.length;++c){const u=n[c];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(t){let c=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+c);c+=n[d].attributes.position.count}l.setIndex(u)}for(const c in r){const u=Uh(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in a){const u=a[c][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[c].length;++_)f.push(a[c][_][d]);const p=Uh(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(p)}}}return l}function Uh(n){let e,t,i,s=-1,r=0;for(let h=0;h<n.length;++h){const c=n[h];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*t}const a=new e(r),o=new en(a,t,i);let l=0;for(let h=0;h<n.length;++h){const c=n[h];if(c.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=c.count;d<f;d++)for(let p=0;p<t;p++){const _=c.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(c.array,l);l+=c.count*t}return s!==void 0&&(o.gpuType=s),o}const j_=[["h",55,50.5,72],["v",72,27.5,55]],e1=[{id:"101",name:"Kitchen",wing:"Living Pavilion",x0:20,y0:55,x1:36,y1:79,h:12,floor:"stonetile",cond:!0,notes:'Kitchen Round 1 (swipe results Oct 11): two-island layout. A 10-ft quartzite waterfall island with stools along one side, a work island with flush induction, rift white oak flat-slab handleless cabinets, a 48" pro gas range with a high-heat wok burner under a hood hidden in the cabinetry, an integrated quartzite sink carved from the counter under a garden-view window, a lift-and-slide wall that pockets fully open to the pergola, a skylight with a linear suspended light, open oak shelves, an appliance garage, a built-in stainless fridge, a steam oven wall, the walk-in pantry and the hydroponic herb wall.',fin:'Large-format honed stone tile floor; lime plaster walls; rift white oak flat-slab handleless cabinets, flush inset in face frames (finger-pull reveals); honed quartzite counters, waterfall island + integrated quartzite sink; honed marble slab backsplash (zellige alternate); 48" pro gas range with wok burner; hidden 1,500 m3/h hood insert in oak cabinetry; brushed stainless faucet; built-in stainless fridge; steam oven + wall oven column; flush 2-zone induction in the work island; open rift oak shelves; skylight + linear suspended LED',floorName:"Large-format honed limestone",w:16,d:24,area:384},{id:"102",name:"Dining",wing:"Living Pavilion",x0:36,y0:55,x1:50,y1:79,h:12,floor:"herring",cond:!0,notes:"Seats eight under exposed fir beams and a big paper lantern. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north.",fin:"Walnut herringbone; lime plaster; exposed fir beams; cedar ceiling; dining table (open item); mixed chairs: Windsor (walnut) on the courtyard side, Shaker (cherry) on the north side; paper lantern",floorName:"Walnut herringbone",w:14,d:24,area:336},{id:"103",name:"Living + Conversation Pit",wing:"Living Pavilion",x0:50,y0:55,x1:72,y1:79,h:12,floor:"herring",cond:!0,notes:"The heart of the house, fully open to the garden: 21 ft of pocketing glass to the courtyard and a big fixed mountain-view window to the north. 16-ft sunken conversation pit with a low modular sofa, cognac leather lounge chair, paper lanterns, shoji screens to the dining room, and art on the east wall. A slim linear gas fire sits in a lime-plaster plinth (no stone fireplace).",fin:"Walnut herringbone; lime plaster; exposed fir beams; cedar ceiling; low linen sofa in the pit; classic leather lounger; paper lanterns over the pit + woven pendants by the north window; shoji screens; frameless corner glass at the courtyard corner; bronze frames elsewhere; art wall",floorName:"Walnut herringbone",w:22,d:24,area:528},{id:"104",name:"Walk-in Pantry",wing:"Living Pavilion",x0:10,y0:67,x1:20,y1:79,h:10,floor:"stonetile",cond:!0,notes:"Floor-to-ceiling open honey-oak shelving, second fridge, appliance counter.",fin:"Large-format honed limestone; lime plaster; walnut open shelving",floorName:"Large-format honed limestone",w:10,d:12,area:120},{id:"105",name:"Mudroom + Gear",wing:"Living Pavilion",x0:10,y0:55,x1:20,y1:67,h:10,floor:"stonetile",cond:!0,notes:"Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash.",fin:"Large-format honed limestone; lime plaster; built-in walnut cubbies; stone dog wash",floorName:"Large-format honed limestone",w:10,d:12,area:120},{id:"201",name:"Master Bedroom",wing:"Sleeping Wing",x0:72,y0:59,x1:86,y1:83,h:11,floor:"honey",cond:!0,notes:"Floor-to-ceiling glass to the mountains with sheer linen curtains, cove lighting, and a big fan under a wood ceiling. Low linen-wrapped bed against a lime-plaster headwall ledge (no wood platform or headboard), and a pair of lounge chairs at the view window.",fin:"Walnut floor; lime plaster; built-in cherry joinery (flush inset); shoji doors; wood ceiling with cove lighting; sheer linen curtains; big ceiling fan; linen bed; bronze window frames",floorName:"Wide-plank walnut",w:14,d:24,area:336},{id:"202",name:"Master Bath",wing:"Sleeping Wing",x0:86,y0:69,x1:98,y1:83,h:10,floor:"stone",cond:!0,notes:"Deep Japanese hinoki soaking tub at the corner window under a skylight. Open walk-in rain shower behind a black-stone wall (no glass enclosure), one long floating oak vanity with integrated stone basins and matte black taps, and a WC room. Opens to a walled bath garden.",fin:"Honed limestone floor and walls; green zellige shower wall; hinoki soaking tub; built-in cherry vanity recessed into the wall, flush inset doors, integrated basins; unlacquered brass taps (mount: open item); skylight",floorName:"Honed limestone",w:12,d:14,area:168},{id:"203",name:"Master Closet",wing:"Sleeping Wing",x0:86,y0:59,x1:98,y1:69,h:10,floor:"honey",cond:!0,notes:"Walk-in closet with honey-oak millwork and a center island.",fin:"Walnut floor; cherry millwork; lime plaster; shoji door",floorName:"Wide-plank walnut",w:12,d:10,area:120},{id:"204",name:"East Engawa Gallery",wing:"Sleeping Wing",x0:72,y0:14,x1:78,y1:59,h:10,floor:"honey",cond:!0,notes:"Glazed engawa along the courtyard: honey-oak floor, sliding glass, a long low bench and wall-mounted art. Links living, bedrooms and the wellness wing.",fin:"Walnut floor; lime plaster; bronze sliding glass",floorName:"Wide-plank walnut",w:6,d:45,area:270},{id:"205",name:"Laundry",wing:"Sleeping Wing",x0:78,y0:49,x1:88,y1:59,h:10,floor:"stone",cond:!0,notes:"Next to the bedrooms. Stacked W/D pair, folding counter, drying rack.",fin:"Honed limestone; lime plaster; built-in white cabinets (flush inset doors); plain square-edge white trim",floorName:"Honed limestone",w:10,d:10,area:100},{id:"206",name:"Linen + Mechanical",wing:"Sleeping Wing",x0:88,y0:49,x1:98,y1:59,h:10,floor:"concrete",cond:!0,notes:"Linen storage, heat pump air handler, ERV, water heating.",fin:"Sealed concrete; painted plaster",floorName:"Sealed concrete",w:10,d:10,area:100},{id:"207",name:"Kids' Room 1",wing:"Sleeping Wing",x0:85,y0:36.5,x1:98,y1:49,h:10,floor:"honey",cond:!0,notes:"Compact 13 x 12.5 ft white room: window-seat reading nook on the east window, desk by the window, wardrobe, low cube shelves with bins, a beanbag, and a small bouldering wall with a crash mat.",fin:"Walnut floor; white lime plaster; shoji door; cherry window seat with linen cushion; built-in cherry desk and recessed cube shelves; built-in white wardrobe (flush inset doors); bouldering panel",floorName:"Wide-plank walnut",w:13,d:12.5,area:162.5},{id:"208",name:"Jack-and-Jill Bath",wing:"Sleeping Wing",x0:78,y0:30,x1:85,y1:45.5,h:10,floor:"stone",cond:!0,notes:"Tighter 7 x 15.5 ft bath (about 109 SF) between the kids' rooms: two vanities, WC and a tiled tub-shower, lockable from each side.",fin:"Honed limestone; white tile tub-shower; cherry vanities; unlacquered brass taps",floorName:"Honed limestone",w:7,d:15.5,area:108.5},{id:"209",name:"Kids' Room 2 / Guest",wing:"Sleeping Wing",x0:85,y0:24,x1:98,y1:36.5,h:10,floor:"honey",cond:!0,notes:"Compact 13 x 12.5 ft room that still fits a queen bed, so it doubles as the guest room. Window-seat nook, desk by the window, cube shelves, and a small climbing wall feature. The Guest / Pool Bath is just down the engawa.",fin:"Walnut floor; white lime plaster; shoji door; built-in cherry window seat, desk and recessed cube shelves; climbing panel",floorName:"Wide-plank walnut",w:13,d:12.5,area:162.5},{id:"210",name:"Guest / Pool Bath",wing:"Sleeping Wing",x0:78,y0:14,x1:88,y1:24,h:10,floor:"stone",cond:!0,notes:"Guest-capable full bath (walk-in shower, vanity, WC) reached from the engawa, also serving the pool and Kids' Room 2 when it hosts guests.",fin:"Honed limestone; tiled walk-in shower (floor: open item); built-in cherry vanity (flush inset doors); unlacquered brass taps",floorName:"Honed limestone",w:10,d:10,area:100},{id:"211",name:"Pool Equipment",wing:"Sleeping Wing",x0:88,y0:14,x1:98,y1:24,h:9,floor:"concrete",cond:!1,notes:"Unconditioned. Saltwater pool equipment: variable-speed pump, cartridge filter, heat pump heater and the salt chlorine generator cell (replace the cell about every 3-5 years). Ties into the utility yard next door. Exterior access only.",fin:"Sealed concrete",floorName:"Sealed concrete",w:10,d:10,area:100},{id:"212",name:"Kids' Entry + Closet",wing:"Sleeping Wing",x0:78,y0:24,x1:85,y1:30,h:10,floor:"honey",cond:!0,notes:"Entry vestibule from the east engawa to Kids' Room 2, with a wardrobe.",fin:"Walnut floor; lime plaster; shoji door; built-in white wardrobe (flush inset doors)",floorName:"Wide-plank walnut",w:7,d:6,area:42},{id:"213",name:"Kids' Entry",wing:"Sleeping Wing",x0:78,y0:45.5,x1:85,y1:49,h:10,floor:"honey",cond:!0,notes:"Short entry vestibule from the east engawa to Kids' Room 1.",fin:"Walnut floor; lime plaster; shoji door",floorName:"Wide-plank walnut",w:7,d:3.5,area:24.5},{id:"301",name:"South Covered Walkway",wing:"Wellness + Gym Wing",x0:36,y0:22,x1:72,y1:27,h:10,floor:"flagstone",cond:!1,notes:"Open-air covered walkway (not conditioned) under the wellness-wing eave, closing the courtyard ring. Flagstone floor, open to the courtyard, with glass doors into the east and west galleries.",fin:"Flagstone floor; open-air, covered by the wellness-wing roof; cedar soffit",floorName:"Flagstone (open-air)",w:36,d:5,area:180},{id:"302",name:"Exercise Room",wing:"Wellness + Gym Wing",x0:28,y0:0,x1:50,y1:22,h:12,floor:"honey",cond:!0,notes:"Calm studio look: honey-oak floor with a rubber lifting area, a high wood ceiling, and a mirror wall. Free-standing rig with wood rings and a climbing rope, Pilates Cadillac and reformer, wood water rower, treadmill, kettlebell and dumbbell rack, and a bars-and-bands wall. Glass slides open to the sprint lane and an outdoor pull-up station.",fin:"Walnut floor; rubber lifting tiles; lime plaster; high wood ceiling; mirror wall; black steel rig; wood rings",floorName:"Wide-plank walnut",w:22,d:22,area:484},{id:"303",name:"Wet Room",wing:"Wellness + Gym Wing",x0:50,y0:9,x1:66,y1:22,h:10,floor:"stone",cond:!0,notes:"Black-stone wet room: two rain showers, a built-in cold plunge lined in green zellige (39-50 F), teak bench. Serves the sauna and steam room.",fin:"Honed limestone floor; Japanese earth-plaster walls (tadelakt-style sealed); green zellige plunge; teak bench; unlacquered brass rain showers",floorName:"Honed limestone",w:16,d:13,area:208},{id:"304",name:"Sauna",wing:"Wellness + Gym Wing",x0:50,y0:0,x1:58,y1:9,h:8,floor:"aspen",cond:!0,notes:"Warm cedar walls with tiered pale-aspen benches, backlit underneath, and an electric rock heater (no wood stove). Low window toward the pool and meadow.",fin:"Cedar walls and ceiling; pale aspen tiered benches, backlit; aspen duckboard floor; electric rock heater",floorName:"Aspen duckboard",w:8,d:9,area:72},{id:"305",name:"Steam Room",wing:"Wellness + Gym Wing",x0:58,y0:0,x1:66,y1:9,h:8,floor:"blackstone",cond:!0,notes:"Stone steam room (not a white hammam): honed black stone on the walls, floor and heated bench.",fin:"Honed black stone floor, walls and heated bench (kept: steam needs an impervious stone)",floorName:"Honed black stone",w:8,d:9,area:72},{id:"306",name:"Changing + Towels",wing:"Wellness + Gym Wing",x0:66,y0:0,x1:72,y1:22,h:10,floor:"stone",cond:!0,notes:"Towels, robes, honey-oak lockers. Door to the pool deck and outdoor shower.",fin:"Honed limestone; lime plaster; cherry lockers",floorName:"Honed limestone",w:6,d:22,area:132},{id:"401",name:"Entry Genkan",wing:"Studio + Arrival",x0:18,y0:46,x1:30,y1:55,h:10,floor:"stonetile",cond:!0,notes:"Stone genkan with a step-up to the oak floor, a rammed-earth feature wall and one large artwork. Solid charred-oak pivot door (no glass entry). The first view lines up across the engawa into the courtyard.",fin:"Large-format honed limestone; rammed-earth feature wall; lime plaster; kumiko lattice screen; bronze front door (style + timber: open item)",floorName:"Large-format honed limestone",w:12,d:9,area:108},{id:"402",name:"Coat + Shoe Closet",wing:"Studio + Arrival",x0:18,y0:40,x1:24,y1:46,h:10,floor:"honey",cond:!0,notes:"Coat and shoe storage.",fin:"Walnut floor; walnut millwork",floorName:"Wide-plank walnut",w:6,d:6,area:36},{id:"403",name:"Powder Room",wing:"Studio + Arrival",x0:24,y0:40,x1:30,y1:46,h:10,floor:"stone",cond:!0,notes:"Powder room by the entry: integrated stone basin, lime-plaster walls.",fin:"Honed limestone; lime plaster; integrated stone basin; unlacquered brass tap",floorName:"Honed limestone",w:6,d:6,area:36},{id:"404",name:"Tatami Room",wing:"Studio + Arrival",x0:18,y0:28,x1:30,y1:40,h:9,floor:"tatami",cond:!0,notes:"8-mat (12 x 12 ft) tatami room (loved) with a tokonoma alcove, low table, zabuton and a paper andon lantern. Shoji slide open to the engawa and courtyard; low garden window. Used for tea, meditation, or as an overflow guest room.",fin:"Tatami; lime plaster; shoji to the engawa; fusuma closet doors; walnut tokonoma",floorName:"Tatami (8 mats)",w:12,d:12,area:144},{id:"405",name:"Sound Lock + AV Closet",wing:"Studio + Arrival",x0:18,y0:22,x1:30,y1:28,h:10,floor:"honey",cond:!0,notes:"Sound lock vestibule between the west engawa and the studio: two solid-core doors with full perimeter seals and automatic drop seals, so one is always closed. Also holds the AV rack and instrument storage.",fin:"Walnut floor; painted plaster; two solid-core doors with perimeter + drop seals",floorName:"Wide-plank walnut",w:12,d:6,area:72},{id:"406",name:"West Engawa Gallery",wing:"Studio + Arrival",x0:30,y0:22,x1:36,y1:55,h:10,floor:"honey",cond:!0,notes:"Glazed engawa from the entry to the office and great room.",fin:"Walnut floor; lime plaster; bronze sliding glass",floorName:"Wide-plank walnut",w:6,d:33,area:198},{id:"407",name:"Isolated Studio / Office",wing:"Studio + Arrival",x0:4,y0:0,x1:28,y1:22,h:14,floor:"honey",cond:!0,notes:"Fully isolated room-within-a-room studio that is still a great work office: sit-stand desk facing the garden, studio desk with mixer and MPC, digital piano, e-drums, guitar wall and sofa. Decoupled inner stud walls on resilient isolation mounts (about 14 in total wall build-up per side), a floated floor on isolation pads, an isolated ceiling on spring hangers, laminated double glazing with an air gap, and quiet decoupled HVAC with lined ducts and silencers. Target STC 60+ (about 60-65 dB isolation) and NC-20 inside. 528 SF gross, about 426 SF net inside the inner shell (21 ft 8 in x 19 ft 8 in).",fin:"Floated walnut floor on isolation pads; decoupled inner walls on resilient mounts; isolated ceiling; laminated double glazing in bronze frames; solid-core doors with seals (not shoji, to keep STC 60+); lined ducts; lime plaster; walnut desks; fabric acoustic panels; acoustic ceiling clouds; sculpted wood ceiling; skylight; layered pendants",floorName:"Wide-plank walnut",w:24,d:22,area:528}],t1=[{o:"h",c:55,a:10,b:18,pos:"105",neg:null,ext:!0,h:10,feats:[{a:11,b:17,k:"window",x:[3,7]}]},{o:"h",c:55,a:18,b:20,pos:"105",neg:"401",ext:!1,h:10,feats:[]},{o:"h",c:55,a:20,b:30,pos:"101",neg:"401",ext:!1,h:12,feats:[]},{o:"h",c:55,a:30,b:36,pos:"101",neg:"406",ext:!1,h:12,feats:[{a:30,b:36,k:"open",x:null}]},{o:"h",c:55,a:36,b:50,pos:"102",neg:null,ext:!0,h:12,feats:[{a:36.5,b:49.5,k:"glass",x:null}]},{o:"h",c:55,a:50,b:72,pos:"103",neg:null,ext:!0,h:12,feats:[{a:50.5,b:72,k:"fixed",x:null}]},{o:"h",c:79,a:10,b:20,pos:null,neg:"104",ext:!0,h:10,feats:[]},{o:"h",c:79,a:20,b:36,pos:null,neg:"101",ext:!0,h:12,feats:[{a:20.8,b:25.8,k:"window",x:[3,7.5]},{a:26.2,b:30,k:"window",x:[3.6,7.5]},{a:30.5,b:35.6,k:"glass",x:null}]},{o:"h",c:79,a:36,b:50,pos:null,neg:"102",ext:!0,h:12,feats:[{a:37,b:49,k:"glass",x:null}]},{o:"h",c:79,a:50,b:72,pos:null,neg:"103",ext:!0,h:12,feats:[{a:51,b:71,k:"fixed",x:null}]},{o:"v",c:20,a:55,b:67,pos:"101",neg:"105",ext:!1,h:12,feats:[{a:59,b:62,k:"door",x:null}]},{o:"v",c:20,a:67,b:79,pos:"101",neg:"104",ext:!1,h:12,feats:[{a:71,b:74,k:"door",x:null}]},{o:"v",c:36,a:22,b:27,pos:"301",neg:"406",ext:!1,h:10,feats:[{a:22.5,b:26.5,k:"glass",x:null}]},{o:"v",c:36,a:27,b:55,pos:null,neg:"406",ext:!0,h:10,feats:[{a:27.5,b:54.5,k:"glass",x:null}]},{o:"v",c:36,a:55,b:79,pos:"102",neg:"101",ext:!1,h:12,feats:[{a:55,b:79,k:"open",x:null}]},{o:"v",c:50,a:0,b:9,pos:"304",neg:"302",ext:!1,h:12,feats:[]},{o:"v",c:50,a:9,b:22,pos:"303",neg:"302",ext:!1,h:12,feats:[{a:12,b:15,k:"door",x:null}]},{o:"v",c:50,a:55,b:79,pos:"103",neg:"102",ext:!1,h:12,feats:[{a:55,b:79,k:"open",x:null}]},{o:"v",c:72,a:0,b:14,pos:null,neg:"306",ext:!0,h:10,feats:[]},{o:"v",c:72,a:14,b:22,pos:"204",neg:"306",ext:!1,h:10,feats:[{a:16,b:19,k:"door",x:null}]},{o:"v",c:72,a:22,b:27,pos:"204",neg:"301",ext:!1,h:10,feats:[{a:22.5,b:26.5,k:"glass",x:null}]},{o:"v",c:72,a:27,b:55,pos:"204",neg:null,ext:!0,h:10,feats:[{a:27.5,b:55,k:"fixed",x:null}]},{o:"v",c:72,a:55,b:59,pos:"204",neg:"103",ext:!1,h:12,feats:[{a:55,b:59,k:"open",x:null}]},{o:"v",c:72,a:59,b:79,pos:"201",neg:"103",ext:!1,h:12,feats:[]},{o:"v",c:72,a:79,b:83,pos:"201",neg:null,ext:!0,h:11,feats:[]},{o:"h",c:67,a:10,b:20,pos:"104",neg:"105",ext:!1,h:10,feats:[]},{o:"v",c:10,a:55,b:67,pos:"105",neg:null,ext:!0,h:10,feats:[{a:59,b:62,k:"exdoor",x:null}]},{o:"v",c:10,a:67,b:79,pos:"104",neg:null,ext:!0,h:10,feats:[{a:71,b:77,k:"window",x:[3,7]}]},{o:"h",c:59,a:72,b:78,pos:"201",neg:"204",ext:!1,h:11,feats:[{a:73,b:77,k:"slide",x:null}]},{o:"h",c:59,a:78,b:86,pos:"201",neg:"205",ext:!1,h:11,feats:[]},{o:"h",c:59,a:86,b:88,pos:"203",neg:"205",ext:!1,h:10,feats:[]},{o:"h",c:59,a:88,b:98,pos:"203",neg:"206",ext:!1,h:10,feats:[]},{o:"h",c:83,a:72,b:86,pos:null,neg:"201",ext:!0,h:11,feats:[{a:73,b:85,k:"fixed",x:null}]},{o:"h",c:83,a:86,b:98,pos:null,neg:"202",ext:!0,h:10,feats:[{a:88,b:97,k:"window",x:[2,8]}]},{o:"v",c:86,a:59,b:69,pos:"203",neg:"201",ext:!1,h:11,feats:[{a:61,b:64,k:"door",x:null}]},{o:"v",c:86,a:69,b:83,pos:"202",neg:"201",ext:!1,h:11,feats:[{a:71,b:74.5,k:"slide",x:null}]},{o:"h",c:69,a:86,b:98,pos:"202",neg:"203",ext:!1,h:10,feats:[]},{o:"v",c:98,a:14,b:24,pos:null,neg:"211",ext:!0,h:9,feats:[]},{o:"v",c:98,a:24,b:36.5,pos:null,neg:"209",ext:!0,h:10,feats:[{a:26,b:34,k:"window",x:[2.5,8]}]},{o:"v",c:98,a:36.5,b:49,pos:null,neg:"207",ext:!0,h:10,feats:[{a:39,b:47,k:"window",x:[2.5,8]}]},{o:"v",c:98,a:49,b:59,pos:null,neg:"206",ext:!0,h:10,feats:[{a:50,b:53,k:"exdoor",x:null}]},{o:"v",c:98,a:59,b:69,pos:null,neg:"203",ext:!0,h:10,feats:[{a:62,b:67,k:"window",x:[6,8]}]},{o:"v",c:98,a:69,b:83,pos:null,neg:"202",ext:!0,h:10,feats:[{a:71,b:82,k:"window",x:[2,8]}]},{o:"h",c:14,a:72,b:78,pos:"204",neg:null,ext:!0,h:10,feats:[{a:73,b:77,k:"exdoor",x:null}]},{o:"h",c:14,a:78,b:88,pos:"210",neg:null,ext:!0,h:10,feats:[{a:81,b:85,k:"window",x:[5.5,8]}]},{o:"h",c:14,a:88,b:98,pos:"211",neg:null,ext:!0,h:9,feats:[{a:91,b:95,k:"exdoor",x:null}]},{o:"v",c:78,a:14,b:24,pos:"210",neg:"204",ext:!1,h:10,feats:[{a:18,b:21,k:"door",x:null}]},{o:"v",c:78,a:24,b:30,pos:"212",neg:"204",ext:!1,h:10,feats:[{a:24.5,b:27.5,k:"door",x:null}]},{o:"v",c:78,a:30,b:45.5,pos:"208",neg:"204",ext:!1,h:10,feats:[]},{o:"v",c:78,a:45.5,b:49,pos:"213",neg:"204",ext:!1,h:10,feats:[{a:45.75,b:48.75,k:"door",x:null}]},{o:"v",c:78,a:49,b:59,pos:"205",neg:"204",ext:!1,h:10,feats:[{a:52,b:55,k:"door",x:null}]},{o:"h",c:49,a:78,b:85,pos:"205",neg:"213",ext:!1,h:10,feats:[]},{o:"h",c:49,a:85,b:88,pos:"205",neg:"207",ext:!1,h:10,feats:[]},{o:"h",c:49,a:88,b:98,pos:"206",neg:"207",ext:!1,h:10,feats:[]},{o:"v",c:88,a:14,b:24,pos:"211",neg:"210",ext:!1,h:10,feats:[]},{o:"v",c:88,a:49,b:59,pos:"206",neg:"205",ext:!1,h:10,feats:[{a:52,b:55,k:"door",x:null}]},{o:"h",c:36.5,a:85,b:98,pos:"207",neg:"209",ext:!1,h:10,feats:[]},{o:"v",c:85,a:24,b:30,pos:"209",neg:"212",ext:!1,h:10,feats:[{a:24.5,b:27.5,k:"door",x:null}]},{o:"v",c:85,a:30,b:36.5,pos:"209",neg:"208",ext:!1,h:10,feats:[{a:31.5,b:34.5,k:"door",x:null}]},{o:"v",c:85,a:36.5,b:45.5,pos:"207",neg:"208",ext:!1,h:10,feats:[{a:41,b:44,k:"door",x:null}]},{o:"v",c:85,a:45.5,b:49,pos:"207",neg:"213",ext:!1,h:10,feats:[{a:45.75,b:48.75,k:"door",x:null}]},{o:"h",c:30,a:78,b:85,pos:"208",neg:"212",ext:!1,h:10,feats:[]},{o:"h",c:45.5,a:78,b:85,pos:"213",neg:"208",ext:!1,h:10,feats:[]},{o:"h",c:24,a:78,b:85,pos:"212",neg:"210",ext:!1,h:10,feats:[]},{o:"h",c:24,a:85,b:88,pos:"209",neg:"210",ext:!1,h:10,feats:[]},{o:"h",c:24,a:88,b:98,pos:"209",neg:"211",ext:!1,h:10,feats:[]},{o:"h",c:22,a:4,b:18,pos:null,neg:"407",ext:!0,h:14,feats:[{a:5,b:9,k:"window",x:[3,9]}]},{o:"h",c:22,a:18,b:28,pos:"405",neg:"407",ext:!1,h:14,feats:[{a:23,b:27,k:"door",x:null}]},{o:"h",c:22,a:28,b:30,pos:"405",neg:"302",ext:!1,h:12,feats:[]},{o:"h",c:22,a:30,b:36,pos:"406",neg:"302",ext:!1,h:12,feats:[]},{o:"h",c:22,a:36,b:50,pos:"301",neg:"302",ext:!1,h:12,feats:[{a:36,b:42,k:"slide",x:null}]},{o:"h",c:22,a:50,b:66,pos:"301",neg:"303",ext:!1,h:10,feats:[{a:56,b:59,k:"door",x:null}]},{o:"h",c:22,a:66,b:72,pos:"301",neg:"306",ext:!1,h:10,feats:[]},{o:"h",c:27,a:36,b:72,pos:null,neg:"301",ext:!0,h:10,feats:[{a:36,b:72,k:"open",x:null}]},{o:"h",c:0,a:4,b:28,pos:"407",neg:null,ext:!0,h:14,feats:[{a:7,b:25,k:"glass",x:null}]},{o:"h",c:0,a:28,b:50,pos:"302",neg:null,ext:!0,h:12,feats:[{a:31,b:47,k:"glass",x:null}]},{o:"h",c:0,a:50,b:58,pos:"304",neg:null,ext:!0,h:8,feats:[{a:51,b:57,k:"window",x:[3,6]}]},{o:"h",c:0,a:58,b:66,pos:"305",neg:null,ext:!0,h:8,feats:[]},{o:"h",c:0,a:66,b:72,pos:"306",neg:null,ext:!0,h:10,feats:[{a:68,b:71,k:"exdoor",x:null}]},{o:"v",c:28,a:0,b:22,pos:"302",neg:"407",ext:!1,h:14,feats:[]},{o:"h",c:9,a:50,b:58,pos:"303",neg:"304",ext:!1,h:10,feats:[{a:52,b:54.5,k:"door",x:null}]},{o:"h",c:9,a:58,b:66,pos:"303",neg:"305",ext:!1,h:10,feats:[{a:61,b:63.5,k:"door",x:null}]},{o:"v",c:66,a:0,b:9,pos:"306",neg:"305",ext:!1,h:10,feats:[]},{o:"v",c:66,a:9,b:22,pos:"306",neg:"303",ext:!1,h:10,feats:[{a:12,b:15,k:"door",x:null}]},{o:"v",c:58,a:0,b:9,pos:"305",neg:"304",ext:!1,h:8,feats:[]},{o:"h",c:46,a:18,b:24,pos:"401",neg:"402",ext:!1,h:10,feats:[{a:19,b:23,k:"door",x:null}]},{o:"h",c:46,a:24,b:30,pos:"401",neg:"403",ext:!1,h:10,feats:[]},{o:"v",c:18,a:22,b:28,pos:"405",neg:null,ext:!0,h:10,feats:[]},{o:"v",c:18,a:28,b:40,pos:"404",neg:null,ext:!0,h:9,feats:[{a:31,b:37,k:"window",x:[1.2,6]}]},{o:"v",c:18,a:40,b:46,pos:"402",neg:null,ext:!0,h:10,feats:[]},{o:"v",c:18,a:46,b:55,pos:"401",neg:null,ext:!0,h:10,feats:[{a:49,b:53,k:"front",x:null}]},{o:"v",c:30,a:22,b:28,pos:"406",neg:"405",ext:!1,h:10,feats:[{a:23,b:26,k:"door",x:null}]},{o:"v",c:30,a:28,b:40,pos:"406",neg:"404",ext:!1,h:10,feats:[{a:30,b:38,k:"slide",x:null}]},{o:"v",c:30,a:40,b:46,pos:"406",neg:"403",ext:!1,h:10,feats:[{a:41.5,b:44,k:"door",x:null}]},{o:"v",c:30,a:46,b:55,pos:"406",neg:"401",ext:!1,h:10,feats:[{a:47,b:54,k:"open",x:null}]},{o:"h",c:40,a:18,b:24,pos:"402",neg:"404",ext:!1,h:10,feats:[]},{o:"h",c:40,a:24,b:30,pos:"403",neg:"404",ext:!1,h:10,feats:[]},{o:"v",c:24,a:40,b:46,pos:"403",neg:"402",ext:!1,h:10,feats:[]},{o:"h",c:28,a:18,b:30,pos:"404",neg:"405",ext:!1,h:10,feats:[]},{o:"v",c:4,a:0,b:22,pos:"407",neg:null,ext:!0,h:14,feats:[{a:4,b:18,k:"window",x:[2.5,9]}]}],n1=[{room:"104",label:"Pantry shelving",x0:10.4,y0:68,x1:11.8,y1:78.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"104",label:"Pantry shelving",x0:18.2,y0:72,x1:19.6,y1:78.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"105",label:"Cubbies + bench",x0:10.4,y0:62.5,x1:12,y1:66.6,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"105",label:"Dog wash",x0:16.5,y0:55.4,x1:19.6,y1:58,h:2.6,z0:0,color:"mat:stone",shape:"box"},{room:"201",label:"Low linen-wrapped bed (king)",x0:76,y0:69.4,x1:82.6,y1:76,h:1.6,z0:0,color:"mat:linen",shape:"bed"},{room:"201",label:"Lime-plaster headwall ledge",x0:75,y0:68.4,x1:83.6,y1:69.4,h:3.4,z0:0,color:"mat:plaster",shape:"box"},{room:"201",label:"Pair of lounge chairs",x0:74,y0:78.4,x1:80.6,y1:81.2,h:2.5,z0:0,color:"#b9a27e",shape:"lounge2"},{room:"201",label:"Sheer linen curtains",x0:73,y0:82.3,x1:85,y1:82.5,h:10.3,z0:.1,color:"#f6f1e6",shape:"curtain"},{room:"201",label:"Big fan under wood ceiling",x0:76.5,y0:69.5,x1:82.5,y1:75.5,h:.6,z0:9.6,color:"#6b4a33",shape:"fan"},{room:"201",label:"Cove lighting",x0:72.3,y0:59.3,x1:85.7,y1:82.7,h:.12,z0:10.2,color:"#ffd9a0",shape:"cove"},{room:"201",label:"Rug",x0:75,y0:67.2,x1:84,y1:78,h:.05,z0:0,color:"#cdbfa6",shape:"box"},{room:"202",label:"Deep hinoki soaking tub by the window",x0:93,y0:78,x1:97.4,y1:82.4,h:2.3,z0:0,color:"#e2c894",shape:"tub"},{room:"202",label:"Walk-in rain shower (floor: open item, limestone shown)",x0:86.6,y0:75.4,x1:92,y1:82.4,h:.12,z0:0,color:"mat:stone",shape:"box"},{room:"202",label:"Green zellige shower wall + unlacquered brass rain head",x0:86.6,y0:74.9,x1:91.2,y1:75.4,h:7.5,z0:0,color:"mat:zellige",shape:"box"},{room:"202",label:"Floating built-in cherry vanity (flush inset doors), integrated basins",x0:95.4,y0:69.6,x1:97.4,y1:76.5,h:1.5,z0:1.4,color:"mat:cherry",shape:"vanity"},{room:"202",label:"WC",x0:87,y0:69.6,x1:89,y1:72,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"203",label:"Closet millwork",x0:86.4,y0:59.4,x1:88.4,y1:68.6,h:7.5,z0:0,color:"mat:cherry",shape:"box"},{room:"203",label:"Closet millwork",x0:95.6,y0:59.4,x1:97.6,y1:68.6,h:7.5,z0:0,color:"mat:cherry",shape:"box"},{room:"203",label:"Island",x0:90.5,y0:62,x1:93.5,y1:66,h:3,z0:0,color:"mat:cherry",shape:"box"},{room:"210",label:"Walk-in shower",x0:83,y0:14.4,x1:87.6,y1:18.4,h:.12,z0:0,color:"mat:stone",shape:"box"},{room:"210",label:"Vanity",x0:78.4,y0:14.6,x1:80,y1:19,h:2.8,z0:0,color:"mat:cherry",shape:"box"},{room:"210",label:"WC",x0:84,y0:21.5,x1:86,y1:23.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"211",label:"Pump + filter",x0:90,y0:15,x1:96,y1:18,h:3,z0:0,color:"mat:steel",shape:"box"},{room:"211",label:"Salt chlorine generator cell + controller",x0:92,y0:21,x1:96.5,y1:23.4,h:4.5,z0:0,color:"#9aa0a3",shape:"box"},{room:"302",label:"Rubber lifting area",x0:30,y0:1,x1:40,y1:11.5,h:.06,z0:0,color:"mat:rubber",shape:"box"},{room:"302",label:"Free-standing rig, wood rings + climbing rope",x0:30.8,y0:3,x1:35.8,y1:9,h:9.5,z0:0,color:"#2a2a2a",shape:"rig"},{room:"302",label:"Pilates Cadillac",x0:40,y0:14,x1:47.5,y1:16.6,h:6.8,z0:0,color:"mat:honey",shape:"frame"},{room:"302",label:"Pilates reformer",x0:40,y0:18.4,x1:48,y1:20,h:1.3,z0:0,color:"mat:honey",shape:"reformer"},{room:"302",label:"Wood water rower",x0:41,y0:3.4,x1:48.5,y1:5.2,h:1.7,z0:0,color:"mat:honey",shape:"rower"},{room:"302",label:"Treadmill",x0:41,y0:7.5,x1:47.5,y1:10.6,h:4.4,z0:0,color:"#2a2a2a",shape:"treadmill"},{room:"302",label:"Kettlebell + dumbbell rack",x0:42.6,y0:20.7,x1:49.4,y1:21.8,h:3,z0:0,color:"#2a2a2a",shape:"krack"},{room:"302",label:"Bars-and-bands wall",x0:28.3,y0:10.5,x1:29.2,y1:20.5,h:8,z0:0,color:"#2a2a2a",shape:"bands"},{room:"302",label:"Mirror wall",x0:49.58,y0:1,x1:49.74,y1:11.5,h:7.5,z0:.3,color:"#dfe7ea",shape:"mirror"},{room:"302",label:"Storage wall (mats, plyo boxes)",x0:28.3,y0:1,x1:29.7,y1:9.5,h:8,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Plyo boxes",x0:33,y0:18.5,x1:35,y1:20.5,h:2,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Plyo boxes",x0:35.4,y0:19,x1:37,y1:20.6,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Balance boards",x0:30.5,y0:13,x1:33.5,y1:14.4,h:.4,z0:0,color:"#6b4a33",shape:"box"},{room:"303",label:"Built-in cold plunge (green zellige)",x0:60,y0:17,x1:65.4,y1:21.4,h:.5,z0:0,color:"mat:zellige",shape:"plunge"},{room:"303",label:"Rain showers",x0:51,y0:18.2,x1:56,y1:21.6,h:.12,z0:0,color:"mat:blackstone",shape:"box"},{room:"303",label:"Teak bench",x0:51,y0:10,x1:57,y1:11.4,h:1.5,z0:0,color:"#9c6a3c",shape:"box"},{room:"304",label:"Tiered aspen benches, backlit",x0:50.4,y0:4.4,x1:57.6,y1:8.6,h:3,z0:0,color:"mat:aspen",shape:"benches"},{room:"304",label:"Electric rock heater",x0:56.2,y0:.6,x1:57.6,y1:2.4,h:2.6,z0:0,color:"#2f2c29",shape:"heater"},{room:"305",label:"Heated black-stone bench",x0:58.4,y0:5.8,x1:65.6,y1:8.6,h:1.6,z0:0,color:"mat:blackstone",shape:"box"},{room:"306",label:"Lockers + towels",x0:70.6,y0:1,x1:71.6,y1:12,h:7,z0:0,color:"mat:cherry",shape:"box"},{room:"405",label:"Gear racks",x0:18.4,y0:22.4,x1:29.6,y1:24,h:7,z0:0,color:"mat:steel",shape:"box"},{room:"407",label:"Sit-stand desk facing the garden",x0:11,y0:2.6,x1:17,y1:5,h:2.4,z0:0,color:"mat:honey",shape:"standdesk"},{room:"407",label:"Studio desk + mixer, monitors, MPC",x0:18.5,y0:2.2,x1:26.5,y1:4.8,h:2.5,z0:0,color:"mat:honey",shape:"studio"},{room:"407",label:"Digital piano",x0:6,y0:8,x1:7.8,y1:13,h:2.6,z0:0,color:"#1f1f1f",shape:"piano"},{room:"407",label:"E-drum kit",x0:8,y0:14.5,x1:13,y1:19.5,h:3.5,z0:0,color:"#2a2a2a",shape:"drums"},{room:"407",label:"Guitar wall",x0:17.4,y0:20.55,x1:21.8,y1:20.75,h:7.2,z0:3,color:"#a8743f",shape:"guitarwall"},{room:"407",label:"Mic stand",x0:15.5,y0:14,x1:16.3,y1:14.8,h:5.5,z0:0,color:"#9aa0a3",shape:"box"},{room:"407",label:"PA speakers",x0:5.5,y0:4,x1:7,y1:5.6,h:5.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"PA speakers",x0:5.5,y0:15.4,x1:7,y1:17,h:5.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"Fabric acoustic panels",x0:26.6,y0:2.5,x1:26.8,y1:19.5,h:4.5,z0:3,color:"#8d8a72",shape:"apanels"},{room:"407",label:"Acoustic ceiling clouds",x0:8,y0:5,x1:24,y1:17,h:.3,z0:10.8,color:"#e8e2d6",shape:"clouds"},{room:"407",label:"Sculpted wood ceiling",x0:5.3,y0:1.3,x1:26.7,y1:20.7,h:.8,z0:12.4,color:"mat:honey",shape:"ribs"},{room:"407",label:"Layered pendants",x0:12.5,y0:3,x1:15.5,y1:4.6,h:1.2,z0:7.2,color:"#efe6d3",shape:"layered"},{room:"407",label:"RGB studio light strip",x0:18.5,y0:20.6,x1:26,y1:20.7,h:.1,z0:9.2,color:"#b04de0",shape:"rgb"},{room:"407",label:"Sofa",x0:19.5,y0:15.2,x1:26.2,y1:18.2,h:2.6,z0:0,color:"#6f7a55",shape:"sofa"},{room:"407",label:"Inner isolation wall (east)",x0:26.9,y0:.6,x1:27.4,y1:21.4,h:12.6,z0:0,color:"mat:plaster",shape:"box"},{room:"407",label:"Inner isolation wall (north)",x0:9.6,y0:20.9,x1:22.6,y1:21.4,h:12.6,z0:0,color:"mat:plaster",shape:"box"},{room:"407",label:"Inner isolation wall (west)",x0:4.6,y0:18.6,x1:5.1,y1:21.4,h:12.6,z0:0,color:"mat:plaster",shape:"box"},{room:"407",label:"Inner isolation wall (west)",x0:4.6,y0:.6,x1:5.1,y1:3.4,h:12.6,z0:0,color:"mat:plaster",shape:"box"},{room:"407",label:"Rug",x0:8,y0:6,x1:17,y1:13,h:.05,z0:0,color:"#cdbfa6",shape:"box"},{room:"102",label:"Honey-oak dining table (8)",x0:39,y0:64,x1:47,y1:68,h:2.5,z0:0,color:"mat:honey",shape:"table"},{room:"102",label:"Windsor chairs (walnut)",x0:39.5,y0:62.4,x1:46.5,y1:63.6,h:1.5,z0:0,color:"mat:honey",shape:"chairs"},{room:"102",label:"Shaker chairs (cherry)",x0:39.5,y0:68.4,x1:46.5,y1:69.6,h:1.5,z0:0,color:"mat:cherry",shape:"chairs"},{room:"102",label:"Paper lantern",x0:41,y0:64.5,x1:45,y1:67.5,h:2.4,z0:6.6,color:"#f4ecdc",shape:"lantern"},{room:"102",label:"Shoji screens",x0:49.7,y0:72.5,x1:50,y1:78.8,h:8,z0:0,color:"#f4ecdc",shape:"shoji"},{room:"103",label:'Conversation pit (18" down)',x0:51.5,y0:61,x1:67.5,y1:73,h:-1.5,z0:0,color:"#e6dfd2",shape:"pit"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:61.3,x1:67.2,y1:63.6,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:70.4,x1:67.2,y1:72.7,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:63.6,x1:54.1,y1:70.4,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Coffee table",x0:57,y0:65.2,x1:63,y1:68.8,h:.8,z0:-1.5,color:"#6b4a33",shape:"box"},{room:"103",label:"Paper lanterns",x0:55.5,y0:64,x1:63.5,y1:70,h:2,z0:7,color:"#f4ecdc",shape:"lanterns"},{room:"103",label:"Woven pendant",x0:52.3,y0:75.2,x1:54.3,y1:77.2,h:1.6,z0:6.6,color:"#b48a56",shape:"woven"},{room:"103",label:"Woven pendant",x0:58,y0:75.2,x1:60,y1:77.2,h:1.6,z0:6.6,color:"#b48a56",shape:"woven"},{room:"103",label:"Linear gas fire in plaster plinth",x0:69.4,y0:61,x1:71.4,y1:73,h:1.6,z0:0,color:"mat:plaster",shape:"fire"},{room:"103",label:"Leather lounge chair",x0:52,y0:74.6,x1:55.2,y1:78,h:2.6,z0:0,color:"#8a5a34",shape:"lounge"},{room:"103",label:"Wall-mounted art",x0:71.4,y0:64,x1:71.6,y1:71,h:4.2,z0:3.8,color:"#c9b48e",shape:"art"},{room:"204",label:"Low bench",x0:76.8,y0:29.5,x1:77.6,y1:44.5,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"204",label:"Wall-mounted art",x0:77.55,y0:34,x1:77.75,y1:40,h:3.5,z0:4,color:"#a7b39a",shape:"art"},{room:"205",label:"Washer/dryer",x0:79,y0:56.6,x1:83.2,y1:58.6,h:3,z0:0,color:"#f3f1ec",shape:"box"},{room:"205",label:"Fold counter",x0:83.6,y0:56.6,x1:87.6,y1:58.6,h:3,z0:0,color:"mat:lacq",shape:"box"},{room:"206",label:"Air handler + ERV",x0:94,y0:55,x1:97.6,y1:58.6,h:6,z0:0,color:"mat:steel",shape:"box"},{room:"206",label:"Linen shelves",x0:88.4,y0:49.4,x1:92,y1:51,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"207",label:"Window-seat reading nook",x0:96.2,y0:39,x1:97.8,y1:45,h:1.6,z0:0,color:"mat:cherry",shape:"seat"},{room:"207",label:"Twin bed",x0:89.5,y0:42,x1:93.1,y1:48.6,h:1.4,z0:0,color:"mat:linen",shape:"bed"},{room:"207",label:"Desk by the window",x0:94,y0:36.9,x1:97.8,y1:38.5,h:2.5,z0:0,color:"mat:cherry",shape:"table"},{room:"207",label:"Wardrobe",x0:85.3,y0:36.9,x1:87.3,y1:39.6,h:7,z0:0,color:"mat:lacq",shape:"box"},{room:"207",label:"Low cube shelves + bins",x0:87.6,y0:36.9,x1:91.6,y1:38.2,h:2.4,z0:0,color:"mat:cherry",shape:"cubes"},{room:"207",label:"Beanbag",x0:90,y0:39,x1:92.5,y1:41.5,h:1.3,z0:0,color:"#c98f6a",shape:"beanbags"},{room:"207",label:"Small bouldering wall + mat",x0:93.5,y0:48.65,x1:97.8,y1:48.95,h:8,z0:0,color:"mat:honey",shape:"kidwall"},{room:"208",label:"Tub-shower",x0:78.4,y0:30.4,x1:84.6,y1:33,h:1.8,z0:0,color:"#f3f1ec",shape:"box"},{room:"208",label:"Vanity 1",x0:78.4,y0:35,x1:79.7,y1:39.5,h:2.8,z0:0,color:"mat:cherry",shape:"box"},{room:"208",label:"Vanity 2",x0:83.3,y0:36,x1:84.6,y1:40,h:2.8,z0:0,color:"mat:cherry",shape:"box"},{room:"208",label:"WC",x0:78.4,y0:41.5,x1:80.4,y1:43.5,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"209",label:"Window-seat reading nook",x0:96.2,y0:28,x1:97.8,y1:34,h:1.6,z0:0,color:"mat:cherry",shape:"seat"},{room:"209",label:"Queen bed (guest)",x0:88.5,y0:29.6,x1:93.7,y1:36.3,h:1.6,z0:0,color:"mat:linen",shape:"bed"},{room:"209",label:"Desk by the window",x0:94,y0:24.4,x1:97.8,y1:26,h:2.5,z0:0,color:"mat:cherry",shape:"table"},{room:"209",label:"Low cube shelves + bins",x0:94.4,y0:35.1,x1:97.8,y1:36.3,h:2.4,z0:0,color:"mat:cherry",shape:"cubes"},{room:"209",label:"Small climbing wall + mat",x0:86,y0:24.25,x1:93.5,y1:24.6,h:8,z0:0,color:"mat:honey",shape:"kidwall"},{room:"212",label:"Wardrobe",x0:79,y0:27.8,x1:84.6,y1:29.8,h:7,z0:0,color:"mat:lacq",shape:"box"},{room:"401",label:"Genkan bench",x0:26,y0:53.6,x1:29.6,y1:54.6,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"401",label:"Rammed earth wall",x0:19,y0:54.3,x1:25,y1:54.8,h:9,z0:0,color:"mat:rammed",shape:"box"},{room:"401",label:"Wall-mounted art",x0:25,y0:46.25,x1:29,y1:46.45,h:4,z0:3.5,color:"#b8836a",shape:"art"},{room:"402",label:"Coats",x0:18.4,y0:40.4,x1:19.6,y1:45.6,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"403",label:"Integrated stone vanity",x0:25.5,y0:40.3,x1:28.5,y1:41.3,h:2.8,z0:0,color:"mat:stone",shape:"box"},{room:"403",label:"WC",x0:24.4,y0:43.6,x1:26.4,y1:45.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"404",label:"Fusuma closet doors",x0:18.6,y0:28.15,x1:29.4,y1:28.45,h:7,z0:0,color:"#e9dfc9",shape:"fusuma"},{room:"401",label:"Kumiko lattice screen",x0:27.2,y0:47.6,x1:27.45,y1:52.4,h:7,z0:0,color:"mat:honey",shape:"kumiko"},{room:"404",label:"Tokonoma",x0:18.4,y0:32,x1:20,y1:37,h:1,z0:0,color:"#6b4a33",shape:"box"},{room:"404",label:"Low table + zabuton",x0:22.5,y0:32,x1:26.5,y1:36,h:1.2,z0:0,color:"#6b4a33",shape:"lowtable"},{room:"404",label:"Paper andon lantern",x0:27.5,y0:37.6,x1:28.5,y1:38.6,h:2.2,z0:0,color:"#f4ecdc",shape:"andon"},{room:"404",label:"Shoji screens",x0:29.55,y0:30,x1:29.75,y1:34.5,h:8,z0:0,color:"#f4ecdc",shape:"shoji"},{room:"101",label:"Rift white oak base cabinets (north run)",x0:20.6,y0:76.4,x1:30.3,y1:78.6,h:2.85,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:"Honed quartzite counter (north run)",x0:20.5,y0:76.3,x1:30.4,y1:78.7,h:.15,z0:2.85,color:"mat:marble",shape:"box"},{room:"101",label:"Integrated quartzite sink + brushed stainless faucet",x0:26.6,y0:76.5,x1:29.6,y1:78.4,h:.25,z0:2.72,color:"mat:marble",shape:"box"},{room:"101",label:"Honed marble slab backsplash",x0:20.6,y0:78.45,x1:30.3,y1:78.62,h:.9,z0:3,color:"mat:marble",shape:"box"},{room:"101",label:"Rift white oak base cabinets (range wall)",x0:20.6,y0:55.3,x1:30,y1:57.5,h:2.85,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:"Honed quartzite counter (range wall)",x0:20.5,y0:55.2,x1:30.1,y1:57.6,h:.15,z0:2.85,color:"mat:marble",shape:"box"},{room:"101",label:'Pro gas range 48" with wok burner',x0:23,y0:55.35,x1:27,y1:57.7,h:3,z0:0,color:"mat:steel",shape:"box"},{room:"101",label:"Hidden hood insert in oak cabinetry (1,500 m3/h)",x0:22.6,y0:55.3,x1:27.4,y1:57.1,h:3.4,z0:6.4,color:"mat:oak",shape:"box"},{room:"101",label:"Honed marble slab backsplash (range wall)",x0:20.6,y0:55.3,x1:30,y1:55.45,h:3.4,z0:3,color:"mat:marble",shape:"box"},{room:"101",label:"Open rift oak shelves",x0:27.6,y0:55.3,x1:29.8,y1:56.3,h:3.2,z0:4.2,color:"mat:oak",shape:"shelves"},{room:"101",label:"Appliance garage (oak pocket doors)",x0:20.4,y0:62.4,x1:22.6,y1:64.4,h:3,z0:2.85,color:"mat:oak",shape:"box"},{room:"101",label:"Appliance garage base",x0:20.4,y0:62.4,x1:22.6,y1:64.4,h:2.85,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:'Built-in stainless fridge 36"',x0:20.4,y0:64.5,x1:22.6,y1:67.5,h:7.2,z0:0,color:"mat:steel",shape:"box"},{room:"101",label:"Steam oven + wall oven column (oak)",x0:20.4,y0:67.6,x1:22.6,y1:70.6,h:8.5,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:"Work island: rift oak + quartzite, flush induction",x0:23.5,y0:60.5,x1:31.5,y1:63.5,h:2.85,z0:0,color:"mat:oak",shape:"box"},{room:"101",label:"Work island quartzite top",x0:23.4,y0:60.4,x1:31.6,y1:63.6,h:.15,z0:2.85,color:"mat:marble",shape:"box"},{room:"101",label:"Quartzite waterfall island 10' (stools one side)",x0:23,y0:67,x1:33,y1:71,h:2.85,z0:.15,color:"mat:oak",shape:"box"},{room:"101",label:"Quartzite waterfall island top",x0:22.9,y0:66.9,x1:33.1,y1:71.1,h:.18,z0:2.85,color:"mat:marble",shape:"box"},{room:"101",label:"Waterfall edge west",x0:22.9,y0:66.9,x1:23.15,y1:71.1,h:3.03,z0:0,color:"mat:marble",shape:"box"},{room:"101",label:"Waterfall edge east",x0:32.85,y0:66.9,x1:33.1,y1:71.1,h:3.03,z0:0,color:"mat:marble",shape:"box"},{room:"101",label:"Stools",x0:24,y0:71.4,x1:32,y1:72.6,h:2.5,z0:0,color:"#6b4a33",shape:"stools"},{room:"101",label:"Skylight light well (glazed)",x0:24,y0:68.4,x1:32,y1:70.6,h:.3,z0:11.6,color:"mat:glass",shape:"box"},{room:"101",label:"Linear suspended LED pendant",x0:24,y0:69.3,x1:32,y1:69.7,h:.15,z0:8.6,color:"mat:lamp",shape:"box"}],i1=[{id:"living",x0:10,y0:55,x1:72,y1:79,oh:{n:8,s:6,w:4,e:0},type:"butterfly",valley:67,hv:12.6,he:14.6,wall:12},{id:"master",x0:72,y0:59,x1:98,y1:83,oh:{n:6,s:0,w:0,e:4},type:"shed",axis:"y",h0:11.6,h1:13.4,holes:[[93,78,97,82]]},{id:"east",x0:72,y0:14,x1:98,y1:59,oh:{n:0,s:4,w:6,e:4},type:"shed",axis:"x",h0:11.8,h1:10.6},{id:"south",x0:28,y0:0,x1:72,y1:27,oh:{n:6,s:6,w:0,e:0},type:"shed",axis:"y",h0:14,h1:12.6},{id:"office",x0:4,y0:0,x1:28,y1:22,oh:{n:4,s:6,w:4,e:1},type:"shed",axis:"y",h0:16,h1:14.6,holes:[[13,9,19,14]]},{id:"west",x0:18,y0:22,x1:36,y1:55,oh:{n:0,s:0,w:5,e:6},type:"shed",axis:"x",h0:11.8,h1:10.6}],s1={pool:{x0:54,y0:-22,x1:88,y1:-10},pooldeck:{x0:48,y0:-28,x1:98,y1:0},lane:{x0:-32,y0:-16,x1:43,y1:-8},outdoor_shower:{x0:72.5,y0:4,x1:77.5,y1:10},veg:{x0:-30,y0:64,x1:-6,y1:86},bikes:{x0:4,y0:62,x1:7.5,y1:72},carport:{x0:-44,y0:30,x1:-20,y1:54},entrycourt:{x0:-20,y0:26,x1:18,y1:55},pergola:{x0:19,y0:81,x1:37,y1:95},veranda:{x0:36,y0:79,x1:72,y1:87},firepit:{cx:58,cy:99,r:7},zen:{x0:39,y0:30,x1:52,y1:40},water:{x0:57,y0:31,x1:68,y1:39},lawn:{x0:39,y0:42,x1:69,y1:50},shadetree:{cx:53,cy:45},maples:[[66.5,47.5],[40.5,46.5],[39,52.3],[62,51.8]],lanterns:[[55,40.6],[38.5,41],[69.5,42]],cshower:{x0:66.5,y0:27.5,x1:71.5,y1:31.5},bale:{x0:90,y0:-27,x1:97,y1:-19,h:9},pullup:{x0:45,y0:-7,x1:48.5,y1:-5},orchard:[[-56,70],[-46,70],[-56,80],[-46,80],[-56,90],[-46,90],[-36,94]],walkway:{x0:-20,y0:48,x1:13,y1:54,h:9},frontgarden:[[-16,38,-2,46],[-16,57,2,62]],bathgarden:{x0:98,y0:69,x1:106,y1:83},climb:{x0:-22,y0:0,x1:-4,y1:18,oh:5,h:17,wall:12},util:{x0:100,y0:-6,x1:136,y1:24,gate:[112,124]},tanks:[[106,18,5],[117,18,5]],watertreat:{x0:124,y0:13,x1:135,y1:23},atu:{x0:103,y0:-3,x1:115,y1:3},power:{x0:125,y0:-4,x1:135,y1:5},condensers:[[119,1],[119,5],[119,9]],drainfield:{x0:30,y0:-74,x1:90,y1:-52},well:{cx:140,cy:95},service:[[-62,2],[-62,-38],[118,-38],[118,-6]]},r1={"Living Pavilion":"whiteplaster","Sleeping Wing":"charred","Wellness + Gym Wing":"charred","Studio + Arrival":"whiteplaster"},a1={401:"rammed"},o1=5272,l1={x0:36,y0:27,x1:72,y1:55},c1=[{id:"C1",name:"Climbing Pavilion",x0:-22,y0:0,x1:-4,y1:18,w:18,d:18,area:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. 16-ft-wide, 12-ft-high kids' bouldering wall on the north side facing the sprint lane, over a 12-inch poured-rubber soft-fall surface. Sits in the active zone with the gym, sprint lane and a second bike rack."}],Rt={frameless:j_,rooms:e1,walls:t1,furn:n1,roofs:i1,site:s1,clad:r1,cladOvr:a1,total:o1,courtyard:l1,covered:c1},pt=49,Et=44,qt=(n,e,t=0)=>new F(n-pt,t,-(e-Et)),Fu=new Dn(new F(0,-1,0),1e5),ku=[Fu];function h1(){const n=Q_(),e={},t=i=>new Dt(i);e.stucco=t({map:n.stucco,roughness:.92}),e.plaster=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.3,.3),roughness:.95,color:16777215}),e.charred=t({map:n.charred,normalMap:n.charredN,roughness:.82}),e.rammed=t({map:n.rammed,normalMap:n.rammedN,normalScale:new re(.6,.6),roughness:.95}),e.stone=t({map:n.stone,roughness:.8,color:16314592}),e.flag=t({map:n.flag,normalMap:n.flagN,roughness:.88}),e.plinth=t({map:n.plinth,roughness:.9}),e.oak=t({map:n.oak,roughness:.6}),e.honey=t({map:n.honey,normalMap:n.honeyN,normalScale:new re(.5,.5),roughness:.48,color:9067840}),e.cherry=t({map:n.honey,normalMap:n.honeyN,normalScale:new re(.5,.5),roughness:.45,color:13666914}),e.herring=t({map:n.herring,normalMap:n.herringN,normalScale:new re(.6,.6),roughness:.5,color:9396804}),e.stonetile=t({map:n.stonetile,normalMap:n.stonetileN,normalScale:new re(.5,.5),roughness:.62,color:16183005}),e.bluestone=t({map:n.stonetile,normalMap:n.stonetileN,roughness:.75,color:9279907}),e.basalt=t({map:n.stonetile,normalMap:n.stonetileN,roughness:.8,color:5922144}),e.granite=t({map:n.stone,roughness:.92,color:12894392}),e.slate=t({map:n.flag,normalMap:n.flagN,roughness:.85,color:7831946}),e.soapstone=t({map:n.marble,roughness:.6,color:8358533}),e.earth=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.7,.7),roughness:.97,color:13411447}),e.whiteplaster=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.4,.4),roughness:.94,color:16777215}),e.bronze=t({color:5127468,roughness:.4,metalness:.65}),e.blackstone=t({map:n.blackstone,normalMap:n.blackstoneN,normalScale:new re(.4,.4),roughness:.42}),e.marble=t({map:n.marble,roughness:.18}),e.zellige=t({map:n.zellige,normalMap:n.zelligeN,roughness:.12,metalness:.05}),e.aspen=t({map:n.aspen,normalMap:n.aspenN,normalScale:new re(.4,.4),roughness:.7}),e.pooltile=t({map:n.pooltile,normalMap:n.pooltileN,roughness:.3}),e.linen=t({map:n.linen,color:15920352,roughness:.95}),e.lacq=t({color:16052973,roughness:.32}),e.steel=t({color:12106942,roughness:.3,metalness:.85}),e.deck=t({map:n.deck,roughness:.8}),e.soffit=t({map:n.soffit,roughness:.75}),e.tatami=t({map:n.tatami,normalMap:n.tatamiN,roughness:.9}),e.rubber=t({map:n.rubber,roughness:.95}),e.seam=t({map:n.seam,normalMap:n.seamN,roughness:.42,metalness:.35,color:15132390}),e.gravel=t({map:n.gravel,normalMap:n.gravelN,roughness:1}),e.turf=t({map:n.turf,roughness:1}),e.meadow=t({map:n.meadow,roughness:1}),e.cedar=t({map:n.cedar,roughness:.8}),e.concrete=t({map:n.concrete,roughness:.9}),e.frame=t({color:2039067,roughness:.45,metalness:.5}),e.glass=new bp({color:13624294,roughness:.05,metalness:0,transparent:!0,opacity:.22,depthWrite:!1,side:bn,emissive:0}),e.sheer=t({color:16513006,roughness:1,transparent:!0,opacity:.45,side:bn,depthWrite:!1}),e.paper=t({color:16183264,roughness:1,emissive:16767392,emissiveIntensity:.25}),e.paper.name="lamp",e.lamp=t({color:16773590,emissive:16762746,emissiveIntensity:.6}),e.lamp.name="lamp",e.rgb=t({color:11554272,emissive:10173439,emissiveIntensity:1.2}),e.mirror=t({color:13226966,roughness:.04,metalness:.9}),e.brass=t({color:11833164,roughness:.48,metalness:.85}),e.leather=t({color:9067060,roughness:.55}),e.water=t({color:5087155,roughness:.08,metalness:.1,transparent:!0,opacity:.88}),e.poolwater=t({color:4168338,roughness:.05,metalness:.1,transparent:!0,opacity:.8}),e.white=t({color:15855335,roughness:.6}),e.dark=t({color:2894375,roughness:.7}),e.fir=t({color:13146726,roughness:.7}),e.teak=t({color:10250812,roughness:.6}),e.highlight=new Pi({color:7700575,transparent:!0,opacity:.28,depthWrite:!1}),e.c={};for(const i of["cherry","bluestone","basalt","granite","slate","soapstone","earth","whiteplaster","bronze","brass","teak","stucco","plaster","charred","rammed","cedar","stone","frame","glass","oak","fir","honey","herring","stonetile","blackstone","marble","zellige","aspen","linen","lacq","steel","sheer","paper","lamp","rgb","mirror","brass","leather","water","rubber","tatami","white","dark","teak","flag"]){const s=e[i].clone();s.name=e[i].name,s.clippingPlanes=ku,s.clipShadows=!0,e.c[i]=s}return e.T=n,e}const Ao={};function de(n){if(!Ao[n]){const e=new Dt({color:new Ye(n),roughness:.75});e.clippingPlanes=ku,e.clipShadows=!0,Ao[n]=e}return Ao[n]}let va=null;function u1(n){return typeof n=="string"&&n.startsWith("mat:")?va.c[n.slice(4)]||va[n.slice(4)]:de(n)}function Wi(n,e,t){const i=new An(n,e,t),s=i.attributes.uv,r=[[t,e],[t,e],[n,t],[n,t],[n,e],[n,e]];for(let a=0;a<6;a++)for(let o=0;o<4;o++){const l=a*4+o;s.setXY(l,s.getX(l)*r[a][0],s.getY(l)*r[a][1])}return i}class d1{constructor(){this.b=new Map}add(e,t,i){const s=e+"|"+t.uuid;this.b.has(s)||this.b.set(s,{layer:e,mat:t,geos:[]}),this.b.get(s).geos.push(i.index?i.toNonIndexed():i)}build(e,t={}){for(const{layer:i,mat:s,geos:r}of this.b.values()){const a=r.map(c=>{const u=new Lt;return u.setAttribute("position",c.attributes.position),u.setAttribute("normal",c.attributes.normal),c.attributes.uv?u.setAttribute("uv",c.attributes.uv):u.setAttribute("uv",new en(new Float32Array(c.attributes.position.count*2),2)),u}),o=Ou(a,!1),l=new Nt(o,s),h=s.transparent;l.castShadow=!h&&i!=="ground",l.receiveShadow=!s.transparent||s===void 0,i==="glass"&&(l.renderOrder=2,l.castShadow=!1),e[i].add(l)}}}const Bt=new d1;function E(n,e,t,i,s,r,a,o,l){const h=Math.abs(s-t),c=Math.abs(r-i),u=Math.abs(o-a);if(h<.001||c<.001||u<.001)return;let d=Wi(h,u,c);if(d.translate((t+s)/2-pt,(a+o)/2,-((i+r)/2-Et)),l){d=d.toNonIndexed();const f=d.attributes.position;for(let p=0;p<f.count;p++)f.setY(p,f.getY(p)+l(f.getX(p)+pt,Et-f.getZ(p)));d.computeVertexNormals()}if(Array.isArray(e)){const f=[0,1,2,3,4,5],p=d.index?d.toNonIndexed():d;f.forEach(_=>{const g=new Lt;for(const m of["position","normal","uv"]){const S=p.attributes[m];g.setAttribute(m,new en(S.array.slice(_*6*S.itemSize,(_+1)*6*S.itemSize),S.itemSize))}Bt.add(n,e[_],g)})}else Bt.add(n,e,d)}function ke(n,e,t,i,s,r,a,o=20,l){const h=new cn(l??s,s,a-r,o);h.translate(t-pt,(r+a)/2,-(i-Et)),Bt.add(n,e,h)}function Wt(n,e,t,i,s,r){t.translate(i-pt,r,-(s-Et)),Bt.add(n,e,t)}const Kl=Rt.roofs;function ua(n,e,t){const[i,s,r]=n.axis==="x"?[e,n.x0,n.x1]:[t,n.y0,n.y1];return n.h0+(n.h1-n.h0)*(i-s)/(r-s)}function Qi(n,e){let t=null;for(const i of Kl){if(n<i.x0-.01||n>i.x1+.01||e<i.y0-.01||e>i.y1+.01)continue;let s;if(i.type==="flat")s=i.h-.6;else if(i.type==="shed")s=ua(i,n,e)-.6;else{const r=i.y1+i.oh.n,a=i.y0-i.oh.s;s=e>=i.valley?i.hv+(i.he-i.hv)*(e-i.valley)/(r-i.valley):i.hv+(i.he-i.hv)*(i.valley-e)/(i.valley-a)}t=t===null?s:Math.max(t,s)}return t??10}function f1(n){for(const e of Kl){const t=e.x0-e.oh.w,i=e.x1+e.oh.e,s=e.y0-e.oh.s,r=e.y1+e.oh.n;if(e.type==="shed"){const a=(c,u)=>ua(e,c,u)-(e.axis==="x"?e.h0+(e.h1-e.h0)*((e.x0+e.x1)/2-e.x0)/(e.x1-e.x0):e.h0+(e.h1-e.h0)*((e.y0+e.y1)/2-e.y0)/(e.y1-e.y0)),o=ua(e,(e.x0+e.x1)/2,(e.y0+e.y1)/2),l=[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred];let h=[[t,s,i,r]];for(const[c,u,d,f]of e.holes||[]){h=[[t,s,i,u],[t,f,i,r],[t,u,c,f],[d,u,i,f]];const p=ua(e,(c+d)/2,(u+f)/2);E("roof",n.frame,c-.25,u-.25,d+.25,f+.25,p+.35,p+.75),E("roof",n.glass,c,u,d,f,p+.7,p+.78)}for(const[c,u,d,f]of h)E("roof",l,c,u,d,f,o-.6,o+.4,a);E("roof",n.dark,t-.05,s-.05,i+.05,r+.05,o+.35,o+.45,a)}else if(e.type==="flat"){const a=e.h-.6,o=e.h+.4;E("roof",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],t,s,i,r,a,o),E("roof",n.dark,t-.05,s-.05,i+.05,r+.05,o-.05,o+.05)}else{const o=i-t,l=(t+i)/2-pt,h=(u,d,f,p,_,g,m,S=0)=>{const A=-(u-Et),b=-(f-Et),T=Math.hypot(A-b,d-p),R=Wi(g??o,.9,T),C=Math.atan2(p-d,A-b);R.rotateX(C),R.translate(m??l,(d+p)/2+.9/2-S,(A+b)/2);const v=R.toNonIndexed();_.forEach((w,N)=>{const O=new Lt;for(const x of["position","normal","uv"]){const I=v.attributes[x];O.setAttribute(x,new en(I.array.slice(N*6*I.itemSize,(N+1)*6*I.itemSize),I.itemSize))}Bt.add("roof",w,O)})},c=[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred];h(s,e.he,e.valley,e.hv,c),h(e.valley,e.hv,r,e.he,c);for(let u=e.x0+10;u<e.x1;u+=8){const d=[n.c.fir,n.c.fir,n.c.fir,n.c.fir,n.c.fir,n.c.fir];h(e.y0,Qi(u,e.y0),e.valley,e.hv,d,.55,u-pt,1.1),h(e.valley,e.hv,e.y1,Qi(u,e.y1),d,.55,u-pt,1.1)}E("roof",n.frame,t,e.valley-.4,i,e.valley+.4,e.hv+.6,e.hv+.95)}}}function p1(n){const e=Rt.rooms.find(t=>t.id===n);return e&&(Rt.cladOvr[n]||Rt.clad[e.wing])||"stucco"}const ba=[];function m1(n){const e=[...n.feats].sort((s,r)=>s.a-r.a),t=[];let i=n.a;for(const s of e)s.a>i+1e-6&&t.push({a:i,b:s.a,k:"solid"}),t.push({a:s.a,b:s.b,k:s.k,x:s.x}),i=s.b;return n.b>i+1e-6&&t.push({a:i,b:n.b,k:"solid"}),t}const Sa=(n,e)=>n.o==="h"?[e,n.c]:[n.c,e];function Ro(n,e,t,i,s,r,a,o,l){const h=new Ca;if(h.moveTo(i,r),h.lineTo(s,r),a!=null)h.lineTo(s,a),h.lineTo(i,a);else{const d=[s];if(t.o==="v")for(const _ of Kl)_.type==="butterfly"&&t.c>=_.x0-.01&&t.c<=_.x1+.01&&_.valley>i&&_.valley<s&&d.unshift(_.valley);d.sort((_,g)=>g-_);for(const _ of d){const[g,m]=Sa(t,_);h.lineTo(_,Qi(g,m))}const[f,p]=Sa(t,i);h.lineTo(i,Qi(f,p))}h.closePath();const c=new Xl(h,{depth:l-o,bevelEnabled:!1,steps:1}),u=new ot;t.o==="h"?u.makeTranslation(-pt,0,-(t.c-Et)-l):(u.makeRotationY(Math.PI/2),u.premultiply(new ot().makeTranslation(t.c-pt+o,0,Et))),c.applyMatrix4(u),Bt.add(n,e,c)}function na(n,e,t,i,s,r){const a=e.ext?.75:.45;let o=t,l=i;if(e.ext&&(Math.abs(t-e.a)<1e-6&&(o-=a/2),Math.abs(i-e.b)<1e-6&&(l+=a/2)),e.ext){const h=e.pos||e.neg,c=e.pos?-1:1,u=n.c[p1(h)],d=h==="304"?n.c.cedar:h==="305"?n.c.blackstone:h==="303"?n.c.earth:n.c.plaster,f=c>0?[0,a/2]:[-a/2,0],p=c>0?[-a/2,0]:[0,a/2];Ro("walls",u,e,o,l,s,r,f[0],f[1]),Ro("walls",d,e,o,l,s,r,p[0],p[1])}else{const h=c=>e.pos===c||e.neg===c;Ro("walls",h("304")?n.c.cedar:h("305")?n.c.blackstone:h("303")?n.c.earth:n.c.plaster,e,t-a/2+.001,i+a/2-.001,s,r,-a/2,a/2)}}function Oh(n,e,t,i,s,r,a){const l=(u,d,f,p,_,g,m,S)=>{e.o==="h"?E(S,m,u,e.c+_,d,e.c+g,f,p):E(S,m,e.c+_,u,e.c+g,d,f,p)};if(l(t,i,s,r,-.08/2,.08/2,n.c.glass,"glass"),l(t,i,s,s+.25,-.18,.18,n.c.bronze,"walls"),l(t,i,r-.3,r,-.18,.18,n.c.bronze,"walls"),(Rt.frameless||[]).some(([u,d,f,p])=>u===e.o&&Math.abs(d-e.c)<.01&&t<p&&i>f))return void ba.push({s:e,a:t,b:i});const c=Math.max(1,Math.round((i-t)/(a?5.5:8)));for(let u=0;u<=c;u++){const d=t+(i-t)*u/c;l(d-.09,d+.09,s,r,-.15,.15,n.c.bronze,"walls")}ba.push({s:e,a:t,b:i})}function g1(n){for(const e of Rt.walls)for(const t of m1(e)){const[i,s]=Sa(e,(t.a+t.b)/2),r=Qi(i,s);if(t.k==="solid")na(n,e,t.a,t.b,0,null),ba.push({s:e,a:t.a,b:t.b});else if(t.k!=="open")if(["door","exdoor","slide","front"].includes(t.k)){const a=t.k==="front"?9:t.k==="slide"?8:7.5;if(r>a+.05&&na(n,e,t.a,t.b,a,null),t.k==="front"){const l=t.b-t.a,h=Wi(l*.62,a-.05,.22);h.translate(l*.31,a/2,0),h.rotateY(-.55);const[c,u]=Sa(e,t.a+l*.19);h.translate(c-pt,0,-(u-Et)),Bt.add("walls",n.c.bronze,h)}const o=["201","203","207","209","212","213","404"];if((t.k==="door"||t.k==="slide")&&(o.includes(e.pos)||o.includes(e.neg))&&!["405","407"].includes(e.pos)&&!["405","407"].includes(e.neg)){const l=t.b-t.a,h=Math.max(1.6,l*.5),c=.24,u=(p,_,g,m,S,A,b)=>{e.o==="h"?E("furn",b,p,e.c+S,_,e.c+A,g,m):E("furn",b,e.c+S,p,e.c+A,_,g,m)},d=t.a,f=t.a+h;u(d,f,.05,a-.1,c-.02,c+.02,n.c.paper),u(d,f,0,.15,c-.06,c+.06,n.c.cherry),u(d,f,a-.2,a-.05,c-.06,c+.06,n.c.cherry);for(const p of[d,d+h/2-.04,f-.08])u(p,p+.08,0,a-.05,c-.06,c+.06,n.c.cherry);for(let p=1;p<5;p++){const _=(a-.1)*p/5;u(d,f,_-.03,_+.03,c-.05,c+.05,n.c.cherry)}}}else if(t.k==="window"){const[a,o]=t.x;na(n,e,t.a,t.b,0,a),Oh(n,e,t.a,t.b,a,Math.min(o,r),!1),r>o+.05&&na(n,e,t.a,t.b,o,null)}else(t.k==="glass"||t.k==="fixed")&&Oh(n,e,t.a,t.b,0,r,t.k==="glass")}}const x1={oak:"oak",honey:"honey",herring:"herring",stonetile:"stonetile",blackstone:"blackstone",aspen:"aspen",stone:"stone",tatami:"tatami",rubber:"rubber",cedar:"cedar",concrete:"concrete"},Bu=[];function _1(n,e){const t=new Pi({visible:!1});for(const i of Rt.rooms){const s=n[x1[i.floor]]||n.oak,r=[n.plinth,n.plinth,s,n.plinth,n.plinth,n.plinth],a=Rt.furn.find(c=>c.room===i.id&&c.shape==="pit");a?(E("floors",r,i.x0,i.y0,i.x1,a.y0,-1.8,0),E("floors",r,i.x0,a.y1,i.x1,i.y1,-1.8,0),E("floors",r,i.x0,a.y0,a.x0,a.y1,-1.8,0),E("floors",r,a.x1,a.y0,i.x1,a.y1,-1.8,0),E("floors",[n.herring,n.herring,n.herring,n.herring,n.herring,n.herring],a.x0,a.y0,a.x1,a.y1,-2,-1.5)):E("floors",r,i.x0,i.y0,i.x1,i.y1,-1.8,0);const o=Qi((i.x0+i.x1)/2,(i.y0+i.y1)/2),l=new An(i.w-.2,o,i.d-.2);l.translate((i.x0+i.x1)/2-pt,o/2,-((i.y0+i.y1)/2-Et));const h=new Nt(l,t);h.userData.room=i.id,e.pick.add(h),Bu.push(h)}}const z="furn",Jt="detail";function y1(n){return Rt.rooms.find(e=>e.id===n)}function vi(n,e,t,i,s,r,a=1,o=12){const l=new Ei(r,o,Math.max(6,o/2));l.scale(1,a,1),Wt(n,e,l,t,i,s)}function v1(n,e,t){const i=y1(e.room),s=e.y0-i.y0<i.y1-e.y1,r=s?e.y0:e.y1,a=s?1:-1;E(z,n.c.dark,e.x0+.3,e.y0+.3,e.x1-.3,e.y1-.3,0,.35),E(z,t,e.x0,e.y0,e.x1,e.y1,.35,e.h-.35),E(z,n.c.white,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,e.h-.35,e.h),E(z,de("#d8cdb8"),e.x0-.05,Math.min(r+a*2.2,r+a*(e.y1-e.y0)*.95),e.x1+.05,Math.max(r+a*2.2,r+a*(e.y1-e.y0)*.95),e.h-.3,e.h+.12);const o=e.x1-e.x0>4.5?2:1;for(let l=0;l<o;l++){const h=(e.x1-e.x0-.6)/o,c=e.x0+.3+l*h;E(z,n.c.linen,c+.1,Math.min(r+a*.3,r+a*1.6),c+h-.1,Math.max(r+a*.3,r+a*1.6),e.h,e.h+.45)}}function b1(n,e,t){const i=Math.max(1,Math.round((n.x1-n.x0)/2.2)),s=1.6;for(let r=0;r<i;r++){const a=n.x0+(n.x1-n.x0)*(r+.5)/i;E(z,e,a-s/2,n.y0,a+s/2,n.y1,1.45,1.6),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([l,h])=>E(z,de("#6b4a33"),a+l*(s/2-.1)-.05,h<0?n.y0+.05:n.y1-.15,a+l*(s/2-.1)+.05,h<0?n.y0+.15:n.y1-.05,0,1.45));const o=t?n.y0:n.y1-.12;E(z,de("#6b4a33"),a-s/2,o,a+s/2,o+.12,1.6,2.9)}}function Co(n,e,t,i,s,r,a){E(z,n.c.frame,e+.2,t+.2,i-.2,s-.2,0,.5),E(z,r,e,t,i,s,.5,1.25);const o=a?t:s-.6,l=a?t+.6:s;E(z,r,e,o,i,l,1.25,2.7),E(z,r,e,t,e+.35,s,1.25,1.9),E(z,r,i-.35,t,i,s,1.25,1.9)}function S1(n,e,t,i,s){const r=new cn(.62,.62,s,18);r.rotateX(Math.PI/2),Wt(z,de(t),r,n,i,e);const a=new cn(.48,.48,s,18);a.rotateX(Math.PI/2),Wt(z,de(t),a,n,i,e+.75),E(z,de("#3a2a20"),n-.08,i-s/2,n+.08,i+s/2,e+1,e+2.6),E(z,de("#2a1d15"),n-.13,i-s/2,n+.13,i+s/2,e+2.6,e+3)}function M1(n){va=n;for(const e of Rt.furn){if(e.shape==="pit")continue;const t=u1(e.color),i=e.z0,s=e.z0+Math.max(e.h,.04),r=(e.x0+e.x1)/2,a=(e.y0+e.y1)/2,o=e.x1-e.x0,l=e.y1-e.y0,h=o>=l;switch(e.shape){case"island":E(z,n.c.lacq,e.x0+.4,e.y0+1.2,e.x1-.4,e.y1-.1,0,2.85),E(z,n.c.soapstone,e.x0+.15,e.y0,e.x1-.15,e.y1,2.85,3),E(z,t,e.x0,e.y0,e.x0+.15,e.y1,0,3),E(z,t,e.x0,e.y0+.2,e.x0+.15,e.y1,0,2.85),E(z,t,e.x1-.15,e.y0,e.x1,e.y1,0,3);break;case"stools":{const c=Math.round(o/1.7);for(let u=0;u<c;u++){const d=e.x0+o*(u+.5)/c;ke(z,t,d,a,.62,s-.12,s,16),ke(z,n.c.frame,d,a,.07,0,s-.12,6);const f=new Vi(.4,.035,4,16);f.rotateX(Math.PI/2),Wt(z,n.c.brass,f,d,a,.85),ke(z,n.c.frame,d,a,.5,0,.05,14)}break}case"range":E(z,t,e.x0,e.y0,e.x1,e.y1,0,s-.05),E(z,n.c.dark,e.x0+.1,e.y0+.1,e.x1-.1,e.y1-.2,s-.05,s+.05),E(z,n.c.dark,e.x0+.3,e.y0-.02,e.x1-.3,e.y0+.02,.6,2.2);for(let c=0;c<5;c++)ke(Jt,n.c.frame,e.x0+.4+c*.55,e.y0-.05,.08,2.6,2.75,8);break;case"hood":E(z,n.c.glass,e.x0,e.y0,e.x1,e.y1,i,s),E(z,n.c.steel,e.x0+.1,e.y0+.1,e.x1-.1,e.y1-.1,i-.06,i),E(z,n.c.steel,r-.5,e.y1-1.1,r+.5,e.y1-.05,s,12);break;case"sink":E(z,t,e.x0,e.y0,e.x1,e.y0+.12,i,i+.95),E(z,t,e.x0,e.y0,e.x1,e.y1-.2,i,i+.12),E(z,n.c.dark,e.x0+.15,e.y0+.15,e.x1-.15,e.y1-.3,i+.12,i+.13),ke(z,n.c.brass,r,e.y1-.15,.06,3,4.2,8),E(z,n.c.brass,r-.05,e.y1-.95,r+.05,e.y1-.15,4.1,4.2),ke(z,n.c.brass,r,e.y1-.95,.05,3.85,4.15,8);break;case"shelves":for(let c=0;c<3;c++){const u=i+c*1.3;E(z,t,e.x0,e.y0,e.x1,e.y1,u,u+.13);for(let d=0;d<5;d++){const f=e.y0+.4+d*(l-.8)/4;(d+c)%3?ke(Jt,n.c.white,r,f,.28,u+.13,u+.55+d%2*.25,10):E(Jt,de("#c4b49a"),r-.2,f-.3,r+.2,f+.3,u+.13,u+.9)}}break;case"pendants":{for(let c=0;c<3;c++){const u=e.x0+o*(c+.5)/3;c%2===0?(vi(z,n.c.glass,u,a,i+.5,.62,1.1),vi(z,n.c.lamp,u,a,i+.45,.18,1)):vi(z,n.c.paper,u,a,i+.5,.8,1.15),ke(z,n.c.brass,u,a,.02,i+1.1,11.8,4)}break}case"woven":{const c=new Ei(Math.min(o,l)/2,18,10,0,Math.PI*2,0,Math.PI*.62);Wt(z,t,c,r,a,i);for(let u=0;u<4;u++){const d=Math.min(o,l)/2*(.95-u*.15);ke(z,de("#8a6438"),r,a,d,i+.15+u*.28,i+.2+u*.28,18)}ke(z,n.c.lamp,r,a,.25,i-.3,i-.1,10),ke(z,n.c.frame,r,a,.02,i+e.h*.6,11.8,4);break}case"fusuma":{const u=o/4;for(let d=0;d<4;d++){const f=e.x0+d*u;E(z,t,f+.04,e.y0,f+u-.04,e.y1,.1,s-.1),E(z,n.c.cherry,f,e.y0-.02,f+.06,e.y1+.02,0,s),ke(z,n.c.dark,f+u-.5,e.y0-.03,.12,3.2,3.5,10)}E(z,n.c.cherry,e.x0,e.y0-.02,e.x1,e.y1+.02,s-.12,s);break}case"kumiko":{E(z,n.c.paper,e.x0+.08,e.y0,e.x1-.08,e.y1,.4,s-.1);const c=l>o,u=c?l:o;for(let d=0;d<=Math.round(u/.5);d++){const f=(c?e.y0:e.x0)+d*u/Math.round(u/.5);c?E(z,t,e.x0-.02,f-.03,e.x1+.02,f+.03,.4,s):E(z,t,f-.03,e.y0-.02,f+.03,e.y1+.02,.4,s)}for(let d=.4;d<=s;d+=.5)E(z,t,e.x0-.02,e.y0-.02,e.x1+.02,e.y1+.02,d,d+.05);E(z,t,e.x0-.05,e.y0,e.x1+.05,e.y1,0,.4);break}case"table":E(z,t,e.x0,e.y0,e.x1,e.y1,s-.15,s),[[e.x0+.4,e.y0+.4],[e.x1-.6,e.y0+.4],[e.x0+.4,e.y1-.6],[e.x1-.6,e.y1-.6]].forEach(([c,u])=>E(z,t,c,u,c+.2,u+.2,0,s-.15));break;case"chairs":b1(e,t,e.y0>70);break;case"lantern":vi(z,n.c.paper,r,a,i+e.h/2,Math.min(o,l)/2,e.h/Math.min(o,l)),ke(z,n.c.frame,r,a,.02,i+e.h,11.8,4);break;case"lanterns":[[e.x0+1.5,e.y0+2,1.3,7.6],[r,a,1.8,7],[e.x1-1.5,e.y1-2,1.1,8]].forEach(([c,u,d,f])=>{vi(z,n.c.paper,c,u,f,d,1.15),ke(z,n.c.frame,c,u,.02,f+d,11.8,4)});break;case"shoji":{const c=Math.max(1,Math.round((h?o:l)/3));for(let u=0;u<c;u++){const d=u/c,f=(u+1)/c,p=u%2*.25,[_,g]=h?[e.x0+o*d,e.x0+o*f]:[e.y0+l*d,e.y0+l*f],m=(S,A,b,T,R,C,v)=>h?E(z,v,S,e.y0+R,A,e.y0+C,b,T):E(z,v,e.x0+R,S,e.x0+C,A,b,T);m(_,g,.1,s-.2,p+.07,p+.13,n.c.paper);for(let S=0;S<=3;S++){const A=_+(g-_)*S/3;m(A-.04,A+.04,0,s,p,p+.2,de("#5a4632"))}for(let S=0;S<=s;S+=1)m(_,g,S,S+.06,p,p+.2,de("#5a4632"))}break}case"sofa":{const c=Math.max(1,Math.round((h?o:l)/2.8));for(let u=0;u<c;u++){const d=u/c,f=(u+1)/c,[p,_,g,m]=h?[e.x0+o*d+.04,e.y0,e.x0+o*f-.04,e.y1]:[e.x0,e.y0+l*d+.04,e.x1,e.y0+l*f-.04];E(z,t,p,_,g,m,i,i+e.h*.75),E(z,t,p+.05,_+.05,g-.05,m-.05,i+e.h*.75,i+e.h)}e.room==="407"&&E(z,t,e.x0,e.y1-.8,e.x1,e.y1,i,i+2.6);break}case"fire":E(z,t,e.x0,e.y0,e.x1,e.y1,0,s),E(z,n.c.dark,e.x0-.02,e.y0+1.5,e.x0+.4,e.y1-1.5,.6,1.3);{const c=new Dt({color:16747069,emissive:16738842,emissiveIntensity:1.4});E(z,c,e.x0-.03,e.y0+1.8,e.x0+.1,e.y1-1.8,.65,.95)}break;case"lounge":Co(n,e.x0,e.y0,e.x1,e.y1,n.c.leather,!1),E(z,n.c.leather,e.x0+.4,e.y0-1.8,e.x1-.4,e.y0-.3,.3,1.25);break;case"lounge2":Co(n,e.x0,e.y0,e.x0+2.6,e.y1,t,!0),Co(n,e.x1-2.6,e.y0,e.x1,e.y1,t,!0),ke(z,n.c.honey,r,a,.7,0,1.6,16);break;case"art":{const[u]=h?[[e.x0-.2,e.y0,e.x1+.2,e.y1],0]:[[e.x0,e.y0-.2,e.x1,e.y1+.2],0];E(z,n.c.frame,u[0],u[1],u[2],u[3],i-.2,s+.2);const d=h?[e.x0,e.y0-.03,e.x1,e.y1+.03]:[e.x0-.03,e.y0,e.x1+.03,e.y1];E(z,t,d[0],d[1],d[2],d[3],i,s);const f=h?o:l;for(let p=0;p<3;p++){const _=.15+p*.28,g=["#2f4a3c","#b8643f","#e8dfc9"][p];h?E(z,de(g),e.x0+f*_,e.y0-.05,e.x0+f*(_+.22),e.y1+.05,i+.6+p*.5,s-.8+p*.2):E(z,de(g),e.x0-.05,e.y0+f*_,e.x1+.05,e.y0+f*(_+.22),i+.6+p*.5,s-.8+p*.2)}break}case"bed":v1(n,e,t);break;case"curtain":{E(z,n.c.sheer,e.x0+1.6,e.y0,e.x1-1.6,e.y1,i,s);for(const c of[e.x0,e.x1-1.6])for(let u=0;u<6;u++)E(z,n.c.linen,c+u*.27,e.y0-u%2*.15,c+u*.27+.22,e.y1+.1-u%2*.15,i,s);E(z,n.c.frame,e.x0,e.y0,e.x1,e.y1,s,s+.08);break}case"fan":ke(z,n.c.frame,r,a,.05,i,10.6,6),ke(z,t,r,a,.35,i-.15,i+.15,14);for(let c=0;c<3;c++){const u=Wi(2.6,.06,.5);u.translate(1.6,0,0),u.rotateY(c*Math.PI*2/3+.3),Wt(z,t,u,r,a,i)}break;case"cove":{E(z,n.c.lamp,e.x0,e.y0,e.x1,e.y0+.3,i,s),E(z,n.c.lamp,e.x0,e.y1-.3,e.x1,e.y1,i,s),E(z,n.c.lamp,e.x0,e.y0,e.x0+.3,e.y1,i,s),E(z,n.c.lamp,e.x1-.3,e.y0,e.x1,e.y1,i,s);break}case"tub":{E(z,t,e.x0,e.y0,e.x1,e.y1,0,.3),E(z,t,e.x0,e.y0,e.x1,e.y0+.28,0,s),E(z,t,e.x0,e.y1-.28,e.x1,e.y1,0,s),E(z,t,e.x0,e.y0,e.x0+.28,e.y1,0,s),E(z,t,e.x1-.28,e.y0,e.x1,e.y1,0,s),E(z,n.c.water,e.x0+.28,e.y0+.28,e.x1-.28,e.y1-.28,.3,s-.35),E(z,t,e.x0+.28,e.y0+.28,e.x0+1.4,e.y1-.28,.3,1.2);break}case"vanity":E(z,t,e.x0,e.y0,e.x1,e.y1,i,i+e.h),E(z,n.c.blackstone,e.x0-.05,e.y0-.05,e.x1,e.y1+.05,i+e.h,i+e.h+.15);for(const c of[e.y0+l*.28,e.y0+l*.72])E(z,n.c.dark,e.x0+.35,c-.8,e.x1-.5,c+.8,i+e.h+.14,i+e.h+.16),E(z,n.c.frame,e.x1-.35,c-.04,e.x1-.1,c+.04,i+e.h+.15,i+e.h+1),E(z,n.c.frame,e.x1-.7,c-.04,e.x1-.1,c+.04,i+e.h+.92,i+e.h+1);E(z,n.c.mirror,e.x1+.08,e.y0+.3,e.x1+.2,e.y1-.3,4.2,7.2);break;case"seat":E(z,t,e.x0,e.y0,e.x1,e.y1,0,1.35),E(z,n.c.linen,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,1.35,1.65);for(let c=0;c<3;c++)E(z,de(["#a7b39a","#e2c894","#d9cbb5"][c]),e.x1-.5,e.y0+.6+c*2.1,e.x1-.1,e.y0+2+c*2.1,1.65,2.8);break;case"cubes":{E(z,t,e.x0,e.y0,e.x1,e.y1,0,s);const c=Math.round((h?o:l)/1.1),u=["#a7b39a","#e2c894","#c98f6a","#8fa9b8"];for(let d=0;d<c;d++)for(let f=0;f<2;f++){const p=(d+.08)/c,_=(d+.92)/c,g=.15+f*1.1,m=g+.9,S=de(u[(d+f)%4]);h?E(Jt,S,e.x0+o*p,e.y1-.02,e.x0+o*_,e.y1+.05,g,m):E(Jt,S,e.x1-.02,e.y0+l*p,e.x1+.05,e.y0+l*_,g,m)}break}case"beanbags":{const c=o>3?2:1;for(let u=0;u<c;u++)vi(z,t,e.x0+o*(u+.5)/c,a+(u?.4:-.3),.55,1.05,.55,14);break}case"kidwall":{E(z,t,e.x0,e.y0,e.x1,e.y1,0,s);const c=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2"],u=h?o:l;for(let d=0;d<24;d++){const f=.05+d*37%100/100*.9,p=.6+d*53%100/100*(s-1.2),_=(h?e.x0:e.y0)+u*f;h?E(Jt,de(c[d%5]),_,e.y1,_+.3,e.y1+.18,p,p+.25):E(Jt,de(c[d%5]),e.x1,_,e.x1+.18,_+.3,p,p+.25)}h?E(z,de("#4f5e66"),e.x0,e.y1,e.x1,e.y1+3.2,0,.6):E(z,de("#4f5e66"),e.x1,e.y0,e.x1+3.2,e.y1,0,.6);break}case"rig":{[[e.x0,e.y0],[e.x1-.3,e.y0],[e.x0,e.y1-.3],[e.x1-.3,e.y1-.3]].forEach(([u,d])=>{E(z,t,u,d,u+.3,d+.3,0,s),E(z,t,u-.4,d-.4,u+.3+.4,d+.3+.4,0,.05)}),E(z,t,e.x0,e.y0,e.x1,e.y0+.3,s-.3,s),E(z,t,e.x0,e.y1-.3,e.x1,e.y1,s-.3,s);for(let u=0;u<4;u++){const d=e.x0+o*(u+.5)/4;ke(z,n.c.steel,d,a,.06,s-.25,s-.1,6),E(z,n.c.steel,d-.05,e.y0,d+.05,e.y1,s-.25,s-.12)}for(const u of[a-.9,a+.9]){E(z,de("#c9b48e"),e.x0+1.15,u-.03,e.x0+1.25,u+.03,6.2,s-.2);const d=new Vi(.4,.07,6,18);Wt(z,n.c.honey,d,e.x0+1.2,u,5.8)}ke(z,de("#c8b083"),e.x1-1,a,.09,.4,s-.2,8),ke(z,de("#c8b083"),e.x1-1,a,.35,.05,.4,10);break}case"frame":{[[e.x0,e.y0],[e.x1-.25,e.y0],[e.x0,e.y1-.25],[e.x1-.25,e.y1-.25]].forEach(([d,f])=>E(z,t,d,f,d+.25,f+.25,i,s)),E(z,t,e.x0,e.y0,e.x1,e.y0+.25,s-.25,s),E(z,t,e.x0,e.y1-.25,e.x1,e.y1,s-.25,s),E(z,t,e.x0,e.y0,e.x0+.25,e.y1,s-.25,s),E(z,t,e.x1-.25,e.y0,e.x1,e.y1,s-.25,s),E(z,de("#e6dccb"),e.x0+.2,e.y0+.2,e.x1-.2,e.y1-.2,1.9,2.4),E(z,t,e.x0,e.y0,e.x1,e.y1,0,1.9);for(let d=1;d<4;d++)E(z,n.c.steel,e.x0+o*d/4,e.y0,e.x0+o*d/4+.06,e.y1,s-.5,s-.44);break}case"reformer":E(z,t,e.x0,e.y0,e.x1,e.y1,.3,.8),[[e.x0+.2,e.y0],[e.x1-.5,e.y0],[e.x0+.2,e.y1-.3],[e.x1-.5,e.y1-.3]].forEach(([c,u])=>E(z,t,c,u,c+.3,u+.3,0,.3)),E(z,de("#e6dccb"),e.x0+2.2,e.y0+.15,e.x0+4.6,e.y1-.15,.8,s),E(z,n.c.steel,e.x1-.5,e.y0,e.x1-.35,e.y1,.8,2);break;case"rower":E(z,t,e.x0,a-.3,e.x1-1.2,a+.3,.5,.75),E(z,t,e.x0,a-.5,e.x0+.3,a+.5,0,.75),E(z,de("#2a2a2a"),e.x0+1.4,a-.45,e.x0+2.4,a+.45,.75,1);{const c=new cn(.95,.95,.9,20);c.rotateZ(Math.PI/2),c.rotateY(Math.PI/2),Wt(z,n.c.glass,c,e.x1-.95,a,.95),E(z,n.c.water,e.x1-1.7,a-.35,e.x1-.2,a+.35,.3,.9),E(z,t,e.x1-2,a-.6,e.x1-1.8,a+.6,0,1.9)}break;case"treadmill":E(z,t,e.x0,e.y0,e.x1,e.y1,0,.6),E(z,de("#1a1a1a"),e.x0+.3,e.y0+.3,e.x1-1,e.y1-.3,.6,.65),E(z,t,e.x1-.9,e.y0,e.x1-.6,e.y0+.25,.6,s),E(z,t,e.x1-.9,e.y1-.25,e.x1-.6,e.y1,.6,s),E(z,t,e.x1-1.3,e.y0,e.x1-.6,e.y1,s-.3,s);break;case"krack":E(z,t,e.x0,e.y0,e.x0+.2,e.y1,0,s),E(z,t,e.x1-.2,e.y0,e.x1,e.y1,0,s),E(z,t,e.x0,e.y0,e.x1,e.y1,1.6,1.7),E(z,t,e.x0,e.y0,e.x1,e.y1,s-.1,s);for(let c=0;c<8;c++){const u=e.x0+.5+c*(o-1)/7;for(const d of[1.7,s]){const f=new cn(.17+c*.012,.17+c*.012,.25,10);f.rotateX(Math.PI/2),Wt(Jt,de("#1d1d1d"),f.clone(),u,e.y0+.25,d+.2),Wt(Jt,de("#1d1d1d"),f,u,e.y1-.25,d+.2)}}for(let c=0;c<6;c++){const u=e.x0+.6+c*1.05;vi(Jt,de("#232323"),u,e.y0-.6,.35+c*.03,.35+c*.03,1,10);const d=new Vi(.22,.05,4,10,Math.PI);Wt(Jt,de("#232323"),d,u,e.y0-.6,.65+c*.06)}break;case"bands":{for(let u=0;u<3;u++)E(z,t,e.x0,e.y0+u*(l-.3)/2,e.x1,e.y0+u*(l-.3)/2+.3,0,s);for(const u of[3.5,5.5,7.6])E(z,n.c.steel,e.x1-.2,e.y0,e.x1,e.y1,u,u+.1);const c=["#d0573c","#3f7fbf","#4e9a52","#e8c547","#2a2a2a"];for(let u=0;u<10;u++)E(Jt,de(c[u%5]),e.x1,e.y0+.6+u*.85,e.x1+.06,e.y0+.75+u*.85,5.6-u%3*.8,7.6);break}case"mirror":E(z,n.c.mirror,e.x0,e.y0,e.x1,e.y1,i,s),E(z,n.c.frame,e.x0-.02,e.y0,e.x1+.02,e.y1,i-.05,i);break;case"plunge":{E(z,t,e.x0,e.y0,e.x1,e.y0+.35,0,s),E(z,t,e.x0,e.y1-.35,e.x1,e.y1,0,s),E(z,t,e.x0,e.y0,e.x0+.35,e.y1,0,s),E(z,t,e.x1-.35,e.y0,e.x1,e.y1,0,s),E(z,n.c.zellige,e.x0+.35,e.y0+.35,e.x1-.35,e.y1-.35,-.02,0),E(z,n.c.water,e.x0+.35,e.y0+.35,e.x1-.35,e.y1-.35,0,s-.12);break}case"benches":{E(z,t,e.x0,e.y0,e.x1,e.y0+1.8,1.4,1.6),E(z,t,e.x0,e.y0+1.8,e.x1,e.y1,s-.2,s),E(z,t,e.x0,e.y0+1.6,e.x1,e.y0+1.8,1.6,s),E(z,n.c.lamp,e.x0,e.y0+.15,e.x1,e.y0+.25,1.3,1.38),E(z,n.c.lamp,e.x0,e.y0+1.95,e.x1,e.y0+2.05,s-.3,s-.22),E(z,t,e.x0,e.y1-.2,e.x1,e.y1,s,s+2.5);break}case"heater":E(z,t,e.x0,e.y0,e.x1,e.y1,.3,s-.4);for(let c=0;c<9;c++){const u=new Ra(.22,0);Wt(z,de(c%2?"#6d6a66":"#8a8580"),u,e.x0+.3+c%3*.4,e.y0+.4+Math.floor(c/3)*.5,s-.3)}for(let c=0;c<4;c++)E(z,n.c.aspen,e.x0-.2+c*.5,e.y1+.1,e.x0-.05+c*.5,e.y1+.2,.2,s);break;case"lowtable":E(z,t,e.x0,e.y0,e.x1,e.y1,.9,1.2),E(z,t,e.x0+.3,e.y0+.3,e.x1-.3,e.y1-.3,0,.9),[[r,e.y0-1],[r,e.y1+1],[e.x0-1,a],[e.x1+1,a]].forEach(([c,u])=>E(z,de("#6f7a55"),c-.85,u-.85,c+.85,u+.85,0,.3));break;case"andon":E(z,n.c.paper,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,.3,s),[[e.x0,e.y0],[e.x1-.08,e.y0],[e.x0,e.y1-.08],[e.x1-.08,e.y1-.08]].forEach(([c,u])=>E(z,de("#3d2c20"),c,u,c+.08,u+.08,0,s));break;case"standdesk":E(z,t,e.x0,e.y0,e.x1,e.y1,s-.12,s);for(const c of[e.x0+.5,e.x1-.7])E(z,n.c.frame,c,a-.1,c+.2,a+.1,0,s-.12),E(z,n.c.frame,c-.1,e.y0+.2,c+.3,e.y1-.2,0,.1);E(z,n.c.frame,r-1.4,e.y0+.5,r+1.4,e.y0+.6,s+.5,s+2),E(z,n.c.frame,r-.1,e.y0+.55,r+.1,e.y0+.9,s,s+.6),E(Jt,de("#bfc3c5"),r-.6,e.y1-1.1,r+.6,e.y1-.4,s,s+.04),ke(z,n.c.frame,r,e.y1+1.4,.1,0,1.6,8),E(z,de("#4a4a46"),r-.9,e.y1+.6,r+.9,e.y1+2.2,1.6,1.85),E(z,de("#4a4a46"),r-.9,e.y1+2,r+.9,e.y1+2.25,1.85,3.6);break;case"studio":E(z,t,e.x0,e.y0,e.x1,e.y1,s-.15,s),E(z,n.c.frame,e.x0+.2,e.y0+.2,e.x0+2.2,e.y1-.2,0,s-.15),E(z,n.c.frame,e.x1-2.2,e.y0+.2,e.x1-.2,e.y1-.2,0,s-.15),E(z,de("#2b2b2b"),r-1.6,e.y1-1.6,r+1.6,e.y1-.2,s,s+.25);for(let c=0;c<12;c++)E(Jt,de(c%3?"#cfcfcf":"#e8c547"),r-1.4+c*.25,e.y1-1.3,r-1.3+c*.25,e.y1-.6,s+.25,s+.32);E(z,de("#1d1d1d"),e.x0+.5,e.y0+.4,e.x0+1.4,e.y0+1.4,s,s+.15);for(let c=0;c<16;c++)E(Jt,de("#d0573c"),e.x0+.58+c%4*.2,e.y0+.48+Math.floor(c/4)*.22,e.x0+.72+c%4*.2,e.y0+.62+Math.floor(c/4)*.22,s+.15,s+.18);E(z,n.c.frame,r-2.6,e.y0+.3,r-.2,e.y0+.4,s+.6,s+2),E(z,n.c.frame,r+.2,e.y0+.3,r+2.6,e.y0+.4,s+.6,s+2);for(const c of[e.x0+.4,e.x1-1.3])E(z,de("#2a2a2a"),c,e.y0+.2,c+.9,e.y0+1.1,s,s+1.3);break;case"piano":E(z,t,e.x0,e.y0,e.x1,e.y1,2.15,2.6),E(z,t,e.x0,e.y0,e.x1-.4,e.y0+.15,0,2.15),E(z,t,e.x0,e.y1-.15,e.x1-.4,e.y1,0,2.15),E(z,n.c.white,e.x1-.55,e.y0+.2,e.x1-.05,e.y1-.2,2.6,2.66);for(let c=0;c<16;c++)E(Jt,de("#111"),e.x1-.55,e.y0+.3+c*.27,e.x1-.25,e.y0+.4+c*.27,2.66,2.72);E(z,t,e.x1+1,a-.9,e.x1+2,a+.9,1.4,1.65);break;case"drums":{[[0,-1.4,.9,1.1],[-1.5,0,.6,2.4],[1.5,.2,.55,2.6],[-.8,1.3,.5,2.8],[.9,1.4,.5,2.8],[-2,1.6,.7,3.6],[2.1,1.7,.75,3.8]].forEach(([c,u,d,f],p)=>{p>=5?(ke(z,de("#b39a5a"),r+c,a+u,d,f,f+.05,16),ke(z,t,r+c,a+u,.05,0,f,6)):ke(z,p===0?de("#444"):t,r+c,a+u,d,p===0?0:f-.35,p===0?1.8:f,16)}),ke(z,de("#6f7a55"),r,a-2.6,.6,0,1.6,12);break}case"guitarwall":{E(z,n.c.honey,e.x0,e.y0+.1,e.x1,e.y1,i+2.9,i+3.1);const c=["#c98a3c","#1d1d1d","#a33a2a","#e6d3a8"],u=4;for(let d=0;d<u;d++)S1(e.x0+o*(d+.5)/u,i,c[d],e.y0+.05,.28);break}case"apanels":{const c=Math.floor(l/4.2);for(let u=0;u<c;u++){const d=e.y0+u*(l/c)+.2;E(z,de(["#8d8a72","#6f7a68","#a39a86"][u%3]),e.x0,d,e.x1,d+l/c-.4,i+u%2*.6,i+4.5+u%2*.6)}break}case"clouds":for(let c=0;c<2;c++)for(let u=0;u<2;u++){const d=e.x0+c*o/2+.4,f=e.y0+u*l/2+.4;E(z,t,d,f,d+o/2-.8,f+l/2-.8,i+(c+u)%2*.4,i+.3+(c+u)%2*.4)}break;case"ribs":{const c=Math.floor(o/.9);for(let u=0;u<=c;u++){const d=e.x0+u*o/c,f=.3+.55*(.5+.5*Math.sin(u/c*Math.PI*2.2));E(z,t,d-.12,e.y0,d+.12,e.y1,s-f,s)}break}case"layered":ke(z,n.c.frame,r,a,.02,i+e.h,12.8,4),[[1.1,0],[.8,.35],[.5,.7]].forEach(([c,u])=>ke(z,t,r,a,c*.35,i+u,i+u+.25,18,c)),ke(z,n.c.lamp,r,a,.3,i-.05,i,12),ke(z,n.c.frame,23.7,15,.02,7.6,12.8,4),[[1.1,0],[.8,.35],[.5,.7]].forEach(([c,u])=>ke(z,t,23.7,15,c*.35,6.6+u,6.85+u,18,c));break;case"rgb":E(z,n.c.rgb,e.x0,e.y0,e.x1,e.y1,i,s);break;default:E(z,t,e.x0,e.y0,e.x1,e.y1,i,s),e.label.includes("Mic")&&ke(z,de("#222"),r,a,.18,s,s+.45,10)}}}function Fh(n,e,t,i,s,r,a,o,l=.45,h=.15){const c=Math.hypot(s-t,r-i),u=Math.floor(c/l);for(let d=0;d<=u;d++){const f=d/u,p=t+(s-t)*f,_=i+(r-i)*f;E(n,e,p-h/2,_-h/2,p+h/2,_+h/2,a,o)}}function w1(n,e){const t=Rt.site,i=-1.7,s=new Li(1600,1600,1,1);s.rotateX(-Math.PI/2);const r=s.attributes.uv;for(let x=0;x<r.count;x++)r.setXY(x,r.getX(x)*1600,r.getY(x)*1600);const a=new Nt(s,n.meadow);a.position.y=i,a.receiveShadow=!0,e.ground.add(a);const o=Rt.courtyard,l=[n.plinth,n.plinth,n.flag,n.plinth,n.plinth,n.plinth];E("site",[n.plinth,n.plinth,n.slate,n.plinth,n.plinth,n.plinth],o.x0,o.y0,o.x1,o.y1,i,-.3);{const x=[n.cedar,n.cedar,n.cedar,n.cedar,n.cedar,n.cedar],I=[n.bluestone,n.bluestone,n.bluestone,n.bluestone,n.bluestone,n.bluestone];E("site",x,o.x0,o.y1-4.5,o.x1,o.y1,-.3,-.05),E("site",I,o.x0+4.5,o.y1-5.8,o.x1-4.5,o.y1-4.5,-.3,-.18),E("site",x,o.x0,o.y0+.2,o.x0+4.5,o.y1-4.5,-.3,-.05),E("site",I,o.x0+4.5,o.y0+5.5,o.x0+5.8,o.y1-5.8,-.3,-.18),E("site",x,o.x1-4.5,o.y0+5,o.x1,o.y1-4.5,-.3,-.05),E("site",I,o.x1-5.8,o.y0+5.5,o.x1-4.5,o.y1-5.8,-.3,-.18);for(let L=o.x0+6;L<o.x1-5;L+=3)E("detail",n.lamp,L,o.y1-5.82,L+.5,o.y1-5.78,-.26,-.22);for(let L=o.y0+7;L<o.y1-6;L+=3)E("detail",n.lamp,o.x0+5.78,L,o.x0+5.82,L+.5,-.26,-.22),E("detail",n.lamp,o.x1-5.82,L,o.x1-5.78,L+.5,-.26,-.22);for(let L=o.x0+1;L<=o.x1-1;L+=1.6){const D=Math.sin((L-o.x0)/8*Math.PI)*.5;ke("detail",n.lamp,L,o.y1-6.2,.09,8.6-Math.abs(D),8.78-Math.abs(D),6)}E("site",I,o.x0+5.8,40.3,o.x1-5.8,41.7,-.3,-.2),[[o.x1-4,34],[o.x1-4,41.5]].forEach(([L,D])=>{E("site",n.c.teak,L-1.1,D,L+1.1,D+6,-.05,.9),E("site",n.c.linen,L-1,D+.2,L+1,D+4.4,.9,1.25);const G=Wi(2,.3,1.8);G.rotateX(-.9),G.translate(L-pt,1.6,-(D+5.2-Et)),Bt.add("site",n.c.teak,G)})}const h=t.lawn;E("site",[n.plinth,n.plinth,n.turf,n.plinth,n.plinth,n.plinth],h.x0,h.y0,h.x1,h.y1,-.5,-.28);const c=t.zen;E("site",n.plinth,c.x0-.3,c.y0-.3,c.x1+.3,c.y1+.3,-.5,-.26),E("site",n.gravel,c.x0,c.y0,c.x1,c.y1,-.5,-.27),[[42,33,1.6,1.4],[48.5,36.5,1.2,1],[50,32,.9,.8]].forEach(([x,I,L,D])=>{const G=new Ra(L,0);G.scale(1,D/L*.7,1),G.translate(x-pt,-.3+D*.3,-(I-Et)),Bt.add("site",n.plinth,G)});const u=t.water;E("site",n.c.blackstone,u.x0-.6,u.y0-.6,u.x1+.6,u.y1+.6,i,.1),E("site",n.poolwater,u.x0,u.y0,u.x1,u.y1,i,-.05);{const x=new Dt({color:7309893,roughness:.9}),I=new Dt({color:5208634,roughness:.6});for(let L=0;L<26;L++){const D=u.x0+.8+L*41%100/100*(u.x1-u.x0-1.6),G=u.y0+.8+L*67%100/100*(u.y1-u.y0-1.6);L%3?ke("site",x,D,G,.06,-.05,2.2+L%4*.5,4,.02):ke("site",I,D,G,.6,0,.03,10)}}ke("site",n.c.stone,u.x0-1.8,u.y0+2.5,1.2,-.3,1.1,12),ke("site",n.water,u.x0-1.8,u.y0+2.5,.8,1.1,1.13,12),E("site",n.c.fir,u.x0-1.85,u.y0+2.5,u.x0-.2,u.y0+2.62,1.6,1.72);const d=t.shadetree;ke("site",n.dark,d.cx,d.cy,.9,-.3,11,10,.55);{const x=new Dt({color:7178814,roughness:.9});[[0,0,17,5.6],[2.8,1.6,15.5,3.7],[-2.8,-1.2,16,3.8],[1.2,-2.8,19,3.4],[-1.6,2.4,19.5,3.5],[0,0,22,3.2]].forEach(([I,L,D,G])=>{const H=new Mi(G,1);H.scale(1,.72,1),H.translate(d.cx+I-pt,D,-(d.cy+L-Et)),Bt.add("site",x,H)})}{const x=new Dt({color:12076074,roughness:.9}),I=new Dt({color:13658670,roughness:.9});t.maples.forEach(([L,D],G)=>{ke("site",n.dark,L,D,.22,-.3,4.5,6,.14),[[0,0,5.6,2.5],[1.3,.6,4.9,1.8],[-1.4,-.6,5.1,1.9],[.4,-1.2,6.5,1.6]].forEach(([H,J,U,k])=>{const q=new Mi(k,1);q.scale(1.15,.55,1.15),q.translate(L+H-pt,U,-(D+J-Et)),Bt.add("site",G%2?I:x,q)})})}t.lanterns.forEach(([x,I])=>{ke("site",n.c.stone,x,I,.55,-.3,.1,6),ke("site",n.c.stone,x,I,.2,.1,1.8,6),E("site",n.c.stone,x-.5,I-.5,x+.5,I+.5,1.8,2.6),E("site",n.paper,x-.32,I-.52,x+.32,I+.52,1.95,2.45),ke("site",n.c.stone,x,I,.15,2.6,3.3,6,.9),ke("site",n.c.stone,x,I,.05,3.3,3.55,6,.18)});for(let x=0;x<9;x++){const I=Math.PI*(1.05+x*.06),L=Wi(1.25,.18,1.5);L.translate(0,0,0),L.rotateY(I+Math.PI/2);const D=6.2;if(Wt("site",n.teak,L,d.cx+Math.cos(I)*D,d.cy+Math.sin(I)*D,1.4),x%2===0){const G=Wi(.25,1.4,1.1);G.rotateY(I+Math.PI/2),Wt("site",n.c.blackstone,G,d.cx+Math.cos(I)*D,d.cy+Math.sin(I)*D,0)}}{const x=new Dt({color:4156213,roughness:.8});[[38.5,29.5],[56,41.2],[42.5,52.5],[69.5,51.5],[54,29],[70,36.5]].forEach(([I,L],D)=>{for(let G=0;G<5;G++){const H=new Ts(.5,3+G%3,4);H.rotateZ((G-2)*.35),H.rotateY(G*1.3),Wt("site",x,H,I+(G-2)*.3,L+(G*7%3-1)*.3,1)}})}{const x=[];for(let J=39;J<=69;J+=6)x.push([J,28.4],[J,53.8]);for(let J=34;J<=50;J+=5.3)x.push([37.2,J],[70.8,J]);const I=new cn(.07,.09,1.3,6);I.translate(0,.65,0);const L=new Si(I,n.bronze,x.length),D=new Ei(.42,12,6,0,Math.PI*2,0,Math.PI/2);D.scale(1,.55,1);const G=new Si(D,n.lamp,x.length),H=new ot;x.forEach(([J,U],k)=>{H.makeTranslation(J-pt,-.3,-(U-Et)),L.setMatrixAt(k,H),H.makeTranslation(J-pt,1.35,-(U-Et)),G.setMatrixAt(k,H)}),e.detail.add(L),e.detail.add(G)}{const x=t.cshower;E("site",n.c.blackstone,x.x0,x.y0,x.x1,x.y1,-.3,-.18),E("site",n.c.charred,x.x0,x.y1-.3,x.x1,x.y1,-.3,7),E("site",n.c.charred,x.x0,x.y0,x.x0+.3,x.y1,-.3,7),E("site",n.c.brass,x.x0+2.4,x.y1-.5,x.x0+2.55,x.y1-.3,-.2,7.2),E("site",n.c.brass,x.x0+2.3,x.y1-1.6,x.x0+2.65,x.y1-.4,7,7.15),ke("site",n.c.brass,x.x0+2.47,x.y1-1.5,.45,6.85,7,14)}const f=t.pooldeck,p=t.pool;{const x=[n.plinth,n.plinth,n.basalt,n.plinth,n.plinth,n.plinth];E("site",n.granite,p.x0-1.5,p.y0-1.5,p.x1+1.5,p.y1+1.5,i,-.95),E("site",x,f.x0,f.y0,f.x1,p.y0,i,-1),E("site",x,f.x0,p.y1,f.x1,f.y1,i,-1),E("site",x,f.x0,p.y0,p.x0,p.y1,i,-1),E("site",x,p.x1,p.y0,f.x1,p.y1,i,-1)}E("site",n.pooltile,p.x0,p.y0,p.x1,p.y1,-5.6,-5.4),E("site",n.pooltile,p.x0,p.y0-.02,p.x1,p.y0+.02,-5.4,-1),E("site",n.pooltile,p.x0,p.y1-.02,p.x1,p.y1+.02,-5.4,-1),E("site",n.pooltile,p.x0-.02,p.y0,p.x0+.02,p.y1,-5.4,-1),E("site",n.pooltile,p.x1-.02,p.y0,p.x1+.02,p.y1,-5.4,-1),E("site",n.poolwater,p.x0,p.y0,p.x1,p.y1,-5.4,-1.4);{const x=t.bale;E("site",n.c.honey,x.x0,x.y0,x.x1,x.y1,-1,.4),E("site",n.c.linen,x.x0+.4,x.y0+.4,x.x1-.4,x.y1-.4,.4,.9),[[x.x0+1,x.y0+2],[x.x1-2,x.y0+2],[x.x0+1.5,x.y1-1.5]].forEach(([I,L],D)=>E("site",de(["#a7b39a","#e2c894","#c98f6a"][D]),I,L,I+1.2,L+1.2,.9,1.5)),[[x.x0,x.y0],[x.x1-.5,x.y0],[x.x0,x.y1-.5],[x.x1-.5,x.y1-.5]].forEach(([I,L])=>E("site",n.c.fir,I,L,I+.5,L+.5,.4,x.h)),E("site",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],x.x0-3,x.y0-3,x.x1+3,x.y1+3,x.h,x.h+.6,(I,L)=>(L-(x.y0+x.y1)/2)*.12)}for(let x=0;x<3;x++)E("site",n.c.teak,60+x*7,-27,62.5+x*7,-23.5,-1,-.5),E("site",n.c.linen,60.1+x*7,-26.9,62.4+x*7,-23.6,-.5,-.25);const _=t.outdoor_shower;E("site",n.stone,_.x0,_.y0,_.x1,_.y1,-1.2,-.9),E("site",n.c.charred,_.x0,_.y0,_.x0+.3,_.y1,-.9,7),E("site",n.c.charred,_.x0,_.y0,_.x1,_.y0+.3,-.9,7),E("site",n.brass,_.x0+.3,_.y0+2.4,_.x0+.5,_.y0+2.6,-.9,7.2),E("site",n.brass,_.x0+.3,_.y0+2.4,_.x0+1.5,_.y0+2.6,7,7.2),ke("site",n.brass,_.x0+1.4,_.y0+2.5,.4,6.85,7,12);const g=t.lane;E("site",n.turf,g.x0,g.y0,g.x1,g.y1,i,-1.05);for(let x=0;x<=4;x++){const I=g.x0+x*15;E("site",n.white,I-.15,g.y0,I+.15,g.y1,-1.05,-1.02)}E("site",n.white,g.x0,(g.y0+g.y1)/2-.08,g.x1,(g.y0+g.y1)/2+.08,-1.05,-1.03),E("site",n.c.charred,g.x1+.5,g.y0-1,g.x1+1.5,g.y1+1,i,2.5);{const x=t.pullup;[x.x0,x.x1-.3].forEach(I=>E("site",n.frame,I,(x.y0+x.y1)/2-.15,I+.3,(x.y0+x.y1)/2+.15,-1.05,8.5)),E("site",n.steel,x.x0,(x.y0+x.y1)/2-.05,x.x1,(x.y0+x.y1)/2+.05,8,8.12),E("site",n.steel,x.x0,(x.y0+x.y1)/2-.05,x.x1,(x.y0+x.y1)/2+.05,5.6,5.72)}E("site",n.flag,4,-8,50,0,i,-1.05);const m=t.veg;E("site",n.gravel,m.x0,m.y0,m.x1,m.y1,i,-1.1);for(let x=0;x<4;x++){const I=m.x0+1.5+x*5.8;E("site",n.c.fir,I,m.y0+2,I+4,m.y0+20,i,.6),E("site",de("#4a3a2c"),I+.2,m.y0+2.2,I+3.8,m.y0+19.8,.6,.65);for(let L=0;L<8;L++){const D=new Mi(.75,0);D.translate(I+2-pt,1.1,-(m.y0+3.5+L*2.1-Et)),Bt.add("site",de(L%3?"#5f8a3e":"#7aa64c"),D)}}Fh("site",n.c.fir,m.x0,m.y0,m.x0,m.y1,i,3.5,1.2,.2),Fh("site",n.c.fir,m.x0,m.y1,m.x1,m.y1,i,3.5,1.2,.2);{const x=new cn(.25,.35,5,6);x.translate(0,2.5,0);const I=new Mi(3.2,1);I.scale(1,.8,1);const L=new Ei(.28,6,4),D=t.orchard.length,G=new Si(x,n.dark,D),H=new Si(I,new Dt({color:6195770,roughness:.9}),D),J=new Si(L,new Dt({color:13783086,roughness:.5}),D*8),U=new ot;t.orchard.forEach(([k,q],ue)=>{U.makeTranslation(k-pt,i,-(q-Et)),G.setMatrixAt(ue,U),U.makeTranslation(k-pt,i+7.2,-(q-Et)),H.setMatrixAt(ue,U);for(let fe=0;fe<8;fe++){const $e=fe*.785+ue;U.makeTranslation(k-pt+Math.cos($e)*2.9,i+6.2+fe%3*.8,-(q-Et)+Math.sin($e)*2.9),J.setMatrixAt(ue*8+fe,U)}}),[G,H].forEach(k=>{k.castShadow=!0,e.site.add(k)}),e.detail.add(J)}const S=t.bikes;E("site",n.stone,S.x0-1,S.y0,S.x1,S.y1,i,-1.05);const A=new Dt({color:2236962,roughness:.7});for(let x=0;x<4;x++){const I=S.y0+1.2+x*2.4;E("site",n.frame,S.x0+.2,I-.05,S.x1-.2,I+.05,-1.05,1.3),[0,2.5].forEach(L=>{const D=new Vi(1.1,.12,6,18);D.rotateY(Math.PI/2*0),D.translate(S.x0-1.2+L-pt,0,-(I-Et)),Bt.add("site",A,D)}),E("site",de(["#a3613d","#3f7fbf","#4e9a52","#e8c547"][x]),S.x0-1.2,I-.06,S.x0+1.3,I+.06,.6,.75)}const b=t.entrycourt;E("site",n.flag,b.x0,b.y0,b.x1,b.y1,i,-1.05),E("site",n.gravel,-46,16,-20,58,i,-1.1);const T=new Ca;[[-90,4],[-60,10],[-44,24],[-46,16],[-62,0],[-90,-6]].forEach(([x,I],L)=>L?T.lineTo(x-pt,I-Et):T.moveTo(x-pt,I-Et));const R=new ql(T);R.rotateX(-Math.PI/2),R.scale(1,1,1),R.translate(0,i+.08,0),Bt.add("site",n.gravel,R);const C=t.carport;[[C.x0,C.y0],[C.x1-.4,C.y0],[C.x0,C.y1-.4],[C.x1-.4,C.y1-.4],[C.x0,(C.y0+C.y1)/2],[C.x1-.4,(C.y0+C.y1)/2]].forEach(([x,I])=>E("site",n.frame,x,I,x+.4,I+.4,i,9));{const x=(I,L)=>(I-(C.x0+C.x1)/2)*.06;E("site",[n.frame,n.frame,n.seam,n.frame,n.frame,n.frame],C.x0-3,C.y0-3,C.x1+3,C.y1+3,9,9.7,x)}E("site",de("#8d9399"),C.x0+3,C.y0+3,C.x0+9.5,C.y1-4,i,3.6),E("site",de("#5b6e5a"),C.x0+13,C.y0+3,C.x0+19.5,C.y1-4,i,4.8),E("site",n.c.rammed,1,36,2,47,i,4);{const x=new Dt({color:10134106,roughness:1}),I=new Dt({color:5205564,roughness:.9});t.frontgarden.forEach(([L,D,G,H],J)=>{E("site",n.plinth,L,D,G,H,i,-1),E("site",de("#4a3a2c"),L+.3,D+.3,G-.3,H-.3,-1,-.95);for(let U=0;U<18;U++){const k=L+1+(U*37+J*11)%100/100*(G-L-2),q=D+1+U*59%100/100*(H-D-2);if(U%3){const ue=new Ts(.7,2.2,5);Wt("site",x,ue,k,q,.1)}else vi("site",I,k,q,-.3,1.1,.7,8)}}),ke("site",n.dark,-10,44,.25,i,7,6,.15),[[0,0,9,3],[1.5,1,8,2],[-1.4,-.8,8.3,2.2]].forEach(([L,D,G,H])=>{const J=new Mi(H,1);J.scale(1,.75,1),Wt("site",new Dt({color:9085004,roughness:.9}),J,-10+L,44+D,G)})}{const x=t.walkway;E("site",n.flag,x.x0,x.y0,x.x1+5,x.y1,i,-1);for(let I=x.x0+.5;I<x.x1;I+=6)E("site",n.frame,I,x.y0+.3,I+.3,x.y0+.6,-1,x.h),E("site",n.frame,I,x.y1-.6,I+.3,x.y1-.3,-1,x.h);E("site",[n.frame,n.frame,n.seam,n.soffit,n.frame,n.frame],x.x0-.5,x.y0-1,x.x1+.5,x.y1+1,x.h,x.h+.5,(I,L)=>(L-(x.y0+x.y1)/2)*-.08)}const v=t.veranda;E("site",l,v.x0,v.y0,v.x1,v.y1,i,-.25);const w=t.pergola;E("site",l,w.x0,w.y0,w.x1,w.y1,i,-.25),[[w.x0,w.y0+.5],[w.x1-.7,w.y0+.5],[w.x0,w.y1-.7],[w.x1-.7,w.y1-.7]].forEach(([x,I])=>E("site",n.c.charred,x,I,x+.7,I+.7,-.25,9)),E("site",n.c.charred,w.x0-1,w.y0+.5,w.x1+1,w.y0+1.1,8.4,9.2),E("site",n.c.charred,w.x0-1,w.y1-1.1,w.x1+1,w.y1-.5,8.4,9.2);for(let x=w.x0;x<=w.x1;x+=1.2)E("site",n.c.fir,x,w.y0-.5,x+.25,w.y1+.5,9.2,9.7);E("site",de("#6b4a33"),23,85,33,89,2.2,2.5),[23.5,32].forEach(x=>E("site",de("#6b4a33"),x,85.5,x+.4,88.5,-.25,2.2)),E("site",de("#d9cbb5"),23,83.4,33,84.6,-.25,1.3),E("site",de("#d9cbb5"),23,89.4,33,90.6,-.25,1.3);const N=t.firepit;{const x=new cn(N.r+1.5,N.r+1.5,.5,40);x.translate(N.cx-pt,i+.2,-55),Bt.add("site",n.flag,x),ke("site",n.c.stone,N.cx,N.cy,2.8,i,-.2,28),ke("site",n.dark,N.cx,N.cy,2.1,-.2,-.18,24);for(let D=0;D<4;D++){const G=D*Math.PI/2+.4,H=new cn(N.r-.6,N.r-.6,1.4,20,1,!0,G,1);H.translate(N.cx-pt,i+1.2,-55),Bt.add("site",n.c.stone,H)}const I=new Dt({color:16747069,emissive:16738842,emissiveIntensity:1.5});I.name="fire";const L=new Ts(.9,1.6,8);L.translate(N.cx-pt,.6,-55),Bt.add("site",I,L)}{const x=t.climb,I=x.oh;E("site",[n.plinth,n.plinth,n.stone,n.plinth,n.plinth,n.plinth],x.x0-1,x.y0-1,x.x1+1,x.y1+1,i,-1),E("site",de("#b5694a"),x.x0,x.y0,x.x1,x.y1,-1,-.6),[[x.x0,x.y0],[x.x1-.7,x.y0],[x.x0,x.y1-.7],[x.x1-.7,x.y1-.7]].forEach(([D,G])=>E("site",n.c.fir,D,G,D+.7,G+.7,-.6,x.h-1)),E("site",n.c.fir,x.x0-.5,x.y0,x.x1+.5,x.y0+.7,x.h-2,x.h-1),E("site",n.c.fir,x.x0-.5,x.y1-.7,x.x1+.5,x.y1,x.h-2,x.h-1);for(let D=x.x0+3;D<x.x1-1;D+=3)E("site",n.c.fir,D,x.y0-I+.5,D+.35,x.y1+I-.5,x.h-1,x.h-.6);E("site",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],x.x0-I,x.y0-I,x.x1+I,x.y1+I,x.h-.6,x.h+.3,(D,G)=>(G-(x.y0+x.y1)/2)*.07),E("site",n.c.charred,x.x0+1,x.y1-1.6,x.x1-1,x.y1-.9,-.6,x.wall),E("site",n.c.fir,x.x0+1.2,x.y1-2,x.x1-1.2,x.y1-1.6,-.4,x.wall-.2);const L=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2","#f1eee7"];for(let D=0;D<84;D++){const G=x.x0+1.6+D*37%100/100*14.6,H=.6+D*53%100/100*(x.wall-1.4);E("detail",de(L[D%6]),G,x.y1-2.3,G+.38,x.y1-2,H,H+.3)}E("site",de("#d9cbb5"),x.x0+9,x.y1-3.4,x.x0+12,x.y1-2,4,6.5),E("site",de("#55524c"),x.x0+1.2,x.y1-8,x.x1-1.2,x.y1-2.3,-.6,.4),[x.x0+5.5,x.x0+10.5].forEach(D=>E("site",de("#3d3b37"),D,x.y1-8,D+.08,x.y1-2.3,.4,.42)),E("site",de("#d9cbb5"),x.x0+3,x.y1-3,x.x0+5.5,x.y1-2,8.5,10.5);for(let D=0;D<4;D++){const G=x.y0+3+D*2.4;E("site",n.frame,x.x1-2.2,G-.05,x.x1-.9,G+.05,-.6,1.8),[0,2.3].forEach(H=>{const J=new Vi(1,.11,6,18);J.translate(x.x1-3.6+H-pt,.5,-(G-Et)),Bt.add("site",A,J)}),E("site",de(["#4e9a52","#e8c547","#3f7fbf","#a3613d"][D]),x.x1-3.6,G-.06,x.x1-1.2,G+.06,1,1.15)}E("site",n.stone,x.x1+1,2,4,6,i,-1)}{const x=t.util,I=7,L=x.gate;E("site",n.gravel,x.x0,x.y0,x.x1,x.y1,i,-1.15),E("site",n.c.charred,x.x0,x.y1-.4,x.x1,x.y1,i,I),E("site",n.c.charred,x.x0,x.y0,x.x0+.4,x.y1,i,I),E("site",n.c.charred,x.x1-.4,x.y0,x.x1,x.y1,i,I),E("site",n.c.charred,x.x0,x.y0,L[0],x.y0+.4,i,I),E("site",n.c.charred,L[1],x.y0,x.x1,x.y0+.4,i,I),E("site",n.c.charred,L[0]+.3,x.y0-.6,L[0]+5.8,x.y0-.3,-.6,I-.6),E("site",n.c.charred,L[1]-5.8,x.y0-.6,L[1]-.3,x.y0-.3,-.6,I-.6),t.tanks.forEach(([k,q,ue])=>{ke("site",de("#5f6b5a"),k,q,ue,-1.1,8.5,28),ke("site",de("#4f5a4b"),k,q,ue*.98,8.5,9.2,28)});const D=t.watertreat;E("site",n.concrete||n.stone,D.x0,D.y0,D.x1,D.y1,i,-.6),E("site",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],D.x0-.5,D.y0-.5,D.x1+.5,D.y1+.5,8.4,8.8),E("site",n.c.charred,D.x0,D.y1-.4,D.x1,D.y1,-.6,8.4),E("site",n.c.charred,D.x1-.4,D.y0,D.x1,D.y1,-.6,8.4),[[D.x0+.8,.9,"#3f7fbf"],[D.x0+2.3,.9,"#9aa0a3"],[D.x0+3.8,.9,"#9aa0a3"],[D.x0+5.3,.6,"#c9c2b4"]].forEach(([k,q,ue])=>ke("site",de(ue),k,D.y1-1.6,q*.6,-.6,4.5,14)),ke("site",de("#2f4f7a"),D.x0+7.6,D.y1-1.8,.9,-.6,4.8,16),E("site",de("#2a2a2a"),D.x0+1,D.y0+1.5,D.x0+3.5,D.y0+4,-.6,1.8);const G=t.atu;E("site",de("#7d7a70"),G.x0,G.y0,G.x1,G.y1,i,-1),[G.x0+2,G.x0+6,G.x0+10].forEach(k=>ke("site",de("#3d4a3a"),k,(G.y0+G.y1)/2,1,-1,-.8,16));const H=t.power;E("site",n.stone,H.x0,H.y0,H.x1,H.y1,i,-.6),E("site",de("#e6e3dc"),H.x0+.5,H.y0+.5,H.x0+6,H.y0+3.5,-.6,3.6),E("site",de("#2d2d2d"),H.x0+.5,H.y1-3.2,H.x0+3.5,H.y1-.8,-.6,4.2),E("site",de("#2d2d2d"),H.x0+4.2,H.y1-3.2,H.x0+7.2,H.y1-.8,-.6,4.2),t.condensers.forEach(([k,q])=>{E("site",de("#cfccc4"),k,q,k+3,q+3,-.6,3.2),ke("site",de("#3a3a3a"),k+1.5,q+1.5,1.1,3.2,3.3,18)});for(let k=0;k<t.service.length-1;k++){const[q,ue]=t.service[k],[fe,$e]=t.service[k+1];E("site",n.gravel,Math.min(q,fe)-5,Math.min(ue,$e)-5,Math.max(q,fe)+5,Math.max(ue,$e)+5,i,-1.2)}const J=t.drainfield;E("site",de("#9fb07a"),J.x0,J.y0,J.x1,J.y1,i,-1.25);for(let k=J.y0+3;k<J.y1;k+=5)E("site",de("#8a9c66"),J.x0+2,k,J.x1-2,k+.6,i,-1.2);const U=t.well;ke("site",de("#7d7a70"),U.cx,U.cy,1.6,i,1.2,16),ke("site",n.c.charred,U.cx,U.cy,.5,1.2,3.2,10)}{for(let x=28.6;x<=45.4;x+=.42)E("site",n.c.cedar,17.1,x,17.35,x+.16,-.2,8.2);E("site",n.c.cedar,17,28.4,17.45,45.6,8.2,8.5),E("site",n.c.cedar,17,28.4,17.45,45.6,-.3,0)}const O=t.bathgarden;E("site",n.c.charred,O.x1-.5,O.y0,O.x1,O.y1,i,7),E("site",n.c.charred,O.x0,O.y1-.5,O.x1,O.y1,i,7),E("site",n.gravel,O.x0,O.y0,O.x1-.5,O.y1-.5,i,-1.1),E("site",n.flag,72,0,78,14,i,-.9),E("site",n.flag,66,-0,72,1,i,-.95)}function E1(n){const e=new cn(.35,.5,1,6);e.translate(0,.5,0);const t=new Ts(1,1,7);t.translate(0,.5,0);const i=new Mi(1,1),s=[];let r=11;const a=()=>(r=r*16807%2147483647,r/2147483647);for(let f=0;f<400&&s.length<120;f++){const p=-170+a()*420,_=-140+a()*340;p>-70&&p<135&&_>-50&&_<125||_>90&&p>-40&&p<140||_<-45&&p>-80&&p<130||p>-100&&p<-40&&_>-10&&_<30||s.push([p,_,a()])}const o=new Si(e,new Dt({color:14605008,roughness:.9}),s.length),l=new Si(t,new Dt({color:4085046,roughness:.9}),s.length),h=new Si(i,new Dt({color:12038218,roughness:.9}),s.length),c=new ot;let u=0,d=0;s.forEach(([f,p,_],g)=>{const m=p>60?_<.6:_<.35,S=m?26+_*30:22+_*16;c.compose(qt(f,p,-1.7),new Tn,new F(1,m?S*.25:S*.6,1)),o.setMatrixAt(g,c),m?(c.compose(qt(f,p,S*.18),new Tn,new F(5+_*3,S*.85,5+_*3)),l.setMatrixAt(u++,c)):(c.compose(qt(f,p,S*.7),new Tn,new F(4+_*2,S*.32,4+_*2)),h.setMatrixAt(d++,c))}),l.count=u,h.count=d,[o,l,h].forEach(f=>{f.castShadow=!0,f.receiveShadow=!0,n.site.add(f)})}function ia(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function zu(n,e){const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,a=s*s*(3-2*s),o=r*r*(3-2*r),l=ia(t,i),h=ia(t+1,i),c=ia(t,i+1),u=ia(t+1,i+1);return l+(h-l)*a+(c-l)*o+(l-h-c+u)*a*o}function T1(n,e){let t=0,i=.5,s=1;for(let r=0;r<6;r++){const a=1-Math.abs(zu(n*s,e*s)*2-1);t+=a*a*i,i*=.5,s*=2.05}return t}function A1(n){const r=[],a=[],o=[],l=new Ye(9278560),h=new Ye(3952439),c=new Ye(8748660),u=new Ye(16119540),d=new Ye(11845835),f=(m,S,A)=>{const b=Math.min(1,Math.max(0,(A-m)/(S-m)));return b*b*(3-2*b)};for(let m=0;m<=90;m++){const S=m/90,A=700+19300*Math.pow(S,1.9);for(let b=0;b<=320;b++){const T=b/320*Math.PI*2,R=Math.sin(T)*A,C=-Math.cos(T)*A,v=.55+.75*Math.pow(Math.max(0,Math.cos(T)),2),w=zu(R/600+9,C/600+2)*260*f(900,2600,A)*(1-f(5e3,9e3,A)*.5),N=Math.pow(T1(R/5200+3.1,C/5200+7.7),1.6)*A*.5*v*f(2400,6e3,A);let O=w+N;A>15e3&&(O*=1-f(15e3,2e4,A)*.6),O+=-1.75,r.push(R,O,C);const x=l.clone();x.lerp(h,f(40,260,O)),O>900&&x.lerp(c,f(900,1500,O)),O>1700&&x.lerp(u,f(1700,2100,O)),x.lerp(d,Math.min(.42,f(3e3,2e4,A)*.5)),a.push(x.r,x.g,x.b)}}for(let m=0;m<90;m++)for(let S=0;S<320;S++){const A=m*321+S,b=A+320+1;o.push(A,A+1,b,b,A+1,b+1)}const p=new Lt;p.setAttribute("position",new ht(r,3)),p.setAttribute("color",new ht(a,3)),p.setIndex(o),p.computeVertexNormals();const _=new Dt({vertexColors:!0,roughness:1});_.fog=!1;const g=new Nt(p,_);n.mtn.add(g)}const Na=[{id:"U1",name:"Rainwater Tanks",wing:"Outdoor",x0:100.5,y0:12.5,x1:122.5,y1:23.5,notes:"Two 10-ft-diameter tanks (about 5,000 gal each) fed by gutters and leaders from the big standing-seam roofs, with first-flush diverters. Backup from the well (or municipal water where available).",floor:"Concrete pads",fin:"Dark green steel tanks inside the charred-timber screen"},{id:"U2",name:"Water Treatment",wing:"Outdoor",x0:124,y0:13,x1:135,y1:23,notes:"Roofed lean-to: pressure pump with pressure tank, sediment filter, carbon filter, UV sterilizer and a water softener, then on to the house.",floor:"Concrete pad",fin:"Charred timber; standing-seam roof"},{id:"U3",name:"Septic + Aerobic Treatment",wing:"Outdoor",x0:103,y0:-3,x1:115,y1:3,notes:"Buried septic tank plus an aerobic treatment unit (ATU), lids at grade for pumping from the service lane. Feeds the drain field down-slope to the south-east, well away from the vegetable garden and the well.",floor:"Gravel over buried tanks",fin:"Traffic-rated lids"},{id:"U4",name:"Generator + Battery Pad",wing:"Outdoor",x0:125,y0:-4,x1:135,y1:5,notes:"Standby generator plus two home batteries tied to roof solar, on a concrete pad with clearance from the screen.",floor:"Concrete pad",fin:"Concrete"},{id:"U5",name:"HVAC Condensers",wing:"Outdoor",x0:118.5,y0:.5,x1:122.5,y1:12.5,notes:"Three heat-pump condensers (house zones plus the studio's decoupled system) on pads, line sets running to the sleeping and wellness wings.",floor:"Concrete pads",fin:"Screened by charred timber"},{id:"U",name:"Utility Yard",wing:"Outdoor",x0:100,y0:-6,x1:136,y1:24,area:0,notes:"36 x 30 ft screened service yard beside the Pool Equipment room (211, which keeps the pool pump, filter and salt cell) and the wellness wing. 7-ft charred-timber screen matching the house, with a 12-ft service gate on the gravel service lane from the drive for pump trucks and deliveries.",floor:"Compacted gravel + concrete pads",fin:"Charred-timber screen; gravel; concrete pads"},{id:"U6",name:"Drain Field",wing:"Outdoor",x0:30,y0:-74,x1:90,y1:-52,notes:"On-site wastewater drain field in the south meadow below the service lane, more than 100 ft from the vegetable garden and the well, kept clear of the service lane. Size to the perc test.",floor:"Meadow grass",fin:"Meadow over trenches"},{id:"U7",name:"Well",wing:"Outdoor",x0:137,y0:92,x1:143,y1:98,notes:"Well head up-slope in the north-east, far from the drain field. Backup supply to the rainwater tanks.",floor:"Gravel",fin:"Stone pad; charred timber cover"},{id:"C",name:"Courtyard",wing:"Outdoor",x0:36,y0:27,x1:72,y1:55,notes:"The heart of the house, 36 x 28 ft. A western red cedar engawa runs along the north, east and west glass under the eaves, with a bluestone step lit by recessed step lights and string lights under the eave. Slate paving with a bluestone path, a katsura shade tree with a curved teak bench, Japanese maples, a lawn, raked gravel, a planted water court with a stone basin, stone lanterns and mushroom path lights in the planting, and two teak loungers on the east engawa. Courtyard table: open item.",floor:"Cedar engawa; slate + bluestone paving",fin:"Western red cedar engawa; bluestone step; slate paving; bluestone path; teak bench and loungers; stone lanterns; mushroom path lights; string lights"},{id:"P",name:"Saltwater Pool",wing:"Outdoor",x0:54,y0:-22,x1:88,y1:-10,notes:"Small 34 x 12 ft saltwater pool lined in green stone tile, on the sunny south side outside the wellness wing. A salt chlorine generator in the Pool Equipment room (cell replaced about every 3-5 years), marine-grade 316 stainless fittings, a sealed basalt deck with flamed-granite coping, teak loungers, and a bale pavilion at the east end.",floor:"Basalt deck, flamed-granite coping",fin:"Green stone pool tile; basalt deck; flamed-granite coping; 316 stainless fittings; teak and linen loungers"},{id:"B",name:"Bale Pavilion",wing:"Outdoor",x0:90,y0:-27,x1:97,y1:-19,notes:"Balinese-style bale by the pool: a raised honey-oak platform with linen cushions under a low standing-seam roof on fir posts.",floor:"Honey-oak platform",fin:"Honey oak; fir posts; standing-seam roof; linen cushions"},{id:"L",name:"Turf Sprint Lane",wing:"Outdoor",x0:-32,y0:-16,x1:43,y1:-8,notes:"20 yards (60 ft) of turf marked every 5 yards, plus a 15-ft run-out to a charred-timber end wall. An outdoor pull-up station stands at the gym end.",floor:"Synthetic turf",fin:"Turf; charred-timber end wall; black steel pull-up station"},{id:"V",name:"Vegetable Garden",wing:"Outdoor",x0:-30,y0:64,x1:-6,y1:86,notes:"Loved: four 4 x 18 ft cedar raised beds inside a slatted deer fence, a few steps from the mudroom and pantry, with a small orchard of fruit trees beside it.",floor:"Gravel",fin:"Cedar beds; gravel paths; fruit trees"},{id:"F",name:"Round Stone Fire Pit",wing:"Outdoor",x0:51,y0:92,x1:65,y1:106,notes:"Round stone fire pit with a curved stone seat wall on a flagstone circle, facing the mountains off the covered veranda.",floor:"Flagstone",fin:"Natural stone ring and seat walls; flagstone"},{id:"D",name:"Pergola Dining",wing:"Outdoor",x0:19,y0:81,x1:37,y1:95,notes:"Outdoor table for ten under a charred-timber and fir pergola, next to the kitchen and the view.",floor:"Flagstone",fin:"Flagstone; charred timber and fir pergola"},{id:"W",name:"Climbing Pavilion",wing:"Outdoor",x0:-22,y0:0,x1:-4,y1:18,area:0,cov:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. A full 16-ft-wide, 12-ft-high climbing wall from day one sits on the north side facing the sprint lane, over poured-rubber soft-fall and thick crash pads. The roof was raised to 17 ft so the beams clear the top of the wall by about 3 ft and the roof by about 4 ft. Sits in the active zone with the exercise room, sprint lane and a 4-bike rack. Covered outdoor area, not conditioned.",floor:"Poured-rubber soft-fall + crash pads",equip:["Climbing wall 16' × 12'","Two bouldering volumes","Crash pads","4-bike rack"],fin:"Fir frame; standing-seam roof at 17 ft; charred fascia; poured rubber"},{id:"S",name:"Outdoor Shower",wing:"Outdoor",x0:72.5,y0:4,x1:77.5,y1:10,notes:"Loved: stone shower by the pool behind solid charred-timber walls (no slat enclosure), next to the changing room.",floor:"Stone",fin:"Charred timber walls; stone floor; brass rain head"},{id:"Q",name:"Courtyard Shower",wing:"Outdoor",x0:66.5,y0:27.5,x1:71.5,y1:31.5,notes:"A second open-air shower in the courtyard corner by the wellness wing, with a charred-timber privacy wall and a brass rain head.",floor:"Black stone",fin:"Black stone; charred timber; brass"},{id:"K",name:"Bike Racks",wing:"Outdoor",x0:3,y0:62,x1:7.5,y1:72,notes:"Six-bike rack under the mudroom eave, with gear storage just inside.",floor:"Stone",fin:"Stone; black steel"},{id:"R",name:"Carport",wing:"Outdoor",x0:-44,y0:30,x1:-20,y1:54,notes:"Modern black carport for two cars: slim black steel posts and a low standing-seam roof, off the gravel drive. A covered walkway leads past the front garden to the door.",floor:"Gravel",fin:"Black steel; standing-seam roof; gravel drive"},{id:"E",name:"Covered Walkway + Front Garden",wing:"Outdoor",x0:-20,y0:48,x1:13,y1:54,notes:"Black-steel covered walkway on flagstone from the carport to the front door, past front-garden beds of grasses, low shrubs and a multi-stem tree.",floor:"Flagstone",fin:"Flagstone; black steel; standing-seam roof; planted beds"}];function R1(n){const e=h1();return va=e,f1(e),g1(e),_1(e,n),M1(e),w1(e,n),Bt.build(n),E1(n),A1(n),{M:e,blocking:ba,roofUnder:Qi}}const Te=n=>document.getElementById(n),rr=.09290304,kh=.3048,Gi=n=>{const e=Math.floor(n+1e-6),t=Math.round((n-e)*12);return t?`${e}' ${t}"`:`${e}'`},Yn=()=>window.innerWidth<700,Fn=Te("viewport"),bt=new U_({antialias:!0,powerPreference:"high-performance"});bt.setPixelRatio(Math.min(window.devicePixelRatio,2));bt.outputColorSpace=ln;bt.toneMapping=Al;bt.toneMappingExposure=1.05;bt.shadowMap.enabled=!0;bt.shadowMap.type=er;bt.localClippingEnabled=!0;Fn.appendChild(bt.domElement);const zs=new Z_;zs.domElement.style.position="absolute";zs.domElement.style.inset="0";zs.domElement.style.pointerEvents="none";Fn.appendChild(zs.domElement);const Gt=new Mf,fn={};for(const n of["walls","glass","roof","floors","furn","detail","site","ground","mtn","pick","labels","fx"])fn[n]=new Hi,fn[n].name=n,Gt.add(fn[n]);fn.pick.visible=!0;const da={top:{value:new Ye(9417681)},mid:{value:new Ye(14673638)},bot:{value:new Ye(15328470)}},Hu=new Nt(new Ei(3e4,32,16),new On({side:hn,depthWrite:!1,fog:!1,uniforms:da,vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vp; void main(){ float h = vp.y; vec3 c = h>0.0 ? mix(mid, top, pow(clamp(h*2.2,0.0,1.0),0.7)) : mix(mid, bot, clamp(-h*8.0,0.0,1.0)); gl_FragColor = vec4(c,1.0);
#include <colorspace_fragment>
}`}));Hu.renderOrder=-10;Gt.add(Hu);Gt.fog=new zl(14015968,1600,9e3);const Ml=new Rp(15397631,9140830,1.15);Gt.add(Ml);const Gu=new Ip(16774374,.35);Gt.add(Gu);const En=new Dp(16773596,2.6);En.castShadow=!0;En.shadow.mapSize.set(Yn()?1024:2048,Yn()?1024:2048);Object.assign(En.shadow.camera,{left:-150,right:150,top:150,bottom:-150,near:10,far:900});En.shadow.bias=-4e-4;En.shadow.normalBias=.6;Gt.add(En);Gt.add(En.target);const Vu=[];J_(Yn()?.5:1);const{M:wl,blocking:C1,roofUnder:Ua}=R1(fn),Wu=new Set;Gt.traverse(n=>{n.material&&n.material.name==="lamp"&&Wu.add(n.material)});let El=null;fn.site.traverse(n=>{n.material&&n.material.name==="fire"&&(El=n.material)});for(const n of Rt.rooms){if(n.area<90||!n.cond)continue;const e=new Pp(16763274,0,34,1.6),t=qt((n.x0+n.x1)/2,(n.y0+n.y1)/2,Math.min(9,Ua((n.x0+n.x1)/2,(n.y0+n.y1)/2)-1.5));e.position.copy(t),fn.fx.add(e),Vu.push(e)}const ar=new Pi({transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});let ki=null;fetch("./plan_overlay.json").then(n=>n.json()).then(n=>{new Ap().load("./plan_overlay.png",e=>{e.colorSpace=ln,e.anisotropy=8,ar.map=e,ar.needsUpdate=!0;const t=n.x1-n.x0,i=n.y1-n.y0,s=new Li(t,i);s.rotateX(-Math.PI/2),ki=new Nt(s,ar),ki.position.copy(qt((n.x0+n.x1)/2,(n.y0+n.y1)/2,.06)),ki.renderOrder=3,ki.visible=ze.overlay,Gt.add(ki)})});const Xi=new Nt(new Li(1,1).rotateX(-Math.PI/2),wl.highlight);Xi.visible=!1;Xi.renderOrder=4;Gt.add(Xi);const As=new Gl(new fu(new An(1,1,1)),new br({color:5069118}));As.visible=!1;Gt.add(As);const At=new xn(42,1,.5,6e4),Mn=new La(-1,1,1,-1,.5,3e3);let li=At;const tn=new Uu(At,bt.domElement);tn.enableDamping=!0;tn.dampingFactor=.08;tn.maxPolarAngle=1.5;tn.minDistance=4;tn.maxDistance=1400;tn.screenSpacePanning=!0;tn.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN};const jt=new Uu(Mn,bt.domElement);jt.enableRotate=!1;jt.screenSpacePanning=!0;jt.enableDamping=!0;jt.minZoom=.4;jt.maxZoom=8;jt.mouseButtons={LEFT:ri.PAN,MIDDLE:ri.DOLLY,RIGHT:ri.PAN};jt.touches={ONE:Wn.PAN,TWO:Wn.DOLLY_PAN};jt.enabled=!1;const Rs={aerial:{name:"Aerial",cam:[0,-128,76],tgt:[50,56,28],fov:50,roof:!0,title:"The whole house.",kicker:"A DRAWING-BASED SPATIAL STUDY"},courtyard:{name:"Courtyard",cam:[39,29.5,6.2],tgt:[67,43,6],roof:!0,title:"The courtyard.",kicker:"VIEW · CEDAR ENGAWA, LOOKING NORTH-EAST",fov:62},living:{name:"Living",cam:[48,20,54],tgt:[58,67,0],roof:!1,cut:8,title:"Living pavilion.",kicker:"ROOMS 101-103 · ROOF HIDDEN"},office:{name:"Studio",cam:[48,-38,58],tgt:[16,11,0],roof:!1,cut:8,title:"Isolated studio / office.",kicker:"ROOM 407 · ROOM-WITHIN-A-ROOM · TARGET STC 60+"},wellness:{name:"Wellness",cam:[70,-44,58],tgt:[52,8,0],roof:!1,cut:8,title:"Wellness + gym wing.",kicker:"ROOMS 301-306 · ON THE POOL · ROOF HIDDEN"},bath:{name:"Bath",cam:[93,66,22],tgt:[93.8,78,0],roof:!1,cut:8,title:"Master bath.",kicker:"ROOM 202 · HINOKI SOAKING TUB BY THE WINDOW, SKYLIGHT",fov:55},utility:{name:"Utility",cam:[126,-46,62],tgt:[118,9,0],roof:!1,title:"Utility yard.",kicker:"OUTDOORS · SCREENED SERVICE YARD · WATER, WASTEWATER, POWER, HVAC",fov:50},climb:{name:"Climbing",cam:[-4,-34,9],tgt:[-13,14,8],roof:!0,title:"Climbing pavilion.",kicker:"OUTDOORS · COVERED OPEN-AIR · NOT CONDITIONED",fov:50},kitchen:{name:"Kitchen",cam:[30,43,27],tgt:[39,70,0],roof:!1,cut:8,title:"Kitchen + living.",kicker:"ROOMS 101-103 · MARBLE ISLAND, ZELLIGE, CONVERSATION PIT",fov:50},gym:{name:"Gym",cam:[52,-12,24],tgt:[38,11,2],roof:!1,cut:8,title:"Exercise room.",kicker:"ROOM 302 · CALM STUDIO, RIG, CADILLAC, ROWER",fov:50},kids:{name:"Kids",cam:[104,20,36],tgt:[90,38,0],roof:!1,cut:8,title:"Kids' rooms.",kicker:"ROOMS 207-209 · WINDOW SEATS, DESKS BY THE WINDOW, CLIMBING WALLS",fov:52},master:{name:"Master",cam:[124,33,64],tgt:[86,71,0],roof:!1,cut:8,title:"Master suite.",kicker:"ROOMS 201-203 · ROOF HIDDEN"}},ze={mode:"orbit",light:"day",roof:!0,cut:!1,cutH:4.5,furn:!0,labels:!1,overlay:!1,ovOp:.85,site:!0,mtn:!0,shadows:!0,sel:null,view:"aerial"},Oa=[],Xu=new Set(["402","405","211","206","403","306","205","203","204","301","406","104","105","210","208"]),qu=new Set(["402","405","211","212","213"]),P1=new Set(["W","101","103","201","207","209","302","303","407","404","401","C","P","L"]),L1=new Set(["W","103","201","209","302","407","P","L"]);function Yu(n,e){if(qu.has(n.id))return;const t=document.createElement("div");t.className="rlabel"+(["204","301","406"].includes(n.id)?" gal":"")+(e?" out":"")+(Xu.has(n.id)||e?" minor":"")+(P1.has(n.id)?" key":"")+(L1.has(n.id)?" key2":""),t.innerHTML=e?`${n.name}`:`<span class="num">${n.id}</span>${n.name.replace(" + Conversation Pit","").replace(" Gallery","")}`,t.addEventListener("click",s=>{s.stopPropagation(),Ns(n.id,!0)});const i=new K_(t);i.userData={item:n,outdoor:e},fn.labels.add(i),Oa.push(i)}Rt.rooms.forEach(n=>Yu(n,!1));Na.forEach(n=>Yu(n,!0));function Zl(){for(const n of Oa){const e=n.userData.item;let t=(e.x0+e.x1)/2,i=(e.y0+e.y1)/2;e.id==="103"&&(t=61,i=58),e.id==="K"&&(t=2,i=70),e.id==="105"&&(i=58),e.id==="404"&&(i=31),e.id==="403"&&(i=44),e.id==="C"&&(i=44,t=47),e.id==="204"&&(i=42),e.id==="406"&&(i=34),e.id==="301"&&(t=54);let s=1.5;n.userData.outdoor||(s=ze.mode==="plan"?1:ze.roof&&ze.mode!=="walk"?Ua(t,i)+2.2:4),n.userData.outdoor&&(s=e.id==="C"?2.5:3),n.position.copy(qt(t,i,s))}}const $u=["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"];function D1(){const n=Te("room-list"),e=Te("chips"),t=(s,r,a,o,l)=>{const h=document.createElement("button");h.dataset.id=s,h.innerHTML=l?`<span class="n">${r}</span>${a}`:`<span class="n">${r}</span><span>${a}</span>`,h.onclick=()=>s==="all"?Ku():Ns(s,!0),o.appendChild(h)};t("all","⌂","Whole house",n),t("all","⌂","Whole house",e,!0);for(const s of $u){const r=document.createElement("div");r.className="grp",r.textContent=s.toUpperCase(),n.appendChild(r),Rt.rooms.filter(a=>a.wing===s&&!qu.has(a.id)).forEach(a=>{t(a.id,a.id,a.name,n),Xu.has(a.id)||t(a.id,a.id,a.name,e,!0)})}const i=document.createElement("div");i.className="grp",i.textContent="OUTDOORS",n.appendChild(i),Na.forEach(s=>{t(s.id,"·",s.name,n),["C","W","P","L","V","U"].includes(s.id)&&t(s.id,"·",s.name,e,!0)}),document.querySelectorAll('[data-id="all"]').forEach(s=>s.classList.add("on"))}D1();Te("hdr-total").textContent=`${Rt.total.toLocaleString()} SF conditioned (${Math.round(Rt.total*rr)} m²)`;const Ds=Te("views");Object.entries(Rs).forEach(([n,e])=>{const t=document.createElement("button");t.textContent=e.name,t.dataset.view=n,t.onclick=()=>Hs(n),Ds.appendChild(t)});let on=null;function Jl(n,e,t,i=1100,s="inout"){const r=At.position.clone(),a=tn.target.clone(),o=At.fov,l=performance.now();on={p0:r,t0:a,f0:o,p1:n,t1v:e,f1:t??42,start:l,dur:i,ease:s}}function Is(n,e){Te("cap-kicker").textContent=n,Te("cap-title").textContent=e}function Hs(n,e){const t=Rs[n];ze.view=n,typeof ji<"u"&&(ji=null,Te("btn-back").hidden=!0),ze.mode!=="orbit"&&Ti("orbit"),ui(t.roof),ci(!!t.cut,t.cut||4.5),Ds.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l.dataset.view===n));const i=Yn()&&n==="aerial",s=i?[49,-178,104]:t.cam,r=i?[49,46,22]:t.tgt,a=qt(...s.slice(0,2),s[2]),o=qt(...r.slice(0,2),r[2]);if(Yn()&&n!=="courtyard"&&n!=="aerial"){const l=a.clone().sub(o).multiplyScalar(n==="aerial"?1.2:1.45);a.copy(o).add(l)}e?(At.position.copy(a),tn.target.copy(o),At.fov=t.fov??42,At.updateProjectionMatrix(),tn.update(),on=null):Jl(a,o,t.fov),Is(t.kicker,t.title)}function Ku(){Us(),Hs("aerial"),document.querySelectorAll("[data-id]").forEach(n=>n.classList.toggle("on",n.dataset.id==="all"))}function _r(n){return Rt.rooms.find(e=>e.id===n)||Na.find(e=>e.id===n)}function Ns(n,e){const t=_r(n);if(!t)return;ze.sel=n,document.querySelectorAll("[data-id]").forEach(u=>u.classList.toggle("on",u.dataset.id===n)),document.querySelectorAll(".chips button.on, .room-list button.on").forEach(u=>{var d;return(d=u.scrollIntoView)==null?void 0:d.call(u,{block:"nearest",inline:"center",behavior:"smooth"})}),Oa.forEach(u=>u.element.classList.toggle("on",u.userData.item.id===n));const i=t.x1-t.x0,s=t.y1-t.y0,r=(t.x0+t.x1)/2,a=(t.y0+t.y1)/2,o=!t.area,l=t.cov??t.area??Math.round(i*s),h=o?.3:Ua(r,a);Xi.scale.set(i,1,s),Xi.position.copy(qt(r,a,o?.2:.08)),Xi.visible=!0,As.scale.set(i,Math.max(.2,h),s),As.position.copy(qt(r,a,Math.max(.2,h)/2)),As.visible=!0,Te("info").hidden=!1,Te("info-kicker").textContent=o?"OUTDOORS · SITE":`ROOM ${t.id} · ${t.wing.toUpperCase()}`,Te("info-title").textContent=t.name,Te("info-notes").textContent=t.notes,Te("info-size").textContent=`${Gi(i)} × ${Gi(s)}  (${(i*kh).toFixed(1)} × ${(s*kh).toFixed(1)} m)`,Te("info-area").textContent=`${l.toLocaleString()} SF · ${(l*rr).toFixed(1)} m²${!o&&!t.cond?" (unconditioned)":""}${t.cov?" covered (not conditioned)":""}`,Te("info-ceil").parentElement.hidden=o,Te("info-ceil").textContent=o?"":`${Gi(t.h)} (roof deck ${Gi(Math.round(h*2)/2)})`,Te("info-floor").textContent=o?t.floor:t.floorName||t.floor,Te("info-fin").textContent=t.fin||"",Te("info-fin").parentElement.hidden=!t.fin;const c=t.equip||[...new Set(Rt.furn.filter(u=>u.room===n&&u.shape!=="pit").map(u=>u.label))];if(Te("info-equip").innerHTML=c.map(u=>`<span>${u}</span>`).join(""),Te("info-walk").parentElement.hidden=o&&n!=="C",Is(o?"OUTDOORS":`ROOM ${t.id} / SPATIAL STUDY`,t.name),e&&ze.mode==="orbit"){ji||(ji={p:At.position.clone(),t:tn.target.clone(),fov:At.fov,roof:ze.roof,cut:ze.cut,cutH:ze.cutH,view:ze.view}),o||(ui(!1),ci(!0,Math.min(8,Math.max(6,(t.h||10)-2))));const u=o?4:Math.min(h,10),d=Math.max(11,.5*Math.hypot(i,s,u)+3),f=42,p=ru.degToRad(f)/2,_=Math.atan(Math.tan(p)*At.aspect),g=d/Math.sin(Math.min(p,_))*(Yn()?1.5:1.3),m=qt(r,a,u*.25),S=new F(.55,1.05,.8).normalize();Jl(m.clone().add(S.multiplyScalar(g)),m,f,600,"out"),Ds.querySelectorAll("button").forEach(A=>A.classList.remove("on")),Te("btn-back").hidden=!1}e&&ze.mode==="plan"&&(jt.target.copy(qt(r,a,0)),Mn.position.set(jt.target.x,400,jt.target.z+.01),Mn.zoom=Math.min(4,70/Math.max(i,s,14)),Mn.updateProjectionMatrix()),e&&ze.mode==="walk"&&Ma(r,a)}let ji=null;function Zu(){Os(),Us(),Te("btn-back").hidden=!0;const n=ji;if(ji=null,!n){Hs("aerial");return}ui(n.roof),ci(n.cut,n.cutH),Jl(n.p,n.t,n.fov,600,"out"),n.view&&Rs[n.view]&&(Ds.querySelectorAll("button").forEach(e=>e.classList.toggle("on",e.dataset.view===n.view)),Is(Rs[n.view].kicker,Rs[n.view].title))}function Us(){ze.sel=null,Te("info").hidden=!0,Xi.visible=!1,As.visible=!1,Oa.forEach(n=>n.element.classList.remove("on"))}Te("info-close").onclick=Us;Te("info-walk").onclick=()=>{const n=_r(ze.sel);n&&(Ti("walk"),Ma((n.x0+n.x1)/2,(n.y0+n.y1)/2))};function ui(n){ze.roof=n,fn.roof.visible=n,Fn.classList.toggle("roof-on",n),Te("ly-roof").checked=n;const e=Te("btn-roof");e.setAttribute("aria-pressed",n),e.querySelector("span").textContent=n?"Roof On":"Roof Off",Zl()}function ci(n,e){ze.cut=n,e!=null&&(ze.cutH=e),Fu.constant=n?ze.cutH:1e5,Te("ly-cut").checked=n,Te("cut-val").textContent=Gi(ze.cutH),Te("cut-h").value=ze.cutH}function or(n){ze.overlay=n,ki&&(ki.visible=n),Te("ly-overlay").checked=n}Te("btn-roof").onclick=()=>ui(!ze.roof);Te("ly-roof").onchange=n=>ui(n.target.checked);Te("ly-cut").onchange=n=>ci(n.target.checked);Te("cut-h").oninput=n=>ci(!0,parseFloat(n.target.value));Te("ly-furn").onchange=n=>{ze.furn=n.target.checked,fn.furn.visible=ze.furn,fn.detail.visible=ze.furn};Fn.classList.add("labels-off");Te("ly-labels").onchange=n=>{ze.labels=n.target.checked,Fn.classList.toggle("labels-off",!ze.labels)};Te("ly-overlay").onchange=n=>or(n.target.checked);Te("ov-op").oninput=n=>{ar.opacity=parseFloat(n.target.value),Te("ov-val").textContent=Math.round(ar.opacity*100)+"%"};Te("ly-site").onchange=n=>{fn.site.visible=n.target.checked};Te("ly-mtn").onchange=n=>{fn.mtn.visible=n.target.checked};Te("ly-shadow").onchange=n=>{En.castShadow=n.target.checked};Te("btn-layers").onclick=()=>{Te("layers").hidden=!Te("layers").hidden};Te("layers-close").onclick=()=>{Te("layers").hidden=!0};function Fa(n){var i,s;document.getElementById("app").classList.toggle("evening",n!=="day"),ze.light=n,document.querySelectorAll("#light-seg button").forEach(r=>r.classList.toggle("on",r.dataset.light===n));const e=n==="day";da.top.value.set(e?8826064:2831696),da.mid.value.set(e?14936294:14260844),da.bot.value.set(e?15328470:7035472),Gt.fog.color.set(e?14015968:9272184),Ml.intensity=e?1.15:.35,Ml.color.set(e?15397631:9213632),Gu.intensity=e?.35:.12,En.intensity=e?2.6:.9,En.color.set(e?16773596:16751194);const t=e?new F(-.55,.78,.62):new F(.85,.16,.35);En.position.copy(t.normalize().multiplyScalar(400)),En.target.position.set(0,0,0),Vu.forEach(r=>r.intensity=e?0:260),Wu.forEach(r=>r.emissiveIntensity=e?r.color.r>.97?.5:.2:1.8),(i=wl.glass.emissive)==null||i.set(e?0:3811860),(s=wl.c.glass.emissive)==null||s.set(e?0:5913624),El&&(El.emissiveIntensity=e?1.2:4),bt.toneMappingExposure=e?1.05:1.25}document.querySelectorAll("#light-seg button").forEach(n=>n.onclick=()=>Fa(n.dataset.light));const Qe={x:16,y:54,yaw:-Math.PI/2,pitch:0,keys:{}};function Ti(n){const e=ze.mode;if(ze.mode=n,Fn.classList.toggle("plan-mode",n==="plan"),Fn.classList.toggle("walk-mode",n==="walk"),document.querySelectorAll("#mode-seg button").forEach(t=>t.classList.toggle("on",t.dataset.mode===n)),tn.enabled=n==="orbit",jt.enabled=n==="plan",Te("walk-pad").hidden=n!=="walk",Ds.hidden=n==="walk",n==="plan")li=Mn,ui(!1),ci(!0,4.5),or(!0),jt.target.copy(qt(Yn()?49:40,Yn()?56:47,0)),Mn.position.set(jt.target.x,400,jt.target.z+.01),Mn.zoom=Yn()?.56:.92,ka(),Te("hint").textContent="Drag to pan · Scroll or pinch to zoom · Tap a room",Is(`PLAN VIEW · DRAWING OVERLAY ON 3D CUT AT 4' 6"`,"Floor plan."),Ds.querySelectorAll("button").forEach(t=>t.classList.remove("on"));else if(n==="walk"){if(li=At,ci(!1),or(!1),ui(!0),At.fov=68,At.updateProjectionMatrix(),e!=="walk"){const t=ze.sel&&_r(ze.sel);t?Ma((t.x0+t.x1)/2,(t.y0+t.y1)/2):Ma(16,54,-Math.PI/2)}Te("hint").textContent="Drag to look · W A S D or arrows to move · Esc to exit",Is(`WALK THROUGH · EYE HEIGHT 5' 4"`,ze.sel?_r(ze.sel).name:"Entry genkan.")}else li=At,ci(!1),or(!1),At.fov=42,At.updateProjectionMatrix(),Te("hint").textContent="Drag to orbit · Scroll or pinch to zoom · Right-drag or two fingers to pan · Tap a room",e!=="orbit"&&Hs("aerial",!0);Zl()}document.querySelectorAll("#mode-seg button").forEach(n=>n.onclick=()=>Ti(n.dataset.mode));function Ma(n,e,t){if(Qe.x=n,Qe.y=e,Qe.pitch=0,t!=null)Qe.yaw=t;else{const i=50-n,s=44-e;Qe.yaw=Math.atan2(-i,s)+Math.PI,Qe.yaw=Math.atan2(i,s)}}function Po(n,e){if(n<-150||n>220||e<-120||e>200)return!0;for(const{s:t,a:i,b:s}of C1){const[r,a,o,l]=t.o==="h"?[i,t.c,s,t.c]:[t.c,i,t.c,s],h=o-r,c=l-a,u=Math.max(0,Math.min(1,((n-r)*h+(e-a)*c)/(h*h+c*c))),d=n-(r+h*u),f=e-(a+c*u);if(d*d+f*f<.8*.8)return!0}return!1}function I1(n){const e=Qe.keys;let t=0,i=0;if((e.KeyW||e.ArrowUp||e.f)&&(t+=1),(e.KeyS||e.ArrowDown||e.b)&&(t-=1),(e.KeyA||e.ArrowLeft||e.l)&&(i-=1),(e.KeyD||e.ArrowRight||e.r)&&(i+=1),t||i){const l=9*n,h=Math.sin(Qe.yaw),c=Math.cos(Qe.yaw),u=(h*t+c*i)*l,d=(c*t-h*i)*l;Po(Qe.x+u,Qe.y+d)?Po(Qe.x+u,Qe.y)?Po(Qe.x,Qe.y+d)||(Qe.y+=d):Qe.x+=u:(Qe.x+=u,Qe.y+=d)}const s=Rt.rooms.find(l=>Qe.x>=l.x0&&Qe.x<=l.x1&&Qe.y>=l.y0&&Qe.y<=l.y1),a=(s?s.id==="103"&&Qe.x>49&&Qe.x<65&&Qe.y>66&&Qe.y<78?-1.5:0:-1)+5.33;At.position.copy(qt(Qe.x,Qe.y,a));const o=new F(Math.sin(Qe.yaw)*Math.cos(Qe.pitch),Math.sin(Qe.pitch),-Math.cos(Qe.yaw)*Math.cos(Qe.pitch));At.lookAt(At.position.clone().add(o)),s&&s.id!==Qe.room&&(Qe.room=s.id,Is(`WALK THROUGH · EYE HEIGHT 5' 4"`,s.name))}window.addEventListener("keydown",n=>{if(ze.mode==="walk"){if(n.code==="Escape"){Ti("orbit");return}Qe.keys[n.code]=!0,n.code.startsWith("Arrow")&&n.preventDefault()}});window.addEventListener("keyup",n=>{Qe.keys[n.code]=!1});document.querySelectorAll("#walk-pad button").forEach(n=>{const e=n.dataset.k,t=s=>{s.preventDefault(),Qe.keys[e]=!0},i=()=>{Qe.keys[e]=!1};n.addEventListener("pointerdown",t),n.addEventListener("pointerup",i),n.addEventListener("pointerleave",i),n.addEventListener("pointercancel",i)});const Lo=new Eu;let wn=null;bt.domElement.addEventListener("pointerdown",n=>{wn={x:n.clientX,y:n.clientY,t:performance.now(),lx:n.clientX,ly:n.clientY},ze.mode==="walk"&&bt.domElement.setPointerCapture(n.pointerId)});bt.domElement.addEventListener("pointermove",n=>{ze.mode==="walk"&&wn&&(Qe.yaw+=(n.clientX-wn.lx)*.005,Qe.pitch=Math.max(-1.2,Math.min(1.2,Qe.pitch-(n.clientY-wn.ly)*.004)),wn.lx=n.clientX,wn.ly=n.clientY)});bt.domElement.addEventListener("pointerup",n=>{if(!wn)return;const e=Math.hypot(n.clientX-wn.x,n.clientY-wn.y),t=performance.now()-wn.t;if(wn=null,e>6||t>600||ze.mode==="walk")return;const i=bt.domElement.getBoundingClientRect();new re((n.clientX-i.left)/i.width*2-1,-((n.clientY-i.top)/i.height)*2+1);const s=Ju(n.clientX,n.clientY);if(n.pointerType==="touch"||n.pointerType==="pen"){if(!s){Os(),Us();return}if(yr===s){Ns(s,!0);return}Qu(s,null);return}if(s){Ns(s,!0);return}Os(),Us()});function Ju(n,e){const t=bt.domElement.getBoundingClientRect(),i=new re((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1);Lo.setFromCamera(i,li);const s=Lo.intersectObjects(Bu,!1)[0];if(s)return s.object.userData.room;const r=Lo.ray.intersectPlane(new Dn(new F(0,1,0),1),new F);if(r){const a=r.x+pt,o=-r.z+Et,l=Na.find(h=>a>=h.x0&&a<=h.x1&&o>=h.y0&&o<=h.y1);if(l)return l.id}return null}const N1=new Pi({color:7566195,transparent:!0,opacity:.18,depthWrite:!1,side:bn}),qi=new Nt(new Li(1,1).rotateX(-Math.PI/2),N1);qi.visible=!1;qi.renderOrder=5;Gt.add(qi);const ni=new Nt(new An(1,1,1),new Pi({color:13948116,transparent:!0,opacity:.12,depthWrite:!1}));ni.visible=!1;ni.renderOrder=5;Gt.add(ni);const Yi=new Gl(new fu(new An(1,1,1)),new br({color:1513239,transparent:!0,opacity:.85}));Yi.visible=!1;Yi.renderOrder=6;Gt.add(Yi);const gn=document.createElement("div");gn.className="hovertag";gn.hidden=!0;gn.setAttribute("role","status");Fn.appendChild(gn);let yr=null,Bh=null,zh=0,sa=0;function Qu(n,e){const t=_r(n);if(!t)return Os();const i=t.x1-t.x0,s=t.y1-t.y0,r=(t.x0+t.x1)/2,a=(t.y0+t.y1)/2,o=!t.area;if(yr!==n){yr=n;const l=o?.4:Math.min(Ua(r,a),ze.roof?99:30);qi.scale.set(i,1,s),qi.position.copy(qt(r,a,o?.25:.12)),ni.scale.set(i-.1,Math.max(.3,l),s-.1),ni.position.copy(qt(r,a,Math.max(.3,l)/2)),Yi.scale.copy(ni.scale),Yi.position.copy(ni.position),qi.visible=Yi.visible=!0,ni.visible=!o;const h=t.cov??t.area??Math.round(i*s);gn.innerHTML=`<b>${t.name}</b><span>${Gi(i)} × ${Gi(s)} · ${h.toLocaleString()} SF</span>`,gn.hidden=!1,bt.domElement.style.cursor="pointer"}if(e)gn.style.left=e[0]+"px",gn.style.top=e[1]+"px",gn.classList.remove("center");else{const l=qt(r,a,o?1:2).project(li),h=bt.domElement.getBoundingClientRect();gn.style.left=(l.x+1)/2*h.width+"px",gn.style.top=(1-l.y)/2*h.height+"px",gn.classList.add("center")}}function Os(){yr=null,qi.visible=ni.visible=Yi.visible=!1,gn.hidden=!0,bt.domElement.style.cursor=""}bt.domElement.addEventListener("pointermove",n=>{if(n.pointerType!=="mouse"||ze.mode==="walk"||wn&&n.buttons)return;const e=bt.domElement.getBoundingClientRect();Bh=[n.clientX,n.clientY,n.clientX-e.left,n.clientY-e.top],!sa&&(sa=requestAnimationFrame(function t(i){if(i-zh<40){sa=requestAnimationFrame(t);return}sa=0,zh=i;const[s,r,a,o]=Bh,l=Ju(s,r);l?Qu(l,[a,o]):yr&&Os()}))});bt.domElement.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&Os()});window.addEventListener("keydown",n=>{n.code==="Escape"&&ze.mode!=="walk"&&(ji||ze.sel)&&Zu()});Te("btn-back").onclick=Zu;function vr(n){const e=Te("toast");e.textContent=n,e.hidden=!1,clearTimeout(vr._t),vr._t=setTimeout(()=>e.hidden=!0,2200)}Te("t-reset").onclick=()=>{ze.mode==="walk"&&Ti("orbit"),ze.mode==="plan"?Ti("plan"):Ku()};Te("t-save").onclick=()=>{try{bt.render(Gt,li);const n=document.createElement("a");n.href=bt.domElement.toDataURL("image/png"),n.download="weberman-residence.png",n.click(),vr("Saved a view of the model.")}catch{vr("The image could not be saved.")}};Te("t-full").onclick=()=>{var e;const n=document.documentElement;document.fullscreenElement?document.exitFullscreen():(((e=n.requestFullscreen)==null?void 0:e.call(n))??Promise.reject()).catch(()=>vr("Full screen is unavailable in this browser."))};function Ql(n,e){Te("modal-title").textContent=n,Te("modal-body").innerHTML=e,Te("modal").hidden=!1}Te("modal-close").onclick=()=>Te("modal").hidden=!0;Te("modal").onclick=n=>{n.target.id==="modal"&&(Te("modal").hidden=!0)};const ju=()=>`<table>${$u.map(n=>`<tr><td colspan="3"><b>${n}</b></td></tr>`+Rt.rooms.filter(e=>e.wing===n).map(e=>`<tr><td>${e.id}</td><td>${e.name}${e.cond?"":" (unconditioned)"}</td><td style="text-align:right">${e.area} SF · ${(e.area*rr).toFixed(1)} m²</td></tr>`).join("")).join("")}<tr><td colspan="3"><b>Covered Outdoor (Not Conditioned)</b></td></tr>${(Rt.covered||[]).map(n=>`<tr><td>${n.id}</td><td>${n.name}</td><td style="text-align:right">${n.area} SF · ${(n.area*rr).toFixed(1)} m²</td></tr>`).join("")}<tr><td></td><td><b>Total Conditioned</b></td><td style="text-align:right"><b>${Rt.total.toLocaleString()} SF · ${Math.round(Rt.total*rr)} m²</b></td></tr></table>`;Te("btn-drawings").onclick=()=>{Ql("Drawings",'<div class="tabs"><button class="on" data-img="Floor_Plan.png">Floor Plan</button><button data-img="Site_Plan.png">Site Plan</button><button data-img="prog">Room Program</button></div><div id="dw"><img src="./Floor_Plan.png" alt="Floor plan"></div>'),document.querySelectorAll(".tabs button").forEach(n=>n.onclick=()=>{document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("on",e===n)),Te("dw").innerHTML=n.dataset.img==="prog"?ju():`<img src="./${n.dataset.img}" alt="${n.textContent}">`})};const ed=`<h3>Concept</h3><p>A low, warm courtyard house for a mountain site, drawing on Bali, Japan and mid-century modernism rather than the cabin. Four single-storey pavilions wrap a 36 × 28 ft courtyard: <b>living</b> to the north facing the mountains, <b>sleeping</b> to the east, <b>wellness + gym</b> to the south on the pool, and <b>studio + arrival</b> to the west. Glazed engawas on the east and west and an open-air covered walkway on the south link them all, so every room looks into the garden. Deep 6 to 8 ft eaves, a butterfly roof over the living pavilion, standing seam metal, white lime-plaster panels with charred-timber siding, bronze windows, walnut and cherry inside, limestone, a cedar engawa and rammed earth.</p>
<h3>Model Notes</h3><p>Geometry is generated from the same plan data as the 2D drawings. Wall heights run up to the underside of each roof: 10 to 14 ft, with the butterfly roof rising from 12' 7" at the valley to about 14' at the walls. Areas are measured to wall centerlines. Furniture and equipment are simple blocks at true size. The lot, grades and mountain backdrop are illustrative only.</p>${ju()}`;Te("btn-about").onclick=()=>Ql("About This Model",ed);Te("btn-notes").onclick=()=>Ql("Model Notes",ed);function ka(){const n=Fn.clientWidth,e=Fn.clientHeight;bt.setSize(n,e),zs.setSize(n,e),At.aspect=n/e,At.updateProjectionMatrix();const t=62;Mn.left=-t*n/e,Mn.right=t*n/e,Mn.top=t,Mn.bottom=-t,Mn.updateProjectionMatrix()}window.addEventListener("resize",ka);new ResizeObserver(ka).observe(Fn);let Hh=performance.now(),U1=0;function td(n){const e=Math.min(.05,(n-Hh)/1e3);if(Hh=n,on&&ze.mode==="orbit"){let i=Math.min(1,(n-on.start)/on.dur);const s=on.ease==="out"?1-Math.pow(1-i,3):i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;At.position.lerpVectors(on.p0,on.p1,s),tn.target.lerpVectors(on.t0,on.t1v,s),At.fov=on.f0+(on.f1-on.f0)*s,At.updateProjectionMatrix(),i>=1&&(on=null)}ze.mode==="orbit"?tn.update():ze.mode==="plan"?jt.update():I1(e);const t=ze.mode==="orbit"?At.position.distanceTo(tn.target):ze.mode==="plan"?999:0;fn.detail.visible=ze.furn&&t<(Yn()?150:240),bt.render(Gt,li),zs.render(Gt,li),++U1===3&&(Te("loading").classList.add("done"),window.__ready=!0),requestAnimationFrame(td)}ka();Fa("day");Zl();const Ai=new URLSearchParams(location.search);Hs(Rs[Ai.get("view")]?Ai.get("view"):"aerial",!0);Ai.get("mode")&&Ti(Ai.get("mode"));Ai.get("light")==="eve"&&Fa("eve");Ai.get("roof")==="0"&&ui(!1);Ai.get("room")&&Ns(Ai.get("room"),!0);requestAnimationFrame(td);tn.addEventListener("start",()=>{on=null});window.app={goView:Hs,setMode:Ti,select:Ns,deselect:Us,setRoof:ui,setLight:Fa,setCut:ci,setOverlay:or,state:ze,renderer:bt,scene:Gt,get camera(){return li}};const O1=49,F1=44,ys=(n,e,t=0)=>new F(n-O1,t,-(e-F1)),ra={arch:{_:14075816},struct:{footing:9277331,column:10987949,beam:12172223,slab:13619668,pool:10467007,_:11580086},framing:{wall:14998731,lintel:10330277,_:14275267},roof:{rafter:5199972,purlin:10134445,trimmer:3093563,_:7042176},elec:{panel:1513239,outlet:14260736,light:15911244,equip:12024095,homerun:14725953,feeder:9067008,data:2450411,lv:1981066,lvrun:6333946,ap:3900150,solar:2042436,_:14260736},plumb:{fixture:16119285,main:3108831,branch:6000111,drain:8018482,vent:9408399,rain:2072207,pool:959942,poolpipe:2275542,equip:7041664,_:3108831},hvac:{indoor:15790320,outdoor:13093324,lineset:12088115,duct:10134961,diffuser:14672872,exhaust:8029841,erv:9147809,sauna:12730636,steam:9741240,dehum:8161172,_:10134961},solar:{module:2042436,inverter:1513239,battery:4144966,enclosure:10265519,dc:14753096,_:2042436},water:{tank:4153151,zone:1483594,ff:1013358,pump:947344,treat:165063,well:3108831,pipe:959977,mains:8141549,shed:11051678,_:959977},ctrl:{device:8141549,link:10980346,leak:14362487,_:8141549},farm:{coop:9133620,run:10724259,bed:7032618,compost:5981750,greywater:8141549,nook:12575696,rack:1483594,hvac:15066597,sensor:8141549,equip:7566195,pipe:8141549,_:5078031},site:{tank:4153151,equip:8028038,pad:12434877,well:3108831,pipe:4937059,_:8028038}},k1=14042437,B1={arch:"Architecture",struct:"Structure",framing:"Framing",roof:"Roof",elec:"Electrical",plumb:"Plumbing",hvac:"HVAC",site:"Site Utilities",water:"Water + Rainwater",solar:"Solar",ctrl:"Controls",farm:"Landscape + Farm"},z1=["walls","glass","floors","furn","detail"];function H1(n){const e=n[0];if(e==="b"){const[,t,i,s,r,a,o]=n,l=new An(Math.max(.05,r-t),Math.max(.05,o-s),Math.max(.05,a-i)),h=ys((t+r)/2,(i+a)/2,(s+o)/2);return l.translate(h.x,h.y,h.z),[l]}if(e==="s"){const[,t,i,s,r,a,o,l,h]=n,c=ys(t,i,s),u=ys(r,a,o),d=c.distanceTo(u),f=new An(l,h,d),p=new Ft;return p.position.copy(c).add(u).multiplyScalar(.5),p.lookAt(u),p.updateMatrix(),f.applyMatrix4(p.matrix),[f]}if(e==="c"){const[,t,i,s,r,a]=n,o=new cn(s,s,Math.max(.05,a-r),20),l=ys(t,i,(r+a)/2);return o.translate(l.x,l.y,l.z),[o]}if(e==="p"){const[,t,i]=n,s=Math.max(.07,i/2),r=[];for(let a=1;a<t.length;a++){const o=ys(...t[a-1]),l=ys(...t[a]),h=o.distanceTo(l);if(h<.001)continue;const c=new cn(s,s,h,8,1,!1),u=new Tn().setFromUnitVectors(new F(0,1,0),l.clone().sub(o).normalize());c.applyQuaternion(u);const d=o.clone().add(l).multiplyScalar(.5);if(c.translate(d.x,d.y,d.z),r.push(c),a<t.length-1){const f=new Ei(s,8,6);f.translate(l.x,l.y,l.z),r.push(f)}}return r}return[]}function G1(n){return n.map(e=>{const t=e.index?e.toNonIndexed():e;for(const i of Object.keys(t.attributes))["position","normal"].includes(i)||t.deleteAttribute(i);return t})}function V1(n){fetch("./"+"bim/bim.json").then(t=>t.json()).then(t=>W1(n,t)).catch(t=>console.warn("BIM layers unavailable",t))}function W1(n,e){const{scene:t,renderer:i}=n,r=i.domElement.parentElement.parentElement,a=new Hi;a.name="bim",t.add(a);const o={},l={},h=[],c=e.rooms||{};for(const U of e.layers){const k=new Hi;k.name="bim-"+U.id,k.visible=!1,a.add(k),o[U.id]=k}const u=U=>{let k=(ra[U.layer]||{})[U.cat]??(ra[U.layer]||{})._??8947848;/Hot Water/.test(U.system)&&(k=k1);const q=U.layer+k;return l[q]||(l[q]=new Dt({color:k,roughness:.75,metalness:U.layer==="roof"?.35:.05})),l[q]},d=new Pi({transparent:!0,opacity:0,depthWrite:!1});for(const U of e.elements){if(!U.g||!U.g.length)continue;const k=G1(U.g.flatMap(H1));if(!k.length)continue;const q=k.length===1?k[0]:Ou(k,!1),ue=new Nt(q,U.layer==="arch"?d:u(U));ue.userData.bim=U,ue.castShadow=U.layer!=="arch",ue.receiveShadow=!1,o[U.layer].add(ue),h.push(ue)}const f=z1.map(U=>t.getObjectByName(U)).filter(Boolean);o.arch.visible=!0;const p=Object.fromEntries(e.layers.map(U=>[U.id,U.id==="arch"])),_={};for(const U of e.elements)_[U.layer]=(_[U.layer]||0)+1;const g=Object.fromEntries(e.layers.map(U=>[U.id,U.sheet])),m=document.createElement("button");m.className="bim-btn mw-hover",m.id="bim-btn",m.type="button",m.setAttribute("aria-expanded","false"),m.setAttribute("aria-controls","bim-panel"),m.title="Building Systems Layers",m.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg><span>Systems</span>',(r.querySelector(".right-ctrls")||r).appendChild(m);const A=document.createElement("section");A.className="bim-panel",A.id="bim-panel",A.hidden=!0,A.setAttribute("aria-label","Layers");const b=U=>"#"+(ra[U][Object.keys(ra[U])[0]]??8947848).toString(16).padStart(6,"0");A.innerHTML='<div class="bim-head"><div><h2>Layers</h2><p class="bim-sub">One shared model drives the 3D view and the Design Development sheets. Tap an element for its properties.</p></div><button class="bim-x mw-hover" type="button" aria-label="Close layers">×</button></div>'+e.layers.map(U=>`<div class="bim-row"><label class="bim-tg mw-hover" title="${U.desc}"><span class="bim-sw" style="background:${b(U.id)}"></span><span class="bim-name">${U.name} <span class="bim-n">${_[U.id]||0}</span></span><input type="checkbox" data-layer="${U.id}" ${p[U.id]?"checked":""} aria-label="Show ${U.name}"><i></i></label><a class="bim-link mw-hover" href="./sheets/${U.sheet}.svg" target="_blank" rel="noopener" data-sheet="${U.sheet}" aria-label="View Sheet ${U.sheet} (${U.name})">View Sheet</a><a class="bim-link pdf mw-hover" href="./sheets/${U.sheet}.pdf" target="_blank" rel="noopener" aria-label="${U.sheet} PDF">PDF</a></div>`).join("")+'<div class="bim-foot"><a class="bim-link primary mw-hover" href="./sheets/Weberman_Residence_DD_Set.pdf" target="_blank" rel="noopener">Full Set (PDF)</a><button class="bim-link mw-hover" type="button" data-act="all">Show All Systems</button></div><p class="bim-note">Design Development, Not for Construction. Sizes are concept placeholders for a Thai engineer to verify.</p>',r.appendChild(A);const T=document.createElement("div");T.className="bim-props",T.hidden=!0,T.setAttribute("role","dialog"),T.setAttribute("aria-label","Element Properties"),r.appendChild(T);const R=U=>{A.hidden=!U,m.setAttribute("aria-expanded",String(U))};m.addEventListener("click",()=>R(A.hidden)),A.querySelector(".bim-x").addEventListener("click",()=>R(!1));function C(){for(const q in p)o[q].visible=p[q];for(const q of f)q.visible=p.arch&&(q.name!=="furn"&&q.name!=="detail"?!0:n.state.furn!==!1);n.setRoof&&(!p.arch&&n.state.roof?n.setRoof(!1):p.arch&&!n.state.roof&&C._roofWas&&n.setRoof(!0)),C._roofWas=n.state.roof||C._roofWas,A.querySelectorAll("input[data-layer]").forEach(q=>q.checked=p[q.dataset.layer]);const U=new URL(location.href),k=Object.keys(p).filter(q=>p[q]&&q!=="arch");k.length?U.searchParams.set("layers",k.join(",")):U.searchParams.delete("layers"),p.arch?U.searchParams.delete("arch"):U.searchParams.set("arch","0"),history.replaceState(null,"",U),w&&v&&!v.parent.visible&&O()}C._roofWas=n.state.roof,A.addEventListener("change",U=>{const k=U.target.dataset.layer;k&&(p[k]=U.target.checked,C())}),A.querySelector('[data-act="all"]').addEventListener("click",()=>{const U=Object.keys(p).some(k=>k!=="arch"&&!p[k]);for(const k in p)k!=="arch"&&(p[k]=U);p.arch=!U,C()});let v=null,w=null;const N=new br({color:657930,depthTest:!1,transparent:!0});function O(){w&&(t.remove(w),w.geometry.dispose()),w=null,v=null,T.hidden=!0}function x(U){O(),v=U;const k=U.userData.bim;w=new Op(U,657930),w.material=N,w.renderOrder=20,t.add(w);const q=k.room?c[k.room]?`${c[k.room]} (${k.room})`:k.room:k.rooms?k.rooms.map($e=>c[$e]||$e).join(" / "):"",ue=[["Type",k.type],["Size",k.size],["System",k.system],k.tag&&["Mark",k.tag],k.circuit&&["Circuit",k.circuit],q&&["Location",q],k.grid&&["Grid",k.grid],k.spec&&["Build-Up",k.spec],k.standard&&["Standard",k.standard],k.wall_type&&["Wall Type",k.wall_type]].filter(Boolean),fe=g[k.layer];T.innerHTML=`<button class="bim-x mw-hover" type="button" aria-label="Close properties">×</button><div class="bim-k">${B1[k.layer]} · ${k.id}</div><h3>${I(k.type)}</h3><dl>${ue.map(([$e,Je])=>`<dt>${$e}</dt><dd>${I(String(Je))}</dd>`).join("")}</dl><a class="bim-link mw-hover" href="./sheets/${fe}.svg" target="_blank" rel="noopener">View Sheet ${fe}</a>`,T.querySelector(".bim-x").addEventListener("click",O),T.hidden=!1}const I=U=>U.replace(/[&<>"]/g,k=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[k]),L=U=>{for(let k=U;k;k=k.parent)if(!k.visible)return!1;return!0},D=new Eu;let G=null;const H=i.domElement;H.addEventListener("pointerdown",U=>{G={x:U.clientX,y:U.clientY,t:performance.now()}},!0),H.addEventListener("pointerup",U=>{if(!G)return;const k=Math.hypot(U.clientX-G.x,U.clientY-G.y),q=performance.now()-G.t;if(G=null,k>6||q>600||n.state.mode==="walk"||!Object.keys(p).some(Q=>Q!=="arch"&&p[Q])&&A.hidden)return;const fe=H.getBoundingClientRect();D.setFromCamera(new re((U.clientX-fe.left)/fe.width*2-1,-((U.clientY-fe.top)/fe.height)*2+1),n.camera);const $e=h.filter(Q=>L(Q)&&(Q.userData.bim.layer!=="arch"||!A.hidden)),Je=[];for(const Q of f)L(Q)&&Je.push(Q);const it=D.intersectObjects([...$e,...Je],!0).find(Q=>Q.object.visible&&(Q.object.userData.bim||Je.length));it&&it.object.userData.bim&&(U.stopImmediatePropagation(),x(it.object))},!0),window.addEventListener("keydown",U=>{U.key==="Escape"&&(T.hidden?A.hidden||R(!1):O())}),function U(){w&&v&&w.update(),requestAnimationFrame(U)}();const J=new URLSearchParams(location.search);if(J.get("layers"))for(const U of J.get("layers").split(","))U in p&&(p[U]=!0);J.get("arch")==="0"&&(p.arch=!1),(J.get("layers")||J.get("arch"))&&C(),J.get("panel")==="1"&&R(!0),window.bim={state:p,apply:C,setOpen:R,show:x,layerGroups:o,model:e,select:U=>{const k=h.find(q=>q.userData.bim.id===U);return k&&x(k),!!k}}}(function n(){window.app&&window.app.scene?V1(window.app):setTimeout(n,50)})();
