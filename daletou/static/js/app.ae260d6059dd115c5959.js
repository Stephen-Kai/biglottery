webpackJsonp([1],{NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=r("VU/8")({name:"App"},u,!1,function(t){r("Pe99")},null,null).exports,i=r("/ocq"),s={name:"ytLottery",data:function(){return{redNumMax:35,redNumSize:5,redNumArr:[],blueNumMax:12,blueNumSize:2,blueNumArr:[]}},mounted:function(){},computed:{},methods:{getRandom:function(t){return Math.floor(Math.random()*t)+1},createNumArr:function(t,e,r){for(t.splice(0,t.length);t.length<e;){var n=this.getRandom(r);-1===t.indexOf(n)&&t.push(n)}return this.sortNum(t)},createRedNumArr:function(){this.createNumArr(this.redNumArr,this.redNumSize,this.redNumMax)},createBlueNumArr:function(){this.createNumArr(this.blueNumArr,this.blueNumSize,this.blueNumMax)},sortNum:function(t){for(var e=0;e<t.length;e++)for(var r=1;r<t.length-e;r++)if(t[e]>t[e+r]){var n=t[e];t[e]=t[e+r],t[e+r]=n}return t},testRandom:function(){this.createRedNumArr(),this.createBlueNumArr(),console.log(this.redNumArr)}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"yt-lottery"},[r("el-button",{on:{click:t.testRandom}},[t._v("生成彩票号码")]),t._v(" "),t.redNumArr.length?r("div",[r("br"),t._v(" "),r("table",{staticStyle:{"border-spacing":"0"},attrs:{border:"1",align:"center"}},[t._m(0),t._v(" "),r("tr",[r("td",{staticStyle:{padding:"5px 10px"}},t._l(t.redNumArr,function(e,n){return r("span",{key:e,staticClass:"lottery-ball",staticStyle:{color:"red"},style:{"margin-left":0===n?"0":""}},[t._v("\n            "+t._s(e)+"\n          ")])}),0),t._v(" "),r("td",t._l(t.blueNumArr,function(e,n){return r("span",{key:e,staticClass:"lottery-ball",staticStyle:{color:"blue"},style:{"margin-left":0===n?"0":""}},[t._v("\n            "+t._s(e)+"\n          ")])}),0)])])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("红区号码")]),this._v(" "),e("th",{staticStyle:{padding:"5px 10px"}},[this._v("蓝区号码")])])}]};var o=r("VU/8")(s,l,!1,function(t){r("ZCU/")},"data-v-6a7b45a0",null).exports;n.default.use(i.a);var c=new i.a({routes:[{path:"/",name:"daletou",component:o}]}),d=r("zL8q"),m=r.n(d);r("tvR6");n.default.config.productionTip=!1,n.default.use(m.a),new n.default({el:"#app",router:c,components:{App:a},template:"<App/>"})},Pe99:function(t,e){},"ZCU/":function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ae260d6059dd115c5959.js.map