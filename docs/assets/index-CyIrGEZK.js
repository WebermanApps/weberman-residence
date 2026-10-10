(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="186",ti={ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zu=0,jl=1,Hu=2,zs=1,Gu=2,Ns=3,Oi=0,sn=1,Rn=2,ni=0,Hs=1,ec=2,tc=3,nc=4,Vu=5,os=100,Wu=101,Xu=102,qu=103,Yu=104,$u=200,Ku=201,Zu=202,Ju=203,Eh=204,wh=205,Qu=206,ju=207,ef=208,tf=209,nf=210,sf=211,rf=212,af=213,of=214,go=0,xo=1,_o=2,$s=3,yo=4,vo=5,So=6,bo=7,Th=0,lf=1,cf=2,Vn=0,Ah=1,Rh=2,Ch=3,fl=4,Ph=5,Lh=6,Dh=7,Ih=300,Fi=301,ds=302,Ea=303,wa=304,la=306,Zr=1e3,jn=1001,Mo=1002,Wt=1003,hf=1004,hr=1005,Zt=1006,Ta=1007,Di=1008,xn=1009,Nh=1010,Uh=1011,Ks=1012,dl=1013,Xn=1014,Pn=1015,qn=1016,pl=1017,ml=1018,Zs=1020,Oh=35902,Fh=35899,kh=1021,Bh=1022,Ln=1023,si=1026,Ii=1027,gl=1028,xl=1029,ki=1030,_l=1031,yl=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,Eo=35840,wo=35841,To=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Lo=37488,Do=37489,Jr=37490,Io=37491,No=37808,Uo=37809,Oo=37810,Fo=37811,ko=37812,Bo=37813,zo=37814,Ho=37815,Go=37816,Vo=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,$o=36492,Ko=36494,Zo=36495,Jo=36283,Qo=36284,Qr=36285,jo=36286,uf=3200,el=0,ff=1,pi="",nn="srgb",jr="srgb-linear",ea="linear",gt="srgb",Aa=7680,df=519,pf=512,mf=513,gf=514,vl=515,xf=516,_f=517,Sl=518,yf=519,vf=35044,ic="300 es",Gn=2e3,Js=2001;function Sf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bf(){const n=Qs("canvas");return n.style.display="block",n}const sc={};function rc(...n){const e="THREE."+n.shift();console.log(e,...n)}function zh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=zh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=zh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function cs(...n){const e=n.join(" ");e in sc||(sc[e]=!0,Ge(...n))}function Mf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ef={[go]:xo,[_o]:So,[yo]:bo,[$s]:vo,[xo]:go,[So]:_o,[bo]:yo,[vo]:$s};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,tl=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function wf(n,e){return(n%e+e)%e}function Ra(n,e,t){return(1-t)*n+t*e}function Es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tf={DEG2RAD:Gs},kl=class kl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kl.prototype.isVector2=!0;let ae=kl;class Dn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],h=i[s+1],l=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||c!==f||h!==d||l!==p){let g=c*f+h*d+l*p+u*x;g<0&&(f=-f,d=-d,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){const b=Math.acos(g),A=Math.sin(b);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A,c=c*m+f*o,h=h*m+d*o,l=l*m+p*o,u=u*m+x*o}else{c=c*m+f*o,h=h*m+d*o,l=l*m+p*o,u=u*m+x*o;const b=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=b,h*=b,l*=b,u*=b}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],h=i[s+2],l=i[s+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+l*u+c*d-h*f,e[t+1]=c*p+l*f+h*u-o*d,e[t+2]=h*p+l*d+o*f-c*u,e[t+3]=l*p-o*u-c*f-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(i/2),l=o(s/2),u=o(r/2),f=c(i/2),d=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=f*l*u+h*d*p,this._y=h*d*u-f*l*p,this._z=h*l*p+f*d*u,this._w=h*l*u-f*d*p;break;case"YXZ":this._x=f*l*u+h*d*p,this._y=h*d*u-f*l*p,this._z=h*l*p-f*d*u,this._w=h*l*u+f*d*p;break;case"ZXY":this._x=f*l*u-h*d*p,this._y=h*d*u+f*l*p,this._z=h*l*p+f*d*u,this._w=h*l*u-f*d*p;break;case"ZYX":this._x=f*l*u-h*d*p,this._y=h*d*u+f*l*p,this._z=h*l*p-f*d*u,this._w=h*l*u+f*d*p;break;case"YZX":this._x=f*l*u+h*d*p,this._y=h*d*u+f*l*p,this._z=h*l*p-f*d*u,this._w=h*l*u-f*d*p;break;case"XZY":this._x=f*l*u-h*d*p,this._y=h*d*u-f*l*p,this._z=h*l*p+f*d*u,this._w=h*l*u+f*d*p;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],l=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-c)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(l-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+l)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=i*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-i*h,this._z=r*l+a*h+i*c-s*o,this._w=a*l-i*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const h=Math.acos(o),l=Math.sin(h);c=Math.sin(c*h)/l,t=Math.sin(t*h)/l,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bl=class Bl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*i),l=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*h+a*u-o*l,this.y=i+c*l+o*h-r*u,this.z=s+c*u+r*l-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bl.prototype.isVector3=!0;let O=Bl;const Ca=new O,ac=new Dn,zl=class zl{constructor(e,t,i,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,h)}set(e,t,i,s,r,a,o,c,h){const l=this.elements;return l[0]=e,l[1]=s,l[2]=o,l[3]=t,l[4]=r,l[5]=c,l[6]=i,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],l=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],b=s[1],A=s[4],S=s[7],w=s[2],T=s[5],R=s[8];return r[0]=a*x+o*b+c*w,r[3]=a*g+o*A+c*T,r[6]=a*m+o*S+c*R,r[1]=h*x+l*b+u*w,r[4]=h*g+l*A+u*T,r[7]=h*m+l*S+u*R,r[2]=f*x+d*b+p*w,r[5]=f*g+d*A+p*T,r[8]=f*m+d*S+p*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*a*l-t*o*h-i*r*l+i*o*c+s*r*h-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],u=l*a-o*h,f=o*c-l*r,d=h*r-a*c,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=u*x,e[1]=(s*h-l*i)*x,e[2]=(o*i-s*a)*x,e[3]=f*x,e[4]=(l*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(i*c-h*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zl.prototype.isMatrix3=!0;let $e=zl;const Pa=new $e,oc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){const n={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[jr]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const st=Af();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class Rf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xi===void 0&&(Xi=Qs("canvas")),Xi.width=e.width,Xi.height=e.height;const s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Xi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cf=0;class bl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(La(s[a].image)):r.push(La(s[a]))}else r=La(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function La(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Pf=0;const Da=new O;class Xt extends Mi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=jn,s=jn,r=Zt,a=Di,o=Ln,c=xn,h=Xt.DEFAULT_ANISOTROPY,l=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=_s(),this.name="",this.source=new bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Da).x}get height(){return this.source.getSize(Da).y}get depth(){return this.source.getSize(Da).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Ih;Xt.DEFAULT_ANISOTROPY=1;const Hl=class Hl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,h=c[0],l=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,S=(d+1)/2,w=(m+1)/2,T=(l+f)/4,R=(u+x)/4,v=(p+g)/4;return A>S&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=T/i,r=R/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=v/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=v/r),this.set(i,s,r,t),this}let b=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-l)*(f-l));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(u-x)/b,this.z=(f-l)/b,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;let Tt=Hl;class Lf extends Mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Xt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new bl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Lf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hh extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Df extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const oa=class oa{constructor(e,t,i,s,r,a,o,c,h,l,u,f,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,h,l,u,f,d,p,x,g)}set(e,t,i,s,r,a,o,c,h,l,u,f,d,p,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=l,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*l,d=a*u,p=o*l,x=o*u;t[0]=c*l,t[4]=-c*u,t[8]=h,t[1]=d+p*h,t[5]=f-x*h,t[9]=-o*c,t[2]=x-f*h,t[6]=p+d*h,t[10]=a*c}else if(e.order==="YXZ"){const f=c*l,d=c*u,p=h*l,x=h*u;t[0]=f+x*o,t[4]=p*o-d,t[8]=a*h,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=d*o-p,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*l,d=c*u,p=h*l,x=h*u;t[0]=f-x*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*l,t[9]=x-f*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*l,d=a*u,p=o*l,x=o*u;t[0]=c*l,t[4]=p*h-d,t[8]=f*h+x,t[1]=c*u,t[5]=x*h+f,t[9]=d*h-p,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*h,p=o*c,x=o*h;t[0]=c*l,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-h*l,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){const f=a*c,d=a*h,p=o*c,x=o*h;t[0]=c*l,t[4]=-u,t[8]=h*l,t[1]=f*u+x,t[5]=a*l,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*l,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Nf)}lookAt(e,t,i){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ci.crossVectors(i,pn),ci.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ci.crossVectors(i,pn)),ci.normalize(),ur.crossVectors(pn,ci),s[0]=ci.x,s[4]=ur.x,s[8]=pn.x,s[1]=ci.y,s[5]=ur.y,s[9]=pn.y,s[2]=ci.z,s[6]=ur.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],l=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],b=i[3],A=i[7],S=i[11],w=i[15],T=s[0],R=s[4],v=s[8],E=s[12],D=s[1],U=s[5],_=s[9],L=s[13],I=s[2],N=s[6],G=s[10],H=s[14],j=s[3],Y=s[7],Z=s[11],ee=s[15];return r[0]=a*T+o*D+c*I+h*j,r[4]=a*R+o*U+c*N+h*Y,r[8]=a*v+o*_+c*G+h*Z,r[12]=a*E+o*L+c*H+h*ee,r[1]=l*T+u*D+f*I+d*j,r[5]=l*R+u*U+f*N+d*Y,r[9]=l*v+u*_+f*G+d*Z,r[13]=l*E+u*L+f*H+d*ee,r[2]=p*T+x*D+g*I+m*j,r[6]=p*R+x*U+g*N+m*Y,r[10]=p*v+x*_+g*G+m*Z,r[14]=p*E+x*L+g*H+m*ee,r[3]=b*T+A*D+S*I+w*j,r[7]=b*R+A*U+S*N+w*Y,r[11]=b*v+A*_+S*G+w*Z,r[15]=b*E+A*L+S*H+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],l=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],g=e[11],m=e[15],b=c*d-h*f,A=o*d-h*u,S=o*f-c*u,w=a*d-h*l,T=a*f-c*l,R=a*u-o*l;return t*(x*b-g*A+m*S)-i*(p*b-g*w+m*T)+s*(p*A-x*w+m*R)-r*(p*S-x*T+g*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],h=e[6],l=e[10];return t*(a*l-o*h)-i*(r*l-o*c)+s*(r*h-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],g=e[14],m=e[15],b=t*o-i*a,A=t*c-s*a,S=t*h-r*a,w=i*c-s*o,T=i*h-r*o,R=s*h-r*c,v=l*x-u*p,E=l*g-f*p,D=l*m-d*p,U=u*g-f*x,_=u*m-d*x,L=f*m-d*g,I=b*L-A*_+S*U+w*D-T*E+R*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=(o*L-c*_+h*U)*N,e[1]=(s*_-i*L-r*U)*N,e[2]=(x*R-g*T+m*w)*N,e[3]=(f*T-u*R-d*w)*N,e[4]=(c*D-a*L-h*E)*N,e[5]=(t*L-s*D+r*E)*N,e[6]=(g*S-p*R-m*A)*N,e[7]=(l*R-f*S+d*A)*N,e[8]=(a*_-o*D+h*v)*N,e[9]=(i*D-t*_-r*v)*N,e[10]=(p*T-x*S+m*b)*N,e[11]=(u*S-l*T-d*b)*N,e[12]=(o*E-a*U-c*v)*N,e[13]=(t*U-i*E+s*v)*N,e[14]=(x*A-p*w-g*b)*N,e[15]=(l*w-u*A+f*b)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,h=r*a,l=r*o;return this.set(h*a+i,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+i,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,l=a+a,u=o+o,f=r*h,d=r*l,p=r*u,x=a*l,g=a*u,m=o*u,b=c*h,A=c*l,S=c*u,w=i.x,T=i.y,R=i.z;return s[0]=(1-(x+m))*w,s[1]=(d+S)*w,s[2]=(p-A)*w,s[3]=0,s[4]=(d-S)*T,s[5]=(1-(f+m))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(p+A)*R,s[9]=(g-b)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),c=qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const h=1/a,l=1/o,u=1/c;return En.elements[0]*=h,En.elements[1]*=h,En.elements[2]*=h,En.elements[4]*=l,En.elements[5]*=l,En.elements[6]*=l,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Gn,c=!1){const h=this.elements,l=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let p,x;if(c)p=r/(a-r),x=a*r/(a-r);else if(o===Gn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Js)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=u,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Gn,c=!1){const h=this.elements,l=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s);let p,x;if(c)p=1/(a-r),x=a/(a-r);else if(o===Gn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Js)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=u,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=p,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};oa.prototype.isMatrix4=!0;let rt=oa;const qi=new O,En=new rt,If=new O(0,0,0),Nf=new O(1,1,1),ci=new O,ur=new O,pn=new O,cc=new rt,hc=new Dn;class yi{constructor(e=0,t=0,i=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-et(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,d),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hc.setFromEuler(this),this.setFromQuaternion(hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uf=0;const uc=new O,Yi=new Dn,$n=new rt,fr=new O,ws=new O,Of=new O,Ff=new Dn,fc=new O(1,0,0),dc=new O(0,1,0),pc=new O(0,0,1),mc={type:"added"},kf={type:"removed"},$i={type:"childadded",child:null},Ia={type:"childremoved",child:null};class Ft extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new O,t=new yi,i=new Dn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new $e}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(dc,e)}rotateZ(e){return this.rotateOnAxis(pc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(dc,e)}translateZ(e){return this.translateOnAxis(pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fr.copy(e):fr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(ws,fr,this.up):$n.lookAt(fr,ws,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix($n),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mc),$i.child=e,this.dispatchEvent($i),$i.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kf),Ia.child=e,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mc),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),l=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new O(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Us extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bf={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),m=this._getHandJoint(h,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=l.position.distanceTo(u.position),d=.02,p=.005;h.inputState.pinching&&f>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=wf(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ua(a,r,e+1/3),this.g=Ua(a,r,e),this.b=Ua(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Gh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return st.workingToColorSpace($t.copy(this),e),Math.round(et($t.r*255,0,255))*65536+Math.round(et($t.g*255,0,255))*256+Math.round(et($t.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=nn){st.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(dr);const i=Ra(hi.h,dr.h,t),s=Ra(hi.s,dr.s,t),r=Ra(hi.l,dr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Xe;Xe.NAMES=Gh;class El{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=i}clone(){return new El(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zf extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wn=new O,Kn=new O,Oa=new O,Zn=new O,Ki=new O,Zi=new O,gc=new O,Fa=new O,ka=new O,Ba=new O,za=new Tt,Ha=new Tt,Ga=new Tt;class vn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Kn.subVectors(i,t),Oa.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Kn),c=wn.dot(Oa),h=Kn.dot(Kn),l=Kn.dot(Oa),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(h*c-o*l)*f,p=(a*l-o*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return za.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),za.fromBufferAttribute(e,t),Ha.fromBufferAttribute(e,i),Ga.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(za,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(Ga,r.z),a}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Kn.subVectors(e,t),wn.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ki.subVectors(s,i),Zi.subVectors(r,i),Fa.subVectors(e,i);const c=Ki.dot(Fa),h=Zi.dot(Fa);if(c<=0&&h<=0)return t.copy(i);ka.subVectors(e,s);const l=Ki.dot(ka),u=Zi.dot(ka);if(l>=0&&u<=l)return t.copy(s);const f=c*u-l*h;if(f<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(i).addScaledVector(Ki,a);Ba.subVectors(e,r);const d=Ki.dot(Ba),p=Zi.dot(Ba);if(p>=0&&d<=p)return t.copy(r);const x=d*h-c*p;if(x<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(i).addScaledVector(Zi,o);const g=l*p-d*u;if(g<=0&&u-l>=0&&d-p>=0)return gc.subVectors(r,s),o=(u-l)/(u-l+(d-p)),t.copy(s).addScaledVector(gc,o);const m=1/(g+x+f);return a=x*m,o=f*m,t.copy(i).addScaledVector(Ki,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),mr.subVectors(this.max,Ts),Ji.subVectors(e.a,Ts),Qi.subVectors(e.b,Ts),ji.subVectors(e.c,Ts),ui.subVectors(Qi,Ji),fi.subVectors(ji,Qi),Ti.subVectors(Ji,ji);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ti.z,Ti.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ti.z,0,-Ti.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ti.y,Ti.x,0];return!Va(t,Ji,Qi,ji,mr)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Ji,Qi,ji,mr))?!1:(gr.crossVectors(ui,fi),t=[gr.x,gr.y,gr.z],Va(t,Ji,Qi,ji,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new O,new O,new O,new O,new O,new O,new O,new O],Tn=new O,pr=new Hi,Ji=new O,Qi=new O,ji=new O,ui=new O,fi=new O,Ti=new O,Ts=new O,mr=new O,gr=new O,Ai=new O;function Va(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ai.fromArray(n,r);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),h=t.dot(Ai),l=i.dot(Ai);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const Ut=new O,xr=new ae;let Hf=0;class fn extends Mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vf,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vh extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wh extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Gf=new Hi,As=new O,Wa=new O;class ys{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Wa)),this.expandByPoint(As.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vf=0;const yn=new rt,Xa=new Ft,es=new O,mn=new Hi,Rs=new Hi,zt=new O;class Pt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sf(e)?Wh:Vh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(mn.min,Rs.min),mn.expandByPoint(zt),zt.addVectors(mn.max,Rs.max),mn.expandByPoint(zt)):(mn.expandByPoint(Rs.min),mn.expandByPoint(Rs.max))}mn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)zt.fromBufferAttribute(o,h),c&&(es.fromBufferAttribute(e,h),zt.add(es)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new fn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new O,c[v]=new O;const h=new O,l=new O,u=new O,f=new ae,d=new ae,p=new ae,x=new O,g=new O;function m(v,E,D){h.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,D),f.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,D),l.sub(h),u.sub(h),d.sub(f),p.sub(f);const U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(x.copy(l).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(U),g.copy(u).multiplyScalar(d.x).addScaledVector(l,-p.x).multiplyScalar(U),o[v].add(x),o[E].add(x),o[D].add(x),c[v].add(g),c[E].add(g),c[D].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let v=0,E=b.length;v<E;++v){const D=b[v],U=D.start,_=D.count;for(let L=U,I=U+_;L<I;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const A=new O,S=new O,w=new O,T=new O;function R(v){w.fromBufferAttribute(s,v),T.copy(w);const E=o[v];A.copy(E),A.sub(w.multiplyScalar(w.dot(E))).normalize(),S.crossVectors(T,E);const U=S.dot(c[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,U)}for(let v=0,E=b.length;v<E;++v){const D=b[v],U=D.start,_=D.count;for(let L=U,I=U+_;L<I;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,c=new O,h=new O,l=new O,u=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,g),o.add(l),c.add(l),h.add(l),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){const h=o.array,l=o.itemSize,u=o.normalized,f=new h.constructor(c.length*l);let d=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*l;for(let m=0;m<l;m++)f[p++]=h[d++]}return new fn(f,l,u)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=e(c,i);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,u=h.length;l<u;l++){const f=h[l],d=e(f,i);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const h=i[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];l.push(d.toJSON(e.data))}l.length>0&&(s[c]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(t))}const r=e.morphAttributes;for(const h in r){const l=[],u=r[h];for(let f=0,d=u.length;f<d;f++)l.push(u[f].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,l=a.length;h<l;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new O,Wf=new O,Xf=new $e;class An{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=qa.subVectors(i,t).cross(Wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(qa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xf.getNormalMatrix(e),s=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qf=0;class vs extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Hs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=wh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new An().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qn=new O,Ya=new O,_r=new O,yr=new O;class ca{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ya.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Ya);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=yr.dot(this.direction),c=-yr.dot(_r),h=yr.lengthSq(),l=Math.abs(1-a*a);let u,f,d,p;if(l>0)if(u=a*c-o,f=a*o-c,p=r*l,u>=0)if(f>=-p)if(f<=p){const x=1/l;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+h}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+h):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+h);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ya).addScaledVector(_r,f),d}intersectSphere(e,t){if(e.radius<0)return null;Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(i=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),l>=0?(r=(e.min.y-f.y)*l,a=(e.max.y-f.y)*l):(r=(e.max.y-f.y)*l,a=(e.min.y-f.y)*l),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,c=o.x,h=o.y,l=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=i.x-a.x,b=i.y-a.y,A=i.z-a.z,S=Math.abs(c),w=Math.abs(h),T=Math.abs(l);let R,v,E,D,U,_,L,I,N,G,H,j;if(S>=w&&S>=T?(E=c,_=u,N=p,j=m,c>=0?(R=h,v=l,D=f,U=d,L=x,I=g,G=b,H=A):(R=l,v=h,D=d,U=f,L=g,I=x,G=A,H=b)):w>=T?(E=h,_=f,N=x,j=b,h>=0?(R=l,v=c,D=d,U=u,L=g,I=p,G=A,H=m):(R=c,v=l,D=u,U=d,L=p,I=g,G=m,H=A)):(E=l,_=d,N=g,j=A,l>=0?(R=c,v=h,D=u,U=f,L=p,I=x,G=m,H=b):(R=h,v=c,D=f,U=u,L=x,I=p,G=b,H=m)),E===0)return null;const Y=R/E,Z=v/E,ee=1/E,Re=D-Y*_,Me=U-Z*_,at=L-Y*N,tt=I-Z*N,lt=G-Y*j,Q=H-Z*j,ie=lt*tt-Q*at,ye=Re*Q-Me*lt,He=at*Me-tt*Re;if(s){if(ie<0||ye<0||He<0)return null}else if((ie<0||ye<0||He<0)&&(ie>0||ye>0||He>0))return null;const Ee=ie+ye+He;if(Ee===0)return null;const Ve=ee*(ie*_+ye*N+He*j);return(Ee>0?Ve<0:Ve>0)?null:this.at(Ve/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ar extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xc=new rt,Ri=new ca,vr=new ys,_c=new O,Sr=new O,br=new O,Mr=new O,$a=new O,Er=new O,yc=new O,wr=new O;class Gt extends Ft{constructor(e=new Pt,t=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Er.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],u=r[c];l!==0&&($a.fromBufferAttribute(u,e),a?Er.addScaledVector($a,l):Er.addScaledVector($a.sub(t),l))}t.add(Er)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(vr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(vr,_c)===null||Ri.origin.distanceToSquared(_c)>(e.far-e.near)**2))&&(xc.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(xc),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){const g=f[p],m=a[g.materialIndex],b=Math.max(g.start,d.start),A=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=b,w=A;S<w;S+=3){const T=o.getX(S),R=o.getX(S+1),v=o.getX(S+2);s=Tr(this,m,e,i,h,l,u,T,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const b=o.getX(g),A=o.getX(g+1),S=o.getX(g+2);s=Tr(this,a,e,i,h,l,u,b,A,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){const g=f[p],m=a[g.materialIndex],b=Math.max(g.start,d.start),A=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let S=b,w=A;S<w;S+=3){const T=S,R=S+1,v=S+2;s=Tr(this,m,e,i,h,l,u,T,R,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const b=g,A=g+1,S=g+2;s=Tr(this,a,e,i,h,l,u,b,A,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Yf(n,e,t,i,s,r,a,o){let c;if(e.side===sn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Oi,o),c===null)return null;wr.copy(o),wr.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(wr);return h<t.near||h>t.far?null:{distance:h,point:wr.clone(),object:n}}function Tr(n,e,t,i,s,r,a,o,c,h){n.getVertexPosition(o,Sr),n.getVertexPosition(c,br),n.getVertexPosition(h,Mr);const l=Yf(n,e,t,i,Sr,br,Mr,yc);if(l){const u=new O;vn.getBarycoord(yc,Sr,br,Mr,u),s&&(l.uv=vn.getInterpolatedAttribute(s,o,c,h,u,new ae)),r&&(l.uv1=vn.getInterpolatedAttribute(r,o,c,h,u,new ae)),a&&(l.normal=vn.getInterpolatedAttribute(a,o,c,h,u,new O),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const f={a:o,b:c,c:h,normal:new O,materialIndex:0};vn.getNormal(Sr,br,Mr,f.normal),l.face=f,l.barycoord=u}return l}class Xh extends Xt{constructor(e=null,t=1,i=1,s,r,a,o,c,h=Wt,l=Wt,u,f){super(null,a,o,c,h,l,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends fn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ts=new rt,Sc=new rt,Ar=[],bc=new Hi,$f=new rt,Cs=new Gt,Ps=new ys;class mi extends Gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$f)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ts),bc.copy(e.boundingBox).applyMatrix4(ts),this.boundingBox.union(bc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ts),Ps.copy(e.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(i),e.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Sc.multiplyMatrices(i,ts),Cs.matrixWorld=Sc,Cs.raycast(e,Ar);for(let a=0,o=Ar.length;a<o;a++){const c=Ar[a];c.instanceId=r,c.object=this,t.push(c)}Ar.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xh(new Float32Array(s*this.count),s,this.count,gl,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ci=new ys,Kf=new ae(.5,.5),Rr=new O;class wl{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,a=new An){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],h=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],b=r[12],A=r[13],S=r[14],w=r[15];if(s[0].setComponents(h-a,d-l,m-p,w-b).normalize(),s[1].setComponents(h+a,d+l,m+p,w+b).normalize(),s[2].setComponents(h+o,d+u,m+x,w+A).normalize(),s[3].setComponents(h-o,d-u,m-x,w-A).normalize(),i)s[4].setComponents(c,f,g,S).normalize(),s[5].setComponents(h-c,d-f,m-g,w-S).normalize();else if(s[4].setComponents(h-c,d-f,m-g,w-S).normalize(),t===Gn)s[5].setComponents(h+c,d+f,m+g,w+S).normalize();else if(t===Js)s[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=Kf.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qh extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new O,na=new O,Mc=new rt,Ls=new ca,Cr=new ys,Ka=new O,Ec=new O;class Zf extends Ft{constructor(e=new Pt,t=new qh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ta.fromBufferAttribute(t,s-1),na.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ta.distanceTo(na);e.setAttribute("lineDistance",new ht(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;Mc.copy(s).invert(),Ls.copy(e.ray).applyMatrix4(Mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=h){const m=l.getX(x),b=l.getX(x+1),A=Pr(this,e,Ls,c,m,b,x);A&&t.push(A)}if(this.isLineLoop){const x=l.getX(p-1),g=l.getX(d),m=Pr(this,e,Ls,c,x,g,p-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=h){const m=Pr(this,e,Ls,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=Pr(this,e,Ls,c,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pr(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(ta.fromBufferAttribute(o,s),na.fromBufferAttribute(o,r),t.distanceSqToSegment(ta,na,Ka,Ec)>i)return;Ka.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Ka);if(!(h<e.near||h>e.far))return{distance:h,point:Ec.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const wc=new O,Tc=new O;class Jf extends Zf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)wc.fromBufferAttribute(t,s),Tc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+wc.distanceTo(Tc);e.setAttribute("lineDistance",new ht(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yh extends Xt{constructor(e=[],t=Fi,i,s,r,a,o,c,h,l){super(e,t,i,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qf extends Xt{constructor(e,t,i,s,r,a,o,c,h){super(e,t,i,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class js extends Xt{constructor(e,t,i=Xn,s,r,a,o=Wt,c=Wt,h,l=si,u=1){if(l!==si&&l!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,c,l,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class jf extends js{constructor(e,t=Xn,i=Fi,s,r,a=Wt,o=Wt,c,h=si){const l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,i,s,r,a,o,c,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $h extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ei extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(u,2));function p(x,g,m,b,A,S,w,T,R,v,E){const D=S/R,U=w/v,_=S/2,L=w/2,I=T/2,N=R+1,G=v+1;let H=0,j=0;const Y=new O;for(let Z=0;Z<G;Z++){const ee=Z*U-L;for(let Re=0;Re<N;Re++){const Me=Re*D-_;Y[x]=Me*b,Y[g]=ee*A,Y[m]=I,h.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=T>0?1:-1,l.push(Y.x,Y.y,Y.z),u.push(Re/R),u.push(1-Z/v),H+=1}}for(let Z=0;Z<v;Z++)for(let ee=0;ee<R;ee++){const Re=f+ee+N*Z,Me=f+ee+N*(Z+1),at=f+(ee+1)+N*(Z+1),tt=f+(ee+1)+N*Z;c.push(Re,Me,tt),c.push(Me,at,tt),j+=6}o.addGroup(d,j,E),d+=j,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hn extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],u=[],f=[],d=[];let p=0;const x=[],g=i/2;let m=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(l),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(d,2));function b(){const S=new O,w=new O;let T=0;const R=(t-e)/i;for(let v=0;v<=r;v++){const E=[],D=v/r,U=D*(t-e)+e;for(let _=0;_<=s;_++){const L=_/s,I=L*c+o,N=Math.sin(I),G=Math.cos(I);w.x=U*N,w.y=-D*i+g,w.z=U*G,u.push(w.x,w.y,w.z),S.set(N,R,G).normalize(),f.push(S.x,S.y,S.z),d.push(L,1-D),E.push(p++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const D=x[E][v],U=x[E+1][v],_=x[E+1][v+1],L=x[E][v+1];(e>0||E!==0)&&(l.push(D,U,L),T+=3),(t>0||E!==r-1)&&(l.push(U,_,L),T+=3)}h.addGroup(m,T,0),m+=T}function A(S){const w=p,T=new ae,R=new O;let v=0;const E=S===!0?e:t,D=S===!0?1:-1;for(let _=1;_<=s;_++)u.push(0,g*D,0),f.push(0,D,0),d.push(.5,.5),p++;const U=p;for(let _=0;_<=s;_++){const I=_/s*c+o,N=Math.cos(I),G=Math.sin(I);R.x=E*G,R.y=g*D,R.z=E*N,u.push(R.x,R.y,R.z),f.push(0,D,0),T.x=N*.5+.5,T.y=G*.5*D+.5,d.push(T.x,T.y),p++}for(let _=0;_<s;_++){const L=w+_,I=U+_;S===!0?l.push(I,I+1,L):l.push(I+1,I,L),v+=3}h.addGroup(m,v,S===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class us extends hn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ha extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),h(i),l(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const A=new O,S=new O,w=new O;for(let T=0;T<t.length;T+=3)d(t[T+0],A),d(t[T+1],S),d(t[T+2],w),c(A,S,w,b)}function c(b,A,S,w){const T=w+1,R=[];for(let v=0;v<=T;v++){R[v]=[];const E=b.clone().lerp(S,v/T),D=A.clone().lerp(S,v/T),U=T-v;for(let _=0;_<=U;_++)_===0&&v===T?R[v][_]=E:R[v][_]=E.clone().lerp(D,_/U)}for(let v=0;v<T;v++)for(let E=0;E<2*(T-v)-1;E++){const D=Math.floor(E/2);E%2===0?(f(R[v][D+1]),f(R[v+1][D]),f(R[v][D])):(f(R[v][D+1]),f(R[v+1][D+1]),f(R[v+1][D]))}}function h(b){const A=new O;for(let S=0;S<r.length;S+=3)A.x=r[S+0],A.y=r[S+1],A.z=r[S+2],A.normalize().multiplyScalar(b),r[S+0]=A.x,r[S+1]=A.y,r[S+2]=A.z}function l(){const b=new O;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];const S=g(b)/2/Math.PI+.5,w=m(b)/Math.PI+.5;a.push(S,1-w)}p(),u()}function u(){for(let b=0;b<a.length;b+=6){const A=a[b+0],S=a[b+2],w=a[b+4],T=Math.max(A,S,w),R=Math.min(A,S,w);T>.9&&R<.1&&(A<.2&&(a[b+0]+=1),S<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,A){const S=b*3;A.x=e[S+0],A.y=e[S+1],A.z=e[S+2]}function p(){const b=new O,A=new O,S=new O,w=new O,T=new ae,R=new ae,v=new ae;for(let E=0,D=0;E<r.length;E+=9,D+=6){b.set(r[E+0],r[E+1],r[E+2]),A.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),T.set(a[D+0],a[D+1]),R.set(a[D+2],a[D+3]),v.set(a[D+4],a[D+5]),w.copy(b).add(A).add(S).divideScalar(3);const U=g(w);x(T,D+0,b,U),x(R,D+2,A,U),x(v,D+4,S,U)}}function x(b,A,S,w){w<0&&b.x===1&&(a[A]=b.x-1),S.x===0&&S.z===0&&(a[A]=w/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.vertices,e.indices,e.radius,e.detail)}}class ua extends ha{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ua(e.radius,e.detail)}}const Lr=new O,Dr=new O,Za=new O,Ir=new vn;class ed extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Gs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,h=[0,0,0],l=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<c;p+=3){a?(h[0]=a.getX(p),h[1]=a.getX(p+1),h[2]=a.getX(p+2)):(h[0]=p,h[1]=p+1,h[2]=p+2);const{a:x,b:g,c:m}=Ir;if(x.fromBufferAttribute(o,h[0]),g.fromBufferAttribute(o,h[1]),m.fromBufferAttribute(o,h[2]),Ir.getNormal(Za),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const A=(b+1)%3,S=u[b],w=u[A],T=Ir[l[b]],R=Ir[l[A]],v=`${S}_${w}`,E=`${w}_${S}`;E in f&&f[E]?(Za.dot(f[E].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(R.x,R.y,R.z)),f[E]=null):v in f||(f[v]={index0:h[b],index1:h[A],normal:Za.clone()})}}for(const p in f)if(f[p]){const{index0:x,index1:g}=f[p];Lr.fromBufferAttribute(o,x),Dr.fromBufferAttribute(o,g),d.push(Lr.x,Lr.y,Lr.z),d.push(Dr.x,Dr.y,Dr.z)}this.setAttribute("position",new ht(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const l=i[s],f=i[s+1]-l,d=(a-l)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ae:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,s=[],r=[],a=[],o=new O,c=new rt;for(let d=0;d<=e;d++){const p=d/e;s[d]=this.getTangentAt(p,new O)}r[0]=new O,a[0]=new O;let h=Number.MAX_VALUE;const l=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);l<=h&&(h=l,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),f<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tl extends Yn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ae){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=h-this.aY;c=f*l-d*u+this.aX,h=f*u+d*l+this.aY}return i.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class td extends Tl{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Al(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,l,u){let f=(a-r)/h-(o-r)/(h+l)+(o-a)/l,d=(o-a)/l-(c-a)/(l+u)+(c-o)/u;f*=l,d*=l,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Ac=new O,Rc=new O,Ja=new Al,Qa=new Al,ja=new Al;class nd extends Yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,l;this.closed||o>0?h=s[(o-1)%r]:(Rc.subVectors(s[0],s[1]).add(s[0]),h=Rc);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?l=s[(o+2)%r]:(Ac.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(h.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(l),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Ja.initNonuniformCatmullRom(h.x,u.x,f.x,l.x,p,x,g),Qa.initNonuniformCatmullRom(h.y,u.y,f.y,l.y,p,x,g),ja.initNonuniformCatmullRom(h.z,u.z,f.z,l.z,p,x,g)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(h.x,u.x,f.x,l.x,this.tension),Qa.initCatmullRom(h.y,u.y,f.y,l.y,this.tension),ja.initCatmullRom(h.z,u.z,f.z,l.z,this.tension));return i.set(Ja.calc(c),Qa.calc(c),ja.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cc(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function id(n,e){const t=1-n;return t*t*e}function sd(n,e){return 2*(1-n)*n*e}function rd(n,e){return n*n*e}function Vs(n,e,t,i){return id(n,e)+sd(n,t)+rd(n,i)}function ad(n,e){const t=1-n;return t*t*t*e}function od(n,e){const t=1-n;return 3*t*t*n*e}function ld(n,e){return 3*(1-n)*n*n*e}function cd(n,e){return n*n*n*e}function Ws(n,e,t,i,s){return ad(n,e)+od(n,t)+ld(n,i)+cd(n,s)}class Kh extends Yn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ws(e,s.x,r.x,a.x,o.x),Ws(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hd extends Yn{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ws(e,s.x,r.x,a.x,o.x),Ws(e,s.y,r.y,a.y,o.y),Ws(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zh extends Yn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends Yn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends Yn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vs(e,s.x,r.x,a.x),Vs(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fd extends Yn{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vs(e,s.x,r.x,a.x),Vs(e,s.y,r.y,a.y),Vs(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],l=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Cc(o,c.x,h.x,l.x,u.x),Cc(o,c.y,h.y,l.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ae().fromArray(s))}return this}}var nl=Object.freeze({__proto__:null,ArcCurve:td,CatmullRomCurve3:nd,CubicBezierCurve:Kh,CubicBezierCurve3:hd,EllipseCurve:Tl,LineCurve:Zh,LineCurve3:ud,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:fd,SplineCurve:Qh});class dd extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){const l=c[h];i&&i.equals(l)||(t.push(l),i=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new nl[s.type]().fromJSON(s))}return this}}class Pc extends dd{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Zh(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Jh(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Kh(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Qh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+h,t+l,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){const h=new Tl(e,t,i,s,r,a,o,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fa extends Pc{constructor(e){super(e),this.uuid=_s(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Pc().fromJSON(s))}return this}}function pd(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=jh(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(i&&(r=yd(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let l=o,u=c;for(let f=t;f<s;f+=t){const d=n[f],p=n[f+1];d<o&&(o=d),p<c&&(c=p),d>l&&(l=d),p>u&&(u=p)}h=Math.max(l-o,u-c),h=h!==0?32767/h:0}return er(r,a,t,o,c,h,0),a}function jh(n,e,t,i,s){let r;if(s===Pd(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Lc(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Lc(a/i|0,n[a],n[a+1],r);return r&&ps(r,r.next)&&(nr(r),r=r.next),r}function Bi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ps(t,t.next)||At(t.prev,t,t.next)===0)){if(nr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function er(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Ed(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,h=n.next;if(r?gd(n,i,s,r):md(n)){e.push(c.i,n.i,h.i),nr(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=xd(Bi(n),e),er(n,e,t,i,s,r,2)):a===2&&_d(n,e,t,i,s,r):er(Bi(n),e,t,i,s,r,1);break}}}function md(n){const e=n.prev,t=n,i=n.next;if(At(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,h=i.y,l=Math.min(s,r,a),u=Math.min(o,c,h),f=Math.max(s,r,a),d=Math.max(o,c,h);let p=i.next;for(;p!==e;){if(p.x>=l&&p.x<=f&&p.y>=u&&p.y<=d&&Os(s,o,r,c,a,h,p.x,p.y)&&At(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gd(n,e,t,i){const s=n.prev,r=n,a=n.next;if(At(s,r,a)>=0)return!1;const o=s.x,c=r.x,h=a.x,l=s.y,u=r.y,f=a.y,d=Math.min(o,c,h),p=Math.min(l,u,f),x=Math.max(o,c,h),g=Math.max(l,u,f),m=il(d,p,e,t,i),b=il(x,g,e,t,i);let A=n.prevZ,S=n.nextZ;for(;A&&A.z>=m&&S&&S.z<=b;){if(A.x>=d&&A.x<=x&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&Os(o,l,c,u,h,f,A.x,A.y)&&At(A.prev,A,A.next)>=0||(A=A.prevZ,S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==a&&Os(o,l,c,u,h,f,S.x,S.y)&&At(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;A&&A.z>=m;){if(A.x>=d&&A.x<=x&&A.y>=p&&A.y<=g&&A!==s&&A!==a&&Os(o,l,c,u,h,f,A.x,A.y)&&At(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==a&&Os(o,l,c,u,h,f,S.x,S.y)&&At(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function xd(n,e){let t=n;do{const i=t.prev,s=t.next.next;!ps(i,s)&&tu(i,t,t.next,s)&&tr(i,s)&&tr(s,i)&&(e.push(i.i,t.i,s.i),nr(t),nr(t.next),t=n=s),t=t.next}while(t!==n);return Bi(t)}function _d(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ad(a,o)){let c=nu(a,o);a=Bi(a,a.next),c=Bi(c,c.next),er(a,e,t,i,s,r,0),er(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function yd(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,h=jh(n,o,c,i,!1);h===h.next&&(h.steiner=!0),s.push(Td(h))}s.sort(vd);for(let r=0;r<s.length;r++)t=Sd(s[r],t);return t}function vd(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Sd(n,e){const t=bd(n,e);if(!t)return e;const i=nu(t,n);return Bi(i,i.next),Bi(t,t.next)}function bd(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(ps(n,t))return t;do{if(ps(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,h=a.y;let l=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&eu(s<h?i:r,s,c,h,s<h?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);tr(t,n)&&(u<l||u===l&&(t.x>a.x||t.x===a.x&&Md(a,t)))&&(a=t,l=u)}t=t.next}while(t!==o);return a}function Md(n,e){return At(n.prev,n,e.prev)<0&&At(e.next,n,n.next)<0}function Ed(n,e,t,i){let s=n;do s.z===0&&(s.z=il(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wd(s)}function wd(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let h=0;h<t&&(o++,a=a.nextZ,!!a);h++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function il(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Td(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function eu(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Os(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&eu(n,e,t,i,s,r,a,o)}function Ad(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Rd(n,e)&&(tr(n,e)&&tr(e,n)&&Cd(n,e)&&(At(n.prev,n,e.prev)||At(n,e.prev,e))||ps(n,e)&&At(n.prev,n,n.next)>0&&At(e.prev,e,e.next)>0)}function At(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ps(n,e){return n.x===e.x&&n.y===e.y}function tu(n,e,t,i){const s=Ur(At(n,e,t)),r=Ur(At(n,e,i)),a=Ur(At(t,i,n)),o=Ur(At(t,i,e));return!!(s!==r&&a!==o||s===0&&Nr(n,t,e)||r===0&&Nr(n,i,e)||a===0&&Nr(t,n,i)||o===0&&Nr(t,e,i))}function Nr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ur(n){return n>0?1:n<0?-1:0}function Rd(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&tu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function tr(n,e){return At(n.prev,n,n.next)<0?At(n,e,n.next)>=0&&At(n,n.prev,e)>=0:At(n,e,n.prev)<0||At(n,n.next,e)<0}function Cd(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function nu(n,e){const t=sl(n.i,n.x,n.y),i=sl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Lc(n,e,t,i){const s=sl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pd(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Ld{static triangulate(e,t,i=2){return pd(e,t,i)}}class ei{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ei.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Dc(e),Ic(i,e);let a=e.length;t.forEach(Dc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Ic(i,t[c]);const o=Ld.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Dc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ic(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Rl extends Pt{constructor(e=new fa([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const h=e[o];a(h)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){const c=[],h=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Dd;let A,S=!1,w,T,R,v;if(m){A=m.getSpacedPoints(l),S=!0,f=!1;const se=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(l,se),T=new O,R=new O,v=new O}f||(g=0,d=0,p=0,x=0);const E=o.extractPoints(h);let D=E.shape;const U=E.holes;if(!ei.isClockWise(D)){D=D.reverse();for(let se=0,oe=U.length;se<oe;se++){const le=U[se];ei.isClockWise(le)&&(U[se]=le.reverse())}}function L(se){const le=10000000000000001e-36;let ce=se[0];for(let fe=1;fe<=se.length;fe++){const Be=fe%se.length,ke=se[Be],We=ke.x-ce.x,Ye=ke.y-ce.y,F=We*We+Ye*Ye,ut=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(ce.x),Math.abs(ce.y)),nt=le*ut*ut;if(F<=nt){se.splice(Be,1),fe--;continue}ce=ke}}L(D),U.forEach(L);const I=U.length,N=D;for(let se=0;se<I;se++){const oe=U[se];D=D.concat(oe)}function G(se,oe,le){return oe||ot("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(oe,le)}const H=D.length;function j(se,oe,le){let ce,fe,Be;const ke=se.x-oe.x,We=se.y-oe.y,Ye=le.x-se.x,F=le.y-se.y,ut=ke*ke+We*We,nt=ke*F-We*Ye;if(Math.abs(nt)>Number.EPSILON){const C=Math.sqrt(ut),y=Math.sqrt(Ye*Ye+F*F),V=oe.x-We/C,q=oe.y+ke/C,K=le.x-F/y,he=le.y+Ye/y,ue=((K-V)*F-(he-q)*Ye)/(ke*F-We*Ye);ce=V+ke*ue-se.x,fe=q+We*ue-se.y;const J=ce*ce+fe*fe;if(J<=2)return new ae(ce,fe);Be=Math.sqrt(J/2)}else{let C=!1;ke>Number.EPSILON?Ye>Number.EPSILON&&(C=!0):ke<-Number.EPSILON?Ye<-Number.EPSILON&&(C=!0):Math.sign(We)===Math.sign(F)&&(C=!0),C?(ce=-We,fe=ke,Be=Math.sqrt(ut)):(ce=ke,fe=We,Be=Math.sqrt(ut/2))}return new ae(ce/Be,fe/Be)}const Y=[];for(let se=0,oe=N.length,le=oe-1,ce=se+1;se<oe;se++,le++,ce++)le===oe&&(le=0),ce===oe&&(ce=0),Y[se]=j(N[se],N[le],N[ce]);const Z=[];let ee,Re=Y.concat();for(let se=0,oe=I;se<oe;se++){const le=U[se];ee=[];for(let ce=0,fe=le.length,Be=fe-1,ke=ce+1;ce<fe;ce++,Be++,ke++)Be===fe&&(Be=0),ke===fe&&(ke=0),ee[ce]=j(le[ce],le[Be],le[ke]);Z.push(ee),Re=Re.concat(ee)}let Me;if(g===0)Me=ei.triangulateShape(N,U);else{const se=[],oe=[];for(let le=0;le<g;le++){const ce=le/g,fe=d*Math.cos(ce*Math.PI/2),Be=p*Math.sin(ce*Math.PI/2)+x;for(let ke=0,We=N.length;ke<We;ke++){const Ye=G(N[ke],Y[ke],Be);ye(Ye.x,Ye.y,-fe),ce===0&&se.push(Ye)}for(let ke=0,We=I;ke<We;ke++){const Ye=U[ke];ee=Z[ke];const F=[];for(let ut=0,nt=Ye.length;ut<nt;ut++){const C=G(Ye[ut],ee[ut],Be);ye(C.x,C.y,-fe),ce===0&&F.push(C)}ce===0&&oe.push(F)}}Me=ei.triangulateShape(se,oe)}const at=Me.length,tt=p+x;for(let se=0;se<H;se++){const oe=f?G(D[se],Re[se],tt):D[se];S?(R.copy(w.normals[0]).multiplyScalar(oe.x),T.copy(w.binormals[0]).multiplyScalar(oe.y),v.copy(A[0]).add(R).add(T),ye(v.x,v.y,v.z)):ye(oe.x,oe.y,0)}for(let se=1;se<=l;se++)for(let oe=0;oe<H;oe++){const le=f?G(D[oe],Re[oe],tt):D[oe];S?(R.copy(w.normals[se]).multiplyScalar(le.x),T.copy(w.binormals[se]).multiplyScalar(le.y),v.copy(A[se]).add(R).add(T),ye(v.x,v.y,v.z)):ye(le.x,le.y,u/l*se)}for(let se=g-1;se>=0;se--){const oe=se/g,le=d*Math.cos(oe*Math.PI/2),ce=p*Math.sin(oe*Math.PI/2)+x;for(let fe=0,Be=N.length;fe<Be;fe++){const ke=G(N[fe],Y[fe],ce);ye(ke.x,ke.y,u+le)}for(let fe=0,Be=U.length;fe<Be;fe++){const ke=U[fe];ee=Z[fe];for(let We=0,Ye=ke.length;We<Ye;We++){const F=G(ke[We],ee[We],ce);S?ye(F.x,F.y+A[l-1].y,A[l-1].x+le):ye(F.x,F.y,u+le)}}}lt(),Q();function lt(){const se=s.length/3;if(f){let oe=0,le=H*oe;for(let ce=0;ce<at;ce++){const fe=Me[ce];He(fe[2]+le,fe[1]+le,fe[0]+le)}oe=l+g*2,le=H*oe;for(let ce=0;ce<at;ce++){const fe=Me[ce];He(fe[0]+le,fe[1]+le,fe[2]+le)}}else{for(let oe=0;oe<at;oe++){const le=Me[oe];He(le[2],le[1],le[0])}for(let oe=0;oe<at;oe++){const le=Me[oe];He(le[0]+H*l,le[1]+H*l,le[2]+H*l)}}i.addGroup(se,s.length/3-se,0)}function Q(){const se=s.length/3;let oe=0;ie(N,oe),oe+=N.length;for(let le=0,ce=U.length;le<ce;le++){const fe=U[le];ie(fe,oe),oe+=fe.length}i.addGroup(se,s.length/3-se,1)}function ie(se,oe){let le=se.length;for(;--le>=0;){const ce=le;let fe=le-1;fe<0&&(fe=se.length-1);for(let Be=0,ke=l+g*2;Be<ke;Be++){const We=H*Be,Ye=H*(Be+1),F=oe+ce+We,ut=oe+fe+We,nt=oe+fe+Ye,C=oe+ce+Ye;Ee(F,ut,nt,C)}}}function ye(se,oe,le){c.push(se),c.push(oe),c.push(le)}function He(se,oe,le){Ve(se),Ve(oe),Ve(le);const ce=s.length/3,fe=b.generateTopUV(i,s,ce-3,ce-2,ce-1);pt(fe[0]),pt(fe[1]),pt(fe[2])}function Ee(se,oe,le,ce){Ve(se),Ve(oe),Ve(ce),Ve(oe),Ve(le),Ve(ce);const fe=s.length/3,Be=b.generateSideWallUV(i,s,fe-6,fe-3,fe-2,fe-1);pt(Be[0]),pt(Be[1]),pt(Be[3]),pt(Be[1]),pt(Be[2]),pt(Be[3])}function Ve(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function pt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Id(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nl[s.type]().fromJSON(s)),new Rl(i,e.options)}}const Dd={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],h=e[s*3],l=e[s*3+1];return[new ae(r,a),new ae(o,c),new ae(h,l)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[i*3],l=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-l)<Math.abs(a-h)?[new ae(a,1-c),new ae(h,1-u),new ae(f,1-p),new ae(x,1-m)]:[new ae(o,1-c),new ae(l,1-u),new ae(d,1-p),new ae(g,1-m)]}};function Id(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class gi extends ha{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gi(e.radius,e.detail)}}class Gi extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),h=o+1,l=c+1,u=e/o,f=t/c,d=[],p=[],x=[],g=[];for(let m=0;m<l;m++){const b=m*f-a;for(let A=0;A<h;A++){const S=A*u-r;p.push(S,-b,0),x.push(0,0,1),g.push(A/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<o;b++){const A=b+h*m,S=b+h*(m+1),w=b+1+h*(m+1),T=b+1+h*m;d.push(A,S,T),d.push(S,w,T)}this.setIndex(d),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cl extends Pt{constructor(e=new fa([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let l=0;l<e.length;l++)h(e[l]),this.addGroup(o,c,l),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(a,2));function h(l){const u=s.length/3,f=l.extractPoints(t);let d=f.shape;const p=f.holes;ei.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){const b=p[g];ei.isClockWise(b)===!0&&(p[g]=b.reverse())}const x=ei.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){const b=p[g];d=d.concat(b)}for(let g=0,m=d.length;g<m;g++){const b=d[g];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,m=x.length;g<m;g++){const b=x[g],A=b[0]+u,S=b[1]+u,w=b[2]+u;i.push(A,S,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Nd(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new Cl(i,e.curveSegments)}}function Nd(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Ss extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let h=0;const l=[],u=new O,f=new O,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){const b=[],A=m/i,S=a+A*o,w=e*Math.cos(S),T=Math.sqrt(e*e-w*w);let R=0;m===0&&a===0?R=.5/t:m===i&&c===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){const E=v/t,D=s+E*r;u.x=-T*Math.cos(D),u.y=w,u.z=T*Math.sin(D),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+R,1-A),b.push(h++)}l.push(b)}for(let m=0;m<i;m++)for(let b=0;b<t;b++){const A=l[m][b+1],S=l[m][b],w=l[m+1][b],T=l[m+1][b+1];(m!==0||a>0)&&d.push(A,S,T),(m!==i-1||c<Math.PI)&&d.push(S,w,T)}this.setIndex(d),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ni extends Pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],h=[],l=[],u=[],f=new O,d=new O,p=new O;for(let x=0;x<=i;x++){const g=a+x/i*o;for(let m=0;m<=s;m++){const b=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(b),d.y=(e+t*Math.cos(g))*Math.sin(b),d.z=t*Math.sin(g),h.push(d.x,d.y,d.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),p.subVectors(d,f).normalize(),l.push(p.x,p.y,p.z),u.push(m/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){const m=(s+1)*x+g-1,b=(s+1)*(x-1)+g-1,A=(s+1)*(x-1)+g,S=(s+1)*x+g;c.push(m,b,S),c.push(b,A,S)}this.setIndex(c),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Nc(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Nc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=ms(n[t]);for(const s in i)e[s]=i[s]}return e}function Nc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ud(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Od={clone:ms,merge:tn};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Ud(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bd extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dt extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zd extends Dt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Hd extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gd extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Uc(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Uc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Uc(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Vd{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){const u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=h.length;u<f;u+=2){const d=h[u],p=h[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wd=new Vd;class Pl{constructor(e){this.manager=e!==void 0?e:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ns=new WeakMap;class Xd extends Pl{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=eo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ns.get(a);u===void 0&&(u=[],ns.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Qs("img");function c(){l(),t&&t(this);const u=ns.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ns.delete(this),r.manager.itemEnd(e)}function h(u){l(),s&&s(u),eo.remove(`image:${e}`);const f=ns.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onError&&p.onError(u)}ns.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),eo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class qd extends Pl{constructor(e){super(e)}load(e,t,i,s){const r=new Xt,a=new Xd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class da extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Yd extends da{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const to=new rt,Oc=new O,Fc=new O;class su{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(to,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===Js||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(to)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Or=new O,Fr=new Dn,Fn=new O;class ru extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Or,Fr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Fr,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Or,Fr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Fr,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new O,kc=new ae,Bc=new ae;class gn extends ru{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,kc,Bc),t.subVectors(Bc,kc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/h,s*=a.width/c,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $d extends su{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kd extends da{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $d}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class pa extends ru{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zd extends su{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jd extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Zd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qd extends da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const is=-90,ss=1;class jd extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(is,ss,e,t);s.layers=this.layers,this.add(s);const r=new gn(is,ss,e,t);r.layers=this.layers,this.add(r);const a=new gn(is,ss,e,t);a.layers=this.layers,this.add(a);const o=new gn(is,ss,e,t);o.layers=this.layers,this.add(o);const c=new gn(is,ss,e,t);c.layers=this.layers,this.add(c);const h=new gn(is,ss,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class ep extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zc=new rt;class tp{constructor(e,t,i=0,s=1/0){this.ray=new ca(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(e,t=!0,i=[]){return rl(e,this,i,t),i.sort(Hc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)rl(e[s],this,i,t);return i.sort(Hc),i}}function Hc(n,e){return n.distance-e.distance}function rl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)rl(r[a],e,t,!0)}}class Gc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Gl=class Gl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Gl.prototype.isMatrix2=!0;let Vc=Gl;class np extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Wc(n,e,t,i){const s=ip(i);switch(t){case kh:return n*e;case gl:return n*e/s.components*s.byteLength;case xl:return n*e/s.components*s.byteLength;case ki:return n*e*2/s.components*s.byteLength;case _l:return n*e*2/s.components*s.byteLength;case Bh:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case yl:return n*e*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wo:case Ao:return Math.max(n,16)*Math.max(e,8)/4;case Eo:case To:return Math.max(n,8)*Math.max(e,8)/2;case Ro:case Co:case Lo:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Po:case Jr:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $o:case Ko:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jo:case Qo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qr:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ip(n){switch(n){case xn:case Nh:return{byteLength:1,components:1};case Ks:case Uh:case qn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Xn:case dl:case Pn:return{byteLength:4,components:1};case Oh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function au(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function sp(n){const e=new WeakMap;function t(o,c){const h=o.array,l=o.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,h,l),o.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,h){const l=c.array,u=c.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,l);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const x=u[d];n.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`uniform sampler2D dfgLUT;
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
}`,s0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,l0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:rp,alphahash_pars_fragment:ap,alphamap_fragment:op,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:fp,batching_pars_vertex:dp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:xp,iridescence_fragment:_p,bumpmap_pars_fragment:yp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:bp,clipping_planes_vertex:Mp,color_fragment:Ep,color_pars_fragment:wp,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Np,colorspace_fragment:Up,colorspace_pars_fragment:Op,envmap_fragment:Fp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Bp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Jp,envmap_vertex:Hp,fog_vertex:Gp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Kp,lights_pars_begin:Zp,lights_toon_fragment:Qp,lights_toon_pars_fragment:jp,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:a0,lightprobes_pars_fragment:o0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:f0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:x0,morphinstance_vertex:_0,morphcolor_vertex:y0,morphnormal_vertex:v0,morphtarget_pars_vertex:S0,morphtarget_vertex:b0,normal_fragment_begin:M0,normal_fragment_maps:E0,normal_pars_fragment:w0,normal_pars_vertex:T0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:D0,opaque_fragment:I0,packing:N0,premultiplied_alpha_fragment:U0,project_vertex:O0,dithering_fragment:F0,dithering_pars_fragment:k0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:G0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:$0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:j0,transmission_pars_fragment:em,uv_pars_fragment:tm,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:fm,distance_vert:dm,distance_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:_m,meshbasic_vert:ym,meshbasic_frag:vm,meshlambert_vert:Sm,meshlambert_frag:bm,meshmatcap_vert:Mm,meshmatcap_frag:Em,meshnormal_vert:wm,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Im,points_frag:Nm,shadow_vert:Um,shadow_frag:Om,sprite_vert:Fm,sprite_frag:km},_e={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Bn={basic:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Xe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:tn([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:tn([_e.lights,_e.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Bn.physical={uniforms:tn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const kr={r:0,b:0,g:0},Bm=new rt,ou=new $e;ou.set(-1,0,0,0,1,0,0,0,1);function zm(n,e,t,i,s,r){const a=new Xe(0);let o=s===!0?0:1,c,h,l=null,u=0,f=null;function d(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){const S=b.backgroundBlurriness>0;A=e.get(A,S)}return A}function p(b){let A=!1;const S=d(b);S===null?g(a,o):S&&S.isColor&&(g(S,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,A){const S=d(A);S&&(S.isCubeTexture||S.mapping===la)?(h===void 0&&(h=new Gt(new Ei(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ms(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ou),h.material.toneMapped=st.getTransfer(S.colorSpace)!==gt,(l!==S||u!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,l=S,u=S.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Gt(new Gi(2,2),new Nn({name:"BackgroundMaterial",uniforms:ms(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(l!==S||u!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,l=S,u=S.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,A){b.getRGB(kr,iu(n)),t.buffers.color.setClear(kr.r,kr.g,kr.b,A,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:p,addToRenderList:x,dispose:m}}function Hm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(U,_,L,I,N){let G=!1;const H=u(U,I,L,_);r!==H&&(r=H,h(r.object)),G=d(U,I,L,N),G&&p(U,I,L,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(U,_,L,I),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function h(U){return n.bindVertexArray(U)}function l(U){return n.deleteVertexArray(U)}function u(U,_,L,I){const N=I.wireframe===!0;let G=i[_.id];G===void 0&&(G={},i[_.id]=G);const H=U.isInstancedMesh===!0?U.id:0;let j=G[H];j===void 0&&(j={},G[H]=j);let Y=j[L.id];Y===void 0&&(Y={},j[L.id]=Y);let Z=Y[N];return Z===void 0&&(Z=f(c()),Y[N]=Z),Z}function f(U){const _=[],L=[],I=[];for(let N=0;N<t;N++)_[N]=0,L[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:L,attributeDivisors:I,object:U,attributes:{},index:null}}function d(U,_,L,I){const N=r.attributes,G=_.attributes;let H=0;const j=L.getAttributes();for(const Y in j)if(j[Y].location>=0){const ee=N[Y];let Re=G[Y];if(Re===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(Re=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(Re=U.instanceColor)),ee===void 0||ee.attribute!==Re||Re&&ee.data!==Re.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function p(U,_,L,I){const N={},G=_.attributes;let H=0;const j=L.getAttributes();for(const Y in j)if(j[Y].location>=0){let ee=G[Y];ee===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));const Re={};Re.attribute=ee,ee&&ee.data&&(Re.data=ee.data),N[Y]=Re,H++}r.attributes=N,r.attributesNum=H,r.index=I}function x(){const U=r.newAttributes;for(let _=0,L=U.length;_<L;_++)U[_]=0}function g(U){m(U,0)}function m(U,_){const L=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;L[U]=1,I[U]===0&&(n.enableVertexAttribArray(U),I[U]=1),N[U]!==_&&(n.vertexAttribDivisor(U,_),N[U]=_)}function b(){const U=r.newAttributes,_=r.enabledAttributes;for(let L=0,I=_.length;L<I;L++)_[L]!==U[L]&&(n.disableVertexAttribArray(L),_[L]=0)}function A(U,_,L,I,N,G,H){H===!0?n.vertexAttribIPointer(U,_,L,N,G):n.vertexAttribPointer(U,_,L,I,N,G)}function S(U,_,L,I){x();const N=I.attributes,G=L.getAttributes(),H=_.defaultAttributeValues;for(const j in G){const Y=G[j];if(Y.location>=0){let Z=N[j];if(Z===void 0&&(j==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),j==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),Z!==void 0){const ee=Z.normalized,Re=Z.itemSize,Me=e.get(Z);if(Me===void 0)continue;const at=Me.buffer,tt=Me.type,lt=Me.bytesPerElement,Q=tt===n.INT||tt===n.UNSIGNED_INT||Z.gpuType===dl;if(Z.isInterleavedBufferAttribute){const ie=Z.data,ye=ie.stride,He=Z.offset;if(ie.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Y.locationSize;Ee++)m(Y.location+Ee,ie.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)g(Y.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,at);for(let Ee=0;Ee<Y.locationSize;Ee++)A(Y.location+Ee,Re/Y.locationSize,tt,ee,ye*lt,(He+Re/Y.locationSize*Ee)*lt,Q)}else{if(Z.isInstancedBufferAttribute){for(let ie=0;ie<Y.locationSize;ie++)m(Y.location+ie,Z.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ie=0;ie<Y.locationSize;ie++)g(Y.location+ie);n.bindBuffer(n.ARRAY_BUFFER,at);for(let ie=0;ie<Y.locationSize;ie++)A(Y.location+ie,Re/Y.locationSize,tt,ee,Re*lt,Re/Y.locationSize*ie*lt,Q)}}else if(H!==void 0){const ee=H[j];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(Y.location,ee);break;case 3:n.vertexAttrib3fv(Y.location,ee);break;case 4:n.vertexAttrib4fv(Y.location,ee);break;default:n.vertexAttrib1fv(Y.location,ee)}}}}b()}function w(){E();for(const U in i){const _=i[U];for(const L in _){const I=_[L];for(const N in I){const G=I[N];for(const H in G)l(G[H].object),delete G[H];delete I[N]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const _=i[U.id];for(const L in _){const I=_[L];for(const N in I){const G=I[N];for(const H in G)l(G[H].object),delete G[H];delete I[N]}}delete i[U.id]}function R(U){for(const _ in i){const L=i[_];for(const I in L){const N=L[I];if(N[U.id]===void 0)continue;const G=N[U.id];for(const H in G)l(G[H].object),delete G[H];delete N[U.id]}}}function v(U){for(const _ in i){const L=i[_],I=U.isInstancedMesh===!0?U.id:0,N=L[I];if(N!==void 0){for(const G in N){const H=N[G];for(const j in H)l(H[j].object),delete H[j];delete N[G]}delete L[I],Object.keys(L).length===0&&delete i[_]}}}function E(){D(),a=!0,r!==s&&(r=s,h(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Gm(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,l){l!==0&&(n.drawArraysInstanced(i,c,h,l),t.update(h,i,l))}function o(c,h,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,l);let f=0;for(let d=0;d<l;d++)f+=h[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xn&&R!==Pn&&!v&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const l=c(h);l!==h&&(Ge("WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:S,maxSamples:w,samples:T}}function Wm(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new An,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=l(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?l(null):h();else{const b=r?0:i,A=b*4;let S=m.clippingState||null;c.value=S,S=l(p,f,A,d);for(let w=0;w!==A;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(u,f,d,p){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,p!==!0||g===null){const m=d+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let A=0,S=d;A!==x;++A,S+=4)a.copy(u[A]).applyMatrix4(b,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const ls=4,Xm=6,qm=20,Ym=256,Ds=new pa,Xc=new Xe;let no=null,io=0,so=0,ro=!1;const $m=new O,Pi=new O;class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=$m}=r;no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(no,io,so),this._renderer.xr.enabled=ro,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:qn,format:Ln,colorSpace:jr,depthBuffer:!1},s=Yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Km(r)),this._blurMaterial=Jm(r,e,t),this._ggxMaterial=Zm(r,e,t)}return s}_compileMaterial(e){const t=new Gt(new Pt,e);this._renderer.compile(t,Ds)}_sceneToCubeUV(e,t,i,s,r){const c=new gn(90,1,t,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xc),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new Ei,new ar({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let m=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,m=!0):(g.color.copy(Xc),m=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[A],r.y,r.z)):S===1?(c.up.set(0,0,h[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[A],r.z)):(c.up.set(0,h[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[A]));const w=this._cubeSize;rs(s,S*w,A>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(x,c),u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Fi||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;rs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ds)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,h=i/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(h*h-l*l),f=h*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-ls?i-p+ls:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,rs(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,Ds),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,rs(e,g,m,3*x,2*x),s.setRenderTarget(e),s.render(o,Ds)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const h=o.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;const l=this._sizeLods[s],u=3*l*(s>this._lodMax-ls?s-this._lodMax+ls:0),f=4*(this._cubeSize-l);rs(t,u,f,3*l,2*l),a.setRenderTarget(t),a.render(c,Ds)}}function Km(n){const e=[],t=[];let i=n;const s=n-ls+1+Xm;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,h=1+o,l=[c,c,h,c,h,h,c,c,h,h,c,h],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let m=0;m<u;m++){const b=m%3*2/3-1,A=m>2?0:-1,S=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];p.set(S,d*f*m);for(let w=0;w<f;w++){const T=l[w*2]*2-1,R=l[w*2+1]*2-1;m===0?Pi.set(1,R,T):m===1?Pi.set(-T,1,-R):m===2?Pi.set(-T,R,1):m===3?Pi.set(-1,R,-T):m===4?Pi.set(-T,-1,R):Pi.set(T,R,-1),Pi.toArray(x,(m*f+w)*d)}}const g=new Pt;g.setAttribute("position",new fn(p,d)),g.setAttribute("outputDirection",new fn(x,d)),t.push(new Gt(g,null)),i>ls&&i--}return{lodMeshes:t,sizeLods:e}}function Yc(n,e,t){const i=new In(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Zm(n,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ym,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ma(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jm(n,e,t){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ma(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $c(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Kc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ma(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class lu extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ni});r.uniforms.tEquirect.value=t;const a=new Gt(s,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=Zt),new jd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Qm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ea||d===wa)if(e.has(f)){const p=e.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new lu(p.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",h),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===Ea||d===wa,x=d===Fi||d===ds;if(p||x){let g=t.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new qc(n)),g=p?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const b=f.image;return p&&b&&b.height>0||x&&b&&c(b)?(i===null&&(i=new qc(n)),g=p?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f,d){return d===Ea?f.mapping=Fi:d===wa&&(f.mapping=ds),f}function c(f){let d=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function jm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&cs("WebGLRenderer: "+i+" extension not supported."),s}}}function eg(n,e,t,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function h(u){const f=[],d=u.index,p=u.attributes.position;let x=0;if(p===void 0)return;if(d!==null){const b=d.array;x=d.version;for(let A=0,S=b.length;A<S;A+=3){const w=b[A+0],T=b[A+1],R=b[A+2];f.push(w,T,T,R,R,w)}}else{const b=p.array;x=p.version;for(let A=0,S=b.length/3-1;A<S;A+=3){const w=A+0,T=A+1,R=A+2;f.push(w,T,T,R,R,w)}}const g=new(p.count>=65535?Wh:Vh)(f,1);g.version=x;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function l(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function tg(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function h(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*a,d),t.update(f,i,d))}function l(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function ng(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ig(n,e,t){const i=new WeakMap,s=new Tt;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let D=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var d=D;f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let w=o.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*T*4*u),v=new Hh(R,w,T,u);v.type=Pn,v.needsUpdate=!0;const E=S*4;for(let U=0;U<u;U++){const _=m[U],L=b[U],I=A[U],N=w*T*4*U;for(let G=0;G<_.count;G++){const H=G*E;p===!0&&(s.fromBufferAttribute(_,G),R[N+H+0]=s.x,R[N+H+1]=s.y,R[N+H+2]=s.z,R[N+H+3]=0),x===!0&&(s.fromBufferAttribute(L,G),R[N+H+4]=s.x,R[N+H+5]=s.y,R[N+H+6]=s.z,R[N+H+7]=0),g===!0&&(s.fromBufferAttribute(I,G),R[N+H+8]=s.x,R[N+H+9]=s.y,R[N+H+10]=s.z,R[N+H+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:v,size:new ae(w,T)},i.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function sg(n,e,t,i,s){let r=new WeakMap;function a(h){const l=s.render.frame,u=h.geometry,f=e.get(h,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==l&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){const d=h.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function o(){r=new WeakMap}function c(h){const l=h.target;l.removeEventListener("dispose",c),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}const rg={[Ah]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ch]:"CINEON_TONE_MAPPING",[fl]:"ACES_FILMIC_TONE_MAPPING",[Lh]:"AGX_TONE_MAPPING",[Dh]:"NEUTRAL_TONE_MAPPING",[Ph]:"CUSTOM_TONE_MAPPING"};function ag(n,e,t,i,s,r){const a=new In(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const h=new Pt;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));const l=new Bd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Gt(h,l),f=new pa(-1,1,1,-1,0,1);let d=null,p=null,x=!1,g,m=null,b=[],A=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),c!==null&&c.setSize(S,w);for(let T=0;T<b.length;T++){const R=b[T];R.setSize&&R.setSize(S,w)}},this.setEffects=function(S){b=S,A=b.length>0&&b[0].isRenderPass===!0;const w=a.width,T=a.height;b.length>0&&o===null&&(o=new In(w,T,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new In(w,T,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){const v=b[R];v.setSize&&v.setSize(w,T)}},this.begin=function(S,w){if(x||S.toneMapping===Vn&&b.length===0)return!1;if(m=w,w!==null){const T=w.width,R=w.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return A===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Vn,!0},this.hasRenderPass=function(){return A},this.end=function(S,w){S.toneMapping=g,x=!0;let T=a,R=o;for(let v=0;v<b.length;v++){const E=b[v];E.enabled!==!1&&(E.render(S,R,T,w),E.needsSwap!==!1&&(T=R,R=R===o?c:o))}if(d!==S.outputColorSpace||p!==S.toneMapping){d=S.outputColorSpace,p=S.toneMapping,l.defines={},st.getTransfer(d)===gt&&(l.defines.SRGB_TRANSFER="");const v=rg[p];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),l.dispose()}}const cu=new Xt,al=new js(1,1),hu=new Hh,uu=new Df,fu=new Yh,Zc=[],Jc=[],Qc=new Float32Array(16),jc=new Float32Array(9),eh=new Float32Array(4);function bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ga(n,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;eh.set(i),n.uniformMatrix2fv(this.addr,!1,eh),Bt(t,i)}}function fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),Bt(t,i)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),Bt(t,i)}}function pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function _g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function bg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(al.compareFunction=t.isReversedDepthBuffer()?Sl:vl,r=al):r=cu,t.setTexture2D(e||r,s)}function Mg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||uu,s)}function Eg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||fu,s)}function wg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hu,s)}function Tg(n){switch(n){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return fg;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return yg;case 36295:return vg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return wg}}function Ag(n,e){n.uniform1fv(this.addr,e)}function Rg(n,e){const t=bs(e,this.size,2);n.uniform2fv(this.addr,t)}function Cg(n,e){const t=bs(e,this.size,3);n.uniform3fv(this.addr,t)}function Pg(n,e){const t=bs(e,this.size,4);n.uniform4fv(this.addr,t)}function Lg(n,e){const t=bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dg(n,e){const t=bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ig(n,e){const t=bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ng(n,e){n.uniform1iv(this.addr,e)}function Ug(n,e){n.uniform2iv(this.addr,e)}function Og(n,e){n.uniform3iv(this.addr,e)}function Fg(n,e){n.uniform4iv(this.addr,e)}function kg(n,e){n.uniform1uiv(this.addr,e)}function Bg(n,e){n.uniform2uiv(this.addr,e)}function zg(n,e){n.uniform3uiv(this.addr,e)}function Hg(n,e){n.uniform4uiv(this.addr,e)}function Gg(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=al:a=cu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Vg(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||uu,r[a])}function Wg(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||fu,r[a])}function Xg(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hu,r[a])}function qg(n){switch(n){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ig;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return Fg;case 5125:return kg;case 36294:return Bg;case 36295:return zg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}}class $g{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}}class Kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function th(n,e){n.seq.push(e),n.map[e.id]=e}function Zg(n,e,t){const i=n.name,s=i.length;for(ao.lastIndex=0;;){const r=ao.exec(i),a=ao.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){th(t,h===void 0?new Yg(o,n,e):new $g(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Kg(o),th(t,u)),t=u}}}class Yr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Zg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function nh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Jg=37297;let Qg=0;function jg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ih=new $e;function ex(n){st._getMatrix(ih,st.workingColorSpace,n);const e=`mat3( ${ih.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jg(n.getShaderSource(e),o)}else return r}function tx(n,e){const t=ex(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nx={[Ah]:"Linear",[Rh]:"Reinhard",[Ch]:"Cineon",[fl]:"ACESFilmic",[Lh]:"AgX",[Dh]:"Neutral",[Ph]:"Custom"};function ix(n,e){const t=nx[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new O;function sx(){st.getLuminanceCoefficients(Br);const n=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function ax(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ox(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Fs(n){return n!==""}function rh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(n){return n.replace(lx,hx)}const cx=new Map;function hx(n,e){let t=je[e];if(t===void 0){const i=cx.get(e);if(i!==void 0)t=je[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ol(t)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(n){return n.replace(ux,fx)}function fx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const dx={[zs]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function px(n){return dx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mx={[Fi]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function gx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":mx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const xx={[ds]:"ENVMAP_MODE_REFRACTION"};function _x(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yx={[Th]:"ENVMAP_BLENDING_MULTIPLY",[lf]:"ENVMAP_BLENDING_MIX",[cf]:"ENVMAP_BLENDING_ADD"};function vx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yx[n.combine]||"ENVMAP_BLENDING_NONE"}function Sx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bx(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=px(t),h=gx(t),l=_x(t),u=vx(t),f=Sx(t),d=rx(t),p=ax(r),x=s.createProgram();let g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(g=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?je.tonemapping_pars_fragment:"",t.toneMapping!==Vn?ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=ol(a),a=rh(a,t),a=ah(a,t),o=ol(o),o=rh(o,t),o=ah(o,t),a=oh(a),o=oh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=b+g+a,S=b+m+o,w=nh(s,s.VERTEX_SHADER,A),T=nh(s,s.FRAGMENT_SHADER,S);s.attachShader(x,w),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(U){if(n.debug.checkShaderErrors){const _=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(T)||"",N=_.trim(),G=L.trim(),H=I.trim();let j=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,T);else{const Z=sh(s,w,"vertex"),ee=sh(s,T,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+Z+`
`+ee)}else N!==""?Ge("WebGLProgram: Program Info Log:",N):(G===""||H==="")&&(Y=!1);Y&&(U.diagnostics={runnable:j,programLog:N,vertexShader:{log:G,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(w),s.deleteShader(T),v=new Yr(s,x),E=ox(s,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,Jg)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}let Mx=0;class Ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wx(e),t.set(e,i)),i}}class wx{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}}function Tx(n){return n===ki||n===Jr||n===Qr}function Ax(n,e,t,i,s,r){const a=new Ml,o=new Ex,c=new Set,h=[],l=new Map,u=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function x(v,E,D,U,_,L){const I=U.fog,N=_.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||G,H),Y=j&&j.mapping===la?j.image.height:null,Z=d[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Re=ee!==void 0?ee.length:0;let Me=0;N.morphAttributes.position!==void 0&&(Me=1),N.morphAttributes.normal!==void 0&&(Me=2),N.morphAttributes.color!==void 0&&(Me=3);let at,tt,lt,Q;if(Z){const bt=Bn[Z];at=bt.vertexShader,tt=bt.fragmentShader}else{at=v.vertexShader,tt=v.fragmentShader;const bt=o.getVertexShaderStage(v),ft=o.getFragmentShaderStage(v);o.update(v,bt,ft),lt=bt.id,Q=ft.id}const ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),He=_.isInstancedMesh===!0,Ee=_.isBatchedMesh===!0,Ve=!!v.map,pt=!!v.matcap,se=!!j,oe=!!v.aoMap,le=!!v.lightMap,ce=!!v.bumpMap&&v.wireframe===!1,fe=!!v.normalMap,Be=!!v.displacementMap,ke=!!v.emissiveMap,We=!!v.metalnessMap,Ye=!!v.roughnessMap,F=v.anisotropy>0,ut=v.clearcoat>0,nt=v.dispersion>0,C=v.retroreflectivity>0,y=v.iridescence>0,V=v.sheen>0,q=v.transmission>0,K=F&&!!v.anisotropyMap,he=ut&&!!v.clearcoatMap,ue=ut&&!!v.clearcoatNormalMap,J=ut&&!!v.clearcoatRoughnessMap,ne=y&&!!v.iridescenceMap,de=y&&!!v.iridescenceThicknessMap,Ue=V&&!!v.sheenColorMap,xe=V&&!!v.sheenRoughnessMap,pe=!!v.specularMap,Oe=!!v.specularColorMap,ze=!!v.specularIntensityMap,Je=q&&!!v.transmissionMap,B=q&&!!v.thicknessMap,me=!!v.gradientMap,te=!!v.alphaMap,ge=v.alphaTest>0,be=!!v.alphaHash,re=!!v.extensions;let Fe=Vn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const Ie={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:tt,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&_._colorsTexture!==null,instancing:He,instancingColor:He&&_.instanceColor!==null,instancingMorph:He&&_.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:pt,envMap:se,envMapMode:se&&j.mapping,envMapCubeUVHeight:Y,aoMap:oe,lightMap:le,bumpMap:ce,normalMap:fe,displacementMap:Be,emissiveMap:ke,normalMapObjectSpace:fe&&v.normalMapType===ff,normalMapTangentSpace:fe&&v.normalMapType===el,packedNormalMap:fe&&v.normalMapType===el&&Tx(v.normalMap.format),metalnessMap:We,roughnessMap:Ye,anisotropy:F,anisotropyMap:K,clearcoat:ut,clearcoatMap:he,clearcoatNormalMap:ue,clearcoatRoughnessMap:J,dispersion:nt,retroreflection:C,iridescence:y,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:V,sheenColorMap:Ue,sheenRoughnessMap:xe,specularMap:pe,specularColorMap:Oe,specularIntensityMap:ze,transmission:q,transmissionMap:Je,thicknessMap:B,gradientMap:me,opaque:v.transparent===!1&&v.blending===Hs&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:ge,alphaHash:be,combine:v.combine,mapUv:Ve&&p(v.map.channel),aoMapUv:oe&&p(v.aoMap.channel),lightMapUv:le&&p(v.lightMap.channel),bumpMapUv:ce&&p(v.bumpMap.channel),normalMapUv:fe&&p(v.normalMap.channel),displacementMapUv:Be&&p(v.displacementMap.channel),emissiveMapUv:ke&&p(v.emissiveMap.channel),metalnessMapUv:We&&p(v.metalnessMap.channel),roughnessMapUv:Ye&&p(v.roughnessMap.channel),anisotropyMapUv:K&&p(v.anisotropyMap.channel),clearcoatMapUv:he&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(v.sheenRoughnessMap.channel),specularMapUv:pe&&p(v.specularMap.channel),specularColorMapUv:Oe&&p(v.specularColorMap.channel),specularIntensityMapUv:ze&&p(v.specularIntensityMap.channel),transmissionMapUv:Je&&p(v.transmissionMap.channel),thicknessMapUv:B&&p(v.thicknessMap.channel),alphaMapUv:te&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(fe||F),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!N.attributes.uv&&(Ve||te),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&fe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:_.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===gt,decodeVideoTextureEmissive:ke&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===gt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)E.push(D),E.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(E,v),b(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){const E=d[v.type];let D;if(E){const U=Bn[E];D=Od.clone(U.uniforms)}else D=v.uniforms;return D}function S(v,E){let D=l.get(E);return D!==void 0?++D.usedTimes:(D=new bx(n,E,v,s),h.push(D),l.set(E,D)),D}function w(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),l.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:R}}function Rx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ch(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,x,g,m){let b=n[e];return b===void 0?(b={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},n[e]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=p,b.materialVariant=a(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=g,b.group=m),e++,b}function c(f,d,p,x,g,m,b){b.reversedDepth===!0&&(g=-g);const A=o(f,d,p,x,g,m);p.transmission>0?i.push(A):p.transparent===!0?s.push(A):t.push(A)}function h(f,d,p,x,g,m){const b=o(f,d,p,x,g,m);p.transmission>0?i.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function l(f,d){t.length>1&&t.sort(f||Cx),i.length>1&&i.sort(d||ch),s.length>1&&s.sort(d||ch)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:h,finish:u,sort:l}}function Px(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new hh,n.set(i,[a])):s>=r.length?(a=new hh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Xe};break;case"SpotLight":t={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Dx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ix=0;function Nx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ux(n){const e=new Lx,t=Dx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);const s=new O,r=new rt,a=new rt;function o(h){let l=0,u=0,f=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,b=0,A=0,S=0,w=0,T=0,R=0,v=0,E=0,D=0;h.sort(Nx);for(let _=0,L=h.length;_<L;_++){const I=h[_],N=I.color,G=I.intensity,H=I.distance;let j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ki?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)l+=N.r*G,u+=N.g*G,f+=N.b*G;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],G);D++}else if(I.isSunLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[p]=ee,i.sunShadowMap[p]=j;const Re=Z.getViewportCount();for(let Me=0;Me<Re;Me++)i.sunShadowMatrix[x+Me]=Z.getMatrix(Me),i.sunShadowCascade[x+Me]=Z._cascadeData[Me];x+=Re,p++}i.sun[d]=Y,d++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=j,i.directionalShadowMatrix[g]=I.shadow.matrix,w++}i.directional[g]=Y,g++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(N).multiplyScalar(G),Y.distance=H,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[b]=Y;const Z=I.shadow;if(I.map&&(i.spotLightMap[v]=I.map,v++,Z.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[b]=Z.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.spotShadow[b]=ee,i.spotShadowMap[b]=j,R++}b++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(N).multiplyScalar(G),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[A]=Y,A++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const Z=I.shadow,ee=t.get(I);ee.shadowIntensity=Z.intensity,ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=I.shadow.matrix,T++}i.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(G),Y.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[S]=Y,S++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=f;const U=i.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==b||U.rectAreaLength!==A||U.hemiLength!==S||U.numSunShadows!==p||U.numDirectionalShadows!==w||U.numPointShadows!==T||U.numSpotShadows!==R||U.numSpotMaps!==v||U.numLightProbes!==D)&&(i.sun.length=d,i.directional.length=g,i.spot.length=b,i.rectArea.length=A,i.point.length=m,i.hemi.length=S,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-E,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=D,U.sunLength=d,U.directionalLength=g,U.pointLength=m,U.spotLength=b,U.rectAreaLength=A,U.hemiLength=S,U.numSunShadows=p,U.numDirectionalShadows=w,U.numPointShadows=T,U.numSpotShadows=R,U.numSpotMaps=v,U.numLightProbes=D,i.version=Ix++)}function c(h,l){let u=0,f=0,d=0,p=0,x=0,g=0;const m=l.matrixWorldInverse;for(let b=0,A=h.length;b<A;b++){const S=h[b];if(S.isSunLight){const w=i.sun[u];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),u++}else if(S.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(S.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:i}}function uh(n){const e=new Ux(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function c(f){s.push(f)}function h(){e.setup(t)}function l(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ox(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new uh(n),e.set(s,[o])):r>=a.length?(o=new uh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kx=`uniform sampler2D shadow_pass;
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
}`,Bx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],zx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],fh=new rt,Is=new O,oo=new O;function Hx(n,e,t){let i=new wl;const s=new ae,r=new ae,a=new Tt,o=new Hd,c=new Gd,h={},l=t.maxTextureSize,u={[Oi]:sn,[sn]:Oi,[Rn]:Rn},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Fx,fragmentShader:kx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Pt;p.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let m=this.type;this.render=function(T,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Gu&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);const E=n.getRenderTarget(),D=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),_=n.state;_.setBlending(ni),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);const L=m!==this.type;L&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(N=>N.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,N=T.length;I<N;I++){const G=T[I],H=G.shadow;if(H===void 0){Ge("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const j=H.getFrameExtents();s.multiply(j),r.copy(H.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/j.y),s.y=r.y*j.y,H.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||L===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ns){if(G.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new In(s.x,s.y,{format:ki,type:qn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new js(s.x,s.y,Pn),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=si,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wt,H.map.depthTexture.magFilter=Wt}else G.isPointLight?(H.map=new lu(s.x),H.map.depthTexture=new jf(s.x,Xn)):(H.map=new In(s.x,s.y),H.map.depthTexture=new js(s.x,s.y,Xn)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=si,this.type===zs?(H.map.depthTexture.compareFunction=Y?Sl:vl,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wt,H.map.depthTexture.magFilter=Wt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();G.isPointLight!==!0&&H.updateMatrices(G,v);for(let ee=0;ee<Z;ee++){const Re=H.getCamera(ee);if(G.isPointLight){const Me=H.camera,at=H.matrix,tt=G.distance||Me.far;tt!==Me.far&&(Me.far=tt,Me.updateProjectionMatrix()),Is.setFromMatrixPosition(G.matrixWorld),Me.position.copy(Is),oo.copy(Me.position),oo.add(Bx[ee]),Me.up.copy(zx[ee]),Me.lookAt(oo),Me.updateMatrixWorld(),at.makeTranslation(-Is.x,-Is.y,-Is.z),fh.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),H._frustum.setFromProjectionMatrix(fh,Me.coordinateSystem,Me.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(H.map),n.clear());const Me=H.getViewport(ee);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),_.viewport(a)}i=H.getFrustum(ee),S(R,v,Re,G,this.type)}H.isPointLightShadow!==!0&&this.type===Ns&&b(H,v),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(E,D,U)};function b(T,R){const v=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new In(s.x,s.y,{format:ki,type:qn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,v,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,v,d,x,null)}function A(T,R,v,E){let D=null;const U=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)D=U;else if(D=v.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const _=D.uuid,L=R.uuid;let I=h[_];I===void 0&&(I={},h[_]=I);let N=I[L];N===void 0&&(N=D.clone(),I[L]=N,R.addEventListener("dispose",w)),D=N}if(D.visible=R.visible,D.wireframe=R.wireframe,E===Ns?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:u[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const _=n.properties.get(D);_.light=v}return D}function S(T,R,v,E,D){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ns)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const L=e.update(T),I=T.material;if(Array.isArray(I)){const N=L.groups;for(let G=0,H=N.length;G<H;G++){const j=N[G],Y=I[j.materialIndex];if(Y&&Y.visible){const Z=A(T,Y,E,D);T.onBeforeShadow(n,T,R,v,L,Z,j),n.renderBufferDirect(v,null,L,Z,T,j),T.onAfterShadow(n,T,R,v,L,Z,j)}}}else if(I.visible){const N=A(T,I,E,D);T.onBeforeShadow(n,T,R,v,L,N,null),n.renderBufferDirect(v,null,L,N,T,null),T.onAfterShadow(n,T,R,v,L,N,null)}}const _=T.children;for(let L=0,I=_.length;L<I;L++)S(_[L],R,v,E,D)}function w(T){T.target.removeEventListener("dispose",w);for(const v in h){const E=h[v],D=T.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function Gx(n,e){function t(){let B=!1;const me=new Tt;let te=null;const ge=new Tt(0,0,0,0);return{setMask:function(be){te!==be&&!B&&(n.colorMask(be,be,be,be),te=be)},setLocked:function(be){B=be},setClear:function(be,re,Fe,Ie,bt){bt===!0&&(be*=Ie,re*=Ie,Fe*=Ie),me.set(be,re,Fe,Ie),ge.equals(me)===!1&&(n.clearColor(be,re,Fe,Ie),ge.copy(me))},reset:function(){B=!1,te=null,ge.set(-1,0,0,0)}}}function i(){let B=!1,me=!1,te=null,ge=null,be=null;return{setReversed:function(re){if(me!==re){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),me=re;const Ie=be;be=null,this.setClear(Ie)}},getReversed:function(){return me},setTest:function(re){re?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(re){te!==re&&!B&&(n.depthMask(re),te=re)},setFunc:function(re){if(me&&(re=Ef[re]),ge!==re){switch(re){case go:n.depthFunc(n.NEVER);break;case xo:n.depthFunc(n.ALWAYS);break;case _o:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case yo:n.depthFunc(n.EQUAL);break;case vo:n.depthFunc(n.GEQUAL);break;case So:n.depthFunc(n.GREATER);break;case bo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=re}},setLocked:function(re){B=re},setClear:function(re){be!==re&&(be=re,me&&(re=1-re),n.clearDepth(re))},reset:function(){B=!1,te=null,ge=null,be=null,me=!1}}}function s(){let B=!1,me=null,te=null,ge=null,be=null,re=null,Fe=null,Ie=null,bt=null;return{setTest:function(ft){B||(ft?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(ft){me!==ft&&!B&&(n.stencilMask(ft),me=ft)},setFunc:function(ft,Mn,Un){(te!==ft||ge!==Mn||be!==Un)&&(n.stencilFunc(ft,Mn,Un),te=ft,ge=Mn,be=Un)},setOp:function(ft,Mn,Un){(re!==ft||Fe!==Mn||Ie!==Un)&&(n.stencilOp(ft,Mn,Un),re=ft,Fe=Mn,Ie=Un)},setLocked:function(ft){B=ft},setClear:function(ft){bt!==ft&&(n.clearStencil(ft),bt=ft)},reset:function(){B=!1,me=null,te=null,ge=null,be=null,re=null,Fe=null,Ie=null,bt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,h=new WeakMap;let l={},u={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,b=null,A=null,S=null,w=null,T=null,R=null,v=new Xe(0,0,0),E=0,D=!1,U=null,_=null,L=null,I=null,N=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=j>=2);let Z=null,ee={};const Re=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),at=new Tt().fromArray(Re),tt=new Tt().fromArray(Me);function lt(B,me,te,ge){const be=new Uint8Array(4),re=n.createTexture();n.bindTexture(B,re),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<te;Fe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(me+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return re}const Q={};Q[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc($s),ce(!1),fe(jl),ie(n.CULL_FACE),oe(ni);function ie(B){l[B]!==!0&&(n.enable(B),l[B]=!0)}function ye(B){l[B]!==!1&&(n.disable(B),l[B]=!1)}function He(B,me){return f[B]!==me?(n.bindFramebuffer(B,me),f[B]=me,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=me),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Ee(B,me){let te=p,ge=!1;if(B){te=d.get(me),te===void 0&&(te=[],d.set(me,te));const be=B.textures;if(te.length!==be.length||te[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Fe=be.length;re<Fe;re++)te[re]=n.COLOR_ATTACHMENT0+re;te.length=be.length,ge=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ge=!0);ge&&n.drawBuffers(te)}function Ve(B){return x!==B?(n.useProgram(B),x=B,!0):!1}const pt={[os]:n.FUNC_ADD,[Wu]:n.FUNC_SUBTRACT,[Xu]:n.FUNC_REVERSE_SUBTRACT};pt[qu]=n.MIN,pt[Yu]=n.MAX;const se={[$u]:n.ZERO,[Ku]:n.ONE,[Zu]:n.SRC_COLOR,[Eh]:n.SRC_ALPHA,[nf]:n.SRC_ALPHA_SATURATE,[ef]:n.DST_COLOR,[Qu]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[wh]:n.ONE_MINUS_SRC_ALPHA,[tf]:n.ONE_MINUS_DST_COLOR,[ju]:n.ONE_MINUS_DST_ALPHA,[sf]:n.CONSTANT_COLOR,[rf]:n.ONE_MINUS_CONSTANT_COLOR,[af]:n.CONSTANT_ALPHA,[of]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(B,me,te,ge,be,re,Fe,Ie,bt,ft){if(B===ni){g===!0&&(ye(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),B!==Vu){if(B!==m||ft!==D){if((b!==os||w!==os)&&(n.blendEquation(n.FUNC_ADD),b=os,w=os),ft)switch(B){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFunc(n.ONE,n.ONE);break;case tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",B);break}else switch(B){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",B);break}A=null,S=null,T=null,R=null,v.set(0,0,0),E=0,m=B,D=ft}return}be=be||me,re=re||te,Fe=Fe||ge,(me!==b||be!==w)&&(n.blendEquationSeparate(pt[me],pt[be]),b=me,w=be),(te!==A||ge!==S||re!==T||Fe!==R)&&(n.blendFuncSeparate(se[te],se[ge],se[re],se[Fe]),A=te,S=ge,T=re,R=Fe),(Ie.equals(v)===!1||bt!==E)&&(n.blendColor(Ie.r,Ie.g,Ie.b,bt),v.copy(Ie),E=bt),m=B,D=!1}function le(B,me){B.side===Rn?ye(n.CULL_FACE):ie(n.CULL_FACE);let te=B.side===sn;me&&(te=!te),ce(te),B.blending===Hs&&B.transparent===!1?oe(ni):oe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const ge=B.stencilWrite;o.setTest(ge),ge&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ke(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(B){U!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),U=B)}function fe(B){B!==zu?(ie(n.CULL_FACE),B!==_&&(B===jl?n.cullFace(n.BACK):B===Hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),_=B}function Be(B){B!==L&&(H&&n.lineWidth(B),L=B)}function ke(B,me,te){B?(ie(n.POLYGON_OFFSET_FILL),(I!==me||N!==te)&&(I=me,N=te,a.getReversed()&&(me=-me),n.polygonOffset(me,te))):ye(n.POLYGON_OFFSET_FILL)}function We(B){B?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Ye(B){B===void 0&&(B=n.TEXTURE0+G-1),Z!==B&&(n.activeTexture(B),Z=B)}function F(B,me,te){te===void 0&&(Z===null?te=n.TEXTURE0+G-1:te=Z);let ge=ee[te];ge===void 0&&(ge={type:void 0,texture:void 0},ee[te]=ge),(ge.type!==B||ge.texture!==me)&&(Z!==te&&(n.activeTexture(te),Z=te),n.bindTexture(B,me||Q[B]),ge.type=B,ge.texture=me)}function ut(){const B=ee[Z];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{n.compressedTexImage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function y(){try{n.texSubImage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function V(){try{n.texSubImage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function he(){try{n.texStorage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function ue(){try{n.texStorage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function J(){try{n.texImage2D(...arguments)}catch(B){ot("WebGLState:",B)}}function ne(){try{n.texImage3D(...arguments)}catch(B){ot("WebGLState:",B)}}function de(B){return u[B]!==void 0?u[B]:n.getParameter(B)}function Ue(B,me){u[B]!==me&&(n.pixelStorei(B,me),u[B]=me)}function xe(B){at.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),at.copy(B))}function pe(B){tt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function Oe(B,me){let te=h.get(me);te===void 0&&(te=new WeakMap,h.set(me,te));let ge=te.get(B);ge===void 0&&(ge=n.getUniformBlockIndex(me,B.name),te.set(B,ge))}function ze(B,me){const ge=h.get(me).get(B);c.get(me)!==ge&&(n.uniformBlockBinding(me,ge,B.__bindingPointIndex),c.set(me,ge))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),l={},u={},Z=null,ee={},f={},d=new WeakMap,p=[],x=null,g=!1,m=null,b=null,A=null,S=null,w=null,T=null,R=null,v=new Xe(0,0,0),E=0,D=!1,U=null,_=null,L=null,I=null,N=null,at.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ye,bindFramebuffer:He,drawBuffers:Ee,useProgram:Ve,setBlending:oe,setMaterial:le,setFlipSided:ce,setCullFace:fe,setLineWidth:Be,setPolygonOffset:ke,setScissorTest:We,activeTexture:Ye,bindTexture:F,unbindTexture:ut,compressedTexImage2D:nt,compressedTexImage3D:C,texImage2D:J,texImage3D:ne,pixelStorei:Ue,getParameter:de,updateUBOMapping:Oe,uniformBlockBinding:ze,texStorage2D:he,texStorage3D:ue,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:xe,viewport:pe,reset:Je}}function Vx(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ae,l=new WeakMap,u=new Set;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return p?new OffscreenCanvas(C,y):Qs("canvas")}function g(C,y,V){let q=1;const K=nt(C);if((K.width>V||K.height>V)&&(q=V/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const he=Math.floor(q*K.width),ue=Math.floor(q*K.height);f===void 0&&(f=x(he,ue));const J=y?x(he,ue):f;return J.width=he,J.height=ue,J.getContext("2d").drawImage(C,0,0,he,ue),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+he+"x"+ue+")."),J}else return"data"in C&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function b(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,y,V,q,K,he=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue;q&&(ue=e.get("EXT_texture_norm16"),ue||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8),V===n.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),V===n.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),y===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8),V===n.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),V===n.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(V===n.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),V===n.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){const ne=he?ea:st.getTransfer(K);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=ne===gt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),V===n.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function w(C,y){let V;return C?y===null||y===Xn||y===Zs?V=n.DEPTH24_STENCIL8:y===Pn?V=n.DEPTH32F_STENCIL8:y===Ks&&(V=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xn||y===Zs?V=n.DEPTH_COMPONENT24:y===Pn?V=n.DEPTH_COMPONENT32F:y===Ks&&(V=n.DEPTH_COMPONENT16),V}function T(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),E(y),y.isVideoTexture&&l.delete(y),y.isHTMLTexture&&u.delete(y)}function v(C){const y=C.target;y.removeEventListener("dispose",v),U(y)}function E(C){const y=i.get(C);if(y.__webglInit===void 0)return;const V=C.source,q=d.get(V);if(q){const K=q[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&D(C),Object.keys(q).length===0&&d.delete(V)}i.remove(C)}function D(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const V=C.source,q=d.get(V);delete q[y.__cacheKey],a.memory.textures--}function U(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let K=0;K<y.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[q][K]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=C.textures;for(let q=0,K=V.length;q<K;q++){const he=i.get(V[q]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(V[q])}i.remove(C)}let _=0;function L(){_=0}function I(){return _}function N(C){_=C}function G(){const C=_;return C>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),_+=1,C}function H(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function j(C,y){const V=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const q=C.image;if(q===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(V,C,y);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function Y(C,y){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ye(V,C,y);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function Z(C,y){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){ye(V,C,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function ee(C,y){const V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){He(V,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const Re={[Zr]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},Me={[Wt]:n.NEAREST,[hf]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},at={[pf]:n.NEVER,[yf]:n.ALWAYS,[mf]:n.LESS,[vl]:n.LEQUAL,[gf]:n.EQUAL,[Sl]:n.GEQUAL,[xf]:n.GREATER,[_f]:n.NOTEQUAL};function tt(C,y){if(y.type===Pn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zt||y.magFilter===Ta||y.magFilter===hr||y.magFilter===Di||y.minFilter===Zt||y.minFilter===Ta||y.minFilter===hr||y.minFilter===Di)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Re[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Re[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Re[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Me[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,at[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==hr&&y.minFilter!==Di||y.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function lt(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let K=d.get(q);K===void 0&&(K={},d.set(q,K));const he=H(y);if(he!==C.__cacheKey){K[he]===void 0&&(K[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),K[he].usedTimes++;const ue=K[C.__cacheKey];ue!==void 0&&(K[C.__cacheKey].usedTimes--,ue.usedTimes===0&&D(y)),C.__cacheKey=he,C.__webglTexture=K[he].texture}return V}function Q(C,y,V){return Math.floor(Math.floor(C/V)/y)}function ie(C,y,V,q){const he=C.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,q,y.data);else{he.sort((Ue,xe)=>Ue.start-xe.start);let ue=0;for(let Ue=1;Ue<he.length;Ue++){const xe=he[ue],pe=he[Ue],Oe=xe.start+xe.count,ze=Q(pe.start,y.width,4),Je=Q(xe.start,y.width,4);pe.start<=Oe+1&&ze===Je&&Q(pe.start+pe.count-1,y.width,4)===ze?xe.count=Math.max(xe.count,pe.start+pe.count-xe.start):(++ue,he[ue]=pe)}he.length=ue+1;const J=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ue=0,xe=he.length;Ue<xe;Ue++){const pe=he[Ue],Oe=Math.floor(pe.start/4),ze=Math.ceil(pe.count/4),Je=Oe%y.width,B=Math.floor(Oe/y.width),me=ze,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Je,B,me,te,V,q,y.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function ye(C,y,V){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const K=lt(C,y),he=y.source;t.bindTexture(q,C.__webglTexture,n.TEXTURE0+V);const ue=i.get(he);if(he.version!==ue.__version||K===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const te=st.getPrimaries(st.workingColorSpace),ge=y.colorSpace===pi?null:st.getPrimaries(y.colorSpace),be=y.colorSpace===pi||te===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ne=g(y.image,!1,s.maxTextureSize);ne=ut(y,ne);const de=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let xe=S(y.internalFormat,de,Ue,y.normalized,y.colorSpace,y.isVideoTexture);tt(q,y);let pe;const Oe=y.mipmaps,ze=y.isVideoTexture!==!0,Je=ue.__version===void 0||K===!0,B=he.dataReady,me=T(y,ne);if(y.isDepthTexture)xe=w(y.format===Ii,y.type),Je&&(ze?t.texStorage2D(n.TEXTURE_2D,1,xe,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,xe,ne.width,ne.height,0,de,Ue,null));else if(y.isDataTexture)if(Oe.length>0){ze&&Je&&t.texStorage2D(n.TEXTURE_2D,me,xe,Oe[0].width,Oe[0].height);for(let te=0,ge=Oe.length;te<ge;te++)pe=Oe[te],ze?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,de,Ue,pe.data):t.texImage2D(n.TEXTURE_2D,te,xe,pe.width,pe.height,0,de,Ue,pe.data);y.generateMipmaps=!1}else ze?(Je&&t.texStorage2D(n.TEXTURE_2D,me,xe,ne.width,ne.height),B&&ie(y,ne,de,Ue)):t.texImage2D(n.TEXTURE_2D,0,xe,ne.width,ne.height,0,de,Ue,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,xe,Oe[0].width,Oe[0].height,ne.depth);for(let te=0,ge=Oe.length;te<ge;te++)if(pe=Oe[te],y.format!==Ln)if(de!==null)if(ze){if(B)if(y.layerUpdates.size>0){const be=Wc(pe.width,pe.height,y.format,y.type);for(const re of y.layerUpdates){const Fe=pe.data.subarray(re*be/pe.data.BYTES_PER_ELEMENT,(re+1)*be/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,re,pe.width,pe.height,1,de,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ne.depth,de,pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,xe,pe.width,pe.height,ne.depth,0,pe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ne.depth,de,Ue,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,xe,pe.width,pe.height,ne.depth,0,de,Ue,pe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ze&&Je&&t.texStorage2D(n.TEXTURE_2D,me,xe,Oe[0].width,Oe[0].height);for(let te=0,ge=Oe.length;te<ge;te++)pe=Oe[te],y.format!==Ln?de!==null?ze?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,xe,pe.width,pe.height,0,pe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe.width,pe.height,de,Ue,pe.data):t.texImage2D(n.TEXTURE_2D,te,xe,pe.width,pe.height,0,de,Ue,pe.data)}else if(y.isDataArrayTexture)if(ze){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,xe,ne.width,ne.height,ne.depth),B)if(y.layerUpdates.size>0){const te=Wc(ne.width,ne.height,y.format,y.type);for(const ge of y.layerUpdates){const be=ne.data.subarray(ge*te/ne.data.BYTES_PER_ELEMENT,(ge+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,ne.width,ne.height,1,de,Ue,be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,Ue,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,ne.width,ne.height,ne.depth,0,de,Ue,ne.data);else if(y.isData3DTexture)ze?(Je&&t.texStorage3D(n.TEXTURE_3D,me,xe,ne.width,ne.height,ne.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,Ue,ne.data)):t.texImage3D(n.TEXTURE_3D,0,xe,ne.width,ne.height,ne.depth,0,de,Ue,ne.data);else if(y.isFramebufferTexture){if(Je)if(ze)t.texStorage2D(n.TEXTURE_2D,me,xe,ne.width,ne.height);else{let te=ne.width,ge=ne.height;for(let be=0;be<me;be++)t.texImage2D(n.TEXTURE_2D,be,xe,te,ge,0,de,Ue,null),te>>=1,ge>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),u.add(y),te.onpaint=ge=>{const be=ge.changedElements;for(const re of u)be.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{const be=n.RGBA,re=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,be,re,Fe,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(ze&&Je){const te=nt(Oe[0]);t.texStorage2D(n.TEXTURE_2D,me,xe,te.width,te.height)}for(let te=0,ge=Oe.length;te<ge;te++)pe=Oe[te],ze?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,de,Ue,pe):t.texImage2D(n.TEXTURE_2D,te,xe,de,Ue,pe);y.generateMipmaps=!1}else if(ze){if(Je){const te=nt(ne);t.texStorage2D(n.TEXTURE_2D,me,xe,te.width,te.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ue,ne)}else t.texImage2D(n.TEXTURE_2D,0,xe,de,Ue,ne);m(y)&&b(q),ue.__version=he.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function He(C,y,V){if(y.image.length!==6)return;const q=lt(C,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const he=i.get(K);if(K.version!==he.__version||q===!0){t.activeTexture(n.TEXTURE0+V);const ue=st.getPrimaries(st.workingColorSpace),J=y.colorSpace===pi?null:st.getPrimaries(y.colorSpace),ne=y.colorSpace===pi||ue===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const de=y.isCompressedTexture||y.image[0].isCompressedTexture,Ue=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let re=0;re<6;re++)!de&&!Ue?xe[re]=g(y.image[re],!0,s.maxCubemapSize):xe[re]=Ue?y.image[re].image:y.image[re],xe[re]=ut(y,xe[re]);const pe=xe[0],Oe=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Je=S(y.internalFormat,Oe,ze,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,me=he.__version===void 0||q===!0,te=K.dataReady;let ge=T(y,pe);tt(n.TEXTURE_CUBE_MAP,y);let be;if(de){B&&me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Je,pe.width,pe.height);for(let re=0;re<6;re++){be=xe[re].mipmaps;for(let Fe=0;Fe<be.length;Fe++){const Ie=be[Fe];y.format!==Ln?Oe!==null?B?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Ie.width,Ie.height,Oe,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Je,Ie.width,Ie.height,0,Ie.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Ie.width,Ie.height,Oe,ze,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Je,Ie.width,Ie.height,0,Oe,ze,Ie.data)}}}else{if(be=y.mipmaps,B&&me){be.length>0&&ge++;const re=nt(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Je,re.width,re.height)}for(let re=0;re<6;re++)if(Ue){B?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,xe[re].width,xe[re].height,Oe,ze,xe[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,xe[re].width,xe[re].height,0,Oe,ze,xe[re].data);for(let Fe=0;Fe<be.length;Fe++){const bt=be[Fe].image[re].image;B?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,bt.width,bt.height,Oe,ze,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Je,bt.width,bt.height,0,Oe,ze,bt.data)}}else{B?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,ze,xe[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,Oe,ze,xe[re]);for(let Fe=0;Fe<be.length;Fe++){const Ie=be[Fe];B?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,Oe,ze,Ie.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Je,Oe,ze,Ie.image[re])}}}m(y)&&b(n.TEXTURE_CUBE_MAP),he.__version=K.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ee(C,y,V,q,K,he){const ue=r.convert(V.format,V.colorSpace),J=r.convert(V.type),ne=S(V.internalFormat,ue,J,V.normalized,V.colorSpace),de=i.get(y),Ue=i.get(V);if(Ue.__renderTarget=y,!de.__hasExternalTextures){const xe=Math.max(1,y.width>>he),pe=Math.max(1,y.height>>he);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,he,ne,xe,pe,y.depth,0,ue,J,null):t.texImage2D(K,he,ne,xe,pe,0,ue,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ye(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,Ue.__webglTexture,0,We(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,Ue.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(C,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const q=y.depthTexture,K=q&&q.isDepthTexture?q.type:null,he=w(y.stencilBuffer,K),ue=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ye(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We(y),he,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,We(y),he,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,C)}else{const q=y.textures;for(let K=0;K<q.length;K++){const he=q[K],ue=r.convert(he.format,he.colorSpace),J=r.convert(he.type),ne=S(he.internalFormat,ue,J,he.normalized,he.colorSpace);Ye(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We(y),ne,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,We(y),ne,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ne,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(C,y,V){const q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),tt(n.TEXTURE_CUBE_MAP,y.depthTexture);const de=r.convert(y.depthTexture.format),Ue=r.convert(y.depthTexture.type);let xe;y.depthTexture.format===si?xe=n.DEPTH_COMPONENT24:y.depthTexture.format===Ii&&(xe=n.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xe,y.width,y.height,0,de,Ue,null)}}else j(y.depthTexture,0);const he=K.__webglTexture,ue=We(y),J=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ne=y.depthTexture.format===Ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===si)Ye(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,J,he,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,ne,J,he,0);else if(y.depthTexture.format===Ii)Ye(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,J,he,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,ne,J,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){const y=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)pt(y.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?pt(y.__webglFramebuffer[0],C,0):pt(y.__webglFramebuffer,C,0)}else if(V){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),Ve(y.__webglDepthbuffer[q],C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,he)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ve(y.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(C,y,V){const q=i.get(C);y!==void 0&&Ee(q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&se(C)}function le(C){const y=C.texture,V=i.get(C),q=i.get(y);C.addEventListener("dispose",v);const K=C.textures,he=C.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,a.memory.textures++),he){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let ne=0;ne<y.mipmaps.length;ne++)V.__webglFramebuffer[J][ne]=n.createFramebuffer()}else V.__webglFramebuffer[J]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)V.__webglFramebuffer[J]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ue)for(let J=0,ne=K.length;J<ne;J++){const de=i.get(K[J]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ye(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const ne=K[J];V.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[J]);const de=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),xe=S(ne.internalFormat,de,Ue,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),pe=We(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,V.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),tt(n.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Ee(V.__webglFramebuffer[J][ne],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else Ee(V.__webglFramebuffer[J],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(y)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let J=0,ne=K.length;J<ne;J++){const de=K[J],Ue=i.get(de);let xe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ue.__webglTexture),tt(xe,de),Ee(V.__webglFramebuffer,C,de,n.COLOR_ATTACHMENT0+J,xe,0),m(de)&&b(xe)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,q.__webglTexture),tt(J,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Ee(V.__webglFramebuffer[ne],C,y,n.COLOR_ATTACHMENT0,J,ne);else Ee(V.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,J,0);m(y)&&b(J),t.unbindTexture()}C.depthBuffer&&se(C)}function ce(C){const y=C.textures;for(let V=0,q=y.length;V<q;V++){const K=y[V];if(m(K)){const he=A(C),ue=i.get(K).__webglTexture;t.bindTexture(he,ue),b(he),t.unbindTexture()}}}const fe=[],Be=[];function ke(C){if(C.samples>0){if(Ye(C)===!1){const y=C.textures,V=C.width,q=C.height;let K=n.COLOR_BUFFER_BIT;const he=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(C),J=y.length>1;if(J)for(let de=0;de<y.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const ne=C.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<y.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Ue=i.get(y[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,V,q,0,0,V,q,K,n.NEAREST),c===!0&&(fe.length=0,Be.length=0,fe.push(n.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(fe.push(he),Be.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<y.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Ue=i.get(y[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function We(C){return Math.min(s.maxSamples,C.samples)}function Ye(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){const y=a.render.frame;l.get(C)!==y&&(l.set(C,y),C.update())}function ut(C,y){const V=C.colorSpace,q=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==jr&&V!==pi&&(st.getTransfer(V)===gt?(q!==Ln||K!==xn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",V)),y}function nt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.getTextureUnits=I,this.setTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=oe,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wx(n,e){function t(i,s=pi){let r;const a=st.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Oh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nh)return n.BYTE;if(i===Uh)return n.SHORT;if(i===Ks)return n.UNSIGNED_SHORT;if(i===dl)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===kh)return n.ALPHA;if(i===Bh)return n.RGB;if(i===Ln)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===gl)return n.RED;if(i===xl)return n.RED_INTEGER;if(i===ki)return n.RG;if(i===_l)return n.RG_INTEGER;if(i===yl)return n.RGBA_INTEGER;if(i===Vr||i===Wr||i===Xr||i===qr)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Eo||i===wo||i===To||i===Ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Jr||i===Io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ro||i===Co)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Po)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Lo)return r.COMPRESSED_R11_EAC;if(i===Do)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Jr)return r.COMPRESSED_RG11_EAC;if(i===Io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===No||i===Uo||i===Oo||i===Fo||i===ko||i===Bo||i===zo||i===Ho||i===Go||i===Vo||i===Wo||i===Xo||i===qo||i===Yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===No)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ko)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Go)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Ko||i===Zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$o)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jo||i===Qo||i===Qr||i===jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qx=`
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

}`;class Yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nn({vertexShader:Xx,fragmentShader:qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $x extends Mi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,f=null,d=null,p=null;const x=typeof XRWebGLBinding<"u",g=new Yx,m={},b=t.getContextAttributes();let A=null,S=null;const w=[],T=[],R=new ae;let v=null,E=null;const D=new gn;D.viewport=new Tt;const U=new gn;U.viewport=new Tt;const _=[D,U],L=new ep;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=w[Q];return ie===void 0&&(ie=new Na,w[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=w[Q];return ie===void 0&&(ie=new Na,w[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=w[Q];return ie===void 0&&(ie=new Na,w[Q]=ie),ie.getHandSpace()};function G(Q){const ie=T.indexOf(Q.inputSource);if(ie===-1)return;const ye=w[ie];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,h||a),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let Q=0;Q<w.length;Q++){const ie=T[Q];ie!==null&&(T[Q]=null,w[Q].disconnect(ie))}I=null,N=null,g.reset();for(const Q in m)delete m[Q];if(e.setRenderTarget(A),d=null,f=null,u=null,s=null,S=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),E!==null){const Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=b.stencil?Ii:si,He=b.stencil?Zs:Xn);const Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new In(f.textureWidth,f.textureHeight,{format:Ln,type:xn,depthTexture:new js(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ye={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new In(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Q){for(let ie=0;ie<Q.removed.length;ie++){const ye=Q.removed[ie],He=T.indexOf(ye);He>=0&&(T[He]=null,w[He].disconnect(ye))}for(let ie=0;ie<Q.added.length;ie++){const ye=Q.added[ie];let He=T.indexOf(ye);if(He===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=T.length){T.push(ye),He=Ve;break}else if(T[Ve]===null){T[Ve]=ye,He=Ve;break}if(He===-1)break}const Ee=w[He];Ee&&Ee.connect(ye)}}const Y=new O,Z=new O;function ee(Q,ie,ye){Y.setFromMatrixPosition(ie.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);const He=Y.distanceTo(Z),Ee=ie.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,pt=Ee[14]/(Ee[10]-1),se=Ee[14]/(Ee[10]+1),oe=(Ee[9]+1)/Ee[5],le=(Ee[9]-1)/Ee[5],ce=(Ee[8]-1)/Ee[0],fe=(Ve[8]+1)/Ve[0],Be=pt*ce,ke=pt*fe,We=He/(-ce+fe),Ye=We*-ce;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ye),Q.translateZ(We),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ee[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const F=pt+We,ut=se+We,nt=Be-Ye,C=ke+(He-Ye),y=oe*se/ut*F,V=le*se/ut*F;Q.projectionMatrix.makePerspective(nt,C,y,V,F,ut),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Re(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,ye=Q.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),L.near=U.near=D.near=ie,L.far=U.far=D.far=ye,(I!==L.near||N!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,N=L.far),L.layers.mask=Q.layers.mask|6,D.layers.mask=L.layers.mask&-5,U.layers.mask=L.layers.mask&-3;const He=Q.parent,Ee=L.cameras;Re(L,He);for(let Ve=0;Ve<Ee.length;Ve++)Re(Ee[Ve],He);Ee.length===2?ee(L,D,U):L.projectionMatrix.copy(D.projectionMatrix),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),Me(Q,L,He)};function Me(Q,ie,ye){ye===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=tl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Q){return m[Q]};let at=null;function tt(Q,ie){if(l=ie.getViewerPose(h||a),p=ie,l!==null){const ye=l.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let He=!1;ye.length!==L.cameras.length&&(L.cameras.length=0,He=!0);for(let se=0;se<ye.length;se++){const oe=ye[se];let le=null;if(d!==null)le=d.getViewport(oe);else{const fe=u.getViewSubImage(f,oe);le=fe.viewport,se===0&&(e.setRenderTargetTextures(S,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(S))}let ce=_[se];ce===void 0&&(ce=new gn,ce.layers.enable(se),ce.viewport=new Tt,_[se]=ce),ce.matrix.fromArray(oe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(oe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),se===0&&(L.matrix.copy(ce.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),He===!0&&L.cameras.push(ce)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const se=u.getDepthInformation(ye[0]);se&&se.isValid&&se.texture&&g.init(se,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let se=0;se<ye.length;se++){const oe=ye[se].camera;if(oe){let le=m[oe];le||(le=new $h,m[oe]=le);const ce=u.getCameraImage(oe);le.sourceTexture=ce}}}}for(let ye=0;ye<w.length;ye++){const He=T[ye],Ee=w[ye];He!==null&&Ee!==void 0&&Ee.update(He,ie,h||a)}at&&at(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}const lt=new au;lt.setAnimationLoop(tt),this.setAnimationLoop=function(Q){at=Q},this.dispose=function(){}}}const Kx=new rt,du=new $e;du.set(-1,0,0,0,1,0,0,0,1);function Zx(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,iu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,A,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),l(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,b,A):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=e.get(m),A=b.envMap,S=b.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(du),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,A){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=A*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jx(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function h(S,w){let T=s[S.id];T===void 0&&(g(S),T=l(S),s[S.id]=T,S.addEventListener("dispose",b));const R=w.program;i.updateUBOMapping(S,R);const v=e.render.frame;r[S.id]!==v&&(f(S),r[S.id]=v)}function l(S){const w=u();S.__bindingPointIndex=w;const T=n.createBuffer(),R=S.__size,v=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,R,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const w=s[S.id],T=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let v=0,E=T.length;v<E;v++){const D=T[v];if(Array.isArray(D))for(let U=0,_=D.length;U<_;U++)d(D[U],v,U,R);else d(D,v,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,w,T,R){if(x(S,w,T,R)===!0){const v=S.__offset,E=S.value;if(Array.isArray(E)){let D=0;for(let U=0;U<E.length;U++){const _=E[U],L=m(_);p(_,S.__data,D),typeof _!="number"&&typeof _!="boolean"&&!_.isMatrix3&&!ArrayBuffer.isView(_)&&(D+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,S.__data)}}function p(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function x(S,w,T,R){const v=S.value,E=w+"_"+T;if(R[E]===void 0)return typeof v=="number"||typeof v=="boolean"?R[E]=v:ArrayBuffer.isView(v)?R[E]=v.slice():R[E]=v.clone(),!0;{const D=R[E];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return R[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function g(S){const w=S.uniforms;let T=0;const R=16;for(let E=0,D=w.length;E<D;E++){const U=Array.isArray(w[E])?w[E]:[w[E]];for(let _=0,L=U.length;_<L;_++){const I=U[_],N=Array.isArray(I.value)?I.value:[I.value];for(let G=0,H=N.length;G<H;G++){const j=N[G],Y=m(j),Z=T%R,ee=Z%Y.boundary,Re=Z+ee;T+=ee,Re!==0&&R-Re<Y.storage&&(T+=R-Re),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=Y.storage}}}const v=T%R;return v>0&&(T+=R-v),S.__size=T,S.__cache={},this}function m(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",S),w}function b(S){const w=S.target;w.removeEventListener("dispose",b);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:h,dispose:A}}const Qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function jx(){return kn===null&&(kn=new Xh(Qx,16,16,ki,qn),kn.name="DFG_LUT",kn.minFilter=Zt,kn.magFilter=Zt,kn.wrapS=jn,kn.wrapT=jn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class e_{constructor(e={}){const{canvas:t=bf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=xn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=d,g=new Set([yl,_l,xl]),m=new Set([xn,Xn,Ks,Zs,pl,ml]),b=new Uint32Array(4),A=new Int32Array(4),S=new O;let w=null,T=null;const R=[],v=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1,_=null,L=null,I=null,N=null;this._outputColorSpace=nn;let G=0,H=0,j=null,Y=-1,Z=null;const ee=new Tt,Re=new Tt;let Me=null;const at=new Xe(0);let tt=0,lt=t.width,Q=t.height,ie=1,ye=null,He=null;const Ee=new Tt(0,0,lt,Q),Ve=new Tt(0,0,lt,Q);let pt=!1;const se=new wl;let oe=!1,le=!1;const ce=new rt,fe=new O,Be=new Tt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Ye(){return j===null?ie:1}let F=i;function ut(M,k){return t.getContext(M,k)}let nt,C,y,V,q,K,he,ue,J,ne,de,Ue,xe,pe,Oe,ze,Je,B,me,te,ge,be,re;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),F===null){const k="webgl2";if(F=ut(k,M),F===null)throw ut(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(M){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),ot("WebGLRenderer: "+M.message),M}function Fe(){nt=new jm(F),nt.init(),ge=new Wx(F,nt),C=new Vm(F,nt,e,ge),y=new Gx(F,nt),C.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),L=F.createFramebuffer(),I=F.createFramebuffer(),N=F.createFramebuffer(),V=new ng(F),q=new Rx,K=new Vx(F,nt,y,q,C,ge,V),he=new Qm(D),ue=new sp(F),be=new Hm(F,ue),J=new eg(F,ue,V,be),ne=new sg(F,J,ue,be,V),B=new ig(F,C,K),Oe=new Wm(q),de=new Ax(D,he,nt,C,be,Oe),Ue=new Zx(D,q),xe=new Px,pe=new Ox(nt),Je=new zm(D,he,y,ne,p,c),ze=new Hx(D,ne,C),re=new Jx(F,V,C,y),me=new Gm(F,nt,V),te=new tg(F,nt,V),V.programs=de.programs,D.capabilities=C,D.extensions=nt,D.properties=q,D.renderLists=xe,D.shadowMap=ze,D.state=y,D.info=V}x!==xn&&(E=new ag(x,t.width,t.height,o,s,r));const Ie=new $x(D,F);this.xr=Ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(lt,Q,!1))},this.getSize=function(M){return M.set(lt,Q)},this.setSize=function(M,k,$=!0){if(Ie.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=M,Q=k,t.width=Math.floor(M*ie),t.height=Math.floor(k*ie),$===!0&&(t.style.width=M+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(lt*ie,Q*ie).floor()},this.setDrawingBufferSize=function(M,k,$){lt=M,Q=k,ie=$,t.width=Math.floor(M*$),t.height=Math.floor(k*$),this.setViewport(0,0,M,k)},this.setEffects=function(M){if(x===xn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let k=0;k<M.length;k++)if(M[k].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ee)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,k,$,W){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,k,$,W),y.viewport(ee.copy(Ee).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(Ve)},this.setScissor=function(M,k,$,W){M.isVector4?Ve.set(M.x,M.y,M.z,M.w):Ve.set(M,k,$,W),y.scissor(Re.copy(Ve).multiplyScalar(ie).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(M){y.setScissorTest(pt=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){He=M},this.getClearColor=function(M){return M.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,$=!0){let W=0;if(M){let X=!1;if(j!==null){const Se=j.texture.format;X=g.has(Se)}if(X){const Se=j.texture.type,Te=m.has(Se),ve=Je.getClearColor(),Le=Je.getClearAlpha(),Ne=ve.r,Qe=ve.g,it=ve.b;Te?(b[0]=Ne,b[1]=Qe,b[2]=it,b[3]=Le,F.clearBufferuiv(F.COLOR,0,b)):(A[0]=Ne,A[1]=Qe,A[2]=it,A[3]=Le,F.clearBufferiv(F.COLOR,0,A))}else W|=F.COLOR_BUFFER_BIT}k&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),_=M},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Je.dispose(),xe.dispose(),pe.dispose(),q.dispose(),he.dispose(),ne.dispose(),be.dispose(),re.dispose(),de.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Wl),Ie.removeEventListener("sessionend",Xl),wi.stop()};function bt(M){M.preventDefault(),rc("WebGLRenderer: Context Lost."),U=!0}function ft(){rc("WebGLRenderer: Context Restored."),U=!1;const M=V.autoReset,k=ze.enabled,$=ze.autoUpdate,W=ze.needsUpdate,X=ze.type;Fe(),V.autoReset=M,ze.enabled=k,ze.autoUpdate=$,ze.needsUpdate=W,ze.type=X}function Mn(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Un(M){const k=M.target;k.removeEventListener("dispose",Un),Iu(k)}function Iu(M){Nu(M),q.remove(M)}function Nu(M){const k=q.get(M).programs;k!==void 0&&(k.forEach(function($){de.releaseProgram($)}),M.isShaderMaterial&&de.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,$,W,X,Se){k===null&&(k=ke);const Te=X.isMesh&&X.matrixWorld.determinantAffine()<0,ve=Fu(M,k,$,W,X);y.setMaterial(W,Te);let Le=$.index,Ne=1;if(W.wireframe===!0){if(Le=J.getWireframeAttribute($),Le===void 0)return;Ne=2}const Qe=$.drawRange,it=$.attributes.position;let De=Qe.start*Ne,dt=(Qe.start+Qe.count)*Ne;Se!==null&&(De=Math.max(De,Se.start*Ne),dt=Math.min(dt,(Se.start+Se.count)*Ne)),Le!==null?(De=Math.max(De,0),dt=Math.min(dt,Le.count)):it!=null&&(De=Math.max(De,0),dt=Math.min(dt,it.count));const Nt=dt-De;if(Nt<0||Nt===1/0)return;be.setup(X,W,ve,$,Le);let Et,St=me;if(Le!==null&&(Et=ue.get(Le),St=te,St.setIndex(Et)),X.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*Ye()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(X.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),y.setLineWidth(qt*Ye()),X.isLineSegments?St.setMode(F.LINES):X.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else X.isPoints?St.setMode(F.POINTS):X.isSprite&&St.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qt=X._multiDrawStarts,we=X._multiDrawCounts,jt=X._multiDrawCount,ct=Le?ue.get(Le).bytesPerElement:1,_n=q.get(W).currentProgram.getUniforms();for(let On=0;On<jt;On++)_n.setValue(F,"_gl_DrawID",On),St.render(qt[On]/ct,we[On])}else if(X.isInstancedMesh)St.renderInstances(De,Nt,X.count);else if($.isInstancedBufferGeometry){const qt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,we=Math.min($.instanceCount,qt);St.renderInstances(De,Nt,we)}else St.render(De,Nt)};function Vl(M,k,$,W){_!==null&&M.isNodeMaterial&&_.setObject(W,M),oe===!0&&Oe.setState(M,$,!1),M.transparent===!0&&M.side===Rn&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,cr(M,k,W),M.side=Oi,M.needsUpdate=!0,cr(M,k,W),M.side=Rn):cr(M,k,W)}this.compile=function(M,k,$=null){$===null&&($=M),_!==null&&_.renderStart(M,k,$),T=pe.get($),T.init(k),v.push(T),$.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),M!==$&&M.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),_!==null&&_.updateLights(T.state.lightsArray),le=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,le),oe===!0&&Oe.setGlobalState(this.clippingPlanes,k),_!==null&&ze.render(T.state.shadowsArray,$,k);const W=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Te=0;Te<Se.length;Te++){const ve=Se[Te];Vl(ve,$,k,X),W.add(ve)}else Vl(Se,$,k,X),W.add(Se)}),T=v.pop(),_!==null&&_.renderEnd(),W},this.compileAsync=function(M,k,$=null){const W=this.compile(M,k,$);return new Promise(X=>{function Se(){if(W.forEach(function(Te){const Le=q.get(Te).currentProgram;(Le===void 0||Le.isReady())&&W.delete(Te)}),W.size===0){X(M);return}setTimeout(Se,10)}nt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ba=null;function Uu(M){ba&&ba(M)}function Wl(){wi.stop()}function Xl(){wi.start()}const wi=new au;wi.setAnimationLoop(Uu),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(M){ba=M,Ie.setAnimationLoop(M),M===null?wi.stop():wi.start()},Ie.addEventListener("sessionstart",Wl),Ie.addEventListener("sessionend",Xl),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;_!==null&&_.renderStart(M,k);const $=Ie.enabled===!0&&Ie.isPresenting===!0,W=E!==null&&(j===null||$)&&E.begin(D,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(k),k=Ie.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,k,j),T=pe.get(M,v.length),T.init(k),T.state.textureUnits=K.getTextureUnits(),v.push(T),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),se.setFromProjectionMatrix(ce,Gn,k.reversedDepth),le=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,le),w=xe.get(M,R.length),w.init(),R.push(w),Ie.enabled===!0&&Ie.isPresenting===!0){const Te=D.xr.getDepthSensingMesh();Te!==null&&Ma(Te,k,-1/0,D.sortObjects)}Ma(M,k,0,D.sortObjects),w.finish(),_!==null&&_.updateLights(T.state.lightsArray),D.sortObjects===!0&&w.sort(ye,He),We=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,We&&Je.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Oe.beginShadows();const X=T.state.shadowsArray;if(ze.render(X,M,k),oe===!0&&Oe.endShadows(),(W&&E.hasRenderPass())===!1){const Te=w.opaque,ve=w.transmissive;if(T.setupLights(),k.isArrayCamera){const Le=k.cameras;if(ve.length>0)for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const it=Le[Ne];Yl(Te,ve,M,it)}We&&Je.render(M);for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const it=Le[Ne];ql(w,M,it,it.viewport)}}else ve.length>0&&Yl(Te,ve,M,k),We&&Je.render(M),ql(w,M,k)}j!==null&&H===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),W&&E.end(D),M.isScene===!0&&M.onAfterRender(D,M,k),be.resetDefaultState(),Y=-1,Z=null,v.pop(),v.length>0?(T=v[v.length-1],K.setTextureUnits(T.state.textureUnits),oe===!0&&Oe.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,_!==null&&_.renderEnd()};function Ma(M,k,$,W){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(se)){W&&Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const Te=ne.update(M),ve=M.material;ve.visible&&w.push(M,Te,ve,$,Be.z,null,k)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(se))){const Te=ne.update(M),ve=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Be.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Be.copy(Te.boundingSphere.center)),Be.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){const Le=Te.groups;for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const it=Le[Ne],De=ve[it.materialIndex];De&&De.visible&&w.push(M,Te,De,$,Be.z,it,k)}}else ve.visible&&w.push(M,Te,ve,$,Be.z,null,k)}}const Se=M.children;for(let Te=0,ve=Se.length;Te<ve;Te++)Ma(Se[Te],k,$,W)}function ql(M,k,$,W){const{opaque:X,transmissive:Se,transparent:Te}=M;T.setupLightsView($),oe===!0&&Oe.setGlobalState(D.clippingPlanes,$),W&&y.viewport(ee.copy(W)),X.length>0&&lr(X,k,$),Se.length>0&&lr(Se,k,$),Te.length>0&&lr(Te,k,$),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Yl(M,k,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const De=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new In(1,1,{generateMipmaps:!0,type:De?qn:xn,minFilter:Di,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Se=T.state.transmissionRenderTarget[W.id],Te=W.viewport||ee;Se.setSize(Te.z*D.transmissionResolutionScale,Te.w*D.transmissionResolutionScale);const ve=D.getRenderTarget(),Le=D.getActiveCubeFace(),Ne=D.getActiveMipmapLevel();D.setRenderTarget(Se),D.getClearColor(at),tt=D.getClearAlpha(),tt<1&&D.setClearColor(16777215,.5),D.clear(),We&&Je.render($);const Qe=D.toneMapping;D.toneMapping=Vn;const it=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),oe===!0&&Oe.setGlobalState(D.clippingPlanes,W),lr(M,$,W),K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se),nt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let dt=0,Nt=k.length;dt<Nt;dt++){const Et=k[dt],{object:St,geometry:qt,material:we,group:jt}=Et;if(we.side===Rn&&St.layers.test(W.layers)){const ct=we.side;we.side=sn,we.needsUpdate=!0,$l(St,$,W,qt,we,jt),we.side=ct,we.needsUpdate=!0,De=!0}}De===!0&&(K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se))}D.setRenderTarget(ve,Le,Ne),D.setClearColor(at,tt),it!==void 0&&(W.viewport=it),D.toneMapping=Qe}function lr(M,k,$){const W=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Se=M.length;X<Se;X++){const Te=M[X],{object:ve,geometry:Le,group:Ne}=Te;let Qe=Te.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),ve.layers.test($.layers)&&$l(ve,k,$,Le,Qe,Ne)}}function $l(M,k,$,W,X,Se){_!==null&&X.isNodeMaterial&&_.setObject(M,X),M.onBeforeRender(D,k,$,W,X,Se),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(D,k,$,W,M,Se),X.transparent===!0&&X.side===Rn&&X.forceSinglePass===!1?(X.side=sn,X.needsUpdate=!0,D.renderBufferDirect($,k,W,X,M,Se),X.side=Oi,X.needsUpdate=!0,D.renderBufferDirect($,k,W,X,M,Se),X.side=Rn):D.renderBufferDirect($,k,W,X,M,Se),M.onAfterRender(D,k,$,W,X,Se)}function cr(M,k,$){k.isScene!==!0&&(k=ke);const W=q.get(M),X=T.state.lights,Se=T.state.shadowsArray,Te=X.state.version,ve=de.getParameters(M,X.state,Se,k,$,T.state.lightProbeGridArray),Le=de.getProgramCacheKey(ve);let Ne=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const Qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=he.get(M.envMap||W.environment,Qe),W.envMapRotation=W.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Un),Ne=new Map,W.programs=Ne);let it=Ne.get(Le);if(it!==void 0){if(W.currentProgram===it&&W.lightsStateVersion===Te)return Zl(M,ve),it}else ve.uniforms=de.getUniforms(M),_!==null&&M.isNodeMaterial&&_.build(M,$,ve),M.onBeforeCompile(ve,D),it=de.acquireProgram(ve,Le),Ne.set(Le,it),W.uniforms=ve.uniforms;const De=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Oe.uniform),Zl(M,ve),W.needsLights=Bu(M),W.lightsStateVersion=Te,W.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.sunLights.value=X.state.sun,De.sunLightShadows.value=X.state.sunShadow,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.sunShadowMatrix.value=X.state.sunShadowMatrix,De.sunShadowCascade.value=X.state.sunShadowCascade,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=it,W.uniformsList=null,it}function Kl(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=Yr.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function Zl(M,k){const $=q.get(M);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Ou(M,k){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let $=0,W=M.length;$<W;$++){const X=M[$];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function Fu(M,k,$,W,X){k.isScene!==!0&&(k=ke),K.resetTextureUnits();const Se=k.fog,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,ve=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:st.workingColorSpace,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=he.get(W.envMap||Te,Le),Qe=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,it=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,Nt=!!$.morphAttributes.color;let Et=Vn;W.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Et=D.toneMapping);const St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,qt=St!==void 0?St.length:0,we=q.get(W),jt=T.state.lights;if(oe===!0&&(le===!0||M!==Z)){const Mt=M===Z&&W.id===Y;Oe.setState(W,M,Mt)}let ct=!1;W.version===we.__version?(we.needsLights&&we.lightsStateVersion!==jt.state.version||we.outputColorSpace!==ve||X.isBatchedMesh&&we.batching===!1||!X.isBatchedMesh&&we.batching===!0||X.isBatchedMesh&&we.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&we.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&we.instancing===!1||!X.isInstancedMesh&&we.instancing===!0||X.isSkinnedMesh&&we.skinning===!1||!X.isSkinnedMesh&&we.skinning===!0||X.isInstancedMesh&&we.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&we.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&we.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&we.instancingMorph===!1&&X.morphTexture!==null||we.envMap!==Ne||W.fog===!0&&we.fog!==Se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Oe.numPlanes||we.numIntersection!==Oe.numIntersection)||we.vertexAlphas!==Qe||we.vertexTangents!==it||we.morphTargets!==De||we.morphNormals!==dt||we.morphColors!==Nt||we.toneMapping!==Et||we.morphTargetsCount!==qt||!!we.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,we.__version=W.version);let _n=we.currentProgram;ct===!0&&(_n=cr(W,k,X),_&&W.isNodeMaterial&&_.onUpdateProgram(W,_n,we));let On=!1,ai=!1,Vi=!1;const yt=_n.getUniforms(),Lt=we.uniforms;if(y.useProgram(_n.program)&&(On=!0,ai=!0,Vi=!0),W.id!==Y&&(Y=W.id,ai=!0),we.needsLights){const Mt=Ou(T.state.lightProbeGridArray,X);we.lightProbeGrid!==Mt&&(we.lightProbeGrid=Mt,ai=!0)}if(On||Z!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),yt.setValue(F,"projectionMatrix",M.projectionMatrix),yt.setValue(F,"viewMatrix",M.matrixWorldInverse);const li=yt.map.cameraPosition;li!==void 0&&li.setValue(F,fe.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&yt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),Z!==M&&(Z=M,ai=!0,Vi=!0)}if(we.needsLights&&(jt.state.sunShadowMap.length>0&&yt.setValue(F,"sunShadowMap",jt.state.sunShadowMap,K),jt.state.directionalShadowMap.length>0&&yt.setValue(F,"directionalShadowMap",jt.state.directionalShadowMap,K),jt.state.spotShadowMap.length>0&&yt.setValue(F,"spotShadowMap",jt.state.spotShadowMap,K),jt.state.pointShadowMap.length>0&&yt.setValue(F,"pointShadowMap",jt.state.pointShadowMap,K)),X.isSkinnedMesh){yt.setOptional(F,X,"bindMatrix"),yt.setOptional(F,X,"bindMatrixInverse");const Mt=X.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),yt.setValue(F,"boneTexture",Mt.boneTexture,K))}X.isBatchedMesh&&(yt.setOptional(F,X,"batchingTexture"),yt.setValue(F,"batchingTexture",X._matricesTexture,K),yt.setOptional(F,X,"batchingIdTexture"),yt.setValue(F,"batchingIdTexture",X._indirectTexture,K),yt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&yt.setValue(F,"batchingColorTexture",X._colorsTexture,K));const oi=$.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&B.update(X,$,_n),(ai||we.receiveShadow!==X.receiveShadow)&&(we.receiveShadow=X.receiveShadow,yt.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(Lt.envMapIntensity.value=k.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=jx()),ai){if(yt.setValue(F,"toneMappingExposure",D.toneMappingExposure),we.needsLights&&ku(Lt,Vi),Se&&W.fog===!0&&Ue.refreshFogUniforms(Lt,Se),Ue.refreshMaterialUniforms(Lt,W,ie,Q,T.state.transmissionRenderTarget[M.id]),we.needsLights&&we.lightProbeGrid){const Mt=we.lightProbeGrid;Lt.probesSH.value=Mt.texture,Lt.probesMin.value.copy(Mt.boundingBox.min),Lt.probesMax.value.copy(Mt.boundingBox.max),Lt.probesResolution.value.copy(Mt.resolution)}Yr.upload(F,Kl(we),Lt,K)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Yr.upload(F,Kl(we),Lt,K),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(F,"center",X.center),yt.setValue(F,"modelViewMatrix",X.modelViewMatrix),yt.setValue(F,"normalMatrix",X.normalMatrix),yt.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const Mt=W.uniformsGroups;for(let li=0,Wi=Mt.length;li<Wi;li++){const Ql=Mt[li];re.update(Ql,_n),re.bind(Ql,_n)}}return _n}function ku(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.sunLights.needsUpdate=k,M.sunLightShadows.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Bu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,k,$){const W=q.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(M.texture).__webglTexture=k,q.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){const $=q.get(M);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,$=0){j=M,G=k,H=$;let W=null,X=!1,Se=!1;if(M){const ve=q.get(M);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),ee.copy(M.viewport),Re.copy(M.scissor),Me=M.scissorTest,y.viewport(ee),y.scissor(Re),y.setScissorTest(Me),Y=-1;return}else if(ve.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(ve.__hasExternalTextures)K.rebindTextures(M,q.get(M.texture).__webglTexture,q.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Qe=M.depthTexture;if(ve.__boundDepthTexture!==Qe){if(Qe!==null&&q.has(Qe)&&(M.width!==Qe.image.width||M.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Se=!0);const Ne=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?W=Ne[k][$]:W=Ne[k],X=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?W=q.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[$]:W=Ne,ee.copy(M.viewport),Re.copy(M.scissor),Me=M.scissorTest}else ee.copy(Ee).multiplyScalar(ie).floor(),Re.copy(Ve).multiplyScalar(ie).floor(),Me=pt;if($!==0&&(W=L),y.bindFramebuffer(F.FRAMEBUFFER,W)&&y.drawBuffers(M,W),y.viewport(ee),y.scissor(Re),y.setScissorTest(Me),X){const ve=q.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,ve.__webglTexture,$)}else if(Se){const ve=k;for(let Le=0;Le<M.textures.length;Le++){const Ne=q.get(M.textures[Le]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,$,ve)}}else if(M!==null&&$!==0){const ve=q.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,$)}Y=-1};function Jl(M){const k=q.get(M);return(k.__readFormat!==M.format||k.__readType!==M.type)&&(k.__readFormat=M.format,k.__readType=M.type,k.__formatReadable=C.textureFormatReadable(M.format),k.__typeReadable=C.textureTypeReadable(M.type)),k}this.readRenderTargetPixels=function(M,k,$,W,X,Se,Te,ve=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){y.bindFramebuffer(F.FRAMEBUFFER,Le);try{const Ne=M.textures[ve],Qe=Ne.format,it=Ne.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);const De=Jl(Ne);if(De.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-W&&$>=0&&$<=M.height-X&&F.readPixels(k,$,W,X,ge.convert(Qe),ge.convert(it),Se)}finally{const Ne=j!==null?q.get(j).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,k,$,W,X,Se,Te,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le)if(k>=0&&k<=M.width-W&&$>=0&&$<=M.height-X){y.bindFramebuffer(F.FRAMEBUFFER,Le);const Ne=M.textures[ve],Qe=Ne.format,it=Ne.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);const De=Jl(Ne);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(k,$,W,X,ge.convert(Qe),ge.convert(it),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Nt=j!==null?q.get(j).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Nt);const Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Mf(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(dt),F.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,$=0){const W=Math.pow(2,-$),X=Math.floor(M.image.width*W),Se=Math.floor(M.image.height*W),Te=k!==null?k.x:0,ve=k!==null?k.y:0;K.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Te,ve,X,Se),y.unbindTexture()},this.copyTextureToTexture=function(M,k,$=null,W=null,X=0,Se=0){let Te,ve,Le,Ne,Qe,it,De,dt,Nt;const Et=M.isCompressedTexture?M.mipmaps[Se]:M.image;if($!==null)Te=$.max.x-$.min.x,ve=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,Qe=$.min.y,it=$.isBox3?$.min.z:0;else{const Lt=Math.pow(2,-X);Te=Math.floor(Et.width*Lt),ve=Math.floor(Et.height*Lt),M.isDataArrayTexture?Le=Et.depth:M.isData3DTexture?Le=Math.floor(Et.depth*Lt):Le=1,Ne=0,Qe=0,it=0}W!==null?(De=W.x,dt=W.y,Nt=W.z):(De=0,dt=0,Nt=0);const St=ge.convert(k.format),qt=ge.convert(k.type);let we;k.isData3DTexture?(K.setTexture3D(k,0),we=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(K.setTexture2DArray(k,0),we=F.TEXTURE_2D_ARRAY):(K.setTexture2D(k,0),we=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const jt=y.getParameter(F.UNPACK_ROW_LENGTH),ct=y.getParameter(F.UNPACK_IMAGE_HEIGHT),_n=y.getParameter(F.UNPACK_SKIP_PIXELS),On=y.getParameter(F.UNPACK_SKIP_ROWS),ai=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,Et.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(F.UNPACK_SKIP_IMAGES,it);const Vi=M.isDataArrayTexture||M.isData3DTexture,yt=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const Lt=q.get(M),oi=q.get(k),Mt=q.get(Lt.__renderTarget),li=q.get(oi.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Mt.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Wi=0;Wi<Le;Wi++)Vi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(M).__webglTexture,X,it+Wi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(k).__webglTexture,Se,Nt+Wi)),F.blitFramebuffer(Ne,Qe,Te,ve,De,dt,Te,ve,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||q.has(M)){const Lt=q.get(M),oi=q.get(k);y.bindFramebuffer(F.READ_FRAMEBUFFER,I),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let Mt=0;Mt<Le;Mt++)Vi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.__webglTexture,X,it+Mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,X),yt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oi.__webglTexture,Se,Nt+Mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,oi.__webglTexture,Se),X!==0?F.blitFramebuffer(Ne,Qe,Te,ve,De,dt,Te,ve,F.COLOR_BUFFER_BIT,F.NEAREST):yt?F.copyTexSubImage3D(we,Se,De,dt,Nt+Mt,Ne,Qe,Te,ve):F.copyTexSubImage2D(we,Se,De,dt,Ne,Qe,Te,ve);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(we,Se,De,dt,Nt,Te,ve,Le,St,qt,Et.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(we,Se,De,dt,Nt,Te,ve,Le,St,Et.data):F.texSubImage3D(we,Se,De,dt,Nt,Te,ve,Le,St,qt,Et):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,De,dt,Te,ve,St,qt,Et.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,De,dt,Et.width,Et.height,St,Et.data):F.texSubImage2D(F.TEXTURE_2D,Se,De,dt,Te,ve,St,qt,Et);y.pixelStorei(F.UNPACK_ROW_LENGTH,jt),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),y.pixelStorei(F.UNPACK_SKIP_PIXELS,_n),y.pixelStorei(F.UNPACK_SKIP_ROWS,On),y.pixelStorei(F.UNPACK_SKIP_IMAGES,ai),Se===0&&k.generateMipmaps&&F.generateMipmap(we),y.unbindTexture()},this.initRenderTarget=function(M){q.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){G=0,H=0,j=null,y.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const dh={type:"change"},Ll={type:"start"},pu={type:"end"},zr=new ca,ph=new An,t_=Math.cos(70*Tf.DEG2RAD),Ot=new O,on=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lo=1e-6;class mu extends np{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Dn,this._lastTargetPosition=new O,this._quat=new Dn().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gc,this._sphericalDelta=new Gc,this._scale=1,this._panOffset=new O,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new O,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i_.bind(this),this._onPointerDown=n_.bind(this),this._onPointerUp=s_.bind(this),this._onContextMenu=u_.bind(this),this._onMouseWheel=o_.bind(this),this._onKeyDown=l_.bind(this),this._onTouchStart=c_.bind(this),this._onTouchMove=h_.bind(this),this._onMouseDown=r_.bind(this),this._onMouseMove=a_.bind(this),this._interceptControlDown=f_.bind(this),this._interceptControlUp=d_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=_t.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dh),this.update(),this.state=_t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ot.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new O(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(zr.origin.copy(this.object.position),zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zr.direction))<t_?this.object.lookAt(this.target):(ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),zr.intersectPlane(ph,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lo||this._lastTargetPosition.distanceToSquared(this.target)>lo?(this.dispatchEvent(dh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function n_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function i_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function s_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pu),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function r_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Ll)}function a_(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function o_(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent(Ll),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(pu))}function l_(n){this.enabled!==!1&&this._handleKeyDown(n)}function c_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Hn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case Hn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Hn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Ll)}function h_(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function u_(n){this.enabled!==!1&&n.preventDefault()}function f_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class p_ extends Ft{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ae(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}}const as=new O,mh=new rt,gh=new rt,xh=new O,_h=new O;class m_{constructor(e={}){const t=this;let i,s,r,a;const o={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),mh.copy(x.matrixWorldInverse),gh.multiplyMatrices(x.projectionMatrix,mh),l(p,p,x),this.sortObjects&&d(p)},this.setSize=function(p,x){i=p,s=x,r=i/2,a=s/2,c.style.width=p+"px",c.style.height=x+"px"};function h(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,g=p.children.length;x<g;x++)h(p.children[x])}function l(p,x,g){if(p.visible===!1){h(p);return}if(p.isCSS2DObject){as.setFromMatrixPosition(p.matrixWorld),as.applyMatrix4(gh);const m=as.z>=-1&&as.z<=1&&p.layers.test(g.layers)===!0,b=p.element;if(b.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,x,g);const S=100*p.center.x,w=100*p.center.y;b.style.transformOrigin=`${S}% ${w}%`;const T=-p.rotation2D,R=as.x*r+r,v=-as.y*a+a;b.style.transform=`translate(${-S}%, ${-w}%) translate(${R}px, ${v}px) rotate(${T}rad)`,b.parentNode!==c&&c.appendChild(b),p.onAfterRender(t,x,g)}const A={distanceToCameraSquared:u(g,p)};o.objects.set(p,A)}for(let m=0,b=p.children.length;m<b;m++)l(p.children[m],x,g)}function u(p,x){return xh.setFromMatrixPosition(p.matrixWorld),_h.setFromMatrixPosition(x.matrixWorld),xh.distanceToSquared(_h)}function f(p){const x=[];return p.traverseVisible(function(g){g.isCSS2DObject&&x.push(g)}),x}function d(p){const x=f(p).sort(function(m,b){if(m.renderOrder!==b.renderOrder)return b.renderOrder-m.renderOrder;const A=o.objects.get(m).distanceToCameraSquared,S=o.objects.get(b).distanceToCameraSquared;return A-S}),g=x.length;for(let m=0,b=x.length;m<b;m++)x[m].element.style.zIndex=g-m}}}let co=7;const Pe=()=>(co=co*16807%2147483647,(co-1)/2147483646);let zn=1;function g_(n){zn=n}function vt(n=512){n=Math.max(64,Math.round(n*zn));const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d",{willReadFrequently:!0});return t.scale(n/(n/zn),n/(n/zn)),[e,t]}function ln(n,e,t=2,i=!1){const s=n.width,r=n.getContext("2d").getImageData(0,0,s,s).data,a=document.createElement("canvas");a.width=a.height=s;const o=a.getContext("2d"),c=o.createImageData(s,s),h=(l,u)=>{l=(l+s)%s,u=(u+s)%s;const f=(u*s+l)*4,d=(r[f]*.3+r[f+1]*.59+r[f+2]*.11)/255;return i?1-d:d};for(let l=0;l<s;l++)for(let u=0;u<s;u++){const f=(h(u+1,l)-h(u-1,l))*t,d=(h(u,l+1)-h(u,l-1))*t,p=Math.hypot(f,d,1),x=(l*s+u)*4;c.data[x]=(-f/p*.5+.5)*255,c.data[x+1]=(d/p*.5+.5)*255,c.data[x+2]=(1/p*.5+.5)*255,c.data[x+3]=255}return o.putImageData(c,0,0),mt(a,e,!1)}function mt(n,e,t=!0){const i=new Qf(n);return i.wrapS=i.wrapT=Zr,i.repeat.set(1/e,1/e),t&&(i.colorSpace=nn),i.anisotropy=4,i}function en(n,e,t,i,s){for(let r=0;r<s;r++){n.fillStyle=i[Pe()*i.length|0],n.globalAlpha=t*Pe();const a=1+Pe()*2.5;n.fillRect(Pe()*e,Pe()*e,a,a)}n.globalAlpha=1}function x_(){const n={};{const[e,t]=vt(256);t.fillStyle="#efebe3",t.fillRect(0,0,256,256),en(t,256,.25,["#ffffff","#ddd6ca","#e6e0d5"],5e3),n.stucco=mt(e,6)}{const[e,t]=vt(256);t.fillStyle="#f2ece2",t.fillRect(0,0,256,256),en(t,256,.18,["#fbf7f0","#e4dccf"],3e3),n.plaster=mt(e,6)}{const[e,t]=vt(512);t.fillStyle="#2b2724",t.fillRect(0,0,512,512);const i=512/12;for(let s=0;s<12;s++){const r=30+Pe()*14;t.fillStyle=`rgb(${r+6},${r+2},${r})`,t.fillRect(s*i,0,i-2,512);for(let a=0;a<140;a++)t.fillStyle=Pe()<.5?"#1c1a18":"#45403a",t.globalAlpha=.5,t.fillRect(s*i+Pe()*i,Pe()*512,2+Pe()*8,1+Pe()*2);t.globalAlpha=1,t.fillStyle="#151311",t.fillRect(s*i+i-2,0,2,512)}n.charred=mt(e,6)}{const[e,t]=vt(512);let i=0;const s=["#b98d6c","#c49a78","#a87d5f","#cfa888","#b48a6a","#9f7558","#c8a080"];for(;i<512;){const r=10+Pe()*34;t.fillStyle=s[Pe()*s.length|0],t.fillRect(0,i,512,r),i+=r}en(t,512,.35,["#8a654b","#dcc0a2","#9a7458"],9e3),n.rammed=mt(e,8)}{const[e,t]=vt(512);t.fillStyle="#9d968a",t.fillRect(0,0,512,512);const i=4,s=512/i;for(let r=0;r<i;r++){let a=-Pe()*100;for(;a<512;){const o=90+Pe()*120,c=175+Pe()*25;t.fillStyle=`rgb(${c},${c-6},${c-16})`,t.fillRect(a+2,r*s+2,o-4,s-4),a+=o}}en(t,512,.25,["#8e877b","#d8d1c4"],6e3),n.stone=mt(e,8)}{const[e,t]=vt(256);t.fillStyle="#6f6a62",t.fillRect(0,0,256,256);for(let i=0;i<4;i++){let s=-Pe()*60;for(;s<256;){const r=40+Pe()*70,a=120+Pe()*30;t.fillStyle=`rgb(${a},${a-4},${a-10})`,t.fillRect(s+2,i*64+2,r-3,60),s+=r}}n.plinth=mt(e,4)}{const[e,t]=vt(512);t.fillStyle="#c9a57a",t.fillRect(0,0,512,512);const i=512/8;for(let s=0;s<8;s++){let r=-Pe()*300;for(;r<512;){const a=200+Pe()*250,o=Pe()*18;t.fillStyle=`rgb(${200+o},${164+o},${118+o})`,t.fillRect(s*i+1,r+1,i-2,a-2);for(let c=0;c<18;c++){t.strokeStyle="rgba(140,100,60,0.15)",t.beginPath();const h=s*i+Pe()*i;t.moveTo(h,r),t.lineTo(h+Pe()*6-3,r+a),t.stroke()}r+=a}}n.oak=mt(e,6)}{const[e,t]=vt(256);t.fillStyle="#8a6a4a",t.fillRect(0,0,256,256);for(let i=0;i<10;i++){const s=Pe()*20;t.fillStyle=`rgb(${150+s},${115+s},${80+s})`,t.fillRect(i*25.6+1,0,23.6,256)}n.deck=mt(e,4)}{const[e,t]=vt(256);t.fillStyle="#b07a4f",t.fillRect(0,0,256,256);for(let i=0;i<16;i++){const s=Pe()*22;t.fillStyle=`rgb(${176+s},${122+s},${80+s})`,t.fillRect(0,i*16+1,256,14)}n.soffit=mt(e,4)}{const[e,t]=vt(256);t.fillStyle="#cfc58e",t.fillRect(0,0,256,256);for(let i=0;i<256;i+=3)t.fillStyle=i%6?"#c4b97f":"#d8cf9c",t.fillRect(0,i,256,2);t.fillStyle="#3d4a35",t.fillRect(0,0,256,6),t.fillRect(0,125,256,6),t.fillRect(0,0,6,256),n.tatami=mt(e,6)}{const[e,t]=vt(256);t.fillStyle="#3b3b39",t.fillRect(0,0,256,256),en(t,256,.7,["#555552","#2a2a29","#6b6658"],6e3),n.rubber=mt(e,4)}{const[e,t]=vt(256);t.fillStyle="#6a645c",t.fillRect(0,0,256,256);for(let i=0;i<8;i++)t.fillStyle="#7d776e",t.fillRect(i*32,0,3,256),t.fillStyle="#4e4943",t.fillRect(i*32+3,0,2,256);n.seam=mt(e,12)}{const[e,t]=vt(256);t.fillStyle="#d9d4c8",t.fillRect(0,0,256,256),en(t,256,.6,["#bfb8aa","#eeeae2","#a9a294"],9e3);for(let i=0;i<256;i+=16)t.strokeStyle="rgba(150,142,128,0.45)",t.lineWidth=2,t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();n.gravel=mt(e,6)}{const[e,t]=vt(256);t.fillStyle="#5f8c3c",t.fillRect(0,0,256,256),en(t,256,.5,["#4f7a30","#77a24e","#6a9545"],8e3),n.turf=mt(e,6)}{const[e,t]=vt(512);t.fillStyle="#a3a46e",t.fillRect(0,0,512,512),en(t,512,.5,["#8f9660","#b8b37e","#868c55","#b0a46c"],26e3),en(t,512,.9,["#e2c75a","#d18bb0","#f2f0e6","#c97a4a","#9a7fc4"],2200),n.meadow=mt(e,30)}{const[e,t]=vt(256);t.fillStyle="#c08552",t.fillRect(0,0,256,256);for(let i=0;i<12;i++){const s=Pe()*20;t.fillStyle=`rgb(${190+s},${132+s},${82+s})`,t.fillRect(0,i*21+1,256,19)}n.cedar=mt(e,4)}{const[e,t]=vt(256);t.fillStyle="#a9a59e",t.fillRect(0,0,256,256),en(t,256,.3,["#97938c","#c2beb6"],5e3),n.concrete=mt(e,6)}{const[e,t]=vt(256);t.fillStyle="#efe9de",t.fillRect(0,0,256,256);for(let i=0;i<140;i++){const s=Pe()*256,r=Pe()*256,a=10+Pe()*40,o=t.createRadialGradient(s,r,0,s,r,a),c=Pe()<.5?"rgba(255,252,246,0.35)":"rgba(214,204,188,0.28)";o.addColorStop(0,c),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(s-a,r-a,a*2,a*2)}en(t,256,.12,["#fbf7f0","#ddd3c4"],2500),n.lime=mt(e,8),n.limeN=ln(e,8,1.2)}{const[e,t]=vt(512);t.fillStyle="#b98544",t.fillRect(0,0,512,512);const i=512/7;for(let s=0;s<7;s++){let r=-Pe()*300;for(;r<512;){const a=220+Pe()*260,o=Pe()*22-8;t.fillStyle=`rgb(${200+o},${143+o},${78+o*.6})`,t.fillRect(s*i+1,r+1,i-2,a-2);for(let c=0;c<26;c++){t.strokeStyle=`rgba(${120+Pe()*30},${70+Pe()*20},30,${.08+Pe()*.14})`,t.lineWidth=1+Pe(),t.beginPath();const h=s*i+Pe()*i;t.moveTo(h,r),t.bezierCurveTo(h+Pe()*8-4,r+a*.3,h+Pe()*8-4,r+a*.7,h+Pe()*6-3,r+a),t.stroke()}t.fillStyle="rgba(70,40,15,0.6)",t.fillRect(s*i,r,i,1.5),r+=a}t.fillStyle="rgba(70,40,15,0.55)",t.fillRect(s*i,0,1.5,512)}n.honey=mt(e,7),n.honeyN=ln(e,7,1.5)}{const[e,t]=vt(512);t.fillStyle="#6e4e2e",t.fillRect(0,0,512,512);const i=512/(5*Math.SQRT2)/1,s=5*i,r=Math.SQRT1_2;for(let a=-8;a<=8;a++)for(let o=-30;o<=30;o++)for(const c of[0,1]){const h=o*i+a*s,l=o*i-a*s+(c?i:0),[u,f,d,p]=c?[h,l,i,s]:[h,l,s,i];t.setTransform(zn*r,-zn*r,zn*r,zn*r,0,0);const x=Pe()*26-6;t.fillStyle=`rgb(${200+x},${160+x},${110+x*.8})`,t.fillRect(u+1.2,f+1.2,d-2.4,p-2.4);for(let g=0;g<4;g++)t.fillStyle="rgba(120,80,40,0.13)",c?t.fillRect(u+2+Pe()*(d-4),f+2,1,p-4):t.fillRect(u+2,f+2+Pe()*(p-4),d-4,1)}t.setTransform(zn,0,0,zn,0,0),n.herring=mt(e,2.4),n.herringN=ln(e,2.4,2.2)}{const[e,t]=vt(512);t.fillStyle="#f2efea",t.fillRect(0,0,512,512),en(t,512,.1,["#e5e0d8","#ffffff"],4e3);for(let i=0;i<14;i++){let s=Pe()*512,r=Pe()*512;t.strokeStyle=i%4?"rgba(150,140,128,0.35)":"rgba(160,128,80,0.45)",t.lineWidth=i%4?.8+Pe():2+Pe()*2,t.beginPath(),t.moveTo(s,r);for(let a=0;a<30;a++)s+=20+Pe()*10,r+=Pe()*30-15,t.lineTo(s%512,r),s>512&&(s-=512,t.moveTo(s,r));t.stroke()}n.marble=mt(e,6)}{const[e,t]=vt(256);t.fillStyle="#2b2c2c",t.fillRect(0,0,256,256),en(t,256,.35,["#3a3b3b","#1f2020","#45464a"],7e3);for(let i=0;i<6;i++)t.strokeStyle="rgba(120,120,118,0.18)",t.lineWidth=.6,t.beginPath(),t.moveTo(Pe()*256,0),t.lineTo(Pe()*256,256),t.stroke();t.fillStyle="#1a1a1a",t.fillRect(0,0,256,1.5),t.fillRect(0,0,1.5,256),t.fillRect(0,128,256,1.5),n.blackstone=mt(e,4),n.blackstoneN=ln(e,4,1.5)}{const[e,t]=vt(256);t.fillStyle="#e8e4da",t.fillRect(0,0,256,256);const i=8,s=256/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Pe(),c=t.createLinearGradient(a*s,r*s,a*s+s,r*s+s);c.addColorStop(0,`rgb(${40+o*30},${110+o*40},${84+o*30})`),c.addColorStop(.6,`rgb(${30+o*20},${92+o*34},${70+o*24})`),c.addColorStop(1,`rgb(${56+o*30},${130+o*40},${100+o*30})`),t.fillStyle=c,t.fillRect(a*s+2,r*s+2,s-4,s-4),t.fillStyle="rgba(255,255,255,0.18)",t.fillRect(a*s+4,r*s+4,s*.3,2)}n.zellige=mt(e,1.33),n.zelligeN=ln(e,1.33,3)}{const[e,t]=vt(256);t.fillStyle="#e8d8b8",t.fillRect(0,0,256,256);for(let i=0;i<10;i++){const s=Pe()*14;t.fillStyle=`rgb(${232+s*.5},${214+s},${178+s})`,t.fillRect(0,i*25.6+1,256,23.6)}en(t,256,.15,["#d6c39c","#f4ead6"],1500),n.aspen=mt(e,3),n.aspenN=ln(e,3,1.5)}{const[e,t]=vt(256);t.fillStyle="#5f5a52",t.fillRect(0,0,512,512);const i=[];for(let c=0;c<26;c++)i.push([Pe()*512,Pe()*512]);const s=t.getImageData(0,0,e.width,e.height),r=e.width,a=512/r,o=i.map(()=>{const c=150+Pe()*45;return[c,c-6-Pe()*8,c-16-Pe()*14]});for(let c=0;c<r;c++)for(let h=0;h<r;h++){let l=1e9,u=1e9,f=0;const d=h*a,p=c*a;for(let b=0;b<i.length;b++)for(const A of[-512,0,512])for(const S of[-512,0,512]){const w=Math.hypot(d-i[b][0]-A,p-i[b][1]-S);w<l?(u=l,l=w,f=b):w<u&&(u=w)}const x=(c*r+h)*4,g=u-l<5?.45:1,m=.92+Pe()*.12;s.data[x]=o[f][0]*g*m,s.data[x+1]=o[f][1]*g*m,s.data[x+2]=o[f][2]*g*m,s.data[x+3]=255}t.putImageData(s,0,0),n.flag=mt(e,12),n.flagN=ln(e,12,2.5)}{const[e,t]=vt(256);t.fillStyle="#3d5a50",t.fillRect(0,0,256,256);const i=8,s=256/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Pe()*26;t.fillStyle=`rgb(${82+o},${128+o},${112+o})`,t.fillRect(a*s+1.5,r*s+1.5,s-3,s-3)}n.pooltile=mt(e,4),n.pooltileN=ln(e,4,2)}{const[e,t]=vt(256);t.fillStyle="#b8b0a2",t.fillRect(0,0,256,256);for(let i=0;i<4;i++)for(let s=0;s<2;s++){const r=214+Pe()*16;t.fillStyle=`rgb(${r},${r-6},${r-18})`,t.fillRect(s*128+i%2*64+1,i*64+1,126,62),t.fillRect(s*128+i%2*64+1-256,i*64+1,126,62)}en(t,256,.15,["#c9c1b2","#ece6da"],3e3),n.stonetile=mt(e,8),n.stonetileN=ln(e,8,1.6)}{const[e,t]=vt(128);t.fillStyle="#e4dccd",t.fillRect(0,0,128,128);for(let i=0;i<128;i+=2)t.fillStyle="rgba(190,178,158,0.25)",t.fillRect(0,i,128,1),t.fillRect(i,0,1,128);n.linen=mt(e,1.5)}return n.charredN=ln(n.charred.image,6,2.5),n.seamN=ln(n.seam.image,12,3),n.tatamiN=ln(n.tatami.image,6,1.5),n.rammedN=ln(n.rammed.image,8,1.2),n.gravelN=ln(n.gravel.image,6,2),n}function __(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Pt;let h=0;for(let l=0;l<n.length;++l){const u=n[l];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,l),h+=d}}if(t){let l=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+l);l+=n[f].attributes.position.count}c.setIndex(u)}for(const l in r){const u=yh(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(const l in a){const u=a[l][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<a[l].length;++x)d.push(a[l][x][f]);const p=yh(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(p)}}}return c}function yh(n){let e,t,i,s=-1,r=0;for(let h=0;h<n.length;++h){const l=n[h];if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*t}const a=new e(r),o=new fn(a,t,i);let c=0;for(let h=0;h<n.length;++h){const l=n[h];if(l.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=l.count;f<d;f++)for(let p=0;p<t;p++){const x=l.getComponent(f,p);o.setComponent(f+u,p,x)}}else a.set(l.array,c);c+=l.count*t}return s!==void 0&&(o.gpuType=s),o}const y_=[{id:"101",name:"Kitchen",wing:"Living Pavilion",x0:20,y0:55,x1:36,y1:79,h:12,floor:"stonetile",cond:!0,notes:"Bright, sleek kitchen: white handleless cabinets, black stone counters and a green zellige backsplash. A 10-ft marble island seats five on stools. Stainless range under a glass chimney hood, white apron sink with a brass faucet, open honey-oak shelves.",fin:"Large stone tiles; lime plaster; white handleless cabinets; black stone counters; green zellige backsplash; marble island; honey-oak open shelves; stainless range; glass chimney hood; white apron sink; brass faucet",floorName:"Large-format limestone tiles",w:16,d:24,area:384},{id:"102",name:"Dining",wing:"Living Pavilion",x0:36,y0:55,x1:50,y1:79,h:12,floor:"herring",cond:!0,notes:"Seats eight under exposed fir beams and a big paper lantern. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north.",fin:"Oak herringbone; lime plaster; exposed fir beams; cedar ceiling; honey-oak table for eight; paper lantern",floorName:"Oak herringbone",w:14,d:24,area:336},{id:"103",name:"Living + Conversation Pit",wing:"Living Pavilion",x0:50,y0:55,x1:72,y1:79,h:12,floor:"herring",cond:!0,notes:"The heart of the house, fully open to the garden: 21 ft of pocketing glass to the courtyard and a big fixed mountain-view window to the north. 16-ft sunken conversation pit with a low modular sofa, cognac leather lounge chair, paper lanterns, shoji screens to the dining room, and art on the east wall. A slim linear gas fire sits in a lime-plaster plinth (no stone fireplace).",fin:"Oak herringbone; lime plaster; exposed fir beams; cedar ceiling; linen pit upholstery; cognac leather; paper lanterns; shoji screens; art wall",floorName:"Oak herringbone",w:22,d:24,area:528},{id:"104",name:"Walk-in Pantry",wing:"Living Pavilion",x0:10,y0:67,x1:20,y1:79,h:10,floor:"stonetile",cond:!0,notes:"Floor-to-ceiling open honey-oak shelving, second fridge, appliance counter.",fin:"Large stone tiles; lime plaster; honey-oak open shelving",floorName:"Large-format limestone tiles",w:10,d:12,area:120},{id:"105",name:"Mudroom + Gear",wing:"Living Pavilion",x0:10,y0:55,x1:20,y1:67,h:10,floor:"stonetile",cond:!0,notes:"Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash.",fin:"Large stone tiles; lime plaster; honey-oak cubbies; stone dog wash",floorName:"Large-format limestone tiles",w:10,d:12,area:120},{id:"201",name:"Master Bedroom",wing:"Sleeping Wing",x0:72,y0:59,x1:86,y1:83,h:11,floor:"honey",cond:!0,notes:"Floor-to-ceiling glass to the mountains with sheer linen curtains, cove lighting, and a big fan under a wood ceiling. Low linen-wrapped bed against a lime-plaster headwall ledge (no wood platform or headboard), and a pair of lounge chairs at the view window.",fin:"Honey-oak floor; lime plaster; wood ceiling with cove lighting; sheer linen curtains; big ceiling fan; linen bed",floorName:"Wide-plank honey oak",w:14,d:24,area:336},{id:"202",name:"Master Bath",wing:"Sleeping Wing",x0:86,y0:69,x1:98,y1:83,h:10,floor:"blackstone",cond:!0,notes:"Deep Japanese hinoki soaking tub at the corner window under a skylight. Open walk-in rain shower behind a black-stone wall (no glass enclosure), one long floating oak vanity with integrated stone basins and matte black taps, and a WC room. Opens to a walled bath garden.",fin:"Black stone floor and shower wall; lime plaster; hinoki soaking tub; floating oak vanity, integrated basins; matte black taps; skylight",floorName:"Honed black stone",w:12,d:14,area:168},{id:"203",name:"Master Closet",wing:"Sleeping Wing",x0:86,y0:59,x1:98,y1:69,h:10,floor:"honey",cond:!0,notes:"Walk-in closet with honey-oak millwork and a center island.",fin:"Honey-oak floor and millwork; lime plaster",floorName:"Wide-plank honey oak",w:12,d:10,area:120},{id:"204",name:"East Engawa Gallery",wing:"Sleeping Wing",x0:72,y0:14,x1:78,y1:59,h:10,floor:"honey",cond:!0,notes:"Glazed engawa along the courtyard: honey-oak floor, sliding glass, a long low bench and wall-mounted art. Links living, bedrooms and the wellness wing.",fin:"Honey-oak floor; lime plaster; black steel sliding glass",floorName:"Wide-plank honey oak",w:6,d:45,area:270},{id:"205",name:"Laundry",wing:"Sleeping Wing",x0:78,y0:49,x1:88,y1:59,h:10,floor:"stone",cond:!0,notes:"Next to the bedrooms. Stacked W/D pair, folding counter, drying rack.",fin:"Honed limestone; lime plaster; white cabinets",floorName:"Honed limestone",w:10,d:10,area:100},{id:"206",name:"Linen + Mechanical",wing:"Sleeping Wing",x0:88,y0:49,x1:98,y1:59,h:10,floor:"concrete",cond:!0,notes:"Linen storage, heat pump air handler, ERV, water heating.",fin:"Sealed concrete; painted plaster",floorName:"Sealed concrete",w:10,d:10,area:100},{id:"207",name:"Kids' Room 1",wing:"Sleeping Wing",x0:85,y0:36.5,x1:98,y1:49,h:10,floor:"honey",cond:!0,notes:"Compact 13 x 12.5 ft calm white room: window-seat reading nook on the east window, desk by the window, wardrobe, low cube shelves with bins, a beanbag, and a small bouldering wall with a crash mat.",fin:"Honey-oak floor; calm white lime plaster; oak window seat with linen cushion; oak wardrobe; cube bins; bouldering panel",floorName:"Wide-plank honey oak",w:13,d:12.5,area:162.5},{id:"208",name:"Jack-and-Jill Bath",wing:"Sleeping Wing",x0:78,y0:30,x1:85,y1:45.5,h:10,floor:"stone",cond:!0,notes:"Tighter 7 x 15.5 ft bath (about 109 SF) between the kids' rooms: two vanities, WC and a tiled tub-shower, lockable from each side.",fin:"Honed limestone; white tile tub-shower; oak vanities",floorName:"Honed limestone",w:7,d:15.5,area:108.5},{id:"209",name:"Kids' Room 2 / Guest",wing:"Sleeping Wing",x0:85,y0:24,x1:98,y1:36.5,h:10,floor:"honey",cond:!0,notes:"Compact 13 x 12.5 ft room that still fits a queen bed, so it doubles as the guest room. Window-seat nook, desk by the window, cube shelves, and a small climbing wall feature. The Guest / Pool Bath is just down the engawa.",fin:"Honey-oak floor; calm white lime plaster; oak window seat; cube bins; climbing panel",floorName:"Wide-plank honey oak",w:13,d:12.5,area:162.5},{id:"210",name:"Guest / Pool Bath",wing:"Sleeping Wing",x0:78,y0:14,x1:88,y1:24,h:10,floor:"stone",cond:!0,notes:"Guest-capable full bath (walk-in shower, vanity, WC) reached from the engawa, also serving the pool and Kids' Room 2 when it hosts guests.",fin:"Honed limestone; tiled walk-in shower; oak vanity",floorName:"Honed limestone",w:10,d:10,area:100},{id:"211",name:"Pool Equipment",wing:"Sleeping Wing",x0:88,y0:14,x1:98,y1:24,h:9,floor:"concrete",cond:!1,notes:"Unconditioned. Pool pump and filter, outdoor storage, exterior access only.",fin:"Sealed concrete",floorName:"Sealed concrete",w:10,d:10,area:100},{id:"212",name:"Kids' Entry + Closet",wing:"Sleeping Wing",x0:78,y0:24,x1:85,y1:30,h:10,floor:"honey",cond:!0,notes:"Entry vestibule from the east engawa to Kids' Room 2, with a wardrobe.",fin:"Honey-oak floor; lime plaster; oak wardrobe",floorName:"Wide-plank honey oak",w:7,d:6,area:42},{id:"213",name:"Kids' Entry",wing:"Sleeping Wing",x0:78,y0:45.5,x1:85,y1:49,h:10,floor:"honey",cond:!0,notes:"Short entry vestibule from the east engawa to Kids' Room 1.",fin:"Honey-oak floor; lime plaster",floorName:"Wide-plank honey oak",w:7,d:3.5,area:24.5},{id:"301",name:"South Covered Walkway",wing:"Wellness + Gym Wing",x0:36,y0:22,x1:72,y1:27,h:10,floor:"flagstone",cond:!1,notes:"Open-air covered walkway (not conditioned) under the wellness-wing eave, closing the courtyard ring. Flagstone floor, open to the courtyard, with glass doors into the east and west galleries.",fin:"Flagstone floor; open-air, covered by the wellness-wing roof; cedar soffit",floorName:"Flagstone (open-air)",w:36,d:5,area:180},{id:"302",name:"Exercise Room",wing:"Wellness + Gym Wing",x0:28,y0:0,x1:50,y1:22,h:12,floor:"honey",cond:!0,notes:"Calm studio look: honey-oak floor with a rubber lifting area, a high wood ceiling, and a mirror wall. Free-standing rig with wood rings and a climbing rope, Pilates Cadillac and reformer, wood water rower, treadmill, kettlebell and dumbbell rack, and a bars-and-bands wall. Glass slides open to the sprint lane and an outdoor pull-up station.",fin:"Honey-oak floor; rubber lifting tiles; lime plaster; high wood ceiling; mirror wall; black steel rig; wood rings",floorName:"Wide-plank honey oak",w:22,d:22,area:484},{id:"303",name:"Wet Room",wing:"Wellness + Gym Wing",x0:50,y0:9,x1:66,y1:22,h:10,floor:"blackstone",cond:!0,notes:"Black-stone wet room: two rain showers, a built-in cold plunge lined in green zellige (39-50 F), teak bench. Serves the sauna and steam room.",fin:"Black stone floor and walls; green zellige plunge; teak bench",floorName:"Honed black stone",w:16,d:13,area:208},{id:"304",name:"Sauna",wing:"Wellness + Gym Wing",x0:50,y0:0,x1:58,y1:9,h:8,floor:"aspen",cond:!0,notes:"Warm cedar walls with tiered pale-aspen benches, backlit underneath, and an electric rock heater (no wood stove). Low window toward the pool and meadow.",fin:"Cedar walls and ceiling; pale aspen tiered benches, backlit; aspen duckboard floor; electric rock heater",floorName:"Aspen duckboard",w:8,d:9,area:72},{id:"305",name:"Steam Room",wing:"Wellness + Gym Wing",x0:58,y0:0,x1:66,y1:9,h:8,floor:"blackstone",cond:!0,notes:"Stone steam room (not a white hammam): honed black stone on the walls, floor and heated bench.",fin:"Honed black stone floor, walls and heated bench",floorName:"Honed black stone",w:8,d:9,area:72},{id:"306",name:"Changing + Towels",wing:"Wellness + Gym Wing",x0:66,y0:0,x1:72,y1:22,h:10,floor:"stone",cond:!0,notes:"Towels, robes, honey-oak lockers. Door to the pool deck and outdoor shower.",fin:"Honed limestone; lime plaster; honey-oak lockers",floorName:"Honed limestone",w:6,d:22,area:132},{id:"401",name:"Entry Genkan",wing:"Studio + Arrival",x0:18,y0:46,x1:30,y1:55,h:10,floor:"stonetile",cond:!0,notes:"Stone genkan with a step-up to the oak floor, a rammed-earth feature wall and one large artwork. Solid charred-oak pivot door (no glass entry). The first view lines up across the engawa into the courtyard.",fin:"Large stone tiles; rammed-earth feature wall; lime plaster; charred-oak pivot door",floorName:"Large-format limestone tiles",w:12,d:9,area:108},{id:"402",name:"Coat + Shoe Closet",wing:"Studio + Arrival",x0:18,y0:40,x1:24,y1:46,h:10,floor:"honey",cond:!0,notes:"Coat and shoe storage.",fin:"Honey-oak floor; oak millwork",floorName:"Wide-plank honey oak",w:6,d:6,area:36},{id:"403",name:"Powder Room",wing:"Studio + Arrival",x0:24,y0:40,x1:30,y1:46,h:10,floor:"stone",cond:!0,notes:"Powder room by the entry: integrated stone basin, lime-plaster walls.",fin:"Honed limestone; lime plaster; integrated stone basin",floorName:"Honed limestone",w:6,d:6,area:36},{id:"404",name:"Tatami Room",wing:"Studio + Arrival",x0:18,y0:28,x1:30,y1:40,h:9,floor:"tatami",cond:!0,notes:"8-mat (12 x 12 ft) tatami room (loved) with a tokonoma alcove, low table, zabuton and a paper andon lantern. Shoji slide open to the engawa and courtyard; low garden window. Used for tea, meditation, or as an overflow guest room.",fin:"Tatami; lime plaster; shoji; walnut tokonoma",floorName:"Tatami (8 mats)",w:12,d:12,area:144},{id:"405",name:"Instrument + AV Closet",wing:"Studio + Arrival",x0:18,y0:22,x1:30,y1:28,h:10,floor:"honey",cond:!0,notes:"Cases, cables, rack gear and the network closet. Opens to the office.",fin:"Honey-oak floor; painted plaster",floorName:"Wide-plank honey oak",w:12,d:6,area:72},{id:"406",name:"West Engawa Gallery",wing:"Studio + Arrival",x0:30,y0:22,x1:36,y1:55,h:10,floor:"honey",cond:!0,notes:"Glazed engawa from the entry to the office and great room.",fin:"Honey-oak floor; lime plaster; black steel sliding glass",floorName:"Wide-plank honey oak",w:6,d:33,area:198},{id:"407",name:"Office / Music Loft",wing:"Studio + Arrival",x0:4,y0:0,x1:28,y1:22,h:14,floor:"honey",cond:!0,notes:"Loft-like room with a 14-ft sculpted wood ceiling, acoustic ceiling clouds and a skylight. Sit-stand desk facing the garden glass, studio desk with the mixer, monitors and MPC, digital piano, e-drum kit, a guitar wall, mic, PA speakers, fabric acoustic panels on lime-plaster walls, layered pendants and an RGB light strip. Double-stud walls keep it acoustically separate from the bedrooms.",fin:"Honey-oak floor; lime plaster; fabric acoustic panels; acoustic ceiling clouds; sculpted wood ceiling; skylight; layered pendants",floorName:"Wide-plank honey oak",w:24,d:22,area:528}],v_=[{o:"h",c:55,a:10,b:18,pos:"105",neg:null,ext:!0,h:10,feats:[{a:11,b:17,k:"window",x:[3,7]}]},{o:"h",c:55,a:18,b:20,pos:"105",neg:"401",ext:!1,h:10,feats:[]},{o:"h",c:55,a:20,b:30,pos:"101",neg:"401",ext:!1,h:12,feats:[]},{o:"h",c:55,a:30,b:36,pos:"101",neg:"406",ext:!1,h:12,feats:[{a:30,b:36,k:"open",x:null}]},{o:"h",c:55,a:36,b:50,pos:"102",neg:null,ext:!0,h:12,feats:[{a:36.5,b:49.5,k:"glass",x:null}]},{o:"h",c:55,a:50,b:72,pos:"103",neg:null,ext:!0,h:12,feats:[{a:50.5,b:71.5,k:"glass",x:null}]},{o:"h",c:79,a:10,b:20,pos:null,neg:"104",ext:!0,h:10,feats:[]},{o:"h",c:79,a:20,b:36,pos:null,neg:"101",ext:!0,h:12,feats:[{a:28,b:35,k:"window",x:[4.5,8]}]},{o:"h",c:79,a:36,b:50,pos:null,neg:"102",ext:!0,h:12,feats:[{a:37,b:49,k:"glass",x:null}]},{o:"h",c:79,a:50,b:72,pos:null,neg:"103",ext:!0,h:12,feats:[{a:51,b:71,k:"fixed",x:null}]},{o:"v",c:20,a:55,b:67,pos:"101",neg:"105",ext:!1,h:12,feats:[{a:59,b:62,k:"door",x:null}]},{o:"v",c:20,a:67,b:79,pos:"101",neg:"104",ext:!1,h:12,feats:[{a:71,b:74,k:"door",x:null}]},{o:"v",c:36,a:22,b:27,pos:"301",neg:"406",ext:!1,h:10,feats:[{a:22.5,b:26.5,k:"glass",x:null}]},{o:"v",c:36,a:27,b:55,pos:null,neg:"406",ext:!0,h:10,feats:[{a:27.5,b:54.5,k:"glass",x:null}]},{o:"v",c:36,a:55,b:79,pos:"102",neg:"101",ext:!1,h:12,feats:[{a:55,b:79,k:"open",x:null}]},{o:"v",c:50,a:0,b:9,pos:"304",neg:"302",ext:!1,h:12,feats:[]},{o:"v",c:50,a:9,b:22,pos:"303",neg:"302",ext:!1,h:12,feats:[{a:12,b:15,k:"door",x:null}]},{o:"v",c:50,a:55,b:79,pos:"103",neg:"102",ext:!1,h:12,feats:[{a:55,b:79,k:"open",x:null}]},{o:"v",c:72,a:0,b:14,pos:null,neg:"306",ext:!0,h:10,feats:[]},{o:"v",c:72,a:14,b:22,pos:"204",neg:"306",ext:!1,h:10,feats:[{a:16,b:19,k:"door",x:null}]},{o:"v",c:72,a:22,b:27,pos:"204",neg:"301",ext:!1,h:10,feats:[{a:22.5,b:26.5,k:"glass",x:null}]},{o:"v",c:72,a:27,b:55,pos:"204",neg:null,ext:!0,h:10,feats:[{a:27.5,b:54.5,k:"glass",x:null}]},{o:"v",c:72,a:55,b:59,pos:"204",neg:"103",ext:!1,h:12,feats:[{a:55,b:59,k:"open",x:null}]},{o:"v",c:72,a:59,b:79,pos:"201",neg:"103",ext:!1,h:12,feats:[]},{o:"v",c:72,a:79,b:83,pos:"201",neg:null,ext:!0,h:11,feats:[]},{o:"h",c:67,a:10,b:20,pos:"104",neg:"105",ext:!1,h:10,feats:[]},{o:"v",c:10,a:55,b:67,pos:"105",neg:null,ext:!0,h:10,feats:[{a:59,b:62,k:"exdoor",x:null}]},{o:"v",c:10,a:67,b:79,pos:"104",neg:null,ext:!0,h:10,feats:[{a:71,b:77,k:"window",x:[3,7]}]},{o:"h",c:59,a:72,b:78,pos:"201",neg:"204",ext:!1,h:11,feats:[{a:73,b:77,k:"slide",x:null}]},{o:"h",c:59,a:78,b:86,pos:"201",neg:"205",ext:!1,h:11,feats:[]},{o:"h",c:59,a:86,b:88,pos:"203",neg:"205",ext:!1,h:10,feats:[]},{o:"h",c:59,a:88,b:98,pos:"203",neg:"206",ext:!1,h:10,feats:[]},{o:"h",c:83,a:72,b:86,pos:null,neg:"201",ext:!0,h:11,feats:[{a:73,b:85,k:"fixed",x:null}]},{o:"h",c:83,a:86,b:98,pos:null,neg:"202",ext:!0,h:10,feats:[{a:88,b:97,k:"window",x:[2,8]}]},{o:"v",c:86,a:59,b:69,pos:"203",neg:"201",ext:!1,h:11,feats:[{a:61,b:64,k:"door",x:null}]},{o:"v",c:86,a:69,b:83,pos:"202",neg:"201",ext:!1,h:11,feats:[{a:71,b:74.5,k:"slide",x:null}]},{o:"h",c:69,a:86,b:98,pos:"202",neg:"203",ext:!1,h:10,feats:[]},{o:"v",c:98,a:14,b:24,pos:null,neg:"211",ext:!0,h:9,feats:[]},{o:"v",c:98,a:24,b:36.5,pos:null,neg:"209",ext:!0,h:10,feats:[{a:26,b:34,k:"window",x:[2.5,8]}]},{o:"v",c:98,a:36.5,b:49,pos:null,neg:"207",ext:!0,h:10,feats:[{a:39,b:47,k:"window",x:[2.5,8]}]},{o:"v",c:98,a:49,b:59,pos:null,neg:"206",ext:!0,h:10,feats:[{a:50,b:53,k:"exdoor",x:null}]},{o:"v",c:98,a:59,b:69,pos:null,neg:"203",ext:!0,h:10,feats:[{a:62,b:67,k:"window",x:[6,8]}]},{o:"v",c:98,a:69,b:83,pos:null,neg:"202",ext:!0,h:10,feats:[{a:71,b:82,k:"window",x:[2,8]}]},{o:"h",c:14,a:72,b:78,pos:"204",neg:null,ext:!0,h:10,feats:[{a:73,b:77,k:"exdoor",x:null}]},{o:"h",c:14,a:78,b:88,pos:"210",neg:null,ext:!0,h:10,feats:[{a:81,b:85,k:"window",x:[5.5,8]}]},{o:"h",c:14,a:88,b:98,pos:"211",neg:null,ext:!0,h:9,feats:[{a:91,b:95,k:"exdoor",x:null}]},{o:"v",c:78,a:14,b:24,pos:"210",neg:"204",ext:!1,h:10,feats:[{a:18,b:21,k:"door",x:null}]},{o:"v",c:78,a:24,b:30,pos:"212",neg:"204",ext:!1,h:10,feats:[{a:24.5,b:27.5,k:"door",x:null}]},{o:"v",c:78,a:30,b:45.5,pos:"208",neg:"204",ext:!1,h:10,feats:[]},{o:"v",c:78,a:45.5,b:49,pos:"213",neg:"204",ext:!1,h:10,feats:[{a:45.75,b:48.75,k:"door",x:null}]},{o:"v",c:78,a:49,b:59,pos:"205",neg:"204",ext:!1,h:10,feats:[{a:52,b:55,k:"door",x:null}]},{o:"h",c:49,a:78,b:85,pos:"205",neg:"213",ext:!1,h:10,feats:[]},{o:"h",c:49,a:85,b:88,pos:"205",neg:"207",ext:!1,h:10,feats:[]},{o:"h",c:49,a:88,b:98,pos:"206",neg:"207",ext:!1,h:10,feats:[]},{o:"v",c:88,a:14,b:24,pos:"211",neg:"210",ext:!1,h:10,feats:[]},{o:"v",c:88,a:49,b:59,pos:"206",neg:"205",ext:!1,h:10,feats:[{a:52,b:55,k:"door",x:null}]},{o:"h",c:36.5,a:85,b:98,pos:"207",neg:"209",ext:!1,h:10,feats:[]},{o:"v",c:85,a:24,b:30,pos:"209",neg:"212",ext:!1,h:10,feats:[{a:24.5,b:27.5,k:"door",x:null}]},{o:"v",c:85,a:30,b:36.5,pos:"209",neg:"208",ext:!1,h:10,feats:[{a:31.5,b:34.5,k:"door",x:null}]},{o:"v",c:85,a:36.5,b:45.5,pos:"207",neg:"208",ext:!1,h:10,feats:[{a:41,b:44,k:"door",x:null}]},{o:"v",c:85,a:45.5,b:49,pos:"207",neg:"213",ext:!1,h:10,feats:[{a:45.75,b:48.75,k:"door",x:null}]},{o:"h",c:30,a:78,b:85,pos:"208",neg:"212",ext:!1,h:10,feats:[]},{o:"h",c:45.5,a:78,b:85,pos:"213",neg:"208",ext:!1,h:10,feats:[]},{o:"h",c:24,a:78,b:85,pos:"212",neg:"210",ext:!1,h:10,feats:[]},{o:"h",c:24,a:85,b:88,pos:"209",neg:"210",ext:!1,h:10,feats:[]},{o:"h",c:24,a:88,b:98,pos:"209",neg:"211",ext:!1,h:10,feats:[]},{o:"h",c:22,a:4,b:18,pos:null,neg:"407",ext:!0,h:14,feats:[{a:14,b:18,k:"exdoor",x:null},{a:5,b:9,k:"window",x:[3,9]}]},{o:"h",c:22,a:18,b:28,pos:"405",neg:"407",ext:!1,h:14,feats:[{a:23,b:27,k:"door",x:null}]},{o:"h",c:22,a:28,b:30,pos:"405",neg:"302",ext:!1,h:12,feats:[]},{o:"h",c:22,a:30,b:36,pos:"406",neg:"302",ext:!1,h:12,feats:[]},{o:"h",c:22,a:36,b:50,pos:"301",neg:"302",ext:!1,h:12,feats:[{a:36,b:42,k:"slide",x:null}]},{o:"h",c:22,a:50,b:66,pos:"301",neg:"303",ext:!1,h:10,feats:[{a:56,b:59,k:"door",x:null}]},{o:"h",c:22,a:66,b:72,pos:"301",neg:"306",ext:!1,h:10,feats:[]},{o:"h",c:27,a:36,b:72,pos:null,neg:"301",ext:!0,h:10,feats:[{a:36,b:72,k:"open",x:null}]},{o:"h",c:0,a:4,b:28,pos:"407",neg:null,ext:!0,h:14,feats:[{a:7,b:25,k:"glass",x:null}]},{o:"h",c:0,a:28,b:50,pos:"302",neg:null,ext:!0,h:12,feats:[{a:31,b:47,k:"glass",x:null}]},{o:"h",c:0,a:50,b:58,pos:"304",neg:null,ext:!0,h:8,feats:[{a:51,b:57,k:"window",x:[3,6]}]},{o:"h",c:0,a:58,b:66,pos:"305",neg:null,ext:!0,h:8,feats:[]},{o:"h",c:0,a:66,b:72,pos:"306",neg:null,ext:!0,h:10,feats:[{a:68,b:71,k:"exdoor",x:null}]},{o:"v",c:28,a:0,b:22,pos:"302",neg:"407",ext:!1,h:14,feats:[]},{o:"h",c:9,a:50,b:58,pos:"303",neg:"304",ext:!1,h:10,feats:[{a:52,b:54.5,k:"door",x:null}]},{o:"h",c:9,a:58,b:66,pos:"303",neg:"305",ext:!1,h:10,feats:[{a:61,b:63.5,k:"door",x:null}]},{o:"v",c:66,a:0,b:9,pos:"306",neg:"305",ext:!1,h:10,feats:[]},{o:"v",c:66,a:9,b:22,pos:"306",neg:"303",ext:!1,h:10,feats:[{a:12,b:15,k:"door",x:null}]},{o:"v",c:58,a:0,b:9,pos:"305",neg:"304",ext:!1,h:8,feats:[]},{o:"h",c:46,a:18,b:24,pos:"401",neg:"402",ext:!1,h:10,feats:[{a:19,b:23,k:"door",x:null}]},{o:"h",c:46,a:24,b:30,pos:"401",neg:"403",ext:!1,h:10,feats:[]},{o:"v",c:18,a:22,b:28,pos:"405",neg:null,ext:!0,h:10,feats:[]},{o:"v",c:18,a:28,b:40,pos:"404",neg:null,ext:!0,h:9,feats:[{a:31,b:37,k:"window",x:[1.2,6]}]},{o:"v",c:18,a:40,b:46,pos:"402",neg:null,ext:!0,h:10,feats:[]},{o:"v",c:18,a:46,b:55,pos:"401",neg:null,ext:!0,h:10,feats:[{a:49,b:53,k:"front",x:null}]},{o:"v",c:30,a:22,b:28,pos:"406",neg:"405",ext:!1,h:10,feats:[{a:23,b:26,k:"door",x:null}]},{o:"v",c:30,a:28,b:40,pos:"406",neg:"404",ext:!1,h:10,feats:[{a:30,b:38,k:"slide",x:null}]},{o:"v",c:30,a:40,b:46,pos:"406",neg:"403",ext:!1,h:10,feats:[{a:41.5,b:44,k:"door",x:null}]},{o:"v",c:30,a:46,b:55,pos:"406",neg:"401",ext:!1,h:10,feats:[{a:47,b:54,k:"open",x:null}]},{o:"h",c:40,a:18,b:24,pos:"402",neg:"404",ext:!1,h:10,feats:[]},{o:"h",c:40,a:24,b:30,pos:"403",neg:"404",ext:!1,h:10,feats:[]},{o:"v",c:24,a:40,b:46,pos:"403",neg:"402",ext:!1,h:10,feats:[]},{o:"h",c:28,a:18,b:30,pos:"404",neg:"405",ext:!1,h:10,feats:[]},{o:"v",c:4,a:0,b:22,pos:"407",neg:null,ext:!0,h:14,feats:[{a:4,b:18,k:"window",x:[2.5,9]}]}],S_=[{room:"101",label:"Marble island 10' (seats five)",x0:23,y0:64,x1:33,y1:68.5,h:3,z0:0,color:"mat:marble",shape:"island"},{room:"101",label:"Stools",x0:24,y0:62.3,x1:32,y1:63.5,h:2.5,z0:0,color:"#6b4a33",shape:"stools"},{room:"101",label:"White handleless base cabinets",x0:22.6,y0:76.4,x1:35.6,y1:78.6,h:2.85,z0:0,color:"mat:lacq",shape:"box"},{room:"101",label:"Black stone counter",x0:22.5,y0:76.3,x1:35.7,y1:78.7,h:.15,z0:2.85,color:"mat:blackstone",shape:"box"},{room:"101",label:"Green zellige backsplash",x0:22.6,y0:78.45,x1:35.6,y1:78.62,h:1.5,z0:3,color:"mat:zellige",shape:"box"},{room:"101",label:"Green zellige range wall",x0:22.6,y0:78.45,x1:28,y1:78.62,h:4.5,z0:4.5,color:"mat:zellige",shape:"box"},{room:"101",label:'Stainless range 36"',x0:23.8,y0:76.15,x1:26.8,y1:78.4,h:3.02,z0:0,color:"mat:steel",shape:"range"},{room:"101",label:"Glass chimney hood",x0:23.6,y0:76.8,x1:27,y1:78.4,h:.2,z0:6.6,color:"#cfe3e6",shape:"hood"},{room:"101",label:"White apron sink + brass faucet",x0:30,y0:76.2,x1:32.6,y1:78.4,h:.9,z0:2.05,color:"#f6f4ef",shape:"sink"},{room:"101",label:"Open wood shelves",x0:20.25,y0:74.6,x1:21.1,y1:78.6,h:3.2,z0:4.4,color:"mat:honey",shape:"shelves"},{room:"101",label:"Open wood shelves",x0:20.25,y0:55.6,x1:21.1,y1:58.6,h:3.2,z0:4.4,color:"mat:honey",shape:"shelves"},{room:"101",label:"Integrated fridge + ovens (handleless)",x0:20.4,y0:63.5,x1:22.6,y1:70,h:8.5,z0:0,color:"mat:lacq",shape:"box"},{room:"101",label:"Pendants",x0:24,y0:65.6,x1:32,y1:66.9,h:.7,z0:7.4,color:"#efe6d3",shape:"pendants"},{room:"104",label:"Pantry shelving",x0:10.4,y0:68,x1:11.8,y1:78.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"104",label:"Pantry shelving",x0:18.2,y0:72,x1:19.6,y1:78.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"105",label:"Cubbies + bench",x0:10.4,y0:62.5,x1:12,y1:66.6,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"105",label:"Dog wash",x0:16.5,y0:55.4,x1:19.6,y1:58,h:2.6,z0:0,color:"mat:stone",shape:"box"},{room:"201",label:"Low linen-wrapped bed (king)",x0:76,y0:69.4,x1:82.6,y1:76,h:1.6,z0:0,color:"mat:linen",shape:"bed"},{room:"201",label:"Lime-plaster headwall ledge",x0:75,y0:68.4,x1:83.6,y1:69.4,h:3.4,z0:0,color:"mat:plaster",shape:"box"},{room:"201",label:"Pair of lounge chairs",x0:74,y0:78.4,x1:80.6,y1:81.2,h:2.5,z0:0,color:"#b9a27e",shape:"lounge2"},{room:"201",label:"Sheer linen curtains",x0:73,y0:82.3,x1:85,y1:82.5,h:10.3,z0:.1,color:"#f6f1e6",shape:"curtain"},{room:"201",label:"Big fan under wood ceiling",x0:76.5,y0:69.5,x1:82.5,y1:75.5,h:.6,z0:9.6,color:"#6b4a33",shape:"fan"},{room:"201",label:"Cove lighting",x0:72.3,y0:59.3,x1:85.7,y1:82.7,h:.12,z0:10.2,color:"#ffd9a0",shape:"cove"},{room:"201",label:"Rug",x0:75,y0:67.2,x1:84,y1:78,h:.05,z0:0,color:"#cdbfa6",shape:"box"},{room:"202",label:"Deep hinoki soaking tub by the window",x0:93,y0:78,x1:97.4,y1:82.4,h:2.3,z0:0,color:"#e2c894",shape:"tub"},{room:"202",label:"Walk-in rain shower",x0:86.6,y0:75.4,x1:92,y1:82.4,h:.12,z0:0,color:"mat:blackstone",shape:"box"},{room:"202",label:"Black stone shower wall",x0:86.6,y0:74.9,x1:91.2,y1:75.4,h:7.5,z0:0,color:"mat:blackstone",shape:"box"},{room:"202",label:"Floating oak vanity, integrated basins",x0:95.4,y0:69.6,x1:97.4,y1:76.5,h:1.5,z0:1.4,color:"mat:honey",shape:"vanity"},{room:"202",label:"WC",x0:87,y0:69.6,x1:89,y1:72,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"203",label:"Closet millwork",x0:86.4,y0:59.4,x1:88.4,y1:68.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"203",label:"Closet millwork",x0:95.6,y0:59.4,x1:97.6,y1:68.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"203",label:"Island",x0:90.5,y0:62,x1:93.5,y1:66,h:3,z0:0,color:"mat:honey",shape:"box"},{room:"210",label:"Walk-in shower",x0:83,y0:14.4,x1:87.6,y1:18.4,h:.12,z0:0,color:"mat:stone",shape:"box"},{room:"210",label:"Vanity",x0:78.4,y0:14.6,x1:80,y1:19,h:2.8,z0:0,color:"mat:honey",shape:"box"},{room:"210",label:"WC",x0:84,y0:21.5,x1:86,y1:23.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"211",label:"Pump + filter",x0:90,y0:15,x1:96,y1:18,h:3,z0:0,color:"mat:steel",shape:"box"},{room:"302",label:"Rubber lifting area",x0:30,y0:1,x1:40,y1:11.5,h:.06,z0:0,color:"mat:rubber",shape:"box"},{room:"302",label:"Free-standing rig, wood rings + climbing rope",x0:30.8,y0:3,x1:35.8,y1:9,h:9.5,z0:0,color:"#2a2a2a",shape:"rig"},{room:"302",label:"Pilates Cadillac",x0:40,y0:14,x1:47.5,y1:16.6,h:6.8,z0:0,color:"mat:honey",shape:"frame"},{room:"302",label:"Pilates reformer",x0:40,y0:18.4,x1:48,y1:20,h:1.3,z0:0,color:"mat:honey",shape:"reformer"},{room:"302",label:"Wood water rower",x0:41,y0:3.4,x1:48.5,y1:5.2,h:1.7,z0:0,color:"mat:honey",shape:"rower"},{room:"302",label:"Treadmill",x0:41,y0:7.5,x1:47.5,y1:10.6,h:4.4,z0:0,color:"#2a2a2a",shape:"treadmill"},{room:"302",label:"Kettlebell + dumbbell rack",x0:42.6,y0:20.7,x1:49.4,y1:21.8,h:3,z0:0,color:"#2a2a2a",shape:"krack"},{room:"302",label:"Bars-and-bands wall",x0:28.3,y0:10.5,x1:29.2,y1:20.5,h:8,z0:0,color:"#2a2a2a",shape:"bands"},{room:"302",label:"Mirror wall",x0:49.58,y0:1,x1:49.74,y1:11.5,h:7.5,z0:.3,color:"#dfe7ea",shape:"mirror"},{room:"302",label:"Storage wall (mats, plyo boxes)",x0:28.3,y0:1,x1:29.7,y1:9.5,h:8,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Plyo boxes",x0:33,y0:18.5,x1:35,y1:20.5,h:2,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Plyo boxes",x0:35.4,y0:19,x1:37,y1:20.6,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Balance boards",x0:30.5,y0:13,x1:33.5,y1:14.4,h:.4,z0:0,color:"#6b4a33",shape:"box"},{room:"303",label:"Built-in cold plunge (green zellige)",x0:60,y0:17,x1:65.4,y1:21.4,h:.5,z0:0,color:"mat:zellige",shape:"plunge"},{room:"303",label:"Rain showers",x0:51,y0:18.2,x1:56,y1:21.6,h:.12,z0:0,color:"mat:blackstone",shape:"box"},{room:"303",label:"Teak bench",x0:51,y0:10,x1:57,y1:11.4,h:1.5,z0:0,color:"#9c6a3c",shape:"box"},{room:"304",label:"Tiered aspen benches, backlit",x0:50.4,y0:4.4,x1:57.6,y1:8.6,h:3,z0:0,color:"mat:aspen",shape:"benches"},{room:"304",label:"Electric rock heater",x0:56.2,y0:.6,x1:57.6,y1:2.4,h:2.6,z0:0,color:"#2f2c29",shape:"heater"},{room:"305",label:"Heated black-stone bench",x0:58.4,y0:5.8,x1:65.6,y1:8.6,h:1.6,z0:0,color:"mat:blackstone",shape:"box"},{room:"306",label:"Lockers + towels",x0:70.6,y0:1,x1:71.6,y1:12,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"405",label:"Gear racks",x0:18.4,y0:22.4,x1:29.6,y1:24,h:7,z0:0,color:"mat:steel",shape:"box"},{room:"407",label:"Sit-stand desk facing the garden",x0:11,y0:2.6,x1:17,y1:5,h:2.4,z0:0,color:"mat:honey",shape:"standdesk"},{room:"407",label:"Studio desk + mixer, monitors, MPC",x0:18.5,y0:2.2,x1:26.5,y1:4.8,h:2.5,z0:0,color:"mat:honey",shape:"studio"},{room:"407",label:"Digital piano",x0:5,y0:8,x1:6.8,y1:13,h:2.6,z0:0,color:"#1f1f1f",shape:"piano"},{room:"407",label:"E-drum kit",x0:7,y0:15,x1:12,y1:20,h:3.5,z0:0,color:"#2a2a2a",shape:"drums"},{room:"407",label:"Guitar wall",x0:18.4,y0:21.55,x1:22.8,y1:21.75,h:7.2,z0:3,color:"#a8743f",shape:"guitarwall"},{room:"407",label:"Mic stand",x0:15.5,y0:14,x1:16.3,y1:14.8,h:5.5,z0:0,color:"#9aa0a3",shape:"box"},{room:"407",label:"PA speakers",x0:4.5,y0:4,x1:6,y1:5.6,h:5.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"PA speakers",x0:4.5,y0:16.4,x1:6,y1:18,h:5.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"Fabric acoustic panels",x0:27.6,y0:2,x1:27.8,y1:20,h:4.5,z0:3,color:"#8d8a72",shape:"apanels"},{room:"407",label:"Acoustic ceiling clouds",x0:8,y0:5,x1:24,y1:18,h:.3,z0:11.2,color:"#e8e2d6",shape:"clouds"},{room:"407",label:"Sculpted wood ceiling",x0:4.3,y0:.3,x1:27.7,y1:21.7,h:.8,z0:13.1,color:"mat:honey",shape:"ribs"},{room:"407",label:"Layered pendants",x0:12.5,y0:3,x1:15.5,y1:4.6,h:1.2,z0:7.2,color:"#efe6d3",shape:"layered"},{room:"407",label:"RGB studio light strip",x0:18.5,y0:21.6,x1:26.5,y1:21.7,h:.1,z0:9.2,color:"#b04de0",shape:"rgb"},{room:"407",label:"Sofa",x0:20,y0:15.5,x1:27.4,y1:18.5,h:2.6,z0:0,color:"#6f7a55",shape:"sofa"},{room:"407",label:"Rug",x0:8,y0:6,x1:17,y1:13,h:.05,z0:0,color:"#cdbfa6",shape:"box"},{room:"102",label:"Honey-oak dining table (8)",x0:39,y0:64,x1:47,y1:68,h:2.5,z0:0,color:"mat:honey",shape:"table"},{room:"102",label:"Chairs",x0:39.5,y0:62.4,x1:46.5,y1:63.6,h:1.5,z0:0,color:"#d9cbb5",shape:"chairs"},{room:"102",label:"Chairs",x0:39.5,y0:68.4,x1:46.5,y1:69.6,h:1.5,z0:0,color:"#d9cbb5",shape:"chairs"},{room:"102",label:"Paper lantern",x0:41,y0:64.5,x1:45,y1:67.5,h:2.4,z0:6.6,color:"#f4ecdc",shape:"lantern"},{room:"102",label:"Shoji screens",x0:49.7,y0:72.5,x1:50,y1:78.8,h:8,z0:0,color:"#f4ecdc",shape:"shoji"},{room:"103",label:'Conversation pit (18" down)',x0:51.5,y0:61,x1:67.5,y1:73,h:-1.5,z0:0,color:"#e6dfd2",shape:"pit"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:61.3,x1:67.2,y1:63.6,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:70.4,x1:67.2,y1:72.7,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:63.6,x1:54.1,y1:70.4,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Coffee table",x0:57,y0:65.2,x1:63,y1:68.8,h:.8,z0:-1.5,color:"#6b4a33",shape:"box"},{room:"103",label:"Paper lanterns",x0:55.5,y0:64,x1:63.5,y1:70,h:2,z0:7,color:"#f4ecdc",shape:"lanterns"},{room:"103",label:"Linear gas fire in plaster plinth",x0:69.4,y0:61,x1:71.4,y1:73,h:1.6,z0:0,color:"mat:plaster",shape:"fire"},{room:"103",label:"Leather lounge chair",x0:52,y0:74.6,x1:55.2,y1:78,h:2.6,z0:0,color:"#8a5a34",shape:"lounge"},{room:"103",label:"Wall-mounted art",x0:71.4,y0:64,x1:71.6,y1:71,h:4.2,z0:3.8,color:"#c9b48e",shape:"art"},{room:"204",label:"Low bench",x0:76.8,y0:29.5,x1:77.6,y1:44.5,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"204",label:"Wall-mounted art",x0:77.55,y0:34,x1:77.75,y1:40,h:3.5,z0:4,color:"#a7b39a",shape:"art"},{room:"205",label:"Washer/dryer",x0:79,y0:56.6,x1:83.2,y1:58.6,h:3,z0:0,color:"#f3f1ec",shape:"box"},{room:"205",label:"Fold counter",x0:83.6,y0:56.6,x1:87.6,y1:58.6,h:3,z0:0,color:"mat:lacq",shape:"box"},{room:"206",label:"Air handler + ERV",x0:94,y0:55,x1:97.6,y1:58.6,h:6,z0:0,color:"mat:steel",shape:"box"},{room:"206",label:"Linen shelves",x0:88.4,y0:49.4,x1:92,y1:51,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"207",label:"Window-seat reading nook",x0:96.2,y0:39,x1:97.8,y1:45,h:1.6,z0:0,color:"mat:honey",shape:"seat"},{room:"207",label:"Twin bed",x0:89.5,y0:42,x1:93.1,y1:48.6,h:1.4,z0:0,color:"mat:linen",shape:"bed"},{room:"207",label:"Desk by the window",x0:94,y0:36.9,x1:97.8,y1:38.5,h:2.5,z0:0,color:"mat:honey",shape:"table"},{room:"207",label:"Wardrobe",x0:85.3,y0:36.9,x1:87.3,y1:39.6,h:7,z0:0,color:"mat:lacq",shape:"box"},{room:"207",label:"Low cube shelves + bins",x0:87.6,y0:36.9,x1:91.6,y1:38.2,h:2.4,z0:0,color:"mat:honey",shape:"cubes"},{room:"207",label:"Beanbag",x0:90,y0:39,x1:92.5,y1:41.5,h:1.3,z0:0,color:"#c98f6a",shape:"beanbags"},{room:"207",label:"Small bouldering wall + mat",x0:93.5,y0:48.65,x1:97.8,y1:48.95,h:8,z0:0,color:"mat:honey",shape:"kidwall"},{room:"208",label:"Tub-shower",x0:78.4,y0:30.4,x1:84.6,y1:33,h:1.8,z0:0,color:"#f3f1ec",shape:"box"},{room:"208",label:"Vanity 1",x0:78.4,y0:35,x1:79.7,y1:39.5,h:2.8,z0:0,color:"mat:honey",shape:"box"},{room:"208",label:"Vanity 2",x0:83.3,y0:36,x1:84.6,y1:40,h:2.8,z0:0,color:"mat:honey",shape:"box"},{room:"208",label:"WC",x0:78.4,y0:41.5,x1:80.4,y1:43.5,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"209",label:"Window-seat reading nook",x0:96.2,y0:28,x1:97.8,y1:34,h:1.6,z0:0,color:"mat:honey",shape:"seat"},{room:"209",label:"Queen bed (guest)",x0:88.5,y0:29.6,x1:93.7,y1:36.3,h:1.6,z0:0,color:"mat:linen",shape:"bed"},{room:"209",label:"Desk by the window",x0:94,y0:24.4,x1:97.8,y1:26,h:2.5,z0:0,color:"mat:honey",shape:"table"},{room:"209",label:"Low cube shelves + bins",x0:94.4,y0:35.1,x1:97.8,y1:36.3,h:2.4,z0:0,color:"mat:honey",shape:"cubes"},{room:"209",label:"Small climbing wall + mat",x0:86,y0:24.25,x1:93.5,y1:24.6,h:8,z0:0,color:"mat:honey",shape:"kidwall"},{room:"212",label:"Wardrobe",x0:79,y0:27.8,x1:84.6,y1:29.8,h:7,z0:0,color:"mat:lacq",shape:"box"},{room:"401",label:"Genkan bench",x0:26,y0:53.6,x1:29.6,y1:54.6,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"401",label:"Rammed earth wall",x0:19,y0:54.3,x1:25,y1:54.8,h:9,z0:0,color:"mat:rammed",shape:"box"},{room:"401",label:"Wall-mounted art",x0:25,y0:46.25,x1:29,y1:46.45,h:4,z0:3.5,color:"#b8836a",shape:"art"},{room:"402",label:"Coats",x0:18.4,y0:40.4,x1:19.6,y1:45.6,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"403",label:"Integrated stone vanity",x0:25.5,y0:40.3,x1:28.5,y1:41.3,h:2.8,z0:0,color:"mat:stone",shape:"box"},{room:"403",label:"WC",x0:24.4,y0:43.6,x1:26.4,y1:45.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"404",label:"Tokonoma",x0:18.4,y0:32,x1:20,y1:37,h:1,z0:0,color:"#6b4a33",shape:"box"},{room:"404",label:"Low table + zabuton",x0:22.5,y0:32,x1:26.5,y1:36,h:1.2,z0:0,color:"#6b4a33",shape:"lowtable"},{room:"404",label:"Paper andon lantern",x0:27.5,y0:37.6,x1:28.5,y1:38.6,h:2.2,z0:0,color:"#f4ecdc",shape:"andon"},{room:"404",label:"Shoji screens",x0:29.55,y0:30,x1:29.75,y1:34.5,h:8,z0:0,color:"#f4ecdc",shape:"shoji"}],b_=[{id:"living",x0:10,y0:55,x1:72,y1:79,oh:{n:8,s:6,w:4,e:0},type:"butterfly",valley:67,hv:12.6,he:14.6,wall:12},{id:"master",x0:72,y0:59,x1:98,y1:83,oh:{n:6,s:0,w:0,e:4},type:"shed",axis:"y",h0:11.6,h1:13.4,holes:[[93,78,97,82]]},{id:"east",x0:72,y0:14,x1:98,y1:59,oh:{n:0,s:4,w:6,e:4},type:"shed",axis:"x",h0:11.8,h1:10.6},{id:"south",x0:28,y0:0,x1:72,y1:27,oh:{n:6,s:6,w:0,e:0},type:"shed",axis:"y",h0:14,h1:12.6},{id:"office",x0:4,y0:0,x1:28,y1:22,oh:{n:4,s:6,w:4,e:1},type:"shed",axis:"y",h0:16,h1:14.6,holes:[[13,9,19,14]]},{id:"west",x0:18,y0:22,x1:36,y1:55,oh:{n:0,s:0,w:5,e:6},type:"shed",axis:"x",h0:11.8,h1:10.6}],M_={pool:{x0:54,y0:-22,x1:88,y1:-10},pooldeck:{x0:48,y0:-28,x1:98,y1:0},lane:{x0:-32,y0:-16,x1:43,y1:-8},outdoor_shower:{x0:72.5,y0:4,x1:77.5,y1:10},veg:{x0:-30,y0:64,x1:-6,y1:86},bikes:{x0:4,y0:62,x1:7.5,y1:72},carport:{x0:-44,y0:30,x1:-20,y1:54},entrycourt:{x0:-20,y0:26,x1:18,y1:55},pergola:{x0:19,y0:81,x1:37,y1:95},veranda:{x0:36,y0:79,x1:72,y1:87},firepit:{cx:58,cy:99,r:7},zen:{x0:39,y0:30,x1:52,y1:40},water:{x0:57,y0:31,x1:68,y1:39},lawn:{x0:39,y0:42,x1:69,y1:50},shadetree:{cx:53,cy:45},maples:[[66.5,47.5],[40.5,46.5],[39,52.3],[62,51.8]],lanterns:[[55,40.6],[38.5,41],[69.5,42]],cshower:{x0:66.5,y0:27.5,x1:71.5,y1:31.5},bale:{x0:90,y0:-27,x1:97,y1:-19,h:9},pullup:{x0:45,y0:-7,x1:48.5,y1:-5},orchard:[[-56,70],[-46,70],[-56,80],[-46,80],[-56,90],[-46,90],[-36,94]],walkway:{x0:-20,y0:48,x1:13,y1:54,h:9},frontgarden:[[-16,38,-2,46],[-16,57,2,62]],bathgarden:{x0:98,y0:69,x1:106,y1:83},climb:{x0:-22,y0:0,x1:-4,y1:18,oh:5,h:13}},E_={"Living Pavilion":"charred","Sleeping Wing":"charred","Wellness + Gym Wing":"charred","Studio + Arrival":"charred"},w_={401:"rammed"},T_=5272,A_={x0:36,y0:27,x1:72,y1:55},R_=[{id:"C1",name:"Climbing Pavilion",x0:-22,y0:0,x1:-4,y1:18,w:18,d:18,area:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. 16-ft-wide, 12-ft-high kids' bouldering wall on the north side facing the sprint lane, over a 12-inch poured-rubber soft-fall surface. Sits in the active zone with the gym, sprint lane and a second bike rack."}],Rt={rooms:y_,walls:v_,furn:S_,roofs:b_,site:M_,clad:E_,cladOvr:w_,total:T_,courtyard:A_,covered:R_},xt=49,wt=44,un=(n,e,t=0)=>new O(n-xt,t,-(e-wt)),gu=new An(new O(0,-1,0),1e5),xu=[gu];function C_(){const n=x_(),e={},t=i=>new Dt(i);e.stucco=t({map:n.stucco,roughness:.92}),e.plaster=t({map:n.lime,normalMap:n.limeN,normalScale:new ae(.4,.4),roughness:.96}),e.charred=t({map:n.charred,normalMap:n.charredN,roughness:.82}),e.rammed=t({map:n.rammed,normalMap:n.rammedN,normalScale:new ae(.6,.6),roughness:.95}),e.stone=t({map:n.stone,roughness:.8}),e.flag=t({map:n.flag,normalMap:n.flagN,roughness:.88}),e.plinth=t({map:n.plinth,roughness:.9}),e.oak=t({map:n.oak,roughness:.6}),e.honey=t({map:n.honey,normalMap:n.honeyN,normalScale:new ae(.5,.5),roughness:.48}),e.herring=t({map:n.herring,normalMap:n.herringN,normalScale:new ae(.6,.6),roughness:.5}),e.stonetile=t({map:n.stonetile,normalMap:n.stonetileN,normalScale:new ae(.5,.5),roughness:.62}),e.blackstone=t({map:n.blackstone,normalMap:n.blackstoneN,normalScale:new ae(.4,.4),roughness:.42}),e.marble=t({map:n.marble,roughness:.18}),e.zellige=t({map:n.zellige,normalMap:n.zelligeN,roughness:.12,metalness:.05}),e.aspen=t({map:n.aspen,normalMap:n.aspenN,normalScale:new ae(.4,.4),roughness:.7}),e.pooltile=t({map:n.pooltile,normalMap:n.pooltileN,roughness:.3}),e.linen=t({map:n.linen,color:15920352,roughness:.95}),e.lacq=t({color:16052973,roughness:.32}),e.steel=t({color:12106942,roughness:.3,metalness:.85}),e.deck=t({map:n.deck,roughness:.8}),e.soffit=t({map:n.soffit,roughness:.75}),e.tatami=t({map:n.tatami,normalMap:n.tatamiN,roughness:.9}),e.rubber=t({map:n.rubber,roughness:.95}),e.seam=t({map:n.seam,normalMap:n.seamN,roughness:.42,metalness:.35,color:15132390}),e.gravel=t({map:n.gravel,normalMap:n.gravelN,roughness:1}),e.turf=t({map:n.turf,roughness:1}),e.meadow=t({map:n.meadow,roughness:1}),e.cedar=t({map:n.cedar,roughness:.8}),e.concrete=t({map:n.concrete,roughness:.9}),e.frame=t({color:2039067,roughness:.45,metalness:.5}),e.glass=new zd({color:13624294,roughness:.05,metalness:0,transparent:!0,opacity:.22,depthWrite:!1,side:Rn,emissive:0}),e.sheer=t({color:16513006,roughness:1,transparent:!0,opacity:.45,side:Rn,depthWrite:!1}),e.paper=t({color:16183264,roughness:1,emissive:16767392,emissiveIntensity:.25}),e.paper.name="lamp",e.lamp=t({color:16773590,emissive:16762746,emissiveIntensity:.6}),e.lamp.name="lamp",e.rgb=t({color:11554272,emissive:10173439,emissiveIntensity:1.2}),e.mirror=t({color:13226966,roughness:.04,metalness:.9}),e.brass=t({color:13214026,roughness:.3,metalness:.9}),e.leather=t({color:9067060,roughness:.55}),e.water=t({color:5087155,roughness:.08,metalness:.1,transparent:!0,opacity:.88}),e.poolwater=t({color:4168338,roughness:.05,metalness:.1,transparent:!0,opacity:.8}),e.white=t({color:15855335,roughness:.6}),e.dark=t({color:2894375,roughness:.7}),e.fir=t({color:13146726,roughness:.7}),e.teak=t({color:10250812,roughness:.6}),e.highlight=new ar({color:7700575,transparent:!0,opacity:.28,depthWrite:!1}),e.c={};for(const i of["stucco","plaster","charred","rammed","cedar","stone","frame","glass","oak","fir","honey","herring","stonetile","blackstone","marble","zellige","aspen","linen","lacq","steel","sheer","paper","lamp","rgb","mirror","brass","leather","water","rubber","tatami","white","dark","teak","flag"]){const s=e[i].clone();s.name=e[i].name,s.clippingPlanes=xu,s.clipShadows=!0,e.c[i]=s}return e.T=n,e}const ho={};function Ce(n){if(!ho[n]){const e=new Dt({color:new Xe(n),roughness:.75});e.clippingPlanes=xu,e.clipShadows=!0,ho[n]=e}return ho[n]}let ia=null;function P_(n){return typeof n=="string"&&n.startsWith("mat:")?ia.c[n.slice(4)]||ia[n.slice(4)]:Ce(n)}function gs(n,e,t){const i=new Ei(n,e,t),s=i.attributes.uv,r=[[t,e],[t,e],[n,t],[n,t],[n,e],[n,e]];for(let a=0;a<6;a++)for(let o=0;o<4;o++){const c=a*4+o;s.setXY(c,s.getX(c)*r[a][0],s.getY(c)*r[a][1])}return i}class L_{constructor(){this.b=new Map}add(e,t,i){const s=e+"|"+t.uuid;this.b.has(s)||this.b.set(s,{layer:e,mat:t,geos:[]}),this.b.get(s).geos.push(i.index?i.toNonIndexed():i)}build(e,t={}){for(const{layer:i,mat:s,geos:r}of this.b.values()){const a=r.map(l=>{const u=new Pt;return u.setAttribute("position",l.attributes.position),u.setAttribute("normal",l.attributes.normal),l.attributes.uv?u.setAttribute("uv",l.attributes.uv):u.setAttribute("uv",new fn(new Float32Array(l.attributes.position.count*2),2)),u}),o=__(a,!1),c=new Gt(o,s),h=s.transparent;c.castShadow=!h&&i!=="ground",c.receiveShadow=!s.transparent||s===void 0,i==="glass"&&(c.renderOrder=2,c.castShadow=!1),e[i].add(c)}}}const Ht=new L_;function P(n,e,t,i,s,r,a,o,c){const h=Math.abs(s-t),l=Math.abs(r-i),u=Math.abs(o-a);if(h<.001||l<.001||u<.001)return;let f=gs(h,u,l);if(f.translate((t+s)/2-xt,(a+o)/2,-((i+r)/2-wt)),c){f=f.toNonIndexed();const d=f.attributes.position;for(let p=0;p<d.count;p++)d.setY(p,d.getY(p)+c(d.getX(p)+xt,wt-d.getZ(p)));f.computeVertexNormals()}if(Array.isArray(e)){const d=[0,1,2,3,4,5],p=f.index?f.toNonIndexed():f;d.forEach(x=>{const g=new Pt;for(const m of["position","normal","uv"]){const b=p.attributes[m];g.setAttribute(m,new fn(b.array.slice(x*6*b.itemSize,(x+1)*6*b.itemSize),b.itemSize))}Ht.add(n,e[x],g)})}else Ht.add(n,e,f)}function Ze(n,e,t,i,s,r,a,o=20,c){const h=new hn(c??s,s,a-r,o);h.translate(t-xt,(r+a)/2,-(i-wt)),Ht.add(n,e,h)}function Vt(n,e,t,i,s,r){t.translate(i-xt,r,-(s-wt)),Ht.add(n,e,t)}const Dl=Rt.roofs;function $r(n,e,t){const[i,s,r]=n.axis==="x"?[e,n.x0,n.x1]:[t,n.y0,n.y1];return n.h0+(n.h1-n.h0)*(i-s)/(r-s)}function zi(n,e){let t=null;for(const i of Dl){if(n<i.x0-.01||n>i.x1+.01||e<i.y0-.01||e>i.y1+.01)continue;let s;if(i.type==="flat")s=i.h-.6;else if(i.type==="shed")s=$r(i,n,e)-.6;else{const r=i.y1+i.oh.n,a=i.y0-i.oh.s;s=e>=i.valley?i.hv+(i.he-i.hv)*(e-i.valley)/(r-i.valley):i.hv+(i.he-i.hv)*(i.valley-e)/(i.valley-a)}t=t===null?s:Math.max(t,s)}return t??10}function D_(n){for(const e of Dl){const t=e.x0-e.oh.w,i=e.x1+e.oh.e,s=e.y0-e.oh.s,r=e.y1+e.oh.n;if(e.type==="shed"){const a=(l,u)=>$r(e,l,u)-(e.axis==="x"?e.h0+(e.h1-e.h0)*((e.x0+e.x1)/2-e.x0)/(e.x1-e.x0):e.h0+(e.h1-e.h0)*((e.y0+e.y1)/2-e.y0)/(e.y1-e.y0)),o=$r(e,(e.x0+e.x1)/2,(e.y0+e.y1)/2),c=[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred];let h=[[t,s,i,r]];for(const[l,u,f,d]of e.holes||[]){h=[[t,s,i,u],[t,d,i,r],[t,u,l,d],[f,u,i,d]];const p=$r(e,(l+f)/2,(u+d)/2);P("roof",n.frame,l-.25,u-.25,f+.25,d+.25,p+.35,p+.75),P("roof",n.glass,l,u,f,d,p+.7,p+.78)}for(const[l,u,f,d]of h)P("roof",c,l,u,f,d,o-.6,o+.4,a);P("roof",n.dark,t-.05,s-.05,i+.05,r+.05,o+.35,o+.45,a)}else if(e.type==="flat"){const a=e.h-.6,o=e.h+.4;P("roof",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],t,s,i,r,a,o),P("roof",n.dark,t-.05,s-.05,i+.05,r+.05,o-.05,o+.05)}else{const o=i-t,c=(t+i)/2-xt,h=(u,f,d,p,x,g,m,b=0)=>{const A=-(u-wt),S=-(d-wt),w=Math.hypot(A-S,f-p),T=gs(g??o,.9,w),R=Math.atan2(p-f,A-S);T.rotateX(R),T.translate(m??c,(f+p)/2+.9/2-b,(A+S)/2);const v=T.toNonIndexed();x.forEach((E,D)=>{const U=new Pt;for(const _ of["position","normal","uv"]){const L=v.attributes[_];U.setAttribute(_,new fn(L.array.slice(D*6*L.itemSize,(D+1)*6*L.itemSize),L.itemSize))}Ht.add("roof",E,U)})},l=[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred];h(s,e.he,e.valley,e.hv,l),h(e.valley,e.hv,r,e.he,l);for(let u=e.x0+10;u<e.x1;u+=8){const f=[n.c.fir,n.c.fir,n.c.fir,n.c.fir,n.c.fir,n.c.fir];h(e.y0,zi(u,e.y0),e.valley,e.hv,f,.55,u-xt,1.1),h(e.valley,e.hv,e.y1,zi(u,e.y1),f,.55,u-xt,1.1)}P("roof",n.frame,t,e.valley-.4,i,e.valley+.4,e.hv+.6,e.hv+.95)}}}function I_(n){const e=Rt.rooms.find(t=>t.id===n);return e&&(Rt.cladOvr[n]||Rt.clad[e.wing])||"stucco"}const Il=[];function N_(n){const e=[...n.feats].sort((s,r)=>s.a-r.a),t=[];let i=n.a;for(const s of e)s.a>i+1e-6&&t.push({a:i,b:s.a,k:"solid"}),t.push({a:s.a,b:s.b,k:s.k,x:s.x}),i=s.b;return n.b>i+1e-6&&t.push({a:i,b:n.b,k:"solid"}),t}const sa=(n,e)=>n.o==="h"?[e,n.c]:[n.c,e];function uo(n,e,t,i,s,r,a,o,c){const h=new fa;if(h.moveTo(i,r),h.lineTo(s,r),a!=null)h.lineTo(s,a),h.lineTo(i,a);else{const f=[s];if(t.o==="v")for(const x of Dl)x.type==="butterfly"&&t.c>=x.x0-.01&&t.c<=x.x1+.01&&x.valley>i&&x.valley<s&&f.unshift(x.valley);f.sort((x,g)=>g-x);for(const x of f){const[g,m]=sa(t,x);h.lineTo(x,zi(g,m))}const[d,p]=sa(t,i);h.lineTo(i,zi(d,p))}h.closePath();const l=new Rl(h,{depth:c-o,bevelEnabled:!1,steps:1}),u=new rt;t.o==="h"?u.makeTranslation(-xt,0,-(t.c-wt)-c):(u.makeRotationY(Math.PI/2),u.premultiply(new rt().makeTranslation(t.c-xt+o,0,wt))),l.applyMatrix4(u),Ht.add(n,e,l)}function Hr(n,e,t,i,s,r){const a=e.ext?.75:.45;let o=t,c=i;if(e.ext&&(Math.abs(t-e.a)<1e-6&&(o-=a/2),Math.abs(i-e.b)<1e-6&&(c+=a/2)),e.ext){const h=e.pos||e.neg,l=e.pos?-1:1,u=n.c[I_(h)],f=h==="304"?n.c.cedar:h==="305"||h==="303"?n.c.blackstone:n.c.plaster,d=l>0?[0,a/2]:[-a/2,0],p=l>0?[-a/2,0]:[0,a/2];uo("walls",u,e,o,c,s,r,d[0],d[1]),uo("walls",f,e,o,c,s,r,p[0],p[1])}else{const h=l=>e.pos===l||e.neg===l;uo("walls",h("304")?n.c.cedar:h("305")||h("303")?n.c.blackstone:n.c.plaster,e,t-a/2+.001,i+a/2-.001,s,r,-a/2,a/2)}}function vh(n,e,t,i,s,r,a){const c=(l,u,f,d,p,x,g,m)=>{e.o==="h"?P(m,g,l,e.c+p,u,e.c+x,f,d):P(m,g,e.c+p,l,e.c+x,u,f,d)};c(t,i,s,r,-.08/2,.08/2,n.c.glass,"glass"),c(t,i,s,s+.25,-.18,.18,n.c.frame,"walls"),c(t,i,r-.3,r,-.18,.18,n.c.frame,"walls");const h=Math.max(1,Math.round((i-t)/(a?5.5:8)));for(let l=0;l<=h;l++){const u=t+(i-t)*l/h;c(u-.09,u+.09,s,r,-.15,.15,n.c.frame,"walls")}Il.push({s:e,a:t,b:i})}function U_(n){for(const e of Rt.walls)for(const t of N_(e)){const[i,s]=sa(e,(t.a+t.b)/2),r=zi(i,s);if(t.k==="solid")Hr(n,e,t.a,t.b,0,null),Il.push({s:e,a:t.a,b:t.b});else if(t.k!=="open")if(["door","exdoor","slide","front"].includes(t.k)){const a=t.k==="front"?9:t.k==="slide"?8:7.5;if(r>a+.05&&Hr(n,e,t.a,t.b,a,null),t.k==="front"){const o=t.b-t.a,c=gs(o*.62,a-.05,.22);c.translate(o*.31,a/2,0),c.rotateY(-.55);const[h,l]=sa(e,t.a+o*.19);c.translate(h-xt,0,-(l-wt)),Ht.add("walls",n.c.fir,c)}}else if(t.k==="window"){const[a,o]=t.x;Hr(n,e,t.a,t.b,0,a),vh(n,e,t.a,t.b,a,Math.min(o,r),!1),r>o+.05&&Hr(n,e,t.a,t.b,o,null)}else(t.k==="glass"||t.k==="fixed")&&vh(n,e,t.a,t.b,0,r,t.k==="glass")}}const O_={oak:"oak",honey:"honey",herring:"herring",stonetile:"stonetile",blackstone:"blackstone",aspen:"aspen",stone:"stone",tatami:"tatami",rubber:"rubber",cedar:"cedar",concrete:"concrete"},_u=[];function F_(n,e){const t=new ar({visible:!1});for(const i of Rt.rooms){const s=n[O_[i.floor]]||n.oak,r=[n.plinth,n.plinth,s,n.plinth,n.plinth,n.plinth],a=Rt.furn.find(l=>l.room===i.id&&l.shape==="pit");a?(P("floors",r,i.x0,i.y0,i.x1,a.y0,-1.8,0),P("floors",r,i.x0,a.y1,i.x1,i.y1,-1.8,0),P("floors",r,i.x0,a.y0,a.x0,a.y1,-1.8,0),P("floors",r,a.x1,a.y0,i.x1,a.y1,-1.8,0),P("floors",[n.herring,n.herring,n.herring,n.herring,n.herring,n.herring],a.x0,a.y0,a.x1,a.y1,-2,-1.5)):P("floors",r,i.x0,i.y0,i.x1,i.y1,-1.8,0);const o=zi((i.x0+i.x1)/2,(i.y0+i.y1)/2),c=new Ei(i.w-.2,o,i.d-.2);c.translate((i.x0+i.x1)/2-xt,o/2,-((i.y0+i.y1)/2-wt));const h=new Gt(c,t);h.userData.room=i.id,e.pick.add(h),_u.push(h)}}const z="furn",Kt="detail";function k_(n){return Rt.rooms.find(e=>e.id===n)}function ks(n,e,t,i,s,r,a=1,o=12){const c=new Ss(r,o,Math.max(6,o/2));c.scale(1,a,1),Vt(n,e,c,t,i,s)}function B_(n,e,t){const i=k_(e.room),s=e.y0-i.y0<i.y1-e.y1,r=s?e.y0:e.y1,a=s?1:-1;P(z,n.c.dark,e.x0+.3,e.y0+.3,e.x1-.3,e.y1-.3,0,.35),P(z,t,e.x0,e.y0,e.x1,e.y1,.35,e.h-.35),P(z,n.c.white,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,e.h-.35,e.h),P(z,Ce("#d8cdb8"),e.x0-.05,Math.min(r+a*2.2,r+a*(e.y1-e.y0)*.95),e.x1+.05,Math.max(r+a*2.2,r+a*(e.y1-e.y0)*.95),e.h-.3,e.h+.12);const o=e.x1-e.x0>4.5?2:1;for(let c=0;c<o;c++){const h=(e.x1-e.x0-.6)/o,l=e.x0+.3+c*h;P(z,n.c.linen,l+.1,Math.min(r+a*.3,r+a*1.6),l+h-.1,Math.max(r+a*.3,r+a*1.6),e.h,e.h+.45)}}function z_(n,e,t){const i=Math.max(1,Math.round((n.x1-n.x0)/2.2)),s=1.6;for(let r=0;r<i;r++){const a=n.x0+(n.x1-n.x0)*(r+.5)/i;P(z,e,a-s/2,n.y0,a+s/2,n.y1,1.45,1.6),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([c,h])=>P(z,Ce("#6b4a33"),a+c*(s/2-.1)-.05,h<0?n.y0+.05:n.y1-.15,a+c*(s/2-.1)+.05,h<0?n.y0+.15:n.y1-.05,0,1.45));const o=t?n.y0:n.y1-.12;P(z,Ce("#6b4a33"),a-s/2,o,a+s/2,o+.12,1.6,2.9)}}function fo(n,e,t,i,s,r,a){P(z,n.c.frame,e+.2,t+.2,i-.2,s-.2,0,.5),P(z,r,e,t,i,s,.5,1.25);const o=a?t:s-.6,c=a?t+.6:s;P(z,r,e,o,i,c,1.25,2.7),P(z,r,e,t,e+.35,s,1.25,1.9),P(z,r,i-.35,t,i,s,1.25,1.9)}function H_(n,e,t,i,s){const r=new hn(.62,.62,s,18);r.rotateX(Math.PI/2),Vt(z,Ce(t),r,n,i,e);const a=new hn(.48,.48,s,18);a.rotateX(Math.PI/2),Vt(z,Ce(t),a,n,i,e+.75),P(z,Ce("#3a2a20"),n-.08,i-s/2,n+.08,i+s/2,e+1,e+2.6),P(z,Ce("#2a1d15"),n-.13,i-s/2,n+.13,i+s/2,e+2.6,e+3)}function G_(n){ia=n;for(const e of Rt.furn){if(e.shape==="pit")continue;const t=P_(e.color),i=e.z0,s=e.z0+Math.max(e.h,.04),r=(e.x0+e.x1)/2,a=(e.y0+e.y1)/2,o=e.x1-e.x0,c=e.y1-e.y0,h=o>=c;switch(e.shape){case"island":P(z,n.c.lacq,e.x0+.4,e.y0+1.2,e.x1-.4,e.y1-.1,0,2.85),P(z,t,e.x0,e.y0,e.x1,e.y1,2.85,3),P(z,t,e.x0,e.y0+.2,e.x0+.15,e.y1,0,2.85),P(z,t,e.x1-.15,e.y0+.2,e.x1,e.y1,0,2.85);break;case"stools":{const l=Math.round(o/1.7);for(let u=0;u<l;u++){const f=e.x0+o*(u+.5)/l;Ze(z,t,f,a,.62,s-.12,s,16),Ze(z,n.c.frame,f,a,.07,0,s-.12,6);const d=new Ni(.4,.035,4,16);d.rotateX(Math.PI/2),Vt(z,n.c.brass,d,f,a,.85),Ze(z,n.c.frame,f,a,.5,0,.05,14)}break}case"range":P(z,t,e.x0,e.y0,e.x1,e.y1,0,s-.05),P(z,n.c.dark,e.x0+.1,e.y0+.1,e.x1-.1,e.y1-.2,s-.05,s+.05),P(z,n.c.dark,e.x0+.3,e.y0-.02,e.x1-.3,e.y0+.02,.6,2.2);for(let l=0;l<5;l++)Ze(Kt,n.c.frame,e.x0+.4+l*.55,e.y0-.05,.08,2.6,2.75,8);break;case"hood":P(z,n.c.glass,e.x0,e.y0,e.x1,e.y1,i,s),P(z,n.c.steel,e.x0+.1,e.y0+.1,e.x1-.1,e.y1-.1,i-.06,i),P(z,n.c.steel,r-.5,e.y1-1.1,r+.5,e.y1-.05,s,12);break;case"sink":P(z,t,e.x0,e.y0,e.x1,e.y0+.12,i,i+.95),P(z,t,e.x0,e.y0,e.x1,e.y1-.2,i,i+.12),P(z,n.c.dark,e.x0+.15,e.y0+.15,e.x1-.15,e.y1-.3,i+.12,i+.13),Ze(z,n.c.brass,r,e.y1-.15,.06,3,4.2,8),P(z,n.c.brass,r-.05,e.y1-.95,r+.05,e.y1-.15,4.1,4.2),Ze(z,n.c.brass,r,e.y1-.95,.05,3.85,4.15,8);break;case"shelves":for(let l=0;l<3;l++){const u=i+l*1.3;P(z,t,e.x0,e.y0,e.x1,e.y1,u,u+.13);for(let f=0;f<5;f++){const d=e.y0+.4+f*(c-.8)/4;(f+l)%3?Ze(Kt,n.c.white,r,d,.28,u+.13,u+.55+f%2*.25,10):P(Kt,Ce("#c4b49a"),r-.2,d-.3,r+.2,d+.3,u+.13,u+.9)}}break;case"pendants":{for(let l=0;l<3;l++){const u=e.x0+o*(l+.5)/3,f=new Ss(.55,16,8,0,Math.PI*2,0,Math.PI/2);Vt(z,n.c.lacq,f,u,a,i+.15),Ze(z,n.c.lamp,u,a,.3,i,i+.15,12),Ze(z,n.c.frame,u,a,.02,i+.7,11.8,4)}break}case"table":P(z,t,e.x0,e.y0,e.x1,e.y1,s-.15,s),[[e.x0+.4,e.y0+.4],[e.x1-.6,e.y0+.4],[e.x0+.4,e.y1-.6],[e.x1-.6,e.y1-.6]].forEach(([l,u])=>P(z,t,l,u,l+.2,u+.2,0,s-.15));break;case"chairs":z_(e,t,e.y0>70);break;case"lantern":ks(z,n.c.paper,r,a,i+e.h/2,Math.min(o,c)/2,e.h/Math.min(o,c)),Ze(z,n.c.frame,r,a,.02,i+e.h,11.8,4);break;case"lanterns":[[e.x0+1.5,e.y0+2,1.3,7.6],[r,a,1.8,7],[e.x1-1.5,e.y1-2,1.1,8]].forEach(([l,u,f,d])=>{ks(z,n.c.paper,l,u,d,f,1.15),Ze(z,n.c.frame,l,u,.02,d+f,11.8,4)});break;case"shoji":{const l=Math.max(1,Math.round((h?o:c)/3));for(let u=0;u<l;u++){const f=u/l,d=(u+1)/l,p=u%2*.25,[x,g]=h?[e.x0+o*f,e.x0+o*d]:[e.y0+c*f,e.y0+c*d],m=(b,A,S,w,T,R,v)=>h?P(z,v,b,e.y0+T,A,e.y0+R,S,w):P(z,v,e.x0+T,b,e.x0+R,A,S,w);m(x,g,.1,s-.2,p+.07,p+.13,n.c.paper);for(let b=0;b<=3;b++){const A=x+(g-x)*b/3;m(A-.04,A+.04,0,s,p,p+.2,Ce("#5a4632"))}for(let b=0;b<=s;b+=1)m(x,g,b,b+.06,p,p+.2,Ce("#5a4632"))}break}case"sofa":{const l=Math.max(1,Math.round((h?o:c)/2.8));for(let u=0;u<l;u++){const f=u/l,d=(u+1)/l,[p,x,g,m]=h?[e.x0+o*f+.04,e.y0,e.x0+o*d-.04,e.y1]:[e.x0,e.y0+c*f+.04,e.x1,e.y0+c*d-.04];P(z,t,p,x,g,m,i,i+e.h*.75),P(z,t,p+.05,x+.05,g-.05,m-.05,i+e.h*.75,i+e.h)}e.room==="407"&&P(z,t,e.x0,e.y1-.8,e.x1,e.y1,i,i+2.6);break}case"fire":P(z,t,e.x0,e.y0,e.x1,e.y1,0,s),P(z,n.c.dark,e.x0-.02,e.y0+1.5,e.x0+.4,e.y1-1.5,.6,1.3);{const l=new Dt({color:16747069,emissive:16738842,emissiveIntensity:1.4});P(z,l,e.x0-.03,e.y0+1.8,e.x0+.1,e.y1-1.8,.65,.95)}break;case"lounge":fo(n,e.x0,e.y0,e.x1,e.y1,n.c.leather,!1),P(z,n.c.leather,e.x0+.4,e.y0-1.8,e.x1-.4,e.y0-.3,.3,1.25);break;case"lounge2":fo(n,e.x0,e.y0,e.x0+2.6,e.y1,t,!0),fo(n,e.x1-2.6,e.y0,e.x1,e.y1,t,!0),Ze(z,n.c.honey,r,a,.7,0,1.6,16);break;case"art":{const[u]=h?[[e.x0-.2,e.y0,e.x1+.2,e.y1],0]:[[e.x0,e.y0-.2,e.x1,e.y1+.2],0];P(z,n.c.frame,u[0],u[1],u[2],u[3],i-.2,s+.2);const f=h?[e.x0,e.y0-.03,e.x1,e.y1+.03]:[e.x0-.03,e.y0,e.x1+.03,e.y1];P(z,t,f[0],f[1],f[2],f[3],i,s);const d=h?o:c;for(let p=0;p<3;p++){const x=.15+p*.28,g=["#2f4a3c","#b8643f","#e8dfc9"][p];h?P(z,Ce(g),e.x0+d*x,e.y0-.05,e.x0+d*(x+.22),e.y1+.05,i+.6+p*.5,s-.8+p*.2):P(z,Ce(g),e.x0-.05,e.y0+d*x,e.x1+.05,e.y0+d*(x+.22),i+.6+p*.5,s-.8+p*.2)}break}case"bed":B_(n,e,t);break;case"curtain":{P(z,n.c.sheer,e.x0+1.6,e.y0,e.x1-1.6,e.y1,i,s);for(const l of[e.x0,e.x1-1.6])for(let u=0;u<6;u++)P(z,n.c.linen,l+u*.27,e.y0-u%2*.15,l+u*.27+.22,e.y1+.1-u%2*.15,i,s);P(z,n.c.frame,e.x0,e.y0,e.x1,e.y1,s,s+.08);break}case"fan":Ze(z,n.c.frame,r,a,.05,i,10.6,6),Ze(z,t,r,a,.35,i-.15,i+.15,14);for(let l=0;l<3;l++){const u=gs(2.6,.06,.5);u.translate(1.6,0,0),u.rotateY(l*Math.PI*2/3+.3),Vt(z,t,u,r,a,i)}break;case"cove":{P(z,n.c.lamp,e.x0,e.y0,e.x1,e.y0+.3,i,s),P(z,n.c.lamp,e.x0,e.y1-.3,e.x1,e.y1,i,s),P(z,n.c.lamp,e.x0,e.y0,e.x0+.3,e.y1,i,s),P(z,n.c.lamp,e.x1-.3,e.y0,e.x1,e.y1,i,s);break}case"tub":{P(z,t,e.x0,e.y0,e.x1,e.y1,0,.3),P(z,t,e.x0,e.y0,e.x1,e.y0+.28,0,s),P(z,t,e.x0,e.y1-.28,e.x1,e.y1,0,s),P(z,t,e.x0,e.y0,e.x0+.28,e.y1,0,s),P(z,t,e.x1-.28,e.y0,e.x1,e.y1,0,s),P(z,n.c.water,e.x0+.28,e.y0+.28,e.x1-.28,e.y1-.28,.3,s-.35),P(z,t,e.x0+.28,e.y0+.28,e.x0+1.4,e.y1-.28,.3,1.2);break}case"vanity":P(z,t,e.x0,e.y0,e.x1,e.y1,i,i+e.h),P(z,n.c.blackstone,e.x0-.05,e.y0-.05,e.x1,e.y1+.05,i+e.h,i+e.h+.15);for(const l of[e.y0+c*.28,e.y0+c*.72])P(z,n.c.dark,e.x0+.35,l-.8,e.x1-.5,l+.8,i+e.h+.14,i+e.h+.16),P(z,n.c.frame,e.x1-.35,l-.04,e.x1-.1,l+.04,i+e.h+.15,i+e.h+1),P(z,n.c.frame,e.x1-.7,l-.04,e.x1-.1,l+.04,i+e.h+.92,i+e.h+1);P(z,n.c.mirror,e.x1+.08,e.y0+.3,e.x1+.2,e.y1-.3,4.2,7.2);break;case"seat":P(z,t,e.x0,e.y0,e.x1,e.y1,0,1.35),P(z,n.c.linen,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,1.35,1.65);for(let l=0;l<3;l++)P(z,Ce(["#a7b39a","#e2c894","#d9cbb5"][l]),e.x1-.5,e.y0+.6+l*2.1,e.x1-.1,e.y0+2+l*2.1,1.65,2.8);break;case"cubes":{P(z,t,e.x0,e.y0,e.x1,e.y1,0,s);const l=Math.round((h?o:c)/1.1),u=["#a7b39a","#e2c894","#c98f6a","#8fa9b8"];for(let f=0;f<l;f++)for(let d=0;d<2;d++){const p=(f+.08)/l,x=(f+.92)/l,g=.15+d*1.1,m=g+.9,b=Ce(u[(f+d)%4]);h?P(Kt,b,e.x0+o*p,e.y1-.02,e.x0+o*x,e.y1+.05,g,m):P(Kt,b,e.x1-.02,e.y0+c*p,e.x1+.05,e.y0+c*x,g,m)}break}case"beanbags":{const l=o>3?2:1;for(let u=0;u<l;u++)ks(z,t,e.x0+o*(u+.5)/l,a+(u?.4:-.3),.55,1.05,.55,14);break}case"kidwall":{P(z,t,e.x0,e.y0,e.x1,e.y1,0,s);const l=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2"],u=h?o:c;for(let f=0;f<24;f++){const d=.05+f*37%100/100*.9,p=.6+f*53%100/100*(s-1.2),x=(h?e.x0:e.y0)+u*d;h?P(Kt,Ce(l[f%5]),x,e.y1,x+.3,e.y1+.18,p,p+.25):P(Kt,Ce(l[f%5]),e.x1,x,e.x1+.18,x+.3,p,p+.25)}h?P(z,Ce("#4f5e66"),e.x0,e.y1,e.x1,e.y1+3.2,0,.6):P(z,Ce("#4f5e66"),e.x1,e.y0,e.x1+3.2,e.y1,0,.6);break}case"rig":{[[e.x0,e.y0],[e.x1-.3,e.y0],[e.x0,e.y1-.3],[e.x1-.3,e.y1-.3]].forEach(([u,f])=>{P(z,t,u,f,u+.3,f+.3,0,s),P(z,t,u-.4,f-.4,u+.3+.4,f+.3+.4,0,.05)}),P(z,t,e.x0,e.y0,e.x1,e.y0+.3,s-.3,s),P(z,t,e.x0,e.y1-.3,e.x1,e.y1,s-.3,s);for(let u=0;u<4;u++){const f=e.x0+o*(u+.5)/4;Ze(z,n.c.steel,f,a,.06,s-.25,s-.1,6),P(z,n.c.steel,f-.05,e.y0,f+.05,e.y1,s-.25,s-.12)}for(const u of[a-.9,a+.9]){P(z,Ce("#c9b48e"),e.x0+1.15,u-.03,e.x0+1.25,u+.03,6.2,s-.2);const f=new Ni(.4,.07,6,18);Vt(z,n.c.honey,f,e.x0+1.2,u,5.8)}Ze(z,Ce("#c8b083"),e.x1-1,a,.09,.4,s-.2,8),Ze(z,Ce("#c8b083"),e.x1-1,a,.35,.05,.4,10);break}case"frame":{[[e.x0,e.y0],[e.x1-.25,e.y0],[e.x0,e.y1-.25],[e.x1-.25,e.y1-.25]].forEach(([f,d])=>P(z,t,f,d,f+.25,d+.25,i,s)),P(z,t,e.x0,e.y0,e.x1,e.y0+.25,s-.25,s),P(z,t,e.x0,e.y1-.25,e.x1,e.y1,s-.25,s),P(z,t,e.x0,e.y0,e.x0+.25,e.y1,s-.25,s),P(z,t,e.x1-.25,e.y0,e.x1,e.y1,s-.25,s),P(z,Ce("#e6dccb"),e.x0+.2,e.y0+.2,e.x1-.2,e.y1-.2,1.9,2.4),P(z,t,e.x0,e.y0,e.x1,e.y1,0,1.9);for(let f=1;f<4;f++)P(z,n.c.steel,e.x0+o*f/4,e.y0,e.x0+o*f/4+.06,e.y1,s-.5,s-.44);break}case"reformer":P(z,t,e.x0,e.y0,e.x1,e.y1,.3,.8),[[e.x0+.2,e.y0],[e.x1-.5,e.y0],[e.x0+.2,e.y1-.3],[e.x1-.5,e.y1-.3]].forEach(([l,u])=>P(z,t,l,u,l+.3,u+.3,0,.3)),P(z,Ce("#e6dccb"),e.x0+2.2,e.y0+.15,e.x0+4.6,e.y1-.15,.8,s),P(z,n.c.steel,e.x1-.5,e.y0,e.x1-.35,e.y1,.8,2);break;case"rower":P(z,t,e.x0,a-.3,e.x1-1.2,a+.3,.5,.75),P(z,t,e.x0,a-.5,e.x0+.3,a+.5,0,.75),P(z,Ce("#2a2a2a"),e.x0+1.4,a-.45,e.x0+2.4,a+.45,.75,1);{const l=new hn(.95,.95,.9,20);l.rotateZ(Math.PI/2),l.rotateY(Math.PI/2),Vt(z,n.c.glass,l,e.x1-.95,a,.95),P(z,n.c.water,e.x1-1.7,a-.35,e.x1-.2,a+.35,.3,.9),P(z,t,e.x1-2,a-.6,e.x1-1.8,a+.6,0,1.9)}break;case"treadmill":P(z,t,e.x0,e.y0,e.x1,e.y1,0,.6),P(z,Ce("#1a1a1a"),e.x0+.3,e.y0+.3,e.x1-1,e.y1-.3,.6,.65),P(z,t,e.x1-.9,e.y0,e.x1-.6,e.y0+.25,.6,s),P(z,t,e.x1-.9,e.y1-.25,e.x1-.6,e.y1,.6,s),P(z,t,e.x1-1.3,e.y0,e.x1-.6,e.y1,s-.3,s);break;case"krack":P(z,t,e.x0,e.y0,e.x0+.2,e.y1,0,s),P(z,t,e.x1-.2,e.y0,e.x1,e.y1,0,s),P(z,t,e.x0,e.y0,e.x1,e.y1,1.6,1.7),P(z,t,e.x0,e.y0,e.x1,e.y1,s-.1,s);for(let l=0;l<8;l++){const u=e.x0+.5+l*(o-1)/7;for(const f of[1.7,s]){const d=new hn(.17+l*.012,.17+l*.012,.25,10);d.rotateX(Math.PI/2),Vt(Kt,Ce("#1d1d1d"),d.clone(),u,e.y0+.25,f+.2),Vt(Kt,Ce("#1d1d1d"),d,u,e.y1-.25,f+.2)}}for(let l=0;l<6;l++){const u=e.x0+.6+l*1.05;ks(Kt,Ce("#232323"),u,e.y0-.6,.35+l*.03,.35+l*.03,1,10);const f=new Ni(.22,.05,4,10,Math.PI);Vt(Kt,Ce("#232323"),f,u,e.y0-.6,.65+l*.06)}break;case"bands":{for(let u=0;u<3;u++)P(z,t,e.x0,e.y0+u*(c-.3)/2,e.x1,e.y0+u*(c-.3)/2+.3,0,s);for(const u of[3.5,5.5,7.6])P(z,n.c.steel,e.x1-.2,e.y0,e.x1,e.y1,u,u+.1);const l=["#d0573c","#3f7fbf","#4e9a52","#e8c547","#2a2a2a"];for(let u=0;u<10;u++)P(Kt,Ce(l[u%5]),e.x1,e.y0+.6+u*.85,e.x1+.06,e.y0+.75+u*.85,5.6-u%3*.8,7.6);break}case"mirror":P(z,n.c.mirror,e.x0,e.y0,e.x1,e.y1,i,s),P(z,n.c.frame,e.x0-.02,e.y0,e.x1+.02,e.y1,i-.05,i);break;case"plunge":{P(z,t,e.x0,e.y0,e.x1,e.y0+.35,0,s),P(z,t,e.x0,e.y1-.35,e.x1,e.y1,0,s),P(z,t,e.x0,e.y0,e.x0+.35,e.y1,0,s),P(z,t,e.x1-.35,e.y0,e.x1,e.y1,0,s),P(z,n.c.zellige,e.x0+.35,e.y0+.35,e.x1-.35,e.y1-.35,-.02,0),P(z,n.c.water,e.x0+.35,e.y0+.35,e.x1-.35,e.y1-.35,0,s-.12);break}case"benches":{P(z,t,e.x0,e.y0,e.x1,e.y0+1.8,1.4,1.6),P(z,t,e.x0,e.y0+1.8,e.x1,e.y1,s-.2,s),P(z,t,e.x0,e.y0+1.6,e.x1,e.y0+1.8,1.6,s),P(z,n.c.lamp,e.x0,e.y0+.15,e.x1,e.y0+.25,1.3,1.38),P(z,n.c.lamp,e.x0,e.y0+1.95,e.x1,e.y0+2.05,s-.3,s-.22),P(z,t,e.x0,e.y1-.2,e.x1,e.y1,s,s+2.5);break}case"heater":P(z,t,e.x0,e.y0,e.x1,e.y1,.3,s-.4);for(let l=0;l<9;l++){const u=new ua(.22,0);Vt(z,Ce(l%2?"#6d6a66":"#8a8580"),u,e.x0+.3+l%3*.4,e.y0+.4+Math.floor(l/3)*.5,s-.3)}for(let l=0;l<4;l++)P(z,n.c.aspen,e.x0-.2+l*.5,e.y1+.1,e.x0-.05+l*.5,e.y1+.2,.2,s);break;case"lowtable":P(z,t,e.x0,e.y0,e.x1,e.y1,.9,1.2),P(z,t,e.x0+.3,e.y0+.3,e.x1-.3,e.y1-.3,0,.9),[[r,e.y0-1],[r,e.y1+1],[e.x0-1,a],[e.x1+1,a]].forEach(([l,u])=>P(z,Ce("#6f7a55"),l-.85,u-.85,l+.85,u+.85,0,.3));break;case"andon":P(z,n.c.paper,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,.3,s),[[e.x0,e.y0],[e.x1-.08,e.y0],[e.x0,e.y1-.08],[e.x1-.08,e.y1-.08]].forEach(([l,u])=>P(z,Ce("#3d2c20"),l,u,l+.08,u+.08,0,s));break;case"standdesk":P(z,t,e.x0,e.y0,e.x1,e.y1,s-.12,s);for(const l of[e.x0+.5,e.x1-.7])P(z,n.c.frame,l,a-.1,l+.2,a+.1,0,s-.12),P(z,n.c.frame,l-.1,e.y0+.2,l+.3,e.y1-.2,0,.1);P(z,n.c.frame,r-1.4,e.y0+.5,r+1.4,e.y0+.6,s+.5,s+2),P(z,n.c.frame,r-.1,e.y0+.55,r+.1,e.y0+.9,s,s+.6),P(Kt,Ce("#bfc3c5"),r-.6,e.y1-1.1,r+.6,e.y1-.4,s,s+.04),Ze(z,n.c.frame,r,e.y1+1.4,.1,0,1.6,8),P(z,Ce("#4a4a46"),r-.9,e.y1+.6,r+.9,e.y1+2.2,1.6,1.85),P(z,Ce("#4a4a46"),r-.9,e.y1+2,r+.9,e.y1+2.25,1.85,3.6);break;case"studio":P(z,t,e.x0,e.y0,e.x1,e.y1,s-.15,s),P(z,n.c.frame,e.x0+.2,e.y0+.2,e.x0+2.2,e.y1-.2,0,s-.15),P(z,n.c.frame,e.x1-2.2,e.y0+.2,e.x1-.2,e.y1-.2,0,s-.15),P(z,Ce("#2b2b2b"),r-1.6,e.y1-1.6,r+1.6,e.y1-.2,s,s+.25);for(let l=0;l<12;l++)P(Kt,Ce(l%3?"#cfcfcf":"#e8c547"),r-1.4+l*.25,e.y1-1.3,r-1.3+l*.25,e.y1-.6,s+.25,s+.32);P(z,Ce("#1d1d1d"),e.x0+.5,e.y0+.4,e.x0+1.4,e.y0+1.4,s,s+.15);for(let l=0;l<16;l++)P(Kt,Ce("#d0573c"),e.x0+.58+l%4*.2,e.y0+.48+Math.floor(l/4)*.22,e.x0+.72+l%4*.2,e.y0+.62+Math.floor(l/4)*.22,s+.15,s+.18);P(z,n.c.frame,r-2.6,e.y0+.3,r-.2,e.y0+.4,s+.6,s+2),P(z,n.c.frame,r+.2,e.y0+.3,r+2.6,e.y0+.4,s+.6,s+2);for(const l of[e.x0+.4,e.x1-1.3])P(z,Ce("#2a2a2a"),l,e.y0+.2,l+.9,e.y0+1.1,s,s+1.3);break;case"piano":P(z,t,e.x0,e.y0,e.x1,e.y1,2.15,2.6),P(z,t,e.x0,e.y0,e.x1-.4,e.y0+.15,0,2.15),P(z,t,e.x0,e.y1-.15,e.x1-.4,e.y1,0,2.15),P(z,n.c.white,e.x1-.55,e.y0+.2,e.x1-.05,e.y1-.2,2.6,2.66);for(let l=0;l<16;l++)P(Kt,Ce("#111"),e.x1-.55,e.y0+.3+l*.27,e.x1-.25,e.y0+.4+l*.27,2.66,2.72);P(z,t,e.x1+1,a-.9,e.x1+2,a+.9,1.4,1.65);break;case"drums":{[[0,-1.4,.9,1.1],[-1.5,0,.6,2.4],[1.5,.2,.55,2.6],[-.8,1.3,.5,2.8],[.9,1.4,.5,2.8],[-2,1.6,.7,3.6],[2.1,1.7,.75,3.8]].forEach(([l,u,f,d],p)=>{p>=5?(Ze(z,Ce("#b39a5a"),r+l,a+u,f,d,d+.05,16),Ze(z,t,r+l,a+u,.05,0,d,6)):Ze(z,p===0?Ce("#444"):t,r+l,a+u,f,p===0?0:d-.35,p===0?1.8:d,16)}),Ze(z,Ce("#6f7a55"),r,a-2.6,.6,0,1.6,12);break}case"guitarwall":{P(z,n.c.honey,e.x0,e.y0+.1,e.x1,e.y1,i+2.9,i+3.1);const l=["#c98a3c","#1d1d1d","#a33a2a","#e6d3a8"],u=4;for(let f=0;f<u;f++)H_(e.x0+o*(f+.5)/u,i,l[f],e.y0+.05,.28);break}case"apanels":{const l=Math.floor(c/4.2);for(let u=0;u<l;u++){const f=e.y0+u*(c/l)+.2;P(z,Ce(["#8d8a72","#6f7a68","#a39a86"][u%3]),e.x0,f,e.x1,f+c/l-.4,i+u%2*.6,i+4.5+u%2*.6)}break}case"clouds":for(let l=0;l<2;l++)for(let u=0;u<2;u++){const f=e.x0+l*o/2+.4,d=e.y0+u*c/2+.4;P(z,t,f,d,f+o/2-.8,d+c/2-.8,i+(l+u)%2*.4,i+.3+(l+u)%2*.4)}break;case"ribs":{const l=Math.floor(o/.9);for(let u=0;u<=l;u++){const f=e.x0+u*o/l,d=.3+.55*(.5+.5*Math.sin(u/l*Math.PI*2.2));P(z,t,f-.12,e.y0,f+.12,e.y1,s-d,s)}break}case"layered":Ze(z,n.c.frame,r,a,.02,i+e.h,12.8,4),[[1.1,0],[.8,.35],[.5,.7]].forEach(([l,u])=>Ze(z,t,r,a,l*.35,i+u,i+u+.25,18,l)),Ze(z,n.c.lamp,r,a,.3,i-.05,i,12),Ze(z,n.c.frame,23.7,15,.02,7.6,12.8,4),[[1.1,0],[.8,.35],[.5,.7]].forEach(([l,u])=>Ze(z,t,23.7,15,l*.35,6.6+u,6.85+u,18,l));break;case"rgb":P(z,n.c.rgb,e.x0,e.y0,e.x1,e.y1,i,s);break;default:P(z,t,e.x0,e.y0,e.x1,e.y1,i,s),e.label.includes("Mic")&&Ze(z,Ce("#222"),r,a,.18,s,s+.45,10)}}}function Sh(n,e,t,i,s,r,a,o,c=.45,h=.15){const l=Math.hypot(s-t,r-i),u=Math.floor(l/c);for(let f=0;f<=u;f++){const d=f/u,p=t+(s-t)*d,x=i+(r-i)*d;P(n,e,p-h/2,x-h/2,p+h/2,x+h/2,a,o)}}function V_(n,e){const t=Rt.site,i=-1.7,s=new Gi(1600,1600,1,1);s.rotateX(-Math.PI/2);const r=s.attributes.uv;for(let _=0;_<r.count;_++)r.setXY(_,r.getX(_)*1600,r.getY(_)*1600);const a=new Gt(s,n.meadow);a.position.y=i,a.receiveShadow=!0,e.ground.add(a);const o=Rt.courtyard,c=[n.plinth,n.plinth,n.flag,n.plinth,n.plinth,n.plinth];P("site",c,o.x0,o.y0,o.x1,o.y1,i,-.3);const h=t.lawn;P("site",[n.plinth,n.plinth,n.turf,n.plinth,n.plinth,n.plinth],h.x0,h.y0,h.x1,h.y1,-.5,-.28);const l=t.zen;P("site",n.plinth,l.x0-.3,l.y0-.3,l.x1+.3,l.y1+.3,-.5,-.26),P("site",n.gravel,l.x0,l.y0,l.x1,l.y1,-.5,-.27),[[42,33,1.6,1.4],[48.5,36.5,1.2,1],[50,32,.9,.8]].forEach(([_,L,I,N])=>{const G=new ua(I,0);G.scale(1,N/I*.7,1),G.translate(_-xt,-.3+N*.3,-(L-wt)),Ht.add("site",n.plinth,G)});const u=t.water;P("site",n.c.blackstone,u.x0-.6,u.y0-.6,u.x1+.6,u.y1+.6,i,.1),P("site",n.poolwater,u.x0,u.y0,u.x1,u.y1,i,-.05);{const _=new Dt({color:7309893,roughness:.9}),L=new Dt({color:5208634,roughness:.6});for(let I=0;I<26;I++){const N=u.x0+.8+I*41%100/100*(u.x1-u.x0-1.6),G=u.y0+.8+I*67%100/100*(u.y1-u.y0-1.6);I%3?Ze("site",_,N,G,.06,-.05,2.2+I%4*.5,4,.02):Ze("site",L,N,G,.6,0,.03,10)}}Ze("site",n.c.stone,u.x0-1.8,u.y0+2.5,1.2,-.3,1.1,12),Ze("site",n.water,u.x0-1.8,u.y0+2.5,.8,1.1,1.13,12),P("site",n.c.fir,u.x0-1.85,u.y0+2.5,u.x0-.2,u.y0+2.62,1.6,1.72);const f=t.shadetree;Ze("site",n.dark,f.cx,f.cy,.9,-.3,11,10,.55);{const _=new Dt({color:7178814,roughness:.9});[[0,0,17,5.6],[2.8,1.6,15.5,3.7],[-2.8,-1.2,16,3.8],[1.2,-2.8,19,3.4],[-1.6,2.4,19.5,3.5],[0,0,22,3.2]].forEach(([L,I,N,G])=>{const H=new gi(G,1);H.scale(1,.72,1),H.translate(f.cx+L-xt,N,-(f.cy+I-wt)),Ht.add("site",_,H)})}{const _=new Dt({color:12076074,roughness:.9}),L=new Dt({color:13658670,roughness:.9});t.maples.forEach(([I,N],G)=>{Ze("site",n.dark,I,N,.22,-.3,4.5,6,.14),[[0,0,5.6,2.5],[1.3,.6,4.9,1.8],[-1.4,-.6,5.1,1.9],[.4,-1.2,6.5,1.6]].forEach(([H,j,Y,Z])=>{const ee=new gi(Z,1);ee.scale(1.15,.55,1.15),ee.translate(I+H-xt,Y,-(N+j-wt)),Ht.add("site",G%2?L:_,ee)})})}t.lanterns.forEach(([_,L])=>{Ze("site",n.c.stone,_,L,.55,-.3,.1,6),Ze("site",n.c.stone,_,L,.2,.1,1.8,6),P("site",n.c.stone,_-.5,L-.5,_+.5,L+.5,1.8,2.6),P("site",n.paper,_-.32,L-.52,_+.32,L+.52,1.95,2.45),Ze("site",n.c.stone,_,L,.15,2.6,3.3,6,.9),Ze("site",n.c.stone,_,L,.05,3.3,3.55,6,.18)});for(let _=0;_<9;_++){const L=Math.PI*(1.05+_*.06),I=gs(1.25,.18,1.5);I.translate(0,0,0),I.rotateY(L+Math.PI/2);const N=6.2;if(Vt("site",n.teak,I,f.cx+Math.cos(L)*N,f.cy+Math.sin(L)*N,1.4),_%2===0){const G=gs(.25,1.4,1.1);G.rotateY(L+Math.PI/2),Vt("site",n.c.blackstone,G,f.cx+Math.cos(L)*N,f.cy+Math.sin(L)*N,0)}}{const _=new Dt({color:4156213,roughness:.8});[[38.5,29.5],[56,41.2],[42.5,52.5],[69.5,51.5],[54,29],[70,36.5]].forEach(([L,I],N)=>{for(let G=0;G<5;G++){const H=new us(.5,3+G%3,4);H.rotateZ((G-2)*.35),H.rotateY(G*1.3),Vt("site",_,H,L+(G-2)*.3,I+(G*7%3-1)*.3,1)}})}{const _=[];for(let j=39;j<=69;j+=6)_.push([j,28.4],[j,53.8]);for(let j=34;j<=50;j+=5.3)_.push([37.2,j],[70.8,j]);const L=new hn(.12,.14,1.6,6);L.translate(0,.8,0);const I=new mi(L,n.frame,_.length),N=new hn(.16,.16,.3,8),G=new mi(N,n.lamp,_.length),H=new rt;_.forEach(([j,Y],Z)=>{H.makeTranslation(j-xt,-.3,-(Y-wt)),I.setMatrixAt(Z,H),H.makeTranslation(j-xt,1.35,-(Y-wt)),G.setMatrixAt(Z,H)}),e.detail.add(I),e.detail.add(G)}{const _=t.cshower;P("site",n.c.blackstone,_.x0,_.y0,_.x1,_.y1,-.3,-.18),P("site",n.c.charred,_.x0,_.y1-.3,_.x1,_.y1,-.3,7),P("site",n.c.charred,_.x0,_.y0,_.x0+.3,_.y1,-.3,7),P("site",n.c.brass,_.x0+2.4,_.y1-.5,_.x0+2.55,_.y1-.3,-.2,7.2),P("site",n.c.brass,_.x0+2.3,_.y1-1.6,_.x0+2.65,_.y1-.4,7,7.15),Ze("site",n.c.brass,_.x0+2.47,_.y1-1.5,.45,6.85,7,14)}const d=t.pooldeck,p=t.pool;P("site",c,d.x0,d.y0,d.x1,p.y0,i,-1),P("site",c,d.x0,p.y1,d.x1,d.y1,i,-1),P("site",c,d.x0,p.y0,p.x0,p.y1,i,-1),P("site",c,p.x1,p.y0,d.x1,p.y1,i,-1),P("site",n.pooltile,p.x0,p.y0,p.x1,p.y1,-5.6,-5.4),P("site",n.pooltile,p.x0,p.y0-.02,p.x1,p.y0+.02,-5.4,-1),P("site",n.pooltile,p.x0,p.y1-.02,p.x1,p.y1+.02,-5.4,-1),P("site",n.pooltile,p.x0-.02,p.y0,p.x0+.02,p.y1,-5.4,-1),P("site",n.pooltile,p.x1-.02,p.y0,p.x1+.02,p.y1,-5.4,-1),P("site",n.poolwater,p.x0,p.y0,p.x1,p.y1,-5.4,-1.4);{const _=t.bale;P("site",n.c.honey,_.x0,_.y0,_.x1,_.y1,-1,.4),P("site",n.c.linen,_.x0+.4,_.y0+.4,_.x1-.4,_.y1-.4,.4,.9),[[_.x0+1,_.y0+2],[_.x1-2,_.y0+2],[_.x0+1.5,_.y1-1.5]].forEach(([L,I],N)=>P("site",Ce(["#a7b39a","#e2c894","#c98f6a"][N]),L,I,L+1.2,I+1.2,.9,1.5)),[[_.x0,_.y0],[_.x1-.5,_.y0],[_.x0,_.y1-.5],[_.x1-.5,_.y1-.5]].forEach(([L,I])=>P("site",n.c.fir,L,I,L+.5,I+.5,.4,_.h)),P("site",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],_.x0-3,_.y0-3,_.x1+3,_.y1+3,_.h,_.h+.6,(L,I)=>(I-(_.y0+_.y1)/2)*.12)}for(let _=0;_<3;_++)P("site",n.c.teak,60+_*7,-27,62.5+_*7,-23.5,-1,-.5),P("site",n.c.linen,60.1+_*7,-26.9,62.4+_*7,-23.6,-.5,-.25);const x=t.outdoor_shower;P("site",n.stone,x.x0,x.y0,x.x1,x.y1,-1.2,-.9),P("site",n.c.charred,x.x0,x.y0,x.x0+.3,x.y1,-.9,7),P("site",n.c.charred,x.x0,x.y0,x.x1,x.y0+.3,-.9,7),P("site",n.brass,x.x0+.3,x.y0+2.4,x.x0+.5,x.y0+2.6,-.9,7.2),P("site",n.brass,x.x0+.3,x.y0+2.4,x.x0+1.5,x.y0+2.6,7,7.2),Ze("site",n.brass,x.x0+1.4,x.y0+2.5,.4,6.85,7,12);const g=t.lane;P("site",n.turf,g.x0,g.y0,g.x1,g.y1,i,-1.05);for(let _=0;_<=4;_++){const L=g.x0+_*15;P("site",n.white,L-.15,g.y0,L+.15,g.y1,-1.05,-1.02)}P("site",n.white,g.x0,(g.y0+g.y1)/2-.08,g.x1,(g.y0+g.y1)/2+.08,-1.05,-1.03),P("site",n.c.charred,g.x1+.5,g.y0-1,g.x1+1.5,g.y1+1,i,2.5);{const _=t.pullup;[_.x0,_.x1-.3].forEach(L=>P("site",n.frame,L,(_.y0+_.y1)/2-.15,L+.3,(_.y0+_.y1)/2+.15,-1.05,8.5)),P("site",n.steel,_.x0,(_.y0+_.y1)/2-.05,_.x1,(_.y0+_.y1)/2+.05,8,8.12),P("site",n.steel,_.x0,(_.y0+_.y1)/2-.05,_.x1,(_.y0+_.y1)/2+.05,5.6,5.72)}P("site",n.flag,4,-8,50,0,i,-1.05);const m=t.veg;P("site",n.gravel,m.x0,m.y0,m.x1,m.y1,i,-1.1);for(let _=0;_<4;_++){const L=m.x0+1.5+_*5.8;P("site",n.c.fir,L,m.y0+2,L+4,m.y0+20,i,.6),P("site",Ce("#4a3a2c"),L+.2,m.y0+2.2,L+3.8,m.y0+19.8,.6,.65);for(let I=0;I<8;I++){const N=new gi(.75,0);N.translate(L+2-xt,1.1,-(m.y0+3.5+I*2.1-wt)),Ht.add("site",Ce(I%3?"#5f8a3e":"#7aa64c"),N)}}Sh("site",n.c.fir,m.x0,m.y0,m.x0,m.y1,i,3.5,1.2,.2),Sh("site",n.c.fir,m.x0,m.y1,m.x1,m.y1,i,3.5,1.2,.2);{const _=new hn(.25,.35,5,6);_.translate(0,2.5,0);const L=new gi(3.2,1);L.scale(1,.8,1);const I=new Ss(.28,6,4),N=t.orchard.length,G=new mi(_,n.dark,N),H=new mi(L,new Dt({color:6195770,roughness:.9}),N),j=new mi(I,new Dt({color:13783086,roughness:.5}),N*8),Y=new rt;t.orchard.forEach(([Z,ee],Re)=>{Y.makeTranslation(Z-xt,i,-(ee-wt)),G.setMatrixAt(Re,Y),Y.makeTranslation(Z-xt,i+7.2,-(ee-wt)),H.setMatrixAt(Re,Y);for(let Me=0;Me<8;Me++){const at=Me*.785+Re;Y.makeTranslation(Z-xt+Math.cos(at)*2.9,i+6.2+Me%3*.8,-(ee-wt)+Math.sin(at)*2.9),j.setMatrixAt(Re*8+Me,Y)}}),[G,H].forEach(Z=>{Z.castShadow=!0,e.site.add(Z)}),e.detail.add(j)}const b=t.bikes;P("site",n.stone,b.x0-1,b.y0,b.x1,b.y1,i,-1.05);const A=new Dt({color:2236962,roughness:.7});for(let _=0;_<4;_++){const L=b.y0+1.2+_*2.4;P("site",n.frame,b.x0+.2,L-.05,b.x1-.2,L+.05,-1.05,1.3),[0,2.5].forEach(I=>{const N=new Ni(1.1,.12,6,18);N.rotateY(Math.PI/2*0),N.translate(b.x0-1.2+I-xt,0,-(L-wt)),Ht.add("site",A,N)}),P("site",Ce(["#a3613d","#3f7fbf","#4e9a52","#e8c547"][_]),b.x0-1.2,L-.06,b.x0+1.3,L+.06,.6,.75)}const S=t.entrycourt;P("site",n.flag,S.x0,S.y0,S.x1,S.y1,i,-1.05),P("site",n.gravel,-46,16,-20,58,i,-1.1);const w=new fa;[[-90,4],[-60,10],[-44,24],[-46,16],[-62,0],[-90,-6]].forEach(([_,L],I)=>I?w.lineTo(_-xt,L-wt):w.moveTo(_-xt,L-wt));const T=new Cl(w);T.rotateX(-Math.PI/2),T.scale(1,1,1),T.translate(0,i+.08,0),Ht.add("site",n.gravel,T);const R=t.carport;[[R.x0,R.y0],[R.x1-.4,R.y0],[R.x0,R.y1-.4],[R.x1-.4,R.y1-.4],[R.x0,(R.y0+R.y1)/2],[R.x1-.4,(R.y0+R.y1)/2]].forEach(([_,L])=>P("site",n.frame,_,L,_+.4,L+.4,i,9));{const _=(L,I)=>(L-(R.x0+R.x1)/2)*.06;P("site",[n.frame,n.frame,n.seam,n.frame,n.frame,n.frame],R.x0-3,R.y0-3,R.x1+3,R.y1+3,9,9.7,_)}P("site",Ce("#8d9399"),R.x0+3,R.y0+3,R.x0+9.5,R.y1-4,i,3.6),P("site",Ce("#5b6e5a"),R.x0+13,R.y0+3,R.x0+19.5,R.y1-4,i,4.8),P("site",n.c.rammed,1,36,2,47,i,4);{const _=new Dt({color:10134106,roughness:1}),L=new Dt({color:5205564,roughness:.9});t.frontgarden.forEach(([I,N,G,H],j)=>{P("site",n.plinth,I,N,G,H,i,-1),P("site",Ce("#4a3a2c"),I+.3,N+.3,G-.3,H-.3,-1,-.95);for(let Y=0;Y<18;Y++){const Z=I+1+(Y*37+j*11)%100/100*(G-I-2),ee=N+1+Y*59%100/100*(H-N-2);if(Y%3){const Re=new us(.7,2.2,5);Vt("site",_,Re,Z,ee,.1)}else ks("site",L,Z,ee,-.3,1.1,.7,8)}}),Ze("site",n.dark,-10,44,.25,i,7,6,.15),[[0,0,9,3],[1.5,1,8,2],[-1.4,-.8,8.3,2.2]].forEach(([I,N,G,H])=>{const j=new gi(H,1);j.scale(1,.75,1),Vt("site",new Dt({color:9085004,roughness:.9}),j,-10+I,44+N,G)})}{const _=t.walkway;P("site",n.flag,_.x0,_.y0,_.x1+5,_.y1,i,-1);for(let L=_.x0+.5;L<_.x1;L+=6)P("site",n.frame,L,_.y0+.3,L+.3,_.y0+.6,-1,_.h),P("site",n.frame,L,_.y1-.6,L+.3,_.y1-.3,-1,_.h);P("site",[n.frame,n.frame,n.seam,n.soffit,n.frame,n.frame],_.x0-.5,_.y0-1,_.x1+.5,_.y1+1,_.h,_.h+.5,(L,I)=>(I-(_.y0+_.y1)/2)*-.08)}const v=t.veranda;P("site",c,v.x0,v.y0,v.x1,v.y1,i,-.25);const E=t.pergola;P("site",c,E.x0,E.y0,E.x1,E.y1,i,-.25),[[E.x0,E.y0+.5],[E.x1-.7,E.y0+.5],[E.x0,E.y1-.7],[E.x1-.7,E.y1-.7]].forEach(([_,L])=>P("site",n.c.charred,_,L,_+.7,L+.7,-.25,9)),P("site",n.c.charred,E.x0-1,E.y0+.5,E.x1+1,E.y0+1.1,8.4,9.2),P("site",n.c.charred,E.x0-1,E.y1-1.1,E.x1+1,E.y1-.5,8.4,9.2);for(let _=E.x0;_<=E.x1;_+=1.2)P("site",n.c.fir,_,E.y0-.5,_+.25,E.y1+.5,9.2,9.7);P("site",Ce("#6b4a33"),23,85,33,89,2.2,2.5),[23.5,32].forEach(_=>P("site",Ce("#6b4a33"),_,85.5,_+.4,88.5,-.25,2.2)),P("site",Ce("#d9cbb5"),23,83.4,33,84.6,-.25,1.3),P("site",Ce("#d9cbb5"),23,89.4,33,90.6,-.25,1.3);const D=t.firepit;{const _=new hn(D.r+1.5,D.r+1.5,.5,40);_.translate(D.cx-xt,i+.2,-55),Ht.add("site",n.flag,_),Ze("site",n.c.stone,D.cx,D.cy,2.8,i,-.2,28),Ze("site",n.dark,D.cx,D.cy,2.1,-.2,-.18,24);for(let N=0;N<4;N++){const G=N*Math.PI/2+.4,H=new hn(D.r-.6,D.r-.6,1.4,20,1,!0,G,1);H.translate(D.cx-xt,i+1.2,-55),Ht.add("site",n.c.stone,H)}const L=new Dt({color:16747069,emissive:16738842,emissiveIntensity:1.5});L.name="fire";const I=new us(.9,1.6,8);I.translate(D.cx-xt,.6,-55),Ht.add("site",L,I)}{const _=t.climb,L=_.oh;P("site",[n.plinth,n.plinth,n.stone,n.plinth,n.plinth,n.plinth],_.x0-1,_.y0-1,_.x1+1,_.y1+1,i,-1),P("site",Ce("#b5694a"),_.x0,_.y0,_.x1,_.y1,-1,-.6),[[_.x0,_.y0],[_.x1-.7,_.y0],[_.x0,_.y1-.7],[_.x1-.7,_.y1-.7]].forEach(([N,G])=>P("site",n.c.fir,N,G,N+.7,G+.7,-.6,_.h-1)),P("site",n.c.fir,_.x0-.5,_.y0,_.x1+.5,_.y0+.7,_.h-2,_.h-1),P("site",n.c.fir,_.x0-.5,_.y1-.7,_.x1+.5,_.y1,_.h-2,_.h-1);for(let N=_.x0+3;N<_.x1-1;N+=3)P("site",n.c.fir,N,_.y0-L+.5,N+.35,_.y1+L-.5,_.h-1,_.h-.6);P("site",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],_.x0-L,_.y0-L,_.x1+L,_.y1+L,_.h-.6,_.h+.3,(N,G)=>(G-(_.y0+_.y1)/2)*.07),P("site",n.c.charred,_.x0+1,_.y1-1.6,_.x1-1,_.y1-.9,-.6,11.4),P("site",n.c.fir,_.x0+1.2,_.y1-2,_.x1-1.2,_.y1-1.6,-.4,11.2);const I=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2","#f1eee7"];for(let N=0;N<70;N++){const G=_.x0+1.6+N*37%100/100*14.6,H=.6+N*53%100/100*10;P("detail",Ce(I[N%6]),G,_.y1-2.3,G+.38,_.y1-2,H,H+.3)}P("site",Ce("#d9cbb5"),_.x0+9,_.y1-3.4,_.x0+12,_.y1-2,4,6.5),P("site",Ce("#55524c"),_.x0+1.2,_.y1-7,_.x1-1.2,_.y1-2.3,-.6,.2);for(let N=0;N<4;N++){const G=_.y0+3+N*2.4;P("site",n.frame,_.x1-2.2,G-.05,_.x1-.9,G+.05,-.6,1.8),[0,2.3].forEach(H=>{const j=new Ni(1,.11,6,18);j.translate(_.x1-3.6+H-xt,.5,-(G-wt)),Ht.add("site",A,j)}),P("site",Ce(["#4e9a52","#e8c547","#3f7fbf","#a3613d"][N]),_.x1-3.6,G-.06,_.x1-1.2,G+.06,1,1.15)}P("site",n.stone,_.x1+1,2,4,6,i,-1)}const U=t.bathgarden;P("site",n.c.charred,U.x1-.5,U.y0,U.x1,U.y1,i,7),P("site",n.c.charred,U.x0,U.y1-.5,U.x1,U.y1,i,7),P("site",n.gravel,U.x0,U.y0,U.x1-.5,U.y1-.5,i,-1.1),P("site",n.flag,72,0,78,14,i,-.9),P("site",n.flag,66,-0,72,1,i,-.95)}function W_(n){const e=new hn(.35,.5,1,6);e.translate(0,.5,0);const t=new us(1,1,7);t.translate(0,.5,0);const i=new gi(1,1),s=[];let r=11;const a=()=>(r=r*16807%2147483647,r/2147483647);for(let d=0;d<400&&s.length<120;d++){const p=-170+a()*420,x=-140+a()*340;p>-70&&p<135&&x>-50&&x<125||x>90&&p>-40&&p<140||x<-45&&p>-80&&p<130||p>-100&&p<-40&&x>-10&&x<30||s.push([p,x,a()])}const o=new mi(e,new Dt({color:14605008,roughness:.9}),s.length),c=new mi(t,new Dt({color:4085046,roughness:.9}),s.length),h=new mi(i,new Dt({color:12038218,roughness:.9}),s.length),l=new rt;let u=0,f=0;s.forEach(([d,p,x],g)=>{const m=p>60?x<.6:x<.35,b=m?26+x*30:22+x*16;l.compose(un(d,p,-1.7),new Dn,new O(1,m?b*.25:b*.6,1)),o.setMatrixAt(g,l),m?(l.compose(un(d,p,b*.18),new Dn,new O(5+x*3,b*.85,5+x*3)),c.setMatrixAt(u++,l)):(l.compose(un(d,p,b*.7),new Dn,new O(4+x*2,b*.32,4+x*2)),h.setMatrixAt(f++,l))}),c.count=u,h.count=f,[o,c,h].forEach(d=>{d.castShadow=!0,d.receiveShadow=!0,n.site.add(d)})}function Gr(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function yu(n,e){const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,a=s*s*(3-2*s),o=r*r*(3-2*r),c=Gr(t,i),h=Gr(t+1,i),l=Gr(t,i+1),u=Gr(t+1,i+1);return c+(h-c)*a+(l-c)*o+(c-h-l+u)*a*o}function X_(n,e){let t=0,i=.5,s=1;for(let r=0;r<6;r++){const a=1-Math.abs(yu(n*s,e*s)*2-1);t+=a*a*i,i*=.5,s*=2.05}return t}function q_(n){const r=[],a=[],o=[],c=new Xe(9278560),h=new Xe(3952439),l=new Xe(8748660),u=new Xe(16119540),f=new Xe(11845835),d=(m,b,A)=>{const S=Math.min(1,Math.max(0,(A-m)/(b-m)));return S*S*(3-2*S)};for(let m=0;m<=90;m++){const b=m/90,A=700+19300*Math.pow(b,1.9);for(let S=0;S<=320;S++){const w=S/320*Math.PI*2,T=Math.sin(w)*A,R=-Math.cos(w)*A,v=.55+.75*Math.pow(Math.max(0,Math.cos(w)),2),E=yu(T/600+9,R/600+2)*260*d(900,2600,A)*(1-d(5e3,9e3,A)*.5),D=Math.pow(X_(T/5200+3.1,R/5200+7.7),1.6)*A*.5*v*d(2400,6e3,A);let U=E+D;A>15e3&&(U*=1-d(15e3,2e4,A)*.6),U+=-1.75,r.push(T,U,R);const _=c.clone();_.lerp(h,d(40,260,U)),U>900&&_.lerp(l,d(900,1500,U)),U>1700&&_.lerp(u,d(1700,2100,U)),_.lerp(f,Math.min(.42,d(3e3,2e4,A)*.5)),a.push(_.r,_.g,_.b)}}for(let m=0;m<90;m++)for(let b=0;b<320;b++){const A=m*321+b,S=A+320+1;o.push(A,A+1,S,S,A+1,S+1)}const p=new Pt;p.setAttribute("position",new ht(r,3)),p.setAttribute("color",new ht(a,3)),p.setIndex(o),p.computeVertexNormals();const x=new Dt({vertexColors:!0,roughness:1});x.fog=!1;const g=new Gt(p,x);n.mtn.add(g)}const xa=[{id:"C",name:"Courtyard",wing:"Outdoor",x0:36,y0:27,x1:72,y1:55,notes:"The heart of the house, now 36 x 28 ft. A katsura shade tree with a curved teak bench, Japanese maples, a lawn, a raked-gravel garden with three stones, a planted water court with a stone water basin, stone lanterns and lit paths, all on a flagstone terrace under 6-ft eaves. Every main room opens onto it.",h:null,floor:"Flagstone, lawn, raked gravel",fin:"Flagstone terrace; raked gravel; lawn; black-stone water court edge; stone lanterns and basin; teak bench; path lights"},{id:"P",name:"Pool",wing:"Outdoor",x0:54,y0:-22,x1:88,y1:-10,notes:"Small 34 x 12 ft pool lined in green stone tile, on the sunny south side outside the wellness wing. Flagstone deck, teak loungers, and a bale pavilion at the east end.",floor:"Flagstone deck",fin:"Green stone pool tile; flagstone deck; teak and linen loungers"},{id:"B",name:"Bale Pavilion",wing:"Outdoor",x0:90,y0:-27,x1:97,y1:-19,notes:"Balinese-style bale by the pool: a raised honey-oak platform with linen cushions under a low standing-seam roof on fir posts.",floor:"Honey-oak platform",fin:"Honey oak; fir posts; standing-seam roof; linen cushions"},{id:"L",name:"Turf Sprint Lane",wing:"Outdoor",x0:-32,y0:-16,x1:43,y1:-8,notes:"20 yards (60 ft) of turf marked every 5 yards, plus a 15-ft run-out to a charred-timber end wall. An outdoor pull-up station stands at the gym end.",floor:"Synthetic turf",fin:"Turf; charred-timber end wall; black steel pull-up station"},{id:"V",name:"Vegetable Garden",wing:"Outdoor",x0:-30,y0:64,x1:-6,y1:86,notes:"Loved: four 4 x 18 ft cedar raised beds inside a slatted deer fence, a few steps from the mudroom and pantry, with a small orchard of fruit trees beside it.",floor:"Gravel",fin:"Cedar beds; gravel paths; fruit trees"},{id:"F",name:"Round Stone Fire Pit",wing:"Outdoor",x0:51,y0:92,x1:65,y1:106,notes:"Round stone fire pit with a curved stone seat wall on a flagstone circle, facing the mountains off the covered veranda.",floor:"Flagstone",fin:"Natural stone ring and seat walls; flagstone"},{id:"D",name:"Pergola Dining",wing:"Outdoor",x0:19,y0:81,x1:37,y1:95,notes:"Outdoor table for ten under a charred-timber and fir pergola, next to the kitchen and the view.",floor:"Flagstone",fin:"Flagstone; charred timber and fir pergola"},{id:"W",name:"Climbing Pavilion",wing:"Outdoor",x0:-22,y0:0,x1:-4,y1:18,area:0,cov:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. A 16-ft-wide, 12-ft-high kids' bouldering wall sits on the north side facing the sprint lane, over a poured-rubber soft-fall surface and crash pad. It sits in the active zone between the exercise room, the sprint lane and a second 4-bike rack. Covered outdoor area, not conditioned.",floor:"Poured-rubber soft-fall",equip:["Climbing wall 16' × 12'","Bouldering volume","Crash pad","4-bike rack"],fin:"Fir frame; standing-seam roof; charred fascia; poured rubber"},{id:"S",name:"Outdoor Shower",wing:"Outdoor",x0:72.5,y0:4,x1:77.5,y1:10,notes:"Loved: stone shower by the pool behind solid charred-timber walls (no slat enclosure), next to the changing room.",floor:"Stone",fin:"Charred timber walls; stone floor; brass rain head"},{id:"Q",name:"Courtyard Shower",wing:"Outdoor",x0:66.5,y0:27.5,x1:71.5,y1:31.5,notes:"A second open-air shower in the courtyard corner by the wellness wing, with a charred-timber privacy wall and a brass rain head.",floor:"Black stone",fin:"Black stone; charred timber; brass"},{id:"K",name:"Bike Racks",wing:"Outdoor",x0:3,y0:62,x1:7.5,y1:72,notes:"Six-bike rack under the mudroom eave, with gear storage just inside.",floor:"Stone",fin:"Stone; black steel"},{id:"R",name:"Carport",wing:"Outdoor",x0:-44,y0:30,x1:-20,y1:54,notes:"Modern black carport for two cars: slim black steel posts and a low standing-seam roof, off the gravel drive. A covered walkway leads past the front garden to the door.",floor:"Gravel",fin:"Black steel; standing-seam roof; gravel drive"},{id:"E",name:"Covered Walkway + Front Garden",wing:"Outdoor",x0:-20,y0:48,x1:13,y1:54,notes:"Black-steel covered walkway on flagstone from the carport to the front door, past front-garden beds of grasses, low shrubs and a multi-stem tree.",floor:"Flagstone",fin:"Flagstone; black steel; standing-seam roof; planted beds"}];function Y_(n){const e=C_();return ia=e,D_(e),U_(e),F_(e,n),G_(e),V_(e,n),Ht.build(n),W_(n),q_(n),{M:e,blocking:Il,roofUnder:zi}}const Ae=n=>document.getElementById(n),Xs=.09290304,bh=.3048,Bs=n=>{const e=Math.floor(n+1e-6),t=Math.round((n-e)*12);return t?`${e}' ${t}"`:`${e}'`},Wn=()=>window.innerWidth<700,ri=Ae("viewport"),It=new e_({antialias:!0,powerPreference:"high-performance"});It.setPixelRatio(Math.min(window.devicePixelRatio,2));It.outputColorSpace=nn;It.toneMapping=fl;It.toneMappingExposure=1.05;It.shadowMap.enabled=!0;It.shadowMap.type=zs;It.localClippingEnabled=!0;ri.appendChild(It.domElement);const Ms=new m_;Ms.domElement.style.position="absolute";Ms.domElement.style.inset="0";Ms.domElement.style.pointerEvents="none";ri.appendChild(Ms.domElement);const Qt=new zf,dn={};for(const n of["walls","glass","roof","floors","furn","detail","site","ground","mtn","pick","labels","fx"])dn[n]=new Us,dn[n].name=n,Qt.add(dn[n]);dn.pick.visible=!0;const Kr={top:{value:new Xe(9417681)},mid:{value:new Xe(14673638)},bot:{value:new Xe(15328470)}},vu=new Gt(new Ss(3e4,32,16),new Nn({side:sn,depthWrite:!1,fog:!1,uniforms:Kr,vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vp; void main(){ float h = vp.y; vec3 c = h>0.0 ? mix(mid, top, pow(clamp(h*2.2,0.0,1.0),0.7)) : mix(mid, bot, clamp(-h*8.0,0.0,1.0)); gl_FragColor = vec4(c,1.0);
#include <colorspace_fragment>
}`}));vu.renderOrder=-10;Qt.add(vu);Qt.fog=new El(14015968,1600,9e3);const ll=new Yd(15397631,9140830,1.15);Qt.add(ll);const Su=new Qd(16774374,.35);Qt.add(Su);const bn=new Jd(16773596,2.6);bn.castShadow=!0;bn.shadow.mapSize.set(Wn()?1024:2048,Wn()?1024:2048);Object.assign(bn.shadow.camera,{left:-150,right:150,top:150,bottom:-150,near:10,far:900});bn.shadow.bias=-4e-4;bn.shadow.normalBias=.6;Qt.add(bn);Qt.add(bn.target);const bu=[];g_(Wn()?.5:1);const{M:cl,blocking:$_,roofUnder:Nl}=Y_(dn),Mu=new Set;Qt.traverse(n=>{n.material&&n.material.name==="lamp"&&Mu.add(n.material)});let hl=null;dn.site.traverse(n=>{n.material&&n.material.name==="fire"&&(hl=n.material)});for(const n of Rt.rooms){if(n.area<90||!n.cond)continue;const e=new Kd(16763274,0,34,1.6),t=un((n.x0+n.x1)/2,(n.y0+n.y1)/2,Math.min(9,Nl((n.x0+n.x1)/2,(n.y0+n.y1)/2)-1.5));e.position.copy(t),dn.fx.add(e),bu.push(e)}const qs=new ar({transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});let Li=null;fetch("./plan_overlay.json").then(n=>n.json()).then(n=>{new qd().load("./plan_overlay.png",e=>{e.colorSpace=nn,e.anisotropy=8,qs.map=e,qs.needsUpdate=!0;const t=n.x1-n.x0,i=n.y1-n.y0,s=new Gi(t,i);s.rotateX(-Math.PI/2),Li=new Gt(s,qs),Li.position.copy(un((n.x0+n.x1)/2,(n.y0+n.y1)/2,.06)),Li.renderOrder=3,Li.visible=qe.overlay,Qt.add(Li)})});const Ui=new Gt(new Gi(1,1).rotateX(-Math.PI/2),cl.highlight);Ui.visible=!1;Ui.renderOrder=4;Qt.add(Ui);const fs=new Jf(new ed(new Ei(1,1,1)),new qh({color:5069118}));fs.visible=!1;Qt.add(fs);const Ct=new gn(42,1,.5,6e4),Sn=new pa(-1,1,1,-1,.5,3e3);let xi=Ct;const rn=new mu(Ct,It.domElement);rn.enableDamping=!0;rn.dampingFactor=.08;rn.maxPolarAngle=1.5;rn.minDistance=4;rn.maxDistance=1400;rn.screenSpacePanning=!0;rn.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN};const Jt=new mu(Sn,It.domElement);Jt.enableRotate=!1;Jt.screenSpacePanning=!0;Jt.enableDamping=!0;Jt.minZoom=.4;Jt.maxZoom=8;Jt.mouseButtons={LEFT:ti.PAN,MIDDLE:ti.DOLLY,RIGHT:ti.PAN};Jt.touches={ONE:Hn.PAN,TWO:Hn.DOLLY_PAN};Jt.enabled=!1;const Ul={aerial:{name:"Aerial",cam:[0,-128,76],tgt:[50,56,28],fov:50,roof:!0,title:"The whole house.",kicker:"A DRAWING-BASED SPATIAL STUDY"},courtyard:{name:"Courtyard",cam:[39,29.5,6.2],tgt:[67,43,6],roof:!0,title:"The courtyard.",kicker:"VIEW · FLAGSTONE TERRACE, LOOKING NORTH-EAST",fov:62},living:{name:"Living",cam:[48,20,54],tgt:[58,67,0],roof:!1,cut:8,title:"Living pavilion.",kicker:"ROOMS 101-103 · ROOF HIDDEN"},office:{name:"Office",cam:[48,-38,58],tgt:[16,11,0],roof:!1,cut:8,title:"Office / music loft.",kicker:"ROOM 407 · ROOF HIDDEN"},wellness:{name:"Wellness",cam:[70,-44,58],tgt:[52,8,0],roof:!1,cut:8,title:"Wellness + gym wing.",kicker:"ROOMS 301-306 · ON THE POOL · ROOF HIDDEN"},bath:{name:"Bath",cam:[93,66,22],tgt:[93.8,78,0],roof:!1,cut:8,title:"Master bath.",kicker:"ROOM 202 · HINOKI SOAKING TUB BY THE WINDOW, SKYLIGHT",fov:55},climb:{name:"Climbing",cam:[-4,-30,8],tgt:[-13,14,6],roof:!0,title:"Climbing pavilion.",kicker:"OUTDOORS · COVERED OPEN-AIR · NOT CONDITIONED",fov:50},kitchen:{name:"Kitchen",cam:[30,43,27],tgt:[39,70,0],roof:!1,cut:8,title:"Kitchen + living.",kicker:"ROOMS 101-103 · MARBLE ISLAND, ZELLIGE, CONVERSATION PIT",fov:50},gym:{name:"Gym",cam:[52,-12,24],tgt:[38,11,2],roof:!1,cut:8,title:"Exercise room.",kicker:"ROOM 302 · CALM STUDIO, RIG, CADILLAC, ROWER",fov:50},kids:{name:"Kids",cam:[104,20,36],tgt:[90,38,0],roof:!1,cut:8,title:"Kids' rooms.",kicker:"ROOMS 207-209 · WINDOW SEATS, DESKS BY THE WINDOW, CLIMBING WALLS",fov:52},master:{name:"Master",cam:[124,33,64],tgt:[86,71,0],roof:!1,cut:8,title:"Master suite.",kicker:"ROOMS 201-203 · ROOF HIDDEN"}},qe={mode:"orbit",light:"day",roof:!0,cut:!1,cutH:4.5,furn:!0,labels:!0,overlay:!1,ovOp:.85,site:!0,mtn:!0,shadows:!0,sel:null,view:"aerial"},_a=[],Eu=new Set(["402","405","211","206","403","306","205","203","204","301","406","104","105","210","208"]),wu=new Set(["402","405","211","212","213"]),K_=new Set(["W","101","103","201","207","209","302","303","407","404","401","C","P","L"]),Z_=new Set(["W","103","201","209","302","407","P","L"]);function Tu(n,e){if(wu.has(n.id))return;const t=document.createElement("div");t.className="rlabel"+(["204","301","406"].includes(n.id)?" gal":"")+(e?" out":"")+(Eu.has(n.id)||e?" minor":"")+(K_.has(n.id)?" key":"")+(Z_.has(n.id)?" key2":""),t.innerHTML=e?`${n.name}`:`<span class="num">${n.id}</span>${n.name.replace(" + Conversation Pit","").replace(" Gallery","")}`,t.addEventListener("click",s=>{s.stopPropagation(),xs(n.id,!0)});const i=new p_(t);i.userData={item:n,outdoor:e},dn.labels.add(i),_a.push(i)}Rt.rooms.forEach(n=>Tu(n,!1));xa.forEach(n=>Tu(n,!0));function Ol(){for(const n of _a){const e=n.userData.item;let t=(e.x0+e.x1)/2,i=(e.y0+e.y1)/2;e.id==="103"&&(t=61,i=58),e.id==="K"&&(t=2,i=70),e.id==="105"&&(i=58),e.id==="404"&&(i=31),e.id==="403"&&(i=44),e.id==="C"&&(i=44,t=47),e.id==="204"&&(i=42),e.id==="406"&&(i=34),e.id==="301"&&(t=54);let s=1.5;n.userData.outdoor||(s=qe.mode==="plan"?1:qe.roof&&qe.mode!=="walk"?Nl(t,i)+2.2:4),n.userData.outdoor&&(s=e.id==="C"?2.5:3),n.position.copy(un(t,i,s))}}const Au=["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"];function J_(){const n=Ae("room-list"),e=Ae("chips"),t=(s,r,a,o,c)=>{const h=document.createElement("button");h.dataset.id=s,h.innerHTML=c?`<span class="n">${r}</span>${a}`:`<span class="n">${r}</span><span>${a}</span>`,h.onclick=()=>s==="all"?Cu():xs(s,!0),o.appendChild(h)};t("all","⌂","Whole house",n),t("all","⌂","Whole house",e,!0);for(const s of Au){const r=document.createElement("div");r.className="grp",r.textContent=s.toUpperCase(),n.appendChild(r),Rt.rooms.filter(a=>a.wing===s&&!wu.has(a.id)).forEach(a=>{t(a.id,a.id,a.name,n),Eu.has(a.id)||t(a.id,a.id,a.name,e,!0)})}const i=document.createElement("div");i.className="grp",i.textContent="OUTDOORS",n.appendChild(i),xa.forEach(s=>{t(s.id,"·",s.name,n),["C","W","P","L","V"].includes(s.id)&&t(s.id,"·",s.name,e,!0)}),document.querySelectorAll('[data-id="all"]').forEach(s=>s.classList.add("on"))}J_();Ae("hdr-total").textContent=`${Rt.total.toLocaleString()} SF conditioned (${Math.round(Rt.total*Xs)} m²)`;const ir=Ae("views");Object.entries(Ul).forEach(([n,e])=>{const t=document.createElement("button");t.textContent=e.name,t.dataset.view=n,t.onclick=()=>or(n),ir.appendChild(t)});let cn=null;function Ru(n,e,t,i=1100){const s=Ct.position.clone(),r=rn.target.clone(),a=Ct.fov,o=performance.now();cn={p0:s,t0:r,f0:a,p1:n,t1v:e,f1:t??42,start:o,dur:i}}function sr(n,e){Ae("cap-kicker").textContent=n,Ae("cap-title").textContent=e}function or(n,e){const t=Ul[n];qe.view=n,qe.mode!=="orbit"&&Si("orbit"),vi(t.roof),_i(!!t.cut,t.cut||4.5),ir.querySelectorAll("button").forEach(c=>c.classList.toggle("on",c.dataset.view===n));const i=Wn()&&n==="aerial",s=i?[49,-178,104]:t.cam,r=i?[49,46,22]:t.tgt,a=un(...s.slice(0,2),s[2]),o=un(...r.slice(0,2),r[2]);if(Wn()&&n!=="courtyard"&&n!=="aerial"){const c=a.clone().sub(o).multiplyScalar(n==="aerial"?1.2:1.45);a.copy(o).add(c)}e?(Ct.position.copy(a),rn.target.copy(o),Ct.fov=t.fov??42,Ct.updateProjectionMatrix(),rn.update(),cn=null):Ru(a,o,t.fov),sr(t.kicker,t.title)}function Cu(){ya(),or("aerial"),document.querySelectorAll("[data-id]").forEach(n=>n.classList.toggle("on",n.dataset.id==="all"))}function ra(n){return Rt.rooms.find(e=>e.id===n)||xa.find(e=>e.id===n)}function xs(n,e){const t=ra(n);if(!t)return;qe.sel=n,document.querySelectorAll("[data-id]").forEach(u=>u.classList.toggle("on",u.dataset.id===n)),document.querySelectorAll(".chips button.on, .room-list button.on").forEach(u=>{var f;return(f=u.scrollIntoView)==null?void 0:f.call(u,{block:"nearest",inline:"center",behavior:"smooth"})}),_a.forEach(u=>u.element.classList.toggle("on",u.userData.item.id===n));const i=t.x1-t.x0,s=t.y1-t.y0,r=(t.x0+t.x1)/2,a=(t.y0+t.y1)/2,o=!t.area,c=t.cov??t.area??Math.round(i*s),h=o?.3:Nl(r,a);Ui.scale.set(i,1,s),Ui.position.copy(un(r,a,o?.2:.08)),Ui.visible=!0,fs.scale.set(i,Math.max(.2,h),s),fs.position.copy(un(r,a,Math.max(.2,h)/2)),fs.visible=!0,Ae("info").hidden=!1,Ae("info-kicker").textContent=o?"OUTDOORS · SITE":`ROOM ${t.id} · ${t.wing.toUpperCase()}`,Ae("info-title").textContent=t.name,Ae("info-notes").textContent=t.notes,Ae("info-size").textContent=`${Bs(i)} × ${Bs(s)}  (${(i*bh).toFixed(1)} × ${(s*bh).toFixed(1)} m)`,Ae("info-area").textContent=`${c.toLocaleString()} SF · ${(c*Xs).toFixed(1)} m²${!o&&!t.cond?" (unconditioned)":""}${t.cov?" covered (not conditioned)":""}`,Ae("info-ceil").parentElement.hidden=o,Ae("info-ceil").textContent=o?"":`${Bs(t.h)} (roof deck ${Bs(Math.round(h*2)/2)})`,Ae("info-floor").textContent=o?t.floor:t.floorName||t.floor,Ae("info-fin").textContent=t.fin||"",Ae("info-fin").parentElement.hidden=!t.fin;const l=t.equip||[...new Set(Rt.furn.filter(u=>u.room===n&&u.shape!=="pit").map(u=>u.label))];if(Ae("info-equip").innerHTML=l.map(u=>`<span>${u}</span>`).join(""),Ae("info-walk").parentElement.hidden=o&&n!=="C",sr(o?"OUTDOORS":`ROOM ${t.id} / SPATIAL STUDY`,t.name),e&&qe.mode==="orbit"){o||(vi(!1),_i(!0,8));const f=Math.max(i,s,14)*(Wn()?2.6:1.9)+16,d=un(r,a,1),p=new O(.35,.95,.75).normalize();Ru(d.clone().add(p.multiplyScalar(f)),d),ir.querySelectorAll("button").forEach(x=>x.classList.remove("on"))}e&&qe.mode==="plan"&&(Jt.target.copy(un(r,a,0)),Sn.position.set(Jt.target.x,400,Jt.target.z+.01),Sn.zoom=Math.min(4,70/Math.max(i,s,14)),Sn.updateProjectionMatrix()),e&&qe.mode==="walk"&&aa(r,a)}function ya(){qe.sel=null,Ae("info").hidden=!0,Ui.visible=!1,fs.visible=!1,_a.forEach(n=>n.element.classList.remove("on"))}Ae("info-close").onclick=ya;Ae("info-walk").onclick=()=>{const n=ra(qe.sel);n&&(Si("walk"),aa((n.x0+n.x1)/2,(n.y0+n.y1)/2))};function vi(n){qe.roof=n,dn.roof.visible=n,ri.classList.toggle("roof-on",n),Ae("ly-roof").checked=n;const e=Ae("btn-roof");e.setAttribute("aria-pressed",n),e.querySelector("span").textContent=n?"Roof On":"Roof Off",Ol()}function _i(n,e){qe.cut=n,e!=null&&(qe.cutH=e),gu.constant=n?qe.cutH:1e5,Ae("ly-cut").checked=n,Ae("cut-val").textContent=Bs(qe.cutH),Ae("cut-h").value=qe.cutH}function Ys(n){qe.overlay=n,Li&&(Li.visible=n),Ae("ly-overlay").checked=n}Ae("btn-roof").onclick=()=>vi(!qe.roof);Ae("ly-roof").onchange=n=>vi(n.target.checked);Ae("ly-cut").onchange=n=>_i(n.target.checked);Ae("cut-h").oninput=n=>_i(!0,parseFloat(n.target.value));Ae("ly-furn").onchange=n=>{qe.furn=n.target.checked,dn.furn.visible=qe.furn,dn.detail.visible=qe.furn};Ae("ly-labels").onchange=n=>{qe.labels=n.target.checked,ri.classList.toggle("labels-off",!qe.labels)};Ae("ly-overlay").onchange=n=>Ys(n.target.checked);Ae("ov-op").oninput=n=>{qs.opacity=parseFloat(n.target.value),Ae("ov-val").textContent=Math.round(qs.opacity*100)+"%"};Ae("ly-site").onchange=n=>{dn.site.visible=n.target.checked};Ae("ly-mtn").onchange=n=>{dn.mtn.visible=n.target.checked};Ae("ly-shadow").onchange=n=>{bn.castShadow=n.target.checked};Ae("btn-layers").onclick=()=>{Ae("layers").hidden=!Ae("layers").hidden};Ae("layers-close").onclick=()=>{Ae("layers").hidden=!0};function va(n){var i,s;document.getElementById("app").classList.toggle("evening",n!=="day"),qe.light=n,document.querySelectorAll("#light-seg button").forEach(r=>r.classList.toggle("on",r.dataset.light===n));const e=n==="day";Kr.top.value.set(e?8826064:2831696),Kr.mid.value.set(e?14936294:14260844),Kr.bot.value.set(e?15328470:7035472),Qt.fog.color.set(e?14015968:9272184),ll.intensity=e?1.15:.35,ll.color.set(e?15397631:9213632),Su.intensity=e?.35:.12,bn.intensity=e?2.6:.9,bn.color.set(e?16773596:16751194);const t=e?new O(-.55,.78,.62):new O(.85,.16,.35);bn.position.copy(t.normalize().multiplyScalar(400)),bn.target.position.set(0,0,0),bu.forEach(r=>r.intensity=e?0:260),Mu.forEach(r=>r.emissiveIntensity=e?r.color.r>.97?.5:.2:1.8),(i=cl.glass.emissive)==null||i.set(e?0:3811860),(s=cl.c.glass.emissive)==null||s.set(e?0:5913624),hl&&(hl.emissiveIntensity=e?1.2:4),It.toneMappingExposure=e?1.05:1.25}document.querySelectorAll("#light-seg button").forEach(n=>n.onclick=()=>va(n.dataset.light));const Ke={x:16,y:54,yaw:-Math.PI/2,pitch:0,keys:{}};function Si(n){const e=qe.mode;if(qe.mode=n,ri.classList.toggle("plan-mode",n==="plan"),ri.classList.toggle("walk-mode",n==="walk"),document.querySelectorAll("#mode-seg button").forEach(t=>t.classList.toggle("on",t.dataset.mode===n)),rn.enabled=n==="orbit",Jt.enabled=n==="plan",Ae("walk-pad").hidden=n!=="walk",ir.hidden=n==="walk",n==="plan")xi=Sn,vi(!1),_i(!0,4.5),Ys(!0),Jt.target.copy(un(Wn()?49:40,Wn()?56:47,0)),Sn.position.set(Jt.target.x,400,Jt.target.z+.01),Sn.zoom=Wn()?.56:.92,Sa(),Ae("hint").textContent="Drag to pan · Scroll or pinch to zoom · Tap a room",sr(`PLAN VIEW · DRAWING OVERLAY ON 3D CUT AT 4' 6"`,"Floor plan."),ir.querySelectorAll("button").forEach(t=>t.classList.remove("on"));else if(n==="walk"){if(xi=Ct,_i(!1),Ys(!1),vi(!0),Ct.fov=68,Ct.updateProjectionMatrix(),e!=="walk"){const t=qe.sel&&ra(qe.sel);t?aa((t.x0+t.x1)/2,(t.y0+t.y1)/2):aa(16,54,-Math.PI/2)}Ae("hint").textContent="Drag to look · W A S D or arrows to move · Esc to exit",sr(`WALK THROUGH · EYE HEIGHT 5' 4"`,qe.sel?ra(qe.sel).name:"Entry genkan.")}else xi=Ct,_i(!1),Ys(!1),Ct.fov=42,Ct.updateProjectionMatrix(),Ae("hint").textContent="Drag to orbit · Scroll or pinch to zoom · Right-drag or two fingers to pan · Tap a room",e!=="orbit"&&or("aerial",!0);Ol()}document.querySelectorAll("#mode-seg button").forEach(n=>n.onclick=()=>Si(n.dataset.mode));function aa(n,e,t){if(Ke.x=n,Ke.y=e,Ke.pitch=0,t!=null)Ke.yaw=t;else{const i=50-n,s=44-e;Ke.yaw=Math.atan2(-i,s)+Math.PI,Ke.yaw=Math.atan2(i,s)}}function po(n,e){if(n<-150||n>220||e<-120||e>200)return!0;for(const{s:t,a:i,b:s}of $_){const[r,a,o,c]=t.o==="h"?[i,t.c,s,t.c]:[t.c,i,t.c,s],h=o-r,l=c-a,u=Math.max(0,Math.min(1,((n-r)*h+(e-a)*l)/(h*h+l*l))),f=n-(r+h*u),d=e-(a+l*u);if(f*f+d*d<.8*.8)return!0}return!1}function Q_(n){const e=Ke.keys;let t=0,i=0;if((e.KeyW||e.ArrowUp||e.f)&&(t+=1),(e.KeyS||e.ArrowDown||e.b)&&(t-=1),(e.KeyA||e.ArrowLeft||e.l)&&(i-=1),(e.KeyD||e.ArrowRight||e.r)&&(i+=1),t||i){const c=9*n,h=Math.sin(Ke.yaw),l=Math.cos(Ke.yaw),u=(h*t+l*i)*c,f=(l*t-h*i)*c;po(Ke.x+u,Ke.y+f)?po(Ke.x+u,Ke.y)?po(Ke.x,Ke.y+f)||(Ke.y+=f):Ke.x+=u:(Ke.x+=u,Ke.y+=f)}const s=Rt.rooms.find(c=>Ke.x>=c.x0&&Ke.x<=c.x1&&Ke.y>=c.y0&&Ke.y<=c.y1),a=(s?s.id==="103"&&Ke.x>49&&Ke.x<65&&Ke.y>66&&Ke.y<78?-1.5:0:-1)+5.33;Ct.position.copy(un(Ke.x,Ke.y,a));const o=new O(Math.sin(Ke.yaw)*Math.cos(Ke.pitch),Math.sin(Ke.pitch),-Math.cos(Ke.yaw)*Math.cos(Ke.pitch));Ct.lookAt(Ct.position.clone().add(o)),s&&s.id!==Ke.room&&(Ke.room=s.id,sr(`WALK THROUGH · EYE HEIGHT 5' 4"`,s.name))}window.addEventListener("keydown",n=>{if(qe.mode==="walk"){if(n.code==="Escape"){Si("orbit");return}Ke.keys[n.code]=!0,n.code.startsWith("Arrow")&&n.preventDefault()}});window.addEventListener("keyup",n=>{Ke.keys[n.code]=!1});document.querySelectorAll("#walk-pad button").forEach(n=>{const e=n.dataset.k,t=s=>{s.preventDefault(),Ke.keys[e]=!0},i=()=>{Ke.keys[e]=!1};n.addEventListener("pointerdown",t),n.addEventListener("pointerup",i),n.addEventListener("pointerleave",i),n.addEventListener("pointercancel",i)});const mo=new tp;let Cn=null;It.domElement.addEventListener("pointerdown",n=>{Cn={x:n.clientX,y:n.clientY,t:performance.now(),lx:n.clientX,ly:n.clientY},qe.mode==="walk"&&It.domElement.setPointerCapture(n.pointerId)});It.domElement.addEventListener("pointermove",n=>{qe.mode==="walk"&&Cn&&(Ke.yaw+=(n.clientX-Cn.lx)*.005,Ke.pitch=Math.max(-1.2,Math.min(1.2,Ke.pitch-(n.clientY-Cn.ly)*.004)),Cn.lx=n.clientX,Cn.ly=n.clientY)});It.domElement.addEventListener("pointerup",n=>{if(!Cn)return;const e=Math.hypot(n.clientX-Cn.x,n.clientY-Cn.y),t=performance.now()-Cn.t;if(Cn=null,e>6||t>600||qe.mode==="walk")return;const i=It.domElement.getBoundingClientRect(),s=new ae((n.clientX-i.left)/i.width*2-1,-((n.clientY-i.top)/i.height)*2+1);mo.setFromCamera(s,xi);const r=mo.intersectObjects(_u,!1)[0];if(r){xs(r.object.userData.room,!1);return}const a=mo.ray.intersectPlane(new An(new O(0,1,0),1),new O);if(a){const o=a.x+xt,c=-a.z+wt,h=xa.find(l=>o>=l.x0&&o<=l.x1&&c>=l.y0&&c<=l.y1);if(h){xs(h.id,!1);return}}ya()});function rr(n){const e=Ae("toast");e.textContent=n,e.hidden=!1,clearTimeout(rr._t),rr._t=setTimeout(()=>e.hidden=!0,2200)}Ae("t-reset").onclick=()=>{qe.mode==="walk"&&Si("orbit"),qe.mode==="plan"?Si("plan"):Cu()};Ae("t-save").onclick=()=>{try{It.render(Qt,xi);const n=document.createElement("a");n.href=It.domElement.toDataURL("image/png"),n.download="weberman-residence.png",n.click(),rr("Saved a view of the model.")}catch{rr("The image could not be saved.")}};Ae("t-full").onclick=()=>{var e;const n=document.documentElement;document.fullscreenElement?document.exitFullscreen():(((e=n.requestFullscreen)==null?void 0:e.call(n))??Promise.reject()).catch(()=>rr("Full screen is unavailable in this browser."))};function Fl(n,e){Ae("modal-title").textContent=n,Ae("modal-body").innerHTML=e,Ae("modal").hidden=!1}Ae("modal-close").onclick=()=>Ae("modal").hidden=!0;Ae("modal").onclick=n=>{n.target.id==="modal"&&(Ae("modal").hidden=!0)};const Pu=()=>`<table>${Au.map(n=>`<tr><td colspan="3"><b>${n}</b></td></tr>`+Rt.rooms.filter(e=>e.wing===n).map(e=>`<tr><td>${e.id}</td><td>${e.name}${e.cond?"":" (unconditioned)"}</td><td style="text-align:right">${e.area} SF · ${(e.area*Xs).toFixed(1)} m²</td></tr>`).join("")).join("")}<tr><td colspan="3"><b>Covered Outdoor (Not Conditioned)</b></td></tr>${(Rt.covered||[]).map(n=>`<tr><td>${n.id}</td><td>${n.name}</td><td style="text-align:right">${n.area} SF · ${(n.area*Xs).toFixed(1)} m²</td></tr>`).join("")}<tr><td></td><td><b>Total Conditioned</b></td><td style="text-align:right"><b>${Rt.total.toLocaleString()} SF · ${Math.round(Rt.total*Xs)} m²</b></td></tr></table>`;Ae("btn-drawings").onclick=()=>{Fl("Drawings",'<div class="tabs"><button class="on" data-img="Floor_Plan.png">Floor Plan</button><button data-img="Site_Plan.png">Site Plan</button><button data-img="prog">Room Program</button></div><div id="dw"><img src="./Floor_Plan.png" alt="Floor plan"></div>'),document.querySelectorAll(".tabs button").forEach(n=>n.onclick=()=>{document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("on",e===n)),Ae("dw").innerHTML=n.dataset.img==="prog"?Pu():`<img src="./${n.dataset.img}" alt="${n.textContent}">`})};const Lu=`<h3>Concept</h3><p>A low, warm courtyard house for a mountain site, drawing on Bali, Japan and mid-century modernism rather than the cabin. Four single-storey pavilions wrap a 36 × 28 ft courtyard: <b>living</b> to the north facing the mountains, <b>sleeping</b> to the east, <b>wellness + gym</b> to the south on the pool, and <b>studio + arrival</b> to the west. Glazed engawas on the east and west and an open-air covered walkway on the south link them all, so every room looks into the garden. Deep 6 to 8 ft eaves, a butterfly roof over the living pavilion, standing seam metal, white stucco, shou sugi ban, rammed earth and natural stone.</p>
<h3>Model Notes</h3><p>Geometry is generated from the same plan data as the 2D drawings. Wall heights run up to the underside of each roof: 10 to 14 ft, with the butterfly roof rising from 12' 7" at the valley to about 14' at the walls. Areas are measured to wall centerlines. Furniture and equipment are simple blocks at true size. The lot, grades and mountain backdrop are illustrative only.</p>${Pu()}`;Ae("btn-about").onclick=()=>Fl("About This Model",Lu);Ae("btn-notes").onclick=()=>Fl("Model Notes",Lu);function Sa(){const n=ri.clientWidth,e=ri.clientHeight;It.setSize(n,e),Ms.setSize(n,e),Ct.aspect=n/e,Ct.updateProjectionMatrix();const t=62;Sn.left=-t*n/e,Sn.right=t*n/e,Sn.top=t,Sn.bottom=-t,Sn.updateProjectionMatrix()}window.addEventListener("resize",Sa);new ResizeObserver(Sa).observe(ri);let Mh=performance.now(),j_=0;function Du(n){const e=Math.min(.05,(n-Mh)/1e3);if(Mh=n,cn&&qe.mode==="orbit"){let i=Math.min(1,(n-cn.start)/cn.dur);const s=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;Ct.position.lerpVectors(cn.p0,cn.p1,s),rn.target.lerpVectors(cn.t0,cn.t1v,s),Ct.fov=cn.f0+(cn.f1-cn.f0)*s,Ct.updateProjectionMatrix(),i>=1&&(cn=null)}qe.mode==="orbit"?rn.update():qe.mode==="plan"?Jt.update():Q_(e);const t=qe.mode==="orbit"?Ct.position.distanceTo(rn.target):qe.mode==="plan"?999:0;dn.detail.visible=qe.furn&&t<(Wn()?150:240),It.render(Qt,xi),Ms.render(Qt,xi),++j_===3&&(Ae("loading").classList.add("done"),window.__ready=!0),requestAnimationFrame(Du)}Sa();va("day");Ol();const bi=new URLSearchParams(location.search);or(Ul[bi.get("view")]?bi.get("view"):"aerial",!0);bi.get("mode")&&Si(bi.get("mode"));bi.get("light")==="eve"&&va("eve");bi.get("roof")==="0"&&vi(!1);bi.get("room")&&xs(bi.get("room"),!0);requestAnimationFrame(Du);rn.addEventListener("start",()=>{cn=null});window.app={goView:or,setMode:Si,select:xs,deselect:ya,setRoof:vi,setLight:va,setCut:_i,setOverlay:Ys,state:qe,renderer:It,scene:Qt,get camera(){return xi}};
