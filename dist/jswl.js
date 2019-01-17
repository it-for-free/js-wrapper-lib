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

/***/ "./src/jswl.js":
/*!*********************!*\
  !*** ./src/jswl.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (jswl);\n\nvar jswl = new JSWrapperLib();\n\n/**\n * Набор обёрток, с более удобным синтаксисо\n * (чистый JavaScript)\n * \n * Если объявить точку входа как:\n *   var jswl = new JSWrapperLib();\n * \n * То функции в вашем скрипте можно вызывать как:\n * \n * jswl.имяфункции()\n * \n * @returns {undefined}\n */\nfunction JSWrapperLib() {\n\n\n    var self = this;\n\n    /**\n     * Проверит является ли \n     * значение null или undefined\n     * \n     * @param {mixed} value  проверяемое значение\n     * @returns {boolean}\n     */\n    this.isNullOrUndefined = function(value)\n    {\n        return (typeof value === \"undefined\" \n                || value === null);\n    }\n\n\n    /**\n     * Проверит содержится ли элемент в массиве\n     * \n     * @param {mixed} value\n     * @param {array} array\n     * @returns {Boolean}\n     */\n    this.inArray = function(value, array)\n    {\n        return (!(array.indexOf(value) === -1));\n    }\n\n    /**\n     * Проверка на пустоту, пусто если:\n     *  - тип = \"undefined\"\n     *  - = null\n     *  - = ноль\n     *  - = пустой строке\n     * \n     * @param {mixed} value  проверяемое значение\n     * @returns {Boolean} \n     */\n    this.isEmpty = function(value) {\n        return (typeof value === \"undefined\" || value === null \n            || value ===  \"\" || value ===  0);\n    }\n    \n    /**\n     * Определено ли значение:\n     * - тип не \"undefined\"\n     * - не = null\n     * \n     * @param {mixed} value  проверяемое значение\n     * @returns {Boolean} \n     */\n    this.isDefined = function(value) {\n        return (typeof value !== \"undefined\" && value !== null);\n    }\n\n    /**\n     * Получит фрагмент строки фрагмент, если её части разделены квадратными скобками:\n     * people[123][groups][34][2]\n     * -- для номера 3 вернёт 34\n     * \n     * @param {string} str  строка с фрагментами. окружеными квадратными скобками\n     * @param {int} number  номер фрагмента (начиная с нуля)\n     * @returns {string}\n     */\n    this.getSquareBracketedFragmentByNumber = function(str, number) {\n\n        var nameFrags = self.getSquareBracketedFragments(str);\n        return nameFrags[number];\n    }\n\n\n    /**\n     * Получит фрагмент строки, если её части \n     * разделены квадратными скобками в виде массива,\n     *  например дпя:\n     * people[123][groups][34][2]\n     * вернёт массив элементов (строк):\n     * [people, 123, groups, 34, 2]\n     * -- по факту разбиение идёт по открывающей скобке\n     * \n     * @param {string} str  строка с фрагментами. окружеными квадратными скобками\n     * @returns {array} массив строк\n     */\n    this.getSquareBracketedFragments = function(str) {\n\n        var nameFrags = str.split('['); // разбиваем по открывающей скобке\n        nameFrags.forEach(function(element, index, nameFrags) {\n            nameFrags[index] = element.replace(/\\]/g, \"\"); \n        });\n        return nameFrags;\n    }\n\n    /**\n     * Проверит, что подстрока входит в данную строку\n     * (содержится в строке) \n     * \n     * @param {string} str    строка\n     * @param {string} substr  подстрока\n     * @returns {Boolean}\n     */\n    this.checkForSubstring = function(str, substr)\n    {\n        return (str.indexOf(substr) !== -1);\n    }\n    \n    /**\n     * Тестовый вызов jswl (привет мир) \n     * Test jswl exists\n     *   \n     * @returns {undefined}\n     */\n    this.hello = function()\n    {\n        console.log('Hello JSWL! ;)');\n    }\n}\n\n//# sourceURL=webpack://jswl/./src/jswl.js?");

/***/ })

/******/ })["default"];
});