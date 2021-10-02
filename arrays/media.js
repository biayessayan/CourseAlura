const scores= [10,6.5,8,7.5]

let sumScores =0

    for (let i = 0; i < scores.length;i++){
        sumScores += scores[i];
    }

    let media = sumScores/scores.length

    console.log(media)