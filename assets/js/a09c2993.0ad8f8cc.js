"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"/",title:"K3s - Lightweight Kubernetes",shortTitle:"K3s",name:"menu"},s=void 0,u={unversionedId:"introduction",id:"introduction",title:"K3s - Lightweight Kubernetes",description:"Lightweight Kubernetes. Easy to install, half the memory, all in a binary of less than 100 MB.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/k3s-io/k3s/docs/edit/main/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1657729467,formattedLastUpdatedAt:"7/13/2022",frontMatter:{slug:"/",title:"K3s - Lightweight Kubernetes",shortTitle:"K3s",name:"menu"},sidebar:"mySidebar",next:{title:"Architecture",permalink:"/architecture/"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Lightweight Kubernetes. Easy to install, half the memory, all in a binary of less than 100 MB."),(0,i.kt)("p",null,"Great for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Edge"),(0,i.kt)("li",{parentName:"ul"},"IoT"),(0,i.kt)("li",{parentName:"ul"},"CI"),(0,i.kt)("li",{parentName:"ul"},"Development"),(0,i.kt)("li",{parentName:"ul"},"ARM"),(0,i.kt)("li",{parentName:"ul"},"Embedding K8s"),(0,i.kt)("li",{parentName:"ul"},"Situations where a PhD in K8s clusterology is infeasible")),(0,i.kt)("h1",{id:"what-is-k3s"},"What is K3s?"),(0,i.kt)("p",null,"K3s is a fully compliant Kubernetes distribution with the following enhancements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Packaged as a single binary."),(0,i.kt)("li",{parentName:"ul"},"Lightweight storage backend based on sqlite3 as the default storage mechanism. etcd3, MySQL, Postgres also still available."),(0,i.kt)("li",{parentName:"ul"},"Wrapped in simple launcher that handles a lot of the complexity of TLS and options."),(0,i.kt)("li",{parentName:"ul"},"Secure by default with reasonable defaults for lightweight environments."),(0,i.kt)("li",{parentName:"ul"},'Simple but powerful "batteries-included" features have been added, such as: a local storage provider, a service load balancer, a Helm controller, and the Traefik ingress controller.'),(0,i.kt)("li",{parentName:"ul"},"Operation of all Kubernetes control plane components is encapsulated in a single binary and process. This allows K3s to automate and manage complex cluster operations like distributing certificates."),(0,i.kt)("li",{parentName:"ul"},"External dependencies have been minimized (just a modern kernel and cgroup mounts needed). K3s packages the required dependencies, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"containerd"),(0,i.kt)("li",{parentName:"ul"},"Flannel"),(0,i.kt)("li",{parentName:"ul"},"CoreDNS"),(0,i.kt)("li",{parentName:"ul"},"CNI"),(0,i.kt)("li",{parentName:"ul"},"Host utilities (iptables, socat, etc)"),(0,i.kt)("li",{parentName:"ul"},"Ingress controller (traefik)"),(0,i.kt)("li",{parentName:"ul"},"Embedded service loadbalancer"),(0,i.kt)("li",{parentName:"ul"},"Embedded network policy controller")))),(0,i.kt)("h1",{id:"whats-with-the-name"},"What's with the name?"),(0,i.kt)("p",null,"We wanted an installation of Kubernetes that was half the size in terms of memory footprint. Kubernetes is a 10-letter word stylized as K8s. So something half as big as Kubernetes would be a 5-letter word stylized as K3s. There is no long form of K3s and no official pronunciation."))}m.isMDXComponent=!0}}]);