import {closePopupByClickOverlay, closePopupByEscape} from './index.js'

export const openPopup = (modal) => {
    modal.classList.add('popup_visible');
    document.addEventListener('keydown', closePopupByEscape);
    document.addEventListener('click', closePopupByClickOverlay);
  };