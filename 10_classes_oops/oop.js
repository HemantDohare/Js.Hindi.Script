const user = {
    username: "hemant",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from databse");
        //console.log(`Username: ${this .username}`);
        console.log(this);
    }
}

//console.log(user. username);
//console.log(user.getUserDetails());
//console.log(this);


function User(username , loginCount, isLoggedIn){
    this.username =username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
    }

    return this
}

const userOne = new User("hemant",12,true)
const userTwo = new User("hemu",11,false)
console.log(userOne );
//console.log(userTwo );