export class Card {
  constructor(
    data,
    cardsTemplate,
    { handleCardClick },
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._cardsTemplate = cardsTemplate;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    //генерируем разметку
    const cardsTemplate = document
      .querySelector(this._cardsTemplate)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardsTemplate;
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(
      (user) => user._id === this._userId
    );

    return userHasLikedCard;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likeNumber.textContent = this._likes.length;

    if (this.isLiked()) {
      this._addLikeCard();
    } else {
      this._removeLikeCard();
    }
  }

  _addLikeCard() {
    //ставим лайк
    this._buttonLike.classList.add("element__like_active");
  }

  _removeLikeCard() {
    //удаляем лайк
    this._buttonLike.classList.remove("element__like_active");
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setEventListeners();

    this._card.querySelector(".element__card-header").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._card.querySelector(".elements__button-delete").style.display =
        "none";
    }

    return this._card;
  }

  deleteCard() {
    //удаление карточки
    this._card.remove();
  }

  _setEventListeners() {
    //делаем функцию-обработчик

    this._buttonLike = this._card.querySelector(".element__like");
    this._buttonDelete = this._card.querySelector(".elements__button-delete");
    this._likeNumber = this._card.querySelector(".element__like-number");
    this._cardImage = this._card.querySelector(".element__img");

    this._buttonDelete.addEventListener("click", () => {
      this._handleDeleteClick(this._id);
    });

    this._buttonLike.addEventListener("click", () => {
      this._handleLikeClick(this._id);
    });

   
    this._cardImage.addEventListener("click", this._handleCardClick);
  }
}
