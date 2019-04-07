/**
 * @param {number[]} A
 * @return {number[]}
 * 
 * 
 * Thoughts:
 * 
 * iterate through given array, A, 
 * 
 * if the element at A[i] is odd, push into odd array, same for evens
 * merge the two arrays using concat
 * 
 * values in odd or even arrays do not need to be assorted into any direction
 */
var sortArrayByParity = function(A) {
  const oddArray = [];
  const evenArray = [];
  
  // iterate over input array
  for (let i = 0; i < A.length; i++){
    // even or odd check
    // iff modulus 2 === 0 it's even, otherwise it's odd
    if (A[i] % 2 === 0){
      evenArray.push(A[i]);
    } else {
      oddArray.push(A[i]);
    }
  }

  // results is evens first, odds last
  // must assign the concatonation to a variable to return later.
  const resultArray = evenArray.concat(oddArray);

  // return concat'd result
  return resultArray;
};

//testing:

const anArrayOfSomeKind = [1,2,3,4];

console.log(sortArrayByParity(anArrayOfSomeKind));
//expect: [2, 4, 1, 3]