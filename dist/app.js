require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviceInfo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__regex__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrayExtension__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deepClone__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bus__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wxapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stringExtension__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__formatTime__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deviceInfo", function() { return __WEBPACK_IMPORTED_MODULE_0__deviceInfo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RegExpr", function() { return __WEBPACK_IMPORTED_MODULE_1__regex__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_array", function() { return __WEBPACK_IMPORTED_MODULE_2__arrayExtension__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return __WEBPACK_IMPORTED_MODULE_3__toast__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return __WEBPACK_IMPORTED_MODULE_4__deepClone__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Bus", function() { return __WEBPACK_IMPORTED_MODULE_5__bus__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "wxapi", function() { return __WEBPACK_IMPORTED_MODULE_6__wxapi__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "_string", function() { return __WEBPACK_IMPORTED_MODULE_7__stringExtension__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return __WEBPACK_IMPORTED_MODULE_8__formatTime__; });
/** Created by guangqiang on 2018-06-29 18:10:51 */













/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deviceInfo; });
/** Created by guangqiang on 2018-06-29 10:26:46 */

/** 设备信息 **/

var deviceInfo = {
  brand: wx.getSystemInfoSync().brand, // 手机型号
  model: wx.getSystemInfoSync().model, // 手机品牌,
  screenWidth: wx.getSystemInfoSync().screenWidth, // 屏幕宽度
  screenHeight: wx.getSystemInfoSync().screenHeight, // 屏幕高度
  windowWidth: wx.getSystemInfoSync().windowWidth, // 可使用窗口宽度
  windowHeight: wx.getSystemInfoSync().windowHeight, // 可使用窗口高度
  statusBarHeight: wx.getSystemInfoSync().statusBarHeight, // 状态栏的高度
  language: wx.getSystemInfoSync().language, // 微信设置的语言
  version: wx.getSystemInfoSync().version, // 微信版本号
  system: wx.getSystemInfoSync().system, // 操作系统版本
  platform: wx.getSystemInfoSync().platform, // 客户端平台
  fontSizeSetting: wx.getSystemInfoSync().fontSizeSetting, // 用户字体大小设置
  SDKVersion: wx.getSystemInfoSync().SDKVersion // 客户端基础库版本

  // 当前config: debug \ release
  // mode: __DEV__ ? 'xdebug' : 'release'
};



/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegExpr; });
/**
 * Created by guangqiang on 2017/10/11.
 */

var RegExpr = {

  /**
   * 校验手机号
   * @param mobile
   * @returns {boolean}
   */
  checkMobile: function checkMobile(mobile) {
    return (/^[1][0-9]{10}$/.test(mobile)
    );
  },

  /**
   * 校验纯数字
   * @param num
   * @returns {boolean}
   */
  checkNum: function checkNum(num) {
    return (/^[0-9]+$/.test(num)
    );
  },

  /**
   * 校验用户名：1-20位字符，首字符为字母
   * @param str
   * @returns {RegExp}
   */
  checkUserName: function checkUserName(str) {
    return (/^[a-zA-Z]{1,20}$/.test(str)
    );
  },

  /**
   * 校验密码：6-20位，数字、字母、下划线
   * @param str
   * @returns {boolean}
   */
  checkPwd: function checkPwd(str) {
    return (/^(\\w){6,20}$/.test(str)
    );
  },

  /**
   * 校验正整数 + 0
   * @param num
   * @returns {boolean}
   */
  checkPositiveInteger: function checkPositiveInteger(num) {
    return (/^[0-9]*[1-9][0-9]*$/.test(num)
    );
  },

  /**
   * 校验字符串是否为数字
   * @param str
   * @returns {boolean}
   */
  isNumber: function isNumber(str) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(str) || regNeg.test(str)) {
      return true;
    } else {
      return false;
    }
  }
};



/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



/** Created by guangqiang on 2018-06-29 19:58:09 */

