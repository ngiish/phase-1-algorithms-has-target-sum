function hasTargetSum(array, target) {
  // Write your algorithm here
  // let start = 0
  // let end = array.length

  for(let i=0;i<array.length;i++){ 
    const remainder = target - array[i];
    for(let j=i+1;j<array.length;j++){
      if(array[j] === remainder){
        return true;
      }
    }
    
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity  is the Quadratic time O(n^2) since we have nested loops

*/
/* 
  Add your pseudocode here
*/
/*This program will allow the user to compare the sums of numbers in an array to check whether they are equal to the target.
FOR loop is used to iterate through the numbers in the arrays provided a step at a time for the first iteration
The second FOR loop is used to iterate through the arrays in order to get the second variable for the algorithm
IF...ELSE statement is used to check whether the target condition is satisfied by the array, returns true if condition is satisfied and false if it is not satisfied
*/
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

}

module.exports = hasTargetSum;
