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
const isNullOrUndefined = (value) => {
    return (typeof value === "undefined"
        || value === null);
}

/**
 * Определено ли значение:
 * - тип не "undefined"
 * - не = null
 *
 * @param {mixed} value  проверяемое значение
 * @returns {Boolean}
 */
const isDefined = (value) => {
    return (typeof value !== "undefined" && value !== null);
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
const getSquareBracketedFragments = function (str) {

    var nameFrags = str.split('['); // разбиваем по открывающей скобке
    nameFrags.forEach(function (element, index, nameFrags) {
        nameFrags[index] = element.replace(/\]/g, "");
    });
    return nameFrags;
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
const getSquareBracketedFragmentByNumber = (str, number) => {

    var nameFrags = getSquareBracketedFragments(str);
    return nameFrags[number];
}

/**
 * Проверит, что подстрока входит в данную строку
 * (содержится в строке)
 *
 * @param {string} str    строка
 * @param {string} substr  подстрока
 * @returns {Boolean}
 */
const checkForSubstring = (str, substr) => {
    return (str.indexOf(substr) !== -1);
}

/**
 * Проверит является ли значение объектом
 *
 * @param {mixed} value
 * @returns {Boolean}
 */
const isObject = (value) => {
    return isDefined(value) && (typeof value === 'object');
}

/**
 * Проверит является ли объект пустым
 *
 * @param {object} obj
 * @returns {Boolean}
 */
const isObjectEmpty = (obj) => {
    if (!isObject(obj)) {
        throw new TypeError(`The argument must be an object. ${typeof obj} was given`);
    }

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}


/**
 * Вернет значение из объекта по указанному пути (в качестве разделителей поддерживаются точки)/
 * Использует стандартную obj.hasOwnProperty() для проверки того, что значение реально существует в объекте.
 *
 * @param {object} obj   массив объектов
 * @param {string} path  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @returns {mixed}
 */
const getPropByPath = (obj, path) => {

    var result = {
        found: false,
        value: undefined,
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
const isEmpty = (value) => {
    return (
        typeof value === "undefined"
        || value === null
        || value === ""
        || value === 0
        || value === "0"
        || (isDefined(value.length)
            && value.length === 0) //  empty array
        || value === false
        || (isObject(value)
            && isObjectEmpty(value)) //  empty object
    );
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
const getPropIfObjectDefined = function (obj, propertyName, defaultValue = '') {
    if (isObject(obj)) {
        return obj[propertyName];
    } else {
        return defaultValue;
    }
}

/**
 * Тестовый вызов jswl (привет мир)
 * Test jswl exists
 *
 * @returns {undefined}
 */
const hello = () => {
    console.log('Hello JSWL! ;)');
}

const common = {
    isNullOrUndefined,
    isDefined,
    isObject,
    isObjectEmpty,
    getPropByPath,
    isEmpty,
    getPropIfObjectDefined,
    getSquareBracketedFragments,
    getSquareBracketedFragmentByNumber,
    checkForSubstring,
    hello
};

export {
    isNullOrUndefined,
    isDefined,
    isObject,
    isObjectEmpty,
    getPropByPath,
    isEmpty,
    getPropIfObjectDefined,
    getSquareBracketedFragments,
    getSquareBracketedFragmentByNumber,
    checkForSubstring
};
export { common };