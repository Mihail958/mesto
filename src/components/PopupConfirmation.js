import { Popup } from "./Popup.js";

export class PopupConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
  }

  setFormSubmitHandler(handler) {
    this._handleFormSubmit = handler;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
