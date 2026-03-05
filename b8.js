
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = function () {
    renderTasks();
}

function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    tasks.push(value);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    renderTasks();
}

function renderTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
        <span>${task}</span>
        <div>
            <button onclick="editTask(${index})">Sửa</button>
            <button onclick="deleteTask(${index})">Xóa</button>
        </div>
        `;

        list.appendChild(li);

    });
}

function deleteTask(index) {

    if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {

        tasks.splice(index, 1);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
    }
}

function editTask(index) {

    let newTask = prompt("Chỉnh sửa công việc:", tasks[index]);

    if (newTask !== null && newTask.trim() !== "") {

        tasks[index] = newTask.trim();

        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
    }
}
