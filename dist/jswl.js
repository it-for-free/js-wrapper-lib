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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/common.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Общие функции
 * @module Общее
 */

/**
 * Проверит является ли
 * значение null или undefined
 *
 * @param {mixed} value  проверяемое значение
 * @returns {boolean}
 */
var isNullOrUndefined = function isNullOrUndefined(value) {
  return typeof value === "undefined" || value === null;
};
/**
 * Определено ли значение:
 * - тип не "undefined"
 * - не = null
 *
 * @param {mixed} value  проверяемое значение
 * @returns {Boolean}
 */


var isDefined = function isDefined(value) {
  return typeof value !== "undefined" && value !== null;
};
/**
 * Получит фрагмент строки, если её части
 * разделены квадратными скобками в виде массива,
 *  например дпя:
 * people[123][groups][34][2]
 * вернёт массив элементов (строк):
 * [people, 123, groups, 34, 2]
 * -- по факту разбиение идёт по открывающей скобке
 *
 * @param {string} str  строка с фрагментами. окружеными квадратными скобками
 * @returns {array} массив строк
 */


var getSquareBracketedFragments = function getSquareBracketedFragments(str) {
  var nameFrags = str.split('['); // разбиваем по открывающей скобке

  nameFrags.forEach(function (element, index, nameFrags) {
    nameFrags[index] = element.replace(/\]/g, "");
  });
  return nameFrags;
};
/**
 * Получит фрагмент строки фрагмент, если её части разделены квадратными скобками:
 * people[123][groups][34][2]
 * -- для номера 3 вернёт 34
 *
 * @param {string} str  строка с фрагментами. окружеными квадратными скобками
 * @param {int} number  номер фрагмента (начиная с нуля)
 * @returns {string}
 */


var getSquareBracketedFragmentByNumber = function getSquareBracketedFragmentByNumber(str, number) {
  var nameFrags = getSquareBracketedFragments(str);
  return nameFrags[number];
};
/**
 * Проверит, что подстрока входит в данную строку
 * (содержится в строке)
 *
 * @param {string} str    строка
 * @param {string} substr  подстрока
 * @returns {Boolean}
 */


var checkForSubstring = function checkForSubstring(str, substr) {
  return str.indexOf(substr) !== -1;
};
/**
 * Проверит является ли значение объектом
 *
 * @param {mixed} value
 * @returns {Boolean}
 */


var isObject = function isObject(value) {
  return isDefined(value) && _typeof(value) === 'object';
};
/**
 * Проверит является ли объект пустым
 *
 * @param {object} obj
 * @returns {Boolean}
 */


var isObjectEmpty = function isObjectEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
};
/**
 * Вернет значение из объекта по указанному пути (в качестве разделителей поддерживаются точки)/
 * Использует стандартную obj.hasOwnProperty() для проверки того, что значение реально существует в объекте.
 *
 * @param {object} obj   массив объектов
 * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @returns {mixed}
 */


var common_getPropByPath = function getPropByPath(obj, path) {
  var result = {
    found: false,
    value: undefined
  };
  var fragments = path.split('.');
  var value = obj;

  for (var i = 0; i < fragments.length; i++) {
    if (isDefined(value)) {
      result.found = value.hasOwnProperty(fragments[i]) ? true : false;
      value = value[fragments[i]];
    } else {
      result.found = false;
      break;
    }
  }

  if (result.found) {
    result.value = value;
  }

  return result;
};
/**
 * Вернет объект вида:
 * { key: key, value: value}, где value - первый элемент из массива объектов arr,
 * если указанное свойство этого объекта propName совпадает с указанным значением propValue
 *
 * @param {array} arr        массив объектов
 * @param {string} propName  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {object}  в случае неудачного поиска {value: undefiend, key: undefiend}
 */


var getArrElementAndIndexByObjectProp = function getArrElementAndIndexByObjectProp(arr, propName, propValue) {
  var result = {
    key: i,
    value: arr[i]
  };
  var foundValue = null;

  for (var i = 0; i < arr.length; i++) {
    foundValue = common_getPropByPath(arr[i], propName);

    if (foundValue.found && foundValue.value === propValue) {
      result = {
        key: i,
        value: arr[i]
      };
      break;
    }
  }

  return result;
};
/**
 * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
 *
 * @param {array} arr        массив объектов
 * @param {string} propName  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {mixed}
 */


var getArrElementByObjectProp = function getArrElementByObjectProp(arr, propName, propValue) {
  var result = getArrElementAndIndexByObjectProp(arr, propName, propValue);
  return result ? result.value : result;
};
/**
 * Проверка на пустоту, пусто если:
 *  - тип = "undefined"
 *  - = null
 *  - = ноль (как сторка или как число)
 *  - = пустой строке
 *  - = пустому массиву
 *  - = false
 *
 * @param {mixed} value  проверяемое значение
 * @returns {Boolean}
 */


var isEmpty = function isEmpty(value) {
  return typeof value === "undefined" || value === null || value === "" || value === 0 || value === "0" || isDefined(value.length) && value.length === 0 //  empty array
  || value === false || isObject(value) && isObjectEmpty(value) //  empty object
  ;
};
/**
 * Если передан объект, то попытается отдать значение поля с именем propertyName
 * иначе вернет defaultValue
 *
 * @param {mixed} obj
 * @param {string} propertyName
 * @param {mixed} defaultValue  что возвращать, на случай если это не объект
 * @returns {mixed}
 */


