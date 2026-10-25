const calculator = require("./calculator.js");

describe("add", () => {
  test("add 0 to 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test("add positives", () => {
    expect(calculator.add(7, 1)).toBe(8);
  });

  test("add negatives", () => {
    expect(calculator.add(-2, -5)).toBe(-7);
  });

  test("add positive with negative", () => {
    expect(calculator.add(-3, 2)).toBe(-1);
  });

  test("add floats", () => {
    expect(calculator.add(2.5, 2.5)).toBe(5);
  });
});

describe("subtract", () => {
  test("subtract 0 to 0", () => {
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  test("subtract positives", () => {
    expect(calculator.subtract(7, 5)).toBe(2);
  });

  test("subtract negatives", () => {
    expect(calculator.subtract(-7, -5)).toBe(-2);
  });

  test("subtract positive with negative", () => {
    expect(calculator.subtract(-3, 2)).toBe(-5);
  });

  test("subtract floats", () => {
    expect(calculator.subtract(2.5, 2.5)).toBe(0);
  });
});

describe("multiply", () => {
  test("multiply 7 by 0", () => {
    expect(calculator.multiply(7, 0)).toBe(0);
  });
  test("multiply positive by negative", () => {
    expect(calculator.multiply(7, -2)).toBe(-14);
  });
  test("multiply negatives", () => {
    expect(calculator.multiply(-5, -2)).toBe(10);
  });
  test("multiply floats", () => {
    expect(calculator.multiply(2.5, 2.5)).toBe(6.25);
  });
});

describe("divide", () => {
  test("divide 7 by 0", () => {
    expect(calculator.divide(7, 0)).toBe(Infinity);
  });
  test("divide positive by nagative", () => {
    expect(calculator.divide(7, -2)).toBe(-3.5);
  });
  test("divide negatives", () => {
    expect(calculator.divide(-2, -2)).toBe(1);
  });
});
