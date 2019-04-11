// Part 1
const list = document.querySelector('#list');
list.children[1].innerHTML = 'Fair Trade Coffee';

// Part 2
list.children[3].remove();

// Part 3
const newItem = document.createElement('li');
newItem.innerHTML = "Cheese Whiz"
list.appendChild(newItem);

// Part 4
list.innerHTML="";
var x = 0;
const array = ["Protein Powder", "Muscle Milk", "Power Bars"];
for(i=0;i<array.length;i++){
    const newerItem = document.createElement('li');
    newerItem.innerHTML = array[x];
    list.appendChild(newerItem);
    x++;
}
/*["Protein Powder", "Muscle Milk", "Power Bars"].forEach(function(items){
    const jimmy = document.createElement('li');
    jimmy.innerHTML = items;
    list.appendChild(jimmy);
});*/

// Part 5
list.children[1].className = "Not That Important!"
/*
Update the 'Coffee' item to say 'Fair Trade Coffee'-done
Remove 'Twinkies' from the list-done
Add an item 'Cheese Whiz'-done
Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
Add the class 'important' to the muscle milk item.
*/