var getPropIfObjectDefined = function getPropIfObjectDefined(obj, propertyName) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (isObject(obj)) {
    return obj[propertyName];
  } else {
    return defaultValue;
  }
};
/**
 * Тестовый вызов jswl (привет мир)
 * Test jswl exists
 *
 * @returns {undefined}
 */


var hello = function hello() {
  console.log('Hello JSWL! ;)');
};

var common = {
  isNullOrUndefined: isNullOrUndefined,
  isDefined: isDefined,
  isObject: isObject,
  isObjectEmpty: isObjectEmpty,
  getPropByPath: common_getPropByPath,
  getArrElementAndIndexByObjectProp: getArrElementAndIndexByObjectProp,
  getArrElementByObjectProp: getArrElementByObjectProp,
  isEmpty: isEmpty,
  getPropIfObjectDefined: getPropIfObjectDefined,
  getSquareBracketedFragments: getSquareBracketedFragments,
  getSquareBracketedFragmentByNumber: getSquareBracketedFragmentByNumber,
  checkForSubstring: checkForSubstring,
  hello: hello
};


// CONCATENATED MODULE: ./src/obj.js

/**
 * Функции для работы с объектами
 * @module Объекты
 */

/**
 * Вернет значение из объекта по указанному пути (в качестве разделителей поддерживаются точки)/
 * Использует стандартную obj.hasOwnProperty() для проверки того, что значение реально существует в объекте.
 *
 * @param {object} obj   массив объектов
 * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @returns {mixed}
 */

var obj_getPropByPath = function getPropByPath(obj, path) {
  var result = {
    found: false,
    value: undefined
  };
  var fragments = path.split('.');
  var value = obj;

  for (var i = 0; i < fragments.length; i++) {
    if (isDefined(value)) {
      result.found = value.hasOwnProperty(fragments[i]) ? true : false;
      value = value[fragments[i]];
    } else {
      result.found = false;
      break;
    }
  }

  if (result.found) {
    result.value = value;
  }

  return result;
};
/**
 * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
 *
 * @param {object} arr       объект, поля которого также содержат объекты
 * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {mixed}
 */


var getObjectPropBySubprop = function getObjectPropBySubprop(obj, subpropName, subpropValue) {
  var result = undefined;
  var foundValue = null;

  for (var prop in obj) {
    foundValue = obj_getPropByPath(obj[prop], subpropName);

    if (foundValue.found && foundValue.value === subpropValue) {
      result = obj[prop];
      break;
    }
  }

  return result;
};

var obj_obj = {
  getPropByPath: obj_getPropByPath,
  getObjectPropBySubprop: getObjectPropBySubprop
};

// CONCATENATED MODULE: ./src/array.js

/**
 * Функции для работы с массивами
 * @module Массивы
 */

/**
 * Проверит содержится ли элемент в массиве
 *
 * @param {mixed} value
 * @param {array} array
 * @param {Boolean} strict - если true - проверка будет проведена в строгом режиме
 * @returns {Boolean}
 */

var array_inArray = function inArray(value, array) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isEmpty(strict)) {
    if (typeof strict === 'boolean') {
      if (strict) return !(array.indexOf(value) === -1);
    } else {
      throw new Error('3rd param must be boolean');
    }
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return true;
  }

  return false;
};
/**
 * Проверит содержится ли хотя бы один элемент из первого массива
 * во втором
 *
 * @param {array} needles массив значений, которые ищем
 * @param {array} array   массив, в котором ищем
 * @returns {Boolean}
 */


var isAnyInArray = function isAnyInArray(needles, array) {
  var result = false;

  for (var i = 0; i < needles.length; i++) {
    if (array_inArray(needles[i], array, true)) {
      result = true;
      break;
    }
  }

  return result;
};
/**
 * Удалит из массива все эелменты в строгом смысле совпадающие с
 * value
 *
 * @param {array} arr
 * @param {mixed} value элемент, равные которому надо удалить из массива
 * @return {Array|JSWrapperLib.removeAllElementsLike.newArr}
 */


var removeAllElementsLike = function removeAllElementsLike(arr, value) {
  var newArr = [];
  arr.forEach(function (currentElement, index, array) {
    if (currentElement !== value) {
      newArr.push(currentElement);
    }
  });
  return newArr;
};
/**
 * Вернет массив, оставив там только уникальные значения
 * ( JavaScript 1.6 / ECMAScript 5)
 * @link https://stackoverflow.com/a/14438954
 *
 * @param {array} arr исходный массив
 * @return {array}
 */


var uniqueArray = function uniqueArray(arr) {
  return Array.from(new Set(arr));
};
/**
 * Проверит, что все элементы массива не пусты (в смысле вызова для каждого jswl.isEmpty())
 *
 * @param {array} value
 * @returns {boolean}
 */


var array_allNotEmpty = function allNotEmpty(arr) {
  var result = true;

  for (var i = 0; i < arr.length; i++) {
    if (isEmpty(arr[i])) {
      result = false;
      break;
    }
  }

  return result;
};

var array_array = {
  inArray: array_inArray,
  isAnyInArray: isAnyInArray,
  removeAllElementsLike: removeAllElementsLike,
  uniqueArray: uniqueArray,
  allNotEmpty: array_allNotEmpty
};

// CONCATENATED MODULE: ./src/jswl.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var jswl = _objectSpread(_objectSpread({}, common), {}, {
  obj: obj_obj,
  array: array_array
});

/* harmony default export */ var src_jswl = __webpack_exports__["default"] = (jswl);

/***/ })
/******/ ])["default"];
});