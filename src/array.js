import { isEmpty } from './common';
import { getPropByPath } from './obj';


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
const inArray = (value, array, strict = false) => {
    if (!isEmpty(strict)) {
        if (typeof strict === 'boolean') {
            if(strict) return (!(array.indexOf(value) === -1));
        } else {
            throw new Error('3rd param must be boolean');
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return true;
    }

    return false;
}


/**
 * Проверит содержится ли хотя бы один элемент из первого массива
 * во втором
 *
 * @param {array} needles массив значений, которые ищем
 * @param {array} array   массив, в котором ищем
 * @returns {Boolean}
 */
const isAnyInArray = (needles, array) => {
    var result = false;
    for (var i = 0; i < needles.length; i++) {

        if (inArray(needles[i], array, true)) {
            result = true;
            break;
        }
    }
    return result;
}

/**
 * Удалит из массива все эелменты в строгом смысле совпадающие с
 * value
 *
 * @param {array} arr
 * @param {mixed} value элемент, равные которому надо удалить из массива
 * @return {Array|JSWrapperLib.removeAllElementsLike.newArr}
 */
const removeAllElementsLike = (arr, value) => {
    var newArr = [];
    arr.forEach((currentElement, index, array) => {
        if (currentElement !== value) {
            newArr.push(currentElement);
        }
    });

    return newArr;
}

/**
 * Вернет массив, оставив там только уникальные значения
 * ( JavaScript 1.6 / ECMAScript 5)
 * @link https://stackoverflow.com/a/14438954
 *
 * @param {array} arr исходный массив
 * @return {array}
 */
const uniqueArray = (arr) => {
    return Array.from(new Set(arr));
}

/**
 * Проверит, что все элементы массива не пусты (в смысле вызова для каждого jswl.isEmpty())
 *
 * @param {array} value
 * @returns {boolean}
 */
const allNotEmpty = (arr) => {
    var result = true;
    for (var i = 0; i < arr.length; i++) {
        if (isEmpty(arr[i])) {
            result = false;
            break;
        }
    }

    return result;
}


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
const getArrElementAndIndexByObjectProp = (arr, propName, propValue) => {

    var result = {
        key: i,
        value: arr[i]
    };
    var foundValue = null;
    for (var i = 0; i < arr.length; i++) {
        foundValue = getPropByPath(arr[i], propName);
        if (foundValue.found &&
            (foundValue.value === propValue)) {
            result = {
                key: i,
                value: arr[i]
            };
            break;
        }
    }

    return result;
}

/**
 * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
 *
 * @param {array} arr        массив объектов
 * @param {string} propName  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {mixed}
 */
const getArrElementByObjectProp = (arr, propName, propValue) => {

    var result = getArrElementAndIndexByObjectProp(arr, propName, propValue);
    return result ? result.value : result;
}


/**
 * Считает число вложенных подэлементов массива с нужным значением.
 * 
 * Сканирует массив по вложенным элементов вплоть до листьев дерева массива  
 * на нужную глубину определяемые маршрутом subElementPath 
 * и считает количество тех подэлементов, чье значение строго совпадает с neededElementValue
 * 
 * @param {array} arr                 исходный массив, в котором производится поиск
 * @param {string} subElementPath     путь узлам, значение которых нужно проверить, например 'sections[]floors[].value' 
 * @param {mixed} neededElementValue  значение подэлемента, которе считается подходящим
 * @param {string} arrayDelimeter     строка, которая сигнализирует, что в этом месте дерева лежит массив, который нужно обойти поэлементно, по умолчанию = '[]'
 * @returns {int}
 */
const countSubElementsWithValue = (arr, subElementPath, neededElementValue, arrayDelimeter = '[]') => {
    const fragments = subElementPath.split(arrayDelimeter);
    let result = 0;
   
    if (fragments.length > 0) {
	let firstPathSegment = fragments[0];
	if (fragments.length > 1) {
	    for (var i = 0; i < arr.length; i++) {
		if (arr[i] && arr[i][firstPathSegment]) {
		    result += countSubElementsWithValue(
			arr[i][firstPathSegment], 
			fragments.slice(1).join(arrayDelimeter), 
			neededElementValue
		    );
		}
	    }
	} else {
	    for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
		    let byPathResult = getPropByPath(arr[i], firstPathSegment);
		    if (byPathResult.found) {
			result += (byPathResult.value === neededElementValue) ? 1 : 0;
		    }
		}
	    }
	}
    }
    	
    return result;
}

/**
 * Посчитает суммарное число элементов в подмассивах, лежащих по путям, соответствующим переданному шаблону subArrayPathTemplate
 * 
 * @param {array} arr                     исходный массив, в котором производится поиск
 * @param {string} subArrayPathTemplate   путь узлам, значение которых нужно проверить, например 'sections[]floors[].properties' -- ожидается, что в последнем сегменте лежит массив
 * @param {string} arrayDelimeter         строка, которая сигнализирует, что в этом месте дерева лежит массив, который нужно обойти поэлементно, по умолчанию = '[]'
 * @returns {int}
 */
const countElementsInSubArrays = (arr, subArrayPathTemplate, arrayDelimeter = '[]') => {
    
    const fragments = subArrayPathTemplate.split(arrayDelimeter);
    let result = 0;
   
    if (fragments.length > 0) {
	let firstPathSegment = fragments[0];
	if (fragments.length > 1) {
	    for (var i = 0; i < arr.length; i++) {
		if (arr[i] && arr[i][firstPathSegment]) {
		    result += countElementsInSubArrays(
			arr[i][firstPathSegment], 
			fragments.slice(1).join(arrayDelimeter)
		    );
		}
	    }
	} else {
	    for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
		    let byPathResult = getPropByPath(arr[i], firstPathSegment);
		    if (byPathResult.found && Array.isArray(byPathResult.value)) {
			result += byPathResult.value.length;
		    }
		}
	    }
	}
    }
    	
    return result;
}

const array = {
    inArray,
    isAnyInArray,
    removeAllElementsLike,
    uniqueArray,
    allNotEmpty,
    getArrElementAndIndexByObjectProp,
    getArrElementByObjectProp,
    countSubElementsWithValue,
    countElementsInSubArrays,
};

export { array };