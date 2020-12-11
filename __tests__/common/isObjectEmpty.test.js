
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

test('{"": 1} isObjectEmpty', () => {
    expect(jswl.isObjectEmpty({'': 1})).toBe(false);
});

test('{null: 1} isObjectEmpty', () => {
    expect(jswl.isObjectEmpty({null: 1})).toBe(false);
});

test("null should throw an error ", () => {
    expect(() => {
        jswl.isObjectEmpty(null)
    }).toThrow(TypeError);
});

test("undefined should throw an error ", () => {
    expect(() => {
        jswl.isObjectEmpty(undefined)
    }).toThrow(TypeError);
});

test("random string should throw an error ", () => {
    expect(() => {
        jswl.isObjectEmpty('string')
    }).toThrow(TypeError);
});

test("boolean should throw an error ", () => {
    expect(() => {
        jswl.isObjectEmpty(false)
    }).toThrow(TypeError);
});