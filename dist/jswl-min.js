(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jswl"] = factory();
	else
		root["jswl"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jswl.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/*! exports provided: array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"array\", function() { return array; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n\n/**\n * Функции для работы с массивами\n * @module Массивы\n */\n\n/**\n * Проверит содержится ли элемент в массиве\n *\n * @param {mixed} value\n * @param {array} array\n * @param {Boolean} strict - если true - проверка будет проведена в строгом режиме\n * @returns {Boolean}\n */\n\nvar inArray = function inArray(value, array) {\n  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  if (!Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"isEmpty\"])(strict)) {\n    if (typeof strict === 'boolean') {\n      if (strict) return !(array.indexOf(value) === -1);\n    } else {\n      throw new Error('3rd param must be boolean');\n    }\n  }\n\n  for (var i = 0; i < array.length; i++) {\n    if (array[i] == value) return true;\n  }\n\n  return false;\n};\n/**\n * Проверит содержится ли хотя бы один элемент из первого массива\n * во втором\n *\n * @param {array} needles массив значений, которые ищем\n * @param {array} array   массив, в котором ищем\n * @returns {Boolean}\n */\n\n\nvar isAnyInArray = function isAnyInArray(needles, array) {\n  var result = false;\n\n  for (var i = 0; i < needles.length; i++) {\n    if (inArray(needles[i], array, true)) {\n      result = true;\n      break;\n    }\n  }\n\n  return result;\n};\n/**\n * Удалит из массива все эелменты в строгом смысле совпадающие с\n * value\n *\n * @param {array} arr\n * @param {mixed} value элемент, равные которому надо удалить из массива\n * @return {Array|JSWrapperLib.removeAllElementsLike.newArr}\n */\n\n\nvar removeAllElementsLike = function removeAllElementsLike(arr, value) {\n  var newArr = [];\n  arr.forEach(function (currentElement, index, array) {\n    if (currentElement !== value) {\n      newArr.push(currentElement);\n    }\n  });\n  return newArr;\n};\n/**\n * Вернет массив, оставив там только уникальные значения\n * ( JavaScript 1.6 / ECMAScript 5)\n * @link https://stackoverflow.com/a/14438954\n *\n * @param {array} arr исходный массив\n * @return {array}\n */\n\n\nvar uniqueArray = function uniqueArray(arr) {\n  return Array.from(new Set(arr));\n};\n/**\n * Проверит, что все элементы массива не пусты (в смысле вызова для каждого jswl.isEmpty())\n *\n * @param {array} value\n * @returns {boolean}\n */\n\n\nvar allNotEmpty = function allNotEmpty(arr) {\n  var result = true;\n\n  for (var i = 0; i < arr.length; i++) {\n    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"isEmpty\"])(arr[i])) {\n      result = false;\n      break;\n    }\n  }\n\n  return result;\n};\n/**\n * Вернет объект вида:\n * { key: key, value: value}, где value - первый элемент из массива объектов arr,\n * если указанное свойство этого объекта propName совпадает с указанным значением propValue\n *\n * @param {array} arr        массив объектов\n * @param {string} propName  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)\n * @param {mixed} propValue  значение поля, которое ищем\n * @returns {object}  в случае неудачного поиска {value: undefiend, key: undefiend}\n */\n\n\nvar getArrElementAndIndexByObjectProp = function getArrElementAndIndexByObjectProp(arr, propName, propValue) {\n  var result = {\n    key: i,\n    value: arr[i]\n  };\n  var foundValue = null;\n\n  for (var i = 0; i < arr.length; i++) {\n    foundValue = Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"getPropByPath\"])(arr[i], propName);\n\n    if (foundValue.found && foundValue.value === propValue) {\n      result = {\n        key: i,\n        value: arr[i]\n      };\n      break;\n    }\n  }\n\n  return result;\n};\n/**\n * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением\n *\n * @param {array} arr        массив объектов\n * @param {string} propName  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)\n * @param {mixed} propValue  значение поля, которое ищем\n * @returns {mixed}\n */\n\n\nvar getArrElementByObjectProp = function getArrElementByObjectProp(arr, propName, propValue) {\n  var result = getArrElementAndIndexByObjectProp(arr, propName, propValue);\n  return result ? result.value : result;\n};\n\nvar array = {\n  inArray: inArray,\n  isAnyInArray: isAnyInArray,\n  removeAllElementsLike: removeAllElementsLike,\n  uniqueArray: uniqueArray,\n  allNotEmpty: allNotEmpty,\n  getArrElementAndIndexByObjectProp: getArrElementAndIndexByObjectProp,\n  getArrElementByObjectProp: getArrElementByObjectProp\n};\n\n\n//# sourceURL=webpack://jswl/./src/array.js?");

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! exports provided: isNullOrUndefined, isDefined, isObject, isObjectEmpty, getPropByPath, isEmpty, getPropIfObjectDefined, getSquareBracketedFragments, getSquareBracketedFragmentByNumber, checkForSubstring, common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNullOrUndefined\", function() { return isNullOrUndefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDefined\", function() { return isDefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObjectEmpty\", function() { return isObjectEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPropByPath\", function() { return getPropByPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPropIfObjectDefined\", function() { return getPropIfObjectDefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSquareBracketedFragments\", function() { return getSquareBracketedFragments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSquareBracketedFragmentByNumber\", function() { return getSquareBracketedFragmentByNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForSubstring\", function() { return checkForSubstring; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"common\", function() { return common; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/**\n * Общие функции\n * @module Общее\n */\n\n/**\n * Проверит является ли\n * значение null или undefined\n *\n * @param {mixed} value  проверяемое значение\n * @returns {boolean}\n */\nvar isNullOrUndefined = function isNullOrUndefined(value) {\n  return typeof value === \"undefined\" || value === null;\n};\n/**\n * Определено ли значение:\n * - тип не \"undefined\"\n * - не = null\n *\n * @param {mixed} value  проверяемое значение\n * @returns {Boolean}\n */\n\n\nvar isDefined = function isDefined(value) {\n  return typeof value !== \"undefined\" && value !== null;\n};\n/**\n * Получит фрагмент строки, если её части\n * разделены квадратными скобками в виде массива,\n *  например дпя:\n * people[123][groups][34][2]\n * вернёт массив элементов (строк):\n * [people, 123, groups, 34, 2]\n * -- по факту разбиение идёт по открывающей скобке\n *\n * @param {string} str  строка с фрагментами. окружеными квадратными скобками\n * @returns {array} массив строк\n */\n\n\nvar getSquareBracketedFragments = function getSquareBracketedFragments(str) {\n  var nameFrags = str.split('['); // разбиваем по открывающей скобке\n\n  nameFrags.forEach(function (element, index, nameFrags) {\n    nameFrags[index] = element.replace(/\\]/g, \"\");\n  });\n  return nameFrags;\n};\n/**\n * Получит фрагмент строки фрагмент, если её части разделены квадратными скобками:\n * people[123][groups][34][2]\n * -- для номера 3 вернёт 34\n *\n * @param {string} str  строка с фрагментами. окружеными квадратными скобками\n * @param {int} number  номер фрагмента (начиная с нуля)\n * @returns {string}\n */\n\n\nvar getSquareBracketedFragmentByNumber = function getSquareBracketedFragmentByNumber(str, number) {\n  var nameFrags = getSquareBracketedFragments(str);\n  return nameFrags[number];\n};\n/**\n * Проверит, что подстрока входит в данную строку\n * (содержится в строке)\n *\n * @param {string} str    строка\n * @param {string} substr  подстрока\n * @returns {Boolean}\n */\n\n\nvar checkForSubstring = function checkForSubstring(str, substr) {\n  return str.indexOf(substr) !== -1;\n};\n/**\n * Проверит является ли значение объектом\n *\n * @param {mixed} value\n * @returns {Boolean}\n */\n\n\nvar isObject = function isObject(value) {\n  return isDefined(value) && _typeof(value) === 'object';\n};\n/**\n * Проверит является ли объект пустым\n *\n * @param {object} obj\n * @returns {Boolean}\n */\n\n\nvar isObjectEmpty = function isObjectEmpty(obj) {\n  for (var prop in obj) {\n    if (obj.hasOwnProperty(prop)) return false;\n  }\n\n  return true;\n};\n/**\n * Вернет значение из объекта по указанному пути (в качестве разделителей поддерживаются точки)/\n * Использует стандартную obj.hasOwnProperty() для проверки того, что значение реально существует в объекте.\n *\n * @param {object} obj   массив объектов\n * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)\n * @returns {mixed}\n */\n\n\nvar getPropByPath = function getPropByPath(obj, path) {\n  var result = {\n    found: false,\n    value: undefined\n  };\n  var fragments = path.split('.');\n  var value = obj;\n\n  for (var i = 0; i < fragments.length; i++) {\n    if (isDefined(value)) {\n      result.found = value.hasOwnProperty(fragments[i]) ? true : false;\n      value = value[fragments[i]];\n    } else {\n      result.found = false;\n      break;\n    }\n  }\n\n  if (result.found) {\n    result.value = value;\n  }\n\n  return result;\n};\n/**\n * Проверка на пустоту, пусто если:\n *  - тип = \"undefined\"\n *  - = null\n *  - = ноль (как сторка или как число)\n *  - = пустой строке\n *  - = пустому массиву\n *  - = false\n *\n * @param {mixed} value  проверяемое значение\n * @returns {Boolean}\n */\n\n\nvar isEmpty = function isEmpty(value) {\n  return typeof value === \"undefined\" || value === null || value === \"\" || value === 0 || value === \"0\" || isDefined(value.length) && value.length === 0 //  empty array\n  || value === false || isObject(value) && isObjectEmpty(value) //  empty object\n  ;\n};\n/**\n * Если передан объект, то попытается отдать значение поля с именем propertyName\n * иначе вернет defaultValue\n *\n * @param {mixed} obj\n * @param {string} propertyName\n * @param {mixed} defaultValue  что возвращать, на случай если это не объект\n * @returns {mixed}\n */\n\n\nvar getPropIfObjectDefined = function getPropIfObjectDefined(obj, propertyName) {\n  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n\n  if (isObject(obj)) {\n    return obj[propertyName];\n  } else {\n    return defaultValue;\n  }\n};\n/**\n * Тестовый вызов jswl (привет мир)\n * Test jswl exists\n *\n * @returns {undefined}\n */\n\n\nvar hello = function hello() {\n  console.log('Hello JSWL! ;)');\n};\n\nvar common = {\n  isNullOrUndefined: isNullOrUndefined,\n  isDefined: isDefined,\n  isObject: isObject,\n  isObjectEmpty: isObjectEmpty,\n  getPropByPath: getPropByPath,\n  isEmpty: isEmpty,\n  getPropIfObjectDefined: getPropIfObjectDefined,\n  getSquareBracketedFragments: getSquareBracketedFragments,\n  getSquareBracketedFragmentByNumber: getSquareBracketedFragmentByNumber,\n  checkForSubstring: checkForSubstring,\n  hello: hello\n};\n\n\n\n//# sourceURL=webpack://jswl/./src/common.js?");

/***/ }),

