
function totalNumberSold(applesSoldList) {
	var numberOfappleSold = 0;
        for (var i = 0; i < applesSoldList.length; i++) {
               numberOfappleSold = numberOfappleSold + applesSoldList[i].qty;
             }
        return numberOfappleSold;
}

function totalIncome(applesSoldList) {

	var totalIcome = 0;
        for (var i = 0; i < applesSoldList.length; i++) {
			   totalIcome += applesSoldList[i].price * applesSoldList[i].qty;
             }
        return totalIcome;
}

function totalIncomeGreenApples(applesSoldList){
	var totalIcome = 0;
        for (var i = 0; i < applesSoldList.length; i++) {

			  if(applesSoldList[i].color === "green") {
				  totalIcome +=  applesSoldList[i].price * applesSoldList[i].qty;
			  }
        }
		return totalIcome;	
}

function totalProfit(applesSoldList, applePriceMap){
	var numberOfappleSold = 0;
	var totalCost = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		numberOfappleSold += applesSoldList[i].price * applesSoldList[i].qty;
		totalCost += applePriceMap[applesSoldList[i].color] * applesSoldList[i].qty;
	}
	return numberOfappleSold - totalCost;
}

// -- extra functions...

function totalPerColorSold(apples, color) {
	return 0;
}

function totalIncomePerColor(apples, color) {
	return 0;
}

function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, color, costMap) {
	return 0;
}