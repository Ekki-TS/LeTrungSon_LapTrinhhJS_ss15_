function doiMauNen() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let mau = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.backgroundColor = mau;
}