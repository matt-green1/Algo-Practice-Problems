/**
 * @param {string[]} strs
 * @return {string}

Pseudocode

NAIVE O(n2)
- Create an LongestPrefix variable equal to the first word in the array
- Loop through Array (starting at 2nd word)
    - For each string in array
        - First, compare length of string to length of variabel
            - If string is shorter, shorten variable to match
    
        - NEXT, loop through each character 
            - compare char to each char in current longest prefix variable
            - If/when a charcter doesn't match, adjust prefix variable accordingly by...
                - Shortening LongestPrefix var to be a length of j (current index we're at going through                        string)

Better solution - will be O(n) and not contain a loop within a loop
    - Likely involves alphabetical order

*/



var longestCommonPrefix = function(strs) {
    if(strs[0] === "" || strs.length === 0){
        return ""
    }
    
    let longestPrefix = strs[0]
    
    // console.log("before the loop:", longestPrefix)
    for(i=1; i<strs.length; i++){
        if(strs[i].length < longestPrefix.length) {
            
            longestPrefix = longestPrefix.slice(0, strs[i].length)
        }
        
        
        for(j=0; j<strs[i].length; j++ ) {
            if(strs[i][j] !== longestPrefix[j]){
                if(j === 0){
                    return ""
                } else {
                    longestPrefix = longestPrefix.slice(0, j)
                    break
                }
            }
        }
        
    }
    return longestPrefix
    
};

/* more elegant solution
(from leetcode)

s = total characters of all strings
m = max prefix + index

const longestCommonPrefix = (strs) => {
    if (!strs.length) return ''
    let prefix = ''
    let index = 0
    while (index <= strs[0].length-1) {
        let ch = strs[0][index]
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][index] !== ch) {
                return prefix
            }
        }
        index++
        prefix += ch
    }
    return prefix
};
*/