// Selecting the elements already here inside the DOM
const studentsArray           = document.querySelectorAll('.student-details');


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


// The search function
function searchForAName() {
  // Asigning the search input value
  const searchText = searchInput.value;

  // If the search input is not filled in, show error
  if (searchText.length === 0) {
    alert('Please fill in the form..');
  // Else search for the name
  } else {
    console.log(searchText);
  }

} // End: searchForAName function


// Create the event handlers
searchButton.onclick = searchForAName;
