  //Task 2- Adding Employee Cards Dynamically 
  function addEmployeeCard(name, position) {
    const container = document.getElementById('employeeContainer');
  
    // Create employee card
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');
  
    // Employee Name
    const nameElement = document.createElement('h2');
    nameElement.textContent = name;
  
    // Employee Position
    const positionElement = document.createElement('p');
    positionElement.textContent = position;
  
    // Remove Button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
  
    // Task 4 - Remove event with stopPropagation
    removeButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent event bubbling
      container.removeChild(card);
      console.log(`Removed card for ${name}`);
    });
  
    // 👉 Add name, position, and button to the card
    card.appendChild(nameElement);
    card.appendChild(positionElement);
    card.appendChild(removeButton);
  
    // Task 5 - Inline Editing on Double Click
    card.addEventListener('dblclick', () => {
      // Create inputs for editing
      const nameInput = document.createElement('input');
      nameInput.value = nameElement.textContent;
  
      const positionInput = document.createElement('input');
      positionInput.value = positionElement.textContent;
  
      const saveButton = document.createElement('button');
      saveButton.textContent = 'Save';
  
      // Save the updated values
      saveButton.addEventListener('click', () => {
        nameElement.textContent = nameInput.value;
        positionElement.textContent = positionInput.value;
  
        // Remove inputs and save button after saving
        card.removeChild(nameInput);
        card.removeChild(positionInput);
        card.removeChild(saveButton);
      });
  
      // Replace static content with input fields
      card.appendChild(nameInput);
      card.appendChild(positionInput);
      card.appendChild(saveButton);
    });
  
    // 👉 Add card to container
    container.appendChild(card);
  }
  
  // Example employee cards to test the function
document.addEventListener('DOMContentLoaded', () => {
    addEmployeeCard("Johnny Mac", "Engineer");
    addEmployeeCard("Adam Smith", "Manager");
    addEmployeeCard("Mark Pearson", "Data Scientist");
  });
  
  
  // Task 3 // Function to highlight all employee cards
  function highlightEmployeeCards() {
    const employeeCards = document.querySelectorAll('.employee-card');
    const employeeCardsArray = Array.from(employeeCards);
  
    employeeCardsArray.forEach(card => {
      card.style.backgroundColor = '#FFEB3B';
      card.style.border = '2px solid #FF9800';
    });
  }
  
  // Test case: Call the function after cards are added
  setTimeout(highlightEmployeeCards, 2000);
  
  
  // Task 4 - Applying Removal of Employee Cards with Event Bubbling
  const container = document.getElementById('employeeContainer');

  container.addEventListener('click', (event) => {
    if (event.target.classList.contains('employee-card')) {
      console.log(`Employee card clicked: ${event.target.querySelector('h2').textContent}`);
    }
  });