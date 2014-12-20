module.exports.getKeys = function(object){
	var keyArr=[];
	for (var key in object){
		keyArr.push(key);	
	};
	console.log(keyArr);
	return keyArr;
};

module.exports.getValues = function(object){
	var valueArr=[];
	for (var key in object){
		valueArr.push(object[key]);
	};
	console.log(valueArr);
	return valueArr;
};

module.exports.objectToArray = function(object){
	var objArr=[];
	for(var key in object){
		objArr.push(key + " is " + object[key]);
	};
	console.log(objArr);
	return objArr;
};