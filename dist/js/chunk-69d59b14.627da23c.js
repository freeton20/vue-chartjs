(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69d59b14"],{1276:function(t,n,e){"use strict";var r=e("2ba4"),a=e("c65b"),i=e("e330"),o=e("d784"),c=e("44e7"),u=e("825a"),s=e("1d80"),l=e("4840"),f=e("8aa5"),d=e("50c4"),p=e("577e"),v=e("dc4a"),h=e("4dae"),b=e("14c3"),g=e("9263"),x=e("9f7f"),m=e("d039"),w=x.UNSUPPORTED_Y,y=4294967295,_=Math.min,k=[].push,R=i(/./.exec),j=i(k),E=i("".slice),T=!m((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));o("split",(function(t,n,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=p(s(this)),o=void 0===e?y:e>>>0;if(0===o)return[];if(void 0===t)return[i];if(!c(t))return a(n,i,t,o);var u,l,f,d=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,x=new RegExp(t.source,v+"g");while(u=a(g,x,i)){if(l=x.lastIndex,l>b&&(j(d,E(i,b,u.index)),u.length>1&&u.index<i.length&&r(k,d,h(u,1)),f=u[0].length,b=l,d.length>=o))break;x.lastIndex===u.index&&x.lastIndex++}return b===i.length?!f&&R(x,"")||j(d,""):j(d,E(i,b)),d.length>o?h(d,0,o):d}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:a(n,this,t,e)}:n,[function(n,e){var r=s(this),o=void 0==n?void 0:v(n,t);return o?a(o,n,r,e):a(i,p(r),n,e)},function(t,r){var a=u(this),o=p(t),c=e(i,a,o,r,i!==n);if(c.done)return c.value;var s=l(a,RegExp),v=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(w?"g":"y"),g=new s(w?"^(?:"+a.source+")":a,h),x=void 0===r?y:r>>>0;if(0===x)return[];if(0===o.length)return null===b(g,o)?[o]:[];var m=0,k=0,R=[];while(k<o.length){g.lastIndex=w?0:k;var T,D=b(g,w?E(o,k):o);if(null===D||(T=_(d(g.lastIndex+(w?k:0)),o.length))===m)k=f(o,k,v);else{if(j(R,E(o,m,k)),R.length===x)return R;for(var S=1;S<=D.length-1;S++)if(j(R,D[S]),R.length===x)return R;k=m=T}}return j(R,E(o,m)),R}]}),!T,w)},"14c3":function(t,n,e){var r=e("da84"),a=e("c65b"),i=e("825a"),o=e("1626"),c=e("c6b6"),u=e("9263"),s=r.TypeError;t.exports=function(t,n){var e=t.exec;if(o(e)){var r=a(e,t,n);return null!==r&&i(r),r}if("RegExp"===c(t))return a(u,t,n);throw s("RegExp#exec called on incompatible receiver")}},"25c8":function(t,n,e){var r=e("278c").default,a=e("c973").default;e("96cf"),e("99af"),e("a15b"),e("d81d"),e("4fad"),e("ac1f"),e("1276");var i=e("0dff"),o=i.client,c=e("f62d"),u=e("bbac");function s(){for(var t="{",n=12;n>=0;n--){var e=c.now-n*c.oneMonth,r=e-c.oneMonth;t+="\n        data_".concat(e,": aggregateTransactions(\n            filter: {\n              account_addr: {\n                in:[\n                  ").concat(c.givers.map((function(t){return'"'.concat(t,'"')})).join(","),"\n                ] \n              }\n              now: { gt: ").concat(r," lt: ").concat(e,'}\n            }\n            fields: [{ field: "balance_delta", fn: SUM }]\n          )            \n          ')}return t+="}",t}var l=function(){var t=a(regeneratorRuntime.mark((function t(){var n,e,a,i,u,l,f,d,p,v;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],e=[],t.prev=2,t.next=5,o.net.query({query:s()});case 5:for(a=t.sent.result.data,i=0,u=Object.entries(a);i<u.length;i++)l=r(u[i],2),f=l[0],d=l[1],n.push(-1*d[0]/c.oneTon),p=f.split("_")[1],v=new Date(1e3*p).toLocaleDateString("ru-RU"),e.push(v);return t.abrupt("return",{datasets:[{label:"Spent tokens from Givers",backgroundColor:c.getRandomColor(),data:n}],labels:e});case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=a(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="\n    query {\n        transactions(\n          filter: {\n            account_addr: {\n              in: [\n                ".concat(c.givers.map((function(t){return'"'.concat(t,'"')})).join(","),'\n              ]\n            }\n            balance_delta: { lt: "-100000000000" }   \n            \n          } \n          orderBy:{\n            path: "now"\n            direction: DESC\n          }\n        ) {\n          id\n          balance_delta(format: DEC)\n          account_addr\n          now_string\n        }\n      }\n      '),t.prev=1,t.next=4,o.net.query({query:n});case 4:return e=t.sent.result.data.transactions,t.abrupt("return",e.map((function(t){return{"Transaction ID":t.id,Giver:t.account_addr,Time:t.now_string,Tokens:u(Math.round(-1*t.balance_delta/1e9))}})));case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();t.exports={spentTokensFromGivers:l,lastTransactionsFromGivers:f}},"278c":function(t,n,e){var r=e("c135"),a=e("9b42"),i=e("6613"),o=e("c240");function c(t,n){return r(t)||a(t,n)||i(t,n)||o()}t.exports=c,t.exports.__esModule=!0,t.exports["default"]=t.exports},"30a2":function(t,n,e){"use strict";e("b665")},3618:function(t,n,e){"use strict";e.r(n);var r,a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center",attrs:{id:"buttons"}},[e("div",[e("chart",{attrs:{"chart-data":t.chartData}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"h5 text-info"},[t._v("Data loading ...")])],1),e("div",[e("div",{staticClass:"h5 mt-4"},[t._v("Last transactions from Givers")]),e("b-table",{attrs:{striped:"",hover:"",items:t.items}})],1)])},o=[],c=e("1da1"),u=(e("96cf"),e("1fca")),s=u["e"].reactiveProp,l={extends:u["a"],mixins:[s],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontSize:25}}}}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.renderChart(t.chartData,t.options);case 1:case"end":return n.stop()}}),n)})))()}},f=l,d=e("2877"),p=Object(d["a"])(f,r,a,!1,null,null,null),v=p.exports,h=e("25c8"),b={data:function(){return{chartData:{},loading:!0,items:[]}},components:{chart:v},mounted:function(){var t=this;Object(h["spentTokensFromGivers"])().then((function(n){t.chartData=n,t.loading=!1})),Object(h["lastTransactionsFromGivers"])().then((function(n){t.items=n}))}},g=b,x=(e("30a2"),Object(d["a"])(g,i,o,!1,null,"e42c6d6e",null));n["default"]=x.exports},"44e7":function(t,n,e){var r=e("861d"),a=e("c6b6"),i=e("b622"),o=i("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==a(t))}},"4fad":function(t,n,e){var r=e("23e7"),a=e("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return a(t)}})},"8aa5":function(t,n,e){"use strict";var r=e("6547").charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},"9b42":function(t,n,e){function r(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,a,i=[],o=!0,c=!1;try{for(e=e.call(t);!(o=(r=e.next()).done);o=!0)if(i.push(r.value),n&&i.length===n)break}catch(u){c=!0,a=u}finally{try{o||null==e["return"]||e["return"]()}finally{if(c)throw a}}return i}}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},a15b:function(t,n,e){"use strict";var r=e("23e7"),a=e("e330"),i=e("44ad"),o=e("fc6a"),c=e("a640"),u=a([].join),s=i!=Object,l=c("join",",");r({target:"Array",proto:!0,forced:s||!l},{join:function(t){return u(o(this),void 0===t?",":t)}})},b665:function(t,n,e){},bbac:function(t,n,e){"use strict";function r(t,n,e){const r=e||".";let i;{let n;switch(typeof t){case"string":if(t.length<("-"===t[0]?5:4))return t;i=t,n=Number("."!==r?i.replace(r,"."):i);break;case"number":i=String(t),n=t,"."===r||Number.isInteger(t)||(i=i.replace(".",r));break;default:return t}if(-1e3<n&&n<1e3||isNaN(n)||!isFinite(n))return i}{const t=i.lastIndexOf(r);let e;t>-1&&(e=i.slice(t),i=i.slice(0,t));const o=a(i,n||",");return e&&o.push(e),o.join("")}}function a(t,n){let e=(t.length-1)%3+1;1===e&&"-"===t[0]&&(e=4);const r=[t.slice(0,e)];for(;e<t.length;e+=3)r.push(n,t.substr(e,3));return r}function i(t,n){return function(e){return r(e,t,n)}}t.exports=r,t.exports.bindWith=i},c135:function(t,n){function e(t){if(Array.isArray(t))return t}t.exports=e,t.exports.__esModule=!0,t.exports["default"]=t.exports},c240:function(t,n,e){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e("d9e2"),t.exports=r,t.exports.__esModule=!0,t.exports["default"]=t.exports},d784:function(t,n,e){"use strict";e("ac1f");var r=e("e330"),a=e("6eeb"),i=e("9263"),o=e("d039"),c=e("b622"),u=e("9112"),s=c("species"),l=RegExp.prototype;t.exports=function(t,n,e,f){var d=c(t),p=!o((function(){var n={};return n[d]=function(){return 7},7!=""[t](n)})),v=p&&!o((function(){var n=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[s]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return n=!0,null},e[d](""),!n}));if(!p||!v||e){var h=r(/./[d]),b=n(d,""[t],(function(t,n,e,a,o){var c=r(t),u=n.exec;return u===i||u===l.exec?p&&!o?{done:!0,value:h(n,e,a)}:{done:!0,value:c(e,n,a)}:{done:!1}}));a(String.prototype,t,b[0]),a(l,d,b[1])}f&&u(l[d],"sham",!0)}}}]);
//# sourceMappingURL=chunk-69d59b14.627da23c.js.map