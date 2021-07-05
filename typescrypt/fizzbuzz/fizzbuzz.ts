export function fizzBuzz(number: number) {
  if (number % 15 == 0) return "FizzBuzz";
  if (number % 3 == 0 || number.toString().includes("3")) return "Fizz";
  if (number % 5 == 0) return "Buzz";

  return number;
}
