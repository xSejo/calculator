const calculator = require("./calculator.js");

describe("add", () => {
  test("add 0 to 0", () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test.skip("add positives", () => {
    expect(calculator.add(7, 1)).toBe(8);
  });

  test.skip("add negatives", () => {
    expect(calculator.add(-2, -5)).toBe(-7);
  });

  test.skip("add positive with negative", () => {
    expect(calculator.add(-3, 2)).toBe(1);
  });

  test.skip("add floats", () => {
    expect(calculator.add(2.5, 2.5)).toBe(5);
  });
});

describe("subtract", () => {
  test("subtract 0 to 0", () => {
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  test.skip("subtract positives", () => {
    expect(calculator.subtract(7, 5)).toBe(2);
  });

  test.skip("subtract negatives", () => {
    expect(calculator.subtract(-7, -5)).toBe(-2);
  });

  test.skip("subtract positive with negative", () => {
    expect(calculator.subtract(-3, 2)).toBe(-5);
  });

  test.skip("subtract floats", () => {
    expect(calculator.subtract(2.5, 2.5)).toBe(5);
  });
});

describe("multiply", () => {
  test.skip("multiply 7 by 0", () => {
    expect(calculator.multiply(7, 0)).toBe(0);
  });
  test.skip("multiply positive by negative", () => {
    expect(calculator.multiply(7, -2)).toBe(-14);
  });
  test.skip("multiply negatives", () => {
    expect(calculator.multiply(-5, -2)).toBe(10);
  });
  test.skip("multiply floats", () => {
    expect(calculator.multiply(2.5, 2.5)).toBe(6.25);
  });
});

describe("divide", () => {
  test("divide 7 by 0", () => {
    expect(calculator.divide(7, 0)).toBe(0);
  });
  test.skip("divide positive by nagative", () => {
    expect(calculator.divide(7, -2)).toBe(-3.5);
  });
  test.skip("divide negatives", () => {
    expect(calculator.divide(-2, -2)).toBe(1);
  });
});
