module.exports.newArray = function(input1,input2,input3,input4){
	var arr = [input1,input2,input3,input4];
	return arr;
};

module.exports.firstAndLast = function(input){
	var arr = input;
	var lastIndex = arr.length -1;
	var newArray = [arr[0], arr[lastIndex]];
	return newArray;
};