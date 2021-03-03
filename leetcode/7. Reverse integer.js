// My Naive Solution

/**
 
 Naive Solution
 - create var reversedInt set to an empty string
 - Convert int to a string
 - Loop *backwards* through int and for each digit...
    - concat onto  reversedInt

 - After loop, convert reversedInt back to integer
 - if input < 0, multiply reversedInt by -1
 - return reversedInt

 Refactored
 - USe split, reverse, join after converting to a string
 
 */

var reverse = function(x) {

    let reversedInt = ""
    let stringifiedX = x.toString()

    for(i=stringifiedX.length - 1; i>=0; i--){
        reversedInt = reversedInt.concat("", stringifiedX[i])
        
        //console.log(reversedInt)
    }
    
    reversedInt = parseInt(reversedInt)
    
    if(reversedInt > 2147483647){
        return 0
    }
    
    if(x < 0) {
        reversedInt = reversedInt * (-1)
    } 
    
    return reversedInt
};




//ALT SOLUTIONS


//uses % to lop off the last digit - ex 132 % 10 = 2 -- uses math to avoid stringifying it
var reverse = function (x) {
    let negative = false;
    //make positive, but mark that is was originally negative
    if (x < 0) {
      negative = true;
      x *= -1;
    }
    let res = 0;
    while (x > 0) {
      //add another place to our res
      res *= 10;
      //the remainder of x/10 gives us the number we want to place
      let numberToPlace = x % 10;
      //we made room in step 1, so now we just add the numberToPlace         to our res
      res += numberToPlace;
      //we modify x to no longer include the number we just placed -- round down
      x = Math.floor(x / 10);
    }
  
    //if bigger than 32 bit constraint, return 0
    if (res > Math.pow(2, 31) - 1) return 0;
  
    //if we originally marked as negative, make negative again
    return negative ? res * -1 : res;
  };