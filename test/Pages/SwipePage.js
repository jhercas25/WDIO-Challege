const Page = require('./Page.js');

class SwipePage extends Page{

    get swipeView (){return $('~Swipe-screen');}
  
    constructor(){
       super();
       this.waitForIsShown(this.swipeView);
    }

}

module.exports = SwipePage;