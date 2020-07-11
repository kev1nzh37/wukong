require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(39);

/** Created by guangqiang on 2018-09-17 17:31:46 */




var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */]));
app.$mount();

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0dd996ab_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(307);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(304)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0dd996ab"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0dd996ab_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/submitOrder/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0dd996ab", Component.options)
  } else {
    hotAPI.reload("data-v-0dd996ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 304:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sep_line__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_wxapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(40);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      itemData: {},
      addressInfo: {},
      arrivalInfo: {},
      foodList: [],
      privacy_service: {},
      remark_field: {},
      tabIndex: 0,
      pcikData: {},
      tablewareArr: []
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["d" /* mapState */])('shoppingCart', ['shopInfo', 'reduceFee']), {
    deliveryFee: function deliveryFee() {
      return this.shopInfo.support_pay;
    },
    realFee: function realFee() {
      var totalPrice = 0;
      this.shopInfo.selectedArr.map(function (item) {
        return totalPrice += parseFloat(item.totalPrice);
      });
      return parseFloat(totalPrice - this.reduceFee).toFixed(1);
    }
  }),
  components: {
    sepLine: __WEBPACK_IMPORTED_MODULE_1__components_sep_line__["a" /* default */]
  },
  methods: {
    addressClick: function addressClick() {
      wx.navigateTo({ url: '/pages/addressList/main' });
    },
    redPacketClick: function redPacketClick() {
      wx.navigateTo({ url: '/pages/redPacket/main' });
    },
    couponClick: function couponClick() {
      wx.navigateTo({ url: '/pages/couponList/main' });
    },
    remarkClick: function remarkClick() {
      wx.navigateTo({ url: '/pages/remark/main' });
    },
    deliveryClick: function deliveryClick() {
      this.tabIndex = 0;
    },
    pickClick: function pickClick() {
      this.tabIndex = 1;
    },
    protocol: function protocol() {
      wx.navigateTo({ url: '/pages/pickProtocol/main' });
    },
    openMap: function openMap() {
      wx.getLocation({
        type: 'gcj02',
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
          });
        }
      });
    },
    payClick: function payClick() {
      wx.navigateTo({ url: '/pages/orderDetail/main' });
    }
  },
  mounted: function mounted() {
    this.itemData = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* orderData */].delivery.data;
    this.addressInfo = this.itemData.address_info;
    this.arrivalInfo = this.itemData.expected_arrival_info;
    this.privacy_service = this.itemData.privacy_service;
    this.remark_field = this.itemData.remark_field;
    this.pcikData = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* orderData */].pick.data.address_info;
    this.tablewareArr = this.itemData.diners_option.map(function (item) {
      return item.description;
    });
    this.foodList = this.shopInfo.selectedArr;
  }
});

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderData; });
var orderData = {
  delivery: {
    "data": {
      "actual_pay_total": 34.8,
      "address_info": {
        "ab_strategy": "",
        "address": "上海科技绿洲B区18号楼",
        "address_tip": "",
        "address_tip_reason": 0,
        "address_type": 0,
        "bind_type": 0,
        "categories": [],
        "category": 0,
        "category_icon": "",
        "distance": "",
        "gender": "先生",
        "guide_text": "",
        "house_number": "18楼，外卖科技",
        "id": 935908631,
        "latitude": 31164474,
        "longitude": 121385976,
        "name": "刘光强",
        "phone": "15214313256",
        "recommend_type": 1
      },
      "address_type": 1,
      "app_delivery_tip": "美团快送",
      "box_price_type_tip": "包装费",
      "box_total_price": 4.0,
      "business_type_list": [{
        "selected": 1,
        "self_delivery_agree_selected": 0,
        "self_delivery_agree_url": "",
        "title": "美团配送",
        "type": 0
      }, {
        "selected": 0,
        "self_delivery_agree_selected": 1,
        "self_delivery_agree_url": "",
        "title": "到店自取",
        "type": 1
      }],
      "can_use_coupon_price": 66.8,
      "cautionlist": ["加辣", "不要辣", "不要香菜", "不要葱", "请加餐具", "请带纸巾"],
      "city_delivery_area": {
        "explain_url": "",
        "icon": "",
        "tip": ""
      },
      "coupon_info_list": [{
        "background_highlight": 0,
        "background_highlight_type": 0,
        "bubble_source": 0,
        "count_tip": "",
        "coupon_sign": "",
        "coupon_tip_type": 0,
        "description": "抵用券",
        "discount": "",
        "selected_coupon_id": -1,
        "selected_coupon_view_id": "-1",
        "status_tip": "3张可用",
        "type": 0,
        "usable": 1
      }, {
        "background_highlight": 0,
        "background_highlight_type": 0,
        "bubble_source": 0,
        "count_tip": "",
        "coupon_sign": "",
        "coupon_tip_type": 0,
        "description": "商家代金券",
        "discount": "",
        "selected_coupon_id": 0,
        "selected_coupon_view_id": "0",
        "status_tip": "暂无可用",
        "type": 1,
        "usable": 1
      }],
      "coupon_package": {
        "agreement_url": "",
        "coupon_tip_type": 0,
        "description_title": "",
        "original_price": 0.0,
        "price": 0.0,
        "product_description": "",
        "product_id": "",
        "selected": false,
        "show": false,
        "type": 0
      },
      "default_pay_type": 2,
      "default_tableware_tip": "一起为环保助力",
      "delivery_time_tip": "",
      "delivery_type": 0,
      "delivery_type_icon": "http://p0.meituan.net/aichequan/e6219c6e90c004dba3f3bc9fef5b2f3c2176.png",
      "diners_option": [{
        "count": 99,
        "description": "不需要餐具"
      }, {
        "count": 1,
        "description": "1人"
      }, {
        "count": 2,
        "description": "2人"
      }, {
        "count": 3,
        "description": "3人"
      }, {
        "count": 4,
        "description": "4人"
      }, {
        "count": 5,
        "description": "5人"
      }, {
        "count": 6,
        "description": "6人"
      }, {
        "count": 7,
        "description": "7人"
      }, {
        "count": 8,
        "description": "8人"
      }, {
        "count": 9,
        "description": "9人"
      }, {
        "count": 10,
        "description": "10人"
      }, {
        "count": -10,
        "description": "10人以上"
      }],
      "discount_mutex_info": "",
      "discount_warn_tip": "",
      "discounts": [{
        "coupon_sign": "",
        "icon_url": "http://p1.meituan.net/xianfu/142b6891b51058d8222c6f1fe07e6ec71103.png",
        "id": 25,
        "info": "-￥2",
        "name": "减配送费",
        "reduce_fee": 2.0,
        "type": 0
      }, {
        "coupon_sign": "",
        "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
        "id": 2,
        "info": "-￥33",
        "name": "满减优惠",
        "reduce_fee": 33.0,
        "type": 2
      }],
      "exp_infos": [],
      "expected_arrival_info": {
        "clickable": true,
        "date_type_tip": "立即送出",
        "delivery_time_tip": "",
        "select_view_time": "大约20:28送达",
        "shipping_fee_title": "分时段计价配送费",
        "unixtime": 0,
        "view_shipping_fee": "3.0元"
      },
      "flower_cake_field": {
        "caution_values": [],
        "customer_values": [],
        "default_values": [],
        "detail_hint": "",
        "hint": ""
      },
      "foodlist": [{
        "act_info_list": [],
        "activity_extra": "",
        "activity_tag": "discount",
        "attrs": [],
        "cart_id": 0,
        "count": 1,
        "description_tip": "",
        "food_label_url": "",
        "id": 974362156,
        "name": "可乐（大杯）",
        "original_price": 9.0,
        "package_id": 0,
        "picture": "http://p1.meituan.net/wmproduct/9f42f50dd212c42ce9f9047a2e1ad70a1719785.jpg",
        "price": 9.0,
        "spec": "",
        "spu_id": 896335846,
        "sub_total_price": 9.0,
        "unit": "份"
      }, {
        "act_info_list": [],
        "activity_extra": "",
        "activity_tag": "discount",
        "attrs": [],
        "cart_id": 0,
        "count": 1,
        "description_tip": "",
        "food_label_url": "",
        "id": 809821936,
        "name": "老北京鸡肉卷",
        "original_price": 13.9,
        "package_id": 0,
        "picture": "http://p0.meituan.net/wmproduct/0dee54010c6afc1e72e59e2871d70f513002475.png",
        "price": 13.9,
        "spec": "",
        "spu_id": 747128142,
        "sub_total_price": 13.9,
        "unit": "个"
      }, {
        "act_info_list": [],
        "activity_extra": "",
        "activity_tag": "discount",
        "attrs": [],
        "cart_id": 0,
        "count": 1,
        "description_tip": "",
        "food_label_url": "",
        "id": 813753751,
        "name": "香辣鸡排（香辣味）",
        "original_price": 25.0,
        "package_id": 0,
        "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
        "price": 25.0,
        "spec": "",
        "spu_id": 750763135,
        "sub_total_price": 25.0,
        "unit": "份"
      }, {
        "act_info_list": [],
        "activity_extra": "",
        "activity_tag": "discount",
        "attrs": [],
        "cart_id": 0,
        "count": 1,
        "description_tip": "",
        "food_label_url": "",
        "id": 809829128,
        "name": "香辣鸡腿堡",
        "original_price": 14.9,
        "package_id": 0,
        "picture": "http://p1.meituan.net/wmproduct/372473766b64be5f21e376e3dd9ff9052854075.png",
        "price": 14.9,
        "spec": "",
        "spu_id": 747123773,
        "sub_total_price": 14.9,
        "unit": "份"
      }],
      "has_invoice": 0,
      "insurance": {
        "cost": 0.0,
        "description": "",
        "insurance_confirm_desc": "",
        "insurance_detail_url": "",
        "insurance_explain_url": "",
        "insurance_icon": "",
        "insurance_name": "",
        "insurance_reason_code": 0,
        "insurance_selected": 0,
        "purchase_desc": "",
        "purchase_type": 0,
        "show": 0,
        "tips": ""
      },
      "invoice_support": 0,
      "invoice_title": "",
      "invoice_type": 0,
      "is_assign_delivery_time": 1,
      "min_invoice_price": 0.0,
      "mt_delivery_info": {
        "mt_delivery_tags": [],
        "mt_delivery_tip": ""
      },
      "no_product_reminds": [],
      "order_delivery_tip": {
        "explain_url": "",
        "text": "",
        "type": 0
      },
      "order_preview_tip": {
        "icon_url": "",
        "text": ""
      },
      "order_template_type": 0,
      "original_price": 69.8,
      "pay_type_tip": "",
      "payment_info": [{
        "display_switch": 1,
        "payment_extra_info": "",
        "payment_tip": "",
        "payment_type": 2
      }],
      "phone_field": {
        "caution_values": [],
        "customer_values": [],
        "default_values": [],
        "detail_hint": "",
        "hint": ""
      },
      "poi_close_notification": {
        "nOT_SHOW_NOTIFICATION": 0,
        "remain_time": 0,
        "sHOW_NOTIFICATION": 0,
        "visible": 0
      },
      "poi_icon": "http://p0.meituan.net/waimaipoi/6126e47d09268a4b0bc418488d693a9038058.jpg",
      "poi_name": "正新汉堡·炸鸡（东兰餐厅店）",
      "poi_project_description": "",
      "poi_project_description_url": "",
      "pre_order": 0,
      "privacy_service": {
        "new_feature_guide_desc": "美团已为您开启号码保护，保护您的隐私",
        "privacy_close_desc": "对商家、骑手隐藏您的真实手机号，保护您的隐私",
        "privacy_desc": "对商家、骑手隐藏您的真实手机号，保护您的隐私",
        "privacy_explain_url": "http://i.waimai.meituan.com/node/static/privacy-rules",
        "privacy_icon": "https://p0.meituan.net/dptakeaway/b8b97f34-7fd6-41af-98f0-dc7dc1d122a7.jpg",
        "privacy_open_desc": "对商家、骑手隐藏您的真实手机号，保护您的隐私",
        "privacy_open_guide_desc": "",
        "privacy_selected": 1,
        "privacy_selected_desc": "",
        "privacy_title": "号码保护",
        "show": 1
      },
      "product_remind_tip": "",
      "product_weight_tip": "",
      "reduced_shipping_fee": 0.0,
      "remark_field": {
        "caution_values": [],
        "customer_values": [],
        "default_values": ["不吃辣", "少放辣", "多放辣", "不吃蒜", "不吃香菜", "不吃葱"],
        "detail_hint": "请输入口味、偏好等要求，不支持额外代购其他物品哦~",
        "hint": "口味、偏好等要求"
      },
      "remind_infos": [],
      "shipping_detail": [],
      "shipping_fee": 3.0,
      "shipping_fee_discount_tip": "",
      "shipping_fee_update_reason": "",
      "shipping_rule_url": "",
      "shop_cart_id": "",
      "show_steal_entry": 0,
      "tableware_advocate_tip": "美团外卖倡导：减少使用一次性餐具，为环境保护出份力！",
      "taxpayer_id_number": "",
      "template_type": 0,
      "tip": "",
      "token": "E02B6C956C4942098BB1547DF1BBC942",
      "total": 34.8,
      "vip_entrance": {
        "click_url": "",
        "entrance_visible": 0,
        "nOT_SHOW_VIP_ENTRANCE": 0,
        "sHOW_VIP_ENTRANCE": 0,
        "title": ""
      }
    },
    "code": 0,
    "msg": "成功"
  },
  pick: {
    "data": {
      "actual_pay_total": 26.8,
      "address_info": {
        "ab_strategy": "",
        "address": "上海市闵行区龙茗路1689号",
        "address_tip": "请您在明天 03:32之前到店自取商品。如超时请提前与商家沟通，否则商家有权丢弃该商品并拒绝退款",
        "address_tip_reason": 0,
        "address_type": 1,
        "bind_type": 0,
        "categories": [],
        "category": 0,
        "category_icon": "",
        "distance": "198m",
        "gender": "",
        "guide_text": "",
        "house_number": "",
        "id": 0,
        "latitude": 31151651,
        "longitude": 121382437,
        "name": "",
        "phone": "15214313256",
        "recommend_type": 1
      },
      "address_type": 1,
      "app_delivery_tip": "",
      "box_price_type_tip": "包装费",
      "box_total_price": 3.0,
      "business_type_list": [{
        "selected": 0,
        "self_delivery_agree_selected": 0,
        "self_delivery_agree_url": "",
        "title": "美团配送",
        "type": 0
      }, {
        "selected": 1,
        "self_delivery_agree_selected": 1,
        "self_delivery_agree_url": "https://i.waimai.meituan.com/node/fetchrule",
        "title": "到店自取",
        "type": 1
      }],
      "can_use_coupon_price": 56.8,
      "cautionlist": ["加辣", "不要辣", "不要香菜", "不要葱", "请加餐具", "请带纸巾"],
      "city_delivery_area": {
        "explain_url": "",
        "icon": "",
        "tip": ""
      },
      "coupon_info_list": [{
        "background_highlight": 0,
        "background_highlight_type": 0,
        "bubble_source": 0,
        "count_tip": "",
        "coupon_sign": "",
        "coupon_tip_type": 0,
        "description": "抵用券",
        "discount": "",
        "selected_coupon_id": 0,
        "selected_coupon_view_id": "0",
        "status_tip": "暂无可用",
        "type": 0,
        "usable": 1
      }, {
        "background_highlight": 0,
        "background_highlight_type": 0,
        "bubble_source": 0,
        "count_tip": "",
        "coupon_sign": "",
        "coupon_tip_type": 0,
        "description": "商家代金券",
        "discount": "",
        "selected_coupon_id": 0,
        "selected_coupon_view_id": "0",
        "status_tip": "暂无可用",
        "type": 1,
        "usable": 1
      }],
      "coupon_package": {
        "agreement_url": "",
        "coupon_tip_type": 0,
        "description_title": "",
        "original_price": 0.0,
        "price": 0.0,
        "product_description": "",
        "product_id": "",
        "selected": false,
        "show": false,
        "type": 0
      },
      "default_pay_type": 2,
      "default_tableware_tip": "一起为环保助力",
      "delivery_time_tip": "",
      "delivery_type": 0,
      "delivery_type_icon": "http://p1.meituan.net/aichequan/d7b1f1f28a2523c45ffb34555f894cb22489.png",
      "diners_option": [{
        "count": 99,
        "description": "不需要餐具"
      }, {
        "count": 1,
        "description": "1人"
      }, {
        "count": 2,
        "description": "2人"
      }, {
        "count": 3,
        "description": "3人"
      }, {
        "count": 4,
        "description": "4人"
      }, {
        "count": 5,
        "description": "5人"
      }, {
        "count": 6,
        "description": "6人"
      }, {
        "count": 7,
        "description": "7人"
      }, {
        "count": 8,
        "description": "8人"
      }, {
        "count": 9,
        "description": "9人"
      }, {
        "count": 10,
        "description": "10人"
      }, {
        "count": -10,
        "description": "10人以上"
      }],
      "discount_mutex_info": "",
      "discount_warn_tip": "到店自取仅享受部分优惠",
      "discounts": [{
        "coupon_sign": "",
        "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
        "id": 2,
        "info": "-￥30",
        "name": "满减优惠",
        "reduce_fee": 30.0,
        "type": 2
      }],
      "exp_infos": [],
      "expected_arrival_info": {
        "clickable": true,
        "date_type_tip": "自取时间",
        "delivery_time_tip": "",
        "select_view_time": "23:33",
        "shipping_fee_title": "分时段计价配送费",
        "unixtime": 1537975980,
        "view_shipping_fee": "0.0元"
      },
      "flower_cake_field": {
        "caution_values": [],
        "customer_values": [],
        "default_values": [],
        "detail_hint": "",
        "hint": ""
      },
      "foodlist": [{
        "act_info_list": [],
        "activity_extra": "",
        "activity_tag": "discount",
        "attrs": [],
        "cart_id": 0,
        "count": 1,
        "description_tip": "",
        "food_label_url": "",
        "id": 809821936,
        "name": "老北京鸡肉卷",
        "original_price": 13.9,
        "package_id": 0,
        "picture": "http://p0.meituan.net/wmproduct/0dee54010c6afc1e72e59e2871d70f513002475.png",
        "price": 13.9,
        "spec": "",
        "spu_id": 747128142,
        "sub_total_price": 13.9,
        "unit": "个"
      }, {
        "act_info_list": [],
        "activity_extra": "",
        "activity_tag": "discount",
        "attrs": [],
        "cart_id": 0,
        "count": 1,
        "description_tip": "",
        "food_label_url": "",
        "id": 813753751,
        "name": "香辣鸡排（香辣味）",
        "original_price": 25.0,
        "package_id": 0,
        "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
        "price": 25.0,
        "spec": "",
        "spu_id": 750763135,
        "sub_total_price": 25.0,
        "unit": "份"
      }, {
        "act_info_list": [],
        "activity_extra": "",
        "activity_tag": "discount",
        "attrs": [],
        "cart_id": 0,
        "count": 1,
        "description_tip": "",
        "food_label_url": "",
        "id": 809829128,
        "name": "香辣鸡腿堡",
        "original_price": 14.9,
        "package_id": 0,
        "picture": "http://p1.meituan.net/wmproduct/372473766b64be5f21e376e3dd9ff9052854075.png",
        "price": 14.9,
        "spec": "",
        "spu_id": 747123773,
        "sub_total_price": 14.9,
        "unit": "份"
      }],
      "has_invoice": 0,
      "insurance": {
        "cost": 0.0,
        "description": "",
        "insurance_confirm_desc": "",
        "insurance_detail_url": "",
        "insurance_explain_url": "",
        "insurance_icon": "",
        "insurance_name": "",
        "insurance_reason_code": 0,
        "insurance_selected": 0,
        "purchase_desc": "",
        "purchase_type": 0,
        "show": 0,
        "tips": ""
      },
      "invoice_support": 0,
      "invoice_title": "",
      "invoice_type": 0,
      "is_assign_delivery_time": 1,
      "min_invoice_price": 0.0,
      "mt_delivery_info": {
        "mt_delivery_tags": [],
        "mt_delivery_tip": ""
      },
      "no_product_reminds": [],
      "order_delivery_tip": {
        "explain_url": "",
        "text": "",
        "type": 0
      },
      "order_preview_tip": {
        "icon_url": "",
        "text": ""
      },
      "order_template_type": 0,
      "original_price": 56.8,
      "pay_type_tip": "",
      "payment_info": [{
        "display_switch": 1,
        "payment_extra_info": "",
        "payment_tip": "",
        "payment_type": 2
      }],
      "phone_field": {
        "caution_values": [],
        "customer_values": [],
        "default_values": [],
        "detail_hint": "",
        "hint": ""
      },
      "poi_close_notification": {
        "nOT_SHOW_NOTIFICATION": 0,
        "remain_time": 0,
        "sHOW_NOTIFICATION": 0,
        "visible": 0
      },
      "poi_icon": "http://p0.meituan.net/waimaipoi/6126e47d09268a4b0bc418488d693a9038058.jpg",
      "poi_name": "正新汉堡·炸鸡（东兰餐厅店）",
      "poi_project_description": "",
      "poi_project_description_url": "",
      "pre_order": 0,
      "privacy_service": {
        "new_feature_guide_desc": "",
        "privacy_close_desc": "",
        "privacy_desc": "",
        "privacy_explain_url": "",
        "privacy_icon": "",
        "privacy_open_desc": "",
        "privacy_open_guide_desc": "",
        "privacy_selected": 0,
        "privacy_selected_desc": "",
        "privacy_title": "",
        "show": 0
      },
      "product_remind_tip": "",
      "product_weight_tip": "",
      "reduced_shipping_fee": 5.0,
      "remark_field": {
        "caution_values": [],
        "customer_values": [],
        "default_values": ["不吃辣", "少放辣", "多放辣", "不吃蒜", "不吃香菜", "不吃葱"],
        "detail_hint": "请输入口味、偏好等要求，不支持额外代购其他物品哦~",
        "hint": "口味、偏好等要求"
      },
      "remind_infos": [{
        "behavior_type": 2,
        "icon": "",
        "remind_content": "到店自取仅享受部分优惠",
        "statistics_code": 0,
        "support_type": 2
      }],
      "shipping_detail": [],
      "shipping_fee": 0.0,
      "shipping_fee_discount_tip": "",
      "shipping_fee_update_reason": "",
      "shipping_rule_url": "",
      "shop_cart_id": "",
      "show_steal_entry": 0,
      "tableware_advocate_tip": "美团外卖倡导：减少使用一次性餐具，为环境保护出份力！",
      "taxpayer_id_number": "",
      "template_type": 0,
      "tip": "",
      "token": "0A2822F209F54252983E66177E2DBE78",
      "total": 26.8,
      "vip_entrance": {
        "click_url": "",
        "entrance_visible": 0,
        "nOT_SHOW_VIP_ENTRANCE": 0,
        "sHOW_VIP_ENTRANCE": 0,
        "title": ""
      }
    },
    "code": 0,
    "msg": "成功"
  }
};



