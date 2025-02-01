// Select elements
const addButton = document.querySelector('.addbox button');
const inputField = document.querySelector('.addbox input');
const taskList = document.querySelector('.tasklist');

// Function to add a new task
function addTask() {
    const taskText = inputField.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create task component
    const taskComponent = document.createElement('div');
    taskComponent.classList.add('taskcomponent');

    // Create checkbox and text
    const checkDiv = document.createElement('div');
    checkDiv.classList.add('check');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    checkDiv.appendChild(checkbox);
    checkDiv.appendChild(taskSpan);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('cross');
    deleteButton.innerHTML = '<i class="fa fa-close"></i>';

    // Append components
    taskComponent.appendChild(checkDiv);
    taskComponent.appendChild(deleteButton);
    taskList.appendChild(taskComponent);

    // Clear input field
    inputField.value = '';

    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskComponent);
    });

    // Add event listener to checkbox for completion styling
    checkbox.addEventListener('change', () => {
        taskSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });
}

// Add event listener to the Add button
addButton.addEventListener('click', addTask);

// Add event listener for "Enter" key press
inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
