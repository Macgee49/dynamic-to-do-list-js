document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage on page load
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => {
          addTask(taskText, false); // 'false' prevents re-saving to Local Storage
      });
  }

  // Update Local Storage with current tasks
  function updateLocalStorage() {
      const tasks = [];
      // Loop through each task (li element) in the task list
      taskList.querySelectorAll('li').forEach(li => {
          // Retrieve the task text from the first text node of the li element
          const taskText = li.childNodes[0].nodeValue.trim();
          tasks.push(taskText);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to add a new task to the list
  // Parameter 'save' (default true) indicates whether to update Local Storage after adding
  function addTask(taskText = taskInput.value.trim(), save = true) {
      // If taskText is empty, alert the user (only if this is from user input)
      if (taskText === "") {
          if (save) alert("Please enter a task.");
          return;
      }

      // Create a new list item and add the task text
      const listItem = document.createElement('li');
      listItem.appendChild(document.createTextNode(taskText));

      // Create the remove button, add its class, and assign the removal event
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.classList.add('remove-btn');
      removeButton.onclick = () => {
          taskList.removeChild(listItem);
          updateLocalStorage();
      };

      // Append the remove button to the list item and the item to the task list
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);

      // If save is true, update Local Storage with the new task list
      if (save) updateLocalStorage();

      // Clear the input field
      taskInput.value = "";
  }

  // Attach event listener to the "Add Task" button
  addButton.addEventListener('click', () => addTask());

  // Attach event listener to the input field to add a task on "Enter" keypress
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') addTask();
  });

  // Load tasks from Local Storage when the page loads
  loadTasks();
});
