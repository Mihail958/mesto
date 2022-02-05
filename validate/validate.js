function submitForm(event, form, classes){
    event.preventDefault();
}

function showError(input, errorContainer, {inputErrorClass, errorvisibleClass}) {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorvisibleClass);
    errorContainer.textContent = input.validationMessage;
}

function hideError(input, errorContainer, {inputErrorClass, errorvisibleClass}) {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorvisibleClass);
    errorContainer.textContent = '';
}

function enableSubmitButton(button, inactiveButtonClass) {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled'); 
}

function  disableSubmitButton(button, inactiveButtonClass) {
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', '');
}

function toggleButton(form, {submitButtonSelector, inactiveButtonClass}) {
    const button = form.querySelector(submitButtonSelector);
    const isFormValid = form.checkValidity();
    
    if (isFormValid) {
        enableSubmitButton(button, inactiveButtonClass);
    } else {
        disableSubmitButton(button, inactiveButtonClass);
    }
}

function validateInput(form, input, classes) {
    const errorContainer = form.querySelector(`#error-${input.id}`);
    if (input.validity.valid) {
        hideError(input, errorContainer, classes);
    } else {
        showError(input, errorContainer, classes);
    }
    toggleButton(form, classes);
}


const enableValidation = ({formElement, inputSelector, ...rest}) => {
    const forms = Array.from(document.querySelectorAll('.popup__form'));
    forms.forEach((form) => {
        form.addEventListener('submit', submitForm);
        const inputs = Array.from(form.querySelectorAll('.popup__input'));
        inputs.forEach((input) => {
                    input.addEventListener('input', () =>{
                    validateInput(form, input, rest);
                })
            });
            toggleButton(form, rest);
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: '.popup__error',
    inputErrorClass: 'popup__input_type_error',
    errorvisibleClass: 'popup__error_visible',
    inactiveButtonClass: 'popup__button_disabled',
    submitButtonSelector: '.popup__button',
  });
