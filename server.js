/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/BooksList.js":
/*!****************************************!*\
  !*** ./src/js/components/BooksList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const/routes */ \"./src/js/const/routes.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ \"./src/js/utils/index.js\");\n/**\n * DEPENDENCIES\n */\n\n\n\nvar Text = antd__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"].Text;\n\n\n\nvar BooksList = function BooksList(_ref) {\n  var books = _ref.books;\n  var booksList = books.map(function (book) {\n    var styles = {\n      backgroundImage: \"url(./assets/\".concat(book.id, \".jpg)\"),\n      backgroundSize: 'cover',\n      backgroundPosition: 'top center',\n      borderRadius: '4px',\n      height: '220px',\n      marginBottom: '12px'\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: book.id\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"\".concat(_const_routes__WEBPACK_IMPORTED_MODULE_3__[\"BOOK\"], \"/\").concat(book.id)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: styles\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"bookslist-card-meta\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n      strong: true\n    }, Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"trimString\"])(book.title, 40)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n      type: \"secondary\"\n    }, book.author))));\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"bookslist\"\n  }, booksList);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BooksList);\n\n//# sourceURL=webpack:///./src/js/components/BooksList.js?");

/***/ }),

/***/ "./src/js/components/Search.js":
/*!*************************************!*\
  !*** ./src/js/components/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ \"xml2js\");\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _const_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const/api */ \"./src/js/const/api.js\");\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const/routes */ \"./src/js/const/routes.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * DEPENDENCIES\n */\n\n\n\n\n\n\nvar Option = antd__WEBPACK_IMPORTED_MODULE_5__[\"AutoComplete\"].Option;\nvar Text = antd__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"].Text;\n/**\n * CONSTANTS\n */\n\n\n\nvar INITIAL_STATE = {\n  value: '',\n  suggestions: []\n};\n\nvar SearchBox =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SearchBox, _React$Component);\n\n  function SearchBox(props) {\n    var _this;\n\n    _classCallCheck(this, SearchBox);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBox).call(this, props));\n    _this.state = _objectSpread({}, INITIAL_STATE);\n    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));\n    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));\n    _this.renderSuggestions = _this.renderSuggestions.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(SearchBox, [{\n    key: \"handleChange\",\n    value: function handleChange(value) {\n      var _this2 = this;\n\n      this.setState({\n        value: value\n      }); // console.log(value);\n      // history.push({\n      // \tpathname: 'book',\n      // \tsearch: `?search=${value}`\n      // });\n\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(_const_api__WEBPACK_IMPORTED_MODULE_6__[\"CROSS_ORIGIN_URL\"], \"/\").concat(_const_api__WEBPACK_IMPORTED_MODULE_6__[\"GOODREADS_API_BASE_URL\"], \"/search/index.xml\"), {\n        params: {\n          key: \"Z3hcxvFv8xpWMmDCDl6g\",\n          q: value\n        }\n      }).then(function (xml) {\n        Object(xml2js__WEBPACK_IMPORTED_MODULE_4__[\"parseString\"])(xml.data, function (err, result) {\n          var hasSuggestions = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isPlainObject(result['GoodreadsResponse']['search'][0]['results'][0]);\n\n          var suggestionsRes = hasSuggestions ? result['GoodreadsResponse']['search'][0]['results'][0]['work'] : null;\n\n          if (hasSuggestions) {\n            // console.log(suggestionsRes);\n            var suggestions = suggestionsRes.map(function (book) {\n              return {\n                id: book['best_book'][0]['id'][0]['_'],\n                title: book['best_book'][0]['title'][0],\n                author: book['best_book'][0]['author'][0]['name'][0]\n              };\n            });\n\n            _this2.setState({\n              suggestions: suggestions\n            });\n          }\n        });\n      })[\"catch\"](function (error) {\n        return console.log(error);\n      });\n    }\n  }, {\n    key: \"handleSelect\",\n    value: function handleSelect(bookId) {\n      var history = this.props.history;\n      this.setState(_objectSpread({}, INITIAL_STATE));\n      history.push(\"\".concat(_const_routes__WEBPACK_IMPORTED_MODULE_7__[\"BOOK\"], \"/\").concat(bookId));\n      console.log('select');\n    }\n  }, {\n    key: \"renderSuggestions\",\n    value: function renderSuggestions() {\n      var _this$state = this.state,\n          title = _this$state.title,\n          suggestions = _this$state.suggestions;\n\n      if (suggestions && title !== '') {\n        return suggestions.slice(0, 6).map(function (suggestion, index) {\n          var id = suggestion.id,\n              title = suggestion.title,\n              author = suggestion.author;\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {\n            key: id\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n            strong: true\n          }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n            type: \"secondary\"\n          }, author)));\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        className: \"search\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"AutoComplete\"], {\n        value: this.state.value,\n        dataSource: this.renderSuggestions(),\n        style: {\n          width: 360\n        },\n        onSearch: this.handleChange,\n        onSelect: this.handleSelect,\n        placeholder: \"Search books\",\n        size: \"default\"\n      }));\n    }\n  }]);\n\n  return SearchBox;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(SearchBox));\n\n//# sourceURL=webpack:///./src/js/components/Search.js?");

/***/ }),

