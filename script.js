const weddingDate = new Date("April 25, 2026 18:00:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m left";

    if (diff < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "It's Wedding Time!";
    }
}, 1000);
