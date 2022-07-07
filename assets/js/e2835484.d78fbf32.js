"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[999],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||s;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8220:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),i=["components"],a={title:"Known Issues",weight:70},u=void 0,c={unversionedId:"known-issues/known-issues",id:"known-issues/known-issues",title:"Known Issues",description:"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release.",source:"@site/docs/known-issues/known-issues.md",sourceDirName:"known-issues",slug:"/known-issues/",permalink:"/known-issues/",draft:!1,editUrl:"https://github.com/k3s-io/k3s/docs/edit/main/docs/known-issues/known-issues.md",tags:[],version:"current",lastUpdatedAt:1657219035,formattedLastUpdatedAt:"7/7/2022",frontMatter:{title:"Known Issues",weight:70},sidebar:"mySidebar",previous:{title:"FAQ",permalink:"/faq/"},next:{title:"Security",permalink:"/security/"}},l={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Snap Docker")),(0,s.kt)("p",null,"If you plan to use K3s with docker, Docker installed via a snap package is not recommended as it has been known to cause issues running K3s."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Iptables")),(0,s.kt)("p",null,"If you are running iptables in nftables mode instead of legacy you might encounter issues. We recommend utilizing newer iptables (such as 1.6.1+) to avoid issues."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Rootless Mode")),(0,s.kt)("p",null,"Running K3s with Rootless mode is experimental and has several ",(0,s.kt)("a",{parentName:"p",href:"/advanced/#known-issues-with-rootless-mode"},"known issues.")))}f.isMDXComponent=!0}}]);