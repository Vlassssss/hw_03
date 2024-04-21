document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
})






function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
}



document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.form__registration');
    var popup = document.querySelector('.popup');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Зупиняємо стандартну подію відправки форми

        // Валідація полів Імені та Email
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var nameValue = nameInput.value.trim();
        var emailValue = emailInput.value.trim();

        // Валідація Імені: не пусте поле
        if (nameValue === '') {
            alert('Будь ласка, введіть ваше ім\'я.');
            return;
        }

        // Валідація Email: перевірка на валідний формат
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            alert('Будь ласка, введіть дійсну адресу електронної пошти.');
            return;
        }

        // Створення об'єкту зі значеннями полів
        var formData = {
            name: nameValue,
            email: emailValue
        };

        // Ви можете використовувати об'єкт formData зі значеннями полів форми
        console.log(formData);

        // Якщо всі поля пройшли валідацію, ви можете відправити дані форми
        // Тут ви можете написати код для відправки даних форми на сервер
        form.reset();
        // Після відправки можна очистити поля форми
        nameInput.value = '';
        emailInput.value = '';

        // Закриття форми після успішної відправки
        popup.style.display = 'none';
    });

    // Додавання обробника події для кнопки Esc
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            popup.style.display = 'none';
        }
    });


});


document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".benefits__link");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var targetId = this.getAttribute("data-target");
            var info = document.getElementById(targetId);

            if (info.style.display === "none") {
                info.style.display = "block";
            } else {
                info.style.display = "none";
            }
        });
    });
});

var swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });