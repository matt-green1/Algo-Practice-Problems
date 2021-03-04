function compareTriplets(a, b) {
    let finalScore = [0, 0]

    for(let i=0; i < 3; i++){
        if(a[i]>b[i]){
            finalScore[0] += 1
        } else if(b[i]>a[i]) {
            finalScore[1] += 1
        }
    }

    return finalScore
}
