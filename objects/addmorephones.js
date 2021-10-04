const client ={
    name:"Andre",
    age:36,
    cpf:"12345678",
    email:"andre@gmail.com",
    phones:["90898798","90909098"],
    depents : [{
    name:"Sara",
    parents:"Daughter",
    DBO:"20/03/2011"
}]
}

client.depents.push({
    name:"Samia Maria",
    parents:"Daughter",
    DBO:"04/01/2014"
})

//console.log(client)

const daughternew = client.depents.filter (depent =>
    depent.DBO==="04/01/2014"
    )

    console.log(daughternew[0].name)