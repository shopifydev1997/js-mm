// singleton

// object literals
const mySym = Symbol("MyKey")


const JsUser = {
    name: "Manish",
    "full name" : "Manish Mishra",
    [mySym] : "MyKey1",
    age : 27,
    location : "Mumbai",
    email : "manis@123.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

JsUser.email = "manish123@gmail.com"
Object.freeze(JsUser)
JsUser.email = "manish@chatgpt.com"

console.log(JsUser);



