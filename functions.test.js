const fns = require('./functions');

test("fns.returnTwo should return two", () => {
    expect(fns.returnTwo()).toBe(2)
})

test("fns.greeting should return names", () => {
    expect(fns.greeting("James")).toBe("Hello, James");
    expect(fns.greeting("Jill")).toBe("Hello, Jill");
})

test("fns.add to return the sum total", () => {
    expect(fns.add(1, 2)).toBe(3);
    expect(fns.add(5, 9)).toBe(14);
})

describe("number tests", () => {
    test("fns.multiply should return a number", () => {
        expect(fns.multiply(3, 9)).toBe(27)
    }),
    test("fns.divide should return a number", () => {
        expect(fns.divide(10, 5)).toBe(2)
    }),
    test("fns.subtract should return a number", () => {
        expect(fns.subtract(20, 10)).toBe(10)
    })
})