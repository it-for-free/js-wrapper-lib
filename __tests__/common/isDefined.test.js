
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


test("number isDefined ", () => {
    expect(jswl.isDefined(number)).toBe(true);
});

test("string isDefined ", () => {
    expect(jswl.isDefined(string)).toBe(true);
});

test("emptyString isDefined ", () => {
    expect(jswl.isDefined(emptyString)).toBe(true);
});

test("stringZero isDefined ", () => {
    expect(jswl.isDefined(stringZero)).toBe(true);
});

test("boolFalse isDefined ", () => {
    expect(jswl.isDefined(boolFalse)).toBe(true);
});

test("emptyObj isDefined ", () => {
    expect(jswl.isDefined(emptyObj)).toBe(true);
});

test("emptyArray isDefined ", () => {
    expect(jswl.isDefined(emptyArray)).toBe(true);
});

test("nullValue isDefined ", () => {
    expect(jswl.isDefined(nullValue)).toBe(false);
});

test("undefinedValue isDefined ", () => {
    expect(jswl.isDefined(undefinedValue)).toBe(false);
});

test("nanValue isDefined ", () => {
    expect(jswl.isDefined(nanValue)).toBe(true);
});

test("infinityValue isDefined ", () => {
    expect(jswl.isDefined(infinityValue)).toBe(true);
});