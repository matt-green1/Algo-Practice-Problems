/**
 * @param {string} s
 * @return {number}
        
        Everything is logical except 4 IV and 9 IX which are exceptions
            - Same for 40 XL, 90 XC +  CD 400,  CM 900
            
        Key: It's just 1's and 5's 
        - Also - need to look at two at a given time - sliding window!
        
        Pseudocode
        
        Naive Solution
        - Make an object of numerals to integers
        - Loop through numeral string backwards and add them
            - if num is no I look at number preceding it  
        - USe conditionals to account for exception conditions (above)
        - return integer total
        
        
        
*/


var romanToInt = function(s) {
    numeralObj = {"I":1, "V":5, "X":10, "L":50, "C":100, "D": 500, "M": 1000}
    
    for( i = s.length - 1;i >=0 ; i-- ){
        console.log(numeralObj[s[i]])
    }
  
    // Next steps - don't need to go backwards, loop through and look at a number and it's preceding number
};