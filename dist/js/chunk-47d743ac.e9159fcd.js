(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47d743ac"],{"501d":function(t,n,e){"use strict";e("b968")},"7c7a":function(t,n,e){"use strict";e.r(n);var a,r,c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center",attrs:{id:"buttons"}},[e("div",[e("chart",{attrs:{"chart-data":t.chartData}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading_graphic,expression:"loading_graphic"}],staticClass:"h3 text-info"},[t._v("Data loading ...")])],1),e("div",{staticClass:"h5 mt-4"},[t._v("Last big(>1000 tons) Surf transactions")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading_table,expression:"loading_table"}],staticClass:"h5 text-info"},[t._v("Data loading ...")]),e("b-table",{attrs:{striped:"",hover:"",items:t.items}})],1)},s=[],o=e("1da1"),i=(e("96cf"),e("1fca")),u=i["c"].reactiveProp,l={extends:i["a"],mixins:[u],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontSize:25}}}}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.renderChart(t.chartData,t.options);case 1:case"end":return n.stop()}}),n)})))()}},d=l,f=e("2877"),h=Object(f["a"])(d,a,r,!1,null,null,null),p=h.exports,g=e("d3ba"),b={data:function(){return{chartData:null,loading_graphic:!0,loading_table:!0}},components:{chart:p},mounted:function(){var t=this;Object(g["surfTransactionsVolumes"])().then((function(n){t.chartData=n,t.loading_graphic=!1})),Object(g["lastBiggestSurfTransactions"])().then((function(n){t.items=n,t.loading_table=!1}))}},v=b,m=(e("501d"),Object(f["a"])(v,c,s,!1,null,"a8e4cad8",null));n["default"]=m.exports},b968:function(t,n,e){},bbac:function(t,n,e){"use strict";function a(t,n,e){const a=e||".";let c;{let n;switch(typeof t){case"string":if(t.length<("-"===t[0]?5:4))return t;c=t,n=Number("."!==a?c.replace(a,"."):c);break;case"number":c=String(t),n=t,"."===a||Number.isInteger(t)||(c=c.replace(".",a));break;default:return t}if(-1e3<n&&n<1e3||isNaN(n)||!isFinite(n))return c}{const t=c.lastIndexOf(a);let e;t>-1&&(e=c.slice(t),c=c.slice(0,t));const s=r(c,n||",");return e&&s.push(e),s.join("")}}function r(t,n){let e=(t.length-1)%3+1;1===e&&"-"===t[0]&&(e=4);const a=[t.slice(0,e)];for(;e<t.length;e+=3)a.push(n,t.substr(e,3));return a}function c(t,n){return function(e){return a(e,t,n)}}t.exports=a,t.exports.bindWith=c},d3ba:function(t,n,e){var a=e("278c").default,r=e("c973").default;e("96cf"),e("99af"),e("4fad"),e("ac1f"),e("1276"),e("d81d");var c=e("0dff"),s=c.client,o=e("f62d"),i=e("bbac");function u(){for(var t="{",n=14;n>=0;n--){var e=o.now-n*o.oneDay,a=e-o.oneDay;t+="\n            data_".concat(e,": aggregateTransactions(\n                filter: {      \n                now: { gt: ").concat(a," lt: ").concat(e,'}\n                balance_delta:{                    \n                    gt: "0"                    \n                }\n                account:{\n                code_hash:{\n                    eq: "').concat(o.surfCodeHash,'"\n                }\n                }\n                }\n                fields: [{ field: "balance_delta", fn: SUM }]\n            )\n          ')}return t+="}",t}var l=function(){var t=r(regeneratorRuntime.mark((function t(){var n,e,r,c,i,l,d,f,h,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],e=[],t.prev=2,t.next=5,s.net.query({query:u()});case 5:for(r=t.sent.result.data,c=0,i=Object.entries(r);c<i.length;c++)l=a(i[c],2),d=l[0],f=l[1],n.push(f[0]/o.oneTon),h=d.split("_")[1],p=new Date(1e3*h).toLocaleDateString("ru-RU"),e.push(p);return t.abrupt("return",{datasets:[{label:"Surf transactions volumes",backgroundColor:"lightblue",data:n}],labels:e});case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=r(regeneratorRuntime.mark((function t(){var n,e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=o.now,e=n-3*o.oneDay,a="\n    query {\n        transactions(\n          filter: {\n            now: { gt: ".concat(e,", lt: ").concat(n,' }\n            balance_delta: { gt: "1000000000000" }\n            account: {\n              code_hash: {\n                eq: "207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82"\n              }\n            }\n          }\n          orderBy: { path: "now", direction: DESC }\n        ) {\n          id\n          balance_delta(format: DEC)\n          now_string\n          account_addr\n        }\n      }   \n      '),t.prev=3,t.next=6,s.net.query({query:a});case 6:return r=t.sent.result.data.transactions,t.abrupt("return",r.map((function(t){return{"Transactions ID":t.id,"Account address":t.account_addr,Time:t.now_string,Tokens:"".concat(i(Math.round(t.balance_delta/1e9))," TONs")}})));case 10:t.prev=10,t.t0=t["catch"](3),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(){return t.apply(this,arguments)}}();t.exports={surfTransactionsVolumes:l,lastBiggestSurfTransactions:d}}}]);
//# sourceMappingURL=chunk-47d743ac.e9159fcd.js.map