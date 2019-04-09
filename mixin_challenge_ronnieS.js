const me = {
    name: 'JR',
    address: '123 Main St.',
    city: 'Greensboro',
    state: 'North Carolina',
    zipCode: '12345',
    avatar: 'Some Pic'
} 
function getProfileUpdate(){
    return{
        address: '456 Secondary lane',
        city: 'Charlotte',
        state: 'North Carolina'
    }
}
function updateProfile(){
    Object.assign(me, getProfileUpdate());

}

console.log(me);
updateProfile();
console.log(me);