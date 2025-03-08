  // Container where employee cards will be added
const employeeContainer = document.getElementById('employeeContainer');
const addEmployeeButton = document.getElementById('addEmployeeButton');

// Employee data to demonstrate adding cards
const employees = [
  { name: "Johnny Mac", position: "Engineer" },
  { name: "Adam Smith", position: "Lead Manager" },
  { name: "Mark Pearson", position: "Data Scientist" }
];

// Function to create and add an employee card
function addEmployeeCard(employee) {
  // Create a new div for the employee card
  const card = document.createElement('div');
  card.classList.add('employee-card');  // Add a class for styling

  // Set a unique ID for the card
  card.setAttribute('id', `employee-${employee.name.replace(" ", "-")}`);

  // Create employee name and position elements
  const name = document.createElement('h3');
  name.textContent = employee.name;  // Setting name text
  const position = document.createElement('p');
  position.textContent = employee.position;  // Setting position text

  // Create a remove button for deleting the card
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-btn');  // Add a class for styling

  // Add an event listener to the remove button to delete the card when clicked
  removeButton.addEventListener('click', () => {
    employeeContainer.removeChild(card);  // Remove the card from the container
  });

  // Append the name, position, and button to the card
  card.appendChild(name);
  card.appendChild(position);
  card.appendChild(removeButton);

  // Append the card to the employee container
  employeeContainer.appendChild(card);
}

// Event listener to add a new employee card when the button is clicked
addEmployeeButton.addEventListener('click', () => {
  // Use the first employee as a sample to add (or modify as needed)
  const newEmployee = { name: "Jackson Brown", position: "MLS Designer" };
  addEmployeeCard(newEmployee);
});

employees.forEach(addEmployeeCard);