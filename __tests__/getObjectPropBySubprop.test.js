
import jswl from '../src/jswl.js';


let obj = {
    one: {'id': 1, 'value': 11},
    one1: {'id': 2, 'value': 22},
    one2: {'id': 3, 'value': 33},
    one3: {'id': 8, 'value': 'mm'},
    one4: {'id': 4, 'value': 44},
 };

test('for id 1  returns 11', () => {
  expect(jswl.getObjectPropBySubprop(obj, 'id', 1).value).toBe(11);
  
});

test('for id 3  returns 33 ', () => {  
  expect(jswl.getObjectPropBySubprop(obj, 'id', 3)).toEqual({'id': 3, 'value': 33});
});

test('for id 3  returns 33 ', () => {  
  expect(jswl.getObjectPropBySubprop(obj, 'value', 'mm')).toEqual({'id': 8, 'value': 'mm'});
});

test('for  788 returns undefined ', () => {
  expect(jswl.getObjectPropBySubprop(obj, 'id', 788)).toEqual(undefined);
});




