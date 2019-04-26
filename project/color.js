const brain = require("brain.js");

const net = new brain.NeuralNetwork();

net.train([
    {input: { r: 0, g: 0, b: 0}, output: {black: 1}},
    {input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
    {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
    {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }},
    {input: { r: 1, g: 1, b: 1}, output: {white: 1}}
]);

const result = net.run({r:0, g: 0.4,b: 0});
console.log(result);
const input = document.querySelector("color");
const block = document.querySelector("block");

input.addEventListener("change", (e) =>{
    block.style.color = '#ff0000'
})




/*net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}]);

var output = net.run([0, 0]);
console.log(output);*/