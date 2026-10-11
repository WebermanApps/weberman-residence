(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="186",ti={ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zu=0,jl=1,Gu=2,zs=1,Hu=2,Us=3,ki=0,sn=1,Rn=2,ni=0,Gs=1,ec=2,tc=3,nc=4,Vu=5,hs=100,Wu=101,Xu=102,qu=103,Yu=104,$u=200,Ku=201,Zu=202,Ju=203,Eh=204,wh=205,Qu=206,ju=207,ed=208,td=209,nd=210,id=211,sd=212,rd=213,ad=214,xo=0,_o=1,yo=2,$s=3,vo=4,bo=5,So=6,Mo=7,Th=0,od=1,ld=2,Vn=0,Ah=1,Rh=2,Ch=3,fl=4,Ph=5,Lh=6,Dh=7,Ih=300,Bi=301,gs=302,wa=303,Ta=304,ca=306,Zr=1e3,jn=1001,Eo=1002,Wt=1003,cd=1004,hr=1005,Zt=1006,Aa=1007,Ii=1008,gn=1009,Nh=1010,Uh=1011,Ks=1012,pl=1013,Xn=1014,Pn=1015,qn=1016,ml=1017,gl=1018,Zs=1020,Oh=35902,Fh=35899,kh=1021,Bh=1022,Ln=1023,si=1026,Ni=1027,xl=1028,_l=1029,zi=1030,yl=1031,vl=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,wo=35840,To=35841,Ao=35842,Ro=35843,Co=36196,Po=37492,Lo=37496,Do=37488,Io=37489,Jr=37490,No=37491,Uo=37808,Oo=37809,Fo=37810,ko=37811,Bo=37812,zo=37813,Go=37814,Ho=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,$o=37821,Ko=36492,Zo=36494,Jo=36495,Qo=36283,jo=36284,Qr=36285,el=36286,hd=3200,tl=0,ud=1,mi="",nn="srgb",jr="srgb-linear",ea="linear",xt="srgb",Ra=7680,dd=519,fd=512,pd=513,md=514,bl=515,gd=516,xd=517,Sl=518,_d=519,yd=35044,ic="300 es",Hn=2e3,Js=2001;function vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bd(){const n=Qs("canvas");return n.style.display="block",n}const sc={};function rc(...n){const e="THREE."+n.shift();console.log(e,...n)}function zh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=zh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=zh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ds(...n){const e=n.join(" ");e in sc||(sc[e]=!0,Ve(...n))}function Sd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Md={[xo]:_o,[yo]:So,[vo]:Mo,[$s]:bo,[_o]:xo,[So]:yo,[Mo]:vo,[bo]:$s};class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,nl=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Ed(n,e){return(n%e+e)%e}function Ca(n,e,t){return(1-t)*n+t*e}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wd={DEG2RAD:Hs},kl=class kl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kl.prototype.isVector2=!0;let re=kl;class Dn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],h=i[s+1],l=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||c!==d||h!==f||l!==p){let g=c*d+h*f+l*p+u*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),R=Math.sin(S);m=Math.sin(m*S)/R,o=Math.sin(o*S)/R,c=c*m+d*o,h=h*m+f*o,l=l*m+p*o,u=u*m+_*o}else{c=c*m+d*o,h=h*m+f*o,l=l*m+p*o,u=u*m+_*o;const S=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=S,h*=S,l*=S,u*=S}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],h=i[s+2],l=i[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+l*u+c*f-h*d,e[t+1]=c*p+l*d+h*u-o*f,e[t+2]=h*p+l*f+o*d-c*u,e[t+3]=l*p-o*u-c*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(i/2),l=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*l*u+h*f*p,this._y=h*f*u-d*l*p,this._z=h*l*p+d*f*u,this._w=h*l*u-d*f*p;break;case"YXZ":this._x=d*l*u+h*f*p,this._y=h*f*u-d*l*p,this._z=h*l*p-d*f*u,this._w=h*l*u+d*f*p;break;case"ZXY":this._x=d*l*u-h*f*p,this._y=h*f*u+d*l*p,this._z=h*l*p+d*f*u,this._w=h*l*u-d*f*p;break;case"ZYX":this._x=d*l*u-h*f*p,this._y=h*f*u+d*l*p,this._z=h*l*p-d*f*u,this._w=h*l*u+d*f*p;break;case"YZX":this._x=d*l*u+h*f*p,this._y=h*f*u+d*l*p,this._z=h*l*p-d*f*u,this._w=h*l*u-d*f*p;break;case"XZY":this._x=d*l*u-h*f*p,this._y=h*f*u-d*l*p,this._z=h*l*p+d*f*u,this._w=h*l*u+d*f*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],l=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(l-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=i*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-i*h,this._z=r*l+a*h+i*c-s*o,this._w=a*l-i*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const h=Math.acos(o),l=Math.sin(h);c=Math.sin(c*h)/l,t=Math.sin(t*h)/l,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bl=class Bl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*i),l=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*h+a*u-o*l,this.y=i+c*l+o*h-r*u,this.z=s+c*u+r*l-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bl.prototype.isVector3=!0;let O=Bl;const Pa=new O,ac=new Dn,zl=class zl{constructor(e,t,i,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,h)}set(e,t,i,s,r,a,o,c,h){const l=this.elements;return l[0]=e,l[1]=s,l[2]=o,l[3]=t,l[4]=r,l[5]=c,l[6]=i,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],l=i[4],u=i[7],d=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],S=s[1],R=s[4],b=s[7],T=s[2],A=s[5],C=s[8];return r[0]=a*_+o*S+c*T,r[3]=a*g+o*R+c*A,r[6]=a*m+o*b+c*C,r[1]=h*_+l*S+u*T,r[4]=h*g+l*R+u*A,r[7]=h*m+l*b+u*C,r[2]=d*_+f*S+p*T,r[5]=d*g+f*R+p*A,r[8]=d*m+f*b+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*a*l-t*o*h-i*r*l+i*o*c+s*r*h-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],u=l*a-o*h,d=o*c-l*r,f=h*r-a*c,p=t*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(s*h-l*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(l*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*c-h*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(La.makeScale(e,t)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(La.makeRotation(-e)),this}translate(e,t){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zl.prototype.isMatrix3=!0;let Ke=zl;const La=new Ke,oc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){const n={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[jr]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:oc,fromXYZ:lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const rt=Td();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class Ad{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=Qs("canvas")),$i.width=e.width,$i.height=e.height;const s=$i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ii(t[i]/255)*255):t[i]=ii(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rd=0;class Ml{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Da(s[a].image)):r.push(Da(s[a]))}else r=Da(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ad.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Cd=0;const Ia=new O;class Xt extends Ei{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=jn,s=jn,r=Zt,a=Ii,o=Ln,c=gn,h=Xt.DEFAULT_ANISOTROPY,l=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=vs(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ia).x}get height(){return this.source.getSize(Ia).y}get depth(){return this.source.getSize(Ia).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Ih;Xt.DEFAULT_ANISOTROPY=1;const Gl=class Gl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,h=c[0],l=c[4],u=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,b=(f+1)/2,T=(m+1)/2,A=(l+d)/4,C=(u+_)/4,v=(p+g)/4;return R>b&&R>T?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=A/i,r=C/i):b>T?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=A/s,r=v/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=C/r,s=v/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-l)*(d-l));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(u-_)/S,this.z=(d-l)/S,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gl.prototype.isVector4=!0;let At=Gl;class Pd extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Xt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ml(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Pd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gh extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ld extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const la=class la{constructor(e,t,i,s,r,a,o,c,h,l,u,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,h,l,u,d,f,p,_,g)}set(e,t,i,s,r,a,o,c,h,l,u,d,f,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=l,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new la().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*l,f=a*u,p=o*l,_=o*u;t[0]=c*l,t[4]=-c*u,t[8]=h,t[1]=f+p*h,t[5]=d-_*h,t[9]=-o*c,t[2]=_-d*h,t[6]=p+f*h,t[10]=a*c}else if(e.order==="YXZ"){const d=c*l,f=c*u,p=h*l,_=h*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*h,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*l,f=c*u,p=h*l,_=h*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*l,t[9]=_-d*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*l,f=a*u,p=o*l,_=o*u;t[0]=c*l,t[4]=p*h-f,t[8]=d*h+_,t[1]=c*u,t[5]=_*h+d,t[9]=f*h-p,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*h,p=o*c,_=o*h;t[0]=c*l,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-h*l,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*h,p=o*c,_=o*h;t[0]=c*l,t[4]=-u,t[8]=h*l,t[1]=d*u+_,t[5]=a*l,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*l,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dd,e,Id)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ci.crossVectors(i,fn),ci.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ci.crossVectors(i,fn)),ci.normalize(),ur.crossVectors(fn,ci),s[0]=ci.x,s[4]=ur.x,s[8]=fn.x,s[1]=ci.y,s[5]=ur.y,s[9]=fn.y,s[2]=ci.z,s[6]=ur.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],l=i[1],u=i[5],d=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],S=i[3],R=i[7],b=i[11],T=i[15],A=s[0],C=s[4],v=s[8],w=s[12],N=s[1],U=s[5],x=s[9],I=s[13],L=s[2],D=s[6],H=s[10],B=s[14],Z=s[3],q=s[7],$=s[11],J=s[15];return r[0]=a*A+o*N+c*L+h*Z,r[4]=a*C+o*U+c*D+h*q,r[8]=a*v+o*x+c*H+h*$,r[12]=a*w+o*I+c*B+h*J,r[1]=l*A+u*N+d*L+f*Z,r[5]=l*C+u*U+d*D+f*q,r[9]=l*v+u*x+d*H+f*$,r[13]=l*w+u*I+d*B+f*J,r[2]=p*A+_*N+g*L+m*Z,r[6]=p*C+_*U+g*D+m*q,r[10]=p*v+_*x+g*H+m*$,r[14]=p*w+_*I+g*B+m*J,r[3]=S*A+R*N+b*L+T*Z,r[7]=S*C+R*U+b*D+T*q,r[11]=S*v+R*x+b*H+T*$,r[15]=S*w+R*I+b*B+T*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],S=c*f-h*d,R=o*f-h*u,b=o*d-c*u,T=a*f-h*l,A=a*d-c*l,C=a*u-o*l;return t*(_*S-g*R+m*b)-i*(p*S-g*T+m*A)+s*(p*R-_*T+m*C)-r*(p*b-_*A+g*C)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],h=e[6],l=e[10];return t*(a*l-o*h)-i*(r*l-o*c)+s*(r*h-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],S=t*o-i*a,R=t*c-s*a,b=t*h-r*a,T=i*c-s*o,A=i*h-r*o,C=s*h-r*c,v=l*_-u*p,w=l*g-d*p,N=l*m-f*p,U=u*g-d*_,x=u*m-f*_,I=d*m-f*g,L=S*I-R*x+b*U+T*N-A*w+C*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=(o*I-c*x+h*U)*D,e[1]=(s*x-i*I-r*U)*D,e[2]=(_*C-g*A+m*T)*D,e[3]=(d*A-u*C-f*T)*D,e[4]=(c*N-a*I-h*w)*D,e[5]=(t*I-s*N+r*w)*D,e[6]=(g*b-p*C-m*R)*D,e[7]=(l*C-d*b+f*R)*D,e[8]=(a*x-o*N+h*v)*D,e[9]=(i*N-t*x-r*v)*D,e[10]=(p*A-_*b+m*S)*D,e[11]=(u*b-l*A-f*S)*D,e[12]=(o*w-a*U-c*v)*D,e[13]=(t*U-i*w+s*v)*D,e[14]=(_*R-p*T-g*S)*D,e[15]=(l*T-u*R+d*S)*D,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,h=r*a,l=r*o;return this.set(h*a+i,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+i,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,l=a+a,u=o+o,d=r*h,f=r*l,p=r*u,_=a*l,g=a*u,m=o*u,S=c*h,R=c*l,b=c*u,T=i.x,A=i.y,C=i.z;return s[0]=(1-(_+m))*T,s[1]=(f+b)*T,s[2]=(p-R)*T,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+m))*A,s[6]=(g+S)*A,s[7]=0,s[8]=(p+R)*C,s[9]=(g-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),c=Ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);const h=1/a,l=1/o,u=1/c;return En.elements[0]*=h,En.elements[1]*=h,En.elements[2]*=h,En.elements[4]*=l,En.elements[5]*=l,En.elements[6]*=l,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Hn,c=!1){const h=this.elements,l=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let p,_;if(c)p=r/(a-r),_=a*r/(a-r);else if(o===Hn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Js)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Hn,c=!1){const h=this.elements,l=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let p,_;if(c)p=1/(a-r),_=a/(a-r);else if(o===Hn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Js)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=p,h[14]=_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};la.prototype.isMatrix4=!0;let at=la;const Ki=new O,En=new at,Dd=new O(0,0,0),Id=new O(1,1,1),ci=new O,ur=new O,fn=new O,cc=new at,hc=new Dn;class vi{constructor(e=0,t=0,i=0,s=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-et(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hc.setFromEuler(this),this.setFromQuaternion(hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nd=0;const uc=new O,Zi=new Dn,$n=new at,dr=new O,Ts=new O,Ud=new O,Od=new Dn,dc=new O(1,0,0),fc=new O(0,1,0),pc=new O(0,0,1),mc={type:"added"},Fd={type:"removed"},Ji={type:"childadded",child:null},Na={type:"childremoved",child:null};class kt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new O,t=new vi,i=new Dn,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Ke}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(dc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(pc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dr.copy(e):dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ts,dr,this.up):$n.lookAt(dr,Ts,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix($n),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,Ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),l=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new O(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Os extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kd={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(h,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,p=.005;h.inputState.pinching&&d>f+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Os;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Ed(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Oa(a,r,e+1/3),this.g=Oa(a,r,e),this.b=Oa(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return rt.workingToColorSpace($t.copy(this),e),Math.round(et($t.r*255,0,255))*65536+Math.round(et($t.g*255,0,255))*256+Math.round(et($t.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=nn){rt.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(fr);const i=Ca(hi.h,fr.h,t),s=Ca(hi.s,fr.s,t),r=Ca(hi.l,fr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new qe;qe.NAMES=Hh;class wl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bd extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wn=new O,Kn=new O,Fa=new O,Zn=new O,Qi=new O,ji=new O,gc=new O,ka=new O,Ba=new O,za=new O,Ga=new At,Ha=new At,Va=new At;class vn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Kn.subVectors(i,t),Fa.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Kn),c=wn.dot(Fa),h=Kn.dot(Kn),l=Kn.dot(Fa),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*c-o*l)*d,p=(a*l-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Ga.setScalar(0),Ha.setScalar(0),Va.setScalar(0),Ga.fromBufferAttribute(e,t),Ha.fromBufferAttribute(e,i),Va.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ga,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(Va,r.z),a}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Kn.subVectors(e,t),wn.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,i),ji.subVectors(r,i),ka.subVectors(e,i);const c=Qi.dot(ka),h=ji.dot(ka);if(c<=0&&h<=0)return t.copy(i);Ba.subVectors(e,s);const l=Qi.dot(Ba),u=ji.dot(Ba);if(l>=0&&u<=l)return t.copy(s);const d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(i).addScaledVector(Qi,a);za.subVectors(e,r);const f=Qi.dot(za),p=ji.dot(za);if(p>=0&&f<=p)return t.copy(r);const _=f*h-c*p;if(_<=0&&h>=0&&p<=0)return o=h/(h-p),t.copy(i).addScaledVector(ji,o);const g=l*p-f*u;if(g<=0&&u-l>=0&&f-p>=0)return gc.subVectors(r,s),o=(u-l)/(u-l+(f-p)),t.copy(s).addScaledVector(gc,o);const m=1/(g+_+d);return a=_*m,o=d*m,t.copy(i).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),mr.subVectors(this.max,As),es.subVectors(e.a,As),ts.subVectors(e.b,As),ns.subVectors(e.c,As),ui.subVectors(ts,es),di.subVectors(ns,ts),Ai.subVectors(es,ns);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];return!Wa(t,es,ts,ns,mr)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,es,ts,ns,mr))?!1:(gr.crossVectors(ui,di),t=[gr.x,gr.y,gr.z],Wa(t,es,ts,ns,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new O,new O,new O,new O,new O,new O,new O,new O],Tn=new O,pr=new Wi,es=new O,ts=new O,ns=new O,ui=new O,di=new O,Ai=new O,As=new O,mr=new O,gr=new O,Ri=new O;function Wa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ri.fromArray(n,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=e.dot(Ri),h=t.dot(Ri),l=i.dot(Ri);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const Ut=new O,xr=new re;let zd=0;class un extends Ei{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yd,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vh extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wh extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Gd=new Wi,Rs=new O,Xa=new O;class bs{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Xa)),this.expandByPoint(Rs.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hd=0;const yn=new at,qa=new kt,is=new O,pn=new Wi,Cs=new Wi,Gt=new O;class Pt extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Wh:Vh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(pn.min,Cs.min),pn.expandByPoint(Gt),Gt.addVectors(pn.max,Cs.max),pn.expandByPoint(Gt)):(pn.expandByPoint(Cs.min),pn.expandByPoint(Cs.max))}pn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Gt.fromBufferAttribute(o,h),c&&(is.fromBufferAttribute(e,h),Gt.add(is)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new O,c[v]=new O;const h=new O,l=new O,u=new O,d=new re,f=new re,p=new re,_=new O,g=new O;function m(v,w,N){h.fromBufferAttribute(i,v),l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,N),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,N),l.sub(h),u.sub(h),f.sub(d),p.sub(d);const U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(_.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(U),g.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(U),o[v].add(_),o[w].add(_),o[N].add(_),c[v].add(g),c[w].add(g),c[N].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const N=S[v],U=N.start,x=N.count;for(let I=U,L=U+x;I<L;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const R=new O,b=new O,T=new O,A=new O;function C(v){T.fromBufferAttribute(s,v),A.copy(T);const w=o[v];R.copy(w),R.sub(T.multiplyScalar(T.dot(w))).normalize(),b.crossVectors(A,w);const U=b.dot(c[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,U)}for(let v=0,w=S.length;v<w;++v){const N=S[v],U=N.start,x=N.count;for(let I=U,L=U+x;I<L;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,a=new O,o=new O,c=new O,h=new O,l=new O,u=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),o.fromBufferAttribute(i,p),c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,g),o.add(l),c.add(l),h.add(l),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){const h=o.array,l=o.itemSize,u=o.normalized,d=new h.constructor(c.length*l);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*l;for(let m=0;m<l;m++)d[p++]=h[f++]}return new un(d,l,u)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=e(c,i);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,u=h.length;l<u;l++){const d=h[l],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const h=i[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];l.push(f.toJSON(e.data))}l.length>0&&(s[c]=l,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(t))}const r=e.morphAttributes;for(const h in r){const l=[],u=r[h];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,l=a.length;h<l;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ya=new O,Vd=new O,Wd=new Ke;class An{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ya.subVectors(i,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Ya),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wd.getNormalMatrix(e),s=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Xd=0;class Ss extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=Gs,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=wh,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new An().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Qn=new O,$a=new O,_r=new O,yr=new O;class ha{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$a.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),yr.copy(this.origin).sub($a);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=yr.dot(this.direction),c=-yr.dot(_r),h=yr.lengthSq(),l=Math.abs(1-a*a);let u,d,f,p;if(l>0)if(u=a*c-o,d=a*o-c,p=r*l,u>=0)if(d>=-p)if(d<=p){const _=1/l;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+h}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($a).addScaledVector(_r,d),f}intersectSphere(e,t){if(e.radius<0)return null;Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),l>=0?(r=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,c=o.x,h=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=i.x-a.x,S=i.y-a.y,R=i.z-a.z,b=Math.abs(c),T=Math.abs(h),A=Math.abs(l);let C,v,w,N,U,x,I,L,D,H,B,Z;if(b>=T&&b>=A?(w=c,x=u,D=p,Z=m,c>=0?(C=h,v=l,N=d,U=f,I=_,L=g,H=S,B=R):(C=l,v=h,N=f,U=d,I=g,L=_,H=R,B=S)):T>=A?(w=h,x=d,D=_,Z=S,h>=0?(C=l,v=c,N=f,U=u,I=g,L=p,H=R,B=m):(C=c,v=l,N=u,U=f,I=p,L=g,H=m,B=R)):(w=l,x=f,D=g,Z=R,l>=0?(C=c,v=h,N=u,U=d,I=p,L=_,H=m,B=S):(C=h,v=c,N=d,U=u,I=_,L=p,H=S,B=m)),w===0)return null;const q=C/w,$=v/w,J=1/w,Se=N-q*x,Me=U-$*x,tt=I-q*D,nt=L-$*D,lt=H-q*Z,ee=B-$*Z,ie=lt*nt-ee*tt,ve=Se*ee-Me*lt,He=tt*Me-nt*Se;if(s){if(ie<0||ve<0||He<0)return null}else if((ie<0||ve<0||He<0)&&(ie>0||ve>0||He>0))return null;const Te=ie+ve+He;if(Te===0)return null;const We=J*(ie*x+ve*D+He*Z);return(Te>0?We<0:We>0)?null:this.at(We/Te,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ar extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xc=new at,Ci=new ha,vr=new bs,_c=new O,br=new O,Sr=new O,Mr=new O,Ka=new O,Er=new O,yc=new O,wr=new O;class Ht extends kt{constructor(e=new Pt,t=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Er.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],u=r[c];l!==0&&(Ka.fromBufferAttribute(u,e),a?Er.addScaledVector(Ka,l):Er.addScaledVector(Ka.sub(t),l))}t.add(Er)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(vr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(vr,_c)===null||Ci.origin.distanceToSquared(_c)>(e.far-e.near)**2))&&(xc.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(xc),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),R=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,T=R;b<T;b+=3){const A=o.getX(b),C=o.getX(b+1),v=o.getX(b+2);s=Tr(this,m,e,i,h,l,u,A,C,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const S=o.getX(g),R=o.getX(g+1),b=o.getX(g+2);s=Tr(this,a,e,i,h,l,u,S,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),R=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let b=S,T=R;b<T;b+=3){const A=b,C=b+1,v=b+2;s=Tr(this,m,e,i,h,l,u,A,C,v),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const S=g,R=g+1,b=g+2;s=Tr(this,a,e,i,h,l,u,S,R,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function qd(n,e,t,i,s,r,a,o){let c;if(e.side===sn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ki,o),c===null)return null;wr.copy(o),wr.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(wr);return h<t.near||h>t.far?null:{distance:h,point:wr.clone(),object:n}}function Tr(n,e,t,i,s,r,a,o,c,h){n.getVertexPosition(o,br),n.getVertexPosition(c,Sr),n.getVertexPosition(h,Mr);const l=qd(n,e,t,i,br,Sr,Mr,yc);if(l){const u=new O;vn.getBarycoord(yc,br,Sr,Mr,u),s&&(l.uv=vn.getInterpolatedAttribute(s,o,c,h,u,new re)),r&&(l.uv1=vn.getInterpolatedAttribute(r,o,c,h,u,new re)),a&&(l.normal=vn.getInterpolatedAttribute(a,o,c,h,u,new O),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new O,materialIndex:0};vn.getNormal(br,Sr,Mr,d.normal),l.face=d,l.barycoord=u}return l}class Xh extends Xt{constructor(e=null,t=1,i=1,s,r,a,o,c,h=Wt,l=Wt,u,d){super(null,a,o,c,h,l,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new at,bc=new at,Ar=[],Sc=new Wi,Yd=new at,Ps=new Ht,Ls=new bs;class gi extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Yd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),Sc.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(Sc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),Ls.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(i),e.ray.intersectsSphere(Ls)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),bc.multiplyMatrices(i,ss),Ps.matrixWorld=bc,Ps.raycast(e,Ar);for(let a=0,o=Ar.length;a<o;a++){const c=Ar[a];c.instanceId=r,c.object=this,t.push(c)}Ar.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xh(new Float32Array(s*this.count),s,this.count,xl,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<i.length;h++)a+=i[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pi=new bs,$d=new re(.5,.5),Rr=new O;class Tl{constructor(e=new An,t=new An,i=new An,s=new An,r=new An,a=new An){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],h=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],S=r[12],R=r[13],b=r[14],T=r[15];if(s[0].setComponents(h-a,f-l,m-p,T-S).normalize(),s[1].setComponents(h+a,f+l,m+p,T+S).normalize(),s[2].setComponents(h+o,f+u,m+_,T+R).normalize(),s[3].setComponents(h-o,f-u,m-_,T-R).normalize(),i)s[4].setComponents(c,d,g,b).normalize(),s[5].setComponents(h-c,f-d,m-g,T-b).normalize();else if(s[4].setComponents(h-c,f-d,m-g,T-b).normalize(),t===Hn)s[5].setComponents(h+c,f+d,m+g,T+b).normalize();else if(t===Js)s[5].setComponents(c,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=$d.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qh extends Ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new O,na=new O,Mc=new at,Ds=new ha,Cr=new bs,Za=new O,Ec=new O;class Kd extends kt{constructor(e=new Pt,t=new qh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ta.fromBufferAttribute(t,s-1),na.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ta.distanceTo(na);e.setAttribute("lineDistance",new ht(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=r,e.ray.intersectsSphere(Cr)===!1)return;Mc.copy(s).invert(),Ds.copy(e.ray).applyMatrix4(Mc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=h){const m=l.getX(_),S=l.getX(_+1),R=Pr(this,e,Ds,c,m,S,_);R&&t.push(R)}if(this.isLineLoop){const _=l.getX(p-1),g=l.getX(f),m=Pr(this,e,Ds,c,_,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=h){const m=Pr(this,e,Ds,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=Pr(this,e,Ds,c,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pr(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(ta.fromBufferAttribute(o,s),na.fromBufferAttribute(o,r),t.distanceSqToSegment(ta,na,Za,Ec)>i)return;Za.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Za);if(!(h<e.near||h>e.far))return{distance:h,point:Ec.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const wc=new O,Tc=new O;class Zd extends Kd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)wc.fromBufferAttribute(t,s),Tc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+wc.distanceTo(Tc);e.setAttribute("lineDistance",new ht(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yh extends Xt{constructor(e=[],t=Bi,i,s,r,a,o,c,h,l){super(e,t,i,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends Xt{constructor(e,t,i,s,r,a,o,c,h){super(e,t,i,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class js extends Xt{constructor(e,t,i=Xn,s,r,a,o=Wt,c=Wt,h,l=si,u=1){if(l!==si&&l!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,l,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Qd extends js{constructor(e,t=Xn,i=Bi,s,r,a=Wt,o=Wt,c,h=si){const l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,i,s,r,a,o,c,h),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $h extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wi extends Pt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(u,2));function p(_,g,m,S,R,b,T,A,C,v,w){const N=b/C,U=T/v,x=b/2,I=T/2,L=A/2,D=C+1,H=v+1;let B=0,Z=0;const q=new O;for(let $=0;$<H;$++){const J=$*U-I;for(let Se=0;Se<D;Se++){const Me=Se*N-x;q[_]=Me*S,q[g]=J*R,q[m]=L,h.push(q.x,q.y,q.z),q[_]=0,q[g]=0,q[m]=A>0?1:-1,l.push(q.x,q.y,q.z),u.push(Se/C),u.push(1-$/v),B+=1}}for(let $=0;$<v;$++)for(let J=0;J<C;J++){const Se=d+J+D*$,Me=d+J+D*($+1),tt=d+(J+1)+D*($+1),nt=d+(J+1)+D*$;c.push(Se,Me,nt),c.push(Me,tt,nt),Z+=6}o.addGroup(f,Z,w),f+=Z,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xn extends Pt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],u=[],d=[],f=[];let p=0;const _=[],g=i/2;let m=0;S(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(l),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function S(){const b=new O,T=new O;let A=0;const C=(t-e)/i;for(let v=0;v<=r;v++){const w=[],N=v/r,U=N*(t-e)+e;for(let x=0;x<=s;x++){const I=x/s,L=I*c+o,D=Math.sin(L),H=Math.cos(L);T.x=U*D,T.y=-N*i+g,T.z=U*H,u.push(T.x,T.y,T.z),b.set(D,C,H).normalize(),d.push(b.x,b.y,b.z),f.push(I,1-N),w.push(p++)}_.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){const N=_[w][v],U=_[w+1][v],x=_[w+1][v+1],I=_[w][v+1];(e>0||w!==0)&&(l.push(N,U,I),A+=3),(t>0||w!==r-1)&&(l.push(U,x,I),A+=3)}h.addGroup(m,A,0),m+=A}function R(b){const T=p,A=new re,C=new O;let v=0;const w=b===!0?e:t,N=b===!0?1:-1;for(let x=1;x<=s;x++)u.push(0,g*N,0),d.push(0,N,0),f.push(.5,.5),p++;const U=p;for(let x=0;x<=s;x++){const L=x/s*c+o,D=Math.cos(L),H=Math.sin(L);C.x=w*H,C.y=g*N,C.z=w*D,u.push(C.x,C.y,C.z),d.push(0,N,0),A.x=D*.5+.5,A.y=H*.5*N+.5,f.push(A.x,A.y),p++}for(let x=0;x<s;x++){const I=T+x,L=U+x;b===!0?l.push(L,L+1,I):l.push(L+1,L,I),v+=3}h.addGroup(m,v,b===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ps extends xn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ps(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ua extends Pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),h(i),l(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const R=new O,b=new O,T=new O;for(let A=0;A<t.length;A+=3)f(t[A+0],R),f(t[A+1],b),f(t[A+2],T),c(R,b,T,S)}function c(S,R,b,T){const A=T+1,C=[];for(let v=0;v<=A;v++){C[v]=[];const w=S.clone().lerp(b,v/A),N=R.clone().lerp(b,v/A),U=A-v;for(let x=0;x<=U;x++)x===0&&v===A?C[v][x]=w:C[v][x]=w.clone().lerp(N,x/U)}for(let v=0;v<A;v++)for(let w=0;w<2*(A-v)-1;w++){const N=Math.floor(w/2);w%2===0?(d(C[v][N+1]),d(C[v+1][N]),d(C[v][N])):(d(C[v][N+1]),d(C[v+1][N+1]),d(C[v+1][N]))}}function h(S){const R=new O;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(S),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function l(){const S=new O;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];const b=g(S)/2/Math.PI+.5,T=m(S)/Math.PI+.5;a.push(b,1-T)}p(),u()}function u(){for(let S=0;S<a.length;S+=6){const R=a[S+0],b=a[S+2],T=a[S+4],A=Math.max(R,b,T),C=Math.min(R,b,T);A>.9&&C<.1&&(R<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,R){const b=S*3;R.x=e[b+0],R.y=e[b+1],R.z=e[b+2]}function p(){const S=new O,R=new O,b=new O,T=new O,A=new re,C=new re,v=new re;for(let w=0,N=0;w<r.length;w+=9,N+=6){S.set(r[w+0],r[w+1],r[w+2]),R.set(r[w+3],r[w+4],r[w+5]),b.set(r[w+6],r[w+7],r[w+8]),A.set(a[N+0],a[N+1]),C.set(a[N+2],a[N+3]),v.set(a[N+4],a[N+5]),T.copy(S).add(R).add(b).divideScalar(3);const U=g(T);_(A,N+0,S,U),_(C,N+2,R,U),_(v,N+4,b,U)}}function _(S,R,b,T){T<0&&S.x===1&&(a[R]=S.x-1),b.x===0&&b.z===0&&(a[R]=T/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.vertices,e.indices,e.radius,e.detail)}}class da extends ua{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new da(e.radius,e.detail)}}const Lr=new O,Dr=new O,Ja=new O,Ir=new vn;class jd extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Hs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,h=[0,0,0],l=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){a?(h[0]=a.getX(p),h[1]=a.getX(p+1),h[2]=a.getX(p+2)):(h[0]=p,h[1]=p+1,h[2]=p+2);const{a:_,b:g,c:m}=Ir;if(_.fromBufferAttribute(o,h[0]),g.fromBufferAttribute(o,h[1]),m.fromBufferAttribute(o,h[2]),Ir.getNormal(Ja),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){const R=(S+1)%3,b=u[S],T=u[R],A=Ir[l[S]],C=Ir[l[R]],v=`${b}_${T}`,w=`${T}_${b}`;w in d&&d[w]?(Ja.dot(d[w].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(C.x,C.y,C.z)),d[w]=null):v in d||(d[v]={index0:h[S],index1:h[R],normal:Ja.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];Lr.fromBufferAttribute(o,_),Dr.fromBufferAttribute(o,g),f.push(Lr.x,Lr.y,Lr.z),f.push(Dr.x,Dr.y,Dr.z)}this.setAttribute("position",new ht(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=i[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const l=i[s],d=i[s+1]-l,f=(a-l)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new re:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,s=[],r=[],a=[],o=new O,c=new at;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new O)}r[0]=new O,a[0]=new O;let h=Number.MAX_VALUE;const l=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);l<=h&&(h=l,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(et(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Al extends Yn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new re){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=h-this.aY;c=d*l-f*u+this.aX,h=d*u+f*l+this.aY}return i.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ef extends Al{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,l,u){let d=(a-r)/h-(o-r)/(h+l)+(o-a)/l,f=(o-a)/l-(c-a)/(l+u)+(c-o)/u;d*=l,f*=l,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const Ac=new O,Rc=new O,Qa=new Rl,ja=new Rl,eo=new Rl;class tf extends Yn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,l;this.closed||o>0?h=s[(o-1)%r]:(Rc.subVectors(s[0],s[1]).add(s[0]),h=Rc);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?l=s[(o+2)%r]:(Ac.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(h.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(l),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Qa.initNonuniformCatmullRom(h.x,u.x,d.x,l.x,p,_,g),ja.initNonuniformCatmullRom(h.y,u.y,d.y,l.y,p,_,g),eo.initNonuniformCatmullRom(h.z,u.z,d.z,l.z,p,_,g)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(h.x,u.x,d.x,l.x,this.tension),ja.initCatmullRom(h.y,u.y,d.y,l.y,this.tension),eo.initCatmullRom(h.z,u.z,d.z,l.z,this.tension));return i.set(Qa.calc(c),ja.calc(c),eo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cc(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function nf(n,e){const t=1-n;return t*t*e}function sf(n,e){return 2*(1-n)*n*e}function rf(n,e){return n*n*e}function Vs(n,e,t,i){return nf(n,e)+sf(n,t)+rf(n,i)}function af(n,e){const t=1-n;return t*t*t*e}function of(n,e){const t=1-n;return 3*t*t*n*e}function lf(n,e){return 3*(1-n)*n*n*e}function cf(n,e){return n*n*n*e}function Ws(n,e,t,i,s){return af(n,e)+of(n,t)+lf(n,i)+cf(n,s)}class Kh extends Yn{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ws(e,s.x,r.x,a.x,o.x),Ws(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hf extends Yn{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ws(e,s.x,r.x,a.x,o.x),Ws(e,s.y,r.y,a.y,o.y),Ws(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zh extends Yn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uf extends Yn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends Yn{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vs(e,s.x,r.x,a.x),Vs(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class df extends Yn{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vs(e,s.x,r.x,a.x),Vs(e,s.y,r.y,a.y),Vs(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],l=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Cc(o,c.x,h.x,l.x,u.x),Cc(o,c.y,h.y,l.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var il=Object.freeze({__proto__:null,ArcCurve:ef,CatmullRomCurve3:tf,CubicBezierCurve:Kh,CubicBezierCurve3:hf,EllipseCurve:Al,LineCurve:Zh,LineCurve3:uf,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:df,SplineCurve:Qh});class ff extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){const l=c[h];i&&i.equals(l)||(t.push(l),i=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new il[s.type]().fromJSON(s))}return this}}class Pc extends ff{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Zh(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Jh(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Kh(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Qh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+h,t+l,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){const h=new Al(e,t,i,s,r,a,o,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fa extends Pc{constructor(e){super(e),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Pc().fromJSON(s))}return this}}function pf(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=jh(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(i&&(r=yf(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let l=o,u=c;for(let d=t;d<s;d+=t){const f=n[d],p=n[d+1];f<o&&(o=f),p<c&&(c=p),f>l&&(l=f),p>u&&(u=p)}h=Math.max(l-o,u-c),h=h!==0?32767/h:0}return er(r,a,t,o,c,h,0),a}function jh(n,e,t,i,s){let r;if(s===Pf(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Lc(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Lc(a/i|0,n[a],n[a+1],r);return r&&xs(r,r.next)&&(nr(r),r=r.next),r}function Gi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xs(t,t.next)||Rt(t.prev,t,t.next)===0)){if(nr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function er(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Ef(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,h=n.next;if(r?gf(n,i,s,r):mf(n)){e.push(c.i,n.i,h.i),nr(n),n=h.next,o=h.next;continue}if(n=h,n===o){a?a===1?(n=xf(Gi(n),e),er(n,e,t,i,s,r,2)):a===2&&_f(n,e,t,i,s,r):er(Gi(n),e,t,i,s,r,1);break}}}function mf(n){const e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,h=i.y,l=Math.min(s,r,a),u=Math.min(o,c,h),d=Math.max(s,r,a),f=Math.max(o,c,h);let p=i.next;for(;p!==e;){if(p.x>=l&&p.x<=d&&p.y>=u&&p.y<=f&&Fs(s,o,r,c,a,h,p.x,p.y)&&Rt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function gf(n,e,t,i){const s=n.prev,r=n,a=n.next;if(Rt(s,r,a)>=0)return!1;const o=s.x,c=r.x,h=a.x,l=s.y,u=r.y,d=a.y,f=Math.min(o,c,h),p=Math.min(l,u,d),_=Math.max(o,c,h),g=Math.max(l,u,d),m=sl(f,p,e,t,i),S=sl(_,g,e,t,i);let R=n.prevZ,b=n.nextZ;for(;R&&R.z>=m&&b&&b.z<=S;){if(R.x>=f&&R.x<=_&&R.y>=p&&R.y<=g&&R!==s&&R!==a&&Fs(o,l,c,u,h,d,R.x,R.y)&&Rt(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Fs(o,l,c,u,h,d,b.x,b.y)&&Rt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=m;){if(R.x>=f&&R.x<=_&&R.y>=p&&R.y<=g&&R!==s&&R!==a&&Fs(o,l,c,u,h,d,R.x,R.y)&&Rt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=S;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Fs(o,l,c,u,h,d,b.x,b.y)&&Rt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function xf(n,e){let t=n;do{const i=t.prev,s=t.next.next;!xs(i,s)&&tu(i,t,t.next,s)&&tr(i,s)&&tr(s,i)&&(e.push(i.i,t.i,s.i),nr(t),nr(t.next),t=n=s),t=t.next}while(t!==n);return Gi(t)}function _f(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Af(a,o)){let c=nu(a,o);a=Gi(a,a.next),c=Gi(c,c.next),er(a,e,t,i,s,r,0),er(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function yf(n,e,t,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,h=jh(n,o,c,i,!1);h===h.next&&(h.steiner=!0),s.push(Tf(h))}s.sort(vf);for(let r=0;r<s.length;r++)t=bf(s[r],t);return t}function vf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function bf(n,e){const t=Sf(n,e);if(!t)return e;const i=nu(t,n);return Gi(i,i.next),Gi(t,t.next)}function Sf(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,a;if(xs(n,t))return t;do{if(xs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,h=a.y;let l=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&eu(s<h?i:r,s,c,h,s<h?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);tr(t,n)&&(u<l||u===l&&(t.x>a.x||t.x===a.x&&Mf(a,t)))&&(a=t,l=u)}t=t.next}while(t!==o);return a}function Mf(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function Ef(n,e,t,i){let s=n;do s.z===0&&(s.z=sl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,wf(s)}function wf(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let h=0;h<t&&(o++,a=a.nextZ,!!a);h++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function sl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Tf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function eu(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Fs(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&eu(n,e,t,i,s,r,a,o)}function Af(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Rf(n,e)&&(tr(n,e)&&tr(e,n)&&Cf(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||xs(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xs(n,e){return n.x===e.x&&n.y===e.y}function tu(n,e,t,i){const s=Ur(Rt(n,e,t)),r=Ur(Rt(n,e,i)),a=Ur(Rt(t,i,n)),o=Ur(Rt(t,i,e));return!!(s!==r&&a!==o||s===0&&Nr(n,t,e)||r===0&&Nr(n,i,e)||a===0&&Nr(t,n,i)||o===0&&Nr(t,e,i))}function Nr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ur(n){return n>0?1:n<0?-1:0}function Rf(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&tu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function tr(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function Cf(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function nu(n,e){const t=rl(n.i,n.x,n.y),i=rl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Lc(n,e,t,i){const s=rl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function rl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pf(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Lf{static triangulate(e,t,i=2){return pf(e,t,i)}}class ei{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ei.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Dc(e),Ic(i,e);let a=e.length;t.forEach(Dc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Ic(i,t[c]);const o=Lf.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Dc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ic(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Cl extends Pt{constructor(e=new fa([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const h=e[o];a(h)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function a(o){const c=[],h=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Df;let R,b=!1,T,A,C,v;if(m){R=m.getSpacedPoints(l),b=!0,d=!1;const se=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(l,se),A=new O,C=new O,v=new O}d||(g=0,f=0,p=0,_=0);const w=o.extractPoints(h);let N=w.shape;const U=w.holes;if(!ei.isClockWise(N)){N=N.reverse();for(let se=0,oe=U.length;se<oe;se++){const le=U[se];ei.isClockWise(le)&&(U[se]=le.reverse())}}function I(se){const le=10000000000000001e-36;let ce=se[0];for(let fe=1;fe<=se.length;fe++){const ze=fe%se.length,Be=se[ze],Xe=Be.x-ce.x,$e=Be.y-ce.y,F=Xe*Xe+$e*$e,ut=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ce.x),Math.abs(ce.y)),it=le*ut*ut;if(F<=it){se.splice(ze,1),fe--;continue}ce=Be}}I(N),U.forEach(I);const L=U.length,D=N;for(let se=0;se<L;se++){const oe=U[se];N=N.concat(oe)}function H(se,oe,le){return oe||ot("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(oe,le)}const B=N.length;function Z(se,oe,le){let ce,fe,ze;const Be=se.x-oe.x,Xe=se.y-oe.y,$e=le.x-se.x,F=le.y-se.y,ut=Be*Be+Xe*Xe,it=Be*F-Xe*$e;if(Math.abs(it)>Number.EPSILON){const P=Math.sqrt(ut),y=Math.sqrt($e*$e+F*F),V=oe.x-Xe/P,Y=oe.y+Be/P,Q=le.x-F/y,he=le.y+$e/y,de=((Q-V)*F-(he-Y)*$e)/(Be*F-Xe*$e);ce=V+Be*de-se.x,fe=Y+Xe*de-se.y;const j=ce*ce+fe*fe;if(j<=2)return new re(ce,fe);ze=Math.sqrt(j/2)}else{let P=!1;Be>Number.EPSILON?$e>Number.EPSILON&&(P=!0):Be<-Number.EPSILON?$e<-Number.EPSILON&&(P=!0):Math.sign(Xe)===Math.sign(F)&&(P=!0),P?(ce=-Xe,fe=Be,ze=Math.sqrt(ut)):(ce=Be,fe=Xe,ze=Math.sqrt(ut/2))}return new re(ce/ze,fe/ze)}const q=[];for(let se=0,oe=D.length,le=oe-1,ce=se+1;se<oe;se++,le++,ce++)le===oe&&(le=0),ce===oe&&(ce=0),q[se]=Z(D[se],D[le],D[ce]);const $=[];let J,Se=q.concat();for(let se=0,oe=L;se<oe;se++){const le=U[se];J=[];for(let ce=0,fe=le.length,ze=fe-1,Be=ce+1;ce<fe;ce++,ze++,Be++)ze===fe&&(ze=0),Be===fe&&(Be=0),J[ce]=Z(le[ce],le[ze],le[Be]);$.push(J),Se=Se.concat(J)}let Me;if(g===0)Me=ei.triangulateShape(D,U);else{const se=[],oe=[];for(let le=0;le<g;le++){const ce=le/g,fe=f*Math.cos(ce*Math.PI/2),ze=p*Math.sin(ce*Math.PI/2)+_;for(let Be=0,Xe=D.length;Be<Xe;Be++){const $e=H(D[Be],q[Be],ze);ve($e.x,$e.y,-fe),ce===0&&se.push($e)}for(let Be=0,Xe=L;Be<Xe;Be++){const $e=U[Be];J=$[Be];const F=[];for(let ut=0,it=$e.length;ut<it;ut++){const P=H($e[ut],J[ut],ze);ve(P.x,P.y,-fe),ce===0&&F.push(P)}ce===0&&oe.push(F)}}Me=ei.triangulateShape(se,oe)}const tt=Me.length,nt=p+_;for(let se=0;se<B;se++){const oe=d?H(N[se],Se[se],nt):N[se];b?(C.copy(T.normals[0]).multiplyScalar(oe.x),A.copy(T.binormals[0]).multiplyScalar(oe.y),v.copy(R[0]).add(C).add(A),ve(v.x,v.y,v.z)):ve(oe.x,oe.y,0)}for(let se=1;se<=l;se++)for(let oe=0;oe<B;oe++){const le=d?H(N[oe],Se[oe],nt):N[oe];b?(C.copy(T.normals[se]).multiplyScalar(le.x),A.copy(T.binormals[se]).multiplyScalar(le.y),v.copy(R[se]).add(C).add(A),ve(v.x,v.y,v.z)):ve(le.x,le.y,u/l*se)}for(let se=g-1;se>=0;se--){const oe=se/g,le=f*Math.cos(oe*Math.PI/2),ce=p*Math.sin(oe*Math.PI/2)+_;for(let fe=0,ze=D.length;fe<ze;fe++){const Be=H(D[fe],q[fe],ce);ve(Be.x,Be.y,u+le)}for(let fe=0,ze=U.length;fe<ze;fe++){const Be=U[fe];J=$[fe];for(let Xe=0,$e=Be.length;Xe<$e;Xe++){const F=H(Be[Xe],J[Xe],ce);b?ve(F.x,F.y+R[l-1].y,R[l-1].x+le):ve(F.x,F.y,u+le)}}}lt(),ee();function lt(){const se=s.length/3;if(d){let oe=0,le=B*oe;for(let ce=0;ce<tt;ce++){const fe=Me[ce];He(fe[2]+le,fe[1]+le,fe[0]+le)}oe=l+g*2,le=B*oe;for(let ce=0;ce<tt;ce++){const fe=Me[ce];He(fe[0]+le,fe[1]+le,fe[2]+le)}}else{for(let oe=0;oe<tt;oe++){const le=Me[oe];He(le[2],le[1],le[0])}for(let oe=0;oe<tt;oe++){const le=Me[oe];He(le[0]+B*l,le[1]+B*l,le[2]+B*l)}}i.addGroup(se,s.length/3-se,0)}function ee(){const se=s.length/3;let oe=0;ie(D,oe),oe+=D.length;for(let le=0,ce=U.length;le<ce;le++){const fe=U[le];ie(fe,oe),oe+=fe.length}i.addGroup(se,s.length/3-se,1)}function ie(se,oe){let le=se.length;for(;--le>=0;){const ce=le;let fe=le-1;fe<0&&(fe=se.length-1);for(let ze=0,Be=l+g*2;ze<Be;ze++){const Xe=B*ze,$e=B*(ze+1),F=oe+ce+Xe,ut=oe+fe+Xe,it=oe+fe+$e,P=oe+ce+$e;Te(F,ut,it,P)}}}function ve(se,oe,le){c.push(se),c.push(oe),c.push(le)}function He(se,oe,le){We(se),We(oe),We(le);const ce=s.length/3,fe=S.generateTopUV(i,s,ce-3,ce-2,ce-1);mt(fe[0]),mt(fe[1]),mt(fe[2])}function Te(se,oe,le,ce){We(se),We(oe),We(ce),We(oe),We(le),We(ce);const fe=s.length/3,ze=S.generateSideWallUV(i,s,fe-6,fe-3,fe-2,fe-1);mt(ze[0]),mt(ze[1]),mt(ze[3]),mt(ze[1]),mt(ze[2]),mt(ze[3])}function We(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function mt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return If(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new il[s.type]().fromJSON(s)),new Cl(i,e.options)}}const Df={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],h=e[s*3],l=e[s*3+1];return[new re(r,a),new re(o,c),new re(h,l)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[i*3],l=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-l)<Math.abs(a-h)?[new re(a,1-c),new re(h,1-u),new re(d,1-p),new re(_,1-m)]:[new re(o,1-c),new re(l,1-u),new re(f,1-p),new re(g,1-m)]}};function If(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class xi extends ua{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xi(e.radius,e.detail)}}class Xi extends Pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),h=o+1,l=c+1,u=e/o,d=t/c,f=[],p=[],_=[],g=[];for(let m=0;m<l;m++){const S=m*d-a;for(let R=0;R<h;R++){const b=R*u-r;p.push(b,-S,0),_.push(0,0,1),g.push(R/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){const R=S+h*m,b=S+h*(m+1),T=S+1+h*(m+1),A=S+1+h*m;f.push(R,b,A),f.push(b,T,A)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pl extends Pt{constructor(e=new fa([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let l=0;l<e.length;l++)h(e[l]),this.addGroup(o,c,l),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(r,3)),this.setAttribute("uv",new ht(a,2));function h(l){const u=s.length/3,d=l.extractPoints(t);let f=d.shape;const p=d.holes;ei.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const S=p[g];ei.isClockWise(S)===!0&&(p[g]=S.reverse())}const _=ei.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){const S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,m=_.length;g<m;g++){const S=_[g],R=S[0]+u,b=S[1]+u,T=S[2]+u;i.push(R,b,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Nf(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new Pl(i,e.curveSegments)}}function Nf(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Hi extends Pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let h=0;const l=[],u=new O,d=new O,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){const S=[],R=m/i,b=a+R*o,T=e*Math.cos(b),A=Math.sqrt(e*e-T*T);let C=0;m===0&&a===0?C=.5/t:m===i&&c===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){const w=v/t,N=s+w*r;u.x=-A*Math.cos(N),u.y=T,u.z=A*Math.sin(N),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+C,1-R),S.push(h++)}l.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const R=l[m][S+1],b=l[m][S],T=l[m+1][S],A=l[m+1][S+1];(m!==0||a>0)&&f.push(R,b,A),(m!==i-1||c<Math.PI)&&f.push(b,T,A)}this.setIndex(f),this.setAttribute("position",new ht(p,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ui extends Pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],h=[],l=[],u=[],d=new O,f=new O,p=new O;for(let _=0;_<=i;_++){const g=a+_/i*o;for(let m=0;m<=s;m++){const S=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(S),f.y=(e+t*Math.cos(g))*Math.sin(S),f.z=t*Math.sin(g),h.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(m/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){const m=(s+1)*_+g-1,S=(s+1)*(_-1)+g-1,R=(s+1)*(_-1)+g,b=(s+1)*_+g;c.push(m,S,b),c.push(S,R,b)}this.setIndex(c),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function _s(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Nc(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Nc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=_s(n[t]);for(const s in i)e[s]=i[s]}return e}function Nc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Uf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Of={clone:_s,merge:tn};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new at().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bf extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dt extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zf extends Dt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gf extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hf extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const to={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Uc(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Uc(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Uc(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Vf{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){const u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=h.length;u<d;u+=2){const f=h[u],p=h[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wf=new Vf;class Ll{constructor(e){this.manager=e!==void 0?e:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";const rs=new WeakMap;class Xf extends Ll{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=to.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=rs.get(a);u===void 0&&(u=[],rs.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Qs("img");function c(){l(),t&&t(this);const u=rs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}rs.delete(this),r.manager.itemEnd(e)}function h(u){l(),s&&s(u),to.remove(`image:${e}`);const d=rs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onError&&p.onError(u)}rs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),to.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class qf extends Ll{constructor(e){super(e)}load(e,t,i,s){const r=new Xt,a=new Xf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class pa extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Yf extends pa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const no=new at,Oc=new O,Fc=new O;class su{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(no,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;e.coordinateSystem===Js||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),t.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Or=new O,Fr=new Dn,Fn=new O;class ru extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Or,Fr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Fr,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Or,Fr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,Fr,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new O,kc=new re,Bc=new re;class mn extends ru{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,kc,Bc),t.subVectors(Bc,kc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/h,s*=a.width/c,i*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $f extends su{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}}class Kf extends pa{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $f}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ma extends ru{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zf extends su{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jf extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Zf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qf extends pa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const as=-90,os=1;class jf extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(as,os,e,t);s.layers=this.layers,this.add(s);const r=new mn(as,os,e,t);r.layers=this.layers,this.add(r);const a=new mn(as,os,e,t);a.layers=this.layers,this.add(a);const o=new mn(as,os,e,t);o.layers=this.layers,this.add(o);const c=new mn(as,os,e,t);c.layers=this.layers,this.add(c);const h=new mn(as,os,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class ep extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zc=new at;class tp{constructor(e,t,i=0,s=1/0){this.ray=new ha(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zc),this}intersectObject(e,t=!0,i=[]){return al(e,this,i,t),i.sort(Gc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)al(e[s],this,i,t);return i.sort(Gc),i}}function Gc(n,e){return n.distance-e.distance}function al(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)al(r[a],e,t,!0)}}class Hc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Hl=class Hl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Hl.prototype.isMatrix2=!0;let Vc=Hl;class np extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Wc(n,e,t,i){const s=ip(i);switch(t){case kh:return n*e;case xl:return n*e/s.components*s.byteLength;case _l:return n*e/s.components*s.byteLength;case zi:return n*e*2/s.components*s.byteLength;case yl:return n*e*2/s.components*s.byteLength;case Bh:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case vl:return n*e*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:case Ro:return Math.max(n,16)*Math.max(e,8)/4;case wo:case Ao:return Math.max(n,8)*Math.max(e,8)/2;case Co:case Po:case Do:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Jr:case No:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ko:case Zo:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qo:case jo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qr:case el:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ip(n){switch(n){case gn:case Nh:return{byteLength:1,components:1};case Ks:case Uh:case qn:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Xn:case pl:case Pn:return{byteLength:4,components:1};case Oh:case Fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function au(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function sp(n){const e=new WeakMap;function t(o,c){const h=o.array,l=o.usage,u=h.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,h,l),o.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=n.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,h){const l=c.array,u=c.updateRanges;if(n.bindBuffer(h,o),u.length===0)n.bufferSubData(h,0,l);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];n.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var rp=`#ifdef USE_ALPHAHASH
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
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
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,dm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,bm=`#define LAMBERT
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
}`,Sm=`#define LAMBERT
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
}`,je={alphahash_fragment:rp,alphahash_pars_fragment:ap,alphamap_fragment:op,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:xp,iridescence_fragment:_p,bumpmap_pars_fragment:yp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Mp,color_fragment:Ep,color_pars_fragment:wp,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Dp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Np,colorspace_fragment:Up,colorspace_pars_fragment:Op,envmap_fragment:Fp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Bp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Jp,envmap_vertex:Gp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Kp,lights_pars_begin:Zp,lights_toon_fragment:Qp,lights_toon_pars_fragment:jp,lights_phong_fragment:e0,lights_phong_pars_fragment:t0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:a0,lightprobes_pars_fragment:o0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:d0,map_pars_fragment:f0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:x0,morphinstance_vertex:_0,morphcolor_vertex:y0,morphnormal_vertex:v0,morphtarget_pars_vertex:b0,morphtarget_vertex:S0,normal_fragment_begin:M0,normal_fragment_maps:E0,normal_pars_fragment:w0,normal_pars_vertex:T0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:D0,opaque_fragment:I0,packing:N0,premultiplied_alpha_fragment:U0,project_vertex:O0,dithering_fragment:F0,dithering_pars_fragment:k0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:H0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:$0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:j0,transmission_pars_fragment:em,uv_pars_fragment:tm,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:dm,distance_vert:fm,distance_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:_m,meshbasic_vert:ym,meshbasic_frag:vm,meshlambert_vert:bm,meshlambert_frag:Sm,meshmatcap_vert:Mm,meshmatcap_frag:Em,meshnormal_vert:wm,meshnormal_frag:Tm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Im,points_frag:Nm,shadow_vert:Um,shadow_frag:Om,sprite_vert:Fm,sprite_frag:km},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:tn([ye.common,ye.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:tn([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Bn.physical={uniforms:tn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const kr={r:0,b:0,g:0},Bm=new at,ou=new Ke;ou.set(-1,0,0,0,1,0,0,0,1);function zm(n,e,t,i,s,r){const a=new qe(0);let o=s===!0?0:1,c,h,l=null,u=0,d=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){const b=S.backgroundBlurriness>0;R=e.get(R,b)}return R}function p(S){let R=!1;const b=f(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),R=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,R){const b=f(R);b&&(b.isCubeTexture||b.mapping===ca)?(h===void 0&&(h=new Ht(new wi(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:_s(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ou),h.material.toneMapped=rt.getTransfer(b.colorSpace)!==xt,(l!==b||u!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,l=b,u=b.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ht(new Xi(2,2),new Nn({name:"BackgroundMaterial",uniforms:_s(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=rt.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(l!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,l=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,R){S.getRGB(kr,iu(n)),t.buffers.color.setClear(kr.r,kr.g,kr.b,R,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:_,dispose:m}}function Gm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(U,x,I,L,D){let H=!1;const B=u(U,L,I,x);r!==B&&(r=B,h(r.object)),H=f(U,L,I,D),H&&p(U,L,I,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,b(U,x,I,L),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function h(U){return n.bindVertexArray(U)}function l(U){return n.deleteVertexArray(U)}function u(U,x,I,L){const D=L.wireframe===!0;let H=i[x.id];H===void 0&&(H={},i[x.id]=H);const B=U.isInstancedMesh===!0?U.id:0;let Z=H[B];Z===void 0&&(Z={},H[B]=Z);let q=Z[I.id];q===void 0&&(q={},Z[I.id]=q);let $=q[D];return $===void 0&&($=d(c()),q[D]=$),$}function d(U){const x=[],I=[],L=[];for(let D=0;D<t;D++)x[D]=0,I[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:I,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,x,I,L){const D=r.attributes,H=x.attributes;let B=0;const Z=I.getAttributes();for(const q in Z)if(Z[q].location>=0){const J=D[q];let Se=H[q];if(Se===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Se=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Se=U.instanceColor)),J===void 0||J.attribute!==Se||Se&&J.data!==Se.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function p(U,x,I,L){const D={},H=x.attributes;let B=0;const Z=I.getAttributes();for(const q in Z)if(Z[q].location>=0){let J=H[q];J===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const Se={};Se.attribute=J,J&&J.data&&(Se.data=J.data),D[q]=Se,B++}r.attributes=D,r.attributesNum=B,r.index=L}function _(){const U=r.newAttributes;for(let x=0,I=U.length;x<I;x++)U[x]=0}function g(U){m(U,0)}function m(U,x){const I=r.newAttributes,L=r.enabledAttributes,D=r.attributeDivisors;I[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),D[U]!==x&&(n.vertexAttribDivisor(U,x),D[U]=x)}function S(){const U=r.newAttributes,x=r.enabledAttributes;for(let I=0,L=x.length;I<L;I++)x[I]!==U[I]&&(n.disableVertexAttribArray(I),x[I]=0)}function R(U,x,I,L,D,H,B){B===!0?n.vertexAttribIPointer(U,x,I,D,H):n.vertexAttribPointer(U,x,I,L,D,H)}function b(U,x,I,L){_();const D=L.attributes,H=I.getAttributes(),B=x.defaultAttributeValues;for(const Z in H){const q=H[Z];if(q.location>=0){let $=D[Z];if($===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){const J=$.normalized,Se=$.itemSize,Me=e.get($);if(Me===void 0)continue;const tt=Me.buffer,nt=Me.type,lt=Me.bytesPerElement,ee=nt===n.INT||nt===n.UNSIGNED_INT||$.gpuType===pl;if($.isInterleavedBufferAttribute){const ie=$.data,ve=ie.stride,He=$.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<q.locationSize;Te++)m(q.location+Te,ie.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<q.locationSize;Te++)g(q.location+Te);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Te=0;Te<q.locationSize;Te++)R(q.location+Te,Se/q.locationSize,nt,J,ve*lt,(He+Se/q.locationSize*Te)*lt,ee)}else{if($.isInstancedBufferAttribute){for(let ie=0;ie<q.locationSize;ie++)m(q.location+ie,$.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ie=0;ie<q.locationSize;ie++)g(q.location+ie);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ie=0;ie<q.locationSize;ie++)R(q.location+ie,Se/q.locationSize,nt,J,Se*lt,Se/q.locationSize*ie*lt,ee)}}else if(B!==void 0){const J=B[Z];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(q.location,J);break;case 3:n.vertexAttrib3fv(q.location,J);break;case 4:n.vertexAttrib4fv(q.location,J);break;default:n.vertexAttrib1fv(q.location,J)}}}}S()}function T(){w();for(const U in i){const x=i[U];for(const I in x){const L=x[I];for(const D in L){const H=L[D];for(const B in H)l(H[B].object),delete H[B];delete L[D]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const x=i[U.id];for(const I in x){const L=x[I];for(const D in L){const H=L[D];for(const B in H)l(H[B].object),delete H[B];delete L[D]}}delete i[U.id]}function C(U){for(const x in i){const I=i[x];for(const L in I){const D=I[L];if(D[U.id]===void 0)continue;const H=D[U.id];for(const B in H)l(H[B].object),delete H[B];delete D[U.id]}}}function v(U){for(const x in i){const I=i[x],L=U.isInstancedMesh===!0?U.id:0,D=I[L];if(D!==void 0){for(const H in D){const B=D[H];for(const Z in B)l(B[Z].object),delete B[Z];delete D[H]}delete I[L],Object.keys(I).length===0&&delete i[x]}}}function w(){N(),a=!0,r!==s&&(r=s,h(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function Hm(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,l){l!==0&&(n.drawArraysInstanced(i,c,h,l),t.update(h,i,l))}function o(c,h,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,l);let d=0;for(let f=0;f<l;f++)d+=h[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Vm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ln&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gn&&C!==Pn&&!v&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const l=c(h);l!==h&&(Ve("WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:b,maxSamples:T,samples:A}}function Wm(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new An,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=l(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?l(null):h();else{const S=r?0:i,R=S*4;let b=m.clippingState||null;c.value=b,b=l(p,d,R,f);for(let T=0;T!==R;++T)b[T]=t[T];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,b=f;R!==_;++R,b+=4)a.copy(u[R]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const us=4,Xm=6,qm=20,Ym=256,Is=new ma,Xc=new qe;let io=null,so=0,ro=0,ao=!1;const $m=new O,Li=new O;class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=$m}=r;io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(io,so,ro),this._renderer.xr.enabled=ao,e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:qn,format:Ln,colorSpace:jr,depthBuffer:!1},s=Yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Km(r)),this._blurMaterial=Jm(r,e,t),this._ggxMaterial=Zm(r,e,t)}return s}_compileMaterial(e){const t=new Ht(new Pt,e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,i,s,r){const c=new mn(90,1,t,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Xc),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ht(new wi,new ar({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(Xc),m=!0);for(let R=0;R<6;R++){const b=R%3;b===0?(c.up.set(0,h[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+l[R],r.y,r.z)):b===1?(c.up.set(0,0,h[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+l[R],r.z)):(c.up.set(0,h[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+l[R]));const T=this._cubeSize;ls(s,b*T,R>2?T:0,T,T),u.setRenderTarget(s),m&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Bi||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ls(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Is)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,h=i/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(h*h-l*l),d=h*1.25,f=u*d,{_lodMax:p}=this,_=this._sizeLods[i],g=3*_*(i>p-us?i-p+us:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,ls(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,Is),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,ls(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(o,Is)}_blur(e,t,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const h=o.uniforms;h.envMap.value=e.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;const l=this._sizeLods[s],u=3*l*(s>this._lodMax-us?s-this._lodMax+us:0),d=4*(this._cubeSize-l);ls(t,u,d,3*l,2*l),a.setRenderTarget(t),a.render(c,Is)}}function Km(n){const e=[],t=[];let i=n;const s=n-us+1+Xm;for(let r=0;r<s;r++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,h=1+o,l=[c,c,h,c,h,h,c,c,h,h,c,h],u=6,d=6,f=3,p=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let m=0;m<u;m++){const S=m%3*2/3-1,R=m>2?0:-1,b=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];p.set(b,f*d*m);for(let T=0;T<d;T++){const A=l[T*2]*2-1,C=l[T*2+1]*2-1;m===0?Li.set(1,C,A):m===1?Li.set(-A,1,-C):m===2?Li.set(-A,C,1):m===3?Li.set(-1,C,-A):m===4?Li.set(-A,-1,C):Li.set(A,C,-1),Li.toArray(_,(m*d+T)*f)}}const g=new Pt;g.setAttribute("position",new un(p,f)),g.setAttribute("outputDirection",new un(_,f)),t.push(new Ht(g,null)),i>us&&i--}return{lodMeshes:t,sizeLods:e}}function Yc(n,e,t){const i=new In(n,e,t);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ls(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Zm(n,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ym,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jm(n,e,t){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $c(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Kc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ga(){return`

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
			`},s=new wi(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:ni});r.uniforms.tEquirect.value=t;const a=new Ht(s,r),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Zt),new jf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Qm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===wa||f===Ta)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new lu(p.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",h),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,p=f===wa||f===Ta,_=f===Bi||f===gs;if(p||_){let g=t.get(d);const m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new qc(n)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&c(S)?(i===null&&(i=new qc(n)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function o(d,f){return f===wa?d.mapping=Bi:f===Ta&&(d.mapping=gs),d}function c(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function jm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ds("WebGLRenderer: "+i+" extension not supported."),s}}}function eg(n,e,t,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let R=0,b=S.length;R<b;R+=3){const T=S[R+0],A=S[R+1],C=S[R+2];d.push(T,A,A,C,C,T)}}else{const S=p.array;_=p.version;for(let R=0,b=S.length/3-1;R<b;R+=3){const T=R+0,A=R+1,C=R+2;d.push(T,A,A,C,C,T)}}const g=new(p.count>=65535?Wh:Vh)(d,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function l(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function tg(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*a),t.update(d,i,1)}function h(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function l(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function ng(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ig(n,e,t){const i=new WeakMap,s=new At;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let N=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var f=N;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let T=o.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*u),v=new Gh(C,T,A,u);v.type=Pn,v.needsUpdate=!0;const w=b*4;for(let U=0;U<u;U++){const x=m[U],I=S[U],L=R[U],D=T*A*4*U;for(let H=0;H<x.count;H++){const B=H*w;p===!0&&(s.fromBufferAttribute(x,H),C[D+B+0]=s.x,C[D+B+1]=s.y,C[D+B+2]=s.z,C[D+B+3]=0),_===!0&&(s.fromBufferAttribute(I,H),C[D+B+4]=s.x,C[D+B+5]=s.y,C[D+B+6]=s.z,C[D+B+7]=0),g===!0&&(s.fromBufferAttribute(L,H),C[D+B+8]=s.x,C[D+B+9]=s.y,C[D+B+10]=s.z,C[D+B+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new re(T,A)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function sg(n,e,t,i,s){let r=new WeakMap;function a(h){const l=s.render.frame,u=h.geometry,d=e.get(h,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==l&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function c(h){const l=h.target;l.removeEventListener("dispose",c),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}const rg={[Ah]:"LINEAR_TONE_MAPPING",[Rh]:"REINHARD_TONE_MAPPING",[Ch]:"CINEON_TONE_MAPPING",[fl]:"ACES_FILMIC_TONE_MAPPING",[Lh]:"AGX_TONE_MAPPING",[Dh]:"NEUTRAL_TONE_MAPPING",[Ph]:"CUSTOM_TONE_MAPPING"};function ag(n,e,t,i,s,r){const a=new In(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const h=new Pt;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));const l=new Bf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ht(h,l),d=new ma(-1,1,1,-1,0,1);let f=null,p=null,_=!1,g,m=null,S=[],R=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),c!==null&&c.setSize(b,T);for(let A=0;A<S.length;A++){const C=S[A];C.setSize&&C.setSize(b,T)}},this.setEffects=function(b){S=b,R=S.length>0&&S[0].isRenderPass===!0;const T=a.width,A=a.height;S.length>0&&o===null&&(o=new In(T,A,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new In(T,A,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){const v=S[C];v.setSize&&v.setSize(T,A)}},this.begin=function(b,T){if(_||b.toneMapping===Vn&&S.length===0)return!1;if(m=T,T!==null){const A=T.width,C=T.height;(a.width!==A||a.height!==C)&&this.setSize(A,C)}return R===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Vn,!0},this.hasRenderPass=function(){return R},this.end=function(b,T){b.toneMapping=g,_=!0;let A=a,C=o;for(let v=0;v<S.length;v++){const w=S[v];w.enabled!==!1&&(w.render(b,C,A,T),w.needsSwap!==!1&&(A=C,C=C===o?c:o))}if(f!==b.outputColorSpace||p!==b.toneMapping){f=b.outputColorSpace,p=b.toneMapping,l.defines={},rt.getTransfer(f)===xt&&(l.defines.SRGB_TRANSFER="");const v=rg[p];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,b.setRenderTarget(m),b.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),l.dispose()}}const cu=new Xt,ol=new js(1,1),hu=new Gh,uu=new Ld,du=new Yh,Zc=[],Jc=[],Qc=new Float32Array(16),jc=new Float32Array(9),eh=new Float32Array(4);function Ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xa(n,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;eh.set(i),n.uniformMatrix2fv(this.addr,!1,eh),zt(t,i)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),zt(t,i)}}function fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),zt(t,i)}}function pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function _g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function Sg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ol.compareFunction=t.isReversedDepthBuffer()?Sl:bl,r=ol):r=cu,t.setTexture2D(e||r,s)}function Mg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||uu,s)}function Eg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||du,s)}function wg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hu,s)}function Tg(n){switch(n){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return yg;case 36295:return vg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return wg}}function Ag(n,e){n.uniform1fv(this.addr,e)}function Rg(n,e){const t=Ms(e,this.size,2);n.uniform2fv(this.addr,t)}function Cg(n,e){const t=Ms(e,this.size,3);n.uniform3fv(this.addr,t)}function Pg(n,e){const t=Ms(e,this.size,4);n.uniform4fv(this.addr,t)}function Lg(n,e){const t=Ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Dg(n,e){const t=Ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ig(n,e){const t=Ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ng(n,e){n.uniform1iv(this.addr,e)}function Ug(n,e){n.uniform2iv(this.addr,e)}function Og(n,e){n.uniform3iv(this.addr,e)}function Fg(n,e){n.uniform4iv(this.addr,e)}function kg(n,e){n.uniform1uiv(this.addr,e)}function Bg(n,e){n.uniform2uiv(this.addr,e)}function zg(n,e){n.uniform3uiv(this.addr,e)}function Gg(n,e){n.uniform4uiv(this.addr,e)}function Hg(n,e,t){const i=this.cache,s=e.length,r=xa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ol:a=cu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Vg(n,e,t){const i=this.cache,s=e.length,r=xa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||uu,r[a])}function Wg(n,e,t){const i=this.cache,s=e.length,r=xa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||du,r[a])}function Xg(n,e,t){const i=this.cache,s=e.length,r=xa(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hu,r[a])}function qg(n){switch(n){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ig;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Og;case 35669:case 35673:return Fg;case 5125:return kg;case 36294:return Bg;case 36295:return zg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}}class $g{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}}class Kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function th(n,e){n.seq.push(e),n.map[e.id]=e}function Zg(n,e,t){const i=n.name,s=i.length;for(oo.lastIndex=0;;){const r=oo.exec(i),a=oo.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){th(t,h===void 0?new Yg(o,n,e):new $g(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Kg(o),th(t,u)),t=u}}}class Yr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Zg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function nh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Jg=37297;let Qg=0;function jg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ih=new Ke;function ex(n){rt._getMatrix(ih,rt.workingColorSpace,n);const e=`mat3( ${ih.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+jg(n.getShaderSource(e),o)}else return r}function tx(n,e){const t=ex(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nx={[Ah]:"Linear",[Rh]:"Reinhard",[Ch]:"Cineon",[fl]:"ACESFilmic",[Lh]:"AgX",[Dh]:"Neutral",[Ph]:"Custom"};function ix(n,e){const t=nx[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new O;function sx(){rt.getLuminanceCoefficients(Br);const n=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function ax(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ox(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ks(n){return n!==""}function rh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(n){return n.replace(lx,hx)}const cx=new Map;function hx(n,e){let t=je[e];if(t===void 0){const i=cx.get(e);if(i!==void 0)t=je[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ll(t)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(n){return n.replace(ux,dx)}function dx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const fx={[zs]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function px(n){return fx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mx={[Bi]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};function gx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":mx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const xx={[gs]:"ENVMAP_MODE_REFRACTION"};function _x(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yx={[Th]:"ENVMAP_BLENDING_MULTIPLY",[od]:"ENVMAP_BLENDING_MIX",[ld]:"ENVMAP_BLENDING_ADD"};function vx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yx[n.combine]||"ENVMAP_BLENDING_NONE"}function bx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Sx(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=px(t),h=gx(t),l=_x(t),u=vx(t),d=bx(t),f=rx(t),p=ax(r),_=s.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ks).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ks).join(`
`),m.length>0&&(m+=`
`)):(g=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),m=[lh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?je.tonemapping_pars_fragment:"",t.toneMapping!==Vn?ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=ll(a),a=rh(a,t),a=ah(a,t),o=ll(o),o=rh(o,t),o=ah(o,t),a=oh(a),o=oh(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=S+g+a,b=S+m+o,T=nh(s,s.VERTEX_SHADER,R),A=nh(s,s.FRAGMENT_SHADER,b);s.attachShader(_,T),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(U){if(n.debug.checkShaderErrors){const x=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(A)||"",D=x.trim(),H=I.trim(),B=L.trim();let Z=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,A);else{const $=sh(s,T,"vertex"),J=sh(s,A,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+$+`
`+J)}else D!==""?Ve("WebGLProgram: Program Info Log:",D):(H===""||B==="")&&(q=!1);q&&(U.diagnostics={runnable:Z,programLog:D,vertexShader:{log:H,prefix:g},fragmentShader:{log:B,prefix:m}})}s.deleteShader(T),s.deleteShader(A),v=new Yr(s,_),w=ox(s,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,Jg)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let Mx=0;class Ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wx(e),t.set(e,i)),i}}class wx{constructor(e){this.id=Mx++,this.code=e,this.usedTimes=0}}function Tx(n){return n===zi||n===Jr||n===Qr}function Ax(n,e,t,i,s,r){const a=new El,o=new Ex,c=new Set,h=[],l=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,w,N,U,x,I){const L=U.fog,D=x.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||H,B),q=Z&&Z.mapping===ca?Z.image.height:null,$=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Se=J!==void 0?J.length:0;let Me=0;D.morphAttributes.position!==void 0&&(Me=1),D.morphAttributes.normal!==void 0&&(Me=2),D.morphAttributes.color!==void 0&&(Me=3);let tt,nt,lt,ee;if($){const St=Bn[$];tt=St.vertexShader,nt=St.fragmentShader}else{tt=v.vertexShader,nt=v.fragmentShader;const St=o.getVertexShaderStage(v),dt=o.getFragmentShaderStage(v);o.update(v,St,dt),lt=St.id,ee=dt.id}const ie=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),He=x.isInstancedMesh===!0,Te=x.isBatchedMesh===!0,We=!!v.map,mt=!!v.matcap,se=!!Z,oe=!!v.aoMap,le=!!v.lightMap,ce=!!v.bumpMap&&v.wireframe===!1,fe=!!v.normalMap,ze=!!v.displacementMap,Be=!!v.emissiveMap,Xe=!!v.metalnessMap,$e=!!v.roughnessMap,F=v.anisotropy>0,ut=v.clearcoat>0,it=v.dispersion>0,P=v.retroreflectivity>0,y=v.iridescence>0,V=v.sheen>0,Y=v.transmission>0,Q=F&&!!v.anisotropyMap,he=ut&&!!v.clearcoatMap,de=ut&&!!v.clearcoatNormalMap,j=ut&&!!v.clearcoatRoughnessMap,ne=y&&!!v.iridescenceMap,pe=y&&!!v.iridescenceThicknessMap,Ue=V&&!!v.sheenColorMap,_e=V&&!!v.sheenRoughnessMap,me=!!v.specularMap,Oe=!!v.specularColorMap,Ge=!!v.specularIntensityMap,Je=Y&&!!v.transmissionMap,G=Y&&!!v.thicknessMap,ge=!!v.gradientMap,te=!!v.alphaMap,xe=v.alphaTest>0,we=!!v.alphaHash,ae=!!v.extensions;let Fe=Vn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const Ie={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:tt,fragmentShader:nt,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Te,batchingColor:Te&&x._colorsTexture!==null,instancing:He,instancingColor:He&&x.instanceColor!==null,instancingMorph:He&&x.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:mt,envMap:se,envMapMode:se&&Z.mapping,envMapCubeUVHeight:q,aoMap:oe,lightMap:le,bumpMap:ce,normalMap:fe,displacementMap:ze,emissiveMap:Be,normalMapObjectSpace:fe&&v.normalMapType===ud,normalMapTangentSpace:fe&&v.normalMapType===tl,packedNormalMap:fe&&v.normalMapType===tl&&Tx(v.normalMap.format),metalnessMap:Xe,roughnessMap:$e,anisotropy:F,anisotropyMap:Q,clearcoat:ut,clearcoatMap:he,clearcoatNormalMap:de,clearcoatRoughnessMap:j,dispersion:it,retroreflection:P,iridescence:y,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:V,sheenColorMap:Ue,sheenRoughnessMap:_e,specularMap:me,specularColorMap:Oe,specularIntensityMap:Ge,transmission:Y,transmissionMap:Je,thicknessMap:G,gradientMap:ge,opaque:v.transparent===!1&&v.blending===Gs&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:we,combine:v.combine,mapUv:We&&p(v.map.channel),aoMapUv:oe&&p(v.aoMap.channel),lightMapUv:le&&p(v.lightMap.channel),bumpMapUv:ce&&p(v.bumpMap.channel),normalMapUv:fe&&p(v.normalMap.channel),displacementMapUv:ze&&p(v.displacementMap.channel),emissiveMapUv:Be&&p(v.emissiveMap.channel),metalnessMapUv:Xe&&p(v.metalnessMap.channel),roughnessMapUv:$e&&p(v.roughnessMap.channel),anisotropyMapUv:Q&&p(v.anisotropyMap.channel),clearcoatMapUv:he&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&p(v.sheenRoughnessMap.channel),specularMapUv:me&&p(v.specularMap.channel),specularColorMapUv:Oe&&p(v.specularColorMap.channel),specularIntensityMapUv:Ge&&p(v.specularIntensityMap.channel),transmissionMapUv:Je&&p(v.transmissionMap.channel),thicknessMapUv:G&&p(v.thicknessMap.channel),alphaMapUv:te&&p(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(fe||F),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!D.attributes.uv&&(We||te),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&fe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Me,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:Be&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Rn,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)w.push(N),w.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(m(w,v),S(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const w=f[v.type];let N;if(w){const U=Bn[w];N=Of.clone(U.uniforms)}else N=v.uniforms;return N}function b(v,w){let N=l.get(w);return N!==void 0?++N.usedTimes:(N=new Sx(n,w,v,s),h.push(N),l.set(w,N)),N}function T(v){if(--v.usedTimes===0){const w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),l.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:R,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:C}}function Rx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ch(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,g,m){let S=n[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=g,S.group=m),e++,S}function c(d,f,p,_,g,m,S){S.reversedDepth===!0&&(g=-g);const R=o(d,f,p,_,g,m);p.transmission>0?i.push(R):p.transparent===!0?s.push(R):t.push(R)}function h(d,f,p,_,g,m){const S=o(d,f,p,_,g,m);p.transmission>0?i.unshift(S):p.transparent===!0?s.unshift(S):t.unshift(S)}function l(d,f){t.length>1&&t.sort(d||Cx),i.length>1&&i.sort(f||ch),s.length>1&&s.sort(f||ch)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:h,finish:u,sort:l}}function Px(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new hh,n.set(i,[a])):s>=r.length?(a=new hh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new qe};break;case"SpotLight":t={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Dx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ix=0;function Nx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ux(n){const e=new Lx,t=Dx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);const s=new O,r=new at,a=new at;function o(h){let l=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,S=0,R=0,b=0,T=0,A=0,C=0,v=0,w=0,N=0;h.sort(Nx);for(let x=0,I=h.length;x<I;x++){const L=h[x],D=L.color,H=L.intensity,B=L.distance;let Z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===zi?Z=L.shadow.map.texture:Z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)l+=D.r*H,u+=D.g*H,d+=D.b*H;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],H);N++}else if(L.isSunLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,J=t.get(L);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[p]=J,i.sunShadowMap[p]=Z;const Se=$.getViewportCount();for(let Me=0;Me<Se;Me++)i.sunShadowMatrix[_+Me]=$.getMatrix(Me),i.sunShadowCascade[_+Me]=$._cascadeData[Me];_+=Se,p++}i.sun[f]=q,f++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,J=t.get(L);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=q,g++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(D).multiplyScalar(H),q.distance=B,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[S]=q;const $=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,$.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[S]=$.matrix,L.castShadow){const J=t.get(L);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,i.spotShadow[S]=J,i.spotShadowMap[S]=Z,C++}S++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(D).multiplyScalar(H),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[R]=q,R++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const $=L.shadow,J=t.get(L);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=L.shadow.matrix,A++}i.point[m]=q,m++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(H),q.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[b]=q,b++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=d;const U=i.hash;(U.sunLength!==f||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==S||U.rectAreaLength!==R||U.hemiLength!==b||U.numSunShadows!==p||U.numDirectionalShadows!==T||U.numPointShadows!==A||U.numSpotShadows!==C||U.numSpotMaps!==v||U.numLightProbes!==N)&&(i.sun.length=f,i.directional.length=g,i.spot.length=S,i.rectArea.length=R,i.point.length=m,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=N,U.sunLength=f,U.directionalLength=g,U.pointLength=m,U.spotLength=S,U.rectAreaLength=R,U.hemiLength=b,U.numSunShadows=p,U.numDirectionalShadows=T,U.numPointShadows=A,U.numSpotShadows=C,U.numSpotMaps=v,U.numLightProbes=N,i.version=Ix++)}function c(h,l){let u=0,d=0,f=0,p=0,_=0,g=0;const m=l.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){const b=h[S];if(b.isSunLight){const T=i.sun[u];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),u++}else if(b.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(b.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:i}}function uh(n){const e=new Ux(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){s.push(d)}function h(){e.setup(t)}function l(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ox(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new uh(n),e.set(s,[o])):r>=a.length?(o=new uh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Fx=`void main() {
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
}`,Bx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],zx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],dh=new at,Ns=new O,lo=new O;function Gx(n,e,t){let i=new Tl;const s=new re,r=new re,a=new At,o=new Gf,c=new Hf,h={},l=t.maxTextureSize,u={[ki]:sn,[sn]:ki,[Rn]:Rn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Fx,fragmentShader:kx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Pt;p.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ht(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let m=this.type;this.render=function(A,C,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Hu&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);const w=n.getRenderTarget(),N=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),x=n.state;x.setBlending(ni),x.buffers.depth.getReversed()===!0?x.buffers.color.setClear(0,0,0,0):x.buffers.color.setClear(1,1,1,1),x.buffers.depth.setTest(!0),x.setScissorTest(!1);const I=m!==this.type;I&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(D=>D.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,D=A.length;L<D;L++){const H=A[L],B=H.shadow;if(B===void 0){Ve("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Z=B.getFrameExtents();s.multiply(Z),r.copy(B.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||I===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Us){if(H.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new In(s.x,s.y,{format:zi,type:qn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new js(s.x,s.y,Pn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=si,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt}else H.isPointLight?(B.map=new lu(s.x),B.map.depthTexture=new Qd(s.x,Xn)):(B.map=new In(s.x,s.y),B.map.depthTexture=new js(s.x,s.y,Xn)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=si,this.type===zs?(B.map.depthTexture.compareFunction=q?Sl:bl,B.map.depthTexture.minFilter=Zt,B.map.depthTexture.magFilter=Zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Wt,B.map.depthTexture.magFilter=Wt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const $=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();H.isPointLight!==!0&&B.updateMatrices(H,v);for(let J=0;J<$;J++){const Se=B.getCamera(J);if(H.isPointLight){const Me=B.camera,tt=B.matrix,nt=H.distance||Me.far;nt!==Me.far&&(Me.far=nt,Me.updateProjectionMatrix()),Ns.setFromMatrixPosition(H.matrixWorld),Me.position.copy(Ns),lo.copy(Me.position),lo.add(Bx[J]),Me.up.copy(zx[J]),Me.lookAt(lo),Me.updateMatrixWorld(),tt.makeTranslation(-Ns.x,-Ns.y,-Ns.z),dh.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),B._frustum.setFromProjectionMatrix(dh,Me.coordinateSystem,Me.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,J),n.clear();else{J===0&&(n.setRenderTarget(B.map),n.clear());const Me=B.getViewport(J);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),x.viewport(a)}i=B.getFrustum(J),b(C,v,Se,H,this.type)}B.isPointLightShadow!==!0&&this.type===Us&&S(B,v),B.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(w,N,U)};function S(A,C){const v=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new In(s.x,s.y,{format:zi,type:qn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,v,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,v,f,_,null)}function R(A,C,v,w){let N=null;const U=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)N=U;else if(N=v.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const x=N.uuid,I=C.uuid;let L=h[x];L===void 0&&(L={},h[x]=L);let D=L[I];D===void 0&&(D=N.clone(),L[I]=D,C.addEventListener("dispose",T)),N=D}if(N.visible=C.visible,N.wireframe=C.wireframe,w===Us?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:u[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const x=n.properties.get(N);x.light=v}return N}function b(A,C,v,w,N){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Us)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const I=e.update(A),L=A.material;if(Array.isArray(L)){const D=I.groups;for(let H=0,B=D.length;H<B;H++){const Z=D[H],q=L[Z.materialIndex];if(q&&q.visible){const $=R(A,q,w,N);A.onBeforeShadow(n,A,C,v,I,$,Z),n.renderBufferDirect(v,null,I,$,A,Z),A.onAfterShadow(n,A,C,v,I,$,Z)}}}else if(L.visible){const D=R(A,L,w,N);A.onBeforeShadow(n,A,C,v,I,D,null),n.renderBufferDirect(v,null,I,D,A,null),A.onAfterShadow(n,A,C,v,I,D,null)}}const x=A.children;for(let I=0,L=x.length;I<L;I++)b(x[I],C,v,w,N)}function T(A){A.target.removeEventListener("dispose",T);for(const v in h){const w=h[v],N=A.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function Hx(n,e){function t(){let G=!1;const ge=new At;let te=null;const xe=new At(0,0,0,0);return{setMask:function(we){te!==we&&!G&&(n.colorMask(we,we,we,we),te=we)},setLocked:function(we){G=we},setClear:function(we,ae,Fe,Ie,St){St===!0&&(we*=Ie,ae*=Ie,Fe*=Ie),ge.set(we,ae,Fe,Ie),xe.equals(ge)===!1&&(n.clearColor(we,ae,Fe,Ie),xe.copy(ge))},reset:function(){G=!1,te=null,xe.set(-1,0,0,0)}}}function i(){let G=!1,ge=!1,te=null,xe=null,we=null;return{setReversed:function(ae){if(ge!==ae){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ge=ae;const Ie=we;we=null,this.setClear(Ie)}},getReversed:function(){return ge},setTest:function(ae){ae?ie(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(ae){te!==ae&&!G&&(n.depthMask(ae),te=ae)},setFunc:function(ae){if(ge&&(ae=Md[ae]),xe!==ae){switch(ae){case xo:n.depthFunc(n.NEVER);break;case _o:n.depthFunc(n.ALWAYS);break;case yo:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case vo:n.depthFunc(n.EQUAL);break;case bo:n.depthFunc(n.GEQUAL);break;case So:n.depthFunc(n.GREATER);break;case Mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ae}},setLocked:function(ae){G=ae},setClear:function(ae){we!==ae&&(we=ae,ge&&(ae=1-ae),n.clearDepth(ae))},reset:function(){G=!1,te=null,xe=null,we=null,ge=!1}}}function s(){let G=!1,ge=null,te=null,xe=null,we=null,ae=null,Fe=null,Ie=null,St=null;return{setTest:function(dt){G||(dt?ie(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(dt){ge!==dt&&!G&&(n.stencilMask(dt),ge=dt)},setFunc:function(dt,Mn,Un){(te!==dt||xe!==Mn||we!==Un)&&(n.stencilFunc(dt,Mn,Un),te=dt,xe=Mn,we=Un)},setOp:function(dt,Mn,Un){(ae!==dt||Fe!==Mn||Ie!==Un)&&(n.stencilOp(dt,Mn,Un),ae=dt,Fe=Mn,Ie=Un)},setLocked:function(dt){G=dt},setClear:function(dt){St!==dt&&(n.clearStencil(dt),St=dt)},reset:function(){G=!1,ge=null,te=null,xe=null,we=null,ae=null,Fe=null,Ie=null,St=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,h=new WeakMap;let l={},u={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,R=null,b=null,T=null,A=null,C=null,v=new qe(0,0,0),w=0,N=!1,U=null,x=null,I=null,L=null,D=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=Z>=2);let $=null,J={};const Se=n.getParameter(n.SCISSOR_BOX),Me=n.getParameter(n.VIEWPORT),tt=new At().fromArray(Se),nt=new At().fromArray(Me);function lt(G,ge,te,xe){const we=new Uint8Array(4),ae=n.createTexture();n.bindTexture(G,ae),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<te;Fe++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ge+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return ae}const ee={};ee[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc($s),ce(!1),fe(jl),ie(n.CULL_FACE),oe(ni);function ie(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function ve(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function He(G,ge){return d[G]!==ge?(n.bindFramebuffer(G,ge),d[G]=ge,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ge),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Te(G,ge){let te=p,xe=!1;if(G){te=f.get(ge),te===void 0&&(te=[],f.set(ge,te));const we=G.textures;if(te.length!==we.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Fe=we.length;ae<Fe;ae++)te[ae]=n.COLOR_ATTACHMENT0+ae;te.length=we.length,xe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,xe=!0);xe&&n.drawBuffers(te)}function We(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const mt={[hs]:n.FUNC_ADD,[Wu]:n.FUNC_SUBTRACT,[Xu]:n.FUNC_REVERSE_SUBTRACT};mt[qu]=n.MIN,mt[Yu]=n.MAX;const se={[$u]:n.ZERO,[Ku]:n.ONE,[Zu]:n.SRC_COLOR,[Eh]:n.SRC_ALPHA,[nd]:n.SRC_ALPHA_SATURATE,[ed]:n.DST_COLOR,[Qu]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[wh]:n.ONE_MINUS_SRC_ALPHA,[td]:n.ONE_MINUS_DST_COLOR,[ju]:n.ONE_MINUS_DST_ALPHA,[id]:n.CONSTANT_COLOR,[sd]:n.ONE_MINUS_CONSTANT_COLOR,[rd]:n.CONSTANT_ALPHA,[ad]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(G,ge,te,xe,we,ae,Fe,Ie,St,dt){if(G===ni){g===!0&&(ve(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),G!==Vu){if(G!==m||dt!==N){if((S!==hs||T!==hs)&&(n.blendEquation(n.FUNC_ADD),S=hs,T=hs),dt)switch(G){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFunc(n.ONE,n.ONE);break;case tc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",G);break}else switch(G){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ec:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",G);break}R=null,b=null,A=null,C=null,v.set(0,0,0),w=0,m=G,N=dt}return}we=we||ge,ae=ae||te,Fe=Fe||xe,(ge!==S||we!==T)&&(n.blendEquationSeparate(mt[ge],mt[we]),S=ge,T=we),(te!==R||xe!==b||ae!==A||Fe!==C)&&(n.blendFuncSeparate(se[te],se[xe],se[ae],se[Fe]),R=te,b=xe,A=ae,C=Fe),(Ie.equals(v)===!1||St!==w)&&(n.blendColor(Ie.r,Ie.g,Ie.b,St),v.copy(Ie),w=St),m=G,N=!1}function le(G,ge){G.side===Rn?ve(n.CULL_FACE):ie(n.CULL_FACE);let te=G.side===sn;ge&&(te=!te),ce(te),G.blending===Gs&&G.transparent===!1?oe(ni):oe(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),r.setMask(G.colorWrite);const xe=G.stencilWrite;o.setTest(xe),xe&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){U!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),U=G)}function fe(G){G!==zu?(ie(n.CULL_FACE),G!==x&&(G===jl?n.cullFace(n.BACK):G===Gu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),x=G}function ze(G){G!==I&&(B&&n.lineWidth(G),I=G)}function Be(G,ge,te){G?(ie(n.POLYGON_OFFSET_FILL),(L!==ge||D!==te)&&(L=ge,D=te,a.getReversed()&&(ge=-ge),n.polygonOffset(ge,te))):ve(n.POLYGON_OFFSET_FILL)}function Xe(G){G?ie(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function $e(G){G===void 0&&(G=n.TEXTURE0+H-1),$!==G&&(n.activeTexture(G),$=G)}function F(G,ge,te){te===void 0&&($===null?te=n.TEXTURE0+H-1:te=$);let xe=J[te];xe===void 0&&(xe={type:void 0,texture:void 0},J[te]=xe),(xe.type!==G||xe.texture!==ge)&&($!==te&&(n.activeTexture(te),$=te),n.bindTexture(G,ge||ee[G]),xe.type=G,xe.texture=ge)}function ut(){const G=J[$];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function it(){try{n.compressedTexImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function y(){try{n.texSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function V(){try{n.texSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function he(){try{n.texStorage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function de(){try{n.texStorage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function j(){try{n.texImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function ne(){try{n.texImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function pe(G){return u[G]!==void 0?u[G]:n.getParameter(G)}function Ue(G,ge){u[G]!==ge&&(n.pixelStorei(G,ge),u[G]=ge)}function _e(G){tt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),tt.copy(G))}function me(G){nt.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),nt.copy(G))}function Oe(G,ge){let te=h.get(ge);te===void 0&&(te=new WeakMap,h.set(ge,te));let xe=te.get(G);xe===void 0&&(xe=n.getUniformBlockIndex(ge,G.name),te.set(G,xe))}function Ge(G,ge){const xe=h.get(ge).get(G);c.get(ge)!==xe&&(n.uniformBlockBinding(ge,xe,G.__bindingPointIndex),c.set(ge,xe))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),l={},u={},$=null,J={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,R=null,b=null,T=null,A=null,C=null,v=new qe(0,0,0),w=0,N=!1,U=null,x=null,I=null,L=null,D=null,tt.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ve,bindFramebuffer:He,drawBuffers:Te,useProgram:We,setBlending:oe,setMaterial:le,setFlipSided:ce,setCullFace:fe,setLineWidth:ze,setPolygonOffset:Be,setScissorTest:Xe,activeTexture:$e,bindTexture:F,unbindTexture:ut,compressedTexImage2D:it,compressedTexImage3D:P,texImage2D:j,texImage3D:ne,pixelStorei:Ue,getParameter:pe,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:he,texStorage3D:de,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:_e,viewport:me,reset:Je}}function Vx(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new re,l=new WeakMap,u=new Set;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return p?new OffscreenCanvas(P,y):Qs("canvas")}function g(P,y,V){let Y=1;const Q=it(P);if((Q.width>V||Q.height>V)&&(Y=V/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(Y*Q.width),de=Math.floor(Y*Q.height);d===void 0&&(d=_(he,de));const j=y?_(he,de):d;return j.width=he,j.height=de,j.getContext("2d").drawImage(P,0,0,he,de),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+he+"x"+de+")."),j}else return"data"in P&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function S(P){n.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(P,y,V,Y,Q,he=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de;Y&&(de=e.get("EXT_texture_norm16"),de||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===n.RED&&(V===n.FLOAT&&(j=n.R32F),V===n.HALF_FLOAT&&(j=n.R16F),V===n.UNSIGNED_BYTE&&(j=n.R8),V===n.UNSIGNED_SHORT&&de&&(j=de.R16_EXT),V===n.SHORT&&de&&(j=de.R16_SNORM_EXT)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.R8UI),V===n.UNSIGNED_SHORT&&(j=n.R16UI),V===n.UNSIGNED_INT&&(j=n.R32UI),V===n.BYTE&&(j=n.R8I),V===n.SHORT&&(j=n.R16I),V===n.INT&&(j=n.R32I)),y===n.RG&&(V===n.FLOAT&&(j=n.RG32F),V===n.HALF_FLOAT&&(j=n.RG16F),V===n.UNSIGNED_BYTE&&(j=n.RG8),V===n.UNSIGNED_SHORT&&de&&(j=de.RG16_EXT),V===n.SHORT&&de&&(j=de.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RG8UI),V===n.UNSIGNED_SHORT&&(j=n.RG16UI),V===n.UNSIGNED_INT&&(j=n.RG32UI),V===n.BYTE&&(j=n.RG8I),V===n.SHORT&&(j=n.RG16I),V===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGB8UI),V===n.UNSIGNED_SHORT&&(j=n.RGB16UI),V===n.UNSIGNED_INT&&(j=n.RGB32UI),V===n.BYTE&&(j=n.RGB8I),V===n.SHORT&&(j=n.RGB16I),V===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),V===n.UNSIGNED_INT&&(j=n.RGBA32UI),V===n.BYTE&&(j=n.RGBA8I),V===n.SHORT&&(j=n.RGBA16I),V===n.INT&&(j=n.RGBA32I)),y===n.RGB&&(V===n.UNSIGNED_SHORT&&de&&(j=de.RGB16_EXT),V===n.SHORT&&de&&(j=de.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),y===n.RGBA){const ne=he?ea:rt.getTransfer(Q);V===n.FLOAT&&(j=n.RGBA32F),V===n.HALF_FLOAT&&(j=n.RGBA16F),V===n.UNSIGNED_BYTE&&(j=ne===xt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&de&&(j=de.RGBA16_EXT),V===n.SHORT&&de&&(j=de.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function T(P,y){let V;return P?y===null||y===Xn||y===Zs?V=n.DEPTH24_STENCIL8:y===Pn?V=n.DEPTH32F_STENCIL8:y===Ks&&(V=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xn||y===Zs?V=n.DEPTH_COMPONENT24:y===Pn?V=n.DEPTH_COMPONENT32F:y===Ks&&(V=n.DEPTH_COMPONENT16),V}function A(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function C(P){const y=P.target;y.removeEventListener("dispose",C),w(y),y.isVideoTexture&&l.delete(y),y.isHTMLTexture&&u.delete(y)}function v(P){const y=P.target;y.removeEventListener("dispose",v),U(y)}function w(P){const y=i.get(P);if(y.__webglInit===void 0)return;const V=P.source,Y=f.get(V);if(Y){const Q=Y[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(P),Object.keys(Y).length===0&&f.delete(V)}i.remove(P)}function N(P){const y=i.get(P);n.deleteTexture(y.__webglTexture);const V=P.source,Y=f.get(V);delete Y[y.__cacheKey],a.memory.textures--}function U(P){const y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let Q=0;Q<y.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[Y]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=P.textures;for(let Y=0,Q=V.length;Y<Q;Y++){const he=i.get(V[Y]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(V[Y])}i.remove(P)}let x=0;function I(){x=0}function L(){return x}function D(P){x=P}function H(){const P=x;return P>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),x+=1,P}function B(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function Z(P,y){const V=i.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const Y=P.image;if(Y===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,P,y);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function q(P,y){const V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){ve(V,P,y);return}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function $(P,y){const V=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){ve(V,P,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function J(P,y){const V=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&V.__version!==P.version){He(V,P,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}const Se={[Zr]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},Me={[Wt]:n.NEAREST,[cd]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Aa]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},tt={[fd]:n.NEVER,[_d]:n.ALWAYS,[pd]:n.LESS,[bl]:n.LEQUAL,[md]:n.EQUAL,[Sl]:n.GEQUAL,[gd]:n.GREATER,[xd]:n.NOTEQUAL};function nt(P,y){if(y.type===Pn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zt||y.magFilter===Aa||y.magFilter===hr||y.magFilter===Ii||y.minFilter===Zt||y.minFilter===Aa||y.minFilter===hr||y.minFilter===Ii)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,Se[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,Se[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,Se[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Me[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,tt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==hr&&y.minFilter!==Ii||y.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function lt(P,y){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",C));const Y=y.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const he=B(y);if(he!==P.__cacheKey){Q[he]===void 0&&(Q[he]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[he].usedTimes++;const de=Q[P.__cacheKey];de!==void 0&&(Q[P.__cacheKey].usedTimes--,de.usedTimes===0&&N(y)),P.__cacheKey=he,P.__webglTexture=Q[he].texture}return V}function ee(P,y,V){return Math.floor(Math.floor(P/V)/y)}function ie(P,y,V,Y){const he=P.updateRanges;if(he.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,Y,y.data);else{he.sort((Ue,_e)=>Ue.start-_e.start);let de=0;for(let Ue=1;Ue<he.length;Ue++){const _e=he[de],me=he[Ue],Oe=_e.start+_e.count,Ge=ee(me.start,y.width,4),Je=ee(_e.start,y.width,4);me.start<=Oe+1&&Ge===Je&&ee(me.start+me.count-1,y.width,4)===Ge?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++de,he[de]=me)}he.length=de+1;const j=t.getParameter(n.UNPACK_ROW_LENGTH),ne=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ue=0,_e=he.length;Ue<_e;Ue++){const me=he[Ue],Oe=Math.floor(me.start/4),Ge=Math.ceil(me.count/4),Je=Oe%y.width,G=Math.floor(Oe/y.width),ge=Ge,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Je,G,ge,te,V,Y,y.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function ve(P,y,V){let Y=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=lt(P,y),he=y.source;t.bindTexture(Y,P.__webglTexture,n.TEXTURE0+V);const de=i.get(he);if(he.version!==de.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const te=rt.getPrimaries(rt.workingColorSpace),xe=y.colorSpace===mi?null:rt.getPrimaries(y.colorSpace),we=y.colorSpace===mi||te===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let ne=g(y.image,!1,s.maxTextureSize);ne=ut(y,ne);const pe=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let _e=b(y.internalFormat,pe,Ue,y.normalized,y.colorSpace,y.isVideoTexture);nt(Y,y);let me;const Oe=y.mipmaps,Ge=y.isVideoTexture!==!0,Je=de.__version===void 0||Q===!0,G=he.dataReady,ge=A(y,ne);if(y.isDepthTexture)_e=T(y.format===Ni,y.type),Je&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,_e,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,_e,ne.width,ne.height,0,pe,Ue,null));else if(y.isDataTexture)if(Oe.length>0){Ge&&Je&&t.texStorage2D(n.TEXTURE_2D,ge,_e,Oe[0].width,Oe[0].height);for(let te=0,xe=Oe.length;te<xe;te++)me=Oe[te],Ge?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,pe,Ue,me.data):t.texImage2D(n.TEXTURE_2D,te,_e,me.width,me.height,0,pe,Ue,me.data);y.generateMipmaps=!1}else Ge?(Je&&t.texStorage2D(n.TEXTURE_2D,ge,_e,ne.width,ne.height),G&&ie(y,ne,pe,Ue)):t.texImage2D(n.TEXTURE_2D,0,_e,ne.width,ne.height,0,pe,Ue,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,_e,Oe[0].width,Oe[0].height,ne.depth);for(let te=0,xe=Oe.length;te<xe;te++)if(me=Oe[te],y.format!==Ln)if(pe!==null)if(Ge){if(G)if(y.layerUpdates.size>0){const we=Wc(me.width,me.height,y.format,y.type);for(const ae of y.layerUpdates){const Fe=me.data.subarray(ae*we/me.data.BYTES_PER_ELEMENT,(ae+1)*we/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ae,me.width,me.height,1,pe,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,ne.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,_e,me.width,me.height,ne.depth,0,me.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,ne.depth,pe,Ue,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,_e,me.width,me.height,ne.depth,0,pe,Ue,me.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ge&&Je&&t.texStorage2D(n.TEXTURE_2D,ge,_e,Oe[0].width,Oe[0].height);for(let te=0,xe=Oe.length;te<xe;te++)me=Oe[te],y.format!==Ln?pe!==null?Ge?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,_e,me.width,me.height,0,me.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,pe,Ue,me.data):t.texImage2D(n.TEXTURE_2D,te,_e,me.width,me.height,0,pe,Ue,me.data)}else if(y.isDataArrayTexture)if(Ge){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,_e,ne.width,ne.height,ne.depth),G)if(y.layerUpdates.size>0){const te=Wc(ne.width,ne.height,y.format,y.type);for(const xe of y.layerUpdates){const we=ne.data.subarray(xe*te/ne.data.BYTES_PER_ELEMENT,(xe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,ne.width,ne.height,1,pe,Ue,we)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,Ue,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ne.width,ne.height,ne.depth,0,pe,Ue,ne.data);else if(y.isData3DTexture)Ge?(Je&&t.texStorage3D(n.TEXTURE_3D,ge,_e,ne.width,ne.height,ne.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,Ue,ne.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ne.width,ne.height,ne.depth,0,pe,Ue,ne.data);else if(y.isFramebufferTexture){if(Je)if(Ge)t.texStorage2D(n.TEXTURE_2D,ge,_e,ne.width,ne.height);else{let te=ne.width,xe=ne.height;for(let we=0;we<ge;we++)t.texImage2D(n.TEXTURE_2D,we,_e,te,xe,0,pe,Ue,null),te>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),u.add(y),te.onpaint=xe=>{const we=xe.changedElements;for(const ae of u)we.includes(ae.image)&&(ae.needsUpdate=!0)},te.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ne);else{const we=n.RGBA,ae=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,ae,Fe,ne)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ge&&Je){const te=it(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ge,_e,te.width,te.height)}for(let te=0,xe=Oe.length;te<xe;te++)me=Oe[te],Ge?G&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,pe,Ue,me):t.texImage2D(n.TEXTURE_2D,te,_e,pe,Ue,me);y.generateMipmaps=!1}else if(Ge){if(Je){const te=it(ne);t.texStorage2D(n.TEXTURE_2D,ge,_e,te.width,te.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ue,ne)}else t.texImage2D(n.TEXTURE_2D,0,_e,pe,Ue,ne);m(y)&&S(Y),de.__version=he.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function He(P,y,V){if(y.image.length!==6)return;const Y=lt(P,y),Q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+V);const he=i.get(Q);if(Q.version!==he.__version||Y===!0){t.activeTexture(n.TEXTURE0+V);const de=rt.getPrimaries(rt.workingColorSpace),j=y.colorSpace===mi?null:rt.getPrimaries(y.colorSpace),ne=y.colorSpace===mi||de===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const pe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ue=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!pe&&!Ue?_e[ae]=g(y.image[ae],!0,s.maxCubemapSize):_e[ae]=Ue?y.image[ae].image:y.image[ae],_e[ae]=ut(y,_e[ae]);const me=_e[0],Oe=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type),Je=b(y.internalFormat,Oe,Ge,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,ge=he.__version===void 0||Y===!0,te=Q.dataReady;let xe=A(y,me);nt(n.TEXTURE_CUBE_MAP,y);let we;if(pe){G&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Je,me.width,me.height);for(let ae=0;ae<6;ae++){we=_e[ae].mipmaps;for(let Fe=0;Fe<we.length;Fe++){const Ie=we[Fe];y.format!==Ln?Oe!==null?G?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ie.width,Ie.height,Oe,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Je,Ie.width,Ie.height,0,Ie.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ie.width,Ie.height,Oe,Ge,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Je,Ie.width,Ie.height,0,Oe,Ge,Ie.data)}}}else{if(we=y.mipmaps,G&&ge){we.length>0&&xe++;const ae=it(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ue){G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,Oe,Ge,_e[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,_e[ae].width,_e[ae].height,0,Oe,Ge,_e[ae].data);for(let Fe=0;Fe<we.length;Fe++){const St=we[Fe].image[ae].image;G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,St.width,St.height,Oe,Ge,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Je,St.width,St.height,0,Oe,Ge,St.data)}}else{G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,Ge,_e[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Oe,Ge,_e[ae]);for(let Fe=0;Fe<we.length;Fe++){const Ie=we[Fe];G?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Oe,Ge,Ie.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Je,Oe,Ge,Ie.image[ae])}}}m(y)&&S(n.TEXTURE_CUBE_MAP),he.__version=Q.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Te(P,y,V,Y,Q,he){const de=r.convert(V.format,V.colorSpace),j=r.convert(V.type),ne=b(V.internalFormat,de,j,V.normalized,V.colorSpace),pe=i.get(y),Ue=i.get(V);if(Ue.__renderTarget=y,!pe.__hasExternalTextures){const _e=Math.max(1,y.width>>he),me=Math.max(1,y.height>>he);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,he,ne,_e,me,y.depth,0,de,j,null):t.texImage2D(Q,he,ne,_e,me,0,de,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),$e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,Ue.__webglTexture,0,Xe(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,Ue.__webglTexture,he),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(P,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){const Y=y.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,he=T(y.stencilBuffer,Q),de=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(y),he,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(y),he,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,P)}else{const Y=y.textures;for(let Q=0;Q<Y.length;Q++){const he=Y[Q],de=r.convert(he.format,he.colorSpace),j=r.convert(he.type),ne=b(he.internalFormat,de,j,he.normalized,he.colorSpace);$e(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(y),ne,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(y),ne,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ne,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(P,y,V){const Y=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),nt(n.TEXTURE_CUBE_MAP,y.depthTexture);const pe=r.convert(y.depthTexture.format),Ue=r.convert(y.depthTexture.type);let _e;y.depthTexture.format===si?_e=n.DEPTH_COMPONENT24:y.depthTexture.format===Ni&&(_e=n.DEPTH24_STENCIL8);for(let me=0;me<6;me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,y.width,y.height,0,pe,Ue,null)}}else Z(y.depthTexture,0);const he=Q.__webglTexture,de=Xe(y),j=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,ne=y.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===si)$e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,j,he,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ne,j,he,0);else if(y.depthTexture.format===Ni)$e(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,j,he,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,ne,j,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(P){const y=i.get(P),V=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Y}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)mt(y.__webglFramebuffer[Y],P,Y);else{const Y=P.texture.mipmaps;Y&&Y.length>0?mt(y.__webglFramebuffer[0],P,0):mt(y.__webglFramebuffer,P,0)}else if(V){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=n.createRenderbuffer(),We(y.__webglDepthbuffer[Y],P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,he)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),We(y.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,he)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(P,y,V){const Y=i.get(P);y!==void 0&&Te(Y.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&se(P)}function le(P){const y=P.texture,V=i.get(P),Y=i.get(y);P.addEventListener("dispose",v);const Q=P.textures,he=P.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=y.version,a.memory.textures++),he){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let ne=0;ne<y.mipmaps.length;ne++)V.__webglFramebuffer[j][ne]=n.createFramebuffer()}else V.__webglFramebuffer[j]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)V.__webglFramebuffer[j]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(de)for(let j=0,ne=Q.length;j<ne;j++){const pe=i.get(Q[j]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&$e(P)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const ne=Q[j];V.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[j]);const pe=r.convert(ne.format,ne.colorSpace),Ue=r.convert(ne.type),_e=b(ne.internalFormat,pe,Ue,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),me=Xe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,_e,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,V.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),We(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(he){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(n.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Te(V.__webglFramebuffer[j][ne],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne);else Te(V.__webglFramebuffer[j],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(y)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let j=0,ne=Q.length;j<ne;j++){const pe=Q[j],Ue=i.get(pe);let _e=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Ue.__webglTexture),nt(_e,pe),Te(V.__webglFramebuffer,P,pe,n.COLOR_ATTACHMENT0+j,_e,0),m(pe)&&S(_e)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,Y.__webglTexture),nt(j,y),y.mipmaps&&y.mipmaps.length>0)for(let ne=0;ne<y.mipmaps.length;ne++)Te(V.__webglFramebuffer[ne],P,y,n.COLOR_ATTACHMENT0,j,ne);else Te(V.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,j,0);m(y)&&S(j),t.unbindTexture()}P.depthBuffer&&se(P)}function ce(P){const y=P.textures;for(let V=0,Y=y.length;V<Y;V++){const Q=y[V];if(m(Q)){const he=R(P),de=i.get(Q).__webglTexture;t.bindTexture(he,de),S(he),t.unbindTexture()}}}const fe=[],ze=[];function Be(P){if(P.samples>0){if($e(P)===!1){const y=P.textures,V=P.width,Y=P.height;let Q=n.COLOR_BUFFER_BIT;const he=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(P),j=y.length>1;if(j)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const Ue=i.get(y[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,V,Y,0,0,V,Y,Q,n.NEAREST),c===!0&&(fe.length=0,ze.length=0,fe.push(n.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(fe.push(he),ze.push(he),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,de.__webglColorRenderbuffer[pe]);const Ue=i.get(y[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){const y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Xe(P){return Math.min(s.maxSamples,P.samples)}function $e(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(P){const y=a.render.frame;l.get(P)!==y&&(l.set(P,y),P.update())}function ut(P,y){const V=P.colorSpace,Y=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==jr&&V!==mi&&(rt.getTransfer(V)===xt?(Y!==Ln||Q!==gn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",V)),y}function it(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.getTextureUnits=L,this.setTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=oe,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wx(n,e){function t(i,s=mi){let r;const a=rt.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Oh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nh)return n.BYTE;if(i===Uh)return n.SHORT;if(i===Ks)return n.UNSIGNED_SHORT;if(i===pl)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===kh)return n.ALPHA;if(i===Bh)return n.RGB;if(i===Ln)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===xl)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===zi)return n.RG;if(i===yl)return n.RG_INTEGER;if(i===vl)return n.RGBA_INTEGER;if(i===Vr||i===Wr||i===Xr||i===qr)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wo||i===To||i===Ao||i===Ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Co||i===Po||i===Lo||i===Do||i===Io||i===Jr||i===No)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Co||i===Po)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Do)return r.COMPRESSED_R11_EAC;if(i===Io)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Jr)return r.COMPRESSED_RG11_EAC;if(i===No)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uo||i===Oo||i===Fo||i===ko||i===Bo||i===zo||i===Go||i===Ho||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===$o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ko)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Go)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$o)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===Zo||i===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ko)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qo||i===jo||i===Qr||i===el)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Xx=`
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

}`;class Yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new $h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nn({vertexShader:Xx,fragmentShader:qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Xi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $x extends Ei{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",g=new Yx,m={},S=t.getContextAttributes();let R=null,b=null;const T=[],A=[],C=new re;let v=null,w=null;const N=new mn;N.viewport=new At;const U=new mn;U.viewport=new At;const x=[N,U],I=new ep;let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ie=T[ee];return ie===void 0&&(ie=new Ua,T[ee]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(ee){let ie=T[ee];return ie===void 0&&(ie=new Ua,T[ee]=ie),ie.getGripSpace()},this.getHand=function(ee){let ie=T[ee];return ie===void 0&&(ie=new Ua,T[ee]=ie),ie.getHandSpace()};function H(ee){const ie=A.indexOf(ee.inputSource);if(ie===-1)return;const ve=T[ie];ve!==void 0&&(ve.update(ee.inputSource,ee.frame,h||a),ve.dispatchEvent({type:ee.type,data:ee.inputSource}))}function B(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<T.length;ee++){const ie=A[ee];ie!==null&&(A[ee]=null,T[ee].disconnect(ie))}L=null,D=null,g.reset();for(const ee in m)delete m[ee];if(e.setRenderTarget(R),f=null,d=null,u=null,s=null,b=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),w!==null){const ee=w.camera;ee.fov=w.fov,ee.zoom=w.zoom,ee.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,He=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?Ni:si,He=S.stencil?Zs:Xn);const We={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new In(d.textureWidth,d.textureHeight,{format:Ln,type:gn,depthTexture:new js(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new In(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(ee){for(let ie=0;ie<ee.removed.length;ie++){const ve=ee.removed[ie],He=A.indexOf(ve);He>=0&&(A[He]=null,T[He].disconnect(ve))}for(let ie=0;ie<ee.added.length;ie++){const ve=ee.added[ie];let He=A.indexOf(ve);if(He===-1){for(let We=0;We<T.length;We++)if(We>=A.length){A.push(ve),He=We;break}else if(A[We]===null){A[We]=ve,He=We;break}if(He===-1)break}const Te=T[He];Te&&Te.connect(ve)}}const q=new O,$=new O;function J(ee,ie,ve){q.setFromMatrixPosition(ie.matrixWorld),$.setFromMatrixPosition(ve.matrixWorld);const He=q.distanceTo($),Te=ie.projectionMatrix.elements,We=ve.projectionMatrix.elements,mt=Te[14]/(Te[10]-1),se=Te[14]/(Te[10]+1),oe=(Te[9]+1)/Te[5],le=(Te[9]-1)/Te[5],ce=(Te[8]-1)/Te[0],fe=(We[8]+1)/We[0],ze=mt*ce,Be=mt*fe,Xe=He/(-ce+fe),$e=Xe*-ce;if(ie.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX($e),ee.translateZ(Xe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Te[10]===-1)ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const F=mt+Xe,ut=se+Xe,it=ze-$e,P=Be+(He-$e),y=oe*se/ut*F,V=le*se/ut*F;ee.projectionMatrix.makePerspective(it,P,y,V,F,ut),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Se(ee,ie){ie===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ie.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ie=ee.near,ve=ee.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),I.near=U.near=N.near=ie,I.far=U.far=N.far=ve,(L!==I.near||D!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,D=I.far),I.layers.mask=ee.layers.mask|6,N.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const He=ee.parent,Te=I.cameras;Se(I,He);for(let We=0;We<Te.length;We++)Se(Te[We],He);Te.length===2?J(I,N,U):I.projectionMatrix.copy(N.projectionMatrix),w===null&&ee.isPerspectiveCamera&&(w={camera:ee,fov:ee.fov,zoom:ee.zoom}),Me(ee,I,He)};function Me(ee,ie,ve){ve===null?ee.matrix.copy(ie.matrixWorld):(ee.matrix.copy(ve.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ie.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=nl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(ee){return m[ee]};let tt=null;function nt(ee,ie){if(l=ie.getViewerPose(h||a),p=ie,l!==null){const ve=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let He=!1;ve.length!==I.cameras.length&&(I.cameras.length=0,He=!0);for(let se=0;se<ve.length;se++){const oe=ve[se];let le=null;if(f!==null)le=f.getViewport(oe);else{const fe=u.getViewSubImage(d,oe);le=fe.viewport,se===0&&(e.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(b))}let ce=x[se];ce===void 0&&(ce=new mn,ce.layers.enable(se),ce.viewport=new At,x[se]=ce),ce.matrix.fromArray(oe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(oe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(le.x,le.y,le.width,le.height),se===0&&(I.matrix.copy(ce.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),He===!0&&I.cameras.push(ce)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const se=u.getDepthInformation(ve[0]);se&&se.isValid&&se.texture&&g.init(se,s.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let se=0;se<ve.length;se++){const oe=ve[se].camera;if(oe){let le=m[oe];le||(le=new $h,m[oe]=le);const ce=u.getCameraImage(oe);le.sourceTexture=ce}}}}for(let ve=0;ve<T.length;ve++){const He=A[ve],Te=T[ve];He!==null&&Te!==void 0&&Te.update(He,ie,h||a)}tt&&tt(ee,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}const lt=new au;lt.setAnimationLoop(nt),this.setAnimationLoop=function(ee){tt=ee},this.dispose=function(){}}}const Kx=new at,fu=new Ke;fu.set(-1,0,0,0,1,0,0,0,1);function Zx(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,iu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,S,R,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),l(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,R):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),R=S.envMap,b=S.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(fu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jx(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const A=T.program;i.uniformBlockBinding(b,A)}function h(b,T){let A=s[b.id];A===void 0&&(g(b),A=l(b),s[b.id]=A,b.addEventListener("dispose",S));const C=T.program;i.updateUBOMapping(b,C);const v=e.render.frame;r[b.id]!==v&&(d(b),r[b.id]=v)}function l(b){const T=u();b.__bindingPointIndex=T;const A=n.createBuffer(),C=b.__size,v=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,A),A}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=s[b.id],A=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,w=A.length;v<w;v++){const N=A[v];if(Array.isArray(N))for(let U=0,x=N.length;U<x;U++)f(N[U],v,U,C);else f(N,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,T,A,C){if(_(b,T,A,C)===!0){const v=b.__offset,w=b.value;if(Array.isArray(w)){let N=0;for(let U=0;U<w.length;U++){const x=w[U],I=m(x);p(x,b.__data,N),typeof x!="number"&&typeof x!="boolean"&&!x.isMatrix3&&!ArrayBuffer.isView(x)&&(N+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,b.__data)}}function p(b,T,A){typeof b=="number"||typeof b=="boolean"?T[0]=b:b.isMatrix3?(T[0]=b.elements[0],T[1]=b.elements[1],T[2]=b.elements[2],T[3]=0,T[4]=b.elements[3],T[5]=b.elements[4],T[6]=b.elements[5],T[7]=0,T[8]=b.elements[6],T[9]=b.elements[7],T[10]=b.elements[8],T[11]=0):ArrayBuffer.isView(b)?T.set(new b.constructor(b.buffer,b.byteOffset,T.length)):b.toArray(T,A)}function _(b,T,A,C){const v=b.value,w=T+"_"+A;if(C[w]===void 0)return typeof v=="number"||typeof v=="boolean"?C[w]=v:ArrayBuffer.isView(v)?C[w]=v.slice():C[w]=v.clone(),!0;{const N=C[w];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return C[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function g(b){const T=b.uniforms;let A=0;const C=16;for(let w=0,N=T.length;w<N;w++){const U=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,I=U.length;x<I;x++){const L=U[x],D=Array.isArray(L.value)?L.value:[L.value];for(let H=0,B=D.length;H<B;H++){const Z=D[H],q=m(Z),$=A%C,J=$%q.boundary,Se=$+J;A+=J,Se!==0&&C-Se<q.storage&&(A+=C-Se),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=q.storage}}}const v=A%C;return v>0&&(A+=C-v),b.__size=A,b.__cache={},this}function m(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",b),T}function S(b){const T=b.target;T.removeEventListener("dispose",S);const A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function R(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:h,dispose:R}}const Qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function jx(){return kn===null&&(kn=new Xh(Qx,16,16,zi,qn),kn.name="DFG_LUT",kn.minFilter=Zt,kn.magFilter=Zt,kn.wrapS=jn,kn.wrapT=jn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class e_{constructor(e={}){const{canvas:t=bd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=f,g=new Set([vl,yl,_l]),m=new Set([gn,Xn,Ks,Zs,ml,gl]),S=new Uint32Array(4),R=new Int32Array(4),b=new O;let T=null,A=null;const C=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let U=!1,x=null,I=null,L=null,D=null;this._outputColorSpace=nn;let H=0,B=0,Z=null,q=-1,$=null;const J=new At,Se=new At;let Me=null;const tt=new qe(0);let nt=0,lt=t.width,ee=t.height,ie=1,ve=null,He=null;const Te=new At(0,0,lt,ee),We=new At(0,0,lt,ee);let mt=!1;const se=new Tl;let oe=!1,le=!1;const ce=new at,fe=new O,ze=new At,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function $e(){return Z===null?ie:1}let F=i;function ut(M,z){return t.getContext(M,z)}let it,P,y,V,Y,Q,he,de,j,ne,pe,Ue,_e,me,Oe,Ge,Je,G,ge,te,xe,we,ae;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),F===null){const z="webgl2";if(F=ut(z,M),F===null)throw ut(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(M){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),ot("WebGLRenderer: "+M.message),M}function Fe(){it=new jm(F),it.init(),xe=new Wx(F,it),P=new Vm(F,it,e,xe),y=new Hx(F,it),P.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),I=F.createFramebuffer(),L=F.createFramebuffer(),D=F.createFramebuffer(),V=new ng(F),Y=new Rx,Q=new Vx(F,it,y,Y,P,xe,V),he=new Qm(N),de=new sp(F),we=new Gm(F,de),j=new eg(F,de,V,we),ne=new sg(F,j,de,we,V),G=new ig(F,P,Q),Oe=new Wm(Y),pe=new Ax(N,he,it,P,we,Oe),Ue=new Zx(N,Y),_e=new Px,me=new Ox(it),Je=new zm(N,he,y,ne,p,c),Ge=new Gx(N,ne,P),ae=new Jx(F,V,P,y),ge=new Hm(F,it,V),te=new tg(F,it,V),V.programs=pe.programs,N.capabilities=P,N.extensions=it,N.properties=Y,N.renderLists=_e,N.shadowMap=Ge,N.state=y,N.info=V}_!==gn&&(w=new ag(_,t.width,t.height,o,s,r));const Ie=new $x(N,F);this.xr=Ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(M){M!==void 0&&(ie=M,this.setSize(lt,ee,!1))},this.getSize=function(M){return M.set(lt,ee)},this.setSize=function(M,z,K=!0){if(Ie.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=M,ee=z,t.width=Math.floor(M*ie),t.height=Math.floor(z*ie),K===!0&&(t.style.width=M+"px",t.style.height=z+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(lt*ie,ee*ie).floor()},this.setDrawingBufferSize=function(M,z,K){lt=M,ee=z,ie=K,t.width=Math.floor(M*K),t.height=Math.floor(z*K),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(_===gn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(J)},this.getViewport=function(M){return M.copy(Te)},this.setViewport=function(M,z,K,W){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,z,K,W),y.viewport(J.copy(Te).multiplyScalar(ie).round())},this.getScissor=function(M){return M.copy(We)},this.setScissor=function(M,z,K,W){M.isVector4?We.set(M.x,M.y,M.z,M.w):We.set(M,z,K,W),y.scissor(Se.copy(We).multiplyScalar(ie).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(M){y.setScissorTest(mt=M)},this.setOpaqueSort=function(M){ve=M},this.setTransparentSort=function(M){He=M},this.getClearColor=function(M){return M.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,K=!0){let W=0;if(M){let X=!1;if(Z!==null){const Ee=Z.texture.format;X=g.has(Ee)}if(X){const Ee=Z.texture.type,Re=m.has(Ee),be=Je.getClearColor(),Le=Je.getClearAlpha(),Ne=be.r,Qe=be.g,st=be.b;Re?(S[0]=Ne,S[1]=Qe,S[2]=st,S[3]=Le,F.clearBufferuiv(F.COLOR,0,S)):(R[0]=Ne,R[1]=Qe,R[2]=st,R[3]=Le,F.clearBufferiv(F.COLOR,0,R))}else W|=F.COLOR_BUFFER_BIT}z&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),x=M},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Je.dispose(),_e.dispose(),me.dispose(),Y.dispose(),he.dispose(),ne.dispose(),we.dispose(),ae.dispose(),pe.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Wl),Ie.removeEventListener("sessionend",Xl),Ti.stop()};function St(M){M.preventDefault(),rc("WebGLRenderer: Context Lost."),U=!0}function dt(){rc("WebGLRenderer: Context Restored."),U=!1;const M=V.autoReset,z=Ge.enabled,K=Ge.autoUpdate,W=Ge.needsUpdate,X=Ge.type;Fe(),V.autoReset=M,Ge.enabled=z,Ge.autoUpdate=K,Ge.needsUpdate=W,Ge.type=X}function Mn(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Un(M){const z=M.target;z.removeEventListener("dispose",Un),Iu(z)}function Iu(M){Nu(M),Y.remove(M)}function Nu(M){const z=Y.get(M).programs;z!==void 0&&(z.forEach(function(K){pe.releaseProgram(K)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,K,W,X,Ee){z===null&&(z=Be);const Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=Fu(M,z,K,W,X);y.setMaterial(W,Re);let Le=K.index,Ne=1;if(W.wireframe===!0){if(Le=j.getWireframeAttribute(K),Le===void 0)return;Ne=2}const Qe=K.drawRange,st=K.attributes.position;let De=Qe.start*Ne,ft=(Qe.start+Qe.count)*Ne;Ee!==null&&(De=Math.max(De,Ee.start*Ne),ft=Math.min(ft,(Ee.start+Ee.count)*Ne)),Le!==null?(De=Math.max(De,0),ft=Math.min(ft,Le.count)):st!=null&&(De=Math.max(De,0),ft=Math.min(ft,st.count));const Nt=ft-De;if(Nt<0||Nt===1/0)return;we.setup(X,W,be,K,Le);let wt,bt=ge;if(Le!==null&&(wt=de.get(Le),bt=te,bt.setIndex(wt)),X.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*$e()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if(X.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),y.setLineWidth(qt*$e()),X.isLineSegments?bt.setMode(F.LINES):X.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else X.isPoints?bt.setMode(F.POINTS):X.isSprite&&bt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(it.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qt=X._multiDrawStarts,Ae=X._multiDrawCounts,jt=X._multiDrawCount,ct=Le?de.get(Le).bytesPerElement:1,_n=Y.get(W).currentProgram.getUniforms();for(let On=0;On<jt;On++)_n.setValue(F,"_gl_DrawID",On),bt.render(qt[On]/ct,Ae[On])}else if(X.isInstancedMesh)bt.renderInstances(De,Nt,X.count);else if(K.isInstancedBufferGeometry){const qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,qt);bt.renderInstances(De,Nt,Ae)}else bt.render(De,Nt)};function Vl(M,z,K,W){x!==null&&M.isNodeMaterial&&x.setObject(W,M),oe===!0&&Oe.setState(M,K,!1),M.transparent===!0&&M.side===Rn&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,cr(M,z,W),M.side=ki,M.needsUpdate=!0,cr(M,z,W),M.side=Rn):cr(M,z,W)}this.compile=function(M,z,K=null){K===null&&(K=M),x!==null&&x.renderStart(M,z,K),A=me.get(K),A.init(z),v.push(A),K.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),M!==K&&M.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights(),x!==null&&x.updateLights(A.state.lightsArray),le=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,le),oe===!0&&Oe.setGlobalState(this.clippingPlanes,z),x!==null&&Ge.render(A.state.shadowsArray,K,z);const W=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const be=Ee[Re];Vl(be,K,z,X),W.add(be)}else Vl(Ee,K,z,X),W.add(Ee)}),A=v.pop(),x!==null&&x.renderEnd(),W},this.compileAsync=function(M,z,K=null){const W=this.compile(M,z,K);return new Promise(X=>{function Ee(){if(W.forEach(function(Re){const Le=Y.get(Re).currentProgram;(Le===void 0||Le.isReady())&&W.delete(Re)}),W.size===0){X(M);return}setTimeout(Ee,10)}it.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ma=null;function Uu(M){Ma&&Ma(M)}function Wl(){Ti.stop()}function Xl(){Ti.start()}const Ti=new au;Ti.setAnimationLoop(Uu),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){Ma=M,Ie.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},Ie.addEventListener("sessionstart",Wl),Ie.addEventListener("sessionend",Xl),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;x!==null&&x.renderStart(M,z);const K=Ie.enabled===!0&&Ie.isPresenting===!0,W=w!==null&&(Z===null||K)&&w.begin(N,Z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(z),z=Ie.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,z,Z),A=me.get(M,v.length),A.init(z),A.state.textureUnits=Q.getTextureUnits(),v.push(A),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(ce,Hn,z.reversedDepth),le=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,le),T=_e.get(M,C.length),T.init(),C.push(T),Ie.enabled===!0&&Ie.isPresenting===!0){const Re=N.xr.getDepthSensingMesh();Re!==null&&Ea(Re,z,-1/0,N.sortObjects)}Ea(M,z,0,N.sortObjects),T.finish(),x!==null&&x.updateLights(A.state.lightsArray),N.sortObjects===!0&&T.sort(ve,He),Xe=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Xe&&Je.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Oe.beginShadows();const X=A.state.shadowsArray;if(Ge.render(X,M,z),oe===!0&&Oe.endShadows(),(W&&w.hasRenderPass())===!1){const Re=T.opaque,be=T.transmissive;if(A.setupLights(),z.isArrayCamera){const Le=z.cameras;if(be.length>0)for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const st=Le[Ne];Yl(Re,be,M,st)}Xe&&Je.render(M);for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const st=Le[Ne];ql(T,M,st,st.viewport)}}else be.length>0&&Yl(Re,be,M,z),Xe&&Je.render(M),ql(T,M,z)}Z!==null&&B===0&&(Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z)),W&&w.end(N),M.isScene===!0&&M.onAfterRender(N,M,z),we.resetDefaultState(),q=-1,$=null,v.pop(),v.length>0?(A=v[v.length-1],Q.setTextureUnits(A.state.textureUnits),oe===!0&&Oe.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,x!==null&&x.renderEnd()};function Ea(M,z,K,W){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(se)){W&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const Re=ne.update(M),be=M.material;be.visible&&T.push(M,Re,be,K,ze.z,null,z)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(se))){const Re=ne.update(M),be=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ze.copy(Re.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(be)){const Le=Re.groups;for(let Ne=0,Qe=Le.length;Ne<Qe;Ne++){const st=Le[Ne],De=be[st.materialIndex];De&&De.visible&&T.push(M,Re,De,K,ze.z,st,z)}}else be.visible&&T.push(M,Re,be,K,ze.z,null,z)}}const Ee=M.children;for(let Re=0,be=Ee.length;Re<be;Re++)Ea(Ee[Re],z,K,W)}function ql(M,z,K,W){const{opaque:X,transmissive:Ee,transparent:Re}=M;A.setupLightsView(K),oe===!0&&Oe.setGlobalState(N.clippingPlanes,K),W&&y.viewport(J.copy(W)),X.length>0&&lr(X,z,K),Ee.length>0&&lr(Ee,z,K),Re.length>0&&lr(Re,z,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Yl(M,z,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const De=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new In(1,1,{generateMipmaps:!0,type:De?qn:gn,minFilter:Ii,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Ee=A.state.transmissionRenderTarget[W.id],Re=W.viewport||J;Ee.setSize(Re.z*N.transmissionResolutionScale,Re.w*N.transmissionResolutionScale);const be=N.getRenderTarget(),Le=N.getActiveCubeFace(),Ne=N.getActiveMipmapLevel();N.setRenderTarget(Ee),N.getClearColor(tt),nt=N.getClearAlpha(),nt<1&&N.setClearColor(16777215,.5),N.clear(),Xe&&Je.render(K);const Qe=N.toneMapping;N.toneMapping=Vn;const st=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),oe===!0&&Oe.setGlobalState(N.clippingPlanes,W),lr(M,K,W),Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee),it.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ft=0,Nt=z.length;ft<Nt;ft++){const wt=z[ft],{object:bt,geometry:qt,material:Ae,group:jt}=wt;if(Ae.side===Rn&&bt.layers.test(W.layers)){const ct=Ae.side;Ae.side=sn,Ae.needsUpdate=!0,$l(bt,K,W,qt,Ae,jt),Ae.side=ct,Ae.needsUpdate=!0,De=!0}}De===!0&&(Q.updateMultisampleRenderTarget(Ee),Q.updateRenderTargetMipmap(Ee))}N.setRenderTarget(be,Le,Ne),N.setClearColor(tt,nt),st!==void 0&&(W.viewport=st),N.toneMapping=Qe}function lr(M,z,K){const W=z.isScene===!0?z.overrideMaterial:null;for(let X=0,Ee=M.length;X<Ee;X++){const Re=M[X],{object:be,geometry:Le,group:Ne}=Re;let Qe=Re.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),be.layers.test(K.layers)&&$l(be,z,K,Le,Qe,Ne)}}function $l(M,z,K,W,X,Ee){x!==null&&X.isNodeMaterial&&x.setObject(M,X),M.onBeforeRender(N,z,K,W,X,Ee),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(N,z,K,W,M,Ee),X.transparent===!0&&X.side===Rn&&X.forceSinglePass===!1?(X.side=sn,X.needsUpdate=!0,N.renderBufferDirect(K,z,W,X,M,Ee),X.side=ki,X.needsUpdate=!0,N.renderBufferDirect(K,z,W,X,M,Ee),X.side=Rn):N.renderBufferDirect(K,z,W,X,M,Ee),M.onAfterRender(N,z,K,W,X,Ee)}function cr(M,z,K){z.isScene!==!0&&(z=Be);const W=Y.get(M),X=A.state.lights,Ee=A.state.shadowsArray,Re=X.state.version,be=pe.getParameters(M,X.state,Ee,z,K,A.state.lightProbeGridArray),Le=pe.getProgramCacheKey(be);let Ne=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const Qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=he.get(M.envMap||W.environment,Qe),W.envMapRotation=W.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",Un),Ne=new Map,W.programs=Ne);let st=Ne.get(Le);if(st!==void 0){if(W.currentProgram===st&&W.lightsStateVersion===Re)return Zl(M,be),st}else be.uniforms=pe.getUniforms(M),x!==null&&M.isNodeMaterial&&x.build(M,K,be),M.onBeforeCompile(be,N),st=pe.acquireProgram(be,Le),Ne.set(Le,st),W.uniforms=be.uniforms;const De=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=Oe.uniform),Zl(M,be),W.needsLights=Bu(M),W.lightsStateVersion=Re,W.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.sunLights.value=X.state.sun,De.sunLightShadows.value=X.state.sunShadow,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.sunShadowMatrix.value=X.state.sunShadowMatrix,De.sunShadowCascade.value=X.state.sunShadowCascade,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=A.state.lightProbeGridArray.length>0,W.currentProgram=st,W.uniformsList=null,st}function Kl(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Yr.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Zl(M,z){const K=Y.get(M);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Ou(M,z){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(z.matrixWorld);for(let K=0,W=M.length;K<W;K++){const X=M[K];if(X.texture!==null&&X.boundingBox.containsPoint(b))return X}return null}function Fu(M,z,K,W,X){z.isScene!==!0&&(z=Be),Q.resetTextureUnits();const Ee=z.fog,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,be=Z===null?N.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:rt.workingColorSpace,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=he.get(W.envMap||Re,Le),Qe=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,st=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!K.morphAttributes.position,ft=!!K.morphAttributes.normal,Nt=!!K.morphAttributes.color;let wt=Vn;W.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(wt=N.toneMapping);const bt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,qt=bt!==void 0?bt.length:0,Ae=Y.get(W),jt=A.state.lights;if(oe===!0&&(le===!0||M!==$)){const Mt=M===$&&W.id===q;Oe.setState(W,M,Mt)}let ct=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==jt.state.version||Ae.outputColorSpace!==be||X.isBatchedMesh&&Ae.batching===!1||!X.isBatchedMesh&&Ae.batching===!0||X.isBatchedMesh&&Ae.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ae.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ae.instancing===!1||!X.isInstancedMesh&&Ae.instancing===!0||X.isSkinnedMesh&&Ae.skinning===!1||!X.isSkinnedMesh&&Ae.skinning===!0||X.isInstancedMesh&&Ae.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ae.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ae.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ae.instancingMorph===!1&&X.morphTexture!==null||Ae.envMap!==Ne||W.fog===!0&&Ae.fog!==Ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Oe.numPlanes||Ae.numIntersection!==Oe.numIntersection)||Ae.vertexAlphas!==Qe||Ae.vertexTangents!==st||Ae.morphTargets!==De||Ae.morphNormals!==ft||Ae.morphColors!==Nt||Ae.toneMapping!==wt||Ae.morphTargetsCount!==qt||!!Ae.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Ae.__version=W.version);let _n=Ae.currentProgram;ct===!0&&(_n=cr(W,z,X),x&&W.isNodeMaterial&&x.onUpdateProgram(W,_n,Ae));let On=!1,ai=!1,qi=!1;const yt=_n.getUniforms(),Lt=Ae.uniforms;if(y.useProgram(_n.program)&&(On=!0,ai=!0,qi=!0),W.id!==q&&(q=W.id,ai=!0),Ae.needsLights){const Mt=Ou(A.state.lightProbeGridArray,X);Ae.lightProbeGrid!==Mt&&(Ae.lightProbeGrid=Mt,ai=!0)}if(On||$!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),yt.setValue(F,"projectionMatrix",M.projectionMatrix),yt.setValue(F,"viewMatrix",M.matrixWorldInverse);const li=yt.map.cameraPosition;li!==void 0&&li.setValue(F,fe.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,ai=!0,qi=!0)}if(Ae.needsLights&&(jt.state.sunShadowMap.length>0&&yt.setValue(F,"sunShadowMap",jt.state.sunShadowMap,Q),jt.state.directionalShadowMap.length>0&&yt.setValue(F,"directionalShadowMap",jt.state.directionalShadowMap,Q),jt.state.spotShadowMap.length>0&&yt.setValue(F,"spotShadowMap",jt.state.spotShadowMap,Q),jt.state.pointShadowMap.length>0&&yt.setValue(F,"pointShadowMap",jt.state.pointShadowMap,Q)),X.isSkinnedMesh){yt.setOptional(F,X,"bindMatrix"),yt.setOptional(F,X,"bindMatrixInverse");const Mt=X.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),yt.setValue(F,"boneTexture",Mt.boneTexture,Q))}X.isBatchedMesh&&(yt.setOptional(F,X,"batchingTexture"),yt.setValue(F,"batchingTexture",X._matricesTexture,Q),yt.setOptional(F,X,"batchingIdTexture"),yt.setValue(F,"batchingIdTexture",X._indirectTexture,Q),yt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&yt.setValue(F,"batchingColorTexture",X._colorsTexture,Q));const oi=K.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&G.update(X,K,_n),(ai||Ae.receiveShadow!==X.receiveShadow)&&(Ae.receiveShadow=X.receiveShadow,yt.setValue(F,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(Lt.envMapIntensity.value=z.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=jx()),ai){if(yt.setValue(F,"toneMappingExposure",N.toneMappingExposure),Ae.needsLights&&ku(Lt,qi),Ee&&W.fog===!0&&Ue.refreshFogUniforms(Lt,Ee),Ue.refreshMaterialUniforms(Lt,W,ie,ee,A.state.transmissionRenderTarget[M.id]),Ae.needsLights&&Ae.lightProbeGrid){const Mt=Ae.lightProbeGrid;Lt.probesSH.value=Mt.texture,Lt.probesMin.value.copy(Mt.boundingBox.min),Lt.probesMax.value.copy(Mt.boundingBox.max),Lt.probesResolution.value.copy(Mt.resolution)}Yr.upload(F,Kl(Ae),Lt,Q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Yr.upload(F,Kl(Ae),Lt,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(F,"center",X.center),yt.setValue(F,"modelViewMatrix",X.modelViewMatrix),yt.setValue(F,"normalMatrix",X.normalMatrix),yt.setValue(F,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const Mt=W.uniformsGroups;for(let li=0,Yi=Mt.length;li<Yi;li++){const Ql=Mt[li];ae.update(Ql,_n),ae.bind(Ql,_n)}}return _n}function ku(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.sunLights.needsUpdate=z,M.sunLightShadows.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Bu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(M,z,K){const W=Y.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=z,Y.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const K=Y.get(M);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,K=0){Z=M,H=z,B=K;let W=null,X=!1,Ee=!1;if(M){const be=Y.get(M);if(be.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,be.__webglFramebuffer),J.copy(M.viewport),Se.copy(M.scissor),Me=M.scissorTest,y.viewport(J),y.scissor(Se),y.setScissorTest(Me),q=-1;return}else if(be.__webglFramebuffer===void 0)Q.setupRenderTarget(M);else if(be.__hasExternalTextures)Q.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Qe=M.depthTexture;if(be.__boundDepthTexture!==Qe){if(Qe!==null&&Y.has(Qe)&&(M.width!==Qe.image.width||M.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(M)}}const Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);const Ne=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?W=Ne[z][K]:W=Ne[z],X=!0):M.samples>0&&Q.useMultisampledRTT(M)===!1?W=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[K]:W=Ne,J.copy(M.viewport),Se.copy(M.scissor),Me=M.scissorTest}else J.copy(Te).multiplyScalar(ie).floor(),Se.copy(We).multiplyScalar(ie).floor(),Me=mt;if(K!==0&&(W=I),y.bindFramebuffer(F.FRAMEBUFFER,W)&&y.drawBuffers(M,W),y.viewport(J),y.scissor(Se),y.setScissorTest(Me),X){const be=Y.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,K)}else if(Ee){const be=z;for(let Le=0;Le<M.textures.length;Le++){const Ne=Y.get(M.textures[Le]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,K,be)}}else if(M!==null&&K!==0){const be=Y.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,K)}q=-1};function Jl(M){const z=Y.get(M);return(z.__readFormat!==M.format||z.__readType!==M.type)&&(z.__readFormat=M.format,z.__readType=M.type,z.__formatReadable=P.textureFormatReadable(M.format),z.__typeReadable=P.textureTypeReadable(M.type)),z}this.readRenderTargetPixels=function(M,z,K,W,X,Ee,Re,be=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){y.bindFramebuffer(F.FRAMEBUFFER,Le);try{const Ne=M.textures[be],Qe=Ne.format,st=Ne.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be);const De=Jl(Ne);if(De.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-W&&K>=0&&K<=M.height-X&&F.readPixels(z,K,W,X,xe.convert(Qe),xe.convert(st),Ee)}finally{const Ne=Z!==null?Y.get(Z).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,z,K,W,X,Ee,Re,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(z>=0&&z<=M.width-W&&K>=0&&K<=M.height-X){y.bindFramebuffer(F.FRAMEBUFFER,Le);const Ne=M.textures[be],Qe=Ne.format,st=Ne.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+be);const De=Jl(Ne);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.bufferData(F.PIXEL_PACK_BUFFER,Ee.byteLength,F.STREAM_READ),F.readPixels(z,K,W,X,xe.convert(Qe),xe.convert(st),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Nt=Z!==null?Y.get(Z).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Nt);const wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Sd(F,wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ft),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ee),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ft),F.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,K=0){const W=Math.pow(2,-K),X=Math.floor(M.image.width*W),Ee=Math.floor(M.image.height*W),Re=z!==null?z.x:0,be=z!==null?z.y:0;Q.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Re,be,X,Ee),y.unbindTexture()},this.copyTextureToTexture=function(M,z,K=null,W=null,X=0,Ee=0){let Re,be,Le,Ne,Qe,st,De,ft,Nt;const wt=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if(K!==null)Re=K.max.x-K.min.x,be=K.max.y-K.min.y,Le=K.isBox3?K.max.z-K.min.z:1,Ne=K.min.x,Qe=K.min.y,st=K.isBox3?K.min.z:0;else{const Lt=Math.pow(2,-X);Re=Math.floor(wt.width*Lt),be=Math.floor(wt.height*Lt),M.isDataArrayTexture?Le=wt.depth:M.isData3DTexture?Le=Math.floor(wt.depth*Lt):Le=1,Ne=0,Qe=0,st=0}W!==null?(De=W.x,ft=W.y,Nt=W.z):(De=0,ft=0,Nt=0);const bt=xe.convert(z.format),qt=xe.convert(z.type);let Ae;z.isData3DTexture?(Q.setTexture3D(z,0),Ae=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),Ae=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),Ae=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const jt=y.getParameter(F.UNPACK_ROW_LENGTH),ct=y.getParameter(F.UNPACK_IMAGE_HEIGHT),_n=y.getParameter(F.UNPACK_SKIP_PIXELS),On=y.getParameter(F.UNPACK_SKIP_ROWS),ai=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(F.UNPACK_SKIP_IMAGES,st);const qi=M.isDataArrayTexture||M.isData3DTexture,yt=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const Lt=Y.get(M),oi=Y.get(z),Mt=Y.get(Lt.__renderTarget),li=Y.get(oi.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Mt.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Yi=0;Yi<Le;Yi++)qi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,X,st+Yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,Ee,Nt+Yi)),F.blitFramebuffer(Ne,Qe,Re,be,De,ft,Re,be,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||Y.has(M)){const Lt=Y.get(M),oi=Y.get(z);y.bindFramebuffer(F.READ_FRAMEBUFFER,L),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,D);for(let Mt=0;Mt<Le;Mt++)qi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.__webglTexture,X,st+Mt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Lt.__webglTexture,X),yt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,oi.__webglTexture,Ee,Nt+Mt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,oi.__webglTexture,Ee),X!==0?F.blitFramebuffer(Ne,Qe,Re,be,De,ft,Re,be,F.COLOR_BUFFER_BIT,F.NEAREST):yt?F.copyTexSubImage3D(Ae,Ee,De,ft,Nt+Mt,Ne,Qe,Re,be):F.copyTexSubImage2D(Ae,Ee,De,ft,Ne,Qe,Re,be);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Ae,Ee,De,ft,Nt,Re,be,Le,bt,qt,wt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,Ee,De,ft,Nt,Re,be,Le,bt,wt.data):F.texSubImage3D(Ae,Ee,De,ft,Nt,Re,be,Le,bt,qt,wt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ee,De,ft,Re,be,bt,qt,wt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ee,De,ft,wt.width,wt.height,bt,wt.data):F.texSubImage2D(F.TEXTURE_2D,Ee,De,ft,Re,be,bt,qt,wt);y.pixelStorei(F.UNPACK_ROW_LENGTH,jt),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),y.pixelStorei(F.UNPACK_SKIP_PIXELS,_n),y.pixelStorei(F.UNPACK_SKIP_ROWS,On),y.pixelStorei(F.UNPACK_SKIP_IMAGES,ai),Ee===0&&z.generateMipmaps&&F.generateMipmap(Ae),y.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&Q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Q.setTextureCube(M,0):M.isData3DTexture?Q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Q.setTexture2DArray(M,0):Q.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){H=0,B=0,Z=null,y.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const fh={type:"change"},Dl={type:"start"},pu={type:"end"},zr=new ha,ph=new An,t_=Math.cos(70*wd.DEG2RAD),Ot=new O,on=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},co=1e-6;class mu extends np{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Dn,this._lastTargetPosition=new O,this._quat=new Dn().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hc,this._sphericalDelta=new Hc,this._scale=1,this._panOffset=new O,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new O,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i_.bind(this),this._onPointerDown=n_.bind(this),this._onPointerUp=s_.bind(this),this._onContextMenu=u_.bind(this),this._onMouseWheel=o_.bind(this),this._onKeyDown=l_.bind(this),this._onTouchStart=c_.bind(this),this._onTouchMove=h_.bind(this),this._onMouseDown=r_.bind(this),this._onMouseMove=a_.bind(this),this._interceptControlDown=d_.bind(this),this._interceptControlUp=f_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=_t.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fh),this.update(),this.state=_t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ot.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new O(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(zr.origin.copy(this.object.position),zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zr.direction))<t_?this.object.lookAt(this.target):(ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),zr.intersectPlane(ph,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>co||8*(1-this._lastQuaternion.dot(this.object.quaternion))>co||this._lastTargetPosition.distanceToSquared(this.target)>co?(this.dispatchEvent(fh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function n_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function i_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function s_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pu),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function r_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Dl)}function a_(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function o_(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent(Dl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(pu))}function l_(n){this.enabled!==!1&&this._handleKeyDown(n)}function c_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case Gn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case Gn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(Dl)}function h_(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function u_(n){this.enabled!==!1&&n.preventDefault()}function d_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function f_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class p_ extends kt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new re(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}}const cs=new O,mh=new at,gh=new at,xh=new O,_h=new O;class m_{constructor(e={}){const t=this;let i,s,r,a;const o={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),mh.copy(_.matrixWorldInverse),gh.multiplyMatrices(_.projectionMatrix,mh),l(p,p,_),this.sortObjects&&f(p)},this.setSize=function(p,_){i=p,s=_,r=i/2,a=s/2,c.style.width=p+"px",c.style.height=_+"px"};function h(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,g=p.children.length;_<g;_++)h(p.children[_])}function l(p,_,g){if(p.visible===!1){h(p);return}if(p.isCSS2DObject){cs.setFromMatrixPosition(p.matrixWorld),cs.applyMatrix4(gh);const m=cs.z>=-1&&cs.z<=1&&p.layers.test(g.layers)===!0,S=p.element;if(S.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,_,g);const b=100*p.center.x,T=100*p.center.y;S.style.transformOrigin=`${b}% ${T}%`;const A=-p.rotation2D,C=cs.x*r+r,v=-cs.y*a+a;S.style.transform=`translate(${-b}%, ${-T}%) translate(${C}px, ${v}px) rotate(${A}rad)`,S.parentNode!==c&&c.appendChild(S),p.onAfterRender(t,_,g)}const R={distanceToCameraSquared:u(g,p)};o.objects.set(p,R)}for(let m=0,S=p.children.length;m<S;m++)l(p.children[m],_,g)}function u(p,_){return xh.setFromMatrixPosition(p.matrixWorld),_h.setFromMatrixPosition(_.matrixWorld),xh.distanceToSquared(_h)}function d(p){const _=[];return p.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(p){const _=d(p).sort(function(m,S){if(m.renderOrder!==S.renderOrder)return S.renderOrder-m.renderOrder;const R=o.objects.get(m).distanceToCameraSquared,b=o.objects.get(S).distanceToCameraSquared;return R-b}),g=_.length;for(let m=0,S=_.length;m<S;m++)_[m].element.style.zIndex=g-m}}}let ho=7;const Pe=()=>(ho=ho*16807%2147483647,(ho-1)/2147483646);let zn=1;function g_(n){zn=n}function vt(n=512){n=Math.max(64,Math.round(n*zn));const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d",{willReadFrequently:!0});return t.scale(n/(n/zn),n/(n/zn)),[e,t]}function ln(n,e,t=2,i=!1){const s=n.width,r=n.getContext("2d").getImageData(0,0,s,s).data,a=document.createElement("canvas");a.width=a.height=s;const o=a.getContext("2d"),c=o.createImageData(s,s),h=(l,u)=>{l=(l+s)%s,u=(u+s)%s;const d=(u*s+l)*4,f=(r[d]*.3+r[d+1]*.59+r[d+2]*.11)/255;return i?1-f:f};for(let l=0;l<s;l++)for(let u=0;u<s;u++){const d=(h(u+1,l)-h(u-1,l))*t,f=(h(u,l+1)-h(u,l-1))*t,p=Math.hypot(d,f,1),_=(l*s+u)*4;c.data[_]=(-d/p*.5+.5)*255,c.data[_+1]=(f/p*.5+.5)*255,c.data[_+2]=(1/p*.5+.5)*255,c.data[_+3]=255}return o.putImageData(c,0,0),gt(a,e,!1)}function gt(n,e,t=!0){const i=new Jd(n);return i.wrapS=i.wrapT=Zr,i.repeat.set(1/e,1/e),t&&(i.colorSpace=nn),i.anisotropy=4,i}function en(n,e,t,i,s){for(let r=0;r<s;r++){n.fillStyle=i[Pe()*i.length|0],n.globalAlpha=t*Pe();const a=1+Pe()*2.5;n.fillRect(Pe()*e,Pe()*e,a,a)}n.globalAlpha=1}function x_(){const n={};{const[e,t]=vt(256);t.fillStyle="#efebe3",t.fillRect(0,0,256,256),en(t,256,.25,["#ffffff","#ddd6ca","#e6e0d5"],5e3),n.stucco=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#f2ece2",t.fillRect(0,0,256,256),en(t,256,.18,["#fbf7f0","#e4dccf"],3e3),n.plaster=gt(e,6)}{const[e,t]=vt(512);t.fillStyle="#2b2724",t.fillRect(0,0,512,512);const i=512/12;for(let s=0;s<12;s++){const r=30+Pe()*14;t.fillStyle=`rgb(${r+6},${r+2},${r})`,t.fillRect(s*i,0,i-2,512);for(let a=0;a<140;a++)t.fillStyle=Pe()<.5?"#1c1a18":"#45403a",t.globalAlpha=.5,t.fillRect(s*i+Pe()*i,Pe()*512,2+Pe()*8,1+Pe()*2);t.globalAlpha=1,t.fillStyle="#151311",t.fillRect(s*i+i-2,0,2,512)}n.charred=gt(e,6)}{const[e,t]=vt(512);let i=0;const s=["#b98d6c","#c49a78","#a87d5f","#cfa888","#b48a6a","#9f7558","#c8a080"];for(;i<512;){const r=10+Pe()*34;t.fillStyle=s[Pe()*s.length|0],t.fillRect(0,i,512,r),i+=r}en(t,512,.35,["#8a654b","#dcc0a2","#9a7458"],9e3),n.rammed=gt(e,8)}{const[e,t]=vt(512);t.fillStyle="#9d968a",t.fillRect(0,0,512,512);const i=4,s=512/i;for(let r=0;r<i;r++){let a=-Pe()*100;for(;a<512;){const o=90+Pe()*120,c=175+Pe()*25;t.fillStyle=`rgb(${c},${c-6},${c-16})`,t.fillRect(a+2,r*s+2,o-4,s-4),a+=o}}en(t,512,.25,["#8e877b","#d8d1c4"],6e3),n.stone=gt(e,8)}{const[e,t]=vt(256);t.fillStyle="#6f6a62",t.fillRect(0,0,256,256);for(let i=0;i<4;i++){let s=-Pe()*60;for(;s<256;){const r=40+Pe()*70,a=120+Pe()*30;t.fillStyle=`rgb(${a},${a-4},${a-10})`,t.fillRect(s+2,i*64+2,r-3,60),s+=r}}n.plinth=gt(e,4)}{const[e,t]=vt(512);t.fillStyle="#c9a57a",t.fillRect(0,0,512,512);const i=512/8;for(let s=0;s<8;s++){let r=-Pe()*300;for(;r<512;){const a=200+Pe()*250,o=Pe()*18;t.fillStyle=`rgb(${200+o},${164+o},${118+o})`,t.fillRect(s*i+1,r+1,i-2,a-2);for(let c=0;c<18;c++){t.strokeStyle="rgba(140,100,60,0.15)",t.beginPath();const h=s*i+Pe()*i;t.moveTo(h,r),t.lineTo(h+Pe()*6-3,r+a),t.stroke()}r+=a}}n.oak=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#8a6a4a",t.fillRect(0,0,256,256);for(let i=0;i<10;i++){const s=Pe()*20;t.fillStyle=`rgb(${150+s},${115+s},${80+s})`,t.fillRect(i*25.6+1,0,23.6,256)}n.deck=gt(e,4)}{const[e,t]=vt(256);t.fillStyle="#b07a4f",t.fillRect(0,0,256,256);for(let i=0;i<16;i++){const s=Pe()*22;t.fillStyle=`rgb(${176+s},${122+s},${80+s})`,t.fillRect(0,i*16+1,256,14)}n.soffit=gt(e,4)}{const[e,t]=vt(256);t.fillStyle="#cfc58e",t.fillRect(0,0,256,256);for(let i=0;i<256;i+=3)t.fillStyle=i%6?"#c4b97f":"#d8cf9c",t.fillRect(0,i,256,2);t.fillStyle="#3d4a35",t.fillRect(0,0,256,6),t.fillRect(0,125,256,6),t.fillRect(0,0,6,256),n.tatami=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#3b3b39",t.fillRect(0,0,256,256),en(t,256,.7,["#555552","#2a2a29","#6b6658"],6e3),n.rubber=gt(e,4)}{const[e,t]=vt(256);t.fillStyle="#6a645c",t.fillRect(0,0,256,256);for(let i=0;i<8;i++)t.fillStyle="#7d776e",t.fillRect(i*32,0,3,256),t.fillStyle="#4e4943",t.fillRect(i*32+3,0,2,256);n.seam=gt(e,12)}{const[e,t]=vt(256);t.fillStyle="#d9d4c8",t.fillRect(0,0,256,256),en(t,256,.6,["#bfb8aa","#eeeae2","#a9a294"],9e3);for(let i=0;i<256;i+=16)t.strokeStyle="rgba(150,142,128,0.45)",t.lineWidth=2,t.beginPath(),t.moveTo(0,i),t.lineTo(256,i),t.stroke();n.gravel=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#5f8c3c",t.fillRect(0,0,256,256),en(t,256,.5,["#4f7a30","#77a24e","#6a9545"],8e3),n.turf=gt(e,6)}{const[e,t]=vt(512);t.fillStyle="#a3a46e",t.fillRect(0,0,512,512),en(t,512,.5,["#8f9660","#b8b37e","#868c55","#b0a46c"],26e3),en(t,512,.9,["#e2c75a","#d18bb0","#f2f0e6","#c97a4a","#9a7fc4"],2200),n.meadow=gt(e,30)}{const[e,t]=vt(256);t.fillStyle="#c08552",t.fillRect(0,0,256,256);for(let i=0;i<12;i++){const s=Pe()*20;t.fillStyle=`rgb(${190+s},${132+s},${82+s})`,t.fillRect(0,i*21+1,256,19)}n.cedar=gt(e,4)}{const[e,t]=vt(256);t.fillStyle="#a9a59e",t.fillRect(0,0,256,256),en(t,256,.3,["#97938c","#c2beb6"],5e3),n.concrete=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#efe9de",t.fillRect(0,0,256,256);for(let i=0;i<140;i++){const s=Pe()*256,r=Pe()*256,a=10+Pe()*40,o=t.createRadialGradient(s,r,0,s,r,a),c=Pe()<.5?"rgba(255,252,246,0.35)":"rgba(214,204,188,0.28)";o.addColorStop(0,c),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(s-a,r-a,a*2,a*2)}en(t,256,.12,["#fbf7f0","#ddd3c4"],2500),n.lime=gt(e,8),n.limeN=ln(e,8,1.2)}{const[e,t]=vt(512);t.fillStyle="#b98544",t.fillRect(0,0,512,512);const i=512/7;for(let s=0;s<7;s++){let r=-Pe()*300;for(;r<512;){const a=220+Pe()*260,o=Pe()*22-8;t.fillStyle=`rgb(${200+o},${143+o},${78+o*.6})`,t.fillRect(s*i+1,r+1,i-2,a-2);for(let c=0;c<26;c++){t.strokeStyle=`rgba(${120+Pe()*30},${70+Pe()*20},30,${.08+Pe()*.14})`,t.lineWidth=1+Pe(),t.beginPath();const h=s*i+Pe()*i;t.moveTo(h,r),t.bezierCurveTo(h+Pe()*8-4,r+a*.3,h+Pe()*8-4,r+a*.7,h+Pe()*6-3,r+a),t.stroke()}t.fillStyle="rgba(70,40,15,0.6)",t.fillRect(s*i,r,i,1.5),r+=a}t.fillStyle="rgba(70,40,15,0.55)",t.fillRect(s*i,0,1.5,512)}n.honey=gt(e,7),n.honeyN=ln(e,7,1.5)}{const[e,t]=vt(512);t.fillStyle="#6e4e2e",t.fillRect(0,0,512,512);const i=512/(5*Math.SQRT2)/1,s=5*i,r=Math.SQRT1_2;for(let a=-8;a<=8;a++)for(let o=-30;o<=30;o++)for(const c of[0,1]){const h=o*i+a*s,l=o*i-a*s+(c?i:0),[u,d,f,p]=c?[h,l,i,s]:[h,l,s,i];t.setTransform(zn*r,-zn*r,zn*r,zn*r,0,0);const _=Pe()*26-6;t.fillStyle=`rgb(${200+_},${160+_},${110+_*.8})`,t.fillRect(u+1.2,d+1.2,f-2.4,p-2.4);for(let g=0;g<4;g++)t.fillStyle="rgba(120,80,40,0.13)",c?t.fillRect(u+2+Pe()*(f-4),d+2,1,p-4):t.fillRect(u+2,d+2+Pe()*(p-4),f-4,1)}t.setTransform(zn,0,0,zn,0,0),n.herring=gt(e,2.4),n.herringN=ln(e,2.4,2.2)}{const[e,t]=vt(512);t.fillStyle="#f2efea",t.fillRect(0,0,512,512),en(t,512,.1,["#e5e0d8","#ffffff"],4e3);for(let i=0;i<14;i++){let s=Pe()*512,r=Pe()*512;t.strokeStyle=i%4?"rgba(150,140,128,0.35)":"rgba(160,128,80,0.45)",t.lineWidth=i%4?.8+Pe():2+Pe()*2,t.beginPath(),t.moveTo(s,r);for(let a=0;a<30;a++)s+=20+Pe()*10,r+=Pe()*30-15,t.lineTo(s%512,r),s>512&&(s-=512,t.moveTo(s,r));t.stroke()}n.marble=gt(e,6)}{const[e,t]=vt(256);t.fillStyle="#2b2c2c",t.fillRect(0,0,256,256),en(t,256,.35,["#3a3b3b","#1f2020","#45464a"],7e3);for(let i=0;i<6;i++)t.strokeStyle="rgba(120,120,118,0.18)",t.lineWidth=.6,t.beginPath(),t.moveTo(Pe()*256,0),t.lineTo(Pe()*256,256),t.stroke();t.fillStyle="#1a1a1a",t.fillRect(0,0,256,1.5),t.fillRect(0,0,1.5,256),t.fillRect(0,128,256,1.5),n.blackstone=gt(e,4),n.blackstoneN=ln(e,4,1.5)}{const[e,t]=vt(256);t.fillStyle="#e8e4da",t.fillRect(0,0,256,256);const i=8,s=256/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Pe(),c=t.createLinearGradient(a*s,r*s,a*s+s,r*s+s);c.addColorStop(0,`rgb(${40+o*30},${110+o*40},${84+o*30})`),c.addColorStop(.6,`rgb(${30+o*20},${92+o*34},${70+o*24})`),c.addColorStop(1,`rgb(${56+o*30},${130+o*40},${100+o*30})`),t.fillStyle=c,t.fillRect(a*s+2,r*s+2,s-4,s-4),t.fillStyle="rgba(255,255,255,0.18)",t.fillRect(a*s+4,r*s+4,s*.3,2)}n.zellige=gt(e,1.33),n.zelligeN=ln(e,1.33,3)}{const[e,t]=vt(256);t.fillStyle="#e8d8b8",t.fillRect(0,0,256,256);for(let i=0;i<10;i++){const s=Pe()*14;t.fillStyle=`rgb(${232+s*.5},${214+s},${178+s})`,t.fillRect(0,i*25.6+1,256,23.6)}en(t,256,.15,["#d6c39c","#f4ead6"],1500),n.aspen=gt(e,3),n.aspenN=ln(e,3,1.5)}{const[e,t]=vt(256);t.fillStyle="#5f5a52",t.fillRect(0,0,512,512);const i=[];for(let c=0;c<26;c++)i.push([Pe()*512,Pe()*512]);const s=t.getImageData(0,0,e.width,e.height),r=e.width,a=512/r,o=i.map(()=>{const c=150+Pe()*45;return[c,c-6-Pe()*8,c-16-Pe()*14]});for(let c=0;c<r;c++)for(let h=0;h<r;h++){let l=1e9,u=1e9,d=0;const f=h*a,p=c*a;for(let S=0;S<i.length;S++)for(const R of[-512,0,512])for(const b of[-512,0,512]){const T=Math.hypot(f-i[S][0]-R,p-i[S][1]-b);T<l?(u=l,l=T,d=S):T<u&&(u=T)}const _=(c*r+h)*4,g=u-l<5?.45:1,m=.92+Pe()*.12;s.data[_]=o[d][0]*g*m,s.data[_+1]=o[d][1]*g*m,s.data[_+2]=o[d][2]*g*m,s.data[_+3]=255}t.putImageData(s,0,0),n.flag=gt(e,12),n.flagN=ln(e,12,2.5)}{const[e,t]=vt(256);t.fillStyle="#3d5a50",t.fillRect(0,0,256,256);const i=8,s=256/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Pe()*26;t.fillStyle=`rgb(${82+o},${128+o},${112+o})`,t.fillRect(a*s+1.5,r*s+1.5,s-3,s-3)}n.pooltile=gt(e,4),n.pooltileN=ln(e,4,2)}{const[e,t]=vt(256);t.fillStyle="#b8b0a2",t.fillRect(0,0,256,256);for(let i=0;i<4;i++)for(let s=0;s<2;s++){const r=214+Pe()*16;t.fillStyle=`rgb(${r},${r-6},${r-18})`,t.fillRect(s*128+i%2*64+1,i*64+1,126,62),t.fillRect(s*128+i%2*64+1-256,i*64+1,126,62)}en(t,256,.15,["#c9c1b2","#ece6da"],3e3),n.stonetile=gt(e,8),n.stonetileN=ln(e,8,1.6)}{const[e,t]=vt(128);t.fillStyle="#e4dccd",t.fillRect(0,0,128,128);for(let i=0;i<128;i+=2)t.fillStyle="rgba(190,178,158,0.25)",t.fillRect(0,i,128,1),t.fillRect(i,0,1,128);n.linen=gt(e,1.5)}return n.charredN=ln(n.charred.image,6,2.5),n.seamN=ln(n.seam.image,12,3),n.tatamiN=ln(n.tatami.image,6,1.5),n.rammedN=ln(n.rammed.image,8,1.2),n.gravelN=ln(n.gravel.image,6,2),n}function __(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,c=new Pt;let h=0;for(let l=0;l<n.length;++l){const u=n[l];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,l),h+=f}}if(t){let l=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+l);l+=n[d].attributes.position.count}c.setIndex(u)}for(const l in r){const u=yh(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(const l in a){const u=a[l][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[l].length;++_)f.push(a[l][_][d]);const p=yh(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(p)}}}return c}function yh(n){let e,t,i,s=-1,r=0;for(let h=0;h<n.length;++h){const l=n[h];if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*t}const a=new e(r),o=new un(a,t,i);let c=0;for(let h=0;h<n.length;++h){const l=n[h];if(l.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=l.count;d<f;d++)for(let p=0;p<t;p++){const _=l.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(l.array,c);c+=l.count*t}return s!==void 0&&(o.gpuType=s),o}const y_=[["h",55,50.5,72],["v",72,27.5,55]],v_=[{id:"101",name:"Kitchen",wing:"Living Pavilion",x0:20,y0:55,x1:36,y1:79,h:12,floor:"stonetile",cond:!0,notes:"Bright, sleek kitchen: white handleless cabinets, black stone counters and a green zellige backsplash. A 10-ft marble island seats five on stools. Stainless range under a glass chimney hood, white apron sink with a brass faucet, open honey-oak shelves.",fin:"Large-format honed limestone; lime plaster; white handleless cabinets; black stone perimeter counters; green zellige backsplash; soapstone island top with honed marble waterfall ends; walnut open shelves; stainless range; glass chimney hood; white apron sink; unlacquered brass faucet; blown-glass + paper-lantern pendants over the island",floorName:"Large-format honed limestone",w:16,d:24,area:384},{id:"102",name:"Dining",wing:"Living Pavilion",x0:36,y0:55,x1:50,y1:79,h:12,floor:"herring",cond:!0,notes:"Seats eight under exposed fir beams and a big paper lantern. Disappearing glass to the courtyard on the south and to the pergola dining terrace on the north.",fin:"Walnut herringbone; lime plaster; exposed fir beams; cedar ceiling; dining table (open item); mixed chairs: Windsor (walnut) on the courtyard side, Shaker (cherry) on the north side; paper lantern",floorName:"Walnut herringbone",w:14,d:24,area:336},{id:"103",name:"Living + Conversation Pit",wing:"Living Pavilion",x0:50,y0:55,x1:72,y1:79,h:12,floor:"herring",cond:!0,notes:"The heart of the house, fully open to the garden: 21 ft of pocketing glass to the courtyard and a big fixed mountain-view window to the north. 16-ft sunken conversation pit with a low modular sofa, cognac leather lounge chair, paper lanterns, shoji screens to the dining room, and art on the east wall. A slim linear gas fire sits in a lime-plaster plinth (no stone fireplace).",fin:"Walnut herringbone; lime plaster; exposed fir beams; cedar ceiling; low linen sofa in the pit; classic leather lounger; paper lanterns over the pit + woven pendants by the north window; shoji screens; frameless corner glass at the courtyard corner; bronze frames elsewhere; art wall",floorName:"Walnut herringbone",w:22,d:24,area:528},{id:"104",name:"Walk-in Pantry",wing:"Living Pavilion",x0:10,y0:67,x1:20,y1:79,h:10,floor:"stonetile",cond:!0,notes:"Floor-to-ceiling open honey-oak shelving, second fridge, appliance counter.",fin:"Large-format honed limestone; lime plaster; walnut open shelving",floorName:"Large-format honed limestone",w:10,d:12,area:120},{id:"105",name:"Mudroom + Gear",wing:"Living Pavilion",x0:10,y0:55,x1:20,y1:67,h:10,floor:"stonetile",cond:!0,notes:"Side entry from the bike racks and kitchen garden. Cubbies, boot bench, ski and helmet wall, dog wash.",fin:"Large-format honed limestone; lime plaster; walnut cubbies; stone dog wash",floorName:"Large-format honed limestone",w:10,d:12,area:120},{id:"201",name:"Master Bedroom",wing:"Sleeping Wing",x0:72,y0:59,x1:86,y1:83,h:11,floor:"honey",cond:!0,notes:"Floor-to-ceiling glass to the mountains with sheer linen curtains, cove lighting, and a big fan under a wood ceiling. Low linen-wrapped bed against a lime-plaster headwall ledge (no wood platform or headboard), and a pair of lounge chairs at the view window.",fin:"Walnut floor; lime plaster; cherry joinery; shoji doors; wood ceiling with cove lighting; sheer linen curtains; big ceiling fan; linen bed; bronze window frames",floorName:"Wide-plank walnut",w:14,d:24,area:336},{id:"202",name:"Master Bath",wing:"Sleeping Wing",x0:86,y0:69,x1:98,y1:83,h:10,floor:"stone",cond:!0,notes:"Deep Japanese hinoki soaking tub at the corner window under a skylight. Open walk-in rain shower behind a black-stone wall (no glass enclosure), one long floating oak vanity with integrated stone basins and matte black taps, and a WC room. Opens to a walled bath garden.",fin:"Honed limestone floor and walls; green zellige shower wall; hinoki soaking tub; floating cherry vanity, integrated basins; unlacquered brass taps (mount: open item); skylight",floorName:"Honed limestone",w:12,d:14,area:168},{id:"203",name:"Master Closet",wing:"Sleeping Wing",x0:86,y0:59,x1:98,y1:69,h:10,floor:"honey",cond:!0,notes:"Walk-in closet with honey-oak millwork and a center island.",fin:"Walnut floor; cherry millwork; lime plaster; shoji door",floorName:"Wide-plank walnut",w:12,d:10,area:120},{id:"204",name:"East Engawa Gallery",wing:"Sleeping Wing",x0:72,y0:14,x1:78,y1:59,h:10,floor:"honey",cond:!0,notes:"Glazed engawa along the courtyard: honey-oak floor, sliding glass, a long low bench and wall-mounted art. Links living, bedrooms and the wellness wing.",fin:"Walnut floor; lime plaster; bronze sliding glass",floorName:"Wide-plank walnut",w:6,d:45,area:270},{id:"205",name:"Laundry",wing:"Sleeping Wing",x0:78,y0:49,x1:88,y1:59,h:10,floor:"stone",cond:!0,notes:"Next to the bedrooms. Stacked W/D pair, folding counter, drying rack.",fin:"Honed limestone; lime plaster; white cabinets",floorName:"Honed limestone",w:10,d:10,area:100},{id:"206",name:"Linen + Mechanical",wing:"Sleeping Wing",x0:88,y0:49,x1:98,y1:59,h:10,floor:"concrete",cond:!0,notes:"Linen storage, heat pump air handler, ERV, water heating.",fin:"Sealed concrete; painted plaster",floorName:"Sealed concrete",w:10,d:10,area:100},{id:"207",name:"Kids' Room 1",wing:"Sleeping Wing",x0:85,y0:36.5,x1:98,y1:49,h:10,floor:"honey",cond:!0,notes:"Compact 13 x 12.5 ft calm white room: window-seat reading nook on the east window, desk by the window, wardrobe, low cube shelves with bins, a beanbag, and a small bouldering wall with a crash mat.",fin:"Walnut floor; calm white lime plaster; shoji door; cherry window seat with linen cushion; cherry desk and cube shelves; white wardrobe; bouldering panel",floorName:"Wide-plank walnut",w:13,d:12.5,area:162.5},{id:"208",name:"Jack-and-Jill Bath",wing:"Sleeping Wing",x0:78,y0:30,x1:85,y1:45.5,h:10,floor:"stone",cond:!0,notes:"Tighter 7 x 15.5 ft bath (about 109 SF) between the kids' rooms: two vanities, WC and a tiled tub-shower, lockable from each side.",fin:"Honed limestone; white tile tub-shower; cherry vanities; unlacquered brass taps",floorName:"Honed limestone",w:7,d:15.5,area:108.5},{id:"209",name:"Kids' Room 2 / Guest",wing:"Sleeping Wing",x0:85,y0:24,x1:98,y1:36.5,h:10,floor:"honey",cond:!0,notes:"Compact 13 x 12.5 ft room that still fits a queen bed, so it doubles as the guest room. Window-seat nook, desk by the window, cube shelves, and a small climbing wall feature. The Guest / Pool Bath is just down the engawa.",fin:"Walnut floor; calm white lime plaster; shoji door; cherry window seat, desk and cube shelves; climbing panel",floorName:"Wide-plank walnut",w:13,d:12.5,area:162.5},{id:"210",name:"Guest / Pool Bath",wing:"Sleeping Wing",x0:78,y0:14,x1:88,y1:24,h:10,floor:"stone",cond:!0,notes:"Guest-capable full bath (walk-in shower, vanity, WC) reached from the engawa, also serving the pool and Kids' Room 2 when it hosts guests.",fin:"Honed limestone; tiled walk-in shower (floor: open item); cherry vanity; unlacquered brass taps",floorName:"Honed limestone",w:10,d:10,area:100},{id:"211",name:"Pool Equipment",wing:"Sleeping Wing",x0:88,y0:14,x1:98,y1:24,h:9,floor:"concrete",cond:!1,notes:"Unconditioned. Saltwater pool equipment: variable-speed pump, cartridge filter, heat pump heater and the salt chlorine generator cell (replace the cell about every 3-5 years). Ties into the utility yard next door. Exterior access only.",fin:"Sealed concrete",floorName:"Sealed concrete",w:10,d:10,area:100},{id:"212",name:"Kids' Entry + Closet",wing:"Sleeping Wing",x0:78,y0:24,x1:85,y1:30,h:10,floor:"honey",cond:!0,notes:"Entry vestibule from the east engawa to Kids' Room 2, with a wardrobe.",fin:"Walnut floor; lime plaster; shoji door; white wardrobe",floorName:"Wide-plank walnut",w:7,d:6,area:42},{id:"213",name:"Kids' Entry",wing:"Sleeping Wing",x0:78,y0:45.5,x1:85,y1:49,h:10,floor:"honey",cond:!0,notes:"Short entry vestibule from the east engawa to Kids' Room 1.",fin:"Walnut floor; lime plaster; shoji door",floorName:"Wide-plank walnut",w:7,d:3.5,area:24.5},{id:"301",name:"South Covered Walkway",wing:"Wellness + Gym Wing",x0:36,y0:22,x1:72,y1:27,h:10,floor:"flagstone",cond:!1,notes:"Open-air covered walkway (not conditioned) under the wellness-wing eave, closing the courtyard ring. Flagstone floor, open to the courtyard, with glass doors into the east and west galleries.",fin:"Flagstone floor; open-air, covered by the wellness-wing roof; cedar soffit",floorName:"Flagstone (open-air)",w:36,d:5,area:180},{id:"302",name:"Exercise Room",wing:"Wellness + Gym Wing",x0:28,y0:0,x1:50,y1:22,h:12,floor:"honey",cond:!0,notes:"Calm studio look: honey-oak floor with a rubber lifting area, a high wood ceiling, and a mirror wall. Free-standing rig with wood rings and a climbing rope, Pilates Cadillac and reformer, wood water rower, treadmill, kettlebell and dumbbell rack, and a bars-and-bands wall. Glass slides open to the sprint lane and an outdoor pull-up station.",fin:"Walnut floor; rubber lifting tiles; lime plaster; high wood ceiling; mirror wall; black steel rig; wood rings",floorName:"Wide-plank walnut",w:22,d:22,area:484},{id:"303",name:"Wet Room",wing:"Wellness + Gym Wing",x0:50,y0:9,x1:66,y1:22,h:10,floor:"stone",cond:!0,notes:"Black-stone wet room: two rain showers, a built-in cold plunge lined in green zellige (39-50 F), teak bench. Serves the sauna and steam room.",fin:"Honed limestone floor; Japanese earth-plaster walls (tadelakt-style sealed); green zellige plunge; teak bench; unlacquered brass rain showers",floorName:"Honed limestone",w:16,d:13,area:208},{id:"304",name:"Sauna",wing:"Wellness + Gym Wing",x0:50,y0:0,x1:58,y1:9,h:8,floor:"aspen",cond:!0,notes:"Warm cedar walls with tiered pale-aspen benches, backlit underneath, and an electric rock heater (no wood stove). Low window toward the pool and meadow.",fin:"Cedar walls and ceiling; pale aspen tiered benches, backlit; aspen duckboard floor; electric rock heater",floorName:"Aspen duckboard",w:8,d:9,area:72},{id:"305",name:"Steam Room",wing:"Wellness + Gym Wing",x0:58,y0:0,x1:66,y1:9,h:8,floor:"blackstone",cond:!0,notes:"Stone steam room (not a white hammam): honed black stone on the walls, floor and heated bench.",fin:"Honed black stone floor, walls and heated bench (kept: steam needs an impervious stone)",floorName:"Honed black stone",w:8,d:9,area:72},{id:"306",name:"Changing + Towels",wing:"Wellness + Gym Wing",x0:66,y0:0,x1:72,y1:22,h:10,floor:"stone",cond:!0,notes:"Towels, robes, honey-oak lockers. Door to the pool deck and outdoor shower.",fin:"Honed limestone; lime plaster; cherry lockers",floorName:"Honed limestone",w:6,d:22,area:132},{id:"401",name:"Entry Genkan",wing:"Studio + Arrival",x0:18,y0:46,x1:30,y1:55,h:10,floor:"stonetile",cond:!0,notes:"Stone genkan with a step-up to the oak floor, a rammed-earth feature wall and one large artwork. Solid charred-oak pivot door (no glass entry). The first view lines up across the engawa into the courtyard.",fin:"Large-format honed limestone; rammed-earth feature wall; lime plaster; kumiko lattice screen; bronze front door (style + timber: open item)",floorName:"Large-format honed limestone",w:12,d:9,area:108},{id:"402",name:"Coat + Shoe Closet",wing:"Studio + Arrival",x0:18,y0:40,x1:24,y1:46,h:10,floor:"honey",cond:!0,notes:"Coat and shoe storage.",fin:"Walnut floor; walnut millwork",floorName:"Wide-plank walnut",w:6,d:6,area:36},{id:"403",name:"Powder Room",wing:"Studio + Arrival",x0:24,y0:40,x1:30,y1:46,h:10,floor:"stone",cond:!0,notes:"Powder room by the entry: integrated stone basin, lime-plaster walls.",fin:"Honed limestone; lime plaster; integrated stone basin; unlacquered brass tap",floorName:"Honed limestone",w:6,d:6,area:36},{id:"404",name:"Tatami Room",wing:"Studio + Arrival",x0:18,y0:28,x1:30,y1:40,h:9,floor:"tatami",cond:!0,notes:"8-mat (12 x 12 ft) tatami room (loved) with a tokonoma alcove, low table, zabuton and a paper andon lantern. Shoji slide open to the engawa and courtyard; low garden window. Used for tea, meditation, or as an overflow guest room.",fin:"Tatami; lime plaster; shoji to the engawa; fusuma closet doors; walnut tokonoma",floorName:"Tatami (8 mats)",w:12,d:12,area:144},{id:"405",name:"Sound Lock + AV Closet",wing:"Studio + Arrival",x0:18,y0:22,x1:30,y1:28,h:10,floor:"honey",cond:!0,notes:"Sound lock vestibule between the west engawa and the studio: two solid-core doors with full perimeter seals and automatic drop seals, so one is always closed. Also holds the AV rack and instrument storage.",fin:"Walnut floor; painted plaster; two solid-core doors with perimeter + drop seals",floorName:"Wide-plank walnut",w:12,d:6,area:72},{id:"406",name:"West Engawa Gallery",wing:"Studio + Arrival",x0:30,y0:22,x1:36,y1:55,h:10,floor:"honey",cond:!0,notes:"Glazed engawa from the entry to the office and great room.",fin:"Walnut floor; lime plaster; bronze sliding glass",floorName:"Wide-plank walnut",w:6,d:33,area:198},{id:"407",name:"Isolated Studio / Office",wing:"Studio + Arrival",x0:4,y0:0,x1:28,y1:22,h:14,floor:"honey",cond:!0,notes:"Fully isolated room-within-a-room studio that is still a great work office: sit-stand desk facing the garden, studio desk with mixer and MPC, digital piano, e-drums, guitar wall and sofa. Decoupled inner stud walls on resilient isolation mounts (about 14 in total wall build-up per side), a floated floor on isolation pads, an isolated ceiling on spring hangers, laminated double glazing with an air gap, and quiet decoupled HVAC with lined ducts and silencers. Target STC 60+ (about 60-65 dB isolation) and NC-20 inside. 528 SF gross, about 426 SF net inside the inner shell (21 ft 8 in x 19 ft 8 in).",fin:"Floated walnut floor on isolation pads; decoupled inner walls on resilient mounts; isolated ceiling; laminated double glazing in bronze frames; solid-core doors with seals (not shoji, to keep STC 60+); lined ducts; lime plaster; walnut desks; fabric acoustic panels; acoustic ceiling clouds; sculpted wood ceiling; skylight; layered pendants",floorName:"Wide-plank walnut",w:24,d:22,area:528}],b_=[{o:"h",c:55,a:10,b:18,pos:"105",neg:null,ext:!0,h:10,feats:[{a:11,b:17,k:"window",x:[3,7]}]},{o:"h",c:55,a:18,b:20,pos:"105",neg:"401",ext:!1,h:10,feats:[]},{o:"h",c:55,a:20,b:30,pos:"101",neg:"401",ext:!1,h:12,feats:[]},{o:"h",c:55,a:30,b:36,pos:"101",neg:"406",ext:!1,h:12,feats:[{a:30,b:36,k:"open",x:null}]},{o:"h",c:55,a:36,b:50,pos:"102",neg:null,ext:!0,h:12,feats:[{a:36.5,b:49.5,k:"glass",x:null}]},{o:"h",c:55,a:50,b:72,pos:"103",neg:null,ext:!0,h:12,feats:[{a:50.5,b:72,k:"fixed",x:null}]},{o:"h",c:79,a:10,b:20,pos:null,neg:"104",ext:!0,h:10,feats:[]},{o:"h",c:79,a:20,b:36,pos:null,neg:"101",ext:!0,h:12,feats:[{a:28,b:35,k:"window",x:[4.5,8]}]},{o:"h",c:79,a:36,b:50,pos:null,neg:"102",ext:!0,h:12,feats:[{a:37,b:49,k:"glass",x:null}]},{o:"h",c:79,a:50,b:72,pos:null,neg:"103",ext:!0,h:12,feats:[{a:51,b:71,k:"fixed",x:null}]},{o:"v",c:20,a:55,b:67,pos:"101",neg:"105",ext:!1,h:12,feats:[{a:59,b:62,k:"door",x:null}]},{o:"v",c:20,a:67,b:79,pos:"101",neg:"104",ext:!1,h:12,feats:[{a:71,b:74,k:"door",x:null}]},{o:"v",c:36,a:22,b:27,pos:"301",neg:"406",ext:!1,h:10,feats:[{a:22.5,b:26.5,k:"glass",x:null}]},{o:"v",c:36,a:27,b:55,pos:null,neg:"406",ext:!0,h:10,feats:[{a:27.5,b:54.5,k:"glass",x:null}]},{o:"v",c:36,a:55,b:79,pos:"102",neg:"101",ext:!1,h:12,feats:[{a:55,b:79,k:"open",x:null}]},{o:"v",c:50,a:0,b:9,pos:"304",neg:"302",ext:!1,h:12,feats:[]},{o:"v",c:50,a:9,b:22,pos:"303",neg:"302",ext:!1,h:12,feats:[{a:12,b:15,k:"door",x:null}]},{o:"v",c:50,a:55,b:79,pos:"103",neg:"102",ext:!1,h:12,feats:[{a:55,b:79,k:"open",x:null}]},{o:"v",c:72,a:0,b:14,pos:null,neg:"306",ext:!0,h:10,feats:[]},{o:"v",c:72,a:14,b:22,pos:"204",neg:"306",ext:!1,h:10,feats:[{a:16,b:19,k:"door",x:null}]},{o:"v",c:72,a:22,b:27,pos:"204",neg:"301",ext:!1,h:10,feats:[{a:22.5,b:26.5,k:"glass",x:null}]},{o:"v",c:72,a:27,b:55,pos:"204",neg:null,ext:!0,h:10,feats:[{a:27.5,b:55,k:"fixed",x:null}]},{o:"v",c:72,a:55,b:59,pos:"204",neg:"103",ext:!1,h:12,feats:[{a:55,b:59,k:"open",x:null}]},{o:"v",c:72,a:59,b:79,pos:"201",neg:"103",ext:!1,h:12,feats:[]},{o:"v",c:72,a:79,b:83,pos:"201",neg:null,ext:!0,h:11,feats:[]},{o:"h",c:67,a:10,b:20,pos:"104",neg:"105",ext:!1,h:10,feats:[]},{o:"v",c:10,a:55,b:67,pos:"105",neg:null,ext:!0,h:10,feats:[{a:59,b:62,k:"exdoor",x:null}]},{o:"v",c:10,a:67,b:79,pos:"104",neg:null,ext:!0,h:10,feats:[{a:71,b:77,k:"window",x:[3,7]}]},{o:"h",c:59,a:72,b:78,pos:"201",neg:"204",ext:!1,h:11,feats:[{a:73,b:77,k:"slide",x:null}]},{o:"h",c:59,a:78,b:86,pos:"201",neg:"205",ext:!1,h:11,feats:[]},{o:"h",c:59,a:86,b:88,pos:"203",neg:"205",ext:!1,h:10,feats:[]},{o:"h",c:59,a:88,b:98,pos:"203",neg:"206",ext:!1,h:10,feats:[]},{o:"h",c:83,a:72,b:86,pos:null,neg:"201",ext:!0,h:11,feats:[{a:73,b:85,k:"fixed",x:null}]},{o:"h",c:83,a:86,b:98,pos:null,neg:"202",ext:!0,h:10,feats:[{a:88,b:97,k:"window",x:[2,8]}]},{o:"v",c:86,a:59,b:69,pos:"203",neg:"201",ext:!1,h:11,feats:[{a:61,b:64,k:"door",x:null}]},{o:"v",c:86,a:69,b:83,pos:"202",neg:"201",ext:!1,h:11,feats:[{a:71,b:74.5,k:"slide",x:null}]},{o:"h",c:69,a:86,b:98,pos:"202",neg:"203",ext:!1,h:10,feats:[]},{o:"v",c:98,a:14,b:24,pos:null,neg:"211",ext:!0,h:9,feats:[]},{o:"v",c:98,a:24,b:36.5,pos:null,neg:"209",ext:!0,h:10,feats:[{a:26,b:34,k:"window",x:[2.5,8]}]},{o:"v",c:98,a:36.5,b:49,pos:null,neg:"207",ext:!0,h:10,feats:[{a:39,b:47,k:"window",x:[2.5,8]}]},{o:"v",c:98,a:49,b:59,pos:null,neg:"206",ext:!0,h:10,feats:[{a:50,b:53,k:"exdoor",x:null}]},{o:"v",c:98,a:59,b:69,pos:null,neg:"203",ext:!0,h:10,feats:[{a:62,b:67,k:"window",x:[6,8]}]},{o:"v",c:98,a:69,b:83,pos:null,neg:"202",ext:!0,h:10,feats:[{a:71,b:82,k:"window",x:[2,8]}]},{o:"h",c:14,a:72,b:78,pos:"204",neg:null,ext:!0,h:10,feats:[{a:73,b:77,k:"exdoor",x:null}]},{o:"h",c:14,a:78,b:88,pos:"210",neg:null,ext:!0,h:10,feats:[{a:81,b:85,k:"window",x:[5.5,8]}]},{o:"h",c:14,a:88,b:98,pos:"211",neg:null,ext:!0,h:9,feats:[{a:91,b:95,k:"exdoor",x:null}]},{o:"v",c:78,a:14,b:24,pos:"210",neg:"204",ext:!1,h:10,feats:[{a:18,b:21,k:"door",x:null}]},{o:"v",c:78,a:24,b:30,pos:"212",neg:"204",ext:!1,h:10,feats:[{a:24.5,b:27.5,k:"door",x:null}]},{o:"v",c:78,a:30,b:45.5,pos:"208",neg:"204",ext:!1,h:10,feats:[]},{o:"v",c:78,a:45.5,b:49,pos:"213",neg:"204",ext:!1,h:10,feats:[{a:45.75,b:48.75,k:"door",x:null}]},{o:"v",c:78,a:49,b:59,pos:"205",neg:"204",ext:!1,h:10,feats:[{a:52,b:55,k:"door",x:null}]},{o:"h",c:49,a:78,b:85,pos:"205",neg:"213",ext:!1,h:10,feats:[]},{o:"h",c:49,a:85,b:88,pos:"205",neg:"207",ext:!1,h:10,feats:[]},{o:"h",c:49,a:88,b:98,pos:"206",neg:"207",ext:!1,h:10,feats:[]},{o:"v",c:88,a:14,b:24,pos:"211",neg:"210",ext:!1,h:10,feats:[]},{o:"v",c:88,a:49,b:59,pos:"206",neg:"205",ext:!1,h:10,feats:[{a:52,b:55,k:"door",x:null}]},{o:"h",c:36.5,a:85,b:98,pos:"207",neg:"209",ext:!1,h:10,feats:[]},{o:"v",c:85,a:24,b:30,pos:"209",neg:"212",ext:!1,h:10,feats:[{a:24.5,b:27.5,k:"door",x:null}]},{o:"v",c:85,a:30,b:36.5,pos:"209",neg:"208",ext:!1,h:10,feats:[{a:31.5,b:34.5,k:"door",x:null}]},{o:"v",c:85,a:36.5,b:45.5,pos:"207",neg:"208",ext:!1,h:10,feats:[{a:41,b:44,k:"door",x:null}]},{o:"v",c:85,a:45.5,b:49,pos:"207",neg:"213",ext:!1,h:10,feats:[{a:45.75,b:48.75,k:"door",x:null}]},{o:"h",c:30,a:78,b:85,pos:"208",neg:"212",ext:!1,h:10,feats:[]},{o:"h",c:45.5,a:78,b:85,pos:"213",neg:"208",ext:!1,h:10,feats:[]},{o:"h",c:24,a:78,b:85,pos:"212",neg:"210",ext:!1,h:10,feats:[]},{o:"h",c:24,a:85,b:88,pos:"209",neg:"210",ext:!1,h:10,feats:[]},{o:"h",c:24,a:88,b:98,pos:"209",neg:"211",ext:!1,h:10,feats:[]},{o:"h",c:22,a:4,b:18,pos:null,neg:"407",ext:!0,h:14,feats:[{a:5,b:9,k:"window",x:[3,9]}]},{o:"h",c:22,a:18,b:28,pos:"405",neg:"407",ext:!1,h:14,feats:[{a:23,b:27,k:"door",x:null}]},{o:"h",c:22,a:28,b:30,pos:"405",neg:"302",ext:!1,h:12,feats:[]},{o:"h",c:22,a:30,b:36,pos:"406",neg:"302",ext:!1,h:12,feats:[]},{o:"h",c:22,a:36,b:50,pos:"301",neg:"302",ext:!1,h:12,feats:[{a:36,b:42,k:"slide",x:null}]},{o:"h",c:22,a:50,b:66,pos:"301",neg:"303",ext:!1,h:10,feats:[{a:56,b:59,k:"door",x:null}]},{o:"h",c:22,a:66,b:72,pos:"301",neg:"306",ext:!1,h:10,feats:[]},{o:"h",c:27,a:36,b:72,pos:null,neg:"301",ext:!0,h:10,feats:[{a:36,b:72,k:"open",x:null}]},{o:"h",c:0,a:4,b:28,pos:"407",neg:null,ext:!0,h:14,feats:[{a:7,b:25,k:"glass",x:null}]},{o:"h",c:0,a:28,b:50,pos:"302",neg:null,ext:!0,h:12,feats:[{a:31,b:47,k:"glass",x:null}]},{o:"h",c:0,a:50,b:58,pos:"304",neg:null,ext:!0,h:8,feats:[{a:51,b:57,k:"window",x:[3,6]}]},{o:"h",c:0,a:58,b:66,pos:"305",neg:null,ext:!0,h:8,feats:[]},{o:"h",c:0,a:66,b:72,pos:"306",neg:null,ext:!0,h:10,feats:[{a:68,b:71,k:"exdoor",x:null}]},{o:"v",c:28,a:0,b:22,pos:"302",neg:"407",ext:!1,h:14,feats:[]},{o:"h",c:9,a:50,b:58,pos:"303",neg:"304",ext:!1,h:10,feats:[{a:52,b:54.5,k:"door",x:null}]},{o:"h",c:9,a:58,b:66,pos:"303",neg:"305",ext:!1,h:10,feats:[{a:61,b:63.5,k:"door",x:null}]},{o:"v",c:66,a:0,b:9,pos:"306",neg:"305",ext:!1,h:10,feats:[]},{o:"v",c:66,a:9,b:22,pos:"306",neg:"303",ext:!1,h:10,feats:[{a:12,b:15,k:"door",x:null}]},{o:"v",c:58,a:0,b:9,pos:"305",neg:"304",ext:!1,h:8,feats:[]},{o:"h",c:46,a:18,b:24,pos:"401",neg:"402",ext:!1,h:10,feats:[{a:19,b:23,k:"door",x:null}]},{o:"h",c:46,a:24,b:30,pos:"401",neg:"403",ext:!1,h:10,feats:[]},{o:"v",c:18,a:22,b:28,pos:"405",neg:null,ext:!0,h:10,feats:[]},{o:"v",c:18,a:28,b:40,pos:"404",neg:null,ext:!0,h:9,feats:[{a:31,b:37,k:"window",x:[1.2,6]}]},{o:"v",c:18,a:40,b:46,pos:"402",neg:null,ext:!0,h:10,feats:[]},{o:"v",c:18,a:46,b:55,pos:"401",neg:null,ext:!0,h:10,feats:[{a:49,b:53,k:"front",x:null}]},{o:"v",c:30,a:22,b:28,pos:"406",neg:"405",ext:!1,h:10,feats:[{a:23,b:26,k:"door",x:null}]},{o:"v",c:30,a:28,b:40,pos:"406",neg:"404",ext:!1,h:10,feats:[{a:30,b:38,k:"slide",x:null}]},{o:"v",c:30,a:40,b:46,pos:"406",neg:"403",ext:!1,h:10,feats:[{a:41.5,b:44,k:"door",x:null}]},{o:"v",c:30,a:46,b:55,pos:"406",neg:"401",ext:!1,h:10,feats:[{a:47,b:54,k:"open",x:null}]},{o:"h",c:40,a:18,b:24,pos:"402",neg:"404",ext:!1,h:10,feats:[]},{o:"h",c:40,a:24,b:30,pos:"403",neg:"404",ext:!1,h:10,feats:[]},{o:"v",c:24,a:40,b:46,pos:"403",neg:"402",ext:!1,h:10,feats:[]},{o:"h",c:28,a:18,b:30,pos:"404",neg:"405",ext:!1,h:10,feats:[]},{o:"v",c:4,a:0,b:22,pos:"407",neg:null,ext:!0,h:14,feats:[{a:4,b:18,k:"window",x:[2.5,9]}]}],S_=[{room:"101",label:"Marble island 10' (seats five)",x0:23,y0:64,x1:33,y1:68.5,h:3,z0:0,color:"mat:marble",shape:"island"},{room:"101",label:"Stools",x0:24,y0:62.3,x1:32,y1:63.5,h:2.5,z0:0,color:"#6b4a33",shape:"stools"},{room:"101",label:"White handleless base cabinets",x0:22.6,y0:76.4,x1:35.6,y1:78.6,h:2.85,z0:0,color:"mat:lacq",shape:"box"},{room:"101",label:"Black stone counter",x0:22.5,y0:76.3,x1:35.7,y1:78.7,h:.15,z0:2.85,color:"mat:blackstone",shape:"box"},{room:"101",label:"Green zellige backsplash",x0:22.6,y0:78.45,x1:35.6,y1:78.62,h:1.5,z0:3,color:"mat:zellige",shape:"box"},{room:"101",label:"Green zellige range wall",x0:22.6,y0:78.45,x1:28,y1:78.62,h:4.5,z0:4.5,color:"mat:zellige",shape:"box"},{room:"101",label:'Stainless range 36"',x0:23.8,y0:76.15,x1:26.8,y1:78.4,h:3.02,z0:0,color:"mat:steel",shape:"range"},{room:"101",label:"Glass chimney hood",x0:23.6,y0:76.8,x1:27,y1:78.4,h:.2,z0:6.6,color:"#cfe3e6",shape:"hood"},{room:"101",label:"White apron sink + brass faucet",x0:30,y0:76.2,x1:32.6,y1:78.4,h:.9,z0:2.05,color:"#f6f4ef",shape:"sink"},{room:"101",label:"Open wood shelves",x0:20.25,y0:74.6,x1:21.1,y1:78.6,h:3.2,z0:4.4,color:"mat:honey",shape:"shelves"},{room:"101",label:"Open wood shelves",x0:20.25,y0:55.6,x1:21.1,y1:58.6,h:3.2,z0:4.4,color:"mat:honey",shape:"shelves"},{room:"101",label:"Integrated fridge + ovens (handleless)",x0:20.4,y0:63.5,x1:22.6,y1:70,h:8.5,z0:0,color:"mat:lacq",shape:"box"},{room:"101",label:"Blown-glass + paper-lantern pendants",x0:24,y0:65.6,x1:32,y1:66.9,h:.7,z0:7.4,color:"#efe6d3",shape:"pendants"},{room:"104",label:"Pantry shelving",x0:10.4,y0:68,x1:11.8,y1:78.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"104",label:"Pantry shelving",x0:18.2,y0:72,x1:19.6,y1:78.6,h:7.5,z0:0,color:"mat:honey",shape:"box"},{room:"105",label:"Cubbies + bench",x0:10.4,y0:62.5,x1:12,y1:66.6,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"105",label:"Dog wash",x0:16.5,y0:55.4,x1:19.6,y1:58,h:2.6,z0:0,color:"mat:stone",shape:"box"},{room:"201",label:"Low linen-wrapped bed (king)",x0:76,y0:69.4,x1:82.6,y1:76,h:1.6,z0:0,color:"mat:linen",shape:"bed"},{room:"201",label:"Lime-plaster headwall ledge",x0:75,y0:68.4,x1:83.6,y1:69.4,h:3.4,z0:0,color:"mat:plaster",shape:"box"},{room:"201",label:"Pair of lounge chairs",x0:74,y0:78.4,x1:80.6,y1:81.2,h:2.5,z0:0,color:"#b9a27e",shape:"lounge2"},{room:"201",label:"Sheer linen curtains",x0:73,y0:82.3,x1:85,y1:82.5,h:10.3,z0:.1,color:"#f6f1e6",shape:"curtain"},{room:"201",label:"Big fan under wood ceiling",x0:76.5,y0:69.5,x1:82.5,y1:75.5,h:.6,z0:9.6,color:"#6b4a33",shape:"fan"},{room:"201",label:"Cove lighting",x0:72.3,y0:59.3,x1:85.7,y1:82.7,h:.12,z0:10.2,color:"#ffd9a0",shape:"cove"},{room:"201",label:"Rug",x0:75,y0:67.2,x1:84,y1:78,h:.05,z0:0,color:"#cdbfa6",shape:"box"},{room:"202",label:"Deep hinoki soaking tub by the window",x0:93,y0:78,x1:97.4,y1:82.4,h:2.3,z0:0,color:"#e2c894",shape:"tub"},{room:"202",label:"Walk-in rain shower (floor: open item, limestone shown)",x0:86.6,y0:75.4,x1:92,y1:82.4,h:.12,z0:0,color:"mat:stone",shape:"box"},{room:"202",label:"Green zellige shower wall + unlacquered brass rain head",x0:86.6,y0:74.9,x1:91.2,y1:75.4,h:7.5,z0:0,color:"mat:zellige",shape:"box"},{room:"202",label:"Floating cherry vanity, integrated basins",x0:95.4,y0:69.6,x1:97.4,y1:76.5,h:1.5,z0:1.4,color:"mat:cherry",shape:"vanity"},{room:"202",label:"WC",x0:87,y0:69.6,x1:89,y1:72,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"203",label:"Closet millwork",x0:86.4,y0:59.4,x1:88.4,y1:68.6,h:7.5,z0:0,color:"mat:cherry",shape:"box"},{room:"203",label:"Closet millwork",x0:95.6,y0:59.4,x1:97.6,y1:68.6,h:7.5,z0:0,color:"mat:cherry",shape:"box"},{room:"203",label:"Island",x0:90.5,y0:62,x1:93.5,y1:66,h:3,z0:0,color:"mat:cherry",shape:"box"},{room:"210",label:"Walk-in shower",x0:83,y0:14.4,x1:87.6,y1:18.4,h:.12,z0:0,color:"mat:stone",shape:"box"},{room:"210",label:"Vanity",x0:78.4,y0:14.6,x1:80,y1:19,h:2.8,z0:0,color:"mat:cherry",shape:"box"},{room:"210",label:"WC",x0:84,y0:21.5,x1:86,y1:23.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"211",label:"Pump + filter",x0:90,y0:15,x1:96,y1:18,h:3,z0:0,color:"mat:steel",shape:"box"},{room:"211",label:"Salt chlorine generator cell + controller",x0:92,y0:21,x1:96.5,y1:23.4,h:4.5,z0:0,color:"#9aa0a3",shape:"box"},{room:"302",label:"Rubber lifting area",x0:30,y0:1,x1:40,y1:11.5,h:.06,z0:0,color:"mat:rubber",shape:"box"},{room:"302",label:"Free-standing rig, wood rings + climbing rope",x0:30.8,y0:3,x1:35.8,y1:9,h:9.5,z0:0,color:"#2a2a2a",shape:"rig"},{room:"302",label:"Pilates Cadillac",x0:40,y0:14,x1:47.5,y1:16.6,h:6.8,z0:0,color:"mat:honey",shape:"frame"},{room:"302",label:"Pilates reformer",x0:40,y0:18.4,x1:48,y1:20,h:1.3,z0:0,color:"mat:honey",shape:"reformer"},{room:"302",label:"Wood water rower",x0:41,y0:3.4,x1:48.5,y1:5.2,h:1.7,z0:0,color:"mat:honey",shape:"rower"},{room:"302",label:"Treadmill",x0:41,y0:7.5,x1:47.5,y1:10.6,h:4.4,z0:0,color:"#2a2a2a",shape:"treadmill"},{room:"302",label:"Kettlebell + dumbbell rack",x0:42.6,y0:20.7,x1:49.4,y1:21.8,h:3,z0:0,color:"#2a2a2a",shape:"krack"},{room:"302",label:"Bars-and-bands wall",x0:28.3,y0:10.5,x1:29.2,y1:20.5,h:8,z0:0,color:"#2a2a2a",shape:"bands"},{room:"302",label:"Mirror wall",x0:49.58,y0:1,x1:49.74,y1:11.5,h:7.5,z0:.3,color:"#dfe7ea",shape:"mirror"},{room:"302",label:"Storage wall (mats, plyo boxes)",x0:28.3,y0:1,x1:29.7,y1:9.5,h:8,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Plyo boxes",x0:33,y0:18.5,x1:35,y1:20.5,h:2,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Plyo boxes",x0:35.4,y0:19,x1:37,y1:20.6,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"302",label:"Balance boards",x0:30.5,y0:13,x1:33.5,y1:14.4,h:.4,z0:0,color:"#6b4a33",shape:"box"},{room:"303",label:"Built-in cold plunge (green zellige)",x0:60,y0:17,x1:65.4,y1:21.4,h:.5,z0:0,color:"mat:zellige",shape:"plunge"},{room:"303",label:"Rain showers",x0:51,y0:18.2,x1:56,y1:21.6,h:.12,z0:0,color:"mat:blackstone",shape:"box"},{room:"303",label:"Teak bench",x0:51,y0:10,x1:57,y1:11.4,h:1.5,z0:0,color:"#9c6a3c",shape:"box"},{room:"304",label:"Tiered aspen benches, backlit",x0:50.4,y0:4.4,x1:57.6,y1:8.6,h:3,z0:0,color:"mat:aspen",shape:"benches"},{room:"304",label:"Electric rock heater",x0:56.2,y0:.6,x1:57.6,y1:2.4,h:2.6,z0:0,color:"#2f2c29",shape:"heater"},{room:"305",label:"Heated black-stone bench",x0:58.4,y0:5.8,x1:65.6,y1:8.6,h:1.6,z0:0,color:"mat:blackstone",shape:"box"},{room:"306",label:"Lockers + towels",x0:70.6,y0:1,x1:71.6,y1:12,h:7,z0:0,color:"mat:cherry",shape:"box"},{room:"405",label:"Gear racks",x0:18.4,y0:22.4,x1:29.6,y1:24,h:7,z0:0,color:"mat:steel",shape:"box"},{room:"407",label:"Sit-stand desk facing the garden",x0:11,y0:2.6,x1:17,y1:5,h:2.4,z0:0,color:"mat:honey",shape:"standdesk"},{room:"407",label:"Studio desk + mixer, monitors, MPC",x0:18.5,y0:2.2,x1:26.5,y1:4.8,h:2.5,z0:0,color:"mat:honey",shape:"studio"},{room:"407",label:"Digital piano",x0:6,y0:8,x1:7.8,y1:13,h:2.6,z0:0,color:"#1f1f1f",shape:"piano"},{room:"407",label:"E-drum kit",x0:8,y0:14.5,x1:13,y1:19.5,h:3.5,z0:0,color:"#2a2a2a",shape:"drums"},{room:"407",label:"Guitar wall",x0:17.4,y0:20.55,x1:21.8,y1:20.75,h:7.2,z0:3,color:"#a8743f",shape:"guitarwall"},{room:"407",label:"Mic stand",x0:15.5,y0:14,x1:16.3,y1:14.8,h:5.5,z0:0,color:"#9aa0a3",shape:"box"},{room:"407",label:"PA speakers",x0:5.5,y0:4,x1:7,y1:5.6,h:5.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"PA speakers",x0:5.5,y0:15.4,x1:7,y1:17,h:5.5,z0:0,color:"#2a2a2a",shape:"box"},{room:"407",label:"Fabric acoustic panels",x0:26.6,y0:2.5,x1:26.8,y1:19.5,h:4.5,z0:3,color:"#8d8a72",shape:"apanels"},{room:"407",label:"Acoustic ceiling clouds",x0:8,y0:5,x1:24,y1:17,h:.3,z0:10.8,color:"#e8e2d6",shape:"clouds"},{room:"407",label:"Sculpted wood ceiling",x0:5.3,y0:1.3,x1:26.7,y1:20.7,h:.8,z0:12.4,color:"mat:honey",shape:"ribs"},{room:"407",label:"Layered pendants",x0:12.5,y0:3,x1:15.5,y1:4.6,h:1.2,z0:7.2,color:"#efe6d3",shape:"layered"},{room:"407",label:"RGB studio light strip",x0:18.5,y0:20.6,x1:26,y1:20.7,h:.1,z0:9.2,color:"#b04de0",shape:"rgb"},{room:"407",label:"Sofa",x0:19.5,y0:15.2,x1:26.2,y1:18.2,h:2.6,z0:0,color:"#6f7a55",shape:"sofa"},{room:"407",label:"Inner isolation wall (east)",x0:26.9,y0:.6,x1:27.4,y1:21.4,h:12.6,z0:0,color:"mat:plaster",shape:"box"},{room:"407",label:"Inner isolation wall (north)",x0:9.6,y0:20.9,x1:22.6,y1:21.4,h:12.6,z0:0,color:"mat:plaster",shape:"box"},{room:"407",label:"Inner isolation wall (west)",x0:4.6,y0:18.6,x1:5.1,y1:21.4,h:12.6,z0:0,color:"mat:plaster",shape:"box"},{room:"407",label:"Inner isolation wall (west)",x0:4.6,y0:.6,x1:5.1,y1:3.4,h:12.6,z0:0,color:"mat:plaster",shape:"box"},{room:"407",label:"Rug",x0:8,y0:6,x1:17,y1:13,h:.05,z0:0,color:"#cdbfa6",shape:"box"},{room:"102",label:"Honey-oak dining table (8)",x0:39,y0:64,x1:47,y1:68,h:2.5,z0:0,color:"mat:honey",shape:"table"},{room:"102",label:"Windsor chairs (walnut)",x0:39.5,y0:62.4,x1:46.5,y1:63.6,h:1.5,z0:0,color:"mat:honey",shape:"chairs"},{room:"102",label:"Shaker chairs (cherry)",x0:39.5,y0:68.4,x1:46.5,y1:69.6,h:1.5,z0:0,color:"mat:cherry",shape:"chairs"},{room:"102",label:"Paper lantern",x0:41,y0:64.5,x1:45,y1:67.5,h:2.4,z0:6.6,color:"#f4ecdc",shape:"lantern"},{room:"102",label:"Shoji screens",x0:49.7,y0:72.5,x1:50,y1:78.8,h:8,z0:0,color:"#f4ecdc",shape:"shoji"},{room:"103",label:'Conversation pit (18" down)',x0:51.5,y0:61,x1:67.5,y1:73,h:-1.5,z0:0,color:"#e6dfd2",shape:"pit"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:61.3,x1:67.2,y1:63.6,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:70.4,x1:67.2,y1:72.7,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Low modular sofa (pit)",x0:51.8,y0:63.6,x1:54.1,y1:70.4,h:1,z0:-1.5,color:"mat:linen",shape:"sofa"},{room:"103",label:"Coffee table",x0:57,y0:65.2,x1:63,y1:68.8,h:.8,z0:-1.5,color:"#6b4a33",shape:"box"},{room:"103",label:"Paper lanterns",x0:55.5,y0:64,x1:63.5,y1:70,h:2,z0:7,color:"#f4ecdc",shape:"lanterns"},{room:"103",label:"Woven pendant",x0:52.3,y0:75.2,x1:54.3,y1:77.2,h:1.6,z0:6.6,color:"#b48a56",shape:"woven"},{room:"103",label:"Woven pendant",x0:58,y0:75.2,x1:60,y1:77.2,h:1.6,z0:6.6,color:"#b48a56",shape:"woven"},{room:"103",label:"Linear gas fire in plaster plinth",x0:69.4,y0:61,x1:71.4,y1:73,h:1.6,z0:0,color:"mat:plaster",shape:"fire"},{room:"103",label:"Leather lounge chair",x0:52,y0:74.6,x1:55.2,y1:78,h:2.6,z0:0,color:"#8a5a34",shape:"lounge"},{room:"103",label:"Wall-mounted art",x0:71.4,y0:64,x1:71.6,y1:71,h:4.2,z0:3.8,color:"#c9b48e",shape:"art"},{room:"204",label:"Low bench",x0:76.8,y0:29.5,x1:77.6,y1:44.5,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"204",label:"Wall-mounted art",x0:77.55,y0:34,x1:77.75,y1:40,h:3.5,z0:4,color:"#a7b39a",shape:"art"},{room:"205",label:"Washer/dryer",x0:79,y0:56.6,x1:83.2,y1:58.6,h:3,z0:0,color:"#f3f1ec",shape:"box"},{room:"205",label:"Fold counter",x0:83.6,y0:56.6,x1:87.6,y1:58.6,h:3,z0:0,color:"mat:lacq",shape:"box"},{room:"206",label:"Air handler + ERV",x0:94,y0:55,x1:97.6,y1:58.6,h:6,z0:0,color:"mat:steel",shape:"box"},{room:"206",label:"Linen shelves",x0:88.4,y0:49.4,x1:92,y1:51,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"207",label:"Window-seat reading nook",x0:96.2,y0:39,x1:97.8,y1:45,h:1.6,z0:0,color:"mat:cherry",shape:"seat"},{room:"207",label:"Twin bed",x0:89.5,y0:42,x1:93.1,y1:48.6,h:1.4,z0:0,color:"mat:linen",shape:"bed"},{room:"207",label:"Desk by the window",x0:94,y0:36.9,x1:97.8,y1:38.5,h:2.5,z0:0,color:"mat:cherry",shape:"table"},{room:"207",label:"Wardrobe",x0:85.3,y0:36.9,x1:87.3,y1:39.6,h:7,z0:0,color:"mat:lacq",shape:"box"},{room:"207",label:"Low cube shelves + bins",x0:87.6,y0:36.9,x1:91.6,y1:38.2,h:2.4,z0:0,color:"mat:cherry",shape:"cubes"},{room:"207",label:"Beanbag",x0:90,y0:39,x1:92.5,y1:41.5,h:1.3,z0:0,color:"#c98f6a",shape:"beanbags"},{room:"207",label:"Small bouldering wall + mat",x0:93.5,y0:48.65,x1:97.8,y1:48.95,h:8,z0:0,color:"mat:honey",shape:"kidwall"},{room:"208",label:"Tub-shower",x0:78.4,y0:30.4,x1:84.6,y1:33,h:1.8,z0:0,color:"#f3f1ec",shape:"box"},{room:"208",label:"Vanity 1",x0:78.4,y0:35,x1:79.7,y1:39.5,h:2.8,z0:0,color:"mat:cherry",shape:"box"},{room:"208",label:"Vanity 2",x0:83.3,y0:36,x1:84.6,y1:40,h:2.8,z0:0,color:"mat:cherry",shape:"box"},{room:"208",label:"WC",x0:78.4,y0:41.5,x1:80.4,y1:43.5,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"209",label:"Window-seat reading nook",x0:96.2,y0:28,x1:97.8,y1:34,h:1.6,z0:0,color:"mat:cherry",shape:"seat"},{room:"209",label:"Queen bed (guest)",x0:88.5,y0:29.6,x1:93.7,y1:36.3,h:1.6,z0:0,color:"mat:linen",shape:"bed"},{room:"209",label:"Desk by the window",x0:94,y0:24.4,x1:97.8,y1:26,h:2.5,z0:0,color:"mat:cherry",shape:"table"},{room:"209",label:"Low cube shelves + bins",x0:94.4,y0:35.1,x1:97.8,y1:36.3,h:2.4,z0:0,color:"mat:cherry",shape:"cubes"},{room:"209",label:"Small climbing wall + mat",x0:86,y0:24.25,x1:93.5,y1:24.6,h:8,z0:0,color:"mat:honey",shape:"kidwall"},{room:"212",label:"Wardrobe",x0:79,y0:27.8,x1:84.6,y1:29.8,h:7,z0:0,color:"mat:lacq",shape:"box"},{room:"401",label:"Genkan bench",x0:26,y0:53.6,x1:29.6,y1:54.6,h:1.5,z0:0,color:"mat:honey",shape:"box"},{room:"401",label:"Rammed earth wall",x0:19,y0:54.3,x1:25,y1:54.8,h:9,z0:0,color:"mat:rammed",shape:"box"},{room:"401",label:"Wall-mounted art",x0:25,y0:46.25,x1:29,y1:46.45,h:4,z0:3.5,color:"#b8836a",shape:"art"},{room:"402",label:"Coats",x0:18.4,y0:40.4,x1:19.6,y1:45.6,h:7,z0:0,color:"mat:honey",shape:"box"},{room:"403",label:"Integrated stone vanity",x0:25.5,y0:40.3,x1:28.5,y1:41.3,h:2.8,z0:0,color:"mat:stone",shape:"box"},{room:"403",label:"WC",x0:24.4,y0:43.6,x1:26.4,y1:45.6,h:1.4,z0:0,color:"#f3f1ec",shape:"box"},{room:"404",label:"Fusuma closet doors",x0:18.6,y0:28.15,x1:29.4,y1:28.45,h:7,z0:0,color:"#e9dfc9",shape:"fusuma"},{room:"401",label:"Kumiko lattice screen",x0:27.2,y0:47.6,x1:27.45,y1:52.4,h:7,z0:0,color:"mat:honey",shape:"kumiko"},{room:"404",label:"Tokonoma",x0:18.4,y0:32,x1:20,y1:37,h:1,z0:0,color:"#6b4a33",shape:"box"},{room:"404",label:"Low table + zabuton",x0:22.5,y0:32,x1:26.5,y1:36,h:1.2,z0:0,color:"#6b4a33",shape:"lowtable"},{room:"404",label:"Paper andon lantern",x0:27.5,y0:37.6,x1:28.5,y1:38.6,h:2.2,z0:0,color:"#f4ecdc",shape:"andon"},{room:"404",label:"Shoji screens",x0:29.55,y0:30,x1:29.75,y1:34.5,h:8,z0:0,color:"#f4ecdc",shape:"shoji"}],M_=[{id:"living",x0:10,y0:55,x1:72,y1:79,oh:{n:8,s:6,w:4,e:0},type:"butterfly",valley:67,hv:12.6,he:14.6,wall:12},{id:"master",x0:72,y0:59,x1:98,y1:83,oh:{n:6,s:0,w:0,e:4},type:"shed",axis:"y",h0:11.6,h1:13.4,holes:[[93,78,97,82]]},{id:"east",x0:72,y0:14,x1:98,y1:59,oh:{n:0,s:4,w:6,e:4},type:"shed",axis:"x",h0:11.8,h1:10.6},{id:"south",x0:28,y0:0,x1:72,y1:27,oh:{n:6,s:6,w:0,e:0},type:"shed",axis:"y",h0:14,h1:12.6},{id:"office",x0:4,y0:0,x1:28,y1:22,oh:{n:4,s:6,w:4,e:1},type:"shed",axis:"y",h0:16,h1:14.6,holes:[[13,9,19,14]]},{id:"west",x0:18,y0:22,x1:36,y1:55,oh:{n:0,s:0,w:5,e:6},type:"shed",axis:"x",h0:11.8,h1:10.6}],E_={pool:{x0:54,y0:-22,x1:88,y1:-10},pooldeck:{x0:48,y0:-28,x1:98,y1:0},lane:{x0:-32,y0:-16,x1:43,y1:-8},outdoor_shower:{x0:72.5,y0:4,x1:77.5,y1:10},veg:{x0:-30,y0:64,x1:-6,y1:86},bikes:{x0:4,y0:62,x1:7.5,y1:72},carport:{x0:-44,y0:30,x1:-20,y1:54},entrycourt:{x0:-20,y0:26,x1:18,y1:55},pergola:{x0:19,y0:81,x1:37,y1:95},veranda:{x0:36,y0:79,x1:72,y1:87},firepit:{cx:58,cy:99,r:7},zen:{x0:39,y0:30,x1:52,y1:40},water:{x0:57,y0:31,x1:68,y1:39},lawn:{x0:39,y0:42,x1:69,y1:50},shadetree:{cx:53,cy:45},maples:[[66.5,47.5],[40.5,46.5],[39,52.3],[62,51.8]],lanterns:[[55,40.6],[38.5,41],[69.5,42]],cshower:{x0:66.5,y0:27.5,x1:71.5,y1:31.5},bale:{x0:90,y0:-27,x1:97,y1:-19,h:9},pullup:{x0:45,y0:-7,x1:48.5,y1:-5},orchard:[[-56,70],[-46,70],[-56,80],[-46,80],[-56,90],[-46,90],[-36,94]],walkway:{x0:-20,y0:48,x1:13,y1:54,h:9},frontgarden:[[-16,38,-2,46],[-16,57,2,62]],bathgarden:{x0:98,y0:69,x1:106,y1:83},climb:{x0:-22,y0:0,x1:-4,y1:18,oh:5,h:17,wall:12},util:{x0:100,y0:-6,x1:136,y1:24,gate:[112,124]},tanks:[[106,18,5],[117,18,5]],watertreat:{x0:124,y0:13,x1:135,y1:23},atu:{x0:103,y0:-3,x1:115,y1:3},power:{x0:125,y0:-4,x1:135,y1:5},condensers:[[119,1],[119,5],[119,9]],drainfield:{x0:30,y0:-74,x1:90,y1:-52},well:{cx:140,cy:95},service:[[-62,2],[-62,-38],[118,-38],[118,-6]]},w_={"Living Pavilion":"whiteplaster","Sleeping Wing":"charred","Wellness + Gym Wing":"charred","Studio + Arrival":"whiteplaster"},T_={401:"rammed"},A_=5272,R_={x0:36,y0:27,x1:72,y1:55},C_=[{id:"C1",name:"Climbing Pavilion",x0:-22,y0:0,x1:-4,y1:18,w:18,d:18,area:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. 16-ft-wide, 12-ft-high kids' bouldering wall on the north side facing the sprint lane, over a 12-inch poured-rubber soft-fall surface. Sits in the active zone with the gym, sprint lane and a second bike rack."}],Tt={frameless:y_,rooms:v_,walls:b_,furn:S_,roofs:M_,site:E_,clad:w_,cladOvr:T_,total:A_,courtyard:R_,covered:C_},pt=49,Et=44,hn=(n,e,t=0)=>new O(n-pt,t,-(e-Et)),gu=new An(new O(0,-1,0),1e5),xu=[gu];function P_(){const n=x_(),e={},t=i=>new Dt(i);e.stucco=t({map:n.stucco,roughness:.92}),e.plaster=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.4,.4),roughness:.96}),e.charred=t({map:n.charred,normalMap:n.charredN,roughness:.82}),e.rammed=t({map:n.rammed,normalMap:n.rammedN,normalScale:new re(.6,.6),roughness:.95}),e.stone=t({map:n.stone,roughness:.8,color:16314592}),e.flag=t({map:n.flag,normalMap:n.flagN,roughness:.88}),e.plinth=t({map:n.plinth,roughness:.9}),e.oak=t({map:n.oak,roughness:.6}),e.honey=t({map:n.honey,normalMap:n.honeyN,normalScale:new re(.5,.5),roughness:.48,color:9067840}),e.cherry=t({map:n.honey,normalMap:n.honeyN,normalScale:new re(.5,.5),roughness:.45,color:13666914}),e.herring=t({map:n.herring,normalMap:n.herringN,normalScale:new re(.6,.6),roughness:.5,color:9396804}),e.stonetile=t({map:n.stonetile,normalMap:n.stonetileN,normalScale:new re(.5,.5),roughness:.62,color:16183005}),e.bluestone=t({map:n.stonetile,normalMap:n.stonetileN,roughness:.75,color:9279907}),e.basalt=t({map:n.stonetile,normalMap:n.stonetileN,roughness:.8,color:5922144}),e.granite=t({map:n.stone,roughness:.92,color:12894392}),e.slate=t({map:n.flag,normalMap:n.flagN,roughness:.85,color:7831946}),e.soapstone=t({map:n.marble,roughness:.6,color:8358533}),e.earth=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.7,.7),roughness:.97,color:13806980}),e.whiteplaster=t({map:n.lime,normalMap:n.limeN,normalScale:new re(.4,.4),roughness:.94,color:16777215}),e.bronze=t({color:5127468,roughness:.4,metalness:.65}),e.blackstone=t({map:n.blackstone,normalMap:n.blackstoneN,normalScale:new re(.4,.4),roughness:.42}),e.marble=t({map:n.marble,roughness:.18}),e.zellige=t({map:n.zellige,normalMap:n.zelligeN,roughness:.12,metalness:.05}),e.aspen=t({map:n.aspen,normalMap:n.aspenN,normalScale:new re(.4,.4),roughness:.7}),e.pooltile=t({map:n.pooltile,normalMap:n.pooltileN,roughness:.3}),e.linen=t({map:n.linen,color:15920352,roughness:.95}),e.lacq=t({color:16052973,roughness:.32}),e.steel=t({color:12106942,roughness:.3,metalness:.85}),e.deck=t({map:n.deck,roughness:.8}),e.soffit=t({map:n.soffit,roughness:.75}),e.tatami=t({map:n.tatami,normalMap:n.tatamiN,roughness:.9}),e.rubber=t({map:n.rubber,roughness:.95}),e.seam=t({map:n.seam,normalMap:n.seamN,roughness:.42,metalness:.35,color:15132390}),e.gravel=t({map:n.gravel,normalMap:n.gravelN,roughness:1}),e.turf=t({map:n.turf,roughness:1}),e.meadow=t({map:n.meadow,roughness:1}),e.cedar=t({map:n.cedar,roughness:.8}),e.concrete=t({map:n.concrete,roughness:.9}),e.frame=t({color:2039067,roughness:.45,metalness:.5}),e.glass=new zf({color:13624294,roughness:.05,metalness:0,transparent:!0,opacity:.22,depthWrite:!1,side:Rn,emissive:0}),e.sheer=t({color:16513006,roughness:1,transparent:!0,opacity:.45,side:Rn,depthWrite:!1}),e.paper=t({color:16183264,roughness:1,emissive:16767392,emissiveIntensity:.25}),e.paper.name="lamp",e.lamp=t({color:16773590,emissive:16762746,emissiveIntensity:.6}),e.lamp.name="lamp",e.rgb=t({color:11554272,emissive:10173439,emissiveIntensity:1.2}),e.mirror=t({color:13226966,roughness:.04,metalness:.9}),e.brass=t({color:11833164,roughness:.48,metalness:.85}),e.leather=t({color:9067060,roughness:.55}),e.water=t({color:5087155,roughness:.08,metalness:.1,transparent:!0,opacity:.88}),e.poolwater=t({color:4168338,roughness:.05,metalness:.1,transparent:!0,opacity:.8}),e.white=t({color:15855335,roughness:.6}),e.dark=t({color:2894375,roughness:.7}),e.fir=t({color:13146726,roughness:.7}),e.teak=t({color:10250812,roughness:.6}),e.highlight=new ar({color:7700575,transparent:!0,opacity:.28,depthWrite:!1}),e.c={};for(const i of["cherry","bluestone","basalt","granite","slate","soapstone","earth","whiteplaster","bronze","brass","teak","stucco","plaster","charred","rammed","cedar","stone","frame","glass","oak","fir","honey","herring","stonetile","blackstone","marble","zellige","aspen","linen","lacq","steel","sheer","paper","lamp","rgb","mirror","brass","leather","water","rubber","tatami","white","dark","teak","flag"]){const s=e[i].clone();s.name=e[i].name,s.clippingPlanes=xu,s.clipShadows=!0,e.c[i]=s}return e.T=n,e}const uo={};function ue(n){if(!uo[n]){const e=new Dt({color:new qe(n),roughness:.75});e.clippingPlanes=xu,e.clipShadows=!0,uo[n]=e}return uo[n]}let ia=null;function L_(n){return typeof n=="string"&&n.startsWith("mat:")?ia.c[n.slice(4)]||ia[n.slice(4)]:ue(n)}function Oi(n,e,t){const i=new wi(n,e,t),s=i.attributes.uv,r=[[t,e],[t,e],[n,t],[n,t],[n,e],[n,e]];for(let a=0;a<6;a++)for(let o=0;o<4;o++){const c=a*4+o;s.setXY(c,s.getX(c)*r[a][0],s.getY(c)*r[a][1])}return i}class D_{constructor(){this.b=new Map}add(e,t,i){const s=e+"|"+t.uuid;this.b.has(s)||this.b.set(s,{layer:e,mat:t,geos:[]}),this.b.get(s).geos.push(i.index?i.toNonIndexed():i)}build(e,t={}){for(const{layer:i,mat:s,geos:r}of this.b.values()){const a=r.map(l=>{const u=new Pt;return u.setAttribute("position",l.attributes.position),u.setAttribute("normal",l.attributes.normal),l.attributes.uv?u.setAttribute("uv",l.attributes.uv):u.setAttribute("uv",new un(new Float32Array(l.attributes.position.count*2),2)),u}),o=__(a,!1),c=new Ht(o,s),h=s.transparent;c.castShadow=!h&&i!=="ground",c.receiveShadow=!s.transparent||s===void 0,i==="glass"&&(c.renderOrder=2,c.castShadow=!1),e[i].add(c)}}}const Ft=new D_;function E(n,e,t,i,s,r,a,o,c){const h=Math.abs(s-t),l=Math.abs(r-i),u=Math.abs(o-a);if(h<.001||l<.001||u<.001)return;let d=Oi(h,u,l);if(d.translate((t+s)/2-pt,(a+o)/2,-((i+r)/2-Et)),c){d=d.toNonIndexed();const f=d.attributes.position;for(let p=0;p<f.count;p++)f.setY(p,f.getY(p)+c(f.getX(p)+pt,Et-f.getZ(p)));d.computeVertexNormals()}if(Array.isArray(e)){const f=[0,1,2,3,4,5],p=d.index?d.toNonIndexed():d;f.forEach(_=>{const g=new Pt;for(const m of["position","normal","uv"]){const S=p.attributes[m];g.setAttribute(m,new un(S.array.slice(_*6*S.itemSize,(_+1)*6*S.itemSize),S.itemSize))}Ft.add(n,e[_],g)})}else Ft.add(n,e,d)}function ke(n,e,t,i,s,r,a,o=20,c){const h=new xn(c??s,s,a-r,o);h.translate(t-pt,(r+a)/2,-(i-Et)),Ft.add(n,e,h)}function Vt(n,e,t,i,s,r){t.translate(i-pt,r,-(s-Et)),Ft.add(n,e,t)}const Il=Tt.roofs;function $r(n,e,t){const[i,s,r]=n.axis==="x"?[e,n.x0,n.x1]:[t,n.y0,n.y1];return n.h0+(n.h1-n.h0)*(i-s)/(r-s)}function Vi(n,e){let t=null;for(const i of Il){if(n<i.x0-.01||n>i.x1+.01||e<i.y0-.01||e>i.y1+.01)continue;let s;if(i.type==="flat")s=i.h-.6;else if(i.type==="shed")s=$r(i,n,e)-.6;else{const r=i.y1+i.oh.n,a=i.y0-i.oh.s;s=e>=i.valley?i.hv+(i.he-i.hv)*(e-i.valley)/(r-i.valley):i.hv+(i.he-i.hv)*(i.valley-e)/(i.valley-a)}t=t===null?s:Math.max(t,s)}return t??10}function I_(n){for(const e of Il){const t=e.x0-e.oh.w,i=e.x1+e.oh.e,s=e.y0-e.oh.s,r=e.y1+e.oh.n;if(e.type==="shed"){const a=(l,u)=>$r(e,l,u)-(e.axis==="x"?e.h0+(e.h1-e.h0)*((e.x0+e.x1)/2-e.x0)/(e.x1-e.x0):e.h0+(e.h1-e.h0)*((e.y0+e.y1)/2-e.y0)/(e.y1-e.y0)),o=$r(e,(e.x0+e.x1)/2,(e.y0+e.y1)/2),c=[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred];let h=[[t,s,i,r]];for(const[l,u,d,f]of e.holes||[]){h=[[t,s,i,u],[t,f,i,r],[t,u,l,f],[d,u,i,f]];const p=$r(e,(l+d)/2,(u+f)/2);E("roof",n.frame,l-.25,u-.25,d+.25,f+.25,p+.35,p+.75),E("roof",n.glass,l,u,d,f,p+.7,p+.78)}for(const[l,u,d,f]of h)E("roof",c,l,u,d,f,o-.6,o+.4,a);E("roof",n.dark,t-.05,s-.05,i+.05,r+.05,o+.35,o+.45,a)}else if(e.type==="flat"){const a=e.h-.6,o=e.h+.4;E("roof",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],t,s,i,r,a,o),E("roof",n.dark,t-.05,s-.05,i+.05,r+.05,o-.05,o+.05)}else{const o=i-t,c=(t+i)/2-pt,h=(u,d,f,p,_,g,m,S=0)=>{const R=-(u-Et),b=-(f-Et),T=Math.hypot(R-b,d-p),A=Oi(g??o,.9,T),C=Math.atan2(p-d,R-b);A.rotateX(C),A.translate(m??c,(d+p)/2+.9/2-S,(R+b)/2);const v=A.toNonIndexed();_.forEach((w,N)=>{const U=new Pt;for(const x of["position","normal","uv"]){const I=v.attributes[x];U.setAttribute(x,new un(I.array.slice(N*6*I.itemSize,(N+1)*6*I.itemSize),I.itemSize))}Ft.add("roof",w,U)})},l=[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred];h(s,e.he,e.valley,e.hv,l),h(e.valley,e.hv,r,e.he,l);for(let u=e.x0+10;u<e.x1;u+=8){const d=[n.c.fir,n.c.fir,n.c.fir,n.c.fir,n.c.fir,n.c.fir];h(e.y0,Vi(u,e.y0),e.valley,e.hv,d,.55,u-pt,1.1),h(e.valley,e.hv,e.y1,Vi(u,e.y1),d,.55,u-pt,1.1)}E("roof",n.frame,t,e.valley-.4,i,e.valley+.4,e.hv+.6,e.hv+.95)}}}function N_(n){const e=Tt.rooms.find(t=>t.id===n);return e&&(Tt.cladOvr[n]||Tt.clad[e.wing])||"stucco"}const sa=[];function U_(n){const e=[...n.feats].sort((s,r)=>s.a-r.a),t=[];let i=n.a;for(const s of e)s.a>i+1e-6&&t.push({a:i,b:s.a,k:"solid"}),t.push({a:s.a,b:s.b,k:s.k,x:s.x}),i=s.b;return n.b>i+1e-6&&t.push({a:i,b:n.b,k:"solid"}),t}const ra=(n,e)=>n.o==="h"?[e,n.c]:[n.c,e];function fo(n,e,t,i,s,r,a,o,c){const h=new fa;if(h.moveTo(i,r),h.lineTo(s,r),a!=null)h.lineTo(s,a),h.lineTo(i,a);else{const d=[s];if(t.o==="v")for(const _ of Il)_.type==="butterfly"&&t.c>=_.x0-.01&&t.c<=_.x1+.01&&_.valley>i&&_.valley<s&&d.unshift(_.valley);d.sort((_,g)=>g-_);for(const _ of d){const[g,m]=ra(t,_);h.lineTo(_,Vi(g,m))}const[f,p]=ra(t,i);h.lineTo(i,Vi(f,p))}h.closePath();const l=new Cl(h,{depth:c-o,bevelEnabled:!1,steps:1}),u=new at;t.o==="h"?u.makeTranslation(-pt,0,-(t.c-Et)-c):(u.makeRotationY(Math.PI/2),u.premultiply(new at().makeTranslation(t.c-pt+o,0,Et))),l.applyMatrix4(u),Ft.add(n,e,l)}function Gr(n,e,t,i,s,r){const a=e.ext?.75:.45;let o=t,c=i;if(e.ext&&(Math.abs(t-e.a)<1e-6&&(o-=a/2),Math.abs(i-e.b)<1e-6&&(c+=a/2)),e.ext){const h=e.pos||e.neg,l=e.pos?-1:1,u=n.c[N_(h)],d=h==="304"?n.c.cedar:h==="305"?n.c.blackstone:h==="303"?n.c.earth:n.c.plaster,f=l>0?[0,a/2]:[-a/2,0],p=l>0?[-a/2,0]:[0,a/2];fo("walls",u,e,o,c,s,r,f[0],f[1]),fo("walls",d,e,o,c,s,r,p[0],p[1])}else{const h=l=>e.pos===l||e.neg===l;fo("walls",h("304")?n.c.cedar:h("305")?n.c.blackstone:h("303")?n.c.earth:n.c.plaster,e,t-a/2+.001,i+a/2-.001,s,r,-a/2,a/2)}}function vh(n,e,t,i,s,r,a){const c=(u,d,f,p,_,g,m,S)=>{e.o==="h"?E(S,m,u,e.c+_,d,e.c+g,f,p):E(S,m,e.c+_,u,e.c+g,d,f,p)};if(c(t,i,s,r,-.08/2,.08/2,n.c.glass,"glass"),c(t,i,s,s+.25,-.18,.18,n.c.bronze,"walls"),c(t,i,r-.3,r,-.18,.18,n.c.bronze,"walls"),(Tt.frameless||[]).some(([u,d,f,p])=>u===e.o&&Math.abs(d-e.c)<.01&&t<p&&i>f))return void sa.push({s:e,a:t,b:i});const l=Math.max(1,Math.round((i-t)/(a?5.5:8)));for(let u=0;u<=l;u++){const d=t+(i-t)*u/l;c(d-.09,d+.09,s,r,-.15,.15,n.c.bronze,"walls")}sa.push({s:e,a:t,b:i})}function O_(n){for(const e of Tt.walls)for(const t of U_(e)){const[i,s]=ra(e,(t.a+t.b)/2),r=Vi(i,s);if(t.k==="solid")Gr(n,e,t.a,t.b,0,null),sa.push({s:e,a:t.a,b:t.b});else if(t.k!=="open")if(["door","exdoor","slide","front"].includes(t.k)){const a=t.k==="front"?9:t.k==="slide"?8:7.5;if(r>a+.05&&Gr(n,e,t.a,t.b,a,null),t.k==="front"){const c=t.b-t.a,h=Oi(c*.62,a-.05,.22);h.translate(c*.31,a/2,0),h.rotateY(-.55);const[l,u]=ra(e,t.a+c*.19);h.translate(l-pt,0,-(u-Et)),Ft.add("walls",n.c.bronze,h)}const o=["201","203","207","209","212","213","404"];if((t.k==="door"||t.k==="slide")&&(o.includes(e.pos)||o.includes(e.neg))&&!["405","407"].includes(e.pos)&&!["405","407"].includes(e.neg)){const c=t.b-t.a,h=Math.max(1.6,c*.5),l=.24,u=(p,_,g,m,S,R,b)=>{e.o==="h"?E("furn",b,p,e.c+S,_,e.c+R,g,m):E("furn",b,e.c+S,p,e.c+R,_,g,m)},d=t.a,f=t.a+h;u(d,f,.05,a-.1,l-.02,l+.02,n.c.paper),u(d,f,0,.15,l-.06,l+.06,n.c.cherry),u(d,f,a-.2,a-.05,l-.06,l+.06,n.c.cherry);for(const p of[d,d+h/2-.04,f-.08])u(p,p+.08,0,a-.05,l-.06,l+.06,n.c.cherry);for(let p=1;p<5;p++){const _=(a-.1)*p/5;u(d,f,_-.03,_+.03,l-.05,l+.05,n.c.cherry)}}}else if(t.k==="window"){const[a,o]=t.x;Gr(n,e,t.a,t.b,0,a),vh(n,e,t.a,t.b,a,Math.min(o,r),!1),r>o+.05&&Gr(n,e,t.a,t.b,o,null)}else(t.k==="glass"||t.k==="fixed")&&vh(n,e,t.a,t.b,0,r,t.k==="glass")}}const F_={oak:"oak",honey:"honey",herring:"herring",stonetile:"stonetile",blackstone:"blackstone",aspen:"aspen",stone:"stone",tatami:"tatami",rubber:"rubber",cedar:"cedar",concrete:"concrete"},_u=[];function k_(n,e){const t=new ar({visible:!1});for(const i of Tt.rooms){const s=n[F_[i.floor]]||n.oak,r=[n.plinth,n.plinth,s,n.plinth,n.plinth,n.plinth],a=Tt.furn.find(l=>l.room===i.id&&l.shape==="pit");a?(E("floors",r,i.x0,i.y0,i.x1,a.y0,-1.8,0),E("floors",r,i.x0,a.y1,i.x1,i.y1,-1.8,0),E("floors",r,i.x0,a.y0,a.x0,a.y1,-1.8,0),E("floors",r,a.x1,a.y0,i.x1,a.y1,-1.8,0),E("floors",[n.herring,n.herring,n.herring,n.herring,n.herring,n.herring],a.x0,a.y0,a.x1,a.y1,-2,-1.5)):E("floors",r,i.x0,i.y0,i.x1,i.y1,-1.8,0);const o=Vi((i.x0+i.x1)/2,(i.y0+i.y1)/2),c=new wi(i.w-.2,o,i.d-.2);c.translate((i.x0+i.x1)/2-pt,o/2,-((i.y0+i.y1)/2-Et));const h=new Ht(c,t);h.userData.room=i.id,e.pick.add(h),_u.push(h)}}const k="furn",Kt="detail";function B_(n){return Tt.rooms.find(e=>e.id===n)}function pi(n,e,t,i,s,r,a=1,o=12){const c=new Hi(r,o,Math.max(6,o/2));c.scale(1,a,1),Vt(n,e,c,t,i,s)}function z_(n,e,t){const i=B_(e.room),s=e.y0-i.y0<i.y1-e.y1,r=s?e.y0:e.y1,a=s?1:-1;E(k,n.c.dark,e.x0+.3,e.y0+.3,e.x1-.3,e.y1-.3,0,.35),E(k,t,e.x0,e.y0,e.x1,e.y1,.35,e.h-.35),E(k,n.c.white,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,e.h-.35,e.h),E(k,ue("#d8cdb8"),e.x0-.05,Math.min(r+a*2.2,r+a*(e.y1-e.y0)*.95),e.x1+.05,Math.max(r+a*2.2,r+a*(e.y1-e.y0)*.95),e.h-.3,e.h+.12);const o=e.x1-e.x0>4.5?2:1;for(let c=0;c<o;c++){const h=(e.x1-e.x0-.6)/o,l=e.x0+.3+c*h;E(k,n.c.linen,l+.1,Math.min(r+a*.3,r+a*1.6),l+h-.1,Math.max(r+a*.3,r+a*1.6),e.h,e.h+.45)}}function G_(n,e,t){const i=Math.max(1,Math.round((n.x1-n.x0)/2.2)),s=1.6;for(let r=0;r<i;r++){const a=n.x0+(n.x1-n.x0)*(r+.5)/i;E(k,e,a-s/2,n.y0,a+s/2,n.y1,1.45,1.6),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([c,h])=>E(k,ue("#6b4a33"),a+c*(s/2-.1)-.05,h<0?n.y0+.05:n.y1-.15,a+c*(s/2-.1)+.05,h<0?n.y0+.15:n.y1-.05,0,1.45));const o=t?n.y0:n.y1-.12;E(k,ue("#6b4a33"),a-s/2,o,a+s/2,o+.12,1.6,2.9)}}function po(n,e,t,i,s,r,a){E(k,n.c.frame,e+.2,t+.2,i-.2,s-.2,0,.5),E(k,r,e,t,i,s,.5,1.25);const o=a?t:s-.6,c=a?t+.6:s;E(k,r,e,o,i,c,1.25,2.7),E(k,r,e,t,e+.35,s,1.25,1.9),E(k,r,i-.35,t,i,s,1.25,1.9)}function H_(n,e,t,i,s){const r=new xn(.62,.62,s,18);r.rotateX(Math.PI/2),Vt(k,ue(t),r,n,i,e);const a=new xn(.48,.48,s,18);a.rotateX(Math.PI/2),Vt(k,ue(t),a,n,i,e+.75),E(k,ue("#3a2a20"),n-.08,i-s/2,n+.08,i+s/2,e+1,e+2.6),E(k,ue("#2a1d15"),n-.13,i-s/2,n+.13,i+s/2,e+2.6,e+3)}function V_(n){ia=n;for(const e of Tt.furn){if(e.shape==="pit")continue;const t=L_(e.color),i=e.z0,s=e.z0+Math.max(e.h,.04),r=(e.x0+e.x1)/2,a=(e.y0+e.y1)/2,o=e.x1-e.x0,c=e.y1-e.y0,h=o>=c;switch(e.shape){case"island":E(k,n.c.lacq,e.x0+.4,e.y0+1.2,e.x1-.4,e.y1-.1,0,2.85),E(k,n.c.soapstone,e.x0+.15,e.y0,e.x1-.15,e.y1,2.85,3),E(k,t,e.x0,e.y0,e.x0+.15,e.y1,0,3),E(k,t,e.x0,e.y0+.2,e.x0+.15,e.y1,0,2.85),E(k,t,e.x1-.15,e.y0,e.x1,e.y1,0,3);break;case"stools":{const l=Math.round(o/1.7);for(let u=0;u<l;u++){const d=e.x0+o*(u+.5)/l;ke(k,t,d,a,.62,s-.12,s,16),ke(k,n.c.frame,d,a,.07,0,s-.12,6);const f=new Ui(.4,.035,4,16);f.rotateX(Math.PI/2),Vt(k,n.c.brass,f,d,a,.85),ke(k,n.c.frame,d,a,.5,0,.05,14)}break}case"range":E(k,t,e.x0,e.y0,e.x1,e.y1,0,s-.05),E(k,n.c.dark,e.x0+.1,e.y0+.1,e.x1-.1,e.y1-.2,s-.05,s+.05),E(k,n.c.dark,e.x0+.3,e.y0-.02,e.x1-.3,e.y0+.02,.6,2.2);for(let l=0;l<5;l++)ke(Kt,n.c.frame,e.x0+.4+l*.55,e.y0-.05,.08,2.6,2.75,8);break;case"hood":E(k,n.c.glass,e.x0,e.y0,e.x1,e.y1,i,s),E(k,n.c.steel,e.x0+.1,e.y0+.1,e.x1-.1,e.y1-.1,i-.06,i),E(k,n.c.steel,r-.5,e.y1-1.1,r+.5,e.y1-.05,s,12);break;case"sink":E(k,t,e.x0,e.y0,e.x1,e.y0+.12,i,i+.95),E(k,t,e.x0,e.y0,e.x1,e.y1-.2,i,i+.12),E(k,n.c.dark,e.x0+.15,e.y0+.15,e.x1-.15,e.y1-.3,i+.12,i+.13),ke(k,n.c.brass,r,e.y1-.15,.06,3,4.2,8),E(k,n.c.brass,r-.05,e.y1-.95,r+.05,e.y1-.15,4.1,4.2),ke(k,n.c.brass,r,e.y1-.95,.05,3.85,4.15,8);break;case"shelves":for(let l=0;l<3;l++){const u=i+l*1.3;E(k,t,e.x0,e.y0,e.x1,e.y1,u,u+.13);for(let d=0;d<5;d++){const f=e.y0+.4+d*(c-.8)/4;(d+l)%3?ke(Kt,n.c.white,r,f,.28,u+.13,u+.55+d%2*.25,10):E(Kt,ue("#c4b49a"),r-.2,f-.3,r+.2,f+.3,u+.13,u+.9)}}break;case"pendants":{for(let l=0;l<3;l++){const u=e.x0+o*(l+.5)/3;l%2===0?(pi(k,n.c.glass,u,a,i+.5,.62,1.1),pi(k,n.c.lamp,u,a,i+.45,.18,1)):pi(k,n.c.paper,u,a,i+.5,.8,1.15),ke(k,n.c.brass,u,a,.02,i+1.1,11.8,4)}break}case"woven":{const l=new Hi(Math.min(o,c)/2,18,10,0,Math.PI*2,0,Math.PI*.62);Vt(k,t,l,r,a,i);for(let u=0;u<4;u++){const d=Math.min(o,c)/2*(.95-u*.15);ke(k,ue("#8a6438"),r,a,d,i+.15+u*.28,i+.2+u*.28,18)}ke(k,n.c.lamp,r,a,.25,i-.3,i-.1,10),ke(k,n.c.frame,r,a,.02,i+e.h*.6,11.8,4);break}case"fusuma":{const u=o/4;for(let d=0;d<4;d++){const f=e.x0+d*u;E(k,t,f+.04,e.y0,f+u-.04,e.y1,.1,s-.1),E(k,n.c.cherry,f,e.y0-.02,f+.06,e.y1+.02,0,s),ke(k,n.c.dark,f+u-.5,e.y0-.03,.12,3.2,3.5,10)}E(k,n.c.cherry,e.x0,e.y0-.02,e.x1,e.y1+.02,s-.12,s);break}case"kumiko":{E(k,n.c.paper,e.x0+.08,e.y0,e.x1-.08,e.y1,.4,s-.1);const l=c>o,u=l?c:o;for(let d=0;d<=Math.round(u/.5);d++){const f=(l?e.y0:e.x0)+d*u/Math.round(u/.5);l?E(k,t,e.x0-.02,f-.03,e.x1+.02,f+.03,.4,s):E(k,t,f-.03,e.y0-.02,f+.03,e.y1+.02,.4,s)}for(let d=.4;d<=s;d+=.5)E(k,t,e.x0-.02,e.y0-.02,e.x1+.02,e.y1+.02,d,d+.05);E(k,t,e.x0-.05,e.y0,e.x1+.05,e.y1,0,.4);break}case"table":E(k,t,e.x0,e.y0,e.x1,e.y1,s-.15,s),[[e.x0+.4,e.y0+.4],[e.x1-.6,e.y0+.4],[e.x0+.4,e.y1-.6],[e.x1-.6,e.y1-.6]].forEach(([l,u])=>E(k,t,l,u,l+.2,u+.2,0,s-.15));break;case"chairs":G_(e,t,e.y0>70);break;case"lantern":pi(k,n.c.paper,r,a,i+e.h/2,Math.min(o,c)/2,e.h/Math.min(o,c)),ke(k,n.c.frame,r,a,.02,i+e.h,11.8,4);break;case"lanterns":[[e.x0+1.5,e.y0+2,1.3,7.6],[r,a,1.8,7],[e.x1-1.5,e.y1-2,1.1,8]].forEach(([l,u,d,f])=>{pi(k,n.c.paper,l,u,f,d,1.15),ke(k,n.c.frame,l,u,.02,f+d,11.8,4)});break;case"shoji":{const l=Math.max(1,Math.round((h?o:c)/3));for(let u=0;u<l;u++){const d=u/l,f=(u+1)/l,p=u%2*.25,[_,g]=h?[e.x0+o*d,e.x0+o*f]:[e.y0+c*d,e.y0+c*f],m=(S,R,b,T,A,C,v)=>h?E(k,v,S,e.y0+A,R,e.y0+C,b,T):E(k,v,e.x0+A,S,e.x0+C,R,b,T);m(_,g,.1,s-.2,p+.07,p+.13,n.c.paper);for(let S=0;S<=3;S++){const R=_+(g-_)*S/3;m(R-.04,R+.04,0,s,p,p+.2,ue("#5a4632"))}for(let S=0;S<=s;S+=1)m(_,g,S,S+.06,p,p+.2,ue("#5a4632"))}break}case"sofa":{const l=Math.max(1,Math.round((h?o:c)/2.8));for(let u=0;u<l;u++){const d=u/l,f=(u+1)/l,[p,_,g,m]=h?[e.x0+o*d+.04,e.y0,e.x0+o*f-.04,e.y1]:[e.x0,e.y0+c*d+.04,e.x1,e.y0+c*f-.04];E(k,t,p,_,g,m,i,i+e.h*.75),E(k,t,p+.05,_+.05,g-.05,m-.05,i+e.h*.75,i+e.h)}e.room==="407"&&E(k,t,e.x0,e.y1-.8,e.x1,e.y1,i,i+2.6);break}case"fire":E(k,t,e.x0,e.y0,e.x1,e.y1,0,s),E(k,n.c.dark,e.x0-.02,e.y0+1.5,e.x0+.4,e.y1-1.5,.6,1.3);{const l=new Dt({color:16747069,emissive:16738842,emissiveIntensity:1.4});E(k,l,e.x0-.03,e.y0+1.8,e.x0+.1,e.y1-1.8,.65,.95)}break;case"lounge":po(n,e.x0,e.y0,e.x1,e.y1,n.c.leather,!1),E(k,n.c.leather,e.x0+.4,e.y0-1.8,e.x1-.4,e.y0-.3,.3,1.25);break;case"lounge2":po(n,e.x0,e.y0,e.x0+2.6,e.y1,t,!0),po(n,e.x1-2.6,e.y0,e.x1,e.y1,t,!0),ke(k,n.c.honey,r,a,.7,0,1.6,16);break;case"art":{const[u]=h?[[e.x0-.2,e.y0,e.x1+.2,e.y1],0]:[[e.x0,e.y0-.2,e.x1,e.y1+.2],0];E(k,n.c.frame,u[0],u[1],u[2],u[3],i-.2,s+.2);const d=h?[e.x0,e.y0-.03,e.x1,e.y1+.03]:[e.x0-.03,e.y0,e.x1+.03,e.y1];E(k,t,d[0],d[1],d[2],d[3],i,s);const f=h?o:c;for(let p=0;p<3;p++){const _=.15+p*.28,g=["#2f4a3c","#b8643f","#e8dfc9"][p];h?E(k,ue(g),e.x0+f*_,e.y0-.05,e.x0+f*(_+.22),e.y1+.05,i+.6+p*.5,s-.8+p*.2):E(k,ue(g),e.x0-.05,e.y0+f*_,e.x1+.05,e.y0+f*(_+.22),i+.6+p*.5,s-.8+p*.2)}break}case"bed":z_(n,e,t);break;case"curtain":{E(k,n.c.sheer,e.x0+1.6,e.y0,e.x1-1.6,e.y1,i,s);for(const l of[e.x0,e.x1-1.6])for(let u=0;u<6;u++)E(k,n.c.linen,l+u*.27,e.y0-u%2*.15,l+u*.27+.22,e.y1+.1-u%2*.15,i,s);E(k,n.c.frame,e.x0,e.y0,e.x1,e.y1,s,s+.08);break}case"fan":ke(k,n.c.frame,r,a,.05,i,10.6,6),ke(k,t,r,a,.35,i-.15,i+.15,14);for(let l=0;l<3;l++){const u=Oi(2.6,.06,.5);u.translate(1.6,0,0),u.rotateY(l*Math.PI*2/3+.3),Vt(k,t,u,r,a,i)}break;case"cove":{E(k,n.c.lamp,e.x0,e.y0,e.x1,e.y0+.3,i,s),E(k,n.c.lamp,e.x0,e.y1-.3,e.x1,e.y1,i,s),E(k,n.c.lamp,e.x0,e.y0,e.x0+.3,e.y1,i,s),E(k,n.c.lamp,e.x1-.3,e.y0,e.x1,e.y1,i,s);break}case"tub":{E(k,t,e.x0,e.y0,e.x1,e.y1,0,.3),E(k,t,e.x0,e.y0,e.x1,e.y0+.28,0,s),E(k,t,e.x0,e.y1-.28,e.x1,e.y1,0,s),E(k,t,e.x0,e.y0,e.x0+.28,e.y1,0,s),E(k,t,e.x1-.28,e.y0,e.x1,e.y1,0,s),E(k,n.c.water,e.x0+.28,e.y0+.28,e.x1-.28,e.y1-.28,.3,s-.35),E(k,t,e.x0+.28,e.y0+.28,e.x0+1.4,e.y1-.28,.3,1.2);break}case"vanity":E(k,t,e.x0,e.y0,e.x1,e.y1,i,i+e.h),E(k,n.c.blackstone,e.x0-.05,e.y0-.05,e.x1,e.y1+.05,i+e.h,i+e.h+.15);for(const l of[e.y0+c*.28,e.y0+c*.72])E(k,n.c.dark,e.x0+.35,l-.8,e.x1-.5,l+.8,i+e.h+.14,i+e.h+.16),E(k,n.c.frame,e.x1-.35,l-.04,e.x1-.1,l+.04,i+e.h+.15,i+e.h+1),E(k,n.c.frame,e.x1-.7,l-.04,e.x1-.1,l+.04,i+e.h+.92,i+e.h+1);E(k,n.c.mirror,e.x1+.08,e.y0+.3,e.x1+.2,e.y1-.3,4.2,7.2);break;case"seat":E(k,t,e.x0,e.y0,e.x1,e.y1,0,1.35),E(k,n.c.linen,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,1.35,1.65);for(let l=0;l<3;l++)E(k,ue(["#a7b39a","#e2c894","#d9cbb5"][l]),e.x1-.5,e.y0+.6+l*2.1,e.x1-.1,e.y0+2+l*2.1,1.65,2.8);break;case"cubes":{E(k,t,e.x0,e.y0,e.x1,e.y1,0,s);const l=Math.round((h?o:c)/1.1),u=["#a7b39a","#e2c894","#c98f6a","#8fa9b8"];for(let d=0;d<l;d++)for(let f=0;f<2;f++){const p=(d+.08)/l,_=(d+.92)/l,g=.15+f*1.1,m=g+.9,S=ue(u[(d+f)%4]);h?E(Kt,S,e.x0+o*p,e.y1-.02,e.x0+o*_,e.y1+.05,g,m):E(Kt,S,e.x1-.02,e.y0+c*p,e.x1+.05,e.y0+c*_,g,m)}break}case"beanbags":{const l=o>3?2:1;for(let u=0;u<l;u++)pi(k,t,e.x0+o*(u+.5)/l,a+(u?.4:-.3),.55,1.05,.55,14);break}case"kidwall":{E(k,t,e.x0,e.y0,e.x1,e.y1,0,s);const l=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2"],u=h?o:c;for(let d=0;d<24;d++){const f=.05+d*37%100/100*.9,p=.6+d*53%100/100*(s-1.2),_=(h?e.x0:e.y0)+u*f;h?E(Kt,ue(l[d%5]),_,e.y1,_+.3,e.y1+.18,p,p+.25):E(Kt,ue(l[d%5]),e.x1,_,e.x1+.18,_+.3,p,p+.25)}h?E(k,ue("#4f5e66"),e.x0,e.y1,e.x1,e.y1+3.2,0,.6):E(k,ue("#4f5e66"),e.x1,e.y0,e.x1+3.2,e.y1,0,.6);break}case"rig":{[[e.x0,e.y0],[e.x1-.3,e.y0],[e.x0,e.y1-.3],[e.x1-.3,e.y1-.3]].forEach(([u,d])=>{E(k,t,u,d,u+.3,d+.3,0,s),E(k,t,u-.4,d-.4,u+.3+.4,d+.3+.4,0,.05)}),E(k,t,e.x0,e.y0,e.x1,e.y0+.3,s-.3,s),E(k,t,e.x0,e.y1-.3,e.x1,e.y1,s-.3,s);for(let u=0;u<4;u++){const d=e.x0+o*(u+.5)/4;ke(k,n.c.steel,d,a,.06,s-.25,s-.1,6),E(k,n.c.steel,d-.05,e.y0,d+.05,e.y1,s-.25,s-.12)}for(const u of[a-.9,a+.9]){E(k,ue("#c9b48e"),e.x0+1.15,u-.03,e.x0+1.25,u+.03,6.2,s-.2);const d=new Ui(.4,.07,6,18);Vt(k,n.c.honey,d,e.x0+1.2,u,5.8)}ke(k,ue("#c8b083"),e.x1-1,a,.09,.4,s-.2,8),ke(k,ue("#c8b083"),e.x1-1,a,.35,.05,.4,10);break}case"frame":{[[e.x0,e.y0],[e.x1-.25,e.y0],[e.x0,e.y1-.25],[e.x1-.25,e.y1-.25]].forEach(([d,f])=>E(k,t,d,f,d+.25,f+.25,i,s)),E(k,t,e.x0,e.y0,e.x1,e.y0+.25,s-.25,s),E(k,t,e.x0,e.y1-.25,e.x1,e.y1,s-.25,s),E(k,t,e.x0,e.y0,e.x0+.25,e.y1,s-.25,s),E(k,t,e.x1-.25,e.y0,e.x1,e.y1,s-.25,s),E(k,ue("#e6dccb"),e.x0+.2,e.y0+.2,e.x1-.2,e.y1-.2,1.9,2.4),E(k,t,e.x0,e.y0,e.x1,e.y1,0,1.9);for(let d=1;d<4;d++)E(k,n.c.steel,e.x0+o*d/4,e.y0,e.x0+o*d/4+.06,e.y1,s-.5,s-.44);break}case"reformer":E(k,t,e.x0,e.y0,e.x1,e.y1,.3,.8),[[e.x0+.2,e.y0],[e.x1-.5,e.y0],[e.x0+.2,e.y1-.3],[e.x1-.5,e.y1-.3]].forEach(([l,u])=>E(k,t,l,u,l+.3,u+.3,0,.3)),E(k,ue("#e6dccb"),e.x0+2.2,e.y0+.15,e.x0+4.6,e.y1-.15,.8,s),E(k,n.c.steel,e.x1-.5,e.y0,e.x1-.35,e.y1,.8,2);break;case"rower":E(k,t,e.x0,a-.3,e.x1-1.2,a+.3,.5,.75),E(k,t,e.x0,a-.5,e.x0+.3,a+.5,0,.75),E(k,ue("#2a2a2a"),e.x0+1.4,a-.45,e.x0+2.4,a+.45,.75,1);{const l=new xn(.95,.95,.9,20);l.rotateZ(Math.PI/2),l.rotateY(Math.PI/2),Vt(k,n.c.glass,l,e.x1-.95,a,.95),E(k,n.c.water,e.x1-1.7,a-.35,e.x1-.2,a+.35,.3,.9),E(k,t,e.x1-2,a-.6,e.x1-1.8,a+.6,0,1.9)}break;case"treadmill":E(k,t,e.x0,e.y0,e.x1,e.y1,0,.6),E(k,ue("#1a1a1a"),e.x0+.3,e.y0+.3,e.x1-1,e.y1-.3,.6,.65),E(k,t,e.x1-.9,e.y0,e.x1-.6,e.y0+.25,.6,s),E(k,t,e.x1-.9,e.y1-.25,e.x1-.6,e.y1,.6,s),E(k,t,e.x1-1.3,e.y0,e.x1-.6,e.y1,s-.3,s);break;case"krack":E(k,t,e.x0,e.y0,e.x0+.2,e.y1,0,s),E(k,t,e.x1-.2,e.y0,e.x1,e.y1,0,s),E(k,t,e.x0,e.y0,e.x1,e.y1,1.6,1.7),E(k,t,e.x0,e.y0,e.x1,e.y1,s-.1,s);for(let l=0;l<8;l++){const u=e.x0+.5+l*(o-1)/7;for(const d of[1.7,s]){const f=new xn(.17+l*.012,.17+l*.012,.25,10);f.rotateX(Math.PI/2),Vt(Kt,ue("#1d1d1d"),f.clone(),u,e.y0+.25,d+.2),Vt(Kt,ue("#1d1d1d"),f,u,e.y1-.25,d+.2)}}for(let l=0;l<6;l++){const u=e.x0+.6+l*1.05;pi(Kt,ue("#232323"),u,e.y0-.6,.35+l*.03,.35+l*.03,1,10);const d=new Ui(.22,.05,4,10,Math.PI);Vt(Kt,ue("#232323"),d,u,e.y0-.6,.65+l*.06)}break;case"bands":{for(let u=0;u<3;u++)E(k,t,e.x0,e.y0+u*(c-.3)/2,e.x1,e.y0+u*(c-.3)/2+.3,0,s);for(const u of[3.5,5.5,7.6])E(k,n.c.steel,e.x1-.2,e.y0,e.x1,e.y1,u,u+.1);const l=["#d0573c","#3f7fbf","#4e9a52","#e8c547","#2a2a2a"];for(let u=0;u<10;u++)E(Kt,ue(l[u%5]),e.x1,e.y0+.6+u*.85,e.x1+.06,e.y0+.75+u*.85,5.6-u%3*.8,7.6);break}case"mirror":E(k,n.c.mirror,e.x0,e.y0,e.x1,e.y1,i,s),E(k,n.c.frame,e.x0-.02,e.y0,e.x1+.02,e.y1,i-.05,i);break;case"plunge":{E(k,t,e.x0,e.y0,e.x1,e.y0+.35,0,s),E(k,t,e.x0,e.y1-.35,e.x1,e.y1,0,s),E(k,t,e.x0,e.y0,e.x0+.35,e.y1,0,s),E(k,t,e.x1-.35,e.y0,e.x1,e.y1,0,s),E(k,n.c.zellige,e.x0+.35,e.y0+.35,e.x1-.35,e.y1-.35,-.02,0),E(k,n.c.water,e.x0+.35,e.y0+.35,e.x1-.35,e.y1-.35,0,s-.12);break}case"benches":{E(k,t,e.x0,e.y0,e.x1,e.y0+1.8,1.4,1.6),E(k,t,e.x0,e.y0+1.8,e.x1,e.y1,s-.2,s),E(k,t,e.x0,e.y0+1.6,e.x1,e.y0+1.8,1.6,s),E(k,n.c.lamp,e.x0,e.y0+.15,e.x1,e.y0+.25,1.3,1.38),E(k,n.c.lamp,e.x0,e.y0+1.95,e.x1,e.y0+2.05,s-.3,s-.22),E(k,t,e.x0,e.y1-.2,e.x1,e.y1,s,s+2.5);break}case"heater":E(k,t,e.x0,e.y0,e.x1,e.y1,.3,s-.4);for(let l=0;l<9;l++){const u=new da(.22,0);Vt(k,ue(l%2?"#6d6a66":"#8a8580"),u,e.x0+.3+l%3*.4,e.y0+.4+Math.floor(l/3)*.5,s-.3)}for(let l=0;l<4;l++)E(k,n.c.aspen,e.x0-.2+l*.5,e.y1+.1,e.x0-.05+l*.5,e.y1+.2,.2,s);break;case"lowtable":E(k,t,e.x0,e.y0,e.x1,e.y1,.9,1.2),E(k,t,e.x0+.3,e.y0+.3,e.x1-.3,e.y1-.3,0,.9),[[r,e.y0-1],[r,e.y1+1],[e.x0-1,a],[e.x1+1,a]].forEach(([l,u])=>E(k,ue("#6f7a55"),l-.85,u-.85,l+.85,u+.85,0,.3));break;case"andon":E(k,n.c.paper,e.x0+.05,e.y0+.05,e.x1-.05,e.y1-.05,.3,s),[[e.x0,e.y0],[e.x1-.08,e.y0],[e.x0,e.y1-.08],[e.x1-.08,e.y1-.08]].forEach(([l,u])=>E(k,ue("#3d2c20"),l,u,l+.08,u+.08,0,s));break;case"standdesk":E(k,t,e.x0,e.y0,e.x1,e.y1,s-.12,s);for(const l of[e.x0+.5,e.x1-.7])E(k,n.c.frame,l,a-.1,l+.2,a+.1,0,s-.12),E(k,n.c.frame,l-.1,e.y0+.2,l+.3,e.y1-.2,0,.1);E(k,n.c.frame,r-1.4,e.y0+.5,r+1.4,e.y0+.6,s+.5,s+2),E(k,n.c.frame,r-.1,e.y0+.55,r+.1,e.y0+.9,s,s+.6),E(Kt,ue("#bfc3c5"),r-.6,e.y1-1.1,r+.6,e.y1-.4,s,s+.04),ke(k,n.c.frame,r,e.y1+1.4,.1,0,1.6,8),E(k,ue("#4a4a46"),r-.9,e.y1+.6,r+.9,e.y1+2.2,1.6,1.85),E(k,ue("#4a4a46"),r-.9,e.y1+2,r+.9,e.y1+2.25,1.85,3.6);break;case"studio":E(k,t,e.x0,e.y0,e.x1,e.y1,s-.15,s),E(k,n.c.frame,e.x0+.2,e.y0+.2,e.x0+2.2,e.y1-.2,0,s-.15),E(k,n.c.frame,e.x1-2.2,e.y0+.2,e.x1-.2,e.y1-.2,0,s-.15),E(k,ue("#2b2b2b"),r-1.6,e.y1-1.6,r+1.6,e.y1-.2,s,s+.25);for(let l=0;l<12;l++)E(Kt,ue(l%3?"#cfcfcf":"#e8c547"),r-1.4+l*.25,e.y1-1.3,r-1.3+l*.25,e.y1-.6,s+.25,s+.32);E(k,ue("#1d1d1d"),e.x0+.5,e.y0+.4,e.x0+1.4,e.y0+1.4,s,s+.15);for(let l=0;l<16;l++)E(Kt,ue("#d0573c"),e.x0+.58+l%4*.2,e.y0+.48+Math.floor(l/4)*.22,e.x0+.72+l%4*.2,e.y0+.62+Math.floor(l/4)*.22,s+.15,s+.18);E(k,n.c.frame,r-2.6,e.y0+.3,r-.2,e.y0+.4,s+.6,s+2),E(k,n.c.frame,r+.2,e.y0+.3,r+2.6,e.y0+.4,s+.6,s+2);for(const l of[e.x0+.4,e.x1-1.3])E(k,ue("#2a2a2a"),l,e.y0+.2,l+.9,e.y0+1.1,s,s+1.3);break;case"piano":E(k,t,e.x0,e.y0,e.x1,e.y1,2.15,2.6),E(k,t,e.x0,e.y0,e.x1-.4,e.y0+.15,0,2.15),E(k,t,e.x0,e.y1-.15,e.x1-.4,e.y1,0,2.15),E(k,n.c.white,e.x1-.55,e.y0+.2,e.x1-.05,e.y1-.2,2.6,2.66);for(let l=0;l<16;l++)E(Kt,ue("#111"),e.x1-.55,e.y0+.3+l*.27,e.x1-.25,e.y0+.4+l*.27,2.66,2.72);E(k,t,e.x1+1,a-.9,e.x1+2,a+.9,1.4,1.65);break;case"drums":{[[0,-1.4,.9,1.1],[-1.5,0,.6,2.4],[1.5,.2,.55,2.6],[-.8,1.3,.5,2.8],[.9,1.4,.5,2.8],[-2,1.6,.7,3.6],[2.1,1.7,.75,3.8]].forEach(([l,u,d,f],p)=>{p>=5?(ke(k,ue("#b39a5a"),r+l,a+u,d,f,f+.05,16),ke(k,t,r+l,a+u,.05,0,f,6)):ke(k,p===0?ue("#444"):t,r+l,a+u,d,p===0?0:f-.35,p===0?1.8:f,16)}),ke(k,ue("#6f7a55"),r,a-2.6,.6,0,1.6,12);break}case"guitarwall":{E(k,n.c.honey,e.x0,e.y0+.1,e.x1,e.y1,i+2.9,i+3.1);const l=["#c98a3c","#1d1d1d","#a33a2a","#e6d3a8"],u=4;for(let d=0;d<u;d++)H_(e.x0+o*(d+.5)/u,i,l[d],e.y0+.05,.28);break}case"apanels":{const l=Math.floor(c/4.2);for(let u=0;u<l;u++){const d=e.y0+u*(c/l)+.2;E(k,ue(["#8d8a72","#6f7a68","#a39a86"][u%3]),e.x0,d,e.x1,d+c/l-.4,i+u%2*.6,i+4.5+u%2*.6)}break}case"clouds":for(let l=0;l<2;l++)for(let u=0;u<2;u++){const d=e.x0+l*o/2+.4,f=e.y0+u*c/2+.4;E(k,t,d,f,d+o/2-.8,f+c/2-.8,i+(l+u)%2*.4,i+.3+(l+u)%2*.4)}break;case"ribs":{const l=Math.floor(o/.9);for(let u=0;u<=l;u++){const d=e.x0+u*o/l,f=.3+.55*(.5+.5*Math.sin(u/l*Math.PI*2.2));E(k,t,d-.12,e.y0,d+.12,e.y1,s-f,s)}break}case"layered":ke(k,n.c.frame,r,a,.02,i+e.h,12.8,4),[[1.1,0],[.8,.35],[.5,.7]].forEach(([l,u])=>ke(k,t,r,a,l*.35,i+u,i+u+.25,18,l)),ke(k,n.c.lamp,r,a,.3,i-.05,i,12),ke(k,n.c.frame,23.7,15,.02,7.6,12.8,4),[[1.1,0],[.8,.35],[.5,.7]].forEach(([l,u])=>ke(k,t,23.7,15,l*.35,6.6+u,6.85+u,18,l));break;case"rgb":E(k,n.c.rgb,e.x0,e.y0,e.x1,e.y1,i,s);break;default:E(k,t,e.x0,e.y0,e.x1,e.y1,i,s),e.label.includes("Mic")&&ke(k,ue("#222"),r,a,.18,s,s+.45,10)}}}function bh(n,e,t,i,s,r,a,o,c=.45,h=.15){const l=Math.hypot(s-t,r-i),u=Math.floor(l/c);for(let d=0;d<=u;d++){const f=d/u,p=t+(s-t)*f,_=i+(r-i)*f;E(n,e,p-h/2,_-h/2,p+h/2,_+h/2,a,o)}}function W_(n,e){const t=Tt.site,i=-1.7,s=new Xi(1600,1600,1,1);s.rotateX(-Math.PI/2);const r=s.attributes.uv;for(let x=0;x<r.count;x++)r.setXY(x,r.getX(x)*1600,r.getY(x)*1600);const a=new Ht(s,n.meadow);a.position.y=i,a.receiveShadow=!0,e.ground.add(a);const o=Tt.courtyard,c=[n.plinth,n.plinth,n.flag,n.plinth,n.plinth,n.plinth];E("site",[n.plinth,n.plinth,n.slate,n.plinth,n.plinth,n.plinth],o.x0,o.y0,o.x1,o.y1,i,-.3);{const x=[n.cedar,n.cedar,n.cedar,n.cedar,n.cedar,n.cedar],I=[n.bluestone,n.bluestone,n.bluestone,n.bluestone,n.bluestone,n.bluestone];E("site",x,o.x0,o.y1-4.5,o.x1,o.y1,-.3,-.05),E("site",I,o.x0+4.5,o.y1-5.8,o.x1-4.5,o.y1-4.5,-.3,-.18),E("site",x,o.x0,o.y0+.2,o.x0+4.5,o.y1-4.5,-.3,-.05),E("site",I,o.x0+4.5,o.y0+5.5,o.x0+5.8,o.y1-5.8,-.3,-.18),E("site",x,o.x1-4.5,o.y0+5,o.x1,o.y1-4.5,-.3,-.05),E("site",I,o.x1-5.8,o.y0+5.5,o.x1-4.5,o.y1-5.8,-.3,-.18);for(let L=o.x0+6;L<o.x1-5;L+=3)E("detail",n.lamp,L,o.y1-5.82,L+.5,o.y1-5.78,-.26,-.22);for(let L=o.y0+7;L<o.y1-6;L+=3)E("detail",n.lamp,o.x0+5.78,L,o.x0+5.82,L+.5,-.26,-.22),E("detail",n.lamp,o.x1-5.82,L,o.x1-5.78,L+.5,-.26,-.22);for(let L=o.x0+1;L<=o.x1-1;L+=1.6){const D=Math.sin((L-o.x0)/8*Math.PI)*.5;ke("detail",n.lamp,L,o.y1-6.2,.09,8.6-Math.abs(D),8.78-Math.abs(D),6)}E("site",I,o.x0+5.8,40.3,o.x1-5.8,41.7,-.3,-.2),[[o.x1-4,34],[o.x1-4,41.5]].forEach(([L,D])=>{E("site",n.c.teak,L-1.1,D,L+1.1,D+6,-.05,.9),E("site",n.c.linen,L-1,D+.2,L+1,D+4.4,.9,1.25);const H=Oi(2,.3,1.8);H.rotateX(-.9),H.translate(L-pt,1.6,-(D+5.2-Et)),Ft.add("site",n.c.teak,H)})}const h=t.lawn;E("site",[n.plinth,n.plinth,n.turf,n.plinth,n.plinth,n.plinth],h.x0,h.y0,h.x1,h.y1,-.5,-.28);const l=t.zen;E("site",n.plinth,l.x0-.3,l.y0-.3,l.x1+.3,l.y1+.3,-.5,-.26),E("site",n.gravel,l.x0,l.y0,l.x1,l.y1,-.5,-.27),[[42,33,1.6,1.4],[48.5,36.5,1.2,1],[50,32,.9,.8]].forEach(([x,I,L,D])=>{const H=new da(L,0);H.scale(1,D/L*.7,1),H.translate(x-pt,-.3+D*.3,-(I-Et)),Ft.add("site",n.plinth,H)});const u=t.water;E("site",n.c.blackstone,u.x0-.6,u.y0-.6,u.x1+.6,u.y1+.6,i,.1),E("site",n.poolwater,u.x0,u.y0,u.x1,u.y1,i,-.05);{const x=new Dt({color:7309893,roughness:.9}),I=new Dt({color:5208634,roughness:.6});for(let L=0;L<26;L++){const D=u.x0+.8+L*41%100/100*(u.x1-u.x0-1.6),H=u.y0+.8+L*67%100/100*(u.y1-u.y0-1.6);L%3?ke("site",x,D,H,.06,-.05,2.2+L%4*.5,4,.02):ke("site",I,D,H,.6,0,.03,10)}}ke("site",n.c.stone,u.x0-1.8,u.y0+2.5,1.2,-.3,1.1,12),ke("site",n.water,u.x0-1.8,u.y0+2.5,.8,1.1,1.13,12),E("site",n.c.fir,u.x0-1.85,u.y0+2.5,u.x0-.2,u.y0+2.62,1.6,1.72);const d=t.shadetree;ke("site",n.dark,d.cx,d.cy,.9,-.3,11,10,.55);{const x=new Dt({color:7178814,roughness:.9});[[0,0,17,5.6],[2.8,1.6,15.5,3.7],[-2.8,-1.2,16,3.8],[1.2,-2.8,19,3.4],[-1.6,2.4,19.5,3.5],[0,0,22,3.2]].forEach(([I,L,D,H])=>{const B=new xi(H,1);B.scale(1,.72,1),B.translate(d.cx+I-pt,D,-(d.cy+L-Et)),Ft.add("site",x,B)})}{const x=new Dt({color:12076074,roughness:.9}),I=new Dt({color:13658670,roughness:.9});t.maples.forEach(([L,D],H)=>{ke("site",n.dark,L,D,.22,-.3,4.5,6,.14),[[0,0,5.6,2.5],[1.3,.6,4.9,1.8],[-1.4,-.6,5.1,1.9],[.4,-1.2,6.5,1.6]].forEach(([B,Z,q,$])=>{const J=new xi($,1);J.scale(1.15,.55,1.15),J.translate(L+B-pt,q,-(D+Z-Et)),Ft.add("site",H%2?I:x,J)})})}t.lanterns.forEach(([x,I])=>{ke("site",n.c.stone,x,I,.55,-.3,.1,6),ke("site",n.c.stone,x,I,.2,.1,1.8,6),E("site",n.c.stone,x-.5,I-.5,x+.5,I+.5,1.8,2.6),E("site",n.paper,x-.32,I-.52,x+.32,I+.52,1.95,2.45),ke("site",n.c.stone,x,I,.15,2.6,3.3,6,.9),ke("site",n.c.stone,x,I,.05,3.3,3.55,6,.18)});for(let x=0;x<9;x++){const I=Math.PI*(1.05+x*.06),L=Oi(1.25,.18,1.5);L.translate(0,0,0),L.rotateY(I+Math.PI/2);const D=6.2;if(Vt("site",n.teak,L,d.cx+Math.cos(I)*D,d.cy+Math.sin(I)*D,1.4),x%2===0){const H=Oi(.25,1.4,1.1);H.rotateY(I+Math.PI/2),Vt("site",n.c.blackstone,H,d.cx+Math.cos(I)*D,d.cy+Math.sin(I)*D,0)}}{const x=new Dt({color:4156213,roughness:.8});[[38.5,29.5],[56,41.2],[42.5,52.5],[69.5,51.5],[54,29],[70,36.5]].forEach(([I,L],D)=>{for(let H=0;H<5;H++){const B=new ps(.5,3+H%3,4);B.rotateZ((H-2)*.35),B.rotateY(H*1.3),Vt("site",x,B,I+(H-2)*.3,L+(H*7%3-1)*.3,1)}})}{const x=[];for(let Z=39;Z<=69;Z+=6)x.push([Z,28.4],[Z,53.8]);for(let Z=34;Z<=50;Z+=5.3)x.push([37.2,Z],[70.8,Z]);const I=new xn(.07,.09,1.3,6);I.translate(0,.65,0);const L=new gi(I,n.bronze,x.length),D=new Hi(.42,12,6,0,Math.PI*2,0,Math.PI/2);D.scale(1,.55,1);const H=new gi(D,n.lamp,x.length),B=new at;x.forEach(([Z,q],$)=>{B.makeTranslation(Z-pt,-.3,-(q-Et)),L.setMatrixAt($,B),B.makeTranslation(Z-pt,1.35,-(q-Et)),H.setMatrixAt($,B)}),e.detail.add(L),e.detail.add(H)}{const x=t.cshower;E("site",n.c.blackstone,x.x0,x.y0,x.x1,x.y1,-.3,-.18),E("site",n.c.charred,x.x0,x.y1-.3,x.x1,x.y1,-.3,7),E("site",n.c.charred,x.x0,x.y0,x.x0+.3,x.y1,-.3,7),E("site",n.c.brass,x.x0+2.4,x.y1-.5,x.x0+2.55,x.y1-.3,-.2,7.2),E("site",n.c.brass,x.x0+2.3,x.y1-1.6,x.x0+2.65,x.y1-.4,7,7.15),ke("site",n.c.brass,x.x0+2.47,x.y1-1.5,.45,6.85,7,14)}const f=t.pooldeck,p=t.pool;{const x=[n.plinth,n.plinth,n.basalt,n.plinth,n.plinth,n.plinth];E("site",n.granite,p.x0-1.5,p.y0-1.5,p.x1+1.5,p.y1+1.5,i,-.95),E("site",x,f.x0,f.y0,f.x1,p.y0,i,-1),E("site",x,f.x0,p.y1,f.x1,f.y1,i,-1),E("site",x,f.x0,p.y0,p.x0,p.y1,i,-1),E("site",x,p.x1,p.y0,f.x1,p.y1,i,-1)}E("site",n.pooltile,p.x0,p.y0,p.x1,p.y1,-5.6,-5.4),E("site",n.pooltile,p.x0,p.y0-.02,p.x1,p.y0+.02,-5.4,-1),E("site",n.pooltile,p.x0,p.y1-.02,p.x1,p.y1+.02,-5.4,-1),E("site",n.pooltile,p.x0-.02,p.y0,p.x0+.02,p.y1,-5.4,-1),E("site",n.pooltile,p.x1-.02,p.y0,p.x1+.02,p.y1,-5.4,-1),E("site",n.poolwater,p.x0,p.y0,p.x1,p.y1,-5.4,-1.4);{const x=t.bale;E("site",n.c.honey,x.x0,x.y0,x.x1,x.y1,-1,.4),E("site",n.c.linen,x.x0+.4,x.y0+.4,x.x1-.4,x.y1-.4,.4,.9),[[x.x0+1,x.y0+2],[x.x1-2,x.y0+2],[x.x0+1.5,x.y1-1.5]].forEach(([I,L],D)=>E("site",ue(["#a7b39a","#e2c894","#c98f6a"][D]),I,L,I+1.2,L+1.2,.9,1.5)),[[x.x0,x.y0],[x.x1-.5,x.y0],[x.x0,x.y1-.5],[x.x1-.5,x.y1-.5]].forEach(([I,L])=>E("site",n.c.fir,I,L,I+.5,L+.5,.4,x.h)),E("site",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],x.x0-3,x.y0-3,x.x1+3,x.y1+3,x.h,x.h+.6,(I,L)=>(L-(x.y0+x.y1)/2)*.12)}for(let x=0;x<3;x++)E("site",n.c.teak,60+x*7,-27,62.5+x*7,-23.5,-1,-.5),E("site",n.c.linen,60.1+x*7,-26.9,62.4+x*7,-23.6,-.5,-.25);const _=t.outdoor_shower;E("site",n.stone,_.x0,_.y0,_.x1,_.y1,-1.2,-.9),E("site",n.c.charred,_.x0,_.y0,_.x0+.3,_.y1,-.9,7),E("site",n.c.charred,_.x0,_.y0,_.x1,_.y0+.3,-.9,7),E("site",n.brass,_.x0+.3,_.y0+2.4,_.x0+.5,_.y0+2.6,-.9,7.2),E("site",n.brass,_.x0+.3,_.y0+2.4,_.x0+1.5,_.y0+2.6,7,7.2),ke("site",n.brass,_.x0+1.4,_.y0+2.5,.4,6.85,7,12);const g=t.lane;E("site",n.turf,g.x0,g.y0,g.x1,g.y1,i,-1.05);for(let x=0;x<=4;x++){const I=g.x0+x*15;E("site",n.white,I-.15,g.y0,I+.15,g.y1,-1.05,-1.02)}E("site",n.white,g.x0,(g.y0+g.y1)/2-.08,g.x1,(g.y0+g.y1)/2+.08,-1.05,-1.03),E("site",n.c.charred,g.x1+.5,g.y0-1,g.x1+1.5,g.y1+1,i,2.5);{const x=t.pullup;[x.x0,x.x1-.3].forEach(I=>E("site",n.frame,I,(x.y0+x.y1)/2-.15,I+.3,(x.y0+x.y1)/2+.15,-1.05,8.5)),E("site",n.steel,x.x0,(x.y0+x.y1)/2-.05,x.x1,(x.y0+x.y1)/2+.05,8,8.12),E("site",n.steel,x.x0,(x.y0+x.y1)/2-.05,x.x1,(x.y0+x.y1)/2+.05,5.6,5.72)}E("site",n.flag,4,-8,50,0,i,-1.05);const m=t.veg;E("site",n.gravel,m.x0,m.y0,m.x1,m.y1,i,-1.1);for(let x=0;x<4;x++){const I=m.x0+1.5+x*5.8;E("site",n.c.fir,I,m.y0+2,I+4,m.y0+20,i,.6),E("site",ue("#4a3a2c"),I+.2,m.y0+2.2,I+3.8,m.y0+19.8,.6,.65);for(let L=0;L<8;L++){const D=new xi(.75,0);D.translate(I+2-pt,1.1,-(m.y0+3.5+L*2.1-Et)),Ft.add("site",ue(L%3?"#5f8a3e":"#7aa64c"),D)}}bh("site",n.c.fir,m.x0,m.y0,m.x0,m.y1,i,3.5,1.2,.2),bh("site",n.c.fir,m.x0,m.y1,m.x1,m.y1,i,3.5,1.2,.2);{const x=new xn(.25,.35,5,6);x.translate(0,2.5,0);const I=new xi(3.2,1);I.scale(1,.8,1);const L=new Hi(.28,6,4),D=t.orchard.length,H=new gi(x,n.dark,D),B=new gi(I,new Dt({color:6195770,roughness:.9}),D),Z=new gi(L,new Dt({color:13783086,roughness:.5}),D*8),q=new at;t.orchard.forEach(([$,J],Se)=>{q.makeTranslation($-pt,i,-(J-Et)),H.setMatrixAt(Se,q),q.makeTranslation($-pt,i+7.2,-(J-Et)),B.setMatrixAt(Se,q);for(let Me=0;Me<8;Me++){const tt=Me*.785+Se;q.makeTranslation($-pt+Math.cos(tt)*2.9,i+6.2+Me%3*.8,-(J-Et)+Math.sin(tt)*2.9),Z.setMatrixAt(Se*8+Me,q)}}),[H,B].forEach($=>{$.castShadow=!0,e.site.add($)}),e.detail.add(Z)}const S=t.bikes;E("site",n.stone,S.x0-1,S.y0,S.x1,S.y1,i,-1.05);const R=new Dt({color:2236962,roughness:.7});for(let x=0;x<4;x++){const I=S.y0+1.2+x*2.4;E("site",n.frame,S.x0+.2,I-.05,S.x1-.2,I+.05,-1.05,1.3),[0,2.5].forEach(L=>{const D=new Ui(1.1,.12,6,18);D.rotateY(Math.PI/2*0),D.translate(S.x0-1.2+L-pt,0,-(I-Et)),Ft.add("site",R,D)}),E("site",ue(["#a3613d","#3f7fbf","#4e9a52","#e8c547"][x]),S.x0-1.2,I-.06,S.x0+1.3,I+.06,.6,.75)}const b=t.entrycourt;E("site",n.flag,b.x0,b.y0,b.x1,b.y1,i,-1.05),E("site",n.gravel,-46,16,-20,58,i,-1.1);const T=new fa;[[-90,4],[-60,10],[-44,24],[-46,16],[-62,0],[-90,-6]].forEach(([x,I],L)=>L?T.lineTo(x-pt,I-Et):T.moveTo(x-pt,I-Et));const A=new Pl(T);A.rotateX(-Math.PI/2),A.scale(1,1,1),A.translate(0,i+.08,0),Ft.add("site",n.gravel,A);const C=t.carport;[[C.x0,C.y0],[C.x1-.4,C.y0],[C.x0,C.y1-.4],[C.x1-.4,C.y1-.4],[C.x0,(C.y0+C.y1)/2],[C.x1-.4,(C.y0+C.y1)/2]].forEach(([x,I])=>E("site",n.frame,x,I,x+.4,I+.4,i,9));{const x=(I,L)=>(I-(C.x0+C.x1)/2)*.06;E("site",[n.frame,n.frame,n.seam,n.frame,n.frame,n.frame],C.x0-3,C.y0-3,C.x1+3,C.y1+3,9,9.7,x)}E("site",ue("#8d9399"),C.x0+3,C.y0+3,C.x0+9.5,C.y1-4,i,3.6),E("site",ue("#5b6e5a"),C.x0+13,C.y0+3,C.x0+19.5,C.y1-4,i,4.8),E("site",n.c.rammed,1,36,2,47,i,4);{const x=new Dt({color:10134106,roughness:1}),I=new Dt({color:5205564,roughness:.9});t.frontgarden.forEach(([L,D,H,B],Z)=>{E("site",n.plinth,L,D,H,B,i,-1),E("site",ue("#4a3a2c"),L+.3,D+.3,H-.3,B-.3,-1,-.95);for(let q=0;q<18;q++){const $=L+1+(q*37+Z*11)%100/100*(H-L-2),J=D+1+q*59%100/100*(B-D-2);if(q%3){const Se=new ps(.7,2.2,5);Vt("site",x,Se,$,J,.1)}else pi("site",I,$,J,-.3,1.1,.7,8)}}),ke("site",n.dark,-10,44,.25,i,7,6,.15),[[0,0,9,3],[1.5,1,8,2],[-1.4,-.8,8.3,2.2]].forEach(([L,D,H,B])=>{const Z=new xi(B,1);Z.scale(1,.75,1),Vt("site",new Dt({color:9085004,roughness:.9}),Z,-10+L,44+D,H)})}{const x=t.walkway;E("site",n.flag,x.x0,x.y0,x.x1+5,x.y1,i,-1);for(let I=x.x0+.5;I<x.x1;I+=6)E("site",n.frame,I,x.y0+.3,I+.3,x.y0+.6,-1,x.h),E("site",n.frame,I,x.y1-.6,I+.3,x.y1-.3,-1,x.h);E("site",[n.frame,n.frame,n.seam,n.soffit,n.frame,n.frame],x.x0-.5,x.y0-1,x.x1+.5,x.y1+1,x.h,x.h+.5,(I,L)=>(L-(x.y0+x.y1)/2)*-.08)}const v=t.veranda;E("site",c,v.x0,v.y0,v.x1,v.y1,i,-.25);const w=t.pergola;E("site",c,w.x0,w.y0,w.x1,w.y1,i,-.25),[[w.x0,w.y0+.5],[w.x1-.7,w.y0+.5],[w.x0,w.y1-.7],[w.x1-.7,w.y1-.7]].forEach(([x,I])=>E("site",n.c.charred,x,I,x+.7,I+.7,-.25,9)),E("site",n.c.charred,w.x0-1,w.y0+.5,w.x1+1,w.y0+1.1,8.4,9.2),E("site",n.c.charred,w.x0-1,w.y1-1.1,w.x1+1,w.y1-.5,8.4,9.2);for(let x=w.x0;x<=w.x1;x+=1.2)E("site",n.c.fir,x,w.y0-.5,x+.25,w.y1+.5,9.2,9.7);E("site",ue("#6b4a33"),23,85,33,89,2.2,2.5),[23.5,32].forEach(x=>E("site",ue("#6b4a33"),x,85.5,x+.4,88.5,-.25,2.2)),E("site",ue("#d9cbb5"),23,83.4,33,84.6,-.25,1.3),E("site",ue("#d9cbb5"),23,89.4,33,90.6,-.25,1.3);const N=t.firepit;{const x=new xn(N.r+1.5,N.r+1.5,.5,40);x.translate(N.cx-pt,i+.2,-55),Ft.add("site",n.flag,x),ke("site",n.c.stone,N.cx,N.cy,2.8,i,-.2,28),ke("site",n.dark,N.cx,N.cy,2.1,-.2,-.18,24);for(let D=0;D<4;D++){const H=D*Math.PI/2+.4,B=new xn(N.r-.6,N.r-.6,1.4,20,1,!0,H,1);B.translate(N.cx-pt,i+1.2,-55),Ft.add("site",n.c.stone,B)}const I=new Dt({color:16747069,emissive:16738842,emissiveIntensity:1.5});I.name="fire";const L=new ps(.9,1.6,8);L.translate(N.cx-pt,.6,-55),Ft.add("site",I,L)}{const x=t.climb,I=x.oh;E("site",[n.plinth,n.plinth,n.stone,n.plinth,n.plinth,n.plinth],x.x0-1,x.y0-1,x.x1+1,x.y1+1,i,-1),E("site",ue("#b5694a"),x.x0,x.y0,x.x1,x.y1,-1,-.6),[[x.x0,x.y0],[x.x1-.7,x.y0],[x.x0,x.y1-.7],[x.x1-.7,x.y1-.7]].forEach(([D,H])=>E("site",n.c.fir,D,H,D+.7,H+.7,-.6,x.h-1)),E("site",n.c.fir,x.x0-.5,x.y0,x.x1+.5,x.y0+.7,x.h-2,x.h-1),E("site",n.c.fir,x.x0-.5,x.y1-.7,x.x1+.5,x.y1,x.h-2,x.h-1);for(let D=x.x0+3;D<x.x1-1;D+=3)E("site",n.c.fir,D,x.y0-I+.5,D+.35,x.y1+I-.5,x.h-1,x.h-.6);E("site",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],x.x0-I,x.y0-I,x.x1+I,x.y1+I,x.h-.6,x.h+.3,(D,H)=>(H-(x.y0+x.y1)/2)*.07),E("site",n.c.charred,x.x0+1,x.y1-1.6,x.x1-1,x.y1-.9,-.6,x.wall),E("site",n.c.fir,x.x0+1.2,x.y1-2,x.x1-1.2,x.y1-1.6,-.4,x.wall-.2);const L=["#e8c547","#3f7fbf","#d0573c","#4e9a52","#8e5cc2","#f1eee7"];for(let D=0;D<84;D++){const H=x.x0+1.6+D*37%100/100*14.6,B=.6+D*53%100/100*(x.wall-1.4);E("detail",ue(L[D%6]),H,x.y1-2.3,H+.38,x.y1-2,B,B+.3)}E("site",ue("#d9cbb5"),x.x0+9,x.y1-3.4,x.x0+12,x.y1-2,4,6.5),E("site",ue("#55524c"),x.x0+1.2,x.y1-8,x.x1-1.2,x.y1-2.3,-.6,.4),[x.x0+5.5,x.x0+10.5].forEach(D=>E("site",ue("#3d3b37"),D,x.y1-8,D+.08,x.y1-2.3,.4,.42)),E("site",ue("#d9cbb5"),x.x0+3,x.y1-3,x.x0+5.5,x.y1-2,8.5,10.5);for(let D=0;D<4;D++){const H=x.y0+3+D*2.4;E("site",n.frame,x.x1-2.2,H-.05,x.x1-.9,H+.05,-.6,1.8),[0,2.3].forEach(B=>{const Z=new Ui(1,.11,6,18);Z.translate(x.x1-3.6+B-pt,.5,-(H-Et)),Ft.add("site",R,Z)}),E("site",ue(["#4e9a52","#e8c547","#3f7fbf","#a3613d"][D]),x.x1-3.6,H-.06,x.x1-1.2,H+.06,1,1.15)}E("site",n.stone,x.x1+1,2,4,6,i,-1)}{const x=t.util,I=7,L=x.gate;E("site",n.gravel,x.x0,x.y0,x.x1,x.y1,i,-1.15),E("site",n.c.charred,x.x0,x.y1-.4,x.x1,x.y1,i,I),E("site",n.c.charred,x.x0,x.y0,x.x0+.4,x.y1,i,I),E("site",n.c.charred,x.x1-.4,x.y0,x.x1,x.y1,i,I),E("site",n.c.charred,x.x0,x.y0,L[0],x.y0+.4,i,I),E("site",n.c.charred,L[1],x.y0,x.x1,x.y0+.4,i,I),E("site",n.c.charred,L[0]+.3,x.y0-.6,L[0]+5.8,x.y0-.3,-.6,I-.6),E("site",n.c.charred,L[1]-5.8,x.y0-.6,L[1]-.3,x.y0-.3,-.6,I-.6),t.tanks.forEach(([$,J,Se])=>{ke("site",ue("#5f6b5a"),$,J,Se,-1.1,8.5,28),ke("site",ue("#4f5a4b"),$,J,Se*.98,8.5,9.2,28)});const D=t.watertreat;E("site",n.concrete||n.stone,D.x0,D.y0,D.x1,D.y1,i,-.6),E("site",[n.charred,n.charred,n.seam,n.soffit,n.charred,n.charred],D.x0-.5,D.y0-.5,D.x1+.5,D.y1+.5,8.4,8.8),E("site",n.c.charred,D.x0,D.y1-.4,D.x1,D.y1,-.6,8.4),E("site",n.c.charred,D.x1-.4,D.y0,D.x1,D.y1,-.6,8.4),[[D.x0+.8,.9,"#3f7fbf"],[D.x0+2.3,.9,"#9aa0a3"],[D.x0+3.8,.9,"#9aa0a3"],[D.x0+5.3,.6,"#c9c2b4"]].forEach(([$,J,Se])=>ke("site",ue(Se),$,D.y1-1.6,J*.6,-.6,4.5,14)),ke("site",ue("#2f4f7a"),D.x0+7.6,D.y1-1.8,.9,-.6,4.8,16),E("site",ue("#2a2a2a"),D.x0+1,D.y0+1.5,D.x0+3.5,D.y0+4,-.6,1.8);const H=t.atu;E("site",ue("#7d7a70"),H.x0,H.y0,H.x1,H.y1,i,-1),[H.x0+2,H.x0+6,H.x0+10].forEach($=>ke("site",ue("#3d4a3a"),$,(H.y0+H.y1)/2,1,-1,-.8,16));const B=t.power;E("site",n.stone,B.x0,B.y0,B.x1,B.y1,i,-.6),E("site",ue("#e6e3dc"),B.x0+.5,B.y0+.5,B.x0+6,B.y0+3.5,-.6,3.6),E("site",ue("#2d2d2d"),B.x0+.5,B.y1-3.2,B.x0+3.5,B.y1-.8,-.6,4.2),E("site",ue("#2d2d2d"),B.x0+4.2,B.y1-3.2,B.x0+7.2,B.y1-.8,-.6,4.2),t.condensers.forEach(([$,J])=>{E("site",ue("#cfccc4"),$,J,$+3,J+3,-.6,3.2),ke("site",ue("#3a3a3a"),$+1.5,J+1.5,1.1,3.2,3.3,18)});for(let $=0;$<t.service.length-1;$++){const[J,Se]=t.service[$],[Me,tt]=t.service[$+1];E("site",n.gravel,Math.min(J,Me)-5,Math.min(Se,tt)-5,Math.max(J,Me)+5,Math.max(Se,tt)+5,i,-1.2)}const Z=t.drainfield;E("site",ue("#9fb07a"),Z.x0,Z.y0,Z.x1,Z.y1,i,-1.25);for(let $=Z.y0+3;$<Z.y1;$+=5)E("site",ue("#8a9c66"),Z.x0+2,$,Z.x1-2,$+.6,i,-1.2);const q=t.well;ke("site",ue("#7d7a70"),q.cx,q.cy,1.6,i,1.2,16),ke("site",n.c.charred,q.cx,q.cy,.5,1.2,3.2,10)}{for(let x=28.6;x<=45.4;x+=.42)E("site",n.c.cedar,17.1,x,17.35,x+.16,-.2,8.2);E("site",n.c.cedar,17,28.4,17.45,45.6,8.2,8.5),E("site",n.c.cedar,17,28.4,17.45,45.6,-.3,0)}const U=t.bathgarden;E("site",n.c.charred,U.x1-.5,U.y0,U.x1,U.y1,i,7),E("site",n.c.charred,U.x0,U.y1-.5,U.x1,U.y1,i,7),E("site",n.gravel,U.x0,U.y0,U.x1-.5,U.y1-.5,i,-1.1),E("site",n.flag,72,0,78,14,i,-.9),E("site",n.flag,66,-0,72,1,i,-.95)}function X_(n){const e=new xn(.35,.5,1,6);e.translate(0,.5,0);const t=new ps(1,1,7);t.translate(0,.5,0);const i=new xi(1,1),s=[];let r=11;const a=()=>(r=r*16807%2147483647,r/2147483647);for(let f=0;f<400&&s.length<120;f++){const p=-170+a()*420,_=-140+a()*340;p>-70&&p<135&&_>-50&&_<125||_>90&&p>-40&&p<140||_<-45&&p>-80&&p<130||p>-100&&p<-40&&_>-10&&_<30||s.push([p,_,a()])}const o=new gi(e,new Dt({color:14605008,roughness:.9}),s.length),c=new gi(t,new Dt({color:4085046,roughness:.9}),s.length),h=new gi(i,new Dt({color:12038218,roughness:.9}),s.length),l=new at;let u=0,d=0;s.forEach(([f,p,_],g)=>{const m=p>60?_<.6:_<.35,S=m?26+_*30:22+_*16;l.compose(hn(f,p,-1.7),new Dn,new O(1,m?S*.25:S*.6,1)),o.setMatrixAt(g,l),m?(l.compose(hn(f,p,S*.18),new Dn,new O(5+_*3,S*.85,5+_*3)),c.setMatrixAt(u++,l)):(l.compose(hn(f,p,S*.7),new Dn,new O(4+_*2,S*.32,4+_*2)),h.setMatrixAt(d++,l))}),c.count=u,h.count=d,[o,c,h].forEach(f=>{f.castShadow=!0,f.receiveShadow=!0,n.site.add(f)})}function Hr(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function yu(n,e){const t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,a=s*s*(3-2*s),o=r*r*(3-2*r),c=Hr(t,i),h=Hr(t+1,i),l=Hr(t,i+1),u=Hr(t+1,i+1);return c+(h-c)*a+(l-c)*o+(c-h-l+u)*a*o}function q_(n,e){let t=0,i=.5,s=1;for(let r=0;r<6;r++){const a=1-Math.abs(yu(n*s,e*s)*2-1);t+=a*a*i,i*=.5,s*=2.05}return t}function Y_(n){const r=[],a=[],o=[],c=new qe(9278560),h=new qe(3952439),l=new qe(8748660),u=new qe(16119540),d=new qe(11845835),f=(m,S,R)=>{const b=Math.min(1,Math.max(0,(R-m)/(S-m)));return b*b*(3-2*b)};for(let m=0;m<=90;m++){const S=m/90,R=700+19300*Math.pow(S,1.9);for(let b=0;b<=320;b++){const T=b/320*Math.PI*2,A=Math.sin(T)*R,C=-Math.cos(T)*R,v=.55+.75*Math.pow(Math.max(0,Math.cos(T)),2),w=yu(A/600+9,C/600+2)*260*f(900,2600,R)*(1-f(5e3,9e3,R)*.5),N=Math.pow(q_(A/5200+3.1,C/5200+7.7),1.6)*R*.5*v*f(2400,6e3,R);let U=w+N;R>15e3&&(U*=1-f(15e3,2e4,R)*.6),U+=-1.75,r.push(A,U,C);const x=c.clone();x.lerp(h,f(40,260,U)),U>900&&x.lerp(l,f(900,1500,U)),U>1700&&x.lerp(u,f(1700,2100,U)),x.lerp(d,Math.min(.42,f(3e3,2e4,R)*.5)),a.push(x.r,x.g,x.b)}}for(let m=0;m<90;m++)for(let S=0;S<320;S++){const R=m*321+S,b=R+320+1;o.push(R,R+1,b,b,R+1,b+1)}const p=new Pt;p.setAttribute("position",new ht(r,3)),p.setAttribute("color",new ht(a,3)),p.setIndex(o),p.computeVertexNormals();const _=new Dt({vertexColors:!0,roughness:1});_.fog=!1;const g=new Ht(p,_);n.mtn.add(g)}const _a=[{id:"U1",name:"Rainwater Tanks",wing:"Outdoor",x0:100.5,y0:12.5,x1:122.5,y1:23.5,notes:"Two 10-ft-diameter tanks (about 5,000 gal each) fed by gutters and leaders from the big standing-seam roofs, with first-flush diverters. Backup from the well (or municipal water where available).",floor:"Concrete pads",fin:"Dark green steel tanks inside the charred-timber screen"},{id:"U2",name:"Water Treatment",wing:"Outdoor",x0:124,y0:13,x1:135,y1:23,notes:"Roofed lean-to: pressure pump with pressure tank, sediment filter, carbon filter, UV sterilizer and a water softener, then on to the house.",floor:"Concrete pad",fin:"Charred timber; standing-seam roof"},{id:"U3",name:"Septic + Aerobic Treatment",wing:"Outdoor",x0:103,y0:-3,x1:115,y1:3,notes:"Buried septic tank plus an aerobic treatment unit (ATU), lids at grade for pumping from the service lane. Feeds the drain field down-slope to the south-east, well away from the vegetable garden and the well.",floor:"Gravel over buried tanks",fin:"Traffic-rated lids"},{id:"U4",name:"Generator + Battery Pad",wing:"Outdoor",x0:125,y0:-4,x1:135,y1:5,notes:"Standby generator plus two home batteries tied to roof solar, on a concrete pad with clearance from the screen.",floor:"Concrete pad",fin:"Concrete"},{id:"U5",name:"HVAC Condensers",wing:"Outdoor",x0:118.5,y0:.5,x1:122.5,y1:12.5,notes:"Three heat-pump condensers (house zones plus the studio's decoupled system) on pads, line sets running to the sleeping and wellness wings.",floor:"Concrete pads",fin:"Screened by charred timber"},{id:"U",name:"Utility Yard",wing:"Outdoor",x0:100,y0:-6,x1:136,y1:24,area:0,notes:"36 x 30 ft screened service yard beside the Pool Equipment room (211, which keeps the pool pump, filter and salt cell) and the wellness wing. 7-ft charred-timber screen matching the house, with a 12-ft service gate on the gravel service lane from the drive for pump trucks and deliveries.",floor:"Compacted gravel + concrete pads",fin:"Charred-timber screen; gravel; concrete pads"},{id:"U6",name:"Drain Field",wing:"Outdoor",x0:30,y0:-74,x1:90,y1:-52,notes:"On-site wastewater drain field in the south meadow below the service lane, more than 100 ft from the vegetable garden and the well, kept clear of the service lane. Size to the perc test.",floor:"Meadow grass",fin:"Meadow over trenches"},{id:"U7",name:"Well",wing:"Outdoor",x0:137,y0:92,x1:143,y1:98,notes:"Well head up-slope in the north-east, far from the drain field. Backup supply to the rainwater tanks.",floor:"Gravel",fin:"Stone pad; charred timber cover"},{id:"C",name:"Courtyard",wing:"Outdoor",x0:36,y0:27,x1:72,y1:55,notes:"The heart of the house, 36 x 28 ft. A western red cedar engawa runs along the north, east and west glass under the eaves, with a bluestone step lit by recessed step lights and string lights under the eave. Slate paving with a bluestone path, a katsura shade tree with a curved teak bench, Japanese maples, a lawn, raked gravel, a planted water court with a stone basin, stone lanterns and mushroom path lights in the planting, and two teak loungers on the east engawa. Courtyard table: open item.",floor:"Cedar engawa; slate + bluestone paving",fin:"Western red cedar engawa; bluestone step; slate paving; bluestone path; teak bench and loungers; stone lanterns; mushroom path lights; string lights"},{id:"P",name:"Saltwater Pool",wing:"Outdoor",x0:54,y0:-22,x1:88,y1:-10,notes:"Small 34 x 12 ft saltwater pool lined in green stone tile, on the sunny south side outside the wellness wing. A salt chlorine generator in the Pool Equipment room (cell replaced about every 3-5 years), marine-grade 316 stainless fittings, a sealed basalt deck with flamed-granite coping, teak loungers, and a bale pavilion at the east end.",floor:"Basalt deck, flamed-granite coping",fin:"Green stone pool tile; basalt deck; flamed-granite coping; 316 stainless fittings; teak and linen loungers"},{id:"B",name:"Bale Pavilion",wing:"Outdoor",x0:90,y0:-27,x1:97,y1:-19,notes:"Balinese-style bale by the pool: a raised honey-oak platform with linen cushions under a low standing-seam roof on fir posts.",floor:"Honey-oak platform",fin:"Honey oak; fir posts; standing-seam roof; linen cushions"},{id:"L",name:"Turf Sprint Lane",wing:"Outdoor",x0:-32,y0:-16,x1:43,y1:-8,notes:"20 yards (60 ft) of turf marked every 5 yards, plus a 15-ft run-out to a charred-timber end wall. An outdoor pull-up station stands at the gym end.",floor:"Synthetic turf",fin:"Turf; charred-timber end wall; black steel pull-up station"},{id:"V",name:"Vegetable Garden",wing:"Outdoor",x0:-30,y0:64,x1:-6,y1:86,notes:"Loved: four 4 x 18 ft cedar raised beds inside a slatted deer fence, a few steps from the mudroom and pantry, with a small orchard of fruit trees beside it.",floor:"Gravel",fin:"Cedar beds; gravel paths; fruit trees"},{id:"F",name:"Round Stone Fire Pit",wing:"Outdoor",x0:51,y0:92,x1:65,y1:106,notes:"Round stone fire pit with a curved stone seat wall on a flagstone circle, facing the mountains off the covered veranda.",floor:"Flagstone",fin:"Natural stone ring and seat walls; flagstone"},{id:"D",name:"Pergola Dining",wing:"Outdoor",x0:19,y0:81,x1:37,y1:95,notes:"Outdoor table for ten under a charred-timber and fir pergola, next to the kitchen and the view.",floor:"Flagstone",fin:"Flagstone; charred timber and fir pergola"},{id:"W",name:"Climbing Pavilion",wing:"Outdoor",x0:-22,y0:0,x1:-4,y1:18,area:0,cov:324,notes:"Open-air timber pavilion with a standing-seam roof and 5-ft eaves, matching the house. A full 16-ft-wide, 12-ft-high climbing wall from day one sits on the north side facing the sprint lane, over poured-rubber soft-fall and thick crash pads. The roof was raised to 17 ft so the beams clear the top of the wall by about 3 ft and the roof by about 4 ft. Sits in the active zone with the exercise room, sprint lane and a 4-bike rack. Covered outdoor area, not conditioned.",floor:"Poured-rubber soft-fall + crash pads",equip:["Climbing wall 16' × 12'","Two bouldering volumes","Crash pads","4-bike rack"],fin:"Fir frame; standing-seam roof at 17 ft; charred fascia; poured rubber"},{id:"S",name:"Outdoor Shower",wing:"Outdoor",x0:72.5,y0:4,x1:77.5,y1:10,notes:"Loved: stone shower by the pool behind solid charred-timber walls (no slat enclosure), next to the changing room.",floor:"Stone",fin:"Charred timber walls; stone floor; brass rain head"},{id:"Q",name:"Courtyard Shower",wing:"Outdoor",x0:66.5,y0:27.5,x1:71.5,y1:31.5,notes:"A second open-air shower in the courtyard corner by the wellness wing, with a charred-timber privacy wall and a brass rain head.",floor:"Black stone",fin:"Black stone; charred timber; brass"},{id:"K",name:"Bike Racks",wing:"Outdoor",x0:3,y0:62,x1:7.5,y1:72,notes:"Six-bike rack under the mudroom eave, with gear storage just inside.",floor:"Stone",fin:"Stone; black steel"},{id:"R",name:"Carport",wing:"Outdoor",x0:-44,y0:30,x1:-20,y1:54,notes:"Modern black carport for two cars: slim black steel posts and a low standing-seam roof, off the gravel drive. A covered walkway leads past the front garden to the door.",floor:"Gravel",fin:"Black steel; standing-seam roof; gravel drive"},{id:"E",name:"Covered Walkway + Front Garden",wing:"Outdoor",x0:-20,y0:48,x1:13,y1:54,notes:"Black-steel covered walkway on flagstone from the carport to the front door, past front-garden beds of grasses, low shrubs and a multi-stem tree.",floor:"Flagstone",fin:"Flagstone; black steel; standing-seam roof; planted beds"}];function $_(n){const e=P_();return ia=e,I_(e),O_(e),k_(e,n),V_(e),W_(e,n),Ft.build(n),X_(n),Y_(n),{M:e,blocking:sa,roofUnder:Vi}}const Ce=n=>document.getElementById(n),Xs=.09290304,Sh=.3048,Bs=n=>{const e=Math.floor(n+1e-6),t=Math.round((n-e)*12);return t?`${e}' ${t}"`:`${e}'`},Wn=()=>window.innerWidth<700,ri=Ce("viewport"),It=new e_({antialias:!0,powerPreference:"high-performance"});It.setPixelRatio(Math.min(window.devicePixelRatio,2));It.outputColorSpace=nn;It.toneMapping=fl;It.toneMappingExposure=1.05;It.shadowMap.enabled=!0;It.shadowMap.type=zs;It.localClippingEnabled=!0;ri.appendChild(It.domElement);const Es=new m_;Es.domElement.style.position="absolute";Es.domElement.style.inset="0";Es.domElement.style.pointerEvents="none";ri.appendChild(Es.domElement);const Qt=new Bd,dn={};for(const n of["walls","glass","roof","floors","furn","detail","site","ground","mtn","pick","labels","fx"])dn[n]=new Os,dn[n].name=n,Qt.add(dn[n]);dn.pick.visible=!0;const Kr={top:{value:new qe(9417681)},mid:{value:new qe(14673638)},bot:{value:new qe(15328470)}},vu=new Ht(new Hi(3e4,32,16),new Nn({side:sn,depthWrite:!1,fog:!1,uniforms:Kr,vertexShader:"varying vec3 vp; void main(){ vp = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vp; void main(){ float h = vp.y; vec3 c = h>0.0 ? mix(mid, top, pow(clamp(h*2.2,0.0,1.0),0.7)) : mix(mid, bot, clamp(-h*8.0,0.0,1.0)); gl_FragColor = vec4(c,1.0);
#include <colorspace_fragment>
}`}));vu.renderOrder=-10;Qt.add(vu);Qt.fog=new wl(14015968,1600,9e3);const cl=new Yf(15397631,9140830,1.15);Qt.add(cl);const bu=new Qf(16774374,.35);Qt.add(bu);const Sn=new Jf(16773596,2.6);Sn.castShadow=!0;Sn.shadow.mapSize.set(Wn()?1024:2048,Wn()?1024:2048);Object.assign(Sn.shadow.camera,{left:-150,right:150,top:150,bottom:-150,near:10,far:900});Sn.shadow.bias=-4e-4;Sn.shadow.normalBias=.6;Qt.add(Sn);Qt.add(Sn.target);const Su=[];g_(Wn()?.5:1);const{M:hl,blocking:K_,roofUnder:Nl}=$_(dn),Mu=new Set;Qt.traverse(n=>{n.material&&n.material.name==="lamp"&&Mu.add(n.material)});let ul=null;dn.site.traverse(n=>{n.material&&n.material.name==="fire"&&(ul=n.material)});for(const n of Tt.rooms){if(n.area<90||!n.cond)continue;const e=new Kf(16763274,0,34,1.6),t=hn((n.x0+n.x1)/2,(n.y0+n.y1)/2,Math.min(9,Nl((n.x0+n.x1)/2,(n.y0+n.y1)/2)-1.5));e.position.copy(t),dn.fx.add(e),Su.push(e)}const qs=new ar({transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});let Di=null;fetch("./plan_overlay.json").then(n=>n.json()).then(n=>{new qf().load("./plan_overlay.png",e=>{e.colorSpace=nn,e.anisotropy=8,qs.map=e,qs.needsUpdate=!0;const t=n.x1-n.x0,i=n.y1-n.y0,s=new Xi(t,i);s.rotateX(-Math.PI/2),Di=new Ht(s,qs),Di.position.copy(hn((n.x0+n.x1)/2,(n.y0+n.y1)/2,.06)),Di.renderOrder=3,Di.visible=Ye.overlay,Qt.add(Di)})});const Fi=new Ht(new Xi(1,1).rotateX(-Math.PI/2),hl.highlight);Fi.visible=!1;Fi.renderOrder=4;Qt.add(Fi);const ms=new Zd(new jd(new wi(1,1,1)),new qh({color:5069118}));ms.visible=!1;Qt.add(ms);const Ct=new mn(42,1,.5,6e4),bn=new ma(-1,1,1,-1,.5,3e3);let _i=Ct;const rn=new mu(Ct,It.domElement);rn.enableDamping=!0;rn.dampingFactor=.08;rn.maxPolarAngle=1.5;rn.minDistance=4;rn.maxDistance=1400;rn.screenSpacePanning=!0;rn.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN};const Jt=new mu(bn,It.domElement);Jt.enableRotate=!1;Jt.screenSpacePanning=!0;Jt.enableDamping=!0;Jt.minZoom=.4;Jt.maxZoom=8;Jt.mouseButtons={LEFT:ti.PAN,MIDDLE:ti.DOLLY,RIGHT:ti.PAN};Jt.touches={ONE:Gn.PAN,TWO:Gn.DOLLY_PAN};Jt.enabled=!1;const Ul={aerial:{name:"Aerial",cam:[0,-128,76],tgt:[50,56,28],fov:50,roof:!0,title:"The whole house.",kicker:"A DRAWING-BASED SPATIAL STUDY"},courtyard:{name:"Courtyard",cam:[39,29.5,6.2],tgt:[67,43,6],roof:!0,title:"The courtyard.",kicker:"VIEW · CEDAR ENGAWA, LOOKING NORTH-EAST",fov:62},living:{name:"Living",cam:[48,20,54],tgt:[58,67,0],roof:!1,cut:8,title:"Living pavilion.",kicker:"ROOMS 101-103 · ROOF HIDDEN"},office:{name:"Studio",cam:[48,-38,58],tgt:[16,11,0],roof:!1,cut:8,title:"Isolated studio / office.",kicker:"ROOM 407 · ROOM-WITHIN-A-ROOM · TARGET STC 60+"},wellness:{name:"Wellness",cam:[70,-44,58],tgt:[52,8,0],roof:!1,cut:8,title:"Wellness + gym wing.",kicker:"ROOMS 301-306 · ON THE POOL · ROOF HIDDEN"},bath:{name:"Bath",cam:[93,66,22],tgt:[93.8,78,0],roof:!1,cut:8,title:"Master bath.",kicker:"ROOM 202 · HINOKI SOAKING TUB BY THE WINDOW, SKYLIGHT",fov:55},utility:{name:"Utility",cam:[126,-46,62],tgt:[118,9,0],roof:!1,title:"Utility yard.",kicker:"OUTDOORS · SCREENED SERVICE YARD · WATER, WASTEWATER, POWER, HVAC",fov:50},climb:{name:"Climbing",cam:[-4,-34,9],tgt:[-13,14,8],roof:!0,title:"Climbing pavilion.",kicker:"OUTDOORS · COVERED OPEN-AIR · NOT CONDITIONED",fov:50},kitchen:{name:"Kitchen",cam:[30,43,27],tgt:[39,70,0],roof:!1,cut:8,title:"Kitchen + living.",kicker:"ROOMS 101-103 · MARBLE ISLAND, ZELLIGE, CONVERSATION PIT",fov:50},gym:{name:"Gym",cam:[52,-12,24],tgt:[38,11,2],roof:!1,cut:8,title:"Exercise room.",kicker:"ROOM 302 · CALM STUDIO, RIG, CADILLAC, ROWER",fov:50},kids:{name:"Kids",cam:[104,20,36],tgt:[90,38,0],roof:!1,cut:8,title:"Kids' rooms.",kicker:"ROOMS 207-209 · WINDOW SEATS, DESKS BY THE WINDOW, CLIMBING WALLS",fov:52},master:{name:"Master",cam:[124,33,64],tgt:[86,71,0],roof:!1,cut:8,title:"Master suite.",kicker:"ROOMS 201-203 · ROOF HIDDEN"}},Ye={mode:"orbit",light:"day",roof:!0,cut:!1,cutH:4.5,furn:!0,labels:!0,overlay:!1,ovOp:.85,site:!0,mtn:!0,shadows:!0,sel:null,view:"aerial"},ya=[],Eu=new Set(["402","405","211","206","403","306","205","203","204","301","406","104","105","210","208"]),wu=new Set(["402","405","211","212","213"]),Z_=new Set(["W","101","103","201","207","209","302","303","407","404","401","C","P","L"]),J_=new Set(["W","103","201","209","302","407","P","L"]);function Tu(n,e){if(wu.has(n.id))return;const t=document.createElement("div");t.className="rlabel"+(["204","301","406"].includes(n.id)?" gal":"")+(e?" out":"")+(Eu.has(n.id)||e?" minor":"")+(Z_.has(n.id)?" key":"")+(J_.has(n.id)?" key2":""),t.innerHTML=e?`${n.name}`:`<span class="num">${n.id}</span>${n.name.replace(" + Conversation Pit","").replace(" Gallery","")}`,t.addEventListener("click",s=>{s.stopPropagation(),ys(n.id,!0)});const i=new p_(t);i.userData={item:n,outdoor:e},dn.labels.add(i),ya.push(i)}Tt.rooms.forEach(n=>Tu(n,!1));_a.forEach(n=>Tu(n,!0));function Ol(){for(const n of ya){const e=n.userData.item;let t=(e.x0+e.x1)/2,i=(e.y0+e.y1)/2;e.id==="103"&&(t=61,i=58),e.id==="K"&&(t=2,i=70),e.id==="105"&&(i=58),e.id==="404"&&(i=31),e.id==="403"&&(i=44),e.id==="C"&&(i=44,t=47),e.id==="204"&&(i=42),e.id==="406"&&(i=34),e.id==="301"&&(t=54);let s=1.5;n.userData.outdoor||(s=Ye.mode==="plan"?1:Ye.roof&&Ye.mode!=="walk"?Nl(t,i)+2.2:4),n.userData.outdoor&&(s=e.id==="C"?2.5:3),n.position.copy(hn(t,i,s))}}const Au=["Living Pavilion","Sleeping Wing","Wellness + Gym Wing","Studio + Arrival"];function Q_(){const n=Ce("room-list"),e=Ce("chips"),t=(s,r,a,o,c)=>{const h=document.createElement("button");h.dataset.id=s,h.innerHTML=c?`<span class="n">${r}</span>${a}`:`<span class="n">${r}</span><span>${a}</span>`,h.onclick=()=>s==="all"?Cu():ys(s,!0),o.appendChild(h)};t("all","⌂","Whole house",n),t("all","⌂","Whole house",e,!0);for(const s of Au){const r=document.createElement("div");r.className="grp",r.textContent=s.toUpperCase(),n.appendChild(r),Tt.rooms.filter(a=>a.wing===s&&!wu.has(a.id)).forEach(a=>{t(a.id,a.id,a.name,n),Eu.has(a.id)||t(a.id,a.id,a.name,e,!0)})}const i=document.createElement("div");i.className="grp",i.textContent="OUTDOORS",n.appendChild(i),_a.forEach(s=>{t(s.id,"·",s.name,n),["C","W","P","L","V","U"].includes(s.id)&&t(s.id,"·",s.name,e,!0)}),document.querySelectorAll('[data-id="all"]').forEach(s=>s.classList.add("on"))}Q_();Ce("hdr-total").textContent=`${Tt.total.toLocaleString()} SF conditioned (${Math.round(Tt.total*Xs)} m²)`;const ir=Ce("views");Object.entries(Ul).forEach(([n,e])=>{const t=document.createElement("button");t.textContent=e.name,t.dataset.view=n,t.onclick=()=>or(n),ir.appendChild(t)});let cn=null;function Ru(n,e,t,i=1100){const s=Ct.position.clone(),r=rn.target.clone(),a=Ct.fov,o=performance.now();cn={p0:s,t0:r,f0:a,p1:n,t1v:e,f1:t??42,start:o,dur:i}}function sr(n,e){Ce("cap-kicker").textContent=n,Ce("cap-title").textContent=e}function or(n,e){const t=Ul[n];Ye.view=n,Ye.mode!=="orbit"&&Si("orbit"),bi(t.roof),yi(!!t.cut,t.cut||4.5),ir.querySelectorAll("button").forEach(c=>c.classList.toggle("on",c.dataset.view===n));const i=Wn()&&n==="aerial",s=i?[49,-178,104]:t.cam,r=i?[49,46,22]:t.tgt,a=hn(...s.slice(0,2),s[2]),o=hn(...r.slice(0,2),r[2]);if(Wn()&&n!=="courtyard"&&n!=="aerial"){const c=a.clone().sub(o).multiplyScalar(n==="aerial"?1.2:1.45);a.copy(o).add(c)}e?(Ct.position.copy(a),rn.target.copy(o),Ct.fov=t.fov??42,Ct.updateProjectionMatrix(),rn.update(),cn=null):Ru(a,o,t.fov),sr(t.kicker,t.title)}function Cu(){va(),or("aerial"),document.querySelectorAll("[data-id]").forEach(n=>n.classList.toggle("on",n.dataset.id==="all"))}function aa(n){return Tt.rooms.find(e=>e.id===n)||_a.find(e=>e.id===n)}function ys(n,e){const t=aa(n);if(!t)return;Ye.sel=n,document.querySelectorAll("[data-id]").forEach(u=>u.classList.toggle("on",u.dataset.id===n)),document.querySelectorAll(".chips button.on, .room-list button.on").forEach(u=>{var d;return(d=u.scrollIntoView)==null?void 0:d.call(u,{block:"nearest",inline:"center",behavior:"smooth"})}),ya.forEach(u=>u.element.classList.toggle("on",u.userData.item.id===n));const i=t.x1-t.x0,s=t.y1-t.y0,r=(t.x0+t.x1)/2,a=(t.y0+t.y1)/2,o=!t.area,c=t.cov??t.area??Math.round(i*s),h=o?.3:Nl(r,a);Fi.scale.set(i,1,s),Fi.position.copy(hn(r,a,o?.2:.08)),Fi.visible=!0,ms.scale.set(i,Math.max(.2,h),s),ms.position.copy(hn(r,a,Math.max(.2,h)/2)),ms.visible=!0,Ce("info").hidden=!1,Ce("info-kicker").textContent=o?"OUTDOORS · SITE":`ROOM ${t.id} · ${t.wing.toUpperCase()}`,Ce("info-title").textContent=t.name,Ce("info-notes").textContent=t.notes,Ce("info-size").textContent=`${Bs(i)} × ${Bs(s)}  (${(i*Sh).toFixed(1)} × ${(s*Sh).toFixed(1)} m)`,Ce("info-area").textContent=`${c.toLocaleString()} SF · ${(c*Xs).toFixed(1)} m²${!o&&!t.cond?" (unconditioned)":""}${t.cov?" covered (not conditioned)":""}`,Ce("info-ceil").parentElement.hidden=o,Ce("info-ceil").textContent=o?"":`${Bs(t.h)} (roof deck ${Bs(Math.round(h*2)/2)})`,Ce("info-floor").textContent=o?t.floor:t.floorName||t.floor,Ce("info-fin").textContent=t.fin||"",Ce("info-fin").parentElement.hidden=!t.fin;const l=t.equip||[...new Set(Tt.furn.filter(u=>u.room===n&&u.shape!=="pit").map(u=>u.label))];if(Ce("info-equip").innerHTML=l.map(u=>`<span>${u}</span>`).join(""),Ce("info-walk").parentElement.hidden=o&&n!=="C",sr(o?"OUTDOORS":`ROOM ${t.id} / SPATIAL STUDY`,t.name),e&&Ye.mode==="orbit"){o||(bi(!1),yi(!0,8));const d=Math.max(i,s,14)*(Wn()?2.6:1.9)+16,f=hn(r,a,1),p=new O(.35,.95,.75).normalize();Ru(f.clone().add(p.multiplyScalar(d)),f),ir.querySelectorAll("button").forEach(_=>_.classList.remove("on"))}e&&Ye.mode==="plan"&&(Jt.target.copy(hn(r,a,0)),bn.position.set(Jt.target.x,400,Jt.target.z+.01),bn.zoom=Math.min(4,70/Math.max(i,s,14)),bn.updateProjectionMatrix()),e&&Ye.mode==="walk"&&oa(r,a)}function va(){Ye.sel=null,Ce("info").hidden=!0,Fi.visible=!1,ms.visible=!1,ya.forEach(n=>n.element.classList.remove("on"))}Ce("info-close").onclick=va;Ce("info-walk").onclick=()=>{const n=aa(Ye.sel);n&&(Si("walk"),oa((n.x0+n.x1)/2,(n.y0+n.y1)/2))};function bi(n){Ye.roof=n,dn.roof.visible=n,ri.classList.toggle("roof-on",n),Ce("ly-roof").checked=n;const e=Ce("btn-roof");e.setAttribute("aria-pressed",n),e.querySelector("span").textContent=n?"Roof On":"Roof Off",Ol()}function yi(n,e){Ye.cut=n,e!=null&&(Ye.cutH=e),gu.constant=n?Ye.cutH:1e5,Ce("ly-cut").checked=n,Ce("cut-val").textContent=Bs(Ye.cutH),Ce("cut-h").value=Ye.cutH}function Ys(n){Ye.overlay=n,Di&&(Di.visible=n),Ce("ly-overlay").checked=n}Ce("btn-roof").onclick=()=>bi(!Ye.roof);Ce("ly-roof").onchange=n=>bi(n.target.checked);Ce("ly-cut").onchange=n=>yi(n.target.checked);Ce("cut-h").oninput=n=>yi(!0,parseFloat(n.target.value));Ce("ly-furn").onchange=n=>{Ye.furn=n.target.checked,dn.furn.visible=Ye.furn,dn.detail.visible=Ye.furn};Ce("ly-labels").onchange=n=>{Ye.labels=n.target.checked,ri.classList.toggle("labels-off",!Ye.labels)};Ce("ly-overlay").onchange=n=>Ys(n.target.checked);Ce("ov-op").oninput=n=>{qs.opacity=parseFloat(n.target.value),Ce("ov-val").textContent=Math.round(qs.opacity*100)+"%"};Ce("ly-site").onchange=n=>{dn.site.visible=n.target.checked};Ce("ly-mtn").onchange=n=>{dn.mtn.visible=n.target.checked};Ce("ly-shadow").onchange=n=>{Sn.castShadow=n.target.checked};Ce("btn-layers").onclick=()=>{Ce("layers").hidden=!Ce("layers").hidden};Ce("layers-close").onclick=()=>{Ce("layers").hidden=!0};function ba(n){var i,s;document.getElementById("app").classList.toggle("evening",n!=="day"),Ye.light=n,document.querySelectorAll("#light-seg button").forEach(r=>r.classList.toggle("on",r.dataset.light===n));const e=n==="day";Kr.top.value.set(e?8826064:2831696),Kr.mid.value.set(e?14936294:14260844),Kr.bot.value.set(e?15328470:7035472),Qt.fog.color.set(e?14015968:9272184),cl.intensity=e?1.15:.35,cl.color.set(e?15397631:9213632),bu.intensity=e?.35:.12,Sn.intensity=e?2.6:.9,Sn.color.set(e?16773596:16751194);const t=e?new O(-.55,.78,.62):new O(.85,.16,.35);Sn.position.copy(t.normalize().multiplyScalar(400)),Sn.target.position.set(0,0,0),Su.forEach(r=>r.intensity=e?0:260),Mu.forEach(r=>r.emissiveIntensity=e?r.color.r>.97?.5:.2:1.8),(i=hl.glass.emissive)==null||i.set(e?0:3811860),(s=hl.c.glass.emissive)==null||s.set(e?0:5913624),ul&&(ul.emissiveIntensity=e?1.2:4),It.toneMappingExposure=e?1.05:1.25}document.querySelectorAll("#light-seg button").forEach(n=>n.onclick=()=>ba(n.dataset.light));const Ze={x:16,y:54,yaw:-Math.PI/2,pitch:0,keys:{}};function Si(n){const e=Ye.mode;if(Ye.mode=n,ri.classList.toggle("plan-mode",n==="plan"),ri.classList.toggle("walk-mode",n==="walk"),document.querySelectorAll("#mode-seg button").forEach(t=>t.classList.toggle("on",t.dataset.mode===n)),rn.enabled=n==="orbit",Jt.enabled=n==="plan",Ce("walk-pad").hidden=n!=="walk",ir.hidden=n==="walk",n==="plan")_i=bn,bi(!1),yi(!0,4.5),Ys(!0),Jt.target.copy(hn(Wn()?49:40,Wn()?56:47,0)),bn.position.set(Jt.target.x,400,Jt.target.z+.01),bn.zoom=Wn()?.56:.92,Sa(),Ce("hint").textContent="Drag to pan · Scroll or pinch to zoom · Tap a room",sr(`PLAN VIEW · DRAWING OVERLAY ON 3D CUT AT 4' 6"`,"Floor plan."),ir.querySelectorAll("button").forEach(t=>t.classList.remove("on"));else if(n==="walk"){if(_i=Ct,yi(!1),Ys(!1),bi(!0),Ct.fov=68,Ct.updateProjectionMatrix(),e!=="walk"){const t=Ye.sel&&aa(Ye.sel);t?oa((t.x0+t.x1)/2,(t.y0+t.y1)/2):oa(16,54,-Math.PI/2)}Ce("hint").textContent="Drag to look · W A S D or arrows to move · Esc to exit",sr(`WALK THROUGH · EYE HEIGHT 5' 4"`,Ye.sel?aa(Ye.sel).name:"Entry genkan.")}else _i=Ct,yi(!1),Ys(!1),Ct.fov=42,Ct.updateProjectionMatrix(),Ce("hint").textContent="Drag to orbit · Scroll or pinch to zoom · Right-drag or two fingers to pan · Tap a room",e!=="orbit"&&or("aerial",!0);Ol()}document.querySelectorAll("#mode-seg button").forEach(n=>n.onclick=()=>Si(n.dataset.mode));function oa(n,e,t){if(Ze.x=n,Ze.y=e,Ze.pitch=0,t!=null)Ze.yaw=t;else{const i=50-n,s=44-e;Ze.yaw=Math.atan2(-i,s)+Math.PI,Ze.yaw=Math.atan2(i,s)}}function mo(n,e){if(n<-150||n>220||e<-120||e>200)return!0;for(const{s:t,a:i,b:s}of K_){const[r,a,o,c]=t.o==="h"?[i,t.c,s,t.c]:[t.c,i,t.c,s],h=o-r,l=c-a,u=Math.max(0,Math.min(1,((n-r)*h+(e-a)*l)/(h*h+l*l))),d=n-(r+h*u),f=e-(a+l*u);if(d*d+f*f<.8*.8)return!0}return!1}function j_(n){const e=Ze.keys;let t=0,i=0;if((e.KeyW||e.ArrowUp||e.f)&&(t+=1),(e.KeyS||e.ArrowDown||e.b)&&(t-=1),(e.KeyA||e.ArrowLeft||e.l)&&(i-=1),(e.KeyD||e.ArrowRight||e.r)&&(i+=1),t||i){const c=9*n,h=Math.sin(Ze.yaw),l=Math.cos(Ze.yaw),u=(h*t+l*i)*c,d=(l*t-h*i)*c;mo(Ze.x+u,Ze.y+d)?mo(Ze.x+u,Ze.y)?mo(Ze.x,Ze.y+d)||(Ze.y+=d):Ze.x+=u:(Ze.x+=u,Ze.y+=d)}const s=Tt.rooms.find(c=>Ze.x>=c.x0&&Ze.x<=c.x1&&Ze.y>=c.y0&&Ze.y<=c.y1),a=(s?s.id==="103"&&Ze.x>49&&Ze.x<65&&Ze.y>66&&Ze.y<78?-1.5:0:-1)+5.33;Ct.position.copy(hn(Ze.x,Ze.y,a));const o=new O(Math.sin(Ze.yaw)*Math.cos(Ze.pitch),Math.sin(Ze.pitch),-Math.cos(Ze.yaw)*Math.cos(Ze.pitch));Ct.lookAt(Ct.position.clone().add(o)),s&&s.id!==Ze.room&&(Ze.room=s.id,sr(`WALK THROUGH · EYE HEIGHT 5' 4"`,s.name))}window.addEventListener("keydown",n=>{if(Ye.mode==="walk"){if(n.code==="Escape"){Si("orbit");return}Ze.keys[n.code]=!0,n.code.startsWith("Arrow")&&n.preventDefault()}});window.addEventListener("keyup",n=>{Ze.keys[n.code]=!1});document.querySelectorAll("#walk-pad button").forEach(n=>{const e=n.dataset.k,t=s=>{s.preventDefault(),Ze.keys[e]=!0},i=()=>{Ze.keys[e]=!1};n.addEventListener("pointerdown",t),n.addEventListener("pointerup",i),n.addEventListener("pointerleave",i),n.addEventListener("pointercancel",i)});const go=new tp;let Cn=null;It.domElement.addEventListener("pointerdown",n=>{Cn={x:n.clientX,y:n.clientY,t:performance.now(),lx:n.clientX,ly:n.clientY},Ye.mode==="walk"&&It.domElement.setPointerCapture(n.pointerId)});It.domElement.addEventListener("pointermove",n=>{Ye.mode==="walk"&&Cn&&(Ze.yaw+=(n.clientX-Cn.lx)*.005,Ze.pitch=Math.max(-1.2,Math.min(1.2,Ze.pitch-(n.clientY-Cn.ly)*.004)),Cn.lx=n.clientX,Cn.ly=n.clientY)});It.domElement.addEventListener("pointerup",n=>{if(!Cn)return;const e=Math.hypot(n.clientX-Cn.x,n.clientY-Cn.y),t=performance.now()-Cn.t;if(Cn=null,e>6||t>600||Ye.mode==="walk")return;const i=It.domElement.getBoundingClientRect(),s=new re((n.clientX-i.left)/i.width*2-1,-((n.clientY-i.top)/i.height)*2+1);go.setFromCamera(s,_i);const r=go.intersectObjects(_u,!1)[0];if(r){ys(r.object.userData.room,!1);return}const a=go.ray.intersectPlane(new An(new O(0,1,0),1),new O);if(a){const o=a.x+pt,c=-a.z+Et,h=_a.find(l=>o>=l.x0&&o<=l.x1&&c>=l.y0&&c<=l.y1);if(h){ys(h.id,!1);return}}va()});function rr(n){const e=Ce("toast");e.textContent=n,e.hidden=!1,clearTimeout(rr._t),rr._t=setTimeout(()=>e.hidden=!0,2200)}Ce("t-reset").onclick=()=>{Ye.mode==="walk"&&Si("orbit"),Ye.mode==="plan"?Si("plan"):Cu()};Ce("t-save").onclick=()=>{try{It.render(Qt,_i);const n=document.createElement("a");n.href=It.domElement.toDataURL("image/png"),n.download="weberman-residence.png",n.click(),rr("Saved a view of the model.")}catch{rr("The image could not be saved.")}};Ce("t-full").onclick=()=>{var e;const n=document.documentElement;document.fullscreenElement?document.exitFullscreen():(((e=n.requestFullscreen)==null?void 0:e.call(n))??Promise.reject()).catch(()=>rr("Full screen is unavailable in this browser."))};function Fl(n,e){Ce("modal-title").textContent=n,Ce("modal-body").innerHTML=e,Ce("modal").hidden=!1}Ce("modal-close").onclick=()=>Ce("modal").hidden=!0;Ce("modal").onclick=n=>{n.target.id==="modal"&&(Ce("modal").hidden=!0)};const Pu=()=>`<table>${Au.map(n=>`<tr><td colspan="3"><b>${n}</b></td></tr>`+Tt.rooms.filter(e=>e.wing===n).map(e=>`<tr><td>${e.id}</td><td>${e.name}${e.cond?"":" (unconditioned)"}</td><td style="text-align:right">${e.area} SF · ${(e.area*Xs).toFixed(1)} m²</td></tr>`).join("")).join("")}<tr><td colspan="3"><b>Covered Outdoor (Not Conditioned)</b></td></tr>${(Tt.covered||[]).map(n=>`<tr><td>${n.id}</td><td>${n.name}</td><td style="text-align:right">${n.area} SF · ${(n.area*Xs).toFixed(1)} m²</td></tr>`).join("")}<tr><td></td><td><b>Total Conditioned</b></td><td style="text-align:right"><b>${Tt.total.toLocaleString()} SF · ${Math.round(Tt.total*Xs)} m²</b></td></tr></table>`;Ce("btn-drawings").onclick=()=>{Fl("Drawings",'<div class="tabs"><button class="on" data-img="Floor_Plan.png">Floor Plan</button><button data-img="Site_Plan.png">Site Plan</button><button data-img="prog">Room Program</button></div><div id="dw"><img src="./Floor_Plan.png" alt="Floor plan"></div>'),document.querySelectorAll(".tabs button").forEach(n=>n.onclick=()=>{document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("on",e===n)),Ce("dw").innerHTML=n.dataset.img==="prog"?Pu():`<img src="./${n.dataset.img}" alt="${n.textContent}">`})};const Lu=`<h3>Concept</h3><p>A low, warm courtyard house for a mountain site, drawing on Bali, Japan and mid-century modernism rather than the cabin. Four single-storey pavilions wrap a 36 × 28 ft courtyard: <b>living</b> to the north facing the mountains, <b>sleeping</b> to the east, <b>wellness + gym</b> to the south on the pool, and <b>studio + arrival</b> to the west. Glazed engawas on the east and west and an open-air covered walkway on the south link them all, so every room looks into the garden. Deep 6 to 8 ft eaves, a butterfly roof over the living pavilion, standing seam metal, white lime-plaster panels with charred-timber siding, bronze windows, walnut and cherry inside, limestone, a cedar engawa and rammed earth.</p>
<h3>Model Notes</h3><p>Geometry is generated from the same plan data as the 2D drawings. Wall heights run up to the underside of each roof: 10 to 14 ft, with the butterfly roof rising from 12' 7" at the valley to about 14' at the walls. Areas are measured to wall centerlines. Furniture and equipment are simple blocks at true size. The lot, grades and mountain backdrop are illustrative only.</p>${Pu()}`;Ce("btn-about").onclick=()=>Fl("About This Model",Lu);Ce("btn-notes").onclick=()=>Fl("Model Notes",Lu);function Sa(){const n=ri.clientWidth,e=ri.clientHeight;It.setSize(n,e),Es.setSize(n,e),Ct.aspect=n/e,Ct.updateProjectionMatrix();const t=62;bn.left=-t*n/e,bn.right=t*n/e,bn.top=t,bn.bottom=-t,bn.updateProjectionMatrix()}window.addEventListener("resize",Sa);new ResizeObserver(Sa).observe(ri);let Mh=performance.now(),e1=0;function Du(n){const e=Math.min(.05,(n-Mh)/1e3);if(Mh=n,cn&&Ye.mode==="orbit"){let i=Math.min(1,(n-cn.start)/cn.dur);const s=i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;Ct.position.lerpVectors(cn.p0,cn.p1,s),rn.target.lerpVectors(cn.t0,cn.t1v,s),Ct.fov=cn.f0+(cn.f1-cn.f0)*s,Ct.updateProjectionMatrix(),i>=1&&(cn=null)}Ye.mode==="orbit"?rn.update():Ye.mode==="plan"?Jt.update():j_(e);const t=Ye.mode==="orbit"?Ct.position.distanceTo(rn.target):Ye.mode==="plan"?999:0;dn.detail.visible=Ye.furn&&t<(Wn()?150:240),It.render(Qt,_i),Es.render(Qt,_i),++e1===3&&(Ce("loading").classList.add("done"),window.__ready=!0),requestAnimationFrame(Du)}Sa();ba("day");Ol();const Mi=new URLSearchParams(location.search);or(Ul[Mi.get("view")]?Mi.get("view"):"aerial",!0);Mi.get("mode")&&Si(Mi.get("mode"));Mi.get("light")==="eve"&&ba("eve");Mi.get("roof")==="0"&&bi(!1);Mi.get("room")&&ys(Mi.get("room"),!0);requestAnimationFrame(Du);rn.addEventListener("start",()=>{cn=null});window.app={goView:or,setMode:Si,select:ys,deselect:va,setRoof:bi,setLight:ba,setCut:yi,setOverlay:Ys,state:Ye,renderer:It,scene:Qt,get camera(){return _i}};
