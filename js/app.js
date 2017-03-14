// Selecting the elements already here inside the DOM
const studentsArray           = document.querySelectorAll('.student-item');


// Creating DOM Elements
const studentSearchContainer  = document.createElement('div');
const searchInput             = document.createElement('input');
const searchButton            = document.createElement('button');
const notFoundTitle           = document.createElement('h3');


// Adding classes, attributes & texts when needed
studentSearchContainer.classList.add('student-search');
searchInput.setAttribute('placeholder', 'Search for students...');
searchButton.textContent = "Search";
notFoundTitle.textContent = 'Nope, this name is not present';


// Adding the elements to the parent node element first
studentSearchContainer.appendChild(searchInput);
studentSearchContainer.appendChild(searchButton);
// Then adding them to the DOM
document.querySelector('.page-header').appendChild(studentSearchContainer);



function paginationLinks() {
  
}







// The search function
function searchForAName() {
  // Asigning the search input value
  const searchText = searchInput.value.toLowerCase();

  // If the search input is not filled in, show error
  if (searchText.length === 0) {
    for (let i = 0; i < studentsArray.length; i++) {
      let studentContainer = studentsArray[i];
      studentContainer.className = 'student-item cf';
    }
  // Else search for the name
  } else {
    // Loop into the studentsArray in order to search for a name
    for (let i = 0; i < studentsArray.length; i++) {
      // Take the name within the h3 tag, build the variables needed
      let studentContainer  = studentsArray[i];
      let studentFullName   = studentsArray[i].querySelector('h3').textContent;
      studentFullName       = studentFullName.split(' ');
      let firstName         = studentFullName[0].toLowerCase();
      let lastName          = studentFullName[1].toLowerCase();
      // Then check if the searchText = lastName ou firstName
      if ( (firstName === searchText) || (lastName === searchText) ) {
        studentContainer.className = 'student-item cf';
      } else {
        // Hide all students and display not found message
        studentContainer.className = 'not-active';
      }
    }
  }
} // End: searchForAName function


// Create the event handlers
searchButton.onclick = searchForAName;
