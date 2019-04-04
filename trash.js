var students = [
	{name: 'Cam Newton', average: 90},
	{name: 'Ted Ginn', average: 58},
	{name: 'Greg Olsen', average: 82}
];

var passingStudents = students.filter(function(student){
	return student.average > 60;
});

passingStudents === [
	{name: 'Cam Newton', average: 90},
	{name: 'Greg Olsen', average: 82}
];
console.log(passingStudents);