/***/ "./src/js/const/api.js":
/*!*****************************!*\
  !*** ./src/js/const/api.js ***!
  \*****************************/
/*! exports provided: GOODREADS_API_BASE_URL, CROSS_ORIGIN_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GOODREADS_API_BASE_URL\", function() { return GOODREADS_API_BASE_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CROSS_ORIGIN_URL\", function() { return CROSS_ORIGIN_URL; });\nvar GOODREADS_API_BASE_URL = 'https://www.goodreads.com';\nvar CROSS_ORIGIN_URL = 'https://cors-anywhere.herokuapp.com';\n\n//# sourceURL=webpack:///./src/js/const/api.js?");

/***/ }),

/***/ "./src/js/const/routes.js":
/*!********************************!*\
  !*** ./src/js/const/routes.js ***!
  \********************************/
/*! exports provided: HOME, ABOUT, BOOK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HOME\", function() { return HOME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ABOUT\", function() { return ABOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOOK\", function() { return BOOK; });\n/**\n * ROUTES\n */\nvar HOME = '/';\nvar ABOUT = '/about';\nvar BOOK = '/book';\n\n//# sourceURL=webpack:///./src/js/const/routes.js?");

/***/ }),

/***/ "./src/js/data/newFiction.js":
/*!***********************************!*\
  !*** ./src/js/data/newFiction.js ***!
  \***********************************/
/*! exports provided: newFiction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newFiction\", function() { return newFiction; });\nvar newFiction = [{\n  id: '43558293',\n  title: 'The Innocents',\n  author: 'Michael Crummey',\n  avgRating: '4.04'\n}, {\n  id: '43923951',\n  title: 'Such a Fun Age',\n  author: 'Kiley Reid',\n  avgRating: '4.22'\n}, {\n  id: '45915285',\n  title: 'Meg and Jo',\n  author: 'Virginia Kantra',\n  avgRating: '3.66'\n}, {\n  id: '44646730',\n  title: 'Room to Breathe',\n  author: 'Liz Talley',\n  avgRating: '3.75'\n}, {\n  id: '43889823',\n  title: 'Holly Banks Full of Angst',\n  author: 'Julie Valerie',\n  avgRating: '2.97'\n}, {\n  id: '44909178',\n  title: 'The Story of a Goat',\n  author: 'Perumal Murugan, N Kalyan Raman',\n  avgRating: '4.14'\n}];\n\n//# sourceURL=webpack:///./src/js/data/newFiction.js?");

/***/ }),

/***/ "./src/js/data/newMemoir.js":
/*!**********************************!*\
  !*** ./src/js/data/newMemoir.js ***!
  \**********************************/
