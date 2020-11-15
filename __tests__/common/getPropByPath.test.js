
import jswl from '../../src/jswl.js';


let obj = {
    value: 11,
    undvalue: null,
    properties: {
	id: 12,
	name: 'Valent',
	subprop: {
	    id: 125,
	    undvalue: null,
	}
    },
};

test('for "value" returns 11', () => {
  expect(jswl.getPropByPath(obj, 'value')).toEqual({found: true, value: 11});;
});

test('for "properties.id" returns 12', () => {
  expect(jswl.getPropByPath(obj, "properties.id")).toEqual({found: true, value: 12});
});

test('for "properties.name" returns "Valent"', () => {
  expect(jswl.getPropByPath(obj, "properties.name")).toEqual({found: true, value: 'Valent'});
});

test('for "properties.subprop.id" returns 125', () => {
  expect(jswl.getPropByPath(obj, "properties.subprop.id")).toEqual({found: true, value: 125});
});

test('for "properties.subprop.id.undvalue" returns null', () => {
  expect(jswl.getPropByPath(obj, "properties.subprop.undvalue")).toEqual({found: true, value: null});
});

test('for "undvalue" returns null', () => {
  expect(jswl.getPropByPath(obj, 'undvalue')).toEqual({found: true, value: null});
});


test('for "notexistsvalue" returns found false', () => {
  expect(jswl.getPropByPath(obj, 'notexistsvalue')).toEqual({found: false, value: undefined});
});


test('for "properties.subprop.id.notexistsvalue" found false', () => {
  expect(jswl.getPropByPath(obj, "properties.subprop.id.notexistsvalue")).toEqual({found: false, value: undefined});
});



