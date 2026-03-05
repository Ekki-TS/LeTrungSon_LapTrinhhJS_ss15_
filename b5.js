let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Không được để trống nhiệm vụ");
        return;
    }

    tasks.push(value);
    input.value = "";

    renderTask();
}

function renderTask() {
    let str = "";

    for (let i = 0; i < tasks.length; i++) {
        str += `
        <div class="task">
            <span>${tasks[i]}</span>
            <button class="delete" onclick="deleteTask(${i})">X</button>
        </div>
        `;
    }

    document.getElementById("taskList").innerHTML = str;
}

function deleteTask(index) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa nhiệm vụ này?");

    if (confirmDelete) {
        tasks.splice(index, 1);
        renderTask();
    }
}