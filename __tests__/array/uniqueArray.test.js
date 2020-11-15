
import jswl from '../../src/jswl.js';


let originalArray = [0, 2, 3, [0], null, undefined, null, 0, '0'];


test('uniqueArray 1', () => {
    expect(jswl.array.uniqueArray(originalArray))
    .toEqual(
        [0, 2, 3, [0], null, undefined, '0']
    );
});
