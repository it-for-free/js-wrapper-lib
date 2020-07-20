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
     * Проверит, что все элементы массива не пусты (в смысле вызова для каждого jswl.isEmpty())
     * 
     * @param {array} value
     * @returns {boolean}
     */
    this.allNotEmpty = function (arr) {
	var result = true;
	for (var i = 0; i < arr.length; i++) {
	    if (self.isEmpty(arr[i])) {
		result = false;
		break;
	    }
	}

	return result;
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
     * @param {string} propName  имя поля по которому ищем
     * @param {mixed} propValue  значение поля, которое ищем
     * @returns {mixed}
     */
    this.getArrElementByObjectProp = (arr, propName, propValue) => {

	var result = undefined;
	for (var i = 0; i < arr.length; i++) {
	    if (arr[i][propName] === propValue) {
		result = arr[i];
		break;
	    }
	}

	return result;
    }
    
    /**
     * Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением
     * 
     * @param {object} arr       объект, поля которого также содержат объекты
     * @param {string} propName  имя поля по которому ищем
     * @param {mixed} propValue  значение поля, которое ищем
     * @returns {mixed}
     */
    this.getObjectPropBySubprop = (obj, subpropName, subpropValue) => {

	var result = undefined;	
	
	for (var prop in obj) {
	  if (obj[prop][subpropName] === subpropValue) {
		result = obj[prop];
		break;
	    }
	}
	
	return result;
    }
}

export default new JSWrapperLib();