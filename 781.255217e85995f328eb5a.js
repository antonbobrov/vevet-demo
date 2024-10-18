"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[781],{3781:function(e,s,t){var i=t(1032),r=t(9529),o=t(5811);function n(e,s=[0,1],t=[0,1]){return(0,o.q)(function(e,s=[0,1]){return(e-s[0])/(s[1]-s[0])}(e,s),t)}var a=t(8283),c=t(4788),l=t(8758),p=t(705);class h extends r.u{_getDefaultProps(){return Object.assign(Object.assign({},super._getDefaultProps()),{scrollContainer:window,viewportTarget:"any",resizeTimeout:0})}get scrollContainer(){return this._scrollContainer}get section(){return this._section}get scopeGlobal(){return this._scopeGlobal}get scopeIn(){return this._scopeIn}get scopeMove(){return this._scopeMove}get scopeOut(){return this._scopeOut}get progressGlobal(){return this._progressGlobal}set progressGlobal(e){this._progressGlobal=e}constructor(e,s=!0){super(e,!1);const{scrollContainer:t,section:r}=this.props;this._scrollContainer="string"==typeof t?(0,i.J)(t):t,this._section=(0,i.J)(r),this._prevProgressGlobal=-.001,this._progressGlobal=-.001,this._scopeGlobal=[0,0],this._scopeIn=[0,0],this._scopeMove=[0,0],this._scopeOut=[0,0],this._frameThrottleIndex=0,s&&this.init()}_init(){super._init(),this._setEvents()}_setEvents(){const{viewportTarget:e,resizeDebounce:s}=this.props,t=(0,l.E)({onResize:()=>this.resize(),element:this.section,viewportTarget:e,hasBothEvents:!0,resizeDebounce:s}),i=(0,p.S)().onPageLoad();i.then((()=>t.debounceResize())).catch((()=>{}));const r=(0,a.n)({container:this.scrollContainer,callback:e=>this._render(e)});this.addDestroyableAction((()=>{t.remove(),i.cancel(),r.remove()}))}_onPropsMutate(){super._onPropsMutate(),this.resize()}get progressIn(){return n(this.progressGlobal,this.scopeIn)||0}get progressOut(){return n(this.progressGlobal,this.scopeOut)||0}get progressMove(){return n(this.progressGlobal,this.scopeMove)||0}resize(){const e=(0,c.Q)(this.scrollContainer);e&&(this.callbacks.tbt("resize",void 0),this._render(e,!0))}_calculateScopes({scrollTop:e}){const{height:s}=(0,p.S)().viewport,t=this.section.getBoundingClientRect(),i=e+t.top-s,r=e+t.top+t.height,o=r-i;this._scopeGlobal=[i,r],this._scopeIn=[0,s/o],this._scopeOut=[1-s/o,1],this._scopeMove=[this._scopeIn[1],this._scopeOut[0]]}_canRender(e=!1){return e||this.progressGlobal!==this._prevProgressGlobal}_render(e,s=!1){this._frameThrottleIndex+=1,(this._frameThrottleIndex%60==0||s)&&this._calculateScopes(e),this._prevProgressGlobal=this.progressGlobal,this.progressGlobal=n(e.scrollTop,this._scopeGlobal),this._canRender(s)&&this.callbacks.tbt("render",void 0)}}document.querySelectorAll(".js-section").forEach((function(e){var s=new h({section:e,scrollContainer:window}),t=function(){e.innerHTML="\n      <div>progressGlobal: <b>".concat(s.progressGlobal.toFixed(2),"</b></div>\n      <div>progressIn: <b>").concat(s.progressIn.toFixed(2),"</b></div>\n      <div>progressMove: <b>").concat(s.progressMove.toFixed(2),"</b></div>\n      <div>progressOut: <b>").concat(s.progressOut.toFixed(2),"</b></div>\n    ")};t(),s.addCallback("render",(function(){return t()}))}))},8680:function(e,s,t){function i(e){return e instanceof HTMLElement||e instanceof Element}t.d(s,{v:function(){return i}})},9810:function(e,s,t){function i(e){return e instanceof Window}t.d(s,{l:function(){return i}})},1032:function(e,s,t){t.d(s,{J:function(){return o}});var i=t(8680),r=t(9810);function o(e,s){if((0,r.l)(e))return e;if((0,i.v)(e))return e;if(void 0!==s){const t=o(s);if(t)return t.querySelector(e)}return document.querySelector(e)}},9529:function(e,s,t){t.d(s,{u:function(){return r}});var i=t(4406);class r extends i.n{addPlugin(e){void 0===this._plugins&&(this._plugins=[]),this._plugins.push(e),e.component=this,e.init()}_destroyPlugins(){var e;null===(e=this._plugins)||void 0===e||e.forEach((e=>e.destroy()))}_destroy(){super._destroy(),this._destroyPlugins()}}},4406:function(e,s,t){t.d(s,{n:function(){return a}});var i=t(549),r=t(705);class o{constructor(e,s=()=>{},t="Responsive Props"){this._onMutate=s,this._name=t,this._responsiveRules=[],this._refProps=Object.assign({},e),this._props=Object.assign({},e),this._activeBreakpoints=[]}get props(){return this._props}addResponsiveProps(e){this._responsiveRules.push(e),this._responseProps(),this._viewportCallback||(this._viewportCallback=(0,r.S)().viewport.callbacks.add("width",this._responseProps.bind(this),{name:this._name}))}_responseProps(){const e=(0,r.S)(),{viewport:s}=e;let t=!1;const i=Object.assign({},this._refProps),o=[...this._activeBreakpoints].join("_");this._activeBreakpoints=[],this._responsiveRules.forEach((({settings:r,breakpoint:o})=>{"number"==typeof o?s.width<=o&&(this._activeBreakpoints.push(o),t=Object.assign(Object.assign({},i),r)):"string"==typeof o&&(("viewport_desktop"===o&&s.isDesktop||"viewport_tablet"===o&&s.isTablet||"viewport_phone"===o&&s.isPhone)&&(this._activeBreakpoints.push(o),t=Object.assign(Object.assign({},t||i),r)),("device_phone"===o&&e.isPhone||"device_tablet"===o&&e.isTablet||"device_mobile"===o&&e.isMobile)&&(this._activeBreakpoints.push(o),t=Object.assign(Object.assign({},t||i),r)))}));const n=this._activeBreakpoints.join("_")!==o;this._props=t?Object.assign(Object.assign({},this._props),t):Object.assign(Object.assign({},this._props),this._refProps),n&&this._onMutate()}changeProps(e){this._props=Object.assign(Object.assign({},this._props),e),this._refProps=Object.assign(Object.assign({},this._refProps),e),this._onMutate()}destroy(){this._viewportCallback&&this._viewportCallback.remove()}}var n=t(6502);class a{_getDefaultProps(){return{}}get props(){return this._mutableProps.props}get callbacks(){return this._callbacks}get name(){return this.constructor.name}get prefix(){return""}get isInitialized(){return this._isInitialized}get isDestroyed(){return this._isDestroyed}constructor(e,s=!0){if(this._isInitialized=!1,this._isDestroyed=!1,!(0,r.S)())throw new Error("Vevet.Application does not exist yet");this._callbacks=new n.n,this._listeners=[],this._destroyableActions=[],this._classNamesToRemove=[];const t=Object.assign(Object.assign({},this._getDefaultProps()),e||{});this._mutableProps=new o(t,(()=>this._onPropsMutate()),this.name),s&&this.init()}addResponsiveProps(e){if(this.isInitialized)throw new Error("Responsive properties cannot be added after `init` is called");this._mutableProps.addResponsiveProps(e)}changeProps(e){this.isDestroyed||(this._mutableProps.changeProps(e),this._callbacks.tbt("propsChange",void 0))}_onPropsMutate(){this._callbacks.tbt("propsMutate",void 0)}init(){this.isInitialized||(this._isInitialized=!0,this._init())}_init(){}addDestroyableAction(e){this._destroyableActions.push(e)}addViewportCallback(e,s,t={}){const i=(0,r.S)().viewport.callbacks.add(e,s,Object.assign(Object.assign({},t),{name:this.constructor.name}));this.addDestroyableAction((()=>i.remove()))}addCallback(e,s,t={}){return this.callbacks.add(e,s,t)}addEventListener(e,s,t,r){const o=(0,i.q)(e,s,t,r);return this._listeners.push(o),Object.assign(Object.assign({},o),{remove:()=>(this._listeners=this._listeners.filter((e=>e.id!==o.id)),o.remove())})}className(...e){return e.map((e=>`${this.prefix}${e}`)).join(" ")}toggleClassName(e,s,t){const i=e.classList.contains(s);e.classList.toggle(s,t),i||this._classNamesToRemove.push({element:e,className:s})}destroy(){this.isDestroyed||this._destroy()}_destroy(){this._callbacks.tbt("destroy",void 0),this._callbacks.destroy(),this._mutableProps.destroy(),this._destroyableActions.forEach((e=>e())),this._listeners.forEach((e=>e.remove())),this._classNamesToRemove.forEach((({element:e,className:s})=>e.classList.remove(s))),this._isDestroyed=!0}}},8758:function(e,s,t){t.d(s,{E:function(){return r}});var i=t(705);function r({onResize:e,element:s,viewportTarget:t="any",hasBothEvents:r=!1,resizeDebounce:o=0}){let n,a,c,l=!0;const p=(s,t)=>{n&&clearTimeout(n),n=setTimeout((()=>e(null!=s?s:{trigger:"unknown"})),null!=t?t:o)};return s&&(s instanceof Element||Array.isArray(s))&&(a=new ResizeObserver((()=>{l?l=!1:p({trigger:"ResizeObserver"},(0,i.S)().props.resizeDebounce+o)})),Array.isArray(s)?s.forEach((e=>null==a?void 0:a.observe(e))):a.observe(s)),!r&&a||(c=(0,i.S)().viewport.callbacks.add(t,(()=>p({trigger:"Viewport"})))),{remove:()=>{n&&clearTimeout(n),null==a||a.disconnect(),null==c||c.remove()},resize:()=>e({trigger:"unknown"}),debounceResize:()=>p(),hasResizeObserver:!!a}}},5811:function(e,s,t){function i(e,s=[0,1]){return e<s[0]?s[0]:e>s[1]?s[1]:e}t.d(s,{q:function(){return i}})},4788:function(e,s,t){function i(e=window){if(e)return{scrollTop:e instanceof Window?e.pageYOffset:e.scrollTop,scrollLeft:e instanceof Window?e.pageXOffset:e.scrollLeft}}t.d(s,{Q:function(){return i}})},8283:function(e,s,t){t.d(s,{n:function(){return c}});var i=t(1032),r=t(549),o=t(5817),n=t(4788);let a=[];function c({container:e,callback:s,isPassive:t=!1}){let c=a.find((s=>s.container===e&&s.isPassive===t));const l=(0,o.L)("scroll-event");if(c)c.callbacks.push({id:l,callback:s});else if(c={id:(0,o.L)("scroll-event-instance"),container:e,callbacks:[{id:l,callback:s}],isPassive:t,listeners:[]},a.push(c),"object"==typeof e&&"isCustomScroll"in e)c.listeners.push(e.addCallback("render",(()=>{const{scrollTop:s,scrollLeft:t}=e;c.callbacks.forEach((e=>e.callback({scrollTop:s,scrollLeft:t})))}),{name:"onScroll"}));else{const s=(0,i.J)(e);c.listeners.push((0,r.q)(s,"scroll",(()=>{const e=(0,n.Q)(s);e&&c.callbacks.forEach((s=>s.callback(e)))}),{passive:t}))}return{remove:()=>{const e=c.callbacks.filter((e=>e.id!==l));c.callbacks=e,0===e.length&&(c.listeners.forEach((e=>e.remove())),a=a.filter((e=>e.id!==c.id)))}}}}}]);