module.exports.sumNumbers = function(array){
	var sum = 0;
	for (var index = 0; index < array.length; index++){
		sum += array[index];		
	};
	console.log(sum);
	return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
	var inputArr = []
	inputArr = inputString.toLowerCase().split(/,/);
	console.log(inputArr);
	return inputArr;

};

module.exports.addIndex = function(array){
	var newArr = []
	for(var index = 0; index < array.length; index++){
		var indexStr = index + " is " + array[index];
		newArr.push(indexStr);
	}
	console.log(newArr);
	return newArr;
};
