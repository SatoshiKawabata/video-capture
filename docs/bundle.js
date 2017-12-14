/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nodes = undefined;

var _domRecycler = __webpack_require__(10);

var _domRecycler2 = _interopRequireDefault(_domRecycler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var nodes = exports.nodes = { 0: null };
var lastPtr = 0;

var addPtr = function addPtr(node) {
  if (node === null) return 0;
  if (node.asmDomPtr !== undefined) return node.asmDomPtr;
  var ptr = ++lastPtr;
  nodes[ptr] = node;
  node.asmDomPtr = ptr;
  return ptr;
};

exports['default'] = {
  'addNode': function addNode(node) {
    addPtr(node.parentNode);
    addPtr(node.nextSibling);
    return addPtr(node);
  },
  'createElement': function createElement(tagName) {
    return addPtr(_domRecycler2['default'].create(tagName));
  },
  'createElementNS': function createElementNS(namespaceURI, qualifiedName) {
    return addPtr(_domRecycler2['default'].createNS(qualifiedName, namespaceURI));
  },
  'createTextNode': function createTextNode(text) {
    return addPtr(_domRecycler2['default'].createText(text));
  },
  'createComment': function createComment(text) {
    return addPtr(_domRecycler2['default'].createComment(text));
  },
  'insertBefore': function insertBefore(parentNodePtr, newNodePtr, referenceNodePtr) {
    nodes[parentNodePtr].insertBefore(nodes[newNodePtr], nodes[referenceNodePtr]);
  },
  'removeChild': function removeChild(childPtr) {
    if (nodes[childPtr] === null || nodes[childPtr] === undefined) return;
    _domRecycler2['default'].collect(nodes[childPtr]);
  },
  'appendChild': function appendChild(parentPtr, childPtr) {
    nodes[parentPtr].appendChild(nodes[childPtr]);
  },
  'removeAttribute': function removeAttribute(nodePtr, attr) {
    nodes[nodePtr].removeAttribute(attr);
  },
  'setAttribute': function setAttribute(nodePtr, attr, value) {
    // xChar = 120
    // colonChar = 58
    if (attr.charCodeAt(0) !== 120) {
      nodes[nodePtr].setAttribute(attr, value);
    } else if (attr.charCodeAt(3) === 58) {
      // Assume xml namespace
      nodes[nodePtr].setAttributeNS('http://www.w3.org/XML/1998/namespace', attr, value);
    } else if (attr.charCodeAt(5) === 58) {
      // Assume xlink namespace
      nodes[nodePtr].setAttributeNS('http://www.w3.org/1999/xlink', attr, value);
    } else {
      nodes[nodePtr].setAttribute(attr, value);
    }
  },

  // eslint-disable-next-line
  'parentNode': function parentNode(nodePtr) {
    return nodes[nodePtr] !== null && nodes[nodePtr] !== undefined && nodes[nodePtr].parentNode !== null ? nodes[nodePtr].parentNode.asmDomPtr : 0;
  },
  // eslint-disable-next-line
  'nextSibling': function nextSibling(nodePtr) {
    return nodes[nodePtr] !== null && nodes[nodePtr] !== undefined && nodes[nodePtr].nextSibling !== null ? nodes[nodePtr].nextSibling.asmDomPtr : 0;
  },
  'setTextContent': function setTextContent(nodePtr, text) {
    nodes[nodePtr].textContent = text;
  }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const define = component => {
  customElements.define(component.tagName, component);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = define;


const merge = (origin, diff) => {
  for (let k in diff) {
      if (!diff[k] || isPrimitive(diff[k])) {
          origin[k] = diff[k];
      } else if (diff[k].constructor === Object) {
          if (!origin[k]) {
              origin[k] = {};
          }
          merge(origin[k], diff[k]);
      } else if (diff[k].constructor === Array) {
          if (!origin[k]) {
              origin[k] = [];
          }
          merge(origin[k], diff[k]);
      }
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = merge;


const typeEquals = (type, target) => {
  const clas = Object.prototype.toString.call(target).slice(8, -1);
  return clas === type;
};

const isPrimitive = a => {
  return typeEquals("Number", a) || typeEquals("Boolean", a) || typeEquals("String", a);
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(1);


class UIComponent extends HTMLElement {
  static get tagName() {
    throw new Error('UIComponent is abstract class');
    return 'ui-component';
  }

  static get observedAttributes() {
    return [];
  }

  get initialState() {
    return {};
  }

  beforeMount() {}

  constructor() {
    super();
    this.state = this.initialState;
    this.beforeMount();
    this.attachShadow({ mode: 'open' });
    this.oldVnode = document.createElement('div');
    this.shadowRoot.appendChild(this.oldVnode);
    this.update();
  }

  render() {
    const { h } = window.asmDom;
    return h('div', {}, 'ui-component');
  }

  update(state) {
    Object(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* merge */])(this.state, state);
    const { patch } = window.asmDom;
    const vnode = this.render();
    patch(this.oldVnode, vnode);
    this.oldVnode = vnode;
  }

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {}
  adoptedCallback(oldDocument, newDocument) {}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UIComponent;


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_asm_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_asm_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_asm_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app_container__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_video_container__ = __webpack_require__(12);



Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* define */])(__WEBPACK_IMPORTED_MODULE_2__components_app_container__["a" /* default */]);

Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* define */])(__WEBPACK_IMPORTED_MODULE_3__components_video_container__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_asm_dom___default()({
  unsafePatch: true
}).then(asmDom => {
  const { h, patch } = asmDom;
  const root = document.getElementById('root');
  const vnode = h('app-container', {}, []);
  patch(root, vnode);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _h = __webpack_require__(6);

var _h2 = _interopRequireDefault(_h);

var _patch = __webpack_require__(7);

var _patch2 = _interopRequireDefault(_patch);

var _toHTML = __webpack_require__(8);

var _diff = __webpack_require__(9);

var _diff2 = _interopRequireDefault(_diff);

var _domApi = __webpack_require__(0);

var _domApi2 = _interopRequireDefault(_domApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cache = {};

// import() is compiled to require.ensure, this is a polyfill for nodejs
// an alternative solution is needed
if (false) require.ensure = function (d, c) {
  c(require);
};

exports['default'] = function (config) {
  if (config === undefined) config = {};

  if (cache.lib !== undefined && config.hardReload !== true) {
    return Promise.resolve(cache.lib);
  }

  if (config.clearMemory === undefined) config.clearMemory = true;
  if (config.unsafePatch === undefined) config.unsafePatch = false;

  var result = void 0;
  var readyPromise = new Promise(function (resolve) {
    config['_main'] = function () {
      return resolve(cache);
    };
  });
  if ((config.useWasm === true || 'WebAssembly' in window) && config.useAsmJS !== true) {
    result = new Promise(function (resolve) {
      __webpack_require__.e/* require.ensure */(0).then((function (require) {
        resolve(__webpack_require__(13));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }).then(function (x) {
      return x['default'](config);
    });
  } else {
    result = new Promise(function (resolve) {
      __webpack_require__.e/* require.ensure */(1).then((function (require) {
        resolve(__webpack_require__(14));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    });
  }

  return result.then(function (lib) {
    return lib(config);
  }).then(function (lib) {
    cache.lib = lib;

    if (window === undefined && global !== undefined) global.window = {};
    window.asmDom = lib;

    lib.h = _h2['default'];
    lib.patch = _patch2['default'];
    lib.toHTML = _toHTML.toHTML;
    lib.getNode = function (vnode) {
      return _domApi.nodes[lib._getNode(vnode)];
    };
    lib.deleteVNode = function (oldVnode) {
      window.asmDomHelpers.vnodesData[oldVnode] = undefined;
      lib._deleteVNode(oldVnode);
    };
    lib.reset = function () {
      window.asmDomHelpers = {
        currentNode: undefined,
        domApi: _domApi2['default'],
        vnodesData: {},
        diff: _diff2['default'],
        appendProps: _toHTML.appendProps,
        insertInnerHTML: _toHTML.insertInnerHTML
      };
    };

    lib.reset();

    return readyPromise;
  }).then(function (x) {
    return x.lib;
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// eslint-disable-next-line
Array.prototype.instanceofArray = true;

var getChildren = function getChildren(arr) {
  var result = new window.asmDom.VNodePtrVector();
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result.push_back(window.asmDom._h_ti(arr[i], true));
    } else if (arr[i] !== false && arr[i] !== null && arr[i] !== undefined) {
      result.push_back(arr[i]);
    }
  }
  return result;
};

var objToProps = function objToProps(obj) {
  var map = new window.asmDom.MapStringString();
  if (typeof obj.className === 'string') map.set('class', obj.className);
  for (var x in obj) {
    if (obj[x] !== false && x !== 'className' && x !== 'raw') {
      // eslint-disable-next-line
      map.set(x, '' + obj[x]);
    }
  }
  return map;
};

exports['default'] = function (a, b, c, d) {
  var result = void 0;
  var raw = b !== undefined && b.raw !== undefined ? b.raw : undefined;
  if (b === undefined) {
    result = window.asmDom._h_s(a);
  } else if (c === undefined) {
    if (b.instanceofArray === true) {
      result = window.asmDom._h_sc(a, b = getChildren(b));
      b['delete']();
    } else {
      switch (typeof b === 'undefined' ? 'undefined' : _typeof(b)) {
        case 'boolean':
          result = window.asmDom._h_ti(a, b);
          break;
        case 'string':
          result = window.asmDom._h_st(a, b);
          break;
        case 'number':
          result = window.asmDom._h_sn(a, b);
          break;
        case 'object':
          result = window.asmDom._h_sd(a, b = objToProps(b));
          b['delete']();
          break;
        default:
          throw new Error('Invalid argument: ', b);
      }
    }
  } else if (d === undefined) {
    if (c.instanceofArray === true) {
      result = window.asmDom._h_sdc(a, b = objToProps(b), c = getChildren(c));
      b['delete']();
      c['delete']();
    } else {
      switch (typeof c === 'undefined' ? 'undefined' : _typeof(c)) {
        case 'string':
          result = window.asmDom._h_sdt(a, b = objToProps(b), c);
          b['delete']();
          break;
        case 'number':
          result = window.asmDom._h_sdn(a, b = objToProps(b), c);
          b['delete']();
          break;
        default:
          throw new Error('Invalid argument: ', c);
      }
    }
  } else {
    throw new Error('Invalid arguments provided to h function');
  }
  if (raw !== undefined) window.asmDomHelpers.vnodesData[result] = { raw: raw };
  return result;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (oldVnode, vnode) {
  if (window.asmDom.unsafePatch === false && window.asmDomHelpers.currentNode !== oldVnode && window.asmDomHelpers.currentNode !== undefined) return;
  // eslint-disable-next-line
  if (oldVnode === vnode) return vnode;
  window.asmDomHelpers.currentNode = vnode;
  if (typeof oldVnode !== 'number') {
    var props = new window.asmDom.MapStringString();
    if (oldVnode.id !== '') props.set('id', oldVnode.id);
    if (oldVnode.className !== '') props.set('class', oldVnode.className);
    oldVnode = window.asmDom._h_elm(oldVnode.tagName.toLowerCase(), props, window.asmDomHelpers.domApi.addNode(oldVnode));
    props['delete']();
  }
  window.asmDom._patch(oldVnode, vnode);
  if (window.asmDom.clearMemory === true) {
    setTimeout(window.asmDom.deleteVNode.bind(null, oldVnode));
  }
  // eslint-disable-next-line
  return vnode;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://developer.mozilla.org/en-US/docs/Web/API/element
var omitProps = {
  attributes: true,
  childElementCount: true,
  children: true,
  classList: true,
  clientHeight: true,
  clientLeft: true,
  clientTop: true,
  clientWidth: true,
  currentStyle: true,
  firstElementChild: true,
  innerHTML: true,
  lastElementChild: true,
  nextElementSibling: true,
  ongotpointercapture: true,
  onlostpointercapture: true,
  onwheel: true,
  outerHTML: true,
  previousElementSibling: true,
  runtimeStyle: true,
  scrollHeight: true,
  scrollLeft: true,
  scrollLeftMax: true,
  scrollTop: true,
  scrollTopMax: true,
  scrollWidth: true,
  tabStop: true,
  tagName: true
};

var escapes = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;',
  '"': '&quot;',
  '\'': '&apos;',
  '`': '&#96;'
};

var escape = function escape(string) {
  return String(string).replace(/[&<>"'`]/g, function (char) {
    return escapes[char];
  });
};

var appendProps = exports.appendProps = function appendProps(vnodePtr) {
  var raws = window.asmDomHelpers.vnodesData[vnodePtr];
  if (raws === undefined) return '';

  raws = raws.raw;
  if (raws === undefined) return '';

  var props = '';
  // eslint-disable-next-line
  for (var key in raws) {
    var type = _typeof(raws[key]);
    if (omitProps[key] === undefined && type !== 'function' && type !== 'undefined') {
      props += ' ' + key + '="' + escape(raws[key]) + '"';
    }
  }

  return props;
};

var insertInnerHTML = exports.insertInnerHTML = function insertInnerHTML(vnodePtr) {
  var data = window.asmDomHelpers.vnodesData[vnodePtr];
  return data !== undefined && data.raw !== undefined && data.raw.innerHTML !== undefined ? String(data.raw.innerHTML) : '';
};

var toHTML = exports.toHTML = function toHTML(vnode) {
  if (typeof vnode !== 'number') return '';

  var html = window.asmDom._toHTML(vnode);

  if (window.asmDom.clearMemory === true) {
    setTimeout(window.asmDom.deleteVNode.bind(null, vnode));
  }

  return html;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _domApi = __webpack_require__(0);

exports['default'] = function (oldVnodePtr, vnodePtr, elmPtr) {
  var oldRaws = window.asmDomHelpers.vnodesData[oldVnodePtr];
  var newRaws = window.asmDomHelpers.vnodesData[vnodePtr];
  if (oldRaws !== undefined) oldRaws = oldRaws.raw;
  if (newRaws !== undefined) newRaws = newRaws.raw;

  if (oldRaws === undefined && newRaws === undefined || oldRaws === newRaws) return;
  if (oldRaws === undefined) oldRaws = {};
  if (newRaws === undefined) newRaws = {};

  var elm = _domApi.nodes[elmPtr];

  for (var key in oldRaws) {
    if (newRaws[key] === undefined) {
      elm[key] = undefined;
    }
  }

  for (var _key in newRaws) {
    if (oldRaws[_key] !== newRaws[_key] || (_key === 'value' || _key === 'checked') && elm[_key] !== newRaws[_key]) {
      elm[_key] = newRaws[_key];
    }
  }

  elm.asmDomRaws = Object.keys(newRaws);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var recycler = {
  collect: function collect(node) {
    recycler.clean(node);
    var name = node.nodeName;
    if (node.asmDomNS !== undefined) name += node.namespaceURI;
    var list = recycler.nodes[name];
    if (list !== undefined) list.push(node);else recycler.nodes[name] = [node];
  },
  create: function create(name) {
    name = name.toUpperCase();
    var list = recycler.nodes[name];
    if (list !== undefined) {
      var node = list.pop();
      if (node !== undefined) return node;
    }
    return document.createElement(name);
  },
  createNS: function createNS(name, ns) {
    name = name.toUpperCase();
    var list = recycler.nodes[name + ns];
    if (list !== undefined) {
      var _node = list.pop();
      if (_node !== undefined) return _node;
    }
    var node = document.createElementNS(ns, name);
    node.asmDomNS = ns;
    return node;
  },
  createText: function createText(text) {
    var list = recycler.nodes['#text'];
    if (list !== undefined) {
      var node = list.pop();
      if (node !== undefined) {
        node.nodeValue = text;
        return node;
      }
    }
    return document.createTextNode(text);
  },
  createComment: function createComment(comment) {
    var list = recycler.nodes['#comment'];
    if (list !== undefined) {
      var node = list.pop();
      if (node !== undefined) {
        node.nodeValue = comment;
        return node;
      }
    }
    return document.createComment(comment);
  },
  clean: function clean(node) {
    var i = void 0;
    // eslint-disable-next-line
    while (i = node.lastChild) {
      recycler.collect(i);
    }node.remove();
    i = node.attributes !== undefined ? node.attributes.length : 0;
    while (i--) {
      node.removeAttribute(node.attributes[i].name);
    }if (node.asmDomRaws !== undefined && node.asmDomRaws.length > 0) {
      node.asmDomRaws.forEach(function (raw) {
        node[raw] = undefined;
      });
      node.asmDomRaws = [];
    }
    if (node.textContent !== null && node.textContent !== '') {
      node.textContent = '';
    }
    Object.keys(node).forEach(function (key) {
      if (key[0] !== 'a' || key[1] !== 's' || key[2] !== 'm' || key[3] !== 'D' || key[4] !== 'o' || key[5] !== 'm') {
        node[key] = undefined;
      }
    });
  },

  nodes: {}
};

exports['default'] = recycler;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_component__ = __webpack_require__(2);


class AppContainer extends __WEBPACK_IMPORTED_MODULE_0__ui_component__["a" /* default */] {
  static get tagName() {
    return 'app-container';
  }

  constructor() {
    super();
  }

  beforeMount() {
    this._onChangeFiles = this._onChangeFiles.bind(this);
    this._onClickExport = this._onClickExport.bind(this);
  }

  get initialState() {
    return {
      videoInfos: [],
      frameInfos: []
    };
  }

  render() {
    const { h } = window.asmDom;
    const { videoInfos, frameInfos } = this.state;
    const links = frameInfos.map(info => {
      return h('a', {
        raw: {
          href: info.url,
          download: info.name
        }
      }, [info.name]);
    });

    return h('div', {}, [
      h('input', {
        raw: {
          id: 'file-loader',
          type: 'file',
          multiple: true,
          accept: 'video/*',
          onchange: this._onChangeFiles
        }
      }),
      h('div', {}, [
        h('p', {}, '書き出しサイズ'),
        h('label', {}, 'width'),
        h('input', {
          raw: {
            type: 'number',
            id: 'width-input'
          }
        }),
        h('label', {}, 'height'),
        h('input', {
          raw: {
            type: 'number',
            id: 'height-input'
          }
        }),
        h('button', {
          raw: {
            disabled: videoInfos.length === 0,
            onclick: this._onClickExport
          },
        }, ['ダウンロードリンク生成']),
      ]),
      h('div', {}, ...links),
      h('video-container', { infos: JSON.stringify(videoInfos) }),
    ]);
  }

  _onChangeFiles() {
    const { files } = this.shadowRoot.querySelector('#file-loader');
    const videoInfos = [];
    for (let i = 0; i < files.length; i++) {
      videoInfos.push({
        src: URL.createObjectURL(files[i]),
        name: files[i].name
      });
    }
    this.update({
      videoInfos
    });
  }

  _onClickExport() {
    const vc = this.shadowRoot.querySelector('video-container');
    const w = Number(this.shadowRoot.querySelector('#width-input').value);
    const h = Number(this.shadowRoot.querySelector('#height-input'));
    vc.getFrameUrls(w, h).then(frameInfos => {
      this.update({ frameInfos });
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppContainer;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_component__ = __webpack_require__(2);


class VideoContainer extends __WEBPACK_IMPORTED_MODULE_0__ui_component__["a" /* default */] {
  static get tagName() {
    return 'video-container';
  }

  static get observedAttributes() {
    return [
      'infos'
    ];
  }

  get initialState() {
    return { infos: [] };
  }

  getFrameUrls(w = null, h = null) {
    return new Promise((res, rej) => {
      const videos = this.shadowRoot.querySelectorAll('video');
      const l = videos.length;
      const infos = [];
      for (let i = 0; i < l; i++) {
        const v = videos[i];
        const c = document.createElement('canvas');
        const name = this._cutExtension(v.name);
        c.width = w ? w : v.videoWidth;
        c.height = h ? h : v.videoHeight;
        c.getContext("2d").drawImage(v, 0, 0, c.width, c.height);
        c.toBlob(b => {
          const url = URL.createObjectURL(b);
          infos.push({ url, name });
          if (infos.length === l) {
            res(infos);
          }
        });
      }
    });
  }

  _cutExtension(str) {
    const sp = str.split('.');
    return sp[0];
  }

  render() {
    const { h } = window.asmDom;
    const { infos } = this.state;
    const videos = this.state.infos.map(info => {
      return h('video', {
        raw: {
          controls: true,
          src: info.src,
          name: info.name
        }
      });
    });
    return h('div', {}, videos);
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    if (attributeName === 'infos') {
      const infos = JSON.parse(newValue);
      this.update({infos});
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VideoContainer;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map