/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header-c"
  }, [_c('div', {
    staticClass: "tab-c"
  }, [_c('div', {
    staticClass: "left",
    style: ({
      'background-color': _vm.tabIndex === 0 ? '#fff' : '#F8F8F8',
      'font-weight': _vm.tabIndex === 0 ? 'bold' : ''
    }),
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.deliveryClick
    }
  }, [_vm._v("外卖配送")]), _vm._v(" "), _c('div', {
    staticClass: "right",
    style: ({
      'background-color': _vm.tabIndex === 1 ? '#fff' : '#F8F8F8',
      'font-weight': _vm.tabIndex === 1 ? 'bold' : ''
    }),
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.pickClick
    }
  }, [_vm._v("到店自取")])]), _vm._v(" "), (_vm.tabIndex === 0) ? _c('div', {
    staticClass: "delivery"
  }, [_c('div', {
    staticClass: "address-c",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.addressClick
    }
  }, [_c('i', {
    staticClass: "icon mt-location-s"
  }), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_c('span', {
    staticClass: "address-info"
  }, [_vm._v(_vm._s(_vm.addressInfo.address) + " " + _vm._s(_vm.addressInfo.house_number))]), _vm._v(" "), _c('span', {
    staticClass: "user-info"
  }, [_vm._v(_vm._s(_vm.addressInfo.name) + " " + _vm._s(_vm.addressInfo.gender) + "  " + _vm._s(_vm.addressInfo.phone))])]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-right-o",
    style: ({
      fontSize: 28 + 'rpx',
      color: '#999'
    })
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line-sp"
  }), _vm._v(" "), _c('div', {
    staticClass: "delivery-time"
  }, [_c('i', {
    staticClass: "icon mt-clock-s"
  }), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "c-l"
  }, [_vm._v(_vm._s(_vm.arrivalInfo.date_type_tip))]), _vm._v(" "), _c('span', {
    staticClass: "c-r"
  }, [_vm._v(_vm._s(_vm.arrivalInfo.select_view_time))])]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-right-o",
    style: ({
      fontSize: 28 + 'rpx',
      color: '#999'
    })
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.tabIndex === 1) ? _c('div', {
    staticClass: "pick"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("商家地址")]), _vm._v(" "), _c('span', {
    staticClass: "address"
  }, [_vm._v(_vm._s(_vm.pcikData.address))]), _vm._v(" "), _c('div', {
    staticClass: "map"
  }, [_c('span', {
    staticClass: "distance"
  }, [_vm._v("距您" + _vm._s(_vm.pcikData.distance))]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('span', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.openMap
    }
  }, [_vm._v("查看地图")])]), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_c('div', {
    staticClass: "l"
  }, [_c('span', {
    staticClass: "l-t"
  }, [_vm._v("自取时间")]), _vm._v(" "), _c('div', {
    staticClass: "l-b"
  }, [_c('span', [_vm._v("22：49")]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-right-o"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('span', {
    staticClass: "r-t"
  }, [_vm._v("预留电话")]), _vm._v(" "), _c('div', {
    staticClass: "r-b"
  }, [_c('span', [_vm._v(_vm._s(_vm.pcikData.phone))]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-right-o"
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "protocol"
  }, [_c('i', {
    staticClass: "icon mt-selected-square-o"
  }), _vm._v(" "), _c('span', [_vm._v("同意")]), _vm._v(" "), _c('text', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.protocol
    }
  }, [_vm._v("《到店自取用户协议》")])], 1)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "item-list"
  }, [_c('div', {
    staticClass: "section"
  }, [_c('img', {
    attrs: {
      "src": _vm.itemData.poi_icon
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.itemData.poi_name))]), _vm._v(" "), _c('text', {
    staticClass: "tag"
  }, [_vm._v("商家自配")])]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, _vm._l((_vm.foodList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('img', {
      attrs: {
        "src": item.picture
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "item-r"
    }, [_c('div', {
      staticClass: "r-t"
    }, [_c('span', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', [_vm._v("￥" + _vm._s(item.totalPrice))])]), _vm._v(" "), _c('span', [_vm._v("x" + _vm._s(item.sequence))])])])
  })), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "fold"
  }, [_c('span', [_vm._v("展开更多")]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-down-o"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "package-cast"
  }, [_c('span', [_vm._v("包装费")]), _vm._v(" "), _c('span', [_vm._v("￥" + _vm._s(_vm.foodList.length))])]), _vm._v(" "), _c('div', {
    staticClass: "delivery-cast"
  }, [_c('span', [_vm._v("配送费")]), _vm._v(" "), _c('span', [_vm._v("￥" + _vm._s(_vm.deliveryFee))])]), _vm._v(" "), _c('sep-line', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "discount"
  }, _vm._l((_vm.itemData.discounts), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('img', {
      attrs: {
        "src": item.icon_url
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "info"
    }, [_vm._v(_vm._s(item.info))])])
  })), _vm._v(" "), _c('div', {
    staticClass: "red-packet",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.redPacketClick
    }
  }, [_c('span', {
    staticClass: "l"
  }, [_vm._v("美团红包")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('span', [_vm._v("4张可用")]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-right-o"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "coupon",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.couponClick
    }
  }, [_c('span', {
    staticClass: "l"
  }, [_vm._v("商家代金券")]), _vm._v(" "), _c('div', {
    staticClass: "r"
  }, [_c('span', [_vm._v("10张可用")]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-right-o"
  })], 1)]), _vm._v(" "), _c('sep-line', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "totle-price"
  }, [(_vm.reduceFee > 0) ? _c('span', {
    staticClass: "l"
  }, [_vm._v("已优惠￥" + _vm._s(_vm.reduceFee))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "m"
  }, [_vm._v("小计")]), _vm._v(" "), _c('span', {
    staticClass: "r"
  }, [_vm._v("￥" + _vm._s(_vm.realFee))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "privacy-c"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('div', {
    staticClass: "t-l"
  }, [_c('i', {
    staticClass: "icon mt-lock-o",
    style: ({
      color: '#434343',
      'font-size': 32 + 'rpx'
    })
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.privacy_service.privacy_title))]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-help-o",
    style: ({
      color: '#999',
      'font-size': 24 + 'rpx'
    })
  })], 1), _vm._v(" "), _c('switch', {
    attrs: {
      "bindchange": "switch2Change"
    }
  })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.privacy_service.privacy_close_desc))])]), _vm._v(" "), _c('div', {
    staticClass: "bottom-c"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "b-mid",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.remarkClick
    }
  }, [_c('span', {
    staticClass: "mid-l"
  }, [_vm._v("备注")]), _vm._v(" "), _c('div', {
    staticClass: "mid-r"
  }, [_c('span', [_vm._v(_vm._s(_vm.remark_field.hint))]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-right-o"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "b-btm"
  }, [_c('span', {
    staticClass: "b-l"
  }, [_vm._v("餐具数量")]), _vm._v(" "), _c('div', {
    staticClass: "b-r"
  }, [_c('i', {
    staticClass: "icon mt-leaf-o",
    style: ({
      color: '#00CB91',
      'font-size': 38 + 'rpx'
    })
  }), _vm._v(" "), _c('span', {
    staticClass: "s-l"
  }, [_vm._v("一起为环保助力")]), _vm._v(" "), _c('picker', {
    staticClass: "picker",
    attrs: {
      "mode": "selector",
      "range": _vm.tablewareArr
    }
  }, [_c('div', [_c('span', {
    staticClass: "s-r"
  }, [_vm._v("未选择")]), _vm._v(" "), _c('i', {
    staticClass: "icon mt-arrow-right-o",
    style: ({
      color: '#999',
      'font-size': 28 + 'rpx'
    })
  })], 1)])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "pay-btn",
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.payClick
    }
  }, [_c('div', {
    staticClass: "top"
  }, [_c('span', {
    staticClass: "s-l"
  }, [_vm._v("微信支付")]), _vm._v(" "), _c('span', {
    staticClass: "s-m"
  }, [_vm._v("￥" + _vm._s(_vm.realFee))]), _vm._v(" "), _c('span', {
    staticClass: "s-r"
  }, [_vm._v("已优惠￥" + _vm._s(_vm.reduceFee))])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "b-top"
  }, [_c('span', [_vm._v("支付方式")]), _vm._v(" "), _c('span', [_vm._v("在线支付")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0dd996ab", esExports)
  }
}

/***/ })

},[302]);
//# sourceMappingURL=main.js.map