/*! exports provided: newMemoir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newMemoir\", function() { return newMemoir; });\nvar newMemoir = [{\n  id: '45434420',\n  title: 'Quit Like a Woman: The Radical Choice to Not Drink in a Culture Obsessed with Alcohol',\n  author: 'Holly Whitaker',\n  avgRating: '4.14'\n}, {\n  id: '48345394',\n  title: 'Paris or Die',\n  author: 'Jayne Tuttle',\n  avgRating: '3.35'\n}, {\n  id: '47522187',\n  title: 'A Bookshop in Berlin',\n  author: 'Françoise Frenkel',\n  avgRating: '3.81'\n}, {\n  id: '42972006',\n  title: 'The Broken Road: George Wallace and a Daughter’s Journey to Reconciliation',\n  author: 'Peggy Wallace Kennedy',\n  avgRating: '3.56'\n}, {\n  id: '45186565',\n  title: 'Uncanny Valley',\n  author: 'Anna Wiener',\n  avgRating: '4.18'\n}, {\n  id: '44287159',\n  title: 'Wild Life: Dispatches from a Childhood of Baboons and Button-Downs',\n  author: 'Keena Roberts',\n  avgRating: '4.60'\n}];\n\n//# sourceURL=webpack:///./src/js/data/newMemoir.js?");

/***/ }),

/***/ "./src/js/data/newNonfiction.js":
/*!**************************************!*\
  !*** ./src/js/data/newNonfiction.js ***!
  \**************************************/
/*! exports provided: newNonfiction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newNonfiction\", function() { return newNonfiction; });\nvar newNonfiction = [{\n  id: '43835525',\n  title: 'The Crying Book',\n  author: 'Heather Christle',\n  avgRating: '4.06'\n}, {\n  id: '43889826',\n  title: \"That Wild Country: An Epic Journey through the Past, Present, and Future of America's Public Lands\",\n  author: 'Mark Kenyon',\n  avgRating: '4.11'\n}, {\n  id: '43522569',\n  title: 'The Way We All Became The Brady Bunch: How the Canceled Sitcom Became the Beloved Pop Culture Icon We Are Still Talking About Today',\n  author: 'Kimberly Potts',\n  avgRating: '3.58'\n}, {\n  id: '43289014',\n  title: 'Older, but Better, but Older',\n  author: 'Caroline de Maigret, Sophie Mas',\n  avgRating: '3.26'\n}, {\n  id: '44081128',\n  title: 'Finding Chika: A Little Girl, an Earthquake, and the Making of a Family',\n  author: 'Mitch Albom',\n  avgRating: '4.49'\n}, {\n  id: '39404425',\n  title: 'The Selected Letters of Ralph Ellison',\n  author: 'Ralph Ellison',\n  avgRating: '3.83'\n}];\n\n//# sourceURL=webpack:///./src/js/data/newNonfiction.js?");

/***/ }),

/***/ "./src/js/data/popNonfiction.js":
/*!**************************************!*\
  !*** ./src/js/data/popNonfiction.js ***!
  \**************************************/
/*! exports provided: popNonfiction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popNonfiction\", function() { return popNonfiction; });\nvar popNonfiction = [{\n  id: '6493208',\n  title: 'The Immortal Life of Henrietta Lacks',\n  author: 'Rebecca Skloot',\n  avgRating: '4.06'\n}, {\n  id: '8520610',\n  title: \"Quiet: The Power of Introverts in a World That Can't Stop Talking\",\n  author: 'Susan Cain',\n  avgRating: '4.06'\n}, {\n  id: '35133922',\n  title: 'Educated',\n  author: 'Tara Westover',\n  avgRating: '4.48'\n}, {\n  id: '25489625',\n  title: 'Between the World and Me',\n  author: 'Ta-Nehisi Coates',\n  avgRating: '4.40'\n}, {\n  id: '3228917',\n  title: 'Outliers: The Story of Success',\n  author: 'Malcolm Gladwell',\n  avgRating: '4.15'\n}, {\n  id: '32145',\n  title: 'Stiff: The Curious Lives of Human Cadavers',\n  author: 'Mary Roach',\n  avgRating: '4.06'\n}];\n\n//# sourceURL=webpack:///./src/js/data/popNonfiction.js?");

/***/ }),