// toast 工具类
var toast = function () {
  function toast() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, toast);
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(toast, null, [{
    key: 'msg',
    value: function msg(title, _ref) {
      var _ref$icon = _ref.icon,
          icon = _ref$icon === undefined ? 1 : _ref$icon;

      wx.showToast({
        title: title,
        icon: ['success', 'none'][icon]
      });
    }
  }, {
    key: 'confirm',
    value: function confirm(_ref2) {
      var _ref2$title = _ref2.title,
          title = _ref2$title === undefined ? '提示' : _ref2$title,
          content = _ref2.content,
          callback = _ref2.callback;

      wx.showModal({
        title: title,
        content: content,
        success: function success(res) {
          if (res.confirm) {
            callback(res.confirm);
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    }
  }]);

  return toast;
}();

/* harmony default export */ __webpack_exports__["a"] = (toast);

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/** Created by guangqiang on 2018-08-17 17:29:31 */



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue___default.a());

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyStr", function() { return isEmptyStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObj", function() { return isEmptyObj; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);


/** Created by guangqiang on 2018-07-22 22:38:29 */

var isEmptyStr = function isEmptyStr(str) {
  if (str == null || str == undefined || str == '') {
    return true;
  } else {
    return false;
  }
};

var isEmptyObj = function isEmptyObj(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(obj)) === 'object') {
    return !obj || Array.isArray(obj) && obj.length === 0 || obj.toString() === '[object Object]' && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(obj).length === 0;
  }
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return false;
  }
  if (typeof obj === 'string' && obj.trim().length === 0) {
    return true;
  }
  return !obj;
};



/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(103);

/** Created by guangqiang on 2018-08-30 14:28:14 */






__WEBPACK_IMPORTED_MODULE_1_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.util = __WEBPACK_IMPORTED_MODULE_4__utils__;

var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */]));

app.$mount();

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(79);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7844a59e", Component.options)
  } else {
    hotAPI.reload("data-v-7844a59e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_formatTime__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_arrayExtension__ = __webpack_require__(16);

//




/* harmony default export */ __webpack_exports__["a"] = ({
  onLaunch: function onLaunch(options) {
    if (wx.canIUse('getUpdateManager')) {
      var updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            updateManager.applyUpdate();
          });
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: '更新提示',
              content: '发现新版本，请删除小程序重新搜索下载最新版本！'
            });
          });
        }
      });
    } else {
      wx.showModal({
        title: '温馨提示',
        content: '当前微信版本过低，无法更新小程序，请升级微信到最新版本！'
      });
    }
  },
  created: function created() {
    console.log("app created and cache logs by setStorageSync");
  },
  mounted: function mounted() {
    wx.onNetworkStatusChange(function (res) {
      wx.setStorageSync('networkType', res.networkType);
      if (!res.isConnected) {
        wx.showToast({
          title: '网络链接失败，请检查网络！',
          icon: 'none',
          duration: 5000
        });
      }
    });
    wx.getNetworkType({
      success: function success(res) {
        wx.setStorageSync('networkType', res.networkType);
      }
    });
  },
  onShow: function onShow(options) {
    if (options.referrerInfo.appId) {
      console.log("options.referrerInfo", options.referrerInfo);
      wx.setStorageSync("referrerInfo", options.referrerInfo);
    }
  },
  onPageNotFound: function onPageNotFound(res) {
    wx.redirectTo({
      url: 'pages/notFound/main'
    });
  },
  onError: function onError(err) {
    console.log('程序报错啦：', err);
    var pages = getCurrentPages();
    if (pages.length <= 0) return;
    var currentPage = pages[pages.length - 1];
    var url = currentPage.route;
    var options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(currentPage.options);
    var time = Object(__WEBPACK_IMPORTED_MODULE_1__utils_formatTime__["timestampToCommonDate"])(new Date().getTime());
    var pageErrArr = wx.getStorageSync('pageErrArr') || [];
    pageErrArr = __WEBPACK_IMPORTED_MODULE_2__utils_arrayExtension__["a" /* _array */].unshift(pageErrArr, { url: url, options: options, err: err, time: time });
    wx.setStorageSync('pageErrArr', pageErrArr);
  }
});

/***/ })

},[70]);
//# sourceMappingURL=app.js.map