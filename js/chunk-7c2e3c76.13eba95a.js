(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c2e3c76"],{1148:function(e,t,n){"use strict";var r=n("a691"),a=n("577e"),o=n("1d80");e.exports=function(e){var t=a(o(this)),n="",c=r(e);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(t+=t))1&c&&(n+=t);return n}},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"79f7":function(e,t,n){var r=n("c973").default;n("96cf"),n("99af");var a=n("0dff"),o=a.AggregationFn,c=a.client,s=n("bbac"),i=n("f62d"),u=function(){var e=r(regeneratorRuntime.mark((function e(){var t,n,r,a,u,l,f,d,h,b,p,g,v,w,x,m,M,T;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={type:"QueryCollection",collection:"accounts",filter:{code_hash:{eq:"d80dd077e56dd76af65b163b6da94cca9d2c8e62740d09d98f9a4459ac069958"}},result:"balance(format:DEC)"},n={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:o.SUM}],filter:{code_hash:{in:[i.depoolCodeHash,i.electorCodeHash]}}},r={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:o.SUM}],filter:{id:{in:["-1:7777777777777777777777777777777777777777777777777777777777777777","-1:8888888888888888888888888888888888888888888888888888888888888888","-1:9999999999999999999999999999999999999999999999999999999999999999","0:fee1a3bd261619f036d83aafd8b34f47d794bbb58185379877291003f3a3526d"]}}},a={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:o.SUM}]},e.next=6,c.net.query({query:'        \n            {aggregateAccounts(\n            filter:{      \n              acc_type: {\n                ne: 1\n              }              \n            }\n            fields:[\n              {field: "balance", fn: SUM}\n            ]\n          )}\n        '});case 6:return u=e.sent.result.data.aggregateAccounts[0],l=[t,n,r,a],e.prev=8,e.next=11,c.net.batch_query({operations:l});case 11:return f=e.sent,d=Math.round(f.results[0][0].balance/i.oneTon),h=Math.round(f.results[1][0]/i.oneTon),b=Math.round(f.results[2][0]/i.oneTon),p=Math.round(f.results[3][0]/i.oneTon),g=Math.round(u/i.oneTon),v=p-b-h-d-g,w=Math.round(d/p*100),x=Math.round(h/p*100),m=Math.round(b/p*100),M=Math.round(v/p*100),T=Math.round(g/p*100),e.abrupt("return",{assets:[d,h,b,v,g],labels:["BURNING: ".concat(s(d)," TON (").concat(w,")%"),"DEPOOLS: ".concat(s(h)," TON (").concat(x,")%"),"GIVERS: ".concat(s(b)," TON (").concat(m,")%"),"FREE CIRCULATION: ".concat(s(v)," TON (").concat(M,")%"),"cold TONS: ".concat(s(g)," TON (").concat(T,")%")]});case 26:e.prev=26,e.t0=e["catch"](8),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[8,26]])})));return function(){return e.apply(this,arguments)}}();e.exports={depoolsGiversUsers:u}},b680:function(e,t,n){"use strict";var r=n("23e7"),a=n("a691"),o=n("408a"),c=n("1148"),s=n("d039"),i=1..toFixed,u=Math.floor,l=function(e,t,n){return 0===t?n:t%2===1?l(e,t-1,n*e):l(e*e,t/2,n)},f=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},d=function(e,t,n){var r=-1,a=n;while(++r<6)a+=t*e[r],e[r]=a%1e7,a=u(a/1e7)},h=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=u(r/t),r=r%t*1e7},b=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=String(e[t]);n=""===n?r:n+c.call("0",7-r.length)+r}return n},p=i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){i.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,n,r,s,i=o(this),u=a(e),p=[0,0,0,0,0,0],g="",v="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(g="-",i=-i),i>1e-21)if(t=f(i*l(2,69,1))-69,n=t<0?i*l(2,-t,1):i/l(2,t,1),n*=4503599627370496,t=52-t,t>0){d(p,0,n),r=u;while(r>=7)d(p,1e7,0),r-=7;d(p,l(10,r,1),0),r=t-1;while(r>=23)h(p,1<<23),r-=23;h(p,1<<r),d(p,1,1),h(p,2),v=b(p)}else d(p,0,n),d(p,1<<-t,0),v=b(p)+c.call("0",u);return u>0?(s=v.length,v=g+(s<=u?"0."+c.call("0",u-s)+v:v.slice(0,s-u)+"."+v.slice(s-u))):v=g+v,v}})},bbac:function(e,t,n){"use strict";function r(e,t,n){const r=n||".";let o;{let t;switch(typeof e){case"string":if(e.length<("-"===e[0]?5:4))return e;o=e,t=Number("."!==r?o.replace(r,"."):o);break;case"number":o=String(e),t=e,"."===r||Number.isInteger(e)||(o=o.replace(".",r));break;default:return e}if(-1e3<t&&t<1e3||isNaN(t)||!isFinite(t))return o}{const e=o.lastIndexOf(r);let n;e>-1&&(n=o.slice(e),o=o.slice(0,e));const c=a(o,t||",");return n&&c.push(n),c.join("")}}function a(e,t){let n=(e.length-1)%3+1;1===n&&"-"===e[0]&&(n=4);const r=[e.slice(0,n)];for(;n<e.length;n+=3)r.push(t,e.substr(n,3));return r}function o(e,t){return function(n){return r(n,e,t)}}e.exports=r,e.exports.bindWith=o},cabc:function(e,t,n){var r=n("c973").default;n("96cf"),n("99af");var a=n("79f7"),o=a.depoolsGiversUsers,c=n("bbac"),s=function(){var e=r(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return t=e.sent,n=t.assets[1]+t.assets[3],r=Math.round(t.assets[1]/n*100),a=Math.round(t.assets[3]/n*100),e.abrupt("return",{assets:[t.assets[1],t.assets[3]],labels:["DEPOOLS: ".concat(c(t.assets[1])," TON (").concat(r,")%"),"FREE CIRCULATION: ".concat(c(t.assets[3])," TON (").concat(a,")%")],TotalAssets:c(n)});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e.exports={depoolsFreeCirculationProportion:s}},f01d:function(e,t,n){"use strict";n.r(t);var r,a,o=n("1da1"),c=(n("96cf"),n("b680"),n("1fca")),s=n("cabc"),i={extends:c["a"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Depools vs. Free Circulation",fontSize:25,fontStyle:"normal"}}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["depoolsFreeCirculationProportion"])();case 2:n=t.sent,e.addPlugin({id:"Doughnut",beforeDraw:function(e){var t=e.chart.width,r=e.chart.height,a=e.chart.ctx;a.restore();var o=(r/314).toFixed(2);a.font=o+"em sans-serif",a.textBaseline="middle";var c=n.TotalAssets,s=Math.round((t-a.measureText(c).width)/2),i=r/1.65;a.fillText(c,s,i),a.save()}}),e.renderChart({labels:n.labels,datasets:[{label:"Depools vs. Free Circulation",backgroundColor:["blue","pink"],data:n.assets}]},e.options);case 5:case"end":return t.stop()}}),t)})))()}},u=i,l=n("2877"),f=Object(l["a"])(u,r,a,!1,null,null,null);t["default"]=f.exports},f62d:function(e,t){var n=1e9,r=86400,a=7*r,o=Math.round(30.5*r),c="207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82",s="14e20e304f53e6da152eb95fffc993dbd28245a775d847eed043f7c78a503885",i="e48892fa8be43954a2923d668ff9e8d68931c82d8dc80be1c8848b8ae8fe366a",u=Math.round(Date.now()/1e3);e.exports={oneTon:n,oneDay:r,oneWeek:a,oneMonth:o,surfCodeHash:c,depoolCodeHash:s,electorCodeHash:i,now:u}}}]);
//# sourceMappingURL=chunk-7c2e3c76.13eba95a.js.map