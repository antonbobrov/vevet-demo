"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[814],{8814:function(e,t,s){var i=s(6791),r=s(7617),n=s(5122),o=s(2569),a=s(4135),d=s(5811),u=s(7183);function c(e,t){return new Promise((s=>{const{targetProgress:i}=e,r=function({element:e,targetProgress:t}){if(void 0!==e.isComplete)return"boolean"==typeof e.isComplete&&e.isComplete?t:"number"==typeof e.isComplete?e.isComplete:0;if(void 0!==e.isLoaded){if("boolean"==typeof e.isLoaded&&e.isLoaded)return t;if("number"==typeof e.isLoaded)return e.isLoaded}const s=e.getAttribute("data-is-loaded");if(null!==s&&""!==s&&"false"!==s){const e=parseFloat(s);return Number.isNaN(e)?t:e}return 0}(e);r>=i?s():setTimeout((()=>{t.isDestroyed||c(e,t).then((()=>s())).catch((()=>{}))}),50)}))}var h=s(705);class l extends o.Z{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{resourcesQuantity:0,canPreloadImages:!0,canPreloadVideos:!1,preloadCustomSelector:".js-preload",preloadIgnoreClassName:"js-preload-ignore",lerp:.1,forceEnd:500})}get images(){return this._images}get videos(){return this._videos}get customResources(){return this._customResources}get resourcesQuantity(){return this._resourcesQuantity+this.props.resourcesQuantity+this.images.length+this.videos.length+this.customResources.length+1}get loadedResourcesQuantity(){return(0,d.q)(this._loadedResourcesQuantity,[0,this.resourcesQuantity])}get loadProgress(){return this.loadedResourcesQuantity/this.resourcesQuantity}get progress(){return this._progress}set progress(e){this._progress=e,this._handleProgressChange()}constructor(e,t=!0){super(e,!1),this._images=[],this._videos=[],this._customResources=[],this._resourcesQuantity=0,this._loadedResourcesQuantity=0,this._progress=0,t&&this.init()}_init(){this._getResources(),super._init()}_setEvents(){super._setEvents();const{lerp:e}=this.props;"number"==typeof e&&e<1&&(this._raf=new n.K,this._raf.addCallback("frame",(()=>{this.progress=(0,u.C)(this.progress,this.loadProgress,e)})),this._raf.play()),(0,h.S)().onPageLoad().then((()=>this._handleLoadedResource({isSuccess:!0}))).catch((()=>{})),this._preloadResources()}_getResources(){const{canPreloadImages:e,canPreloadVideos:t,preloadCustomSelector:s,preloadIgnoreClassName:r}=this.props;e&&(0,i.U)("img").forEach((e=>{!e.classList.contains(r)&&"lazy"!==e.loading&&this._images.push(e)})),t&&(0,i.U)("video").forEach((e=>{e.classList.contains(r)||this._videos.push(e)})),s&&Array.from((0,i.U)(s)).forEach((e=>{if(e.classList.contains(r))return;let t=parseInt(e.getAttribute("data-load-count")||"1",10);t=Number.isNaN(t)?1:(0,d.q)(t,[1,1/0]);for(let s=1;s<=t;s+=1){const i=s/t;this._customResources.push({element:e,targetProgress:i})}}))}_onLoaded(){return new r.A((e=>{let t=!1;this.callbacks.add("progress",(s=>{s.progress>=1&&!t&&(t=!0,e())}),{isProtected:!0,name:this.name})}))}_preloadResources(){this.images.forEach((e=>function(e,t){if(e.complete)return void t(!0);const s=new Image;s.addEventListener("load",(()=>t(!0))),s.addEventListener("error",(()=>t(!1))),s.crossOrigin="anonymous",s.src=e.currentSrc||e.src}(e,(t=>this._handleLoadedResource({element:e,isSuccess:t}))))),this.videos.forEach((e=>function(e,t){e.readyState>0?t(!0):"none"!==e.preload?(e.addEventListener("error",(()=>t(!1))),e.addEventListener("loadedmetadata",(()=>t(!0)))):t(!1)}(e,(t=>this._handleLoadedResource({element:e,isSuccess:t}))))),this._customResources.forEach((e=>{c(e,this).then((()=>this._handleLoadedResource({element:e.element,isSuccess:!0}))).catch((()=>{}))}))}_handleLoadedResource({element:e,isSuccess:t}){this.loadProgress>=1||(this._loadedResourcesQuantity+=1,this.callbacks.tbt("resourceLoad",{element:e,atProgress:this.progress,loadProgress:this.loadProgress,isSuccess:t}),this._raf||(this.progress=this.loadProgress))}iterateLoadedResources(e=1){const t=Math.abs(e);for(let e=0;e<t;e+=1)this._handleLoadedResource({isSuccess:!0})}iterateResourcesQuantity(e=1){this._resourcesQuantity+=e}_handleProgressChange(){if(this.callbacks.tbt("progress",{progress:this.progress,loadProgress:this.loadProgress}),this.progress>=1)this._raf&&(this._raf.destroy(),this._raf=void 0);else if("number"==typeof this.props.forceEnd&&this.loadProgress>=1&&!this._endTimeline){this._raf&&(this._raf.destroy(),this._raf=void 0),this._endTimeline=new a.K({duration:this.props.forceEnd});const e=this.progress;this._endTimeline.addCallback("progress",(({p:t})=>{const s=1-e;this.progress=e+s*t})),this._endTimeline.play()}}_destroy(){var e,t;super._destroy(),null===(e=this._raf)||void 0===e||e.destroy(),null===(t=this._endTimeline)||void 0===t||t.destroy()}}var p=document.getElementById("v-preloader"),f=document.getElementById("percent"),_=document.getElementById("v-preloader-hide"),g=new l({container:p});console.log(g.images,g.videos,g.customResources),g.addCallback("progress",(function(){f.textContent="".concat((100*g.progress).toFixed(0).padStart(2,"0"),"%")})),g.addCallback("hidden",(function(){return g.destroy()})),_&&(g.changeProps({hideAnimation:!1}),g.addCallback("loaded",(function(){_.removeAttribute("disabled")})),_.addEventListener("click",(function(){return g.hide()})));var m=document.querySelector(".js-preload");m&&m.addEventListener("click",(function(){var e;if(m.getAttribute("data-load-count")){var t=Number(null!==(e=m.getAttribute("data-is-loaded"))&&void 0!==e?e:0);m.setAttribute("data-is-loaded","".concat(t+.25))}else m.setAttribute("data-is-loaded","1")}))},8680:function(e,t,s){function i(e){return e instanceof HTMLElement||e instanceof Element}s.d(t,{v:function(){return i}})},9810:function(e,t,s){function i(e){return e instanceof Window}s.d(t,{l:function(){return i}})},6791:function(e,t,s){s.d(t,{U:function(){return n}});var i=s(8680),r=s(1032);function n(e,t){if(e instanceof NodeList)return e;if((0,i.v)(e))return[e];if(Array.isArray(e))return e;if(void 0!==t){const s=(0,r.J)(t);if(s)return s.querySelectorAll(e)}return document.querySelectorAll(e)}},1032:function(e,t,s){s.d(t,{J:function(){return n}});var i=s(8680),r=s(9810);function n(e,t){if((0,r.l)(e))return e;if((0,i.v)(e))return e;if(void 0!==t){const s=n(t);if(s)return s.querySelector(e)}return document.querySelector(e)}},2569:function(e,t,s){s.d(t,{Z:function(){return d}});var i=s(1032),r=s(7617),n=s(9529),o=s(9060),a=s(705);class d extends n.u{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{container:`#${this.prefix}`,hideAnimation:250})}get prefix(){return`${(0,a.S)().prefix}preloader`}get container(){return this._container}get isHidden(){return this._isHidden}constructor(e,t=!0){if(super(e,!1),this.props.container){const e=(0,i.J)(this.props.container);e instanceof HTMLElement&&(this._container=e,this.toggleClassName(e,this.className(""),!0))}this._isToBeHidden=!1,this._isHidden=!1,t&&this.init()}_init(){super._init(),this._setEvents()}_setEvents(){const e=this._onLoaded();e.then((()=>{this.isDestroyed||this._handleLoaded()})).catch((()=>{})),this.addDestroyableAction((()=>e.cancel()))}_onLoaded(){return(0,a.S)().onPageLoad()}_handleLoaded(){this.callbacks.tbt("loaded",void 0),"boolean"!=typeof this.props.hideAnimation&&this.hide()}hide(e=("boolean"!=typeof this.props.hideAnimation?this.props.hideAnimation:250)){return this._isToBeHidden=!0,this.callbacks.tbt("hide",void 0),new r.A((t=>{const s=this._container;if(!s)return this._handleHidden(),void t();s.style.transition=`opacity ${e}ms, visibility ${e}ms`,s.style.opacity="0",s.style.visibility="hidden";const i=(0,o.y)((()=>{s.style.display="none",this._handleHidden(),t()}),e);this.addDestroyableAction((()=>i.clear()))}))}_handleHidden(){this._isHidden=!0,this.callbacks.tbt("hidden",void 0)}onHide(e){if(!this._isToBeHidden)return this.addCallback("hide",(()=>e()));e()}onHidden(e){if(!this._isHidden)return this.addCallback("hidden",(()=>e()));e()}}},4135:function(e,t,s){s.d(t,{K:function(){return l}});var i=s(5811);function r(e,t,s){return((n(t,s)*e+o(t,s))*e+a(t))*e}function n(e,t){return 1-3*t+3*e}function o(e,t){return 3*t-6*e}function a(e){return 3*e}function d(e,t,s){return 3*n(t,s)*e*e+2*o(t,s)*e+a(t)}var u=s(705);const c=(e,t)=>{var s,i;return void 0===t&&(t=null!==(i=null===(s=(0,u.S)())||void 0===s?void 0:s.props.easing)&&void 0!==i&&i),function(e,t=!1){return Array.isArray(t)?function(e,t){const[s,i,n,o]=t;if(s===i&&n===o)return e;const a=[];for(let e=0;e<11;++e)a[e]=r(.1*e,s,n);return 0===e?0:1===e?1:r(function(e,t,s){const i=e[0],n=e[2];let o=0,a=1;for(;10!==a&&s[a]<=t;++a)o+=.1;--a;const u=o+(t-s[a])/(s[a+1]-s[a])*.1,c=d(u,i,n);return c>=.001?function(e,t,s,i){for(let n=0;n<4;++n){const n=d(t,s,i);if(0===n)return t;t-=(r(t,s,i)-e)/n}return t}(t,u,i,n):0===c?u:function(e,t,s,i,n){let o,a,d=0;do{a=t+(s-t)/2,o=r(a,i,n)-e,o>0?s=a:t=a}while(Math.abs(o)>1e-7&&++d<10);return a}(t,o,o+.1,i,n)}(t,e,a),i,o)}(e,t):"function"==typeof t?t(e):e}(e,t)};var h=s(9529);class l extends h.u{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{easing:(0,u.S)().props.easing,isDestroyedOnEnd:!1,duration:1e3})}get p(){return this._p}set p(e){this._p=e,this._handleProgressUpdate()}get e(){return this._e}get isPlaying(){return void 0!==this._raf}get isReversed(){return this._isReversed}get isPaused(){return this._isPaused}get duration(){return Math.max(this.props.duration,1)}constructor(e,t=!0){super(e,!1),this._p=0,this._e=0,this._raf=void 0,this._rafTime=0,this._isReversed=!1,this._isPaused=!1,t&&this.init()}play(){this.isDestroyed||1===this.p||(this._isReversed=!1,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}reverse(){this.isDestroyed||0===this.p||(this._isReversed=!0,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}pause(){this.isDestroyed||(this._isPaused=!0,this._raf&&window.cancelAnimationFrame(this._raf),this._raf=void 0)}reset(){this.isDestroyed||(this.pause(),this.p=0)}_animate(){if(this.isPaused)return;const{isReversed:e}=this,t=Date.now(),s=Math.abs(this._rafTime-t);this._rafTime=t;const r=s/this.duration/(e?-1:1),n=(0,i.q)(this.p+r,[0,1]);if(this.p=n,1===n&&!e||0===n&&e)return this._isReversed=!1,this._isPaused=!1,void(this._raf=void 0);this._raf=window.requestAnimationFrame(this._animate.bind(this))}_handleProgressUpdate(){this._e=c(this._p,this.props.easing),this.callbacks.tbt("progress",{p:this._p,e:this._e}),0!==this.p?1===this.p&&(this.callbacks.tbt("end",void 0),this.props.isDestroyedOnEnd&&this.destroy()):this.callbacks.tbt("start",void 0)}_destroy(){this.pause(),super._destroy()}}},5811:function(e,t,s){function i(e,t=[0,1]){return e<t[0]?t[0]:e>t[1]?t[1]:e}s.d(t,{q:function(){return i}})},7183:function(e,t,s){function i(e,t,s,i=.001){const r=e*(1-s)+t*s;return Math.abs(t-r)<=i?t:r}s.d(t,{C:function(){return i}})}}]);