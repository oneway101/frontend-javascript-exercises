module.exports.reversePlusOne = function(input){
	var arr = input;
	arr.reverse();
	arr.unshift(1);
	return arr;
};

module.exports.plusesEverywhere = function(input){
	var arr = input;
	return arr.join("+");



};

module.exports.arrayQuantityPlusOne = function(input){
	var arr = input;
	var lengthPlusOne = arr.length + 1;
	return lengthPlusOne;
};