/***/ "./src/js/pages/BookPage.js":
/*!**********************************!*\
  !*** ./src/js/pages/BookPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-react-parser */ \"html-react-parser\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ \"xml2js\");\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _const_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const/api */ \"./src/js/const/api.js\");\n/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const/routes */ \"./src/js/const/routes.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * DEPENDENCIES\n */\n\n\n\n\n\n\nvar Title = antd__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"].Title,\n    Text = antd__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"].Text,\n    Paragraph = antd__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"].Paragraph;\n/**\n * CONSTANTS\n */\n\n\n\n\nvar BookPage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(BookPage, _React$Component);\n\n  function BookPage(props) {\n    var _this;\n\n    _classCallCheck(this, BookPage);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BookPage).call(this, props));\n    _this.state = {\n      title: '',\n      authors: '',\n      publisher: '',\n      publicationDate: '',\n      description: '',\n      numPages: '',\n      avgRating: '',\n      ratingsCount: '',\n      reviewsCount: '',\n      imgUrl: '',\n      similarBooks: [],\n      loading: false\n    };\n    return _this;\n  }\n\n  _createClass(BookPage, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.getBook();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (prevProps.match.params.bookId !== this.props.match.params.bookId) {\n        this.getBook();\n      }\n    }\n  }, {\n    key: \"getBook\",\n    value: function getBook() {\n      var _this2 = this;\n\n      this.setState({\n        loading: true\n      });\n      var bookId = this.props.match.params.bookId;\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(_const_api__WEBPACK_IMPORTED_MODULE_6__[\"CROSS_ORIGIN_URL\"], \"/\").concat(_const_api__WEBPACK_IMPORTED_MODULE_6__[\"GOODREADS_API_BASE_URL\"], \"/book/show.xml\"), {\n        params: {\n          key: \"Z3hcxvFv8xpWMmDCDl6g\",\n          id: bookId\n        }\n      }).then(function (xml) {\n        Object(xml2js__WEBPACK_IMPORTED_MODULE_4__[\"parseString\"])(xml.data, function (err, result) {\n          var _result$GoodreadsResp = result['GoodreadsResponse']['book'][0],\n              _result$GoodreadsResp2 = _slicedToArray(_result$GoodreadsResp.title, 1),\n              title = _result$GoodreadsResp2[0],\n              _result$GoodreadsResp3 = _slicedToArray(_result$GoodreadsResp.authors, 1),\n              author = _result$GoodreadsResp3[0].author,\n              _result$GoodreadsResp4 = _slicedToArray(_result$GoodreadsResp.publisher, 1),\n              publisher = _result$GoodreadsResp4[0],\n              _result$GoodreadsResp5 = _slicedToArray(_result$GoodreadsResp.description, 1),\n              description = _result$GoodreadsResp5[0],\n              _result$GoodreadsResp6 = _slicedToArray(_result$GoodreadsResp.average_rating, 1),\n              avgRating = _result$GoodreadsResp6[0],\n              _result$GoodreadsResp7 = _slicedToArray(_result$GoodreadsResp.ratings_count, 1),\n              ratingsCount = _result$GoodreadsResp7[0],\n              _result$GoodreadsResp8 = _slicedToArray(_result$GoodreadsResp.text_reviews_count, 1),\n              reviewsCount = _result$GoodreadsResp8[0],\n              _result$GoodreadsResp9 = _slicedToArray(_result$GoodreadsResp.image_url, 1),\n              imgUrl = _result$GoodreadsResp9[0],\n              _result$GoodreadsResp10 = _slicedToArray(_result$GoodreadsResp.similar_books, 1),\n              book = _result$GoodreadsResp10[0].book;\n\n          author = author.length > 1 ? author.map(function (auth) {\n            return auth.name[0];\n          }).join(',') : author[0]['name'][0];\n          var similarBooks = book.slice(0, 10).map(function (book) {\n            var id = book.id[0];\n            var title = book.title[0];\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n              key: id\n            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n              to: \"\".concat(_const_routes__WEBPACK_IMPORTED_MODULE_7__[\"BOOK\"], \"/\").concat(id)\n            }, title));\n          });\n\n          _this2.setState({\n            title: title,\n            author: author,\n            publisher: publisher,\n            description: description,\n            avgRating: avgRating,\n            ratingsCount: ratingsCount,\n            reviewsCount: reviewsCount,\n            imgUrl: imgUrl,\n            similarBooks: similarBooks,\n            loading: false\n          });\n        });\n      })[\"catch\"](function (err) {\n        return console.log(err);\n      });\n    }\n  }, {\n    key: \"renderBookData\",\n    value: function renderBookData() {\n      var _this$state = this.state,\n          title = _this$state.title,\n          author = _this$state.author,\n          description = _this$state.description,\n          avgRating = _this$state.avgRating,\n          ratingsCount = _this$state.ratingsCount,\n          reviewsCount = _this$state.reviewsCount;\n      ratingsCount = Number(ratingsCount).toLocaleString('en');\n      reviewsCount = Number(reviewsCount).toLocaleString('en');\n      var rateValue = Math.round(Number(avgRating));\n      var titleContent, authorContent, descriptionContent, ratingsContent;\n\n      if (title) {\n        titleContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {\n          level: 3\n        }, title);\n      }\n\n      if (author) {\n        authorContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n          strong: true\n        }, \"by \", author));\n      }\n\n      if (avgRating) {\n        ratingsContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"bookpage-ratings-container\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Rate\"], {\n          disabled: true,\n          key: \"Rate:\".concat(rateValue),\n          defaultValue: rateValue\n        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n          strong: true\n        }, avgRating), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n          type: \"warning\"\n        }, String(ratingsCount), \" ratings\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n          type: \"warning\"\n        }, String(reviewsCount), \" reviews\"));\n      }\n\n      if (description) {\n        descriptionContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"bookpage-description\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, null, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(description)));\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, titleContent, authorContent, ratingsContent, descriptionContent);\n    }\n  }, {\n    key: \"renderBookImagePublisher\",\n    value: function renderBookImagePublisher() {\n      var _this$state2 = this.state,\n          imgUrl = _this$state2.imgUrl,\n          publisher = _this$state2.publisher;\n      var imgContent, publisherContent;\n\n      if (imgUrl) {\n        imgContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n          src: imgUrl,\n          className: \"bookpage-image\"\n        });\n      }\n\n      if (publisher) {\n        publisherContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n          type: \"secondary\"\n        }, \"Published by\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {\n          strong: true\n        }, publisher));\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, imgContent, publisherContent);\n    }\n  }, {\n    key: \"renderSimilarBooks\",\n    value: function renderSimilarBooks() {\n      var similarBooks = this.state.similarBooks;\n\n      if (similarBooks) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {\n          level: 4\n        }, \"Readers also enjoyed...\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n          className: \"bookpage-similar-books\"\n        }, similarBooks));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var loading = this.state.loading;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"bookpage-container layout-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n        type: \"flex\",\n        justify: \"start\",\n        gutter: [0, 80]\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n        span: 5\n      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Spin\"], {\n        size: \"large\"\n      }) : this.renderBookImagePublisher()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n        span: 12\n      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Skeleton\"], {\n        active: true\n      }) : this.renderBookData())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n        gutter: [0, 80]\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n        span: 12,\n        offset: 5\n      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__[\"Skeleton\"], {\n        active: true\n      }) : this.renderSimilarBooks())));\n    }\n  }]);\n\n  return BookPage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookPage);\n\n//# sourceURL=webpack:///./src/js/pages/BookPage.js?");

