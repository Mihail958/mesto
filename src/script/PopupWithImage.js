import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this._popup.querySelector(".popup__open-image");
    this._name = this._popup.querySelector(".popup__image-caption");
  }

  open(link, name) {
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._name.textContent = name;
  }
}
