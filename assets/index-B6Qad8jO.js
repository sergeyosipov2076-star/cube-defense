(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="160",xc=0,qa=1,vc=2,oa=1,yc=2,pn=3,Nn=0,Lt=1,mn=2,Pn=0,Ni=1,Ya=2,$a=3,ja=4,Mc=5,jn=100,Sc=101,Ec=102,Ka=103,Za=104,bc=200,Tc=201,wc=202,Ac=203,Xs=204,qs=205,Cc=206,Rc=207,Dc=208,Lc=209,Pc=210,Fc=211,Uc=212,Ic=213,Nc=214,Oc=0,Bc=1,zc=2,kr=3,kc=4,Hc=5,Gc=6,Vc=7,la=0,Wc=1,Xc=2,Fn=0,qc=1,Yc=2,$c=3,jc=4,Kc=5,Zc=6,Sl=300,Hi=301,Gi=302,Ys=303,$s=304,jr=306,js=1e3,Yt=1001,Ks=1002,xt=1003,Ja=1004,us=1005,zt=1006,Jc=1007,ar=1008,Un=1009,Qc=1010,ed=1011,ca=1012,El=1013,Dn=1014,Ln=1015,or=1016,bl=1017,Tl=1018,ei=1020,td=1021,$t=1023,nd=1024,id=1025,ti=1026,Vi=1027,rd=1028,wl=1029,sd=1030,Al=1031,Cl=1033,hs=33776,fs=33777,ps=33778,ms=33779,Qa=35840,eo=35841,to=35842,no=35843,Rl=36196,io=37492,ro=37496,so=37808,ao=37809,oo=37810,lo=37811,co=37812,uo=37813,ho=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,xo=37820,vo=37821,gs=36492,yo=36494,Mo=36495,ad=36283,So=36284,Eo=36285,bo=36286,Dl=3e3,ni=3001,od=3200,ld=3201,Ll=0,cd=1,Ht="",vt="srgb",vn="srgb-linear",da="display-p3",Kr="display-p3-linear",Hr="linear",Je="srgb",Gr="rec709",Vr="p3",xi=7680,To=519,dd=512,ud=513,hd=514,Pl=515,fd=516,pd=517,md=518,gd=519,wo=35044,Ao="300 es",Zs=1035,gn=2e3,Wr=2001;class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_s=Math.PI/180,Js=180/Math.PI;function ur(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function _d(i,e){return(i%e+e)%e}function xs(i,e,t){return(1-t)*i+t*e}function Co(i){return(i&i-1)===0&&i!==0}function Qs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],m=n[5],x=n[8],_=r[0],f=r[3],u=r[6],b=r[1],S=r[4],T=r[7],L=r[2],C=r[5],A=r[8];return s[0]=o*_+a*b+l*L,s[3]=o*f+a*S+l*C,s[6]=o*u+a*T+l*A,s[1]=c*_+d*b+h*L,s[4]=c*f+d*S+h*C,s[7]=c*u+d*T+h*A,s[2]=p*_+m*b+x*L,s[5]=p*f+m*S+x*C,s[8]=p*u+m*T+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,p=a*l-d*s,m=c*s-o*l,x=t*h+n*p+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=h*_,e[1]=(r*c-d*n)*_,e[2]=(a*n-r*o)*_,e[3]=p*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vs.makeScale(e,t)),this}rotate(e){return this.premultiply(vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new Be;function Fl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xd(){const i=Xr("canvas");return i.style.display="block",i}const Ro={};function sr(i){i in Ro||(Ro[i]=!0,console.warn(i))}const Do=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lo=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_r={[vn]:{transfer:Hr,primaries:Gr,toReference:i=>i,fromReference:i=>i},[vt]:{transfer:Je,primaries:Gr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Kr]:{transfer:Hr,primaries:Vr,toReference:i=>i.applyMatrix3(Lo),fromReference:i=>i.applyMatrix3(Do)},[da]:{transfer:Je,primaries:Vr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Lo),fromReference:i=>i.applyMatrix3(Do).convertLinearToSRGB()}},vd=new Set([vn,Kr]),Ye={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=_r[e].toReference,r=_r[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return _r[i].primaries},getTransfer:function(i){return i===Ht?Hr:_r[i].transfer}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class Ul{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=Xr("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Oi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yd=0;class Il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ms(r[o].image)):s.push(Ms(r[o]))}else s=Ms(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ul.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Md=0;class Pt extends Yi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Yt,r=Yt,s=zt,o=ar,a=$t,l=Un,c=Pt.DEFAULT_ANISOTROPY,d=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ur(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ni?vt:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?ni:Dl}set encoding(e){sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ni?vt:Ht}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Sl;Pt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],x=l[9],_=l[2],f=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-_)<.01&&Math.abs(x-f)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+_)<.1&&Math.abs(x+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,T=(m+1)/2,L=(u+1)/2,C=(d+p)/4,A=(h+_)/4,K=(x+f)/4;return S>T&&S>L?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=C/n,s=A/n):T>L?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=C/r,s=K/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=K/s),this.set(n,r,s,t),this}let b=Math.sqrt((f-x)*(f-x)+(h-_)*(h-_)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(f-x)/b,this.y=(h-_)/b,this.z=(p-d)/b,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sd extends Yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ni?vt:Ht),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Il(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Sd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nl extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ed extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],h=n[r+3];const p=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(h!==_||l!==p||c!==m||d!==x){let f=1-a;const u=l*p+c*m+d*x+h*_,b=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const L=Math.sqrt(S),C=Math.atan2(L,u*b);f=Math.sin(f*C)/L,a=Math.sin(a*C)/L}const T=a*b;if(l=l*f+p*T,c=c*f+m*T,d=d*f+x*T,h=h*f+_*T,f===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],h=s[o],p=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+d*h+l*m-c*p,e[t+1]=l*x+d*p+c*h-a*m,e[t+2]=c*x+d*m+a*p-l*h,e[t+3]=d*x-a*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),h=a(s/2),p=l(n/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*d*h+c*m*x,this._y=c*m*h-p*d*x,this._z=c*d*x+p*m*h,this._w=c*d*h-p*m*x;break;case"YXZ":this._x=p*d*h+c*m*x,this._y=c*m*h-p*d*x,this._z=c*d*x-p*m*h,this._w=c*d*h+p*m*x;break;case"ZXY":this._x=p*d*h-c*m*x,this._y=c*m*h+p*d*x,this._z=c*d*x+p*m*h,this._w=c*d*h-p*m*x;break;case"ZYX":this._x=p*d*h-c*m*x,this._y=c*m*h+p*d*x,this._z=c*d*x-p*m*h,this._w=c*d*h+p*m*x;break;case"YZX":this._x=p*d*h+c*m*x,this._y=c*m*h+p*d*x,this._z=c*d*x-p*m*h,this._w=c*d*h-p*m*x;break;case"XZY":this._x=p*d*h-c*m*x,this._y=c*m*h-p*d*x,this._z=c*d*x+p*m*h,this._w=c*d*h+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,p=Math.sin(t*d)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new P,Po=new hr;class fr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),vr.subVectors(this.max,er),yi.subVectors(e.a,er),Mi.subVectors(e.b,er),Si.subVectors(e.c,er),bn.subVectors(Mi,yi),Tn.subVectors(Si,Mi),Wn.subVectors(yi,Si);let t=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Wn.z,Wn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Wn.z,0,-Wn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Wn.y,Wn.x,0];return!Es(t,yi,Mi,Si,vr)||(t=[1,0,0,0,1,0,0,0,1],!Es(t,yi,Mi,Si,vr))?!1:(yr.crossVectors(bn,Tn),t=[yr.x,yr.y,yr.z],Es(t,yi,Mi,Si,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new P,new P,new P,new P,new P,new P,new P,new P],Gt=new P,xr=new fr,yi=new P,Mi=new P,Si=new P,bn=new P,Tn=new P,Wn=new P,er=new P,vr=new P,yr=new P,Xn=new P;function Es(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xn.fromArray(i,s);const a=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),d=n.dot(Xn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const bd=new fr,tr=new P,bs=new P;class ua{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(bs)),this.expandByPoint(tr.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new P,Ts=new P,Mr=new P,wn=new P,ws=new P,Sr=new P,As=new P;class Ol{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ts.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(Ts);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=wn.dot(this.direction),l=-wn.dot(Mr),c=wn.lengthSq(),d=Math.abs(1-o*o);let h,p,m,x;if(d>0)if(h=o*l-a,p=o*a-l,x=s*d,h>=0)if(p>=-x)if(p<=x){const _=1/d;h*=_,p*=_,m=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p<=-x?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c):p<=x?(h=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ts).addScaledVector(Mr,p),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),r=dn.dot(dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,r,s){ws.subVectors(t,e),Sr.subVectors(n,e),As.crossVectors(ws,Sr);let o=this.direction.dot(As),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const l=a*this.direction.dot(Sr.crossVectors(wn,Sr));if(l<0)return null;const c=a*this.direction.dot(ws.cross(wn));if(c<0||l+c>o)return null;const d=-a*wn.dot(As);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,r,s,o,a,l,c,d,h,p,m,x,_,f){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,h,p,m,x,_,f)}set(e,t,n,r,s,o,a,l,c,d,h,p,m,x,_,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=m,u[7]=x,u[11]=_,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),o=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*d,m=o*h,x=a*d,_=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=p-_*c,t[9]=-a*l,t[2]=_-p*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*d,m=l*h,x=c*d,_=c*h;t[0]=p+_*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-x,t[6]=_+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*d,m=l*h,x=c*d,_=c*h;t[0]=p-_*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*d,t[9]=_-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*d,m=o*h,x=a*d,_=a*h;t[0]=l*d,t[4]=x*c-m,t[8]=p*c+_,t[1]=l*h,t[5]=_*c+p,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*d,t[4]=_-p*h,t[8]=x*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+x,t[10]=p-_*h}else if(e.order==="XZY"){const p=o*l,m=o*c,x=a*l,_=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=p*h+_,t[5]=o*d,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*d,t[10]=_*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Td,e,wd)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),An.crossVectors(n,It),An.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),An.crossVectors(n,It)),An.normalize(),Er.crossVectors(It,An),r[0]=An.x,r[4]=Er.x,r[8]=It.x,r[1]=An.y,r[5]=Er.y,r[9]=It.y,r[2]=An.z,r[6]=Er.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],m=n[13],x=n[2],_=n[6],f=n[10],u=n[14],b=n[3],S=n[7],T=n[11],L=n[15],C=r[0],A=r[4],K=r[8],M=r[12],E=r[1],H=r[5],V=r[9],ie=r[13],R=r[2],B=r[6],k=r[10],X=r[14],G=r[3],W=r[7],q=r[11],Q=r[15];return s[0]=o*C+a*E+l*R+c*G,s[4]=o*A+a*H+l*B+c*W,s[8]=o*K+a*V+l*k+c*q,s[12]=o*M+a*ie+l*X+c*Q,s[1]=d*C+h*E+p*R+m*G,s[5]=d*A+h*H+p*B+m*W,s[9]=d*K+h*V+p*k+m*q,s[13]=d*M+h*ie+p*X+m*Q,s[2]=x*C+_*E+f*R+u*G,s[6]=x*A+_*H+f*B+u*W,s[10]=x*K+_*V+f*k+u*q,s[14]=x*M+_*ie+f*X+u*Q,s[3]=b*C+S*E+T*R+L*G,s[7]=b*A+S*H+T*B+L*W,s[11]=b*K+S*V+T*k+L*q,s[15]=b*M+S*ie+T*X+L*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],m=e[14],x=e[3],_=e[7],f=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*p+n*c*p+r*a*m-n*l*m)+_*(+t*l*m-t*c*p+s*o*p-r*o*m+r*c*d-s*l*d)+f*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*d-n*c*d)+u*(-r*a*d-t*l*h+t*a*p+r*o*h-n*o*p+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],m=e[11],x=e[12],_=e[13],f=e[14],u=e[15],b=h*f*c-_*p*c+_*l*m-a*f*m-h*l*u+a*p*u,S=x*p*c-d*f*c-x*l*m+o*f*m+d*l*u-o*p*u,T=d*_*c-x*h*c+x*a*m-o*_*m-d*a*u+o*h*u,L=x*h*l-d*_*l-x*a*p+o*_*p+d*a*f-o*h*f,C=t*b+n*S+r*T+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*p*s-h*f*s-_*r*m+n*f*m+h*r*u-n*p*u)*A,e[2]=(a*f*s-_*l*s+_*r*c-n*f*c-a*r*u+n*l*u)*A,e[3]=(h*l*s-a*p*s-h*r*c+n*p*c+a*r*m-n*l*m)*A,e[4]=S*A,e[5]=(d*f*s-x*p*s+x*r*m-t*f*m-d*r*u+t*p*u)*A,e[6]=(x*l*s-o*f*s-x*r*c+t*f*c+o*r*u-t*l*u)*A,e[7]=(o*p*s-d*l*s+d*r*c-t*p*c-o*r*m+t*l*m)*A,e[8]=T*A,e[9]=(x*h*s-d*_*s-x*n*m+t*_*m+d*n*u-t*h*u)*A,e[10]=(o*_*s-x*a*s+x*n*c-t*_*c-o*n*u+t*a*u)*A,e[11]=(d*a*s-o*h*s-d*n*c+t*h*c+o*n*m-t*a*m)*A,e[12]=L*A,e[13]=(d*_*r-x*h*r+x*n*p-t*_*p-d*n*f+t*h*f)*A,e[14]=(x*a*r-o*_*r-x*n*l+t*_*l+o*n*f-t*a*f)*A,e[15]=(o*h*r-d*a*r+d*n*l-t*h*l-o*n*p+t*a*p)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,h=a+a,p=s*c,m=s*d,x=s*h,_=o*d,f=o*h,u=a*h,b=l*c,S=l*d,T=l*h,L=n.x,C=n.y,A=n.z;return r[0]=(1-(_+u))*L,r[1]=(m+T)*L,r[2]=(x-S)*L,r[3]=0,r[4]=(m-T)*C,r[5]=(1-(p+u))*C,r[6]=(f+b)*C,r[7]=0,r[8]=(x+S)*A,r[9]=(f-b)*A,r[10]=(1-(p+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ei.set(r[0],r[1],r[2]).length();const o=Ei.set(r[4],r[5],r[6]).length(),a=Ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const c=1/s,d=1/o,h=1/a;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=d,Vt.elements[5]*=d,Vt.elements[6]*=d,Vt.elements[8]*=h,Vt.elements[9]*=h,Vt.elements[10]*=h,t.setFromRotationMatrix(Vt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=gn){const l=this.elements,c=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let m,x;if(a===gn)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Wr)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=gn){const l=this.elements,c=1/(t-e),d=1/(n-r),h=1/(o-s),p=(t+e)*c,m=(n+r)*d;let x,_;if(a===gn)x=(o+s)*h,_=-2*h;else if(a===Wr)x=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ei=new P,Vt=new dt,Td=new P(0,0,0),wd=new P(1,1,1),An=new P,Er=new P,It=new P,Fo=new dt,Uo=new hr;class Zr{constructor(e=0,t=0,n=0,r=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ad=0;const Io=new P,bi=new hr,un=new dt,br=new P,nr=new P,Cd=new P,Rd=new hr,No=new P(1,0,0),Oo=new P(0,1,0),Bo=new P(0,0,1),Dd={type:"added"},Ld={type:"removed"};class bt extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new P,t=new Zr,n=new hr,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Be}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return Io.copy(e).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(nr,br,this.up):un.lookAt(br,nr,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(un),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Rd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new P(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new P,hn=new P,Cs=new P,fn=new P,Ti=new P,wi=new P,zo=new P,Rs=new P,Ds=new P,Ls=new P;let Tr=!1;class Xt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Wt.subVectors(r,t),hn.subVectors(n,t),Cs.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(hn),l=Wt.dot(Cs),c=hn.dot(hn),d=hn.dot(Cs),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,m=(c*l-a*d)*p,x=(o*d-a*l)*p;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,r,s,o,a,l){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static isFrontFacing(e,t,n,r){return Wt.subVectors(n,t),hn.subVectors(e,t),Wt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Wt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ti.subVectors(r,n),wi.subVectors(s,n),Rs.subVectors(e,n);const l=Ti.dot(Rs),c=wi.dot(Rs);if(l<=0&&c<=0)return t.copy(n);Ds.subVectors(e,r);const d=Ti.dot(Ds),h=wi.dot(Ds);if(d>=0&&h<=d)return t.copy(r);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Ti,o);Ls.subVectors(e,s);const m=Ti.dot(Ls),x=wi.dot(Ls);if(x>=0&&m<=x)return t.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(wi,a);const f=d*x-m*h;if(f<=0&&h-d>=0&&m-x>=0)return zo.subVectors(s,r),a=(h-d)/(h-d+(m-x)),t.copy(r).addScaledVector(zo,a);const u=1/(f+_+p);return o=_*u,a=p*u,t.copy(n).addScaledVector(Ti,o).addScaledVector(wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=_d(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ps(o,s,e+1/3),this.g=Ps(o,s,e),this.b=Ps(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ye.fromWorkingColorSpace(Et.copy(this),e),Math.round(Dt(Et.r*255,0,255))*65536+Math.round(Dt(Et.g*255,0,255))*256+Math.round(Dt(Et.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=vt){Ye.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(wr);const n=xs(Cn.h,wr.h,t),r=xs(Cn.s,wr.s,t),s=xs(Cn.l,wr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ge;Ge.NAMES=Bl;let Pd=0;class pr extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Ni,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=qs,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xs&&(n.blendSrc=this.blendSrc),this.blendDst!==qs&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zl extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new P,Ar=new We;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wo&&(e.usage=this.usage),e}}class kl extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hl extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ii extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fd=0;const Bt=new dt,Fs=new bt,Ai=new P,Nt=new fr,ir=new fr,mt=new P;class hi extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?Hl:kl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Nt.min,ir.min),Nt.expandByPoint(mt),mt.addVectors(Nt.max,ir.max),Nt.expandByPoint(mt)):(Nt.expandByPoint(ir.min),Nt.expandByPoint(ir.max))}Nt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)mt.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(e,c),mt.add(Ai)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<a;E++)c[E]=new P,d[E]=new P;const h=new P,p=new P,m=new P,x=new We,_=new We,f=new We,u=new P,b=new P;function S(E,H,V){h.fromArray(r,E*3),p.fromArray(r,H*3),m.fromArray(r,V*3),x.fromArray(o,E*2),_.fromArray(o,H*2),f.fromArray(o,V*2),p.sub(h),m.sub(h),_.sub(x),f.sub(x);const ie=1/(_.x*f.y-f.x*_.y);isFinite(ie)&&(u.copy(p).multiplyScalar(f.y).addScaledVector(m,-_.y).multiplyScalar(ie),b.copy(m).multiplyScalar(_.x).addScaledVector(p,-f.x).multiplyScalar(ie),c[E].add(u),c[H].add(u),c[V].add(u),d[E].add(b),d[H].add(b),d[V].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,H=T.length;E<H;++E){const V=T[E],ie=V.start,R=V.count;for(let B=ie,k=ie+R;B<k;B+=3)S(n[B+0],n[B+1],n[B+2])}const L=new P,C=new P,A=new P,K=new P;function M(E){A.fromArray(s,E*3),K.copy(A);const H=c[E];L.copy(H),L.sub(A.multiplyScalar(A.dot(H))).normalize(),C.crossVectors(K,H);const ie=C.dot(d[E])<0?-1:1;l[E*4]=L.x,l[E*4+1]=L.y,l[E*4+2]=L.z,l[E*4+3]=ie}for(let E=0,H=T.length;E<H;++E){const V=T[E],ie=V.start,R=V.count;for(let B=ie,k=ie+R;B<k;B+=3)M(n[B+0]),M(n[B+1]),M(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,d=new P,h=new P;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(d),l.add(d),c.add(d),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,p=new c.constructor(l.length*d);let m=0,x=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let u=0;u<d;u++)p[x++]=c[m++]}return new on(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const p=c[d],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new dt,qn=new Ol,Cr=new ua,Ho=new P,Ci=new P,Ri=new P,Di=new P,Us=new P,Rr=new P,Dr=new We,Lr=new We,Pr=new We,Go=new P,Vo=new P,Wo=new P,Fr=new P,Ur=new P;class ke extends bt{constructor(e=new hi,t=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Us.fromBufferAttribute(h,e),o?Rr.addScaledVector(Us,d):Rr.addScaledVector(Us.sub(t),d))}t.add(Rr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(s),qn.copy(e.ray).recast(e.near),!(Cr.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Cr,Ho)===null||qn.origin.distanceToSquared(Ho)>(e.far-e.near)**2))&&(ko.copy(s).invert(),qn.copy(e.ray).applyMatrix4(ko),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=p.length;x<_;x++){const f=p[x],u=o[f.materialIndex],b=Math.max(f.start,m.start),S=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let T=b,L=S;T<L;T+=3){const C=a.getX(T),A=a.getX(T+1),K=a.getX(T+2);r=Ir(this,u,e,n,c,d,h,C,A,K),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=x,u=_;f<u;f+=3){const b=a.getX(f),S=a.getX(f+1),T=a.getX(f+2);r=Ir(this,o,e,n,c,d,h,b,S,T),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=p.length;x<_;x++){const f=p[x],u=o[f.materialIndex],b=Math.max(f.start,m.start),S=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=b,L=S;T<L;T+=3){const C=T,A=T+1,K=T+2;r=Ir(this,u,e,n,c,d,h,C,A,K),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let f=x,u=_;f<u;f+=3){const b=f,S=f+1,T=f+2;r=Ir(this,o,e,n,c,d,h,b,S,T),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function Ud(i,e,t,n,r,s,o,a){let l;if(e.side===Lt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Nn,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:i}}function Ir(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ci),i.getVertexPosition(l,Ri),i.getVertexPosition(c,Di);const d=Ud(i,e,t,n,Ci,Ri,Di,Fr);if(d){r&&(Dr.fromBufferAttribute(r,a),Lr.fromBufferAttribute(r,l),Pr.fromBufferAttribute(r,c),d.uv=Xt.getInterpolation(Fr,Ci,Ri,Di,Dr,Lr,Pr,new We)),s&&(Dr.fromBufferAttribute(s,a),Lr.fromBufferAttribute(s,l),Pr.fromBufferAttribute(s,c),d.uv1=Xt.getInterpolation(Fr,Ci,Ri,Di,Dr,Lr,Pr,new We),d.uv2=d.uv1),o&&(Go.fromBufferAttribute(o,a),Vo.fromBufferAttribute(o,l),Wo.fromBufferAttribute(o,c),d.normal=Xt.getInterpolation(Fr,Ci,Ri,Di,Go,Vo,Wo,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};Xt.getNormal(Ci,Ri,Di,h.normal),d.face=h}return d}class Ve extends hi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let p=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ii(c,3)),this.setAttribute("normal",new ii(d,3)),this.setAttribute("uv",new ii(h,2));function x(_,f,u,b,S,T,L,C,A,K,M){const E=T/A,H=L/K,V=T/2,ie=L/2,R=C/2,B=A+1,k=K+1;let X=0,G=0;const W=new P;for(let q=0;q<k;q++){const Q=q*H-ie;for(let ee=0;ee<B;ee++){const z=ee*E-V;W[_]=z*b,W[f]=Q*S,W[u]=R,c.push(W.x,W.y,W.z),W[_]=0,W[f]=0,W[u]=C>0?1:-1,d.push(W.x,W.y,W.z),h.push(ee/A),h.push(1-q/K),X+=1}}for(let q=0;q<K;q++)for(let Q=0;Q<A;Q++){const ee=p+Q+B*q,z=p+Q+B*(q+1),Y=p+(Q+1)+B*(q+1),oe=p+(Q+1)+B*q;l.push(ee,z,oe),l.push(z,Y,oe),G+=6}a.addGroup(m,G,M),m+=G,p+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ve(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Wi(i[t]);for(const r in n)e[r]=n[r]}return e}function Id(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gl(i){return i.getRenderTarget()===null?i.outputColorSpace:Ye.workingColorSpace}const Nd={clone:Wi,merge:Ct};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends Vl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Pi=1;class zd extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(Li,Pi,e,t);r.layers=this.layers,this.add(r);const s=new kt(Li,Pi,e,t);s.layers=this.layers,this.add(s);const o=new kt(Li,Pi,e,t);o.layers=this.layers,this.add(o);const a=new kt(Li,Pi,e,t);a.layers=this.layers,this.add(a);const l=new kt(Li,Pi,e,t);l.layers=this.layers,this.add(l);const c=new kt(Li,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(h,p,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Wl extends Pt{constructor(e,t,n,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kd extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ni?vt:Ht),this.texture=new Wl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ve(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Pn});s.uniforms.tEquirect.value=t;const o=new ke(r,s),a=t.minFilter;return t.minFilter===ar&&(t.minFilter=zt),new zd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Is=new P,Hd=new P,Gd=new Be;class Rn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Is.subVectors(n,t).cross(Hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gd.getNormalMatrix(e),r=this.coplanarPoint(Is).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new ua,Nr=new P;class fa{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,o=new Rn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],p=r[7],m=r[8],x=r[9],_=r[10],f=r[11],u=r[12],b=r[13],S=r[14],T=r[15];if(n[0].setComponents(l-s,p-c,f-m,T-u).normalize(),n[1].setComponents(l+s,p+c,f+m,T+u).normalize(),n[2].setComponents(l+o,p+d,f+x,T+b).normalize(),n[3].setComponents(l-o,p-d,f-x,T-b).normalize(),n[4].setComponents(l-a,p-h,f-_,T-S).normalize(),t===gn)n[5].setComponents(l+a,p+h,f+_,T+S).normalize();else if(t===Wr)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Nr.x=r.normal.x>0?e.max.x:e.min.x,Nr.y=r.normal.y>0?e.max.y:e.min.y,Nr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vd(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,d){const h=c.array,p=c.usage,m=h.byteLength,x=i.createBuffer();i.bindBuffer(d,x),i.bufferData(d,h,p),c.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const p=d.array,m=d._updateRange,x=d.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&x.length===0&&i.bufferSubData(h,0,p),x.length!==0){for(let _=0,f=x.length;_<f;_++){const u=x[_];t?i.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):i.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(h,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(i.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class pa extends hi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,h=e/a,p=t/l,m=[],x=[],_=[],f=[];for(let u=0;u<d;u++){const b=u*p-o;for(let S=0;S<c;S++){const T=S*h-s;x.push(T,-b,0),_.push(0,0,1),f.push(S/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const S=b+c*u,T=b+c*(u+1),L=b+1+c*(u+1),C=b+1+c*u;m.push(S,T,C),m.push(T,L,C)}this.setIndex(m),this.setAttribute("position",new ii(x,3)),this.setAttribute("normal",new ii(_,3)),this.setAttribute("uv",new ii(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iu=`#ifdef USE_IRIDESCENCE
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
#endif`,ru=`#ifdef USE_BUMPMAP
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
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mu=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Su=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
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
}`,Pu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nu=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Vu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eh=`#if defined( USE_POINTS_UV )
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
#endif`,th=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ih=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ah=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hh=`#ifdef USE_NORMALMAP
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
#endif`,fh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ph=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_h=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Th=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ah=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Ch=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dh=`#ifdef USE_SKINNING
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
#endif`,Lh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ph=`#ifdef USE_SKINNING
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
#endif`,Fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ih=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nh=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oh=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wh=`uniform sampler2D t2D;
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
}`,Xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$h=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jh=`#include <common>
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
}`,Kh=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zh=`#define DISTANCE
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
}`,Jh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rf=`#include <common>
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
}`,sf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,af=`#define LAMBERT
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
}`,of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lf=`#define MATCAP
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
}`,cf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,df=`#define NORMAL
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
}`,uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hf=`#define PHONG
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
}`,ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pf=`#define STANDARD
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
}`,mf=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,gf=`#define TOON
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
}`,_f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xf=`uniform float size;
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
}`,vf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ef=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pe={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:$d,alphatest_pars_fragment:jd,aomap_fragment:Kd,aomap_pars_fragment:Zd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:ru,clipping_planes_fragment:su,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:du,color_pars_vertex:uu,color_vertex:hu,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:_u,emissivemap_fragment:xu,emissivemap_pars_fragment:vu,colorspace_fragment:yu,colorspace_pars_fragment:Mu,envmap_fragment:Su,envmap_common_pars_fragment:Eu,envmap_pars_fragment:bu,envmap_pars_vertex:Tu,envmap_physical_pars_fragment:Ou,envmap_vertex:wu,fog_vertex:Au,fog_pars_vertex:Cu,fog_fragment:Ru,fog_pars_fragment:Du,gradientmap_pars_fragment:Lu,lightmap_fragment:Pu,lightmap_pars_fragment:Fu,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Iu,lights_pars_begin:Nu,lights_toon_fragment:Bu,lights_toon_pars_fragment:zu,lights_phong_fragment:ku,lights_phong_pars_fragment:Hu,lights_physical_fragment:Gu,lights_physical_pars_fragment:Vu,lights_fragment_begin:Wu,lights_fragment_maps:Xu,lights_fragment_end:qu,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:$u,logdepthbuf_pars_vertex:ju,logdepthbuf_vertex:Ku,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:Qu,map_particle_pars_fragment:eh,metalnessmap_fragment:th,metalnessmap_pars_fragment:nh,morphcolor_vertex:ih,morphnormal_vertex:rh,morphtarget_pars_vertex:sh,morphtarget_vertex:ah,normal_fragment_begin:oh,normal_fragment_maps:lh,normal_pars_fragment:ch,normal_pars_vertex:dh,normal_vertex:uh,normalmap_pars_fragment:hh,clearcoat_normal_fragment_begin:fh,clearcoat_normal_fragment_maps:ph,clearcoat_pars_fragment:mh,iridescence_pars_fragment:gh,opaque_fragment:_h,packing:xh,premultiplied_alpha_fragment:vh,project_vertex:yh,dithering_fragment:Mh,dithering_pars_fragment:Sh,roughnessmap_fragment:Eh,roughnessmap_pars_fragment:bh,shadowmap_pars_fragment:Th,shadowmap_pars_vertex:wh,shadowmap_vertex:Ah,shadowmask_pars_fragment:Ch,skinbase_vertex:Rh,skinning_pars_vertex:Dh,skinning_vertex:Lh,skinnormal_vertex:Ph,specularmap_fragment:Fh,specularmap_pars_fragment:Uh,tonemapping_fragment:Ih,tonemapping_pars_fragment:Nh,transmission_fragment:Oh,transmission_pars_fragment:Bh,uv_pars_fragment:zh,uv_pars_vertex:kh,uv_vertex:Hh,worldpos_vertex:Gh,background_vert:Vh,background_frag:Wh,backgroundCube_vert:Xh,backgroundCube_frag:qh,cube_vert:Yh,cube_frag:$h,depth_vert:jh,depth_frag:Kh,distanceRGBA_vert:Zh,distanceRGBA_frag:Jh,equirect_vert:Qh,equirect_frag:ef,linedashed_vert:tf,linedashed_frag:nf,meshbasic_vert:rf,meshbasic_frag:sf,meshlambert_vert:af,meshlambert_frag:of,meshmatcap_vert:lf,meshmatcap_frag:cf,meshnormal_vert:df,meshnormal_frag:uf,meshphong_vert:hf,meshphong_frag:ff,meshphysical_vert:pf,meshphysical_frag:mf,meshtoon_vert:gf,meshtoon_frag:_f,points_vert:xf,points_frag:vf,shadow_vert:yf,shadow_frag:Mf,sprite_vert:Sf,sprite_frag:Ef},ne={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},rn={basic:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Ct([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Ct([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Ct([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Ct([ne.points,ne.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Ct([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Ct([ne.common,ne.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Ct([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Ct([ne.sprite,ne.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Ct([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Ct([ne.lights,ne.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};rn.physical={uniforms:Ct([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Or={r:0,b:0,g:0};function bf(i,e,t,n,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,d,h=null,p=0,m=null;function x(f,u){let b=!1,S=u.isScene===!0?u.background:null;S&&S.isTexture&&(S=(u.backgroundBlurriness>0?t:e).get(S)),S===null?_(a,l):S&&S.isColor&&(_(S,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===jr)?(d===void 0&&(d=new ke(new Ve(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Wi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Ye.getTransfer(S.colorSpace)!==Je,(h!==S||p!==S.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=S,p=S.version,m=i.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ke(new pa(2,2),new li({name:"BackgroundMaterial",uniforms:Wi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,u){f.getRGB(Or,Gl(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,_(a,l)},render:x}}function Tf(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,d=!1;function h(R,B,k,X,G){let W=!1;if(o){const q=_(X,k,B);c!==q&&(c=q,m(c.object)),W=u(R,X,k,G),W&&b(R,X,k,G)}else{const q=B.wireframe===!0;(c.geometry!==X.id||c.program!==k.id||c.wireframe!==q)&&(c.geometry=X.id,c.program=k.id,c.wireframe=q,W=!0)}G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,K(R,B,k,X),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):s.bindVertexArrayOES(R)}function x(R){return n.isWebGL2?i.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,B,k){const X=k.wireframe===!0;let G=a[R.id];G===void 0&&(G={},a[R.id]=G);let W=G[B.id];W===void 0&&(W={},G[B.id]=W);let q=W[X];return q===void 0&&(q=f(p()),W[X]=q),q}function f(R){const B=[],k=[],X=[];for(let G=0;G<r;G++)B[G]=0,k[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:X,object:R,attributes:{},index:null}}function u(R,B,k,X){const G=c.attributes,W=B.attributes;let q=0;const Q=k.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const Y=G[ee];let oe=W[ee];if(oe===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;q++}return c.attributesNum!==q||c.index!==X}function b(R,B,k,X){const G={},W=B.attributes;let q=0;const Q=k.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let Y=W[ee];Y===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),G[ee]=oe,q++}c.attributes=G,c.attributesNum=q,c.index=X}function S(){const R=c.newAttributes;for(let B=0,k=R.length;B<k;B++)R[B]=0}function T(R){L(R,0)}function L(R,B){const k=c.newAttributes,X=c.enabledAttributes,G=c.attributeDivisors;k[R]=1,X[R]===0&&(i.enableVertexAttribArray(R),X[R]=1),G[R]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),G[R]=B)}function C(){const R=c.newAttributes,B=c.enabledAttributes;for(let k=0,X=B.length;k<X;k++)B[k]!==R[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function A(R,B,k,X,G,W,q){q===!0?i.vertexAttribIPointer(R,B,k,G,W):i.vertexAttribPointer(R,B,k,X,G,W)}function K(R,B,k,X){if(n.isWebGL2===!1&&(R.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const G=X.attributes,W=k.getAttributes(),q=B.defaultAttributeValues;for(const Q in W){const ee=W[Q];if(ee.location>=0){let z=G[Q];if(z===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){const Y=z.normalized,oe=z.itemSize,ge=t.get(z);if(ge===void 0)continue;const me=ge.buffer,Ce=ge.type,De=ge.bytesPerElement,Se=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||z.gpuType===El);if(z.isInterleavedBufferAttribute){const He=z.data,F=He.stride,Tt=z.offset;if(He.isInstancedInterleavedBuffer){for(let xe=0;xe<ee.locationSize;xe++)L(ee.location+xe,He.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let xe=0;xe<ee.locationSize;xe++)T(ee.location+xe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let xe=0;xe<ee.locationSize;xe++)A(ee.location+xe,oe/ee.locationSize,Ce,Y,F*De,(Tt+oe/ee.locationSize*xe)*De,Se)}else{if(z.isInstancedBufferAttribute){for(let He=0;He<ee.locationSize;He++)L(ee.location+He,z.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let He=0;He<ee.locationSize;He++)T(ee.location+He);i.bindBuffer(i.ARRAY_BUFFER,me);for(let He=0;He<ee.locationSize;He++)A(ee.location+He,oe/ee.locationSize,Ce,Y,oe*De,oe/ee.locationSize*He*De,Se)}}else if(q!==void 0){const Y=q[Q];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(ee.location,Y);break;case 3:i.vertexAttrib3fv(ee.location,Y);break;case 4:i.vertexAttrib4fv(ee.location,Y);break;default:i.vertexAttrib1fv(ee.location,Y)}}}}C()}function M(){V();for(const R in a){const B=a[R];for(const k in B){const X=B[k];for(const G in X)x(X[G].object),delete X[G];delete B[k]}delete a[R]}}function E(R){if(a[R.id]===void 0)return;const B=a[R.id];for(const k in B){const X=B[k];for(const G in X)x(X[G].object),delete X[G];delete B[k]}delete a[R.id]}function H(R){for(const B in a){const k=a[B];if(k[R.id]===void 0)continue;const X=k[R.id];for(const G in X)x(X[G].object),delete X[G];delete k[R.id]}}function V(){ie(),d=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:S,enableAttribute:T,disableUnusedAttributes:C}}function wf(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}function a(d,h){i.drawArrays(s,d,h),t.update(h,s,1)}function l(d,h,p){if(p===0)return;let m,x;if(r)m=i,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,d,h,p),t.update(h,s,p)}function c(d,h,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<p;x++)this.render(d[x],h[x]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,p);let x=0;for(let _=0;_<p;_++)x+=h[_];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Af(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,T=o||e.has("OES_texture_float"),L=S&&T,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:C}}function Cf(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Rn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||r;return r=p,n=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=d(h,p,0)},this.setState=function(h,p,m){const x=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,u=i.get(h);if(!r||x===null||x.length===0||s&&!f)s?d(null):c();else{const b=s?0:n,S=b*4;let T=u.clippingState||null;l.value=T,T=d(x,p,S,m);for(let L=0;L!==S;++L)T[L]=t[L];u.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,p,m,x){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,x!==!0||f===null){const u=m+_*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<u)&&(f=new Float32Array(u));for(let S=0,T=m;S!==_;++S,T+=4)o.copy(h[S]).applyMatrix4(b,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Rf(i){let e=new WeakMap;function t(o,a){return a===Ys?o.mapping=Hi:a===$s&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ys||a===$s)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kd(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ql extends Vl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,Xo=[.125,.215,.35,.446,.526,.582],Kn=20,Ns=new ql,qo=new Ge;let Os=null,Bs=0,zs=0;const $n=(1+Math.sqrt(5))/2,Fi=1/$n,Yo=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,$n,Fi),new P(0,$n,-Fi),new P(Fi,0,$n),new P(-Fi,0,$n),new P($n,Fi,0),new P(-$n,Fi,0)];class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Os,Bs,zs),e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Os=this._renderer.getRenderTarget(),Bs=this._renderer.getActiveCubeFace(),zs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:or,format:$t,colorSpace:vn,depthBuffer:!1},r=jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Df(s)),this._blurMaterial=Lf(s,e,t)}return r}_compileMaterial(e){const t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,r){const a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(qo),d.toneMapping=Fn,d.autoClear=!1;const m=new zl({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),x=new ke(new Ve,m);let _=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,_=!0):(m.color.copy(qo),_=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const S=this._cubeSize;Br(r,b*S,u>2?S:0,S,S),d.setRenderTarget(r),_&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Hi||e.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yo[(r-1)%Yo.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ke(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),_=s/x,f=isFinite(s)?1+Math.floor(d*_):Kn;f>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Kn}`);const u=[];let b=0;for(let A=0;A<Kn;++A){const K=A/_,M=Math.exp(-K*K/2);u.push(M),A===0?b+=M:A<f&&(b+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=x,p.mipInt.value=S-n;const T=this._sizeLods[r],L=3*T*(r>S-Ui?r-S+Ui:0),C=4*(this._cubeSize-T);Br(t,L,C,3*T,2*T),l.setRenderTarget(t),l.render(h,Ns)}}function Df(i){const e=[],t=[],n=[];let r=i;const s=i-Ui+1+Xo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Ui?l=Xo[o-i+Ui-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,x=6,_=3,f=2,u=1,b=new Float32Array(_*x*m),S=new Float32Array(f*x*m),T=new Float32Array(u*x*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,K=C>2?0:-1,M=[A,K,0,A+2/3,K,0,A+2/3,K+1,0,A,K,0,A+2/3,K+1,0,A,K+1,0];b.set(M,_*x*C),S.set(p,f*x*C);const E=[C,C,C,C,C,C];T.set(E,u*x*C)}const L=new hi;L.setAttribute("position",new on(b,_)),L.setAttribute("uv",new on(S,f)),L.setAttribute("faceIndex",new on(T,u)),e.push(L),r>Ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jo(i,e,t){const n=new oi(i,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Lf(i,e,t){const n=new Float32Array(Kn),r=new P(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ko(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Zo(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ys||l===$s,d=l===Hi||l===Gi;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new $o(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){t===null&&(t=new $o(i));const p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ff(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Uf(i,e,t,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const _=p.morphAttributes[x];for(let f=0,u=_.length;f<u;f++)e.remove(_[f])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const x in p)e.update(p[x],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const x in m){const _=m[x];for(let f=0,u=_.length;f<u;f++)e.update(_[f],i.ARRAY_BUFFER)}}function c(h){const p=[],m=h.index,x=h.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,T=b.length;S<T;S+=3){const L=b[S+0],C=b[S+1],A=b[S+2];p.push(L,C,C,A,A,L)}}else if(x!==void 0){const b=x.array;_=x.version;for(let S=0,T=b.length/3-1;S<T;S+=3){const L=S+0,C=S+1,A=S+2;p.push(L,C,C,A,A,L)}}else return;const f=new(Fl(p)?Hl:kl)(p,1);f.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,f)}function d(h){const p=s.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function If(i,e,t,n){const r=n.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function d(m,x){i.drawElements(s,x,a,m*l),t.update(x,s,1)}function h(m,x,_){if(_===0)return;let f,u;if(r)f=i,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](s,x,a,m*l,_),t.update(x,s,_)}function p(m,x,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<_;u++)this.render(m[u]/l,x[u]);else{f.multiDrawElementsWEBGL(s,x,0,a,m,0,_);let u=0;for(let b=0;b<_;b++)u+=x[b];t.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function Nf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Of(i,e){return i[0]-e[0]}function Bf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function zf(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let f=s.get(d);if(f===void 0||f.count!==_){let B=function(){ie.dispose(),s.delete(d),d.removeEventListener("dispose",B)};var m=B;f!==void 0&&f.texture.dispose();const S=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,L=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],K=d.morphAttributes.color||[];let M=0;S===!0&&(M=1),T===!0&&(M=2),L===!0&&(M=3);let E=d.attributes.position.count*M,H=1;E>e.maxTextureSize&&(H=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const V=new Float32Array(E*H*4*_),ie=new Nl(V,E,H,_);ie.type=Ln,ie.needsUpdate=!0;const R=M*4;for(let k=0;k<_;k++){const X=C[k],G=A[k],W=K[k],q=E*H*4*k;for(let Q=0;Q<X.count;Q++){const ee=Q*R;S===!0&&(o.fromBufferAttribute(X,Q),V[q+ee+0]=o.x,V[q+ee+1]=o.y,V[q+ee+2]=o.z,V[q+ee+3]=0),T===!0&&(o.fromBufferAttribute(G,Q),V[q+ee+4]=o.x,V[q+ee+5]=o.y,V[q+ee+6]=o.z,V[q+ee+7]=0),L===!0&&(o.fromBufferAttribute(W,Q),V[q+ee+8]=o.x,V[q+ee+9]=o.y,V[q+ee+10]=o.z,V[q+ee+11]=W.itemSize===4?o.w:1)}}f={count:_,texture:ie,size:new We(E,H)},s.set(d,f),d.addEventListener("dispose",B)}let u=0;for(let S=0;S<p.length;S++)u+=p[S];const b=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const x=p===void 0?0:p.length;let _=n[d.id];if(_===void 0||_.length!==x){_=[];for(let T=0;T<x;T++)_[T]=[T,0];n[d.id]=_}for(let T=0;T<x;T++){const L=_[T];L[0]=T,L[1]=p[T]}_.sort(Bf);for(let T=0;T<8;T++)T<x&&_[T][1]?(a[T][0]=_[T][0],a[T][1]=_[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(Of);const f=d.morphAttributes.position,u=d.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const L=a[T],C=L[0],A=L[1];C!==Number.MAX_SAFE_INTEGER&&A?(f&&d.getAttribute("morphTarget"+T)!==f[C]&&d.setAttribute("morphTarget"+T,f[C]),u&&d.getAttribute("morphNormal"+T)!==u[C]&&d.setAttribute("morphNormal"+T,u[C]),r[T]=A,b+=A):(f&&d.hasAttribute("morphTarget"+T)===!0&&d.deleteAttribute("morphTarget"+T),u&&d.hasAttribute("morphNormal"+T)===!0&&d.deleteAttribute("morphNormal"+T),r[T]=0)}const S=d.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function kf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Yl extends Pt{constructor(e,t,n,r,s,o,a,l,c,d){if(d=d!==void 0?d:ti,d!==ti&&d!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ti&&(n=Dn),n===void 0&&d===Vi&&(n=ei),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $l=new Pt,jl=new Yl(1,1);jl.compareFunction=Pl;const Kl=new Nl,Zl=new Ed,Jl=new Wl,Jo=[],Qo=[],el=new Float32Array(16),tl=new Float32Array(9),nl=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Jo[r];if(s===void 0&&(s=new Float32Array(r),Jo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jr(i,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),ht(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),ht(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),ht(t,e)}}function Xf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;nl.set(n),i.uniformMatrix2fv(this.addr,!1,nl),ht(t,n)}}function qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;tl.set(n),i.uniformMatrix3fv(this.addr,!1,tl),ht(t,n)}}function Yf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,n))return;el.set(n),i.uniformMatrix4fv(this.addr,!1,el),ht(t,n)}}function $f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),ht(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),ht(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),ht(t,e)}}function Jf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),ht(t,e)}}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),ht(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),ht(t,e)}}function np(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?jl:$l;t.setTexture2D(e||s,r)}function ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Zl,r)}function rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Jl,r)}function sp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kl,r)}function ap(i){switch(i){case 5126:return Hf;case 35664:return Gf;case 35665:return Vf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return $f;case 35667:case 35671:return jf;case 35668:case 35672:return Kf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Qf;case 36295:return ep;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return sp}}function op(i,e){i.uniform1fv(this.addr,e)}function lp(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function cp(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function dp(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function up(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hp(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fp(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pp(i,e){i.uniform1iv(this.addr,e)}function mp(i,e){i.uniform2iv(this.addr,e)}function gp(i,e){i.uniform3iv(this.addr,e)}function _p(i,e){i.uniform4iv(this.addr,e)}function xp(i,e){i.uniform1uiv(this.addr,e)}function vp(i,e){i.uniform2uiv(this.addr,e)}function yp(i,e){i.uniform3uiv(this.addr,e)}function Mp(i,e){i.uniform4uiv(this.addr,e)}function Sp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$l,s[o])}function Ep(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zl,s[o])}function bp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jl,s[o])}function Tp(i,e,t){const n=this.cache,r=e.length,s=Jr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kl,s[o])}function wp(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return dp;case 35674:return up;case 35675:return hp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return yp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Tp}}class Ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ap(t.type)}}class Cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wp(t.type)}}class Rp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ks=/(\w+)(\])?(\[|\.)?/g;function il(i,e){i.seq.push(e),i.map[e.id]=e}function Dp(i,e,t){const n=i.name,r=n.length;for(ks.lastIndex=0;;){const s=ks.exec(n),o=ks.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){il(t,c===void 0?new Ap(a,i,e):new Cp(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Rp(a),il(t,h)),t=h}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Dp(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function rl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lp=37297;let Pp=0;function Fp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Up(i){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(i);let n;switch(e===t?n="":e===Vr&&t===Gr?n="LinearDisplayP3ToLinearSRGB":e===Gr&&t===Vr&&(n="LinearSRGBToLinearDisplayP3"),i){case vn:case Kr:return[n,"LinearTransferOETF"];case vt:case da:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fp(i.getShaderSource(e),o)}else return r}function Ip(i,e){const t=Up(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Np(i,e){let t;switch(e){case qc:t="Linear";break;case Yc:t="Reinhard";break;case $c:t="OptimizedCineon";break;case jc:t="ACESFilmic";break;case Zc:t="AgX";break;case Kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Op(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Bp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function zp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ii(i){return i!==""}function al(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(Hp,Vp)}const Gp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vp(i,e){let t=Pe[e];if(t===void 0){const n=Gp.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ea(t)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(i){return i.replace(Wp,Xp)}function Xp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $p(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function jp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:e="ENVMAP_BLENDING_MULTIPLY";break;case Wc:e="ENVMAP_BLENDING_MIX";break;case Xc:e="ENVMAP_BLENDING_ADD";break}return e}function Kp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qp(t),c=Yp(t),d=$p(t),h=jp(t),p=Kp(t),m=t.isWebGL2?"":Op(t),x=Bp(t),_=zp(s),f=r.createProgram();let u,b,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ii).join(`
`),b.length>0&&(b+=`
`)):(u=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),b=[m,cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?Np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Ip("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),o=ea(o),o=al(o,t),o=ol(o,t),a=ea(a),a=al(a,t),a=ol(a,t),o=ll(o),a=ll(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const T=S+u+o,L=S+b+a,C=rl(r,r.VERTEX_SHADER,T),A=rl(r,r.FRAGMENT_SHADER,L);r.attachShader(f,C),r.attachShader(f,A),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function K(V){if(i.debug.checkShaderErrors){const ie=r.getProgramInfoLog(f).trim(),R=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(A).trim();let k=!0,X=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,C,A);else{const G=sl(r,C,"vertex"),W=sl(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+G+`
`+W)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(R===""||B==="")&&(X=!1);X&&(V.diagnostics={runnable:k,programLog:ie,vertexShader:{log:R,prefix:u},fragmentShader:{log:B,prefix:b}})}r.deleteShader(C),r.deleteShader(A),M=new zr(r,f),E=kp(r,f)}let M;this.getUniforms=function(){return M===void 0&&K(this),M};let E;this.getAttributes=function(){return E===void 0&&K(this),E};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(f,Lp)),H},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=A,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new em(e),t.set(e,n)),n}}class em{constructor(e){this.id=Jp++,this.code=e,this.usedTimes=0}}function tm(i,e,t,n,r,s,o){const a=new ha,l=new Qp,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function f(M,E,H,V,ie){const R=V.fog,B=ie.geometry,k=M.isMeshStandardMaterial?V.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),G=X&&X.mapping===jr?X.image.height:null,W=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q=q!==void 0?q.length:0;let ee=0;B.morphAttributes.position!==void 0&&(ee=1),B.morphAttributes.normal!==void 0&&(ee=2),B.morphAttributes.color!==void 0&&(ee=3);let z,Y,oe,ge;if(W){const wt=rn[W];z=wt.vertexShader,Y=wt.fragmentShader}else z=M.vertexShader,Y=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const me=i.getRenderTarget(),Ce=ie.isInstancedMesh===!0,De=ie.isBatchedMesh===!0,Se=!!M.map,He=!!M.matcap,F=!!X,Tt=!!M.aoMap,xe=!!M.lightMap,we=!!M.bumpMap,he=!!M.normalMap,et=!!M.displacementMap,Fe=!!M.emissiveMap,y=!!M.metalnessMap,g=!!M.roughnessMap,I=M.anisotropy>0,Z=M.clearcoat>0,j=M.iridescence>0,J=M.sheen>0,fe=M.transmission>0,ae=I&&!!M.anisotropyMap,de=Z&&!!M.clearcoatMap,Me=Z&&!!M.clearcoatNormalMap,Ue=Z&&!!M.clearcoatRoughnessMap,$=j&&!!M.iridescenceMap,qe=j&&!!M.iridescenceThicknessMap,ze=J&&!!M.sheenColorMap,Te=J&&!!M.sheenRoughnessMap,_e=!!M.specularMap,ue=!!M.specularColorMap,Le=!!M.specularIntensityMap,Xe=fe&&!!M.transmissionMap,it=fe&&!!M.thicknessMap,Ne=!!M.gradientMap,te=!!M.alphaMap,w=M.alphaTest>0,re=!!M.alphaHash,se=!!M.extensions,Ee=!!B.attributes.uv1,ve=!!B.attributes.uv2,je=!!B.attributes.uv3;let Ke=Fn;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:d,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:z,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:De,instancing:Ce,instancingColor:Ce&&ie.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:vn,map:Se,matcap:He,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:G,aoMap:Tt,lightMap:xe,bumpMap:we,normalMap:he,displacementMap:p&&et,emissiveMap:Fe,normalMapObjectSpace:he&&M.normalMapType===cd,normalMapTangentSpace:he&&M.normalMapType===Ll,metalnessMap:y,roughnessMap:g,anisotropy:I,anisotropyMap:ae,clearcoat:Z,clearcoatMap:de,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ue,iridescence:j,iridescenceMap:$,iridescenceThicknessMap:qe,sheen:J,sheenColorMap:ze,sheenRoughnessMap:Te,specularMap:_e,specularColorMap:ue,specularIntensityMap:Le,transmission:fe,transmissionMap:Xe,thicknessMap:it,gradientMap:Ne,opaque:M.transparent===!1&&M.blending===Ni,alphaMap:te,alphaTest:w,alphaHash:re,combine:M.combine,mapUv:Se&&_(M.map.channel),aoMapUv:Tt&&_(M.aoMap.channel),lightMapUv:xe&&_(M.lightMap.channel),bumpMapUv:we&&_(M.bumpMap.channel),normalMapUv:he&&_(M.normalMap.channel),displacementMapUv:et&&_(M.displacementMap.channel),emissiveMapUv:Fe&&_(M.emissiveMap.channel),metalnessMapUv:y&&_(M.metalnessMap.channel),roughnessMapUv:g&&_(M.roughnessMap.channel),anisotropyMapUv:ae&&_(M.anisotropyMap.channel),clearcoatMapUv:de&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(M.sheenRoughnessMap.channel),specularMapUv:_e&&_(M.specularMap.channel),specularColorMapUv:ue&&_(M.specularColorMap.channel),specularIntensityMapUv:Le&&_(M.specularIntensityMap.channel),transmissionMapUv:Xe&&_(M.transmissionMap.channel),thicknessMapUv:it&&_(M.thicknessMap.channel),alphaMapUv:te&&_(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(he||I),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ee,vertexUv2s:ve,vertexUv3s:je,pointsUvs:ie.isPoints===!0&&!!B.attributes.uv&&(Se||te),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ee,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Se&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)E.push(H),E.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(b(E,M),S(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function b(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function S(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function T(M){const E=x[M.type];let H;if(E){const V=rn[E];H=Nd.clone(V.uniforms)}else H=M.uniforms;return H}function L(M,E){let H;for(let V=0,ie=c.length;V<ie;V++){const R=c[V];if(R.cacheKey===E){H=R,++H.usedTimes;break}}return H===void 0&&(H=new Zp(i,E,M,s),c.push(H)),H}function C(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function K(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:T,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:K}}function nm(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function im(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ul(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,m,x,_,f){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:m,groupOrder:x,renderOrder:h.renderOrder,z:_,group:f},i[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=m,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=_,u.group=f),e++,u}function a(h,p,m,x,_,f){const u=o(h,p,m,x,_,f);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(h,p,m,x,_,f){const u=o(h,p,m,x,_,f);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(h,p){t.length>1&&t.sort(h||im),n.length>1&&n.sort(p||dl),r.length>1&&r.sort(p||dl)}function d(){for(let h=e,p=i.length;h<p;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function rm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ul,i.set(n,[o])):r>=s.length?(o=new ul,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ge};break;case"SpotLight":t={position:new P,direction:new P,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function am(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let om=0;function lm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cm(i,e){const t=new sm,n=am(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new P);const s=new P,o=new dt,a=new dt;function l(d,h){let p=0,m=0,x=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let _=0,f=0,u=0,b=0,S=0,T=0,L=0,C=0,A=0,K=0,M=0;d.sort(lm);const E=h===!0?Math.PI:1;for(let V=0,ie=d.length;V<ie;V++){const R=d[V],B=R.color,k=R.intensity,X=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=B.r*k*E,m+=B.g*k*E,x+=B.b*k*E;else if(R.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(R.sh.coefficients[W],k);M++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*E),R.castShadow){const q=R.shadow,Q=n.get(R);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,r.directionalShadow[_]=Q,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=R.shadow.matrix,T++}r.directional[_]=W,_++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(B).multiplyScalar(k*E),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,r.spot[u]=W;const q=R.shadow;if(R.map&&(r.spotLightMap[A]=R.map,A++,q.updateMatrices(R),R.castShadow&&K++),r.spotLightMatrix[u]=q.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,r.spotShadow[u]=Q,r.spotShadowMap[u]=G,C++}u++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(B).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),r.rectArea[b]=W,b++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*E),W.distance=R.distance,W.decay=R.decay,R.castShadow){const q=R.shadow,Q=n.get(R);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,Q.shadowCameraNear=q.camera.near,Q.shadowCameraFar=q.camera.far,r.pointShadow[f]=Q,r.pointShadowMap[f]=G,r.pointShadowMatrix[f]=R.shadow.matrix,L++}r.point[f]=W,f++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(k*E),W.groundColor.copy(R.groundColor).multiplyScalar(k*E),r.hemi[S]=W,S++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=m,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==_||H.pointLength!==f||H.spotLength!==u||H.rectAreaLength!==b||H.hemiLength!==S||H.numDirectionalShadows!==T||H.numPointShadows!==L||H.numSpotShadows!==C||H.numSpotMaps!==A||H.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=b,r.point.length=f,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+A-K,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=M,H.directionalLength=_,H.pointLength=f,H.spotLength=u,H.rectAreaLength=b,H.hemiLength=S,H.numDirectionalShadows=T,H.numPointShadows=L,H.numSpotShadows=C,H.numSpotMaps=A,H.numLightProbes=M,r.version=om++)}function c(d,h){let p=0,m=0,x=0,_=0,f=0;const u=h.matrixWorldInverse;for(let b=0,S=d.length;b<S;b++){const T=d[b];if(T.isDirectionalLight){const L=r.directional[p];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),p++}else if(T.isSpotLight){const L=r.spot[x];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),x++}else if(T.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(T.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const L=r.hemi[f];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:r}}function hl(i,e){const t=new cm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dm(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new hl(i,e),t.set(s,[l])):o>=a.length?(l=new hl(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class um extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hm extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mm(i,e,t){let n=new fa;const r=new We,s=new We,o=new _t,a=new um({depthPacking:ld}),l=new hm,c={},d=t.maxTextureSize,h={[Nn]:Lt,[Lt]:Nn,[mn]:mn},p=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new hi;x.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ke(x,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let u=this.type;this.render=function(C,A,K){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Pn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ie=u!==pn&&this.type===pn,R=u===pn&&this.type!==pn;for(let B=0,k=C.length;B<k;B++){const X=C[B],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const W=G.getFrameExtents();if(r.multiply(W),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,G.mapSize.y=s.y)),G.map===null||ie===!0||R===!0){const Q=this.type!==pn?{minFilter:xt,magFilter:xt}:{};G.map!==null&&G.map.dispose(),G.map=new oi(r.x,r.y,Q),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const q=G.getViewportCount();for(let Q=0;Q<q;Q++){const ee=G.getViewport(Q);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),V.viewport(o),G.updateMatrices(X,Q),n=G.getFrustum(),T(A,K,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===pn&&b(G,K),G.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(M,E,H)};function b(C,A){const K=e.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new oi(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,K,p,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,K,m,_,null)}function S(C,A,K,M){let E=null;const H=K.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(H!==void 0)E=H;else if(E=K.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=E.uuid,ie=A.uuid;let R=c[V];R===void 0&&(R={},c[V]=R);let B=R[ie];B===void 0&&(B=E.clone(),R[ie]=B,A.addEventListener("dispose",L)),E=B}if(E.visible=A.visible,E.wireframe=A.wireframe,M===pn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:h[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,K.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=i.properties.get(E);V.light=K}return E}function T(C,A,K,M,E){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===pn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld);const ie=e.update(C),R=C.material;if(Array.isArray(R)){const B=ie.groups;for(let k=0,X=B.length;k<X;k++){const G=B[k],W=R[G.materialIndex];if(W&&W.visible){const q=S(C,W,M,E);C.onBeforeShadow(i,C,A,K,ie,q,G),i.renderBufferDirect(K,null,ie,q,C,G),C.onAfterShadow(i,C,A,K,ie,q,G)}}}else if(R.visible){const B=S(C,R,M,E);C.onBeforeShadow(i,C,A,K,ie,B,null),i.renderBufferDirect(K,null,ie,B,C,null),C.onAfterShadow(i,C,A,K,ie,B,null)}}const V=C.children;for(let ie=0,R=V.length;ie<R;ie++)T(V[ie],A,K,M,E)}function L(C){C.target.removeEventListener("dispose",L);for(const K in c){const M=c[K],E=C.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function gm(i,e,t){const n=t.isWebGL2;function r(){let w=!1;const re=new _t;let se=null;const Ee=new _t(0,0,0,0);return{setMask:function(ve){se!==ve&&!w&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){w=ve},setClear:function(ve,je,Ke,ft,wt){wt===!0&&(ve*=ft,je*=ft,Ke*=ft),re.set(ve,je,Ke,ft),Ee.equals(re)===!1&&(i.clearColor(ve,je,Ke,ft),Ee.copy(re))},reset:function(){w=!1,se=null,Ee.set(-1,0,0,0)}}}function s(){let w=!1,re=null,se=null,Ee=null;return{setTest:function(ve){ve?De(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(ve){re!==ve&&!w&&(i.depthMask(ve),re=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Oc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Hc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){w=ve},setClear:function(ve){Ee!==ve&&(i.clearDepth(ve),Ee=ve)},reset:function(){w=!1,re=null,se=null,Ee=null}}}function o(){let w=!1,re=null,se=null,Ee=null,ve=null,je=null,Ke=null,ft=null,wt=null;return{setTest:function(Ze){w||(Ze?De(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!w&&(i.stencilMask(Ze),re=Ze)},setFunc:function(Ze,At,tn){(se!==Ze||Ee!==At||ve!==tn)&&(i.stencilFunc(Ze,At,tn),se=Ze,Ee=At,ve=tn)},setOp:function(Ze,At,tn){(je!==Ze||Ke!==At||ft!==tn)&&(i.stencilOp(Ze,At,tn),je=Ze,Ke=At,ft=tn)},setLocked:function(Ze){w=Ze},setClear:function(Ze){wt!==Ze&&(i.clearStencil(Ze),wt=Ze)},reset:function(){w=!1,re=null,se=null,Ee=null,ve=null,je=null,Ke=null,ft=null,wt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let p={},m={},x=new WeakMap,_=[],f=null,u=!1,b=null,S=null,T=null,L=null,C=null,A=null,K=null,M=new Ge(0,0,0),E=0,H=!1,V=null,ie=null,R=null,B=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=W>=2);let Q=null,ee={};const z=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),oe=new _t().fromArray(z),ge=new _t().fromArray(Y);function me(w,re,se,Ee){const ve=new Uint8Array(4),je=i.createTexture();i.bindTexture(w,je),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<se;Ke++)n&&(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)?i.texImage3D(re,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(re+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return je}const Ce={};Ce[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(i.DEPTH_TEST),l.setFunc(kr),Fe(!1),y(qa),De(i.CULL_FACE),he(Pn);function De(w){p[w]!==!0&&(i.enable(w),p[w]=!0)}function Se(w){p[w]!==!1&&(i.disable(w),p[w]=!1)}function He(w,re){return m[w]!==re?(i.bindFramebuffer(w,re),m[w]=re,n&&(w===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=re),w===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=re)),!0):!1}function F(w,re){let se=_,Ee=!1;if(w)if(se=x.get(re),se===void 0&&(se=[],x.set(re,se)),w.isWebGLMultipleRenderTargets){const ve=w.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let je=0,Ke=ve.length;je<Ke;je++)se[je]=i.COLOR_ATTACHMENT0+je;se.length=ve.length,Ee=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,Ee=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,Ee=!0);Ee&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Tt(w){return f!==w?(i.useProgram(w),f=w,!0):!1}const xe={[jn]:i.FUNC_ADD,[Sc]:i.FUNC_SUBTRACT,[Ec]:i.FUNC_REVERSE_SUBTRACT};if(n)xe[Ka]=i.MIN,xe[Za]=i.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(xe[Ka]=w.MIN_EXT,xe[Za]=w.MAX_EXT)}const we={[bc]:i.ZERO,[Tc]:i.ONE,[wc]:i.SRC_COLOR,[Xs]:i.SRC_ALPHA,[Pc]:i.SRC_ALPHA_SATURATE,[Dc]:i.DST_COLOR,[Cc]:i.DST_ALPHA,[Ac]:i.ONE_MINUS_SRC_COLOR,[qs]:i.ONE_MINUS_SRC_ALPHA,[Lc]:i.ONE_MINUS_DST_COLOR,[Rc]:i.ONE_MINUS_DST_ALPHA,[Fc]:i.CONSTANT_COLOR,[Uc]:i.ONE_MINUS_CONSTANT_COLOR,[Ic]:i.CONSTANT_ALPHA,[Nc]:i.ONE_MINUS_CONSTANT_ALPHA};function he(w,re,se,Ee,ve,je,Ke,ft,wt,Ze){if(w===Pn){u===!0&&(Se(i.BLEND),u=!1);return}if(u===!1&&(De(i.BLEND),u=!0),w!==Mc){if(w!==b||Ze!==H){if((S!==jn||C!==jn)&&(i.blendEquation(i.FUNC_ADD),S=jn,C=jn),Ze)switch(w){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFunc(i.ONE,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ya:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}T=null,L=null,A=null,K=null,M.set(0,0,0),E=0,b=w,H=Ze}return}ve=ve||re,je=je||se,Ke=Ke||Ee,(re!==S||ve!==C)&&(i.blendEquationSeparate(xe[re],xe[ve]),S=re,C=ve),(se!==T||Ee!==L||je!==A||Ke!==K)&&(i.blendFuncSeparate(we[se],we[Ee],we[je],we[Ke]),T=se,L=Ee,A=je,K=Ke),(ft.equals(M)===!1||wt!==E)&&(i.blendColor(ft.r,ft.g,ft.b,wt),M.copy(ft),E=wt),b=w,H=!1}function et(w,re){w.side===mn?Se(i.CULL_FACE):De(i.CULL_FACE);let se=w.side===Lt;re&&(se=!se),Fe(se),w.blending===Ni&&w.transparent===!1?he(Pn):he(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const Ee=w.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),I(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?De(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(w){V!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),V=w)}function y(w){w!==xc?(De(i.CULL_FACE),w!==ie&&(w===qa?i.cullFace(i.BACK):w===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),ie=w}function g(w){w!==R&&(G&&i.lineWidth(w),R=w)}function I(w,re,se){w?(De(i.POLYGON_OFFSET_FILL),(B!==re||k!==se)&&(i.polygonOffset(re,se),B=re,k=se)):Se(i.POLYGON_OFFSET_FILL)}function Z(w){w?De(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function j(w){w===void 0&&(w=i.TEXTURE0+X-1),Q!==w&&(i.activeTexture(w),Q=w)}function J(w,re,se){se===void 0&&(Q===null?se=i.TEXTURE0+X-1:se=Q);let Ee=ee[se];Ee===void 0&&(Ee={type:void 0,texture:void 0},ee[se]=Ee),(Ee.type!==w||Ee.texture!==re)&&(Q!==se&&(i.activeTexture(se),Q=se),i.bindTexture(w,re||Ce[w]),Ee.type=w,Ee.texture=re)}function fe(){const w=ee[Q];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Le(w){oe.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),oe.copy(w))}function Xe(w){ge.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),ge.copy(w))}function it(w,re){let se=h.get(re);se===void 0&&(se=new WeakMap,h.set(re,se));let Ee=se.get(w);Ee===void 0&&(Ee=i.getUniformBlockIndex(re,w.name),se.set(w,Ee))}function Ne(w,re){const Ee=h.get(re).get(w);d.get(re)!==Ee&&(i.uniformBlockBinding(re,Ee,w.__bindingPointIndex),d.set(re,Ee))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Q=null,ee={},m={},x=new WeakMap,_=[],f=null,u=!1,b=null,S=null,T=null,L=null,C=null,A=null,K=null,M=new Ge(0,0,0),E=0,H=!1,V=null,ie=null,R=null,B=null,k=null,oe.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:Se,bindFramebuffer:He,drawBuffers:F,useProgram:Tt,setBlending:he,setMaterial:et,setFlipSided:Fe,setCullFace:y,setLineWidth:g,setPolygonOffset:I,setScissorTest:Z,activeTexture:j,bindTexture:J,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:de,texImage2D:_e,texImage3D:ue,updateUBOMapping:it,uniformBlockBinding:Ne,texStorage2D:ze,texStorage3D:Te,texSubImage2D:Me,texSubImage3D:Ue,compressedTexSubImage2D:$,compressedTexSubImage3D:qe,scissor:Le,viewport:Xe,reset:te}}function _m(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,g){return m?new OffscreenCanvas(y,g):Xr("canvas")}function _(y,g,I,Z){let j=1;if((y.width>Z||y.height>Z)&&(j=Z/Math.max(y.width,y.height)),j<1||g===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const J=g?Qs:Math.floor,fe=J(j*y.width),ae=J(j*y.height);h===void 0&&(h=x(fe,ae));const de=I?x(fe,ae):h;return de.width=fe,de.height=ae,de.getContext("2d").drawImage(y,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+fe+"x"+ae+")."),de}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function f(y){return Co(y.width)&&Co(y.height)}function u(y){return a?!1:y.wrapS!==Yt||y.wrapT!==Yt||y.minFilter!==xt&&y.minFilter!==zt}function b(y,g){return y.generateMipmaps&&g&&y.minFilter!==xt&&y.minFilter!==zt}function S(y){i.generateMipmap(y)}function T(y,g,I,Z,j=!1){if(a===!1)return g;if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=g;if(g===i.RED&&(I===i.FLOAT&&(J=i.R32F),I===i.HALF_FLOAT&&(J=i.R16F),I===i.UNSIGNED_BYTE&&(J=i.R8)),g===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(J=i.R8UI),I===i.UNSIGNED_SHORT&&(J=i.R16UI),I===i.UNSIGNED_INT&&(J=i.R32UI),I===i.BYTE&&(J=i.R8I),I===i.SHORT&&(J=i.R16I),I===i.INT&&(J=i.R32I)),g===i.RG&&(I===i.FLOAT&&(J=i.RG32F),I===i.HALF_FLOAT&&(J=i.RG16F),I===i.UNSIGNED_BYTE&&(J=i.RG8)),g===i.RGBA){const fe=j?Hr:Ye.getTransfer(Z);I===i.FLOAT&&(J=i.RGBA32F),I===i.HALF_FLOAT&&(J=i.RGBA16F),I===i.UNSIGNED_BYTE&&(J=fe===Je?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function L(y,g,I){return b(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==xt&&y.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){return y===xt||y===Ja||y===us?i.NEAREST:i.LINEAR}function A(y){const g=y.target;g.removeEventListener("dispose",A),M(g),g.isVideoTexture&&d.delete(g)}function K(y){const g=y.target;g.removeEventListener("dispose",K),H(g)}function M(y){const g=n.get(y);if(g.__webglInit===void 0)return;const I=y.source,Z=p.get(I);if(Z){const j=Z[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(y),Object.keys(Z).length===0&&p.delete(I)}n.remove(y)}function E(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const I=y.source,Z=p.get(I);delete Z[g.__cacheKey],o.memory.textures--}function H(y){const g=y.texture,I=n.get(y),Z=n.get(g);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(I.__webglFramebuffer[j]))for(let J=0;J<I.__webglFramebuffer[j].length;J++)i.deleteFramebuffer(I.__webglFramebuffer[j][J]);else i.deleteFramebuffer(I.__webglFramebuffer[j]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[j])}else{if(Array.isArray(I.__webglFramebuffer))for(let j=0;j<I.__webglFramebuffer.length;j++)i.deleteFramebuffer(I.__webglFramebuffer[j]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let j=0;j<I.__webglColorRenderbuffer.length;j++)I.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[j]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let j=0,J=g.length;j<J;j++){const fe=n.get(g[j]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(g[j])}n.remove(g),n.remove(y)}let V=0;function ie(){V=0}function R(){const y=V;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),V+=1,y}function B(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function k(y,g){const I=n.get(y);if(y.isVideoTexture&&et(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const Z=y.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(I,y,g);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+g)}function X(y,g){const I=n.get(y);if(y.version>0&&I.__version!==y.version){oe(I,y,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+g)}function G(y,g){const I=n.get(y);if(y.version>0&&I.__version!==y.version){oe(I,y,g);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+g)}function W(y,g){const I=n.get(y);if(y.version>0&&I.__version!==y.version){ge(I,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+g)}const q={[js]:i.REPEAT,[Yt]:i.CLAMP_TO_EDGE,[Ks]:i.MIRRORED_REPEAT},Q={[xt]:i.NEAREST,[Ja]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Jc]:i.LINEAR_MIPMAP_NEAREST,[ar]:i.LINEAR_MIPMAP_LINEAR},ee={[dd]:i.NEVER,[gd]:i.ALWAYS,[ud]:i.LESS,[Pl]:i.LEQUAL,[hd]:i.EQUAL,[md]:i.GEQUAL,[fd]:i.GREATER,[pd]:i.NOTEQUAL};function z(y,g,I){if(I?(i.texParameteri(y,i.TEXTURE_WRAP_S,q[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,q[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,q[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Q[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Q[g.minFilter])):(i.texParameteri(y,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(y,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Yt||g.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(y,i.TEXTURE_MAG_FILTER,C(g.magFilter)),i.texParameteri(y,i.TEXTURE_MIN_FILTER,C(g.minFilter)),g.minFilter!==xt&&g.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===xt||g.minFilter!==us&&g.minFilter!==ar||g.type===Ln&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===or&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(y,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function Y(y,g){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",A));const Z=g.source;let j=p.get(Z);j===void 0&&(j={},p.set(Z,j));const J=B(g);if(J!==y.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),j[J].usedTimes++;const fe=j[y.__cacheKey];fe!==void 0&&(j[y.__cacheKey].usedTimes--,fe.usedTimes===0&&E(g)),y.__cacheKey=J,y.__webglTexture=j[J].texture}return I}function oe(y,g,I){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);const j=Y(y,g),J=g.source;t.bindTexture(Z,y.__webglTexture,i.TEXTURE0+I);const fe=n.get(J);if(J.version!==fe.__version||j===!0){t.activeTexture(i.TEXTURE0+I);const ae=Ye.getPrimaries(Ye.workingColorSpace),de=g.colorSpace===Ht?null:Ye.getPrimaries(g.colorSpace),Me=g.colorSpace===Ht||ae===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ue=u(g)&&f(g.image)===!1;let $=_(g.image,Ue,!1,r.maxTextureSize);$=Fe(g,$);const qe=f($)||a,ze=s.convert(g.format,g.colorSpace);let Te=s.convert(g.type),_e=T(g.internalFormat,ze,Te,g.colorSpace,g.isVideoTexture);z(Z,g,qe);let ue;const Le=g.mipmaps,Xe=a&&g.isVideoTexture!==!0&&_e!==Rl,it=fe.__version===void 0||j===!0,Ne=L(g,$,qe);if(g.isDepthTexture)_e=i.DEPTH_COMPONENT,a?g.type===Ln?_e=i.DEPTH_COMPONENT32F:g.type===Dn?_e=i.DEPTH_COMPONENT24:g.type===ei?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:g.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ti&&_e===i.DEPTH_COMPONENT&&g.type!==ca&&g.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Dn,Te=s.convert(g.type)),g.format===Vi&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,g.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ei,Te=s.convert(g.type))),it&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,_e,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,_e,$.width,$.height,0,ze,Te,null));else if(g.isDataTexture)if(Le.length>0&&qe){Xe&&it&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let te=0,w=Le.length;te<w;te++)ue=Le[te],Xe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,Te,ue.data):t.texImage2D(i.TEXTURE_2D,te,_e,ue.width,ue.height,0,ze,Te,ue.data);g.generateMipmaps=!1}else Xe?(it&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,ze,Te,$.data)):t.texImage2D(i.TEXTURE_2D,0,_e,$.width,$.height,0,ze,Te,$.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Xe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,_e,Le[0].width,Le[0].height,$.depth);for(let te=0,w=Le.length;te<w;te++)ue=Le[te],g.format!==$t?ze!==null?Xe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,$.depth,ze,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,_e,ue.width,ue.height,$.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,$.depth,ze,Te,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,_e,ue.width,ue.height,$.depth,0,ze,Te,ue.data)}else{Xe&&it&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let te=0,w=Le.length;te<w;te++)ue=Le[te],g.format!==$t?ze!==null?Xe?t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,_e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,Te,ue.data):t.texImage2D(i.TEXTURE_2D,te,_e,ue.width,ue.height,0,ze,Te,ue.data)}else if(g.isDataArrayTexture)Xe?(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,_e,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ze,Te,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,$.width,$.height,$.depth,0,ze,Te,$.data);else if(g.isData3DTexture)Xe?(it&&t.texStorage3D(i.TEXTURE_3D,Ne,_e,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ze,Te,$.data)):t.texImage3D(i.TEXTURE_3D,0,_e,$.width,$.height,$.depth,0,ze,Te,$.data);else if(g.isFramebufferTexture){if(it)if(Xe)t.texStorage2D(i.TEXTURE_2D,Ne,_e,$.width,$.height);else{let te=$.width,w=$.height;for(let re=0;re<Ne;re++)t.texImage2D(i.TEXTURE_2D,re,_e,te,w,0,ze,Te,null),te>>=1,w>>=1}}else if(Le.length>0&&qe){Xe&&it&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,Le[0].width,Le[0].height);for(let te=0,w=Le.length;te<w;te++)ue=Le[te],Xe?t.texSubImage2D(i.TEXTURE_2D,te,0,0,ze,Te,ue):t.texImage2D(i.TEXTURE_2D,te,_e,ze,Te,ue);g.generateMipmaps=!1}else Xe?(it&&t.texStorage2D(i.TEXTURE_2D,Ne,_e,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Te,$)):t.texImage2D(i.TEXTURE_2D,0,_e,ze,Te,$);b(g,qe)&&S(Z),fe.__version=J.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ge(y,g,I){if(g.image.length!==6)return;const Z=Y(y,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+I);const J=n.get(j);if(j.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+I);const fe=Ye.getPrimaries(Ye.workingColorSpace),ae=g.colorSpace===Ht?null:Ye.getPrimaries(g.colorSpace),de=g.colorSpace===Ht||fe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,Ue=g.image[0]&&g.image[0].isDataTexture,$=[];for(let te=0;te<6;te++)!Me&&!Ue?$[te]=_(g.image[te],!1,!0,r.maxCubemapSize):$[te]=Ue?g.image[te].image:g.image[te],$[te]=Fe(g,$[te]);const qe=$[0],ze=f(qe)||a,Te=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),ue=T(g.internalFormat,Te,_e,g.colorSpace),Le=a&&g.isVideoTexture!==!0,Xe=J.__version===void 0||Z===!0;let it=L(g,qe,ze);z(i.TEXTURE_CUBE_MAP,g,ze);let Ne;if(Me){Le&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,it,ue,qe.width,qe.height);for(let te=0;te<6;te++){Ne=$[te].mipmaps;for(let w=0;w<Ne.length;w++){const re=Ne[w];g.format!==$t?Te!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w,0,0,re.width,re.height,Te,re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w,0,0,re.width,re.height,Te,_e,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w,ue,re.width,re.height,0,Te,_e,re.data)}}}else{Ne=g.mipmaps,Le&&Xe&&(Ne.length>0&&it++,t.texStorage2D(i.TEXTURE_CUBE_MAP,it,ue,$[0].width,$[0].height));for(let te=0;te<6;te++)if(Ue){Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,$[te].width,$[te].height,Te,_e,$[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,$[te].width,$[te].height,0,Te,_e,$[te].data);for(let w=0;w<Ne.length;w++){const se=Ne[w].image[te].image;Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w+1,0,0,se.width,se.height,Te,_e,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w+1,ue,se.width,se.height,0,Te,_e,se.data)}}else{Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te,_e,$[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Te,_e,$[te]);for(let w=0;w<Ne.length;w++){const re=Ne[w];Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w+1,0,0,Te,_e,re.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,w+1,ue,Te,_e,re.image[te])}}}b(g,ze)&&S(i.TEXTURE_CUBE_MAP),J.__version=j.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function me(y,g,I,Z,j,J){const fe=s.convert(I.format,I.colorSpace),ae=s.convert(I.type),de=T(I.internalFormat,fe,ae,I.colorSpace);if(!n.get(g).__hasExternalTextures){const Ue=Math.max(1,g.width>>J),$=Math.max(1,g.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,J,de,Ue,$,g.depth,0,fe,ae,null):t.texImage2D(j,J,de,Ue,$,0,fe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),he(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,n.get(I).__webglTexture,0,we(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,n.get(I).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(y,g,I){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer&&!g.stencilBuffer){let Z=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||he(g)){const j=g.depthTexture;j&&j.isDepthTexture&&(j.type===Ln?Z=i.DEPTH_COMPONENT32F:j.type===Dn&&(Z=i.DEPTH_COMPONENT24));const J=we(g);he(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Z,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Z,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,y)}else if(g.depthBuffer&&g.stencilBuffer){const Z=we(g);I&&he(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,g.width,g.height):he(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,y)}else{const Z=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let j=0;j<Z.length;j++){const J=Z[j],fe=s.convert(J.format,J.colorSpace),ae=s.convert(J.type),de=T(J.internalFormat,fe,ae,J.colorSpace),Me=we(g);I&&he(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,de,g.width,g.height):he(g)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,de,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,de,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k(g.depthTexture,0);const Z=n.get(g.depthTexture).__webglTexture,j=we(g);if(g.depthTexture.format===ti)he(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Vi)he(g)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Se(y){const g=n.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");De(g.__webglFramebuffer,y)}else if(I){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ce(g.__webglDepthbuffer[Z],y,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),Ce(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(y,g,I){const Z=n.get(y);g!==void 0&&me(Z.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Se(y)}function F(y){const g=y.texture,I=n.get(y),Z=n.get(g);y.addEventListener("dispose",K),y.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,o.memory.textures++);const j=y.isWebGLCubeRenderTarget===!0,J=y.isWebGLMultipleRenderTargets===!0,fe=f(y)||a;if(j){I.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[ae]=[];for(let de=0;de<g.mipmaps.length;de++)I.__webglFramebuffer[ae][de]=i.createFramebuffer()}else I.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)I.__webglFramebuffer[ae]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(J)if(r.drawBuffers){const ae=y.texture;for(let de=0,Me=ae.length;de<Me;de++){const Ue=n.get(ae[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&he(y)===!1){const ae=J?g:[g];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const Me=ae[de];I.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[de]);const Ue=s.convert(Me.format,Me.colorSpace),$=s.convert(Me.type),qe=T(Me.internalFormat,Ue,$,Me.colorSpace,y.isXRRenderTarget===!0),ze=we(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,qe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,I.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),z(i.TEXTURE_CUBE_MAP,g,fe);for(let ae=0;ae<6;ae++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)me(I.__webglFramebuffer[ae][de],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else me(I.__webglFramebuffer[ae],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);b(g,fe)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const ae=y.texture;for(let de=0,Me=ae.length;de<Me;de++){const Ue=ae[de],$=n.get(Ue);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),z(i.TEXTURE_2D,Ue,fe),me(I.__webglFramebuffer,y,Ue,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),b(Ue,fe)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ae=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Z.__webglTexture),z(ae,g,fe),a&&g.mipmaps&&g.mipmaps.length>0)for(let de=0;de<g.mipmaps.length;de++)me(I.__webglFramebuffer[de],y,g,i.COLOR_ATTACHMENT0,ae,de);else me(I.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,ae,0);b(g,fe)&&S(ae),t.unbindTexture()}y.depthBuffer&&Se(y)}function Tt(y){const g=f(y)||a,I=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Z=0,j=I.length;Z<j;Z++){const J=I[Z];if(b(J,g)){const fe=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(J).__webglTexture;t.bindTexture(fe,ae),S(fe),t.unbindTexture()}}}function xe(y){if(a&&y.samples>0&&he(y)===!1){const g=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],I=y.width,Z=y.height;let j=i.COLOR_BUFFER_BIT;const J=[],fe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(y),de=y.isWebGLMultipleRenderTargets===!0;if(de)for(let Me=0;Me<g.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Me=0;Me<g.length;Me++){J.push(i.COLOR_ATTACHMENT0+Me),y.depthBuffer&&J.push(fe);const Ue=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ue===!1&&(y.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Me]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),de){const $=n.get(g[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,I,Z,0,0,I,Z,j,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Me=0;Me<g.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Me]);const Ue=n.get(g[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function we(y){return Math.min(r.maxSamples,y.samples)}function he(y){const g=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function et(y){const g=o.render.frame;d.get(y)!==g&&(d.set(y,g),y.update())}function Fe(y,g){const I=y.colorSpace,Z=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Zs||I!==vn&&I!==Ht&&(Ye.getTransfer(I)===Je?a===!1?e.has("EXT_sRGB")===!0&&Z===$t?(y.format=Zs,y.minFilter=zt,y.generateMipmaps=!1):g=Ul.sRGBToLinear(g):(Z!==$t||j!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}this.allocateTextureUnit=R,this.resetTextureUnits=ie,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=me,this.useMultisampledRTT=he}function xm(i,e,t){const n=t.isWebGL2;function r(s,o=Ht){let a;const l=Ye.getTransfer(o);if(s===Un)return i.UNSIGNED_BYTE;if(s===bl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Tl)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Qc)return i.BYTE;if(s===ed)return i.SHORT;if(s===ca)return i.UNSIGNED_SHORT;if(s===El)return i.INT;if(s===Dn)return i.UNSIGNED_INT;if(s===Ln)return i.FLOAT;if(s===or)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===td)return i.ALPHA;if(s===$t)return i.RGBA;if(s===nd)return i.LUMINANCE;if(s===id)return i.LUMINANCE_ALPHA;if(s===ti)return i.DEPTH_COMPONENT;if(s===Vi)return i.DEPTH_STENCIL;if(s===Zs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===rd)return i.RED;if(s===wl)return i.RED_INTEGER;if(s===sd)return i.RG;if(s===Al)return i.RG_INTEGER;if(s===Cl)return i.RGBA_INTEGER;if(s===hs||s===fs||s===ps||s===ms)if(l===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ms)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qa||s===eo||s===to||s===no)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Qa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===to)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===no)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===io||s===ro)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===io)return l===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ro)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===so||s===ao||s===oo||s===lo||s===co||s===uo||s===ho||s===fo||s===po||s===mo||s===go||s===_o||s===xo||s===vo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===so)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ao)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===oo)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lo)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===co)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uo)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ho)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fo)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===po)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mo)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===go)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_o)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xo)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vo)return l===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gs||s===yo||s===Mo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gs)return l===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ad||s===So||s===Eo||s===bo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===So)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ei?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class vm extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),u=this._getHandJoint(c,_);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mm extends Yi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,p=null,m=null,x=null;const _=t.getContextAttributes();let f=null,u=null;const b=[],S=[],T=new We;let L=null;const C=new kt;C.layers.enable(1),C.viewport=new _t;const A=new kt;A.layers.enable(2),A.viewport=new _t;const K=[C,A],M=new vm;M.layers.enable(1),M.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=b[z];return Y===void 0&&(Y=new Hs,b[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=b[z];return Y===void 0&&(Y=new Hs,b[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=b[z];return Y===void 0&&(Y=new Hs,b[z]=Y),Y.getHandSpace()};function V(z){const Y=S.indexOf(z.inputSource);if(Y===-1)return;const oe=b[Y];oe!==void 0&&(oe.update(z.inputSource,z.frame,c||o),oe.dispatchEvent({type:z.type,data:z.inputSource}))}function ie(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",R);for(let z=0;z<b.length;z++){const Y=S[z];Y!==null&&(S[z]=null,b[z].disconnect(Y))}E=null,H=null,e.setRenderTarget(f),m=null,p=null,h=null,r=null,u=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new oi(m.framebufferWidth,m.framebufferHeight,{format:$t,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,oe=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?Vi:ti,oe=_.stencil?ei:Dn);const me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(me),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new oi(p.textureWidth,p.textureHeight,{format:$t,type:Un,depthTexture:new Yl(p.textureWidth,p.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(u);Ce.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(z){for(let Y=0;Y<z.removed.length;Y++){const oe=z.removed[Y],ge=S.indexOf(oe);ge>=0&&(S[ge]=null,b[ge].disconnect(oe))}for(let Y=0;Y<z.added.length;Y++){const oe=z.added[Y];let ge=S.indexOf(oe);if(ge===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=S.length){S.push(oe),ge=Ce;break}else if(S[Ce]===null){S[Ce]=oe,ge=Ce;break}if(ge===-1)break}const me=b[ge];me&&me.connect(oe)}}const B=new P,k=new P;function X(z,Y,oe){B.setFromMatrixPosition(Y.matrixWorld),k.setFromMatrixPosition(oe.matrixWorld);const ge=B.distanceTo(k),me=Y.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,De=me[14]/(me[10]-1),Se=me[14]/(me[10]+1),He=(me[9]+1)/me[5],F=(me[9]-1)/me[5],Tt=(me[8]-1)/me[0],xe=(Ce[8]+1)/Ce[0],we=De*Tt,he=De*xe,et=ge/(-Tt+xe),Fe=et*-Tt;Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Fe),z.translateZ(et),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const y=De+et,g=Se+et,I=we-Fe,Z=he+(ge-Fe),j=He*Se/g*y,J=F*Se/g*y;z.projectionMatrix.makePerspective(I,Z,j,J,y,g),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function G(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;M.near=A.near=C.near=z.near,M.far=A.far=C.far=z.far,(E!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,H=M.far);const Y=z.parent,oe=M.cameras;G(M,Y);for(let ge=0;ge<oe.length;ge++)G(oe[ge],Y);oe.length===2?X(M,C,A):M.projectionMatrix.copy(C.projectionMatrix),W(z,M,Y)};function W(z,Y,oe){oe===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(oe.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Js*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(z){l=z,p!==null&&(p.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let q=null;function Q(z,Y){if(d=Y.getViewerPose(c||o),x=Y,d!==null){const oe=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ge=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let me=0;me<oe.length;me++){const Ce=oe[me];let De=null;if(m!==null)De=m.getViewport(Ce);else{const He=h.getViewSubImage(p,Ce);De=He.viewport,me===0&&(e.setRenderTargetTextures(u,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(u))}let Se=K[me];Se===void 0&&(Se=new kt,Se.layers.enable(me),Se.viewport=new _t,K[me]=Se),Se.matrix.fromArray(Ce.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ce.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(De.x,De.y,De.width,De.height),me===0&&(M.matrix.copy(Se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(Se)}}for(let oe=0;oe<b.length;oe++){const ge=S[oe],me=b[oe];ge!==null&&me!==void 0&&me.update(ge,Y,c||o)}q&&q(z,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),x=null}const ee=new Xl;ee.setAnimationLoop(Q),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}}function Sm(i,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Gl(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,b,S,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),h(f,u)):u.isMeshPhongMaterial?(s(f,u),d(f,u)):u.isMeshStandardMaterial?(s(f,u),p(f,u),u.isMeshPhysicalMaterial&&m(f,u,T)):u.isMeshMatcapMaterial?(s(f,u),x(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),_(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,b,S):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Lt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Lt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const b=e.get(u).envMap;if(b&&(f.envMap.value=b,f.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*S,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,b,S){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*b,f.scale.value=S*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function h(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,b){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Lt&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,u){u.matcap&&(f.matcap.value=u.matcap)}function _(f,u){const b=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Em(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,S){const T=S.program;n.uniformBlockBinding(b,T)}function c(b,S){let T=r[b.id];T===void 0&&(x(b),T=d(b),r[b.id]=T,b.addEventListener("dispose",f));const L=S.program;n.updateUBOMapping(b,L);const C=e.render.frame;s[b.id]!==C&&(p(b),s[b.id]=C)}function d(b){const S=h();b.__bindingPointIndex=S;const T=i.createBuffer(),L=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const S=r[b.id],T=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,A=T.length;C<A;C++){const K=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,E=K.length;M<E;M++){const H=K[M];if(m(H,C,M,L)===!0){const V=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let R=0;for(let B=0;B<ie.length;B++){const k=ie[B],X=_(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,V+R,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,R),R+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,T,L){const C=b.value,A=S+"_"+T;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const K=L[A];if(typeof C=="number"||typeof C=="boolean"){if(K!==C)return L[A]=C,!0}else if(K.equals(C)===!1)return K.copy(C),!0}return!1}function x(b){const S=b.uniforms;let T=0;const L=16;for(let A=0,K=S.length;A<K;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,H=M.length;E<H;E++){const V=M[E],ie=Array.isArray(V.value)?V.value:[V.value];for(let R=0,B=ie.length;R<B;R++){const k=ie[R],X=_(k),G=T%L;G!==0&&L-G<X.boundary&&(T+=L-G),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=X.storage}}}const C=T%L;return C>0&&(T+=L-C),b.__size=T,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function f(b){const S=b.target;S.removeEventListener("dispose",f);const T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ql{constructor(e={}){const{canvas:t=xd(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,f=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const S=this;let T=!1,L=0,C=0,A=null,K=-1,M=null;const E=new _t,H=new _t;let V=null;const ie=new Ge(0);let R=0,B=t.width,k=t.height,X=1,G=null,W=null;const q=new _t(0,0,B,k),Q=new _t(0,0,B,k);let ee=!1;const z=new fa;let Y=!1,oe=!1,ge=null;const me=new dt,Ce=new We,De=new P,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return A===null?X:1}let F=n;function Tt(v,D){for(let N=0;N<v.length;N++){const O=v[N],U=t.getContext(O,D);if(U!==null)return U}return null}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${aa}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",re,!1),F===null){const D=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&D.shift(),F=Tt(D,v),F===null)throw Tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let xe,we,he,et,Fe,y,g,I,Z,j,J,fe,ae,de,Me,Ue,$,qe,ze,Te,_e,ue,Le,Xe;function it(){xe=new Ff(F),we=new Af(F,xe,e),xe.init(we),ue=new xm(F,xe,we),he=new gm(F,xe,we),et=new Nf(F),Fe=new nm,y=new _m(F,xe,he,Fe,we,ue,et),g=new Rf(S),I=new Pf(S),Z=new Vd(F,we),Le=new Tf(F,xe,Z,we),j=new Uf(F,Z,et,Le),J=new kf(F,j,Z,et),ze=new zf(F,we,y),Ue=new Cf(Fe),fe=new tm(S,g,I,xe,we,Le,Ue),ae=new Sm(S,Fe),de=new rm,Me=new dm(xe,we),qe=new bf(S,g,I,he,J,p,l),$=new mm(S,J,we),Xe=new Em(F,et,we,he),Te=new wf(F,xe,et,we),_e=new If(F,xe,et,we),et.programs=fe.programs,S.capabilities=we,S.extensions=xe,S.properties=Fe,S.renderLists=de,S.shadowMap=$,S.state=he,S.info=et}it();const Ne=new Mm(S,F);this.xr=Ne,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const v=xe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=xe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(v){v!==void 0&&(X=v,this.setSize(B,k,!1))},this.getSize=function(v){return v.set(B,k)},this.setSize=function(v,D,N=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=v,k=D,t.width=Math.floor(v*X),t.height=Math.floor(D*X),N===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(B*X,k*X).floor()},this.setDrawingBufferSize=function(v,D,N){B=v,k=D,X=N,t.width=Math.floor(v*N),t.height=Math.floor(D*N),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(E)},this.getViewport=function(v){return v.copy(q)},this.setViewport=function(v,D,N,O){v.isVector4?q.set(v.x,v.y,v.z,v.w):q.set(v,D,N,O),he.viewport(E.copy(q).multiplyScalar(X).floor())},this.getScissor=function(v){return v.copy(Q)},this.setScissor=function(v,D,N,O){v.isVector4?Q.set(v.x,v.y,v.z,v.w):Q.set(v,D,N,O),he.scissor(H.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(v){he.setScissorTest(ee=v)},this.setOpaqueSort=function(v){G=v},this.setTransparentSort=function(v){W=v},this.getClearColor=function(v){return v.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(v=!0,D=!0,N=!0){let O=0;if(v){let U=!1;if(A!==null){const le=A.texture.format;U=le===Cl||le===Al||le===wl}if(U){const le=A.texture.type,pe=le===Un||le===Dn||le===ca||le===ei||le===bl||le===Tl,ye=qe.getClearColor(),be=qe.getClearAlpha(),Ie=ye.r,Ae=ye.g,Re=ye.b;pe?(m[0]=Ie,m[1]=Ae,m[2]=Re,m[3]=be,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=Ie,x[1]=Ae,x[2]=Re,x[3]=be,F.clearBufferiv(F.COLOR,0,x))}else O|=F.COLOR_BUFFER_BIT}D&&(O|=F.DEPTH_BUFFER_BIT),N&&(O|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),Me.dispose(),Fe.dispose(),g.dispose(),I.dispose(),J.dispose(),Le.dispose(),Xe.dispose(),fe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",wt),Ne.removeEventListener("sessionend",Ze),ge&&(ge.dispose(),ge=null),At.stop()};function te(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const v=et.autoReset,D=$.enabled,N=$.autoUpdate,O=$.needsUpdate,U=$.type;it(),et.autoReset=v,$.enabled=D,$.autoUpdate=N,$.needsUpdate=O,$.type=U}function re(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function se(v){const D=v.target;D.removeEventListener("dispose",se),Ee(D)}function Ee(v){ve(v),Fe.remove(v)}function ve(v){const D=Fe.get(v).programs;D!==void 0&&(D.forEach(function(N){fe.releaseProgram(N)}),v.isShaderMaterial&&fe.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,N,O,U,le){D===null&&(D=Se);const pe=U.isMesh&&U.matrixWorld.determinant()<0,ye=pc(v,D,N,O,U);he.setMaterial(O,pe);let be=N.index,Ie=1;if(O.wireframe===!0){if(be=j.getWireframeAttribute(N),be===void 0)return;Ie=2}const Ae=N.drawRange,Re=N.attributes.position;let st=Ae.start*Ie,Ut=(Ae.start+Ae.count)*Ie;le!==null&&(st=Math.max(st,le.start*Ie),Ut=Math.min(Ut,(le.start+le.count)*Ie)),be!==null?(st=Math.max(st,0),Ut=Math.min(Ut,be.count)):Re!=null&&(st=Math.max(st,0),Ut=Math.min(Ut,Re.count));const pt=Ut-st;if(pt<0||pt===1/0)return;Le.setup(U,O,ye,N,be);let ln,tt=Te;if(be!==null&&(ln=Z.get(be),tt=_e,tt.setIndex(ln)),U.isMesh)O.wireframe===!0?(he.setLineWidth(O.wireframeLinewidth*He()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(U.isLine){let Oe=O.linewidth;Oe===void 0&&(Oe=1),he.setLineWidth(Oe*He()),U.isLineSegments?tt.setMode(F.LINES):U.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else U.isPoints?tt.setMode(F.POINTS):U.isSprite&&tt.setMode(F.TRIANGLES);if(U.isBatchedMesh)tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)tt.renderInstances(st,pt,U.count);else if(N.isInstancedBufferGeometry){const Oe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,os=Math.min(N.instanceCount,Oe);tt.renderInstances(st,pt,os)}else tt.render(st,pt)};function je(v,D,N){v.transparent===!0&&v.side===mn&&v.forceSinglePass===!1?(v.side=Lt,v.needsUpdate=!0,gr(v,D,N),v.side=Nn,v.needsUpdate=!0,gr(v,D,N),v.side=mn):gr(v,D,N)}this.compile=function(v,D,N=null){N===null&&(N=v),f=Me.get(N),f.init(),b.push(f),N.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),v!==N&&v.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(S._useLegacyLights);const O=new Set;return v.traverse(function(U){const le=U.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const ye=le[pe];je(ye,N,U),O.add(ye)}else je(le,N,U),O.add(le)}),b.pop(),f=null,O},this.compileAsync=function(v,D,N=null){const O=this.compile(v,D,N);return new Promise(U=>{function le(){if(O.forEach(function(pe){Fe.get(pe).currentProgram.isReady()&&O.delete(pe)}),O.size===0){U(v);return}setTimeout(le,10)}xe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ke=null;function ft(v){Ke&&Ke(v)}function wt(){At.stop()}function Ze(){At.start()}const At=new Xl;At.setAnimationLoop(ft),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(v){Ke=v,Ne.setAnimationLoop(v),v===null?At.stop():At.start()},Ne.addEventListener("sessionstart",wt),Ne.addEventListener("sessionend",Ze),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(D),D=Ne.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,A),f=Me.get(v,b.length),f.init(),b.push(f),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),z.setFromProjectionMatrix(me),oe=this.localClippingEnabled,Y=Ue.init(this.clippingPlanes,oe),_=de.get(v,u.length),_.init(),u.push(_),tn(v,D,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(G,W),this.info.render.frame++,Y===!0&&Ue.beginShadows();const N=f.state.shadowsArray;if($.render(N,v,D),Y===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(_,v),f.setupLights(S._useLegacyLights),D.isArrayCamera){const O=D.cameras;for(let U=0,le=O.length;U<le;U++){const pe=O[U];ka(_,v,pe,pe.viewport)}}else ka(_,v,D);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),v.isScene===!0&&v.onAfterRender(S,v,D),Le.resetDefaultState(),K=-1,M=null,b.pop(),b.length>0?f=b[b.length-1]:f=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function tn(v,D,N,O){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||z.intersectsSprite(v)){O&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(me);const pe=J.update(v),ye=v.material;ye.visible&&_.push(v,pe,ye,N,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||z.intersectsObject(v))){const pe=J.update(v),ye=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),De.copy(pe.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(me)),Array.isArray(ye)){const be=pe.groups;for(let Ie=0,Ae=be.length;Ie<Ae;Ie++){const Re=be[Ie],st=ye[Re.materialIndex];st&&st.visible&&_.push(v,pe,st,N,De.z,Re)}}else ye.visible&&_.push(v,pe,ye,N,De.z,null)}}const le=v.children;for(let pe=0,ye=le.length;pe<ye;pe++)tn(le[pe],D,N,O)}function ka(v,D,N,O){const U=v.opaque,le=v.transmissive,pe=v.transparent;f.setupLightsView(N),Y===!0&&Ue.setGlobalState(S.clippingPlanes,N),le.length>0&&fc(U,le,D,N),O&&he.viewport(E.copy(O)),U.length>0&&mr(U,D,N),le.length>0&&mr(le,D,N),pe.length>0&&mr(pe,D,N),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function fc(v,D,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const le=we.isWebGL2;ge===null&&(ge=new oi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?or:Un,minFilter:ar,samples:le?4:0})),S.getDrawingBufferSize(Ce),le?ge.setSize(Ce.x,Ce.y):ge.setSize(Qs(Ce.x),Qs(Ce.y));const pe=S.getRenderTarget();S.setRenderTarget(ge),S.getClearColor(ie),R=S.getClearAlpha(),R<1&&S.setClearColor(16777215,.5),S.clear();const ye=S.toneMapping;S.toneMapping=Fn,mr(v,N,O),y.updateMultisampleRenderTarget(ge),y.updateRenderTargetMipmap(ge);let be=!1;for(let Ie=0,Ae=D.length;Ie<Ae;Ie++){const Re=D[Ie],st=Re.object,Ut=Re.geometry,pt=Re.material,ln=Re.group;if(pt.side===mn&&st.layers.test(O.layers)){const tt=pt.side;pt.side=Lt,pt.needsUpdate=!0,Ha(st,N,O,Ut,pt,ln),pt.side=tt,pt.needsUpdate=!0,be=!0}}be===!0&&(y.updateMultisampleRenderTarget(ge),y.updateRenderTargetMipmap(ge)),S.setRenderTarget(pe),S.setClearColor(ie,R),S.toneMapping=ye}function mr(v,D,N){const O=D.isScene===!0?D.overrideMaterial:null;for(let U=0,le=v.length;U<le;U++){const pe=v[U],ye=pe.object,be=pe.geometry,Ie=O===null?pe.material:O,Ae=pe.group;ye.layers.test(N.layers)&&Ha(ye,D,N,be,Ie,Ae)}}function Ha(v,D,N,O,U,le){v.onBeforeRender(S,D,N,O,U,le),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,D,N,O,v,le),U.transparent===!0&&U.side===mn&&U.forceSinglePass===!1?(U.side=Lt,U.needsUpdate=!0,S.renderBufferDirect(N,D,O,U,v,le),U.side=Nn,U.needsUpdate=!0,S.renderBufferDirect(N,D,O,U,v,le),U.side=mn):S.renderBufferDirect(N,D,O,U,v,le),v.onAfterRender(S,D,N,O,U,le)}function gr(v,D,N){D.isScene!==!0&&(D=Se);const O=Fe.get(v),U=f.state.lights,le=f.state.shadowsArray,pe=U.state.version,ye=fe.getParameters(v,U.state,le,D,N),be=fe.getProgramCacheKey(ye);let Ie=O.programs;O.environment=v.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(v.isMeshStandardMaterial?I:g).get(v.envMap||O.environment),Ie===void 0&&(v.addEventListener("dispose",se),Ie=new Map,O.programs=Ie);let Ae=Ie.get(be);if(Ae!==void 0){if(O.currentProgram===Ae&&O.lightsStateVersion===pe)return Va(v,ye),Ae}else ye.uniforms=fe.getUniforms(v),v.onBuild(N,ye,S),v.onBeforeCompile(ye,S),Ae=fe.acquireProgram(ye,be),Ie.set(be,Ae),O.uniforms=ye.uniforms;const Re=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=Ue.uniform),Va(v,ye),O.needsLights=gc(v),O.lightsStateVersion=pe,O.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Ae,O.uniformsList=null,Ae}function Ga(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=zr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Va(v,D){const N=Fe.get(v);N.outputColorSpace=D.outputColorSpace,N.batching=D.batching,N.instancing=D.instancing,N.instancingColor=D.instancingColor,N.skinning=D.skinning,N.morphTargets=D.morphTargets,N.morphNormals=D.morphNormals,N.morphColors=D.morphColors,N.morphTargetsCount=D.morphTargetsCount,N.numClippingPlanes=D.numClippingPlanes,N.numIntersection=D.numClipIntersection,N.vertexAlphas=D.vertexAlphas,N.vertexTangents=D.vertexTangents,N.toneMapping=D.toneMapping}function pc(v,D,N,O,U){D.isScene!==!0&&(D=Se),y.resetTextureUnits();const le=D.fog,pe=O.isMeshStandardMaterial?D.environment:null,ye=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vn,be=(O.isMeshStandardMaterial?I:g).get(O.envMap||pe),Ie=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ae=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Re=!!N.morphAttributes.position,st=!!N.morphAttributes.normal,Ut=!!N.morphAttributes.color;let pt=Fn;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=S.toneMapping);const ln=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,tt=ln!==void 0?ln.length:0,Oe=Fe.get(O),os=f.state.lights;if(Y===!0&&(oe===!0||v!==M)){const Ot=v===M&&O.id===K;Ue.setState(O,v,Ot)}let rt=!1;O.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==os.state.version||Oe.outputColorSpace!==ye||U.isBatchedMesh&&Oe.batching===!1||!U.isBatchedMesh&&Oe.batching===!0||U.isInstancedMesh&&Oe.instancing===!1||!U.isInstancedMesh&&Oe.instancing===!0||U.isSkinnedMesh&&Oe.skinning===!1||!U.isSkinnedMesh&&Oe.skinning===!0||U.isInstancedMesh&&Oe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Oe.instancingColor===!1&&U.instanceColor!==null||Oe.envMap!==be||O.fog===!0&&Oe.fog!==le||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ue.numPlanes||Oe.numIntersection!==Ue.numIntersection)||Oe.vertexAlphas!==Ie||Oe.vertexTangents!==Ae||Oe.morphTargets!==Re||Oe.morphNormals!==st||Oe.morphColors!==Ut||Oe.toneMapping!==pt||we.isWebGL2===!0&&Oe.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,Oe.__version=O.version);let Gn=Oe.currentProgram;rt===!0&&(Gn=gr(O,D,U));let Wa=!1,Ji=!1,ls=!1;const Mt=Gn.getUniforms(),Vn=Oe.uniforms;if(he.useProgram(Gn.program)&&(Wa=!0,Ji=!0,ls=!0),O.id!==K&&(K=O.id,Ji=!0),Wa||M!==v){Mt.setValue(F,"projectionMatrix",v.projectionMatrix),Mt.setValue(F,"viewMatrix",v.matrixWorldInverse);const Ot=Mt.map.cameraPosition;Ot!==void 0&&Ot.setValue(F,De.setFromMatrixPosition(v.matrixWorld)),we.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ji=!0,ls=!0)}if(U.isSkinnedMesh){Mt.setOptional(F,U,"bindMatrix"),Mt.setOptional(F,U,"bindMatrixInverse");const Ot=U.skeleton;Ot&&(we.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Mt.setValue(F,"boneTexture",Ot.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(Mt.setOptional(F,U,"batchingTexture"),Mt.setValue(F,"batchingTexture",U._matricesTexture,y));const cs=N.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0&&we.isWebGL2===!0)&&ze.update(U,N,Gn),(Ji||Oe.receiveShadow!==U.receiveShadow)&&(Oe.receiveShadow=U.receiveShadow,Mt.setValue(F,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Vn.envMap.value=be,Vn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Ji&&(Mt.setValue(F,"toneMappingExposure",S.toneMappingExposure),Oe.needsLights&&mc(Vn,ls),le&&O.fog===!0&&ae.refreshFogUniforms(Vn,le),ae.refreshMaterialUniforms(Vn,O,X,k,ge),zr.upload(F,Ga(Oe),Vn,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(zr.upload(F,Ga(Oe),Vn,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Mt.setValue(F,"center",U.center),Mt.setValue(F,"modelViewMatrix",U.modelViewMatrix),Mt.setValue(F,"normalMatrix",U.normalMatrix),Mt.setValue(F,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ot=O.uniformsGroups;for(let ds=0,_c=Ot.length;ds<_c;ds++)if(we.isWebGL2){const Xa=Ot[ds];Xe.update(Xa,Gn),Xe.bind(Xa,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function mc(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function gc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,D,N){Fe.get(v.texture).__webglTexture=D,Fe.get(v.depthTexture).__webglTexture=N;const O=Fe.get(v);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=N===void 0,O.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,D){const N=Fe.get(v);N.__webglFramebuffer=D,N.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,N=0){A=v,L=D,C=N;let O=!0,U=null,le=!1,pe=!1;if(v){const be=Fe.get(v);be.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(F.FRAMEBUFFER,null),O=!1):be.__webglFramebuffer===void 0?y.setupRenderTarget(v):be.__hasExternalTextures&&y.rebindTextures(v,Fe.get(v.texture).__webglTexture,Fe.get(v.depthTexture).__webglTexture);const Ie=v.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(pe=!0);const Ae=Fe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?U=Ae[D][N]:U=Ae[D],le=!0):we.isWebGL2&&v.samples>0&&y.useMultisampledRTT(v)===!1?U=Fe.get(v).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[N]:U=Ae,E.copy(v.viewport),H.copy(v.scissor),V=v.scissorTest}else E.copy(q).multiplyScalar(X).floor(),H.copy(Q).multiplyScalar(X).floor(),V=ee;if(he.bindFramebuffer(F.FRAMEBUFFER,U)&&we.drawBuffers&&O&&he.drawBuffers(v,U),he.viewport(E),he.scissor(H),he.setScissorTest(V),le){const be=Fe.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,N)}else if(pe){const be=Fe.get(v.texture),Ie=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,N||0,Ie)}K=-1},this.readRenderTargetPixels=function(v,D,N,O,U,le,pe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){he.bindFramebuffer(F.FRAMEBUFFER,ye);try{const be=v.texture,Ie=be.format,Ae=be.type;if(Ie!==$t&&ue.convert(Ie)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Ae===or&&(xe.has("EXT_color_buffer_half_float")||we.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ae!==Un&&ue.convert(Ae)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ae===Ln&&(we.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-O&&N>=0&&N<=v.height-U&&F.readPixels(D,N,O,U,ue.convert(Ie),ue.convert(Ae),le)}finally{const be=A!==null?Fe.get(A).__webglFramebuffer:null;he.bindFramebuffer(F.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(v,D,N=0){const O=Math.pow(2,-N),U=Math.floor(D.image.width*O),le=Math.floor(D.image.height*O);y.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,N,0,0,v.x,v.y,U,le),he.unbindTexture()},this.copyTextureToTexture=function(v,D,N,O=0){const U=D.image.width,le=D.image.height,pe=ue.convert(N.format),ye=ue.convert(N.type);y.setTexture2D(N,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,v.x,v.y,U,le,pe,ye,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,v.x,v.y,D.mipmaps[0].width,D.mipmaps[0].height,pe,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,O,v.x,v.y,pe,ye,D.image),O===0&&N.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(v,D,N,O,U=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=v.max.x-v.min.x+1,pe=v.max.y-v.min.y+1,ye=v.max.z-v.min.z+1,be=ue.convert(O.format),Ie=ue.convert(O.type);let Ae;if(O.isData3DTexture)y.setTexture3D(O,0),Ae=F.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)y.setTexture2DArray(O,0),Ae=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Re=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ut=F.getParameter(F.UNPACK_SKIP_PIXELS),pt=F.getParameter(F.UNPACK_SKIP_ROWS),ln=F.getParameter(F.UNPACK_SKIP_IMAGES),tt=N.isCompressedTexture?N.mipmaps[U]:N.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,tt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,v.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,v.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,v.min.z),N.isDataTexture||N.isData3DTexture?F.texSubImage3D(Ae,U,D.x,D.y,D.z,le,pe,ye,be,Ie,tt.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ae,U,D.x,D.y,D.z,le,pe,ye,be,tt.data)):F.texSubImage3D(Ae,U,D.x,D.y,D.z,le,pe,ye,be,Ie,tt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Re),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ut),F.pixelStorei(F.UNPACK_SKIP_ROWS,pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ln),U===0&&O.generateMipmaps&&F.generateMipmap(Ae),he.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?y.setTextureCube(v,0):v.isData3DTexture?y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?y.setTexture2DArray(v,0):y.setTexture2D(v,0),he.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,he.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===da?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Kr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?ni:Dl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ni?vt:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bm extends Ql{}bm.prototype.isWebGL1Renderer=!0;class ga{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new ga(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Tm extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class wm extends Pt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ot extends pr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ec extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Gs=new dt,fl=new P,pl=new P;class Am{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(fl),pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pl),t.updateMatrixWorld(),Gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cm extends Am{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rm extends ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Cm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Dm extends ec{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ml(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ml();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ml(){return(typeof performance>"u"?Date:performance).now()}class Pm{constructor(e,t,n=0,r=1/0){this.ray=new Ol(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ta(e,this,n,t),n.sort(gl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ta(e[r],this,n,t);return n.sort(gl),n}}function gl(i,e){return i.distance-e.distance}function ta(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)ta(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);const _a="cubeDefense_final_v1";function Fm(){try{const i=localStorage.getItem(_a);if(i)return JSON.parse(i)}catch{}return{record:0,unlockedLevel:1,completedLevels:[],discoveredEnemies:["normal"],crystals:100,heroes:["default"],activeHero:"default",heroLevels:{default:1},towerUpgrades:{hp:0,regen:0,armor:0},purchasedTowers:["base"],purchasedBarricades:["wood"],lastCrystalAd:0,openedChests:0}}function Jt(){try{localStorage.setItem(_a,JSON.stringify(ce))}catch{}}const ce=Fm();let Zn=null;function Bn(){if(!Zn)try{Zn=new(window.AudioContext||window.webkitAudioContext)}catch{}}function nt(i){if(!Zn)return;const e=Zn.currentTime,t=Zn.createOscillator(),n=Zn.createGain();t.connect(n),n.connect(Zn.destination);const s={shoot:{f1:800,f2:200,dur:.08,vol:.03,wave:"square"},enemyDeath:{f1:400,f2:100,dur:.15,vol:.06,wave:"sawtooth"},towerHit:{f1:150,f2:50,dur:.3,vol:.12,wave:"sine"},bossSpawn:{f1:80,f2:40,dur:.7,vol:.2,wave:"sawtooth"},waveStart:{f1:400,f2:800,dur:.2,vol:.08,wave:"triangle"},click:{f1:600,f2:600,dur:.06,vol:.05,wave:"sine"},win:{f1:500,f2:1500,dur:.6,vol:.15,wave:"sine"},lose:{f1:400,f2:100,dur:.8,vol:.15,wave:"sawtooth"},build:{f1:300,f2:700,dur:.15,vol:.08,wave:"triangle"},break:{f1:200,f2:80,dur:.2,vol:.1,wave:"square"},buy:{f1:500,f2:1e3,dur:.3,vol:.1,wave:"triangle"},chest:{f1:300,f2:1200,dur:.5,vol:.15,wave:"triangle"}}[i];s&&(t.type=s.wave,t.frequency.setValueAtTime(s.f1,e),t.frequency.exponentialRampToValueAtTime(s.f2,e+s.dur),n.gain.setValueAtTime(s.vol,e),n.gain.exponentialRampToValueAtTime(.001,e+s.dur+.05),t.start(e),t.stop(e+s.dur+.1))}console.log("✅ Часть 1 загружена: импорты, сохранение, звуки");const Qr={common:{id:"common",name:"ОБЫЧНЫЙ",color:"#9E9E9E",colorHex:10395294,glowColor:12434877,dropChance:.6,desc:"Базовая редкость"},rare:{id:"rare",name:"РЕДКИЙ",color:"#2196F3",colorHex:2201331,glowColor:6600182,dropChance:.25,desc:"Нечастая редкость"},epic:{id:"epic",name:"ЭПИЧЕСКИЙ",color:"#9C27B0",colorHex:10233776,glowColor:12216520,dropChance:.1,desc:"Редкая редкость"},legendary:{id:"legendary",name:"ЛЕГЕНДАРНЫЙ",color:"#FFD700",colorHex:16766720,glowColor:16771899,dropChance:.04,desc:"Очень редкая"},mythic:{id:"mythic",name:"МИФИЧЕСКИЙ",color:"#E53935",colorHex:15022389,glowColor:16732754,dropChance:.01,desc:"Легендарная редкость"}},Um={wooden:{common:.7,rare:.25,epic:.04,legendary:.01,mythic:0},silver:{common:.4,rare:.4,epic:.15,legendary:.04,mythic:.01},golden:{common:.2,rare:.35,epic:.3,legendary:.12,mythic:.03},diamond:{common:.05,rare:.2,epic:.4,legendary:.25,mythic:.1},mythic:{common:0,rare:.05,epic:.2,legendary:.4,mythic:.35}},xa={wooden:{id:"wooden",name:"ДЕРЕВЯННЫЙ СУНДУК",color:9268835,glowColor:10586239,cost:500,icon:"📦",rarity:"common",desc:"Базовый сундук. Обычные награды."},silver:{id:"silver",name:"СЕРЕБРЯНЫЙ СУНДУК",color:11583173,glowColor:13621468,cost:2e3,icon:"🎁",rarity:"rare",desc:"Средний сундук. Редкие награды."},golden:{id:"golden",name:"ЗОЛОТОЙ СУНДУК",color:16766720,glowColor:16771899,cost:5e3,icon:"🏆",rarity:"epic",desc:"Хороший сундук. Эпические награды."},diamond:{id:"diamond",name:"АЛМАЗНЫЙ СУНДУК",color:1638399,glowColor:8445674,cost:15e3,icon:"💎",rarity:"legendary",desc:"Премиум сундук. Легендарные награды."},mythic:{id:"mythic",name:"МИФИЧЕСКИЙ СУНДУК",color:15022389,glowColor:16732754,cost:5e4,icon:"🔥",rarity:"mythic",desc:"Топовый сундук. Мифические награды!"}};function Im(i){const e=Math.random();let t=0;for(const[n,r]of Object.entries(i))if(t+=r,e<t)return n;return"common"}console.log("✅ Часть 2 загружена: редкости, сундуки");const Qt={normal:{name:"КУБИК",color:15022389,darkColor:12000284,hp:20,speed:.035,damage:5,reward:15,hasArmor:!1,spawnFrom:1},fast:{name:"БЕГУН",color:2001125,darkColor:870305,hp:10,speed:.06,damage:3,reward:10,hasArmor:!1,spawnFrom:2},tank:{name:"ТАНК",color:7162945,darkColor:4073251,hp:30,speed:.02,damage:15,reward:30,hasArmor:!0,spawnFrom:3},digger:{name:"КОПАТЕЛЬ",color:7951688,darkColor:5125166,hp:25,speed:.04,damage:10,reward:25,hasArmor:!0,spawnFrom:6,isDigger:!0},flyer:{name:"ВЕРТОЛЁТЧИК",color:48340,darkColor:33679,hp:15,speed:.05,damage:8,reward:20,hasArmor:!1,spawnFrom:8,isFlyer:!0},healer:{name:"ЛЕКАРЬ",color:5025616,darkColor:1793568,hp:40,speed:.025,damage:5,reward:40,hasArmor:!1,spawnFrom:12,isHealer:!0},shield:{name:"ЩИТОНОСЕЦ",color:7901340,darkColor:3622735,hp:60,speed:.02,damage:12,reward:45,hasArmor:!0,spawnFrom:15,hasShield:!0},runner:{name:"СКОРОХОД",color:16771899,darkColor:16361509,hp:8,speed:.09,damage:4,reward:12,hasArmor:!1,spawnFrom:18},bomber:{name:"БОМБАРДИР",color:4342338,darkColor:2171169,hp:35,speed:.03,damage:20,reward:35,hasArmor:!0,spawnFrom:22,isBomber:!0},phantom:{name:"ПРИЗРАК",color:11771355,darkColor:6765239,hp:20,speed:.05,damage:10,reward:50,hasArmor:!1,spawnFrom:28,isPhantom:!0},brute:{name:"ГРОМИЛА",color:12531212,darkColor:8847360,hp:100,speed:.018,damage:25,reward:80,hasArmor:!0,spawnFrom:33},miniboss:{name:"МИНИ-БОСС",color:9315498,darkColor:4854924,hp:150,speed:.025,damage:30,reward:100,hasArmor:!0,spawnFrom:10,miniBoss:!0},jumper:{name:"ПРЫГУН",color:58998,darkColor:51283,hp:18,speed:.045,damage:8,reward:22,hasArmor:!1,spawnFrom:4},mage:{name:"МАГ",color:6765239,darkColor:3218322,hp:25,speed:.03,damage:15,reward:35,hasArmor:!1,spawnFrom:14},necro:{name:"НЕКРОМАНТ",color:3622735,darkColor:1056807,hp:35,speed:.025,damage:12,reward:45,hasArmor:!1,spawnFrom:24},kamikaze:{name:"КАМИКАДЗЕ",color:16740096,darkColor:15094016,hp:12,speed:.07,damage:40,reward:18,hasArmor:!1,spawnFrom:26,isBomber:!0},ogre:{name:"ОГР",color:9268835,darkColor:5125166,hp:120,speed:.02,damage:30,reward:90,hasArmor:!0,spawnFrom:35},goblin:{name:"ГОБЛИН",color:6856504,darkColor:3369246,hp:15,speed:.05,damage:6,reward:18,hasArmor:!1,spawnFrom:7},skeleton:{name:"СКЕЛЕТ",color:15527921,darkColor:11583173,hp:22,speed:.035,damage:9,reward:24,hasArmor:!1,spawnFrom:9},zombie:{name:"ЗОМБИ",color:3369246,darkColor:1793568,hp:28,speed:.028,damage:11,reward:28,hasArmor:!1,spawnFrom:11},vampire:{name:"ВАМПИР",color:4854924,darkColor:3218322,hp:45,speed:.035,damage:18,reward:55,hasArmor:!1,spawnFrom:17},werewolf:{name:"ОБОРОТЕНЬ",color:6111287,darkColor:4073251,hp:55,speed:.05,damage:22,reward:60,hasArmor:!1,spawnFrom:19},demon:{name:"ДЕМОН",color:12986408,darkColor:9306112,hp:80,speed:.035,damage:28,reward:85,hasArmor:!0,spawnFrom:31},angel:{name:"АНГЕЛ",color:16775620,darkColor:16773494,hp:70,speed:.03,damage:20,reward:95,hasArmor:!1,spawnFrom:36,isHealer:!0},titan:{name:"ТИТАН",color:5533306,darkColor:2503224,hp:250,speed:.015,damage:50,reward:200,hasArmor:!0,spawnFrom:38},crystal:{name:"КРИСТАЛЬНЫЙ",color:1638399,darkColor:47316,hp:60,speed:.03,damage:20,reward:70,hasArmor:!0,spawnFrom:40},magma:{name:"МАГМОВЫЙ",color:16727296,darkColor:12531212,hp:90,speed:.032,damage:35,reward:100,hasArmor:!0,spawnFrom:42},ice:{name:"ЛЕДЯНОЙ",color:8444159,darkColor:166097,hp:55,speed:.03,damage:18,reward:65,hasArmor:!1,spawnFrom:44},toxic:{name:"ТОКСИЧНЫЙ",color:7798531,darkColor:6610199,hp:40,speed:.04,damage:25,reward:75,hasArmor:!1,spawnFrom:46},ghostly:{name:"ФАНТОМ",color:11725810,darkColor:33679,hp:30,speed:.055,damage:15,reward:60,hasArmor:!1,spawnFrom:47,isPhantom:!0},mechanical:{name:"МЕХАНИЧЕСКИЙ",color:10395294,darkColor:4342338,hp:110,speed:.025,damage:32,reward:120,hasArmor:!0,spawnFrom:48},dragon:{name:"ДРАКОН",color:13840175,darkColor:8323072,hp:200,speed:.04,damage:60,reward:250,hasArmor:!0,spawnFrom:49,isFlyer:!0},hydra:{name:"ГИДРА",color:3046706,darkColor:1793568,hp:180,speed:.028,damage:45,reward:220,hasArmor:!0,spawnFrom:50,isHealer:!0},phoenix:{name:"ФЕНИКС",color:16740096,darkColor:15094016,hp:160,speed:.05,damage:50,reward:230,hasArmor:!1,spawnFrom:50,isFlyer:!0}},Nm={normal:"Обычный пехотинец. Идёт толпой.",fast:"Быстрый, но хрупкий.",tank:"Медленный, но живучий.",digger:"Копает под землёй. Появляется рядом с башней.",flyer:"Летает. Турели не достают, пока в воздухе.",healer:"Лечит других мобов вокруг себя.",shield:"Блокирует 50% урона от пуль.",runner:"Очень быстрый, но очень хрупкий.",bomber:"Взрывается при смерти, ломает баррикады.",phantom:"30% шанс уклониться от пуль.",brute:"Огромный HP. Идёт напролом.",miniboss:"Уменьшенная версия босса. Опасен.",jumper:"Прыгает через баррикады.",mage:"Стреляет магией по турелям.",necro:"Призывает скелетов при смерти.",kamikaze:"Взрывается, нанося 40 урона.",ogre:"Огромный, сильный, медленный.",goblin:"Маленький, вороватый.",skeleton:"Хрупкий, но быстрый.",zombie:"Медленный, но восстанавливается.",vampire:"Восстанавливает HP от урона.",werewolf:"Быстрый в лунную ночь.",demon:"Сильный, с бронёй.",angel:"Святой воин. Лечит союзников.",titan:"Гигантский HP. Требует всю оборону.",crystal:"Кристаллический. Отражает часть урона.",magma:"Горячий. Поджигает турели.",ice:"Замораживает турели рядом.",toxic:"Отравляет турели.",ghostly:"Полупрозрачный. Трудно попасть.",mechanical:"Механический. Высокая броня.",dragon:"Летающий дракон. Огромный урон.",hydra:"Многоголовый. Лечит сам себя.",phoenix:"Летающий. Возрождается один раз."};console.log("✅ Часть 3 загружена: типов врагов =",Object.keys(Qt).length);const es={base:{name:"СТРЕЛОК",color:48340,rarity:"common",cost:50,range:3,fireRate:1.5,damage:5,shopPrice:0,hotkey:"1",category:"tower",desc:"Базовая турель."},shotgun:{name:"ДРОБОВИК",color:7951688,rarity:"common",cost:70,range:2.5,fireRate:2,damage:5,multiShot:5,shopPrice:750,hotkey:"2",category:"tower",desc:"5 пуль веером."},fire:{name:"ОГОНЬ",color:16750592,rarity:"common",cost:60,range:2.8,fireRate:1.4,damage:5,burn:4,burnDuration:2,shopPrice:600,hotkey:"3",category:"tower",desc:"Поджигает."},shuriken:{name:"СЮРИКЕН",color:10395294,rarity:"common",cost:90,range:3.5,fireRate:1,damage:5,shopPrice:1350,hotkey:"4",category:"tower",desc:"Быстрые снаряды."},cannon:{name:"ПУШКА",color:16733986,rarity:"rare",cost:60,range:3.5,fireRate:2.5,damage:8,shopPrice:500,hotkey:"5",category:"tower",desc:"Медленная, мощная."},laser:{name:"ЛАЗЕР",color:15277667,rarity:"rare",cost:70,range:4,fireRate:1.2,damage:8,pierce:3,shopPrice:800,hotkey:"6",category:"tower",desc:"Пробивает 3 мобов."},poison:{name:"ЯД",color:9159498,rarity:"rare",cost:65,range:3,fireRate:1.6,damage:8,dotDamage:3,dotDuration:3,shopPrice:700,hotkey:"7",category:"tower",desc:"Отравляет."},lightning:{name:"МОЛНИЯ",color:16771899,rarity:"rare",cost:75,range:4.5,fireRate:2,damage:8,chain:3,shopPrice:900,hotkey:"8",category:"tower",desc:"Бьёт 3 мобов."},vampire:{name:"ВАМПИР",color:10233776,rarity:"rare",cost:85,range:3.5,fireRate:1.5,damage:8,lifesteal:.3,shopPrice:1100,hotkey:"9",category:"tower",desc:"Восстанавливает HP."},acid:{name:"КИСЛОТА",color:6610199,rarity:"rare",cost:80,range:3,fireRate:1.5,damage:8,dotDamage:5,dotDuration:5,shopPrice:1e3,hotkey:"0",category:"tower",desc:"Сильный яд."},electro:{name:"ЭЛЕКТРО",color:16771584,rarity:"rare",cost:85,range:3.5,fireRate:1.6,damage:8,chain:4,shopPrice:1150,hotkey:"-",category:"tower",desc:"Электрошок."},sniper:{name:"СНАЙПЕР",color:5025616,rarity:"epic",cost:80,range:8,fireRate:3,damage:10,shopPrice:1e3,hotkey:"=",category:"tower",desc:"Огромный радиус."},mortar:{name:"МИНОМЁТ",color:4342338,rarity:"epic",cost:90,range:6,fireRate:3.5,damage:10,splash:1.5,shopPrice:1200,hotkey:"z",category:"tower",desc:"Урон по площади."},plasma:{name:"ПЛАЗМА",color:14696699,rarity:"epic",cost:110,range:4.5,fireRate:1.8,damage:10,pierce:5,shopPrice:1700,hotkey:"x",category:"tower",desc:"Пробивает 5 мобов."},radiation:{name:"РАДИАЦИЯ",color:11463168,rarity:"epic",cost:100,range:3.5,fireRate:2,damage:10,dotDamage:8,dotDuration:4,shopPrice:1400,hotkey:"c",category:"tower",desc:"Радиация."},psi:{name:"ПСИОНИКА",color:8146431,rarity:"epic",cost:130,range:4,fireRate:2.5,damage:10,shopPrice:2e3,hotkey:"v",category:"tower",desc:"Игнорирует броню."},crossbow:{name:"АРБАЛЕТ",color:3369246,rarity:"epic",cost:100,range:6,fireRate:2,damage:10,pierce:2,shopPrice:1600,hotkey:"b",category:"tower",desc:"Пробивает 2 мобов."},precise:{name:"ТОЧНОСТЬ",color:58998,rarity:"epic",cost:130,range:5,fireRate:1.5,damage:10,shopPrice:2100,hotkey:"n",category:"tower",desc:"Критический урон."},mass:{name:"МАСС-УРОН",color:16727296,rarity:"epic",cost:140,range:3.5,fireRate:2.5,damage:10,splash:2,shopPrice:2300,hotkey:"m",category:"tower",desc:"Урон по площади."},rocket:{name:"РАКЕТНИЦА",color:13840175,rarity:"legendary",cost:100,range:5,fireRate:3,damage:12,splash:1,shopPrice:1500,hotkey:"F1",category:"tower",desc:"Ракета с осколками."},tesla:{name:"ТЕСЛА",color:58879,rarity:"legendary",cost:90,range:4,fireRate:1,damage:12,chain:5,shopPrice:1300,hotkey:"F2",category:"tower",desc:"Цепь на 5 мобов."},cryo:{name:"КРИО",color:11789820,rarity:"legendary",cost:95,range:3.5,fireRate:2,damage:12,slow:.5,slowDuration:3,shopPrice:1250,hotkey:"F3",category:"tower",desc:"Замедляет."},teleport:{name:"ТЕЛЕПОРТ",color:47316,rarity:"legendary",cost:140,range:5,fireRate:2,damage:12,shopPrice:2200,hotkey:"F4",category:"tower",desc:"Мгновенное попадание."},ricochet:{name:"РИКОШЕТ",color:6627327,rarity:"legendary",cost:125,range:4,fireRate:1.8,damage:12,shopPrice:2050,hotkey:"F5",category:"tower",desc:"Рикошетит."},typhoon:{name:"ТАЙФУН",color:161725,rarity:"mythic",cost:150,range:4,fireRate:3,damage:15,shopPrice:2600,hotkey:"F6",category:"tower",desc:"Отталкивает мобов."},hammer:{name:"МОЛОТ",color:6111287,rarity:"mythic",cost:120,range:3,fireRate:4,damage:15,splash:1,shopPrice:1800,hotkey:"F7",category:"tower",desc:"Тяжёлый удар."},bazooka:{name:"БАЗУКА",color:12000284,rarity:"mythic",cost:160,range:5.5,fireRate:4,damage:15,splash:1.5,shopPrice:2800,hotkey:"F8",category:"tower",desc:"Взрыв по площади."},flamethrower:{name:"ОГНЕМЁТ",color:15094016,rarity:"mythic",cost:130,range:2.5,fireRate:1,damage:15,burn:6,burnDuration:3,shopPrice:1900,hotkey:"F9",category:"tower",desc:"Сильно поджигает."}};console.log("✅ Часть 4 загружена: турелей =",Object.keys(es).length);const ts={stun:{name:"СТАН-БАШНЯ",color:16761095,rarity:"common",cost:70,range:3.5,fireRate:2.5,damage:5,stun:1.5,shopPrice:120,hotkey:"A",category:"control",desc:"Стан на 1.5 сек."},web:{name:"ПАУТИНА",color:11583173,rarity:"rare",cost:60,range:3.5,fireRate:3,damage:8,stun:2,shopPrice:100,hotkey:"S",category:"control",desc:"Стан на 2 сек."},frost:{name:"ЗАМОРОЗКА",color:8508666,rarity:"rare",cost:55,range:3,fireRate:1.8,damage:8,slow:.5,slowDuration:2,shopPrice:90,hotkey:"D",category:"control",desc:"Замедляет 50%."},gravity:{name:"ГРАВИТАЦИЯ",color:4149685,rarity:"epic",cost:80,range:4,fireRate:3,damage:10,slow:.8,slowDuration:4,shopPrice:130,hotkey:"F",category:"control",desc:"Замедляет 80%."},timeTrap:{name:"ВРЕМЯ-ЛОВУШКА",color:8146431,rarity:"legendary",cost:100,range:3.5,fireRate:4,damage:12,stun:1.5,isAoe:!0,shopPrice:200,hotkey:"G",category:"control",desc:"AOE-стан."}},zn={...es,...ts};console.log("✅ Часть 5 загружена: стан-башен =",Object.keys(ts).length,", всего турелей =",Object.keys(zn).length);const fi={wood:{name:"ДЕРЕВО",color:9268835,accentColor:6111287,rarity:"common",cost:20,hp:100,shopPrice:0,hotkey:"Q",desc:"Дешёвая, слабая."},plastic:{name:"ПЛАСТИК",color:16750592,accentColor:15094016,rarity:"common",cost:40,hp:150,shopPrice:200,hotkey:"W",desc:"Хрупкий, но дешёвый."},wood_plus:{name:"ДЕРЕВО+",color:6111287,accentColor:4073251,rarity:"common",cost:50,hp:250,shopPrice:400,hotkey:"E",desc:"Улучшенное дерево."},stone:{name:"КАМЕНЬ",color:10395294,accentColor:6381921,rarity:"rare",cost:40,hp:300,shopPrice:300,hotkey:"R",desc:"Крепкая."},stone_plus:{name:"КАМЕНЬ+",color:7697781,accentColor:4342338,rarity:"rare",cost:90,hp:500,shopPrice:700,hotkey:"T",desc:"Улучшенный камень."},iron:{name:"ЖЕЛЕЗО",color:6323595,accentColor:3622735,rarity:"rare",cost:70,hp:600,shopPrice:600,hotkey:"Y",desc:"Очень крепкая."},ice:{name:"ЛЁД",color:8508666,accentColor:5227511,rarity:"rare",cost:60,hp:200,slow:.5,shopPrice:700,hotkey:"U",desc:"Замедляет."},ceramic:{name:"КЕРАМИКА",color:15723497,accentColor:12364452,rarity:"rare",cost:70,hp:450,shopPrice:900,hotkey:"I",desc:"Прочная керамика."},metal:{name:"МЕТАЛЛ",color:11583173,accentColor:7901340,rarity:"rare",cost:120,hp:700,shopPrice:1300,hotkey:"O",desc:"Простой металл."},rubber:{name:"РЕЗИНА",color:2171169,accentColor:0,rarity:"rare",cost:60,hp:300,reflect:.5,shopPrice:800,hotkey:"P",desc:"Отражает 50% урона."},spikes:{name:"ШИПЫ",color:15022389,accentColor:12000284,rarity:"rare",cost:50,hp:150,damage:3,shopPrice:500,hotkey:"A",desc:"Ранит мобов."},magic:{name:"МАГИЯ",color:10233776,accentColor:6953882,rarity:"rare",cost:90,hp:400,regen:5,shopPrice:900,hotkey:"S",desc:"Восстанавливается."},toxic_b:{name:"ЯД",color:6610199,accentColor:3369246,rarity:"rare",cost:80,hp:350,poison:5,shopPrice:1e3,hotkey:"D",desc:"Отравляет."},frost_b:{name:"МОРОЗ",color:11789820,accentColor:5227511,rarity:"rare",cost:100,hp:500,slow:.7,shopPrice:1300,hotkey:"F",desc:"Сильное замедление."},electro_b:{name:"ЭЛЕКТРО",color:16771584,accentColor:16361509,rarity:"rare",cost:110,hp:450,shock:8,shopPrice:1500,hotkey:"G",desc:"Бьёт током."},basalt:{name:"БАЗАЛЬТ",color:4342338,accentColor:2171169,rarity:"epic",cost:80,hp:800,shopPrice:800,hotkey:"H",desc:"Прочная скала."},gold:{name:"ЗОЛОТО",color:16766720,accentColor:16752640,rarity:"epic",cost:180,hp:700,bonusCrystals:2,shopPrice:2200,hotkey:"J",desc:"+2 💎 за убийство."},crystal_b:{name:"КРИСТАЛЛ",color:1638399,accentColor:47316,rarity:"epic",cost:100,hp:500,reflect:.3,shopPrice:1400,hotkey:"K",desc:"Отражает 30% урона."},magma_b:{name:"МАГМА",color:16727296,accentColor:12531212,rarity:"epic",cost:90,hp:400,burnAura:5,shopPrice:1100,hotkey:"L",desc:"Обжигает мобов."},iron_plus:{name:"ЖЕЛЕЗО+",color:4545124,accentColor:2503224,rarity:"epic",cost:130,hp:900,shopPrice:1e3,hotkey:"Z",desc:"Улучшенное железо."},laser_b:{name:"ЛАЗЕР",color:15277667,accentColor:11342935,rarity:"epic",cost:140,hp:500,laserDmg:15,shopPrice:1800,hotkey:"X",desc:"Лазерный барьер."},plasma_b:{name:"ПЛАЗМА",color:14696699,accentColor:11141375,rarity:"epic",cost:150,hp:600,plasmaDmg:20,shopPrice:2e3,hotkey:"C",desc:"Плазменный барьер."},diamond:{name:"АЛМАЗ",color:1638399,accentColor:44225,rarity:"epic",cost:200,hp:1e3,shopPrice:2600,hotkey:"V",desc:"Очень твёрдый."},mithril:{name:"МИФРИЛ",color:11722715,accentColor:8440772,rarity:"epic",cost:280,hp:1800,slow:.3,shopPrice:3800,hotkey:"B",desc:"Замедляет."},obsidian:{name:"ОБСИДИАН",color:1710618,accentColor:0,rarity:"legendary",cost:120,hp:1200,shopPrice:1200,hotkey:"N",desc:"Легендарная прочность."},netherite:{name:"НЕЗЕРИТ",color:4073251,accentColor:1769472,rarity:"legendary",cost:250,hp:1500,shopPrice:3400,hotkey:"M",desc:"Легендарная броня."},time_b:{name:"ВРЕМЯ",color:8146431,accentColor:4854924,rarity:"legendary",cost:200,hp:700,timeSlow:.5,shopPrice:2800,hotkey:",",desc:"Замедляет время."},space_b:{name:"ПРОСТРАНСТВО",color:4149685,accentColor:1713022,rarity:"legendary",cost:220,hp:800,shopPrice:3e3,hotkey:".",desc:"Телепортирует мобов."},adamantium:{name:"АДАМАНТИТ",color:51283,accentColor:38436,rarity:"mythic",cost:300,hp:2e3,regen:3,shopPrice:4e3,hotkey:"/",desc:"Восстанавливается."},void_b:{name:"ПУСТОТА",color:4854924,accentColor:2162781,rarity:"mythic",cost:350,hp:1e3,shopPrice:5e3,hotkey:"F10",desc:"Уничтожает мобов."}};console.log("✅ Часть 6 загружена: типов баррикад =",Object.keys(fi).length);const ns={ice:{id:"ice",name:"ЛЕДЯНОЙ",color:8508666,darkColor:161725,hp:1500,speed:.015,damage:40,reward:800,ability:"freeze",desc:"Замораживает турели.",accentColor:14808574},fire:{id:"fire",name:"ОГНЕННЫЙ",color:16733986,darkColor:12531212,hp:3e3,speed:.018,damage:60,reward:1500,ability:"burn",desc:"Поджигает турели.",accentColor:16755601},vampire:{id:"vampire",name:"ВАМПИР",color:10233776,darkColor:4854924,hp:5e3,speed:.02,damage:70,reward:2500,ability:"lifesteal",desc:"Восстанавливает HP.",accentColor:13538264},healer:{id:"healer",name:"ЦЕЛИТЕЛЬ",color:5025616,darkColor:1793568,hp:7e3,speed:.015,damage:50,reward:3500,ability:"heal",desc:"Лечит мобов.",accentColor:10868391},ghost:{id:"ghost",name:"ПРИЗРАК",color:11771355,darkColor:6765239,hp:9e3,speed:.025,damage:80,reward:5e3,ability:"evade",desc:"40% шанс уклониться.",accentColor:13747433},earth:{id:"earth",name:"ЗЕМЛЯНОЙ",color:7162945,darkColor:4073251,hp:14e3,speed:.012,damage:100,reward:7e3,ability:"shield",desc:"Блокирует 50% урона.",accentColor:10586239},air:{id:"air",name:"ВОЗДУШНЫЙ",color:48340,darkColor:33679,hp:18e3,speed:.03,damage:90,reward:9e3,ability:"fly",desc:"Летает. Турели не достают.",accentColor:8445674},thunder:{id:"thunder",name:"МОЛНИЯ",color:16771899,darkColor:16361509,hp:25e3,speed:.02,damage:110,reward:12e3,ability:"chain",desc:"Бьёт молниями по турелям.",accentColor:16774557},poison:{id:"poison",name:"ЯДОВИТЫЙ",color:9159498,darkColor:3369246,hp:35e3,speed:.018,damage:130,reward:16e3,ability:"poison",desc:"Отравляет турели.",accentColor:12968357},emperor:{id:"emperor",name:"ИМПЕРАТОР",color:16766720,darkColor:15094016,hp:1e5,speed:.02,damage:200,reward:5e4,ability:"all",desc:"Все способности сразу!",accentColor:16774557}},va=[5,10,15,20,25,30,35,40,45,50];console.log("✅ Часть 7 загружена: боссов =",Object.keys(ns).length);const lr=[{id:1,name:"ЛУГ",waves:5,hpMul:1,speedMul:1,towerHp:100,reward:100},{id:2,name:"ЛЕС",waves:6,hpMul:1.2,speedMul:1.05,towerHp:105,reward:120},{id:3,name:"ПЕЩЕРА",waves:6,hpMul:1.4,speedMul:1.1,towerHp:110,reward:140},{id:4,name:"ПУСТЫНЯ",waves:7,hpMul:1.7,speedMul:1.15,towerHp:115,reward:170},{id:5,name:"ЛЕДЯНОЙ ПИК",waves:7,hpMul:2,speedMul:1.2,towerHp:140,reward:400,boss:"ice"},{id:6,name:"ВУЛКАН",waves:8,hpMul:2.4,speedMul:1.25,towerHp:145,reward:240},{id:7,name:"НЕБЕСА",waves:8,hpMul:2.8,speedMul:1.3,towerHp:150,reward:280},{id:8,name:"БЕЗДНА",waves:9,hpMul:3.3,speedMul:1.35,towerHp:155,reward:330},{id:9,name:"ХАОС",waves:9,hpMul:3.8,speedMul:1.4,towerHp:160,reward:380},{id:10,name:"ОГНЕННЫЙ ТРОН",waves:10,hpMul:4.5,speedMul:1.5,towerHp:190,reward:800,boss:"fire"},{id:11,name:"ТЕНЬ",waves:10,hpMul:5.2,speedMul:1.55,towerHp:195,reward:550},{id:12,name:"КРИСТАЛЛ",waves:11,hpMul:6,speedMul:1.6,towerHp:200,reward:600},{id:13,name:"МАГМА",waves:11,hpMul:6.9,speedMul:1.65,towerHp:205,reward:660},{id:14,name:"СВЕТ",waves:12,hpMul:7.9,speedMul:1.7,towerHp:210,reward:720},{id:15,name:"ВАМПИР",waves:12,hpMul:9,speedMul:1.75,towerHp:240,reward:1400,boss:"vampire"},{id:16,name:"ГРОЗА",waves:13,hpMul:10.3,speedMul:1.8,towerHp:245,reward:880},{id:17,name:"БУРЯ",waves:13,hpMul:11.7,speedMul:1.85,towerHp:250,reward:960},{id:18,name:"ЛАВА",waves:14,hpMul:13.3,speedMul:1.9,towerHp:255,reward:1050},{id:19,name:"ПЛАЗМА",waves:14,hpMul:15.1,speedMul:1.95,towerHp:260,reward:1150},{id:20,name:"ЦЕЛИТЕЛЬ",waves:15,hpMul:17,speedMul:2,towerHp:300,reward:2e3,boss:"healer"},{id:21,name:"ЛАБИРИНТ",waves:15,hpMul:19.2,speedMul:2.05,towerHp:305,reward:1450},{id:22,name:"ЗЕРКАЛО",waves:16,hpMul:21.6,speedMul:2.1,towerHp:310,reward:1600},{id:23,name:"ПУСТОТА",waves:16,hpMul:24.3,speedMul:2.15,towerHp:315,reward:1800},{id:24,name:"ВРЕМЯ",waves:17,hpMul:27.3,speedMul:2.2,towerHp:320,reward:2e3},{id:25,name:"ПРИЗРАК",waves:17,hpMul:30.7,speedMul:2.25,towerHp:360,reward:2800,boss:"ghost"},{id:26,name:"ГАЛАКТИКА",waves:18,hpMul:34.5,speedMul:2.3,towerHp:365,reward:2450},{id:27,name:"НЕЙТРОН",waves:18,hpMul:38.8,speedMul:2.35,towerHp:370,reward:2700},{id:28,name:"КВАЗАР",waves:19,hpMul:43.6,speedMul:2.4,towerHp:375,reward:3e3},{id:29,name:"ЧЁРНАЯ ДЫРА",waves:19,hpMul:49,speedMul:2.45,towerHp:380,reward:3300},{id:30,name:"ЗЕМЛЯНОЙ",waves:20,hpMul:55,speedMul:2.5,towerHp:430,reward:4e3,boss:"earth"},{id:31,name:"МИФ",waves:20,hpMul:61.8,speedMul:2.55,towerHp:435,reward:4100},{id:32,name:"ЭПОС",waves:21,hpMul:69.4,speedMul:2.6,towerHp:440,reward:4500},{id:33,name:"ТИТАН",waves:21,hpMul:78,speedMul:2.65,towerHp:445,reward:5e3},{id:34,name:"КОСМОС",waves:22,hpMul:87.6,speedMul:2.7,towerHp:450,reward:5500},{id:35,name:"ВОЗДУШНЫЙ",waves:22,hpMul:98.4,speedMul:2.75,towerHp:500,reward:6500,boss:"air"},{id:36,name:"АПОКАЛИПСИС",waves:23,hpMul:110.5,speedMul:2.8,towerHp:505,reward:6600},{id:37,name:"РУНИЧЕСКИЙ",waves:23,hpMul:124.1,speedMul:2.85,towerHp:510,reward:7200},{id:38,name:"ДРЕВНИЙ",waves:24,hpMul:139.4,speedMul:2.9,towerHp:515,reward:7900},{id:39,name:"БОЖЕСТВЕННЫЙ",waves:24,hpMul:156.6,speedMul:2.95,towerHp:520,reward:8600},{id:40,name:"МОЛНИЯ",waves:25,hpMul:176,speedMul:3,towerHp:580,reward:1e4,boss:"thunder"},{id:41,name:"АБСОЛЮТ",waves:25,hpMul:197.7,speedMul:3.05,towerHp:585,reward:10400},{id:42,name:"СИНГУЛЯРНОСТЬ",waves:26,hpMul:222.1,speedMul:3.1,towerHp:590,reward:11400},{id:43,name:"БЕСКОНЕЧНОСТЬ",waves:26,hpMul:249.5,speedMul:3.15,towerHp:595,reward:12500},{id:44,name:"ХРОНО",waves:27,hpMul:280.3,speedMul:3.2,towerHp:600,reward:13700},{id:45,name:"ЯДОВИТЫЙ",waves:27,hpMul:314.9,speedMul:3.25,towerHp:660,reward:16e3,boss:"poison"},{id:46,name:"ПАНТЕОН",waves:28,hpMul:353.7,speedMul:3.3,towerHp:665,reward:16400},{id:47,name:"ОЛИМП",waves:28,hpMul:397.3,speedMul:3.35,towerHp:670,reward:18e3},{id:48,name:"ТИТАНЫ",waves:29,hpMul:446.3,speedMul:3.4,towerHp:675,reward:19700},{id:49,name:"ПРАЙМ",waves:29,hpMul:501.3,speedMul:3.45,towerHp:680,reward:21500},{id:50,name:"ИМПЕРАТОР",waves:30,hpMul:563,speedMul:3.5,towerHp:800,reward:5e4,boss:"emperor"}];console.log("✅ Часть 8 загружена: уровней =",lr.length);const cr=[{id:"default",name:"НОВИЧОК",color:5025616,price:0,bonusHp:0,bonusCrystals:0,desc:"Обычный герой. +100 HP."},{id:"warrior",name:"ВОИН",color:15022389,price:500,bonusHp:50,bonusCrystals:0,desc:"+50 HP башне."},{id:"mage",name:"МАГ",color:2001125,price:1e3,bonusHp:0,bonusCrystals:50,desc:"+50 кристаллов старт."},{id:"king",name:"КОРОЛЬ",color:16766720,price:3e3,bonusHp:100,bonusCrystals:100,desc:"+100 HP и +100 💎."},{id:"legend",name:"ЛЕГЕНДА",color:9315498,price:1e4,bonusHp:300,bonusCrystals:300,desc:"Всё +300."}];let is=!1,ji=!1,jt="base",_n=null,Qe=null;console.log("✅ Часть 9 загружена: героев =",cr.length,", игровые переменные готовы");const tc=document.createElement("style");tc.textContent=`
  @keyframes floatIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 20px #FFD700, 0 0 40px #FFA000, 4px 4px 8px rgba(0,0,0,0.8); }
    50% { text-shadow: 0 0 30px #FFD700, 0 0 60px #FFA000, 4px 4px 8px rgba(0,0,0,0.8); }
  }
  @keyframes popUp { from { transform: translateY(0); opacity: 1; } to { transform: translateY(-40px); opacity: 0; } }
  @keyframes rewardPop { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.2); } 100% { transform: scale(1); opacity: 1; } }
  @keyframes chestShake { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-8deg); } 75% { transform: rotate(8deg); } }
  @keyframes pulseWave {
    0%, 100% { box-shadow: 0 6px 0 #E65100, 0 0 0 0 rgba(255,215,0,0.7); }
    50% { box-shadow: 0 6px 0 #E65100, 0 0 0 15px rgba(255,215,0,0); }
  }
  @keyframes chestOpen {
    0% { transform: scale(1) rotate(0deg); }
    30% { transform: scale(1.2) rotate(-10deg); }
    60% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1.4) rotate(0deg); opacity: 0; }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .menu-button { transition: all 0.2s ease; cursor: pointer; user-select: none; }
  .menu-button:hover { transform: translateY(-3px) scale(1.05); filter: brightness(1.15); }
  .menu-button:active { transform: translateY(0) scale(0.98); }
  .level-btn { transition: all 0.2s ease; cursor: pointer; }
  .level-btn:hover { transform: scale(1.08); filter: brightness(1.2); }
  .shop-card { transition: all 0.2s ease; }
  .shop-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.7) !important; }
  .hotkey-btn { transition: all 0.15s ease; cursor: pointer; }
  .hotkey-btn:hover { transform: translateY(-2px); filter: brightness(1.2); }
  .hotkey-btn.active { border: 3px solid #FFD700 !important; box-shadow: 0 0 15px #FFD700 !important; }
  .wave-btn { animation: pulseWave 1.5s infinite; }
`;document.head.appendChild(tc);function ct(i,e,t,n={}){const r=document.createElement("button");r.className="menu-button",r.textContent=i;const s=e==="green"?"linear-gradient(180deg, #66BB6A 0%, #388E3C 100%)":e==="red"?"linear-gradient(180deg, #EF5350 0%, #C62828 100%)":e==="gold"?"linear-gradient(180deg, #FFD700 0%, #FFA000 100%)":"linear-gradient(180deg, #78909C 0%, #455A64 100%)",o=e==="green"?"#2E7D32":e==="red"?"#B71C1C":e==="gold"?"#E65100":"#37474F";return r.style.cssText=`
    background: ${s}; color: white; border: none;
    border-bottom: 5px solid ${o}; border-radius: 12px;
    padding: ${n.padding||"14px 50px"};
    font-size: ${n.fontSize||"20px"};
    font-family: 'Arial Black', Arial, sans-serif; font-weight: bold;
    letter-spacing: 1px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    box-shadow: 0 6px 0 ${o}, 0 8px 16px rgba(0,0,0,0.4);
    min-width: ${n.minWidth||"280px"}; margin: 6px 0;
  `,r.addEventListener("click",()=>{Bn(),nt("click"),t()}),r}console.log("✅ Часть 10 загружена: стили + функция кнопки");const Ft=document.createElement("div");Ft.style.cssText=`
  position: fixed; inset: 0;
  background: linear-gradient(180deg, #1a237e 0%, #000051 100%);
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  z-index: 500; font-family: Arial, sans-serif; overflow-y: auto; padding: 20px;
  box-sizing: border-box;
`;const ya=document.createElement("h1");ya.textContent="CUBE DEFENSE";ya.style.cssText=`
  color: #FFD700; font-size: 60px; font-family: 'Arial Black', sans-serif;
  font-weight: bold; letter-spacing: 4px; margin: 0 0 10px 0;
  animation: glow 2s ease-in-out infinite, floatIn 0.6s ease-out; text-align: center;
`;Ft.appendChild(ya);const rs=document.createElement("div");rs.textContent=`💎 ${ce.crystals}`;rs.style.cssText=`
  color: #FFD700; font-size: 24px; font-family: 'Arial Black', sans-serif;
  margin-bottom: 20px; text-shadow: 2px 2px 4px black;
`;Ft.appendChild(rs);const Om=ct("▶ ИГРАТЬ","green",()=>{Ft.style.display="none",kn.style.display="flex",Vm()});Ft.appendChild(Om);const Bm=ct("🛒 МАГАЗИН","gold",()=>{Mn.style.display="flex",Ki()},{padding:"10px 50px",fontSize:"16px",minWidth:"240px"});Ft.appendChild(Bm);const zm=ct("👾 ИНДЕКС","gray",()=>{pi.style.display="flex",Xm()},{padding:"10px 50px",fontSize:"16px",minWidth:"240px"});Ft.appendChild(zm);const km=ct("⚙ НАСТРОЙКИ","gray",()=>{Sn.style.display="flex"},{padding:"10px 50px",fontSize:"16px",minWidth:"240px"});Ft.appendChild(km);const Hm=ct("❓ ОБ ИГРЕ","gray",()=>{mi.style.display="flex"},{padding:"10px 50px",fontSize:"16px",minWidth:"240px"});Ft.appendChild(Hm);const Gm=ct("💎 ДОНАТ","gold",()=>{r0()},{padding:"10px 50px",fontSize:"16px",minWidth:"240px"});Ft.appendChild(Gm);const Ma=document.createElement("p");Ma.textContent=`🏆 Рекорд: ${ce.record} | 🗺 Пройдено: ${ce.completedLevels.length} / 50`;Ma.style.cssText="color: #FFD700; font-size: 14px; margin: 12px 0;";Ft.appendChild(Ma);document.body.appendChild(Ft);console.log("✅ Часть 11 загружена: главное меню");const kn=document.createElement("div");kn.style.cssText=`
  position: fixed; inset: 0; width: 100vw; height: 100vh;
  background: linear-gradient(180deg, #1a237e 0%, #000051 100%);
  display: none; flex-direction: column;
  z-index: 450; font-family: Arial, sans-serif; overflow: hidden;
`;const Sa=document.createElement("div");Sa.style.cssText=`
  width: 100%; padding: 12px 24px; box-sizing: border-box;
  display: flex; justify-content: space-between; align-items: center;
  background: rgba(0,0,0,0.5); border-bottom: 3px solid #FFD700; flex-shrink: 0;
`;Sa.innerHTML=`
  <h1 style="color: #FFD700; font-size: 26px; font-family: 'Arial Black', sans-serif; margin: 0;">🗺 КАРТА УРОВНЕЙ</h1>
  <div id="levelMapCrystals" style="color: #FFD700; font-size: 18px; font-family: 'Arial Black', sans-serif;">💎 ${ce.crystals}</div>
`;kn.appendChild(Sa);const qr=document.createElement("div");qr.style.cssText=`
  flex: 1; width: 100%; overflow-y: auto; padding: 12px; box-sizing: border-box;
  display: grid; grid-template-columns: repeat(10, 1fr); gap: 8px; align-content: start;
`;kn.appendChild(qr);function Vm(){document.getElementById("levelMapCrystals").textContent=`💎 ${ce.crystals}`,qr.innerHTML="";for(const i of lr){const e=i.id<=ce.unlockedLevel,t=ce.completedLevels.includes(i.id),n=va.includes(i.id),r=document.createElement("button");r.className="level-btn";let s;t?s="linear-gradient(180deg, #66BB6A 0%, #2E7D32 100%)":n?s="linear-gradient(180deg, #AB47BC 0%, #6A1B9A 100%)":e?s="linear-gradient(180deg, #42A5F5 0%, #1565C0 100%)":s="linear-gradient(180deg, #546E7A 0%, #263238 100%)";const o=e&&!t?"pointer":"default",a=t?.7:e?1:.5;r.style.cssText=`
      background: ${s}; color: white; border: none;
      border-bottom: 4px solid rgba(0,0,0,0.4); border-radius: 10px;
      font-family: 'Arial Black', Arial, sans-serif;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
      box-shadow: 0 5px 0 rgba(0,0,0,0.4), 0 6px 12px rgba(0,0,0,0.5);
      aspect-ratio: 1 / 1; width: 100%;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 1px;
      opacity: ${a}; cursor: ${o};
    `,r.innerHTML=`
      <div style="font-size: 20px;">${t?"✅":e?n?"👑":i.id:"🔒"}</div>
      <div style="font-size: 7px; line-height: 1.1; text-align: center;">${i.name}</div>
      <div style="font-size: 7px; opacity: 0.85;">${i.waves}🌊</div>
    `,e&&!t&&r.addEventListener("click",()=>{Bn(),nt("click"),kn.style.display="none",uc(i)}),qr.appendChild(r)}}const Ea=document.createElement("div");Ea.style.cssText=`
  width: 100%; padding: 10px; box-sizing: border-box;
  display: flex; justify-content: center;
  background: rgba(0,0,0,0.5); border-top: 3px solid #FFD700; flex-shrink: 0;
`;const Wm=ct("← В МЕНЮ","gray",()=>{kn.style.display="none",Ft.style.display="flex"},{padding:"10px 40px",fontSize:"14px",minWidth:"180px"});Ea.appendChild(Wm);kn.appendChild(Ea);document.body.appendChild(kn);console.log("✅ Часть 12 загружена: карта уровней");const pi=document.createElement("div");pi.style.cssText=`
  position: fixed; inset: 0; width: 100vw; height: 100vh;
  background: linear-gradient(180deg, #1a237e 0%, #000051 100%);
  display: none; flex-direction: column;
  z-index: 600; font-family: Arial, sans-serif; overflow: hidden;
`;const ba=document.createElement("div");ba.style.cssText=`
  padding: 12px 24px; display: flex; justify-content: space-between; align-items: center;
  background: rgba(0,0,0,0.5); border-bottom: 3px solid #FFD700; flex-shrink: 0;
`;ba.innerHTML=`
  <h2 style="color: #FFD700; font-size: 26px; font-family: 'Arial Black', sans-serif; margin: 0;">👾 ИНДЕКС ВРАГОВ</h2>
  <div id="enemyCount" style="color: #B0BEC5; font-size: 14px;"></div>
`;pi.appendChild(ba);const Yr=document.createElement("div");Yr.style.cssText=`
  flex: 1; overflow-y: auto; padding: 16px; box-sizing: border-box;
  display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px; align-content: start;
`;pi.appendChild(Yr);function Xm(){Yr.innerHTML="";const i=ce.discoveredEnemies||["normal"];document.getElementById("enemyCount").textContent=`Открыто: ${i.length} / ${Object.keys(Qt).length}`;for(const[e,t]of Object.entries(Qt)){const n=i.includes(e),r=document.createElement("div"),s="#"+t.color.toString(16).padStart(6,"0");r.style.cssText=`
      background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(0,0,0,0.3));
      border: 2px solid ${n?s:"#455A64"};
      border-radius: 12px; padding: 12px; color: white;
      box-shadow: 0 6px 16px rgba(0,0,0,0.5);
    `,n?r.innerHTML=`
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
          <div style="width: 30px; height: 30px; background: ${s}; border-radius: 6px; box-shadow: inset -3px -3px 0 rgba(0,0,0,0.3);"></div>
          <strong style="font-size: 13px; font-family: 'Arial Black', sans-serif;">${t.name}</strong>
        </div>
        <div style="font-size: 11px; line-height: 1.5;">
          ❤️ HP: <b>${t.hp}</b> | ⚡ Скорость: <b>${t.speed}</b><br>
          ⚔️ Урон: <b>${t.damage}</b> | 💎 Награда: <b>${t.reward}</b>
        </div>
        <div style="font-size: 10px; margin-top: 6px; opacity: 0.85; font-style: italic;">${Nm[e]||""}</div>
      `:r.innerHTML=`
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
          <div style="width: 30px; height: 30px; background: #263238; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 16px;">?</div>
          <strong style="font-size: 13px; font-family: 'Arial Black', sans-serif; color: #546E7A;">???</strong>
        </div>
        <div style="font-size: 11px; color: #546E7A; font-style: italic;">Встреться с врагом в бою.</div>
      `,Yr.appendChild(r)}}const Ta=document.createElement("div");Ta.style.cssText=`
  padding: 10px; display: flex; justify-content: center;
  background: rgba(0,0,0,0.5); border-top: 3px solid #FFD700; flex-shrink: 0;
`;const qm=ct("← НАЗАД","gray",()=>{pi.style.display="none"},{padding:"10px 40px",fontSize:"14px",minWidth:"180px"});Ta.appendChild(qm);pi.appendChild(Ta);document.body.appendChild(pi);console.log("✅ Часть 13 загружена: индекс врагов");const Mn=document.createElement("div");Mn.style.cssText=`
  position: fixed; inset: 0; width: 100vw; height: 100vh;
  background: linear-gradient(180deg, #1a237e 0%, #000051 100%);
  display: none; flex-direction: column;
  z-index: 600; font-family: Arial, sans-serif; overflow: hidden;
`;const wa=document.createElement("div");wa.style.cssText=`
  padding: 12px 24px; display: flex; justify-content: space-between; align-items: center;
  background: rgba(0,0,0,0.5); border-bottom: 3px solid #FFD700; flex-shrink: 0;
`;wa.innerHTML=`
  <h2 style="color: #FFD700; font-size: 26px; font-family: 'Arial Black', sans-serif; margin: 0;">🛒 МАГАЗИН</h2>
  <div id="shopCrystals" style="color: #FFD700; font-size: 18px; font-family: 'Arial Black', sans-serif;">💎 ${ce.crystals}</div>
`;Mn.appendChild(wa);const Aa=document.createElement("div");Aa.textContent="🔒 Турели, баррикады и герои — только из сундуков!";Aa.style.cssText=`
  padding: 8px 16px; background: rgba(255,87,34,0.3);
  color: #FFAB91; font-size: 12px; font-family: 'Arial Black', sans-serif;
  text-align: center; flex-shrink: 0;
`;Mn.appendChild(Aa);const Ca=document.createElement("div");Ca.style.cssText="display: flex; gap: 6px; padding: 10px 16px; background: rgba(0,0,0,0.3); flex-shrink: 0; flex-wrap: wrap;";const nc=[{id:"towers",label:"🏗️ ТУРЕЛИ"},{id:"control",label:"❄️ КОНТРОЛЬ"},{id:"barricades",label:"🚧 БАРРИКАДЫ"},{id:"chests",label:"📦 СУНДУКИ"},{id:"heroes",label:"🦸 ГЕРОИ"},{id:"towerUpg",label:"🏰 БАШНЯ"},{id:"crystals",label:"💎 КРИСТАЛЛЫ"}],na={};for(const i of nc){const e=document.createElement("button");e.textContent=i.label,e.style.cssText=`
    padding: 8px 14px; font-size: 12px; font-family: 'Arial Black', sans-serif;
    background: linear-gradient(180deg, #78909C, #455A64); color: white;
    border: none; border-radius: 10px; cursor: pointer; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  `,e.addEventListener("click",()=>{nn=i.id,Ym(),Ki()}),na[i.id]=e,Ca.appendChild(e)}Mn.appendChild(Ca);function Ym(){for(const i of nc)i.id===nn?na[i.id].style.background="linear-gradient(180deg, #FFD700, #FFA000)":na[i.id].style.background="linear-gradient(180deg, #78909C, #455A64)"}const gt=document.createElement("div");gt.style.cssText=`
  flex: 1; overflow-y: auto; padding: 16px; box-sizing: border-box;
  display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px; align-content: start;
`;Mn.appendChild(gt);let nn="towers";function Ki(){document.getElementById("shopCrystals").textContent=`💎 ${ce.crystals}`,gt.innerHTML="",gt.style.display="grid",gt.style.flexDirection="",gt.style.alignItems="",gt.style.justifyContent="",nn==="towers"?jm():nn==="control"?Km():nn==="barricades"?Zm():nn==="chests"?Jm():nn==="heroes"?t0():nn==="towerUpg"?n0():nn==="crystals"&&ic()}const Ra=document.createElement("div");Ra.style.cssText=`
  padding: 10px; display: flex; justify-content: center;
  background: rgba(0,0,0,0.5); border-top: 3px solid #FFD700; flex-shrink: 0;
`;const $m=ct("← В МЕНЮ","gray",()=>{Mn.style.display="none",Ft.style.display="flex",rs.textContent=`💎 ${ce.crystals}`},{padding:"10px 40px",fontSize:"14px",minWidth:"180px"});Ra.appendChild($m);Mn.appendChild(Ra);document.body.appendChild(Mn);console.log("✅ Часть 14 загружена: магазин — структура и вкладки");function Da(i,e,t){const n=Qr[i.rarity||"common"],r=document.createElement("div");r.className="shop-card",r.style.cssText=`
    background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.5));
    border: 2px solid ${e?n.color:"#455A64"};
    border-radius: 12px; padding: 12px; color: white;
    box-shadow: 0 6px 16px rgba(0,0,0,0.5);
    display: flex; flex-direction: column; gap: 5px;
    opacity: ${e?1:.6};
  `;const s="#"+i.color.toString(16).padStart(6,"0"),o=i.hotkey||"—",a=t==="barricade"?`HP: ${i.hp}`:`Урон: ${i.damage} | Радиус: ${i.range}`;return r.innerHTML=`
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span style="font-size: 9px; color: ${n.color}; font-family: 'Arial Black', sans-serif;">${n.name}</span>
      <span style="font-size: 9px; opacity: 0.7;">${o}</span>
    </div>
    <div style="width: 36px; height: 36px; background: ${s}; border-radius: 8px; box-shadow: inset -3px -3px 0 rgba(0,0,0,0.3); margin: 0 auto; filter: ${e?"none":"grayscale(0.9) brightness(0.5)"};"></div>
    <strong style="text-align: center; font-size: 13px; font-family: 'Arial Black', sans-serif; color: ${e?"white":"#90A4AE"};">${i.name}</strong>
    <div style="font-size: 10px; text-align: center; opacity: 0.85; min-height: 26px;">${i.desc||""}</div>
    <div style="font-size: 10px; text-align: center; opacity: 0.7;">${a}</div>
    ${e?`<button style="padding: 7px; font-size: 11px; font-family: 'Arial Black', sans-serif; background: linear-gradient(180deg, #66BB6A, #2E7D32); color: white; border: none; border-bottom: 3px solid #1B5E20; border-radius: 6px; cursor: default;">✅ ОТКРЫТО</button>`:`<button style="padding: 8px; font-size: 10px; font-family: 'Arial Black', sans-serif; background: linear-gradient(180deg, #546E7A, #263238); color: #90A4AE; border: none; border-bottom: 3px solid #1A2327; border-radius: 6px; cursor: not-allowed;">🔒 ИЗ СУНДУКА</button>`}
  `,r}function jm(){for(const[i,e]of Object.entries(es)){const t=ce.purchasedTowers.includes(i);gt.appendChild(Da(e,t,"tower"))}}console.log("✅ Часть 15 загружена: магазин — турели (серые)");function Km(){for(const[i,e]of Object.entries(ts)){const t=ce.purchasedTowers.includes(i);gt.appendChild(Da(e,t,"tower"))}}console.log("✅ Часть 16 загружена: магазин — контроль (серые)");function Zm(){for(const[i,e]of Object.entries(fi)){const t=ce.purchasedBarricades.includes(i);gt.appendChild(Da(e,t,"barricade"))}}console.log("✅ Часть 17 загружена: магазин — баррикады (серые)");function Jm(){for(const[i,e]of Object.entries(xa)){const t=Qr[e.rarity],n=document.createElement("div");n.className="shop-card rarity-"+e.rarity,n.style.cssText=`
      background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(0,0,0,0.5));
      border: 3px solid ${t.color};
      border-radius: 16px; padding: 16px; color: white;
      box-shadow: 0 6px 20px rgba(0,0,0,0.6);
      display: flex; flex-direction: column; gap: 8px; text-align: center;
    `;const r="#"+e.glowColor.toString(16).padStart(6,"0"),s=ce.crystals>=e.cost;n.innerHTML=`
      <div style="font-size: 50px; filter: drop-shadow(0 0 10px ${r});">${e.icon}</div>
      <span style="font-size: 10px; color: ${t.color}; font-family: 'Arial Black', sans-serif;">${t.name}</span>
      <strong style="font-size: 15px; font-family: 'Arial Black', sans-serif;">${e.name}</strong>
      <div style="font-size: 11px; opacity: 0.85; min-height: 30px;">${e.desc}</div>
      <button class="buy-btn" style="padding: 12px; font-size: 14px; font-family: 'Arial Black', sans-serif; background: ${s?"linear-gradient(180deg, #FFD700, #FFA000)":"linear-gradient(180deg, #546E7A, #263238)"}; color: white; border: none; border-bottom: 4px solid ${s?"#E65100":"#1A2327"}; border-radius: 10px; cursor: ${s?"pointer":"not-allowed"};">💎 ОТКРЫТЬ (${e.cost})</button>
    `,n.querySelector(".buy-btn").addEventListener("click",()=>{if(Bn(),nt("click"),ce.crystals<e.cost){alert("Не хватает кристаллов!");return}ce.crystals-=e.cost;const o=Qm(i);Jt(),e0(e,o),Ki()}),gt.appendChild(n)}}function Qm(i){const e=xa[i],t=Um[i],n=Im(t),r=[];for(const[o,a]of Object.entries(zn))a.rarity===n&&!ce.purchasedTowers.includes(o)&&r.push({type:"tower",key:o,data:a});for(const[o,a]of Object.entries(fi))a.rarity===n&&!ce.purchasedBarricades.includes(o)&&r.push({type:"barricade",key:o,data:a});if(r.length>0){const o=r[Math.floor(Math.random()*r.length)];return o.type==="tower"?ce.purchasedTowers.push(o.key):ce.purchasedBarricades.push(o.key),ce.openedChests=(ce.openedChests||0)+1,{type:o.type,key:o.key,name:o.data.name,rarity:n,color:o.data.color}}const s=Math.floor(e.cost*1.5);return ce.crystals+=s,ce.openedChests=(ce.openedChests||0)+1,{type:"crystals",amount:s,rarity:n,color:16766720,name:`+${s} 💎`}}function e0(i,e){const t=Qr[e.rarity],n=document.createElement("div");n.style.cssText=`
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.9);
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    z-index: 999; font-family: Arial, sans-serif;
    animation: fadeIn 0.3s ease-out;
  `;const r="#"+e.color.toString(16).padStart(6,"0"),s=e.type==="tower"?"🏗️":e.type==="barricade"?"🚧":"💎",o=e.type==="tower"?"ТУРЕЛЬ":e.type==="barricade"?"БАРРИКАДА":"КРИСТАЛЛЫ";n.innerHTML=`
    <div style="text-align: center; animation: chestOpen 0.8s ease-out;">
      <div style="font-size: 100px; margin-bottom: 20px;">${i.icon}</div>
    </div>
    <h2 style="color: ${t.color}; font-size: 36px; font-family: 'Arial Black', sans-serif; margin: 20px 0 10px 0;">${t.name}</h2>
    <p style="color: white; font-size: 18px; margin-bottom: 30px;">${o}</p>
    <div style="width: 100px; height: 100px; background: ${r}; border-radius: 16px; box-shadow: 0 0 30px ${t.color}; display: flex; align-items: center; justify-content: center; font-size: 50px; margin-bottom: 20px;">${s}</div>
    <strong style="color: white; font-size: 24px; font-family: 'Arial Black', sans-serif; margin-bottom: 40px;">${e.name}</strong>
  `;const a=ct("✅ ЗАБРАТЬ","green",()=>{n.remove()},{padding:"14px 60px",fontSize:"18px",minWidth:"240px"});n.appendChild(a),document.body.appendChild(n),nt("chest")}console.log("✅ Часть 18 загружена: магазин — сундуки");function t0(){for(const i of cr){const e=ce.heroes.includes(i.id),t=ce.activeHero===i.id,n=ce.heroLevels[i.id]||1,r=document.createElement("div");r.className="shop-card",r.style.cssText=`
      background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.5));
      border: 2px solid ${t?"#FFD700":e?"#66BB6A":"#455A64"};
      border-radius: 12px; padding: 12px; color: white;
      box-shadow: 0 6px 16px rgba(0,0,0,0.5);
      display: flex; flex-direction: column; gap: 5px;
      opacity: ${e?1:.6};
    `,r.innerHTML=`
      <div style="width: 42px; height: 42px; background: #${i.color.toString(16).padStart(6,"0")}; border-radius: 8px; margin: 0 auto; filter: ${e?"none":"grayscale(0.9) brightness(0.5)"};"></div>
      <strong style="text-align: center; font-size: 13px; font-family: 'Arial Black', sans-serif; color: ${e?"white":"#90A4AE"};">${i.name}</strong>
      <div style="font-size: 10px; text-align: center; opacity: 0.85; min-height: 26px;">${i.desc}</div>
      <div style="font-size: 11px;">Уровень: <b>${n}</b></div>
      ${e?`<button class="select-btn" style="padding: 7px; font-size: 11px; font-family: 'Arial Black', sans-serif; background: ${t?"linear-gradient(180deg, #66BB6A, #2E7D32)":"linear-gradient(180deg, #42A5F5, #1565C0)"}; color: white; border: none; border-bottom: 3px solid rgba(0,0,0,0.4); border-radius: 6px; cursor: pointer;">${t?"✅ АКТИВЕН":"▶ ВЫБРАТЬ"}</button>`:`<button style="padding: 8px; font-size: 10px; font-family: 'Arial Black', sans-serif; background: linear-gradient(180deg, #546E7A, #263238); color: #90A4AE; border: none; border-bottom: 3px solid #1A2327; border-radius: 6px; cursor: not-allowed;">🔒 ИЗ СУНДУКА</button>`}
    `;const s=r.querySelector(".select-btn");s&&s.addEventListener("click",()=>{Bn(),nt("click"),ce.activeHero=i.id,Jt(),Ki()}),gt.appendChild(r)}}function n0(){const i=[{key:"hp",name:"ЗДОРОВЬЕ БАШНИ",desc:"+20 HP за уровень",baseCost:300},{key:"regen",name:"РЕГЕНЕРАЦИЯ",desc:"+1 HP в секунду за ур.",baseCost:500},{key:"armor",name:"БРОНЯ",desc:"-10% урона за уровень",baseCost:800}];for(const e of i){const t=ce.towerUpgrades[e.key]||0,n=e.baseCost*(t+1),r=document.createElement("div");r.className="shop-card",r.style.cssText=`
      background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(0,0,0,0.4));
      border: 2px solid #546E7A; border-radius: 12px;
      padding: 12px; color: white;
      box-shadow: 0 6px 16px rgba(0,0,0,0.5);
      display: flex; flex-direction: column; gap: 6px;
    `,r.innerHTML=`
      <strong style="font-size: 13px; font-family: 'Arial Black', sans-serif; text-align: center;">${e.name}</strong>
      <div style="text-align: center; font-size: 10px; opacity: 0.85;">${e.desc}</div>
      <div style="text-align: center; font-size: 12px;">Уровень: <b style="color: #FFD700;">${t}</b></div>
      <button class="buy-btn" style="padding: 8px; font-size: 11px; font-family: 'Arial Black', sans-serif; background: linear-gradient(180deg, #FFD700, #FFA000); color: white; border: none; border-bottom: 3px solid #E65100; border-radius: 6px; cursor: pointer;">⬆ УЛУЧШИТЬ (${n} 💎)</button>
    `,r.querySelector(".buy-btn").addEventListener("click",()=>{Bn(),nt("click"),ce.crystals>=n?(ce.crystals-=n,ce.towerUpgrades[e.key]=t+1,Jt(),nt("buy"),Ki()):alert("Не хватает кристаллов!")}),gt.appendChild(r)}}function ic(){gt.style.display="flex",gt.style.flexDirection="column",gt.style.alignItems="center",gt.style.justifyContent="center";const i=Date.now(),e=ce.lastCrystalAd||0,n=60*60*1e3-(i-e),r=n<=0,s=document.createElement("div");s.className="shop-card",s.style.cssText=`
    background: linear-gradient(180deg, rgba(255,215,0,0.25), rgba(0,0,0,0.5));
    border: 3px solid #FFD700; border-radius: 20px;
    padding: 30px 40px; color: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.7);
    display: flex; flex-direction: column; gap: 14px;
    text-align: center; max-width: 400px; width: 90%;
  `;let o="";if(r)o='<b style="color: #00E676;">✅ Доступно!</b>';else{const a=Math.floor(n/36e5),l=Math.floor(n%36e5/6e4),c=Math.floor(n%6e4/1e3);o=`⏳ Доступно через: <b style="color: #FFAB91;">${a}ч ${l}м ${c}с</b>`}s.innerHTML=`
    <div style="font-size: 60px;">📺</div>
    <strong style="font-size: 22px; font-family: 'Arial Black', sans-serif; color: #FFD700;">+100 💎</strong>
    <div style="font-size: 14px; opacity: 0.85;">Посмотри рекламу и получи кристаллы</div>
    <div style="font-size: 14px; margin-top: 8px;">${o}</div>
    <button id="adCrystalBtn" style="padding: 14px; font-size: 16px; font-family: 'Arial Black', sans-serif; background: ${r?"linear-gradient(180deg, #FFD700, #FFA000)":"linear-gradient(180deg, #546E7A, #263238)"}; color: white; border: none; border-bottom: 4px solid ${r?"#E65100":"#1A2327"}; border-radius: 10px; cursor: ${r?"pointer":"not-allowed"}; margin-top: 10px;" ${r?"":"disabled"}>
      ${r?"📺 СМОТРЕТЬ":"⏳ ЖДИТЕ"}
    </button>
  `,s.querySelector("#adCrystalBtn").addEventListener("click",()=>{r&&(Bn(),nt("click"),Pa(()=>{ce.crystals+=100,ce.lastCrystalAd=Date.now(),Jt(),alert("✅ +100 💎"),Ki()},"shop"))}),gt.appendChild(s),clearInterval(window._crystalTimer),r||(window._crystalTimer=setInterval(()=>{nn==="crystals"?ic():clearInterval(window._crystalTimer)},1e3))}console.log("✅ Часть 19 загружена: герои, башня, кристаллы");let Xi=null,La=!1;async function i0(){var i;try{if(typeof YaGames>"u"){console.log("⚠️ SDK не загружен, работаем локально");return}Xi=await YaGames.init(),La=!0,console.log("✅ Yandex SDK готов");try{(i=Xi.features.LoadingAPI)==null||i.ready()}catch{}}catch(e){console.error("SDK init error:",e)}}i0();function Pa(i,e){if(console.log("📺 Реклама:",e),La&&Xi)try{Xi.adv.showRewardedVideo({callbacks:{onOpen:()=>console.log("Реклама открыта"),onRewarded:()=>i(),onClose:()=>console.log("Реклама закрыта"),onError:t=>{console.error(t),i()}}})}catch(t){console.error(t),i()}else setTimeout(()=>i(),500)}function r0(){const i=[{id:"pack1",name:"💰 МАЛЫЙ НАБОР",desc:"+1000 💎",price:"49 ₽",crystals:1e3},{id:"pack2",name:"💎 СРЕДНИЙ НАБОР",desc:"+3000 💎",price:"129 ₽",crystals:3e3},{id:"pack3",name:"👑 БОЛЬШОЙ НАБОР",desc:"+10000 💎",price:"349 ₽",crystals:1e4},{id:"pack4",name:"🌟 МЕГА НАБОР",desc:"+50000 💎",price:"990 ₽",crystals:5e4}],e=document.createElement("div");e.style.cssText=`
    position: fixed; inset: 0;
    background: linear-gradient(180deg, #1a237e 0%, #000051 100%);
    display: flex; flex-direction: column;
    z-index: 700; font-family: Arial, sans-serif;
    overflow-y: auto; padding: 20px; box-sizing: border-box;
  `;const t=document.createElement("h2");t.textContent="💎 ДОНАТ",t.style.cssText="color: #FFD700; font-size: 40px; font-family: 'Arial Black', sans-serif; margin: 0 0 20px 0; text-align: center;",e.appendChild(t);const n=document.createElement("p");n.textContent="⚠️ Покупки работают только на Яндекс Играх",n.style.cssText="color: #FFAB91; font-size: 13px; text-align: center; margin-bottom: 20px;",e.appendChild(n);const r=document.createElement("div");r.style.cssText=`
    display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px; max-width: 900px; margin: 0 auto 20px auto; width: 100%;
  `;for(const o of i){const a=document.createElement("div");a.style.cssText=`
      background: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.5));
      border: 3px solid #FFD700; border-radius: 16px;
      padding: 18px; color: white; text-align: center;
      box-shadow: 0 8px 20px rgba(0,0,0,0.6);
    `,a.innerHTML=`
      <strong style="font-size: 16px; font-family: 'Arial Black', sans-serif; color: #FFD700;">${o.name}</strong>
      <div style="font-size: 22px; margin: 10px 0;">💎</div>
      <div style="font-size: 14px; margin-bottom: 10px;">${o.desc}</div>
      <button class="buy-donate" style="padding: 12px 30px; font-size: 14px; font-family: 'Arial Black', sans-serif; background: linear-gradient(180deg, #FFD700, #FFA000); color: white; border: none; border-bottom: 4px solid #E65100; border-radius: 10px; cursor: pointer;">КУПИТЬ ${o.price}</button>
    `,a.querySelector(".buy-donate").addEventListener("click",()=>{if(Bn(),nt("click"),!La||!Xi){alert("Донат работает только на Яндекс Играх!");return}try{Xi.getPayments({signed:!1}).then(l=>{l.purchase({id:o.id}).then(()=>{ce.crystals+=o.crystals,Jt(),alert(`✅ Куплено! +${o.crystals} 💎`),e.remove()}).catch(c=>{console.error("Ошибка покупки:",c),alert("Покупка отменена")})})}catch(l){alert("Ошибка: "+l.message)}}),r.appendChild(a)}e.appendChild(r);const s=ct("← ЗАКРЫТЬ","gray",()=>e.remove(),{padding:"12px 40px",fontSize:"16px",minWidth:"200px"});s.style.margin="0 auto",e.appendChild(s),document.body.appendChild(e)}console.log("✅ Часть 20 загружена: Yandex SDK + донат");const Sn=document.createElement("div");Sn.style.cssText=`
  position: fixed; inset: 0;
  background: linear-gradient(180deg, #1a237e 0%, #000051 100%);
  display: none; flex-direction: column;
  justify-content: center; align-items: center;
  z-index: 600; font-family: Arial, sans-serif;
`;const Fa=document.createElement("h2");Fa.textContent="⚙ НАСТРОЙКИ";Fa.style.cssText="color: #FFD700; font-size: 40px; font-family: 'Arial Black', sans-serif; margin-bottom: 30px;";Sn.appendChild(Fa);const ss=document.createElement("p");ss.textContent="🔊 Громкость: 100%";ss.style.cssText="color: white; font-size: 16px; margin-bottom: 10px;";Sn.appendChild(ss);const On=document.createElement("input");On.type="range";On.min=0;On.max=100;On.value=100;On.style.cssText="width: 260px; margin-bottom: 30px; cursor: pointer;";On.addEventListener("input",()=>{ss.textContent=`🔊 Громкость: ${On.value}%`});Sn.appendChild(On);const s0=ct("🗑 СБРОСИТЬ ПРОГРЕСС","red",()=>{confirm("Точно сбросить весь прогресс?")&&(localStorage.removeItem(_a),location.reload())},{padding:"12px 40px",fontSize:"14px",minWidth:"260px"});Sn.appendChild(s0);const a0=ct("← НАЗАД","gray",()=>{Sn.style.display="none"},{padding:"10px 40px",fontSize:"14px",minWidth:"180px"});Sn.appendChild(a0);document.body.appendChild(Sn);const mi=document.createElement("div");mi.style.cssText=`
  position: fixed; inset: 0;
  background: linear-gradient(180deg, #1a237e 0%, #000051 100%);
  display: none; flex-direction: column;
  justify-content: center; align-items: center;
  z-index: 600; font-family: Arial, sans-serif; padding: 30px; box-sizing: border-box;
`;const Ua=document.createElement("h2");Ua.textContent="❓ ОБ ИГРЕ";Ua.style.cssText="color: #FFD700; font-size: 40px; font-family: 'Arial Black', sans-serif; margin-bottom: 20px;";mi.appendChild(Ua);const Ia=document.createElement("p");Ia.innerHTML=`
  <strong>CUBE DEFENSE</strong> — воксельная Tower Defense.<br><br>
  🗺 50 уровней. 👑 10 боссов.<br>
  👾 34 типа врагов. 🏗️ 35 турелей. 🚧 30 баррикад.<br>
  📦 Сундуки с редкостями. 🛒 Магазин с 7 разделами.<br>
  💎 Донат. 📺 Реклама.<br><br>
  <em>Сделано на Three.js для Яндекс Игр.</em>
`;Ia.style.cssText="color: #ECEFF1; font-size: 14px; max-width: 600px; text-align: center; line-height: 1.6; margin-bottom: 30px;";mi.appendChild(Ia);const o0=ct("← НАЗАД","gray",()=>{mi.style.display="none"},{padding:"10px 40px",fontSize:"14px",minWidth:"180px"});mi.appendChild(o0);document.body.appendChild(mi);console.log("✅ Часть 21 загружена: настройки, об игре");function gi(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e;const r=n.getContext("2d");t(r,i,e);const s=new wm(n);return s.magFilter=xt,s.minFilter=xt,s}function l0(){return gi(64,64,(i,e,t)=>{i.fillStyle="#4CAF50",i.fillRect(0,0,e,t);for(let n=0;n<200;n++)i.fillStyle=Math.random()>.5?"#388E3C":"#66BB6A",i.fillRect(Math.random()*e,Math.random()*t,2,4)})}function c0(){return gi(64,64,(i,e,t)=>{i.fillStyle="#8B4513",i.fillRect(0,0,e,t);for(let n=0;n<300;n++)i.fillStyle=Math.random()>.5?"#6D3A0F":"#A0522D",i.fillRect(Math.random()*e,Math.random()*t,2,2)})}function d0(){return gi(64,64,(i,e,t)=>{i.fillStyle="#9E9E9E",i.fillRect(0,0,e,t);for(let n=0;n<150;n++)i.fillStyle=Math.random()>.5?"#757575":"#BDBDBD",i.fillRect(Math.random()*e,Math.random()*t,3,3)})}function u0(){return gi(64,64,(i,e,t)=>{i.fillStyle="#FFD700",i.fillRect(0,0,e,t);for(let n=0;n<100;n++)i.fillStyle=Math.random()>.5?"#FFA000":"#FFF59D",i.fillRect(Math.random()*e,Math.random()*t,2,2)})}function rc(i,e,t){return gi(64,64,(n,r,s)=>{n.fillStyle=i,n.fillRect(0,0,r,s);for(let o=0;o<400;o++)n.fillStyle=Math.random()>.5?e:i,n.globalAlpha=.4,n.fillRect(Math.random()*r,Math.random()*s,3,3);if(n.globalAlpha=1,t){n.fillStyle="#546E7A";for(let o=8;o<s;o+=12)n.fillRect(0,o,r,4)}})}function h0(i){const e=i.rarity||"common";let t="#78909C",n="#455A64";return e==="rare"?(t="#607D8B",n="#37474F"):e==="epic"?(t="#5E35B1",n="#311B92"):e==="legendary"?(t="#F9A825",n="#F57F17"):e==="mythic"&&(t="#C62828",n="#8E0000"),gi(64,64,(r,s,o)=>{if(r.fillStyle=t,r.fillRect(0,0,s,o),e==="common"){for(let a=0;a<150;a++)r.fillStyle=Math.random()>.5?n:t,r.globalAlpha=.5,r.fillRect(Math.random()*s,Math.random()*o,2,2);r.globalAlpha=1}else if(e==="rare"){for(let a=0;a<o;a+=12)r.fillStyle=n,r.fillRect(0,a,s,4);for(let a=0;a<30;a++)r.fillStyle="#B0BEC5",r.fillRect(Math.random()*s,Math.random()*o,3,3)}else if(e==="epic")for(let a=0;a<50;a++)r.fillStyle=n,r.fillRect(Math.random()*s,Math.random()*o,4,4),r.fillStyle="#7E57C2",r.fillRect(Math.random()*s,Math.random()*o,2,2);else if(e==="legendary"){r.fillStyle=n;for(let a=0;a<o;a+=8)r.fillRect(0,a,s,3);for(let a=0;a<60;a++)r.fillStyle="#FFD700",r.fillRect(Math.random()*s,Math.random()*o,3,3)}else if(e==="mythic"){for(let a=0;a<80;a++)r.fillStyle=Math.random()>.5?"#E53935":"#FF7043",r.fillRect(Math.random()*s,Math.random()*o,4,4);r.strokeStyle="#FFD700",r.lineWidth=1;for(let a=0;a<8;a++)r.beginPath(),r.moveTo(Math.random()*s,0),r.lineTo(Math.random()*s,o),r.stroke()}})}console.log("✅ Часть 22 загружена: текстуры (арена, мобы, турели)");function f0(i){const e=i.rarity||"common",t="#"+i.color.toString(16).padStart(6,"0"),n="#"+(i.accentColor||i.color).toString(16).padStart(6,"0");return gi(64,64,(r,s,o)=>{r.fillStyle=t,r.fillRect(0,0,s,o);const a=e==="common"?100:e==="rare"?150:e==="epic"?200:e==="legendary"?260:320;for(let l=0;l<a;l++){r.fillStyle=Math.random()>.5?n:t,r.globalAlpha=.6;const c=Math.random()>.7?3:2;r.fillRect(Math.random()*s,Math.random()*o,c,c)}if(r.globalAlpha=1,e!=="common"){r.strokeStyle=n,r.lineWidth=1;const l=e==="rare"?3:e==="epic"?5:7;for(let c=0;c<l;c++)r.beginPath(),r.moveTo(0,Math.random()*o),r.lineTo(s,Math.random()*o),r.stroke()}if(e==="legendary")for(let l=0;l<15;l++)r.fillStyle="#FFD700",r.fillRect(Math.random()*s,Math.random()*o,2,2);if(e==="mythic")for(let l=0;l<25;l++)r.fillStyle=Math.random()>.5?"#FFD700":"#FF5252",r.fillRect(Math.random()*s,Math.random()*o,3,3);if(i.id==="spikes"){r.fillStyle="#B71C1C";for(let l=0;l<20;l++)r.fillRect(Math.random()*s,Math.random()*o,4,1)}else if(i.id==="ice"||i.id==="frost_b"){r.strokeStyle="#E1F5FE",r.lineWidth=1;for(let l=0;l<6;l++)r.beginPath(),r.moveTo(Math.random()*s,0),r.lineTo(Math.random()*s,o),r.stroke()}else if(i.id==="magma_b"){r.fillStyle="#FFEB3B";for(let l=0;l<15;l++)r.fillRect(Math.random()*s,Math.random()*o,2,2)}else if(i.id==="crystal_b"||i.id==="diamond"){r.strokeStyle="#FFFFFF",r.lineWidth=1;for(let l=0;l<4;l++)r.beginPath(),r.moveTo(Math.random()*s,Math.random()*o),r.lineTo(Math.random()*s,Math.random()*o),r.stroke()}})}console.log("✅ Часть 23 загружена: текстуры баррикад (с вкраплениями)");const $e=new Tm;$e.background=new Ge(8900331);$e.fog=new ga(8900331,50,100);const ci=new kt(50,window.innerWidth/window.innerHeight,.1,1e3);ci.position.set(0,16,14);ci.lookAt(0,0,0);const en=new Ql({antialias:!0});en.setSize(window.innerWidth,window.innerHeight);en.shadowMap.enabled=!0;en.shadowMap.type=oa;en.domElement.style.position="fixed";en.domElement.style.top="0";en.domElement.style.left="0";en.domElement.style.zIndex="1";document.body.appendChild(en.domElement);$e.add(new Dm(16777215,.7));const En=new Rm(16774625,.9);En.position.set(20,30,20);En.castShadow=!0;En.shadow.mapSize.width=2048;En.shadow.mapSize.height=2048;En.shadow.camera.left=-25;En.shadow.camera.right=25;En.shadow.camera.top=25;En.shadow.camera.bottom=-25;$e.add(En);const p0=20,an=Math.floor(p0/2),m0=new ot({map:l0()}),g0=new ot({map:c0()}),sc=new ot({map:d0()}),_0=new ot({map:u0()}),x0=new Ve(1,.2,1);function v0(i,e,t){const n=new ke(x0,t);n.position.set(i,0,e),n.receiveShadow=!0,$e.add(n)}for(let i=-an;i<an;i++)for(let e=-an;e<an;e++){const t=i===0||e===0;v0(i+.5,e+.5,t?g0:m0)}const y0=new Ve(3,.5,3),as=new ke(y0,sc);as.position.set(0,.25,0);as.castShadow=!0;as.receiveShadow=!0;$e.add(as);const ac=new Ve(1.8,1.8,1.8),Na=new ke(ac,sc);Na.position.set(0,1.4,0);Na.castShadow=!0;$e.add(Na);const dr=new ke(ac,_0);dr.position.set(0,3.2,0);dr.castShadow=!0;$e.add(dr);let qt=100,ri=100,yn=100;const ia=10,ra=20;let Kt=0,$r=0,Jn=0,di=!1,si=!1,qi=!1,Oa=1,Ba=1;console.log("✅ Часть 24 загружена: сцена, арена, башня");const Zi=document.createElement("div");Zi.style.cssText=`
  position: fixed; top: 10px; left: 10px;
  color: white; font-family: Arial, sans-serif;
  font-size: 14px; text-shadow: 2px 2px 4px black;
  z-index: 100; pointer-events: none; display: none;
`;document.body.appendChild(Zi);function oc(){var i;Zi.innerHTML=`
    🗺 ${Qe?Qe.name:""} (ур. ${Qe?Qe.id:"-"})<br>
    ❤️ HP: ${Math.max(0,Math.floor(qt))} / ${ri}<br>
    💎 Кристаллы: ${yn}<br>
    🌊 Волна: ${Kt} / ${Qe?Qe.waves:0}<br>
    👾 Осталось: ${di?$r-Jn+lt.length:0}<br>
    🏗️ ${jt&&((i=zn[jt])==null?void 0:i.name)||"—"} (${xn.length}/${ia}) | 🚧 ${Zt.length}/${ra}
  `}const ui=document.createElement("div");ui.style.cssText=`
  position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
  width: 60%; max-width: 700px;
  background: rgba(0,0,0,0.75);
  border: 3px solid #8E24AA; border-radius: 12px;
  padding: 8px 14px; z-index: 200; display: none;
  box-shadow: 0 0 20px #8E24AA;
`;ui.innerHTML=`
  <div id="bossName" style="color: #FFD700; font-family: 'Arial Black', sans-serif; font-size: 16px; text-align: center; margin-bottom: 4px;">👑 БОСС</div>
  <div style="background: #333; border-radius: 6px; overflow: hidden; height: 18px;">
    <div id="bossHpFill" style="background: linear-gradient(90deg, #E53935, #8E24AA); height: 100%; width: 100%; transition: width 0.2s;"></div>
  </div>
  <div id="bossHpText" style="color: white; font-family: Arial, sans-serif; font-size: 12px; text-align: center; margin-top: 3px;">0 / 0</div>
`;document.body.appendChild(ui);function M0(){const i=lt.find(e=>e.userData.isBoss);if(i){ui.style.display="block",document.getElementById("bossName").textContent="👑 "+i.userData.bossName;const e=Math.max(0,i.userData.hp/i.userData.maxHp)*100;document.getElementById("bossHpFill").style.width=e+"%",document.getElementById("bossHpText").textContent=`${Math.max(0,Math.ceil(i.userData.hp))} / ${Math.ceil(i.userData.maxHp)}`}else ui.style.display="none"}const sn=document.createElement("div");sn.style.cssText=`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.85); color: white;
  font-family: Arial, sans-serif;
  display: none; flex-direction: column;
  justify-content: center; align-items: center; z-index: 300;
  text-align: center; padding: 30px; box-sizing: border-box;
`;document.body.appendChild(sn);function sa(i,e,t="#FFFF00"){const n=document.createElement("div");n.textContent=`+${e}`,n.style.cssText=`
    position: fixed; color: ${t};
    font-family: 'Arial Black', sans-serif; font-size: 16px;
    font-weight: bold; text-shadow: 2px 2px 4px black;
    pointer-events: none; z-index: 90;
    animation: popUp 1s ease-out forwards;
  `;const r=i.clone();r.project(ci),n.style.left=`${(r.x*.5+.5)*window.innerWidth}px`,n.style.top=`${(-r.y*.5+.5)*window.innerHeight}px`,document.body.appendChild(n),setTimeout(()=>n.remove(),1e3)}console.log("✅ Часть 25 загружена: UI, HP-бар босса");const xn=[],S0=new Ve(.7,.7,.7),E0=new Ve(.5,.5,.5),ai=[],_l=new Ve(.15,.15,.15);function b0(i,e,t){const n=zn[t];if(!n)return!1;if(!ce.purchasedTowers.includes(t))return alert("Турель не куплена! Открой сундук."),!1;if(xn.length>=ia)return alert(`Максимум ${ia} турелей!`),!1;if(yn<n.cost)return alert("Не хватает кристаллов!"),!1;if(xn.some(S=>Math.abs(S.position.x-i)<.5&&Math.abs(S.position.z-e)<.5))return!1;const s=new Qn,o=h0(n),a=new ot({map:o}),l=new ot({color:n.color}),c=new ke(S0,a);c.position.y=.45,c.castShadow=!0,s.add(c);const d=new ke(E0,l);d.position.y=1,d.castShadow=!0,s.add(d);let h=.12,p=.55;n.category==="control"?(h=.22,p=.6):n.damage>=12&&(h=.18,p=.7);const m=new Ve(h,h,p),x=new ot({color:2503224}),_=new ke(m,x);_.position.set(0,1,.35),_.castShadow=!0,d.add(_);const f=new Ve(h*.8,h*.8,.1),u=new ot({color:n.color}),b=new ke(f,u);if(b.position.set(0,0,p/2+.05),_.add(b),n.category==="control"){const S=new Ve(.22,.22,.22),T=new ot({color:n.color,emissive:n.color,emissiveIntensity:.6}),L=new ke(S,T);L.position.set(0,0,p/2+.12),_.add(L)}return s.position.set(i,0,e),s.userData={type:t,range:n.range,cooldown:0,fireRate:n.fireRate,damage:n.damage,head:d,bulletSpeed:.3,slow:n.slow||0,slowDuration:n.slowDuration||0,stun:n.stun||0,isAoe:n.isAoe||!1,pierce:n.pierce||0,chain:n.chain||0,dotDamage:n.dotDamage||0,dotDuration:n.dotDuration||0,burn:n.burn||0,burnDuration:n.burnDuration||0,lifesteal:n.lifesteal||0,splash:n.splash||0,multiShot:n.multiShot||0,disabled:0,nearestTarget:null},$e.add(s),xn.push(s),yn-=n.cost,nt("build"),!0}function T0(i){const e=i.userData;if(!e.nearestTarget)return;const n=zn[e.type].color;if(e.isAoe&&e.stun>0){for(const o of lt)if(!o.userData.isFlyer&&i.position.distanceTo(o.position)<e.range){let a=e.stun;o.userData.isBoss&&(a*=.5),o.userData.stunUntil=(o.userData.stunUntil||0)+a}zi(i.position.clone().setY(1),n,15),nt("shoot");return}if(e.multiShot>0){const o=e.nearestTarget;for(let a=0;a<e.multiShot;a++){const l=new ke(_l,new ot({color:n}));l.position.copy(i.position),l.position.y=1;const c=o.position.clone().sub(l.position).normalize(),d=(a-Math.floor(e.multiShot/2))*.15,h=new P(c.x*Math.cos(d)-c.z*Math.sin(d),0,c.x*Math.sin(d)+c.z*Math.cos(d));l.userData={direction:h,speed:e.bulletSpeed,damage:e.damage,hitEnemies:new Set,stun:e.stun,slow:e.slow,slowDuration:e.slowDuration,pierce:e.pierce,dotDamage:e.dotDamage,dotDuration:e.dotDuration,burn:e.burn,burnDuration:e.burnDuration,lifesteal:e.lifesteal,splash:e.splash},$e.add(l),ai.push(l)}nt("shoot");return}const r=new ke(_l,new ot({color:n}));r.position.copy(i.position),r.position.y=1;const s=e.nearestTarget.position.clone().sub(r.position).normalize();r.userData={direction:s,speed:e.bulletSpeed,damage:e.damage,hitEnemies:new Set,slow:e.slow,slowDuration:e.slowDuration,stun:e.stun,pierce:e.pierce,chain:e.chain,dotDamage:e.dotDamage,dotDuration:e.dotDuration,burn:e.burn,burnDuration:e.burnDuration,lifesteal:e.lifesteal,splash:e.splash},$e.add(r),ai.push(r),nt("shoot")}function w0(i){for(const e of xn){const t=e.userData;if(t.disabled>0){t.disabled-=i;continue}t.cooldown-=i;let n=null,r=t.range;for(const s of lt){if(s.userData.isFlyer)continue;const o=e.position.distanceTo(s.position);o<r&&(r=o,n=s)}if(t.nearestTarget=n,n){const s=n.position.x-e.position.x,o=n.position.z-e.position.z;t.head.rotation.y=Math.atan2(s,o)}(n||t.isAoe)&&t.cooldown<=0&&(t.cooldown=t.fireRate,T0(e),t.isAoe||zi(e.position.clone().setY(1),zn[t.type].color,3))}}console.log("✅ Часть 26 загружена: турели с дулами");const Zt=[],A0=new Ve(.9,.9,.9);function C0(i,e,t){const n=fi[t];if(!n)return!1;if(!ce.purchasedBarricades.includes(t))return alert("Баррикада не куплена! Открой сундук."),!1;if(Zt.length>=ra)return alert(`Максимум ${ra} баррикад!`),!1;if(yn<n.cost)return alert("Не хватает кристаллов!"),!1;const r=Zt.some(c=>Math.abs(c.position.x-i)<.5&&Math.abs(c.position.z-e)<.5),s=xn.some(c=>Math.abs(c.position.x-i)<.5&&Math.abs(c.position.z-e)<.5);if(r||s)return!1;const o=f0(n),a=new ot({map:o}),l=new ke(A0,a);return l.position.set(i,.45,e),l.castShadow=!0,l.userData={type:t,hp:n.hp,maxHp:n.hp,damage:n.damage||0,regen:n.regen||0,slow:n.slow||0,poison:n.poison||0,shock:n.shock||0,burnAura:n.burnAura||0,reflect:n.reflect||0,bonusCrystals:n.bonusCrystals||0},$e.add(l),Zt.push(l),yn-=n.cost,nt("build"),!0}function R0(i){for(const e of Zt)e.userData.regen>0&&(e.userData.hp=Math.min(e.userData.maxHp,e.userData.hp+e.userData.regen*i))}const Bi=[],D0=new Ve(.15,.15,.15);function zi(i,e,t=8){for(let n=0;n<t;n++){const r=new ot({color:e}),s=new ke(D0,r);s.position.copy(i),s.userData={velocity:new P((Math.random()-.5)*.18,Math.random()*.22+.05,(Math.random()-.5)*.18),life:1,gravity:.012},$e.add(s),Bi.push(s)}}function L0(i){for(let e=Bi.length-1;e>=0;e--){const t=Bi[e];t.userData.velocity.y-=t.userData.gravity,t.position.add(t.userData.velocity),t.rotation.x+=.2,t.rotation.y+=.2,t.userData.life-=i,t.userData.life<=0?($e.remove(t),Bi.splice(e,1)):t.scale.setScalar(t.userData.life)}}console.log("✅ Часть 27 загружена: баррикады + частицы");const lt=[],xl={},lc={};for(const[i,e]of Object.entries(Qt)){const t="#"+e.color.toString(16).padStart(6,"0"),n="#"+e.darkColor.toString(16).padStart(6,"0");xl[i]=rc(t,n,e.hasArmor),lc[i]=new ot({map:xl[i]})}const cc=new ot({color:0}),dc=new ot({color:16766720});function P0(i){const e=Qt[i];if(!e)return null;const t=new Qn,n=lc[i],r=e.miniBoss?1.5:1,s=new ke(new Ve(.5,.5,.5),n);s.position.y=1,s.castShadow=!0,t.add(s);for(const c of[-.12,.12]){const d=new ke(new Ve(.1,.1,.1),cc);d.position.set(c,1.05,.26),t.add(d)}const o=new ke(new Ve(.5,.6,.3),n);o.position.y=.45,o.castShadow=!0,t.add(o);const a=[];for(const c of[-.35,.35]){const d=new ke(new Ve(.15,.55,.15),n);d.position.set(c,.5,0),d.castShadow=!0,a.push(d),t.add(d)}const l=[];for(const c of[-.13,.13]){const d=new ke(new Ve(.18,.4,.18),n);d.position.set(c,-.1,0),d.castShadow=!0,l.push(d),t.add(d)}if(e.miniBoss)for(let c=0;c<3;c++){const d=new ke(new Ve(.1,.18,.1),dc);d.position.set(-.15+c*.15,1.35,0),t.add(d)}if(e.isFlyer){const c=new ke(new Ve(.7,.05,.1),n);c.position.y=1.35,t.add(c),t.userData.rotor=c}if(e.hasShield){const c=new ke(new Ve(.5,.6,.1),new ot({color:4545124}));c.position.set(-.4,.5,.1),t.add(c)}if(e.isHealer){const c=new ke(new Ve(.15,.3,.05),new ot({color:16777215}));c.position.set(0,.5,.17),t.add(c);const d=new ke(new Ve(.3,.15,.05),new ot({color:16777215}));d.position.set(0,.5,.17),t.add(d)}return t.userData.arms=a,t.userData.legs=l,t.userData.animPhase=Math.random()*Math.PI*2,t.scale.setScalar(r),t}function F0(i){const e=ns[i];if(!e)return null;const t=new Qn,n="#"+e.color.toString(16).padStart(6,"0"),r="#"+e.darkColor.toString(16).padStart(6,"0"),s=new ot({map:rc(n,r,!0)}),o=new ke(new Ve(.8,.8,.8),s);o.position.y=1.6,o.castShadow=!0,t.add(o);for(const d of[-.2,.2]){const h=new ke(new Ve(.15,.15,.15),cc);h.position.set(d,1.7,.42),t.add(h)}const a=new ke(new Ve(.8,1,.5),s);a.position.y=.7,a.castShadow=!0,t.add(a);const l=[];for(const d of[-.6,.6]){const h=new ke(new Ve(.25,.9,.25),s);h.position.set(d,.8,0),h.castShadow=!0,l.push(h),t.add(h)}const c=[];for(const d of[-.2,.2]){const h=new ke(new Ve(.3,.6,.3),s);h.position.set(d,-.1,0),h.castShadow=!0,c.push(h),t.add(h)}for(let d=0;d<5;d++){const h=new ke(new Ve(.15,.3,.15),dc);h.position.set(-.3+d*.15,2.15,0),t.add(h)}return t.userData.arms=l,t.userData.legs=c,t.userData.animPhase=Math.random()*Math.PI*2,t}function U0(i){if(!Qt[i])return;const e=P0(i);if(!e)return;const t=Qt[i],n=an,r=[{x:0,z:-n},{x:0,z:n},{x:-n,z:0},{x:n,z:0}],s=r[Math.floor(Math.random()*r.length)];if(t.isDigger){const o=Math.random()>.5?1:-1,a=3+Math.random()*2;e.position.set(o*(Math.random()>.5?a:0),.5,o*(Math.random()>.5?0:a))}else e.position.set(s.x,t.isFlyer?3:.5,s.z);e.userData.type=i,e.userData.hp=t.hp*Oa,e.userData.maxHp=e.userData.hp,e.userData.speed=t.speed*Ba,e.userData.originalSpeed=e.userData.speed,e.userData.damage=t.damage,e.userData.reward=t.reward,e.userData.target=new P(0,.5,0),e.userData.radius=t.miniBoss?.8:.6,e.userData.isFlyer=t.isFlyer||!1,e.userData.isHealer=t.isHealer||!1,e.userData.hasShield=t.hasShield||!1,e.userData.isPhantom=t.isPhantom||!1,e.userData.isBomber=t.isBomber||!1,e.userData.stunUntil=0,e.userData.slowUntil=0,e.lookAt(0,.5,0),ce.discoveredEnemies.includes(i)||(ce.discoveredEnemies.push(i),Jt()),$e.add(e),lt.push(e)}function I0(i){const e=ns[i];if(!e)return;const t=F0(i);if(!t)return;const n=an,r=[{x:0,z:-n},{x:0,z:n},{x:-n,z:0},{x:n,z:0}],s=r[Math.floor(Math.random()*r.length)],o=e.id==="air";t.position.set(s.x,o?3:.5,s.z),t.userData.type="boss",t.userData.bossKey=i,t.userData.bossName=e.name,t.userData.hp=e.hp*Oa,t.userData.maxHp=t.userData.hp,t.userData.speed=e.speed*Ba,t.userData.originalSpeed=t.userData.speed,t.userData.damage=e.damage,t.userData.reward=e.reward,t.userData.target=new P(0,.5,0),t.userData.radius=1.2,t.userData.isBoss=!0,t.userData.isFlyer=o,t.userData.hasShield=e.id==="earth"||e.id==="emperor",t.userData.isPhantom=e.id==="ghost"||e.id==="emperor",t.userData.isHealer=e.id==="healer"||e.id==="emperor",t.userData.stunUntil=0,t.userData.slowUntil=0,t.lookAt(0,.5,0),ce.discoveredEnemies.includes("boss_"+i)||(ce.discoveredEnemies.push("boss_"+i),Jt()),nt("bossSpawn"),$e.add(t),lt.push(t)}console.log("✅ Часть 28 загружена: мобы, спавн, боссы");function N0(i,e){var t;for(let n=lt.length-1;n>=0;n--){const r=lt[n],s=r.userData;if(s.stunUntil>0){s.stunUntil-=i;continue}if(s.isHealer&&(s.healTimer=(s.healTimer||0)+i,s.healTimer>2)){s.healTimer=0;for(const d of lt)d!==r&&d.position.distanceTo(r.position)<3&&d.userData.hp<d.userData.maxHp&&(d.userData.hp=Math.min(d.userData.maxHp,d.userData.hp+10))}let o=null;for(const d of Zt)if(r.position.distanceTo(d.position)<.6){o=d;break}if(o){o.userData.hp-=s.damage*i*2,o.userData.damage>0&&(r.userData.hp-=o.userData.damage*i),o.userData.poison>0&&(r.userData.hp-=o.userData.poison*i),o.userData.shock>0&&(r.userData.hp-=o.userData.shock*i),o.userData.burnAura>0&&(r.userData.hp-=o.userData.burnAura*i),o.userData.hp<=0&&(nt("break"),zi(o.position.clone().setY(.5),o.material.color.getHex(),10),$e.remove(o),Zt.splice(Zt.indexOf(o),1)),r.userData.hp<=0&&(nt("enemyDeath"),yn+=s.reward||15,zi(r.position.clone().setY(.5),((t=Qt[s.type])==null?void 0:t.color)||16777215,10),$e.remove(r),lt.splice(n,1));continue}const a=s.target.clone().sub(r.position);if(a.length()<.6){qt-=s.damage,nt("towerHit"),zi(r.position,16711680,10),$e.remove(r),lt.splice(n,1);continue}a.normalize(),r.position.add(a.multiplyScalar(s.speed)),(!s.isFlyer||r.position.y>1)&&(r.rotation.y=Math.atan2(a.x,a.z));const c=e*8+s.animPhase;s.arms&&(s.arms[0].rotation.x=Math.sin(c)*.7,s.arms[1].rotation.x=-Math.sin(c)*.7),s.legs&&(s.legs[0].rotation.x=-Math.sin(c)*.7,s.legs[1].rotation.x=Math.sin(c)*.7),s.rotor&&(s.rotor.rotation.y+=.5),s.isFlyer||(r.position.y=.5+Math.abs(Math.sin(c))*.05)}}function O0(i){var e;for(let t=ai.length-1;t>=0;t--){const n=ai[t];n.position.add(n.userData.direction.clone().multiplyScalar(n.userData.speed));let r=!1;for(let s=lt.length-1;s>=0;s--){const o=lt[s];if(o.userData.isFlyer||n.userData.hitEnemies.has(o.id))continue;const a=o.userData.radius||.6;if(n.position.distanceTo(o.position)<a){let l=n.userData.damage;if(o.userData.hasShield&&(l*=.5),o.userData.isPhantom&&Math.random()<.3&&(l=0),o.userData.hp-=l,n.userData.hitEnemies.add(o.id),r=!0,l>0&&sa(o.position.clone().setY(1.2),Math.round(l),"#FFEB3B"),n.userData.stun>0){let c=n.userData.stun;o.userData.isBoss&&(c*=.5),o.userData.stunUntil=(o.userData.stunUntil||0)+c}if(n.userData.slow>0){let c=n.userData.slowDuration;o.userData.isBoss&&(c*=.5),o.userData.slowUntil=(o.userData.slowUntil||0)+c,o.userData.speed=o.userData.originalSpeed*(1-n.userData.slow)}if(n.userData.dotDamage>0&&(o.userData.poisonUntil=(o.userData.poisonUntil||0)+n.userData.dotDuration,o.userData.poisonDmg=n.userData.dotDamage),n.userData.burn>0&&(o.userData.burnUntil=(o.userData.burnUntil||0)+n.userData.burnDuration,o.userData.burnDmg=n.userData.burn),n.userData.lifesteal>0&&(qt=Math.min(ri,qt+l*n.userData.lifesteal)),o.userData.hp<=0){yn+=o.userData.reward||15,nt("enemyDeath");const c=((e=Qt[o.userData.type])==null?void 0:e.color)||16777215;zi(o.position.clone().setY(.5),c,15),sa(o.position.clone().setY(1.5),o.userData.reward||15,"#00E676"),$e.remove(o),lt.splice(s,1)}if(n.userData.pierce>0)n.userData.pierce--;else break}}(r||n.position.length()>35)&&($e.remove(n),ai.splice(t,1))}}function B0(i){for(const e of lt)e.userData.poisonUntil>0&&(e.userData.poisonUntil-=i,e.userData.hp-=e.userData.poisonDmg*i),e.userData.burnUntil>0&&(e.userData.burnUntil-=i,e.userData.hp-=e.userData.burnDmg*i),e.userData.slowUntil>0&&(e.userData.slowUntil-=i,e.userData.slowUntil<=0&&e.userData.originalSpeed&&(e.userData.speed=e.userData.originalSpeed))}console.log("✅ Часть 29 загружена: бой");const In=document.createElement("div");In.style.cssText=`
  position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%);
  display: none; gap: 6px; z-index: 200;
  background: rgba(0,0,0,0.7); padding: 8px; border-radius: 12px;
  max-width: 95vw; overflow-x: auto;
`;document.body.appendChild(In);function ki(){In.innerHTML="";const i=Object.entries(zn).filter(([t])=>ce.purchasedTowers.includes(t));for(const[t,n]of i){const r=document.createElement("button");r.className="hotkey-btn"+(jt===t?" active":""),r.style.cssText=`
      background: linear-gradient(180deg, #${n.color.toString(16).padStart(6,"0")}, #263238);
      color: white; border: 2px solid rgba(0,0,0,0.5); border-radius: 8px;
      padding: 6px 8px; font-family: 'Arial Black', sans-serif;
      font-size: 10px; text-shadow: 1px 1px 2px black;
      min-width: 62px; text-align: center;
    `,r.innerHTML=`
      <div style="font-size: 12px;">${n.hotkey||"—"}</div>
      <div style="font-size: 8px; line-height: 1;">${n.name}</div>
      <div style="font-size: 8px;">💎${n.cost}</div>
    `,r.addEventListener("click",()=>{jt=t,_n=null,ki()}),In.appendChild(r)}const e=Object.entries(fi).filter(([t])=>ce.purchasedBarricades.includes(t));for(const[t,n]of e){const r=document.createElement("button");r.className="hotkey-btn"+(_n===t?" active":""),r.style.cssText=`
      background: linear-gradient(180deg, #${n.color.toString(16).padStart(6,"0")}, #263238);
      color: white; border: 2px solid rgba(0,0,0,0.5); border-radius: 8px;
      padding: 6px 8px; font-family: 'Arial Black', sans-serif;
      font-size: 10px; text-shadow: 1px 1px 2px black;
      min-width: 62px; text-align: center;
    `,r.innerHTML=`
      <div style="font-size: 12px;">${n.hotkey}</div>
      <div style="font-size: 8px; line-height: 1;">${n.name}</div>
      <div style="font-size: 8px;">💎${n.cost}</div>
    `,r.addEventListener("click",()=>{_n=t,jt=null,ki()}),In.appendChild(r)}}window.addEventListener("keydown",i=>{if(!is||ji)return;const e=i.key.toLowerCase();for(const[t,n]of Object.entries(zn))if(n.hotkey&&n.hotkey.toLowerCase()===e&&ce.purchasedTowers.includes(t)){jt=t,_n=null,ki();return}for(const[t,n]of Object.entries(fi))if(n.hotkey&&n.hotkey.toLowerCase()===e&&ce.purchasedBarricades.includes(t)){_n=t,jt=null,ki();return}i.key==="Escape"&&(jt=ce.purchasedTowers[0]||"base",_n=null,ki())});const vl=new Pm,Vs=new We,z0=new Rn(new P(0,1,0),0),Ws=new P;function k0(i){if(!is||ji||si||qi)return;const e=i.clientX||i.touches&&i.touches[0].clientX,t=i.clientY||i.touches&&i.touches[0].clientY;if(e===void 0||i.target!==en.domElement)return;Vs.x=e/window.innerWidth*2-1,Vs.y=-(t/window.innerHeight)*2+1,vl.setFromCamera(Vs,ci),vl.ray.intersectPlane(z0,Ws);const n=Math.floor(Ws.x)+.5,r=Math.floor(Ws.z)+.5;n<-an+.5||n>an-.5||r<-an+.5||r>an-.5||xn.find(a=>Math.abs(a.position.x-n)<.5&&Math.abs(a.position.z-r)<.5)||Zt.find(a=>Math.abs(a.position.x-n)<.5&&Math.abs(a.position.z-r)<.5)||(_n?C0(n,r,_n):jt&&b0(n,r,jt))}window.addEventListener("pointerdown",k0);const Hn=document.createElement("button");Hn.textContent="⏸";Hn.className="menu-button";Hn.style.cssText=`
  position: fixed; top: 10px; right: 10px;
  width: 50px; height: 50px; font-size: 24px;
  background: linear-gradient(180deg, #78909C 0%, #455A64 100%);
  color: white; border: none; border-bottom: 4px solid #37474F;
  border-radius: 10px; cursor: pointer; z-index: 250; display: none;
`;Hn.addEventListener("click",()=>{ji=!0,_i.style.display="flex"});document.body.appendChild(Hn);const _i=document.createElement("div");_i.style.cssText=`
  position: fixed; inset: 0; background: rgba(0,0,0,0.85);
  display: none; flex-direction: column;
  justify-content: center; align-items: center;
  z-index: 400; font-family: Arial, sans-serif;
`;const za=document.createElement("h2");za.textContent="⏸ ПАУЗА";za.style.cssText="color: #FFD700; font-size: 48px; font-family: 'Arial Black', sans-serif; margin-bottom: 30px;";_i.appendChild(za);const H0=ct("▶ ПРОДОЛЖИТЬ","green",()=>{ji=!1,_i.style.display="none"},{padding:"14px 50px",fontSize:"18px",minWidth:"260px"});_i.appendChild(H0);const G0=ct("🏠 В МЕНЮ","red",()=>location.reload(),{padding:"12px 50px",fontSize:"16px",minWidth:"260px"});_i.appendChild(G0);document.body.appendChild(_i);const yt=document.createElement("button");yt.className="menu-button wave-btn";yt.textContent="▶ НАЧАТЬ ВОЛНУ 1";yt.style.cssText=`
  position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(180deg, #FFD700, #FFA000);
  color: white; border: none; border-bottom: 5px solid #E65100;
  border-radius: 12px; padding: 14px 32px;
  font-family: 'Arial Black', sans-serif; font-size: 16px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  box-shadow: 0 6px 0 #E65100, 0 8px 16px rgba(0,0,0,0.5);
  z-index: 300; display: none; cursor: pointer; pointer-events: auto;
`;yt.addEventListener("click",()=>{if(!(si||qi)){if(Bn(),nt("click"),yn+=50,sa(new P(0,1,0),50,"#FFD700"),!di){yl();return}for(const i of lt)$e.remove(i);lt.length=0,di=!1,yt.style.display="none",setTimeout(()=>yl(),500)}});document.body.appendChild(yt);function uc(i){var s,o;Qe=i;const e=ce.towerUpgrades.hp*20,t=((s=cr.find(a=>a.id===ce.activeHero))==null?void 0:s.bonusHp)||0,n=(ce.heroLevels[ce.activeHero]||1)*5;ri=i.towerHp+e+t+n,qt=ri,yn=100+(((o=cr.find(a=>a.id===ce.activeHero))==null?void 0:o.bonusCrystals)||0),Oa=i.hpMul,Ba=i.speedMul,Kt=0,di=!1,is=!0,ji=!1,si=!1,qi=!1,jt=ce.purchasedTowers[0]||"base",_n=null,Hn.style.display="block",Zi.style.display="block",In.style.display="flex",yt.style.display="block",yt.textContent="▶ НАЧАТЬ ВОЛНУ 1",ki(),oc()}let rr=0;const V0=1.5;function yl(){Kt++,$r=va.includes(Qe.id)&&Kt===Qe.waves?1:Math.floor(3+Kt*1.5),Jn=0,di=!0,yt&&(yt.style.display="none"),nt("waveStart")}function W0(){const i=[];for(const[e,t]of Object.entries(Qt))Qe.id>=t.spawnFrom&&i.push(e);return i}function X0(){const i=W0();return i.length===0?"normal":i[Math.floor(Math.random()*i.length)]}const Ml=new Lm;function hc(){requestAnimationFrame(hc);const i=Math.min(Ml.getDelta(),.1),e=Ml.getElapsedTime();if(is&&!ji&&!si&&!qi){const t=1+Math.sin(e*2)*.05;dr.scale.setScalar(t),dr.rotation.y+=.01,ce.towerUpgrades.regen>0&&qt<ri&&(qt=Math.min(ri,qt+ce.towerUpgrades.regen*i)),di&&(rr+=i,va.includes(Qe.id)&&Kt===Qe.waves?Jn<1&&rr>=1&&(rr=0,I0(Qe.boss),Jn++):rr>=V0&&Jn<$r&&(rr=0,U0(X0()),Jn++),Jn>=$r&&lt.length===0&&(di=!1,qt=Math.min(ri,qt+5),Kt>=Qe.waves?setTimeout(()=>{!qi&&!si&&q0()},500):yt&&(yt.style.display="block",yt.textContent=`▶ ВОЛНА ${Kt+1} (+50 💎)`))),N0(i,e),w0(i),O0(),R0(i),L0(i),B0(i),oc(),M0(),qt<=0&&!si&&Y0()}en.render($e,ci)}hc();function q0(){qi=!0,nt("win"),Hn.style.display="none",Zi.style.display="none",In.style.display="none",yt&&(yt.style.display="none"),ui.style.display="none",ce.completedLevels.includes(Qe.id)||ce.completedLevels.push(Qe.id),Qe.id===ce.unlockedLevel&&Qe.id<lr.length&&(ce.unlockedLevel=Qe.id+1),ce.crystals+=Qe.reward,Jt(),Pa(()=>{ce.crystals+=200,Jt()},"win"),sn.innerHTML=`
    <h1 style="font-size: 52px; margin: 0; font-family: 'Arial Black', sans-serif; color: #FFD700;">🎉 ПОБЕДА!</h1>
    <p style="font-size: 20px; margin: 16px 0;">Уровень <b style="color: #FFD700;">${Qe.name}</b> пройден!</p>
    <p style="font-size: 18px;">Награда: <b style="color: #00E676;">+${Qe.reward} 💎</b></p>
    <p style="font-size: 13px; color: #FFD700;">+200 💎 за рекламу!</p>
  `;const i=document.createElement("div");i.style.cssText="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 16px;";const e=ct("▶ СЛЕДУЮЩИЙ","green",()=>{const n=lr.find(r=>r.id===Qe.id+1);n?(sn.innerHTML="",sn.style.display="none",xn.forEach(r=>$e.remove(r)),xn.length=0,ai.forEach(r=>$e.remove(r)),ai.length=0,Bi.forEach(r=>$e.remove(r)),Bi.length=0,lt.forEach(r=>$e.remove(r)),lt.length=0,Zt.forEach(r=>$e.remove(r)),Zt.length=0,uc(n)):location.reload()},{padding:"12px 40px",fontSize:"16px",minWidth:"220px"});i.appendChild(e);const t=ct("🏠 В МЕНЮ","gray",()=>location.reload(),{padding:"12px 40px",fontSize:"16px",minWidth:"220px"});i.appendChild(t),sn.appendChild(i),sn.style.display="flex"}function Y0(){si=!0,nt("lose"),Hn.style.display="none",Zi.style.display="none",In.style.display="none",yt&&(yt.style.display="none"),ui.style.display="none",Kt>ce.record&&(ce.record=Kt,Jt()),Pa(()=>{ce.crystals+=100,Jt()},"lose"),sn.innerHTML=`
    <h1 style="font-size: 52px; margin: 0; font-family: 'Arial Black', sans-serif; color: #EF5350;">💀 ПОРАЖЕНИЕ</h1>
    <p style="font-size: 20px; margin: 16px 0;">Ты дошёл до волны <b style="color: #FFD700;">${Kt}</b> из ${Qe.waves}</p>
    <p style="font-size: 13px; opacity: 0.8;">+100 💎 за рекламу!</p>
  `;const i=document.createElement("div");i.style.cssText="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 16px;";const e=ct("🔄 ЗАНОВО","green",()=>location.reload(),{padding:"12px 40px",fontSize:"16px",minWidth:"220px"});i.appendChild(e);const t=ct("🏠 В МЕНЮ","gray",()=>location.reload(),{padding:"12px 40px",fontSize:"16px",minWidth:"220px"});i.appendChild(t),sn.appendChild(i),sn.style.display="flex"}window.addEventListener("resize",()=>{ci.aspect=window.innerWidth/window.innerHeight,ci.updateProjectionMatrix(),en.setSize(window.innerWidth,window.innerHeight)});console.log("🎮 ========================================");console.log("🎮 CUBE DEFENSE ЗАГРУЖЕН!");console.log("🗺 Уровней:",lr.length);console.log("👾 Типов врагов:",Object.keys(Qt).length);console.log("🏗️ Турелей:",Object.keys(es).length);console.log("❄️ Стан-башен:",Object.keys(ts).length);console.log("🚧 Типов баррикад:",Object.keys(fi).length);console.log("👑 Боссов:",Object.keys(ns).length);console.log("🦸 Героев:",cr.length);console.log("📦 Сундуков:",Object.keys(xa).length);console.log("🎨 Редкостей:",Object.keys(Qr).length);console.log("🎮 ========================================");
