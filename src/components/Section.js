export class Section {
  constructor({items, renderer}, container){
    this._initialCards = items;
    this._renderer = renderer; 

    this._container = document.querySelector(container);
  }


//принимает параметр и вставляет его в разметку
  addItem(element){ 
    this._container.prepend(element);
  }

//перебор массива
  renderItems(items){
    items.forEach(item => this._renderer(item));
  }

}