
import jswl from '../src/jswl.js';

test('"123" not empty ', () => {
  expect(jswl.isEmpty('123')).toBe(false);
});
