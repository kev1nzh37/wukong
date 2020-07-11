require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([12],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(144);
/** Created by guangqiang on 2018-09-18 19:54:52 */



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_eac55dc6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(148);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eac55dc6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_eac55dc6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/categoryList/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eac55dc6", Component.options)
  } else {
    hotAPI.reload("data-v-eac55dc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(147);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      filterList: [{
        title: '综合排序',
        icon: 'mt-arrow-down-o'
      }, {
        title: '销量最高'
      }, {
        title: '速度最快'
      }, {
        title: '筛选',
        icon: 'mt-filter-o'
      }],
      tags: ['满减优惠', '点评高分', '新商家', '美团专送'],
      itemList: [],
      stars: [1, 2, 3, 4],
      tabList: ['美食', '快餐便当', '汉堡薯条', '意面披萨', '包子粥店', '米粉面馆', '饺子混沌', '麻辣烫冒菜', '川湘菜', '地方菜系', '炸鸡炸串', '特色小吃', '夹馍饼类', '鸭脖卤味', '日料寿司', '韩式料理', '香锅干锅', '嗨吃火锅', '龙虾烧烤', '轻食沙拉']
    };
  },

  methods: {
    searchClick: function searchClick() {
      wx.navigateTo({ url: '/pages/searchList/main' });
    },
    categoryClick: function categoryClick() {
      wx.navigateTo({ url: '/pages/shoppingCart/main' });
    }
  },
  mounted: function mounted() {
    this.itemList = __WEBPACK_IMPORTED_MODULE_0__data__["a" /* categoryData */].data.poilist;
  }
});

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categoryData; });
var categoryData = {
	"tgt_stids": "",
	"data": {
		"activity_id": 0,
		"activity_type": 0,
		"boldingList": [],
		"coupon_nologin_background": "",
		"footprint_entrance": {
			"icon_url": "http://p1.meituan.net/aichequan/6dd136c9612331817f952475d749770b4238.png",
			"is_show": true
		},
		"has_activity": false,
		"judas_field": {
			"rank_trace_id": "05479AEB40AE3E8D1980C497935CB0AF"
		},
		"need_login": false,
		"poi_has_next_page": true,
		"poi_total_num": 2148,
		"poilist": [{
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥14",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=2747700&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=1&act_lng=121385941&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=2747700&shop_id=2747700&rmp=OvR4jYU7ZFVDYPbBu9LlBr0dd_xvo2MXn9Ttf6fAFo3E&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=2747700&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=2747700&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_0",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满9减8;满30减22;满58减28;满88减38;满118减48",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付35元返3元商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "736m",
			"distance_display_control": 0,
			"id": 421942889953763,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "9减8",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "30减22",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "58减28",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "88减38",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "118减48",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返3元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥15",
			"month_sales_tip": "月售6059",
			"name": "浏阳蒸菜(宜山路美食城店)",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/ce00f4610a5ba2db5aebf4be1b60707874985.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/xianfudwm/4582ad38a558b959f2695e9de2354cee177239.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥3",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "中式简餐",
			"trade_area": "虹桥镇",
			"wm_poi_score": 4.4
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥27",
			"charge_info": "aor_type=2&shopSecondType=17&kaPlanId=172&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=4756335&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=2&act_lng=121385941&userId=228577344&shopThirdType=153&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=21735968&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4756335&shop_id=4756335&rmp=5ucHKFUl98RdEDkw6FS8iLs1zhuchRoi_NjFWZa-HKa2&ins=target_id%40ad%40plan_id%40account_id&isKa=true&scenario_code=FOOD&target_id=4756335&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=4756335&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_1",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "43分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/50c4aa962a3b2958b343dcc7bb835b772938.jpg",
				"info": "已有1张满90减9代金券",
				"promotion_type": 1
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满85减35;满139减45",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品4.99折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付50元返8元商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "2.3km",
			"distance_display_control": 0,
			"id": 536433833195590,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "已领9元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 1
			}, {
				"activity_id": 0,
				"content": "85减35",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "139减45",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "4.99折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返8元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 43,
				"poi_type_icon_type": 2,
				"recommend_type": 3,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售320",
			"name": "乐凯撒比萨（爱琴海购物公园店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p1.meituan.net/waimaipoi/8f5a14a02bc26f9d7ea9fb6395ae108c4017.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/wmproduct/19be600b56cd15673e2adb69b1188507361198.jpg",
			"poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
			"rank_label_info": "",
			"recommend_info": {
				"icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
				"recommend_reason": "大众点评高分店铺",
				"type": 3
			},
			"recommend_level_list": [{
				"content_color": "#FF6D27",
				"icon": "",
				"recommend_reason": "点评高分店铺",
				"type": 3
			}],
			"recommend_level_type": 1,
			"recommend_list": [{
				"icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
				"recommend_reason": "点评高分店铺",
				"type": 3
			}],
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥5",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "意面披萨",
			"trade_area": "虹桥镇",
			"wm_poi_score": 4.9
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥20",
			"charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=780749&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=3&act_lng=121385941&userId=228577344&shopThirdType=133&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=780749&shop_id=780749&rmp=TEl01GACq0RF11W721ShDTH_xAEOIPESA3lvVeEDJZL4&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=780749&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=780749&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_2",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满38减23;满68减36;满98减49",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品2.05折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
				"info": "满88元赠送可口可乐一罐",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "667m",
			"distance_display_control": 0,
			"id": 341884699548147,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "38减23",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "68减36",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "98减49",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "2.05折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "满赠",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售2925",
			"name": "蜀香缘川菜",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p1.meituan.net/waimaipoi/fdf92009430e978c00491e2d856ce63c23907.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/xianfudwm/a65419a8eab793dc0515465cc4a7f01c211702.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥4",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "川湘菜",
			"trade_area": "万源城/东兰路",
			"wm_poi_score": 4.1
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥22",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=5377238&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=4&act_lng=121385941&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5377238&shop_id=5377238&rmp=LIWFGLwWAXFKcjFJdH0EzZNY0w1NNSPoQ-dDs6S_urW_&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=5377238&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=5377238&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_3",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满30减17;满70减30;满180减50",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品2折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付20元返5元商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
				"info": "满88元赠送美年达",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "2.4km",
			"distance_display_control": 0,
			"id": 352583463082591,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "30减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "70减30",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "180减50",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "2折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返5元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "满赠",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售1439",
			"name": "358快炒（宵夜烤鱼）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/business/545309ffb843d94d6523491443e8f0fe118518.png@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p1.meituan.net/xianfu/8b81bf83f3c93d45a43167969783a6fb246012.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥6",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "中式简餐",
			"trade_area": "虹桥镇",
			"wm_poi_score": 4.5
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥17",
			"charge_info": "aor_type=2&shopSecondType=14&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=1602339&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=5&act_lng=121385941&userId=228577344&shopThirdType=130&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=1602339&shop_id=1602339&rmp=aYJsJsoQlOqOOyD4R9bq1sYTVV5O4QFnmFTno5hZ6hAv&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=1602339&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=1602339&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_4",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "31分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/50c4aa962a3b2958b343dcc7bb835b772938.jpg",
				"info": "已有1张满45减28代金券",
				"promotion_type": 1
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满28减20;满45减28;满60减35",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品3.54折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付68元返3元商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
				"info": "满68元赠送可乐",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "2.1km",
			"distance_display_control": 0,
			"id": 401838148089665,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "已领28元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 1
			}, {
				"activity_id": 0,
				"content": "28减20",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "45减28",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "60减35",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "3.54折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返3元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "满赠",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 31,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售3765",
			"name": "席师傅特色麻辣香锅",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p1.meituan.net/waimaipoi/172eb82855c13261baf78a056db93adc304216.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p1.meituan.net/xianfudwm/02538b119576c59f94e49ef8222ec1e7131575.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥5",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "麻辣香锅",
			"trade_area": "",
			"wm_poi_score": 4.0
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥20",
			"charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=3405860&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=6&act_lng=121385941&userId=228577344&shopThirdType=137&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=3405860&shop_id=3405860&rmp=WvlFBCctW0Ozw-izpyT4zL8CrRfEjx9O8shAqTIeI48e&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=3405860&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=3405860&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_5",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "46分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满30减15;满68减34;满128减55",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
				"info": "本店新用户立减5元",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品4折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
				"info": "满188元赠送大瓶雪碧可乐随机",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "767m",
			"distance_display_control": 0,
			"id": 460808049042521,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "30减15",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "68减34",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "128减55",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "新客减5",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "4折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "满赠",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}],
			"log_field": {
				"average_delivery_time": 46,
				"poi_type_icon_type": 0,
				"recommend_type": 3,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥25",
			"month_sales_tip": "月售1187",
			"name": "东北小院(龙茗路店)",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "¥5",
			"pic_url": "http://p0.meituan.net/waimaipoi/017940a9a7b5d64bc64f2af3b2cc91b147104.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/xianfudwm/d7f28a5cde10d3ccc830fb613d908a03194660.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_info": {
				"icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
				"recommend_reason": "大众点评高分店铺",
				"type": 3
			},
			"recommend_level_list": [{
				"content_color": "#FF6D27",
				"icon": "",
				"recommend_reason": "点评高分店铺",
				"type": 3
			}],
			"recommend_level_type": 1,
			"recommend_list": [{
				"icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
				"recommend_reason": "点评高分店铺",
				"type": 3
			}],
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥3",
			"shipping_time_info": {
				"desc_content": "10:30后配送",
				"reservation_status": 0,
				"status_content": "接受预订"
			},
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "东北菜",
			"trade_area": "万源城/东兰路",
			"wm_poi_score": 4.5
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=5732085&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=7&act_lng=121385941&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5732085&shop_id=5732085&rmp=iC0zVDztnNrEKBBX01eaQeyzy739_lwDRywuHgguy_TT&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=5732085&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=5732085&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_6",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "58分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满38减8;满98减14;满168减16;满198减19;满268减23",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "1.9km",
			"distance_display_control": 0,
			"id": 375436984096404,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "38减8",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "98减14",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "168减16",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "198减19",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "268减23",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}],
			"log_field": {
				"average_delivery_time": 58,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售31",
			"name": "香辣蟹.龙虾(百味美食城店)",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/4d8f97abf702b1b2b72119ccfe5ff19043008.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥7",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "中式简餐",
			"trade_area": "万源城/东兰路",
			"wm_poi_score": 5.0
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥43",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=5738982&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=8&act_lng=121385941&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5738982&shop_id=5738982&rmp=xrp1Dw-Br1pzImt1a1r8BPl8yzCu2MdLhFoRcGRO51La&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=5738982&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=5738982&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_7",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "35分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满128减10;满218减20;满328减30",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
				"info": "本店新用户立减1元",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品5折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
				"info": "有机会领取商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付10元返5元商家代金券",
				"promotion_type": 2
			}],
			"distance": "2.0km",
			"distance_display_control": 0,
			"id": 548391022129712,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "128减10",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "218减20",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "328减30",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "新客减1",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "5折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "有机会领券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返5元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 35,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售1309",
			"name": "晨曦炖品·鲍鱼饭（吴中路店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p1.meituan.net/waimaipoi/78b76fc210cb7ceba37308665809a2e442574.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/wmproductdwm/5af3711f09ca9a53c34a58e6c486378b108415.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥3",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "中式简餐",
			"trade_area": "虹梅路",
			"wm_poi_score": 4.8
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥22",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=4132210&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=9&act_lng=121385941&userId=228577344&shopThirdType=98&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4132210&shop_id=4132210&rmp=sTJ5XTgBChKdB877ttIuTgCluKGu3cPUs5hPnTlsAu1S&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=4132210&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=4132210&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_8",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满28减16;满58减21;满88减26;满108减31",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品4.97折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "1.9km",
			"distance_display_control": 0,
			"id": 482647957738107,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "28减16",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "58减21",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "88减26",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "108减31",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "4.97折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥15",
			"month_sales_tip": "月售1777",
			"name": "杨记黄焖鸡米饭（龙茗路店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p1.meituan.net/waimaipoi/647f739fbb870d0ffeb00d441f767137100312.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p1.meituan.net/xianfudwm/32ac39997078bd6573f6310e487d7956146726.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥3",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "黄焖鸡",
			"trade_area": "万源城/东兰路",
			"wm_poi_score": 4.6
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥20",
			"charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=2497940&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=10&act_lng=121385941&userId=228577344&shopThirdType=133&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=2497940&shop_id=2497940&rmp=hiiRlAt7RA3562XmbbQZFqlokMpsC32c1bj-6UKtdQc0&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=2497940&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=2497940&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_9",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "40分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满30减20;满60减25;满98减35;满148减45",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品5折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
				"info": "有机会领取商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付1元返5元商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "1.3km",
			"distance_display_control": 0,
			"id": 419473283792787,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "30减20",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "60减25",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "98减35",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "148减45",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "5折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "有机会领券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返5元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 40,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥0",
			"month_sales_tip": "月售2603",
			"name": "虹桥川湘人家（合川路店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/16a97914b8d589ec204e9f302d7b369e36864.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p1.meituan.net/xianfudwm/babd092ec02f5cf7c51858f2c882e350127008.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥5",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "川湘菜",
			"trade_area": "",
			"wm_poi_score": 4.4
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥38",
			"charge_info": "aor_type=2&shopSecondType=15&kaPlanId=203&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=4345773&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=11&act_lng=121385941&userId=228577344&shopThirdType=142&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=21486847&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4345773&shop_id=4345773&rmp=9RjfQL_Ys5QnDLUfLyna0cWIAJVSyNoJ2M_kOmwzGxeF&ins=target_id%40ad%40plan_id%40account_id&isKa=true&scenario_code=FOOD&target_id=4345773&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=4345773&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_10",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "39分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满60减20;满80减30;满150减50",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "3.0km",
			"distance_display_control": 0,
			"id": 326882378810659,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "60减20",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "80减30",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "150减50",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}],
			"log_field": {
				"average_delivery_time": 39,
				"poi_type_icon_type": 2,
				"recommend_type": 3,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售2047",
			"name": "唐宫（天禧店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "¥6",
			"pic_url": "http://p0.meituan.net/waimaipoi/6e8a7a0259d80eb4e4a1ed4e79591ec421202.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/xianfu/dd1abf61cf77d131155cdfea55cd8803128444.jpg",
			"poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
			"rank_label_info": "",
			"recommend_info": {
				"icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
				"recommend_reason": "大众点评高分店铺",
				"type": 3
			},
			"recommend_level_list": [{
				"content_color": "#FF6D27",
				"icon": "",
				"recommend_reason": "点评高分店铺",
				"type": 3
			}],
			"recommend_level_type": 1,
			"recommend_list": [{
				"icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
				"recommend_reason": "点评高分店铺",
				"type": 3
			}],
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥1",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "粤菜",
			"trade_area": "虹梅路",
			"wm_poi_score": 4.7
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥31",
			"charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=3689527&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=12&act_lng=121385941&userId=228577344&shopThirdType=136&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=3689527&shop_id=3689527&rmp=Oci2bc-gaTDNiP2ONPQZrpJZQqVl4rtzKxEA11xcbRQ1&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=3689527&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=3689527&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_11",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "47分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满80减8;满120减15",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品5折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "2.4km",
			"distance_display_control": 0,
			"id": 340450180466512,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "80减8",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "120减15",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "5折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 47,
				"poi_type_icon_type": 2,
				"recommend_type": 3,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥0",
			"month_sales_tip": "月售2129",
			"name": "西贝莜面村（上海万象城店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/f794f271587577f9a0a113b95857e86125212.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/xianfu/2d0d0200797b8eda40f05693e90f93b236188.jpg",
			"poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
			"rank_label_info": "",
			"recommend_info": {
				"icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
				"recommend_reason": "大众点评高分店铺",
				"type": 3
			},
			"recommend_level_list": [{
				"content_color": "#FF6D27",
				"icon": "",
				"recommend_reason": "点评高分店铺",
				"type": 3
			}],
			"recommend_level_type": 1,
			"recommend_list": [{
				"icon": "http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png",
				"recommend_reason": "点评高分店铺",
				"type": 3
			}],
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥7",
			"shipping_time_info": {
				"desc_content": "10:30后配送",
				"reservation_status": 0,
				"status_content": "接受预订"
			},
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "西北菜",
			"trade_area": "虹桥镇",
			"wm_poi_score": 4.8
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥20",
			"charge_info": "aor_type=2&shopSecondType=15&kaPlanId=21&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=360326&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=13&act_lng=121385941&userId=228577344&shopThirdType=132&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=4415372&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=360326&shop_id=360326&rmp=RAjrXYQsK-ZOF8laedzX29xJovvyAuhTTmEoC19Gcl0F&ins=target_id%40ad%40plan_id%40account_id&isKa=true&scenario_code=FOOD&target_id=360326&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=360326&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_12",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "48分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满40减17;满65减30;满100减40",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品5折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "2.0km",
			"distance_display_control": 0,
			"id": 425838425314955,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "40减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "65减30",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "100减40",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "5折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 48,
				"poi_type_icon_type": 2,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售4366",
			"name": "丰收日(虹桥店)",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/8135bef30e17904bdaf52ff8eb270e9a9251.jpeg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/xianfu/34b5634b89dfed2cb135a6241bc70b5c27165.jpg",
			"poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥6",
			"shipping_time_info": {
				"desc_content": "10:30后配送",
				"reservation_status": 0,
				"status_content": "接受预订"
			},
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "本帮江浙菜",
			"trade_area": "虹桥镇",
			"wm_poi_score": 4.4
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥20",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=5015288&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=14&act_lng=121385941&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5015288&shop_id=5015288&rmp=JETVpwMEl0dwCFFHsyBX5JExBfifqHAxHT-eDCbWI829&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=5015288&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=5015288&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_13",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满10减10;满22减20;满45减25;满60减30;满100减35",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品3.92折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
				"info": "有机会领取商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付1元返2元商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "758m",
			"distance_display_control": 0,
			"id": 314336779330722,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "10减10",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "22减20",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "45减25",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "60减30",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "100减35",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "3.92折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "有机会领券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返2元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 2,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥0",
			"month_sales_tip": "月售1401",
			"name": "焖饭大师（宜山路店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/16b3e92a6241d0e5966859dcfe06578e103700.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/wmproduct/a3534f44ca867ea77af77fa912eabe832878091.jpg",
			"poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥3",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "中式简餐",
			"trade_area": "虹桥镇",
			"wm_poi_score": 4.3
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥28",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=129&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=255768&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=15&act_lng=121385941&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=24308675&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=255768&shop_id=255768&rmp=ITyndxLnIloWdRlZtDho9FcBuWuHkW_JAMeA3mc5CHYa&ins=target_id%40ad%40plan_id%40account_id&isKa=true&scenario_code=FOOD&target_id=255768&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=255768&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_14",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满35减5;满60减10",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品6.25折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "1.8km",
			"distance_display_control": 0,
			"id": 399982722191211,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "35减5",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "60减10",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "6.25折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 2,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售2251",
			"name": "永和大王（漕宝路店)",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p1.meituan.net/waimaipoi/e748ed670e80f6bc4ba1f7acac93a05929686.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p1.meituan.net/xianfu/497d97176b6937d829f931c9b0b6968a19228.jpg",
			"poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥5",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "中式简餐",
			"trade_area": "漕河泾/田林",
			"wm_poi_score": 4.6
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥21",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=3015252&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=16&act_lng=121385941&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=3015252&shop_id=3015252&rmp=5JZGcb17YEqsxOWpgCCaeV_BjUNNLvqE2CJujNmR11vE&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=3015252&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=3015252&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_15",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满25减22;满60减29;满100减47;满188减57;满300减62",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
				"info": "本店新用户立减2元",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品4.61折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
				"info": "有机会领取商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
				"info": "满60元赠送虎帮辣酱",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减30元",
				"promotion_type": 2
			}],
			"distance": "2.3km",
			"distance_display_control": 0,
			"id": 402125910867907,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "25减22",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "60减29",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "100减47",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "188减57",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "300减62",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "新客减2",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "4.61折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "有机会领券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "满赠",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减30",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售2447",
			"name": "至尊飘香牛排饭",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "¥5",
			"pic_url": "http://p0.meituan.net/waimaipoi/11544b25da9ebf682e60257d87292dd626624.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/wmproductdwm/97444e627f93309389adbfc960be30f3304539.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥3",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "中式简餐",
			"trade_area": "",
			"wm_poi_score": 4.7
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥21",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=4849197&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=17&act_lng=121385941&userId=228577344&shopThirdType=3003&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4849197&shop_id=4849197&rmp=Xind4M67J7SNElgEhj4JPVED2PGb1y-5Ta8bMjzz6uzd&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=4849197&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=4849197&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_16",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "35分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满23减21;满59减30;满99减40",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
				"info": "本店新用户立减1元",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
				"info": "有机会领取商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/5ffe01c550a139db693d152cefd1b247869.png",
				"info": "满8元赠送神秘饮料",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "1.9km",
			"distance_display_control": 0,
			"id": 497435530120403,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "23减21",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "59减30",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "99减40",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "新客减1",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "有机会领券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "满赠",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "支持自取",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 2,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 35,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售5629",
			"name": "忆锅鸡煲（吴中路美食城店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/c43da01f664878ba7b8c4665bbaaa28468058.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p0.meituan.net/xianfudwm/ba0ba398c0107981bf5e6de07cf7c7a8106375.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
			"shipping_fee_tip": "配送 ¥2",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "鸡公煲",
			"trade_area": "虹梅路",
			"wm_poi_score": 4.7
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥19",
			"charge_info": "aor_type=2&shopSecondType=10&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=5514862&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=18&act_lng=121385941&userId=228577344&shopThirdType=94&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5514862&shop_id=5514862&rmp=UPgP1CRb9od16DBa1Tw0lvbeNkEz-EAxeCxfCaFAX7uE&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=5514862&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=5514862&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_17",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 0,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满15减13;满38减18;满44减21;满58减24;满78减28",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
				"info": "本店新用户立减1元",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品5.35折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
				"info": "有机会领取商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付30元返2元商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "1.6km",
			"distance_display_control": 0,
			"id": 296259261994275,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "15减13",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "38减18",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "44减21",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "58减24",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "78减28",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "新客减1",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "5.35折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "有机会领券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返2元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 0,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售1761",
			"name": "极味super便当",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/8e2f46d39dd6c2955fcdd3401141162823902.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p1.meituan.net/wmproductdwm/895b9b79815d29d74d68e3e764d6322f302305.jpg",
			"poi_type_icon": "",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥2",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "中式简餐",
			"trade_area": "虹梅路",
			"wm_poi_score": 4.6
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥24",
			"charge_info": "aor_type=2&shopSecondType=15&kaPlanId=0&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=5657618&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=19&act_lng=121385941&userId=228577344&shopThirdType=133&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=0&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=5657618&shop_id=5657618&rmp=a9KTQDd08Ryr2N0TqfyXAt_w1DvDyD-Krbou3KzvinT9&ins=target_id%40ad%40plan_id%40account_id&isKa=false&scenario_code=FOOD&target_id=5657618&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=5657618&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_18",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "31分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满30减17;满70减30;满120减40",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
				"info": "本店新用户立减2元",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品5折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/c2c0f31d0ebf0f60af115d058169c492992.png",
				"info": "有机会领取商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/652eea4034250563fe11b02e3219ba8d981.png",
				"info": "实际支付20元返8元商家代金券",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "3.4km",
			"distance_display_control": 0,
			"id": 504590945669860,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "30减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "70减30",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "120减40",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "新客减2",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "5折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "有机会领券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "返8元券",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "极速退款",
				"content_color": "#15B0A0",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#B4ECE6",
				"poi_service_type": 1,
				"priority": 1,
				"priority_sort_index": 0,
				"type": 3
			}],
			"log_field": {
				"average_delivery_time": 31,
				"poi_type_icon_type": 2,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售2860",
			"name": "兜约·下饭菜（田林店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "",
			"pic_url": "http://p0.meituan.net/waimaipoi/fe9af13ccc684961d0227244a3ac1c1878970.jpg@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p1.meituan.net/wmproductdwm/9644a54dcb669f350bd6fb7f6239588d1429022.jpg",
			"poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥7",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "川湘菜",
			"trade_area": "漕河泾/田林",
			"wm_poi_score": 4.7
		}, {
			"ad_attr": "",
			"ad_mark": false,
			"ad_type": 15,
			"average_price_tip": "人均 ¥32",
			"charge_info": "aor_type=2&shopSecondType=17&kaPlanId=40&act_lat=31164379&lng=121385976&cityLevel=2&secondLevelCityId=310112&plan_id=4419693&pos=1&user_ip=114.94.126.62&cpsActivityId=2&city_id=310100&adidx=20&act_lng=121385941&userId=228577344&shopThirdType=4009&hostName=gh-waimai-d-cpsproperty05.gh.sankuai.com&adType=15&slot=78&kaAcctId=36847047&bid=0&lat=31164474&aor_id=267564&mtdpid=2d14e701-3ddc-43ba-9d54-f05aea9fe26c&account_id=4419693&shop_id=4419693&rmp=KLaf-34fJhw6Yymlp12pDGpqcUecqbXC3iBrphabPdcg&ins=target_id%40ad%40plan_id%40account_id&isKa=true&scenario_code=FOOD&target_id=4419693&shopType=1000&request_id=41640383&appVersion=3.1.0&ad=4419693&sver=2&poiApiPageType=2&channel=9&tags=[{\"first_level_type\":2,\"second_level_type\":2,\"name\":\"外卖节\"}]&api_pos=P0_19",
			"closing_tips": "",
			"container_template": {
				"tag_icon": "",
				"type": 0
			},
			"delivery_time_tip": "30分钟",
			"delivery_type": 1,
			"discounts2": [{
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
				"info": "满29减12;满60减18;满120减35",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
				"info": "折扣商品2.24折起",
				"promotion_type": 2
			}, {
				"activity_id": 0,
				"icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
				"info": "新用户立减17元",
				"promotion_type": 2
			}],
			"distance": "1.8km",
			"distance_display_control": 0,
			"id": 323927441334260,
			"insurance_icon": "",
			"insurance_type": 0,
			"is_favorite": 0,
			"label_info": [{
				"activity_id": 0,
				"content": "29减12",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "60减18",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "120减35",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "2.24折起",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}, {
				"activity_id": 0,
				"content": "首单减17",
				"content_color": "#FB4E44",
				"icon_url": "",
				"label_background_color": "",
				"label_frame_color": "#FDC9C6",
				"poi_service_type": 0,
				"priority": 0,
				"priority_sort_index": 0,
				"type": 2
			}],
			"log_field": {
				"average_delivery_time": 30,
				"poi_type_icon_type": 2,
				"recommend_type": 0,
				"search_log_id": ""
			},
			"min_price_tip": "起送 ¥20",
			"month_sales_tip": "月售2121",
			"name": "沙绿·沙拉轻食健康餐（漕河泾店）",
			"only_self_delivery": 0,
			"origin_shipping_fee_tip": "¥5",
			"pic_url": "http://p1.meituan.net/business/65d0a623d93459db5c3a2c7506134408187543.png@152w_114h_1e_1c",
			"poi_promotion_pic": "http://p1.meituan.net/scarlett/e8efc66f0186abf3415ec87df10ae4d07007.png",
			"poi_recommend_pic_url": "http://p1.meituan.net/wmproduct/9ba67fb980595dd8224af27b42ad866a1204759.png",
			"poi_type_icon": "http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png",
			"rank_label_info": "",
			"recommend_level_type": 0,
			"scheme": "",
			"self_delivery_icon": "",
			"shipping_fee_tip": "配送 ¥2",
			"status": 1,
			"status_desc": "",
			"story_icon": "",
			"third_category": "沙拉",
			"trade_area": "漕河泾/田林",
			"wm_poi_score": 4.8
		}],
		"rank_strategy_tag": "RK4017,RK7037,RK8002",
		"rank_strategy_version": "",
		"world_cup_activity": {
			"coupon_activity_img": "",
			"coupon_activity_link": ""
		}
	},
	"code": 0,
	"msg": "成功"
};



