
import jswl from '../../src/jswl.js';


const originalArray = [1, 2, 3, 4, 5, [1, 2, 3]];
let testValue = 1;
let testValue2 = '1';

test('1 in array strict is enabled', () => {
    expect(jswl.array.inArray(testValue, originalArray, true)).toBe(true);
});

test('"1" in array strict is enabled', () => {
    expect(jswl.array.inArray(testValue2, originalArray, true)).toBe(false);
});


//disabled strict

test('1 in array strict is disabled', () => {
    expect(jswl.array.inArray(testValue, originalArray)).toBe(true);
});

test('"1" in array strict is disabled', () => {
    expect(jswl.array.inArray(testValue2, originalArray)).toBe(true);
});

test('22 in array strict is disabled', () => {
    expect(jswl.array.inArray(22, originalArray)).toBe(false);
});

test('"0" in [0, 2, 3] strict is disabled', () => {
    expect(jswl.array.inArray('0', [0, 2, 3])).toBe(true);
});

test('"0" in [0, 2, 3] strict is disabled', () => {
    expect(jswl.array.inArray('0', [0, 2, 3])).toBe(true);
});

test('null in ["0", 2, 3] strict is disabled', () => {
    expect(jswl.array.inArray('null', ["0", 2, 3])).toBe(false);
});

test('null in [0, 2, 3] strict is disabled', () => {
    expect(jswl.array.inArray('null', [0, 2, 3])).toBe(false);
});