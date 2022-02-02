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
  e.target.closest('.element__like').classList.toggle('element__like_active');
}

function createCard(cardData){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.element__img');
  const cardHeader = cardElement.querySelector('.element__card-header');
  const deleteButton = cardElement.querySelector('.element__delete');
  const addLikeButton = cardElement.querySelector('.element__like');
 
  cardHeader.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = "Фотокарточка";

  deleteButton.addEventListener('click', deleteCard);
  addLikeButton.addEventListener('click', addlike);
  cardImage.addEventListener('click', function(){
    popupImage.src = cardData.link;
    popupImage.alt = "Фотокарточка";
    popupImageCaption.textContent = cardData.name;
    togglePopup(popupOpenImage)
  });

  return cardElement;
}

function renderCard(cardData){
  const card = createCard(cardData);
  cardlist.prepend(card);
}

initialCards.forEach(renderCard);


function togglePopup (modal){
  modal.classList.toggle('popup_visible');
}

function popupProfilSave(){
  event.preventDefault();
  name.textContent = nameInput.value;
  profession.textContent = professionInput.value;
  togglePopup(popupProfileEdit);
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
  togglePopup(popupAddCard);
  cardNameImput.value = "";
  cardLinkImput.value = "";
}

function profileKeyHandler(evt) {
  if (evt.key === 'Enter') {
    popupProfilSave();
  }
}

function addCardKeyHandler(evt) {
  if (evt.key === 'Enter') {
    addCardSave();
  }
}

function closePopupByClickOverlay(e) {
  if (e.target.classList.contains('popup')){
    e.target.closest('.popup').classList.remove('popup_visible');
  }  
};

function closePopupByEscape(evt) {
  if(evt.key === 'Escape') {
    document.querySelector('.popup_visible').classList.remove('popup_visible');
    console.log('проверка кгопки Escape')
  }
};

// события
editButton.addEventListener('click', () => {
  nameInput.value = name.textContent;
  professionInput.value = profession.textContent;
  togglePopup(popupProfileEdit);
});

popupProfileEdit.addEventListener('submit', (event) =>{
  popupProfilSave();
});

addCardButton.addEventListener('click', function() 
{togglePopup(popupAddCard)
});

closedButtonPopupProfileEdit.addEventListener('click', function()
  {togglePopup(popupProfileEdit)
});

closedButtonPopupAddCards.addEventListener('click', function() 
{togglePopup(popupAddCard)
});

popupAddCard.addEventListener('submit', (event) => {
  addCardSave();
});

nameInput.addEventListener('keydown', profileKeyHandler);
professionInput.addEventListener('keydown', profileKeyHandler);
cardNameImput.addEventListener('keydown', addCardKeyHandler);
cardLinkImput.addEventListener('keydown', addCardKeyHandler);

closedButtonPopupOpenImage.addEventListener('click',  function()
  {togglePopup(popupOpenImage)
});

popupProfileEdit.addEventListener('click', closePopupByClickOverlay);
popupAddCard.addEventListener('click', closePopupByClickOverlay);
popupOpenImage.addEventListener('click', closePopupByClickOverlay);
document.addEventListener('keydown', closePopupByEscape);






