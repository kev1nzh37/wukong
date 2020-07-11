global.webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// fix env
try {
  if (!global) global = {};
  global.process = global.process || {};
  global.process.env = global.process.env || {};
  global.App = global.App || App;
  global.Page = global.Page || Page;
  global.Component = global.Component || Component;
  global.getApp = global.getApp || getApp;
} catch (e) {}

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated', 'onLaunch',
  'onLoad',
  'onShow',
  'onReady',
  'onHide',
  'onUnload',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onPageScroll',
  'onTabItemTap',
  'attached',
  'ready',
  'moved',
  'detached'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;

var formatComponentName = (null); // work around flow check

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = ['mpvue-runtime'].join();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  // } else if (typeof MutationObserver !== 'undefined' && (
  //   isNative(MutationObserver) ||
  //   // PhantomJS and iOS 7.x
  //   MutationObserver.toString() === '[object MutationObserverConstructor]'
  // )) {
  //   // use MutationObserver where native Promise is not available,
  //   // e.g. PhantomJS IE11, iOS7, Android 4.4
  //   var counter = 1
  //   var observer = new MutationObserver(nextTickHandler)
  //   var textNode = document.createTextNode(String(counter))
  //   observer.observe(textNode, {
  //     characterData: true
  //   })
  //   timerFunc = () => {
  //     counter = (counter + 1) % 2
  //     textNode.data = String(counter)
  //   }
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var mark;
var measure;

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;


function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "production" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {}
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "production" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    
  }
}

function initWatch (vm, watch) {
  "production" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (false) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // keep listeners
  var listeners = data.on;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "production" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', parentData && parentData.on, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.1';
Vue$3.mpvueVersion = '1.0.12';

/* globals renderer */



var isReservedTag = makeMap(
  'template,script,style,element,content,slot,link,meta,svg,view,' +
  'a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,' +
  'slider,slider-neighbor,indicator,trisition,trisition-group,canvas,' +
  'list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,' +
  'video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown',
  true
);

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// Elements that you can, intentionally, leave open (and which close themselves)
// more flexable than web
var canBeLeftOpenTag = makeMap(
  'web,spinner,switch,video,textarea,canvas,' +
  'indicator,marquee,countdown',
  true
);

var isUnaryTag = makeMap(
  'embed,img,image,input,link,meta',
  true
);

function mustUseProp () { /* console.log('mustUseProp') */ }
function getTagNamespace () { /* console.log('getTagNamespace') */ }
function isUnknownElement () { /* console.log('isUnknownElement') */ }



function getComKey (vm) {
  return vm && vm.$attrs ? vm.$attrs['mpcomid'] : '0'
}

// 用于小程序的 event type 到 web 的 event
var eventTypeMap = {
  tap: ['tap', 'click'],
  touchstart: ['touchstart'],
  touchmove: ['touchmove'],
  touchcancel: ['touchcancel'],
  touchend: ['touchend'],
  longtap: ['longtap'],
  input: ['input'],
  blur: ['change', 'blur'],
  submit: ['submit'],
  focus: ['focus'],
  scrolltoupper: ['scrolltoupper'],
  scrolltolower: ['scrolltolower'],
  scroll: ['scroll']
};

/*  */

// import { namespaceMap } from 'mp/util/index'

var obj = {};

function createElement$1 (tagName, vnode) {
  return obj
}

function createElementNS (namespace, tagName) {
  return obj
}

function createTextNode (text) {
  return obj
}

function createComment (text) {
  return obj
}

function insertBefore (parentNode, newNode, referenceNode) {}

function removeChild (node, child) {}

function appendChild (node, child) {}

function parentNode (node) {
  return obj
}

function nextSibling (node) {
  return obj
}

function tagName (node) {
  return 'div'
}

function setTextContent (node, text) {
  return obj
}

function setAttribute (node, key, val) {
  return obj
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (false) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (false
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

// import baseModules from 'core/vdom/modules/index'
// const platformModules = []
// import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
// const modules = platformModules.concat(baseModules)
var modules = [ref];

var corePatch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

function patch () {
  corePatch.apply(this, arguments);
  this.$updateDataToMP();
}

function callHook$1 (vm, hook, params) {
  var handlers = vm.$options[hook];
  if (hook === 'onError' && handlers) {
    handlers = [handlers];
  }

  var ret;
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        ret = handlers[i].call(vm, params);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  // for child
  if (vm.$children.length) {
    vm.$children.forEach(function (v) { return callHook$1(v, hook, params); });
  }

  return ret
}

// mpType 小程序实例的类型，可能的值是 'app', 'page'
// rootVueVM 是 vue 的根组件实例，子组件中访问 this.$root 可得
function getGlobalData (app, rootVueVM) {
  var mp = rootVueVM.$mp;
  if (app && app.globalData) {
    mp.appOptions = app.globalData.appOptions;
  }
}

// 格式化 properties 属性，并给每个属性加上 observer 方法

// properties 的 一些类型 https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
// properties: {
//   paramA: Number,
//   myProperty: { // 属性名
//     type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
//     value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
//     observer: function(newVal, oldVal, changedPath) {
//        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
//        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
//     }
//   },
// }

// props 的一些类型 https://cn.vuejs.org/v2/guide/components-props.html#ad
// props: {
//   // 基础的类型检查 (`null` 匹配任何类型)
//   propA: Number,
//   // 多个可能的类型
//   propB: [String, Number],
//   // 必填的字符串
//   propC: {
//     type: String,
//     required: true
//   },
//   // 带有默认值的数字
//   propD: {
//     type: Number,
//     default: 100
//   },
//   // 带有默认值的对象
//   propE: {
//     type: Object,
//     // 对象或数组且一定会从一个工厂函数返回默认值
//     default: function () {
//       return { message: 'hello' }
//     }
//   },
//   // 自定义验证函数
//   propF: {
//     validator: function (value) {
//       // 这个值必须匹配下列字符串中的一个
//       return ['success', 'warning', 'danger'].indexOf(value) !== -1
//     }
//   }
// }

// core/util/options
function normalizeProps$1 (props, res, vm) {
  if (!props) { return }
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }

  // fix vueProps to properties
  for (var key$1 in res) {
    if (res.hasOwnProperty(key$1)) {
      var item = res[key$1];
      if (item.default) {
        item.value = item.default;
      }
      var oldObserver = item.observer;
      item.observer = function (newVal, oldVal) {
        vm[name] = newVal;
        // 先修改值再触发原始的 observer，跟 watch 行为保持一致
        if (typeof oldObserver === 'function') {
          oldObserver.call(vm, newVal, oldVal);
        }
      };
    }
  }

  return res
}

function normalizeProperties (vm) {
  var properties = vm.$options.properties;
  var vueProps = vm.$options.props;
  var res = {};

  normalizeProps$1(properties, res, vm);
  normalizeProps$1(vueProps, res, vm);

  return res
}

/**
 * 把 properties 中的属性 proxy 到 vm 上
 */
function initMpProps (vm) {
  var mpProps = vm._mpProps = {};
  var keys = Object.keys(vm.$options.properties || {});
  keys.forEach(function (key) {
    if (!(key in vm)) {
      proxy(vm, '_mpProps', key);
      mpProps[key] = undefined; // for observe
    }
  });
  observe(mpProps, true);
}

function initMP (mpType, next) {
  var rootVueVM = this.$root;
  if (!rootVueVM.$mp) {
    rootVueVM.$mp = {};
  }

  var mp = rootVueVM.$mp;

  // Please do not register multiple Pages
  // if (mp.registered) {
  if (mp.status) {
    // 处理子组件的小程序生命周期
    if (mpType === 'app') {
      callHook$1(this, 'onLaunch', mp.appOptions);
    } else {
      callHook$1(this, 'onLoad', mp.query);
      callHook$1(this, 'onReady');
    }
    return next()
  }
  // mp.registered = true

  mp.mpType = mpType;
  mp.status = 'register';

  if (mpType === 'app') {
    global.App({
      // 页面的初始数据
      globalData: {
        appOptions: {}
      },

      handleProxy: function handleProxy (e) {
        return rootVueVM.$handleProxyWithVue(e)
      },

      // Do something initial when launch.
      onLaunch: function onLaunch (options) {
        if ( options === void 0 ) options = {};

        mp.app = this;
        mp.status = 'launch';
        this.globalData.appOptions = mp.appOptions = options;
        callHook$1(rootVueVM, 'onLaunch', options);
        next();
      },

      // Do something when app show.
      onShow: function onShow (options) {
        if ( options === void 0 ) options = {};

        mp.status = 'show';
        this.globalData.appOptions = mp.appOptions = options;
        callHook$1(rootVueVM, 'onShow', options);
      },

      // Do something when app hide.
      onHide: function onHide () {
        mp.status = 'hide';
        callHook$1(rootVueVM, 'onHide');
      },

      onError: function onError (err) {
        callHook$1(rootVueVM, 'onError', err);
      }
    });
  } else if (mpType === 'component') {
    initMpProps(rootVueVM);

    global.Component({
      // 小程序原生的组件属性
      properties: normalizeProperties(rootVueVM),
      // 页面的初始数据
      data: {
        $root: {}
      },
      methods: {
        handleProxy: function handleProxy (e) {
          return rootVueVM.$handleProxyWithVue(e)
        }
      },
      // mp lifecycle for vue
      // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
      created: function created () {
        mp.status = 'created';
        mp.page = this;
      },
      // 组件生命周期函数，在组件实例进入页面节点树时执行
      attached: function attached () {
        mp.status = 'attached';
        callHook$1(rootVueVM, 'attached');
      },
      // 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
      ready: function ready () {
        mp.status = 'ready';

        callHook$1(rootVueVM, 'ready');
        next();

        // 只有页面需要 setData
        rootVueVM.$nextTick(function () {
          rootVueVM._initDataToMP();
        });
      },
      // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
      moved: function moved () {
        callHook$1(rootVueVM, 'moved');
      },
      // 组件生命周期函数，在组件实例被从页面节点树移除时执行
      detached: function detached () {
        mp.status = 'detached';
        callHook$1(rootVueVM, 'detached');
      }
    });
  } else {
    var app = global.getApp();
    global.Page({
      // 页面的初始数据
      data: {
        $root: {}
      },

      handleProxy: function handleProxy (e) {
        return rootVueVM.$handleProxyWithVue(e)
      },

      // mp lifecycle for vue
      // 生命周期函数--监听页面加载
      onLoad: function onLoad (query) {
        mp.page = this;
        mp.query = query;
        mp.status = 'load';
        getGlobalData(app, rootVueVM);
        callHook$1(rootVueVM, 'onLoad', query);
      },

      // 生命周期函数--监听页面显示
      onShow: function onShow () {
        mp.page = this;
        mp.status = 'show';
        callHook$1(rootVueVM, 'onShow');

        // 只有页面需要 setData
        rootVueVM.$nextTick(function () {
          rootVueVM._initDataToMP();
        });
      },

      // 生命周期函数--监听页面初次渲染完成
      onReady: function onReady () {
        mp.status = 'ready';

        callHook$1(rootVueVM, 'onReady');
        next();
      },

      // 生命周期函数--监听页面隐藏
      onHide: function onHide () {
        mp.status = 'hide';
        callHook$1(rootVueVM, 'onHide');
        mp.page = null;
      },

      // 生命周期函数--监听页面卸载
      onUnload: function onUnload () {
        mp.status = 'unload';
        callHook$1(rootVueVM, 'onUnload');
        mp.page = null;
      },

      // 页面相关事件处理函数--监听用户下拉动作
      onPullDownRefresh: function onPullDownRefresh () {
        callHook$1(rootVueVM, 'onPullDownRefresh');
      },

      // 页面上拉触底事件的处理函数
      onReachBottom: function onReachBottom () {
        callHook$1(rootVueVM, 'onReachBottom');
      },

      // 用户点击右上角分享
      onShareAppMessage: rootVueVM.$options.onShareAppMessage
        ? function (options) { return callHook$1(rootVueVM, 'onShareAppMessage', options); } : null,

      // Do something when page scroll
      onPageScroll: function onPageScroll (options) {
        callHook$1(rootVueVM, 'onPageScroll', options);
      },

      // 当前是 tab 页时，点击 tab 时触发
      onTabItemTap: function onTabItemTap (options) {
        callHook$1(rootVueVM, 'onTabItemTap', options);
      }
    });
  }
}

// 节流方法，性能优化
// 全局的命名约定，为了节省编译的包大小一律采取形象的缩写，说明如下。
// $c === $child
// $k === $comKey

// 新型的被拍平的数据结构
// {
//   $root: {
//     '1-1'{
//       // ... data
//     },
//     '1.2-1': {
//       // ... data1
//     },
//     '1.2-2': {
//       // ... data2
//     }
//   }
// }

function getVmData (vm) {
  // 确保当前 vm 所有数据被同步
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._props || {}),
    Object.keys(vm._mpProps || {}),
    Object.keys(vm._computedWatchers || {})
  );
  return dataKeys.reduce(function (res, key) {
    res[key] = vm[key];
    return res
  }, {})
}

function getParentComKey (vm, res) {
  if ( res === void 0 ) res = [];

  var ref = vm || {};
  var $parent = ref.$parent;
  if (!$parent) { return res }
  res.unshift(getComKey($parent));
  if ($parent.$parent) {
    return getParentComKey($parent, res)
  }
  return res
}

function formatVmData (vm) {
  var $p = getParentComKey(vm).join(',');
  var $k = $p + ($p ? ',' : '') + getComKey(vm);

  // getVmData 这儿获取当前组件内的所有数据，包含 props、computed 的数据
  // 改动 vue.runtime 所获的的核心能力
  var data = Object.assign(getVmData(vm), { $k: $k, $kk: ($k + ","), $p: $p });
  var key = '$root.' + $k;
  var res = {};
  res[key] = data;
  return res
}

function collectVmData (vm, res) {
  if ( res === void 0 ) res = {};

  var vms = vm.$children;
  if (vms && vms.length) {
    vms.forEach(function (v) { return collectVmData(v, res); });
  }
  return Object.assign(res, formatVmData(vm))
}

/**
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 * 自动合并 data
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
 *                                如果想忽略结尾边界上的调用，传入{trailing: false}
 * @return {function}             返回客户调用函数
 */
function throttle (func, wait, options) {
  var context, args, result;
  var timeout = null;
  // 上次执行时间点
  var previous = 0;
  if (!options) { options = {}; }
  // 延迟执行函数
  function later () {
    // 若设定了开始边界不执行选项，上次执行时间始终为0
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) { context = args = null; }
  }
  return function (handle, data) {
    var now = Date.now();
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    if (!previous && options.leading === false) { previous = now; }
    // 延迟执行时间间隔
    var remaining = wait - (now - previous);
    context = this;
    args = args ? [handle, Object.assign(args[1], data)] : [handle, data];
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      if (!timeout) { context = args = null; }
    // 如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result
  }
}

// 优化频繁的 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
var throttleSetData = throttle(function (handle, data) {
  handle(data);
}, 50);

function getPage (vm) {
  var rootVueVM = vm.$root;
  var ref = rootVueVM.$mp || {};
  var mpType = ref.mpType; if ( mpType === void 0 ) mpType = '';
  var page = ref.page;

  // 优化后台态页面进行 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
  if (mpType === 'app' || !page || typeof page.setData !== 'function') {
    return
  }
  return page
}

// 优化每次 setData 都传递大量新数据
function updateDataToMP () {
  var page = getPage(this);
  if (!page) {
    return
  }

  var data = formatVmData(this);
  throttleSetData(page.setData.bind(page), data);
}

function initDataToMP () {
  var page = getPage(this);
  if (!page) {
    return
  }

  var data = collectVmData(this.$root);
  page.setData(data);
}

function getVM (vm, comkeys) {
  if ( comkeys === void 0 ) comkeys = [];

  var keys = comkeys.slice(1);
  if (!keys.length) { return vm }

  return keys.reduce(function (res, key) {
    var len = res.$children.length;
    for (var i = 0; i < len; i++) {
      var v = res.$children[i];
      var k = getComKey(v);
      if (k === key) {
        res = v;
        return res
      }
    }
    return res
  }, vm)
}

function getHandle (vnode, eventid, eventTypes) {
  if ( eventTypes === void 0 ) eventTypes = [];

  var res = [];
  if (!vnode || !vnode.tag) {
    return res
  }

  var ref = vnode || {};
  var data = ref.data; if ( data === void 0 ) data = {};
  var children = ref.children; if ( children === void 0 ) children = [];
  var componentInstance = ref.componentInstance;
  if (componentInstance) {
    // 增加 slot 情况的处理
    // Object.values 会多增加几行编译后的代码
    Object.keys(componentInstance.$slots).forEach(function (slotKey) {
      var slot = componentInstance.$slots[slotKey];
      var slots = Array.isArray(slot) ? slot : [slot];
      slots.forEach(function (node) {
        res = res.concat(getHandle(node, eventid, eventTypes));
      });
    });
  } else {
    // 避免遍历超出当前组件的 vm
    children.forEach(function (node) {
      res = res.concat(getHandle(node, eventid, eventTypes));
    });
  }

  var attrs = data.attrs;
  var on = data.on;
  if (attrs && on && attrs['eventid'] === eventid) {
    eventTypes.forEach(function (et) {
      var h = on[et];
      if (typeof h === 'function') {
        res.push(h);
      } else if (Array.isArray(h)) {
        res = res.concat(h);
      }
    });
    return res
  }

  return res
}

function getWebEventByMP (e) {
  var type = e.type;
  var timeStamp = e.timeStamp;
  var touches = e.touches;
  var detail = e.detail; if ( detail === void 0 ) detail = {};
  var target = e.target; if ( target === void 0 ) target = {};
  var currentTarget = e.currentTarget; if ( currentTarget === void 0 ) currentTarget = {};
  var x = detail.x;
  var y = detail.y;
  var event = {
    mp: e,
    type: type,
    timeStamp: timeStamp,
    x: x,
    y: y,
    target: Object.assign({}, target, detail),
    currentTarget: currentTarget,
    stopPropagation: noop,
    preventDefault: noop
  };

  if (touches && touches.length) {
    Object.assign(event, touches[0]);
    event.touches = touches;
  }
  return event
}

function handleProxyWithVue (e) {
  var rootVueVM = this.$root;
  var type = e.type;
  var target = e.target; if ( target === void 0 ) target = {};
  var currentTarget = e.currentTarget;
  var ref = currentTarget || target;
  var dataset = ref.dataset; if ( dataset === void 0 ) dataset = {};
  var comkey = dataset.comkey; if ( comkey === void 0 ) comkey = '';
  var eventid = dataset.eventid;
  var vm = getVM(rootVueVM, comkey.split(','));

  if (!vm) {
    return
  }

  var webEventTypes = eventTypeMap[type] || [type];
  var handles = getHandle(vm._vnode, eventid, webEventTypes);

  // TODO, enevt 还需要处理更多
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Event
  if (handles.length) {
    var event = getWebEventByMP(e);
    if (handles.length === 1) {
      var result = handles[0](event);
      return result
    }
    handles.forEach(function (h) { return h(event); });
  }
}

// for platforms
// import config from 'core/config'
// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform patch function
Vue$3.prototype.__patch__ = patch;

// public mount method
Vue$3.prototype.$mount = function (el, hydrating) {
  var this$1 = this;

  // el = el && inBrowser ? query(el) : undefined
  // return mountComponent(this, el, hydrating)

  // 初始化小程序生命周期相关
  var options = this.$options;

  if (options && (options.render || options.mpType)) {
    var mpType = options.mpType; if ( mpType === void 0 ) mpType = 'page';
    return this._initMP(mpType, function () {
      return mountComponent(this$1, undefined, undefined)
    })
  } else {
    return mountComponent(this, undefined, undefined)
  }
};

// for mp
Vue$3.prototype._initMP = initMP;

Vue$3.prototype.$updateDataToMP = updateDataToMP;
Vue$3.prototype._initDataToMP = initDataToMP;

Vue$3.prototype.$handleProxyWithVue = handleProxyWithVue;

