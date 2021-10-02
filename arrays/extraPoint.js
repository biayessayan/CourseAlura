const scores = [10,9,8,7,6]

const updateScores = scores.map (score=> 
    //true        //false
    score==10 ? score:++score)

console.log(updateScores)