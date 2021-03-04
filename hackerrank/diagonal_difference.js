// Video solve: https://www.youtube.com/watch?v=f6bTIsj9ne8&list=PLSIpQf0NbcCltzNFrOJkQ4J4AAjW3TSmA&ab_channel=JAVAAID-CodingInterviewPreparation


//it's an array of three sub arrays
function diagonalDifference(arr) {
    const rows = arr.length
    
    let leftDiagSum = 0
    let rightDiagSum = 0

    for(let i=0; i<rows; i++){
        leftDiagSum += arr[i][i]
        rightDiagSum += arr[i][rows - 1 - i]
        
    }

    const diagDifference = Math.abs(leftDiagSum - rightDiagSum)
    return diagDifference
}