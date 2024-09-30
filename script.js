function sale() {
    let saleDate = new Date(2024, 8, 25); // Укажите дату распродажи

    function updateTimer() {
        let currentDate = new Date();
        let dateDifference = saleDate - currentDate;

        // Проверка, если распродажа завершена
        if (dateDifference < 0) {
            document.querySelector('.time').innerHTML = '<h2>Скидка завершена!</h2>';
            return;
        }

        let days = Math.floor(dateDifference / (24 * 60 * 60 * 1000));
        let hours = Math.floor((dateDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        let minutes = Math.floor((dateDifference % (60 * 60 * 1000)) / (60 * 1000));

        let timeValue = document.getElementsByClassName("date");
        timeValue[0].innerHTML = String(days).padStart(2, '0'); // Дни
        timeValue[1].innerHTML = String(hours).padStart(2, '0'); // Часы
        timeValue[2].innerHTML = String(minutes).padStart(2, '0'); // Минуты
    }

    updateTimer(); // Устанавливаем начальные значения
    setInterval(updateTimer, 1000); // Обновляем каждую секунду
}

// Вызываем функцию sale, чтобы запустить таймер
sale();


let wrapper = document.querySelector(".wrapper");
let popUp = document.querySelector(".popUp");
let typ = document.querySelector(".thankYouPage");
let btns = document.querySelectorAll("section button");
let formBtn = document.querySelector(".form button");
let username = document.getElementsByName("username")[0];
let userphone = document.getElementsByName("userphone")[0];

// Добавление обработчиков событий для кнопок
btns.forEach(btn => {
    btn.addEventListener('click', showpopUp);
});

// Добавление обработчика события клика на wrapper
wrapper.addEventListener('click', hidepopUp);

// Функция для показа попапа
function showpopUp() {
    wrapper.style.display = "flex";
    popUp.style.display = "flex";
    typ.style.display = "none";
}

// Функция для скрытия попапа
function hidepopUp(event) {
    if (event.target === wrapper) {
        wrapper.style.display = "none";
    }
}

// Добавление обработчика события на кнопку формы
formBtn.addEventListener("click", sendForm);

// Функция для отправки формы
// Функция для отправки формы
function sendForm(event) {
    event.preventDefault();
    if (username.value.length > 1) {
        if (userphone.value.replace(/\D/g, '').length === 12) { // Теперь проверяем на 10 цифр
            showTYP(); // Показ страницы благодарности
        } else {
            console.log("Неверный номер");
        }
    } else {
        console.log("Короткое имя");
    }
}


// Функция для показа страницы благодарности
function showTYP() {
    console.log("Показ страницы благодарности");
    wrapper.style.display = "flex"; // Показываем wrapper
    popUp.style.display = "none"; // Скрываем попап
    typ.style.display = "flex"; // Показываем thankYouPage
}


// Функция для форматирования номера телефона
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.startsWith('998')) value = value.substring(3);
    if (value.length > 9) value = value.substring(0, 9);
    if (value.length > 0) {
        input.value = '+998(' + value.substring(0, 2);
        if (value.length > 2) {
            input.value += ')-' + value.substring(2, 5);
            if (value.length > 5) {
                input.value += '-' + value.substring(5, 7);
                if (value.length > 7) {
                    input.value += '-' + value.substring(7, 9);
                }
            }
        }
    } else {
        input.value = '+998';
    }
}

// Привязка обработчика события input к полю ввода номера
userphone.addEventListener('input', function() {
    formatPhone(userphone);
});
console.log(userphone.value.replace(/\D/g, ''));
