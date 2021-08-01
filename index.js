let student = require('./information'); //import module informations


let cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hello I'm "+ student.name + " from " + student.campus + " campus",
    e : "oO",
    T : "U "
}));
