require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([22],{

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(234);
/** Created by guangqiang on 2018-09-18 10:13:17 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_38f14879_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(237);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(235)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-38f14879"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_38f14879_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/me/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38f14879", Component.options)
  } else {
    hotAPI.reload("data-v-38f14879", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 235:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      itemList: [{
        title: "美团红包",
        icon: "mt-red-packet-o",
        path: "/pages/redPacket/main",
        amount: 4
      }, {
        title: "商家代金券",
        icon: "mt-coupon-o",
        path: "/pages/couponList/main",
        amount: 10
      }, {
        title: "我的地址",
        icon: "mt-my-location-o",
        path: "/pages/addressList/main"
      }, {
        title: "邀请有奖",
        icon: "mt-gift-o"
      }, {
        title: "客服中心",
        icon: "mt-customer-service-o"
      }, {
        title: "帮助和反馈",
        icon: "mt-help-o",
        path: "/pages/feedback/main"
      }, {
        title: "协议和说明",
        icon: "mt-protocol-o",
        path: "/pages/protocol/main"
      }]
    };
  },

  computed: {},
  methods: {
    goDetail: function goDetail() {
      wx.navigateTo({ url: "/pages/meMessage/main" });
    },
    go: function go(url) {
      wx.navigateTo({ url: url });
    }
  }
});

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "top"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "top-right"
  }, [_c('img', {
    staticStyle: {
      "margin-right": "25rpx"
    },
    attrs: {
      "src": "/static/user/pic2.png",
      "alt": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.goDetail
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/user/pic1.png",
      "alt": "",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.go('/pages/notice/main')
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "dot"
  }, [_vm._v("1")])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top-left"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/avatar.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', [_vm._v("登录/注册")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n      我的资产\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "content-item"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic3.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("余额")])]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('span', [_vm._v("62.98")]), _vm._v("元")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic5.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("红包")])]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('span', [_vm._v("9")]), _vm._v("个未使用")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic4.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("优惠券")])]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('span', [_vm._v("19")]), _vm._v("张未使用")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item"
  }, [_c('div', {
    staticClass: "main"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic6.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("佣金")])]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_c('span', [_vm._v("1982")]), _vm._v("元")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n      我的资产\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content-2"
  }, [_c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    staticStyle: {
      "height": "44rpx",
      "width": "36rpx"
    },
    attrs: {
      "src": "/static/user/pic7.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("余额")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic8.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("收藏的店")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic9.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("邀请赚钱")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n      我的服务\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content-2"
  }, [_c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    staticStyle: {
      "height": "44rpx",
      "width": "36rpx"
    },
    attrs: {
      "src": "/static/user/pic15.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("我的积分")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic10.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("积分兑换")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic11.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("我要合作")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic12.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("联系客服")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n      更多推荐\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content-2"
  }, [_c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    staticStyle: {
      "height": "44rpx",
      "width": "36rpx"
    },
    attrs: {
      "src": "/static/user/pic13.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("关于我们")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic14.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("用户协议")])]), _vm._v(" "), _c('div', {
    staticClass: "content-item-2"
  }, [_c('img', {
    attrs: {
      "src": "/static/user/pic16.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("隐私政策")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-38f14879", esExports)
  }
}

/***/ })

},[233]);
//# sourceMappingURL=main.js.map