/*  */

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(35)('wks');
var uid = __webpack_require__(25);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var ctx = __webpack_require__(22);
var hide = __webpack_require__(10);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(31);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(29);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50);
var defined = __webpack_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMediaTime", function() { return formatMediaTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeTohhmmss", function() { return timeTohhmmss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodayDate", function() { return getTodayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeInfo", function() { return getTimeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seckillCountdown", function() { return seckillCountdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatYMD", function() { return formatYMD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormatTimestamp", function() { return dateFormatTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yesterdayDate", function() { return yesterdayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tomorrowDate", function() { return tomorrowDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nDayAgo", function() { return nDayAgo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nDayLater", function() { return nDayLater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampToCommonDate", function() { return timestampToCommonDate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

/**
 * Created by guangqiang on 2017/10/3.
 */

function add0(m) {
  return m < 10 ? '0' + m : m;
}

var formatMediaTime = function formatMediaTime(duration) {
  var min = Math.floor(duration / 60);
  var second = duration - min * 60;
  min = add0(m);
  second = add0(second);
  return min + ':' + second;
};

var timeTohhmmss = function timeTohhmmss(seconds) {
  var hh = void 0,
      mm = void 0,
      ss = void 0;
  if (seconds === null || seconds < 0) return;
  var pseconds = parseInt(seconds);
  hh = pseconds / 3600 | 0;
  pseconds = parseInt(pseconds) - parseInt(hh) * 3600;
  hh = add0(parseInt(hh));
  if (parseInt(hh) >= 24) hh = "00";
  mm = parseInt(pseconds) / 60 | 0;
  ss = parseInt(pseconds) - parseInt(mm) * 60;
  mm = add0(parseInt(mm));
  ss = add0(parseInt(ss));
  return hh + ":" + mm + ":" + ss;
};

var getTodayDate = function getTodayDate() {
  var now = new Date();
  var yy = now.getFullYear();
  var mm = now.getMonth() + 1;
  var dd = now.getDate();
  var day = new Array();
  day[0] = "星期日";
  day[1] = "星期一";
  day[2] = "星期二";
  day[3] = "星期三";
  day[4] = "星期四";
  day[5] = "星期五";
  day[6] = "星期六";
  return yy + '年' + mm + '月' + dd + '日 ' + day[now.getDay()];
};

var timestampToCommonDate = function timestampToCommonDate(timestamp) {
  var time = new Date(timestamp);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
};

var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var t1 = [year, month, day].map(formatNumber).join('/');
  var t2 = [hour, minute, second].map(formatNumber).join(':');
  return t1 + ' ' + t2;
};

var formatYMD = function formatYMD(timestamp) {
  var date = new Date(timestamp);
  var year = date.getFullYear();
  var month = add0(date.getMonth() + 1);
  var day = add0(date.getDate());
  return year + '-' + month + '-' + day;
};

var dateFormatTimestamp = function dateFormatTimestamp(DATE) {
  var date = new Date(DATE).setHours(0, 0, 0, 0);
  return date;
};

var getTimeInfo = function getTimeInfo(str) {
  if (!str) return '';
  var date = new Date(str);
  var time = new Date().getTime() - date.getTime();
  if (time < 0) {
    return '';
  } else if (time / 1000 < 60) {
    return '刚刚';
  } else if (time / 60000 < 60) {
    return parseInt(time / 60000) + '分钟前';
  } else if (time / 3600000 < 24) {
    return parseInt(time / 3600000) + '小时前';
  } else if (time / 86400000 < 31) {
    return parseInt(time / 86400000) + '天前';
  } else if (time / 2592000000 < 12) {
    return parseInt(time / 2592000000) + '月前';
  } else {
    return parseInt(time / 31536000000) + '年前';
  }
};

var seckillCountdown = function seckillCountdown(timer) {
  var deadLine = timer;
  var newData = new Date().getTime();
  var rightTime = deadLine - newData;
  var dd = '00',
      hh = '00',
      mm = '00',
      ss = '00';
  if (rightTime > 0) {
    dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
    hh = Math.floor(rightTime / 1000 / 60 / 60 % 24);
    mm = Math.floor(rightTime / 1000 / 60 % 60);
    ss = Math.floor(rightTime / 1000 % 60);
    hh = add0(parseInt(hh));
    mm = add0(parseInt(mm));
    ss = add0(parseInt(ss));
  }
  var seckill = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
  var over = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, {
    dd: dd,
    hh: hh,
    mm: mm,
    ss: ss,
    seckill: seckill
  });
  return over;
};

var yesterdayDate = function yesterdayDate(currentDate) {
  var preDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
  return preDate;
};

var tomorrowDate = function tomorrowDate(currentDate) {
  var nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
  return nextDate;
};

var nDayAgo = function nDayAgo(t, n) {
  // let now = new Date().getTime()
  var date = new Date(t - n * 24 * 60 * 60 * 1000);
  return date;
};

var nDayLater = function nDayLater(t, n) {
  var date = new Date(t + n * 24 * 60 * 60 * 1000);
  return date;
};



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _array; });
/**
 * Created by guangqiang on 2017/8/27.
 */

/** 数组拓展工具类 **/

var _array = {

  /**
   * 往数组中添加元素，若数组中已有此元素，则删除重复元素，添加新的元素
   * @param array
   * @param item
   * @returns {*}
   */
  update: function update(array, item) {
    if (!Array.isArray(array)) {
      return [];
    }
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      if (item === value) {
        array.splice(i, 1);
      }
    }
    array.push(item);
    return array;
  },

  /**
   * 往数组中添加元素，若数组中有则不再添加
   * @param array
   * @param item
   * @returns {*}
   */
  add: function add(array, item) {
    if (!Array.isArray(array)) {
      return [];
    }
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      if (item === value) {
        return array;
      }
    }
    array.push(item);
    return array;
  },

  /**
   * 往数组中追加元素，元素追加到数组栈底
   * @param array
   * @param item
   * @returns {*}
   */
  push: function push(array, item) {
    if (!Array.isArray(array)) {
      return [];
    }
    array.push(item);
    return array;
  },

  /**
   * 往数组中追加元素，元素追加到数组栈顶
   * @param array
   * @param item
   * @returns {*}
   */
  unshift: function unshift(array, item) {
    if (!Array.isArray(array)) {
      return [];
    }
    array.unshift(item);
    return array;
  },

  /**
   * 往数组的指定位置插入一个元素
   * @param array
   * @param location
   * @param item
   * @returns {*}
   * @private
   */
  _splice: function _splice(array, location, item) {
    if (!Array.isArray(array)) {
      return [];
    }
    array.splice(location, 0, item);
    return array;
  },

  /**
   * 往数组中指定位置插入指定长度个数的元素
   * @param array
   * @param item
   * @param location
   * @returns {*}
   */
  splice_A: function splice_A(array, location, length, item) {
    if (!Array.isArray(array)) {
      return [];
    }
    array.splice(location, length, item);
    return array;
  },

  /**
   * 删除数组中指定元素
   * @param array
   * @param item
   * @returns {*}
   */
  remove: function remove(array, item) {
    if (!Array.isArray(array)) {
      return [];
    }
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      if (item === value) {
        array.splice(i, 1);
      }
    }
    return array;
  },

  /**
   * 删除数组中最后一个元素
   * @param array
   * @returns {*}
   */
  pop: function pop(array) {
    if (!Array.isArray(array)) {
      return [];
    }
    array.pop();
    return array;
  },

  /**
   * 删除数组中第一个元素
   * @param array
   * @returns {*}
   */
  shift: function shift(array) {
    if (!Array.isArray(array)) {
      return [];
    }
    array.shift();
    return array;
  },

  /**
   * 删除数组中指定位置，指定长度的元素
   * @param array
   * @param location
   * @param length
   * @returns {*}
   */
  splice_D: function splice_D(array, location, length) {
    if (!Array.isArray(array)) {
      return [];
    }
    array.splice(location, length);
    return array;
  },

  /**
   * 交换数组中两个元素的位置
   * @param array
   * @param index1
   * @param index2
   * @returns {*}
   */
  swapItems: function swapItems(array, index1, index2) {
    array[index1] = array.splice(index2, 1, array[index1])[0];
    return array;
  },

  /**
   * 将指定位置的元素移至数组栈顶
   * @param array
   * @param index
   * @returns {*}
   */
  moveItemToFirst: function moveItemToFirst(array, index) {
    var temp = array[index];
    if (index == 0) return array;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === array[index]) {
        array.splice(i, 1);
        break;
      }
    }
    array.unshift(temp);
    return array;
  },

  /**
   * 判断两个数组是否相等
   * @param arr1
   * @param arr2
   * @returns {boolean}
   */
  isEqual: function isEqual(array1, array2) {
    if (!(Array.isArray(array1) && Array.isArray(array2))) {
      return false;
    }
    if (array1.length !== array2.length) {
      return false;
    }
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_sep_line_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2b65aa0e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_sep_line_vue__ = __webpack_require__(170);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b65aa0e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_sep_line_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2b65aa0e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_sep_line_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/sep-line.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sep-line.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b65aa0e", Component.options)
  } else {
    hotAPI.reload("data-v-2b65aa0e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return chooseLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return removeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return showShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return pageScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return startPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return stopPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleScan", function() { return handleScan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNetWork", function() { return checkNetWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toast", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toastSuccess", function() { return toastSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionSheet", function() { return actionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return saveImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_formatTime__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_arrayExtension__ = __webpack_require__(16);


/** Created by guangqiang on 2018-06-29 18:17:42 */




var getStorage = function getStorage(key) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.getStorage({
      key: key,
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var setStorage = function setStorage(key, value) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.setStorage({
      key: key,
      data: value,
      success: function success() {
        resolve();
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var removeStorage = function removeStorage(key) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.removeStorage({
      key: key,
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var clearStorage = function clearStorage() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    try {
      wx.clearStorageSync();
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

var getLocation = function getLocation() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
    wx.getLocation({
      type: "wgs84",
      success: function success(_ref) {
        var latitude = _ref.latitude,
            longitude = _ref.longitude,
            speed = _ref.speed,
            accuracy = _ref.accuracy;

        resolve({ latitude: latitude, longitude: longitude, speed: speed, accuracy: accuracy });
      },
      fail: function fail() {
        resolve({
          latitude: -999,
          longitude: -999
        });
      }
    });
  });
};

var chooseLocation = function chooseLocation() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.chooseLocation({
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var openLocation = function openLocation(_ref2) {
  var latitude = _ref2.latitude,
      longitude = _ref2.longitude;
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 18,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var login = function login() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.login({
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var getUserInfo = function getUserInfo(obj) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.getUserInfo(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, obj, {
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    }));
  });
};

var addCard = function addCard() {
  var cardId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var cardExt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.addCard({
      cardList: [{
        cardId: cardId,
        cardExt: cardExt
      }],
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var chooseImage = function chooseImage() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var sourceType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['album'];
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.chooseImage({
      count: count,
      sourceType: sourceType,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var handleScan = function handleScan() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.scanCode({
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var showModal = function showModal(title, content, isCancel) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
    wx.showModal({
      title: title,
      content: content,
      showCancel: isCancel,
      success: function success(res) {
        if (res.confirm) {
          resolve('ok');
        } else if (res.cancel) {
          resolve('cancle');
        }
      }
    });
  });
};

var toast = function toast(content) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showToast({
      title: content,
      icon: 'none',
      duration: 4000,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var toastSuccess = function toastSuccess(content) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showToast({
      title: content,
      icon: 'success',
      duration: 3000,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var actionSheet = function actionSheet(items) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showActionSheet({
      itemList: items,
      success: function success(res) {
        resolve(res.tapIndex);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var showShareMenu = function showShareMenu() {
  return wx.showShareMenu;
};

var pageScrollTo = function pageScrollTo() {
  return wx.pageScrollTo;
};

var alert = function alert(content) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showModal({
      title: '',
      content: content,
      showCancel: false,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var navigateTo = function navigateTo(url) {
  wx.navigateTo({
    url: url
  });
};

var redirectTo = function redirectTo(url) {
  wx.redirectTo({
    url: url
  });
};

var startPullDownRefresh = function startPullDownRefresh() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.startPullDownRefresh({
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var stopPullDownRefresh = function stopPullDownRefresh() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.stopPullDownRefresh({
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    });
  });
};

var request = function request(params) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.showNavigationBarLoading();
    var beforeRequest = new Date().getTime();
    wx.request({
      url: params.url,
      data: params.data,
      header: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ 'Content-Type': 'application/json' }, params.header),
      method: params.method,
      success: function success(res) {
        var isSuccess = false;
        if (parseInt(res.statusCode / 100) == 2) {
          if (res.data.code == 0) {
            isSuccess = true;
          }
        }

        var response = res.data;
        response.statusCode = res.statusCode;
        var pages = getCurrentPages();
        var currentPage = pages[pages.length - 1];
        var route = currentPage.route;
        var networkType = wx.getStorageSync('networkType');
        var afterRequest = new Date().getTime();
        var timeDif = afterRequest - beforeRequest;
        var networkArr = wx.getStorageSync('networkArr') || [];
        if (networkArr.length >= 30) {
          wx.removeStorageSync('networkArr');
          networkArr = [];
        }
        var time = Object(__WEBPACK_IMPORTED_MODULE_2__utils_formatTime__["timestampToCommonDate"])(new Date().getTime());
        networkArr = __WEBPACK_IMPORTED_MODULE_3__utils_arrayExtension__["a" /* _array */].unshift(networkArr, { url: params.url, params: params.data, res: response, time: time, route: route, timeDif: timeDif, networkType: networkType, isSuccess: isSuccess });
        wx.setStorageSync('networkArr', networkArr);

        if (!isSuccess) {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 4000
          });
        }
        wx.hideNavigationBarLoading();
        resolve(res.data);
      },
      fail: function fail(e) {
        var pages = getCurrentPages();
        var currentPage = pages[pages.length - 1];
        var route = currentPage.route;
        var networkType = wx.getStorageSync('networkType');
        var afterRequest = new Date().getTime();
        var timeDif = afterRequest - beforeRequest;
        var networkArr = wx.getStorageSync('networkArr') || [];
        if (networkArr.length >= 30) {
          wx.removeStorageSync('networkArr');
          networkArr = [];
        }
        var time = Object(__WEBPACK_IMPORTED_MODULE_2__utils_formatTime__["timestampToCommonDate"])(new Date().getTime());
        networkArr = __WEBPACK_IMPORTED_MODULE_3__utils_arrayExtension__["a" /* _array */].unshift(networkArr, { url: url, params: params, res: e, time: time, route: route, timeDif: timeDif, networkType: networkType, isSuccess: false });
        wx.setStorageSync('networkArr', networkArr);

        wx.showToast({
          title: e.errMsg,
          icon: 'none',
          duration: 4000
        });
        wx.hideNavigationBarLoading();
        reject(e);
      }
    });
  });
};

var checkNetWork = function checkNetWork() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.getNetworkType({
      success: function success(res) {
        var networkType = res.networkType;
        if (networkType === 'none' || networkType === 'unknown') {
          resolve(false);
        } else {
          resolve(true);
        }
      },
      fail: function fail(e) {
        resolve(false);
      }
    });
  });
};

var uploadFile = function uploadFile(params) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.uploadFile(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, params, {
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(e) {
        reject(e);
      }
    }));
  });
};

var saveImage = function saveImage(url) {
  wx.downloadFile({
    url: url,
    success: function success(res) {
      var path = res.tempFilePath;
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success: function success(res) {
          toastSuccess('保存成功！');
        },
        fail: function fail(res) {
          toast('保存失败！');
        }
      });
    },
    fail: function fail(res) {
      toast('保存失败！');
    }
  });
};

var checkSession = function checkSession() {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.checkSession({
      success: function success() {
        // session_key 未过期，并且在本生命周期一直有效
        resolve(true);
      },
      fail: function fail() {
        // session_key 已经失效，需要重新执行登录流程
        resolve(false);
      }
    });
  });
};



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(35)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(19) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_shoppingCart__ = __webpack_require__(82);

/** Created by guangqiang on 2018-06-29 10:26:46 */





__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
  modules: {
    shoppingCart: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      namespaced: true
    }, __WEBPACK_IMPORTED_MODULE_3__modules_shoppingCart__["a" /* default */])
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapMutations; });
/* unused harmony export mapGetters */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapActions; });
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(84);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(93);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(19);
var wksExt = __webpack_require__(42);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(23);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ENV */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* unused harmony export MSITE_URL */
/* unused harmony export VENILOG_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return XIAMI_URL; });
/* unused harmony export SET_HOST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return currentHost; });
/**
 * Created by guangqiang on 2017/10/1.
 */

var host = {
  dev: {
    API_URL: 'https://meituan.cangdu.org',
    XIAMI_URL: 'https://api-m.mtime.cn',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    appId: 'wx3d5c531f5e123456',
    envVersion: 'develop'
  },
  test: {
    API_URL: 'https://meituan.cangdu.org',
    XIAMI_URL: 'http://10.10.21.108:9990',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    appId: 'wx3d5c531f5e123456',
    envVersion: 'develop'
  },
  qa: {
    API_URL: 'https://meituan.cangdu.org',
    XIAMI_URL: 'http://xiamirun.avosapps.com',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com'
  },
  pre: {
    API_URL: 'https://meituan.cangdu.org',
    XIAMI_URL: 'https://api-m.mtime.cn',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    appId: 'wx3d5c531f5e123456',
    envVersion: 'develop'
  },
  prd: {
    API_URL: 'https://wx.waimai.meituan.com',
    XIAMI_URL: 'https://api-m.mtime.cn',
    MSITE_URL: 'https://api.douban.com',
    VENILOG_URL: 'https://api.douban.com',
    appId: 'wx3d5c531f5e123456',
    envVersion: 'trial'
  }
};

var ENV = 'prd';
var currentHost = host[ENV];

var SET_HOST = function SET_HOST() {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dev';

  ENV = env;
  currentHost = host[ENV];
};

var API_URL = currentHost.API_URL;
var XIAMI_URL = currentHost.XIAMI_URL;
var MSITE_URL = currentHost.MSITE_URL;
var VENILOG_URL = currentHost.VENILOG_URL;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(74)(false);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(18);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepClone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

/**
 * Created by guangqiang on 2017/11/24.
 */

function deepClone(data) {

  var obj = {};
  var originQueue = [data];
  var copyQueue = [obj];
  // 以下两个队列用来保存复制过程中访问过的对象，以此来避免对象环的问题（对象的某个属性值是对象本身）
  var visitQueue = [];
  var copyVisitQueue = [];
  while (originQueue.length > 0) {
    var _data = originQueue.shift();
    var _obj = copyQueue.shift();
    visitQueue.push(_data);
    copyVisitQueue.push(_obj);
    for (var key in _data) {
      var _value = _data[key];
      if ((typeof _value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(_value)) !== 'object') {
        _obj[key] = _value;
      } else {
        // 使用indexOf可以发现数组中是否存在相同的对象(实现indexOf的难点就在于对象比较)
        var index = visitQueue.indexOf(_value);
        if (index >= 0) {
          _obj[key] = copyVisitQueue[index];
        }
        originQueue.push(_value);
        _obj[key] = {};
        copyQueue.push(_obj[key]);
      }
    }
  }
  return obj;
}



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(86)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(19);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(55);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(87);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(89);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(88);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(57).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
var global = __webpack_require__(2);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(20);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(49);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7);
var aFunction = __webpack_require__(23);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);
var invoke = __webpack_require__(120);
var html = __webpack_require__(57);
var cel = __webpack_require__(30);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(18)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var isObject = __webpack_require__(11);
var newPromiseCapability = __webpack_require__(45);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jointStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

/** Created by guangqiang on 2018-07-02 14:57:01 */

var jointStyle = function jointStyle(style) {
  var str = [];
  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(style).forEach(function (key) {
    str.push(key + ':' + style[key] + ';');
  });
  return str.join(';');
};



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export movieList */
/* unused harmony export movieDetail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCityLocation; });
/* unused harmony export queryHomeHeadCategory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_commonType__ = __webpack_require__(69);
/**
 * Created by guangqiang on 2017/10/3.
 */





var movieList = function movieList(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].PICTURE_LIST, params, false);
};
var movieShowTimeList = function movieShowTimeList(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].MOVIE_SHOWTIME, params, false, __WEBPACK_IMPORTED_MODULE_2__constants_commonType__["a" /* ApiSource */].TIMEMOVIE, function () {});
};
var movieComeingNewList = function movieComeingNewList(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].MOVIE_COMEING_NEW, params, __WEBPACK_IMPORTED_MODULE_2__constants_commonType__["a" /* ApiSource */].TIMEMOVIE);
};
var movieDetail = function movieDetail(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].MOVIE_DETAIL, params, __WEBPACK_IMPORTED_MODULE_2__constants_commonType__["a" /* ApiSource */].TIMETICKET);
};

