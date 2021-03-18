/*
BIG ERROR: didn't read insturctions close enough - print answer NOT return

Original incorrect PseudoCode
- create empty final input variable
- Loop n times - backwards
- for each loop, there should be (n - (index + 1)) spaces's AND
- index + 1 #'s with a \n afterthe final #
- Add to empty output variable
- Output variable

refactored pseudocode
- The key is the formulas for num hashes and num spaces
- Loop n times
- for each loop, there should be (n - (index + 1)) spaces's AND
- index + 1 #'s with a \n afterthe final #
- Console log each loop to build final output

*/

// Complete the staircase function below.
function staircase(n) {
    
    for(let i=0; i<n; i++ ){
        let hashes = `${"#".repeat(i + 1)}`
        let spaces = `${" ".repeat(n - (i + 1))}`
        console.log(`${spaces}` + `${hashes}`)
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