/***/ "./src/jswl.js":
/*!*********************!*\
  !*** ./src/jswl.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obj */ \"./src/obj.js\");\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ \"./src/array.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar jswl = _objectSpread(_objectSpread({}, _common__WEBPACK_IMPORTED_MODULE_2__[\"common\"]), {}, {\n  obj: _obj__WEBPACK_IMPORTED_MODULE_0__[\"obj\"],\n  arr: _array__WEBPACK_IMPORTED_MODULE_1__[\"array\"]\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (jswl);\n\n//# sourceURL=webpack://jswl/./src/jswl.js?");

/***/ }),

/***/ "./src/obj.js":
/*!********************!*\
  !*** ./src/obj.js ***!
  \********************/
/*! exports provided: obj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"obj\", function() { return obj; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n\n/**\n * Функции для работы с объектами\n * @module Объекты\n */\n\n/**\n * Вернет значение из объекта по указанному пути (в качестве разделителей поддерживаются точки)/\n * Использует стандартную obj.hasOwnProperty() для проверки того, что значение реально существует в объекте.\n *\n * @param {object} obj   массив объектов\n * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)\n * @returns {mixed}\n */\n\nvar getPropByPath = function getPropByPath(obj, path) {\n  var result = {\n    found: false,\n    value: undefined\n  };\n  var fragments = path.split('.');\n  var value = obj;\n\n  for (var i = 0; i < fragments.length; i++) {\n    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"isDefined\"])(value)) {\n      result.found = value.hasOwnProperty(fragments[i]) ? true : false;\n      value = value[fragments[i]];\n    } else {\n      result.found = false;\n      break;\n    }\n  }\n\n  if (result.found) {\n    result.value = value;\n  }\n\n  return result;\n};\n/**\n * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением\n *\n * @param {object} arr       объект, поля которого также содержат объекты\n * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)\n * @param {mixed} propValue  значение поля, которое ищем\n * @returns {mixed}\n */\n\n\nvar getObjectPropBySubprop = function getObjectPropBySubprop(obj, subpropName, subpropValue) {\n  var result = undefined;\n  var foundValue = null;\n\n  for (var prop in obj) {\n    foundValue = getPropByPath(obj[prop], subpropName);\n\n    if (foundValue.found && foundValue.value === subpropValue) {\n      result = obj[prop];\n      break;\n    }\n  }\n\n  return result;\n};\n\nvar obj = {\n  getPropByPath: getPropByPath,\n  getObjectPropBySubprop: getObjectPropBySubprop\n};\n\n\n//# sourceURL=webpack://jswl/./src/obj.js?");

/***/ })

/******/ })["default"];
});