/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 
 
    Perhaps, we can iterate through the entireiy of S, the stones, if that index in the stones
    is a substring, or is included in J, then it is a Jewel. Case sensitive needs to be considered

    J = jewels type/value
    S = pile of stones, in which we need to sift out jewels, J
 */
var numJewelsInStones = function(J, S) {
  let foundJewels = 0;
  
  let jewelArray = J.split('');
 
  for (let i = 0; i < S.length; i++){
    if (jewelArray.includes(S[i])){
      foundJewels++;
    }
  }

  return foundJewels
};

// brief testing:

let myJewels = 'aBc';
let stoneBucket = 'aBcDeFgHiJkLmNoP'; 

console.log(numJewelsInStones(myJewels, stoneBucket)); //expect 3 to be printed