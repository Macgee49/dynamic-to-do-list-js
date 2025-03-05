document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
      // Retrieve and trim the task input
      const taskText = taskInput.value.trim();

      // Check if the input is empty
      if (taskText === "") {
          alert("Please enter a task.");
          return;
      }

      // Create a new list item (li) and set its text content to taskText
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      // Use classList.add to assign the 'remove-btn' class
      removeButton.classList.add('remove-btn');

      // Assign an onclick event to the remove button that removes the li element
      removeButton.onclick = () => {
          taskList.removeChild(listItem);
      };

      // Append the remove button to the li element
      listItem.appendChild(removeButton);
      // Append the li element to the task list
      taskList.appendChild(listItem);
      // Clear the task input field
      taskInput.value = "";
  }

  // Attach an event listener to addButton to call addTask on click
  addButton.addEventListener('click', addTask);

  // Attach an event listener to taskInput for the 'keypress' event to allow adding tasks with the "Enter" key
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});
