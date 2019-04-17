// Template literal
// Using this syntax instead of quotations allows you to end lines in console.log lines without having to complicate code.
// ES5
/*console.log(`Hello! I'm a string
continues on next line`);
// ES6
console.log("Hello! I'm a string \n"
+ "continues on next line");

// Example 2;
// 
const name = "Jimmy";
const day = "Wednesday";
const instructor = {
    name: "Chris",
    lesson: "ES6",
    greet: function(){
        return`Hello ${this.name}, today's lesson is on ${this.lesson}.`

    }
}
// ES5-conca
console.log("Hellow " + name + ", today is " + day);
// ES6
console.log(`Hellow ${name}, today is ${day}.`);

console.log(instructor.greet());

function foo(){
    let x = true;
    if(x){
        var usingVar = `I'm using var`;
    }
    return usingVar;
}
console.log(foo());

function hello(name){
    name = name || 'Mystery Person';
    console.log(`Hello ${name}!`);
}
hello('Novella');
hello();*/

// Arrow Functions Example 1
/*const teacher = {
    name: "Jimbo",
    speak() {
        let boundFunction = () => {
            console.log(`later my name is ${this.name}`);
        }
        setTimeout(boundFunction,300);
        boundFunction();
    }
}
teacher.speak();*/

/*let students = [
    {name:'Hugp'},
    {name: 'Candace'},
    {name: 'Taylor'},
    {name: 'Dimitri'}
];

let names = students.map((student) => student.name);
console.log(names);*/

/*function add(){
    console.log("arguments object:", arguments);
    var numbers = Array.prototype.slice.call(arguments);
    var sum = 0;
    numbers.forEach(function(number){
        sum += number;
    });
    return sum;
}
console.log(add(1,2,3,4))*/

/*et spreadEX = (item) =>{
    let spreadArray = [...item]
    console.log(spreadArray);
    return spreadArray;
}
spreadEX('Hit me');

let restEx = (...z) => {
    console.log(z);
    return z
}
restEx("Hello","World")*/




/*var students = ["Julian","AJ","Matt"];
var x = students[0];
var y = students[1];
var z = students[2];

console.log(x,y,z);*/

// OOOOORRRRR
/*let students = ["Julian","AJ","Matt"];
let [x, ...rest] = students;
console.log(x,rest);
// note: the above way will take Julian out of the array.*/

/*let completedHomework = () => {
    return ["Julian","AJ","Matt"];
}
let [x,y,z] = completedHomework();
console.log(x,y,z);*/

/*let instructor = {
    name: "Jimmy",
    email: 'oh@hell.no'
}
let {name:x,email:y} = instructor;
console.log(x);
console.log(y);*/

/*let ronnie = {
    league: 'nba',
    bulls: function(){
        return 'Lets not suck next year';
    }
}
console.log(ronnie);
console.log(ronnie.bulls());*/

/*let car = {
    make: 'Honda'
}
function something(company,year=2001){
    console.log(company,year);
}
something(car)*/

// Constructor
/*function Person(name, job){
    this.name = name;
    this.job = job;
}
Person.prototype.getName = function getName(){
    return this.name;
}
var goodGuy = new Person("Aang","Airbender");
console.log(goodGuy.getName());*/



// Using Constructors
/*class Person{
    constructor (name, job){
        this.name = name;
        this.job = job;
    }
    getName(){
        return this.name;
    }
    getJob(){
        return this.job;
    }
}
/*let goodGuy = new Person('Goku','First Saiyan');
console.log(goodGuy.getName(),',',goodGuy.getJob());*/
/*class SuperHero extends Person{
    constructor(name,heroName,superPower){
        super(name);//the command super lets you use the existing name property from Person, and lets name interact with the SuperHero class
        this.heroName = heroName;
        this.superPower = superPower;
    }
    secretIdentity(){
        return `${this.heroName} is really ${this.name}`;
    }
}
let batman = new SuperHero('Bruce Wayne','Dark Knight','Rich');
console.log(batman.secretIdentity());*/

let student = {name: "A-aron"};
let status = new Map();
status.set(student.name,"D-nice");
status.set("stubborn","churlish");
console.log(status.get(student.name));
console.log(status.get("stubborn"));
