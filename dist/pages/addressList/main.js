require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([13],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(138);
/** Created by guangqiang on 2018-09-18 16:43:20 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_714c8447_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(142);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-714c8447"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_714c8447_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/addressList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-714c8447", Component.options)
  } else {
    hotAPI.reload("data-v-714c8447", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(141);
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
      itemList: []
    };
  },

  methods: {
    addClick: function addClick() {
      wx.navigateTo({ url: '/pages/addAddress/main' });
    }
  },
  mounted: function mounted() {
    this.itemList = __WEBPACK_IMPORTED_MODULE_0__data__["a" /* addressList */].data;
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addressList; });
var addressList = {
	"data": [{
		"phone": "15214313256",
		"can_not_shipping_type": 0,
		"category_icon": "",
		"gd_addr_type": "",
		"is_default": 0,
		"address_range_tip": "",
		"editable": 1,
		"bind_type": 11,
		"id": 935908631,
		"category": 0,
		"house_number": "2楼，外卖科技",
		"can_shipping": 1,
		"address": "上海科技绿洲B区18号楼",
		"name": "刘光强",
		"gender": "先生",
		"longitude": 121385976,
		"latitude": 31164474,
		"address_type": 0
	}, {
		"phone": "15214313256",
		"can_not_shipping_type": 0,
		"category_icon": "http://p1.meituan.net/aichequan/459e21821938f624d4b340e6444831f71644.png",
		"gd_addr_type": "",
		"is_default": 0,
		"address_range_tip": "",
		"editable": 1,
		"bind_type": 15,
		"id": 1225134045,
		"category": 1,
		"house_number": "18号楼888号",
		"can_shipping": 1,
		"address": "九星苑",
		"name": "刘先生",
		"gender": "先生",
		"longitude": 121381110,
		"latitude": 31150280,
		"address_type": 0
	}, {
		"phone": "15214313256",
		"can_not_shipping_type": 0,
		"category_icon": "",
		"gd_addr_type": "",
		"is_default": 0,
		"address_range_tip": "",
		"editable": 1,
		"bind_type": 11,
		"id": 684933800,
		"category": 0,
		"house_number": "401",
		"can_shipping": 1,
		"address": "广中西路911弄51号",
		"name": "光强",
		"gender": "先生",
		"longitude": 121437016,
		"latitude": 31278644,
		"address_type": 0
	}, {
		"phone": "15214313256",
		"can_not_shipping_type": 0,
		"category_icon": "",
		"gd_addr_type": "",
		"is_default": 0,
		"address_range_tip": "",
		"editable": 1,
		"bind_type": 11,
		"id": 716687722,
		"category": 0,
		"house_number": "1111号，111栋",
		"can_shipping": 1,
		"address": "沪太路1067弄11号",
		"name": "光强",
		"gender": "先生",
		"longitude": 121427128,
		"latitude": 31277978,
		"address_type": 0
	}],
	"code": 0,
	"msg": "成功"
};



/***/ }),

/***/ 142:
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
      staticClass: "i-l"
    }, [_c('span', {
      staticClass: "address"
    }, [_vm._v(_vm._s(item.address) + " " + _vm._s(item.house_number))]), _vm._v(" "), _c('div', {
      staticClass: "user-info"
    }, [_c('span', {
      staticClass: "s-l"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "s-m"
    }, [_vm._v(_vm._s(item.gender))]), _vm._v(" "), _c('span', {
      staticClass: "s-r"
    }, [_vm._v(_vm._s(item.phone))])])]), _vm._v(" "), _c('i', {
      staticClass: "icon mt-edit-o"
    })], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "add-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.addClick
    }
  }, [_c('i', {
    staticClass: "icon mt-add-o"
  }), _vm._v(" "), _c('span', [_vm._v("新增收货地址")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-714c8447", esExports)
  }
}

/***/ })

},[137]);
//# sourceMappingURL=main.js.map