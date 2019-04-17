let username = document.querySelector('input#userName');
let submit = document.querySelector('input[type="submit"]');
submit.addEventListener("click",event =>{

});

function findUser(userName){
    return new Promise(function(resolve,reject){
        $.get('http://jsonplaceholder.typicode.com/users?username=' + userName, function(user){
            if (user.length){
                resolve(user[0]);
            }else{
                reject('its raw');
            }
        })
    })
}

function getUserPosts(user){
    return new Promise(function(resolve, reject){
        $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user,
        function(posts){
            resolve(posts);
        })
    })
}

function getAlbum(user){
    return new Promise(function(resolve, reject){
        $.get('http://jsonplaceholder.typicode.com/albums?user')
    })
}

var submit = document.getElementById("submit");
submit.getElementById("click",function(){

})
