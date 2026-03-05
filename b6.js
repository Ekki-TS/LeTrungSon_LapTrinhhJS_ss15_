let size = 16; 

function increaseFont(){
    size += 2;
    document.getElementById("text").style.fontSize = size + "px";
}

function decreaseFont(){
    size -= 2;
    document.getElementById("text").style.fontSize = size + "px";
}