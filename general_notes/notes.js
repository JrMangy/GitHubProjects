/*counting = (y, z) => {
    for(let x=0;x<100;x++){
        if(x%(y*z) === 0){console.log(x + ' fizzbuzz')}
        else if(x%y === 0){console.log(x + ' fizz')}
        else if(x%z === 0){console.log(x + ' buzz')}
        else{console.log(x)}
    }
}*/
function count(){
    for(let i=0;i<100;i++){
    if(i % 15 == 0){
        console.log(`${i} - Get em`);
    }elseif(i % 3 == 0);{
        console.log(`${i} - Got`);
    }elseif(i % 5 == 0);{
        console.log(`${i} - That?`);
    }
}
}
setInterval(count(), 250);