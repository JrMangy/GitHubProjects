const header =  document.getElementsByClassName('header');
const section = document.getElementsByTagName('section');
const current = document.querySelector('section.current')
const next = current.nextElementSibling;
const previous = current.parentElement.previousElementSibling.getElementsByTagName('h1');
const highlight = document.getElementsByTagName('div');





console.log(header);
console.log(section);
console.log(current);
console.log(next);
console.log(previous);
console.log(highlight);



/*
Get the header element-done
Get all the section elements-done
Get the section element with class="current"-done
Get the section that comes after the current section-done
Get the h2 node from the section before the 'current' section-done
Get the div that contains the section that has an h2 with a class of 'highlight'-done
Get all the sections that contain an H2 (using a single statement);
*/