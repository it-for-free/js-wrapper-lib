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
export function isNullOrUndefined(value: any): boolean;
/**
 * Определено ли значение:
 * - тип не "undefined"
 * - не = null
 *
 * @param {mixed} value  проверяемое значение
 * @returns {Boolean}
 */
export function isDefined(value: any): boolean;
/**
 * Проверит является ли значение объектом
 *
 * @param {mixed} value
 * @returns {Boolean}
 */
export function isObject(value: any): boolean;
/**
 * Проверит является ли объект пустым
 *
 * @param {object} obj
 * @returns {Boolean}
 */
export function isObjectEmpty(obj: object): boolean;
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
export function isEmpty(value: any): boolean;
/**
 * Если передан объект, то попытается отдать значение поля с именем propertyName
 * иначе вернет defaultValue
 *
 * @param {mixed} obj
 * @param {string} propertyName
 * @param {mixed} defaultValue  что возвращать, на случай если это не объект
 * @returns {mixed}
 */
export function getPropIfObjectDefined(obj: any, propertyName: string, defaultValue?: any): any;
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
export function getSquareBracketedFragments(str: string): any[];
/**
 * Получит фрагмент строки фрагмент, если её части разделены квадратными скобками:
 * people[123][groups][34][2]
 * -- для номера 3 вернёт 34
 *
 * @param {string} str  строка с фрагментами. окружеными квадратными скобками
 * @param {int} number  номер фрагмента (начиная с нуля)
 * @returns {string}
 */
export function getSquareBracketedFragmentByNumber(str: string, number: any): string;
/**
 * Проверит, что подстрока входит в данную строку
 * (содержится в строке)
 *
 * @param {string} str    строка
 * @param {string} substr  подстрока
 * @returns {Boolean}
 */
export function checkForSubstring(str: string, substr: string): boolean;
/**
 * Вернет новое значение, прогнав переданное значение data через вызов JSON.parse(JSON.stringify(data))
 * Можно использовать для клонирования объектов (если для них корректно отработает JSON.stringify())
 *
 * @param {mixed} data данные (обычно ссылочного типа), которые нужно клонировать
 * @returns {mixed}
 */
export function cloneByJson(data: any): any;
export namespace common {
    export { isNullOrUndefined };
    export { isDefined };
    export { isObject };
    export { isObjectEmpty };
    export { isEmpty };
    export { getPropIfObjectDefined };
    export { getSquareBracketedFragments };
    export { getSquareBracketedFragmentByNumber };
    export { checkForSubstring };
    export { cloneByJson };
    export { hello };
}
/**
 * Тестовый вызов jswl (привет мир)
 * Test jswl exists
 *
 * @returns {undefined}
 */
declare function hello(): undefined;
export {};
