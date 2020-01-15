
import jswl from '../src/jswl.js';

test('{} is object ', () => {
  expect(jswl.isObject({})).toBe(true);
});

test('{a: 123} is object ', () => {
  expect(jswl.isObject({a: 123})).toBe(true);
});


test('1 isnt object ', () => {
  expect(jswl.isObject(1)).toBe(false);
});

