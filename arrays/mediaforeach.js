const scores = [10,6.5,8,7.5]

let sumScores =0


//callback
// scores.forEach(score =>{
//     sumScores+= score
// })or

scores.forEach(function (score){
  sumScores +=score
})

let media = sumScores/scores.length

console.log(media)
