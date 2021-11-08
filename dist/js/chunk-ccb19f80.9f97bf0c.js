(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccb19f80"],{"79f7":function(e,n,t){var a=t("c973").default;t("96cf"),t("99af");var r=t("0dff"),o=r.AggregationFn,c=r.client,s=t("bbac"),l=t("f62d"),u=function(){var e=a(regeneratorRuntime.mark((function e(){var n,t,a,r,u,i,d,f,b,p,h,g,v,M,w,y,C,O;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={type:"QueryCollection",collection:"accounts",filter:{code_hash:{eq:"d80dd077e56dd76af65b163b6da94cca9d2c8e62740d09d98f9a4459ac069958"}},result:"balance(format:DEC)"},t={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:o.SUM}],filter:{code_hash:{in:[l.depoolCodeHash,l.electorCodeHash]}}},a={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:o.SUM}],filter:{id:{in:["-1:7777777777777777777777777777777777777777777777777777777777777777","-1:8888888888888888888888888888888888888888888888888888888888888888","-1:9999999999999999999999999999999999999999999999999999999999999999"]}}},r={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:o.SUM}]},e.next=6,c.net.query({query:'        \n            {aggregateAccounts(\n            filter:{      \n              acc_type: {\n                ne: 1\n              }              \n            }\n            fields:[\n              {field: "balance", fn: SUM}\n            ]\n          )}\n        '});case 6:return u=e.sent.result.data.aggregateAccounts[0],i=[n,t,a,r],e.prev=8,e.next=11,c.net.batch_query({operations:i});case 11:return d=e.sent,f=Math.round(d.results[0][0].balance/l.oneTon),b=Math.round(d.results[1][0]/l.oneTon),p=Math.round(d.results[2][0]/l.oneTon),h=Math.round(d.results[3][0]/l.oneTon),g=Math.round(u/l.oneTon),v=h-p-b-f-g,M=Math.round(f/h*100),w=Math.round(b/h*100),y=Math.round(p/h*100),C=Math.round(v/h*100),O=Math.round(g/h*100),e.abrupt("return",{assets:[f,b,p,v,g],labels:["BURNING: ".concat(s(f)," TON (").concat(M,")%"),"DEPOOLS: ".concat(s(b)," TON (").concat(w,")%"),"GIVERS: ".concat(s(p)," TON (").concat(y,")%"),"FREE CIRCULATION: ".concat(s(v)," TON (").concat(C,")%"),"LOST TONS: ".concat(s(g)," TON (").concat(O,")%")]});case 26:e.prev=26,e.t0=e["catch"](8),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[8,26]])})));return function(){return e.apply(this,arguments)}}();e.exports={depoolsGiversUsers:u}},"99fb":function(e,n,t){"use strict";t.r(n);var a,r,o=t("1da1"),c=(t("96cf"),t("1fca")),s=t("79f7"),l={extends:c["c"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"All assets",fontSize:25,fontStyle:"normal"}}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["depoolsGiversUsers"])();case 2:t=n.sent,e.renderChart({labels:t.labels,datasets:[{label:"All assets in EverScale: Depools, Givers, Burned Free circulation",backgroundColor:["#e25822","green","blue","pink","black"],data:t.assets}]},e.options);case 4:case"end":return n.stop()}}),n)})))()}},u=l,i=t("2877"),d=Object(i["a"])(u,a,r,!1,null,null,null);n["default"]=d.exports},bbac:function(e,n,t){"use strict";function a(e,n,t){const a=t||".";let o;{let n;switch(typeof e){case"string":if(e.length<("-"===e[0]?5:4))return e;o=e,n=Number("."!==a?o.replace(a,"."):o);break;case"number":o=String(e),n=e,"."===a||Number.isInteger(e)||(o=o.replace(".",a));break;default:return e}if(-1e3<n&&n<1e3||isNaN(n)||!isFinite(n))return o}{const e=o.lastIndexOf(a);let t;e>-1&&(t=o.slice(e),o=o.slice(0,e));const c=r(o,n||",");return t&&c.push(t),c.join("")}}function r(e,n){let t=(e.length-1)%3+1;1===t&&"-"===e[0]&&(t=4);const a=[e.slice(0,t)];for(;t<e.length;t+=3)a.push(n,e.substr(t,3));return a}function o(e,n){return function(t){return a(t,e,n)}}e.exports=a,e.exports.bindWith=o},f62d:function(e,n){var t=1e9,a=86400,r=7*a,o=Math.round(30.5*a),c="207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82",s="14e20e304f53e6da152eb95fffc993dbd28245a775d847eed043f7c78a503885",l="e48892fa8be43954a2923d668ff9e8d68931c82d8dc80be1c8848b8ae8fe366a",u=Math.round(Date.now()/1e3);e.exports={oneTon:t,oneDay:a,oneWeek:r,oneMonth:o,surfCodeHash:c,depoolCodeHash:s,electorCodeHash:l,now:u}}}]);
//# sourceMappingURL=chunk-ccb19f80.9f97bf0c.js.map