  //Task 2- Adding Employee Cards Dynamically 
function addEmployeeCard(name, position) {
  const container = document.getElementById('employeeContainer');

  // Create card
  const card = document.createElement('div');
  card.setAttribute('class', 'employee-card');

  // Create heading for employee name
  const nameElement = document.createElement('h2');
  nameElement.textContent = name;

  const positionElement = document.createElement('p');
  positionElement.textContent = position;

  // Remove button creation 
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';

  // Add event to remove the employee card when the button is clicked
  removeButton.addEventListener('click', (event) => {
      event.stopPropagation(); // prevents the click event from bubbling (task 4)
      container.removeChild(card);
      console.log(`Removed card for ${name}`);
  });

 // Task 5 - Inline Editing of Employee Details 
 card.addEventListener('dblclick', () => {
  const nameInput = document.createElement('input');
  nameInput.value = nameElement.textContent;  // Pre-populate the name input
  const positionInput = document.createElement('input');
  positionInput.value = positionElement.textContent;  // Pre-populate the position input

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';

  saveButton.addEventListener('click', () => {
      nameElement.textContent = nameInput.value;
      positionElement.textContent = positionInput.value;

      // Remove the inputs and Save button
      card.removeChild(nameInput);
      card.removeChild(positionInput);
      card.removeChild(saveButton);
  });

  // Add input fields and save button
  card.appendChild(nameInput);
  card.appendChild(positionInput);
  card.appendChild(saveButton);
});

// Add name, position, and button to the card
card.appendChild(nameElement);
card.appendChild(positionElement);
card.appendChild(removeButton);

container.appendChild(card);
}

addEmployeeCard("Johnny Mac", "Engineer");
addEmployeeCard("Adam Smith", "Lead Manager");
addEmployeeCard("Mark Pearson", "Data Scientist");

// Task 3 - Applyinging NodeLists to Arrays for Bulk Updates
function highlightAllEmployeeCards() {
  const nodeList = document.querySelectorAll('.employee-card');
  const employeeCards = Array.from(nodeList);

  employeeCards.forEach(card => {
      card.style.backgroundColor = '#ffeb3b'; // Highlight with yellow background
      card.style.border = '2px solid #ff9800'; // Add an orange border
  });
}
  
// Test case: Call the bulk update after cards are added
setTimeout(highlightAllEmployeeCards, 2000);

// Task 4 - Applying Removal of Employee Cards with Event Bubbling
const container = document.getElementById('employeeContainer');
container.addEventListener('click', (event) => {
    if (event.target.classList.contains('employee-card')) {
        console.log(`Employee card clicked: ${event.target.querySelector('h2').textContent}`);
    }
});