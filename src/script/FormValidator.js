export class FormValidator{
    constructor (settings, form) {
        this._form = form;
        this._settings = settings;   
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    }
    resetValidation =()=> {
        this._disableSubmitButton(); // управляем кнопкой
        this._inputList.forEach((inputElement) => {
          this._hideInpuyError(inputElement) //очищаем ошибки
        });
      }

    _showImputError = (inputElement, errorMessage) => {
        const {inputErrorClass, errorvisibleClass} = this._settings;

        const errorElement = this._form.querySelector(`#error-${inputElement.id}`);
        console.log(errorElement)
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorvisibleClass);
    };
    
    _hideInpuyError = (inputElement) => {
        const {inputErrorClass, errorvisibleClass} = this._settings;

        const errorElement = this._form.querySelector(`#error-${inputElement.id}`);
        inputElement.classList.remove(inputErrorClass);
        errorElement.classList.remove(errorvisibleClass);
        errorElement.textContent = '';
    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showImputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInpuyError(inputElement);
        };
    };

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _disableSubmitButton = () => {
        const {inactiveButtonClass} = this._settings;
        this._buttonElement.classList.add(inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

    _enableSubmitButton = () => {
        const {inactiveButtonClass} = this._settings;
        this._buttonElement.classList.remove(inactiveButtonClass);
        this._buttonElement.disabled = false;
    }

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._disableSubmitButton();
        } else {
            this. _enableSubmitButton();
        };
    };

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    enableValidation(formElement, rest) {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(formElement, rest);
    }

}




