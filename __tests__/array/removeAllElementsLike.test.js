
import jswl from '../../src/jswl.js';


let originalArray = [1, 2, '1', [1], null, undefined, null, 1, 0, false];
let originalStrArray = ['dog', 'snake', 'cat'];



test('removeAllElementsLike 1', () => {
    expect(jswl.array.removeAllElementsLike(originalArray, 1))
    .toEqual(
        [2, '1', [1], null, undefined, null, 0, false]
    );
});

test('removeAllElementsLike null', () => {
    expect(jswl.array.removeAllElementsLike(originalArray, null))
    .toEqual(
        [1, 2, '1', [1], undefined, 1, 0, false]
    );
});