/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "search-bar",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.searchClick
    }
  }, [_c('i', {
    staticClass: "icon mt-search-o"
  }), _vm._v(" "), _c('span', [_vm._v("请输入商家或者商品名称")])], 1), _vm._v(" "), _c('div', {
    staticClass: "category-c"
  }, [_c('scroll-view', {
    staticClass: "l",
    attrs: {
      "scroll-x": ""
    }
  }, [_vm._l((_vm.tabList), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "tab-item"
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('view', {
    staticClass: "line"
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('i', {
    staticClass: "icon mt-arrow-down-o"
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "category-list"
  }, [_c('div', {
    staticClass: "filter-bar"
  }, _vm._l((_vm.filterList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('span', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('i', {
      staticClass: "icon",
      class: item.icon
    })], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "item-list"
  }, [_c('div', {
    staticClass: "header"
  }, _vm._l((_vm.tags), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('span', [_vm._v(_vm._s(item))])])
  })), _vm._v(" "), _vm._l((_vm.itemList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": _vm.categoryClick
      }
    }, [_c('div', {
      staticClass: "item-l"
    }, [_c('img', {
      attrs: {
        "src": item.pic_url
      }
    }), _vm._v(" "), _c('img', {
      staticClass: "tag-img",
      attrs: {
        "src": item.poi_promotion_pic
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "item-r"
    }, [_c('div', {
      staticClass: "r-t"
    }, [_c('span', {
      staticClass: "shop-name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "t-c"
    }, [_c('div', {
      staticClass: "c-l"
    }, [_c('div', {
      staticClass: "l-l"
    }, _vm._l((_vm.stars), function(itx, idx) {
      return _c('i', {
        key: idx,
        staticClass: "icon mt-star-s"
      })
    })), _vm._v(" "), _c('span', {
      staticClass: "l-m"
    }, [_vm._v(_vm._s(item.wm_poi_score))]), _vm._v(" "), _c('span', {
      staticClass: "l-r"
    }, [_vm._v(_vm._s(item.month_sales_tip))])]), _vm._v(" "), _c('div', {
      staticClass: "c-r"
    }, [_c('span', {
      staticClass: "r-l"
    }, [_vm._v(_vm._s(item.delivery_time_tip))]), _vm._v(" "), _c('div', {
      staticClass: "r-m"
    }), _vm._v(" "), _c('span', {
      staticClass: "r-r"
    }, [_vm._v(_vm._s(item.distance))])])])]), _vm._v(" "), _c('div', {
      staticClass: "r-m"
    }, [_c('span', {
      staticClass: "m-l"
    }, [_vm._v(_vm._s(item.min_price_tip))]), _vm._v(" "), _c('div', {
      staticClass: "m-m"
    }), _vm._v(" "), _c('span', {
      staticClass: "m-r"
    }, [_vm._v(_vm._s(item.shipping_fee_tip))])]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "activity-c"
    }, _vm._l((item.discounts2), function(itm, idx) {
      return _c('div', {
        key: idx,
        staticClass: "ac-item"
      }, [_c('div', {
        staticClass: "ac"
      }, [_c('img', {
        staticClass: "ac-l",
        attrs: {
          "src": itm.icon_url
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "ac-r"
      }, [_vm._v(_vm._s(itm.info))])])])
    }))])])
  })], 2)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "r-b"
  }, [_c('span', {
    staticClass: "b-l"
  }, [_vm._v("支持自取")]), _vm._v(" "), _c('span', {
    staticClass: "b-r"
  }, [_vm._v("极速配送")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eac55dc6", esExports)
  }
}

/***/ })

},[143]);
//# sourceMappingURL=main.js.map