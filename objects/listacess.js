const client ={
    name:"Andre",
    age:36,
    cpf:"12345678",
    email:"andre@gmail.com"
}

const chaves =["name","age","cpf","email"]

//console.log(client[chaves[0]])

chaves.forEach(info=>
    console.log(client[info])
    )