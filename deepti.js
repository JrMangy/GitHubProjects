const course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};
var deepti = course.students;
//var deepti2 = deepti.computer;
//console.log(deepti);
console.log (deepti.map( (student) => {
    if (student.computer.OS === 'OSX') {
        return student.name;
    }
}))
