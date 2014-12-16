module.exports.equalStrings = function(stringOne, stringTwo) {
	//var equalSrtings = stringOne == stringTwo;
	return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
	return one !== two;

};

module.exports.inBetween = function(lower, middle, upper) {
	var inBetween = lower < middle && middle < upper;
	return inBetween;
};

module.exports.outsideRanges = function(number) {
	var option1 = 10 > number || number > 20;
	var option2 = 42 >= number || number > 75;
	var option3 = 1 >= number || number >= 6;
	return option1 && option2 && option3;
};

module.exports.nameAndPrice = function(name, price) {
	var checkName = name == "NYTimes" || "LATimes" && name != "Chicago Tribune";
	var checkPrice = price >= 1;
	return checkName && checkPrice;

};