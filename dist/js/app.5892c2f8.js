(function(e){function t(t){for(var r,a,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-355d107d":"6191218e","chunk-49790558":"5c9b9a16","chunk-5dbe3274":"73ef4211","chunk-72091c70":"1cdeb8b2","chunk-ccb19f80":"3c244e44","chunk-f6aded58":"4735201e","chunk-351414f3":"eb034a72","chunk-7cfeef06":"48a8d2a7"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-49790558":1,"chunk-5dbe3274":1,"chunk-351414f3":1,"chunk-7cfeef06":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-355d107d":"31d6cfe0","chunk-49790558":"247548b7","chunk-5dbe3274":"ca6ca238","chunk-72091c70":"31d6cfe0","chunk-ccb19f80":"31d6cfe0","chunk-f6aded58":"31d6cfe0","chunk-351414f3":"65f6ce69","chunk-7cfeef06":"b2d5fc21"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0dff":function(e,t,n){var r=n("5e5b"),a=r.TonClient,o=r.AggregationFn,c=n("866c"),s=c.libWeb,u=c.libWebSetup;u({binaryURL:"./tonclient.wasm"}),a.useBinaryLibrary(s);var i=new a({network:{server_address:"main.ton.dev"}});e.exports={AggregationFn:o,client:i}},"50a8":function(e,t,n){var r=n("c973").default;n("96cf"),n("99af"),n("fb6a"),n("d81d");var a=n("0dff"),o=a.AggregationFn,c=a.client,s=function(){var e=r(regeneratorRuntime.mark((function e(){var t,n,r,a,s,u,i,l,f=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t=f.length>0&&void 0!==f[0]?f[0]:15,n=[],r=[],a=Math.round(Date.now()/1e3)-60,s=0;s<10;s++)u=a,a=u-60*t,i=new Date(1e3*u),r.push("".concat(("0"+i.getHours()).slice(-2),":").concat(("0"+i.getMinutes()).slice(-2))),n.push({type:"AggregateCollection",collection:"blocks",fields:[{field:"",fn:o.COUNT}],filter:{gen_utime:{gt:a,lt:u}}});return e.prev=5,e.next=8,c.net.batch_query({operations:n});case 8:return l=e.sent,e.abrupt("return",{bps:l.results.map((function(e){return Math.floor(e[0]/(60*t)*100)/100})).reverse(),labels:r.reverse()});case 12:e.prev=12,e.t0=e["catch"](5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();e.exports={netBlocks:s}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"mb-5",attrs:{id:"nav"}},[n("div",{staticClass:"navbar-brand"},[e._v("MainNet")]),n("router-link",{attrs:{to:"/accounts"}},[e._v("Surf accounts")]),n("router-link",{attrs:{to:"/blocks"}},[e._v("Blocks")]),n("router-link",{attrs:{to:"/transactions"}},[e._v("Transactions")]),n("router-link",{attrs:{to:"/DepoolsGiversUsers"}},[e._v("Depools, Givers, Free Circulation")]),n("router-link",{attrs:{to:"/surfTransactionsVolumes"}},[e._v("Surf transactions volumes")]),n("router-link",{attrs:{to:"/spentTokensFromGivers"}},[e._v("Spent tokens from givers")])],1),n("router-view")],1)},o=[],c=(n("034f"),n("2877")),s={},u=Object(c["a"])(s,a,o,!1,null,null,null),i=u.exports,l=n("2f62"),f=n("1da1"),d=(n("96cf"),n("50a8")),p={state:{dataBlocks:null},actions:{fetchBlocksData:function(e){var t=arguments;return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.length>1&&void 0!==t[1]?t[1]:15,n.next=4,Object(d["netBlocks"])(a);case 4:o=n.sent,r("setDataBlocks",o);case 6:case"end":return n.stop()}}),n)})))()}},mutations:{setDataBlocks:function(e,t){e.dataBlocks={labels:t.labels,datasets:[{label:"Average blocks in second",backgroundColor:"#f87979",data:t.bps}]}}},getters:{getDataBlocks:function(e){return e.dataBlocks}}},h=n("ec78"),v={state:{dataTransactions:null},actions:{fetchTransactionsData:function(e){var t=arguments;return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.length>1&&void 0!==t[1]?t[1]:15,n.next=4,Object(h["netTransactions"])(a);case 4:o=n.sent,r("setDataTransactions",o);case 6:case"end":return n.stop()}}),n)})))()}},mutations:{setDataTransactions:function(e,t){e.dataTransactions={labels:t.labels,datasets:[{label:"Average transactons in the minute",backgroundColor:"gray",data:t.tpm}]}}},getters:{getDataTransactions:function(e){return e.dataTransactions}}};r["default"].use(l["a"]);var m=new l["a"].Store({actions:{},mutations:{},getters:{},modules:{blocks:p,transactions:v}}),b=n("5f5b"),g=n("8c4f");n("f9e3"),n("2dd8"),n("d3b7"),n("3ca3"),n("ddb0");r["default"].use(g["a"]);var k=[{path:"/accounts",name:"Accounts",component:function(){return Promise.all([n.e("chunk-355d107d"),n.e("chunk-72091c70")]).then(n.bind(null,"5971"))}},{path:"/blocks",name:"Blocks",component:function(){return Promise.all([n.e("chunk-355d107d"),n.e("chunk-5dbe3274")]).then(n.bind(null,"6c8f"))}},{path:"/transactions",name:"Transactions",component:function(){return Promise.all([n.e("chunk-355d107d"),n.e("chunk-49790558")]).then(n.bind(null,"8810"))}},{path:"/DepoolsGiversUsers",name:"DepoolsGiversUsers",component:function(){return Promise.all([n.e("chunk-355d107d"),n.e("chunk-ccb19f80")]).then(n.bind(null,"99fb"))}},{path:"/surfTransactionsVolumes",name:"surfTransactionsVolumes",component:function(){return Promise.all([n.e("chunk-355d107d"),n.e("chunk-f6aded58"),n.e("chunk-351414f3")]).then(n.bind(null,"7c7a"))}},{path:"/spentTokensFromGivers",name:"spentTokensFromGivers",component:function(){return Promise.all([n.e("chunk-355d107d"),n.e("chunk-f6aded58"),n.e("chunk-7cfeef06")]).then(n.bind(null,"3618"))}}],w=new g["a"]({routes:k}),y=w;r["default"].use(b["a"]),r["default"].config.productionTip=!1,r["default"].use(g["a"]),new r["default"]({store:m,router:y,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){},ec78:function(e,t,n){var r=n("c973").default;n("96cf"),n("fb6a"),n("d81d");var a=n("0dff"),o=a.AggregationFn,c=a.client,s=function(){var e=r(regeneratorRuntime.mark((function e(){var t,n,r,a,s,u,i,l,f=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(t=f.length>0&&void 0!==f[0]?f[0]:15,n=[],r=[],a=Math.round(Date.now()/1e3)-60,s=0;s<10;s++)u=a,a=u-60*t,i=new Date(1e3*u),r.push(("0"+i.getHours()).slice(-2)+":"+("0"+i.getMinutes()).slice(-2)),n.push({type:"AggregateCollection",collection:"messages",fields:[{field:"",fn:o.COUNT}],filter:{value:{ne:null},created_at:{lt:u,gt:a}}});return e.prev=5,e.next=8,c.net.batch_query({operations:n});case 8:return l=e.sent,e.abrupt("return",{tpm:l.results.map((function(e){return e[0]/t})).reverse(),labels:r.reverse()});case 12:e.prev=12,e.t0=e["catch"](5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}();e.exports={netTransactions:s}}});
//# sourceMappingURL=app.5892c2f8.js.map