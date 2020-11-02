let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');

function showPopup() {
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click',  closePopup);

// Находим форму в DOM
let formElement = // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = // Воспользуйтесь инструментом .querySelector()
    let jobInput = // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);