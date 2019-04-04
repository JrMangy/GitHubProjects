const teacher = {
    name: 'Jimmy',
    sayName: function(){
        console.log(this.name);
    }
}
teacher.sayName()