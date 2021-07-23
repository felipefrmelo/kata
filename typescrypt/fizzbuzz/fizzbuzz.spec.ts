import { fizzBuzz } from "./fizzbuzz";

describe("test FizzBuzz", () => {
  test("should return a number when is not divisible for 3 and 5", () => {
    assertFizzBuzz(1, 1);
    assertFizzBuzz(2, 2);
    assertFizzBuzz(4, 4);
    assertFizzBuzz(7, 7);
    assertFizzBuzz(8, 8);
    assertFizzBuzz(91, 91);
    assertFizzBuzz(44, 44);
  });

  test("should return 'Fizz' when number it is divisible by 3 or if it has a 3 in it", () => {
    assertFizzBuzz(3, "Fizz");
    assertFizzBuzz(6, "Fizz");
    assertFizzBuzz(9, "Fizz");
    assertFizzBuzz(12, "Fizz");
    assertFizzBuzz(13, "Fizz");
    assertFizzBuzz(43, "Fizz");
  });

  test("should return 'Buzz'  when number it is divisible by 5 or if it has a 5 in it", () => {
    assertFizzBuzz(5, "Buzz");
    assertFizzBuzz(10, "Buzz");
    assertFizzBuzz(25, "Buzz");
    assertFizzBuzz(55, "Buzz");
  });

  test("should return 'FizzBuzz'  when it number is divisible for 3 and 5", () => {
    assertFizzBuzz(15, "FizzBuzz");
    assertFizzBuzz(30, "FizzBuzz");
    assertFizzBuzz(90, "FizzBuzz");
  });

  test("should return 'Fizz' when number it is divisible for 3", () => {
    assertFizzBuzz(3, "Fizz");
    assertFizzBuzz(6, "Fizz");
    assertFizzBuzz(9, "Fizz");
    assertFizzBuzz(12, "Fizz");
    assertFizzBuzz(13, "Fizz");
    assertFizzBuzz(43, "Fizz");
  });
});
function assertFizzBuzz(num: number, expected: number | string) {
  expect(fizzBuzz(num)).toBe(expected);
}
