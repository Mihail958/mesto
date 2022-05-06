import {formValidator} from '../script/FormValidator.js';
import {validationSettings, initialCards, popupImage, popupImageCaption} from '../script/constants.js';
import {Card} from '../script/Card.js';
import {Section} from '../script/Section.js';
import {Popup} from '../script/Popup.js';
import {PopupWithImage} from '../script/PopupWithImage.js';

  // Темплейты
  const cardTemplateSelector = '.class-template';

  // Враплеры
  const cardlist = document.querySelector('.elements');
  const popupProfileEdit= document.querySelector('.popup_type_profile-edit');
  const popupAddCard = document.querySelector('.popup_type_add-cards');
  
  
  // переменные
  const name = document.querySelector('.profile__name');
  const profession = document.querySelector('.profile__profession');
  const nameInput = document.querySelector('.popup__input_type_name');
  const professionInput = document.querySelector('.popup__input_type_profession');
  const cardNameImput = document.querySelector('.popup__input_type_card-name');
  const cardLinkImput = document.querySelector('.popup__input_type_card-link');
  

  const editForm = popupProfileEdit.querySelector('.popup__form_type_edit');
  const addCardForm = popupAddCard.querySelector('.popup__form_type_add-card');
  
  const editFormValidator = new formValidator(validationSettings, editForm);
  const addCardFormValidator = new formValidator(validationSettings, addCardForm);
  export const closeAndOpenePopupProfile = new Popup('.popup_type_profile-edit');
  export const closeAndOpenePopupAddCard = new Popup('.popup_type_add-cards');
  export const closeAndOpenePopupImage = new Popup('.popup_type_image');

  editFormValidator.enableValidation();
  addCardFormValidator.enableValidation();

  // кнопки 
  const editButton = document.querySelector('.profile__button-edit');
  const addCardButton = document.querySelector('.profile__button-add');
  
  
  // функции

  const popupImageOpen = new PopupWithImage('.popup_type_image');

  // функция открытия попапа с картинкой
  export function handleCardClick(name, link) {
    popupImageOpen.open(link, name);
    closeAndOpenePopupImage.setEventListeners();
  }
  
  // добавляем карточки из списка
  const cardlistRender = new Section({
    items: initialCards,
    renderer: (cardData) => {
      const card = new Card(cardData, cardTemplateSelector, handleCardClick);
      const cardElement = card.getCardElement();
      cardlist.prepend(cardElement);
      addCardFormValidator.resetValidation();
    }
  }, '.elements');
  cardlistRender.renderItems();
  

  function savePopupProfil(){
    event.preventDefault();
    name.textContent = nameInput.value;
    profession.textContent = professionInput.value;
    closeAndOpenePopupProfile.close();
  }
  
  // добавляем новые карточки 
  function addCardSave(){
    event.preventDefault();
    const cardNameValue = cardNameImput.value;
    const cardLinkValue = cardLinkImput.value;
    const obj = {
      name: cardNameValue,
      link: cardLinkValue
  } 
    const newCard = new Card(obj, cardTemplateSelector, handleCardClick);
    const newCardElement = newCard.getCardElement();
    cardlist.prepend(newCardElement);
    closeAndOpenePopupAddCard.close();
    cardNameImput.value = "";
    cardLinkImput.value = "";
  }
  
    /*const openPopupImage = new Card ({handleCardClick: () => popupImageOpen.open(data.link, data.name)});
    openPopupImage. */

  // события
  editButton.addEventListener('click', () => {
    nameInput.value = name.textContent;
    professionInput.value = profession.textContent;
    closeAndOpenePopupProfile.open();
    closeAndOpenePopupProfile.setEventListeners();
  });
  
  popupProfileEdit.addEventListener('submit', (event) =>{
    savePopupProfil();
  });
  
  addCardButton.addEventListener('click', function() {
    closeAndOpenePopupAddCard.open();
    closeAndOpenePopupAddCard.setEventListeners();
  });

  popupAddCard.addEventListener('submit', (event) => {
    addCardSave();
  });

 // popupImageOpen.setEventListeners();
  
 

 