/**
 * Добавит в начало строки другую строку (префикс), если только это строка уже НЕ начинается с данного префикса.
 * 
 * @param {string} str        к чему прибавляем
 * @param {string} prefixStr  что прибаляем
 * @returns {string}
 */
export const addPrefixIfNotExists = (str, prefixStr) => {
    let result = str;
    if (!str.startsWith(prefixStr)) {
	result = prefixStr + str;
    }
    return result;
}

/**
 * Удалит из начала строки указанную подстроку, если такая подстрока в начале строки имеется.
 * 
 * @param {string} str        откуда удаляем
 * @param {string} prefixStr  что удаляем
 * @returns {string}
 */
export const removePrefixIfExists = (str, prefixStr) => {
    let result = str;
    if (str.startsWith(prefixStr)) {
	result = str.slice(prefixStr.length);
    }
    return result;
}

const str = {
    addPrefixIfNotExists,
    removePrefixIfExists,
};

export { str };