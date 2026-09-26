// ==========================================
// ОТРИМУЄМО ЕКРАНИ
// ==========================================

const screens = document.querySelectorAll(".screen");

const homeScreen = document.getElementById("homeScreen");
const menuScreen = document.getElementById("menuScreen");


// ==========================================
// ФУНКЦІЯ ПЕРЕМИКАННЯ ЕКРАНІВ
// ==========================================

function showScreen(screenId) {

    screens.forEach((screen) => {
        screen.classList.remove("active");
    });

    const targetScreen = document.getElementById(screenId);

    if (targetScreen) {
        targetScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// КОНВЕРТ
// ==========================================

const envelope = document.getElementById("startEnvelope");

let envelopeOpened = false;

envelope.addEventListener("click", () => {

    // Щоб не натиснути двічі
    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    // Запускаємо анімацію
    envelope.classList.add("open");


    // Через 1.4 секунди відкриваємо меню
    setTimeout(() => {

        showScreen("menuScreen");

    }, 1400);

});


// ==========================================
// 4 КНОПКИ СЮРПРИЗІВ
// ==========================================

const surpriseCards =
    document.querySelectorAll(".surprise-card");

surpriseCards.forEach((card) => {

    card.addEventListener("click", () => {

        const target =
            card.getAttribute("data-target");

        showScreen(target);

    });

});


// ==========================================
// КНОПКИ BACK
// ==========================================

const backButtons =
    document.querySelectorAll(".back-button");

backButtons.forEach((button) => {

    button.addEventListener("click", () => {

        showScreen("menuScreen");

    });

});


// ==========================================
// КНОПКА ♡ У МЕНЮ
// ПОВЕРТАЄ НА ПОЧАТОК
// ==========================================

const homeButton =
    document.querySelector(".home-button");

if (homeButton) {

    homeButton.addEventListener("click", () => {

        // Закриваємо конверт для повторного перегляду
        envelope.classList.remove("open");

        envelopeOpened = false;

        showScreen("homeScreen");

    });

}


// ==========================================
// MUSIC PLAYER
// ==========================================

const song =
    document.getElementById("ourSong");

const musicBtn =
    document.getElementById("musicBtn");

const vinyl =
    document.getElementById("vinyl");


if (song && musicBtn && vinyl) {

    musicBtn.addEventListener("click", () => {

        // Якщо музика зараз зупинена
        if (song.paused) {

            song.play()
                .then(() => {

                    musicBtn.textContent =
                        "⏸ PAUSE MUSIC";

                    vinyl.classList.add("playing");

                })
                .catch((error) => {

                    console.log(
                        "Не вдалося запустити музику:",
                        error
                    );

                });

        }

        // Якщо музика грає
        else {

            song.pause();

            musicBtn.textContent =
                "▶ PLAY MUSIC";

            vinyl.classList.remove("playing");

        }

    });


    // Коли пісня закінчилася
    song.addEventListener("ended", () => {

        musicBtn.textContent =
            "▶ PLAY AGAIN";

        vinyl.classList.remove("playing");

        song.currentTime = 0;

    });

}


// ==========================================
// ЗУПИНЯЄМО МУЗИКУ ПРИ ПОВЕРНЕННІ
// ==========================================

backButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (song && !song.paused) {

            song.pause();

            vinyl.classList.remove("playing");

            musicBtn.textContent =
                "▶ PLAY MUSIC";

        }

    });

});// =========================================
// АНІМАЦІЯ "НАША ІСТОРІЯ"
// =========================================

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

timelineItems.forEach((item) => {
    timelineObserver.observe(item);
});