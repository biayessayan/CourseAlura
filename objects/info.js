const client ={
    name:"Andre",
    age:36,
    cpf:"12345678",
    email:"andre@gmail.com"
}

console.log(`My name is: ${client.name} and I have ${client.age}`

)
//shows just 3 first numbers    [0],[3]
console.log(client.cpf.substring(0,3))