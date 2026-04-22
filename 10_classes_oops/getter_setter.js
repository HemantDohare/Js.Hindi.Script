class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password} hemant`
    }

    set password(value){
        this._password = value
    }
}

const hemant = new User("h@gmail.com","abc1234");
console.log(hemant.password, hemant.email);