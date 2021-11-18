const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button-edit');
const closedButton = popup.querySelector('.popup__closed');
const buttonSave = document.querySelector('.popup__save');
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_profession');

function popupOpen(){
    popup.classList.add('popup_visible');
    nameInput.value = name.textContent;
    professionInput.value = profession.textContent;
}

function popupClose(){
    popup.classList.remove('popup_visible');
}

function formSubmitHandler(evt){
    evt.preventDefault();
    name.textContent = nameInput.value;
    profession.textContent = professionInput.value;
    popupClose();
}

editButton.addEventListener('click', popupOpen);
closedButton.addEventListener('click', popupClose);
buttonSave.addEventListener('click', formSubmitHandler);

