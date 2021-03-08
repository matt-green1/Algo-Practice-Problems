/**
 * @param {number} x
 * @return {boolean}
 
 Pseudocode
 Naive
 - If x < 0 return false
 - Convert x to string
 - Split() into an array and then reverse and join
 - compare to original string
    - return false if not equal
 - Compare x as string to var.reverse()
 
 Better: Multiple pointers - avoids O(n) I think?
 - If x < 0 return false
 - set left pointer index to 0
 - set right pointer index to str.length - 1
 - while loop where left index NOT equal to right index
 - if they're not equal return false
 
 */

 var isPalindrome = function(x) {
    //Refactored -- multiple pointers
    if( x < 0 ) {
        return false
    }
    
    let stringifiedNum = x.toString()
    let leftPointerIdx = 0
    let rightPointerIdx = stringifiedNum.length -1
    
    while(leftPointerIdx < rightPointerIdx){
        if(stringifiedNum[leftPointerIdx] !== stringifiedNum[rightPointerIdx]){
            return false
        }
        leftPointerIdx++
        rightPointerIdx--
        
}
    return true
    
   /*
    Original, naive solution
    if( x < 0 ) {
        return false
    }
    if (x.toString().split("").reverse().join("") !== x.toString() ){
        return false
    }
    return true
    */
};