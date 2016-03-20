//LARGEST PRIME FACTOR

//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143?

var number = 600851475143

for (x = 0; x < 600851475143; x++) {
  if (number % x === 0) {
    var highestNum = x
  } 
};

console.log(highestNum);