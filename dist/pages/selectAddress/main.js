require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(287);
/** Created by guangqiang on 2018-09-19 10:21:37 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26de1aed_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(291);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(288)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26de1aed"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26de1aed_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/selectAddress/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26de1aed", Component.options)
  } else {
    hotAPI.reload("data-v-26de1aed", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 288:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(290);
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
      cityData: {},
      myAddress: [],
      nearbyAddress: []
    };
  },

  methods: {
    addAddress: function addAddress() {
      wx.navigateTo({ url: '/pages/addAddress/main' });
    }
  },
  mounted: function mounted() {
    this.cityData = __WEBPACK_IMPORTED_MODULE_0__data__["a" /* addressData */].cityData.data;
    this.myAddress = __WEBPACK_IMPORTED_MODULE_0__data__["a" /* addressData */].myAddress.data;
    this.nearbyAddress = __WEBPACK_IMPORTED_MODULE_0__data__["a" /* addressData */].nearbyAddress.data.mapPoiVo;
  }
});

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addressData; });
var addressData = {
  cityData: {
    "data": {
      "result": "上海市"
    },
    "code": 0,
    "msg": "成功"
  },
  myAddress: {
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
  },
  nearbyAddress: {
    "data": {
      "mapPoiVo": [{
        "distance": 0.0,
        "location": "121.38111,31.15028",
        "address": "上海市闵行区东兰路1349弄",
        "wm_latitude": 31150280,
        "name": "九星苑",
        "type": "生活服务;小区",
        "wm_longitude": 121381110
      }, {
        "distance": 0.0,
        "location": "121.38175,31.1491",
        "address": "上海市闵行区龙茗路1597弄",
        "wm_latitude": 31149100,
        "name": "东兰·世茗雅苑",
        "type": "生活服务;小区",
        "wm_longitude": 121381750
      }, {
        "distance": 0.0,
        "location": "121.38156,31.15169",
        "address": "上海市闵行区龙茗路1597弄",
        "wm_latitude": 31151690,
        "name": "东兰雅苑",
        "type": "生活服务;小区",
        "wm_longitude": 121381560
      }, {
        "distance": 0.0,
        "location": "121.38289,31.15189",
        "address": "上海市闵行区古美路",
        "wm_latitude": 31151890,
        "name": "欧风新天地",
        "type": "生活服务;小区",
        "wm_longitude": 121382890
      }, {
        "distance": 0.0,
        "location": "121.37997,31.15555",
        "address": "上海市闵行区龙茗路2121弄1-35号",
        "wm_latitude": 31155550,
        "name": "金汇豪庭",
        "type": "生活服务;小区",
        "wm_longitude": 121379970
      }, {
        "distance": 0.0,
        "location": "121.3575,31.14975",
        "address": "上海市闵行区七宝",
        "wm_latitude": 31149750,
        "name": "七宝",
        "type": "",
        "wm_longitude": 121357500
      }, {
        "distance": 0.0,
        "location": "121.38302,31.15118",
        "address": "上海市闵行区龙茗路1650号(靠近复旦儿科医院)",
        "wm_latitude": 31151180,
        "name": "莫泰168(九星店)",
        "type": "酒店;二星级及以下/经济",
        "wm_longitude": 121383020
      }, {
        "distance": 0.0,
        "location": "121.38269,31.15208",
        "address": "上海市闵行区龙茗路1662号3楼",
        "wm_latitude": 31152080,
        "name": "99旅馆连锁(龙茗路店)",
        "type": "酒店;二星级及以下/经济",
        "wm_longitude": 121382690
      }, {
        "distance": 0.0,
        "location": "121.38573,31.15151",
        "address": "上海市闵行区东兰路1111弄",
        "wm_latitude": 31151510,
        "name": "欧风花都",
        "type": "生活服务;小区",
        "wm_longitude": 121385730
      }, {
        "distance": 0.0,
        "location": "121.38149,31.1542",
        "address": "上海市闵行区龙茗路1891",
        "wm_latitude": 31154200,
        "name": "和润家园",
        "type": "生活服务;小区",
        "wm_longitude": 121381490
      }],
      "count": 1988
    },
    "code": 0,
    "msg": "成功"
  }
};



/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header-c"
  }, [_c('div', {
    staticClass: "header-l"
  }, [_c('img', {
    staticClass: "location",
    attrs: {
      "src": "/static/img/location.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.cityData.result))]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-down-o",
    style: ({
      color: '#434343',
      'font-size': 28 + 'rpx'
    })
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "header-r"
  }, [_c('div', {
    staticClass: "search-bar"
  }, [_c('img', {
    staticClass: "search-icon",
    attrs: {
      "src": "/static/img/search.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "placeholder": "请输入收货地址",
      "placeholder-style": "margin-left:8rpx;font-size:28rpx;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(153,153,153,1);",
      "eventid": '0'
    },
    on: {
      "input": _vm.search
    }
  }), _vm._v(" "), (_vm.keyword) ? _c('div', {
    staticClass: "cancle",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.cancle
    }
  }, [_c('i', {
    staticClass: "icon qb-icon-cancle-o"
  })], 1) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "location-c"
  }, [_c('span', {
    staticClass: "c-l"
  }, [_vm._v("上海市闵行区漕河泾开发区")]), _vm._v(" "), _c('div', {
    staticClass: "c-r"
  }, [_c('i', {
    staticClass: "icon mt-relocation-o"
  }), _vm._v(" "), _c('span', [_vm._v("重新定位")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "my-address"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "list-c"
  }, _vm._l((_vm.myAddress), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('span', {
      staticClass: "i-t"
    }, [_vm._v(_vm._s(item.address))]), _vm._v(" "), _c('div', {
      staticClass: "i-b"
    }, [_c('span', {
      staticClass: "b-l"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "b-m"
    }, [_vm._v(_vm._s(item.gender))]), _vm._v(" "), _c('span', {
      staticClass: "b-r"
    }, [_vm._v(_vm._s(item.phone))])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('span', [_vm._v("展开全部4个地址")]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-down-o"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "nearby-address"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "list-c"
  }, _vm._l((_vm.nearbyAddress), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('span', [_vm._v(_vm._s(item.name))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "footer-c",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.addAddress
    }
  }, [_c('i', {
    staticClass: "icon mt-add-o"
  }), _vm._v(" "), _c('span', [_vm._v("新增收货地址")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "home-icon",
    attrs: {
      "src": "/static/img/home.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("我的收获地址")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "location",
    attrs: {
      "src": "/static/img/location.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("附近地址")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26de1aed", esExports)
  }
}

/***/ })

},[286]);
//# sourceMappingURL=main.js.map