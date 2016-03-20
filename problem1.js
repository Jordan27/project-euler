//source of this exercise can be 
//found here: http://projecteuler.net/problem=1 

var total = 0;

for (x = 0; x < 1000; x++) {
  if (x % 3 === 0) {
    total += x;
  } else if (x % 5 === 0) {
    total += x;
  } 
};

console.log(total);