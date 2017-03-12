// Selecting the elements already here inside the DOM
const studentList             = document.querySelector('.student-list');
const studentsArray           = document.querySelectorAll('.student-details');


// Creating DOM Elements
const studentSearchContainer  = document.createElement('div');
const searchInput             = document.createElement('input');
const searchButton            = document.createElement('button');
const studentToShow           = [];


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
  const searchText = searchInput.value.toLowerCase();

  // If the search input is not filled in, show error
  if (searchText.length === 0) {
    alert('Please fill in the form..');
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
        // First, remove all the element within the student-list
        while (studentList.firstChild) {
          studentList.removeChild(studentList.firstChild);
        }
        // Then, add the new one inside the array
        studentToShow.push(studentContainer);
      } else {
        console.log('This name does not match!');
      }
    }
  }

  for (let i = 0; i < studentToShow.length; i++) {
    studentList.appendChild(studentToShow[i]);
  }

} // End: searchForAName function


// Create the event handlers
searchButton.onclick = searchForAName;
