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

},
{
    name:"Samia Maria",
    parents:"Daughter",
    DBO:"04/01/2014"
}
],
 account:100,
 deposit:function (value){
     this.account +=value
 }
}

console.log(client.account)
client.deposit(30)
console.log(client.account)

