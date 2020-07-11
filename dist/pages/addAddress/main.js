require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([30],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(133);
/** Created by guangqiang on 2018-09-18 17:04:59 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47ad6b34_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47ad6b34"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_47ad6b34_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/addAddress/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47ad6b34", Component.options)
  } else {
    hotAPI.reload("data-v-47ad6b34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
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

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "address"
  }, [_c('span', {
    staticClass: "l"
  }, [_vm._v("收货地址：")]), _vm._v(" "), _c('div', {
    staticClass: "m"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/location.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("点击选择")])]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/right.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_c('span', [_vm._v("联系人：")]), _vm._v(" "), _c('input', {
    attrs: {
      "placeholder": "请填写收货人的姓名",
      "placeholder-style": "font-size:28rpx;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(153,153,153,1);",
      "auto-focus": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "sex"
  }, [_c('div', {
    staticClass: "l"
  }), _vm._v(" "), _c('div', {
    staticClass: "m"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/selection2.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("先生")])]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/selection1.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("女士")])])]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_c('span', [_vm._v("手机号：")]), _vm._v(" "), _c('input', {
    attrs: {
      "placeholder": "请填写收货人手机号码",
      "placeholder-style": "font-size:28rpx;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(153,153,153,1);",
      "auto-focus": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "house-num"
  }, [_c('span', [_vm._v("门牌号：")]), _vm._v(" "), _c('input', {
    attrs: {
      "placeholder": "【详细地址，例1层101室】",
      "placeholder-style": "font-size:28rpx;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(153,153,153,1);",
      "auto-focus": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "submit"
  }, [_c('span', [_vm._v("保存地址")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47ad6b34", esExports)
  }
}

/***/ })

},[132]);
//# sourceMappingURL=main.js.map