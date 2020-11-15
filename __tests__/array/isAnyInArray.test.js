
import jswl from '../../src/jswl.js';


let originalArray = [1, 2, 3, [1], null, undefined];
let originalStrArray = ['dog', 'snake', 'cat'];


let testedArray = [-3, -5, 10];
let testedArray2 = [-3, -5, 1];
let testedArray3 = [-3, -5, '1'];
let testedStrArray = ['racconn', 'parrot', 'snake'];
let testedArray4 = [-3, null, -5, '1'];
let testedArray5 = [-3, undefined, -5, '1'];


test('isAnyInArray [1, 2, 3, [1], null, undefined], [-3, -5, 10]', () => {
    expect(jswl.array.isAnyInArray(originalArray, testedArray)).toBe(false);
});

test('isAnyInArray [1, 2, 3, [1], null, undefined], [-3, -5, 1]', () => {
    expect(jswl.array.isAnyInArray(originalArray, testedArray2)).toBe(true);
});

test('isAnyInArray [1, 2, 3, [1], null, undefined], [-3, -5, "1"]', () => {
    expect(jswl.array.isAnyInArray(originalArray, testedArray3)).toBe(false);
});

test("isAnyInArray ['dog', 'snake', 'cat'], ['racconn', 'parrot', 'snake']", () => {
    expect(jswl.array.isAnyInArray(originalStrArray, testedStrArray)).toBe(true);
});

test("isAnyInArray [1, 2, 3, [1], null, undefined], [-3, null, -5, '1']", () => {
    expect(jswl.array.isAnyInArray(originalArray, testedArray4)).toBe(true);
});

test("isAnyInArray [1, 2, 3, [1], null, undefined], [-3, undefined, -5, '1']", () => {
    expect(jswl.array.isAnyInArray(originalArray, testedArray5)).toBe(true);
});