
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
function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play();
}
function playMusic() {
    const music = document.getElementById("bgMusic");

    if (music.paused) {
        music.play();
        event.target.innerText = "⏸ Pause Lagu";
    } else {
        music.pause();
        event.target.innerText = "🎵 Putar Lagu";
    }
}

// EFEK TYPING TEXT
const text = `Sejak tanggal 29 Desember 2025,
hidup aku berubah jadi lebih indah.

Setiap hari bersamamu adalah hadiah terindah yang pernah aku punya.
Terima kasih sudah hadir, sudah sabar, dan selalu ada untuk aku.

Walaupun kita baru 47 hari bersama,
rasanya seperti sudah lama banget.

Kamu bukan cuma pacar,
tapi juga tempat pulang dan alasan aku tersenyum setiap hari.

Happy Valentine Sayang 💕
Aku sayang kamu lebih dari yang bisa kata-kata jelaskan ❤️`;

let index = 0;
const speed = 40; // makin kecil makin cepat

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
