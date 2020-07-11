require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(165);
/** Created by guangqiang on 2018-09-18 15:39:31 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7402c076_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(172);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(166)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7402c076"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7402c076_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/couponList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7402c076", Component.options)
  } else {
    hotAPI.reload("data-v-7402c076", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 166:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sep_line__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(171);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      couponList: []
    };
  },

  computed: {},
  components: {
    sepLine: __WEBPACK_IMPORTED_MODULE_0__components_sep_line__["a" /* default */]
  },
  methods: {
    expiredClick: function expiredClick() {
      wx.navigateTo({ url: '/pages/expiredCoupon/main' });
    },
    itemClick: function itemClick() {
      wx.navigateTo({ url: '/pages/shoppingCart/main' });
    }
  },
  mounted: function mounted() {
    this.couponList = __WEBPACK_IMPORTED_MODULE_1__data__["a" /* couponList */].data.poi_coupon_info_list;
  }
});

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return couponList; });
var couponList = {
	"data": {
		"page_index": 0,
		"poi_coupon_info_list": [{
			"valid": false,
			"poicoupon_view_id": "syAPBsPPPvyOk&source=wKid=OkPPOkPBt",
			"status": 1,
			"valid_day": 8,
			"code": "",
			"type": 1,
			"poi_id": 959825,
			"mutex_type": 1,
			"poi_url": "http://p1.meituan.net/waimaipoi/30759016da283ca9a103d83624cf26f340960.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "烧烤吧（龙虾）",
			"use_rule": "不可与满减、折扣商品、第二份半价活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.10.01",
			"use_condition": "",
			"money": 35.0,
			"category_type": 0,
			"price_limit": "满65可用",
			"deadline": 1538409599
		}, {
			"valid": false,
			"poicoupon_view_id": "syAPBsPPPvywK&source=wKid=OkPPOkPBt",
			"status": 1,
			"valid_day": 8,
			"code": "",
			"type": 1,
			"poi_id": 5319356,
			"mutex_type": 1,
			"poi_url": "http://p0.meituan.net/waimaipoi/62f2afcb9bdf34e38fe183017995a307303008.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "串意十足烧烤店（古方路店）",
			"use_rule": "不可与满减、折扣商品、第二份半价活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.10.01",
			"use_condition": "",
			"money": 31.0,
			"category_type": 0,
			"price_limit": "满48可用",
			"deadline": 1538409599
		}, {
			"valid": false,
			"poicoupon_view_id": "stsvayAsPvyts&source=wKid=OkPBBvvyt",
			"status": 1,
			"valid_day": 3,
			"code": "",
			"type": 1,
			"poi_id": 1602339,
			"mutex_type": 1,
			"poi_url": "http://p1.meituan.net/waimaipoi/172eb82855c13261baf78a056db93adc304216.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "席师傅特色麻辣香锅",
			"use_rule": "不可与满减、折扣商品、第二份半价活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.09.26",
			"use_condition": "",
			"money": 28.0,
			"category_type": 0,
			"price_limit": "满45可用",
			"deadline": 1537977599
		}, {
			"valid": false,
			"poicoupon_view_id": "swKPPyAPPtsva&source=wKid=OkPBBvvyt",
			"status": 1,
			"valid_day": 3,
			"code": "",
			"type": 1,
			"poi_id": 5204575,
			"mutex_type": 1,
			"poi_url": "http://p1.meituan.net/business/4895902007cf8cad1e04d27d3f77d89f54971.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "九阿婆黄金猪排饭（漕河泾店）",
			"use_rule": "不可与满减、折扣商品、第二份半价活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.09.26",
			"use_condition": "",
			"money": 26.0,
			"category_type": 0,
			"price_limit": "满30可用",
			"deadline": 1537977599
		}, {
			"valid": false,
			"poicoupon_view_id": "yBvvaOkyABvsP&source=wKid=OkPBBvwKv",
			"status": 1,
			"valid_day": 26,
			"code": "",
			"type": 1,
			"poi_id": 5631136,
			"mutex_type": 2,
			"poi_url": "http://p0.meituan.net/waimaipoi/c4ea604406e519bd53156313bf267c99100224.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "夜曲成人用品",
			"use_rule": "可与其他活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.10.19",
			"use_condition": "",
			"money": 15.0,
			"category_type": 0,
			"price_limit": "满100可用",
			"deadline": 1539964799
		}, {
			"valid": false,
			"poicoupon_view_id": "PvyvaBvtsyAwK&source=wKid=OkPBvasPP",
			"status": 1,
			"valid_day": 7,
			"code": "",
			"type": 1,
			"poi_id": 4756335,
			"mutex_type": 2,
			"poi_url": "http://p1.meituan.net/waimaipoi/8f5a14a02bc26f9d7ea9fb6395ae108c4017.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "乐凯撒比萨（爱琴海购物公园店）",
			"use_rule": "可与其他活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.09.30",
			"use_condition": "",
			"money": 9.0,
			"category_type": 0,
			"price_limit": "满90可用",
			"deadline": 1538323199
		}, {
			"valid": false,
			"poicoupon_view_id": "PPBvyyAtsOkwK&source=wKid=OkPBvatss",
			"status": 1,
			"valid_day": 3,
			"code": "",
			"type": 1,
			"poi_id": 4208203,
			"mutex_type": 2,
			"poi_url": "http://p0.meituan.net/waimaipoi/eec7c57c9497d61b02a886f0b8229ec3239616.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "重庆鸡公煲（漕宝店）",
			"use_rule": "可与其他活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.09.26",
			"use_condition": "",
			"money": 5.0,
			"category_type": 0,
			"price_limit": "满56可用",
			"deadline": 1537977599
		}, {
			"valid": false,
			"poicoupon_view_id": "kOkBvBvvyOkwK&source=wKid=OkPBwKsPO",
			"status": 1,
			"valid_day": 23,
			"code": "",
			"type": 1,
			"poi_id": 2145959,
			"mutex_type": 2,
			"poi_url": "http://p1.meituan.net/waimaipoi/28cbe8190b93878db45cf126c5711eea40960.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "华城果业",
			"use_rule": "可与其他活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.10.16",
			"use_condition": "",
			"money": 3.0,
			"category_type": 0,
			"price_limit": "满48可用",
			"deadline": 1539705599
		}, {
			"valid": false,
			"poicoupon_view_id": "vPBPBwKPPBvOk&source=wKid=OkPBOkPPB",
			"status": 1,
			"valid_day": 24,
			"code": "",
			"type": 1,
			"poi_id": 5439052,
			"mutex_type": 2,
			"poi_url": "http://p1.meituan.net/waimaipoi/339aeb47a0bff9d6ae6910309deb9aa811035.jpg",
			"info": "",
			"id": -11,
			"disable_descriptions": [],
			"title": "三米粥铺（东兰店）",
			"use_rule": "可与其他活动优惠同时享受。在线支付专享。",
			"scheme": "",
			"valid_time_desc": "有效期至2018.10.17",
			"use_condition": "",
			"money": 3.0,
			"category_type": 0,
			"price_limit": "满39可用",
			"deadline": 1539791999
		}],
		"show_coupon_token": 0,
		"has_more": 0,
		"coupon_token_url": "",
		"coupon_token_text": "去领券"
	},
	"code": 0,
	"msg": "成功"
};



