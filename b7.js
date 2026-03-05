function showImage(img){
    let modal = document.getElementById("modal");
    let bigImg = document.getElementById("bigImg");

    modal.style.display = "flex";
    bigImg.src = img.src;
}

function closeImage(){
    document.getElementById("modal").style.display = "none";
}