var queryHomeHeadCategory = function queryHomeHeadCategory(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].HOME_HEAD_CATEGORY + '?ui=' + params.ui + '&region_id=' + params.region_id + '&region_version=' + params.region_version, params, false);
};
var createActivity = function createActivity(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].CREATE_ACTIVITY, params, true);
};
var getActivityDetail = function getActivityDetail(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].GET_ACTIVITY_DETAIL + '/' + params.id + '?longitude=' + params.longitude + '&latitude=' + params.latitude + '&append=' + params.append, {}, false);
};
var getActivityDetailGpsNull = function getActivityDetailGpsNull(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].GET_ACTIVITY_DETAIL + '/' + params.id + '?append=' + params.append, {}, false);
};
var bargainAction = function bargainAction(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].BARGAIN_EVENT, params, true);
};
var bargainParticipatorList = function bargainParticipatorList(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].BARGAIN_PARTICIPATOR_LIST, params, false);
};
var userLogin = function userLogin(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].LOGIN + '?trace=true', params, false);
};
var updateUserLogin = function updateUserLogin(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["c" /* putFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].UPDATE_USER_INFO, params, false);
};
var refreshToken = function refreshToken(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].REFRESH_TOKEN, params, false);
};
var queryActivityMaxLimit = function queryActivityMaxLimit(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].QUERY_ACTIVITY_MAXLIMIT, params, false);
};
var conmuseRecordList = function conmuseRecordList(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].CONSUME_RECORD_LIST, params, false);
};
var getActivityList = function getActivityList(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].GETACTIVITY_LIST, params, false);
};
var getConsumeDetailData = function getConsumeDetailData(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].PAYMENT_DETAIL + '/' + params.id + '?append=' + params.append, {}, false);
};
var createOrderData = function createOrderData(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].CREATE_ORDER, params, false);
};
var payOrderData = function payOrderData(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].PAY_ORDER + '/' + params.id + '/pay', params, false);
};
var gotCouponFinish = function gotCouponFinish(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].GOT_COUPON_FINISH + '/' + params.id + '/metadata', params, false);
};
var getCouponCard = function getCouponCard(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].GET_COUPON_CARD, params, false);
};
var getCouponList = function getCouponList(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].GET_COUPON_LIST, params, false);
};
var queryShopData = function queryShopData(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].QUERY_SHOP_DATA + '/' + params.id + '?append=' + params.append, {}, false);
};
var getMyCouponList = function getMyCouponList(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["a" /* getFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].GET_MY_COUPON_LIST, params, false);
};
var shareStatistic = function shareStatistic(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].SHARE_STATISTIC, params, false);
};
var cancelOrder = function cancelOrder(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["c" /* putFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].CANCEL_ORDER + '/' + params.id + '/cancel', params, false);
};
var miniAppLogin = function miniAppLogin(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__network_request_HttpExtension__["b" /* postFetch */])(__WEBPACK_IMPORTED_MODULE_1__constants_pathConfig__["a" /* PATH */].MINIAPP_LIGIN + '?scene=bind', params, false);
};

var postFormId = function postFormId() {};



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PATH; });
/** Created by guangqiang on 2018-06-29 10:26:46 */

var PATH = {
  HOME_HEAD_CATEGORY: '/weapp/v1/v8/home/head',
  PICTURE_DETAIL: '/hp/detail/',
  PICTURE_GRID_LIST: '/hp/bymonth/',
  MOVIE_LIST: '/movie/list/',

  CITY_LOCATION: '/v1/cities',
  CREATE_ACTIVITY: '/mc/v1/me/activities',
  GET_ACTIVITY_DETAIL: '/mc/v1/activities',
  BARGAIN_EVENT: '/mc/v1/me/participants',
  BARGAIN_PARTICIPATOR_LIST: '/mc/v1/participants',
  LOGIN: '/uc/v1/auth/login/wx-miniapp',
  UPDATE_USER_INFO: '/uc/v1/account/wx',
  REFRESH_TOKEN: '/uc/v1/auth/refresh-token',
  QUERY_ACTIVITY_MAXLIMIT: '/mc/v1/activities',
  CONSUME_RECORD_LIST: '/tc/v1/me/orders',
  GETACTIVITY_LIST: '/mc/v1/me/activities',
  PAYMENT_DETAIL: '/tc/v1/me/orders',
  CREATE_ORDER: '/tc/v1/me/orders',
  PAY_ORDER: '/tc/v1/me/orders',
  GOT_COUPON_FINISH: '/mc/v1/participants',
  GET_COUPON_CARD: '/mc/v1/coupons',
  GET_COUPON_LIST: '/mc/v1/coupons',
  QUERY_SHOP_DATA: '/sc/v1/shops',
  GET_MY_COUPON_LIST: '/mc/v1/me/coupons',
  SHARE_STATISTIC: '/cc/v1/me/footprints',
  CANCEL_ORDER: '/tc/v1/me/orders',
  POST_FORM_ID: '/xc/api/v1/miniapps',
  MINIAPP_LIGIN: '/uc/v1/auth/login/wx-miniapp'
};



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export monthList */
/* unused harmony export logEventType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiSource; });
/* unused harmony export activityTabList */
/* unused harmony export bargainTip */
/* unused harmony export orderStatus */
/* unused harmony export bargainStatus */
/**
 * Created by guangqiang on 2017/10/3.
 */

var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var activityTabList = [{
  title: "全部",
  type: "all"
}, {
  title: "进行中",
  type: "doing"
}, {
  title: "已结束",
  type: "end"
}];

var orderStatus = {
  '01': '待支付',
  '11': '已取消',
  '12': '超时取消',
  '20': '已部分支付',
  '21': '支付成功'
};

var bargainTip = ['扶我起来，我还能砍！', '唔给力吧！', '做好事，不用谢', '这一刀可还行伐', '感情深，砍得狠', '今天手感还不错', '看我慈悲刀法', '砍价应该体面~', '纸短情长啊不如砍价~', '给点力，砍到底'];

var bargainStatus = {
  DOING: 'DOING', // 正在砍
  SUCCESS: 'SUCCESS', // 砍价拼团成功
  FAIL: 'FAIL', // 拼团失败
  END: 'END', // 来迟了,
  OVER_LIMIT: 'OVER_LIMIT' // 本次活动领取超过上限


  // 事件埋点统计类型
};var logEventType = {
  enterPage: 3001,
  exitPage: 3002,
  click: 3003,
  slide: 3004,
  gesture: 3005

  // 同一工程多域名配置
};var ApiSource = {
  meituan: 'meituan',
  XIAMIMUSIC: 'XIAMIMUSIC',
  TIMEMOVIE: 'TIMEMOVIE'
};



/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(73) });


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(26);
var toObject = __webpack_require__(38);
var IObject = __webpack_require__(50);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(51);
var toAbsoluteIndex = __webpack_require__(75);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_formatTime__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_arrayExtension__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_shoppingCart_data__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_deepClone__ = __webpack_require__(52);
/** Created by guangqiang on 2018-09-27 17:32:35 */





var state = {
  shopInfo: {},
  foods: [],
  spus: [],
  commentInfo: [],
  reduceFee: 0.0,
  visibleSkuModal: false,
  visibleItemModal: false,
  skuInfo: {},
  previewInfo: {}
};

var mutations = {
  changeShopInfoDataMut: function changeShopInfoDataMut(state, info) {
    state.shopInfo = info;
  },
  changeFoodsDataMut: function changeFoodsDataMut(state, info) {
    state.foods = info;
  },
  changeSpusDataMut: function changeSpusDataMut(state, info) {
    state.spus = info;
  },
  changeCommentDataMut: function changeCommentDataMut(state, info) {
    state.commentInfo = info;
  },
  changeReduceFeeDataMut: function changeReduceFeeDataMut(state, info) {
    state.reduceFee = info;
  },
  changeSkuModalMut: function changeSkuModalMut(state, info) {
    state.visibleSkuModal = info;
  },
  changeItemModalMut: function changeItemModalMut(state, info) {
    state.visibleItemModal = info;
  },
  changeSkuDataMut: function changeSkuDataMut(state, info) {
    state.skuInfo = info;
  },
  changePreviewDataMut: function changePreviewDataMut(state, info) {
    state.previewInfo = info;
  }
};

var actions = {
  getMenuDataAction: function getMenuDataAction(_ref) {
    var state = _ref.state,
        commit = _ref.commit;

    var res = __WEBPACK_IMPORTED_MODULE_2__pages_shoppingCart_data__["a" /* shoppingCart */].menuData.data;

    var shopInfo = res.poi_info || {};
    shopInfo.prompt_text = res.shopping_cart.prompt_text;
    shopInfo.activity_info = JSON.parse(res.shopping_cart.activity_info.policy);
    commit('changeShopInfoDataMut', shopInfo);

    var foods = res.food_spu_tags;
    foods = foods.map(function (item) {
      item.count = 0;
      item.totalPrice = 0;
      return item;
    });
    commit('changeFoodsDataMut', foods);

    var arr = state.foods[0].spus.map(function (item) {
      item.sequence = 0;
      return item;
    });
    var spus = { title: foods[0].name, index: 0, list: arr };
    commit('changeSpusDataMut', spus);
  },
  getCommentDataAction: function getCommentDataAction(_ref2) {
    var state = _ref2.state,
        commit = _ref2.commit;

    var res = __WEBPACK_IMPORTED_MODULE_2__pages_shoppingCart_data__["a" /* shoppingCart */].commentData.data;
    var commentData = res;
    var comments = res.comments.map(function (item) {
      var reply = item.add_comment_list[0] || {};
      item.poi_reply_contents = reply.desc + '\uFF1A' + reply.content;
      item.commentTags = item.comment_labels.map(function (item) {
        return item.content;
      }).join();
      item.comment_time = Object(__WEBPACK_IMPORTED_MODULE_0__utils_formatTime__["formatYMD"])(item.comment_time * 1000);
      return item;
    });
    commentData.comments = comments;

    var commentMolds = res.comment_categories.map(function (item) {
      var num = item.replace(/[^0-9]/ig, "");
      var characters = item.match(/[\u4e00-\u9fa5]/g);
      var title = characters.join("");
      return title + '(' + num + ')';
    });
    res.labels.map(function (item) {
      var tag = item.content + '(' + item.label_count + ')';
      commentMolds.push(tag);
    });
    commentData.commentMolds = commentMolds;

    commit('changeCommentDataMut', commentData);
  },
  getCategoryMenuDataAction: function getCategoryMenuDataAction(_ref3, _ref4) {
    var state = _ref3.state,
        commit = _ref3.commit;
    var index = _ref4.index;

    var spus = {};
    spus.title = state.foods[index].name;
    spus.index = index;
    spus.list = state.foods[index].spus.map(function (item) {
      if (!item.sequence) item.sequence = 0;
      return item;
    });
    commit('changeSpusDataMut', spus);
  },
  addItemAction: function addItemAction(_ref5, _ref6) {
    var state = _ref5.state,
        commit = _ref5.commit;
    var item = _ref6.item,
        index = _ref6.index;

    var spus = state.spus;
    spus.list[index].sequence += 1;
    commit('changeSpusDataMut', spus);

    var foods = state.foods;
    var foodsIndex = spus.index;
    var selectedFood = foods[foodsIndex];
    selectedFood.count += 1;
    selectedFood.totalPrice += item.min_price + (item.min_price > 0 ? 1 : 0);
    commit('changeFoodsDataMut', foods);
  },
  reduceItemAction: function reduceItemAction(_ref7, _ref8) {
    var state = _ref7.state,
        commit = _ref7.commit;
    var item = _ref8.item,
        index = _ref8.index;

    var spus = state.spus;
    spus.list[index].sequence -= 1;
    if (spus.list[index].sequence <= 0) spus.list[index].sequence = 0;
    commit('changeSpusDataMut', spus);

    var foods = state.foods;
    var foodsIndex = spus.index;
    var selectedFood = foods[foodsIndex];
    selectedFood.count = selectedFood.count - 1;
    selectedFood.totalPrice = selectedFood.totalPrice - item.min_price - (item.min_price > 0 ? 1 : 0);
    commit('changeFoodsDataMut', foods);
  },
  closeShoppingCartAction: function closeShoppingCartAction(_ref9) {
    var state = _ref9.state,
        commit = _ref9.commit;

    var array = state.foods;
    var selectedArr = [];
    array.map(function (item, index) {
      item.spus.map(function (itm, idx) {
        if (itm.sequence > 0) {
          var price = itm.min_price * itm.sequence;
          itm.totalPrice = parseFloat(price).toFixed(1);
          selectedArr.push(itm);
        }
      });
    });
    var shopInfo = state.shopInfo;
    shopInfo.selectedArr = selectedArr;
    commit('changeShopInfoDataMut', shopInfo);
    wx.navigateTo({ url: '/pages/submitOrder/main' });
  },
  selectSkuAction: function selectSkuAction(_ref10, _ref11) {
    var state = _ref10.state,
        commit = _ref10.commit;
    var item = _ref11.item,
        index = _ref11.index;

    commit('changeSkuModalMut', true);
    var sku = {};
    var array = item.attrs;
    var selectedItems = [];
    for (var i = 0; i < array.length; i++) {
      var attr = array[i].values;
      attr.map(function (item, idx) {
        if (idx === 0) {
          item.selected = true;
          selectedItems.push(item.value);
        } else {
          item.selected = false;
        }
        return item;
      });
    }

    sku.item = item;
    sku.index = index;
    sku.attrs = array;
    sku.title = item.name;
    sku.selectedCount = item.sequence;
    sku.price = parseFloat(item.min_price).toFixed(1);
    sku.selectedItems = selectedItems.join(',');
    sku.time = new Date();
    commit('changeSkuDataMut', sku);
  },
  attrSelectAction: function attrSelectAction(_ref12, _ref13) {
    var state = _ref12.state,
        commit = _ref12.commit;
    var itm = _ref13.itm,
        idx = _ref13.idx,
        setIdx = _ref13.setIdx;

    var sku = state.skuInfo;
    var array = sku.attrs;
    var selectedItems = sku.selectedItems.split(',');
    var section = array[setIdx];
    for (var i = 0; i < section.values.length; i++) {
      var item = section.values[i];
      if (i === idx) {
        item.selected = true;
        selectedItems[setIdx] = item.value;
      } else {
        item.selected = false;
      }
    }
    sku.selectedItems = selectedItems.join(',');
    sku.time = new Date();
    commit('changeSkuDataMut', sku);
  },
  changeSkuModalDataAction: function changeSkuModalDataAction(_ref14, _ref15) {
    var state = _ref14.state,
        commit = _ref14.commit;
    var num = _ref15.num;

    var sku = state.skuInfo;
    sku.selectedCount = sku.selectedCount + num;
    commit('changeSkuDataMut', sku);
  },
  previewItemAction: function previewItemAction(_ref16, _ref17) {
    var state = _ref16.state,
        commit = _ref16.commit;
    var item = _ref17.item,
        index = _ref17.index;

    commit('changeItemModalMut', true);
    var preview = item;
    preview.preIndex = index;
    preview.description = item.skus[0].description;
    commit('changePreviewDataMut', preview);
  }
};

