
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
		    {id: 2, value: 1, open: true}
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

test("for 'sections[]floors'", () => {
  expect(jswl.arr.countElementsInSubArrays(arr, 'sections[]floors')).toBe(8);
});

test("for subarray 'arr[0].sections' path 'floors'", () => {
  expect(jswl.arr.countElementsInSubArrays(arr[0].sections, 'floors')).toBe(4);
});

test("for subarray 'arr[1].sections' path 'floors'", () => {
  expect(jswl.arr.countElementsInSubArrays(arr[1].sections, 'floors')).toBe(0);
});








