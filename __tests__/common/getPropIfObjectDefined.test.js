
import jswl from '../../src/jswl.js';

test('for ({a: 1}, "a", "") returns 1 ', () => {
  expect(jswl.getPropIfObjectDefined({a: 1}, 'a', '')).toBe(1);
});

test('for (null, "a", "") returns "" ', () => {
  expect(jswl.getPropIfObjectDefined(null, 'a', '')).toBe('');
});

test('for ({a: 1}, "b", "") returns "" ', () => {
  expect(jswl.getPropIfObjectDefined({a: 1}, 'b', '')).toBe(undefined);
});

test('for ({a: 1}, "b", "123") returns "123" ', () => {
  expect(jswl.getPropIfObjectDefined({a: 1}, 'b', '123')).toBe(undefined);
});

test('for ("", "b", "123") returns "123" ', () => {
  expect(jswl.getPropIfObjectDefined('', 'b', '123')).toBe('123');
});



