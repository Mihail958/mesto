// переменные
const name = document.querySelector('.profile__name');
const profession = document.querySelector('.profile__profession');
const nameInput = document.querySelector('.popup__input_type_name');
const professionInput = document.querySelector('.popup__input_type_profession');
const Cardlist = document.querySelector('.elements');
const CardTemplate = document.querySelector('.class-template').content;
const CardNameImput = document.querySelector('.popup__input_type_card-name');
const CardLinkImput = document.querySelector('.popup__input_type_card-link');
const popupImage = document.querySelector('.popupe__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

// Попапы
const popup = document.querySelector('.popup');
const popupProfileEdit= document.querySelector('.popup__profile-edit');
const popupAddCard = document.querySelector('.popup__add-cards');
const popupOpenImage = document.querySelector('.popup_type_image');

// кнопки 
const editButton = document.querySelector('.profile__button-edit');
const closedButtonPopupProfileEdit = document.querySelector('.popup__closed_profile-edit');
const closedButtonPopupAddCards = document.querySelector('.popup__closed_add-cards');
const closedButtonPopupOpenImage = document.querySelector('.popup_type_image__closed');
const buttonSave = document.querySelector('.popup__save');
const addCardButton = document.querySelector('.profile__button-add');
const CreateCardButton = document.querySelector('.popup__create-card');


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

// функции

function DeleteCard(e) {
  e.target.closest('.element').remove();
}

function Addlike (e){
  e.target.closest('.element__like').classList.toggle('element__like_active');
}


function CreateCard(cardData){
  const CardElement = CardTemplate.cloneNode(true);
  const CardImage = CardElement.querySelector('.element__img');
  const CardHeader = CardElement.querySelector('.element__card-header');
  const DeleteButton = CardElement.querySelector('.element__delete');
  const AddLikeButton = CardElement.querySelector('.element__like');
  CardHeader.textContent = cardData.name;
  CardImage.src = cardData.link;
  Cardlist.prepend(CardElement);

  function OpenImage() {
    popupImage.src = cardData.link;
    popupImageCaption.textContent = cardData.name;
    popupOpenImage.classList.add('popup_visible');
  }

  DeleteButton.addEventListener('click', DeleteCard);
  AddLikeButton.addEventListener('click', Addlike);
  CardImage.addEventListener('click', OpenImage);
}

initialCards.forEach(CreateCard);



function popup__profile_edit_Open(){
    popupProfileEdit.classList.add('popup_visible');
    nameInput.value = name.textContent;
    professionInput.value = profession.textContent;
}

function popup__profile_edit_Close(){
    popupProfileEdit.classList.remove('popup_visible');
}

function popup__add_cards_Open (){
    popupAddCard.classList.add('popup_visible');
}

function popup__add_cards_Close (){
    popupAddCard.classList.remove('popup_visible');
}


function formSubmitHandler(evt){
    evt.preventDefault();
    name.textContent = nameInput.value;
    profession.textContent = professionInput.value;
    popup__profile_edit_Close();
}

function popupOpenImage_Close () {
  popupOpenImage.classList.remove('popup_visible');
}

// события
editButton.addEventListener('click', popup__profile_edit_Open);

buttonSave.addEventListener('click', formSubmitHandler);

addCardButton.addEventListener('click', popup__add_cards_Open);

closedButtonPopupProfileEdit.addEventListener('click', popup__profile_edit_Close);

closedButtonPopupAddCards.addEventListener('click', popup__add_cards_Close);

CreateCardButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  const CardNameValue = CardNameImput.value;
  const CardLinkValue = CardLinkImput.value;
  const obj = {
    name: CardNameValue,
    link: CardLinkValue
}
  CreateCard(obj);
  popup__add_cards_Close ();
});

closedButtonPopupOpenImage.addEventListener('click', popupOpenImage_Close);








