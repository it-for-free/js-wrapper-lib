
import jswl from '../../src/jswl.js';

let arr = [
    {
	sections: [
	    {
		floors: [
		    {id: 1, value: 1, open: true},
		    {id: 23, value: 2, open: false}
		],
	    },
	    {
		floors: [
		    {id: 2, value: 1, open: true},
		    {id: 2, value: 1, open: true},
		],
	    },
	    {
		floors: [
		    {id: 2, value: '1', open: false}
		],
	    },
	]
    },
    {
	sections: []
    },
    {},
   {
	sections: [
	    {
		floors: [
		    {id: 1, value: 1, open: false},
		    {id: 2, value: 1, open: true}
		],
	    },
	    {},
	    {
		floors: [
		    {id: 2, value: '1', open: false},
		    {id: 3, value: '1', open: false}
		],
		
	    },
	]
    },
];

test("for 'sections[]floors[].value', 1  returns 5", () => {
  expect(jswl.arr.countSubElementsWithValue(arr, 'sections[]floors[].value', 1)).toBe(5);
});

test("for 'sections[]floors[].open', true returns 4", () => {
  expect(jswl.arr.countSubElementsWithValue(arr, 'sections[]floors[].open', true)).toBe(4);
});


test("for subarray 'arr[0].sections' path floors[].open', true  returns 3", () => {
  expect(jswl.arr.countSubElementsWithValue(arr[0].sections, 'floors[].open', true)).toBe(3);
});

test("for subarray 'arr[0].sections[0].floors' path 'open', true  returns 1", () => {
  expect(jswl.arr.countSubElementsWithValue(arr[0].sections[0].floors, 'open', true)).toBe(1);
});








