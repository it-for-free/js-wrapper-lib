import jswl from '../../src/jswl.js';

test("'' is in ''", () => {
    expect(jswl.checkForSubstring('', '')).toBe(true);
});

test("'' is in 'sdf'", () => {
    expect(jswl.checkForSubstring('sdf', '')).toBe(true);
});

test("'pepper' is in 'Peter Piper picked a peck of pickled peppers'", () => {
    expect(
        jswl.checkForSubstring(
            'Peter Piper picked a peck of pickled peppers',
            'pepper'
        )
    ).toBe(true);
});

test("'1Piper' is in 'Peter 1Piper picked a peck of pickled peppers'", () => {
    expect(
        jswl.checkForSubstring(
            'Peter 1Piper picked a peck of pickled peppers',
            '1Piper'
        )
    ).toBe(true);
});

test("' ' is in 'Peter Piper picked a peck of pickled peppers'", () => {
    expect(
        jswl.checkForSubstring(
            'Peter Piper picked a peck of pickled peppers',
            ' '
        )
    ).toBe(true);
});

test("'PIPER' is in 'Peter Piper picked a peck of pickled peppers'", () => {
    expect(
        jswl.checkForSubstring(
            'Peter Piper picked a peck of pickled peppers',
            'PIPER'
        )
    ).toBe(false);
});

test("'//' is in 'Peter Piper/// picked a peck of pickled peppers'", () => {
    expect(
        jswl.checkForSubstring(
            'Peter Piper/// picked a peck of pickled peppers',
            '//'
        )
    ).toBe(true);
});