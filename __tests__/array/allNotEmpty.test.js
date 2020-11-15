
import jswl from '../../src/jswl.js';


let str1 = '';
let str2 = '22';
let obj1 = null;
let obj2 = {
    subObj1: {},
    subObj2: {a: 1}
 };

test('for str2, obj2', () => {
  expect(jswl.array.allNotEmpty([str2, obj2])).toBe(true);
});

test('for str1, obj2', () => {
  expect(jswl.array.allNotEmpty([str1, obj2])).toBe(false); 
});

test('for str1, obj2', () => {
  expect(jswl.array.allNotEmpty([str2, obj1])).toBe(false); 
});

test('for str2, obj2 and NOT EXISTS obj2.subObj55', () => {
  expect(jswl.array.allNotEmpty([str2, obj2, obj2.subObj55])).toBe(false);
});

test('for str2, obj2, obj2.subObj1', () => {
  expect(jswl.array.allNotEmpty(['', obj2, obj2.subObj1])).toBe(false);
});

test('jswl.isEmpty(obj2.subObj1)', () => {
  expect(jswl.isEmpty(obj2.subObj1)).toBe(true);
});

test('for str2, obj2, obj2.subObj2', () => {
  expect(jswl.array.allNotEmpty([str2, obj2, obj2.subObj2])).toBe(true);
});



