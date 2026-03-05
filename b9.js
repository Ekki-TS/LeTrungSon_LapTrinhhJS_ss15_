
let percent = 0;

function increase() {

    if (percent < 100) {
        percent += 10;
    }

    updateBar();
}

function decrease() {

    if (percent > 0) {
        percent -= 10;
    }

    updateBar();
}

function updateBar() {

    let bar = document.getElementById("progress");

    bar.style.width = percent + "%";
    bar.innerText = percent + "%";

    let opacity = percent / 100;
    bar.style.background = "rgba(0,0,255," + opacity + ")";
}

