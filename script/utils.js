export const openPopup = (modal) => {
    modal.classList.add('popup_visible');
    document.addEventListener('keydown', closePopupByEscapeAndByClickOverlay);
  };