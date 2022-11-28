const Page = require('./Page.js');
const LoginPage = require('../Pages/LoginPage.js')

class HomePage extends Page{

    get homeView (){return $('~Home-screen');}
    get loginOption (){ return $('~Login');}
    get swipeOption(){return $('~Swipe');}

    constructor(){
       super();
       this.waitForIsShown(this.homeView);
    }

    async goToLogin(){
        await this.changeViewTo(this.loginOption)
        return  new LoginPage();
    }

}

module.exports = HomePage;