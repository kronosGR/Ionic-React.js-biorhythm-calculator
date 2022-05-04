/*! For license information please see 7818.7b96cb3e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbiorhythm_calculator=self.webpackChunkbiorhythm_calculator||[]).push([[7818],{7818:function(t,e,r){r.r(e),r.d(e,{scopeCss:function(){return B}});var n=r(9388),s="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("(-shadowcsshost"+i,"gim"),u=new RegExp("(-shadowcsscontext"+i,"gim"),l=new RegExp("(-shadowcssslotted"+i,"gim"),h="-shadowcsshost-no-combinator",f=/-shadowcsshost-no-combinator([^\s]*)/,p=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,v=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,_=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,S="%BLOCK%",O=function(t,e){var r=W(t),n=0;return r.escapedString.replace(w,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var c=t[2],o="",i=t[4],a="";i&&i.startsWith("{%BLOCK%")&&(o=r.blocks[n++],i=i.substring(S.length+1),a="{");var u={selector:c,content:o},l=e(u);return""+t[1]+l.selector+t[3]+a+l.content+i}))},W=function(t){for(var e=t.split(b),r=[],n=[],s=0,c=[],o=0;o<e.length;o++){var i=e[o];"}"===i&&s--,s>0?c.push(i):(c.length>0&&(n.push(c.join("")),r.push(S),c=[]),r.push(i)),"{"===i&&s++}return c.length>0&&(n.push(c.join("")),r.push(S)),{escapedString:r.join(""),blocks:n}},k=function(t,e,r){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var n=t[2].split(","),s=[],c=0;c<n.length;c++){var o=n[c].trim();if(!o)break;s.push(r(h,o,t[3]))}return s.join(",")}return h+t[3]}))},j=function(t,e,r){return t+e.replace(s,"")+r},C=function(t,e,r){return e.indexOf(s)>-1?j(t,e,r):t+e+r+", "+e+" "+t+r},E=function(t,e){var r=function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e);return!r.test(t)},R=function(t,e,r){e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e[0]}));for(var n,s="."+e,c=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(h)>-1)n=function(t,e,r){if(g.lastIndex=0,g.test(t)){var n="."+r;return t.replace(f,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,s){return e+n+r+s}))})).replace(g,n+" ")}return e+" "+t}(t,e,r);else{var c=t.replace(g,"");if(c.length>0){var o=c.match(/([^:]*)(:*)(.*)/);o&&(n=o[1]+s+o[2]+o[3])}}return n},o=function(t){var e,r=[],n=0;return t=t.replace(/(\[[^\]]*\])/g,(function(t,e){var s="__ph-"+n+"__";return r.push(e),n++,s})),e=t.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,e,s){var c="__ph-"+n+"__";return r.push(s),n++,e+c})),{content:e,placeholders:r}}(t),i="",a=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=o.content).indexOf(h)>-1);null!==(n=u.exec(t));){var p=n[1],d=t.slice(a,n.index).trim();i+=((l=l||d.indexOf(h)>-1)?c(d):d)+" "+p+" ",a=u.lastIndex}var m=t.substring(a);return i+=(l=l||m.indexOf(h)>-1)?c(m):m,function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,r){return t[+r]}))}(o.placeholders,i)},L=function t(e,r,n,s,c){return O(e,(function(e){var c=e.selector,o=e.content;return"@"!==e.selector[0]?c=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():E(t,e)?R(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,s):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=t(e.content,r,n,s)),{selector:c.replace(/\s{2,}/g," ").trim(),content:o}}))},T=function(t,e,r,n,i){var f=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(l,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var s=t[2].trim(),c=t[3],o=r+s+c,i="",a=t[4]-1;a>=0;a--){var u=t[5][a];if("}"===u||","===u)break;i=u+i}var l=i+o,f=""+i.trimRight()+o.trim();if(l.trim()!==f.trim()){var p=f+", "+l;n.push({orgSelector:l,updatedSelector:p})}return o}return h+t[3]})),{selectors:n,cssText:t}}(t=function(t){return k(t,u,C)}(t=function(t){return k(t,a,j)}(t=function(t){return t.replace(v,o).replace(d,s).replace(m,c)}(t))),n);return t=function(t){return p.reduce((function(t,e){return t.replace(e," ")}),t)}(t=f.cssText),e&&(t=L(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+r)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:f.selectors}},B=function(t,e,r){var s=e+"-h",c=e+"-s",o=function(t){return t.match(_)||[]}(t);t=function(t){return t.replace(x,"")}(t);var i=[];if(r){var a=function(t){var e="/*!@___"+i.length+"___*/",r="/*!@"+t.selector+"*/";return i.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=O(t,(function(t){return"@"!==t.selector[0]?a(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=O(t.content,a),t):t}))}var u=T(t,e,s,c);return t=(0,n.ev)([u.cssText],o).join("\n"),r&&i.forEach((function(e){var r=e.placeholder,n=e.comment;t=t.replace(r,n)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=7818.7b96cb3e.chunk.js.map