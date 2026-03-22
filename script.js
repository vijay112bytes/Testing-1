// OPEN INVITE
function openInvite() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("scrollWrapper").classList.remove("hidden");

    startTyping();
    startPetals();
}

// TYPING
const text = "Rahul ❤️ Priya";
let i = 0;

function startTyping() {
    const el = document.getElementById("names");
    const interval = setInterval(() => {
        el.innerHTML += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, 120);
}

// MUSIC
const music = document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick = () => {
    music.paused ? music.play() : music.pause();
};

// PETALS 🌸
function startPetals() {
    const canvas = document.getElementById("petals");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let petals = [];

    for (let i = 0; i < 30; i++) {
        petals.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 6 + 4,
            speed: Math.random() * 1 + 0.5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        petals.forEach(p => {
            ctx.fillStyle = "#ffb6c1";
            ctx.beginPath();
            ctx.ellipse(p.x, p.y, p.size, p.size/2, 0, 0, Math.PI * 2);
            ctx.fill();

            p.y += p.speed;
            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(draw);
    }

    draw();
}
