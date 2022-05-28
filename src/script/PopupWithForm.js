import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, { handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = this._form.querySelectorAll(".popup__input");
    this._buttonsSave = this._form.querySelector(".popup__save-button");
  }

  //собираем данные всех инпутов
  _getInputValues = () => {
    this._formValues = {};
    this._inputs.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  };

  changeSubmitHandler(newhandleFormSubmit) {
    this._handleFormSubmit = newhandleFormSubmit;
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(loading) {
    if (loading) {
      Array.from(this._buttonsSave).forEach((submit) => {
        submit.textContent = "Сохранение...";
      });
    } else {
      Array.from(this._buttonsSave).forEach((submit) => {
        submit.textContent = "Сохранить";
      });
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      //this.close();
    });
  }
}
