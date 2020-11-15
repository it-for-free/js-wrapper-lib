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
