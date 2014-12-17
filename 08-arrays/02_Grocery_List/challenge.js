module.exports.addItem = function(addNew,list){
	var cart = list;
	if (list == addNew){
		return cart;
	}
	else{
		cart.push(addNew);
		return cart;
	}

	/*if (cart.prototype.includes(addNew)){
		return cart;
	}
	else {
		cart.push(addNew);
		return cart;
	}*/
	
};

module.exports.reverseSortedList = function(array){
	array.sort().reverse();
	return array;
};