/***/ }),

/***/ "./src/js/pages/HomePage.js":
/*!**********************************!*\
  !*** ./src/js/pages/HomePage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BooksList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BooksList */ \"./src/js/components/BooksList.js\");\n/* harmony import */ var _data_popNonfiction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/popNonfiction */ \"./src/js/data/popNonfiction.js\");\n/* harmony import */ var _data_newFiction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/newFiction */ \"./src/js/data/newFiction.js\");\n/* harmony import */ var _data_newNonfiction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/newNonfiction */ \"./src/js/data/newNonfiction.js\");\n/* harmony import */ var _data_newMemoir__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/newMemoir */ \"./src/js/data/newMemoir.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/**\n * DEPENDENCIES\n */\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Header,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Footer,\n    Sider = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Sider,\n    Content = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Content;\nvar Title = antd__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"].Title;\n/**\n * CONSTANTS\n */\n\n\n\n\n\n\nvar HomePage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(HomePage, _React$Component);\n\n  function HomePage(props) {\n    _classCallCheck(this, HomePage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, props));\n  }\n\n  _createClass(HomePage, [{\n    key: \"renderBookList\",\n    value: function renderBookList() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n        className: \"layout-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {\n        className: \"layout-content\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {\n        level: 3\n      }, \"Popular Nonfiction\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BooksList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        books: _data_popNonfiction__WEBPACK_IMPORTED_MODULE_3__[\"popNonfiction\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {\n        level: 3\n      }, \"New Releases Nonfiction\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BooksList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        books: _data_newNonfiction__WEBPACK_IMPORTED_MODULE_5__[\"newNonfiction\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {\n        level: 3\n      }, \"New Releases Fiction\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BooksList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        books: _data_newFiction__WEBPACK_IMPORTED_MODULE_4__[\"newFiction\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {\n        level: 3\n      }, \"New Releases Memoir\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BooksList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        books: _data_newMemoir__WEBPACK_IMPORTED_MODULE_6__[\"newMemoir\"]\n      }))));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/js/pages/HomePage.js?");

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/*! exports provided: trimString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trimString\", function() { return trimString; });\nvar trimString = function trimString(str, length) {\n  return str.length > length ? str.substr(0, length - 1) + '...' : str;\n};\n\n//# sourceURL=webpack:///./src/js/utils/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/api */ \"./src/shared/api.js\");\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('dist'));\napp.get('*', function (req, res) {\n  Object(_shared_api__WEBPACK_IMPORTED_MODULE_5__[\"fetchBookData\"])().then(function (data) {\n    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      data: data\n    }));\n    res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n            <title>SSR with RR</title>\\n            <link\\n              rel=\\\"stylesheet\\\"\\n              href=\\\"https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css\\\"\\n            />\\n            <link rel=\\\"stylesheet\\\" href=\\\"/main.css\\\" />\\n            <script src=\\\"/app.bundle.js\\\" defer></script>\\n            <script>window.__INITIAL_DATA__ = \".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_4___default()(data), \"</script>\\n          </head>\\n          <body>\\n            <div id=\\\"app\\\">\").concat(markup, \"</div>\\n          </body>\\n        </html>\\n      \"));\n  });\n});\napp.listen(3000, function () {\n  console.log('Server is listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/Search */ \"./src/js/components/Search.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_pages_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/pages/HomePage */ \"./src/js/pages/HomePage.js\");\n/* harmony import */ var _js_pages_BookPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/pages/BookPage */ \"./src/js/pages/BookPage.js\");\n/* harmony import */ var _js_const_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../js/const/routes */ \"./src/js/const/routes.js\");\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Book */ \"./src/shared/Book.js\");\nvar _this = undefined;\n\n/**\n * DEPENDENCIES\n */\n\n\n\n\n\nvar history = Object(history__WEBPACK_IMPORTED_MODULE_3__[\"createMemoryHistory\"])();\nvar Header = antd__WEBPACK_IMPORTED_MODULE_4__[\"Layout\"].Header,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_4__[\"Layout\"].Footer;\n/**\n * COMPONENTS\n */\n\n\n\n/**\n * CONSTANTS\n */\n\n\n\n\nvar App = function App() {\n  return (// <Router history={history} basename={process.env.PUBLIC_URL}>\n    // \t<Layout className=\"layout\">\n    // \t\t<Header className=\"topbar\">\n    // \t\t\t<div className=\"topbar-inner-container\">\n    // \t\t\t\t<Link to={ROUTES.HOME} className=\"topbar-logo\">\n    // \t\t\t\t\t<div>\n    // \t\t\t\t\t\t<img src=\"./assets/logo.png\" />\n    // \t\t\t\t\t</div>\n    // \t\t\t\t\t<div className=\"topbar-logo-text\">Readyr</div>\n    // \t\t\t\t</Link>\n    // \t\t\t\t<div className=\"topbar-nav-search-container\">\n    // \t\t\t\t\t<Search />\n    // \t\t\t\t</div>\n    // \t\t\t</div>\n    // \t\t</Header>\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Book__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      data: _this.props.data\n    }) // \t\t<Route exact path={ROUTES.HOME} component={HomePage} />\n    // \t\t<Route path={`${ROUTES.BOOK}/:bookId`} component={BookPage} />\n    // \t\t<Footer style={{ padding: '64px 0' }}>\n    // \t\t\t<div className=\"layout-container\">\n    // \t\t\t\t<div>Readyr</div>\n    // \t\t\t</div>\n    // \t\t</Footer>\n    // \t</Layout>\n    // </Router>\n\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/Book.js":
/*!****************************!*\
  !*** ./src/shared/Book.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Book =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Book, _React$Component);\n\n  function Book() {\n    _classCallCheck(this, Book);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Book).apply(this, arguments));\n  }\n\n  _createClass(Book, [{\n    key: \"render\",\n    value: function render() {\n      var book = this.props.data;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, book[0].title);\n    }\n  }]);\n\n  return Book;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Book);\n\n//# sourceURL=webpack:///./src/shared/Book.js?");

/***/ }),

