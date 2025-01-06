// Get elements
const addButton = document.getElementById('add-task');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
addButton.addEventListener('click', function() {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });
        li.appendChild(deleteButton);

        // Add event to mark as completed
        li.addEventListener('click', function() {
            taskSpan.classList.toggle('completed');
        });

        // Add the new task to the list
        todoList.appendChild(li);

        // Clear the input field
        todoInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});

// Optional: Allow pressing "Enter" to add a task
todoInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});