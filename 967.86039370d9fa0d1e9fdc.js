"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[967],{8967:function(t,e,s){var r=s(9529),i=s(5811),n=s(7183),a=s(8961),o=s(549),h=s(5817);let d,c=[],p=null,l=!1;var u=s(5122),_=s(9766),g=s(4135);class m extends r.u{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{min:0,max:3,step:1,stepThreshold:.1,ease:.1,friction:.5,hasDrag:!0,dragSpeed:1,dragDirection:"y",hasWheel:!0,wheelSpeed:1,stickyEndDuration:500,dragThreshold:3})}get progress(){return this._progressLerp.current}get steppedProgress(){return this._getNearestStep(this._progressLerp.current)}constructor(t,e=!0){super(t,!1),this._progressLerp={current:0,target:0},this._canDragMove=!1,this._direction=1,this._wheelIntensity=0,this._currentHandler="wheel";const{container:s}=this.props;this._animationFrame=new u.K,this._animationFrame.addCallback("frame",(()=>this._handleAnimationFrame())),this._dragger=new _.O({container:s}),this._dragger.addCallback("move",(t=>this._handleDrag(t))),this._dragger.addCallback("start",(({event:t})=>t.stopPropagation())),this._dragger.addCallback("end",(()=>this._handleDragEnd())),this.addEventListener(s,"wheel",(t=>this._handleWheel(t))),this._createIsPageScrolling=function(){const t=(0,h.L)("is-page-scrolling");return c.push(t),d||(d=(0,o.q)(window,"scroll",(()=>{p&&clearTimeout(p),l=!0,p=setTimeout((()=>{l=!1}),150)}))),{get:()=>l,destroy:function(){c=c.filter((e=>e!==t)),0===c.length&&(null==d||d.remove(),d=void 0)}}}(),e&&this.init()}_onPropsMutate(){super._onPropsMutate(),this._dragger.changeProps({isEnabled:this.props.hasDrag})}_handleWheel(t){if(this._timelineTo||!this.props.hasWheel)return;this._stickyEndTimeout&&(clearTimeout(this._stickyEndTimeout),this._stickyEndTimeout=void 0);const{_progressLerp:e}=this,{container:s,min:r,max:n,wheelSpeed:o}=this.props;this._currentHandler="wheel";const h=(0,a.j)(t),d=h.pixelY/s.clientHeight*o;this._wheelIntensity+=d,this._direction=this._wheelIntensity>0?1:-1,e.target=(0,i.q)(e.target+d,[r,n]),this._animationFrame.play(),this._stickyEndTimeout=setTimeout((()=>{this._wheelIntensity=0,this._goStickyEnd()}),100),this.callbacks.tbt("wheel",h)}_checkCanDragMove(t){const{dragDirection:e,dragThreshold:s}=this.props;return!!this._canDragMove||(t.x<s&&t.y<s||("x"===e&&t.x>t.y&&(this._canDragMove=!0),"y"===e&&t.y>t.x&&(this._canDragMove=!0)),!1)}_handleDrag(t){const e=this._createIsPageScrolling.get();if(this._timelineTo||!this.props.hasDrag||e)return;if(!this._checkCanDragMove(t.absDiff))return;const{_progressLerp:s,props:r}=this,{container:n,dragSpeed:a,dragDirection:o,min:h,max:d}=r,{event:c,step:p,diff:l}=t;c.cancelable&&c.preventDefault(),c.stopPropagation(),this._currentHandler="drag";const u=("y"===o?p.y:p.x)*a/("y"===o?n.clientHeight:n.clientWidth);s.target=(0,i.q)(s.target-u,[h,d]);const _="y"===o?l.y:l.x;this._direction=_<0?1:-1,this._animationFrame.play(),this.callbacks.tbt("dragMove",t)}_handleDragEnd(){this._canDragMove=!1,this._goStickyEnd()}_getNearestStep(t){const{step:e,stepThreshold:s,dragSpeed:r}=this.props,n=(0,i.q)(s,[.001,.5]);let a=this._direction;return"drag"===this._currentHandler&&(a=r<0?-1*this._direction:this._direction),(1===a?Math.abs(t-Math.floor(t/e)*e):Math.abs(t-Math.ceil(t/e)*e))>n?1===a?Math.ceil(t/e)*e:Math.floor(t/e)*e:Math.round(t/this.props.step)*this.props.step}_handleAnimationFrame(){const{_progressLerp:t}=this,{ease:e,friction:s,step:r}=this.props,{fpsMultiplier:i}=this._animationFrame,a=this._getNearestStep(t.target);this._timelineTo||(t.target=(0,n.C)(t.target,a,s*e*i,0),this._updateCurrentProgress(e*i),t.current===t.target&&t.current%r==0&&this._animationFrame.pause()),this.render()}render(){this.callbacks.tbt("render",void 0)}_updateCurrentProgress(t){const e=this._progressLerp,s=this._getNearestStep(e.current);e.current=(0,n.C)(e.current,e.target,t,0),s!==this._getNearestStep(e.current)&&this.callbacks.tbt("step",void 0)}_goStickyEnd(){const{stickyEndDuration:t}=this.props;if(!t)return;const e=this._progressLerp.current,s=this._getNearestStep(e);e!==s&&this.to({value:s,duration:"number"==typeof t?2*t:t})}to({value:t,duration:e=500,onProgress:s,onEnd:r}){var i;null===(i=this._timelineTo)||void 0===i||i.destroy();const a=this._progressLerp.current,o=Math.abs(a-t)/this.props.step,h=Math.max("number"==typeof e?e*o:e(o),100),d=new g.K({duration:h});this._timelineTo=d,d.addCallback("progress",(e=>{this._progressLerp.target=(0,n.C)(a,t,e.e,0),this._updateCurrentProgress(1),null==s||s(e)})),d.addCallback("end",(()=>{var t;null===(t=this._timelineTo)||void 0===t||t.destroy(),this._timelineTo=void 0,null==r||r()})),d.play(),this._animationFrame.play()}_destroy(){var t;super._destroy(),this._createIsPageScrolling.destroy(),this._animationFrame.destroy(),this._dragger.destroy(),null===(t=this._timelineTo)||void 0===t||t.destroy(),this._stickyEndTimeout&&(clearTimeout(this._stickyEndTimeout),this._stickyEndTimeout=void 0)}}var f=document.getElementById("slide-progress"),y=Array.from(f.children),v=new m({container:f,min:0,max:y.length-1,step:.5,dragDirection:"x",friction:0,stickyEndDuration:250,ease:.5});v.addCallback("render",(function(){y.forEach((function(t,e){var s=-100*v.progress+100*e;t.style.transform="translate(".concat(s,"%, 0)")}))})),v.render()},4135:function(t,e,s){s.d(e,{K:function(){return l}});var r=s(5811);function i(t,e,s){return((n(e,s)*t+a(e,s))*t+o(e))*t}function n(t,e){return 1-3*e+3*t}function a(t,e){return 3*e-6*t}function o(t){return 3*t}function h(t,e,s){return 3*n(e,s)*t*t+2*a(e,s)*t+o(e)}var d=s(705);const c=(t,e)=>{var s,r;return void 0===e&&(e=null!==(r=null===(s=(0,d.S)())||void 0===s?void 0:s.props.easing)&&void 0!==r&&r),function(t,e=!1){return Array.isArray(e)?function(t,e){const[s,r,n,a]=e;if(s===r&&n===a)return t;const o=[];for(let t=0;t<11;++t)o[t]=i(.1*t,s,n);return 0===t?0:1===t?1:i(function(t,e,s){const r=t[0],n=t[2];let a=0,o=1;for(;10!==o&&s[o]<=e;++o)a+=.1;--o;const d=a+(e-s[o])/(s[o+1]-s[o])*.1,c=h(d,r,n);return c>=.001?function(t,e,s,r){for(let n=0;n<4;++n){const n=h(e,s,r);if(0===n)return e;e-=(i(e,s,r)-t)/n}return e}(e,d,r,n):0===c?d:function(t,e,s,r,n){let a,o,h=0;do{o=e+(s-e)/2,a=i(o,r,n)-t,a>0?s=o:e=o}while(Math.abs(a)>1e-7&&++h<10);return o}(e,a,a+.1,r,n)}(e,t,o),r,a)}(t,e):"function"==typeof e?e(t):t}(t,e)};var p=s(9529);class l extends p.u{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{easing:(0,d.S)().props.easing,isDestroyedOnEnd:!1,duration:1e3})}get p(){return this._p}set p(t){this._p=t,this._handleProgressUpdate()}get e(){return this._e}get isPlaying(){return void 0!==this._raf}get isReversed(){return this._isReversed}get isPaused(){return this._isPaused}get duration(){return Math.max(this.props.duration,1)}constructor(t,e=!0){super(t,!1),this._p=0,this._e=0,this._raf=void 0,this._rafTime=0,this._isReversed=!1,this._isPaused=!1,e&&this.init()}play(){this.isDestroyed||1===this.p||(this._isReversed=!1,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}reverse(){this.isDestroyed||0===this.p||(this._isReversed=!0,this._isPaused=!1,this.isPlaying||(this._rafTime=Date.now(),this._animate()))}pause(){this.isDestroyed||(this._isPaused=!0,this._raf&&window.cancelAnimationFrame(this._raf),this._raf=void 0)}reset(){this.isDestroyed||(this.pause(),this.p=0)}_animate(){if(this.isPaused)return;const{isReversed:t}=this,e=Date.now(),s=Math.abs(this._rafTime-e);this._rafTime=e;const i=s/this.duration/(t?-1:1),n=(0,r.q)(this.p+i,[0,1]);if(this.p=n,1===n&&!t||0===n&&t)return this._isReversed=!1,this._isPaused=!1,void(this._raf=void 0);this._raf=window.requestAnimationFrame(this._animate.bind(this))}_handleProgressUpdate(){this._e=c(this._p,this.props.easing),this.callbacks.tbt("progress",{p:this._p,e:this._e}),0!==this.p?1===this.p&&(this.callbacks.tbt("end",void 0),this.props.isDestroyedOnEnd&&this.destroy()):this.callbacks.tbt("start",void 0)}_destroy(){this.pause(),super._destroy()}}}}]);