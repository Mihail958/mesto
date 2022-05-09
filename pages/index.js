import { formValidator } from "../script/FormValidator.js";
import { validationSettings, initialCards } from "../script/constants.js";
import { Card } from "../script/Card.js";
import { Section } from "../script/Section.js";
import { Popup } from "../script/Popup.js";
import { PopupWithImage } from "../script/PopupWithImage.js";
import { PopupWithForm } from "../script/PopupWithForm.js";
import { UserInfo } from "../script/UserInfo.js";

// Темплейты
const cardTemplateSelector = ".class-template";

// Враплеры
const cardlist = document.querySelector(".elements");
const popupProfileEdit = document.querySelector(".popup_type_profile-edit");
const popupAddCard = document.querySelector(".popup_type_add-cards");

// переменные
//const name = document.querySelector(".profile__name");
//const profession = document.querySelector(".profile__profession");
const nameInput = document.querySelector(".popup__input_type_name");
const professionInput = document.querySelector(".popup__input_type_profession");
const cardNameImput = document.querySelector(".popup__input_type_card-name");
const cardLinkImput = document.querySelector(".popup__input_type_card-link");

// формы
const editForm = popupProfileEdit.querySelector(".popup__form_type_edit");
const addCardForm = popupAddCard.querySelector(".popup__form_type_add-card");

// обращения к классам
const editFormValidator = new formValidator(validationSettings, editForm);
const addCardFormValidator = new formValidator(validationSettings, addCardForm);
export const closeAndOpenePopupProfile = new Popup(".popup_type_profile-edit");
export const closeAndOpenePopupAddCard = new Popup(".popup_type_add-cards");
export const closeAndOpenePopupImage = new Popup(".popup_type_image");
const popupImageOpen = new PopupWithImage(".popup_type_image");
const user = new UserInfo(".profile__name",".profile__profession");


editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// кнопки
const editButton = document.querySelector(".profile__button-edit");
const addCardButton = document.querySelector(".profile__button-add");

// функции

// Меняем информацию в профиле
const ChangeProfile = new PopupWithForm(
  {
    handleFormSubmit: (data) => {
      
      user.setUserInfo(data);
    },
  },
  ".popup_type_profile-edit"
);
ChangeProfile.setEventListeners();

// добавляем новые карточки
const CardAdd = new PopupWithForm(
  {
    handleFormSubmit: (cardData) => {
      const newCard = new Card(cardData, cardTemplateSelector, handleCardClick);
      const newCardElement = newCard.getCardElement();
      cardlist.prepend(newCardElement);
    },
  },
  ".popup_type_add-cards"
);
CardAdd.setEventListeners();

// функция открытия попапа с картинкой
function handleCardClick(name, link) {
  popupImageOpen.open(link, name);
  closeAndOpenePopupImage.setEventListeners();
}

// добавляем карточки из списка
const cardlistRender = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, cardTemplateSelector, handleCardClick);
      const cardElement = card.getCardElement();
      cardlist.prepend(cardElement);
      addCardFormValidator.resetValidation();
    },
  },
  ".elements"
);
cardlistRender.renderItems();

// события

addCardButton.addEventListener("click", function () {
  closeAndOpenePopupAddCard.open();
  closeAndOpenePopupAddCard.setEventListeners();
});

editButton.addEventListener("click", () => {
  const dataProfile = user.getUserInfo();
  const {name, profession} = dataProfile;
  nameInput.value = name;
  professionInput.value = profession;
  closeAndOpenePopupProfile.open();
  closeAndOpenePopupProfile.setEventListeners();
});