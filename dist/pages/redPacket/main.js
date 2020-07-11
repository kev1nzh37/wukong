require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(270);
/** Created by guangqiang on 2018-09-18 11:05:33 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8411f064_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(274);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(271)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8411f064"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8411f064_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/redPacket/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8411f064", Component.options)
  } else {
    hotAPI.reload("data-v-8411f064", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 271:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sep_line__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__(273);
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
      itemList: [1, 2, 3, 4]
    };
  },

  computed: {},
  components: {
    sepLine: __WEBPACK_IMPORTED_MODULE_0__components_sep_line__["a" /* default */]
  },
  methods: {
    expiredClick: function expiredClick() {
      wx.navigateTo({ url: '/pages/expiredRedPacket/main' });
    }
  },
  mounted: function mounted() {
    this.itemList = __WEBPACK_IMPORTED_MODULE_1__data__["a" /* redPacket */].data.coupon_list;
  }
});

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return redPacket; });
var redPacket = {
	"data": {
		"show_steal_entry": 0,
		"page_size": 20,
		"vp_entrance": {
			"text": "",
			"bg_url": "",
			"sub_text": "",
			"link": "",
			"buy_status": 0,
			"icon_url": "",
			"show": false
		},
		"page_index": 0,
		"coupon_total_num": 4,
		"has_more": 0,
		"coupon_list": [{
			"coupon_sign": "",
			"status": 1,
			"shipping_type": 0,
			"coupon_id": -11,
			"coupon_key": "",
			"coupon_type": 1,
			"steal_status": 0,
			"poi_exchanged_coupon": 0,
			"poi_id": 0,
			"amount": 6.0,
			"id": -11,
			"disable_descriptions": [],
			"title": "通用红包",
			"use_limits": "限非到店自取订单使用。限登录和收餐手机号为15214313256使用。",
			"valid_time_desc": "有效期至2018.09.25",
			"coupon_view_id": "syAPBsPPPvyPP&source=tsid=OkPPOkPBt",
			"is_premium_type": false,
			"category_type": 0,
			"price_limit": "满34可用",
			"logo_url": ""
		}, {
			"coupon_sign": "",
			"status": 1,
			"shipping_type": 0,
			"coupon_id": -11,
			"coupon_key": "",
			"coupon_type": 1,
			"steal_status": 0,
			"poi_exchanged_coupon": 0,
			"poi_id": 0,
			"amount": 6.0,
			"id": -11,
			"disable_descriptions": [],
			"title": "狂欢月专属红包",
			"use_limits": "限仅限外卖狂欢月部分指定商户可用，微信小程序，非到店自取订单使用。限登录和收餐手机号为15214313256使用。",
			"valid_time_desc": "有效期至2018.09.25",
			"coupon_view_id": "PtsPBPPtsBvBv&source=tsid=OkPPwKvyP",
			"is_premium_type": false,
			"category_type": 0,
			"price_limit": "满30可用",
			"logo_url": ""
		}, {
			"coupon_sign": "",
			"status": 1,
			"shipping_type": 0,
			"coupon_id": -11,
			"coupon_key": "",
			"coupon_type": 1,
			"steal_status": 0,
			"poi_exchanged_coupon": 0,
			"poi_id": 0,
			"amount": 6.0,
			"id": -11,
			"disable_descriptions": [],
			"title": "狂欢月专属红包",
			"use_limits": "限仅限外卖狂欢月部分指定商户可用，微信小程序，非到店自取订单使用。限登录和收餐手机号为15214313256使用。",
			"valid_time_desc": "有效期至2018.09.24",
			"coupon_view_id": "yOkPPvavyPBsP&source=tsid=OkPPwKtsv",
			"is_premium_type": false,
			"category_type": 0,
			"price_limit": "满30可用",
			"logo_url": ""
		}, {
			"coupon_sign": "",
			"status": 1,
			"shipping_type": 0,
			"coupon_id": -11,
			"coupon_key": "",
			"coupon_type": 1,
			"steal_status": 0,
			"poi_exchanged_coupon": 0,
			"poi_id": 0,
			"amount": 6.0,
			"id": -11,
			"disable_descriptions": [],
			"title": "到店自取专享红包",
			"use_limits": "限到店自取订单使用。限登录和收餐手机号为15214313256使用。",
			"valid_time_desc": "有效期至2018.09.27",
			"coupon_view_id": "PwKvavaPPyABv&source=tsid=OkPBsPsPP",
			"is_premium_type": false,
			"category_type": 0,
			"price_limit": "满30可用",
			"logo_url": ""
		}]
	},
	"code": 0,
	"msg": "成功"
};



/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "list-c"
  }, _vm._l((_vm.itemList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "item-t"
    }, [_c('div', {
      staticClass: "t-l"
    }, [_c('span', {
      staticClass: "s-t"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('span', {
      staticClass: "s-b"
    }, [_vm._v(_vm._s(item.valid_time_desc))])]), _vm._v(" "), _c('div', {
      staticClass: "t-r"
    }, [_c('span', {
      staticClass: "s-t"
    }, [_vm._v("￥"), _c('span', [_vm._v(_vm._s(item.amount))])]), _vm._v(" "), _c('span', {
      staticClass: "s-b"
    }, [_vm._v(_vm._s(item.price_limit))])])]), _vm._v(" "), _c('div', {
      staticClass: "item-m"
    }, [_c('sep-line', {
      attrs: {
        "mpcomid": '0-' + index
      }
    })], 1), _vm._v(" "), _c('span', {
      staticClass: "item-b"
    }, [_vm._v(_vm._s(item.use_limits))])])
  })), _vm._v(" "), _c('div', {
    staticClass: "bottom",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.expiredClick
    }
  }, [_c('span', {
    staticClass: "s-l"
  }, [_vm._v("没有更多有效券了")]), _vm._v(" "), _c('span', {
    staticClass: "s-m"
  }, [_vm._v("|")]), _vm._v(" "), _c('span', {
    staticClass: "s-r"
  }, [_vm._v("查看无效券")]), _vm._v(" "), _c('span', {
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
     require("vue-hot-reload-api").rerender("data-v-8411f064", esExports)
  }
}

/***/ })

},[269]);
//# sourceMappingURL=main.js.map