
function checkPin() {
    const correctPin = "29122025";
    const input = document.getElementById("pinInput").value;
    if (input === correctPin) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("error").innerText = "PIN salah 😢 coba lagi!";
    }
}

const images = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];
let i = 0;
setInterval(() => {
    i = (i + 1) % images.length;
    document.getElementById("slide").src = images[i];
}, 3000);

const startDate = new Date("2025-12-29");
setInterval(() => {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText =
        "Kita sudah bersama " + days + " hari 💕";
}, 1000);

function yesClick() {
    alert("aku akan selalu sayang kamu 💍💖");
}

const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
});
