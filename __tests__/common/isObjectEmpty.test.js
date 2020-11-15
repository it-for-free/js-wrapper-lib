
import jswl from '../../src/jswl.js';

test('{} isObjectEmpty', () => {
  expect(jswl.isObjectEmpty({})).toBe(true);
});

test('{a: 123} isObjectEmpty', () => {
    expect(jswl.isObjectEmpty({a: 123})).toBe(false);
});

test('{0: 123} isObjectEmpty', () => {
    expect(jswl.isObjectEmpty({0: 123})).toBe(false);
});

test('null isObjectEmpty', () => {
    expect(jswl.isObjectEmpty(null)).toBe(true);
});

test('{"": 1} isObjectEmpty', () => {
    expect(jswl.isObjectEmpty({'': 1})).toBe(false);
});

test('{null: 1} isObjectEmpty', () => {
    expect(jswl.isObjectEmpty({null: 1})).toBe(false);
});