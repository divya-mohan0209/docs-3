"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[792],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||r;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"How to Use Flags and Environment Variables",weight:3},s=void 0,c={unversionedId:"installation/install-options/how-to-flags",id:"installation/install-options/how-to-flags",title:"How to Use Flags and Environment Variables",description:"Throughout the K3s documentation, you will see some options that can be passed in as both command flags and environment variables. The below examples show how these options can be passed in both ways.",source:"@site/docs/installation/install-options/how-to-flags.md",sourceDirName:"installation/install-options",slug:"/installation/install-options/how-to-flags",permalink:"/installation/install-options/how-to-flags",draft:!1,editUrl:"https://github.com/k3s-io/k3s/docs/edit/main/docs/installation/install-options/how-to-flags.md",tags:[],version:"current",lastUpdatedAt:1657219035,formattedLastUpdatedAt:"7/7/2022",frontMatter:{title:"How to Use Flags and Environment Variables",weight:3},sidebar:"mySidebar",previous:{title:"K3s Agent Configuration Reference",permalink:"/installation/install-options/agent-config"},next:{title:"Network Options",permalink:"/installation/network-options"}},p={},u=[{value:"Example A: K3S_KUBECONFIG_MODE",id:"example-a-k3s_kubeconfig_mode",level:3},{value:"Example B: INSTALL_K3S_EXEC",id:"example-b-install_k3s_exec",level:3},{value:"Example C: CONFIG FILE",id:"example-c-config-file",level:3}],f={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Throughout the K3s documentation, you will see some options that can be passed in as both command flags and environment variables. The below examples show how these options can be passed in both ways."),(0,r.kt)("h3",{id:"example-a-k3s_kubeconfig_mode"},"Example A: K3S_KUBECONFIG_MODE"),(0,r.kt)("p",null,"The option to allow writing to the kubeconfig file is useful for allowing a K3s cluster to be imported into Rancher. Below are two ways to pass in the option."),(0,r.kt)("p",null,"Using the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--write-kubeconfig-mode 644"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -sfL https://get.k3s.io | sh -s - --write-kubeconfig-mode 644\n")),(0,r.kt)("p",null,"Using the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"K3S_KUBECONFIG_MODE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" sh -s -\n')),(0,r.kt)("h3",{id:"example-b-install_k3s_exec"},"Example B: INSTALL_K3S_EXEC"),(0,r.kt)("p",null,'If this command is not specified as a server or agent command, it will default to "agent" if ',(0,r.kt)("inlineCode",{parentName:"p"},"K3S_URL"),' is set, or "server" if it is not set.'),(0,r.kt)("p",null,"The final systemd command resolves to a combination of this environment variable and script args. To illustrate this, the following commands result in the same behavior of registering a server without flannel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-backend none" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --flannel-backend none" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none\ncurl -sfL https://get.k3s.io | sh -s - server --flannel-backend none\ncurl -sfL https://get.k3s.io | sh -s - --flannel-backend none\n')),(0,r.kt)("h3",{id:"example-c-config-file"},"Example C: CONFIG FILE"),(0,r.kt)("p",null,"Before installing k3s, you can create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," containing fields that match CLI flags. That file needs to be in the path: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml")," for k3s to consume it."),(0,r.kt)("p",null,"The fields in the config file drop the starting ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," from the matching CLI flag. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'write-kubeconfig-mode: 644\ntoken: "secret"\nnode-ip: 10.0.10.22,2a05:d012:c6f:4655:d73c:c825:a184:1b75 \ncluster-cidr: 10.42.0.0/16,2001:cafe:42:0::/56\nservice-cidr: 10.43.0.0/16,2001:cafe:42:1::/112\n')))}m.isMDXComponent=!0}}]);