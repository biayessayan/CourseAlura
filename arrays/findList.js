const students = ['Joao','Ana','Bia','Aline',
'Well','Sandra','Sara','Diego']

const studentsMedia =[10,9,8,7]

//includes -->boolean
//indeof --> 3

let studentsList =[students,studentsMedia]

const showNameAndScore = (studentsName)=>{
    if (studentsList[0].includes(studentsName)){
       let  indice = studentsList[0].indexOf(studentsName)
                       // [0][3] 
       return studentsList[0][indice] + 
        ', sua media is ' + studentsList[1][indice]
    }else{
        return "Student is not register"
    }

}

console.log (showNameAndScore("Ana"))