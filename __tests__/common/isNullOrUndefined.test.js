
import jswl from '../../src/jswl.js';

const number = 124;
const string = 'sdf';
const emptyString = '';
const stringZero = '0';
const boolFalse = false;
const emptyObj = {};
const emptyArray = [];
const nullValue = null;
const undefinedValue = undefined;
const nanValue = NaN;
const infinityValue = Infinity;


test("number isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(number)).toBe(false);
});

test("string isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(string)).toBe(false);
});

test("emptyString isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(emptyString)).toBe(false);
});

test("stringZero isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(stringZero)).toBe(false);
});

test("boolFalse isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(boolFalse)).toBe(false);
});

test("emptyObj isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(emptyObj)).toBe(false);
});

test("emptyArray isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(emptyArray)).toBe(false);
});

test("nullValue isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(nullValue)).toBe(true);
});

test("undefinedValue isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(undefinedValue)).toBe(true);
});

test("nanValue isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(nanValue)).toBe(false);
});

test("infinityValue isNullOrUndefined ", () => {
    expect(jswl.isNullOrUndefined(infinityValue)).toBe(false);
});