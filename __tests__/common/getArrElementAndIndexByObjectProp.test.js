
import jswl from '../../src/jswl.js';


let arr = [
    {'id': 1, 'value': 11},
    {'id': 2, 'value': 22},
    {'id': 3, 'value': 33},
    {'id': 8, 'value': 'mm'},
    {'id': 4, 'value': 44},
    {
	id: 4,
	value: {
	    subvalue: 125,
	    subvalue3: undefined
	}
    },  
];

test('for id 1  returns 11', () => {
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'id', 1).value.value).toBe(11);
  
});

test('for id 3  returns 33 ', () => {  
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'id', 3).value).toEqual({'id': 3, 'value': 33});
});

test('for id 3  returns obj ', () => {  
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'value', 'mm').value).toEqual({'id': 8, 'value': 'mm'});
});

test('for  788 returns undefined ', () => {
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'id', 788)).toEqual({value: undefined, key: undefined});
});

test('for  "value.subvalue" path and 125 value  returns undefined ', () => {
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'value.subvalue', 125).value).toEqual({
	id: 4,
	value: {
	    subvalue: 125
	}
    });
});

test('for  "value.subvalue2" path  returns undefined ', () => {
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'value.subvalue2', 125))
	.toEqual({value: undefined, key: undefined});
});

test('for  "value.subvalue3" path  returns undefined in value prop ', () => {
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'value.subvalue3', undefined).value.subvalue3)
	.toEqual(undefined);
});

test('for id 3  returns 33 ', () => {  
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'id', 3)).toEqual({value: {'id': 3, 'value': 33}, key: 2});
});


test('for id 100500  returns {value: undefined, key: undefined} ', () => {  
  expect(jswl.getArrElementAndIndexByObjectProp(arr, 'id', 100500)).toEqual({value: undefined, key: undefined});
});



