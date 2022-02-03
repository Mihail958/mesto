// массив с карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// переменные
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_profession');
const cardlist = document.querySelector('.elements');
const cardTemplate = document.querySelector('.class-template').content;
const cardNameImput = document.querySelector('.popup__input_type_card-name');
const cardLinkImput = document.querySelector('.popup__input_type_card-link');
const popupImage = document.querySelector('.popup__open-image');
const popupImageCaption = document.querySelector('.popup__image-caption');


// Попапы
const popupProfileEdit= document.querySelector('.popup_type_profile-edit');
const popupAddCard = document.querySelector('.popup_type_add-cards');
const popupOpenImage = document.querySelector('.popup_type_image');

// кнопки 
const editButton = document.querySelector('.profile__button-edit');
const closedButtonPopupProfileEdit = document.querySelector('.popup__closed_type_profile-edit');
const closedButtonPopupAddCards = document.querySelector('.popup__closed_type_add-cards');
const closedButtonPopupOpenImage = document.querySelector('.popup__closed_type_image');
const buttonSave = document.querySelector('.popup__save');
const addCardButton = document.querySelector('.profile__button-add');
const createCardButton = document.querySelector('.popup__create-card');


// функции

function deleteCard(e) {
  e.target.closest('.element').remove();
}

function addlike (e){
  e.target.classList.toggle('element__like_active');
}

function createCard(cardData){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__img');
  const cardHeader = cardElement.querySelector('.element__card-header');
  const deleteButton = cardElement.querySelector('.element__delete');
  const addLikeButton = cardElement.querySelector('.element__like');
 
  cardHeader.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  deleteButton.addEventListener('click', deleteCard);
  addLikeButton.addEventListener('click', addlike);
  cardImage.addEventListener('click', function(){
    popupImage.src = cardData.link;
    popupImageCaption.textContent = cardData.name;
    openPopup(popupOpenImage);
  });

  disabledCreateCardButton();
  return cardElement;
}

function disabledCreateCardButton() {
  createCardButton.setAttribute('disabled', '');
  createCardButton.classList.add('popup__button_disabled');
}

function renderCard(cardData){
  const card = createCard(cardData);
  cardlist.prepend(card);
}

initialCards.forEach(renderCard);

function openPopup (modal) {
  modal.classList.add('popup_visible');
}

function closePopup(modal) {
  modal.classList.remove('popup_visible');
}

function popupProfilSave(){
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
  renderCard(obj);
  closePopup(popupAddCard);
  cardNameImput.value = "";
  cardLinkImput.value = "";
}

function closePopupByClickOverlay(e) {
  if (e.target.classList.contains('popup')){
    e.target.closest('.popup').classList.remove('popup_visible');
  }  
};

function closePopupByEscape(evt) {
  if(evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_visible');
    closePopup(popupOpen);
  }
};

// события
editButton.addEventListener('click', () => {
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
  openPopup(popupProfileEdit);
});

popupProfileEdit.addEventListener('submit', (event) =>{
  popupProfilSave();
});

addCardButton.addEventListener('click', function() 
{openPopup(popupAddCard)
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

popupProfileEdit.addEventListener('click', closePopupByClickOverlay);
popupAddCard.addEventListener('click', closePopupByClickOverlay);
popupOpenImage.addEventListener('click', closePopupByClickOverlay);
document.addEventListener('keydown', closePopupByEscape);






