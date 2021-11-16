const popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__button-edit');
let closedButton = popup.querySelector('.popup__closed');
let buttonSave = document.querySelector('.popup__save');
let name = document.querySelector('.profile__name');
let profession = document.querySelector('.profile__profession');
let nameInput = document.querySelector('.popup__input_type_name');
let professionInput = document.querySelector('.popup__input_type_profession');

function popupOpen(){
    popup.classList.add('popup_visible');
    nameInput.placeholder = name.textContent;
    professionInput.placeholder = profession.textContent;
}

function popupClose(){
    popup.classList.remove('popup_visible');
}

function formSubmitHandler(){
    name.textContent = nameInput.value;
    profession.textContent = professionInput.value;
    popupClose();
}

editButton.addEventListener('click', popupOpen);
closedButton.addEventListener('click', popupClose);
buttonSave.addEventListener('click', formSubmitHandler);
evt.preventDefault();



/* Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);*/
