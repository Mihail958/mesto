import {formValidator} from './FormValidator.js';
import {validationSettings, initialCards, popupOpenImage} from './constants.js';
import {openPopup} from './utils.js';
import {Card} from './Card.js';

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

  editFormValidator.enableValidation();
  addCardFormValidator.enableValidation();
  
  // кнопки 
  const editButton = document.querySelector('.profile__button-edit');
  const closedButtonPopupProfileEdit = document.querySelector('.popup__closed_type_profile-edit');
  const closedButtonPopupAddCards = document.querySelector('.popup__closed_type_add-cards');
  const closedButtonPopupOpenImage = document.querySelector('.popup__closed_type_image');
  const addCardButton = document.querySelector('.profile__button-add');
  const createCardButton = document.querySelector('.popup__create-card');
  
  
  // функции
  
  function  disableSubmitButton(button, inactiveButtonClass) {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', '');
 }

 function createCard(cardData) {
    const card = new Card(cardData, cardTemplateSelector); 
    const cardElement = card.getCardElement();
    return cardElement;
  }

  function renderCard(cardData){
    const cardElement = createCard(cardData);
    cardlist.prepend(cardElement);
    disableSubmitButton(createCardButton, validationSettings.inactiveButtonClass);
  } 
  
  initialCards.forEach((cardData) => {
    renderCard(cardData, cardlist)
  });

  
  function closePopup(modal) {
    modal.classList.remove('popup_visible');
    document.removeEventListener('click', closePopupByClickOverlay);
    document.removeEventListener('keydown', closePopupByEscape);
  }
  
  function savePopupProfil(){
    event.preventDefault();
    name.textContent = nameInput.value;
    profession.textContent = professionInput.value;
    closePopup(popupProfileEdit);
  }
  
  
  function addCardSave(){
    event.preventDefault();
    const cardNameValue = cardNameImput.value;
    const cardLinkValue = cardLinkImput.value;
    const obj = {
      name: cardNameValue,
      link: cardLinkValue
  } 
    renderCard(obj, cardlist); 
    closePopup(popupAddCard);
    cardNameImput.value = "";
    cardLinkImput.value = "";
  }

  export const closePopupByClickOverlay =(evt)=> {
    if (evt.target.classList.contains('popup')){
      const popupOpen = document.querySelector('.popup_visible');
      closePopup(popupOpen);
    }     
  } 
  
  export const closePopupByEscape =(evt)=> {
    if(evt.key === 'Escape') {
      const popupOpen = document.querySelector('.popup_visible');
      closePopup(popupOpen);
    }     
  } 
  
  // события
  editButton.addEventListener('click', () => {
    nameInput.value = name.textContent;
    professionInput.value = profession.textContent;
    openPopup(popupProfileEdit);
  });
  
  popupProfileEdit.addEventListener('submit', (event) =>{
    savePopupProfil();
  });
  
  addCardButton.addEventListener('click', function() {
    openPopup(popupAddCard);
  });
  
  closedButtonPopupProfileEdit.addEventListener('click', function()
    {closePopup(popupProfileEdit)
  });
  
  closedButtonPopupAddCards.addEventListener('click', function() 
  {closePopup(popupAddCard)
  });
  
  popupAddCard.addEventListener('submit', (event) => {
    addCardSave();
  });
  
  closedButtonPopupOpenImage.addEventListener('click',  function()
    {closePopup(popupOpenImage)
  });
  

 