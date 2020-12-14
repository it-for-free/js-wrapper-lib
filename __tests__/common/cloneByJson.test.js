
import jswl from '../../src/jswl.js';

let obj1  = {
    a: 1,
    b: 2,
}
let obj2 = jswl.cloneByJson(obj1);

test(' .a is 1 ', () => {
  expect(obj2.a).toBe(1);
});