var getters = {};

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shoppingCart; });
var shoppingCart = {
  menuData: {
    "data": {
      "shopping_cart": {
        "activity_info_list": [],
        "shopping_cart_icon": "",
        "shipping_fee_cart_tip": "另需配送费¥1",
        "full_minus_grad": "0.9",
        "bg_color": "",
        "balance_button": {
          "button_font_color": "",
          "button_pic_url": ""
        },
        "activity_info": {
          "is_only_online": true,
          "content": "",
          "policy": "[{\"priceHigher\":50.0,\"reduce\":23.0,\"priceLower\":35.0},{\"priceHigher\":70.0,\"reduce\":33.0,\"priceLower\":50.0},{\"priceHigher\":1.7976931348623157E308,\"reduce\":43.0,\"priceLower\":70.0}]",
          "type": 1
        },
        "self_delivery_tip": "支持自取",
        "min_fee_cart_tip": 12.6,
        "empty_shopping_cart_icon": "",
        "prompt_text": "满35减23;满50减33;满70减43"
      },
      "latest_bought": {
        "tag_icon": "http://p1.meituan.net/aichequan/6544f95cd7826c383d54fa5c881919e61386.png",
        "tag": "op0010",
        "orderlist_his": [],
        "tag_name": "买过",
        "tag_sequence": 0
      },
      "friend_status": 1,
      "poi_info": {
        "can_use_coupon": 1,
        "app_delivery_tip": "由美团快送提供配送服务",
        "cityId": 0,
        "epp_per_order_donation_amount": 0,
        "score": 0.0,
        "dp_score": 0.0,
        "restrict_toast": "",
        "poi_impress": {
          "title": "印象墙",
          "impress_label": [{
            "label_type": 3,
            "label_desc_text": "",
            "label_color": "",
            "scheme_sec_url": "",
            "label_priority": 0,
            "scheme_url": "",
            "label_text": "\"味道赞\"",
            "label_url": ""
          }, {
            "label_type": 3,
            "label_desc_text": "",
            "label_color": "",
            "scheme_sec_url": "",
            "label_priority": 0,
            "scheme_url": "",
            "label_text": "\"价格实惠\"",
            "label_url": ""
          }, {
            "label_type": 3,
            "label_desc_text": "",
            "label_color": "",
            "scheme_sec_url": "",
            "label_priority": 0,
            "scheme_url": "",
            "label_text": "\"包装好\"",
            "label_url": ""
          }, {
            "label_type": 3,
            "label_desc_text": "",
            "label_color": "",
            "scheme_sec_url": "",
            "label_priority": 0,
            "scheme_url": "",
            "label_text": "\"分量足\"",
            "label_url": ""
          }]
        },
        "epp_join_status": 0,
        "story_info": {
          "poi_logo_icon": "http://p1.meituan.net/aichequan/9785c871522e3f80114e5ffa840e89671540.png",
          "entrance_url": "http://i.waimai.meituan.com/node/brand/brandstory?poiid=5196d4566c301788a5",
          "poi_tab_icon": "http://p1.meituan.net/aichequan/c630ac6e0aa178a7a11153908c2ff1b23114.png"
        },
        "label_info": [{
          "content": "35减23",
          "activity_id": 0,
          "priority": 0,
          "label_background_color": "",
          "content_color": "#FB4E44",
          "priority_sort_index": 0,
          "icon_url": "",
          "type": 2,
          "poi_service_type": 0,
          "label_frame_color": "#FDC9C6"
        }, {
          "content": "50减33",
          "activity_id": 0,
          "priority": 0,
          "label_background_color": "",
          "content_color": "#FB4E44",
          "priority_sort_index": 0,
          "icon_url": "",
          "type": 2,
          "poi_service_type": 0,
          "label_frame_color": "#FDC9C6"
        }, {
          "content": "70减43",
          "activity_id": 0,
          "priority": 0,
          "label_background_color": "",
          "content_color": "#FB4E44",
          "priority_sort_index": 0,
          "icon_url": "",
          "type": 2,
          "poi_service_type": 0,
          "label_frame_color": "#FDC9C6"
        }, {
          "content": "5.93折起",
          "activity_id": 0,
          "priority": 0,
          "label_background_color": "",
          "content_color": "#FB4E44",
          "priority_sort_index": 0,
          "icon_url": "",
          "type": 2,
          "poi_service_type": 0,
          "label_frame_color": "#FDC9C6"
        }, {
          "content": "新客减1",
          "activity_id": 0,
          "priority": 0,
          "label_background_color": "",
          "content_color": "#FB4E44",
          "priority_sort_index": 0,
          "icon_url": "",
          "type": 2,
          "poi_service_type": 0,
          "label_frame_color": "#FDC9C6"
        }],
        "speed_refund_status": 0,
        "shippingReduceFee": 0.0,
        "longitude": 0,
        "discounts2": [{
          "id": 2,
          "display_code": 2,
          "sequence": 1,
          "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
          "type": 6,
          "use_icon_from_server": 1,
          "info": "满35减23;满50减33;满70减43"
        }, {
          "id": 17,
          "display_code": 2,
          "sequence": 4,
          "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
          "type": 19,
          "use_icon_from_server": 1,
          "info": "折扣商品5.93折起"
        }, {
          "id": 22,
          "display_code": 2,
          "sequence": 99,
          "icon_url": "http://p1.meituan.net/xianfu/1cc4324d7d2f59f2cccb6920b57cd0902048.png",
          "type": 0,
          "use_icon_from_server": 1,
          "info": "本店新用户立减1元, 新用户立减17元"
        }],
        "poi_back_pic_url": "http://p0.meituan.net/aichequan/0db65652de81b2140a9eb6c2183f3296361823.png",
        "min_price_tip": "起送 ¥18",
        "poi_coupon": {
          "coupon_list": []
        },
        "remind_infos": [],
        "new_user_discount_restrict_toast": "",
        "origin_shipping_fee_tip": "¥3",
        "buz_code": 0,
        "status": 1,
        "buz_type": 0,
        "shipping_fee": 3.0,
        "has_poi_env": false,
        "poi_service_label": {
          "title": "",
          "scheme_url": "",
          "service_label": []
        },
        "invoice_support": 0,
        "support_pay": 1,
        "across_book_offset_days": 0,
        "avg_delivery_time": 33,
        "bulletin": "本店是正新旗下另一品牌官方直营店，位于龙茗路1689号，专注汉堡、炸鸡小吃、饮品，优惠多多，欢迎各位亲们点餐，品质保证，有专门的外卖专员层层把关，敬请放心，我们餐厅的联系方式：18800365696欢迎骚扰 谢谢您的光临~",
        "latitude": 0,
        "delivery_type": 0,
        "delivery_time_tip": "33分钟",
        "buz_menu_tip": "菜单",
        "poi_insurances": [],
        "poi_sell_status": 1,
        "promotion_head_pic_url": "",
        "pic_url": "http://p0.meituan.net/waimaipoi/6126e47d09268a4b0bc418488d693a9038058.jpg",
        "id": 470871157426160,
        "extraStatInfo": "",
        "dp_comment_number": 0,
        "distance": "2.1km",
        "min_price": 18.0,
        "name": "正新汉堡·炸鸡（东兰餐厅店）",
        "poi_prepare_time": "",
        "comment_number": 0,
        "is_meituan_delivery": true,
        "across_book_max_days": 0,
        "shipping_fee_tip": "配送 ¥1",
        "discount_restrict": 0,
        "poi_label": {
          "labels": [{
            "label_type": 3,
            "label_desc_text": "",
            "label_color": "",
            "scheme_sec_url": "",
            "label_priority": 0,
            "scheme_url": "",
            "label_text": "\"味道赞\"",
            "label_url": ""
          }, {
            "label_type": 3,
            "label_desc_text": "",
            "label_color": "",
            "scheme_sec_url": "",
            "label_priority": 0,
            "scheme_url": "",
            "label_text": "\"价格实惠\"",
            "label_url": ""
          }, {
            "label_type": 3,
            "label_desc_text": "",
            "label_color": "",
            "scheme_sec_url": "",
            "label_priority": 0,
            "scheme_url": "",
            "label_text": "\"包装好\"",
            "label_url": ""
          }, {
            "label_type": 3,
            "label_desc_text": "",
            "label_color": "",
            "scheme_sec_url": "",
            "label_priority": 0,
            "scheme_url": "",
            "label_text": "\"分量足\"",
            "label_url": ""
          }],
          "label_rank_field": ""
        },
        "is_favorite": 0,
        "is_sunshine": 0,
        "wm_poi_score": 4.5,
        "useRangeFeeEnum": "NO",
        "new_user_discount_restrict": 0,
        "shipping_time": "09:50-23:59",
        "address": "",
        "head_pic_url": "http://p0.meituan.net/business/655e8c7b2e65d035382bcba8d953723a243293.jpg",
        "share_tip": {
          "share_button_icon": "",
          "activity_id": 0,
          "share_info": {
            "content": "生活不只有诗和远方，还有美团外卖正新汉堡·炸鸡（东兰餐厅店）",
            "icon": "http://p0.meituan.net/waimaipoi/6126e47d09268a4b0bc418488d693a9038058.jpg",
            "title": "正新汉堡·炸鸡（东兰餐厅店）",
            "weixin_url": "pages/external/poi?poi_id=470871157426160&user_id=228577344&utm_source=7004",
            "url": "http://i.waimai.meituan.com/external/poi/470871157426160?utm_source=5913&amp;wmi_from=cpoiinfo&amp;user_id=228577344"
          },
          "description": "商家配送范围有限，建议分享给您附近的朋友",
          "description_icon": "",
          "channels": [2, 3]
        }
      },
      "recommend_food_info": {
        "log_field": {
          "recommend_food_type": 1
        },
        "title": "",
        "spu_list": []
      },
      "shopping_cart_entrance": {
        "content": "邀请拼单",
        "visible": 1,
        "icon_url": "http://p0.meituan.net/waimaipoi/6126e47d09268a4b0bc418488d693a9038058.jpg@420w_336h_1e_1c|watermark=1&&object=L2RwdGFrZWF3YXkvNWQxNTYwZjY1MDcwMzI0YzViZDUxNzlhMjIyYTk2Y2YyODMzOC5wbmc=&p=1|watermark=2&&text=5q2j5paw5rGJ5aChwrfngrjpuKHvvIjkuJzlhbDppJAuLi4=&type=UEZN&size=32&color=I0ZGRkZGRg==&p=1&x=20&y=270|watermark=2&&text=5ruhMzXlh48yMzvmu6E1MOWHjzMzO+a7oTcw5YePNDM=&type=UEZN&size=24&color=IzMzMzMzMw==&p=1&x=20&y=320.webp",
        "shop_cart_id": ""
      },
      "show_rcmd_pois": false,
      "patch_order_button_title": "",
      "container_template": {
        "code": 0,
        "is_page": false
      },
      "is_show_rcmd_pois": false,
      "food_spu_tags": [{
        "tags": [],
        "activity_tag": "",
        "icon": "http://p1.meituan.net/aichequan/87f966955f693102d67daf2ec44b58411361.png",
        "tag": "100",
        "has_next_page": false,
        "type": 3,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 0,
        "description": "",
        "sequence": 0,
        "name": "热销",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": [3]
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售754",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [{
            "height": 30,
            "picture_url": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
            "width": 60
          }],
          "food_label_text": "",
          "id": 747123773,
          "min_price": 14.9,
          "description": "分量超足，食材丰富，一口下去就可以咬到肉，不容错过的美味",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡",
          "praise_num": 17,
          "activity_type": 0,
          "praise_content": "赞17",
          "praise_num_new": 17,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 754,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/372473766b64be5f21e376e3dd9ff9052854075.png",
          "unit": "份",
          "tread_num": 5,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 14.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809829128,
            "picture": "http://p1.meituan.net/wmproduct/372473766b64be5f21e376e3dd9ff9052854075.png",
            "stock": 0,
            "price": 14.9,
            "description": "分量超足，食材丰富，一口下去就可以咬到肉，不容错过的美味",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61554446",
          "recommend_description": "",
          "month_saled_content": "月售571",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 750763135,
          "min_price": 25.0,
          "description": "招牌火爆！每餐必点！",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡排（香辣味）",
          "praise_num": 9,
          "activity_type": 0,
          "praise_content": "赞9",
          "praise_num_new": 9,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 571,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
          "unit": "份",
          "tread_num": 2,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 25.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 813753751,
            "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
            "stock": 0,
            "price": 25.0,
            "description": "招牌火爆！每餐必点！",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售470",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747128142,
          "min_price": 13.9,
          "description": "鲜嫩的鸡肉搭配新鲜的蔬菜和特制酱汁，好吃不油腻~",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "老北京鸡肉卷",
          "praise_num": 8,
          "activity_type": 0,
          "praise_content": "赞8",
          "praise_num_new": 8,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 470,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/0dee54010c6afc1e72e59e2871d70f513002475.png",
          "unit": "个",
          "tread_num": 3,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9073,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809821936,
            "picture": "http://p0.meituan.net/wmproduct/0dee54010c6afc1e72e59e2871d70f513002475.png",
            "stock": 9073,
            "price": 13.9,
            "description": "鲜嫩的鸡肉搭配新鲜的蔬菜和特制酱汁，好吃不油腻~",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售455",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 896335846,
          "min_price": 9.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "可乐（大杯）",
          "praise_num": 4,
          "activity_type": 0,
          "praise_content": "赞4",
          "praise_num_new": 4,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 455,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/9f42f50dd212c42ce9f9047a2e1ad70a1719785.jpg",
          "unit": "份",
          "tread_num": 2,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 8956,
            "origin_price": 9.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 974362156,
            "picture": "http://p1.meituan.net/wmproduct/9f42f50dd212c42ce9f9047a2e1ad70a1719785.jpg",
            "stock": 8956,
            "price": 9.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售452",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893283581,
          "min_price": 39.0,
          "description": "",
          "attrs": [{
            "values": [{
              "id": 390381490,
              "value": "果珍"
            }, {
              "id": 390381491,
              "value": "可乐"
            }, {
              "id": 392016101,
              "value": "咖啡"
            }, {
              "id": 402841485,
              "value": "奶茶"
            }, {
              "id": 403503115,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 390381492,
              "value": "冷"
            }, {
              "id": 390381493,
              "value": "热"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+老北京鸡肉卷+饮料",
          "praise_num": 14,
          "activity_type": 0,
          "praise_content": "赞14",
          "praise_num_new": 14,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 452,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/9f8f90a2e067d4fdc406d1a6b39cd82e1506523.jpg",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9092,
            "origin_price": 39.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 970982145,
            "picture": "http://p0.meituan.net/wmproduct/9f8f90a2e067d4fdc406d1a6b39cd82e1506523.jpg",
            "stock": 9092,
            "price": 39.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309173",
          "recommend_description": "",
          "month_saled_content": "月售379",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118877,
          "min_price": 12.9,
          "description": "黄金脆皮，内酥里嫩，一口一个",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "无骨鸡柳",
          "praise_num": 7,
          "activity_type": 0,
          "praise_content": "赞7",
          "praise_num_new": 7,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 379,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/e6ad607d749d372ad0c67dd90790111e2166732.png",
          "unit": "份",
          "tread_num": 4,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 12.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1124829081,
            "picture": "http://p0.meituan.net/wmproduct/e6ad607d749d372ad0c67dd90790111e2166732.png",
            "stock": 0,
            "price": 12.9,
            "description": "黄金脆皮，内酥里嫩，一口一个",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售332",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893326477,
          "min_price": 38.0,
          "description": "饮料默认冰的，如需热的请备注哦",
          "attrs": [{
            "values": [{
              "id": 390452728,
              "value": "果珍"
            }, {
              "id": 390452729,
              "value": "可乐"
            }, {
              "id": 392016291,
              "value": "咖啡"
            }, {
              "id": 402841643,
              "value": "奶茶"
            }, {
              "id": 403503534,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 390452730,
              "value": "冷"
            }, {
              "id": 390452731,
              "value": "热"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+鸡米花+饮料",
          "praise_num": 4,
          "activity_type": 0,
          "praise_content": "赞4",
          "praise_num_new": 4,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 332,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/acef6c8f22c14ce8e04c1e24ec9de8681498229.jpg",
          "unit": "实付13元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 996,
            "origin_price": 38.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1217087772,
            "picture": "http://p1.meituan.net/wmproduct/acef6c8f22c14ce8e04c1e24ec9de8681498229.jpg",
            "stock": 996,
            "price": 38.0,
            "description": "饮料默认冰的，如需热的请备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售302",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893214343,
          "min_price": 8.0,
          "description": "饮料默认冰的，如需热的请备注哦",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "可乐（中杯）",
          "praise_num": 5,
          "activity_type": 0,
          "praise_content": "赞5",
          "praise_num_new": 5,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 302,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/d9bbd33ada19715829bdb800ff3a74342583288.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9299,
            "origin_price": 8.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 970900023,
            "picture": "http://p1.meituan.net/wmproduct/d9bbd33ada19715829bdb800ff3a74342583288.png",
            "stock": 9299,
            "price": 8.0,
            "description": "饮料默认冰的，如需热的请备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309173",
          "recommend_description": "",
          "month_saled_content": "月售266",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118878,
          "min_price": 13.9,
          "description": "鸡腿肉精加工至小块肉丁，裹上酥脆粉，是你休闲时光的佳品。",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "劲脆鸡米花",
          "praise_num": 8,
          "activity_type": 0,
          "praise_content": "赞8",
          "praise_num_new": 8,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 266,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/ab42bd42de80a24d7ff9e62fe9bba98f2608917.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809821940,
            "picture": "http://p1.meituan.net/wmproduct/ab42bd42de80a24d7ff9e62fe9bba98f2608917.png",
            "stock": 0,
            "price": 13.9,
            "description": "鸡腿肉精加工至小块肉丁，裹上酥脆粉，是你休闲时光的佳品。",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61554446",
          "recommend_description": "",
          "month_saled_content": "月售265",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 750759539,
          "min_price": 25.0,
          "description": "香喷喷的孜然和鸡排的碰撞，一口咬下去鲜嫩多汁！",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "正新鸡排（孜然味）",
          "praise_num": 9,
          "activity_type": 0,
          "praise_content": "赞9",
          "praise_num_new": 9,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 265,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 25.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 813756291,
            "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
            "stock": 0,
            "price": 25.0,
            "description": "香喷喷的孜然和鸡排的碰撞，一口咬下去鲜嫩多汁！",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "discount",
        "icon": "http://p0.meituan.net/aichequan/45662b4d1968fd75bff38de23f6d62641421.png",
        "tag": "act17",
        "has_next_page": false,
        "type": 2,
        "tag_description": "折扣商品",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 13,
        "description": "超过限购份数可原价购买",
        "sequence": 1,
        "name": "折扣",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售110",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "9.33折"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033063748,
          "min_price": 5.6,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "特价 香酥鸡腿",
          "praise_num": 2,
          "activity_type": 1,
          "praise_content": "赞2",
          "praise_num_new": 2,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 110,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "9.33折",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/4d84237d5ee088923322e117db816aaa2140995.jpg",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9832,
            "origin_price": 6.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "9.33折"
            },
            "promotion_info": "9.33折",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1136715319,
            "picture": "http://p0.meituan.net/wmproduct/4d84237d5ee088923322e117db816aaa2140995.jpg",
            "stock": 9832,
            "price": 5.6,
            "description": "",
            "activity_stock": 9832,
            "min_order_count": 1,
            "box_price": 0.5
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售19",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "8折"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033024463,
          "min_price": 5.6,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "特价 奥尔良烤翅",
          "praise_num": 0,
          "activity_type": 1,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 19,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "8折",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/9ee9fa997b40c29960616ef56502d1d81272387.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9924,
            "origin_price": 7.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "8折"
            },
            "promotion_info": "8折",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1137524846,
            "picture": "http://p0.meituan.net/wmproduct/9ee9fa997b40c29960616ef56502d1d81272387.jpg",
            "stock": 9924,
            "price": 5.6,
            "description": "",
            "activity_stock": 9924,
            "min_order_count": 1,
            "box_price": 0.5
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售18",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "8折"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033606355,
          "min_price": 5.6,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "特价 骨肉相连2串",
          "praise_num": 0,
          "activity_type": 1,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 18,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "8折",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/8423bb5a6e77c27b6a1f2ce8bb9ab74b2396466.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 7.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "8折"
            },
            "promotion_info": "8折",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1137602494,
            "picture": "http://p1.meituan.net/wmproduct/8423bb5a6e77c27b6a1f2ce8bb9ab74b2396466.jpg",
            "stock": 0,
            "price": 5.6,
            "description": "",
            "activity_stock": -1,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售48",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "6.57折"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033498343,
          "min_price": 4.6,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "特价 薯条",
          "praise_num": 0,
          "activity_type": 1,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 48,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "6.57折",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/01e4186c58c702fd21f756f0fc8895cf1608276.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9865,
            "origin_price": 7.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "6.57折"
            },
            "promotion_info": "6.57折",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1137056846,
            "picture": "http://p0.meituan.net/wmproduct/01e4186c58c702fd21f756f0fc8895cf1608276.jpg",
            "stock": 9865,
            "price": 4.6,
            "description": "",
            "activity_stock": 9865,
            "min_order_count": 1,
            "box_price": 0.5
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售21",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "9.43折 限1份"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033567035,
          "min_price": 6.6,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "特价 香辣鸡翅",
          "praise_num": 0,
          "activity_type": 1,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 21,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "9.43折 限1份",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/0a34adda283f659b0623ad3d478d5c191776022.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9935,
            "origin_price": 7.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "9.43折 限1份"
            },
            "promotion_info": "9.43折 限1份",
            "box_num": 1.0,
            "restrict": 1,
            "id": 1137602492,
            "picture": "http://p0.meituan.net/wmproduct/0a34adda283f659b0623ad3d478d5c191776022.jpg",
            "stock": 9935,
            "price": 6.6,
            "description": "",
            "activity_stock": 9935,
            "min_order_count": 1,
            "box_price": 0.5
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售17",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "6.57折"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033537944,
          "min_price": 4.6,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "特价 黑椒鸡块",
          "praise_num": 0,
          "activity_type": 1,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 17,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "6.57折",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/2ce121bc42b931a32f02cc91f6b358662014183.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9958,
            "origin_price": 7.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "6.57折"
            },
            "promotion_info": "6.57折",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1137319129,
            "picture": "http://p1.meituan.net/wmproduct/2ce121bc42b931a32f02cc91f6b358662014183.jpg",
            "stock": 9958,
            "price": 4.6,
            "description": "",
            "activity_stock": 9958,
            "min_order_count": 1,
            "box_price": 0.5
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售28",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "6.57折"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033606354,
          "min_price": 4.6,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "特价 中杯可乐",
          "praise_num": 1,
          "activity_type": 1,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 28,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "6.57折",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/9f42f50dd212c42ce9f9047a2e1ad70a1719785.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9926,
            "origin_price": 7.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "6.57折"
            },
            "promotion_info": "6.57折",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1137056845,
            "picture": "http://p1.meituan.net/wmproduct/9f42f50dd212c42ce9f9047a2e1ad70a1719785.jpg",
            "stock": 9926,
            "price": 4.6,
            "description": "",
            "activity_stock": 9926,
            "min_order_count": 1,
            "box_price": 0.5
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售33",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "9.43折"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033537943,
          "min_price": 6.6,
          "description": "鲜嫩的鸡肉搭配新鲜的蔬菜和特制酱汁，好吃不油腻~",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "墨西哥鸡肉卷",
          "praise_num": 2,
          "activity_type": 1,
          "praise_content": "赞2",
          "praise_num_new": 2,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 33,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "9.43折",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/92b2cad600ae8744bd7ce366af0277122794180.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9910,
            "origin_price": 7.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "9.43折"
            },
            "promotion_info": "9.43折",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1137319128,
            "picture": "http://p1.meituan.net/wmproduct/92b2cad600ae8744bd7ce366af0277122794180.png",
            "stock": 9910,
            "price": 6.6,
            "description": "鲜嫩的鸡肉搭配新鲜的蔬菜和特制酱汁，好吃不油腻~",
            "activity_stock": 9910,
            "min_order_count": 1,
            "box_price": 0.5
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "75531876",
          "recommend_description": "",
          "month_saled_content": "月售57",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": "9.43折"
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033458951,
          "min_price": 6.6,
          "description": "面包中间夹着正新头牌鸡排，可搭配多汁配料，入口鲜香多汁，吃了都说好",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "正新鸡排堡",
          "praise_num": 2,
          "activity_type": 1,
          "praise_content": "赞2",
          "praise_num_new": 2,
          "activity_tag": "discount",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 57,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "9.43折",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/16a16db5782fd18b8de92c86950f0c383240902.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9841,
            "origin_price": 7.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": "9.43折"
            },
            "promotion_info": "9.43折",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1136754933,
            "picture": "http://p1.meituan.net/wmproduct/16a16db5782fd18b8de92c86950f0c383240902.png",
            "stock": 9841,
            "price": 6.6,
            "description": "面包中间夹着正新头牌鸡排，可搭配多汁配料，入口鲜香多汁，吃了都说好",
            "activity_stock": 9841,
            "min_order_count": 1,
            "box_price": 0.5
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "act_17_17",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "",
        "icon": "",
        "tag": "69914393",
        "has_next_page": true,
        "type": 1,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 10,
        "description": "",
        "sequence": 2,
        "name": "活动专享",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售4",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1024489225,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "备注需求，请写三遍哦，重要的事情说三遍哟",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 4,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/02e61146a7e9cca924347b7280815c4a352861.jpg",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1126369174,
            "picture": "http://p1.meituan.net/wmproduct/02e61146a7e9cca924347b7280815c4a352861.jpg",
            "stock": 10000,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售452",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893283581,
          "min_price": 39.0,
          "description": "",
          "attrs": [{
            "values": [{
              "id": 390381490,
              "value": "果珍"
            }, {
              "id": 390381491,
              "value": "可乐"
            }, {
              "id": 392016101,
              "value": "咖啡"
            }, {
              "id": 402841485,
              "value": "奶茶"
            }, {
              "id": 403503115,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 390381492,
              "value": "冷"
            }, {
              "id": 390381493,
              "value": "热"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+老北京鸡肉卷+饮料",
          "praise_num": 14,
          "activity_type": 0,
          "praise_content": "赞14",
          "praise_num_new": 14,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 452,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/9f8f90a2e067d4fdc406d1a6b39cd82e1506523.jpg",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9092,
            "origin_price": 39.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 970982145,
            "picture": "http://p0.meituan.net/wmproduct/9f8f90a2e067d4fdc406d1a6b39cd82e1506523.jpg",
            "stock": 9092,
            "price": 39.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售17",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893326476,
          "min_price": 38.0,
          "description": "",
          "attrs": [{
            "values": [{
              "id": 403991470,
              "value": "果珍"
            }, {
              "id": 403991471,
              "value": "可乐"
            }, {
              "id": 403991472,
              "value": "咖啡"
            }, {
              "id": 403991473,
              "value": "奶茶"
            }, {
              "id": 403991474,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 403991475,
              "value": "热"
            }, {
              "id": 403991476,
              "value": "冷"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+骨肉相连2+饮料",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 17,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/763a5052f2b0efb2a19b0fbd8ff9ede81695658.jpg",
          "unit": "实付13元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 38.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1255422369,
            "picture": "http://p0.meituan.net/wmproduct/763a5052f2b0efb2a19b0fbd8ff9ede81695658.jpg",
            "stock": 10000,
            "price": 38.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售332",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893326477,
          "min_price": 38.0,
          "description": "饮料默认冰的，如需热的请备注哦",
          "attrs": [{
            "values": [{
              "id": 390452728,
              "value": "果珍"
            }, {
              "id": 390452729,
              "value": "可乐"
            }, {
              "id": 392016291,
              "value": "咖啡"
            }, {
              "id": 402841643,
              "value": "奶茶"
            }, {
              "id": 403503534,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 390452730,
              "value": "冷"
            }, {
              "id": 390452731,
              "value": "热"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+鸡米花+饮料",
          "praise_num": 4,
          "activity_type": 0,
          "praise_content": "赞4",
          "praise_num_new": 4,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 332,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/acef6c8f22c14ce8e04c1e24ec9de8681498229.jpg",
          "unit": "实付13元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 996,
            "origin_price": 38.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1217087772,
            "picture": "http://p1.meituan.net/wmproduct/acef6c8f22c14ce8e04c1e24ec9de8681498229.jpg",
            "stock": 996,
            "price": 38.0,
            "description": "饮料默认冰的，如需热的请备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售40",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893265693,
          "min_price": 38.0,
          "description": "饮料默认冰的，如需热的请备注哦",
          "attrs": [{
            "values": [{
              "id": 387007723,
              "value": "牛奶"
            }, {
              "id": 387007724,
              "value": "果珍"
            }, {
              "id": 387007725,
              "value": "可乐"
            }, {
              "id": 392016448,
              "value": "咖啡"
            }, {
              "id": 403503724,
              "value": "奶茶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 387007726,
              "value": "冷"
            }, {
              "id": 387007727,
              "value": "热"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+奥尔良烤翅一对+饮料",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 40,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/a8e437fcc00333773954f9eb024029602216162.png",
          "unit": "实付14元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9999,
            "origin_price": 38.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 970998878,
            "picture": "http://p1.meituan.net/wmproduct/a8e437fcc00333773954f9eb024029602216162.png",
            "stock": 9999,
            "price": 38.0,
            "description": "饮料默认冰的，如需热的请备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售20",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 911802422,
          "min_price": 42.0,
          "description": "香酥鸡腿+奥尔良烤翅+香辣鸡翅",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香酥鸡腿+奥尔良烤翅+老北京鸡肉卷",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 20,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/4fbdbddb2d69df3703133ced08b8f8152159693.png",
          "unit": "实付16元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 42.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1217125460,
            "picture": "http://p0.meituan.net/wmproduct/4fbdbddb2d69df3703133ced08b8f8152159693.png",
            "stock": 1000,
            "price": 42.0,
            "description": "香酥鸡腿+奥尔良烤翅+香辣鸡翅",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售21",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893265692,
          "min_price": 55.0,
          "description": "",
          "attrs": [{
            "values": [{
              "id": 387006433,
              "value": "果珍"
            }, {
              "id": 387006434,
              "value": "可乐"
            }, {
              "id": 392018395,
              "value": "咖啡"
            }, {
              "id": 402841737,
              "value": "奶茶"
            }, {
              "id": 403503879,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 387006435,
              "value": "热"
            }, {
              "id": 387006436,
              "value": "冰"
            }],
            "name": "热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+香辣鸡排+饮料",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 21,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/eb68fcbfc38789d828484bd2d17a33e81396613.jpg",
          "unit": "实付17元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9998,
            "origin_price": 55.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1254168605,
            "picture": "http://p1.meituan.net/wmproduct/eb68fcbfc38789d828484bd2d17a33e81396613.jpg",
            "stock": 9998,
            "price": 55.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售34",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893275552,
          "min_price": 58.0,
          "description": "饮料默认冰的，如需热的请备注哦",
          "attrs": [{
            "values": [{
              "id": 390388371,
              "value": "果珍"
            }, {
              "id": 390388372,
              "value": "可乐"
            }, {
              "id": 392018523,
              "value": "咖啡"
            }, {
              "id": 402842151,
              "value": "奶茶"
            }, {
              "id": 403504419,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 390388373,
              "value": "冷"
            }, {
              "id": 390388374,
              "value": "热"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡排+无骨鸡柳+黑椒鸡块+饮料",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 34,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/7b08e5180da92969d5f35c1d3e1720341624621.jpg",
          "unit": "实付18元",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 58.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1216931972,
            "picture": "http://p0.meituan.net/wmproduct/7b08e5180da92969d5f35c1d3e1720341624621.jpg",
            "stock": 1000,
            "price": 58.0,
            "description": "饮料默认冰的，如需热的请备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售26",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893283582,
          "min_price": 52.0,
          "description": "饮料默认冰的，如需热的请备注哦",
          "attrs": [{
            "values": [{
              "id": 390386343,
              "value": "果珍"
            }, {
              "id": 390386344,
              "value": "可乐"
            }, {
              "id": 392018636,
              "value": "咖啡"
            }, {
              "id": 392018637,
              "value": "奶茶"
            }, {
              "id": 403504795,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 390386345,
              "value": "热"
            }, {
              "id": 390386346,
              "value": "冷"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+香酥鸡腿+薯条+饮料",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 26,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/7c8b4538756ac5dd9f918591f265f4901519995.jpg",
          "unit": "实付18元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 52.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1216847185,
            "picture": "http://p0.meituan.net/wmproduct/7c8b4538756ac5dd9f918591f265f4901519995.jpg",
            "stock": 1000,
            "price": 52.0,
            "description": "饮料默认冰的，如需热的请备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "69914393",
          "recommend_description": "",
          "month_saled_content": "月售29",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893283580,
          "min_price": 56.0,
          "description": "",
          "attrs": [{
            "values": [{
              "id": 390389108,
              "value": "果珍"
            }, {
              "id": 390389109,
              "value": "可乐"
            }, {
              "id": 392018812,
              "value": "咖啡"
            }, {
              "id": 402842322,
              "value": "奶茶"
            }, {
              "id": 403508202,
              "value": "牛奶"
            }],
            "name": "饮料"
          }, {
            "values": [{
              "id": 390389110,
              "value": "冷"
            }, {
              "id": 390389111,
              "value": "热"
            }],
            "name": "饮料热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡+椒皇炸子鸡（半只）+饮料",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 29,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/57493c2b5d065a884e1fec63f4f141b11467230.jpg",
          "unit": "实付22元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 56.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1216969054,
            "picture": "http://p1.meituan.net/wmproduct/57493c2b5d065a884e1fec63f4f141b11467230.jpg",
            "stock": 1000,
            "price": 56.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "",
        "icon": "",
        "tag": "61355880",
        "has_next_page": true,
        "type": 1,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 5,
        "description": "",
        "sequence": 3,
        "name": "优选套餐",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61355880",
          "recommend_description": "",
          "month_saled_content": "月售1",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1023864070,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "备注需求，请写三遍哦，重要的事情说三遍哟",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 1,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/df220e91c9b8692daf499c31f28488f4344882.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1126228104,
            "picture": "http://p1.meituan.net/wmproduct/df220e91c9b8692daf499c31f28488f4344882.jpg",
            "stock": 10000,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61355880",
          "recommend_description": "",
          "month_saled_content": "月售57",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033424589,
          "min_price": 71.0,
          "description": "送【奥尔良烤翅1份】香辣鸡腿堡2个+薯条+黑椒鸡块+可乐*2",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "送【奥尔良烤翅1份】【豪华·双人套餐】",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 57,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/913cf631b89aa4e223420df7147c181b4442671.jpg",
          "unit": "实付28元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 71.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1183351273,
            "picture": "http://p1.meituan.net/wmproduct/913cf631b89aa4e223420df7147c181b4442671.jpg",
            "stock": 1000,
            "price": 71.0,
            "description": "送【奥尔良烤翅1份】香辣鸡腿堡2个+薯条+黑椒鸡块+可乐*2",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 2.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61355880",
          "recommend_description": "",
          "month_saled_content": "月售38",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033277096,
          "min_price": 71.0,
          "description": "送【香辣鸡翅1份】香辣鸡腿堡+老北京鸡肉卷+黑椒鸡块+鸡米花+可乐*2",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "送【香酥鸡腿1份】【尊享·双人套餐】",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 38,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/8194fc37b804337cfaee1d2bb84ca3bf4740807.jpg",
          "unit": "实付28元",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 71.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1182992869,
            "picture": "http://p0.meituan.net/wmproduct/8194fc37b804337cfaee1d2bb84ca3bf4740807.jpg",
            "stock": 1000,
            "price": 71.0,
            "description": "送【香辣鸡翅1份】香辣鸡腿堡+老北京鸡肉卷+黑椒鸡块+鸡米花+可乐*2",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 2.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61355880",
          "recommend_description": "",
          "month_saled_content": "月售21",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033385129,
          "min_price": 81.0,
          "description": "送【鸡米花1份、黑椒鸡块1份】墨西哥鸡肉卷+老北京鸡肉卷+秘制手扒鸡+可乐*2",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "送【鸡米花1份、黑椒鸡块1份】【吃鸡·双人套餐】",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 21,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/46314907cabe69b8c697ce16bad64df06873181.jpg",
          "unit": "实付38元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 81.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1183065985,
            "picture": "http://p1.meituan.net/wmproduct/46314907cabe69b8c697ce16bad64df06873181.jpg",
            "stock": 1000,
            "price": 81.0,
            "description": "送【鸡米花1份、黑椒鸡块1份】墨西哥鸡肉卷+老北京鸡肉卷+秘制手扒鸡+可乐*2",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 2.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61355880",
          "recommend_description": "",
          "month_saled_content": "月售8",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1033345807,
          "min_price": 83.0,
          "description": "送【骨肉相连2根、薯条1份】老北京鸡肉卷+墨西哥鸡肉卷+椒皇炸子鸡（全鸡）+可乐*2",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "送【骨肉相连2根、薯条1份】【全鸡·双人套餐】",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 8,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/c254c732464f4e5e4e7c72e6d4c6a7db5264886.jpg",
          "unit": "实付40元",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 83.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1183388784,
            "picture": "http://p1.meituan.net/wmproduct/c254c732464f4e5e4e7c72e6d4c6a7db5264886.jpg",
            "stock": 1000,
            "price": 83.0,
            "description": "送【骨肉相连2根、薯条1份】老北京鸡肉卷+墨西哥鸡肉卷+椒皇炸子鸡（全鸡）+可乐*2",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 2.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "",
        "icon": "",
        "tag": "61345968",
        "has_next_page": true,
        "type": 1,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 11,
        "description": "",
        "sequence": 4,
        "name": "主食汉堡",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售0",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1009949719,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "亲，薯条外卖送餐时间较长，口感可能会受到影响，望见谅！",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 0,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/c9afad85fcae46deffcbc1d218eb26bd181389.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1110726086,
            "picture": "http://p0.meituan.net/wmproduct/c9afad85fcae46deffcbc1d218eb26bd181389.jpg",
            "stock": 0,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售2",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1009944958,
          "min_price": 0.0,
          "description": "亲，发现少了东西，请立刻联系小姐姐，小姐姐会狂奔给亲送过去，18800365696！",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "亲，发现少了东西，请立刻联系小姐姐，小姐姐会狂奔给亲送过去！",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 2,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/c9afad85fcae46deffcbc1d218eb26bd181389.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1110672881,
            "picture": "http://p0.meituan.net/wmproduct/c9afad85fcae46deffcbc1d218eb26bd181389.jpg",
            "stock": 0,
            "price": 0.0,
            "description": "亲，发现少了东西，请立刻联系小姐姐，小姐姐会狂奔给亲送过去，18800365696！",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": [3]
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售754",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [{
            "height": 30,
            "picture_url": "http://p0.meituan.net/aichequan/e4384905366c1a4d3a3d8c7831c79f7c1346.png",
            "width": 60
          }],
          "food_label_text": "",
          "id": 747123773,
          "min_price": 14.9,
          "description": "分量超足，食材丰富，一口下去就可以咬到肉，不容错过的美味",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡腿堡",
          "praise_num": 17,
          "activity_type": 0,
          "praise_content": "赞17",
          "praise_num_new": 17,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 754,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/372473766b64be5f21e376e3dd9ff9052854075.png",
          "unit": "份",
          "tread_num": 5,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 14.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809829128,
            "picture": "http://p1.meituan.net/wmproduct/372473766b64be5f21e376e3dd9ff9052854075.png",
            "stock": 0,
            "price": 14.9,
            "description": "分量超足，食材丰富，一口下去就可以咬到肉，不容错过的美味",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售145",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118872,
          "min_price": 14.9,
          "description": "独特的奥尔良风味，加上调制酱料，咬上一口，回味无穷",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "奥尔良鸡腿堡",
          "praise_num": 3,
          "activity_type": 0,
          "praise_content": "赞3",
          "praise_num_new": 3,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 145,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/3b84535cc7078814e7070bd48c6242812615669.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 14.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809830063,
            "picture": "http://p1.meituan.net/wmproduct/3b84535cc7078814e7070bd48c6242812615669.png",
            "stock": 0,
            "price": 14.9,
            "description": "独特的奥尔良风味，加上调制酱料，咬上一口，回味无穷",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售31",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 748829997,
          "min_price": 13.9,
          "description": "选用新鲜鸡肉，搭配新鲜蔬菜和酱汁，鲜嫩饱满，营业更丰富",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "鸡肉饼汉堡",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 31,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/2ba67bc0ac9f7ae80860d4b2caa834052759946.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1124438668,
            "picture": "http://p0.meituan.net/wmproduct/2ba67bc0ac9f7ae80860d4b2caa834052759946.png",
            "stock": 0,
            "price": 13.9,
            "description": "选用新鲜鸡肉，搭配新鲜蔬菜和酱汁，鲜嫩饱满，营业更丰富",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售66",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747128141,
          "min_price": 14.9,
          "description": "面包中间夹着正新头牌鸡排，可搭配多汁配料，入口鲜香多汁，吃了都说好",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "正新鸡排堡",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 66,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/16a16db5782fd18b8de92c86950f0c383240902.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 14.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809828305,
            "picture": "http://p1.meituan.net/wmproduct/16a16db5782fd18b8de92c86950f0c383240902.png",
            "stock": 0,
            "price": 14.9,
            "description": "面包中间夹着正新头牌鸡排，可搭配多汁配料，入口鲜香多汁，吃了都说好",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售98",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747123774,
          "min_price": 14.9,
          "description": "选用新鲜虾仁，搭配新鲜蔬菜和酱汁，鲜嫩饱满，营业更丰富",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "劲脆虾堡",
          "praise_num": 2,
          "activity_type": 0,
          "praise_content": "赞2",
          "praise_num_new": 2,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 98,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/42daf63040b4170091b4a4c6a8eddcae2722972.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 14.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809821937,
            "picture": "http://p0.meituan.net/wmproduct/42daf63040b4170091b4a4c6a8eddcae2722972.png",
            "stock": 0,
            "price": 14.9,
            "description": "选用新鲜虾仁，搭配新鲜蔬菜和酱汁，鲜嫩饱满，营业更丰富",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售61",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118873,
          "min_price": 14.9,
          "description": "搭配秘制配料，香味浓郁，口感鲜嫩多汁",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "板烧鸡腿堡",
          "praise_num": 2,
          "activity_type": 0,
          "praise_content": "赞2",
          "praise_num_new": 2,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 61,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/a7dad0018fa188cbaa93966cdf898ea53248155.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 14.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809830065,
            "picture": "http://p1.meituan.net/wmproduct/a7dad0018fa188cbaa93966cdf898ea53248155.png",
            "stock": 0,
            "price": 14.9,
            "description": "搭配秘制配料，香味浓郁，口感鲜嫩多汁",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售470",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747128142,
          "min_price": 13.9,
          "description": "鲜嫩的鸡肉搭配新鲜的蔬菜和特制酱汁，好吃不油腻~",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "老北京鸡肉卷",
          "praise_num": 8,
          "activity_type": 0,
          "praise_content": "赞8",
          "praise_num_new": 8,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 470,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/0dee54010c6afc1e72e59e2871d70f513002475.png",
          "unit": "个",
          "tread_num": 3,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9073,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809821936,
            "picture": "http://p0.meituan.net/wmproduct/0dee54010c6afc1e72e59e2871d70f513002475.png",
            "stock": 9073,
            "price": 13.9,
            "description": "鲜嫩的鸡肉搭配新鲜的蔬菜和特制酱汁，好吃不油腻~",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售113",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118874,
          "min_price": 13.9,
          "description": "鲜嫩的鸡肉搭配新鲜的蔬菜和特制酱汁，好吃不油腻~",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "墨西哥鸡肉卷",
          "praise_num": 4,
          "activity_type": 0,
          "praise_content": "赞4",
          "praise_num_new": 4,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 113,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/92b2cad600ae8744bd7ce366af0277122794180.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9999,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809821938,
            "picture": "http://p1.meituan.net/wmproduct/92b2cad600ae8744bd7ce366af0277122794180.png",
            "stock": 9999,
            "price": 13.9,
            "description": "鲜嫩的鸡肉搭配新鲜的蔬菜和特制酱汁，好吃不油腻~",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61345968",
          "recommend_description": "",
          "month_saled_content": "月售76",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747120858,
          "min_price": 13.9,
          "description": "牛气冲天天堡，一口下去，牛气冲天！",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "牛肉堡",
          "praise_num": 2,
          "activity_type": 0,
          "praise_content": "赞2",
          "praise_num_new": 2,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 76,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/16593bd4e3a7f82d65099ec5e26566a22796029.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809830064,
            "picture": "http://p0.meituan.net/wmproduct/16593bd4e3a7f82d65099ec5e26566a22796029.png",
            "stock": 0,
            "price": 13.9,
            "description": "牛气冲天天堡，一口下去，牛气冲天！",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "",
        "icon": "",
        "tag": "61554446",
        "has_next_page": true,
        "type": 1,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 5,
        "description": "",
        "sequence": 5,
        "name": "正新鸡排",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61554446",
          "recommend_description": "",
          "month_saled_content": "月售0",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1024488792,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "店长偷偷的告诉你，鸡排加饮料可以凑满减哦",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 0,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/6dcf50277e479cd6fbb77f054150a4d4354222.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1126448211,
            "picture": "http://p0.meituan.net/wmproduct/6dcf50277e479cd6fbb77f054150a4d4354222.jpg",
            "stock": 10000,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61554446",
          "recommend_description": "",
          "month_saled_content": "月售571",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 750763135,
          "min_price": 25.0,
          "description": "招牌火爆！每餐必点！",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡排（香辣味）",
          "praise_num": 9,
          "activity_type": 0,
          "praise_content": "赞9",
          "praise_num_new": 9,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 571,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
          "unit": "份",
          "tread_num": 2,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 25.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 813753751,
            "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
            "stock": 0,
            "price": 25.0,
            "description": "招牌火爆！每餐必点！",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61554446",
          "recommend_description": "",
          "month_saled_content": "月售265",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 750759539,
          "min_price": 25.0,
          "description": "香喷喷的孜然和鸡排的碰撞，一口咬下去鲜嫩多汁！",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "正新鸡排（孜然味）",
          "praise_num": 9,
          "activity_type": 0,
          "praise_content": "赞9",
          "praise_num_new": 9,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 265,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 25.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 813756291,
            "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
            "stock": 0,
            "price": 25.0,
            "description": "香喷喷的孜然和鸡排的碰撞，一口咬下去鲜嫩多汁！",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61554446",
          "recommend_description": "",
          "month_saled_content": "月售176",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 750769349,
          "min_price": 25.0,
          "description": "酸甜可口的甘梅和鸡排的碰撞，一口咬下鲜嫩多汁！让你回味无穷，我们都是甘梅控，赶紧下单吧！",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "正新鸡排（甘梅味）",
          "praise_num": 5,
          "activity_type": 0,
          "praise_content": "赞5",
          "praise_num_new": 5,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 176,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/7e33bec37532069b9307647153cabe7c3561688.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 25.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 813765053,
            "picture": "http://p0.meituan.net/wmproduct/7e33bec37532069b9307647153cabe7c3561688.png",
            "stock": 0,
            "price": 25.0,
            "description": "酸甜可口的甘梅和鸡排的碰撞，一口咬下鲜嫩多汁！让你回味无穷，我们都是甘梅控，赶紧下单吧！",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "http://p0.meituan.net/aichequan/c38e0125140af99491af1410229ff2db1721.png",
          "status_description": "",
          "tag": "61554446",
          "recommend_description": "",
          "month_saled_content": "月售43",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 750775650,
          "min_price": 25.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "正新鸡排（咖喱味）",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 43,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 25.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 813766930,
            "picture": "http://p0.meituan.net/wmproduct/7adc37295e9d676b531167ae983b47993561681.png",
            "stock": 0,
            "price": 25.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "",
        "icon": "",
        "tag": "60309173",
        "has_next_page": true,
        "type": 1,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 6,
        "description": "",
        "sequence": 6,
        "name": "风味小食",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309173",
          "recommend_description": "",
          "month_saled_content": "月售1",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1024017644,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "备注需求，请写三遍哦，重要的事情说三遍哟",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 1,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/d96e2740f651663441bfbc188eb1f111351540.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9999,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1126669500,
            "picture": "http://p0.meituan.net/wmproduct/d96e2740f651663441bfbc188eb1f111351540.jpg",
            "stock": 9999,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309173",
          "recommend_description": "",
          "month_saled_content": "月售379",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118877,
          "min_price": 12.9,
          "description": "黄金脆皮，内酥里嫩，一口一个",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "无骨鸡柳",
          "praise_num": 7,
          "activity_type": 0,
          "praise_content": "赞7",
          "praise_num_new": 7,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 379,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/e6ad607d749d372ad0c67dd90790111e2166732.png",
          "unit": "份",
          "tread_num": 4,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 12.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1124829081,
            "picture": "http://p0.meituan.net/wmproduct/e6ad607d749d372ad0c67dd90790111e2166732.png",
            "stock": 0,
            "price": 12.9,
            "description": "黄金脆皮，内酥里嫩，一口一个",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309173",
          "recommend_description": "",
          "month_saled_content": "月售44",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118875,
          "min_price": 12.9,
          "description": "一份一串，",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "骨肉相连",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 44,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/8edcc15060496279b4a51535e213f5ae3192913.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 1000,
            "origin_price": 12.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1125018639,
            "picture": "http://p0.meituan.net/wmproduct/8edcc15060496279b4a51535e213f5ae3192913.png",
            "stock": 1000,
            "price": 12.9,
            "description": "一份一串，",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309173",
          "recommend_description": "",
          "month_saled_content": "月售266",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118878,
          "min_price": 13.9,
          "description": "鸡腿肉精加工至小块肉丁，裹上酥脆粉，是你休闲时光的佳品。",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "劲脆鸡米花",
          "praise_num": 8,
          "activity_type": 0,
          "praise_content": "赞8",
          "praise_num_new": 8,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 266,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/ab42bd42de80a24d7ff9e62fe9bba98f2608917.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809821940,
            "picture": "http://p1.meituan.net/wmproduct/ab42bd42de80a24d7ff9e62fe9bba98f2608917.png",
            "stock": 0,
            "price": 13.9,
            "description": "鸡腿肉精加工至小块肉丁，裹上酥脆粉，是你休闲时光的佳品。",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309173",
          "recommend_description": "",
          "month_saled_content": "月售247",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747123775,
          "min_price": 12.9,
          "description": "薯条建议堂食哦",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "薯条",
          "praise_num": 2,
          "activity_type": 0,
          "praise_content": "赞2",
          "praise_num_new": 2,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 247,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/3ced9aea3a1f2294c686947650ed82522505466.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 12.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1124829235,
            "picture": "http://p1.meituan.net/wmproduct/3ced9aea3a1f2294c686947650ed82522505466.png",
            "stock": 0,
            "price": 12.9,
            "description": "薯条建议堂食哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309173",
          "recommend_description": "",
          "month_saled_content": "月售70",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747123776,
          "min_price": 12.9,
          "description": "精选鸡肉烹炸，口感鲜香酥脆~",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "黑椒鸡块",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 70,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/d37634fbfb9b3c953a9fd58e95eadbee2939881.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 12.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809821939,
            "picture": "http://p1.meituan.net/wmproduct/d37634fbfb9b3c953a9fd58e95eadbee2939881.png",
            "stock": 0,
            "price": 12.9,
            "description": "精选鸡肉烹炸，口感鲜香酥脆~",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "",
        "icon": "",
        "tag": "60309178",
        "has_next_page": true,
        "type": 1,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 8,
        "description": "",
        "sequence": 7,
        "name": "疯狂炸鸡",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309178",
          "recommend_description": "",
          "month_saled_content": "月售2",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1024378220,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "备注需求，请写三遍哦，重要的事情说三遍哟",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 2,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/2886dd575a5843573c9b2a28606bbec3344880.jpg",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1126598570,
            "picture": "http://p0.meituan.net/wmproduct/2886dd575a5843573c9b2a28606bbec3344880.jpg",
            "stock": 10000,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309178",
          "recommend_description": "",
          "month_saled_content": "月售136",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747128143,
          "min_price": 13.9,
          "description": "香辣多汁，口感鲜美",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香辣鸡翅",
          "praise_num": 3,
          "activity_type": 0,
          "praise_content": "赞3",
          "praise_num_new": 3,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 136,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/697f0cc6015da7cb4fb57653e3d830af2609166.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9685,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1125645926,
            "picture": "http://p1.meituan.net/wmproduct/697f0cc6015da7cb4fb57653e3d830af2609166.png",
            "stock": 9685,
            "price": 13.9,
            "description": "香辣多汁，口感鲜美",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309178",
          "recommend_description": "",
          "month_saled_content": "月售89",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118879,
          "min_price": 13.9,
          "description": "外表金黄酥脆，内里鲜嫩厚实，独特香辣，咬一口回味无穷。",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香酥鸡腿",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 89,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/c421528c3748e3a343bc7e137334db4c3087662.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1124979612,
            "picture": "http://p0.meituan.net/wmproduct/c421528c3748e3a343bc7e137334db4c3087662.png",
            "stock": 0,
            "price": 13.9,
            "description": "外表金黄酥脆，内里鲜嫩厚实，独特香辣，咬一口回味无穷。",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": [1]
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309178",
          "recommend_description": "",
          "month_saled_content": "月售49",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [{
            "height": 30,
            "picture_url": "http://p1.meituan.net/aichequan/c9bcb26d2e342c7bffd0267ae3f129c03286.png",
            "width": 120
          }],
          "food_label_text": "点评网友推荐",
          "id": 747123777,
          "min_price": 25.0,
          "description": "一口一个，好吃停不下来~",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "香香鸡块",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 49,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/51ca8f83e26eff3cca1695604e1e96c22645133.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "http://p1.meituan.net/aichequan/04789347d755465713550540942265d36475.png",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 25.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1126995098,
            "picture": "http://p1.meituan.net/wmproduct/51ca8f83e26eff3cca1695604e1e96c22645133.png",
            "stock": 10000,
            "price": 25.0,
            "description": "一口一个，好吃停不下来~",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309178",
          "recommend_description": "",
          "month_saled_content": "月售88",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747118880,
          "min_price": 13.9,
          "description": "为了保证亲的愉快用餐，烤翅我们会检查生熟，如果看到有剪开的，那说明他通过了我们的检查",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "奥尔良烤翅",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 88,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/a35afd1d6e5e0a241d7461c57881a2e51936884.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 13.9,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809821941,
            "picture": "http://p0.meituan.net/wmproduct/a35afd1d6e5e0a241d7461c57881a2e51936884.png",
            "stock": 0,
            "price": 13.9,
            "description": "为了保证亲的愉快用餐，烤翅我们会检查生熟，如果看到有剪开的，那说明他通过了我们的检查",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309178",
          "recommend_description": "",
          "month_saled_content": "月售87",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747120860,
          "min_price": 45.0,
          "description": "选用肥嫩的童子鸡做原料，精心制作而成，刚卤出来的手扒鸡色泽金黄、鲜嫩醇香、风味独特。",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "手扒鸡",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 87,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/d2a1d2617adf7bec59f54dd8542061482830817.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 45.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1129288611,
            "picture": "http://p0.meituan.net/wmproduct/d2a1d2617adf7bec59f54dd8542061482830817.png",
            "stock": 10000,
            "price": 45.0,
            "description": "选用肥嫩的童子鸡做原料，精心制作而成，刚卤出来的手扒鸡色泽金黄、鲜嫩醇香、风味独特。",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309178",
          "recommend_description": "",
          "month_saled_content": "月售24",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747123778,
          "min_price": 37.0,
          "description": "椒皇炸子鸡外酥里嫩，炸过后的外表呈金黄色，内里是鲜嫩多汁的鸡肉，可多种配料搭配，丝毫不比洋快餐的炸鸡差。一个吃不掉，可以来上半份哦",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "椒皇炸子鸡（半）",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 24,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/9c1f405434f65ad47e45fc7c82467e052650341.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9938,
            "origin_price": 37.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1117498726,
            "picture": "http://p1.meituan.net/wmproduct/9c1f405434f65ad47e45fc7c82467e052650341.png",
            "stock": 9938,
            "price": 37.0,
            "description": "椒皇炸子鸡外酥里嫩，炸过后的外表呈金黄色，内里是鲜嫩多汁的鸡肉，可多种配料搭配，丝毫不比洋快餐的炸鸡差。一个吃不掉，可以来上半份哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "60309178",
          "recommend_description": "",
          "month_saled_content": "月售78",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747120861,
          "min_price": 45.0,
          "description": "椒皇炸子鸡外酥里嫩，炸过后的外表呈金黄色，内里是鲜嫩多汁的鸡肉，可多种配料搭配，丝毫不比洋快餐的炸鸡差。",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "椒皇炸子鸡（全）",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 78,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/d21f8fb959190632ec845bbaa7a4b0053120609.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9774,
            "origin_price": 45.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1116052970,
            "picture": "http://p0.meituan.net/wmproduct/d21f8fb959190632ec845bbaa7a4b0053120609.png",
            "stock": 9774,
            "price": 45.0,
            "description": "椒皇炸子鸡外酥里嫩，炸过后的外表呈金黄色，内里是鲜嫩多汁的鸡肉，可多种配料搭配，丝毫不比洋快餐的炸鸡差。",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "",
        "icon": "",
        "tag": "61345969",
        "has_next_page": true,
        "type": 1,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 7,
        "description": "",
        "sequence": 9,
        "name": "清爽饮品",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售0",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1024527798,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "备注需求，请写三遍哦，重要的事情说三遍哟",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 0,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/b7b184436ee7063de7e9f1724c3dd4d7353584.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1126559870,
            "picture": "http://p0.meituan.net/wmproduct/b7b184436ee7063de7e9f1724c3dd4d7353584.jpg",
            "stock": 10000,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售455",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 896335846,
          "min_price": 9.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "可乐（大杯）",
          "praise_num": 4,
          "activity_type": 0,
          "praise_content": "赞4",
          "praise_num_new": 4,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 455,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/9f42f50dd212c42ce9f9047a2e1ad70a1719785.jpg",
          "unit": "份",
          "tread_num": 2,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 8956,
            "origin_price": 9.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 974362156,
            "picture": "http://p1.meituan.net/wmproduct/9f42f50dd212c42ce9f9047a2e1ad70a1719785.jpg",
            "stock": 8956,
            "price": 9.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售117",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747128145,
          "min_price": 9.0,
          "description": "甜甜的很暖心很满足！默认热饮，如要凉的或者冰的请备注哦",
          "attrs": [{
            "values": [{
              "id": 361357837,
              "value": "冷"
            }, {
              "id": 361357838,
              "value": "热"
            }],
            "name": "热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "原味奶茶",
          "praise_num": 3,
          "activity_type": 0,
          "praise_content": "赞3",
          "praise_num_new": 3,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 117,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/5d76c089a5e8c602f0e4a2f19c848d6f2436407.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9688,
            "origin_price": 9.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 809830075,
            "picture": "http://p1.meituan.net/wmproduct/5d76c089a5e8c602f0e4a2f19c848d6f2436407.png",
            "stock": 9688,
            "price": 9.0,
            "description": "甜甜的很暖心很满足！默认热饮，如要凉的或者冰的请备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售302",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 893214343,
          "min_price": 8.0,
          "description": "饮料默认冰的，如需热的请备注哦",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "可乐（中杯）",
          "praise_num": 5,
          "activity_type": 0,
          "praise_content": "赞5",
          "praise_num_new": 5,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 302,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/d9bbd33ada19715829bdb800ff3a74342583288.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9299,
            "origin_price": 8.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 970900023,
            "picture": "http://p1.meituan.net/wmproduct/d9bbd33ada19715829bdb800ff3a74342583288.png",
            "stock": 9299,
            "price": 8.0,
            "description": "饮料默认冰的，如需热的请备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售40",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747128144,
          "min_price": 9.0,
          "description": "口感香滑，回味悠长~默认冰的，如果要热的， 请备注",
          "attrs": [{
            "values": [{
              "id": 361358225,
              "value": "冷"
            }, {
              "id": 361358226,
              "value": "热"
            }],
            "name": "热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "咖啡",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 40,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/d5050f7d9cb64bf3f6a19d7534e5518e2495284.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9900,
            "origin_price": 9.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 974344173,
            "picture": "http://p1.meituan.net/wmproduct/d5050f7d9cb64bf3f6a19d7534e5518e2495284.png",
            "stock": 9900,
            "price": 9.0,
            "description": "口感香滑，回味悠长~默认冰的，如果要热的， 请备注",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售96",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747123779,
          "min_price": 8.0,
          "description": "炎炎夏日，默认冰的，如果要热的，请备注",
          "attrs": [{
            "values": [{
              "id": 361358369,
              "value": "冷"
            }, {
              "id": 361358370,
              "value": "热"
            }],
            "name": "热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "果珍",
          "praise_num": 2,
          "activity_type": 0,
          "praise_content": "赞2",
          "praise_num_new": 2,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 96,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/a74e3373c653d201ebfcfe25996221b62434976.png",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9792,
            "origin_price": 8.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 974378044,
            "picture": "http://p1.meituan.net/wmproduct/a74e3373c653d201ebfcfe25996221b62434976.png",
            "stock": 9792,
            "price": 8.0,
            "description": "炎炎夏日，默认冰的，如果要热的，请备注",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61345969",
          "recommend_description": "",
          "month_saled_content": "月售120",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747120862,
          "min_price": 9.0,
          "description": "炎炎夏日，默认冰的，热的需备注哦",
          "attrs": [{
            "values": [{
              "id": 361358521,
              "value": "冷"
            }, {
              "id": 361358522,
              "value": "热"
            }],
            "name": "热度"
          }],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "甜奶",
          "praise_num": 1,
          "activity_type": 0,
          "praise_content": "赞1",
          "praise_num_new": 1,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 120,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproduct/71698fbfcba3c076b83a268a6e87e9852372785.png",
          "unit": "份",
          "tread_num": 1,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 9766,
            "origin_price": 9.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 974344525,
            "picture": "http://p0.meituan.net/wmproduct/71698fbfcba3c076b83a268a6e87e9852372785.png",
            "stock": 9766,
            "price": 9.0,
            "description": "炎炎夏日，默认冰的，热的需备注哦",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 1.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }, {
        "tags": [],
        "activity_tag": "",
        "icon": "",
        "tag": "61401870",
        "has_next_page": true,
        "type": 1,
        "tag_description": "",
        "tag_category_pic": "",
        "big_pic_url": "",
        "current_page": 0,
        "selected": 0,
        "product_count": 2,
        "description": "",
        "sequence": 10,
        "name": "福利福利",
        "activity_info": {
          "icon_url": "",
          "scheme_url": "",
          "activity_text": ""
        },
        "spus": [{
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61401870",
          "recommend_description": "",
          "month_saled_content": "月售2",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 1024489828,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "备注需求，请写三遍哦，重要的事情说三遍哟",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 2,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p1.meituan.net/wmproduct/02e61146a7e9cca924347b7280815c4a352861.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": 10000,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 1126409731,
            "picture": "http://p1.meituan.net/wmproduct/02e61146a7e9cca924347b7280815c4a352861.jpg",
            "stock": 10000,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }, {
          "log_field": {
            "recommend_label_type": 0,
            "product_label_type_list": []
          },
          "video_icon": "",
          "status_description": "",
          "tag": "61401870",
          "recommend_description": "",
          "month_saled_content": "月售10",
          "promotion": {
            "height": 0,
            "width": 0,
            "sku_info_color": "",
            "label_pic": "",
            "promotion_text": ""
          },
          "product_label_picture_list": [],
          "food_label_text": "",
          "id": 747789601,
          "min_price": 0.0,
          "description": "",
          "attrs": [],
          "activity_policy": {
            "discount_by_count": {
              "count": 0,
              "discount": 1.0
            }
          },
          "name": "收藏店铺不迷路",
          "praise_num": 0,
          "activity_type": 0,
          "praise_content": "赞0",
          "praise_num_new": 0,
          "activity_tag": "",
          "status": 0,
          "mport_sell_status": 0,
          "month_saled": 10,
          "label_text": "",
          "sku_label": "规格",
          "realStatus": 0,
          "promotion_info": "",
          "virtualStatus": 0,
          "picture": "http://p0.meituan.net/wmproductwm/0e5427d9a899a3ae4ecfdda01161c72d548464.jpg",
          "unit": "份",
          "tread_num": 0,
          "shippingTimeX": "",
          "sequence": 0,
          "status_remind_list": [],
          "product_label_picture": "",
          "skus": [{
            "spec": "",
            "real_stock": -1,
            "origin_price": 0.0,
            "status": 0,
            "promotion": {
              "height": 0,
              "width": 0,
              "sku_info_color": "",
              "label_pic": "",
              "promotion_text": ""
            },
            "promotion_info": "",
            "box_num": 1.0,
            "restrict": 0,
            "id": 810548512,
            "picture": "http://p0.meituan.net/wmproductwm/0e5427d9a899a3ae4ecfdda01161c72d548464.jpg",
            "stock": 0,
            "price": 0.0,
            "description": "",
            "activity_stock": 0,
            "min_order_count": 1,
            "box_price": 0.0
          }],
          "share_tip": {
            "share_button_icon": "",
            "activity_id": 0,
            "share_info": {
              "content": "",
              "icon": "",
              "title": "",
              "weixin_url": "",
              "url": ""
            },
            "description": "",
            "description_icon": "",
            "channels": []
          },
          "friends_nickname_praise_content": "",
          "food_label_pic": "",
          "activity_tag_id": "",
          "friends_praise_content": ""
        }],
        "buzType": 0
      }],
      "poi_notifications": [],
      "has_hotsale_tag": false,
      "container_operation_source": {
        "poi_coupon_list": [],
        "operation_source_list": [],
        "tag_icon": "http://p1.meituan.net/aichequan/aa78dd5220590e0f2f44c8c9087de9171414.png",
        "tag": "op0020",
        "tag_name": "专场",
        "tag_sequence": 1
      }
    },
    "code": 0,
    "msg": "成功"
  },
  commentData: {
    "data": {
      "avg_ship_time": 10,
      "buz_code": 0,
      "comment_categories": ["全部2188", "有图评价109", "好评2045", "差评92"],
      "comment_num": 2188,
      "comment_praise_ratio": 92,
      "comment_score": 4.5,
      "comment_score_type_infos": [{
        "comment_score_type": 0,
        "total_count": 2188
      }, {
        "comment_score_type": 5,
        "total_count": 109
      }, {
        "comment_score_type": 1,
        "total_count": 2045
      }, {
        "comment_score_type": 3,
        "total_count": 92
      }],
      "comment_tip": "",
      "comments": [{
        "add_comment_list": [{
          "content": "抱歉，错送的问题我们承担大部分责任，给您错送的餐品您请享用。希望可以联系到您，小店将为您补送一次正确的餐品！",
          "desc": "商家回复(2天后)",
          "time": 1537839704,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "点了一个套餐，一个鸡腿变汉堡，我都无语了…",
        "comment_labels": [],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/fdda35443288d4b6ecbe31d5c563229946284.jpg"
        }],
        "comment_scheme": [{
          "keyword": "香酥鸡腿+奥尔良烤翅+老北京鸡肉卷",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=911802422&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1217125460",
          "sku_id": 1217125460,
          "spu_id": 911802422
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1537632000,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 5,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1537632000,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "抱歉，错送的问题我们承担大部分责任，给您错送的餐品您请享用。希望可以联系到您，小店将为您补送一次正确的餐品！",
        "praise_food_list": [{
          "name": "无骨鸡柳",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747118877&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1124829081"
        }, {
          "name": "香酥鸡腿+奥尔良烤翅+老北京鸡肉卷",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=911802422&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1217125460"
        }],
        "praise_food_tip": "无骨鸡柳,香酥鸡腿+奥尔良烤翅+老北京鸡肉卷",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 36,
        "user_id": 1950018823,
        "user_name": "ics781680823",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2051781563
      }, {
        "add_comment_list": [{
          "content": "亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！",
          "desc": "商家回复(2天后)",
          "time": 1537839547,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "这个店的汉堡挺好的  也试过其他家的，都没有正新汉堡的好吃！非常喜欢，加油！",
        "comment_labels": [],
        "comment_pics": [],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1537632000,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 5,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1537632000,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！",
        "praise_food_list": [{
          "name": "香辣鸡腿堡+老北京鸡肉卷+饮料",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=893283581&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=970982145"
        }, {
          "name": "劲脆虾堡",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747123774&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809821937"
        }],
        "praise_food_tip": "香辣鸡腿堡+老北京鸡肉卷+饮料,劲脆虾堡",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 28,
        "user_id": 1401915721,
        "user_name": "QqG162355733",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2052228100
      }, {
        "add_comment_list": [{
          "content": "非常荣幸能够得到您的青睐和认可，真的很开心，您的支持和厚爱是对我们最大的肯定",
          "desc": "商家回复(1天后)",
          "time": 1536651710,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "很喜欢这个套餐 好吃哦 尤其是甜奶 真的好好好好喝 真爱了#香辣鸡腿堡+鸡米花+饮料#",
        "comment_labels": [{
          "content": "穿戴工服",
          "label_type": 1
        }, {
          "content": "风雨无阻",
          "label_type": 1
        }, {
          "content": "快速准时",
          "label_type": 1
        }, {
          "content": "货品完好",
          "label_type": 1
        }, {
          "content": "礼貌热情",
          "label_type": 1
        }, {
          "content": "仪表整洁",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/9fe38ca1d69d48e3c80b5d04a04e9106210233.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/be27ef229bbd243e652e2dbd28638f45195858.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/98e758b2391a6490d510e18aa9fa71d6130959.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/e141417478cb880c640ae2d5e8d7b071263669.jpg"
        }],
        "comment_scheme": [{
          "keyword": "香辣鸡腿堡+鸡米花+饮料",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=893326477&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1217087772",
          "sku_id": 1217087772,
          "spu_id": 893326477
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1536508800,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 5,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1536508800,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "非常荣幸能够得到您的青睐和认可，真的很开心，您的支持和厚爱是对我们最大的肯定",
        "praise_food_list": [{
          "name": "香辣鸡腿堡+鸡米花+饮料",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=893326477&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1217087772"
        }],
        "praise_food_tip": "香辣鸡腿堡+鸡米花+饮料",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 30,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2025260012
      }, {
        "add_comment_list": [{
          "content": "亲爱的顾客，非常抱歉影响您的用餐，感谢您的提醒与反馈，您反馈的问题我们会在下次服务中改进，期待您再次的光临！",
          "desc": "商家回复(5天后)",
          "time": 1536030191,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "鸡排肉没以前厚了 炸的也有点老  可乐没有气 就是糖水 不是很满意",
        "comment_labels": [{
          "content": "仪表整洁",
          "label_type": 1
        }, {
          "content": "货品完好",
          "label_type": 1
        }, {
          "content": "穿戴工服",
          "label_type": 1
        }, {
          "content": "礼貌热情",
          "label_type": 1
        }, {
          "content": "快速准时",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/22853911aa75c0fbea2ad07bdd52354177666.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/4dcd00354336cdae4553ea71cea7f922249777.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/197b9f9ab62dcf0702ae9c3a8e023cfa232398.jpg"
        }],
        "comment_scheme": [{
          "keyword": "可乐（大杯）",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=896335846&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=974362156",
          "sku_id": 974362156,
          "spu_id": 896335846
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1535558400,
        "comment_type": 4,
        "critic_food_tip": "可乐（大杯）,正新鸡排（甘梅味）",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 5,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1535558400,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的顾客，非常抱歉影响您的用餐，感谢您的提醒与反馈，您反馈的问题我们会在下次服务中改进，期待您再次的光临！",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 29,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2002411560
      }, {
        "add_comment_list": [{
          "content": "哈哈，我一般都很低调的，如果你非想夸我的话，来吧北鼻，康忙！",
          "desc": "商家回复(2天后)",
          "time": 1536286777,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "好吃好吃好吃好好吃 甜奶超级无敌好喝！！！！！！",
        "comment_labels": [{
          "content": "风雨无阻",
          "label_type": 1
        }, {
          "content": "货品完好",
          "label_type": 1
        }, {
          "content": "仪表整洁",
          "label_type": 1
        }, {
          "content": "快速准时",
          "label_type": 1
        }, {
          "content": "礼貌热情",
          "label_type": 1
        }, {
          "content": "穿戴工服",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/e555b77142186f0d40c5cfdffb82bc8a109230.jpg"
        }],
        "comment_scheme": [{
          "keyword": "甜奶",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747120862&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=974344525",
          "sku_id": 974344525,
          "spu_id": 747120862
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1536076800,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 5,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1536076800,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "哈哈，我一般都很低调的，如果你非想夸我的话，来吧北鼻，康忙！",
        "praise_food_list": [{
          "name": "香辣鸡排（香辣味）",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=750763135&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=813753751"
        }, {
          "name": "劲脆鸡米花",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747118878&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809821940"
        }, {
          "name": "甜奶",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747120862&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=974344525"
        }],
        "praise_food_tip": "香辣鸡排（香辣味）,劲脆鸡米花,甜奶",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 27,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2015265338
      }, {
        "add_comment_list": [{
          "content": "宇宙的中心很大，大到可以装下一万种委屈。宇宙的中心很小，小到一份品质外卖就可以让你满足，还温暖了我的心。出门在外，一定记得好好吃饭~",
          "desc": "商家回复(2天后)",
          "time": 1535440868,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "汉堡包很香，好吃。\n鸡排也不错，香香辣辣的，虽然量不多，不过每个吃一点也够了。\n甜牛奶是热的，很好，不过奶味不够浓啊，下次多加点牛奶吧。",
        "comment_labels": [{
          "content": "礼貌热情",
          "label_type": 1
        }, {
          "content": "穿戴工服",
          "label_type": 1
        }, {
          "content": "快速准时",
          "label_type": 1
        }, {
          "content": "风雨无阻",
          "label_type": 1
        }, {
          "content": "仪表整洁",
          "label_type": 1
        }, {
          "content": "货品完好",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/e9374bc57fc01d71d1a5f931cd76746a38044.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/c8245d69a518e9b7db7516291c22352e40445.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/d80535f08608ae5ee55c79d88382ea7138422.jpg"
        }],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1535212800,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 4,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1535212800,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "宇宙的中心很大，大到可以装下一万种委屈。宇宙的中心很小，小到一份品质外卖就可以让你满足，还温暖了我的心。出门在外，一定记得好好吃饭~",
        "praise_food_list": [{
          "name": "正新欢乐吃鸡套餐",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=1033348276&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1136594373"
        }],
        "praise_food_tip": "正新欢乐吃鸡套餐",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 47,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 1992632286
      }, {
        "add_comment_list": [{
          "content": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
          "desc": "商家回复(2天后)",
          "time": 1535091284,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "上次反馈了没竹签的问题，这次有了，味道好！就是饮料略显单薄啊…",
        "comment_labels": [],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/17aa3d81c425af6f791cd1731785701729494.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/a46da3ab88d389974d927836e12da2e321494.jpg"
        }],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1534867200,
        "comment_type": 4,
        "critic_food_tip": "果珍",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 4,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1534867200,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
        "praise_food_list": [{
          "name": "香辣鸡排（香辣味）",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=750763135&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=813753751"
        }, {
          "name": "香辣鸡腿堡",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747123773&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809829128"
        }],
        "praise_food_tip": "香辣鸡排（香辣味）,香辣鸡腿堡",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 59,
        "user_id": 1411341042,
        "user_name": "RhF260850500",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 1982738507
      }, {
        "add_comment_list": [{
          "content": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
          "desc": "商家回复(2天后)",
          "time": 1537839572,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "这个鸡排对我充满恶意，块头太大了😂",
        "comment_labels": [{
          "content": "穿戴工服",
          "label_type": 1
        }, {
          "content": "货品完好",
          "label_type": 1
        }, {
          "content": "风雨无阻",
          "label_type": 1
        }, {
          "content": "仪表整洁",
          "label_type": 1
        }, {
          "content": "礼貌热情",
          "label_type": 1
        }, {
          "content": "快速准时",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/e6c3e4fb9c629ea4f75f364732feeb16353001.jpg"
        }],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1537632000,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 5,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1537632000,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
        "praise_food_list": [{
          "name": "老北京鸡肉卷",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747128142&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809821936"
        }, {
          "name": "正新鸡排（孜然味）",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=750759539&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=813756291"
        }],
        "praise_food_tip": "老北京鸡肉卷,正新鸡排（孜然味）",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 21,
        "user_id": 263016208,
        "user_name": "WangZR0915",
        "user_pic_url": "https://img.meituan.net/avatar/066635647c345bb0a6e0689e816005c411513.jpg",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2052086086
      }, {
        "add_comment_list": [{
          "content": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
          "desc": "商家回复(1天后)",
          "time": 1534468143,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "这就是13.9的香肠？和图片不一样吧，和正新一样的香肠也就买15，欺骗消费者？",
        "comment_labels": [{
          "content": "风雨无阻",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/dc1b8ff4d1c43f69b4e22307a7d25d92220232.jpg"
        }],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1534348800,
        "comment_type": 4,
        "critic_food_tip": "正新烤肠一根",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 4,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1534348800,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
        "praise_food_list": [{
          "name": "正新鸡排（甘梅味）",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=750769349&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=813765053"
        }],
        "praise_food_tip": "正新鸡排（甘梅味）",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 50,
        "user_id": 526935004,
        "user_name": "maN522380848",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 1968137641
      }, {
        "add_comment_list": [{
          "content": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
          "desc": "商家回复(3天后)",
          "time": 1534731697,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "鸡肉卷很好吃但是鸡腿堡的肉实在是太老了     老板大半夜还在上班 好评",
        "comment_labels": [{
          "content": "穿戴工服",
          "label_type": 1
        }, {
          "content": "礼貌热情",
          "label_type": 1
        }, {
          "content": "风雨无阻",
          "label_type": 1
        }, {
          "content": "仪表整洁",
          "label_type": 1
        }, {
          "content": "快速准时",
          "label_type": 1
        }, {
          "content": "货品完好",
          "label_type": 1
        }],
        "comment_pics": [],
        "comment_scheme": [{
          "keyword": "香辣鸡腿堡+老北京鸡肉卷+饮料",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=893283581&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=970982145",
          "sku_id": 970982145,
          "spu_id": 893283581
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1534435200,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 5,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1534435200,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
        "praise_food_list": [{
          "name": "香辣鸡腿堡+老北京鸡肉卷+饮料",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=893283581&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=970982145"
        }],
        "praise_food_tip": "香辣鸡腿堡+老北京鸡肉卷+饮料",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 41,
        "user_id": 1316064294,
        "user_name": "白手巨棒",
        "user_pic_url": "https://img.meituan.net/avatar/078ee9b2110111794bce4faa1143dcfb85521.jpg",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 1971705215
      }, {
        "add_comment_list": [{
          "content": "亲爱的客官您好，非常感谢您的反馈，不能让您全部满意，我们深感抱歉，我们一定会采取有效措施针对您提出的建议进行改善，相信有了您的监督我们会做得更好，期待您的再次光临",
          "desc": "商家回复(1天后)",
          "time": 1537255031,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "#骨肉相连#虽然凉了，好在味道还行。#正新鸡排（孜然味）#送到时没有热度了，上面一层水蒸气…一点不好吃…这次很失望…第一次买正新的#无骨鸡柳#，老实说，很难吃，真的。一次失望的用餐体验……",
        "comment_labels": [{
          "content": "风雨无阻",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/34fe47b560f18a854d06c653740490e966235.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/cc3ec23c8a7cdaee3e7c0c4cd2b2474a49958.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/f602537496618d83cb7529adcdf2dae737630.jpg"
        }],
        "comment_scheme": [{
          "keyword": "正新鸡排（孜然味）",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=750759539&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=813756291",
          "sku_id": 813756291,
          "spu_id": 750759539
        }, {
          "keyword": "骨肉相连",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747118875&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1125018639",
          "sku_id": 1125018639,
          "spu_id": 747118875
        }, {
          "keyword": "无骨鸡柳",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747118877&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1124829081",
          "sku_id": 1124829081,
          "spu_id": 747118877
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1537113600,
        "comment_type": 4,
        "critic_food_tip": "正新鸡排（孜然味）,骨肉相连,无骨鸡柳",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 1,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1537113600,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的客官您好，非常感谢您的反馈，不能让您全部满意，我们深感抱歉，我们一定会采取有效措施针对您提出的建议进行改善，相信有了您的监督我们会做得更好，期待您的再次光临",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 35,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2039920173
      }, {
        "add_comment_list": [{
          "content": "亲爱的顾客您好，每个人的口味都不一样，我们店里的东西我们自己员工餐自己都在吃，我不知道你出于何种目的这样说，我是本店店长，如果你有什么不满都可来本店对质，我们店位于龙茗路1689号，祝亲生活愉快",
          "desc": "商家回复(1天后)",
          "time": 1537180681,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "看到很多差评，但是没在意还是点了，结果真的是难吃，汉堡牛肉太腥，鸡肉卷里面的肉不说了，鸡腿不说了......不想点第二次的店",
        "comment_labels": [],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/f524e08f5bfae49398d2f7faa5dad98344496.jpg"
        }],
        "comment_scheme": [{
          "keyword": "老北京鸡肉卷",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747128142&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809821936",
          "sku_id": 809821936,
          "spu_id": 747128142
        }, {
          "keyword": "特价 香酥鸡腿",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=1033063748&wmpoiid=470871157426160&sputag=&activitytag=discount&sku_id=1136715319",
          "sku_id": 1136715319,
          "spu_id": 1033063748
        }, {
          "keyword": "牛肉堡",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747120858&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809830064",
          "sku_id": 809830064,
          "spu_id": 747120858
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1537027200,
        "comment_type": 4,
        "critic_food_tip": "老北京鸡肉卷,牛肉堡,特价 香酥鸡腿",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 1,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1537027200,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的顾客您好，每个人的口味都不一样，我们店里的东西我们自己员工餐自己都在吃，我不知道你出于何种目的这样说，我是本店店长，如果你有什么不满都可来本店对质，我们店位于龙茗路1689号，祝亲生活愉快",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 22,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2037090830
      }, {
        "add_comment_list": [],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "#香辣鸡腿堡##老北京鸡肉卷#今天的汉堡和鸡肉卷里面的鸡肉一股味道，咬了一口都吐了，恶心死了！",
        "comment_labels": [],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/51d507f9ddf809ce1c6b5951299360e1417071.jpg"
        }],
        "comment_scheme": [{
          "keyword": "老北京鸡肉卷",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747128142&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809821936",
          "sku_id": 809821936,
          "spu_id": 747128142
        }, {
          "keyword": "香辣鸡腿堡",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747123773&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809829128",
          "sku_id": 809829128,
          "spu_id": 747123773
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1537286400,
        "comment_type": 4,
        "critic_food_tip": "香辣鸡腿堡,老北京鸡肉卷,无骨鸡柳",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 1,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1537286400,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 46,
        "user_id": 206263253,
        "user_name": "RXR390088979",
        "user_pic_url": "https://img.meituan.net/avatar/f37d9b01b9e7bfddb9e92adf1d8a907764733.jpg",
        "user_poi_comment_num": 1,
        "user_type": 2,
        "wm_comment_id": 2043981905
      }, {
        "add_comment_list": [{
          "content": "尊敬的顾客您好，我们产品的质量每天都是层层把关的，不会存在东西发臭的，我们每天都是腌好卖完，绝不留隔夜产品，感谢亲的光临，祝亲生活愉快",
          "desc": "商家回复(1天后)",
          "time": 1537067922,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "香辣鸡翅没有味我不说什么，臭了！！！鸡翅竟然臭了，恶心死了",
        "comment_labels": [],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/35b7d216c7d29e0930c99a48a0715800281405.jpg"
        }],
        "comment_scheme": [{
          "keyword": "香辣鸡翅",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747128143&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1125645926",
          "sku_id": 1125645926,
          "spu_id": 747128143
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1536940800,
        "comment_type": 4,
        "critic_food_tip": "香辣鸡排（香辣味）,香辣鸡腿堡,墨西哥鸡肉卷,香辣鸡翅",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 1,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1536940800,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "尊敬的顾客您好，我们产品的质量每天都是层层把关的，不会存在东西发臭的，我们每天都是腌好卖完，绝不留隔夜产品，感谢亲的光临，祝亲生活愉快",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 37,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2035936845
      }, {
        "add_comment_list": [{
          "content": "亲爱的客官您好，非常感谢您的反馈，不能让您全部满意，我们深感抱歉，我们一定会采取有效措施针对您提出的建议进行改善，相信有了您的监督我们会做得更好，期待您的再次光临",
          "desc": "商家回复(3天后)",
          "time": 1537256570,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "味道真心不好吃，没有味道，香辣鸡腿堡不辣，薯条搞的黑黢黢的，没有食欲，2",
        "comment_labels": [],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/ee684b0fa8e887d34ae7e8ed155be70844591.jpg"
        }],
        "comment_scheme": [{
          "keyword": "薯条",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747123775&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1124829235",
          "sku_id": 1124829235,
          "spu_id": 747123775
        }, {
          "keyword": "香辣鸡腿堡",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747123773&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809829128",
          "sku_id": 809829128,
          "spu_id": 747123773
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1536940800,
        "comment_type": 4,
        "critic_food_tip": "香辣鸡腿堡,劲脆鸡米花,薯条",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 1,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1536940800,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的客官您好，非常感谢您的反馈，不能让您全部满意，我们深感抱歉，我们一定会采取有效措施针对您提出的建议进行改善，相信有了您的监督我们会做得更好，期待您的再次光临",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 42,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2035042411
      }, {
        "add_comment_list": [{
          "content": "不好意思，下次备注为您补发一份",
          "desc": "商家回复(1天后)",
          "time": 1537066164,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "味道还是很好的 就是我要的热奶怎么给我送的果汁？？",
        "comment_labels": [{
          "content": "货品完好",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/4b4514acf8e429404d097fc35c2cd036131756.jpg"
        }],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1536940800,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 3,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1536940800,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "不好意思，下次备注为您补发一份",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 39,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2035252988
      }, {
        "add_comment_list": [],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "你开玩笑？我点了两份去骨鸡柳，你就送了一份。什么意思？",
        "comment_labels": [{
          "content": "快速准时",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/533b71d769fe5336f210ad7379b305c0257846.jpg"
        }],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1537459200,
        "comment_type": 4,
        "critic_food_tip": "香辣鸡排+无骨鸡柳+黑椒鸡块+饮料,无骨鸡柳",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 1,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1537459200,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 31,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2048506232
      }, {
        "add_comment_list": [{
          "content": "抱歉，漏送是我们不对，下次备注一下为您补发一份，真心抱歉",
          "desc": "商家回复(1天后)",
          "time": 1536890262,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "甜奶呢？其他都好，就是少东西",
        "comment_labels": [{
          "content": "礼貌热情",
          "label_type": 1
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/89dc6a29d4cb66b30dfedf4c22f7490d85298.jpg"
        }],
        "comment_scheme": [{
          "keyword": "甜奶",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747120862&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=974344525",
          "sku_id": 974344525,
          "spu_id": 747120862
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1536768000,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 3,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1536768000,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "抱歉，漏送是我们不对，下次备注一下为您补发一份，真心抱歉",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 42,
        "user_id": 230794447,
        "user_name": "Vmz729512894",
        "user_pic_url": "https://img.meituan.net/avatar/3154b744737f2a2af25e4bab07a173e736444.jpg",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2031430217
      }, {
        "add_comment_list": [{
          "content": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
          "desc": "商家回复(2天后)",
          "time": 1537066411,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "老北京鸡肉卷没吃就老北京味。。。感觉和墨西哥鸡肉卷一个味。鸡柳非常难吃，非常。鸡排还可以。",
        "comment_labels": [{
          "content": "货品完好",
          "label_type": 1
        }],
        "comment_pics": [],
        "comment_scheme": [{
          "keyword": "无骨鸡柳",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747118877&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=1124829081",
          "sku_id": 1124829081,
          "spu_id": 747118877
        }, {
          "keyword": "正新鸡排（甘梅味）",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=750769349&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=813765053",
          "sku_id": 813765053,
          "spu_id": 750769349
        }, {
          "keyword": "老北京鸡肉卷",
          "scheme_url": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747128142&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809821936",
          "sku_id": 809821936,
          "spu_id": 747128142
        }],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1536854400,
        "comment_type": 4,
        "critic_food_tip": "无骨鸡柳",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 3,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1536854400,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "亲爱的顾客，十分抱歉本次的服务没有让您获得最佳体验，我们会不断改善服务，期待您的再次惠顾！",
        "praise_food_list": [{
          "name": "正新鸡排（甘梅味）",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=750769349&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=813765053"
        }, {
          "name": "老北京鸡肉卷",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747128142&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809821936"
        }],
        "praise_food_tip": "正新鸡排（甘梅味）,老北京鸡肉卷",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 33,
        "user_id": 6358760,
        "user_name": "fancy0104",
        "user_pic_url": "https://img.meituan.net/avatar/15d36659cfdff1b4412fac91e904cf4e33310.jpg",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2033508380
      }, {
        "add_comment_list": [{
          "content": "抱歉，下次一定注意，甜奶热的口感更好哦",
          "desc": "商家回复(1天后)",
          "time": 1536890308,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "大哥我也是服了，我备注了三遍凉的牛奶，还是热的，能长点心吗",
        "comment_labels": [{
          "content": "礼貌热情",
          "label_type": 1
        }, {
          "content": "快速准时",
          "label_type": 1
        }, {
          "content": "货品完好",
          "label_type": 1
        }, {
          "content": "风雨无阻",
          "label_type": 1
        }, {
          "content": "穿戴工服",
          "label_type": 1
        }, {
          "content": "仪表整洁",
          "label_type": 1
        }],
        "comment_pics": [],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1536768000,
        "comment_type": 4,
        "critic_food_tip": "甜奶",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 0,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 3,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1536768000,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "抱歉，下次一定注意，甜奶热的口感更好哦",
        "praise_food_list": [{
          "name": "香辣鸡腿堡",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747123773&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809829128"
        }, {
          "name": "牛肉堡",
          "schema_uri": "meituanwaimai://waimai.meituan.com/detail?buztype=0&spuid=747120858&wmpoiid=470871157426160&sputag=&activitytag=&sku_id=809830064"
        }],
        "praise_food_tip": "香辣鸡腿堡,牛肉堡",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 31,
        "user_id": 1420425413,
        "user_name": "hja816427182",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2031414781
      }, {
        "add_comment_list": [{
          "content": "餐骑手给你送到了，你也确认收货了，然后又申请退款，餐也损失了，钱也退你了，请问这位亲，你还想要哪样呢",
          "desc": "商家回复(1天后)",
          "time": 1537253440,
          "type": 2
        }],
        "buz_code": 0,
        "can_additional": 1,
        "comment": "11.31叫的 13点才送过来  要求退款 爱理不理 拒绝退款 美团客服退的款 🌚",
        "comment_labels": [{
          "content": "配送慢",
          "label_type": 2
        }],
        "comment_pics": [{
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/e6d7dde08bc4d4bde342b878021627d711691.jpg"
        }, {
          "thumbnail_url": "",
          "url": "http://p0.meituan.net/wmcomment/022022c557952c4294912251e29ae5c420962.jpg"
        }],
        "comment_scheme": [],
        "comment_source_tip": "",
        "comment_source_type": 3,
        "comment_time": 1537113600,
        "comment_type": 4,
        "critic_food_tip": "",
        "delivery_comment_score": 0,
        "delivery_name": "",
        "delivery_type": 0,
        "disable_additional_msg": "",
        "food_comment_score": 0,
        "has_add_comment": false,
        "high_quality": 0,
        "is_anonymous": 1,
        "is_dp": 0,
        "is_picture_audited": false,
        "order_comment_score": 1,
        "order_detail": {
          "order_detail_list": [],
          "order_view_id": 0,
          "total_price": 0.0
        },
        "order_time": 1537113600,
        "order_type": 1,
        "pack_score": 0,
        "poi_id": 0,
        "poi_reply_contents": "餐骑手给你送到了，你也确认收货了，然后又申请退款，餐也损失了，钱也退你了，请问这位亲，你还想要哪样呢",
        "praise_food_list": [],
        "praise_food_tip": "",
        "quality_score": 0,
        "scheme": "",
        "ship_score": 0.0,
        "ship_time": 88,
        "user_id": 0,
        "user_name": "匿名用户",
        "user_pic_url": "",
        "user_poi_comment_num": 1,
        "user_type": 0,
        "wm_comment_id": 2039360400
      }],
      "comments_dp": {
        "comment_score": 3.5,
        "comments": [],
        "dp_poi_id": 98954344,
        "show": 1,
        "title": "大众点评",
        "total_count_desc": "13条到店评价",
        "wm_poi_id": 470871157426160
      },
      "delivery_score": 4.8,
      "filter_type_num": 2188,
      "food_score": 4.5,
      "friend_status_banner": {
        "bind_schema": "meituanwaimai://waimai.meituan.com/bindfriend?from=3",
        "friend_status": 1,
        "friend_status_tip": ""
      },
      "has_more": true,
      "labels": [{
        "content": "味道赞",
        "label_count": 76,
        "label_id": 75,
        "label_star": 5
      }, {
        "content": "价格实惠",
        "label_count": 16,
        "label_id": 61,
        "label_star": 5
      }, {
        "content": "满意",
        "label_count": 14,
        "label_id": 34,
        "label_star": 5
      }, {
        "content": "包装好",
        "label_count": 11,
        "label_id": 29,
        "label_star": 5
      }, {
        "content": "分量足",
        "label_count": 9,
        "label_id": 50,
        "label_star": 5
      }, {
        "content": "推荐",
        "label_count": 8,
        "label_id": 36,
        "label_star": 5
      }],
      "pack_score": 4.5,
      "quality_score": 4.5,
      "scores": {
        "comment_score": 0.0,
        "delivery_score": 0.0,
        "pack_score": 0.0,
        "quality_score": 0.0,
        "show": 0
      }
    },
    "code": 0,
    "msg": "成功"
  },
  shopInfo: {}
};



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(58);
module.exports = __webpack_require__(42).f('iterator');


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var defined = __webpack_require__(32);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(56);
var descriptor = __webpack_require__(24);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(17);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(38);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(91);
var step = __webpack_require__(92);
var Iterators = __webpack_require__(20);
var toIObject = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(54)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
__webpack_require__(60);
__webpack_require__(101);
__webpack_require__(102);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(55);
var META = __webpack_require__(96).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(35);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(25);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(42);
var wksDefine = __webpack_require__(43);
var enumKeys = __webpack_require__(97);
var isArray = __webpack_require__(98);
var anObject = __webpack_require__(7);
var isObject = __webpack_require__(11);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(31);
var createDesc = __webpack_require__(24);
var _create = __webpack_require__(56);
var gOPNExt = __webpack_require__(99);
var $GOPD = __webpack_require__(100);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(17);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(59).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f = $propertyIsEnumerable;
  __webpack_require__(37).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(19)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(25)('meta');
var isObject = __webpack_require__(11);
var has = __webpack_require__(12);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(37);
var pIE = __webpack_require__(26);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(18);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(14);
var gOPN = __webpack_require__(59).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(26);
var createDesc = __webpack_require__(24);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(31);
var has = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(48);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('observable');


/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(109);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(6).f });


/***/ }),
/* 112 */,
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(53);
__webpack_require__(58);
__webpack_require__(114);
__webpack_require__(126);
__webpack_require__(127);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(19);
var global = __webpack_require__(2);
var ctx = __webpack_require__(22);
var classof = __webpack_require__(61);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(11);
var aFunction = __webpack_require__(23);
var anInstance = __webpack_require__(115);
var forOf = __webpack_require__(116);
var speciesConstructor = __webpack_require__(62);
var task = __webpack_require__(63).set;
var microtask = __webpack_require__(121)();
var newPromiseCapabilityModule = __webpack_require__(45);
var perform = __webpack_require__(64);
var userAgent = __webpack_require__(122);
var promiseResolve = __webpack_require__(65);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(123)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(124)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(125)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(22);
var call = __webpack_require__(117);
var isArrayIter = __webpack_require__(118);
var anObject = __webpack_require__(7);
var toLength = __webpack_require__(51);
var getIterFn = __webpack_require__(119);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(61);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(20);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(63).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(18)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(10);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var dP = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(5);
var core = __webpack_require__(3);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(62);
var promiseResolve = __webpack_require__(65);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(45);
var perform = __webpack_require__(64);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(38);
var $keys = __webpack_require__(17);

__webpack_require__(131)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(3);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_style__ = __webpack_require__(66);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: "sep-line",
  props: {
    semicircleColor: {
      type: String,
      default: '#F9F9F9'
    },
    lineColor: {
      type: String,
      default: '#EAEAEA'
    },
    marginTop: {
      type: String,
      default: '12rpx'
    }
  },
  computed: {
    semicircleStyle: function semicircleStyle() {
      var style = {};
      style["background-color"] = this.semicircleColor;
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_style__["a" /* jointStyle */])(style);
    },
    lineStyle: function lineStyle() {
      var style = {};
      style["border-top"] = "2rpx dashed " + this.lineColor;
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_style__["a" /* jointStyle */])(style);
    },
    containerStyle: function containerStyle() {
      var style = {};
      style["margin-top"] = this.marginTop;
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_style__["a" /* jointStyle */])(style);
    }
  }
});

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "line-c",
    style: (_vm.containerStyle)
  }, [_c('div', {
    staticClass: "l",
    style: (_vm.semicircleStyle)
  }), _vm._v(" "), _c('div', {
    staticClass: "line",
    style: (_vm.lineStyle)
  }), _vm._v(" "), _c('div', {
    staticClass: "r",
    style: (_vm.semicircleStyle)
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b65aa0e", esExports)
  }
}

/***/ }),
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return postFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return putFetch; });
/* unused harmony export deleteFetch */
/* unused harmony export getFetchFromCache */
/* unused harmony export postFetchForValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HttpRequest__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_hostConfig__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_commonType__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cache_cache__ = __webpack_require__(221);
/**
 * Created by guangqiang on 2017/10/3.
 */

/** 网络请求工具类的拓展类，便于后期网络层修改维护 **/






/**
 * GET \ POST
 * 从缓存中读取数据
 * @param isCache 是否缓存
 * @param requestType 网络请求类型
 * @param url 请求url
 * @param params 请求参数
 * @param isLoading 是否显示Loading
 * @param source API资源
 * @param callback 是否有回调函数
 * @returns {value \ promise} 返回的值如果从缓存中取到数据就直接换行数据，或则返回promise对象
 */
var fetchData = function fetchData(isCache, requestType) {
  return function (url, params, isLoading, source, callback) {
    switch (source) {
      case __WEBPACK_IMPORTED_MODULE_2__constants_commonType__["a" /* ApiSource */].XIAMIMUSIC:
        url = '' + __WEBPACK_IMPORTED_MODULE_1__constants_hostConfig__["b" /* XIAMI_URL */] + url;
        break;
      case __WEBPACK_IMPORTED_MODULE_2__constants_commonType__["a" /* ApiSource */].TIMEMOVIE:
        url = '' + TIME_MOVIE_URL + url;
        break;
      default:
        url = '' + __WEBPACK_IMPORTED_MODULE_1__constants_hostConfig__["a" /* API_URL */] + url;
        break;
    }
    var fetchFunc = function fetchFunc() {
      var promise = __WEBPACK_IMPORTED_MODULE_0__HttpRequest__["a" /* default */].fetch(url, params, requestType, isLoading);
      if (callback && typeof callback === 'function') {
        promise.then(function (response) {
          return callback(response);
        });
      }
      return promise;
    };
    return Object(__WEBPACK_IMPORTED_MODULE_3__cache_cache__["a" /* dataCache */])(url, fetchFunc, isCache);
  };
};

/**
 * GET 请求
 * @param url
 * @param params
 * @param source
 * @param callback
 * @returns {{promise: Promise}}
 */
var getFetch = fetchData(false, 'GET');

/**
 * POST 请求
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
var postFetch = fetchData(false, 'POST');

/**
 * PUT 请求
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
var putFetch = fetchData(false, 'PUT');

/**
 * DELETE 请求
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
var deleteFetch = fetchData(false, 'DELETE');

/**
 * GET 请求，带缓存策略
 * @param url
 * @param params
 * @param callback
 * @returns {{promise: Promise}}
 */
var getFetchFromCache = fetchData(true, 'GET');

/**
 * POST请求参数校验，通过middleware 来实现自动校验表单参数是否合法
 * @param url
 * @param params
 */
var postFetchForValidator = function postFetchForValidator(url, params) {
  var promise = void 0;
  promise = function promise() {
    return fetchData(false, 'POST')(url, {});
  };
  return {
    data: params,
    params: params,
    nextPayload: {
      promise: promise
    }
  };
};



/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_typeof__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_responseCode__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_wxapi__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants_hostConfig__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_pathConfig__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants_errorCodeMap__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_formatTime__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_arrayExtension__ = __webpack_require__(16);







var handleLogin = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(callback) {
    var loginInfo, refreshToken, newData, params, refreshTokenInfo, wxLoginInfo, param, qbLoginInfo, _wxLoginInfo, _params, _qbLoginInfo;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', callback());

          case 10:
            console.log('已过期');
            params = {
              url: '' + __WEBPACK_IMPORTED_MODULE_8__constants_hostConfig__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_9__constants_pathConfig__["a" /* PATH */].REFRESH_TOKEN,
              data: { refreshToken: refreshToken },
              method: 'POST'
            };
            _context.next = 14;
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_wxapi__["request"])(params);

          case 14:
            refreshTokenInfo = _context.sent;

            if (!(refreshTokenInfo.code != 0)) {
              _context.next = 29;
              break;
            }

            _context.next = 18;
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_wxapi__["login"])();

          case 18:
            wxLoginInfo = _context.sent;
            param = {
              url: '' + __WEBPACK_IMPORTED_MODULE_8__constants_hostConfig__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_9__constants_pathConfig__["a" /* PATH */].LOGIN + '?trace=true',
              data: { appId: __WEBPACK_IMPORTED_MODULE_8__constants_hostConfig__["c" /* currentHost */].appId, jsCode: wxLoginInfo.code },
              method: 'POST'
            };
            _context.next = 22;
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_wxapi__["request"])(param);

          case 22:
            qbLoginInfo = _context.sent;

            console.log('silentUserId:', qbLoginInfo.data.user.id);
            console.log('silentAccessToken:', qbLoginInfo.data.accessToken);
            wx.setStorageSync('loginInfo', qbLoginInfo.data);
            return _context.abrupt('return', callback());

          case 29:
            wx.setStorageSync('loginInfo', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(loginInfo, refreshTokenInfo.data));
            return _context.abrupt('return', callback());

          case 31:
            _context.next = 45;
            break;

          case 33:
            console.log('未登录');
            _context.next = 36;
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_wxapi__["login"])();

          case 36:
            _wxLoginInfo = _context.sent;
            _params = {
              url: '' + __WEBPACK_IMPORTED_MODULE_8__constants_hostConfig__["a" /* API_URL */] + __WEBPACK_IMPORTED_MODULE_9__constants_pathConfig__["a" /* PATH */].LOGIN + '?trace=true',
              data: { appId: __WEBPACK_IMPORTED_MODULE_8__constants_hostConfig__["c" /* currentHost */].appId, jsCode: _wxLoginInfo.code },
              method: 'POST'
            };
            _context.next = 40;
            return Object(__WEBPACK_IMPORTED_MODULE_7__utils_wxapi__["request"])(_params);

          case 40:
            _qbLoginInfo = _context.sent;

            console.log('silentUserId:', _qbLoginInfo.data.user.id);
            console.log('silentAccessToken:', _qbLoginInfo.data.accessToken);
            wx.setStorageSync('loginInfo', _qbLoginInfo.data);
            return _context.abrupt('return', callback());

          case 45:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handleLogin(_x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Created by guangqiang on 2017/10/3.
 */

/** 封装的基于Fetch网络请求工具类 **/










/**
 * fetch 网络请求的header，可自定义header 内容
 * @type {{Accept: string, Content-Type: string, accessToken: *}}
 */
var header = {
  'Content-Type': 'application/json'

  /**
   * GET请求时，拼接请求URL
   * @param url 请求URL
   * @param params 请求参数
   * @returns {*}
   */
};var handleUrl = function handleUrl(url) {
  return function (params) {
    if (params) {
      var paramsArray = [];
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(params).forEach(function (key) {
        return paramsArray.push(key + '=' + encodeURIComponent(params[key]));
      });
      if (url.search(/\?/) === -1) {
        (typeof params === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_typeof___default()(params)) === 'object' ? url += '?' + paramsArray.join('&') : url;
      } else {
        url += '&' + paramsArray.join('&');
      }
    }
    return url;
  };
};

/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的fetch
 * @param timeout 超时时间 30s
 * @returns {Promise.<*>}
 */
var timeoutFetch = function timeoutFetch(original_fetch) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30000;

  var timeoutBlock = function timeoutBlock() {};
  var timeout_promise = new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    timeoutBlock = function timeoutBlock() {
      // 请求超时处理
      reject('timeout promise');
    };
  });

  var abortable_promise = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a.race([original_fetch, timeout_promise]);

  setTimeout(function () {
    timeoutBlock();
  }, timeout);

  return abortable_promise;
};

var networkLog = function networkLog(url, params, res, beforeRequest, isSuccess) {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  var route = currentPage.route;
  var networkType = wx.getStorageSync('networkType');
  var afterRequest = new Date().getTime();
  var timeDif = afterRequest - beforeRequest;
  var networkArr = wx.getStorageSync('networkArr') || [];
  if (networkArr.length >= 30) {
    wx.removeStorageSync('networkArr');
    networkArr = [];
  }
  var time = Object(__WEBPACK_IMPORTED_MODULE_11__utils_formatTime__["timestampToCommonDate"])(new Date().getTime());
  networkArr = __WEBPACK_IMPORTED_MODULE_12__utils_arrayExtension__["a" /* _array */].unshift(networkArr, { url: url, params: params, res: res, time: time, route: route, timeDif: timeDif, networkType: networkType, isSuccess: isSuccess });
  wx.setStorageSync('networkArr', networkArr);
};

var HttpUtils = {
  /**
   * fetch网络请求
   * @param {string} [url=''] 网络请求URL
   * @param {*} [params={}] 网络请求参数
   * @param {string} [requestType='GET'] 请求类型
   * @param {boolean} [isLoading=true] 是否需要Loading
   */
  fetch: function fetch() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var requestType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var isLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var fetchCallback = function fetchCallback() {
      var promise = timeoutFetch(new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        wx.showNavigationBarLoading();
        isLoading ? wx.showLoading({ title: '加载中...', mask: true }) : null;
        var beforeRequest = new Date().getTime();
        wx.request({
          url: url,
          data: params,
          header: header,
          method: requestType,
          success: function success(res) {
            var isSuccess = false;
            var resCode = res.statusCode;
            if (parseInt(resCode / 100) == 2) {
              isSuccess = true;
              resolve(res.data);
            } else if (resCode == __WEBPACK_IMPORTED_MODULE_6__constants_responseCode__["a" /* default */].TOKEN_INVALID) {} else if (resCode == __WEBPACK_IMPORTED_MODULE_6__constants_responseCode__["a" /* default */].USER_LOGOUT) {} else {
              wx.showToast({ title: '服务器异常', icon: 'none', duration: 4000 });
            }
            networkLog(url, params, res.data, beforeRequest, isSuccess);
          },
          fail: function fail(e) {
            wx.showToast({ title: e.errMsg, icon: 'none', duration: 4000 });
            networkLog(url, params, e, beforeRequest, false);
            reject(e);
          },
          complete: function complete() {
            isLoading ? wx.hideLoading() : null;
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
          }
        });
      }));
      return promise;
    };
    return handleLogin(fetchCallback);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (HttpUtils);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(216);


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(217);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(44);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by guangqiang on 2017/10/3.
 */

var responseCode = {
  RESPONSE_SUCCESS: '200', // 请求成功,返回数据
  TOKEN_INVALID: '-117', // token 失效
  USER_LOGOUT: '-110', // 用户未登录
  PARTICIPANT_NOT_GRANT_JOIN: '20220010', // 用户没有权限参与
  ACTIVITY_CREATER_NOT_GRANT: '20210025' // 活动创建者没有权限
};

/* harmony default export */ __webpack_exports__["a"] = (responseCode);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export errorCode */
/** Created by guangqiang on 2018-07-19 20:41:50 */

var errorCode = {
  '20220001': '活动已参与',
  '20210021': '您已创建了活动，不可重复创建哦',
  '20210000': '活动不存在',
  '20210010': '活动不处于开放状态',
  '20230015': '活动名额已用光,请再换个试试吧~',
  '20230016': '活动名额已用光,请再换个试试吧~',
  '20230017': '优惠券库存不足',
  '20210001': '活动已结束',
  '20210008': '活动已结束',
  '20210009': '活动暂未发布开放状态'
};



/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_wxapi__ = __webpack_require__(28);
/**
 * Created by guangqiang on 2017/10/3.
 */



/**
 * @param key：key为请求 url
 * @param fetchFunc：回调函数
 * @param isCache：是否需要缓存
 * @returns {value}
 */
var dataCache = function dataCache(key, fetchFunc, isCache) {
  // 不缓存，
  if (!isCache) {
    return fetchFunc();
  }
  // 需要缓存
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_wxapi__["getStorage"])(key).then(function (value) {
    if (value) {
      // 如果在缓存中找到数据，则返回缓存中的数据
      return value;
    } else {
      // 如果在缓存中取不到数据，则从网络请求中获取数据，并将获取到的数据缓存下来
      return fetchFunc().then(function (value) {
        value ? Object(__WEBPACK_IMPORTED_MODULE_0__utils_wxapi__["setStorage"])(key, value) : null;
        return value;
      });
    }
  });
};



/***/ })
]);
//# sourceMappingURL=vendor.js.map