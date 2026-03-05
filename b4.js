function checkEmail() {
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");

    if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))) {
        result.innerText = "email hợp lệ!";
        result.className = "valid";
    } else {
        result.innerText = "email không hợp lệ!";
        result.className = "invalid";
    }
}