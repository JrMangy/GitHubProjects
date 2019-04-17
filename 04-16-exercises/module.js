const Moment = require('moment');
class TimeStamp = {
    getPost(){
        console.log(new Moment().format('hh:mm:ss a'));
    }
};

const Request = require('request-promise');
class DataAccess = {
    interval: setInterval(function(){
        requ('http://jsonplaceholder.typicode.com/posts/' + postID).then(DataAccess.getPost);
},3000)
    };

    module.exports = {
        DataAccess,TimeStamp
    }