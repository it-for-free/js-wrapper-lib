export namespace array {
    export { inArray };
    export { isAnyInArray };
    export { removeAllElementsLike };
    export { uniqueArray };
    export { allNotEmpty };
    export { getArrElementAndIndexByObjectProp };
    export { getArrElementByObjectProp };
    export { countSubElementsWithValue };
    export { countElementsInSubArrays };
}
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
declare function inArray(value: any, array: any[], strict?: boolean): boolean;
/**
 * Проверит содержится ли хотя бы один элемент из первого массива
 * во втором
 *
 * @param {array} needles массив значений, которые ищем
 * @param {array} array   массив, в котором ищем
 * @returns {Boolean}
 */
declare function isAnyInArray(needles: any[], array: any[]): boolean;
/**
 * Удалит из массива все эелменты в строгом смысле совпадающие с
 * value
 *
 * @param {array} arr
 * @param {mixed} value элемент, равные которому надо удалить из массива
 * @return {Array|JSWrapperLib.removeAllElementsLike.newArr}
 */
declare function removeAllElementsLike(arr: any[], value: any): any[] | any;
/**
 * Вернет массив, оставив там только уникальные значения
 * ( JavaScript 1.6 / ECMAScript 5)
 * @link https://stackoverflow.com/a/14438954
 *
 * @param {array} arr исходный массив
 * @return {array}
 */
declare function uniqueArray(arr: any[]): any[];
/**
 * Проверит, что все элементы массива не пусты (в смысле вызова для каждого jswl.isEmpty())
 *
 * @param {array} value
 * @returns {boolean}
 */
declare function allNotEmpty(arr: any): boolean;
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
declare function getArrElementAndIndexByObjectProp(arr: any[], propName: string, propValue: any): object;
/**
 * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
 *
 * @param {array} arr        массив объектов
 * @param {string} propName  имя-путь поля по которому ищем  например 'properties.id' (в качестве разделителей поддерживает точки)
 * @param {mixed} propValue  значение поля, которое ищем
 * @returns {mixed}
 */
declare function getArrElementByObjectProp(arr: any[], propName: string, propValue: any): any;
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
declare function countSubElementsWithValue(arr: any[], subElementPath: string, neededElementValue: any, arrayDelimeter?: string): any;
/**
 * Посчитает суммарное число элементов в подмассивах, лежащих по путям, соответствующим переданному шаблону subArrayPathTemplate
 *
 * @param {array} arr                     исходный массив, в котором производится поиск
 * @param {string} subArrayPathTemplate   путь узлам, значение которых нужно проверить, например 'sections[]floors[].properties' -- ожидается, что в последнем сегменте лежит массив
 * @param {string} arrayDelimeter         строка, которая сигнализирует, что в этом месте дерева лежит массив, который нужно обойти поэлементно, по умолчанию = '[]'
 * @returns {int}
 */
declare function countElementsInSubArrays(arr: any[], subArrayPathTemplate: string, arrayDelimeter?: string): any;
export {};
