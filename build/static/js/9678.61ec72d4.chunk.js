"use strict";(self.webpackChunkbiorhythm_calculator=self.webpackChunkbiorhythm_calculator||[]).push([[9678],{637:function(t,e,i){i.d(e,{a:function(){return r},d:function(){return s}});var n=i(9388),o=i(6302),r=function(t,e,i,r,s){return(0,n.mG)(void 0,void 0,void 0,(function(){var a;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:if(t)return[2,t.attachViewToDom(e,i,s,r)];if("string"!==typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"===typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,r&&r.forEach((function(t){return a.classList.add(t)})),s&&Object.assign(a,s),e.appendChild(a),[4,new Promise((function(t){return(0,o.c)(a,t)}))];case 1:return n.sent(),[2,a]}}))}))},s=function(t,e){if(e){if(t){var i=e.parentElement;return t.removeViewFromDom(i,e)}e.remove()}return Promise.resolve()}},9678:function(t,e,i){i.r(e),i.d(e,{ion_tab:function(){return s},ion_tabs:function(){return a}});var n=i(9388),o=i(4792),r=i(637),s=function(){function t(t){(0,o.r)(this,t),this.loaded=!1,this.active=!1}return t.prototype.componentWillLoad=function(){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return this.active?[4,this.setActive()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},t.prototype.setActive=function(){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}}))}))},t.prototype.changeActive=function(t){t&&this.prepareLazyLoaded()},t.prototype.prepareLazyLoaded=function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,r.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)},t.prototype.render=function(){var t=this,e=t.tab,i=t.active,n=t.component;return(0,o.h)(o.H,{role:"tabpanel","aria-hidden":i?null:"true","aria-labelledby":"tab-button-"+e,class:{"ion-page":void 0===n,"tab-hidden":!i}},(0,o.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{active:["changeActive"]}},enumerable:!1,configurable:!0}),t}();s.style=":host(.tab-hidden){display:none !important}";var a=function(){function t(t){var e=this;(0,o.r)(this,t),this.ionNavWillLoad=(0,o.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,o.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,o.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(t){var i=t.detail,n=i.href,o=i.tab;if(e.useRouter&&void 0!==n){var r=document.querySelector("ion-router");r&&r.push(n)}else e.select(o)}}return t.prototype.componentWillLoad=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t;return(0,n.Jh)(this,(function(e){switch(e.label){case 0:return this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter?[3,2]:(t=this.tabs).length>0?[4,this.select(t[0])]:[3,2];case 1:e.sent(),e.label=2;case 2:return this.ionNavWillLoad.emit(),[2]}}))}))},t.prototype.componentWillRender=function(){var t=this.el.querySelector("ion-tab-bar");if(t){var e=this.selectedTab?this.selectedTab.tab:void 0;t.selectedTab=e}},t.prototype.select=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var e;return(0,n.Jh)(this,(function(i){switch(i.label){case 0:return e=c(this.tabs,t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 1:return i.sent(),[4,this.notifyRouter()];case 2:return i.sent(),this.tabSwitch(),[2,!0]}}))}))},t.prototype.getTab=function(t){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){return[2,c(this.tabs,t)]}))}))},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.setRouteId=function(t){return(0,n.mG)(this,void 0,void 0,(function(){var e,i=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return e=c(this.tabs,t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 1:return n.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return i.tabSwitch()}}]}}))}))},t.prototype.getRouteId=function(){return(0,n.mG)(this,void 0,void 0,(function(){var t;return(0,n.Jh)(this,(function(e){return[2,void 0!==(t=this.selectedTab&&this.selectedTab.tab)?{id:t,element:this.selectedTab}:void 0]}))}))},t.prototype.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))},t.prototype.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return void 0!==t&&t!==e&&!this.transitioning},Object.defineProperty(t.prototype,"tabs",{get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))},enumerable:!1,configurable:!0}),t.prototype.render=function(){return(0,o.h)(o.H,{onIonTabButtonClick:this.onTabClicked},(0,o.h)("slot",{name:"top"}),(0,o.h)("div",{class:"tabs-inner"},(0,o.h)("slot",null)),(0,o.h)("slot",{name:"bottom"}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.i)(this)},enumerable:!1,configurable:!0}),t}(),c=function(t,e){var i="string"===typeof e?t.find((function(t){return t.tab===e})):e;return i||console.error('tab with id: "'+i+'" does not exist'),i};a.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);
//# sourceMappingURL=9678.61ec72d4.chunk.js.map