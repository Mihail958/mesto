export class Card{
  constructor(data, cardsTemplate, {handleCardClick}, handleDeleteClick, handleLikeClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._cardsTemplate = document.querySelector(cardsTemplate);
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() { //генерируем разметку
    const cardsTemplate = document.querySelector('.card-template')
    .content
    .querySelector('.element')
    .cloneNode(true)

    return cardsTemplate
  }

isLiked(){
  const userHasLikedCard = this._likes.find(user => user._id === this._userId);

  return userHasLikedCard
}

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeNumber = this._card.querySelector('.element__like-number');
    likeNumber.textContent = this._likes.length;

    const userHasLikedCard = this._likes.find(user => user._id === this._userId);
    if(this.isLiked()){
      this._addLikeCard()
    }
    else{
      this._removeLikeCard()
    }
  }

  _addLikeCard() { //ставим лайк
    this._buttonLike.classList.add('element__like_active')
  }

_removeLikeCard(){ //удаляем лайк
  this._buttonLike.classList.remove('element__like_active')
}

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._card.querySelector('.element__card-header').textContent = this._name;
    this._card.querySelector('.element__img').src= this._link;
    this._card.querySelector('.element__img').alt = this._name;
    
    this.setLikes(this._likes);

    if(this._ownerId !== this._userId){
      this._card.querySelector('.elements__button-delete').style.display = 'none'
    }

    return this._card;
  }

  deleteCard() { //удаление карточки
    this._card.remove();
  }

  _setEventListeners() { //делаем функцию-обработчик
  
    this._buttonLike = this._card.querySelector('.element__like');
    this._buttonDelete = this._card.querySelector('.elements__button-delete');
    
    this._buttonDelete.addEventListener('click', () => {
      this._handleDeleteClick(this._id)
    })

    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick(this._id)
    })

    this._card.querySelector('.element__img').addEventListener('click', this._handleCardClick)

  }
}
  
  
  

