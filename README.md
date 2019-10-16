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

## Сброка и другая работа с `npm`

Сборка:
```shell
npm run-script build
```
Отладочная сборка
```shell
npm run-script watch
```

## Публикация очередной версии

```
npm publish
```

## Описание функций

### Общие

* `jswl.isEmpty(value)` -- функция максимально близкая к `empty()` из php.


### Массивы

* `uniqueArray(arr)` -- вернет только уникальные значения массива `arr`.
* `inArray(value, array)`  -- проверит, содержится ли элемент в массиве.
* `removeAllElementsLike(arr, value) ` -- удалит все вхождения элемента из массива (вернет новый массив)
* `isAnyInArray(needles, array)` -- Проверит содержится ли хотя бы один элемент из первого массива во втором




