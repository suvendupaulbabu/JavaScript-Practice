// Create Method() => Inside object if create function then it's called method
const user = {
    userName : 'PUER', 
    price : 999, 
    welcomeMSG: function userPrint(){
        console.log(`${this.userName} set their budget for 2024 $${this.price}`)
        console.log(this) // Inside function this keyword return current context / block scope value      
    }
}

user.welcomeMSG()
user.price = "1000"
user.welcomeMSG()

console.log(this) // But here this keyword return empty object *** Note => But if same this keyword print in browser then it's return window object because of browser engine