/* 
    Pseudocode
    - Set counter variables for each of the three cases
    - Loop through array and increment variables
    - Write a helper function that used toFixed() and then converts back to float (string was actually acceptable)
        - Console log results (in function)

*/

// Complete the plusMinus function below.

function plusMinus(arr) {
    let posCount = 0
    let negCount = 0
    let zeroCount = 0
    
    for(let num of arr){
        if(num > 0){
            posCount++
        } else if(num < 0) {
            negCount++
        } else {
            zeroCount ++
        }
    }

    const ratioCalculator = (countVar) => {
        countVar = Number.parseFloat(countVar/arr.length).toFixed(6)
        console.log(countVar)
    }

    ratioCalculator(posCount)
    ratioCalculator(negCount)
    ratioCalculator(zeroCount)
    
}