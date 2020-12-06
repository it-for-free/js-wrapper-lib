
import jswl from '../../src/jswl.js';


let str = 'hello world!';

test('for "hello world!", "hello"', () => {
  expect(jswl.str.addPrefixIfNotExists(str, 'hello')).toBe('hello world!');
});

str = 'hello world!';
test('for "hello world!", "!"', () => {
  expect(jswl.str.addPrefixIfNotExists(str, '!')).toBe('!hello world!');
});


