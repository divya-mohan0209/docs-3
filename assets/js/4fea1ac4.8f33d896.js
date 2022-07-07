"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[73],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,l(l({ref:e},c),{},{components:n})):r.createElement(m,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9087:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Uninstalling K3s",weight:61},s=void 0,u={unversionedId:"installation/uninstall",id:"installation/uninstall",title:"Uninstalling K3s",description:"If you installed K3s using the installation script, a script to uninstall K3s was generated during installation.",source:"@site/docs/installation/uninstall.md",sourceDirName:"installation",slug:"/installation/uninstall",permalink:"/installation/uninstall",draft:!1,editUrl:"https://github.com/k3s-io/k3s/docs/edit/main/docs/installation/uninstall.md",tags:[],version:"current",lastUpdatedAt:1657219035,formattedLastUpdatedAt:"7/7/2022",frontMatter:{title:"Uninstalling K3s",weight:61},sidebar:"mySidebar",previous:{title:"Kubernetes Dashboard",permalink:"/installation/kube-dashboard"},next:{title:"Cluster Access",permalink:"/cluster-access/"}},c={},p=[],f={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you installed K3s using the installation script, a script to uninstall K3s was generated during installation."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Uninstalling K3s deletes the cluster data and all of the scripts. To restart the cluster with different installation options, re-run the installation script with different flags.")),(0,i.kt)("p",null,"To uninstall K3s from a server node, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/local/bin/k3s-uninstall.sh\n")),(0,i.kt)("p",null,"To uninstall K3s from an agent node, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/local/bin/k3s-agent-uninstall.sh\n")))}d.isMDXComponent=!0}}]);