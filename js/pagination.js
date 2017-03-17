// Selecting the elements already here inside the DOM
const studentItems = document.querySelectorAll('.student-item');

// Creating DOM Elements
const paginationContainer = document.createElement('div');
const paginationList = document.createElement('ul');


// Adding classes, attributes & texts when needed
paginationContainer.className = 'pagination';


// Adding the elements to the parent node element first
paginationContainer.appendChild(paginationList);
// Then adding them to the DOM
document.querySelector('.page').appendChild(paginationContainer);


// Creating the functions needes
    // Return the total number of pages
const numPages = () => Math.ceil(studentItems.length / 10) - 1;

    // Return the students selected by their range
const displayResults = (begin, end) => {
    for (let i = begin; i <= end; i++) {
        console.log(studentItems[i])
    }
};

    // Create the number of anchors needed
const pagination = () => {
    for (let i = 0; i < numPages(); i++) {
        // First create the elements
        let item = document.createElement('li');
        let anchor = document.createElement('a');
        // Then the text
        anchor.textContent = i + 1;
        // Then add them
        item.appendChild(anchor);
        paginationList.appendChild(item);
        // Then the event listener
        anchor.addEventListener('click', function(event) {
            let startAt = i * 10;
            let finishAt = startAt + 10 - 1;
            displayResults(startAt, finishAt);
        });
    }
}

// Finally, run the function
pagination();


// The event listeners
