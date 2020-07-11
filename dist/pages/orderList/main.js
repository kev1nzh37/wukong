require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(254);
/** Created by guangqiang on 2018-09-17 23:39:29 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0cad80a1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(258);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(255)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0cad80a1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0cad80a1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/orderList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cad80a1", Component.options)
  } else {
    hotAPI.reload("data-v-0cad80a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 255:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(257);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      orderList: []
    };
  },

  methods: {
    headerClick: function headerClick() {
      wx.navigateTo({ url: '/pages/shoppingCart/main' });
    },
    orderDetail: function orderDetail() {
      wx.navigateTo({ url: '/pages/orderDetail/main' });
    }
  },
  mounted: function mounted() {
    this.orderList = __WEBPACK_IMPORTED_MODULE_0__data__["a" /* orderList */].data.digestlist;
  }
});

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderList; });
var orderList = {
	"data": {
		"bottom_tips": "仅显示最近一年的外卖订单",
		"category": 0,
		"cursor": "{\"apply_id\":0,\"order_time\":1533610759,\"vernier\":\"MjM1NTczODA1ODYwNzAwMTE0NTgwOTI3ODQwMDg0\"}",
		"digestlist": [{
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "44600551615567703",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31150280,
			"logistics_status": 40,
			"longitude": 121381110,
			"order_again_switch": 1,
			"order_id": 854804639907840,
			"order_source": 2,
			"order_time": 1536326359,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "正新汉堡·炸鸡（东兰餐厅店）",
			"poi_phone_list": [],
			"poi_pic": "http://p0.meituan.net/waimaipoi/6126e47d09268a4b0bc418488d693a9038058.jpg",
			"poi_source_id": 1,
			"product_count": 3,
			"product_kinds": 2,
			"product_list": [{
				"product_count": 2,
				"product_name": "可乐（大杯）"
			}, {
				"product_count": 1,
				"product_name": "香辣鸡腿堡"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=4460055&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 15.9,
			"wm_order_id": 44600551615567703,
			"wm_order_pay_type": 2,
			"wm_poi_id": 470871157426160,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "44600552920375920",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31150747,
			"logistics_status": 40,
			"longitude": 121380862,
			"order_again_switch": 1,
			"order_id": 847513632768000,
			"order_source": 2,
			"order_time": 1535875072,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "正新汉堡·炸鸡（东兰餐厅店）",
			"poi_phone_list": [],
			"poi_pic": "http://p0.meituan.net/waimaipoi/6126e47d09268a4b0bc418488d693a9038058.jpg",
			"poi_source_id": 1,
			"product_count": 2,
			"product_kinds": 2,
			"product_list": [{
				"product_count": 1,
				"product_name": "香辣鸡排（香辣味）"
			}, {
				"product_count": 1,
				"product_name": "香辣鸡腿堡"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=4460055&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 17.9,
			"wm_order_id": 44600552920375920,
			"wm_order_pay_type": 2,
			"wm_poi_id": 470871157426160,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "47457472128250758",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31164474,
			"logistics_status": 40,
			"longitude": 121385976,
			"order_again_switch": 1,
			"order_id": 830608168714240,
			"order_source": 2,
			"order_time": 1534906761,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "快乐湘食（古美路店）",
			"poi_phone_list": [],
			"poi_pic": "http://p0.meituan.net/waimaipoi/b0757487e74cc69960ea4f0dd3bd4e0e71114.jpg",
			"poi_source_id": 1,
			"product_count": 3,
			"product_kinds": 3,
			"product_list": [{
				"product_count": 1,
				"product_name": "木桶米饭必点，不送"
			}, {
				"product_count": 1,
				"product_name": "毛豆炒肉"
			}, {
				"product_count": 1,
				"product_name": "青椒炒蛋"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=4745747&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 19.76,
			"wm_order_id": 47457472128250758,
			"wm_order_pay_type": 2,
			"wm_poi_id": 427955844165527,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "39754494254315062",
			"is_comment": 1,
			"is_deletable": 1,
			"latitude": 31164474,
			"logistics_status": 40,
			"longitude": 121385976,
			"order_again_switch": 1,
			"order_id": 829109995503616,
			"order_source": 2,
			"order_time": 1534821300,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "来个椒麻鸡(莲花路店)",
			"poi_phone_list": [],
			"poi_pic": "http://p1.meituan.net/business/854cd1c3e4f6721efc942e7e2c0f9e71536399.jpg",
			"poi_source_id": 1,
			"product_count": 2,
			"product_kinds": 2,
			"product_list": [{
				"product_count": 1,
				"product_name": "椒麻鱼+饭"
			}, {
				"product_count": 1,
				"product_name": "★王老吉（不单点哦）"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=3975449&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 21.9,
			"wm_order_id": 39754494254315062,
			"wm_order_pay_type": 2,
			"wm_poi_id": 340862497334301,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "27177542836206219",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31164474,
			"logistics_status": 40,
			"longitude": 121385976,
			"order_again_switch": 1,
			"order_id": 827630691418112,
			"order_source": 2,
			"order_time": 1534734139,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "甬兴福大食堂（合川路店）",
			"poi_phone_list": [],
			"poi_pic": "http://p1.meituan.net/waimaipoi/c9147092d01f68c1b52a6049f8294ae1109356.jpg",
			"poi_source_id": 1,
			"product_count": 3,
			"product_kinds": 3,
			"product_list": [{
				"product_count": 1,
				"product_name": "白米饭"
			}, {
				"product_count": 1,
				"product_name": "千页豆腐"
			}, {
				"product_count": 1,
				"product_name": "毛豆子"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=2717754&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 15.0,
			"wm_order_id": 27177542836206219,
			"wm_order_pay_type": 2,
			"wm_poi_id": 523905413608714,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "27477003918346837",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31164474,
			"logistics_status": 40,
			"longitude": 121385976,
			"order_again_switch": 1,
			"order_id": 822954003791872,
			"order_source": 2,
			"order_time": 1534474519,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "浏阳蒸菜(宜山路店)",
			"poi_phone_list": [],
			"poi_pic": "http://p0.meituan.net/waimaipoi/ce00f4610a5ba2db5aebf4be1b60707874985.jpg",
			"poi_source_id": 1,
			"product_count": 3,
			"product_kinds": 3,
			"product_list": [{
				"product_count": 1,
				"product_name": "米饭（一个菜最多点两份米饭）点多不退，也不送"
			}, {
				"product_count": 1,
				"product_name": "西红柿炒鸡蛋"
			}, {
				"product_count": 1,
				"product_name": "毛豆炒肉"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=2747700&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 22.6,
			"wm_order_id": 27477003918346837,
			"wm_order_pay_type": 2,
			"wm_poi_id": 421942889953763,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "27477001324120534",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31163108,
			"logistics_status": 40,
			"longitude": 121385239,
			"order_again_switch": 1,
			"order_id": 821479275692032,
			"order_source": 2,
			"order_time": 1534388876,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "浏阳蒸菜(宜山路店)",
			"poi_phone_list": [],
			"poi_pic": "http://p0.meituan.net/waimaipoi/ce00f4610a5ba2db5aebf4be1b60707874985.jpg",
			"poi_source_id": 1,
			"product_count": 3,
			"product_kinds": 3,
			"product_list": [{
				"product_count": 1,
				"product_name": "米饭（一个菜最多点两份米饭）点多不退，也不送"
			}, {
				"product_count": 1,
				"product_name": "西红柿炒鸡蛋"
			}, {
				"product_count": 1,
				"product_name": "毛豆炒肉"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=2747700&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 20.6,
			"wm_order_id": 27477001324120534,
			"wm_order_pay_type": 2,
			"wm_poi_id": 421942889953763,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "27477003914004013",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31164474,
			"logistics_status": 40,
			"longitude": 121385976,
			"order_again_switch": 1,
			"order_id": 812601238421504,
			"order_source": 2,
			"order_time": 1533870047,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "浏阳蒸菜(宜山路店)",
			"poi_phone_list": [],
			"poi_pic": "http://p0.meituan.net/waimaipoi/ce00f4610a5ba2db5aebf4be1b60707874985.jpg",
			"poi_source_id": 1,
			"product_count": 3,
			"product_kinds": 3,
			"product_list": [{
				"product_count": 1,
				"product_name": "米饭（一个菜最多点两份米饭）点多不退，也不送"
			}, {
				"product_count": 1,
				"product_name": "西红柿炒鸡蛋"
			}, {
				"product_count": 1,
				"product_name": "毛豆炒肉"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=2747700&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 20.1,
			"wm_order_id": 27477003914004013,
			"wm_order_pay_type": 2,
			"wm_poi_id": 421942889953763,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "27477000301606035",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31165385,
			"logistics_status": 40,
			"longitude": 121388037,
			"order_again_switch": 1,
			"order_id": 809705074130944,
			"order_source": 2,
			"order_time": 1533697703,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "浏阳蒸菜(宜山路店)",
			"poi_phone_list": [],
			"poi_pic": "http://p0.meituan.net/waimaipoi/ce00f4610a5ba2db5aebf4be1b60707874985.jpg",
			"poi_source_id": 1,
			"product_count": 3,
			"product_kinds": 3,
			"product_list": [{
				"product_count": 1,
				"product_name": "米饭（一个菜最多点两份米饭）点多不退，也不送"
			}, {
				"product_count": 1,
				"product_name": "西红柿炒鸡蛋"
			}, {
				"product_count": 1,
				"product_name": "毛豆炒肉"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=2747700&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 21.6,
			"wm_order_id": 27477000301606035,
			"wm_order_pay_type": 2,
			"wm_poi_id": 421942889953763,
			"wm_poi_valid": 1
		}, {
			"app_delivery_tip": "由美团快送提供配送服务",
			"business_type": 0,
			"button_list": [{
				"click_url": "",
				"code": 1001,
				"highlight": 0,
				"priority": 60,
				"title": "再来一单"
			}],
			"comment": {
				"comment": "",
				"order_comment_score": 0,
				"praise_food_tip": "",
				"ship_score": 0,
				"ship_time": 0
			},
			"comment_status": 1,
			"estimate_arrival_time": 0,
			"has_status_bubble": 0,
			"hash_id": "27477001144172344",
			"is_comment": 0,
			"is_deletable": 1,
			"latitude": 31166419,
			"logistics_status": 40,
			"longitude": 121390363,
			"order_again_switch": 1,
			"order_id": 808205107658752,
			"order_source": 2,
			"order_time": 1533610759,
			"order_type": 0,
			"pay_status": 3,
			"plat_from": 0,
			"poi_extension_info": {
				"poi_label_info": [],
				"shipping_time_info": {
					"desc_content": "",
					"reservation_status": -1,
					"status_content": ""
				},
				"status": 0,
				"status_desc": ""
			},
			"poi_name": "浏阳蒸菜(宜山路店)",
			"poi_phone_list": [],
			"poi_pic": "http://p0.meituan.net/waimaipoi/ce00f4610a5ba2db5aebf4be1b60707874985.jpg",
			"poi_source_id": 1,
			"product_count": 3,
			"product_kinds": 3,
			"product_list": [{
				"product_count": 1,
				"product_name": "米饭（一个菜最多点两份米饭）点多不退，也不送"
			}, {
				"product_count": 1,
				"product_name": "西红柿炒鸡蛋"
			}, {
				"product_count": 1,
				"product_name": "毛豆炒肉"
			}],
			"remain_pay_time": 0,
			"scheme": "meituanwaimai://waimai.meituan.com/menu?restaurant_id=2747700&spu_id=0",
			"source_order_code": "",
			"status": 8,
			"status_description": "订单完成",
			"total": 21.6,
			"wm_order_id": 27477001144172344,
			"wm_order_pay_type": 2,
			"wm_poi_id": 421942889953763,
			"wm_poi_valid": 1
		}],
		"has_unread_comment_order": 0,
		"has_unread_refund_order": 0,
		"hasmore": 1,
		"list_types": [],
		"recent_eat": {
			"poi_count": 0,
			"poi_count_desc": "",
			"poi_list": [],
			"title": ""
		},
		"refund_count": 0,
		"type": 0,
		"uncomment_count": 0
	},
	"code": 0,
	"msg": "成功"
};



/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "list-c"
  }, _vm._l((_vm.orderList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "shop-info",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.headerClick
      }
    }, [_c('img', {
      attrs: {
        "src": item.poi_pic
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "shop-name"
    }, [_vm._v(_vm._s(item.poi_name))]), _vm._v(" "), _c('i', {
      staticClass: "icon mt-arrow-right-o"
    }), _vm._v(" "), _c('span', {
      staticClass: "order-status"
    }, [_vm._v(_vm._s(item.status_description))])], 1), _vm._v(" "), _c('div', {
      staticClass: "googs-c",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": _vm.orderDetail
      }
    }, _vm._l((item.product_list), function(itx, idx) {
      return _c('div', {
        key: idx,
        staticClass: "goods"
      }, [_c('span', {
        staticClass: "s-l"
      }, [_vm._v(_vm._s(itx.product_name))]), _vm._v(" "), _c('span', {
        staticClass: "s-r"
      }, [_vm._v("x" + _vm._s(itx.product_count))])])
    })), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_c('span', {
      staticClass: "count"
    }, [_vm._v("共" + _vm._s(item.product_list.length) + "件商品，实付")]), _vm._v(" "), _c('span', {
      staticClass: "amount"
    }, [_vm._v("￥" + _vm._s(item.total))])]), _vm._v(" "), _c('div', {
      staticClass: "bottom-c",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": _vm.headerClick
      }
    }, [_vm._m(0, true)])])
  }))])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn"
  }, [_c('span', [_vm._v("再来一单")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0cad80a1", esExports)
  }
}

/***/ })

},[253]);
//# sourceMappingURL=main.js.map