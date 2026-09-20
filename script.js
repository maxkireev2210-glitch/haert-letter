const scene = document.getElementById("scene");
const letter = document.getElementById("letter");

const openBtn = document.getElementById("openBtn");
const resetBtn = document.getElementById("resetBtn");

const overlay = document.getElementById("overlay");


openBtn.addEventListener("click", function () {

    scene.classList.add("open");

});


letter.addEventListener("click", function () {

    if (
        scene.classList.contains("open") &&
        !letter.classList.contains("expanded")
    ) {

        letter.classList.add("expanded");
        overlay.classList.add("active");

    }

});


overlay.addEventListener("click", function () {

    letter.classList.remove("expanded");
    overlay.classList.remove("active");

});


resetBtn.addEventListener("click", function () {

    letter.classList.remove("expanded");

    overlay.classList.remove("active");

    scene.classList.remove("open");

});