/***/ "./src/shared/api.js":
/*!***************************!*\
  !*** ./src/shared/api.js ***!
  \***************************/
/*! exports provided: fetchBookData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBookData\", function() { return fetchBookData; });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xml2js */ \"xml2js\");\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_const_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/const/api */ \"./src/js/const/api.js\");\n\n\n\nfunction fetchBookData() {\n  var bookId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3228917;\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(_js_const_api__WEBPACK_IMPORTED_MODULE_2__[\"CROSS_ORIGIN_URL\"], \"/\").concat(_js_const_api__WEBPACK_IMPORTED_MODULE_2__[\"GOODREADS_API_BASE_URL\"], \"/book/show.xml?key=\").concat(\"Z3hcxvFv8xpWMmDCDl6g\", \"&id=\").concat(bookId)).then(function (xml) {\n    console.log('xml', xml.data);\n    Object(xml2js__WEBPACK_IMPORTED_MODULE_1__[\"parseString\"])(xml.data, function (err, result) {\n      return result['GoodreadsResponse'].book[0];\n    });\n  })[\"catch\"](function (error) {\n    console.warn(error);\n    return null;\n  });\n}\n\n//# sourceURL=webpack:///./src/shared/api.js?");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "html-react-parser":
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-react-parser\");\n\n//# sourceURL=webpack:///external_%22html-react-parser%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "xml2js":
/*!*************************!*\
  !*** external "xml2js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xml2js\");\n\n//# sourceURL=webpack:///external_%22xml2js%22?");

/***/ })

/******/ });