import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._inputs = this._form.querySelectorAll(".popup__input");
    this._buttonsSave = this._form.querySelectorAll(".popup__save-button");
    this._firstInput = this._inputs[0];
    this._secondInput = this._inputs[1];
  }

  //собираем данные полей формы
  _getInputValues = () => {
    return {
        name: this._firstInput.value,
        link: this._secondInput.value,
    };
  };

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      //console.log(this._firstInput.value);
      //console.log(this._secondInput.value);
      this._handleFormSubmit(this._getInputValues());
      evt.preventDefault();
      this.close();
    });
  }
}
