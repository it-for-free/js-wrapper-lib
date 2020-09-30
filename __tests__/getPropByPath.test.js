
import jswl from '../src/jswl.js';


let obj = {
    value: 11,
    properties: {
	id: 12,
	name: 'Valent',
	subprop: {
	    id: 125,
	}
    },
};

test('for "value" returns 11', () => {
  expect(jswl.getPropByPath(obj, 'value')).toBe(11);
});

test('for "properties.id" returns 12', () => {
  expect(jswl.getPropByPath(obj, "properties.id")).toBe(12);
});

test('for "properties.name" returns "Valent"', () => {
  expect(jswl.getPropByPath(obj, "properties.name")).toBe('Valent');
});

test('for "properties.subprop.id" returns 125', () => {
  expect(jswl.getPropByPath(obj, "properties.subprop.id")).toBe(125);
});





