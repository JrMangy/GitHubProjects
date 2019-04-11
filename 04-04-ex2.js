var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];
const part1 = players.filter(player => player.firstName === 'Mike');
const part2 = players.filter(player => player.position === 'RB').map(player => player.firstName + ' ' + player.lastName);
const part3 = players.map(player => player.lastName);
const part4 = players.filter(player => (player.position === 'RB' && player.touchdowns > 5)).map(player => player.firstName + ' ' + player.lastName);
const part5 = players.filter(player => player.position === 'RB').reduce((sum, score) => sum + score.touchdowns,0);

// console.log(part1);
// console.log(part2);
//console.log(part3);
console.log(part4);
// console.log(part5);