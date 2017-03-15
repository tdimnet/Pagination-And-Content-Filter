// Selecting the elements already here inside the DOM
const pageElt                 = document.querySelector('.page');
const pageHeader              = document.querySelector('.page-header');
const studentList             = document.querySelector('.student-list');
const studentsItem            = document.querySelectorAll('.student-item');


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
  // The not found title, by default, hidden
pageElt.insertBefore(notFoundTitle, studentList);
notFoundTitle.className = 'hidden';
  // Add the search box
pageHeader.appendChild(studentSearchContainer);


// The pagination function
function pagination() {
  // Start by creating a variable which holds all student with active statement
  let activeItem = document.querySelectorAll('.student-item');
  // Then loop through them and create sub arrays
  
}


// The search function
const searchForAName = () => {
  // Asigning the search input value
  let searchText = searchInput.value.toLowerCase();
  // If the search input is not filled in, show all students
  if (searchText.length === 0) {
    for (let i = 0; i < studentsItem.length; i++) {
      let studentContainer = studentsItem[i];
      studentContainer.className = 'student-item cf';
      notFoundTitle.className = 'hidden';
    }
  // Else search for the name
  } else {
    // Loop into the studentsArray in order to search for a name
    for (let i = 0; i < studentsItem.length; i++) {
      // Take the name within the h3 tag, build the variables needed
      let studentContainer  = studentsItem[i];
      let studentFullName   = studentsItem[i].querySelector('h3').textContent;
      studentFullName       = studentFullName.split(' ');
      let firstName         = studentFullName[0].toLowerCase();
      let lastName          = studentFullName[1].toLowerCase();
      // Then display the students who match
      if ( (firstName === searchText) || (lastName === searchText) ) {
        studentContainer.className = 'student-item cf';
      } else {
        // When student does not match, hide it
        studentContainer.className = 'not-active';
      }
    }

    // If all student are hidden, show not found title
    if (document.querySelectorAll('.not-active').length === studentsItem.length) {
      notFoundTitle.className = '';
    // Else, hide the not found title
    } else {
      notFoundTitle.className = 'hidden';
    }
  }
} // End: searchForAName function


// Create the event handlers
searchButton.onclick = searchForAName;
