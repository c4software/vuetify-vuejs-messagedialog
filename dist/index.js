!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["firebase-uploader"]=t():e["firebase-uploader"]=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t,n,o,r,i,s,a){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId=i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var f=u.render;u.render=function(e,t){return l.call(t),f(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}({props:["title","text","closeText","value","closeColor"],data:function(){return{loading:!1}},watch:{value:function(){this.resetState()}},methods:{resetState:function(){this.loading=!1},closeAction:function(){this.loading=!0,this.$emit("closeAction")}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),n("v-card-text",[e._v("\n      "+e._s(e.text)+"\n    ")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:e.closeColor,flat:"",loading:this.loading},on:{click:e.closeAction}},[e._v(e._s(e.closeText))])],1)],1)],1)},[],!1,null,null,null).exports;n.d(t,"VuetifyMessageDialog",function(){return o});t.default={install:function(e){e.component("messageDialog",o)}}}])});