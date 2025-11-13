class User {
    constructor(username) {
        this.username = username
        this.isOnline = false
    }

    login() {
        this.isOnline = true
        console.log(`${this.username} has logged in!`)
    }

    logout() {
        this.isOnline = false
        console.log(`${this.username} has logged out!`)
    }
};

class Admin extends User {
    constructor(username) {
        super(username)
        this.isAdmin = true
    }

    doSecretAdminStuff() {
        console.log(`Doing secret admin stuff`)
    }
};

const jeff = new User('BarigasCat03');
const cooljeff = new Admin('EpicBarigasCat');

const users = [jeff, cooljeff];
users.forEach(u => u.login());