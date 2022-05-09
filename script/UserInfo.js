export class UserInfo {
    constructor(nameSelector, professionSelector) {
        this._name = document.querySelector(nameSelector);
        this._profession = document.querySelector(professionSelector);
    }

    // возвращает объект с данными пользователя
    getUserInfo() {
        return {
            name: this._name.textContent,
            profession: this._profession.textContent
        }
    }

    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo ({name,link}) {
        console.log(name)
        console.log(link)
        this._name.textContent =  name;
        this._profession.textContent = link;
    }
}

