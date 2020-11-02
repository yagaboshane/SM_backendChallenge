console.log('index is running')

let userName = document.querySelector('#userName')
let userPWord = document.querySelector('#userPWord') 


let login = document.querySelector('#loginBttn')
login.addEventListener('click', test())

function test (){
    console.log('this is running')
}

const userArr = []

function user(name, password){
    this.name = name,
    this.password = password
    console.log(this)
}

const newUser = new user(userName.value, userPWord.value)

console.log(user)