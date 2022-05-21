import { FormValidator } from "../script/FormValidator.js";
import { validationSettings, initialCards } from "../script/constants.js";
import { Card } from "../script/Card.js";
import { Section } from "../script/Section.js";
import { PopupWithImage } from "../script/PopupWithImage.js";
import { PopupWithForm } from "../script/PopupWithForm.js";
import { UserInfo } from "../script/UserInfo.js";
import "../pages/index.css";

// Темплейты
const cardTemplateSelector = ".class-template";

// Враплеры
const cardlist = document.querySelector(".elements");
const popupProfileEdit = document.querySelector(".popup_type_profile-edit");
const popupAddCard = document.querySelector(".popup_type_add-cards");

// переменные
const nameInput = document.querySelector(".popup__input_type_name");
const professionInput = document.querySelector(".popup__input_type_profession");

// формы
const editForm = popupProfileEdit.querySelector(".popup__form_type_edit");
const addCardForm = popupAddCard.querySelector(".popup__form_type_add-card");

// обращения к классам
const editFormValidator = new FormValidator(validationSettings, editForm);
const addCardFormValidator = new FormValidator(validationSettings, addCardForm);
const popupImageOpen = new PopupWithImage(".popup_type_image");
const user = new UserInfo(".profile__name",".profile__profession");


editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// кнопки
const editButton = document.querySelector(".profile__button-edit");
const addCardButton = document.querySelector(".profile__button-add");

// функции
popupImageOpen.setEventListeners();

// Меняем информацию в профиле и сохраняем
const changeProfile = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      
      user.setUserInfo(data);
    },
  },
  ".popup_type_profile-edit"
);
changeProfile.setEventListeners();

// добавляем новые карточки
function createCard(cardData) {
  const newCard = new Card(cardData, cardTemplateSelector, handleCardClick);
  const newCardElement = newCard.getCardElement(); 
  return newCardElement 
}


const CardAdd = new PopupWithForm(
  {
    handleFormSubmit: (cardData) => {
      const  newCardElement = createCard(cardData);
      cardlist.prepend(newCardElement);
    },
  },
  ".popup_type_add-cards"
);
CardAdd.setEventListeners();

// функция открытия попапа с картинкой
function handleCardClick(name, link) {
  popupImageOpen.open(link, name);
}

// добавляем карточки из списка
const cardlistRender = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const  newCardElement = createCard(cardData);
      cardlist.prepend( newCardElement);
    },
  },
  ".elements"
);
cardlistRender.renderItems();

// события

addCardButton.addEventListener("click", function () {
  CardAdd.open();
  addCardFormValidator.resetValidation();
});

// открываем попап с профилем и передает информацию в инпуты
editButton.addEventListener("click", () => {
  const dataProfile = user.getUserInfo();
  const {name, profession} = dataProfile;
  nameInput.value = name;
  professionInput.value = profession;
  changeProfile.open();
});