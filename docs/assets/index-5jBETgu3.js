(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const el="186",$n={ROTATE:0,DOLLY:1,PAN:2},Un={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pu=0,Xl=1,Lu=2,Cs=1,Du=2,Es=3,Ai=0,Kt=1,Nn=2,Zn=0,Ps=1,ql=2,Yl=3,$l=4,Iu=5,Qi=100,Nu=101,Uu=102,Ou=103,Fu=104,Bu=200,zu=201,ku=202,Gu=203,mh=204,gh=205,Hu=206,Vu=207,Wu=208,Xu=209,qu=210,Yu=211,$u=212,Zu=213,Ku=214,so=0,ro=1,ao=2,Bs=3,oo=4,lo=5,co=6,ho=7,xh=0,Ju=1,Qu=2,Fn=0,_h=1,vh=2,yh=3,tl=4,Sh=5,Mh=6,bh=7,Eh=300,Ri=301,is=302,da=303,pa=304,Jr=306,kr=1e3,qn=1001,uo=1002,zt=1003,ju=1004,tr=1005,Xt=1006,ma=1007,Ei=1008,ln=1009,wh=1010,Th=1011,zs=1012,nl=1013,Bn=1014,Mn=1015,zn=1016,il=1017,sl=1018,ks=1020,Ah=35902,Rh=35899,Ch=1021,Ph=1022,bn=1023,Jn=1026,wi=1027,rl=1028,al=1029,Ci=1030,ol=1031,ll=1033,Nr=33776,Ur=33777,Or=33778,Fr=33779,fo=35840,po=35841,mo=35842,go=35843,xo=36196,_o=37492,vo=37496,yo=37488,So=37489,Gr=37490,Mo=37491,bo=37808,Eo=37809,wo=37810,To=37811,Ao=37812,Ro=37813,Co=37814,Po=37815,Lo=37816,Do=37817,Io=37818,No=37819,Uo=37820,Oo=37821,Fo=36492,Bo=36494,zo=36495,ko=36283,Go=36284,Hr=36285,Ho=36286,ef=3200,Vo=0,tf=1,oi="",Zt="srgb",Vr="srgb-linear",Wr="linear",ut="srgb",ga=7680,nf=519,sf=512,rf=513,af=514,cl=515,of=516,lf=517,hl=518,cf=519,hf=35044,Zl="300 es",On=2e3,Gs=2001;function uf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){const i=Hs("canvas");return i.style.display="block",i}const Kl={};function Jl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Lh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=Lh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=Lh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function es(...i){const e=i.join(" ");e in Kl||(Kl[e]=!0,ze(...i))}function df(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const pf={[so]:ro,[ao]:co,[oo]:ho,[Bs]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:Bs};class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,Wo=180/Math.PI;function os(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function mf(i,e){return(i%e+e)%e}function xa(i,e,t){return(1-t)*i+t*e}function ds(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gf={DEG2RAD:Ls},Pl=class Pl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pl.prototype.isVector2=!0;let re=Pl;class wn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*v;g<0&&(u=-u,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const M=Math.acos(g),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+v*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+v*o;const M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ll=class Ll{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ll.prototype.isVector3=!0;let D=Ll;const _a=new D,Ql=new wn,Dl=class Dl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],v=s[0],g=s[3],p=s[6],M=s[1],A=s[4],y=s[7],w=s[2],E=s[5],C=s[8];return r[0]=a*v+o*M+l*w,r[3]=a*g+o*A+l*E,r[6]=a*p+o*y+l*C,r[1]=c*v+h*M+f*w,r[4]=c*g+h*A+f*E,r[7]=c*p+h*y+f*C,r[2]=u*v+d*M+m*w,r[5]=u*g+d*A+m*E,r[8]=u*p+d*y+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(va.makeScale(e,t)),this}rotate(e){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(va.makeRotation(-e)),this}translate(e,t){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dl.prototype.isMatrix3=!0;let We=Dl;const va=new We,jl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){const i={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vr]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:jl,fromXYZ:ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:jl,fromXYZ:ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}const et=xf();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class _f{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oi===void 0&&(Oi=Hs("canvas")),Oi.width=e.width,Oi.height=e.height;const s=Oi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vf=0;class ul{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let yf=0;const Sa=new D;class kt extends mi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=qn,s=qn,r=Xt,a=Ei,o=bn,l=ln,c=kt.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=os(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Eh;kt.DEFAULT_ANISOTROPY=1;const Il=class Il{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(d+1)/2,w=(p+1)/2,E=(h+u)/4,C=(f+v)/4,x=(m+g)/4;return A>y&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=C/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=x/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Il.prototype.isVector4=!0;let yt=Il;class Sf extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new kt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ul(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Sf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dh extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mf extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kr=class Kr{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,m,v,g)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,m=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u+v*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,m=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,m=o*h,v=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-v*f}else if(e.order==="XZY"){const u=a*l,d=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,Ef)}lookAt(e,t,n){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ni.crossVectors(n,rn),ni.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ni.crossVectors(n,rn)),ni.normalize(),nr.crossVectors(rn,ni),s[0]=ni.x,s[4]=nr.x,s[8]=rn.x,s[1]=ni.y,s[5]=nr.y,s[9]=rn.y,s[2]=ni.z,s[6]=nr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],A=n[7],y=n[11],w=n[15],E=s[0],C=s[4],x=s[8],T=s[12],P=s[1],b=s[5],L=s[9],B=s[13],I=s[2],F=s[6],q=s[10],V=s[14],ie=s[3],X=s[7],Q=s[11],te=s[15];return r[0]=a*E+o*P+l*I+c*ie,r[4]=a*C+o*b+l*F+c*X,r[8]=a*x+o*L+l*q+c*Q,r[12]=a*T+o*B+l*V+c*te,r[1]=h*E+f*P+u*I+d*ie,r[5]=h*C+f*b+u*F+d*X,r[9]=h*x+f*L+u*q+d*Q,r[13]=h*T+f*B+u*V+d*te,r[2]=m*E+v*P+g*I+p*ie,r[6]=m*C+v*b+g*F+p*X,r[10]=m*x+v*L+g*q+p*Q,r[14]=m*T+v*B+g*V+p*te,r[3]=M*E+A*P+y*I+w*ie,r[7]=M*C+A*b+y*F+w*X,r[11]=M*x+A*L+y*q+w*Q,r[15]=M*T+A*B+y*V+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],v=e[7],g=e[11],p=e[15],M=l*d-c*u,A=o*d-c*f,y=o*u-l*f,w=a*d-c*h,E=a*u-l*h,C=a*f-o*h;return t*(v*M-g*A+p*y)-n*(m*M-g*w+p*E)+s*(m*A-v*w+p*C)-r*(m*y-v*E+g*C)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],v=e[13],g=e[14],p=e[15],M=t*o-n*a,A=t*l-s*a,y=t*c-r*a,w=n*l-s*o,E=n*c-r*o,C=s*c-r*l,x=h*v-f*m,T=h*g-u*m,P=h*p-d*m,b=f*g-u*v,L=f*p-d*v,B=u*p-d*g,I=M*B-A*L+y*b+w*P-E*T+C*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=(o*B-l*L+c*b)*F,e[1]=(s*L-n*B-r*b)*F,e[2]=(v*C-g*E+p*w)*F,e[3]=(u*E-f*C-d*w)*F,e[4]=(l*P-a*B-c*T)*F,e[5]=(t*B-s*P+r*T)*F,e[6]=(g*y-m*C-p*A)*F,e[7]=(h*C-u*y+d*A)*F,e[8]=(a*L-o*P+c*x)*F,e[9]=(n*P-t*L-r*x)*F,e[10]=(m*E-v*y+p*M)*F,e[11]=(f*y-h*E-d*M)*F,e[12]=(o*T-a*b-l*x)*F,e[13]=(t*b-n*T+s*x)*F,e[14]=(v*A-m*w-g*M)*F,e[15]=(h*w-f*A+u*M)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,v=a*h,g=a*f,p=o*f,M=l*c,A=l*h,y=l*f,w=n.x,E=n.y,C=n.z;return s[0]=(1-(v+p))*w,s[1]=(d+y)*w,s[2]=(m-A)*w,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(u+p))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(m+A)*C,s[9]=(g-M)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);const c=1/a,h=1/o,f=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=On,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===On)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Gs)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===On)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===Gs)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Kr.prototype.isMatrix4=!0;let st=Kr;const Fi=new D,xn=new st,bf=new D(0,0,0),Ef=new D(1,1,1),ni=new D,nr=new D,rn=new D,tc=new st,nc=new wn;class ui{constructor(e=0,t=0,n=0,s=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wf=0;const ic=new D,Bi=new wn,Gn=new st,ir=new D,ps=new D,Tf=new D,Af=new wn,sc=new D(1,0,0),rc=new D(0,1,0),ac=new D(0,0,1),oc={type:"added"},Rf={type:"removed"},zi={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Lt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new D,t=new ui,n=new wn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new We}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ps,ir,this.up):Gn.lookAt(ir,ps,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oc),zi.child=e,this.dispatchEvent(zi),zi.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oc),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ws extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ws;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=mf(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ea(a,r,e+1/3),this.g=Ea(a,r,e),this.b=Ea(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=Ih[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return et.workingToColorSpace(Vt.copy(this),e),Math.round(Ke(Vt.r*255,0,255))*65536+Math.round(Ke(Vt.g*255,0,255))*256+Math.round(Ke(Vt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Zt){et.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(sr);const n=xa(ii.h,sr.h,t),s=xa(ii.s,sr.s,t),r=xa(ii.l,sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new He;He.NAMES=Ih;class dl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new dl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pf extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _n=new D,Hn=new D,wa=new D,Vn=new D,ki=new D,Gi=new D,lc=new D,Ta=new D,Aa=new D,Ra=new D,Ca=new yt,Pa=new yt,La=new yt;class fn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),Hn.subVectors(n,t),wa.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Hn),l=_n.dot(wa),c=Hn.dot(Hn),h=Hn.dot(wa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ca.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ca.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,n),La.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ca,r.x),a.addScaledVector(Pa,r.y),a.addScaledVector(La,r.z),a}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),Hn.subVectors(e,t),_n.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),_n.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,n),Gi.subVectors(r,n),Ta.subVectors(e,n);const l=ki.dot(Ta),c=Gi.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Aa.subVectors(e,s);const h=ki.dot(Aa),f=Gi.dot(Aa);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ki,a);Ra.subVectors(e,r);const d=ki.dot(Ra),m=Gi.dot(Ra);if(m>=0&&d<=m)return t.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Gi,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return lc.subVectors(r,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(lc,o);const p=1/(g+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(ki,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Di{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),ar.subVectors(this.max,ms),Hi.subVectors(e.a,ms),Vi.subVectors(e.b,ms),Wi.subVectors(e.c,ms),si.subVectors(Vi,Hi),ri.subVectors(Wi,Vi),_i.subVectors(Hi,Wi);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-_i.z,_i.y,si.z,0,-si.x,ri.z,0,-ri.x,_i.z,0,-_i.x,-si.y,si.x,0,-ri.y,ri.x,0,-_i.y,_i.x,0];return!Da(t,Hi,Vi,Wi,ar)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,Hi,Vi,Wi,ar))?!1:(or.crossVectors(si,ri),t=[or.x,or.y,or.z],Da(t,Hi,Vi,Wi,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,rr=new Di,Hi=new D,Vi=new D,Wi=new D,si=new D,ri=new D,_i=new D,ms=new D,ar=new D,or=new D,vi=new D;function Da(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ct=new D,lr=new re;let Lf=0;class nn extends mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hf,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Nh extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uh extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Df=new Di,gs=new D,Ia=new D;class ls{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Ia)),this.expandByPoint(gs.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let If=0;const hn=new st,Na=new Lt,Xi=new D,an=new Di,xs=new Di,Nt=new D;class bt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uf(e)?Uh:Nh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(an.min,xs.min),an.expandByPoint(Nt),Nt.addVectors(an.max,xs.max),an.expandByPoint(Nt)):(an.expandByPoint(xs.min),an.expandByPoint(xs.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),Nt.add(Xi)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;const c=new D,h=new D,f=new D,u=new re,d=new re,m=new re,v=new D,g=new D;function p(x,T,P){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,P),h.sub(c),f.sub(c),d.sub(u),m.sub(u);const b=1/(d.x*m.y-m.x*d.y);isFinite(b)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(b),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(b),o[x].add(v),o[T].add(v),o[P].add(v),l[x].add(g),l[T].add(g),l[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){const P=M[x],b=P.start,L=P.count;for(let B=b,I=b+L;B<I;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new D,y=new D,w=new D,E=new D;function C(x){w.fromBufferAttribute(s,x),E.copy(w);const T=o[x];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(E,T);const b=y.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,b)}for(let x=0,T=M.length;x<T;++x){const P=M[x],b=P.start,L=P.count;for(let B=b,I=b+L;B<I;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new nn(u,h,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new D,Nf=new D,Uf=new We;class yn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ua.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Ua),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uf.getNormalMatrix(e),s=this.coplanarPoint(Ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Of=0;class cs extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Ps,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xn=new D,Oa=new D,cr=new D,hr=new D;class Qr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oa.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(Oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cr),o=hr.dot(this.direction),l=-hr.dot(cr),c=hr.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Oa).addScaledVector(cr,u),d}intersectSphere(e,t){if(e.radius<0)return null;Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,v=t.y-a.y,g=t.z-a.z,p=n.x-a.x,M=n.y-a.y,A=n.z-a.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(h);let C,x,T,P,b,L,B,I,F,q,V,ie;if(y>=w&&y>=E?(T=l,L=f,F=m,ie=p,l>=0?(C=c,x=h,P=u,b=d,B=v,I=g,q=M,V=A):(C=h,x=c,P=d,b=u,B=g,I=v,q=A,V=M)):w>=E?(T=c,L=u,F=v,ie=M,c>=0?(C=h,x=l,P=d,b=f,B=g,I=m,q=A,V=p):(C=l,x=h,P=f,b=d,B=m,I=g,q=p,V=A)):(T=h,L=d,F=g,ie=A,h>=0?(C=l,x=c,P=f,b=u,B=m,I=v,q=p,V=M):(C=c,x=l,P=u,b=f,B=v,I=m,q=M,V=p)),T===0)return null;const X=C/T,Q=x/T,te=1/T,Le=P-X*L,we=b-Q*L,rt=B-X*F,Je=I-Q*F,nt=q-X*ie,Z=V-Q*ie,j=nt*Je-Z*rt,_e=Le*Z-we*nt,Be=rt*we-Je*Le;if(s){if(j<0||_e<0||Be<0)return null}else if((j<0||_e<0||Be<0)&&(j>0||_e>0||Be>0))return null;const Me=j+_e+Be;if(Me===0)return null;const ke=te*(j*L+_e*F+Be*ie);return(Me>0?ke<0:ke>0)?null:this.at(ke/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Js extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cc=new st,yi=new Qr,ur=new ls,hc=new D,fr=new D,dr=new D,pr=new D,Fa=new D,mr=new D,uc=new D,gr=new D;class Ut extends Lt{constructor(e=new bt,t=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Fa.fromBufferAttribute(f,e),a?mr.addScaledVector(Fa,h):mr.addScaledVector(Fa.sub(t),h))}t.add(mr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(ur.containsPoint(yi.origin)===!1&&(yi.intersectSphere(ur,hc)===null||yi.origin.distanceToSquared(hc)>(e.far-e.near)**2))&&(cc.copy(r).invert(),yi.copy(e.ray).applyMatrix4(cc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),A=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,w=A;y<w;y+=3){const E=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=xr(this,p,e,n,c,h,f,E,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const M=o.getX(g),A=o.getX(g+1),y=o.getX(g+2);s=xr(this,a,e,n,c,h,f,M,A,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),A=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=M,w=A;y<w;y+=3){const E=y,C=y+1,x=y+2;s=xr(this,p,e,n,c,h,f,E,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const M=g,A=g+1,y=g+2;s=xr(this,a,e,n,c,h,f,M,A,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Ff(i,e,t,n,s,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ai,o),l===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:i}}function xr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,fr),i.getVertexPosition(l,dr),i.getVertexPosition(c,pr);const h=Ff(i,e,t,n,fr,dr,pr,uc);if(h){const f=new D;fn.getBarycoord(uc,fr,dr,pr,f),s&&(h.uv=fn.getInterpolatedAttribute(s,o,l,c,f,new re)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,l,c,f,new re)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};fn.getNormal(fr,dr,pr,u.normal),h.face=u,h.barycoord=f}return h}class Oh extends kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=zt,h=zt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc extends nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qi=new st,dc=new st,_r=[],pc=new Di,Bf=new st,_s=new Ut,vs=new ls;class Ba extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),pc.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(pc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),vs.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),e.ray.intersectsSphere(vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),dc.multiplyMatrices(n,qi),_s.matrixWorld=dc,_s.raycast(e,_r);for(let a=0,o=_r.length;a<o;a++){const l=_r[a];l.instanceId=r,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oh(new Float32Array(s*this.count),s,this.count,rl,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Si=new ls,zf=new re(.5,.5),vr=new D;class pl{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],A=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-m,w-M).normalize(),s[1].setComponents(c+a,d+h,p+m,w+M).normalize(),s[2].setComponents(c+o,d+f,p+v,w+A).normalize(),s[3].setComponents(c-o,d-f,p-v,w-A).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,p-g,w-y).normalize();else if(s[4].setComponents(c-l,d-u,p-g,w-y).normalize(),t===On)s[5].setComponents(c+l,d+u,p+g,w+y).normalize();else if(t===Gs)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=zf.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(vr.x=s.normal.x>0?e.max.x:e.min.x,vr.y=s.normal.y>0?e.max.y:e.min.y,vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fh extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xr=new D,qr=new D,mc=new st,ys=new Qr,yr=new ls,za=new D,gc=new D;class kf extends Lt{constructor(e=new bt,t=new Fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xr.fromBufferAttribute(t,s-1),qr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xr.distanceTo(qr);e.setAttribute("lineDistance",new at(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,e.ray.intersectsSphere(yr)===!1)return;mc.copy(s).invert(),ys.copy(e.ray).applyMatrix4(mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){const p=h.getX(v),M=h.getX(v+1),A=Sr(this,e,ys,l,p,M,v);A&&t.push(A)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(d),p=Sr(this,e,ys,l,v,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){const p=Sr(this,e,ys,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Sr(this,e,ys,l,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Xr.fromBufferAttribute(o,s),qr.fromBufferAttribute(o,r),t.distanceSqToSegment(Xr,qr,za,gc)>n)return;za.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(za);if(!(c<e.near||c>e.far))return{distance:c,point:gc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const xc=new D,_c=new D;class Gf extends kf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xc.fromBufferAttribute(t,s),_c.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xc.distanceTo(_c);e.setAttribute("lineDistance",new at(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bh extends kt{constructor(e=[],t=Ri,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hf extends kt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends kt{constructor(e,t,n=Bn,s,r,a,o=zt,l=zt,c,h=Jn,f=1){if(h!==Jn&&h!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ul(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Vf extends Vs{constructor(e,t=Bn,n=Ri,s,r,a=zt,o=zt,l,c=Jn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zh extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gi extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2));function m(v,g,p,M,A,y,w,E,C,x,T){const P=y/C,b=w/x,L=y/2,B=w/2,I=E/2,F=C+1,q=x+1;let V=0,ie=0;const X=new D;for(let Q=0;Q<q;Q++){const te=Q*b-B;for(let Le=0;Le<F;Le++){const we=Le*P-L;X[v]=we*M,X[g]=te*A,X[p]=I,c.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),f.push(Le/C),f.push(1-Q/x),V+=1}}for(let Q=0;Q<x;Q++)for(let te=0;te<C;te++){const Le=u+te+F*Q,we=u+te+F*(Q+1),rt=u+(te+1)+F*(Q+1),Je=u+(te+1)+F*Q;l.push(Le,we,Je),l.push(we,rt,Je),ie+=6}o.addGroup(d,ie,T),d+=ie,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hs extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const v=[],g=n/2;let p=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(d,2));function M(){const y=new D,w=new D;let E=0;const C=(t-e)/n;for(let x=0;x<=r;x++){const T=[],P=x/r,b=P*(t-e)+e;for(let L=0;L<=s;L++){const B=L/s,I=B*l+o,F=Math.sin(I),q=Math.cos(I);w.x=b*F,w.y=-P*n+g,w.z=b*q,f.push(w.x,w.y,w.z),y.set(F,C,q).normalize(),u.push(y.x,y.y,y.z),d.push(B,1-P),T.push(m++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const P=v[T][x],b=v[T+1][x],L=v[T+1][x+1],B=v[T][x+1];(e>0||T!==0)&&(h.push(P,b,B),E+=3),(t>0||T!==r-1)&&(h.push(b,L,B),E+=3)}c.addGroup(p,E,0),p+=E}function A(y){const w=m,E=new re,C=new D;let x=0;const T=y===!0?e:t,P=y===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,g*P,0),u.push(0,P,0),d.push(.5,.5),m++;const b=m;for(let L=0;L<=s;L++){const I=L/s*l+o,F=Math.cos(I),q=Math.sin(I);C.x=T*q,C.y=g*P,C.z=T*F,f.push(C.x,C.y,C.z),u.push(0,P,0),E.x=F*.5+.5,E.y=q*.5*P+.5,d.push(E.x,E.y),m++}for(let L=0;L<s;L++){const B=w+L,I=b+L;y===!0?h.push(I,I+1,B):h.push(I+1,I,B),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jr extends hs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new jr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ea extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const A=new D,y=new D,w=new D;for(let E=0;E<t.length;E+=3)d(t[E+0],A),d(t[E+1],y),d(t[E+2],w),l(A,y,w,M)}function l(M,A,y,w){const E=w+1,C=[];for(let x=0;x<=E;x++){C[x]=[];const T=M.clone().lerp(y,x/E),P=A.clone().lerp(y,x/E),b=E-x;for(let L=0;L<=b;L++)L===0&&x===E?C[x][L]=T:C[x][L]=T.clone().lerp(P,L/b)}for(let x=0;x<E;x++)for(let T=0;T<2*(E-x)-1;T++){const P=Math.floor(T/2);T%2===0?(u(C[x][P+1]),u(C[x+1][P]),u(C[x][P])):(u(C[x][P+1]),u(C[x+1][P+1]),u(C[x+1][P]))}}function c(M){const A=new D;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(M),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){const M=new D;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];const y=g(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;a.push(y,1-w)}m(),f()}function f(){for(let M=0;M<a.length;M+=6){const A=a[M+0],y=a[M+2],w=a[M+4],E=Math.max(A,y,w),C=Math.min(A,y,w);E>.9&&C<.1&&(A<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,A){const y=M*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function m(){const M=new D,A=new D,y=new D,w=new D,E=new re,C=new re,x=new re;for(let T=0,P=0;T<r.length;T+=9,P+=6){M.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),E.set(a[P+0],a[P+1]),C.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),w.copy(M).add(A).add(y).divideScalar(3);const b=g(w);v(E,P+0,M,b),v(C,P+2,A,b),v(x,P+4,y,b)}}function v(M,A,y,w){w<0&&M.x===1&&(a[A]=M.x-1),y.x===0&&y.z===0&&(a[A]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.vertices,e.indices,e.radius,e.detail)}}class ml extends ea{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ml(e.radius,e.detail)}}const Mr=new D,br=new D,ka=new D,Er=new fn;class Wf extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ls*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:v,b:g,c:p}=Er;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Er.getNormal(ka),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,f[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let M=0;M<3;M++){const A=(M+1)%3,y=f[M],w=f[A],E=Er[h[M]],C=Er[h[A]],x=`${y}_${w}`,T=`${w}_${y}`;T in u&&u[T]?(ka.dot(u[T].normal)<=r&&(d.push(E.x,E.y,E.z),d.push(C.x,C.y,C.z)),u[T]=null):x in u||(u[x]={index0:c[M],index1:c[A],normal:ka.clone()})}}for(const m in u)if(u[m]){const{index0:v,index1:g}=u[m];Mr.fromBufferAttribute(o,v),br.fromBufferAttribute(o,g),d.push(Mr.x,Mr.y,Mr.z),d.push(br.x,br.y,br.z)}this.setAttribute("position",new at(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],a=[],o=new D,l=new st;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ke(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gl extends kn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xf extends gl{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function xl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const vc=new D,yc=new D,Ga=new xl,Ha=new xl,Va=new xl;class qf extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(yc.subVectors(s[0],s[1]).add(s[0]),c=yc);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(vc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ga.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,v,g),Ha.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,v,g),Va.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Ha.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Va.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Ga.calc(l),Ha.calc(l),Va.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Yf(i,e){const t=1-i;return t*t*e}function $f(i,e){return 2*(1-i)*i*e}function Zf(i,e){return i*i*e}function Ds(i,e,t,n){return Yf(i,e)+$f(i,t)+Zf(i,n)}function Kf(i,e){const t=1-i;return t*t*t*e}function Jf(i,e){const t=1-i;return 3*t*t*i*e}function Qf(i,e){return 3*(1-i)*i*i*e}function jf(i,e){return i*i*i*e}function Is(i,e,t,n,s){return Kf(i,e)+Jf(i,t)+Qf(i,n)+jf(i,s)}class kh extends kn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,s.x,r.x,a.x,o.x),Is(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ed extends kn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Is(e,s.x,r.x,a.x,o.x),Is(e,s.y,r.y,a.y,o.y),Is(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gh extends kn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends kn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends kn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(e,s.x,r.x,a.x),Ds(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends kn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ds(e,s.x,r.x,a.x),Ds(e,s.y,r.y,a.y),Ds(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Sc(o,l.x,c.x,h.x,f.x),Sc(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var Xo=Object.freeze({__proto__:null,ArcCurve:Xf,CatmullRomCurve3:qf,CubicBezierCurve:kh,CubicBezierCurve3:ed,EllipseCurve:gl,LineCurve:Gh,LineCurve3:td,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:nd,SplineCurve:Vh});class id extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Xo[s.type]().fromJSON(s))}return this}}class Mc extends id{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Gh(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Hh(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new kh(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Vh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new gl(e,t,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ta extends Mc{constructor(e){super(e),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Mc().fromJSON(s))}return this}}function sd(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Wh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=cd(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){const d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Ws(r,a,t,o,l,c,0),a}function Wh(i,e,t,n,s){let r;if(s===yd(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=bc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bc(a/n|0,i[a],i[a+1],r);return r&&ss(r,r.next)&&(qs(r),r=r.next),r}function Pi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ss(t,t.next)||St(t.prev,t,t.next)===0)){if(qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ws(i,e,t,n,s,r,a){if(!i)return;!a&&r&&pd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?ad(i,n,s,r):rd(i)){e.push(l.i,i.i,c.i),qs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=od(Pi(i),e),Ws(i,e,t,n,s,r,2)):a===2&&ld(i,e,t,n,s,r):Ws(Pi(i),e,t,n,s,r,1);break}}}function rd(i){const e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ts(s,o,r,l,a,c,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ad(i,e,t,n){const s=i.prev,r=i,a=i.next;if(St(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),v=Math.max(o,l,c),g=Math.max(h,f,u),p=qo(d,m,e,t,n),M=qo(v,g,e,t,n);let A=i.prevZ,y=i.nextZ;for(;A&&A.z>=p&&y&&y.z<=M;){if(A.x>=d&&A.x<=v&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&Ts(o,h,l,f,c,u,A.x,A.y)&&St(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Ts(o,h,l,f,c,u,y.x,y.y)&&St(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=p;){if(A.x>=d&&A.x<=v&&A.y>=m&&A.y<=g&&A!==s&&A!==a&&Ts(o,h,l,f,c,u,A.x,A.y)&&St(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Ts(o,h,l,f,c,u,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function od(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ss(n,s)&&qh(n,t,t.next,s)&&Xs(n,s)&&Xs(s,n)&&(e.push(n.i,t.i,s.i),qs(t),qs(t.next),t=i=s),t=t.next}while(t!==i);return Pi(t)}function ld(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xd(a,o)){let l=Yh(a,o);a=Pi(a,a.next),l=Pi(l,l.next),Ws(a,e,t,n,s,r,0),Ws(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cd(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Wh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(gd(c))}s.sort(hd);for(let r=0;r<s.length;r++)t=ud(s[r],t);return t}function hd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ud(i,e){const t=fd(i,e);if(!t)return e;const n=Yh(t,i);return Pi(n,n.next),Pi(t,t.next)}function fd(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(ss(i,t))return t;do{if(ss(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Xh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);Xs(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&dd(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function dd(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function pd(i,e,t,n){let s=i;do s.z===0&&(s.z=qo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,md(s)}function md(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function qo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gd(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ts(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Xh(i,e,t,n,s,r,a,o)}function xd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_d(i,e)&&(Xs(i,e)&&Xs(e,i)&&vd(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||ss(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ss(i,e){return i.x===e.x&&i.y===e.y}function qh(i,e,t,n){const s=Tr(St(i,e,t)),r=Tr(St(i,e,n)),a=Tr(St(t,n,i)),o=Tr(St(t,n,e));return!!(s!==r&&a!==o||s===0&&wr(i,t,e)||r===0&&wr(i,n,e)||a===0&&wr(t,i,n)||o===0&&wr(t,e,n))}function wr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Tr(i){return i>0?1:i<0?-1:0}function _d(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xs(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function vd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Yh(i,e){const t=Yo(i.i,i.x,i.y),n=Yo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bc(i,e,t,n){const s=Yo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yd(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Sd{static triangulate(e,t,n=2){return sd(e,t,n)}}class Yn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Yn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ec(e),wc(n,e);let a=e.length;t.forEach(Ec);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,wc(n,t[l]);const o=Sd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ec(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class _l extends bt{constructor(e=new ta([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Md;let A,y=!1,w,E,C,x;if(p){A=p.getSpacedPoints(h),y=!0,u=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,ee),E=new D,C=new D,x=new D}u||(g=0,d=0,m=0,v=0);const T=o.extractPoints(c);let P=T.shape;const b=T.holes;if(!Yn.isClockWise(P)){P=P.reverse();for(let ee=0,se=b.length;ee<se;ee++){const ae=b[ee];Yn.isClockWise(ae)&&(b[ee]=ae.reverse())}}function B(ee){const ae=10000000000000001e-36;let oe=ee[0];for(let ue=1;ue<=ee.length;ue++){const Oe=ue%ee.length,Ue=ee[Oe],Ge=Ue.x-oe.x,Ve=Ue.y-oe.y,N=Ge*Ge+Ve*Ve,ot=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(oe.x),Math.abs(oe.y)),Qe=ae*ot*ot;if(N<=Qe){ee.splice(Oe,1),ue--;continue}oe=Ue}}B(P),b.forEach(B);const I=b.length,F=P;for(let ee=0;ee<I;ee++){const se=b[ee];P=P.concat(se)}function q(ee,se,ae){return se||tt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,ae)}const V=P.length;function ie(ee,se,ae){let oe,ue,Oe;const Ue=ee.x-se.x,Ge=ee.y-se.y,Ve=ae.x-ee.x,N=ae.y-ee.y,ot=Ue*Ue+Ge*Ge,Qe=Ue*N-Ge*Ve;if(Math.abs(Qe)>Number.EPSILON){const R=Math.sqrt(ot),_=Math.sqrt(Ve*Ve+N*N),z=se.x-Ge/R,H=se.y+Ue/R,Y=ae.x-N/_,ce=ae.y+Ve/_,he=((Y-z)*N-(ce-H)*Ve)/(Ue*N-Ge*Ve);oe=z+Ue*he-ee.x,ue=H+Ge*he-ee.y;const $=oe*oe+ue*ue;if($<=2)return new re(oe,ue);Oe=Math.sqrt($/2)}else{let R=!1;Ue>Number.EPSILON?Ve>Number.EPSILON&&(R=!0):Ue<-Number.EPSILON?Ve<-Number.EPSILON&&(R=!0):Math.sign(Ge)===Math.sign(N)&&(R=!0),R?(oe=-Ge,ue=Ue,Oe=Math.sqrt(ot)):(oe=Ue,ue=Ge,Oe=Math.sqrt(ot/2))}return new re(oe/Oe,ue/Oe)}const X=[];for(let ee=0,se=F.length,ae=se-1,oe=ee+1;ee<se;ee++,ae++,oe++)ae===se&&(ae=0),oe===se&&(oe=0),X[ee]=ie(F[ee],F[ae],F[oe]);const Q=[];let te,Le=X.concat();for(let ee=0,se=I;ee<se;ee++){const ae=b[ee];te=[];for(let oe=0,ue=ae.length,Oe=ue-1,Ue=oe+1;oe<ue;oe++,Oe++,Ue++)Oe===ue&&(Oe=0),Ue===ue&&(Ue=0),te[oe]=ie(ae[oe],ae[Oe],ae[Ue]);Q.push(te),Le=Le.concat(te)}let we;if(g===0)we=Yn.triangulateShape(F,b);else{const ee=[],se=[];for(let ae=0;ae<g;ae++){const oe=ae/g,ue=d*Math.cos(oe*Math.PI/2),Oe=m*Math.sin(oe*Math.PI/2)+v;for(let Ue=0,Ge=F.length;Ue<Ge;Ue++){const Ve=q(F[Ue],X[Ue],Oe);_e(Ve.x,Ve.y,-ue),oe===0&&ee.push(Ve)}for(let Ue=0,Ge=I;Ue<Ge;Ue++){const Ve=b[Ue];te=Q[Ue];const N=[];for(let ot=0,Qe=Ve.length;ot<Qe;ot++){const R=q(Ve[ot],te[ot],Oe);_e(R.x,R.y,-ue),oe===0&&N.push(R)}oe===0&&se.push(N)}}we=Yn.triangulateShape(ee,se)}const rt=we.length,Je=m+v;for(let ee=0;ee<V;ee++){const se=u?q(P[ee],Le[ee],Je):P[ee];y?(C.copy(w.normals[0]).multiplyScalar(se.x),E.copy(w.binormals[0]).multiplyScalar(se.y),x.copy(A[0]).add(C).add(E),_e(x.x,x.y,x.z)):_e(se.x,se.y,0)}for(let ee=1;ee<=h;ee++)for(let se=0;se<V;se++){const ae=u?q(P[se],Le[se],Je):P[se];y?(C.copy(w.normals[ee]).multiplyScalar(ae.x),E.copy(w.binormals[ee]).multiplyScalar(ae.y),x.copy(A[ee]).add(C).add(E),_e(x.x,x.y,x.z)):_e(ae.x,ae.y,f/h*ee)}for(let ee=g-1;ee>=0;ee--){const se=ee/g,ae=d*Math.cos(se*Math.PI/2),oe=m*Math.sin(se*Math.PI/2)+v;for(let ue=0,Oe=F.length;ue<Oe;ue++){const Ue=q(F[ue],X[ue],oe);_e(Ue.x,Ue.y,f+ae)}for(let ue=0,Oe=b.length;ue<Oe;ue++){const Ue=b[ue];te=Q[ue];for(let Ge=0,Ve=Ue.length;Ge<Ve;Ge++){const N=q(Ue[Ge],te[Ge],oe);y?_e(N.x,N.y+A[h-1].y,A[h-1].x+ae):_e(N.x,N.y,f+ae)}}}nt(),Z();function nt(){const ee=s.length/3;if(u){let se=0,ae=V*se;for(let oe=0;oe<rt;oe++){const ue=we[oe];Be(ue[2]+ae,ue[1]+ae,ue[0]+ae)}se=h+g*2,ae=V*se;for(let oe=0;oe<rt;oe++){const ue=we[oe];Be(ue[0]+ae,ue[1]+ae,ue[2]+ae)}}else{for(let se=0;se<rt;se++){const ae=we[se];Be(ae[2],ae[1],ae[0])}for(let se=0;se<rt;se++){const ae=we[se];Be(ae[0]+V*h,ae[1]+V*h,ae[2]+V*h)}}n.addGroup(ee,s.length/3-ee,0)}function Z(){const ee=s.length/3;let se=0;j(F,se),se+=F.length;for(let ae=0,oe=b.length;ae<oe;ae++){const ue=b[ae];j(ue,se),se+=ue.length}n.addGroup(ee,s.length/3-ee,1)}function j(ee,se){let ae=ee.length;for(;--ae>=0;){const oe=ae;let ue=ae-1;ue<0&&(ue=ee.length-1);for(let Oe=0,Ue=h+g*2;Oe<Ue;Oe++){const Ge=V*Oe,Ve=V*(Oe+1),N=se+oe+Ge,ot=se+ue+Ge,Qe=se+ue+Ve,R=se+oe+Ve;Me(N,ot,Qe,R)}}}function _e(ee,se,ae){l.push(ee),l.push(se),l.push(ae)}function Be(ee,se,ae){ke(ee),ke(se),ke(ae);const oe=s.length/3,ue=M.generateTopUV(n,s,oe-3,oe-2,oe-1);ht(ue[0]),ht(ue[1]),ht(ue[2])}function Me(ee,se,ae,oe){ke(ee),ke(se),ke(oe),ke(se),ke(ae),ke(oe);const ue=s.length/3,Oe=M.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);ht(Oe[0]),ht(Oe[1]),ht(Oe[3]),ht(Oe[1]),ht(Oe[2]),ht(Oe[3])}function ke(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function ht(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xo[s.type]().fromJSON(s)),new _l(n,e.options)}}const Md={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-f),new re(u,1-m),new re(v,1-p)]:[new re(o,1-l),new re(h,1-f),new re(d,1-m),new re(g,1-p)]}};function bd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ys extends ea{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ys(e.radius,e.detail)}}class Ii extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const M=p*u-a;for(let A=0;A<c;A++){const y=A*f-r;m.push(y,-M,0),v.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const A=M+c*p,y=M+c*(p+1),w=M+1+c*(p+1),E=M+1+c*p;d.push(A,y,E),d.push(y,w,E)}this.setIndex(d),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class vl extends bt{constructor(e=new ta([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(a,2));function c(h){const f=s.length/3,u=h.extractPoints(t);let d=u.shape;const m=u.holes;Yn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];Yn.isClockWise(M)===!0&&(m[g]=M.reverse())}const v=Yn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){const M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){const M=v[g],A=M[0]+f,y=M[1]+f,w=M[2]+f;n.push(A,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ed(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new vl(n,e.curveSegments)}}function Ed(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class yl extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new D,u=new D,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const M=[],A=p/n,y=a+A*o,w=e*Math.cos(y),E=Math.sqrt(e*e-w*w);let C=0;p===0&&a===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){const T=x/t,P=s+T*r;f.x=-E*Math.cos(P),f.y=w,f.z=E*Math.sin(P),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(T+C,1-A),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const A=h[p][M+1],y=h[p][M],w=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&d.push(A,y,E),(p!==n-1||l<Math.PI)&&d.push(y,w,E)}this.setIndex(d),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ns extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new D,d=new D,m=new D;for(let v=0;v<=n;v++){const g=a+v/n*o;for(let p=0;p<=s;p++){const M=p/s*r;d.x=(e+t*Math.cos(g))*Math.cos(M),d.y=(e+t*Math.cos(g))*Math.sin(M),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){const p=(s+1)*v+g-1,M=(s+1)*(v-1)+g-1,A=(s+1)*(v-1)+g,y=(s+1)*v+g;l.push(p,M,y),l.push(M,A,y)}this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function rs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Tc(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=rs(i[t]);for(const s in n)e[s]=n[s]}return e}function Tc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $h(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Td={clone:rs,merge:$t};var Ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ad,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Cd extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class En extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pd extends En{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ld extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dd extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ac(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ac(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ac(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Id{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Nd=new Id;class Sl{constructor(e){this.manager=e!==void 0?e:Nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi=new WeakMap;class Ud extends Sl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Yi.get(a);f===void 0&&(f=[],Yi.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=Hs("img");function l(){h(),t&&t(this);const f=Yi.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Yi.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),Wa.remove(`image:${e}`);const u=Yi.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onError&&m.onError(f)}Yi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wa.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Od extends Sl{constructor(e){super(e)}load(e,t,n,s){const r=new kt,a=new Ud(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class na extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Fd extends na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Xa=new st,Rc=new D,Cc=new D;class Zh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pl,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rc),Cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ar=new D,Rr=new wn,Pn=new D;class Kh extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ar,Rr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ar,Rr,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ai=new D,Pc=new re,Lc=new re;class on extends Kh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Pc,Lc),t.subVectors(Lc,Pc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bd extends Zh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}}class zd extends na{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ia extends Kh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kd extends Zh{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new kd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Hd extends na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $i=-90,Zi=1;class Vd extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on($i,Zi,e,t);s.layers=this.layers,this.add(s);const r=new on($i,Zi,e,t);r.layers=this.layers,this.add(r);const a=new on($i,Zi,e,t);a.layers=this.layers,this.add(a);const o=new on($i,Zi,e,t);o.layers=this.layers,this.add(o);const l=new on($i,Zi,e,t);l.layers=this.layers,this.add(l);const c=new on($i,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wd extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dc=new st;class Xd{constructor(e,t,n=0,s=1/0){this.ray=new Qr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dc),this}intersectObject(e,t=!0,n=[]){return $o(e,this,n,t),n.sort(Ic),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$o(e[s],this,n,t);return n.sort(Ic),n}}function Ic(i,e){return i.distance-e.distance}function $o(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)$o(r[a],e,t,!0)}}class Nc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Nl=class Nl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Nl.prototype.isMatrix2=!0;let Uc=Nl;class qd extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Oc(i,e,t,n){const s=Yd(n);switch(t){case Ch:return i*e;case rl:return i*e/s.components*s.byteLength;case al:return i*e/s.components*s.byteLength;case Ci:return i*e*2/s.components*s.byteLength;case ol:return i*e*2/s.components*s.byteLength;case Ph:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case ll:return i*e*4/s.components*s.byteLength;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(i,8)*Math.max(e,8)/2;case xo:case _o:case yo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case Gr:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Bo:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ko:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hr:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yd(i){switch(i){case ln:case wh:return{byteLength:1,components:1};case zs:case Th:case zn:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Bn:case nl:case Mn:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $d(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Yp=`uniform sampler2D dfgLUT;
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
}`,$p=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,f0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,x0=`#define PHONG
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
}`,_0=`#define PHONG
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
}`,v0=`#define STANDARD
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
}`,y0=`#define STANDARD
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
}`,S0=`#define TOON
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
}`,M0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Zd,alphahash_pars_fragment:Kd,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:jd,alphatest_pars_fragment:ep,aomap_fragment:tp,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:ap,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:fp,clipping_planes_vertex:dp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:xp,common:_p,cube_uv_reflection_fragment:vp,defaultnormal_vertex:yp,displacementmap_pars_vertex:Sp,displacementmap_vertex:Mp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ep,colorspace_fragment:wp,colorspace_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Ip,fog_fragment:Np,fog_pars_fragment:Up,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Fp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:zp,lights_pars_begin:kp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:$p,lights_fragment_maps:Zp,lights_fragment_end:Kp,lightprobes_pars_fragment:Jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:xm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:Mm,opaque_fragment:bm,packing:Em,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Im,shadowmask_pars_fragment:Nm,skinbase_vertex:Um,skinning_pars_vertex:Om,skinning_vertex:Fm,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:km,tonemapping_fragment:Gm,tonemapping_pars_fragment:Hm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:$m,background_vert:Zm,background_frag:Km,backgroundCube_vert:Jm,backgroundCube_frag:Qm,cube_vert:jm,cube_frag:e0,depth_vert:t0,depth_frag:n0,distance_vert:i0,distance_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:f0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:x0,meshphong_frag:_0,meshphysical_vert:v0,meshphysical_frag:y0,meshtoon_vert:S0,meshtoon_frag:M0,points_vert:b0,points_frag:E0,shadow_vert:w0,shadow_frag:T0,sprite_vert:A0,sprite_frag:R0},xe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},In={basic:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:$t([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:$t([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:$t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:$t([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:$t([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:$t([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:$t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:$t([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:$t([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:$t([xe.lights,xe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};In.physical={uniforms:$t([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Cr={r:0,b:0,g:0},C0=new st,Qh=new We;Qh.set(-1,0,0,0,1,0,0,0,1);function P0(i,e,t,n,s,r){const a=new He(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function m(M){let A=!1;const y=d(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),A=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,A){const y=d(A);y&&(y.isCubeTexture||y.mapping===Jr)?(c===void 0&&(c=new Ut(new gi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:rs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qh),c.material.toneMapped=et.getTransfer(y.colorSpace)!==ut,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ut(new Ii(2,2),new An({name:"BackgroundMaterial",uniforms:rs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,A){M.getRGB(Cr,$h(i)),t.buffers.color.setClear(Cr.r,Cr.g,Cr.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:v,dispose:p}}function L0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(b,L,B,I,F){let q=!1;const V=f(b,I,B,L);r!==V&&(r=V,c(r.object)),q=d(b,I,B,F),q&&m(b,I,B,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(b,L,B,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,L,B,I){const F=I.wireframe===!0;let q=n[L.id];q===void 0&&(q={},n[L.id]=q);const V=b.isInstancedMesh===!0?b.id:0;let ie=q[V];ie===void 0&&(ie={},q[V]=ie);let X=ie[B.id];X===void 0&&(X={},ie[B.id]=X);let Q=X[F];return Q===void 0&&(Q=u(l()),X[F]=Q),Q}function u(b){const L=[],B=[],I=[];for(let F=0;F<t;F++)L[F]=0,B[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:I,object:b,attributes:{},index:null}}function d(b,L,B,I){const F=r.attributes,q=L.attributes;let V=0;const ie=B.getAttributes();for(const X in ie)if(ie[X].location>=0){const te=F[X];let Le=q[X];if(Le===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(Le=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(Le=b.instanceColor)),te===void 0||te.attribute!==Le||Le&&te.data!==Le.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function m(b,L,B,I){const F={},q=L.attributes;let V=0;const ie=B.getAttributes();for(const X in ie)if(ie[X].location>=0){let te=q[X];te===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const Le={};Le.attribute=te,te&&te.data&&(Le.data=te.data),F[X]=Le,V++}r.attributes=F,r.attributesNum=V,r.index=I}function v(){const b=r.newAttributes;for(let L=0,B=b.length;L<B;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const B=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;B[b]=1,I[b]===0&&(i.enableVertexAttribArray(b),I[b]=1),F[b]!==L&&(i.vertexAttribDivisor(b,L),F[b]=L)}function M(){const b=r.newAttributes,L=r.enabledAttributes;for(let B=0,I=L.length;B<I;B++)L[B]!==b[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function A(b,L,B,I,F,q,V){V===!0?i.vertexAttribIPointer(b,L,B,F,q):i.vertexAttribPointer(b,L,B,I,F,q)}function y(b,L,B,I){v();const F=I.attributes,q=B.getAttributes(),V=L.defaultAttributeValues;for(const ie in q){const X=q[ie];if(X.location>=0){let Q=F[ie];if(Q===void 0&&(ie==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),ie==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){const te=Q.normalized,Le=Q.itemSize,we=e.get(Q);if(we===void 0)continue;const rt=we.buffer,Je=we.type,nt=we.bytesPerElement,Z=Je===i.INT||Je===i.UNSIGNED_INT||Q.gpuType===nl;if(Q.isInterleavedBufferAttribute){const j=Q.data,_e=j.stride,Be=Q.offset;if(j.isInstancedInterleavedBuffer){for(let Me=0;Me<X.locationSize;Me++)p(X.location+Me,j.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Me=0;Me<X.locationSize;Me++)g(X.location+Me);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Me=0;Me<X.locationSize;Me++)A(X.location+Me,Le/X.locationSize,Je,te,_e*nt,(Be+Le/X.locationSize*Me)*nt,Z)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);b.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)g(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let j=0;j<X.locationSize;j++)A(X.location+j,Le/X.locationSize,Je,te,Le*nt,Le/X.locationSize*j*nt,Z)}}else if(V!==void 0){const te=V[ie];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(X.location,te);break;case 3:i.vertexAttrib3fv(X.location,te);break;case 4:i.vertexAttrib4fv(X.location,te);break;default:i.vertexAttrib1fv(X.location,te)}}}}M()}function w(){T();for(const b in n){const L=n[b];for(const B in L){const I=L[B];for(const F in I){const q=I[F];for(const V in q)h(q[V].object),delete q[V];delete I[F]}}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const B in L){const I=L[B];for(const F in I){const q=I[F];for(const V in q)h(q[V].object),delete q[V];delete I[F]}}delete n[b.id]}function C(b){for(const L in n){const B=n[L];for(const I in B){const F=B[I];if(F[b.id]===void 0)continue;const q=F[b.id];for(const V in q)h(q[V].object),delete q[V];delete F[b.id]}}}function x(b){for(const L in n){const B=n[L],I=b.isInstancedMesh===!0?b.id:0,F=B[I];if(F!==void 0){for(const q in F){const V=F[q];for(const ie in V)h(V[ie].object),delete V[ie];delete F[q]}delete B[I],Object.keys(B).length===0&&delete n[L]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function D0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function I0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ln&&C!==Mn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:w,samples:E}}function N0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new yn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,A=M*4;let y=p.clippingState||null;l.value=y,y=h(m,u,A,d);for(let w=0;w!==A;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,y=d;A!==v;++A,y+=4)a.copy(f[A]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const ji=4,U0=6,O0=20,F0=256,Ss=new ia,Fc=new He;let qa=null,Ya=0,$a=0,Za=!1;const B0=new D,Mi=new D;class Bc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=B0}=r;qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ya,$a),this._renderer.xr.enabled=Za,e.scissorTest=!1,Ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:zn,format:bn,colorSpace:Vr,depthBuffer:!1},s=zc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=z0(r)),this._blurMaterial=G0(r,e,t),this._ggxMaterial=k0(r,e,t)}return s}_compileMaterial(e){const t=new Ut(new bt,e);this._renderer.compile(t,Ss)}_sceneToCubeUV(e,t,n,s,r){const l=new on(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Fc),f.toneMapping=Fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new gi,new Js({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(Fc),p=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));const w=this._cubeSize;Ki(s,y*w,A>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ri||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ki(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ss)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-ji?n-m+ji:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Ki(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ss),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ki(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Ss)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-ji?s-this._lodMax+ji:0),u=4*(this._cubeSize-h);Ki(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ss)}}function z0(i){const e=[],t=[];let n=i;const s=i-ji+1+U0;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let p=0;p<f;p++){const M=p%3*2/3-1,A=p>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];m.set(y,d*u*p);for(let w=0;w<u;w++){const E=h[w*2]*2-1,C=h[w*2+1]*2-1;p===0?Mi.set(1,C,E):p===1?Mi.set(-E,1,-C):p===2?Mi.set(-E,C,1):p===3?Mi.set(-1,C,-E):p===4?Mi.set(-E,-1,C):Mi.set(E,C,-1),Mi.toArray(v,(p*u+w)*d)}}const g=new bt;g.setAttribute("position",new nn(m,d)),g.setAttribute("outputDirection",new nn(v,d)),t.push(new Ut(g,null)),n>ji&&n--}return{lodMeshes:t,sizeLods:e}}function zc(i,e,t){const n=new Tn(i,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function k0(i,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function G0(i,e,t){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:O0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function kc(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Gc(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function sa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jh extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Zn});r.uniforms.tEquirect.value=t;const a=new Ut(s,r),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Xt),new Vd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function H0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===da||d===pa)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new jh(m.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,m=d===da||d===pa,v=d===Ri||d===is;if(m||v){let g=t.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Bc(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const M=u.image;return m&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Bc(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===da?u.mapping=Ri:d===pa&&(u.mapping=is),u}function l(u){let d=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function V0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function W0(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(d!==null){const M=d.array;v=d.version;for(let A=0,y=M.length;A<y;A+=3){const w=M[A+0],E=M[A+1],C=M[A+2];u.push(w,E,E,C,C,w)}}else{const M=m.array;v=m.version;for(let A=0,y=M.length/3-1;A<y;A+=3){const w=A+0,E=A+1,C=A+2;u.push(w,E,E,C,C,w)}}const g=new(m.count>=65535?Uh:Nh)(u,1);g.version=v;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function X0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function q0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Y0(i,e,t){const n=new WeakMap,s=new yt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var d=P;u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let w=o.attributes.position.count*y,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*E*4*f),x=new Dh(C,w,E,f);x.type=Mn,x.needsUpdate=!0;const T=y*4;for(let b=0;b<f;b++){const L=p[b],B=M[b],I=A[b],F=w*E*4*b;for(let q=0;q<L.count;q++){const V=q*T;m===!0&&(s.fromBufferAttribute(L,q),C[F+V+0]=s.x,C[F+V+1]=s.y,C[F+V+2]=s.z,C[F+V+3]=0),v===!0&&(s.fromBufferAttribute(B,q),C[F+V+4]=s.x,C[F+V+5]=s.y,C[F+V+6]=s.z,C[F+V+7]=0),g===!0&&(s.fromBufferAttribute(I,q),C[F+V+8]=s.x,C[F+V+9]=s.y,C[F+V+10]=s.z,C[F+V+11]=I.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new re(w,E)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $0(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Z0={[_h]:"LINEAR_TONE_MAPPING",[vh]:"REINHARD_TONE_MAPPING",[yh]:"CINEON_TONE_MAPPING",[tl]:"ACES_FILMIC_TONE_MAPPING",[Mh]:"AGX_TONE_MAPPING",[bh]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function K0(i,e,t,n,s,r){const a=new Tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new bt;c.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new at([0,2,0,0,2,0],2));const h=new Cd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ut(c,h),u=new ia(-1,1,1,-1,0,1);let d=null,m=null,v=!1,g,p=null,M=[],A=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let E=0;E<M.length;E++){const C=M[E];C.setSize&&C.setSize(y,w)}},this.setEffects=function(y){M=y,A=M.length>0&&M[0].isRenderPass===!0;const w=a.width,E=a.height;M.length>0&&o===null&&(o=new Tn(w,E,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(w,E,{type:zn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){const x=M[C];x.setSize&&x.setSize(w,E)}},this.begin=function(y,w){if(v||y.toneMapping===Fn&&M.length===0)return!1;if(p=w,w!==null){const E=w.width,C=w.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return A===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Fn,!0},this.hasRenderPass=function(){return A},this.end=function(y,w){y.toneMapping=g,v=!0;let E=a,C=o;for(let x=0;x<M.length;x++){const T=M[x];T.enabled!==!1&&(T.render(y,C,E,w),T.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,h.defines={},et.getTransfer(d)===ut&&(h.defines.SRGB_TRANSFER="");const x=Z0[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const eu=new kt,Zo=new Vs(1,1),tu=new Dh,nu=new Mf,iu=new Bh,Hc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),qc=new Float32Array(4);function us(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function J0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function tg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;qc.set(n),i.uniformMatrix2fv(this.addr,!1,qc),It(t,n)}}function ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;Xc.set(n),i.uniformMatrix3fv(this.addr,!1,Xc),It(t,n)}}function ig(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),It(t,n)}}function sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function lg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function fg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zo.compareFunction=t.isReversedDepthBuffer()?hl:cl,r=Zo):r=eu,t.setTexture2D(e||r,s)}function dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nu,s)}function pg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||iu,s)}function mg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tu,s)}function gg(i){switch(i){case 5126:return J0;case 35664:return Q0;case 35665:return j0;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function xg(i,e){i.uniform1fv(this.addr,e)}function _g(i,e){const t=us(e,this.size,2);i.uniform2fv(this.addr,t)}function vg(i,e){const t=us(e,this.size,3);i.uniform3fv(this.addr,t)}function yg(i,e){const t=us(e,this.size,4);i.uniform4fv(this.addr,t)}function Sg(i,e){const t=us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mg(i,e){const t=us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bg(i,e){const t=us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Eg(i,e){i.uniform1iv(this.addr,e)}function wg(i,e){i.uniform2iv(this.addr,e)}function Tg(i,e){i.uniform3iv(this.addr,e)}function Ag(i,e){i.uniform4iv(this.addr,e)}function Rg(i,e){i.uniform1uiv(this.addr,e)}function Cg(i,e){i.uniform2uiv(this.addr,e)}function Pg(i,e){i.uniform3uiv(this.addr,e)}function Lg(i,e){i.uniform4uiv(this.addr,e)}function Dg(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Zo:a=eu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Ig(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nu,r[a])}function Ng(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||iu,r[a])}function Ug(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tu,r[a])}function Og(i){switch(i){case 5126:return xg;case 35664:return _g;case 35665:return vg;case 35666:return yg;case 35674:return Sg;case 35675:return Mg;case 35676:return bg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}class Fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gg(t.type)}}class Bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Og(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Yc(i,e){i.seq.push(e),i.map[e.id]=e}function kg(i,e,t){const n=i.name,s=n.length;for(Ka.lastIndex=0;;){const r=Ka.exec(n),a=Ka.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yc(t,c===void 0?new Fg(o,i,e):new Bg(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new zg(o),Yc(t,f)),t=f}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);kg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function $c(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gg=37297;let Hg=0;function Vg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zc=new We;function Wg(i){et._getMatrix(Zc,et.workingColorSpace,i);const e=`mat3( ${Zc.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Wr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Vg(i.getShaderSource(e),o)}else return r}function Xg(i,e){const t=Wg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qg={[_h]:"Linear",[vh]:"Reinhard",[yh]:"Cineon",[tl]:"ACESFilmic",[Mh]:"AgX",[bh]:"Neutral",[Sh]:"Custom"};function Yg(i,e){const t=qg[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new D;function $g(){et.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function Kg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function As(i){return i!==""}function Jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(i){return i.replace(Qg,ex)}const jg=new Map;function ex(i,e){let t=Ze[e];if(t===void 0){const n=jg.get(e);if(n!==void 0)t=Ze[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ko(t)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(tx,nx)}function nx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ix={[Cs]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function sx(i){return ix[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rx={[Ri]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE_UV"};function ax(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":rx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ox={[is]:"ENVMAP_MODE_REFRACTION"};function lx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ox[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cx={[xh]:"ENVMAP_BLENDING_MULTIPLY",[Ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cx[i.combine]||"ENVMAP_BLENDING_NONE"}function ux(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=sx(t),c=ax(t),h=lx(t),f=hx(t),u=ux(t),d=Zg(t),m=Kg(r),v=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(As).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(As).join(`
`),p.length>0&&(p+=`
`)):(g=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),$g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=Ko(a),a=Jc(a,t),a=Qc(a,t),o=Ko(o),o=Jc(o,t),o=Qc(o,t),a=jc(a),o=jc(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=M+g+a,y=M+p+o,w=$c(s,s.VERTEX_SHADER,A),E=$c(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(b){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(E)||"",F=L.trim(),q=B.trim(),V=I.trim();let ie=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,E);else{const Q=Kc(s,w,"vertex"),te=Kc(s,E,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+Q+`
`+te)}else F!==""?ze("WebGLProgram: Program Info Log:",F):(q===""||V==="")&&(X=!1);X&&(b.diagnostics={runnable:ie,programLog:F,vertexShader:{log:q,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(w),s.deleteShader(E),x=new Br(s,v),T=Jg(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,Gg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=E,this}let dx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mx(e),t.set(e,n)),n}}class mx{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}}function gx(i){return i===Ci||i===Gr||i===Hr}function xx(i,e,t,n,s,r){const a=new fl,o=new px,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,P,b,L,B){const I=b.fog,F=L.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||q,V),X=ie&&ie.mapping===Jr?ie.image.height:null,Q=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Le=te!==void 0?te.length:0;let we=0;F.morphAttributes.position!==void 0&&(we=1),F.morphAttributes.normal!==void 0&&(we=2),F.morphAttributes.color!==void 0&&(we=3);let rt,Je,nt,Z;if(Q){const xt=In[Q];rt=xt.vertexShader,Je=xt.fragmentShader}else{rt=x.vertexShader,Je=x.fragmentShader;const xt=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,xt,lt),nt=xt.id,Z=lt.id}const j=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,Me=L.isBatchedMesh===!0,ke=!!x.map,ht=!!x.matcap,ee=!!ie,se=!!x.aoMap,ae=!!x.lightMap,oe=!!x.bumpMap&&x.wireframe===!1,ue=!!x.normalMap,Oe=!!x.displacementMap,Ue=!!x.emissiveMap,Ge=!!x.metalnessMap,Ve=!!x.roughnessMap,N=x.anisotropy>0,ot=x.clearcoat>0,Qe=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,H=x.transmission>0,Y=N&&!!x.anisotropyMap,ce=ot&&!!x.clearcoatMap,he=ot&&!!x.clearcoatNormalMap,$=ot&&!!x.clearcoatRoughnessMap,J=_&&!!x.iridescenceMap,fe=_&&!!x.iridescenceThicknessMap,De=z&&!!x.sheenColorMap,ge=z&&!!x.sheenRoughnessMap,de=!!x.specularMap,Ie=!!x.specularColorMap,Fe=!!x.specularIntensityMap,qe=H&&!!x.transmissionMap,O=H&&!!x.thicknessMap,pe=!!x.gradientMap,K=!!x.alphaMap,me=x.alphaTest>0,Se=!!x.alphaHash,ne=!!x.extensions;let Ne=Fn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const Ce={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:Je,defines:x.defines,customVertexShaderID:nt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Me,batchingColor:Me&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:ht,envMap:ee,envMapMode:ee&&ie.mapping,envMapCubeUVHeight:X,aoMap:se,lightMap:ae,bumpMap:oe,normalMap:ue,displacementMap:Oe,emissiveMap:Ue,normalMapObjectSpace:ue&&x.normalMapType===tf,normalMapTangentSpace:ue&&x.normalMapType===Vo,packedNormalMap:ue&&x.normalMapType===Vo&&gx(x.normalMap.format),metalnessMap:Ge,roughnessMap:Ve,anisotropy:N,anisotropyMap:Y,clearcoat:ot,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:$,dispersion:Qe,retroreflection:R,iridescence:_,iridescenceMap:J,iridescenceThicknessMap:fe,sheen:z,sheenColorMap:De,sheenRoughnessMap:ge,specularMap:de,specularColorMap:Ie,specularIntensityMap:Fe,transmission:H,transmissionMap:qe,thicknessMap:O,gradientMap:pe,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:K,alphaTest:me,alphaHash:Se,combine:x.combine,mapUv:ke&&m(x.map.channel),aoMapUv:se&&m(x.aoMap.channel),lightMapUv:ae&&m(x.lightMap.channel),bumpMapUv:oe&&m(x.bumpMap.channel),normalMapUv:ue&&m(x.normalMap.channel),displacementMapUv:Oe&&m(x.displacementMap.channel),emissiveMapUv:Ue&&m(x.emissiveMap.channel),metalnessMapUv:Ge&&m(x.metalnessMap.channel),roughnessMapUv:Ve&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:ce&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(x.sheenRoughnessMap.channel),specularMapUv:de&&m(x.specularMap.channel),specularColorMapUv:Ie&&m(x.specularColorMap.channel),specularIntensityMapUv:Fe&&m(x.specularIntensityMap.channel),transmissionMapUv:qe&&m(x.transmissionMap.channel),thicknessMapUv:O&&m(x.thicknessMap.channel),alphaMapUv:K&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ue||N),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ke||K),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:we,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){const T=d[x.type];let P;if(T){const b=In[T];P=Td.clone(b.uniforms)}else P=x.uniforms;return P}function y(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new fx(i,T,x,s),c.push(P),h.set(T,P)),P}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:A,acquireProgram:y,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function _x(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function th(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,v,g,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=m,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=p),e++,M}function l(u,d,m,v,g,p,M){M.reversedDepth===!0&&(g=-g);const A=o(u,d,m,v,g,p);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):t.push(A)}function c(u,d,m,v,g,p){const M=o(u,d,m,v,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,d){t.length>1&&t.sort(u||vx),n.length>1&&n.sort(d||th),s.length>1&&s.sort(d||th)}function f(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function yx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new nh,i.set(n,[a])):s>=r.length?(a=new nh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Mx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let bx=0;function Ex(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wx(i){const e=new Sx,t=Mx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new st,a=new st;function o(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,M=0,A=0,y=0,w=0,E=0,C=0,x=0,T=0,P=0;c.sort(Ex);for(let L=0,B=c.length;L<B;L++){const I=c[L],F=I.color,q=I.intensity,V=I.distance;let ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ci?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=F.r*q,f+=F.g*q,u+=F.b*q;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],q);P++}else if(I.isSunLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=te,n.sunShadowMap[m]=ie;const Le=Q.getViewportCount();for(let we=0;we<Le;we++)n.sunShadowMatrix[v+we]=Q.getMatrix(we),n.sunShadowCascade[v+we]=Q._cascadeData[we];v+=Le,m++}n.sun[d]=X,d++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=ie,n.directionalShadowMatrix[g]=I.shadow.matrix,w++}n.directional[g]=X,g++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(F).multiplyScalar(q),X.distance=V,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[M]=X;const Q=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,Q.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[M]=Q.matrix,I.castShadow){const te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,n.spotShadow[M]=te,n.spotShadowMap[M]=ie,C++}M++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(F).multiplyScalar(q),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=X,A++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const Q=I.shadow,te=t.get(I);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=X,p++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(q),X.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[y]=X,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const b=n.hash;(b.sunLength!==d||b.directionalLength!==g||b.pointLength!==p||b.spotLength!==M||b.rectAreaLength!==A||b.hemiLength!==y||b.numSunShadows!==m||b.numDirectionalShadows!==w||b.numPointShadows!==E||b.numSpotShadows!==C||b.numSpotMaps!==x||b.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=A,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,b.sunLength=d,b.directionalLength=g,b.pointLength=p,b.spotLength=M,b.rectAreaLength=A,b.hemiLength=y,b.numSunShadows=m,b.numDirectionalShadows=w,b.numPointShadows=E,b.numSpotShadows=C,b.numSpotMaps=x,b.numLightProbes=P,n.version=bx++)}function l(c,h){let f=0,u=0,d=0,m=0,v=0,g=0;const p=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){const y=c[M];if(y.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),f++}else if(y.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(y.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function ih(i){const e=new wx(i),t=[],n=[],s=[];function r(u){f.camera=u,t.length=0,n.length=0,s.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Tx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ih(i),e.set(s,[o])):r>=a.length?(o=new ih(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rx=`uniform sampler2D shadow_pass;
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
}`,Cx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Px=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],sh=new st,Ms=new D,Ja=new D;function Lx(i,e,t){let n=new pl;const s=new re,r=new re,a=new yt,o=new Ld,l=new Dd,c={},h=t.maxTextureSize,f={[Ai]:Kt,[Kt]:Ai,[Nn]:Nn},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Ax,fragmentShader:Rx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new bt;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let p=this.type;this.render=function(E,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Du&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Zn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=p!==this.type;B&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=E.length;I<F;I++){const q=E[I],V=q.shadow;if(V===void 0){ze("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();s.multiply(ie),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||B===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Es){if(q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Tn(s.x,s.y,{format:Ci,type:zn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new Vs(s.x,s.y,Mn),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=Jn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt}else q.isPointLight?(V.map=new jh(s.x),V.map.depthTexture=new Vf(s.x,Bn)):(V.map=new Tn(s.x,s.y),V.map.depthTexture=new Vs(s.x,s.y,Bn)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=Jn,this.type===Cs?(V.map.depthTexture.compareFunction=X?hl:cl,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,x);for(let te=0;te<Q;te++){const Le=V.getCamera(te);if(q.isPointLight){const we=V.camera,rt=V.matrix,Je=q.distance||we.far;Je!==we.far&&(we.far=Je,we.updateProjectionMatrix()),Ms.setFromMatrixPosition(q.matrixWorld),we.position.copy(Ms),Ja.copy(we.position),Ja.add(Cx[te]),we.up.copy(Px[te]),we.lookAt(Ja),we.updateMatrixWorld(),rt.makeTranslation(-Ms.x,-Ms.y,-Ms.z),sh.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),V._frustum.setFromProjectionMatrix(sh,we.coordinateSystem,we.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,te),i.clear();else{te===0&&(i.setRenderTarget(V.map),i.clear());const we=V.getViewport(te);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),L.viewport(a)}n=V.getFrustum(te),y(C,x,Le,q,this.type)}V.isPointLightShadow!==!0&&this.type===Es&&M(V,x),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,P,b)};function M(E,C){const x=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Tn(s.x,s.y,{format:Ci,type:zn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,x,u,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,x,d,v,null)}function A(E,C,x,T){let P=null;const b=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)P=b;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=P.uuid,B=C.uuid;let I=c[L];I===void 0&&(I={},c[L]=I);let F=I[B];F===void 0&&(F=P.clone(),I[B]=F,C.addEventListener("dispose",w)),P=F}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Es?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=i.properties.get(P);L.light=x}return P}function y(E,C,x,T,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Es)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const B=e.update(E),I=E.material;if(Array.isArray(I)){const F=B.groups;for(let q=0,V=F.length;q<V;q++){const ie=F[q],X=I[ie.materialIndex];if(X&&X.visible){const Q=A(E,X,T,P);E.onBeforeShadow(i,E,C,x,B,Q,ie),i.renderBufferDirect(x,null,B,Q,E,ie),E.onAfterShadow(i,E,C,x,B,Q,ie)}}}else if(I.visible){const F=A(E,I,T,P);E.onBeforeShadow(i,E,C,x,B,F,null),i.renderBufferDirect(x,null,B,F,E,null),E.onAfterShadow(i,E,C,x,B,F,null)}}const L=E.children;for(let B=0,I=L.length;B<I;B++)y(L[B],C,x,T,P)}function w(E){E.target.removeEventListener("dispose",w);for(const x in c){const T=c[x],P=E.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Dx(i,e){function t(){let O=!1;const pe=new yt;let K=null;const me=new yt(0,0,0,0);return{setMask:function(Se){K!==Se&&!O&&(i.colorMask(Se,Se,Se,Se),K=Se)},setLocked:function(Se){O=Se},setClear:function(Se,ne,Ne,Ce,xt){xt===!0&&(Se*=Ce,ne*=Ce,Ne*=Ce),pe.set(Se,ne,Ne,Ce),me.equals(pe)===!1&&(i.clearColor(Se,ne,Ne,Ce),me.copy(pe))},reset:function(){O=!1,K=null,me.set(-1,0,0,0)}}}function n(){let O=!1,pe=!1,K=null,me=null,Se=null;return{setReversed:function(ne){if(pe!==ne){const Ne=e.get("EXT_clip_control");ne?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),pe=ne;const Ce=Se;Se=null,this.setClear(Ce)}},getReversed:function(){return pe},setTest:function(ne){ne?j(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ne){K!==ne&&!O&&(i.depthMask(ne),K=ne)},setFunc:function(ne){if(pe&&(ne=pf[ne]),me!==ne){switch(ne){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ne}},setLocked:function(ne){O=ne},setClear:function(ne){Se!==ne&&(Se=ne,pe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){O=!1,K=null,me=null,Se=null,pe=!1}}}function s(){let O=!1,pe=null,K=null,me=null,Se=null,ne=null,Ne=null,Ce=null,xt=null;return{setTest:function(lt){O||(lt?j(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!O&&(i.stencilMask(lt),pe=lt)},setFunc:function(lt,gn,Rn){(K!==lt||me!==gn||Se!==Rn)&&(i.stencilFunc(lt,gn,Rn),K=lt,me=gn,Se=Rn)},setOp:function(lt,gn,Rn){(ne!==lt||Ne!==gn||Ce!==Rn)&&(i.stencilOp(lt,gn,Rn),ne=lt,Ne=gn,Ce=Rn)},setLocked:function(lt){O=lt},setClear:function(lt){xt!==lt&&(i.clearStencil(lt),xt=lt)},reset:function(){O=!1,pe=null,K=null,me=null,Se=null,ne=null,Ne=null,Ce=null,xt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,A=null,y=null,w=null,E=null,C=null,x=new He(0,0,0),T=0,P=!1,b=null,L=null,B=null,I=null,F=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ie=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ie>=2);let Q=null,te={};const Le=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),rt=new yt().fromArray(Le),Je=new yt().fromArray(we);function nt(O,pe,K,me){const Se=new Uint8Array(4),ne=i.createTexture();i.bindTexture(O,ne),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<K;Ne++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(pe+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return ne}const Z={};Z[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Bs),oe(!1),ue(Xl),j(i.CULL_FACE),se(Zn);function j(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function _e(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Be(O,pe){return u[O]!==pe?(i.bindFramebuffer(O,pe),u[O]=pe,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(O,pe){let K=m,me=!1;if(O){K=d.get(pe),K===void 0&&(K=[],d.set(pe,K));const Se=O.textures;if(K.length!==Se.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ne=Se.length;ne<Ne;ne++)K[ne]=i.COLOR_ATTACHMENT0+ne;K.length=Se.length,me=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,me=!0);me&&i.drawBuffers(K)}function ke(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const ht={[Qi]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};ht[Ou]=i.MIN,ht[Fu]=i.MAX;const ee={[Bu]:i.ZERO,[zu]:i.ONE,[ku]:i.SRC_COLOR,[mh]:i.SRC_ALPHA,[qu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[gh]:i.ONE_MINUS_SRC_ALPHA,[Xu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function se(O,pe,K,me,Se,ne,Ne,Ce,xt,lt){if(O===Zn){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),O!==Iu){if(O!==p||lt!==P){if((M!==Qi||w!==Qi)&&(i.blendEquation(i.FUNC_ADD),M=Qi,w=Qi),lt)switch(O){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",O);break}A=null,y=null,E=null,C=null,x.set(0,0,0),T=0,p=O,P=lt}return}Se=Se||pe,ne=ne||K,Ne=Ne||me,(pe!==M||Se!==w)&&(i.blendEquationSeparate(ht[pe],ht[Se]),M=pe,w=Se),(K!==A||me!==y||ne!==E||Ne!==C)&&(i.blendFuncSeparate(ee[K],ee[me],ee[ne],ee[Ne]),A=K,y=me,E=ne,C=Ne),(Ce.equals(x)===!1||xt!==T)&&(i.blendColor(Ce.r,Ce.g,Ce.b,xt),x.copy(Ce),T=xt),p=O,P=!1}function ae(O,pe){O.side===Nn?_e(i.CULL_FACE):j(i.CULL_FACE);let K=O.side===Kt;pe&&(K=!K),oe(K),O.blending===Ps&&O.transparent===!1?se(Zn):se(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const me=O.stencilWrite;o.setTest(me),me&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function ue(O){O!==Pu?(j(i.CULL_FACE),O!==L&&(O===Xl?i.cullFace(i.BACK):O===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),L=O}function Oe(O){O!==B&&(V&&i.lineWidth(O),B=O)}function Ue(O,pe,K){O?(j(i.POLYGON_OFFSET_FILL),(I!==pe||F!==K)&&(I=pe,F=K,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,K))):_e(i.POLYGON_OFFSET_FILL)}function Ge(O){O?j(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Ve(O){O===void 0&&(O=i.TEXTURE0+q-1),Q!==O&&(i.activeTexture(O),Q=O)}function N(O,pe,K){K===void 0&&(Q===null?K=i.TEXTURE0+q-1:K=Q);let me=te[K];me===void 0&&(me={type:void 0,texture:void 0},te[K]=me),(me.type!==O||me.texture!==pe)&&(Q!==K&&(i.activeTexture(K),Q=K),i.bindTexture(O,pe||Z[O]),me.type=O,me.texture=pe)}function ot(){const O=te[Q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function z(){try{i.texSubImage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function ce(){try{i.texStorage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function he(){try{i.texStorage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function $(){try{i.texImage2D(...arguments)}catch(O){tt("WebGLState:",O)}}function J(){try{i.texImage3D(...arguments)}catch(O){tt("WebGLState:",O)}}function fe(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function De(O,pe){f[O]!==pe&&(i.pixelStorei(O,pe),f[O]=pe)}function ge(O){rt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function de(O){Je.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Je.copy(O))}function Ie(O,pe){let K=c.get(pe);K===void 0&&(K=new WeakMap,c.set(pe,K));let me=K.get(O);me===void 0&&(me=i.getUniformBlockIndex(pe,O.name),K.set(O,me))}function Fe(O,pe){const me=c.get(pe).get(O);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,O.__bindingPointIndex),l.set(pe,me))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,te={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,M=null,A=null,y=null,w=null,E=null,C=null,x=new He(0,0,0),T=0,P=!1,b=null,L=null,B=null,I=null,F=null,rt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:_e,bindFramebuffer:Be,drawBuffers:Me,useProgram:ke,setBlending:se,setMaterial:ae,setFlipSided:oe,setCullFace:ue,setLineWidth:Oe,setPolygonOffset:Ue,setScissorTest:Ge,activeTexture:Ve,bindTexture:N,unbindTexture:ot,compressedTexImage2D:Qe,compressedTexImage3D:R,texImage2D:$,texImage3D:J,pixelStorei:De,getParameter:fe,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:ce,texStorage3D:he,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:ge,viewport:de,reset:qe}}function Ix(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,_){return m?new OffscreenCanvas(R,_):Hs("canvas")}function g(R,_,z){let H=1;const Y=Qe(R);if((Y.width>z||Y.height>z)&&(H=z/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(H*Y.width),he=Math.floor(H*Y.height);u===void 0&&(u=v(ce,he));const $=_?v(ce,he):u;return $.width=ce,$.height=he,$.getContext("2d").drawImage(R,0,0,ce,he),ze("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ce+"x"+he+")."),$}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,_,z,H,Y,ce=!1){if(R!==null){if(i[R]!==void 0)return i[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;H&&(he=e.get("EXT_texture_norm16"),he||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&he&&($=he.R16_EXT),z===i.SHORT&&he&&($=he.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),_===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&he&&($=he.RG16_EXT),z===i.SHORT&&he&&($=he.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&he&&($=he.RGB16_EXT),z===i.SHORT&&he&&($=he.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){const J=ce?Wr:et.getTransfer(Y);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=J===ut?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&he&&($=he.RGBA16_EXT),z===i.SHORT&&he&&($=he.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(R,_){let z;return R?_===null||_===Bn||_===ks?z=i.DEPTH24_STENCIL8:_===Mn?z=i.DEPTH32F_STENCIL8:_===zs&&(z=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Bn||_===ks?z=i.DEPTH_COMPONENT24:_===Mn?z=i.DEPTH_COMPONENT32F:_===zs&&(z=i.DEPTH_COMPONENT16),z}function E(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==Xt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){const _=R.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(R){const _=R.target;_.removeEventListener("dispose",x),b(_)}function T(R){const _=n.get(R);if(_.__webglInit===void 0)return;const z=R.source,H=d.get(z);if(H){const Y=H[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(R),Object.keys(H).length===0&&d.delete(z)}n.remove(R)}function P(R){const _=n.get(R);i.deleteTexture(_.__webglTexture);const z=R.source,H=d.get(z);delete H[_.__cacheKey],a.memory.textures--}function b(R){const _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Y=0;Y<_.__webglFramebuffer[H].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[H][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=R.textures;for(let H=0,Y=z.length;H<Y;H++){const ce=n.get(z[H]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(R)}let L=0;function B(){L=0}function I(){return L}function F(R){L=R}function q(){const R=L;return R>=s.maxTextures&&ze("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function V(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function ie(R,_){const z=n.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const H=R.image;if(H===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(z,R,_);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function X(R,_){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){_e(z,R,_);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function Q(R,_){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){_e(z,R,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function te(R,_){const z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){Be(z,R,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const Le={[kr]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},we={[zt]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},rt={[sf]:i.NEVER,[cf]:i.ALWAYS,[rf]:i.LESS,[cl]:i.LEQUAL,[af]:i.EQUAL,[hl]:i.GEQUAL,[of]:i.GREATER,[lf]:i.NOTEQUAL};function Je(R,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Xt||_.magFilter===ma||_.magFilter===tr||_.magFilter===Ei||_.minFilter===Xt||_.minFilter===ma||_.minFilter===tr||_.minFilter===Ei)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Le[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Le[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Le[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,we[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,rt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===zt||_.minFilter!==tr&&_.minFilter!==Ei||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function nt(R,_){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));const H=_.source;let Y=d.get(H);Y===void 0&&(Y={},d.set(H,Y));const ce=V(_);if(ce!==R.__cacheKey){Y[ce]===void 0&&(Y[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[ce].usedTimes++;const he=Y[R.__cacheKey];he!==void 0&&(Y[R.__cacheKey].usedTimes--,he.usedTimes===0&&P(_)),R.__cacheKey=ce,R.__webglTexture=Y[ce].texture}return z}function Z(R,_,z){return Math.floor(Math.floor(R/z)/_)}function j(R,_,z,H){const ce=R.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,H,_.data);else{ce.sort((De,ge)=>De.start-ge.start);let he=0;for(let De=1;De<ce.length;De++){const ge=ce[he],de=ce[De],Ie=ge.start+ge.count,Fe=Z(de.start,_.width,4),qe=Z(ge.start,_.width,4);de.start<=Ie+1&&Fe===qe&&Z(de.start+de.count-1,_.width,4)===Fe?ge.count=Math.max(ge.count,de.start+de.count-ge.start):(++he,ce[he]=de)}ce.length=he+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let De=0,ge=ce.length;De<ge;De++){const de=ce[De],Ie=Math.floor(de.start/4),Fe=Math.ceil(de.count/4),qe=Ie%_.width,O=Math.floor(Ie/_.width),pe=Fe,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,qe,O,pe,K,z,H,_.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function _e(R,_,z){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);const Y=nt(R,_),ce=_.source;t.bindTexture(H,R.__webglTexture,i.TEXTURE0+z);const he=n.get(ce);if(ce.version!==he.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const K=et.getPrimaries(et.workingColorSpace),me=_.colorSpace===oi?null:et.getPrimaries(_.colorSpace),Se=_.colorSpace===oi||K===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let J=g(_.image,!1,s.maxTextureSize);J=ot(_,J);const fe=r.convert(_.format,_.colorSpace),De=r.convert(_.type);let ge=y(_.internalFormat,fe,De,_.normalized,_.colorSpace,_.isVideoTexture);Je(H,_);let de;const Ie=_.mipmaps,Fe=_.isVideoTexture!==!0,qe=he.__version===void 0||Y===!0,O=ce.dataReady,pe=E(_,J);if(_.isDepthTexture)ge=w(_.format===wi,_.type),qe&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,ge,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,ge,J.width,J.height,0,fe,De,null));else if(_.isDataTexture)if(Ie.length>0){Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Ie[0].width,Ie[0].height);for(let K=0,me=Ie.length;K<me;K++)de=Ie[K],Fe?O&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,de.width,de.height,fe,De,de.data):t.texImage2D(i.TEXTURE_2D,K,ge,de.width,de.height,0,fe,De,de.data);_.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(i.TEXTURE_2D,pe,ge,J.width,J.height),O&&j(_,J,fe,De)):t.texImage2D(i.TEXTURE_2D,0,ge,J.width,J.height,0,fe,De,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,Ie[0].width,Ie[0].height,J.depth);for(let K=0,me=Ie.length;K<me;K++)if(de=Ie[K],_.format!==bn)if(fe!==null)if(Fe){if(O)if(_.layerUpdates.size>0){const Se=Oc(de.width,de.height,_.format,_.type);for(const ne of _.layerUpdates){const Ne=de.data.subarray(ne*Se/de.data.BYTES_PER_ELEMENT,(ne+1)*Se/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ne,de.width,de.height,1,fe,Ne)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,J.depth,fe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ge,de.width,de.height,J.depth,0,de.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,de.width,de.height,J.depth,fe,De,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,ge,de.width,de.height,J.depth,0,fe,De,de.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Ie[0].width,Ie[0].height);for(let K=0,me=Ie.length;K<me;K++)de=Ie[K],_.format!==bn?fe!==null?Fe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,K,ge,de.width,de.height,0,de.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?O&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,de.width,de.height,fe,De,de.data):t.texImage2D(i.TEXTURE_2D,K,ge,de.width,de.height,0,fe,De,de.data)}else if(_.isDataArrayTexture)if(Fe){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,J.width,J.height,J.depth),O)if(_.layerUpdates.size>0){const K=Oc(J.width,J.height,_.format,_.type);for(const me of _.layerUpdates){const Se=J.data.subarray(me*K/J.data.BYTES_PER_ELEMENT,(me+1)*K/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,J.width,J.height,1,fe,De,Se)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,De,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,J.width,J.height,J.depth,0,fe,De,J.data);else if(_.isData3DTexture)Fe?(qe&&t.texStorage3D(i.TEXTURE_3D,pe,ge,J.width,J.height,J.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,De,J.data)):t.texImage3D(i.TEXTURE_3D,0,ge,J.width,J.height,J.depth,0,fe,De,J.data);else if(_.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(i.TEXTURE_2D,pe,ge,J.width,J.height);else{let K=J.width,me=J.height;for(let Se=0;Se<pe;Se++)t.texImage2D(i.TEXTURE_2D,Se,ge,K,me,0,fe,De,null),K>>=1,me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),J.parentNode!==K){K.appendChild(J),f.add(_),K.onpaint=me=>{const Se=me.changedElements;for(const ne of f)Se.includes(ne.image)&&(ne.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const Se=i.RGBA,ne=i.RGBA,Ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ne,Ne,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&qe){const K=Qe(Ie[0]);t.texStorage2D(i.TEXTURE_2D,pe,ge,K.width,K.height)}for(let K=0,me=Ie.length;K<me;K++)de=Ie[K],Fe?O&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,fe,De,de):t.texImage2D(i.TEXTURE_2D,K,ge,fe,De,de);_.generateMipmaps=!1}else if(Fe){if(qe){const K=Qe(J);t.texStorage2D(i.TEXTURE_2D,pe,ge,K.width,K.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,De,J)}else t.texImage2D(i.TEXTURE_2D,0,ge,fe,De,J);p(_)&&M(H),he.__version=ce.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Be(R,_,z){if(_.image.length!==6)return;const H=nt(R,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const ce=n.get(Y);if(Y.version!==ce.__version||H===!0){t.activeTexture(i.TEXTURE0+z);const he=et.getPrimaries(et.workingColorSpace),$=_.colorSpace===oi?null:et.getPrimaries(_.colorSpace),J=_.colorSpace===oi||he===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const fe=_.isCompressedTexture||_.image[0].isCompressedTexture,De=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!fe&&!De?ge[ne]=g(_.image[ne],!0,s.maxCubemapSize):ge[ne]=De?_.image[ne].image:_.image[ne],ge[ne]=ot(_,ge[ne]);const de=ge[0],Ie=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type),qe=y(_.internalFormat,Ie,Fe,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,pe=ce.__version===void 0||H===!0,K=Y.dataReady;let me=E(_,de);Je(i.TEXTURE_CUBE_MAP,_);let Se;if(fe){O&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,de.width,de.height);for(let ne=0;ne<6;ne++){Se=ge[ne].mipmaps;for(let Ne=0;Ne<Se.length;Ne++){const Ce=Se[Ne];_.format!==bn?Ie!==null?O?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne,qe,Ce.width,Ce.height,0,Ce.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne,0,0,Ce.width,Ce.height,Ie,Fe,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne,qe,Ce.width,Ce.height,0,Ie,Fe,Ce.data)}}}else{if(Se=_.mipmaps,O&&pe){Se.length>0&&me++;const ne=Qe(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(De){O?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,Ie,Fe,ge[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,ge[ne].width,ge[ne].height,0,Ie,Fe,ge[ne].data);for(let Ne=0;Ne<Se.length;Ne++){const xt=Se[Ne].image[ne].image;O?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne+1,0,0,xt.width,xt.height,Ie,Fe,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne+1,qe,xt.width,xt.height,0,Ie,Fe,xt.data)}}else{O?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Fe,ge[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,qe,Ie,Fe,ge[ne]);for(let Ne=0;Ne<Se.length;Ne++){const Ce=Se[Ne];O?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne+1,0,0,Ie,Fe,Ce.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ne+1,qe,Ie,Fe,Ce.image[ne])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),ce.__version=Y.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Me(R,_,z,H,Y,ce){const he=r.convert(z.format,z.colorSpace),$=r.convert(z.type),J=y(z.internalFormat,he,$,z.normalized,z.colorSpace),fe=n.get(_),De=n.get(z);if(De.__renderTarget=_,!fe.__hasExternalTextures){const ge=Math.max(1,_.width>>ce),de=Math.max(1,_.height>>ce);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,ce,J,ge,de,_.depth,0,he,$,null):t.texImage2D(Y,ce,J,ge,de,0,he,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Y,De.__webglTexture,0,Ge(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Y,De.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(R,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){const H=_.depthTexture,Y=H&&H.isDepthTexture?H.type:null,ce=w(_.stencilBuffer,Y),he=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(_),ce,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(_),ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ce,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,R)}else{const H=_.textures;for(let Y=0;Y<H.length;Y++){const ce=H[Y],he=r.convert(ce.format,ce.colorSpace),$=r.convert(ce.type),J=y(ce.internalFormat,he,$,ce.normalized,ce.colorSpace);Ve(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge(_),J,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge(_),J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(R,_,z){const H=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Je(i.TEXTURE_CUBE_MAP,_.depthTexture);const fe=r.convert(_.depthTexture.format),De=r.convert(_.depthTexture.type);let ge;_.depthTexture.format===Jn?ge=i.DEPTH_COMPONENT24:_.depthTexture.format===wi&&(ge=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ge,_.width,_.height,0,fe,De,null)}}else ie(_.depthTexture,0);const ce=Y.__webglTexture,he=Ge(_),$=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,J=_.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Jn)Ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,ce,0);else if(_.depthTexture.format===wi)Ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,J,$,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(R){const _=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=H}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)ht(_.__webglFramebuffer[H],R,H);else{const H=R.texture.mipmaps;H&&H.length>0?ht(_.__webglFramebuffer[0],R,0):ht(_.__webglFramebuffer,R,0)}else if(z){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),ke(_.__webglDepthbuffer[H],R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ke(_.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(R,_,z){const H=n.get(R);_!==void 0&&Me(H.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ee(R)}function ae(R){const _=R.texture,z=n.get(R),H=n.get(_);R.addEventListener("dispose",x);const Y=R.textures,ce=R.isWebGLCubeRenderTarget===!0,he=Y.length>1;if(he||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let J=0;J<_.mipmaps.length;J++)z.__webglFramebuffer[$][J]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(he)for(let $=0,J=Y.length;$<J;$++){const fe=n.get(Y[$]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ve(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){const J=Y[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const fe=r.convert(J.format,J.colorSpace),De=r.convert(J.type),ge=y(J.internalFormat,fe,De,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),de=Ge(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Je(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Me(z.__webglFramebuffer[$][J],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Me(z.__webglFramebuffer[$],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let $=0,J=Y.length;$<J;$++){const fe=Y[$],De=n.get(fe);let ge=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,De.__webglTexture),Je(ge,fe),Me(z.__webglFramebuffer,R,fe,i.COLOR_ATTACHMENT0+$,ge,0),p(fe)&&M(ge)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,H.__webglTexture),Je($,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Me(z.__webglFramebuffer[J],R,_,i.COLOR_ATTACHMENT0,$,J);else Me(z.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,$,0);p(_)&&M($),t.unbindTexture()}R.depthBuffer&&ee(R)}function oe(R){const _=R.textures;for(let z=0,H=_.length;z<H;z++){const Y=_[z];if(p(Y)){const ce=A(R),he=n.get(Y).__webglTexture;t.bindTexture(ce,he),M(ce),t.unbindTexture()}}}const ue=[],Oe=[];function Ue(R){if(R.samples>0){if(Ve(R)===!1){const _=R.textures,z=R.width,H=R.height;let Y=i.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(R),$=_.length>1;if($)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const De=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,Y,i.NEAREST),l===!0&&(ue.length=0,Oe.length=0,ue.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ue.push(ce),Oe.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const De=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ge(R){return Math.min(s.maxSamples,R.samples)}function Ve(R){const _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function ot(R,_){const z=R.colorSpace,H=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Vr&&z!==oi&&(et.getTransfer(z)===ut?(H!==bn||Y!==ln)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",z)),_}function Qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=se,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Nx(i,e){function t(n,s=oi){let r;const a=et.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Th)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===Bn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ph)return i.RGB;if(n===bn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===rl)return i.RED;if(n===al)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===Nr||n===Ur||n===Or||n===Fr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===_o||n===vo||n===yo||n===So||n===Gr||n===Mo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===_o)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===So)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bo||n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===No||n===Uo||n===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Bo||n===zo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ko||n===Go||n===Hr||n===Ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
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

}`;class Fx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:Ux,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends mi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new Fx,p={},M=t.getContextAttributes();let A=null,y=null;const w=[],E=[],C=new re;let x=null,T=null;const P=new on;P.viewport=new yt;const b=new on;b.viewport=new yt;const L=[P,b],B=new Wd;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=w[Z];return j===void 0&&(j=new ba,w[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=w[Z];return j===void 0&&(j=new ba,w[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=w[Z];return j===void 0&&(j=new ba,w[Z]=j),j.getHandSpace()};function q(Z){const j=E.indexOf(Z.inputSource);if(j===-1)return;const _e=w[j];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ie);for(let Z=0;Z<w.length;Z++){const j=E[Z];j!==null&&(E[Z]=null,w[Z].disconnect(j))}I=null,F=null,g.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(A),d=null,u=null,f=null,s=null,y=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ie),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Be=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?wi:Jn,Be=M.stencil?ks:Bn);const ke={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Tn(u.textureWidth,u.textureHeight,{format:bn,type:ln,depthTexture:new Vs(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Tn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(Z){for(let j=0;j<Z.removed.length;j++){const _e=Z.removed[j],Be=E.indexOf(_e);Be>=0&&(E[Be]=null,w[Be].disconnect(_e))}for(let j=0;j<Z.added.length;j++){const _e=Z.added[j];let Be=E.indexOf(_e);if(Be===-1){for(let ke=0;ke<w.length;ke++)if(ke>=E.length){E.push(_e),Be=ke;break}else if(E[ke]===null){E[ke]=_e,Be=ke;break}if(Be===-1)break}const Me=w[Be];Me&&Me.connect(_e)}}const X=new D,Q=new D;function te(Z,j,_e){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Be=X.distanceTo(Q),Me=j.projectionMatrix.elements,ke=_e.projectionMatrix.elements,ht=Me[14]/(Me[10]-1),ee=Me[14]/(Me[10]+1),se=(Me[9]+1)/Me[5],ae=(Me[9]-1)/Me[5],oe=(Me[8]-1)/Me[0],ue=(ke[8]+1)/ke[0],Oe=ht*oe,Ue=ht*ue,Ge=Be/(-oe+ue),Ve=Ge*-oe;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ve),Z.translateZ(Ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const N=ht+Ge,ot=ee+Ge,Qe=Oe-Ve,R=Ue+(Be-Ve),_=se*ee/ot*N,z=ae*ee/ot*N;Z.projectionMatrix.makePerspective(Qe,R,_,z,N,ot),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Le(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,_e=Z.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),B.near=b.near=P.near=j,B.far=b.far=P.far=_e,(I!==B.near||F!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,F=B.far),B.layers.mask=Z.layers.mask|6,P.layers.mask=B.layers.mask&-5,b.layers.mask=B.layers.mask&-3;const Be=Z.parent,Me=B.cameras;Le(B,Be);for(let ke=0;ke<Me.length;ke++)Le(Me[ke],Be);Me.length===2?te(B,P,b):B.projectionMatrix.copy(P.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),we(Z,B,Be)};function we(Z,j,_e){_e===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let rt=null;function Je(Z,j){if(h=j.getViewerPose(c||a),m=j,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Be=!1;_e.length!==B.cameras.length&&(B.cameras.length=0,Be=!0);for(let ee=0;ee<_e.length;ee++){const se=_e[ee];let ae=null;if(d!==null)ae=d.getViewport(se);else{const ue=f.getViewSubImage(u,se);ae=ue.viewport,ee===0&&(e.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(y))}let oe=L[ee];oe===void 0&&(oe=new on,oe.layers.enable(ee),oe.viewport=new yt,L[ee]=oe),oe.matrix.fromArray(se.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(se.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),ee===0&&(B.matrix.copy(oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Be===!0&&B.cameras.push(oe)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const ee=f.getDepthInformation(_e[0]);ee&&ee.isValid&&ee.texture&&g.init(ee,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let ee=0;ee<_e.length;ee++){const se=_e[ee].camera;if(se){let ae=p[se];ae||(ae=new zh,p[se]=ae);const oe=f.getCameraImage(se);ae.sourceTexture=oe}}}}for(let _e=0;_e<w.length;_e++){const Be=E[_e],Me=w[_e];Be!==null&&Me!==void 0&&Me.update(Be,j,c||a)}rt&&rt(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}const nt=new Jh;nt.setAnimationLoop(Je),this.setAnimationLoop=function(Z){rt=Z},this.dispose=function(){}}}const zx=new st,su=new We;su.set(-1,0,0,0,1,0,0,0,1);function kx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$h(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),A=M.envMap,y=M.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(zx.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(su),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=A*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const E=w.program;n.uniformBlockBinding(y,E)}function c(y,w){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",M));const C=w.program;n.updateUBOMapping(y,C);const x=e.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){const w=f();y.__bindingPointIndex=w;const E=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const w=s[y.id],E=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,T=E.length;x<T;x++){const P=E[x];if(Array.isArray(P))for(let b=0,L=P.length;b<L;b++)d(P[b],x,b,C);else d(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,w,E,C){if(v(y,w,E,C)===!0){const x=y.__offset,T=y.value;if(Array.isArray(T)){let P=0;for(let b=0;b<T.length;b++){const L=T[b],B=p(L);m(L,y.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function m(y,w,E){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,E)}function v(y,w,E,C){const x=y.value,T=w+"_"+E;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{const P=C[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(y){const w=y.uniforms;let E=0;const C=16;for(let T=0,P=w.length;T<P;T++){const b=Array.isArray(w[T])?w[T]:[w[T]];for(let L=0,B=b.length;L<B;L++){const I=b[L],F=Array.isArray(I.value)?I.value:[I.value];for(let q=0,V=F.length;q<V;q++){const ie=F[q],X=p(ie),Q=E%C,te=Q%X.boundary,Le=Q+te;E+=te,Le!==0&&C-Le<X.storage&&(E+=C-Le),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=X.storage}}}const x=E%C;return x>0&&(E+=C-x),y.__size=E,y.__cache={},this}function p(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){const w=y.target;w.removeEventListener("dispose",M);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}const Hx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function Vx(){return Ln===null&&(Ln=new Oh(Hx,16,16,Ci,zn),Ln.name="DFG_LUT",Ln.minFilter=Xt,Ln.magFilter=Xt,Ln.wrapS=qn,Ln.wrapT=qn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class Wx{constructor(e={}){const{canvas:t=ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ln}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=d,g=new Set([ll,ol,al]),p=new Set([ln,Bn,zs,ks,il,sl]),M=new Uint32Array(4),A=new Int32Array(4),y=new D;let w=null,E=null;const C=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let b=!1,L=null,B=null,I=null,F=null;this._outputColorSpace=Zt;let q=0,V=0,ie=null,X=-1,Q=null;const te=new yt,Le=new yt;let we=null;const rt=new He(0);let Je=0,nt=t.width,Z=t.height,j=1,_e=null,Be=null;const Me=new yt(0,0,nt,Z),ke=new yt(0,0,nt,Z);let ht=!1;const ee=new pl;let se=!1,ae=!1;const oe=new st,ue=new D,Oe=new yt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Ve(){return ie===null?j:1}let N=n;function ot(S,U){return t.getContext(S,U)}let Qe,R,_,z,H,Y,ce,he,$,J,fe,De,ge,de,Ie,Fe,qe,O,pe,K,me,Se,ne;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${el}`),t.addEventListener("webglcontextlost",xt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",gn,!1),N===null){const U="webgl2";if(N=ot(U,S),N===null)throw ot(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(S){throw t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),tt("WebGLRenderer: "+S.message),S}function Ne(){Qe=new V0(N),Qe.init(),me=new Nx(N,Qe),R=new I0(N,Qe,e,me),_=new Dx(N,Qe),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),B=N.createFramebuffer(),I=N.createFramebuffer(),F=N.createFramebuffer(),z=new q0(N),H=new _x,Y=new Ix(N,Qe,_,H,R,me,z),ce=new H0(P),he=new $d(N),Se=new L0(N,he),$=new W0(N,he,z,Se),J=new $0(N,$,he,Se,z),O=new Y0(N,R,Y),Ie=new N0(H),fe=new xx(P,ce,Qe,R,Se,Ie),De=new kx(P,H),ge=new yx,de=new Tx(Qe),qe=new P0(P,ce,_,J,m,l),Fe=new Lx(P,J,R),ne=new Gx(N,z,R,_),pe=new D0(N,Qe,z),K=new X0(N,Qe,z),z.programs=fe.programs,P.capabilities=R,P.extensions=Qe,P.properties=H,P.renderLists=ge,P.shadowMap=Fe,P.state=_,P.info=z}v!==ln&&(T=new K0(v,t.width,t.height,o,s,r));const Ce=new Bx(P,N);this.xr=Ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Qe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Qe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(nt,Z,!1))},this.getSize=function(S){return S.set(nt,Z)},this.setSize=function(S,U,W=!0){if(Ce.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=S,Z=U,t.width=Math.floor(S*j),t.height=Math.floor(U*j),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(nt*j,Z*j).floor()},this.setDrawingBufferSize=function(S,U,W){nt=S,Z=U,j=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===ln){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,U,W,k){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,U,W,k),_.viewport(te.copy(Me).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(ke)},this.setScissor=function(S,U,W,k){S.isVector4?ke.set(S.x,S.y,S.z,S.w):ke.set(S,U,W,k),_.scissor(Le.copy(ke).multiplyScalar(j).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(S){_.setScissorTest(ht=S)},this.setOpaqueSort=function(S){_e=S},this.setTransparentSort=function(S){Be=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let k=0;if(S){let G=!1;if(ie!==null){const ye=ie.texture.format;G=g.has(ye)}if(G){const ye=ie.texture.type,Ee=p.has(ye),ve=qe.getClearColor(),Ae=qe.getClearAlpha(),Pe=ve.r,$e=ve.g,je=ve.b;Ee?(M[0]=Pe,M[1]=$e,M[2]=je,M[3]=Ae,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=Pe,A[1]=$e,A[2]=je,A[3]=Ae,N.clearBufferiv(N.COLOR,0,A))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){t.removeEventListener("webglcontextlost",xt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),qe.dispose(),ge.dispose(),de.dispose(),H.dispose(),ce.dispose(),J.dispose(),Se.dispose(),ne.dispose(),fe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ol),Ce.removeEventListener("sessionend",Fl),xi.stop()};function xt(S){S.preventDefault(),Jl("WebGLRenderer: Context Lost."),b=!0}function lt(){Jl("WebGLRenderer: Context Restored."),b=!1;const S=z.autoReset,U=Fe.enabled,W=Fe.autoUpdate,k=Fe.needsUpdate,G=Fe.type;Ne(),z.autoReset=S,Fe.enabled=U,Fe.autoUpdate=W,Fe.needsUpdate=k,Fe.type=G}function gn(S){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rn(S){const U=S.target;U.removeEventListener("dispose",Rn),bu(U)}function bu(S){Eu(S),H.remove(S)}function Eu(S){const U=H.get(S).programs;U!==void 0&&(U.forEach(function(W){fe.releaseProgram(W)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,k,G,ye){U===null&&(U=Ue);const Ee=G.isMesh&&G.matrixWorld.determinantAffine()<0,ve=Au(S,U,W,k,G);_.setMaterial(k,Ee);let Ae=W.index,Pe=1;if(k.wireframe===!0){if(Ae=$.getWireframeAttribute(W),Ae===void 0)return;Pe=2}const $e=W.drawRange,je=W.attributes.position;let Re=$e.start*Pe,ct=($e.start+$e.count)*Pe;ye!==null&&(Re=Math.max(Re,ye.start*Pe),ct=Math.min(ct,(ye.start+ye.count)*Pe)),Ae!==null?(Re=Math.max(Re,0),ct=Math.min(ct,Ae.count)):je!=null&&(Re=Math.max(Re,0),ct=Math.min(ct,je.count));const Rt=ct-Re;if(Rt<0||Rt===1/0)return;Se.setup(G,k,ve,W,Ae);let vt,pt=pe;if(Ae!==null&&(vt=he.get(Ae),pt=K,pt.setIndex(vt)),G.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*Ve()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(G.isLine){let Gt=k.linewidth;Gt===void 0&&(Gt=1),_.setLineWidth(Gt*Ve()),G.isLineSegments?pt.setMode(N.LINES):G.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else G.isPoints?pt.setMode(N.POINTS):G.isSprite&&pt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Gt=G._multiDrawStarts,be=G._multiDrawCounts,Yt=G._multiDrawCount,it=Ae?he.get(Ae).bytesPerElement:1,cn=H.get(k).currentProgram.getUniforms();for(let Cn=0;Cn<Yt;Cn++)cn.setValue(N,"_gl_DrawID",Cn),pt.render(Gt[Cn]/it,be[Cn])}else if(G.isInstancedMesh)pt.renderInstances(Re,Rt,G.count);else if(W.isInstancedBufferGeometry){const Gt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,Gt);pt.renderInstances(Re,Rt,be)}else pt.render(Re,Rt)};function Ul(S,U,W,k){L!==null&&S.isNodeMaterial&&L.setObject(k,S),se===!0&&Ie.setState(S,W,!1),S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,er(S,U,k),S.side=Ai,S.needsUpdate=!0,er(S,U,k),S.side=Nn):er(S,U,k)}this.compile=function(S,U,W=null){W===null&&(W=S),L!==null&&L.renderStart(S,U,W),E=de.get(W),E.init(U),x.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),S!==W&&S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),ae=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,ae),se===!0&&Ie.setGlobalState(this.clippingPlanes,U),L!==null&&Fe.render(E.state.shadowsArray,W,U);const k=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){const ve=ye[Ee];Ul(ve,W,U,G),k.add(ve)}else Ul(ye,W,U,G),k.add(ye)}),E=x.pop(),L!==null&&L.renderEnd(),k},this.compileAsync=function(S,U,W=null){const k=this.compile(S,U,W);return new Promise(G=>{function ye(){if(k.forEach(function(Ee){const Ae=H.get(Ee).currentProgram;(Ae===void 0||Ae.isReady())&&k.delete(Ee)}),k.size===0){G(S);return}setTimeout(ye,10)}Qe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ua=null;function wu(S){ua&&ua(S)}function Ol(){xi.stop()}function Fl(){xi.start()}const xi=new Jh;xi.setAnimationLoop(wu),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(S){ua=S,Ce.setAnimationLoop(S),S===null?xi.stop():xi.start()},Ce.addEventListener("sessionstart",Ol),Ce.addEventListener("sessionend",Fl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L!==null&&L.renderStart(S,U);const W=Ce.enabled===!0&&Ce.isPresenting===!0,k=T!==null&&(ie===null||W)&&T.begin(P,ie);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(U),U=Ce.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,ie),E=de.get(S,x.length),E.init(U),E.state.textureUnits=Y.getTextureUnits(),x.push(E),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(oe,On,U.reversedDepth),ae=this.localClippingEnabled,se=Ie.init(this.clippingPlanes,ae),w=ge.get(S,C.length),w.init(),C.push(w),Ce.enabled===!0&&Ce.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&fa(Ee,U,-1/0,P.sortObjects)}fa(S,U,0,P.sortObjects),w.finish(),L!==null&&L.updateLights(E.state.lightsArray),P.sortObjects===!0&&w.sort(_e,Be),Ge=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ge&&qe.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ie.beginShadows();const G=E.state.shadowsArray;if(Fe.render(G,S,U),se===!0&&Ie.endShadows(),(k&&T.hasRenderPass())===!1){const Ee=w.opaque,ve=w.transmissive;if(E.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(ve.length>0)for(let Pe=0,$e=Ae.length;Pe<$e;Pe++){const je=Ae[Pe];zl(Ee,ve,S,je)}Ge&&qe.render(S);for(let Pe=0,$e=Ae.length;Pe<$e;Pe++){const je=Ae[Pe];Bl(w,S,je,je.viewport)}}else ve.length>0&&zl(Ee,ve,S,U),Ge&&qe.render(S),Bl(w,S,U)}ie!==null&&V===0&&(Y.updateMultisampleRenderTarget(ie),Y.updateRenderTargetMipmap(ie)),k&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),Se.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(E=x[x.length-1],Y.setTextureUnits(E.state.textureUnits),se===!0&&Ie.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,L!==null&&L.renderEnd()};function fa(S,U,W,k){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ee)){k&&Oe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const Ee=J.update(S),ve=S.material;ve.visible&&w.push(S,Ee,ve,W,Oe.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ee))){const Ee=J.update(S),ve=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Oe.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(S.matrixWorld).applyMatrix4(oe)),Array.isArray(ve)){const Ae=Ee.groups;for(let Pe=0,$e=Ae.length;Pe<$e;Pe++){const je=Ae[Pe],Re=ve[je.materialIndex];Re&&Re.visible&&w.push(S,Ee,Re,W,Oe.z,je,U)}}else ve.visible&&w.push(S,Ee,ve,W,Oe.z,null,U)}}const ye=S.children;for(let Ee=0,ve=ye.length;Ee<ve;Ee++)fa(ye[Ee],U,W,k)}function Bl(S,U,W,k){const{opaque:G,transmissive:ye,transparent:Ee}=S;E.setupLightsView(W),se===!0&&Ie.setGlobalState(P.clippingPlanes,W),k&&_.viewport(te.copy(k)),G.length>0&&js(G,U,W),ye.length>0&&js(ye,U,W),Ee.length>0&&js(Ee,U,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function zl(S,U,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Re=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Tn(1,1,{generateMipmaps:!0,type:Re?zn:ln,minFilter:Ei,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const ye=E.state.transmissionRenderTarget[k.id],Ee=k.viewport||te;ye.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const ve=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(ye),P.getClearColor(rt),Je=P.getClearAlpha(),Je<1&&P.setClearColor(16777215,.5),P.clear(),Ge&&qe.render(W);const $e=P.toneMapping;P.toneMapping=Fn;const je=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),se===!0&&Ie.setGlobalState(P.clippingPlanes,k),js(S,W,k),Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ct=0,Rt=U.length;ct<Rt;ct++){const vt=U[ct],{object:pt,geometry:Gt,material:be,group:Yt}=vt;if(be.side===Nn&&pt.layers.test(k.layers)){const it=be.side;be.side=Kt,be.needsUpdate=!0,kl(pt,W,k,Gt,be,Yt),be.side=it,be.needsUpdate=!0,Re=!0}}Re===!0&&(Y.updateMultisampleRenderTarget(ye),Y.updateRenderTargetMipmap(ye))}P.setRenderTarget(ve,Ae,Pe),P.setClearColor(rt,Je),je!==void 0&&(k.viewport=je),P.toneMapping=$e}function js(S,U,W){const k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ye=S.length;G<ye;G++){const Ee=S[G],{object:ve,geometry:Ae,group:Pe}=Ee;let $e=Ee.material;$e.allowOverride===!0&&k!==null&&($e=k),ve.layers.test(W.layers)&&kl(ve,U,W,Ae,$e,Pe)}}function kl(S,U,W,k,G,ye){L!==null&&G.isNodeMaterial&&L.setObject(S,G),S.onBeforeRender(P,U,W,k,G,ye),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(P,U,W,k,S,ye),G.transparent===!0&&G.side===Nn&&G.forceSinglePass===!1?(G.side=Kt,G.needsUpdate=!0,P.renderBufferDirect(W,U,k,G,S,ye),G.side=Ai,G.needsUpdate=!0,P.renderBufferDirect(W,U,k,G,S,ye),G.side=Nn):P.renderBufferDirect(W,U,k,G,S,ye),S.onAfterRender(P,U,W,k,G,ye)}function er(S,U,W){U.isScene!==!0&&(U=Ue);const k=H.get(S),G=E.state.lights,ye=E.state.shadowsArray,Ee=G.state.version,ve=fe.getParameters(S,G.state,ye,U,W,E.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(ve);let Pe=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const $e=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=ce.get(S.envMap||k.environment,$e),k.envMapRotation=k.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Pe===void 0&&(S.addEventListener("dispose",Rn),Pe=new Map,k.programs=Pe);let je=Pe.get(Ae);if(je!==void 0){if(k.currentProgram===je&&k.lightsStateVersion===Ee)return Hl(S,ve),je}else ve.uniforms=fe.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,W,ve),S.onBeforeCompile(ve,P),je=fe.acquireProgram(ve,Ae),Pe.set(Ae,je),k.uniforms=ve.uniforms;const Re=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=Ie.uniform),Hl(S,ve),k.needsLights=Cu(S),k.lightsStateVersion=Ee,k.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.sunLights.value=G.state.sun,Re.sunLightShadows.value=G.state.sunShadow,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.sunShadowMatrix.value=G.state.sunShadowMatrix,Re.sunShadowCascade.value=G.state.sunShadowCascade,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=je,k.uniformsList=null,je}function Gl(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Br.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Hl(S,U){const W=H.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Tu(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let W=0,k=S.length;W<k;W++){const G=S[W];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Au(S,U,W,k,G){U.isScene!==!0&&(U=Ue),Y.resetTextureUnits();const ye=U.fog,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ve=ie===null?P.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:et.workingColorSpace,Ae=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pe=ce.get(k.envMap||Ee,Ae),$e=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let vt=Fn;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(vt=P.toneMapping);const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Gt=pt!==void 0?pt.length:0,be=H.get(k),Yt=E.state.lights;if(se===!0&&(ae===!0||S!==Q)){const _t=S===Q&&k.id===X;Ie.setState(k,S,_t)}let it=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Yt.state.version||be.outputColorSpace!==ve||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Pe||k.fog===!0&&be.fog!==ye||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ie.numPlanes||be.numIntersection!==Ie.numIntersection)||be.vertexAlphas!==$e||be.vertexTangents!==je||be.morphTargets!==Re||be.morphNormals!==ct||be.morphColors!==Rt||be.toneMapping!==vt||be.morphTargetsCount!==Gt||!!be.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,be.__version=k.version);let cn=be.currentProgram;it===!0&&(cn=er(k,U,G),L&&k.isNodeMaterial&&L.onUpdateProgram(k,cn,be));let Cn=!1,jn=!1,Ni=!1;const dt=cn.getUniforms(),Et=be.uniforms;if(_.useProgram(cn.program)&&(Cn=!0,jn=!0,Ni=!0),k.id!==X&&(X=k.id,jn=!0),be.needsLights){const _t=Tu(E.state.lightProbeGridArray,G);be.lightProbeGrid!==_t&&(be.lightProbeGrid=_t,jn=!0)}if(Cn||Q!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(N,"projectionMatrix",S.projectionMatrix),dt.setValue(N,"viewMatrix",S.matrixWorldInverse);const ti=dt.map.cameraPosition;ti!==void 0&&ti.setValue(N,ue.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&dt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),Q!==S&&(Q=S,jn=!0,Ni=!0)}if(be.needsLights&&(Yt.state.sunShadowMap.length>0&&dt.setValue(N,"sunShadowMap",Yt.state.sunShadowMap,Y),Yt.state.directionalShadowMap.length>0&&dt.setValue(N,"directionalShadowMap",Yt.state.directionalShadowMap,Y),Yt.state.spotShadowMap.length>0&&dt.setValue(N,"spotShadowMap",Yt.state.spotShadowMap,Y),Yt.state.pointShadowMap.length>0&&dt.setValue(N,"pointShadowMap",Yt.state.pointShadowMap,Y)),G.isSkinnedMesh){dt.setOptional(N,G,"bindMatrix"),dt.setOptional(N,G,"bindMatrixInverse");const _t=G.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),dt.setValue(N,"boneTexture",_t.boneTexture,Y))}G.isBatchedMesh&&(dt.setOptional(N,G,"batchingTexture"),dt.setValue(N,"batchingTexture",G._matricesTexture,Y),dt.setOptional(N,G,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",G._indirectTexture,Y),dt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",G._colorsTexture,Y));const ei=W.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&O.update(G,W,cn),(jn||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,dt.setValue(N,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Et.envMapIntensity.value=U.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Vx()),jn){if(dt.setValue(N,"toneMappingExposure",P.toneMappingExposure),be.needsLights&&Ru(Et,Ni),ye&&k.fog===!0&&De.refreshFogUniforms(Et,ye),De.refreshMaterialUniforms(Et,k,j,Z,E.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){const _t=be.lightProbeGrid;Et.probesSH.value=_t.texture,Et.probesMin.value.copy(_t.boundingBox.min),Et.probesMax.value.copy(_t.boundingBox.max),Et.probesResolution.value.copy(_t.resolution)}Br.upload(N,Gl(be),Et,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Br.upload(N,Gl(be),Et,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&dt.setValue(N,"center",G.center),dt.setValue(N,"modelViewMatrix",G.modelViewMatrix),dt.setValue(N,"normalMatrix",G.normalMatrix),dt.setValue(N,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const _t=k.uniformsGroups;for(let ti=0,Ui=_t.length;ti<Ui;ti++){const Wl=_t[ti];ne.update(Wl,cn),ne.bind(Wl,cn)}}return cn}function Ru(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Cu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(S,U,W){const k=H.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=U,H.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const W=H.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){ie=S,q=U,V=W;let k=null,G=!1,ye=!1;if(S){const ve=H.get(S);if(ve.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,ve.__webglFramebuffer),te.copy(S.viewport),Le.copy(S.scissor),we=S.scissorTest,_.viewport(te),_.scissor(Le),_.setScissorTest(we),X=-1;return}else if(ve.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ve.__hasExternalTextures)Y.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const $e=S.depthTexture;if(ve.__boundDepthTexture!==$e){if($e!==null&&H.has($e)&&(S.width!==$e.image.width||S.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}const Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);const Pe=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?k=Pe[U][W]:k=Pe[U],G=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?k=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[W]:k=Pe,te.copy(S.viewport),Le.copy(S.scissor),we=S.scissorTest}else te.copy(Me).multiplyScalar(j).floor(),Le.copy(ke).multiplyScalar(j).floor(),we=ht;if(W!==0&&(k=B),_.bindFramebuffer(N.FRAMEBUFFER,k)&&_.drawBuffers(S,k),_.viewport(te),_.scissor(Le),_.setScissorTest(we),G){const ve=H.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,W)}else if(ye){const ve=U;for(let Ae=0;Ae<S.textures.length;Ae++){const Pe=H.get(S.textures[Ae]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,W,ve)}}else if(S!==null&&W!==0){const ve=H.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ve.__webglTexture,W)}X=-1};function Vl(S){const U=H.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=R.textureFormatReadable(S.format),U.__typeReadable=R.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,W,k,G,ye,Ee,ve=0){if(!(S&&S.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){_.bindFramebuffer(N.FRAMEBUFFER,Ae);try{const Pe=S.textures[ve],$e=Pe.format,je=Pe.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ve);const Re=Vl(Pe);if(Re.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-k&&W>=0&&W<=S.height-G&&N.readPixels(U,W,k,G,me.convert($e),me.convert(je),ye)}finally{const Pe=ie!==null?H.get(ie).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,k,G,ye,Ee,ve=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae)if(U>=0&&U<=S.width-k&&W>=0&&W<=S.height-G){_.bindFramebuffer(N.FRAMEBUFFER,Ae);const Pe=S.textures[ve],$e=Pe.format,je=Pe.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ve);const Re=Vl(Pe);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.bufferData(N.PIXEL_PACK_BUFFER,ye.byteLength,N.STREAM_READ),N.readPixels(U,W,k,G,me.convert($e),me.convert(je),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Rt=ie!==null?H.get(ie).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Rt);const vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await df(N,vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ct),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ye),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ct),N.deleteSync(vt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){const k=Math.pow(2,-W),G=Math.floor(S.image.width*k),ye=Math.floor(S.image.height*k),Ee=U!==null?U.x:0,ve=U!==null?U.y:0;Y.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Ee,ve,G,ye),_.unbindTexture()},this.copyTextureToTexture=function(S,U,W=null,k=null,G=0,ye=0){let Ee,ve,Ae,Pe,$e,je,Re,ct,Rt;const vt=S.isCompressedTexture?S.mipmaps[ye]:S.image;if(W!==null)Ee=W.max.x-W.min.x,ve=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,$e=W.min.y,je=W.isBox3?W.min.z:0;else{const Et=Math.pow(2,-G);Ee=Math.floor(vt.width*Et),ve=Math.floor(vt.height*Et),S.isDataArrayTexture?Ae=vt.depth:S.isData3DTexture?Ae=Math.floor(vt.depth*Et):Ae=1,Pe=0,$e=0,je=0}k!==null?(Re=k.x,ct=k.y,Rt=k.z):(Re=0,ct=0,Rt=0);const pt=me.convert(U.format),Gt=me.convert(U.type);let be;U.isData3DTexture?(Y.setTexture3D(U,0),be=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),be=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),be=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Yt=_.getParameter(N.UNPACK_ROW_LENGTH),it=_.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=_.getParameter(N.UNPACK_SKIP_PIXELS),Cn=_.getParameter(N.UNPACK_SKIP_ROWS),jn=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Pe),_.pixelStorei(N.UNPACK_SKIP_ROWS,$e),_.pixelStorei(N.UNPACK_SKIP_IMAGES,je);const Ni=S.isDataArrayTexture||S.isData3DTexture,dt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Et=H.get(S),ei=H.get(U),_t=H.get(Et.__renderTarget),ti=H.get(ei.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,_t.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Ui=0;Ui<Ae;Ui++)Ni&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(S).__webglTexture,G,je+Ui),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(U).__webglTexture,ye,Rt+Ui)),N.blitFramebuffer(Pe,$e,Ee,ve,Re,ct,Ee,ve,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||H.has(S)){const Et=H.get(S),ei=H.get(U);_.bindFramebuffer(N.READ_FRAMEBUFFER,I),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let _t=0;_t<Ae;_t++)Ni?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,G,je+_t):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Et.__webglTexture,G),dt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ei.__webglTexture,ye,Rt+_t):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ei.__webglTexture,ye),G!==0?N.blitFramebuffer(Pe,$e,Ee,ve,Re,ct,Ee,ve,N.COLOR_BUFFER_BIT,N.NEAREST):dt?N.copyTexSubImage3D(be,ye,Re,ct,Rt+_t,Pe,$e,Ee,ve):N.copyTexSubImage2D(be,ye,Re,ct,Pe,$e,Ee,ve);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(be,ye,Re,ct,Rt,Ee,ve,Ae,pt,Gt,vt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(be,ye,Re,ct,Rt,Ee,ve,Ae,pt,vt.data):N.texSubImage3D(be,ye,Re,ct,Rt,Ee,ve,Ae,pt,Gt,vt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ye,Re,ct,Ee,ve,pt,Gt,vt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ye,Re,ct,vt.width,vt.height,pt,vt.data):N.texSubImage2D(N.TEXTURE_2D,ye,Re,ct,Ee,ve,pt,Gt,vt);_.pixelStorei(N.UNPACK_ROW_LENGTH,Yt),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),_.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Cn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,jn),ye===0&&U.generateMipmaps&&N.generateMipmap(be),_.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){q=0,V=0,ie=null,_.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const rh={type:"change"},Ml={type:"start"},ru={type:"end"},Lr=new Qr,ah=new yn,Xx=Math.cos(70*gf.DEG2RAD),Pt=new D,jt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qa=1e-6;class au extends qd{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$n.ROTATE,MIDDLE:$n.DOLLY,RIGHT:$n.PAN},this.touches={ONE:Un.ROTATE,TWO:Un.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new wn,this._lastTargetPosition=new D,this._quat=new wn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nc,this._sphericalDelta=new Nc,this._scale=1,this._panOffset=new D,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new D,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yx.bind(this),this._onPointerDown=qx.bind(this),this._onPointerUp=$x.bind(this),this._onContextMenu=t_.bind(this),this._onMouseWheel=Jx.bind(this),this._onKeyDown=Qx.bind(this),this._onTouchStart=jx.bind(this),this._onTouchMove=e_.bind(this),this._onMouseDown=Zx.bind(this),this._onMouseMove=Kx.bind(this),this._interceptControlDown=n_.bind(this),this._interceptControlUp=i_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rh),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=jt:n>Math.PI&&(n-=jt),s<-Math.PI?s+=jt:s>Math.PI&&(s-=jt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Lr.origin.copy(this.object.position),Lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lr.direction))<Xx?this.object.lookAt(this.target):(ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lr.intersectPlane(ah,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qa||this._lastTargetPosition.distanceToSquared(this.target)>Qa?(this.dispatchEvent(rh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jt/60*this.autoRotateSpeed*e:jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pt.copy(s).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $x(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ru),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Zx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $n.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case $n.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case $n.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Ml)}function Kx(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Ml),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ru))}function Qx(i){this.enabled!==!1&&this._handleKeyDown(i)}function jx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Un.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case Un.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Un.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case Un.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Ml)}function e_(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function t_(i){this.enabled!==!1&&i.preventDefault()}function n_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class s_ extends Lt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new re(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}}const Ji=new D,oh=new st,lh=new st,ch=new D,hh=new D;class r_{constructor(e={}){const t=this;let n,s,r,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(m,v){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),oh.copy(v.matrixWorldInverse),lh.multiplyMatrices(v.projectionMatrix,oh),h(m,m,v),this.sortObjects&&d(m)},this.setSize=function(m,v){n=m,s=v,r=n/2,a=s/2,l.style.width=m+"px",l.style.height=v+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let v=0,g=m.children.length;v<g;v++)c(m.children[v])}function h(m,v,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Ji.setFromMatrixPosition(m.matrixWorld),Ji.applyMatrix4(lh);const p=Ji.z>=-1&&Ji.z<=1&&m.layers.test(g.layers)===!0,M=m.element;if(M.style.display=p===!0?"":"none",p===!0){m.onBeforeRender(t,v,g);const y=100*m.center.x,w=100*m.center.y;M.style.transformOrigin=`${y}% ${w}%`;const E=-m.rotation2D,C=Ji.x*r+r,x=-Ji.y*a+a;M.style.transform=`translate(${-y}%, ${-w}%) translate(${C}px, ${x}px) rotate(${E}rad)`,M.parentNode!==l&&l.appendChild(M),m.onAfterRender(t,v,g)}const A={distanceToCameraSquared:f(g,m)};o.objects.set(m,A)}for(let p=0,M=m.children.length;p<M;p++)h(m.children[p],v,g)}function f(m,v){return ch.setFromMatrixPosition(m.matrixWorld),hh.setFromMatrixPosition(v.matrixWorld),ch.distanceToSquared(hh)}function u(m){const v=[];return m.traverseVisible(function(g){g.isCSS2DObject&&v.push(g)}),v}function d(m){const v=u(m).sort(function(p,M){if(p.renderOrder!==M.renderOrder)return M.renderOrder-p.renderOrder;const A=o.objects.get(p).distanceToCameraSquared,y=o.objects.get(M).distanceToCameraSquared;return A-y}),g=v.length;for(let p=0,M=v.length;p<M;p++)v[p].element.style.zIndex=g-p}}}function a_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new bt;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=uh(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);const m=uh(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function uh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new nn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){const v=h.getComponent(u,m);o.setComponent(u+f,m,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}let ja=7;const mt=()=>(ja=ja*16807%2147483647,(ja-1)/2147483646);function Ot(i=512){const e=document.createElement("canvas");return e.width=e.height=i,[e,e.getContext("2d")]}function Ft(i,e,t=!0){const n=new Hf(i);return n.wrapS=n.wrapT=kr,n.repeat.set(1/e,1/e),t&&(n.colorSpace=Zt),n.anisotropy=4,n}function Dn(i,e,t,n,s){for(let r=0;r<s;r++){i.fillStyle=n[mt()*n.length|0],i.globalAlpha=t*mt();const a=1+mt()*2.5;i.fillRect(mt()*e,mt()*e,a,a)}i.globalAlpha=1}function o_(){const i={};{const[e,t]=Ot(256);t.fillStyle="#efebe3",t.fillRect(0,0,256,256),Dn(t,256,.25,["#ffffff","#ddd6ca","#e6e0d5"],5e3),i.stucco=Ft(e,6)}{const[e,t]=Ot(256);t.fillStyle="#f2ece2",t.fillRect(0,0,256,256),Dn(t,256,.18,["#fbf7f0","#e4dccf"],3e3),i.plaster=Ft(e,6)}{const[e,t]=Ot(512);t.fillStyle="#2b2724",t.fillRect(0,0,512,512);const n=512/12;for(let s=0;s<12;s++){const r=30+mt()*14;t.fillStyle=`rgb(${r+6},${r+2},${r})`,t.fillRect(s*n,0,n-2,512);for(let a=0;a<140;a++)t.fillStyle=mt()<.5?"#1c1a18":"#45403a",t.globalAlpha=.5,t.fillRect(s*n+mt()*n,mt()*512,2+mt()*8,1+mt()*2);t.globalAlpha=1,t.fillStyle="#151311",t.fillRect(s*n+n-2,0,2,512)}i.charred=Ft(e,6)}{const[e,t]=Ot(512);let n=0;const s=["#b98d6c","#c49a78","#a87d5f","#cfa888","#b48a6a","#9f7558","#c8a080"];for(;n<512;){const r=10+mt()*34;t.fillStyle=s[mt()*s.length|0],t.fillRect(0,n,512,r),n+=r}Dn(t,512,.35,["#8a654b","#dcc0a2","#9a7458"],9e3),i.rammed=Ft(e,8)}{const[e,t]=Ot(512);t.fillStyle="#9d968a",t.fillRect(0,0,512,512);const n=4,s=512/n;for(let r=0;r<n;r++){let a=-mt()*100;for(;a<512;){const o=90+mt()*120,l=175+mt()*25;t.fillStyle=`rgb(${l},${l-6},${l-16})`,t.fillRect(a+2,r*s+2,o-4,s-4),a+=o}}Dn(t,512,.25,["#8e877b","#d8d1c4"],6e3),i.stone=Ft(e,8)}{const[e,t]=Ot(256);t.fillStyle="#6f6a62",t.fillRect(0,0,256,256);for(let n=0;n<4;n++){let s=-mt()*60;for(;s<256;){const r=40+mt()*70,a=120+mt()*30;t.fillStyle=`rgb(${a},${a-4},${a-10})`,t.fillRect(s+2,n*64+2,r-3,60),s+=r}}i.plinth=Ft(e,4)}{const[e,t]=Ot(512);t.fillStyle="#c9a57a",t.fillRect(0,0,512,512);const n=512/8;for(let s=0;s<8;s++){let r=-mt()*300;for(;r<512;){const a=200+mt()*250,o=mt()*18;t.fillStyle=`rgb(${200+o},${164+o},${118+o})`,t.fillRect(s*n+1,r+1,n-2,a-2);for(let l=0;l<18;l++){t.strokeStyle="rgba(140,100,60,0.15)",t.beginPath();const c=s*n+mt()*n;t.moveTo(c,r),t.lineTo(c+mt()*6-3,r+a),t.stroke()}r+=a}}i.oak=Ft(e,6)}{const[e,t]=Ot(256);t.fillStyle="#8a6a4a",t.fillRect(0,0,256,256);for(let n=0;n<10;n++){const s=mt()*20;t.fillStyle=`rgb(${150+s},${115+s},${80+s})`,t.fillRect(n*25.6+1,0,23.6,256)}i.deck=Ft(e,4)}{const[e,t]=Ot(256);t.fillStyle="#b07a4f",t.fillRect(0,0,256,256);for(let n=0;n<16;n++){const s=mt()*22;t.fillStyle=`rgb(${176+s},${122+s},${80+s})`,t.fillRect(0,n*16+1,256,14)}i.soffit=Ft(e,4)}{const[e,t]=Ot(256);t.fillStyle="#cfc58e",t.fillRect(0,0,256,256);for(let n=0;n<256;n+=3)t.fillStyle=n%6?"#c4b97f":"#d8cf9c",t.fillRect(0,n,256,2);t.fillStyle="#3d4a35",t.fillRect(0,0,256,6),t.fillRect(0,125,256,6),t.fillRect(0,0,6,256),i.tatami=Ft(e,6)}{const[e,t]=Ot(256);t.fillStyle="#3b3b39",t.fillRect(0,0,256,256),Dn(t,256,.7,["#555552","#2a2a29","#6b6658"],6e3),i.rubber=Ft(e,4)}{const[e,t]=Ot(256);t.fillStyle="#6a645c",t.fillRect(0,0,256,256);for(let n=0;n<8;n++)t.fillStyle="#7d776e",t.fillRect(n*32,0,3,256),t.fillStyle="#4e4943",t.fillRect(n*32+3,0,2,256);i.seam=Ft(e,12)}{const[e,t]=Ot(256);t.fillStyle="#d9d4c8",t.fillRect(0,0,256,256),Dn(t,256,.6,["#bfb8aa","#eeeae2","#a9a294"],9e3);for(let n=0;n<256;n+=16)t.strokeStyle="rgba(150,142,128,0.45)",t.lineWidth=2,t.beginPath(),t.moveTo(0,n),t.lineTo(256,n),t.stroke();i.gravel=Ft(e,6)}{const[e,t]=Ot(256);t.fillStyle="#5f8c3c",t.fillRect(0,0,256,256),Dn(t,256,.5,["#4f7a30","#77a24e","#6a9545"],8e3),i.turf=Ft(e,6)}{const[e,t]=Ot(512);t.fillStyle="#a3a46e",t.fillRect(0,0,512,512),Dn(t,512,.5,["#8f9660","#b8b37e","#868c55","#b0a46c"],26e3),Dn(t,512,.9,["#e2c75a","#d18bb0","#f2f0e6","#c97a4a","#9a7fc4"],2200),i.meadow=Ft(e,30)}{const[e,t]=Ot(256);t.fillStyle="#c08552",t.fillRect(0,0,256,256);for(let n=0;n<12;n++){const s=mt()*20;t.fillStyle=`rgb(${190+s},${132+s},${82+s})`,t.fillRect(0,n*21+1,256,19)}i.cedar=Ft(e,4)}{const[e,t]=Ot(256);t.fillStyle="#a9a59e",t.fillRect(0,0,256,256),Dn(t,256,.3,["#97938c","#c2beb6"],5e3),i.concrete=Ft(e,6)}return i}const l_=[{id:"101",name:"Kitchen",wing:"Living Pavilion",x0:10,y0:60,x1:26,y1:84,h:12,floor:"oak",cond:!0,notes:"Bright, sleek kitchen: 10' honed Calacatta marble island with seating for four, flat-panel rift oak cabinetry, open oak shelving on the north wall under a ribbon window, integrated appliances.",w:16,d:24,area:384},{id:"102",name:"Dining",wing:"Living Pavilion",x0:26,y0:60,x1:44,y1:84,h:12,floor:"oak",cond:!0,notes:"Seats ten under exposed fir beams. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north.",w:18,d:24,area:432},{id:"103",name:"Living + Conversation Pit",wing:"Living Pavilion",x0:44,y0:60,x1:72,y1:84,h:12,floor:"oak",cond:!0,notes:'The heart of the house. 16-ft sunken conversation pit (18" down), big fixed mountain-view window to the north, 28 ft of pocketing glass to the courtyard. No stone fireplace: a slim linear gas fire set in a plaster plinth.',w:28,d:24,area:672},{id:"104",name:"Walk-in Pantry",wing:"Living Pavilion",x0:0,y0:72,x1:10,y1:84,h:10,floor:"stone",cond:!0,notes:"Floor-to-ceiling open shelving, second fridge, appliance counter.",w:10,d:12,area:120},{id:"105",name:"Mudroom + Gear",wing:"Living Pavilion",x0:0,y0:60,x1:10,y1:72,h:10,floor:"stone",cond:!0,notes:"Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash.",w:10,d:12,area:120},{id:"201",name:"Master Bedroom",wing:"Sleeping Wing",x0:72,y0:64,x1:86,y1:88,h:11,floor:"oak",cond:!0,notes:"Pushed north for the best mountain view, full-height glass on the north. Private, at the end of the east engawa.",w:14,d:24,area:336},{id:"202",name:"Master Bath",wing:"Sleeping Wing",x0:86,y0:74,x1:98,y1:88,h:10,floor:"stone",cond:!0,notes:"Japanese hinoki soaking tub at the corner window, 8-ft walk-in rain shower, double floating vanity, WC room. Opens to a walled bath garden.",w:12,d:14,area:168},{id:"203",name:"Master Closet",wing:"Sleeping Wing",x0:86,y0:64,x1:98,y1:74,h:10,floor:"oak",cond:!0,notes:"Walk-in closet with oak millwork.",w:12,d:10,area:120},{id:"204",name:"East Engawa Gallery",wing:"Sleeping Wing",x0:72,y0:14,x1:78,y1:64,h:10,floor:"oak",cond:!0,notes:"Glazed engawa along the courtyard: oak floor, shoji-style sliding glass, built-in bench and book wall. Links living, bedrooms and the wellness wing.",w:6,d:50,area:300},{id:"205",name:"Laundry",wing:"Sleeping Wing",x0:78,y0:54,x1:88,y1:64,h:10,floor:"stone",cond:!0,notes:"Next to the bedrooms. Stacked W/D pair, folding counter, drying rack.",w:10,d:10,area:100},{id:"206",name:"Linen + Mechanical",wing:"Sleeping Wing",x0:88,y0:54,x1:98,y1:64,h:10,floor:"stone",cond:!0,notes:"Linen storage, heat pump air handler, ERV, water heating.",w:10,d:10,area:100},{id:"207",name:"Kids' Room 1",wing:"Sleeping Wing",x0:78,y0:43,x1:98,y1:54,h:10,floor:"oak",cond:!0,notes:"20 x 11 ft with a bed alcove, desk and built-in closet; east window to the meadow.",w:20,d:11,area:220},{id:"208",name:"Jack-and-Jill Bath",wing:"Sleeping Wing",x0:78,y0:35,x1:98,y1:43,h:10,floor:"stone",cond:!0,notes:"Shared by the kids' rooms: two vanities, WC and tub-shower in the middle room, lockable from each side.",w:20,d:8,area:160},{id:"209",name:"Kids' Room 2 / Guest",wing:"Sleeping Wing",x0:78,y0:24,x1:98,y1:35,h:10,floor:"oak",cond:!0,notes:"Fits a queen bed. Doubles as the guest room; the Guest / Pool Bath is just across the engawa.",w:20,d:11,area:220},{id:"210",name:"Guest / Pool Bath",wing:"Sleeping Wing",x0:78,y0:14,x1:88,y1:24,h:10,floor:"stone",cond:!0,notes:"Guest-capable full bath (walk-in shower, vanity, WC) reached from the engawa, also serving the pool and Kids' Room 2 when it hosts guests.",w:10,d:10,area:100},{id:"211",name:"Pool Equipment",wing:"Sleeping Wing",x0:88,y0:14,x1:98,y1:24,h:9,floor:"concrete",cond:!1,notes:"Unconditioned. Pool pump and filter, outdoor storage, exterior access only.",w:10,d:10,area:100},{id:"301",name:"South Engawa Gallery",wing:"Wellness + Gym Wing",x0:28,y0:22,x1:72,y1:27,h:10,floor:"oak",cond:!0,notes:"Glazed engawa that closes the courtyard ring. Lets you reach the gym and wellness rooms in winter without going outside.",w:44,d:5,area:220},{id:"302",name:"Exercise Room",wing:"Wellness + Gym Wing",x0:28,y0:0,x1:50,y1:22,h:12,floor:"rubber",cond:!0,notes:"Athlete-style training room: Pilates Cadillac, pull-up rig, dumbbells, plyo boxes, balance boards, band anchors. The west wall is a full-height storage wall with a wall-mounted rig. Glass slides open to the turf sprint lane.",w:22,d:22,area:484},{id:"303",name:"Wet Room",wing:"Wellness + Gym Wing",x0:50,y0:9,x1:66,y1:22,h:10,floor:"stone",cond:!0,notes:"Stone wet room: two rain showers, a sunken cold plunge (39-50 F), teak bench. Serves the sauna and hammam.",w:16,d:13,area:208},{id:"304",name:"Sauna",wing:"Wellness + Gym Wing",x0:50,y0:0,x1:58,y1:9,h:8,floor:"cedar",cond:!0,notes:"Cedar sauna for 4 to 5 people, with a low window toward the pool and meadow.",w:8,d:9,area:72},{id:"305",name:"Hammam",wing:"Wellness + Gym Wing",x0:58,y0:0,x1:66,y1:9,h:8,floor:"stone",cond:!0,notes:"Marble steam room with a heated bench and a vaulted ceiling.",w:8,d:9,area:72},{id:"306",name:"Changing + Towels",wing:"Wellness + Gym Wing",x0:66,y0:0,x1:72,y1:22,h:10,floor:"stone",cond:!0,notes:"Towels, robes, lockers. Door to the pool deck and outdoor shower.",w:6,d:22,area:132},{id:"401",name:"Entry Genkan",wing:"Studio + Arrival",x0:10,y0:48,x1:22,y1:60,h:10,floor:"stone",cond:!0,notes:"Stone genkan with a step-up to the oak floor and a rammed-earth feature wall. The first view lines up across the engawa into the courtyard.",w:12,d:12,area:144},{id:"402",name:"Coat + Shoe Closet",wing:"Studio + Arrival",x0:10,y0:41,x1:16,y1:48,h:10,floor:"oak",cond:!0,notes:"Coat and shoe storage.",w:6,d:7,area:42},{id:"403",name:"Powder Room",wing:"Studio + Arrival",x0:16,y0:41,x1:22,y1:48,h:10,floor:"stone",cond:!0,notes:"Powder room by the entry: stone vessel sink, plaster walls.",w:6,d:7,area:42},{id:"404",name:"Tatami Room",wing:"Studio + Arrival",x0:10,y0:28,x1:22,y1:41,h:9,floor:"tatami",cond:!0,notes:"8-mat tatami room with a tokonoma alcove. Shoji slide open to the engawa and courtyard, and a low garden window. Used for tea, meditation, or as an overflow guest room.",w:12,d:13,area:156},{id:"405",name:"Instrument + AV Closet",wing:"Studio + Arrival",x0:10,y0:22,x1:22,y1:28,h:10,floor:"oak",cond:!0,notes:"Cases, cables, rack gear and the network closet. Opens to the office.",w:12,d:6,area:72},{id:"406",name:"West Engawa Gallery",wing:"Studio + Arrival",x0:22,y0:22,x1:28,y1:60,h:10,floor:"oak",cond:!0,notes:"Glazed engawa from the entry to the office and great room.",w:6,d:38,area:228},{id:"407",name:"Office / Music Loft",wing:"Studio + Arrival",x0:4,y0:0,x1:28,y1:22,h:14,floor:"oak",cond:!0,notes:"Loft-like 24 x 22 ft room with a 14-ft ceiling, clerestory and acoustic slat ceiling. Work desk and computer with the MPC, digital piano, e-drum kit, acoustic-electric guitar, mic, PA speakers and mixer. Double-stud walls keep it acoustically separate; it sits as far from the bedrooms as possible.",w:24,d:22,area:528}],c_=[{o:"h",c:60,a:0,b:10,pos:"105",neg:null,ext:!0,h:10,feats:[{a:2,b:8,k:"window",x:[3,7]}]},{o:"h",c:60,a:10,b:22,pos:"101",neg:"401",ext:!1,h:12,feats:[]},{o:"h",c:60,a:22,b:26,pos:"101",neg:"406",ext:!1,h:12,feats:[{a:22,b:26,k:"open",x:null}]},{o:"h",c:60,a:26,b:28,pos:"102",neg:"406",ext:!1,h:12,feats:[{a:26,b:28,k:"open",x:null}]},{o:"h",c:60,a:28,b:44,pos:"102",neg:null,ext:!0,h:12,feats:[{a:28.5,b:43.5,k:"glass",x:null}]},{o:"h",c:60,a:44,b:72,pos:"103",neg:null,ext:!0,h:12,feats:[{a:44.5,b:71.5,k:"glass",x:null}]},{o:"h",c:84,a:0,b:10,pos:null,neg:"104",ext:!0,h:10,feats:[]},{o:"h",c:84,a:10,b:26,pos:null,neg:"101",ext:!0,h:12,feats:[{a:11,b:25,k:"window",x:[3.5,8]}]},{o:"h",c:84,a:26,b:44,pos:null,neg:"102",ext:!0,h:12,feats:[{a:27,b:43,k:"glass",x:null}]},{o:"h",c:84,a:44,b:72,pos:null,neg:"103",ext:!0,h:12,feats:[{a:45,b:71,k:"fixed",x:null}]},{o:"v",c:10,a:22,b:28,pos:"405",neg:null,ext:!0,h:10,feats:[]},{o:"v",c:10,a:28,b:41,pos:"404",neg:null,ext:!0,h:9,feats:[{a:31,b:38,k:"window",x:[1.2,6]}]},{o:"v",c:10,a:41,b:48,pos:"402",neg:null,ext:!0,h:10,feats:[]},{o:"v",c:10,a:48,b:60,pos:"401",neg:null,ext:!0,h:10,feats:[{a:52,b:56,k:"front",x:null},{a:49,b:51.5,k:"fixed",x:null},{a:56.5,b:59,k:"fixed",x:null}]},{o:"v",c:10,a:60,b:72,pos:"101",neg:"105",ext:!1,h:12,feats:[{a:64,b:67,k:"door",x:null}]},{o:"v",c:10,a:72,b:84,pos:"101",neg:"104",ext:!1,h:12,feats:[{a:76,b:79,k:"door",x:null}]},{o:"v",c:26,a:60,b:84,pos:"102",neg:"101",ext:!1,h:12,feats:[{a:60,b:84,k:"open",x:null}]},{o:"v",c:44,a:60,b:84,pos:"103",neg:"102",ext:!1,h:12,feats:[{a:60,b:84,k:"open",x:null}]},{o:"v",c:72,a:0,b:14,pos:null,neg:"306",ext:!0,h:10,feats:[]},{o:"v",c:72,a:14,b:22,pos:"204",neg:"306",ext:!1,h:10,feats:[{a:16,b:19,k:"door",x:null}]},{o:"v",c:72,a:22,b:27,pos:"204",neg:"301",ext:!1,h:10,feats:[{a:22,b:27,k:"open",x:null}]},{o:"v",c:72,a:27,b:60,pos:"204",neg:null,ext:!0,h:10,feats:[{a:27.5,b:59.5,k:"glass",x:null}]},{o:"v",c:72,a:60,b:64,pos:"204",neg:"103",ext:!1,h:12,feats:[{a:60,b:64,k:"open",x:null}]},{o:"v",c:72,a:64,b:84,pos:"201",neg:"103",ext:!1,h:12,feats:[]},{o:"v",c:72,a:84,b:88,pos:"201",neg:null,ext:!0,h:11,feats:[]},{o:"h",c:72,a:0,b:10,pos:"104",neg:"105",ext:!1,h:10,feats:[]},{o:"v",c:0,a:60,b:72,pos:"105",neg:null,ext:!0,h:10,feats:[{a:64,b:67,k:"exdoor",x:null}]},{o:"v",c:0,a:72,b:84,pos:"104",neg:null,ext:!0,h:10,feats:[{a:76,b:82,k:"window",x:[3,7]}]},{o:"h",c:64,a:72,b:78,pos:"201",neg:"204",ext:!1,h:11,feats:[{a:73,b:77,k:"slide",x:null}]},{o:"h",c:64,a:78,b:86,pos:"201",neg:"205",ext:!1,h:11,feats:[]},{o:"h",c:64,a:86,b:88,pos:"203",neg:"205",ext:!1,h:10,feats:[]},{o:"h",c:64,a:88,b:98,pos:"203",neg:"206",ext:!1,h:10,feats:[]},{o:"h",c:88,a:72,b:86,pos:null,neg:"201",ext:!0,h:11,feats:[{a:73,b:85,k:"fixed",x:null}]},{o:"h",c:88,a:86,b:98,pos:null,neg:"202",ext:!0,h:10,feats:[{a:88,b:97,k:"window",x:[2,8]}]},{o:"v",c:86,a:64,b:74,pos:"203",neg:"201",ext:!1,h:11,feats:[{a:66,b:69,k:"door",x:null}]},{o:"v",c:86,a:74,b:88,pos:"202",neg:"201",ext:!1,h:11,feats:[{a:76,b:79.5,k:"slide",x:null}]},{o:"h",c:74,a:86,b:98,pos:"202",neg:"203",ext:!1,h:10,feats:[]},{o:"v",c:98,a:14,b:24,pos:null,neg:"211",ext:!0,h:9,feats:[]},{o:"v",c:98,a:24,b:35,pos:null,neg:"209",ext:!0,h:10,feats:[{a:26,b:33,k:"window",x:[2.5,8]}]},{o:"v",c:98,a:35,b:43,pos:null,neg:"208",ext:!0,h:10,feats:[{a:37,b:41,k:"window",x:[5.5,8]}]},{o:"v",c:98,a:43,b:54,pos:null,neg:"207",ext:!0,h:10,feats:[{a:45,b:52,k:"window",x:[2.5,8]}]},{o:"v",c:98,a:54,b:64,pos:null,neg:"206",ext:!0,h:10,feats:[{a:56,b:59,k:"exdoor",x:null}]},{o:"v",c:98,a:64,b:74,pos:null,neg:"203",ext:!0,h:10,feats:[{a:67,b:72,k:"window",x:[6,8]}]},{o:"v",c:98,a:74,b:88,pos:null,neg:"202",ext:!0,h:10,feats:[{a:76,b:87,k:"window",x:[2,8]}]},{o:"h",c:14,a:72,b:78,pos:"204",neg:null,ext:!0,h:10,feats:[{a:73,b:77,k:"exdoor",x:null}]},{o:"h",c:14,a:78,b:88,pos:"210",neg:null,ext:!0,h:10,feats:[{a:81,b:85,k:"window",x:[5.5,8]}]},{o:"h",c:14,a:88,b:98,pos:"211",neg:null,ext:!0,h:9,feats:[{a:91,b:95,k:"exdoor",x:null}]},{o:"v",c:78,a:14,b:24,pos:"210",neg:"204",ext:!1,h:10,feats:[{a:18,b:21,k:"door",x:null}]},{o:"v",c:78,a:24,b:35,pos:"209",neg:"204",ext:!1,h:10,feats:[{a:27,b:30,k:"door",x:null}]},{o:"v",c:78,a:35,b:43,pos:"208",neg:"204",ext:!1,h:10,feats:[]},{o:"v",c:78,a:43,b:54,pos:"207",neg:"204",ext:!1,h:10,feats:[{a:50,b:53,k:"door",x:null}]},{o:"v",c:78,a:54,b:64,pos:"205",neg:"204",ext:!1,h:10,feats:[{a:58,b:61,k:"door",x:null}]},{o:"h",c:54,a:78,b:88,pos:"205",neg:"207",ext:!1,h:10,feats:[]},{o:"h",c:54,a:88,b:98,pos:"206",neg:"207",ext:!1,h:10,feats:[]},{o:"v",c:88,a:14,b:24,pos:"211",neg:"210",ext:!1,h:10,feats:[]},{o:"v",c:88,a:54,b:64,pos:"206",neg:"205",ext:!1,h:10,feats:[{a:57,b:60,k:"door",x:null}]},{o:"h",c:43,a:78,b:98,pos:"207",neg:"208",ext:!1,h:10,feats:[{a:81,b:84,k:"door",x:null}]},{o:"h",c:35,a:78,b:98,pos:"208",neg:"209",ext:!1,h:10,feats:[{a:81,b:84,k:"door",x:null}]},{o:"h",c:24,a:78,b:88,pos:"209",neg:"210",ext:!1,h:10,feats:[]},{o:"h",c:24,a:88,b:98,pos:"209",neg:"211",ext:!1,h:10,feats:[]},{o:"h",c:22,a:4,b:10,pos:null,neg:"407",ext:!0,h:14,feats:[{a:5,b:9,k:"window",x:[3,9]}]},{o:"h",c:22,a:10,b:22,pos:"405",neg:"407",ext:!1,h:14,feats:[{a:14,b:18,k:"door",x:null}]},{o:"h",c:22,a:22,b:28,pos:"406",neg:"407",ext:!1,h:14,feats:[{a:23,b:27,k:"door",x:null}]},{o:"h",c:22,a:28,b:50,pos:"301",neg:"302",ext:!1,h:12,feats:[{a:36,b:42,k:"slide",x:null}]},{o:"h",c:22,a:50,b:66,pos:"301",neg:"303",ext:!1,h:10,feats:[{a:56,b:59,k:"door",x:null}]},{o:"h",c:22,a:66,b:72,pos:"301",neg:"306",ext:!1,h:10,feats:[]},{o:"h",c:27,a:28,b:72,pos:null,neg:"301",ext:!0,h:10,feats:[{a:28.5,b:71.5,k:"glass",x:null}]},{o:"v",c:28,a:0,b:22,pos:"302",neg:"407",ext:!1,h:14,feats:[]},{o:"v",c:28,a:22,b:27,pos:"301",neg:"406",ext:!1,h:10,feats:[{a:22,b:27,k:"open",x:null}]},{o:"v",c:28,a:27,b:60,pos:null,neg:"406",ext:!0,h:10,feats:[{a:27.5,b:59.5,k:"glass",x:null}]},{o:"h",c:0,a:4,b:28,pos:"407",neg:null,ext:!0,h:14,feats:[{a:7,b:25,k:"glass",x:null}]},{o:"h",c:0,a:28,b:50,pos:"302",neg:null,ext:!0,h:12,feats:[{a:31,b:47,k:"glass",x:null}]},{o:"h",c:0,a:50,b:58,pos:"304",neg:null,ext:!0,h:8,feats:[{a:51,b:57,k:"window",x:[3,6]}]},{o:"h",c:0,a:58,b:66,pos:"305",neg:null,ext:!0,h:8,feats:[]},{o:"h",c:0,a:66,b:72,pos:"306",neg:null,ext:!0,h:10,feats:[{a:68,b:71,k:"exdoor",x:null}]},{o:"v",c:50,a:0,b:9,pos:"304",neg:"302",ext:!1,h:12,feats:[]},{o:"v",c:50,a:9,b:22,pos:"303",neg:"302",ext:!1,h:12,feats:[{a:12,b:15,k:"door",x:null}]},{o:"h",c:9,a:50,b:58,pos:"303",neg:"304",ext:!1,h:10,feats:[{a:52,b:54.5,k:"door",x:null}]},{o:"h",c:9,a:58,b:66,pos:"303",neg:"305",ext:!1,h:10,feats:[{a:61,b:63.5,k:"door",x:null}]},{o:"v",c:66,a:0,b:9,pos:"306",neg:"305",ext:!1,h:10,feats:[]},{o:"v",c:66,a:9,b:22,pos:"306",neg:"303",ext:!1,h:10,feats:[{a:12,b:15,k:"door",x:null}]},{o:"v",c:58,a:0,b:9,pos:"305",neg:"304",ext:!1,h:8,feats:[]},{o:"h",c:48,a:10,b:16,pos:"401",neg:"402",ext:!1,h:10,feats:[{a:11,b:15,k:"door",x:null}]},{o:"h",c:48,a:16,b:22,pos:"401",neg:"403",ext:!1,h:10,feats:[]},{o:"v",c:22,a:22,b:28,pos:"406",neg:"405",ext:!1,h:10,feats:[{a:23,b:26,k:"door",x:null}]},{o:"v",c:22,a:28,b:41,pos:"406",neg:"404",ext:!1,h:10,feats:[{a:30,b:39,k:"slide",x:null}]},{o:"v",c:22,a:41,b:48,pos:"406",neg:"403",ext:!1,h:10,feats:[{a:43,b:45.5,k:"door",x:null}]},{o:"v",c:22,a:48,b:60,pos:"406",neg:"401",ext:!1,h:10,feats:[{a:50,b:58,k:"open",x:null}]},{o:"h",c:41,a:10,b:16,pos:"402",neg:"404",ext:!1,h:10,feats:[]},{o:"h",c:41,a:16,b:22,pos:"403",neg:"404",ext:!1,h:10,feats:[]},{o:"v",c:16,a:41,b:48,pos:"403",neg:"402",ext:!1,h:10,feats:[]},{o:"h",c:28,a:10,b:22,pos:"404",neg:"405",ext:!1,h:10,feats:[]},{o:"v",c:4,a:0,b:22,pos:"407",neg:null,ext:!0,h:14,feats:[{a:4,b:18,k:"window",x:[2.5,9]}]}],h_=[{room:"101",label:"Marble island 10'",x0:13,y0:69,x1:23,y1:73.5,h:3,z0:0,color:"#ece8e1",shape:"box"},{room:"101",label:"Back counter + range",x0:12.6,y0:81.4,x1:25.6,y1:83.6,h:3,z0:0,color:"#c39a6b",shape:"box"},{room:"101",label:"Open oak shelving",x0:10.3,y0:60.8,x1:11.2,y1:63.6,h:7,z0:0,color:"#c39a6b",shape:"box"},{room:"101",label:"Tall appliance wall",x0:10.4,y0:68.5,x1:12.6,y1:75,h:8.5,z0:0,color:"#c39a6b",shape:"box"},{room:"101",label:"Stools",x0:14,y0:67.2,x1:22,y1:68.6,h:2.5,z0:0,color:"#6b4a33",shape:"box"},{room:"102",label:"Dining table (10)",x0:30,y0:69,x1:40,y1:73,h:2.5,z0:0,color:"#6b4a33",shape:"box"},{room:"102",label:"Chairs",x0:30.5,y0:67.4,x1:39.5,y1:68.6,h:1.5,z0:0,color:"#d9cbb5",shape:"box"},{room:"102",label:"Chairs",x0:30.5,y0:73.4,x1:39.5,y1:74.6,h:1.5,z0:0,color:"#d9cbb5",shape:"box"},{room:"102",label:"Sideboard",x0:29,y0:82.6,x1:41,y1:83.6,h:2.8,z0:0,color:"#c39a6b",shape:"box"},{room:"103",label:'Conversation pit (18" down)',x0:49,y0:66,x1:65,y1:78,h:-1.5,z0:0,color:"#e6dfd2",shape:"pit"},{room:"103",label:"Pit banquette",x0:49.3,y0:66.3,x1:64.7,y1:68.3,h:1,z0:-1.5,color:"#d9cbb5",shape:"box"},{room:"103",label:"Pit banquette",x0:49.3,y0:75.7,x1:64.7,y1:77.7,h:1,z0:-1.5,color:"#d9cbb5",shape:"box"},{room:"103",label:"Pit banquette",x0:49.3,y0:68.3,x1:51.3,y1:75.7,h:1,z0:-1.5,color:"#d9cbb5",shape:"box"},{room:"103",label:"Coffee table",x0:54,y0:70.2,x1:60,y1:73.8,h:.8,z0:-1.5,color:"#6b4a33",shape:"box"},{room:"103",label:"Linear fire plinth",x0:67,y0:66,x1:69,y1:78,h:1.6,z0:0,color:"#f3f1ec",shape:"box"},{room:"103",label:"Lounge chairs",x0:45.5,y0:79,x1:48.5,y1:82,h:2.4,z0:0,color:"#6f7a55",shape:"box"},{room:"104",label:"Pantry shelving",x0:.4,y0:73,x1:1.8,y1:83.6,h:7.5,z0:0,color:"#c39a6b",shape:"box"},{room:"104",label:"Pantry shelving",x0:8.2,y0:77,x1:9.6,y1:83.6,h:7.5,z0:0,color:"#c39a6b",shape:"box"},{room:"105",label:"Cubbies + bench",x0:.4,y0:67.5,x1:2,y1:71.6,h:7,z0:0,color:"#c39a6b",shape:"box"},{room:"105",label:"Dog wash",x0:6.5,y0:60.4,x1:9.6,y1:63,h:2.6,z0:0,color:"#b9b1a3",shape:"box"},{room:"201",label:"King bed",x0:76,y0:74,x1:82.6,y1:81,h:2,z0:0,color:"#e6dfd2",shape:"box"},{room:"201",label:"Headboard",x0:75.6,y0:74,x1:82.9,y1:74.6,h:3.6,z0:0,color:"#6b4a33",shape:"box"},{room:"201",label:"Nightstands",x0:74.4,y0:74.2,x1:75.6,y1:75.8,h:1.8,z0:0,color:"#c39a6b",shape:"box"},{room:"201",label:"Nightstands",x0:82.9,y0:74.2,x1:84.1,y1:75.8,h:1.8,z0:0,color:"#c39a6b",shape:"box"},{room:"201",label:"Reading chairs",x0:74.5,y0:84.5,x1:77.5,y1:87,h:2.4,z0:0,color:"#6f7a55",shape:"box"},{room:"201",label:"Rug",x0:75,y0:72.5,x1:84,y1:83,h:.05,z0:0,color:"#cdbfa6",shape:"box"},{room:"202",label:"Hinoki soaking tub",x0:93,y0:83,x1:97.4,y1:87.4,h:2.2,z0:0,color:"#e2c894",shape:"box"},{room:"202",label:"Walk-in rain shower",x0:86.6,y0:80,x1:92,y1:87.4,h:.2,z0:0,color:"#55524c",shape:"box"},{room:"202",label:"Double vanity",x0:94.4,y0:74.6,x1:97.4,y1:81.5,h:2.9,z0:0,color:"#c39a6b",shape:"box"},{room:"202",label:"WC",x0:87,y0:74.6,x1:89,y1:77,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"203",label:"Closet millwork",x0:86.4,y0:64.4,x1:88.4,y1:73.6,h:7.5,z0:0,color:"#c39a6b",shape:"box"},{room:"203",label:"Closet millwork",x0:95.6,y0:64.4,x1:97.6,y1:73.6,h:7.5,z0:0,color:"#c39a6b",shape:"box"},{room:"203",label:"Island",x0:90.5,y0:67,x1:93.5,y1:71,h:3,z0:0,color:"#6b4a33",shape:"box"},{room:"204",label:"Engawa bench + books",x0:76.8,y0:30,x1:77.6,y1:58,h:1.5,z0:0,color:"#c39a6b",shape:"box"},{room:"205",label:"Washer/dryer",x0:78.4,y0:61.2,x1:82.6,y1:63.6,h:3,z0:0,color:"#f3f1ec",shape:"box"},{room:"205",label:"Fold counter",x0:83,y0:61.6,x1:87.6,y1:63.6,h:3,z0:0,color:"#c39a6b",shape:"box"},{room:"206",label:"Air handler + ERV",x0:94,y0:59,x1:97.6,y1:63.6,h:6,z0:0,color:"#9aa0a3",shape:"box"},{room:"206",label:"Linen shelves",x0:88.4,y0:54.4,x1:92,y1:56,h:7,z0:0,color:"#c39a6b",shape:"box"},{room:"207",label:"Bed (alcove)",x0:92,y0:46,x1:97.6,y1:53.6,h:2,z0:0,color:"#e6dfd2",shape:"box"},{room:"207",label:"Desk",x0:79,y0:43.4,x1:84,y1:45.4,h:2.5,z0:0,color:"#c39a6b",shape:"box"},{room:"207",label:"Closet",x0:88,y0:53,x1:92,y1:53.7,h:7,z0:0,color:"#c39a6b",shape:"box"},{room:"208",label:"Vanity 1",x0:81,y0:41.4,x1:86,y1:42.7,h:2.8,z0:0,color:"#c39a6b",shape:"box"},{room:"208",label:"Vanity 2",x0:81,y0:35.3,x1:86,y1:36.6,h:2.8,z0:0,color:"#c39a6b",shape:"box"},{room:"208",label:"Tub-shower",x0:91.5,y0:35.4,x1:97.6,y1:38.5,h:1.8,z0:0,color:"#f3f1ec",shape:"box"},{room:"208",label:"WC",x0:95,y0:40,x1:97,y1:42.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"209",label:"Queen bed (guest)",x0:90.5,y0:26.5,x1:97.6,y1:32.5,h:2,z0:0,color:"#e6dfd2",shape:"box"},{room:"209",label:"Desk",x0:79,y0:32.6,x1:84,y1:34.6,h:2.5,z0:0,color:"#c39a6b",shape:"box"},{room:"209",label:"Closet",x0:84,y0:24.3,x1:89,y1:25,h:7,z0:0,color:"#c39a6b",shape:"box"},{room:"210",label:"Walk-in shower",x0:83,y0:14.4,x1:87.6,y1:18.4,h:.2,z0:0,color:"#55524c",shape:"box"},{room:"210",label:"Vanity",x0:78.4,y0:14.6,x1:80,y1:19,h:2.8,z0:0,color:"#c39a6b",shape:"box"},{room:"210",label:"WC",x0:84,y0:21.5,x1:86,y1:23.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"211",label:"Pump + filter",x0:90,y0:15,x1:96,y1:18,h:3,z0:0,color:"#9aa0a3",shape:"box"},{room:"302",label:"Pilates Cadillac",x0:40,y0:14,x1:47.5,y1:16.6,h:6.8,z0:0,color:"#c39a6b",shape:"frame"},{room:"302",label:"Pull-up rig",x0:29.2,y0:16,x1:31.4,y1:21.5,h:8.5,z0:0,color:"#2a2a2a",shape:"frame"},{room:"302",label:"Dumbbell rack",x0:44,y0:20.8,x1:49.2,y1:21.8,h:3,z0:0,color:"#2a2a2a",shape:"box"},{room:"302",label:"Plyo boxes",x0:33,y0:18.5,x1:35,y1:20.5,h:2,z0:0,color:"#c39a6b",shape:"box"},{room:"302",label:"Plyo boxes",x0:35.4,y0:19,x1:37,y1:20.6,h:1.5,z0:0,color:"#c39a6b",shape:"box"},{room:"302",label:"Balance boards",x0:38,y0:19.8,x1:41,y1:21.2,h:.4,z0:0,color:"#6b4a33",shape:"box"},{room:"302",label:"Band anchor post",x0:49,y0:8,x1:49.6,y1:10,h:7,z0:0,color:"#2a2a2a",shape:"box"},{room:"302",label:"Training mats",x0:33,y0:4,x1:45,y1:11,h:.1,z0:0,color:"#6f7a55",shape:"box"},{room:"302",label:"Storage wall (bands, mats, kettlebells)",x0:28.3,y0:1,x1:30.3,y1:9.5,h:8,z0:0,color:"#c39a6b",shape:"box"},{room:"302",label:"Wall-mount rig + rings",x0:28.3,y0:10.5,x1:29.4,y1:15.5,h:8.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"303",label:"Cold plunge",x0:60,y0:17,x1:65.4,y1:21.4,h:.4,z0:0,color:"#5fa3b5",shape:"box"},{room:"303",label:"Rain showers",x0:51,y0:18.2,x1:56,y1:21.6,h:.15,z0:0,color:"#55524c",shape:"box"},{room:"303",label:"Teak bench",x0:51,y0:10,x1:57,y1:11.4,h:1.5,z0:0,color:"#c39a6b",shape:"box"},{room:"304",label:"Sauna benches",x0:50.4,y0:4.6,x1:57.6,y1:8.6,h:1.5,z0:0,color:"#c08552",shape:"box"},{room:"304",label:"Upper bench",x0:50.4,y0:6.8,x1:57.6,y1:8.6,h:3,z0:0,color:"#c08552",shape:"box"},{room:"305",label:"Heated marble bench",x0:58.4,y0:5.8,x1:65.6,y1:8.6,h:1.6,z0:0,color:"#ece8e1",shape:"box"},{room:"306",label:"Lockers + towels",x0:70.6,y0:1,x1:71.6,y1:12,h:7,z0:0,color:"#c39a6b",shape:"box"},{room:"401",label:"Genkan bench",x0:18,y0:58.6,x1:21.6,y1:59.6,h:1.5,z0:0,color:"#c39a6b",shape:"box"},{room:"401",label:"Rammed earth wall",x0:10.5,y0:48.6,x1:11.2,y1:51,h:9,z0:0,color:"#b98d6c",shape:"box"},{room:"402",label:"Coats",x0:10.4,y0:41.4,x1:11.6,y1:47.6,h:7,z0:0,color:"#c39a6b",shape:"box"},{room:"403",label:"Vanity",x0:20.6,y0:44.5,x1:21.6,y1:47.6,h:2.8,z0:0,color:"#b9b1a3",shape:"box"},{room:"403",label:"WC",x0:16.4,y0:41.4,x1:18.6,y1:43.4,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"404",label:"Tatami mats",x0:11,y0:29,x1:21,y1:40,h:.15,z0:0,color:"#d8cf9a",shape:"box"},{room:"404",label:"Tokonoma",x0:10.4,y0:33,x1:12,y1:38,h:1,z0:0,color:"#6b4a33",shape:"box"},{room:"404",label:"Low table",x0:15,y0:33,x1:18,y1:36,h:1.2,z0:0,color:"#6b4a33",shape:"box"},{room:"405",label:"Gear racks",x0:10.4,y0:22.4,x1:21.6,y1:24,h:7,z0:0,color:"#9aa0a3",shape:"box"},{room:"407",label:"Work desk + computer",x0:18,y0:2,x1:26,y1:4.6,h:2.5,z0:0,color:"#6b4a33",shape:"box"},{room:"407",label:"Monitors",x0:19,y0:3.4,x1:25,y1:3.8,h:1.5,z0:2.5,color:"#2a2a2a",shape:"box"},{room:"407",label:"MPC",x0:25,y0:3,x1:26,y1:4,h:.3,z0:2.5,color:"#2a2a2a",shape:"box"},{room:"407",label:"Digital piano",x0:5,y0:8,x1:6.8,y1:13,h:3,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"E-drum kit",x0:7,y0:15,x1:12,y1:20,h:3.5,z0:0,color:"#2a2a2a",shape:"drums"},{room:"407",label:"Guitar stand",x0:13,y0:19.8,x1:14.5,y1:21,h:4,z0:0,color:"#b0684a",shape:"box"},{room:"407",label:"Mic stand",x0:15.5,y0:14,x1:16.3,y1:14.8,h:5.5,z0:0,color:"#9aa0a3",shape:"box"},{room:"407",label:"PA speakers",x0:4.5,y0:4,x1:6,y1:5.6,h:5.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"PA speakers",x0:4.5,y0:16.4,x1:6,y1:18,h:5.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"Mixer rack",x0:9,y0:1,x1:13,y1:2.6,h:3.2,z0:0,color:"#55524c",shape:"box"},{room:"407",label:"Sofa",x0:20,y0:15.5,x1:27.4,y1:18.5,h:2.6,z0:0,color:"#6f7a55",shape:"box"},{room:"407",label:"Rug",x0:8,y0:6,x1:17,y1:13,h:.05,z0:0,color:"#cdbfa6",shape:"box"}],u_=[{id:"living",x0:0,y0:60,x1:72,y1:84,oh:{n:8,s:6,w:4,e:0},type:"butterfly",valley:72,hv:12.6,he:14.6,wall:12},{id:"master",x0:72,y0:64,x1:98,y1:88,oh:{n:6,s:0,w:0,e:4},type:"flat",h:11.6},{id:"east",x0:72,y0:14,x1:98,y1:64,oh:{n:0,s:4,w:6,e:4},type:"flat",h:10.6},{id:"south",x0:28,y0:0,x1:72,y1:27,oh:{n:6,s:6,w:0,e:0},type:"flat",h:12.6},{id:"office",x0:4,y0:0,x1:28,y1:22,oh:{n:4,s:6,w:4,e:1},type:"flat",h:14.6},{id:"west",x0:10,y0:22,x1:28,y1:60,oh:{n:0,s:0,w:5,e:6},type:"flat",h:10.6}],f_={pool:{x0:54,y0:-22,x1:88,y1:-10},pooldeck:{x0:48,y0:-28,x1:98,y1:0},lane:{x0:-32,y0:-16,x1:43,y1:-8},outdoor_shower:{x0:72.5,y0:4,x1:77.5,y1:10},veg:{x0:-36,y0:66,x1:-12,y1:88},bikes:{x0:-5,y0:61,x1:-1.5,y1:71},carport:{x0:-44,y0:30,x1:-20,y1:54},entrycourt:{x0:-20,y0:26,x1:10,y1:60},pergola:{x0:8,y0:86,x1:26,y1:100},veranda:{x0:26,y0:84,x1:72,y1:92},firepit:{cx:58,cy:104,r:7},zen:{x0:36,y0:33,x1:58,y1:50},maple:{cx:63,cy:44},bathgarden:{x0:98,y0:74,x1:106,y1:88},climb:{x0:-22,y0:0,x1:-4,y1:18,oh:5,h:13}},d_={"Living Pavilion":"stucco","Sleeping Wing":"stucco","Wellness + Gym Wing":"rammed","Studio + Arrival":"charred"},p_={104:"charred",105:"charred",304:"rammed",305:"rammed",401:"rammed",407:"charred"},m_=5952,g_={x0:28,y0:27,x1:72,y1:60},x_=[{id:"C1",name:"Climbing Pavilion",x0:-22,y0:0,x1:-4,y1:18,w:18,d:18,area:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. 16-ft-wide, 12-ft-high kids' bouldering wall on the north side facing the sprint lane, over a 12-inch poured-rubber soft-fall surface. Sits in the active zone with the gym, sprint lane and a second bike rack."}],Mt={rooms:l_,walls:c_,furn:h_,roofs:u_,site:f_,clad:d_,cladOvr:p_,total:m_,courtyard:g_,covered:x_},wt=49,Bt=44,tn=(i,e,t=0)=>new D(i-wt,t,-(e-Bt)),ou=new yn(new D(0,-1,0),1e5),lu=[ou];function __(){const i=o_(),e={},t=n=>new En(n);e.stucco=t({map:i.stucco,roughness:.92}),e.plaster=t({map:i.plaster,roughness:.95}),e.charred=t({map:i.charred,roughness:.85}),e.rammed=t({map:i.rammed,roughness:.95}),e.stone=t({map:i.stone,roughness:.8}),e.plinth=t({map:i.plinth,roughness:.9}),e.oak=t({map:i.oak,roughness:.6}),e.deck=t({map:i.deck,roughness:.8}),e.soffit=t({map:i.soffit,roughness:.75}),e.tatami=t({map:i.tatami,roughness:.9}),e.rubber=t({map:i.rubber,roughness:.95}),e.seam=t({map:i.seam,roughness:.55,metalness:.15}),e.gravel=t({map:i.gravel,roughness:1}),e.turf=t({map:i.turf,roughness:1}),e.meadow=t({map:i.meadow,roughness:1}),e.cedar=t({map:i.cedar,roughness:.8}),e.concrete=t({map:i.concrete,roughness:.9}),e.frame=t({color:3880239,roughness:.5,metalness:.4}),e.glass=new Pd({color:13624294,roughness:.05,metalness:0,transparent:!0,opacity:.22,depthWrite:!1,side:Nn,emissive:0}),e.water=t({color:5087155,roughness:.08,metalness:.1,transparent:!0,opacity:.88}),e.white=t({color:15855335,roughness:.6}),e.dark=t({color:2894375,roughness:.7}),e.fir=t({color:13146726,roughness:.7}),e.highlight=new Js({color:7700575,transparent:!0,opacity:.28,depthWrite:!1}),e.c={};for(const n of["stucco","plaster","charred","rammed","cedar","stone","frame","glass","oak","fir"]){const s=e[n].clone();s.clippingPlanes=lu,s.clipShadows=!0,e.c[n]=s}return e.T=i,e}const eo={};function gt(i){if(!eo[i]){const e=new En({color:new He(i),roughness:.75});e.clippingPlanes=lu,e.clipShadows=!0,eo[i]=e}return eo[i]}function bl(i,e,t){const n=new gi(i,e,t),s=n.attributes.uv,r=[[t,e],[t,e],[i,t],[i,t],[i,e],[i,e]];for(let a=0;a<6;a++)for(let o=0;o<4;o++){const l=a*4+o;s.setXY(l,s.getX(l)*r[a][0],s.getY(l)*r[a][1])}return n}class v_{constructor(){this.b=new Map}add(e,t,n){const s=e+"|"+t.uuid;this.b.has(s)||this.b.set(s,{layer:e,mat:t,geos:[]}),this.b.get(s).geos.push(n.index?n.toNonIndexed():n)}build(e,t={}){for(const{layer:n,mat:s,geos:r}of this.b.values()){const a=r.map(h=>{const f=new bt;return f.setAttribute("position",h.attributes.position),f.setAttribute("normal",h.attributes.normal),h.attributes.uv?f.setAttribute("uv",h.attributes.uv):f.setAttribute("uv",new nn(new Float32Array(h.attributes.position.count*2),2)),f}),o=a_(a,!1),l=new Ut(o,s),c=s.transparent;l.castShadow=!c&&n!=="ground",l.receiveShadow=!s.transparent||s===void 0,n==="glass"&&(l.renderOrder=2,l.castShadow=!1),e[n].add(l)}}}const Wt=new v_;function le(i,e,t,n,s,r,a,o){const l=Math.abs(s-t),c=Math.abs(r-n),h=Math.abs(o-a);if(l<.001||c<.001||h<.001)return;const f=bl(l,h,c);if(f.translate((t+s)/2-wt,(a+o)/2,-((n+r)/2-Bt)),Array.isArray(e)){const u=[0,1,2,3,4,5],d=f.toNonIndexed();u.forEach(m=>{const v=new bt;for(const g of["position","normal","uv"]){const p=d.attributes[g];v.setAttribute(g,new nn(p.array.slice(m*6*p.itemSize,(m+1)*6*p.itemSize),p.itemSize))}Wt.add(i,e[m],v)})}else Wt.add(i,e,f)}function un(i,e,t,n,s,r,a,o=20,l){const c=new hs(l??s,s,a-r,o);c.translate(t-wt,(r+a)/2,-(n-Bt)),Wt.add(i,e,c)}const El=Mt.roofs;function Li(i,e){let t=null;for(const n of El){if(i<n.x0-.01||i>n.x1+.01||e<n.y0-.01||e>n.y1+.01)continue;let s;if(n.type==="flat")s=n.h-.6;else{const r=n.y1+n.oh.n,a=n.y0-n.oh.s;s=e>=n.valley?n.hv+(n.he-n.hv)*(e-n.valley)/(r-n.valley):n.hv+(n.he-n.hv)*(n.valley-e)/(n.valley-a)}t=t===null?s:Math.max(t,s)}return t??10}function y_(i){for(const e of El){const t=e.x0-e.oh.w,n=e.x1+e.oh.e,s=e.y0-e.oh.s,r=e.y1+e.oh.n;if(e.type==="flat"){const a=e.h-.6,o=e.h+.4;le("roof",[i.charred,i.charred,i.seam,i.soffit,i.charred,i.charred],t,s,n,r,a,o),le("roof",i.dark,t-.05,s-.05,n+.05,r+.05,o-.05,o+.05)}else{const o=n-t,l=(t+n)/2-wt,c=(f,u,d,m,v,g,p,M=0)=>{const A=-(f-Bt),y=-(d-Bt),w=Math.hypot(A-y,u-m),E=bl(g??o,.9,w),C=Math.atan2(m-u,A-y);E.rotateX(C),E.translate(p??l,(u+m)/2+.9/2-M,(A+y)/2);const x=E.toNonIndexed();v.forEach((T,P)=>{const b=new bt;for(const L of["position","normal","uv"]){const B=x.attributes[L];b.setAttribute(L,new nn(B.array.slice(P*6*B.itemSize,(P+1)*6*B.itemSize),B.itemSize))}Wt.add("roof",T,b)})},h=[i.charred,i.charred,i.seam,i.soffit,i.charred,i.charred];c(s,e.he,e.valley,e.hv,h),c(e.valley,e.hv,r,e.he,h);for(let f=e.x0+10;f<e.x1;f+=8){const u=[i.c.fir,i.c.fir,i.c.fir,i.c.fir,i.c.fir,i.c.fir];c(e.y0,Li(f,e.y0),e.valley,e.hv,u,.55,f-wt,1.1),c(e.valley,e.hv,e.y1,Li(f,e.y1),u,.55,f-wt,1.1)}le("roof",i.frame,t,e.valley-.4,n,e.valley+.4,e.hv+.6,e.hv+.95)}}}function S_(i){const e=Mt.rooms.find(t=>t.id===i);return e&&(Mt.cladOvr[i]||Mt.clad[e.wing])||"stucco"}const wl=[];function M_(i){const e=[...i.feats].sort((s,r)=>s.a-r.a),t=[];let n=i.a;for(const s of e)s.a>n+1e-6&&t.push({a:n,b:s.a,k:"solid"}),t.push({a:s.a,b:s.b,k:s.k,x:s.x}),n=s.b;return i.b>n+1e-6&&t.push({a:n,b:i.b,k:"solid"}),t}const Yr=(i,e)=>i.o==="h"?[e,i.c]:[i.c,e];function to(i,e,t,n,s,r,a,o,l){const c=new ta;if(c.moveTo(n,r),c.lineTo(s,r),a!=null)c.lineTo(s,a),c.lineTo(n,a);else{const u=[s];if(t.o==="v")for(const v of El)v.type==="butterfly"&&t.c>=v.x0-.01&&t.c<=v.x1+.01&&v.valley>n&&v.valley<s&&u.unshift(v.valley);u.sort((v,g)=>g-v);for(const v of u){const[g,p]=Yr(t,v);c.lineTo(v,Li(g,p))}const[d,m]=Yr(t,n);c.lineTo(n,Li(d,m))}c.closePath();const h=new _l(c,{depth:l-o,bevelEnabled:!1,steps:1}),f=new st;t.o==="h"?f.makeTranslation(-wt,0,-(t.c-Bt)-l):(f.makeRotationY(Math.PI/2),f.premultiply(new st().makeTranslation(t.c-wt+o,0,Bt))),h.applyMatrix4(f),Wt.add(i,e,h)}function Dr(i,e,t,n,s,r){const a=e.ext?.75:.45;let o=t,l=n;if(e.ext&&(Math.abs(t-e.a)<1e-6&&(o-=a/2),Math.abs(n-e.b)<1e-6&&(l+=a/2)),e.ext){const c=e.pos||e.neg,h=e.pos?-1:1,f=i.c[S_(c)],u=c==="304"?i.c.cedar:i.c.plaster,d=h>0?[0,a/2]:[-a/2,0],m=h>0?[-a/2,0]:[0,a/2];to("walls",f,e,o,l,s,r,d[0],d[1]),to("walls",u,e,o,l,s,r,m[0],m[1])}else{const c=e.pos==="304"||e.neg==="304";to("walls",c?i.c.cedar:i.c.plaster,e,t-a/2+.001,n+a/2-.001,s,r,-a/2,a/2)}}function fh(i,e,t,n,s,r,a){const l=(h,f,u,d,m,v,g,p)=>{e.o==="h"?le(p,g,h,e.c+m,f,e.c+v,u,d):le(p,g,e.c+m,h,e.c+v,f,u,d)};l(t,n,s,r,-.08/2,.08/2,i.c.glass,"glass"),l(t,n,s,s+.25,-.18,.18,i.c.frame,"walls"),l(t,n,r-.3,r,-.18,.18,i.c.frame,"walls");const c=Math.max(1,Math.round((n-t)/(a?5.5:8)));for(let h=0;h<=c;h++){const f=t+(n-t)*h/c;l(f-.09,f+.09,s,r,-.15,.15,i.c.frame,"walls")}wl.push({s:e,a:t,b:n})}function b_(i){for(const e of Mt.walls)for(const t of M_(e)){const[n,s]=Yr(e,(t.a+t.b)/2),r=Li(n,s);if(t.k==="solid")Dr(i,e,t.a,t.b,0,null),wl.push({s:e,a:t.a,b:t.b});else if(t.k!=="open")if(["door","exdoor","slide","front"].includes(t.k)){const a=t.k==="front"?9:t.k==="slide"?8:7.5;if(r>a+.05&&Dr(i,e,t.a,t.b,a,null),t.k==="front"){const o=t.b-t.a,l=bl(o*.62,a-.05,.22);l.translate(o*.31,a/2,0),l.rotateY(-.55);const[c,h]=Yr(e,t.a+o*.19);l.translate(c-wt,0,-(h-Bt)),Wt.add("walls",i.c.fir,l)}}else if(t.k==="window"){const[a,o]=t.x;Dr(i,e,t.a,t.b,0,a),fh(i,e,t.a,t.b,a,Math.min(o,r),!1),r>o+.05&&Dr(i,e,t.a,t.b,o,null)}else(t.k==="glass"||t.k==="fixed")&&fh(i,e,t.a,t.b,0,r,t.k==="glass")}}const E_={oak:"oak",stone:"stone",tatami:"tatami",rubber:"rubber",cedar:"cedar",concrete:"concrete"},cu=[];function w_(i,e){const t=new Js({visible:!1});for(const n of Mt.rooms){const s=i[E_[n.floor]]||i.oak,r=[i.plinth,i.plinth,s,i.plinth,i.plinth,i.plinth],a=Mt.furn.find(h=>h.room===n.id&&h.shape==="pit");a?(le("floors",r,n.x0,n.y0,n.x1,a.y0,-1.8,0),le("floors",r,n.x0,a.y1,n.x1,n.y1,-1.8,0),le("floors",r,n.x0,a.y0,a.x0,a.y1,-1.8,0),le("floors",r,a.x1,a.y0,n.x1,a.y1,-1.8,0),le("floors",[i.oak,i.oak,i.oak,i.oak,i.oak,i.oak],a.x0,a.y0,a.x1,a.y1,-2,-1.5)):le("floors",r,n.x0,n.y0,n.x1,n.y1,-1.8,0);const o=Li((n.x0+n.x1)/2,(n.y0+n.y1)/2),l=new gi(n.w-.2,o,n.d-.2);l.translate((n.x0+n.x1)/2-wt,o/2,-((n.y0+n.y1)/2-Bt));const c=new Ut(l,t);c.userData.room=n.id,e.pick.add(c),cu.push(c)}}function T_(i){for(const e of Mt.furn){if(e.shape==="pit")continue;const t=gt(e.color),n=e.z0,s=e.z0+Math.max(e.h,.04);if(e.shape==="frame")if([[e.x0,e.y0],[e.x1-.25,e.y0],[e.x0,e.y1-.25],[e.x1-.25,e.y1-.25]].forEach(([o,l])=>le("furn",t,o,l,o+.25,l+.25,n,s)),le("furn",t,e.x0,e.y0,e.x1,e.y0+.25,s-.25,s),le("furn",t,e.x0,e.y1-.25,e.x1,e.y1,s-.25,s),le("furn",t,e.x0,e.y0,e.x0+.25,e.y1,s-.25,s),le("furn",t,e.x1-.25,e.y0,e.x1,e.y1,s-.25,s),e.label.includes("Cadillac"))le("furn",gt("#e6dccb"),e.x0+.2,e.y0+.2,e.x1-.2,e.y1-.2,1.9,2.4),le("furn",t,e.x0,e.y0,e.x1,e.y1,0,1.9);else for(let o=1;o<4;o++)le("furn",t,e.x0,e.y0+(e.y1-e.y0)*o/4,e.x1,e.y0+(e.y1-e.y0)*o/4+.12,s-.5,s-.38);else if(e.shape==="drums"){const r=(e.x0+e.x1)/2,a=(e.y0+e.y1)/2;[[0,-1.4,.9,1.1],[-1.5,0,.6,2.4],[1.5,.2,.55,2.6],[-.8,1.3,.5,2.8],[.9,1.4,.5,2.8],[-2,1.6,.7,3.6],[2.1,1.7,.75,3.8]].forEach(([o,l,c,h],f)=>{f>=5?(un("furn",gt("#b39a5a"),r+o,a+l,c,h,h+.05,16),un("furn",t,r+o,a+l,.05,0,h,6)):un("furn",f===0?gt("#444"):t,r+o,a+l,c,f===0?0:h-.35,f===0?1.8:h,16)}),un("furn",gt("#6f7a55"),r,a+2.4,.6,0,1.6,12)}else if(e.shape==="wall"){le("furn",t,e.x0,e.y0,e.x1,e.y1,n,s);const r=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2"];for(let a=0;a<46;a++){const o=e.y0+.4+a*37%100/100*(e.y1-e.y0-.8),l=.8+a*53%100/100*(s-1.6);le("furn",gt(r[a%5]),e.x1,o,e.x1+.22,o+.35,l,l+.3)}}else le("furn",t,e.x0,e.y0,e.x1,e.y1,n,s),e.label.includes("Guitar")&&(un("furn",gt("#a8743f"),(e.x0+e.x1)/2,(e.y0+e.y1)/2,.6,1,2.6,16),le("furn",gt("#3a2a20"),(e.x0+e.x1)/2-.08,(e.y0+e.y1)/2-.08,(e.x0+e.x1)/2+.08,(e.y0+e.y1)/2+.08,2.6,4.2)),e.label.includes("Mic")&&un("furn",gt("#222"),(e.x0+e.x1)/2,(e.y0+e.y1)/2,.18,s,s+.45,10)}for(let e=0;e<6;e++){const t=44.4+e*.8;un("furn",gt("#222"),t,21.3,.18,3,3.5,10)}un("furn",gt("#6b4a33"),42.2,20.5,.35,0,.7,12)}function bs(i,e,t,n,s,r,a,o,l=.45,c=.15){const h=Math.hypot(s-t,r-n),f=Math.floor(h/l);for(let u=0;u<=f;u++){const d=u/f,m=t+(s-t)*d,v=n+(r-n)*d;le(i,e,m-c/2,v-c/2,m+c/2,v+c/2,a,o)}}function A_(i,e){const t=Mt.site,n=-1.7,s=new Ii(1600,1600,1,1);s.rotateX(-Math.PI/2);const r=s.attributes.uv;for(let b=0;b<r.count;b++)r.setXY(b,r.getX(b)*1600,r.getY(b)*1600);const a=new Ut(s,i.meadow);a.position.y=n,a.receiveShadow=!0,e.ground.add(a);const o=Mt.courtyard;le("site",[i.plinth,i.plinth,i.stone,i.plinth,i.plinth,i.plinth],o.x0,o.y0,o.x1,o.y1,n,-.45);const l=[i.deck,i.deck,i.deck,i.deck,i.deck,i.deck];le("site",l,o.x0,o.y1-4,o.x1,o.y1,-.45,-.2),le("site",l,o.x0,o.y0,o.x1,o.y0+4,-.45,-.2),le("site",l,o.x0,o.y0+4,o.x0+4,o.y1-4,-.45,-.2),le("site",l,o.x1-4,o.y0+4,o.x1,o.y1-4,-.45,-.2);const c=t.zen;le("site",i.plinth,c.x0-.3,c.y0-.3,c.x1+.3,c.y1+.3,-.45,-.3),le("site",i.gravel,c.x0,c.y0,c.x1,c.y1,-.45,-.32),[[41,44,1.6,1.4],[52,39,1.2,1],[54,46,.9,.8]].forEach(([b,L,B,I])=>{const F=new ml(B,0);F.scale(1,I/B*.7,1),F.translate(b-wt,-.3+I*.3,-(L-Bt)),Wt.add("site",i.plinth,F)}),[[64,32.5],[66,36],[65,52],[62,55.5],[60,40.5]].forEach(([b,L])=>le("site",i.stone,b-1,L-.7,b+1,L+.7,-.45,-.25)),un("site",i.plinth,47,54,1.1,-.45,.9,14),un("site",i.water,47,54,.8,.9,.95,14);const h=t.maple;un("site",i.dark,h.cx,h.cy,.35,-.45,6,8,.25);const f=new En({color:12604974,roughness:.9});[[0,0,7.5,3.2],[2,1,6.5,2.4],[-2,-1,6.8,2.5],[1,-2,8.5,2.1],[-1,2,8.6,2]].forEach(([b,L,B,I])=>{const F=new Ys(I,1);F.scale(1,.7,1),F.translate(h.cx+b-wt,B,-(h.cy+L-Bt)),Wt.add("site",f,F)});const u=t.pooldeck,d=t.pool;le("site",[i.plinth,i.plinth,i.stone,i.plinth,i.plinth,i.plinth],u.x0,u.y0,u.x1,d.y0,n,-1),le("site",[i.plinth,i.plinth,i.stone,i.plinth,i.plinth,i.plinth],u.x0,d.y1,u.x1,u.y1,n,-1),le("site",[i.plinth,i.plinth,i.stone,i.plinth,i.plinth,i.plinth],u.x0,d.y0,d.x0,d.y1,n,-1),le("site",[i.plinth,i.plinth,i.stone,i.plinth,i.plinth,i.plinth],d.x1,d.y0,u.x1,d.y1,n,-1),le("site",new En({color:8369858,roughness:.6}),d.x0,d.y0,d.x1,d.y1,-5.5,-5.4),le("site",i.water,d.x0,d.y0,d.x1,d.y1,-5.4,-1.4);for(let b=0;b<3;b++)le("site",gt("#d8cbb3"),60+b*7,-27,62.5+b*7,-23.5,-1,-.2);const m=t.outdoor_shower;le("site",i.stone,m.x0,m.y0,m.x1,m.y1,-1.2,-.9),bs("site",i.c.fir,m.x0,m.y0,m.x0,m.y1,-.9,7),bs("site",i.c.fir,m.x0,m.y0,m.x1,m.y0,-.9,7),le("site",i.frame,m.x1-.8,m.y1-1,m.x1-.6,m.y1-.8,-.9,7.2),le("site",i.frame,m.x1-1.8,m.y1-1,m.x1-.6,m.y1-.8,7,7.2);const v=t.lane;le("site",i.turf,v.x0,v.y0,v.x1,v.y1,n,-1.05);for(let b=0;b<=4;b++){const L=v.x0+b*15;le("site",i.white,L-.15,v.y0,L+.15,v.y1,-1.05,-1.02)}le("site",i.white,v.x0,(v.y0+v.y1)/2-.08,v.x1,(v.y0+v.y1)/2+.08,-1.05,-1.03),le("site",i.c.charred,v.x1+.5,v.y0-1,v.x1+1.5,v.y1+1,n,2.5),le("site",i.stone,4,-8,48,0,n,-1.05);const g=t.veg;le("site",i.gravel,g.x0,g.y0,g.x1,g.y1,n,-1.1);for(let b=0;b<4;b++){const L=g.x0+1.5+b*5.8;le("site",i.c.fir,L,g.y0+2,L+4,g.y0+20,n,.6),le("site",gt("#4a3a2c"),L+.2,g.y0+2.2,L+3.8,g.y0+19.8,.6,.65);for(let B=0;B<8;B++){const I=new Ys(.75,0);I.translate(L+2-wt,1.1,-(g.y0+3.5+B*2.1-Bt)),Wt.add("site",gt(B%3?"#5f8a3e":"#7aa64c"),I)}}bs("site",i.c.fir,g.x0,g.y0,g.x0,g.y1,n,3.5,1.2,.2),bs("site",i.c.fir,g.x0,g.y1,g.x1,g.y1,n,3.5,1.2,.2);const p=t.bikes;le("site",i.stone,p.x0-1,p.y0,p.x1,p.y1,n,-1.05);const M=new En({color:2236962,roughness:.7});for(let b=0;b<4;b++){const L=p.y0+1.2+b*2.4;le("site",i.frame,p.x0+.2,L-.05,p.x1-.2,L+.05,-1.05,1.3),[0,2.5].forEach(B=>{const I=new Ns(1.1,.12,6,18);I.rotateY(Math.PI/2*0),I.translate(p.x0-1.2+B-wt,0,-(L-Bt)),Wt.add("site",M,I)}),le("site",gt(["#a3613d","#3f7fbf","#4e9a52","#e8c547"][b]),p.x0-1.2,L-.06,p.x0+1.3,L+.06,.6,.75)}const A=t.entrycourt;le("site",i.stone,A.x0,A.y0,A.x1,A.y1,n,-1.05),le("site",i.gravel,-46,16,-20,58,n,-1.1);const y=new ta;[[-90,4],[-60,10],[-44,24],[-46,16],[-62,0],[-90,-6]].forEach(([b,L],B)=>B?y.lineTo(b-wt,L-Bt):y.moveTo(b-wt,L-Bt));const w=new vl(y);w.rotateX(-Math.PI/2),w.scale(1,1,1),w.translate(0,n+.08,0),Wt.add("site",i.gravel,w);const E=t.carport;[[E.x0,E.y0],[E.x1-.6,E.y0],[E.x0,E.y1-.6],[E.x1-.6,E.y1-.6]].forEach(([b,L])=>le("site",i.c.charred,b,L,b+.6,L+.6,n,9)),le("site",[i.charred,i.charred,i.seam,i.soffit,i.charred,i.charred],E.x0-3,E.y0-3,E.x1+3,E.y1+3,9,9.8),le("site",gt("#8d9399"),E.x0+3,E.y0+3,E.x0+9.5,E.y1-4,n,3.6),le("site",gt("#5b6e5a"),E.x0+13,E.y0+3,E.x0+19.5,E.y1-4,n,4.8),bs("site",i.c.fir,-2,30,-2,46,n,8,.5),le("site",i.c.rammed,-2.5,46.5,-1.5,59.5,n,4);const C=t.veranda;le("site",[i.plinth,i.plinth,i.deck,i.plinth,i.plinth,i.plinth],C.x0,C.y0,C.x1,C.y1,n,-.25);const x=t.pergola;le("site",[i.plinth,i.plinth,i.stone,i.plinth,i.plinth,i.plinth],x.x0,x.y0,x.x1,x.y1,n,-.25),[[x.x0,x.y0+.5],[x.x1-.7,x.y0+.5],[x.x0,x.y1-.7],[x.x1-.7,x.y1-.7]].forEach(([b,L])=>le("site",i.c.charred,b,L,b+.7,L+.7,-.25,9)),le("site",i.c.charred,x.x0-1,x.y0+.5,x.x1+1,x.y0+1.1,8.4,9.2),le("site",i.c.charred,x.x0-1,x.y1-1.1,x.x1+1,x.y1-.5,8.4,9.2);for(let b=x.x0;b<=x.x1;b+=1.2)le("site",i.c.fir,b,x.y0-.5,b+.25,x.y1+.5,9.2,9.7);le("site",gt("#6b4a33"),12,90,22,94,2.2,2.5),[12.5,21].forEach(b=>le("site",gt("#6b4a33"),b,90.5,b+.4,93.5,-.25,2.2)),le("site",gt("#d9cbb5"),12,88.4,22,89.6,-.25,1.3),le("site",gt("#d9cbb5"),12,94.4,22,95.6,-.25,1.3);const T=t.firepit;{const b=new hs(T.r+1.5,T.r+1.5,.4,40);b.translate(T.cx-wt,n+.1,-60),Wt.add("site",i.stone,b);const L=new Ns(T.r-1.2,.9,6,40);L.rotateX(Math.PI/2),L.translate(T.cx-wt,n+.3,-60),Wt.add("site",gt("#cdbfa6"),L),un("site",i.plinth,T.cx,T.cy,1.6,n,-.2,16);const B=new En({color:16747069,emissive:16738842,emissiveIntensity:1.5});B.name="fire";const I=new jr(.9,1.6,8);I.translate(T.cx-wt,.6,-60),Wt.add("site",B,I)}{const b=t.climb,L=b.oh;le("site",[i.plinth,i.plinth,i.stone,i.plinth,i.plinth,i.plinth],b.x0-1,b.y0-1,b.x1+1,b.y1+1,n,-1),le("site",gt("#b5694a"),b.x0,b.y0,b.x1,b.y1,-1,-.6),[[b.x0,b.y0],[b.x1-.7,b.y0],[b.x0,b.y1-.7],[b.x1-.7,b.y1-.7]].forEach(([I,F])=>le("site",i.c.fir,I,F,I+.7,F+.7,-.6,b.h-1)),le("site",i.c.fir,b.x0-.5,b.y0,b.x1+.5,b.y0+.7,b.h-2,b.h-1),le("site",i.c.fir,b.x0-.5,b.y1-.7,b.x1+.5,b.y1,b.h-2,b.h-1);for(let I=b.x0+3;I<b.x1-1;I+=3)le("site",i.c.fir,I,b.y0-L+.5,I+.35,b.y1+L-.5,b.h-1,b.h-.6);le("site",[i.charred,i.charred,i.seam,i.soffit,i.charred,i.charred],b.x0-L,b.y0-L,b.x1+L,b.y1+L,b.h-.6,b.h+.3),le("site",i.c.charred,b.x0+1,b.y1-1.6,b.x1-1,b.y1-.9,-.6,11.4),le("site",i.c.fir,b.x0+1.2,b.y1-2,b.x1-1.2,b.y1-1.6,-.4,11.2);const B=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2","#f1eee7"];for(let I=0;I<70;I++){const F=b.x0+1.6+I*37%100/100*14.6,q=.6+I*53%100/100*10;le("site",gt(B[I%6]),F,b.y1-2.3,F+.38,b.y1-2,q,q+.3)}le("site",gt("#d9cbb5"),b.x0+9,b.y1-3.4,b.x0+12,b.y1-2,4,6.5),le("site",gt("#55524c"),b.x0+1.2,b.y1-7,b.x1-1.2,b.y1-2.3,-.6,.2);for(let I=0;I<4;I++){const F=b.y0+3+I*2.4;le("site",i.frame,b.x1-2.2,F-.05,b.x1-.9,F+.05,-.6,1.8),[0,2.3].forEach(q=>{const V=new Ns(1,.11,6,18);V.translate(b.x1-3.6+q-wt,.5,-(F-Bt)),Wt.add("site",M,V)}),le("site",gt(["#4e9a52","#e8c547","#3f7fbf","#a3613d"][I]),b.x1-3.6,F-.06,b.x1-1.2,F+.06,1,1.15)}le("site",i.stone,b.x1+1,2,4,6,n,-1)}const P=t.bathgarden;le("site",i.c.stucco,P.x1-.5,P.y0,P.x1,P.y1,n,7),le("site",i.c.stucco,P.x0,P.y1-.5,P.x1,P.y1,n,7),le("site",i.gravel,P.x0,P.y0,P.x1-.5,P.y1-.5,n,-1.1),le("site",i.stone,72,0,78,14,n,-.9),le("site",i.stone,66,-0,72,1,n,-.95)}function R_(i){const e=new hs(.35,.5,1,6);e.translate(0,.5,0);const t=new jr(1,1,7);t.translate(0,.5,0);const n=new Ys(1,1),s=[];let r=11;const a=()=>(r=r*16807%2147483647,r/2147483647);for(let d=0;d<400&&s.length<120;d++){const m=-170+a()*420,v=-140+a()*340;m>-70&&m<135&&v>-50&&v<125||v>90&&m>-40&&m<140||v<-45&&m>-80&&m<130||m>-100&&m<-40&&v>-10&&v<30||s.push([m,v,a()])}const o=new Ba(e,new En({color:14605008,roughness:.9}),s.length),l=new Ba(t,new En({color:4085046,roughness:.9}),s.length),c=new Ba(n,new En({color:12038218,roughness:.9}),s.length),h=new st;let f=0,u=0;s.forEach(([d,m,v],g)=>{const p=m>60?v<.6:v<.35,M=p?26+v*30:22+v*16;h.compose(tn(d,m,-1.7),new wn,new D(1,p?M*.25:M*.6,1)),o.setMatrixAt(g,h),p?(h.compose(tn(d,m,M*.18),new wn,new D(5+v*3,M*.85,5+v*3)),l.setMatrixAt(f++,h)):(h.compose(tn(d,m,M*.7),new wn,new D(4+v*2,M*.32,4+v*2)),c.setMatrixAt(u++,h))}),l.count=f,c.count=u,[o,l,c].forEach(d=>{d.castShadow=!0,d.receiveShadow=!0,i.site.add(d)})}function Ir(i,e){const t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function hu(i,e){const t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Ir(t,n),c=Ir(t+1,n),h=Ir(t,n+1),f=Ir(t+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+f)*a*o}function C_(i,e){let t=0,n=.5,s=1;for(let r=0;r<6;r++){const a=1-Math.abs(hu(i*s,e*s)*2-1);t+=a*a*n,n*=.5,s*=2.05}return t}function P_(i){const r=[],a=[],o=[],l=new He(9278560),c=new He(3952439),h=new He(8748660),f=new He(16119540),u=new He(11845835),d=(p,M,A)=>{const y=Math.min(1,Math.max(0,(A-p)/(M-p)));return y*y*(3-2*y)};for(let p=0;p<=90;p++){const M=p/90,A=700+19300*Math.pow(M,1.9);for(let y=0;y<=320;y++){const w=y/320*Math.PI*2,E=Math.sin(w)*A,C=-Math.cos(w)*A,x=.55+.75*Math.pow(Math.max(0,Math.cos(w)),2),T=hu(E/600+9,C/600+2)*260*d(900,2600,A)*(1-d(5e3,9e3,A)*.5),P=Math.pow(C_(E/5200+3.1,C/5200+7.7),1.6)*A*.5*x*d(2400,6e3,A);let b=T+P;A>15e3&&(b*=1-d(15e3,2e4,A)*.6),b+=-1.75,r.push(E,b,C);const L=l.clone();L.lerp(c,d(40,260,b)),b>900&&L.lerp(h,d(900,1500,b)),b>1700&&L.lerp(f,d(1700,2100,b)),L.lerp(u,Math.min(.42,d(3e3,2e4,A)*.5)),a.push(L.r,L.g,L.b)}}for(let p=0;p<90;p++)for(let M=0;M<320;M++){const A=p*321+M,y=A+320+1;o.push(A,A+1,y,y,A+1,y+1)}const m=new bt;m.setAttribute("position",new at(r,3)),m.setAttribute("color",new at(a,3)),m.setIndex(o),m.computeVertexNormals();const v=new En({vertexColors:!0,roughness:1});v.fog=!1;const g=new Ut(m,v);i.mtn.add(g)}const aa=[{id:"C",name:"Courtyard",wing:"Outdoor",x0:28,y0:27,x1:72,y1:60,notes:"The heart of the house. Raked-gravel Zen garden with three stones, a Japanese maple, a stone water basin, and a timber engawa deck under 6-ft eaves on all four sides. Every main room opens onto it.",h:null,floor:"Stone, gravel, timber deck"},{id:"P",name:"Pool",wing:"Outdoor",x0:54,y0:-22,x1:88,y1:-10,notes:"Small 34 x 12 ft pool, 4 to 5 ft deep, on the sunny south side right outside the wellness wing. Stone deck, loungers, outdoor shower by the changing-room door.",floor:"Stone deck"},{id:"L",name:"Turf Sprint Lane",wing:"Outdoor",x0:-32,y0:-16,x1:43,y1:-8,notes:"20 yards (60 ft) of turf marked every 5 yards, plus a 15-ft run-out to a charred-timber end wall. Steps from the exercise room sliders.",floor:"Synthetic turf"},{id:"V",name:"Vegetable Garden",wing:"Outdoor",x0:-36,y0:66,x1:-12,y1:88,notes:"Four 4 x 18 ft cedar raised beds inside a slatted deer fence, a few steps from the mudroom and pantry.",floor:"Gravel"},{id:"F",name:"Sunken Fire Pit",wing:"Outdoor",x0:51,y0:97,x1:65,y1:111,notes:"14-ft sunken stone circle facing the mountains, off the covered veranda.",floor:"Stone"},{id:"D",name:"Pergola Dining",wing:"Outdoor",x0:8,y0:86,x1:26,y1:100,notes:"Outdoor table for ten under a charred-timber and fir pergola, next to the kitchen and the view.",floor:"Stone"},{id:"W",name:"Climbing Pavilion",wing:"Outdoor",x0:-22,y0:0,x1:-4,y1:18,area:0,cov:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. A 16-ft-wide, 12-ft-high kids' bouldering wall sits on the north side facing the sprint lane, over a poured-rubber soft-fall surface and crash pad. It sits in the active zone between the exercise room, the sprint lane and a second 4-bike rack. Covered outdoor area, not conditioned.",floor:"Poured-rubber soft-fall",equip:["Climbing wall 16' × 12'","Bouldering volume","Crash pad","4-bike rack"]},{id:"S",name:"Outdoor Shower",wing:"Outdoor",x0:72.5,y0:4,x1:77.5,y1:10,notes:"Slat-screened stone shower by the pool, next to the changing room and the east engawa door.",floor:"Stone"},{id:"K",name:"Bike Racks",wing:"Outdoor",x0:-6,y0:61,x1:-1.5,y1:71,notes:"Six-bike rack under the mudroom eave, with gear storage just inside.",floor:"Stone"},{id:"R",name:"Carport",wing:"Outdoor",x0:-44,y0:30,x1:-20,y1:54,notes:"Open two-car carport with a standing-seam roof and a stone entry court. A garage is an open question.",floor:"Gravel"}];function L_(i){const e=__();return y_(e),b_(e),w_(e,i),T_(),A_(e,i),Wt.build(i),R_(i),P_(i),{M:e,blocking:wl,roofUnder:Li}}const Te=i=>document.getElementById(i),Us=.09290304,dh=.3048,Rs=i=>{const e=Math.floor(i+1e-6),t=Math.round((i-e)*12);return t?`${e}' ${t}"`:`${e}'`},li=()=>window.innerWidth<700,Qn=Te("viewport"),At=new Wx({antialias:!0,powerPreference:"high-performance"});At.setPixelRatio(Math.min(window.devicePixelRatio,2));At.outputColorSpace=Zt;At.toneMapping=tl;At.toneMappingExposure=1.05;At.shadowMap.enabled=!0;At.shadowMap.type=Cs;At.localClippingEnabled=!0;Qn.appendChild(At.domElement);const fs=new r_;fs.domElement.style.position="absolute";fs.domElement.style.inset="0";fs.domElement.style.pointerEvents="none";Qn.appendChild(fs.domElement);const Jt=new Pf,mn={};for(const i of["walls","glass","roof","floors","furn","site","ground","mtn","pick","labels","fx"])mn[i]=new ws,mn[i].name=i,Jt.add(mn[i]);mn.pick.visible=!0;const zr={top:{value:new He(9417681)},mid:{value:new He(14673638)},bot:{value:new He(15328470)}},uu=new Ut(new yl(3e4,32,16),new An({side:Kt,depthWrite:!1,fog:!1,uniforms:zr,vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vp; void main(){ float h = vp.y; vec3 c = h>0.0 ? mix(mid, top, pow(clamp(h*2.2,0.0,1.0),0.7)) : mix(mid, bot, clamp(-h*8.0,0.0,1.0)); gl_FragColor = vec4(c,1.0);
#include <colorspace_fragment>
}`}));uu.renderOrder=-10;Jt.add(uu);Jt.fog=new dl(14015968,1600,9e3);const Jo=new Fd(15397631,9140830,1.15);Jt.add(Jo);const fu=new Hd(16774374,.35);Jt.add(fu);const pn=new Gd(16773596,2.6);pn.castShadow=!0;pn.shadow.mapSize.set(li()?1024:2048,li()?1024:2048);Object.assign(pn.shadow.camera,{left:-150,right:150,top:150,bottom:-150,near:10,far:900});pn.shadow.bias=-4e-4;pn.shadow.normalBias=.6;Jt.add(pn);Jt.add(pn.target);const du=[],{M:Qo,blocking:D_,roofUnder:Tl}=L_(mn);let jo=null;mn.site.traverse(i=>{i.material&&i.material.name==="fire"&&(jo=i.material)});for(const i of Mt.rooms){if(i.area<90||!i.cond)continue;const e=new zd(16763274,0,34,1.6),t=tn((i.x0+i.x1)/2,(i.y0+i.y1)/2,Math.min(9,Tl((i.x0+i.x1)/2,(i.y0+i.y1)/2)-1.5));e.position.copy(t),mn.fx.add(e),du.push(e)}const Os=new Js({transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});let bi=null;fetch("./plan_overlay.json").then(i=>i.json()).then(i=>{new Od().load("./plan_overlay.png",e=>{e.colorSpace=Zt,e.anisotropy=8,Os.map=e,Os.needsUpdate=!0;const t=i.x1-i.x0,n=i.y1-i.y0,s=new Ii(t,n);s.rotateX(-Math.PI/2),bi=new Ut(s,Os),bi.position.copy(tn((i.x0+i.x1)/2,(i.y0+i.y1)/2,.06)),bi.renderOrder=3,bi.visible=Ye.overlay,Jt.add(bi)})});const Ti=new Ut(new Ii(1,1).rotateX(-Math.PI/2),Qo.highlight);Ti.visible=!1;Ti.renderOrder=4;Jt.add(Ti);const ns=new Gf(new Wf(new gi(1,1,1)),new Fh({color:5069118}));ns.visible=!1;Jt.add(ns);const Tt=new on(42,1,.5,6e4),dn=new ia(-1,1,1,-1,.5,3e3);let ci=Tt;const sn=new au(Tt,At.domElement);sn.enableDamping=!0;sn.dampingFactor=.08;sn.maxPolarAngle=1.5;sn.minDistance=4;sn.maxDistance=1400;sn.screenSpacePanning=!0;sn.touches={ONE:Un.ROTATE,TWO:Un.DOLLY_PAN};const qt=new au(dn,At.domElement);qt.enableRotate=!1;qt.screenSpacePanning=!0;qt.enableDamping=!0;qt.minZoom=.4;qt.maxZoom=8;qt.mouseButtons={LEFT:$n.PAN,MIDDLE:$n.DOLLY,RIGHT:$n.PAN};qt.touches={ONE:Un.PAN,TWO:Un.DOLLY_PAN};qt.enabled=!1;const Al={aerial:{name:"Aerial",cam:[0,-128,76],tgt:[50,56,28],fov:50,roof:!0,title:"The whole house.",kicker:"A DRAWING-BASED SPATIAL STUDY"},courtyard:{name:"Courtyard",cam:[35.5,34.5,5.6],tgt:[60,64,5],roof:!0,title:"The courtyard.",kicker:"VIEW · ENGAWA DECK, LOOKING NORTH-EAST",fov:62},living:{name:"Living",cam:[44,22,56],tgt:[56,72,0],roof:!1,cut:8,title:"Living pavilion.",kicker:"ROOMS 101-103 · ROOF HIDDEN"},office:{name:"Office",cam:[48,-38,58],tgt:[16,11,0],roof:!1,cut:8,title:"Office / music loft.",kicker:"ROOM 407 · ROOF HIDDEN"},wellness:{name:"Wellness",cam:[70,-44,58],tgt:[52,8,0],roof:!1,cut:8,title:"Wellness + gym wing.",kicker:"ROOMS 301-306 · ON THE POOL · ROOF HIDDEN"},climb:{name:"Climbing",cam:[-4,-30,8],tgt:[-13,14,6],roof:!0,title:"Climbing pavilion.",kicker:"OUTDOORS · COVERED OPEN-AIR · NOT CONDITIONED",fov:50},master:{name:"Master",cam:[124,38,64],tgt:[86,76,0],roof:!1,cut:8,title:"Master suite.",kicker:"ROOMS 201-203 · ROOF HIDDEN"}},Ye={mode:"orbit",light:"day",roof:!0,cut:!1,cutH:4.5,furn:!0,labels:!0,overlay:!1,ovOp:.85,site:!0,mtn:!0,shadows:!0,sel:null,view:"aerial"},oa=[],pu=new Set(["402","405","211","206","403","306","205","203","204","301","406","104","105","210","208"]),mu=new Set(["402","405","211"]),I_=new Set(["W","101","103","201","207","209","302","303","407","404","401","C","P","L"]),N_=new Set(["W","103","201","209","302","407","P","L"]);function gu(i,e){if(mu.has(i.id))return;const t=document.createElement("div");t.className="rlabel"+(["204","301","406"].includes(i.id)?" gal":"")+(e?" out":"")+(pu.has(i.id)||e?" minor":"")+(I_.has(i.id)?" key":"")+(N_.has(i.id)?" key2":""),t.innerHTML=e?`${i.name}`:`<span class="num">${i.id}</span>${i.name.replace(" + Conversation Pit","").replace(" Gallery","")}`,t.addEventListener("click",s=>{s.stopPropagation(),as(i.id,!0)});const n=new s_(t);n.userData={item:i,outdoor:e},mn.labels.add(n),oa.push(n)}Mt.rooms.forEach(i=>gu(i,!1));aa.forEach(i=>gu(i,!0));function Rl(){for(const i of oa){const e=i.userData.item;let t=(e.x0+e.x1)/2,n=(e.y0+e.y1)/2;e.id==="103"&&(t=58,n=63),e.id==="K"&&(t=-9,n=70),e.id==="105"&&(n=63),e.id==="404"&&(n=32),e.id==="403"&&(n=46),e.id==="C"&&(n=47,t=46),e.id==="204"&&(n=46),e.id==="406"&&(n=36),e.id==="301"&&(t=46);let s=1.5;i.userData.outdoor||(s=Ye.mode==="plan"?1:Ye.roof&&Ye.mode!=="walk"?Tl(t,n)+2.2:4),i.userData.outdoor&&(s=e.id==="C"?2.5:3),i.position.copy(tn(t,n,s))}}const xu=["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"];function U_(){const i=Te("room-list"),e=Te("chips"),t=(s,r,a,o,l)=>{const c=document.createElement("button");c.dataset.id=s,c.innerHTML=l?`<span class="n">${r}</span>${a}`:`<span class="n">${r}</span><span>${a}</span>`,c.onclick=()=>s==="all"?vu():as(s,!0),o.appendChild(c)};t("all","⌂","Whole house",i),t("all","⌂","Whole house",e,!0);for(const s of xu){const r=document.createElement("div");r.className="grp",r.textContent=s.toUpperCase(),i.appendChild(r),Mt.rooms.filter(a=>a.wing===s&&!mu.has(a.id)).forEach(a=>{t(a.id,a.id,a.name,i),pu.has(a.id)||t(a.id,a.id,a.name,e,!0)})}const n=document.createElement("div");n.className="grp",n.textContent="OUTDOORS",i.appendChild(n),aa.forEach(s=>{t(s.id,"·",s.name,i),["C","W","P","L","V"].includes(s.id)&&t(s.id,"·",s.name,e,!0)}),document.querySelectorAll('[data-id="all"]').forEach(s=>s.classList.add("on"))}U_();Te("hdr-total").textContent=`${Mt.total.toLocaleString()} SF conditioned (${Math.round(Mt.total*Us)} m²)`;const $s=Te("views");Object.entries(Al).forEach(([i,e])=>{const t=document.createElement("button");t.textContent=e.name,t.dataset.view=i,t.onclick=()=>Qs(i),$s.appendChild(t)});let en=null;function _u(i,e,t,n=1100){const s=Tt.position.clone(),r=sn.target.clone(),a=Tt.fov,o=performance.now();en={p0:s,t0:r,f0:a,p1:i,t1v:e,f1:t??42,start:o,dur:n}}function Zs(i,e){Te("cap-kicker").textContent=i,Te("cap-title").textContent=e}function Qs(i,e){const t=Al[i];Ye.view=i,Ye.mode!=="orbit"&&di("orbit"),fi(t.roof),hi(!!t.cut,t.cut||4.5),$s.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l.dataset.view===i));const n=li()&&i==="aerial",s=n?[49,-178,104]:t.cam,r=n?[49,46,22]:t.tgt,a=tn(...s.slice(0,2),s[2]),o=tn(...r.slice(0,2),r[2]);if(li()&&i!=="courtyard"&&i!=="aerial"){const l=a.clone().sub(o).multiplyScalar(i==="aerial"?1.2:1.45);a.copy(o).add(l)}e?(Tt.position.copy(a),sn.target.copy(o),Tt.fov=t.fov??42,Tt.updateProjectionMatrix(),sn.update(),en=null):_u(a,o,t.fov),Zs(t.kicker,t.title)}function vu(){la(),Qs("aerial"),document.querySelectorAll("[data-id]").forEach(i=>i.classList.toggle("on",i.dataset.id==="all"))}function $r(i){return Mt.rooms.find(e=>e.id===i)||aa.find(e=>e.id===i)}function as(i,e){const t=$r(i);if(!t)return;Ye.sel=i,document.querySelectorAll("[data-id]").forEach(f=>f.classList.toggle("on",f.dataset.id===i)),document.querySelectorAll(".chips button.on, .room-list button.on").forEach(f=>{var u;return(u=f.scrollIntoView)==null?void 0:u.call(f,{block:"nearest",inline:"center",behavior:"smooth"})}),oa.forEach(f=>f.element.classList.toggle("on",f.userData.item.id===i));const n=t.x1-t.x0,s=t.y1-t.y0,r=(t.x0+t.x1)/2,a=(t.y0+t.y1)/2,o=!t.area,l=t.cov??t.area??Math.round(n*s),c=o?.3:Tl(r,a);Ti.scale.set(n,1,s),Ti.position.copy(tn(r,a,o?.2:.08)),Ti.visible=!0,ns.scale.set(n,Math.max(.2,c),s),ns.position.copy(tn(r,a,Math.max(.2,c)/2)),ns.visible=!0,Te("info").hidden=!1,Te("info-kicker").textContent=o?"OUTDOORS · SITE":`ROOM ${t.id} · ${t.wing.toUpperCase()}`,Te("info-title").textContent=t.name,Te("info-notes").textContent=t.notes,Te("info-size").textContent=`${Rs(n)} × ${Rs(s)}  (${(n*dh).toFixed(1)} × ${(s*dh).toFixed(1)} m)`,Te("info-area").textContent=`${l.toLocaleString()} SF · ${(l*Us).toFixed(1)} m²${!o&&!t.cond?" (unconditioned)":""}${t.cov?" covered (not conditioned)":""}`,Te("info-ceil").parentElement.hidden=o,Te("info-ceil").textContent=o?"":`${Rs(t.h)} (roof deck ${Rs(Math.round(c*2)/2)})`,Te("info-floor").textContent=o?t.floor:{oak:"Wide-plank white oak",stone:"Honed limestone",tatami:"Tatami (8 mats)",rubber:"Rubber training floor",cedar:"Cedar duckboard",concrete:"Sealed concrete"}[t.floor]||t.floor;const h=t.equip||[...new Set(Mt.furn.filter(f=>f.room===i&&f.shape!=="pit").map(f=>f.label))];if(Te("info-equip").innerHTML=h.map(f=>`<span>${f}</span>`).join(""),Te("info-walk").parentElement.hidden=o&&i!=="C",Zs(o?"OUTDOORS":`ROOM ${t.id} / SPATIAL STUDY`,t.name),e&&Ye.mode==="orbit"){o||(fi(!1),hi(!0,8));const u=Math.max(n,s,14)*(li()?2.6:1.9)+16,d=tn(r,a,1),m=new D(.35,.95,.75).normalize();_u(d.clone().add(m.multiplyScalar(u)),d),$s.querySelectorAll("button").forEach(v=>v.classList.remove("on"))}e&&Ye.mode==="plan"&&(qt.target.copy(tn(r,a,0)),dn.position.set(qt.target.x,400,qt.target.z+.01),dn.zoom=Math.min(4,70/Math.max(n,s,14)),dn.updateProjectionMatrix()),e&&Ye.mode==="walk"&&Zr(r,a)}function la(){Ye.sel=null,Te("info").hidden=!0,Ti.visible=!1,ns.visible=!1,oa.forEach(i=>i.element.classList.remove("on"))}Te("info-close").onclick=la;Te("info-walk").onclick=()=>{const i=$r(Ye.sel);i&&(di("walk"),Zr((i.x0+i.x1)/2,(i.y0+i.y1)/2))};function fi(i){Ye.roof=i,mn.roof.visible=i,Qn.classList.toggle("roof-on",i),Te("ly-roof").checked=i;const e=Te("btn-roof");e.setAttribute("aria-pressed",i),e.querySelector("span").textContent=i?"Roof On":"Roof Off",Rl()}function hi(i,e){Ye.cut=i,e!=null&&(Ye.cutH=e),ou.constant=i?Ye.cutH:1e5,Te("ly-cut").checked=i,Te("cut-val").textContent=Rs(Ye.cutH),Te("cut-h").value=Ye.cutH}function Fs(i){Ye.overlay=i,bi&&(bi.visible=i),Te("ly-overlay").checked=i}Te("btn-roof").onclick=()=>fi(!Ye.roof);Te("ly-roof").onchange=i=>fi(i.target.checked);Te("ly-cut").onchange=i=>hi(i.target.checked);Te("cut-h").oninput=i=>hi(!0,parseFloat(i.target.value));Te("ly-furn").onchange=i=>{Ye.furn=i.target.checked,mn.furn.visible=Ye.furn};Te("ly-labels").onchange=i=>{Ye.labels=i.target.checked,Qn.classList.toggle("labels-off",!Ye.labels)};Te("ly-overlay").onchange=i=>Fs(i.target.checked);Te("ov-op").oninput=i=>{Os.opacity=parseFloat(i.target.value),Te("ov-val").textContent=Math.round(Os.opacity*100)+"%"};Te("ly-site").onchange=i=>{mn.site.visible=i.target.checked};Te("ly-mtn").onchange=i=>{mn.mtn.visible=i.target.checked};Te("ly-shadow").onchange=i=>{pn.castShadow=i.target.checked};Te("btn-layers").onclick=()=>{Te("layers").hidden=!Te("layers").hidden};Te("layers-close").onclick=()=>{Te("layers").hidden=!0};function ca(i){var n,s;Ye.light=i,document.querySelectorAll("#light-seg button").forEach(r=>r.classList.toggle("on",r.dataset.light===i));const e=i==="day";zr.top.value.set(e?8826064:2831696),zr.mid.value.set(e?14936294:14260844),zr.bot.value.set(e?15328470:7035472),Jt.fog.color.set(e?14015968:9272184),Jo.intensity=e?1.15:.35,Jo.color.set(e?15397631:9213632),fu.intensity=e?.35:.12,pn.intensity=e?2.6:.9,pn.color.set(e?16773596:16751194);const t=e?new D(-.55,.78,.62):new D(.85,.16,.35);pn.position.copy(t.normalize().multiplyScalar(400)),pn.target.position.set(0,0,0),du.forEach(r=>r.intensity=e?0:260),(n=Qo.glass.emissive)==null||n.set(e?0:3811860),(s=Qo.c.glass.emissive)==null||s.set(e?0:5913624),jo&&(jo.emissiveIntensity=e?1.2:4),At.toneMappingExposure=e?1.05:1.25}document.querySelectorAll("#light-seg button").forEach(i=>i.onclick=()=>ca(i.dataset.light));const Xe={x:16,y:54,yaw:-Math.PI/2,pitch:0,keys:{}};function di(i){const e=Ye.mode;if(Ye.mode=i,Qn.classList.toggle("plan-mode",i==="plan"),Qn.classList.toggle("walk-mode",i==="walk"),document.querySelectorAll("#mode-seg button").forEach(t=>t.classList.toggle("on",t.dataset.mode===i)),sn.enabled=i==="orbit",qt.enabled=i==="plan",Te("walk-pad").hidden=i!=="walk",$s.hidden=i==="walk",i==="plan")ci=dn,fi(!1),hi(!0,4.5),Fs(!0),qt.target.copy(tn(li()?49:40,li()?60:50,0)),dn.position.set(qt.target.x,400,qt.target.z+.01),dn.zoom=li()?.56:.92,ha(),Te("hint").textContent="Drag to pan · Scroll or pinch to zoom · Tap a room",Zs(`PLAN VIEW · DRAWING OVERLAY ON 3D CUT AT 4' 6"`,"Floor plan."),$s.querySelectorAll("button").forEach(t=>t.classList.remove("on"));else if(i==="walk"){if(ci=Tt,hi(!1),Fs(!1),fi(!0),Tt.fov=68,Tt.updateProjectionMatrix(),e!=="walk"){const t=Ye.sel&&$r(Ye.sel);t?Zr((t.x0+t.x1)/2,(t.y0+t.y1)/2):Zr(16,54,-Math.PI/2)}Te("hint").textContent="Drag to look · W A S D or arrows to move · Esc to exit",Zs(`WALK THROUGH · EYE HEIGHT 5' 4"`,Ye.sel?$r(Ye.sel).name:"Entry genkan.")}else ci=Tt,hi(!1),Fs(!1),Tt.fov=42,Tt.updateProjectionMatrix(),Te("hint").textContent="Drag to orbit · Scroll or pinch to zoom · Right-drag or two fingers to pan · Tap a room",e!=="orbit"&&Qs("aerial",!0);Rl()}document.querySelectorAll("#mode-seg button").forEach(i=>i.onclick=()=>di(i.dataset.mode));function Zr(i,e,t){if(Xe.x=i,Xe.y=e,Xe.pitch=0,t!=null)Xe.yaw=t;else{const n=50-i,s=44-e;Xe.yaw=Math.atan2(-n,s)+Math.PI,Xe.yaw=Math.atan2(n,s)}}function no(i,e){if(i<-150||i>220||e<-120||e>200)return!0;for(const{s:t,a:n,b:s}of D_){const[r,a,o,l]=t.o==="h"?[n,t.c,s,t.c]:[t.c,n,t.c,s],c=o-r,h=l-a,f=Math.max(0,Math.min(1,((i-r)*c+(e-a)*h)/(c*c+h*h))),u=i-(r+c*f),d=e-(a+h*f);if(u*u+d*d<.8*.8)return!0}return!1}function O_(i){const e=Xe.keys;let t=0,n=0;if((e.KeyW||e.ArrowUp||e.f)&&(t+=1),(e.KeyS||e.ArrowDown||e.b)&&(t-=1),(e.KeyA||e.ArrowLeft||e.l)&&(n-=1),(e.KeyD||e.ArrowRight||e.r)&&(n+=1),t||n){const l=9*i,c=Math.sin(Xe.yaw),h=Math.cos(Xe.yaw),f=(c*t+h*n)*l,u=(h*t-c*n)*l;no(Xe.x+f,Xe.y+u)?no(Xe.x+f,Xe.y)?no(Xe.x,Xe.y+u)||(Xe.y+=u):Xe.x+=f:(Xe.x+=f,Xe.y+=u)}const s=Mt.rooms.find(l=>Xe.x>=l.x0&&Xe.x<=l.x1&&Xe.y>=l.y0&&Xe.y<=l.y1),a=(s?s.id==="103"&&Xe.x>49&&Xe.x<65&&Xe.y>66&&Xe.y<78?-1.5:0:-1)+5.33;Tt.position.copy(tn(Xe.x,Xe.y,a));const o=new D(Math.sin(Xe.yaw)*Math.cos(Xe.pitch),Math.sin(Xe.pitch),-Math.cos(Xe.yaw)*Math.cos(Xe.pitch));Tt.lookAt(Tt.position.clone().add(o)),s&&s.id!==Xe.room&&(Xe.room=s.id,Zs(`WALK THROUGH · EYE HEIGHT 5' 4"`,s.name))}window.addEventListener("keydown",i=>{if(Ye.mode==="walk"){if(i.code==="Escape"){di("orbit");return}Xe.keys[i.code]=!0,i.code.startsWith("Arrow")&&i.preventDefault()}});window.addEventListener("keyup",i=>{Xe.keys[i.code]=!1});document.querySelectorAll("#walk-pad button").forEach(i=>{const e=i.dataset.k,t=s=>{s.preventDefault(),Xe.keys[e]=!0},n=()=>{Xe.keys[e]=!1};i.addEventListener("pointerdown",t),i.addEventListener("pointerup",n),i.addEventListener("pointerleave",n),i.addEventListener("pointercancel",n)});const io=new Xd;let Sn=null;At.domElement.addEventListener("pointerdown",i=>{Sn={x:i.clientX,y:i.clientY,t:performance.now(),lx:i.clientX,ly:i.clientY},Ye.mode==="walk"&&At.domElement.setPointerCapture(i.pointerId)});At.domElement.addEventListener("pointermove",i=>{Ye.mode==="walk"&&Sn&&(Xe.yaw+=(i.clientX-Sn.lx)*.005,Xe.pitch=Math.max(-1.2,Math.min(1.2,Xe.pitch-(i.clientY-Sn.ly)*.004)),Sn.lx=i.clientX,Sn.ly=i.clientY)});At.domElement.addEventListener("pointerup",i=>{if(!Sn)return;const e=Math.hypot(i.clientX-Sn.x,i.clientY-Sn.y),t=performance.now()-Sn.t;if(Sn=null,e>6||t>600||Ye.mode==="walk")return;const n=At.domElement.getBoundingClientRect(),s=new re((i.clientX-n.left)/n.width*2-1,-((i.clientY-n.top)/n.height)*2+1);io.setFromCamera(s,ci);const r=io.intersectObjects(cu,!1)[0];if(r){as(r.object.userData.room,!1);return}const a=io.ray.intersectPlane(new yn(new D(0,1,0),1),new D);if(a){const o=a.x+wt,l=-a.z+Bt,c=aa.find(h=>o>=h.x0&&o<=h.x1&&l>=h.y0&&l<=h.y1);if(c){as(c.id,!1);return}}la()});function Ks(i){const e=Te("toast");e.textContent=i,e.hidden=!1,clearTimeout(Ks._t),Ks._t=setTimeout(()=>e.hidden=!0,2200)}Te("t-reset").onclick=()=>{Ye.mode==="walk"&&di("orbit"),Ye.mode==="plan"?di("plan"):vu()};Te("t-save").onclick=()=>{try{At.render(Jt,ci);const i=document.createElement("a");i.href=At.domElement.toDataURL("image/png"),i.download="weberman-residence.png",i.click(),Ks("Saved a view of the model.")}catch{Ks("The image could not be saved.")}};Te("t-full").onclick=()=>{var e;const i=document.documentElement;document.fullscreenElement?document.exitFullscreen():(((e=i.requestFullscreen)==null?void 0:e.call(i))??Promise.reject()).catch(()=>Ks("Full screen is unavailable in this browser."))};function Cl(i,e){Te("modal-title").textContent=i,Te("modal-body").innerHTML=e,Te("modal").hidden=!1}Te("modal-close").onclick=()=>Te("modal").hidden=!0;Te("modal").onclick=i=>{i.target.id==="modal"&&(Te("modal").hidden=!0)};const yu=()=>`<table>${xu.map(i=>`<tr><td colspan="3"><b>${i}</b></td></tr>`+Mt.rooms.filter(e=>e.wing===i).map(e=>`<tr><td>${e.id}</td><td>${e.name}${e.cond?"":" (unconditioned)"}</td><td style="text-align:right">${e.area} SF · ${(e.area*Us).toFixed(1)} m²</td></tr>`).join("")).join("")}<tr><td colspan="3"><b>Covered Outdoor (Not Conditioned)</b></td></tr>${(Mt.covered||[]).map(i=>`<tr><td>${i.id}</td><td>${i.name}</td><td style="text-align:right">${i.area} SF · ${(i.area*Us).toFixed(1)} m²</td></tr>`).join("")}<tr><td></td><td><b>Total Conditioned</b></td><td style="text-align:right"><b>${Mt.total.toLocaleString()} SF · ${Math.round(Mt.total*Us)} m²</b></td></tr></table>`;Te("btn-drawings").onclick=()=>{Cl("Drawings",'<div class="tabs"><button class="on" data-img="Floor_Plan.png">Floor Plan</button><button data-img="Site_Plan.png">Site Plan</button><button data-img="prog">Room Program</button></div><div id="dw"><img src="./Floor_Plan.png" alt="Floor plan"></div>'),document.querySelectorAll(".tabs button").forEach(i=>i.onclick=()=>{document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("on",e===i)),Te("dw").innerHTML=i.dataset.img==="prog"?yu():`<img src="./${i.dataset.img}" alt="${i.textContent}">`})};const Su=`<h3>Concept</h3><p>A low, warm courtyard house for a mountain site, drawing on Bali, Japan and mid-century modernism rather than the cabin. Four single-storey pavilions wrap a 44 × 33 ft courtyard: <b>living</b> to the north facing the mountains, <b>sleeping</b> to the east, <b>wellness + gym</b> to the south on the pool, and <b>studio + arrival</b> to the west. A glazed engawa links them all, so every room looks into the garden. Deep 6 to 8 ft eaves, a butterfly roof over the living pavilion, standing seam metal, white stucco, shou sugi ban, rammed earth and natural stone.</p>
<h3>Model Notes</h3><p>Geometry is generated from the same plan data as the 2D drawings. Wall heights run up to the underside of each roof: 10 to 14 ft, with the butterfly roof rising from 12' 7" at the valley to about 14' at the walls. Areas are measured to wall centerlines. Furniture and equipment are simple blocks at true size. The lot, grades and mountain backdrop are illustrative only.</p>${yu()}`;Te("btn-about").onclick=()=>Cl("About This Model",Su);Te("btn-notes").onclick=()=>Cl("Model Notes",Su);function ha(){const i=Qn.clientWidth,e=Qn.clientHeight;At.setSize(i,e),fs.setSize(i,e),Tt.aspect=i/e,Tt.updateProjectionMatrix();const t=62;dn.left=-t*i/e,dn.right=t*i/e,dn.top=t,dn.bottom=-t,dn.updateProjectionMatrix()}window.addEventListener("resize",ha);new ResizeObserver(ha).observe(Qn);let ph=performance.now(),F_=0;function Mu(i){const e=Math.min(.05,(i-ph)/1e3);if(ph=i,en&&Ye.mode==="orbit"){let t=Math.min(1,(i-en.start)/en.dur);const n=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;Tt.position.lerpVectors(en.p0,en.p1,n),sn.target.lerpVectors(en.t0,en.t1v,n),Tt.fov=en.f0+(en.f1-en.f0)*n,Tt.updateProjectionMatrix(),t>=1&&(en=null)}Ye.mode==="orbit"?sn.update():Ye.mode==="plan"?qt.update():O_(e),At.render(Jt,ci),fs.render(Jt,ci),++F_===3&&(Te("loading").classList.add("done"),window.__ready=!0),requestAnimationFrame(Mu)}ha();ca("day");Rl();const pi=new URLSearchParams(location.search);Qs(Al[pi.get("view")]?pi.get("view"):"aerial",!0);pi.get("mode")&&di(pi.get("mode"));pi.get("light")==="eve"&&ca("eve");pi.get("roof")==="0"&&fi(!1);pi.get("room")&&as(pi.get("room"),!0);requestAnimationFrame(Mu);sn.addEventListener("start",()=>{en=null});window.app={goView:Qs,setMode:di,select:as,deselect:la,setRoof:fi,setLight:ca,setCut:hi,setOverlay:Fs,state:Ye,renderer:At,scene:Jt,get camera(){return ci}};
