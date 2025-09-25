
// singleton
// Object.create

// object literals
const JsUser = {
    name: "suma",
    age : 29,
    location: "Jaipur",
    email: "suma.anakakli@gmail.com",
    idLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
// Object.freeze(JsUser);
JsUser.email ="Raja.kald@gmial.com"
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello user , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
