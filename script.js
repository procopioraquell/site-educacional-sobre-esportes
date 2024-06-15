let count = 1;
document.getElementById("slide1").checked = true;

setInterval(() => {
    nextImage();
}, 5000); // tempo de intervalo 

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }
    document.getElementById("slide" + count).checked = true;
}
