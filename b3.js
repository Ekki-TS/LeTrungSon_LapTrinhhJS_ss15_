const adds = [];

function add1() {
    let elementInput = document.getElementById("add1");
    let value = elementInput.value.trim();

    if (value === "") {
        alert("Tên môn học không được để trống");
        return;
    }

    adds.push(value);

    let str = "";
    for (let i = 0; i < adds.length; i++) {
        str += `<li>${adds[i]}</li>`;
    }

    document.getElementById("list").innerHTML = `<ol>${str}</ol>`;

    elementInput.value = "";
    elementInput.focus();
}