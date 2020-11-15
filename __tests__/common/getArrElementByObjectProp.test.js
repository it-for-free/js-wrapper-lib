
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
	    subvalue: 125
	}
    },
];

test('for id 1  returns 11', () => {
  expect(jswl.getArrElementByObjectProp(arr, 'id', 1).value).toBe(11);
  
});

test('for id 3  returns 33 ', () => {  
  expect(jswl.getArrElementByObjectProp(arr, 'id', 3)).toEqual({'id': 3, 'value': 33});
});

test('for id 3  returns obj ', () => {  
  expect(jswl.getArrElementByObjectProp(arr, 'value', 'mm')).toEqual({'id': 8, 'value': 'mm'});
});

test('for  788 returns undefined ', () => {
  expect(jswl.getArrElementByObjectProp(arr, 'id', 788)).toEqual(undefined);
});

test('for  "value.subvalue" path and 125 value  returns undefined ', () => {
  expect(jswl.getArrElementByObjectProp(arr, 'value.subvalue', 125)).toEqual({
	id: 4,
	value: {
	    subvalue: 125
	}
    });
});

test('for  "value.subvalue2" path  returns undefined ', () => {
  expect(jswl.getArrElementByObjectProp(arr, 'value.subvalue2', 125))
	.toEqual(undefined);
});





