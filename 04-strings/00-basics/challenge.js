module.exports.formLetter = function(firstName, senderName, message) {
	return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName ;


};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
	var subA = bigString.substring (startA, endA);
	var subB = bigString.substring (startB, endB);
	return subA + subB;

};

module.exports.findFirstMatch = function(text, searchString) {
	return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
	return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
	var firstMatch = text.indexOf(searchString);
	var firstIndex = firstMatch + searchString.length;
	var lastSearch = text.lastIndexOf(searchString);
	return text.substring(firstIndex,lastSearch);

};