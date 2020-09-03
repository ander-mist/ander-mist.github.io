const sum = require('./exe01-10-1');

test('sum', ()=> {
    expect(sum(4, 5)).toBe(9);
});

test ('soma de 0 + 0 deve retornar 0 ', () => {
    expect(sum(0, 0)).toBe(0);
});

test ('testando se lança exceção', () => {
    expect(sum(4, "5")).toThrow();
});