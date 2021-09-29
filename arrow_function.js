function presention (nome){
    return `meu nome e ${nome}`
}

//Arrow function
const presentationArrow = name => `meu nome e ${nome}`
const sum =(num1,num2) => num1 + num2

//Arrow function with one more line
const sumSmallNumbers = (num1,num2) =>{
    if (num1 || num2>10){
        return "Only numbers 1 to 9"
    }else{
        return num1+num2
    }
}