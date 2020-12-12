import { isDefined } from './common';

/**
 * Функции для работы с объектами
 * @module Объекты
 */

/**
 * Вернет значение из объекта по указанному пути (в качестве разделителей поддерживаются точки)/
 * Использует стандартную obj.hasOwnProperty() для проверки того, что значение реально существует в объекте.
 *
 * @param {object} obj   массив объектов
 * @param {string} path  имя-путь поля по которому ищем,  например 'properties.id' или что то же самое '.properties.id' (в качестве разделителей поддерживает точки)
 * @returns {object}  объект вида {found: bool, value: value} - где поле found показывает было ли определено значение по данному пути
 *  (false если конечного или промежуточного свойства не было) 
 */
export const getPropByPath = (obj, path) => {

    var result = {
        found: false,
        value: undefined,
    }
    
    if (path.charAt(0) === '.') { // убираем точку вначале
	path = path.substring(1);
    }

    var fragments = path.split('.');
    var value = obj;
    for (var i = 0; i < fragments.length; i++) {
        if (isDefined(value)) {
            result.found = value.hasOwnProperty(fragments[i]) ?
                true : false;
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
}

/**
 * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
 *
 * @param {object} arr       объект, поля которого также содержат объекты
 * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {mixed}
 */
export const getObjectPropBySubprop = (obj, subpropName, subpropValue) => {
    var result = undefined;
    var foundValue = null;

    for (var prop in obj) {
        foundValue = getPropByPath(obj[prop], subpropName);
        if (foundValue.found &&
            (foundValue.value === subpropValue)) {
            result = obj[prop];
            break;
        }
    }

    return result;
}


const obj = {
    getPropByPath,
    getObjectPropBySubprop
};

export { obj };