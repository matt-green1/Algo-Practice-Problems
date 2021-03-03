/*
Link: https://leetcode.com/problems/two-sum/
Pseudocode:
 
    Naive Solution - O(n^2)
        - Create empty array targetSumInts (that we'll eventually return with answers)
        - Loop through nums
            - For each num loop through every other num element (skip if it's a duplicate)
                - if sum of current element and second loop element equals target, push their indeces                   into targetSumInts and return it
    Better Solutios
    -  multiple pointers?
    - hash map - aka use an object


*/

//Naive
var twoSum = function(nums, target) {
    const targetSumInts = []
    
    for(let i=0; i<nums.length - 1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                console.log(nums[i] + nums[j])
                targetSumInts.push(i)
                targetSumInts.push(j)
            }
        }
    }
    return targetSumInts
};

//better solution - using a Map aka fancy hash - best solution for an UNSORTED array
var twoSum = function(nums, target) {
    const hashT = new Map();
  
    for(var i=0; i<a.length; i++) {
      let complement = target - a[i] 
      if(hashT.has(complement)){
        return [i, hashT.get(complement)]
      }
      hashT.set(a[i], i) 
    }  

}

//BESTBESTBESTBEST
//like the above solution but uses a basic object instead of map 
var twoSum = function(nums, target){
    const objTracker = {}
    
    for(i=0; i<nums.length; i++){
        //finds the compliment number for each number
        let compliment = target - nums[i]
        if (compliment in objTracker){
            //this retursn the current index of the nums array we're iterating through first in an arrat
            // and THEN it's compliment index that we already would have added to the Object
            return [i, objTracker[compliment]]
        }
        
        
        //note: this line is delayed by one loop since we first create the compliment
        // for each number then add it to obj- we check on the next loop through
        
        //if target - current (aka compliment) value doesn't exist in obj then push the value of the index in             //obj  --> key is the value of the element
        objTracker[ nums[i] ] = i;
      
    }
}


//refactored - multiple pointers - doesn't work though - can't sort because we need to return indeces...
//we would have to then use the values to find the original indexs using indexOf()

// var twoSum = function(nums, target) {
//     const sortedNums = nums.sort(a-b){return a-b}
    
    
//     let leftPointerIdx = 0
//     let rightPointerIdx = sortedNums.length - 1
    
//     while(left < right) {

//         let sum = sortedNums[leftPointerIdx] + sortedNums[rightPointerIdx]
//         if (sum === target){
//             return[sortedNums[leftPointerIdx], sortedNums[rightPointerIdx]
//         } else if (sum > target){
//             right--
//             //this will make hte sum smaller
//         } else if (sum < target){
//             left++
//             //this will make the sum larger
//         }
//     }