// shopping list factory function here
function ShoppingList () {
     
    var theBudget = 0;
    var itemsAdded = [{}];
    var description = "";
    var topicWord = "";
    var setPrice = 0;


    //A function for setting topicWord 
    function theTopicWord(theWord) {
        topicWord = theWord;
    }

    //A function for setting setting the description  
    function theDescriptionWord(theDescription)


    //A function for setting the budget
    function settingBudget(theAamount) {
        theBudget  = theAamount;
    }

    // A function for adding an item 
    function addingItem(item) {

        //if topic word is the same a description add item to the List
        if(description === topicWord || topicWord === "") {
            itemsAdded[{}]
        }
        

    }

    //A function for setting the price
    function settingPrice(thePrice) {

    }

    //A function for the total Price 
    function totalPrice () {

    }

    // A function for updating the total Budget
    function updatingBudget(theAamount) {
        theBudget = theAamount
    }


 return {
     settingBudget,
 }

}
