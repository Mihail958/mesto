export class Card {
    constructor (cardData, cardTemplateSelector, handleCardClick) {
        this._cardData = cardData; 
        this.name = cardData.name; 
        this.link = cardData.link; 
        this._template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
        this._handleCardClick = handleCardClick;
    }

    _addlike = () => {
        this._addLikeButton.classList.toggle('element__like_active');
      }

    _deleteCard = () => {
        this._cardElement.remove();
      }


    // подписки
    _setEventListners() {
        this._deleteButton.addEventListener('click', this._deleteCard);
        this._addLikeButton.addEventListener('click', this._addlike);
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._cardData.name, this._cardData.link)
        });
  
    }

    _fillCard() {
        this._cardHeader.textContent = this._cardData.name;
        this._cardImage.src = this._cardData.link;
        this._cardImage.alt = this._cardData.name; 
    }


    getCardElement = () => {
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


