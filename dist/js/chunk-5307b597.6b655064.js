(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5307b597"],{"6c8f":function(t,e,n){"use strict";n.r(e);var a,r,c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center",attrs:{id:"buttons"}},[n("div",[n("chart",{attrs:{"chart-data":t.chartData}})],1),n("div",[n("span",{staticClass:"btn btn-info",on:{click:t.fmin}},[t._v(" 15 min ")]),n("span",{staticClass:"btn btn-info",on:{click:t.fhour}},[t._v(" 1 hour ")])])])},s=[],i=n("1da1"),o=(n("96cf"),n("1fca")),u=o["e"].reactiveProp,f={extends:o["c"],mixins:[u],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontSize:25}}}}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.renderChart(t.chartData,t.options);case 1:case"end":return e.stop()}}),e)})))()}},h=f,l=n("2877"),p=Object(l["a"])(h,a,r,!1,null,null,null),d=p.exports,m={data:function(){return{chartData:{}}},components:{chart:d},methods:{fmin:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchBlocksData",15);case 2:t.chartData=t.$store.getters.getDataBlocks;case 3:case"end":return e.stop()}}),e)})))()},fhour:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchBlocksData",60);case 2:t.chartData=t.$store.getters.getDataBlocks;case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.$store.dispatch("fetchBlocksData",15).then((function(){t.chartData=t.$store.getters.getDataBlocks}))}},v=m,b=(n("99ef"),Object(l["a"])(v,c,s,!1,null,"3a2db234",null));e["default"]=b.exports},"99ef":function(t,e,n){"use strict";n("efe8")},efe8:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5307b597.6b655064.js.map