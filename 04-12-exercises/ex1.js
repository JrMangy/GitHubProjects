var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

button1.addEventListener("click", function(){
$.get('http://jsonplaceholder.typicode.com/posts', function(idk){
    document.getElementById("current").innerHTML = JSON.stringify(idk);
    });
});
button2.addEventListener("click",function(){
    $.get('http://jsonplaceholder.typicode.com/posts',{id: 10}, function(idk){
        document.getElementById("current").innerHTML = JSON.stringify(idk);
    })
})
button3.addEventListener("click",function(){
    $.get('http://jsonplaceholder.typicode.com/comments?postId=12', function(idk){
        console.log(idk);
        document.getElementById("current").innerHTML = JSON.stringify(idk);
    })
})
button4.addEventListener("click",function(){
    $.get('http://jsonplaceholder.typicode.com/posts',{userId:2},function(idk){
        document.getElementById("current").innerHTML = JSON.stringify(idk);
    })
})
button5.addEventListener("click",function(){
    $.post('http://jsonplaceholder.typicode.com/posts',function(idk){
        document.getElementById("current").innerHTML = JSON.stringify(idk);
    })
})
button6.addEventListener("click",function(){
    $.ajax({
        method: 'PUT',
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        complete: function(response){
            //handle response which usually includes the updated object.
            document.getElementById("current").innerHTML = JSON.stringify(response.responseJSON);
        }
    })
})

button7.addEventListener("click",function(){
        $.ajax({
            method: 'PUT',
            url: 'http://jsonplaceholder.typicode.com/posts/12',
            data: {
                title: "This Sucks",
            },complete: function(response){
                document.getElementById("current").innerHTML = JSON.stringify(response.responseJSON);
            }
        });
})

button8.addEventListener("click",function(){
    $.ajax({
        method: 'DELETE',
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        complete: function(){
            document.getElementById("current").innerHTML = 'Delete was a Success!!!';
        }
    })
})