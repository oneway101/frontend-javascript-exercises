module.exports.favoriteNumber = function(fav,guess){
	if (fav < guess){ return "Too high";}
	else if (fav > guess){ return "Too low";}
	else { return "You got it!";}
};

module.exports.checkLock = function(num1,num2,num3,num4){
	var checkLock1 = num1 == 3 || num1 == 5 || num1 == 7;
	var checkLock2 = num2 == 2;
	var checkLock3 = num3 >= 5 && num3 <= 100;
	var checkLock4 = num4 < 9 || num4 > 20;
	if (checkLock1 && checkLock2 && checkLock3 && checkLock4){
		return "correct";
	}
	else {
		return "incorrect";
	};
};

module.exports.canIGet = function(item,price){
	var apple1 = item == "MacBook Air" && price >= 999;
	var apple2 = item == "MacBook Pro" && price >= 1299;
	var apple3 = item == "Mac Pro" && price >= 2499;
	var apple4 = item == "Apple Sticker" && price >= 1;

	if (apple1 || apple2 || apple3 || apple4){
		return true;
	}
	else {
		return false;
	}
	

};