function fizzBuzz(num) {
  /* if (num % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return num.toString();
  } */

  return (num % 3 === 0 && num % 5 === 0) ? "fizzbuzz" :
         (num % 3 === 0) ? "fizz" :
         (num % 5 === 0) ? "buzz" :
         num.toString();
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));
