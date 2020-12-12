import jswl from '../../src/jswl.js';

let obj = {
    one: { id: 1, value: 11 },
    one1: { id: 2, value: 22 },
    one2: { id: 3, value: 33 },
    one3: { id: 8, value: 'mm' },
    one4: { id: 4, value: 44 },
    one5: {
        id: 4,
        value: {
            subvalue: 125,
        },
    },
};

test('for one.value returns 11 ', () => {
    expect(jswl.obj.getPropByPath(obj, 'one.value')).toEqual({
        found: true,
        value: 11,
    });
});

test('for one5.value.subvalue  returns 125 ', () => {
    expect(jswl.obj.getPropByPath(obj, 'one5.value.subvalue')).toEqual({
        found: true,
        value: 125,
    });
});

test('for one5.value.randomsubVal  returns {found: false, value: undefined} ', () => {
    expect(jswl.obj.getPropByPath(obj, 'one5.value.randomsubVal')).toEqual({
        found: false,
        value: undefined,
    });
});


let obj2 = {
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
  expect(jswl.obj.getPropByPath(obj2, 'value')).toEqual({found: true, value: 11});;
});

test('for "properties.id" returns 12', () => {
  expect(jswl.obj.getPropByPath(obj2, "properties.id")).toEqual({found: true, value: 12});
});

test('for ".properties.id" returns 12', () => {
  expect(jswl.obj.getPropByPath(obj2, ".properties.id")).toEqual({found: true, value: 12});
});

test('for "properties.name" returns "Valent"', () => {
  expect(jswl.obj.getPropByPath(obj2, "properties.name")).toEqual({found: true, value: 'Valent'});
});

test('for "properties.subprop.id" returns 125', () => {
  expect(jswl.obj.getPropByPath(obj2, "properties.subprop.id")).toEqual({found: true, value: 125});
});

test('for "properties.subprop.id.undvalue" returns null', () => {
  expect(jswl.obj.getPropByPath(obj2, "properties.subprop.undvalue")).toEqual({found: true, value: null});
});

test('for "undvalue" returns null', () => {
  expect(jswl.obj.getPropByPath(obj2, 'undvalue')).toEqual({found: true, value: null});
});


test('for "notexistsvalue" returns found false', () => {
  expect(jswl.obj.getPropByPath(obj2, 'notexistsvalue')).toEqual({found: false, value: undefined});
});


test('for "properties.subprop.id.notexistsvalue" found false', () => {
  expect(jswl.obj.getPropByPath(obj, "properties.subprop.id.notexistsvalue")).toEqual({found: false, value: undefined});
});


