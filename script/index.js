let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let title = document.querySelector('.profile__title');
let subTitle = document.querySelector('.profile__subtitle');

// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_type_title'); // Воспользуйтесь инструментом .querySelector()

function showPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = title.textContent;
    jobInput.value = subTitle.textContent;
}

editButton.addEventListener('click', showPopup);

function closePopup() {
    popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click',  closePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (event) {
    event.preventDefault();
    title.textContent = nameInput.value;
    subTitle.textContent = jobInput.value;
    closePopup()
}

formElement.addEventListener('submit', formSubmitHandler);