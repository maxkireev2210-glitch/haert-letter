// Знаходимо конверт і лист
const envelope = document.querySelector(".envelope-container");
const letter = document.querySelector(".letter");

// Знаходимо кнопки
const openBtn = document.getElementById("openBtn");
const resetBtn = document.getElementById("resetBtn");


// ===== КНОПКА OPEN =====

openBtn.addEventListener("click", function () {

    // Відкриваємо конверт
    envelope.classList.add("open");

});


// ===== НАТИСКАННЯ НА ЛИСТ =====

letter.addEventListener("click", function () {

    // Працює тільки тоді,
    // коли конверт уже відкритий

    if (envelope.classList.contains("open")) {

        // Збільшуємо або зменшуємо лист
        letter.classList.toggle("expanded");

        // Затемнюємо фон
        document.body.classList.toggle("letter-open");

    }

});


// ===== КНОПКА RESET =====

resetBtn.addEventListener("click", function () {

    // Зменшуємо лист
    letter.classList.remove("expanded");

    // Прибираємо затемнення
    document.body.classList.remove("letter-open");

    // Закриваємо конверт
    envelope.classList.remove("open");

});