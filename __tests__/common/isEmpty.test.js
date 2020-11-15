
import jswl from '../../src/jswl.js';

test('"123" not empty ', () => {
  expect(jswl.isEmpty('123')).toBe(false);
});


test('1 not empty ', () => {
  expect(jswl.isEmpty(1)).toBe(false);
});


test('12 not empty ', () => {
  expect(jswl.isEmpty(12)).toBe(false);
});

test('12 not empty ', () => {
  expect(jswl.isEmpty(12)).toBe(false);
});

test('0 is empty ', () => {
  expect(jswl.isEmpty(0)).toBe(true);
});

test('"" is empty ', () => {
  expect(jswl.isEmpty("")).toBe(true);
});

test('{} is empty ', () => {
  expect(jswl.isEmpty({})).toBe(true);
});

test('[] is empty ', () => {
  expect(jswl.isEmpty([])).toBe(true);
});


test('[1] isnt empty ', () => {
  expect(jswl.isEmpty([1])).toBe(false);
});


test('{a: 1} isnt empty ', () => {
  expect(jswl.isEmpty({a: 1})).toBe(false);
});

