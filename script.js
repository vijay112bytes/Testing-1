// OPEN SCROLL
function openInvite() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("scrollWrapper").classList.remove("hidden");

    startTyping();
}

// TYPING EFFECT
const text = "Rahul ❤️ Priya";
let i = 0;

function startTyping() {
    const el = document.getElementById("names");
    const interval = setInterval(() => {
        el.innerHTML += text[i];
        i++;
        if (i === text.length) clearInterval(interval);
    }, 100);
}

// MUSIC
const btn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

btn.onclick = () => {
    if (music.paused) music.play();
    else music.pause();
};
