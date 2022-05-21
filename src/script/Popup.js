export class Popup {
    constructor (popupSelector){
        this._popupSelector = document.querySelector(popupSelector);
    }

    open(){
        this._popupSelector.classList.add('popup_visible');
        document.addEventListener('keydown',  this._handleEscClose);
        document.addEventListener('click',  this._closePopupByClickOverlay);
    }

    close(){
        this._popupSelector.classList.remove('popup_visible');
        document.removeEventListener('click', this._closePopupByClickOverlay);
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {   
          if(evt.key === 'Escape') {
            this.close();
        }     
    }
    

    _closePopupByClickOverlay = (evt) => {
        if (evt.target.classList.contains('popup')){
            this.close();
        }
    }

    setEventListeners(){
        this._popupSelector.querySelector('.popup__closed').addEventListener('click', () => this.close())
      }
}