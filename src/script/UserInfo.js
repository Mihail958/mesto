export class UserInfo {
  constructor({nameInputSelector, jobInputSelector, avatarSelector}) {
    this._name = document.querySelector(nameInputSelector);
    this._job = document.querySelector(jobInputSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  //возращает объект с данными пользователя
  getUserInfo(){ 
    return {
      name: this._name.textContent,
      about: this._job.textContent,
    }
  }

  //принимает данные и добавляет их на страницу
  setUserInfo(name, about, avatar){ 
    this._name.textContent = name;
    this._job.textContent = about;
    this._avatar.src = `${avatar}`;
    }
}

