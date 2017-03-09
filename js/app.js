// Creating DOM Elements
const studentSearchContainer  = document.createElement('div');
const searchInput             = document.createElement('input');
const searchButton            = document.createElement('button');


// Adding classes, attributes & texts when needed
studentSearchContainer.classList.add('student-search');
searchInput.setAttribute('placeholder', 'Search for students...');
searchButton.textContent = "Search";


// Adding the elements to the parent node element first
studentSearchContainer.appendChild(searchInput);
studentSearchContainer.appendChild(searchButton);
// Then adding them to the DOM
document.querySelector('.page-header').appendChild(studentSearchContainer);
