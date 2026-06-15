
/* ==========================
   INICIALIZAR AOS
========================== */

AOS.init({
    duration: 1200,
    once: true
});

/* ==========================
   ABRIR INVITACIÓN
========================== */

const openingScreen = document.getElementById("opening-screen");
const openButton = document.getElementById("openInvitation");

const music = document.getElementById("backgroundMusic");

openButton.addEventListener("click", () => {

    openingScreen.style.opacity = "0";

    setTimeout(() => {
        openingScreen.style.display = "none";
    }, 1000);

    music.volume = 0.3;

    music.play().catch(() => {
        console.log("Autoplay bloqueado por el navegador");
    });

});

/* ==========================
   BOTÓN DE MÚSICA
========================== */

const musicButton = document.getElementById("musicToggle");

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.innerHTML = "🔊";

    } else {

        music.pause();

        musicButton.innerHTML = "🔇";

    }

});

/* ==========================
   CUENTA REGRESIVA
========================== */

const eventDate = new Date(
    "June 21, 2026 11:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML =
        days;

    document.getElementById("hours").innerHTML =
        hours;

    document.getElementById("minutes").innerHTML =
        minutes;

    document.getElementById("seconds").innerHTML =
        seconds;

}

setInterval(updateCountdown, 1000);

updateCountdown();

/* ==========================
   COMPARTIR INVITACIÓN
========================== */

const shareButton =
document.getElementById("shareButton");

shareButton.addEventListener("click", async () => {

    if (navigator.share) {

        navigator.share({

            title:
            "Confirmación de Carlos Jeampier Cueva Garrido",

            text:
            "Te invito a mi Confirmación.",

            url:
            window.location.href

        });

    } else {

        navigator.clipboard.writeText(
            window.location.href
        );

        alert(
            "Enlace copiado al portapapeles"
        );

    }

});

/* ==========================
   GOOGLE CALENDAR
========================== */

const calendarButton =
document.getElementById("calendarButton");

calendarButton.addEventListener("click", () => {

    const url =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Confirmación+Carlos+Jeampier+Cueva+Garrido" +
    "&dates=20260621T160000Z/20260621T190000Z" +
    "&details=Sacramento+de+la+Confirmación" +
    "&location=Iglesia+San+Sebastián+Loja";

    window.open(url, "_blank");

});

/* ==========================
   EFECTO PARALLAX SUAVE
========================== */

window.addEventListener(
    "scroll",
    () => {

        const hero =
        document.querySelector(".hero");

        const offset =
        window.pageYOffset;

        hero.style.backgroundPositionY =
        offset * 0.4 + "px";

    }
);

/* ==========================
   PARTÍCULAS DORADAS
========================== */

const particlesContainer =
document.getElementById(
    "particles-container"
);

for (let i = 0; i < 25; i++) {

    const particle =
    document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    (8 + Math.random() * 10) + "s";

    particle.style.animationDelay =
    Math.random() * 5 + "s";

    particlesContainer.appendChild(
        particle
    );

}