/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "list-c"
  }, _vm._l((_vm.couponList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.itemClick
      }
    }, [_c('div', {
      staticClass: "item-t"
    }, [_c('img', {
      staticClass: "top-l",
      attrs: {
        "src": item.poi_url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "top-m"
    }, [_c('span', {
      staticClass: "s-t"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('span', {
      staticClass: "s-m"
    }, [_vm._v("互斥券")]), _vm._v(" "), _c('span', {
      staticClass: "s-b"
    }, [_vm._v(_vm._s(item.valid_time_desc))])]), _vm._v(" "), _c('div', {
      staticClass: "top-r"
    }, [_c('span', {
      staticClass: "s-t"
    }, [_vm._v("￥"), _c('span', [_vm._v(_vm._s(item.money))])]), _vm._v(" "), _c('span', {
      staticClass: "s-b"
    }, [_vm._v(_vm._s(item.price_limit))])])]), _vm._v(" "), _c('div', {
      staticClass: "item-m"
    }, [_c('sep-line', {
      attrs: {
        "mpcomid": '0-' + index
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "item-b"
    }, [_c('span', {
      staticClass: "b-l"
    }, [_vm._v(_vm._s(item.use_rule))]), _vm._v(" "), _c('div', {
      staticClass: "b-r"
    }, [_c('span', [_vm._v("去使用")]), _vm._v(" "), _c('i', {
      staticClass: "icon mt-arrow-right-o"
    })], 1)])])
  })), _vm._v(" "), _c('div', {
    staticClass: "bottom",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.expiredClick
    }
  }, [_c('span', {
    staticClass: "s-l"
  }, [_vm._v("没有更多商家代金券了")]), _vm._v(" "), _c('span', {
    staticClass: "s-m"
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    staticClass: "s-r"
  }, [_vm._v("查看过期券")]), _vm._v(" "), _c('span', {
    staticClass: "s-arrow"
  }, [_vm._v(">>")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7402c076", esExports)
  }
}

/***/ })

},[164]);
//# sourceMappingURL=main.js.map