/* 
  Pseudocode:

    input:
    x will only be an integer
      this integer CAN be negative

    output: 
    x integer in reversed order
      ex: 123 -> 321
          -123 -> -321
    
    check x's sign

    if positive, stringify
      reverse string
        iterate from back to front
          concat those chars to a new string
            Number(newString)
    if negative, stringify
      cut off first element/char (the '-' sign)
        reverse string
          same as above
            Number(newString)
            multiply by -1;
    return newNumber;

    additionally:

      input must be 32-sign int 
      if x exceeds 2,147,483,647 or -2,147,483,648
        OR if the  reversed int exceeds ^ range
      return 0;
*/

var reverse = function(x) {
  const min = -2147483648;
  const max = 2147483647;
  let newNumber = 0;  

  if (x > 0 && x <= max) {
    let stringX = JSON.stringify(x);
    let reversedX = ''
    for (let i = stringX.length - 1; i >= 0; i--) {
      reversedX = reversedX.concat(stringX[i]);
    }
    newNumber = Number(reversedX);
  } else if (x < 0 && x >= min) {
    x = x * (-1);
    let stringX = JSON.stringify(x);
    let reversedX = ''
    for (let i = stringX.length - 1; i >= 0; i--) {
      reversedX = reversedX.concat(stringX[i]);
    }
    newNumber = Number(reversedX) * -1;
  }

  if ( min <= newNumber && newNumber <= max){
    return newNumber;
  } else {
    return 0;
  }
};

let sampleInt = -2147483412;

console.log(reverse(sampleInt));