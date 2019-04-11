function greetOnLoad () {
    var name = prompt("Hi! What's your name?");
    var myelement = document.getElementById("greeting");
    greeting.innerHTML= "Hello " + name + ", let's play!";
}

greetOnLoad();