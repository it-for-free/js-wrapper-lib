
import jswl from '../../src/jswl.js';


let str = 'hello world!';

test('for "hello world!", "hello "', () => {
  expect(jswl.str.removePrefixIfExists(str, 'hello ')).toBe('world!');
});

str = 'hello world!';
test('for "hello world!", "!"', () => {
  expect(jswl.str.removePrefixIfExists(str, '!')).toBe('hello world!');
});


