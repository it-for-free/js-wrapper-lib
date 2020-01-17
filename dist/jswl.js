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
__webpack_require__.r(__webpack_exports__);
/**
 * jswl
 */

/**
 * Набор обёрток, с более удобным синтаксисо
 * (чистый JavaScript)
 * 
 * Если объявить точку входа как:
 *   var jswl = new JSWrapperLib();
 * 
 * То функции в вашем скрипте можно вызывать как:
 * 
 * jswl.имяфункции()
 * 
 * @returns {undefined}
 */
function JSWrapperLib() {


    var self = this;

    /**
     * Проверит является ли 
     * значение null или undefined
     * 
     * @param {mixed} value  проверяемое значение
     * @returns {boolean}
     */
    this.isNullOrUndefined = function (value)
    {
        return (typeof value === "undefined"
                || value === null);
    }


    /**
     * Проверит содержится ли элемент в массиве
     * 
     * @param {mixed} value
     * @param {array} array
     * @returns {Boolean}
     */
    this.inArray = function (value, array)
    {
        return (!(array.indexOf(value) === -1));
    }

    /**
     * Проверит содержится ли хотя бы один элемент из первого массива 
     * во втором
     * 
     * @param {array} needles массив значений, которые ищем
     * @param {array} array   массив, в котором ищем
     * @returns {Boolean}
     */
    this.isAnyInArray = function (needles, array)
    {
        var result = false;
        for (var i = 0; i < needles.length; i++) {

            if (self.inArray(needles[i], array)) {
                result = true;
                break;
            }
        }
        return result;
    }

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
    this.isEmpty = function (value) {
        return (
            typeof value === "undefined"
            || value === null
            || value === ""
            || value === 0
            || value === "0"
            || (self.isDefined(value.length)
                    && value.length === 0) //  empty array
            || value === false
            || (self.isObject(value)
                    && self.isObjectEmpty(value)) //  empty object
        );
    }

    /**
     * Определено ли значение:
     * - тип не "undefined"
     * - не = null
     * 
     * @param {mixed} value  проверяемое значение
     * @returns {Boolean} 
     */
    this.isDefined = function (value) {
        return (typeof value !== "undefined" && value !== null);
    }

    /**
     * Получит фрагмент строки фрагмент, если её части разделены квадратными скобками:
     * people[123][groups][34][2]
     * -- для номера 3 вернёт 34
     * 
     * @param {string} str  строка с фрагментами. окружеными квадратными скобками
     * @param {int} number  номер фрагмента (начиная с нуля)
     * @returns {string}
     */
    this.getSquareBracketedFragmentByNumber = function (str, number) {

        var nameFrags = self.getSquareBracketedFragments(str);
        return nameFrags[number];
    }


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
    this.getSquareBracketedFragments = function (str) {

        var nameFrags = str.split('['); // разбиваем по открывающей скобке
        nameFrags.forEach(function (element, index, nameFrags) {
            nameFrags[index] = element.replace(/\]/g, "");
        });
        return nameFrags;
    }

    /**
     * Проверит, что подстрока входит в данную строку
     * (содержится в строке) 
     * 
     * @param {string} str    строка
     * @param {string} substr  подстрока
     * @returns {Boolean}
     */
    this.checkForSubstring = function (str, substr)
    {
        return (str.indexOf(substr) !== -1);
    }

    /**
     * Тестовый вызов jswl (привет мир) 
     * Test jswl exists
     *   
     * @returns {undefined}
     */
    this.hello = function ()
    {
        console.log('Hello JSWL! ;)');
    }

    /**
     * Вернет массив, оставив там только уникальные значения
     * ( JavaScript 1.6 / ECMAScript 5) 
     * @link https://stackoverflow.com/a/14438954
     * 
     * @param {array} arr исходный массив
     * @return {array}
     */
    this.uniqueArray = function (arr)
    {
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        var unique = arr.filter(onlyUnique);
        return unique;
    }

    /**
     * Удалит из массива все эелменты в строгом смысле совпадающие с 
     * value
     * 
     * @param {array} arr
     * @param {mixed} value элемент, равные которому надо удалить из массива
     * @return {Array|JSWrapperLib.removeAllElementsLike.newArr}
     */
    this.removeAllElementsLike = function (arr, value)
    {
        var newArr = [];
        arr.forEach((currentElement, index, array) => {
            if (currentElement !== value) {
                newArr.push(currentElement);
            }
        });

        return newArr;
    }


    /**
     * Проверит является ли объект пустым
     * 
     * @param {object} obj
     * @returns {Boolean}
     */
    this.isObjectEmpty = function (obj) {

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }

    /**
     * Проверит является ли значение объектом
     * 
     * @param {mixed} value
     * @returns {Boolean}
     */
    this.isObject = function (value) {

        return self.isDefined(value) && (typeof value === 'object');
    }
    
    /**
     * Если передан объект, то попытается отдать значение поля с именем propertyName
     * иначе вернет defaultValue
     * 
     * @param {mixed} obj
     * @param {string} propertyName
     * @param {mixed} defaultValue  что возвращать, на случай если это не объект
     * @returns {mixed}
     */
    this.getPropIfObjectDefined = function (obj, propertyName, defaultValue = '')
    {
        if (self.isObject(obj)) {
            return obj[propertyName];
        } else {
            return defaultValue;
        }
    }
    
    /**
     * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
     * 
     * @param {array} arr         массив объектов
     * @param {string} propName  имя полуя по которому ищем
     * @param {mixed} propValue  значение поля, которое ищем
     * @returns {mixed}
     */
    this.getArrElementByObjectProp = (arr, propName, propValue) => {
        var result = arr.filter(obj => {
            return obj[propName] === propValue;          
        });

        return result[0];
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new JSWrapperLib());

/***/ })
/******/ ])["default"];
});