// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is empty and alert the user if so
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new list item and set its text to the task description
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Assign an event to remove the list item when the remove button is clicked
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // Append the remove button to the list item
        listItem.appendChild(removeBtn);

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Add click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow tasks to be added by pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
