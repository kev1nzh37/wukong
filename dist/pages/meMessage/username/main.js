require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([20],{

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(229);
/** Created by guangqiang on 2018-09-18 10:13:17 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4d89a612_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(232);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(230)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d89a612"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4d89a612_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/meMessage/username/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d89a612", Component.options)
  } else {
    hotAPI.reload("data-v-4d89a612", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 231:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      list: [{
        title: "头像",
        url: ""
      }, {
        title: "用户名",
        url: "",
        value: "陈呆呆"
      }, {
        title: "账号密码",
        url: "",
        value: "修改"
      }, {
        title: "性别",
        url: "",
        value: "未选择"
      }, {
        title: "手机号",
        url: "",
        value: "+66 185****5420"
      }, {
        title: "微信",
        url: "",
        value: "解绑"
      }, {
        title: "Apple ID",
        url: "",
        value: "绑定"
      }, {
        title: "Facebook",
        url: "",
        value: "绑定"
      }, {
        title: "Google",
        url: "",
        value: "绑定"
      }]
    };
  },

  computed: {},
  methods: {
    goDetail: function goDetail() {
      wx.navigateTo({ url: "/pages/meMessage/main" });
    }
  }
});

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "cell-box"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: item.title,
      staticClass: "cell"
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v("\n        " + _vm._s(item.title) + "\n      ")]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [(item.title == '头像') ? _c('img', {
      staticClass: "avatar",
      attrs: {
        "src": "/static/user/avatar.png",
        "alt": ""
      }
    }) : _vm._e(), _vm._v(" "), (item.title != '头像') ? _c('span', {
      staticClass: "value"
    }, [_vm._v(_vm._s(item.value))]) : _vm._e(), _vm._v(" "), _c('van-icon', {
      staticStyle: {
        "margin-left": "12rpx"
      },
      attrs: {
        "name": "arrow",
        "color": "rgba(216, 216, 216)",
        "mpcomid": '0-' + index
      }
    })], 1)])
  })), _vm._v(" "), _c('div', {
    staticClass: "logout"
  }, [_vm._v("\n    退出当前账号\n  ")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4d89a612", esExports)
  }
}

/***/ })

},[228]);
//# sourceMappingURL=main.js.map