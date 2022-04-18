import {openPopup} from './utils.js';
import {popupOpenImage, popupImage, popupImageCaption} from './constants.js' 


export class Card {
    constructor (cardData, cardTemplateSelector) {
        this._cardData = cardData; 
        this.name = cardData.name; 
        this.link = cardData.link; 
        this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element'); 
    }

    _addlike = () => {
        this._addLikeButton.classList.toggle('element__like_active');
      }

    _deleteCard = () => {
        this._cardElement.remove();
      }

    _prviewPicture = () => {
        popupImage.src = this._cardData.link;
        popupImage.alt = this._cardData.name;
        popupImageCaption.textContent = this._cardData.name;
        openPopup(popupOpenImage);
    }

    // подписки
    _setEventListners() {
        this._deleteButton.addEventListener('click', this._deleteCard);
        this._addLikeButton.addEventListener('click', this._addlike);
        this._cardImage.addEventListener('click', this._prviewPicture);
    }

    _fillCard() {
        this._cardHeader.textContent = this._cardData.name;
        this._cardImage.src = this._cardData.link;
        this._cardImage.alt = this._cardData.name; 
    }

    createCard = () => {
        // находим переменные
        this._cardElement = this._template.cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.element__img');
        this._cardHeader = this._cardElement.querySelector('.element__card-header');
        this._deleteButton = this._cardElement.querySelector('.element__delete');
        this._addLikeButton = this._cardElement.querySelector('.element__like');
       
        // заполнение
        this._fillCard();

        // слушатели
        this._setEventListners();

        return this._cardElement;
      }
}


