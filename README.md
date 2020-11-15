# js-wrapper-lib

* `eng`: javascript helpers, wrappers for core functions
* `ru`: Библиотека удобных оберток для стандартных функций javascript

## Usage | Использование

Add `src/jswl.js` to your html, export other way and call needle function like:

```javascript
jswl.functionName();
```
-- подключите `src/jswl.js` на html странице или иным образом добавьте в проект
 и вызываейте нужную вам функцию, например (*for example*):

```javascript
jswl.isEmpty(value);
```
### Usage in npm

Example:

```javascript
import jswl from 'js-wrapper-lib';

if (jswl.isEmpty(apiToken)) {....}
```

## Сборка и другая работа с `npm`

Сборка:
```shell
npm run-script build
```
Отладочная сборка
```shell
npm run-script watch
```

## Релизная сборка

Запуск тестов, генерация документации, сборка:
```shell
npm run release
```

## Тестирование

```shell
npm run test
```

## Публикация очередной версии

```
npm publish
```

## Документация

Для работы с документацией выполните:
```
npm run create-docs
```
Просмотр будет доступен в /docs/index.html

## Описание функций

### Общие

* `isEmpty(value)` -- функция максимально близкая к `empty()` из php.
* `getPropIfObjectDefined(obj, propertyName, defaultValue = '')` -- Если передан объект, то попытается отдать значение поля с именем propertyName иначе вернет defaultValue
* `isObject(value)` -- проверит, что значение определено (напр. не null) и что является объектом.


### Массивы

* `uniqueArray(arr)` -- вернет только уникальные значения массива `arr`.
* `inArray(value, array, strict)`  -- проверит, содержится ли элемент в массиве.
* `removeAllElementsLike(arr, value) ` -- удалит все вхождения элемента из массива (вернет новый массив)
* `isAnyInArray(needles, array)` -- Проверит содержится ли хотя бы один элемент из первого массива во втором
* `allNotEmpty(arr)` -- роверит, что все элементы массива не пусты (в смысле вызова для каждого `jswl.isEmpty()`)
* `getArrElementByObjectProp(arr, propName, propValue)` -- Вернет первый элемент из массива объектов, если указанное свойство этого объекта совпадает с указанным значением

### Объекты

* `getObjectPropBySubprop(obj, propName, propValue)` -- Вернет первый элемент из объекта с полями-объектов, если указанное свойство одного очередного подобъекта этого объекта совпадает с указанным значением


### История изменений

* 30.09.2020 Добавлена возможность искать не просто по свойсту, но по вложенному "пути" в объекте, напр "properties.id"
