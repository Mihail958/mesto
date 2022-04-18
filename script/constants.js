export const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: '.popup__error',
    inputErrorClass: 'popup__input_type_error',
    errorvisibleClass: 'popup__error_visible',
    inactiveButtonClass: 'popup__button_disabled',
    submitButtonSelector: '.popup__button',
  }

// массив с карточками
export const initialCards = [
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

export const popupOpenImage = document.querySelector('.popup_type_image');

export const popupImage = document.querySelector('.popup__open-image');
export const popupImageCaption = document.querySelector('.popup__image-caption');

