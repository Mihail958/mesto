export class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
  }

  //открытие попа
  open() {
    this._popup.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener('mousedown', this._closePopupByClickOverlay);
  }

  //закрытие попа
  close() {
    this._popup.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener('mousedown', this._closePopupByClickOverlay);
  }

  //закрытие попапа по эскейпу
  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  //закрытие попапа по куда хочешь тыкай
  _closePopupByClickOverlay = (e) => {
    if (e.target.classList.contains("popup")) {
      this.close();
    }
  };

  //слушатели попапа
  setEventListeners() {
    this._popup
      .querySelector(".popup__closed")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
