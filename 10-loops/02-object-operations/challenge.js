module.exports.copy = function(object){
	var newObj = {};
	for(var key in object){
		newObj[key] = object[key];
	}
	console.log(newObj);
	return newObj;
};

module.exports.extend = function(dest,src){
	for(var key in src){
		dest[key] = src[key];
	}
	console.log(dest);
	return dest;
};

module.exports.hasElems = function(object,array){
	var objKeys=[];
	var setBoolean = true;
	for(var key in object){
		objKeys.push(key); 
	}
	for(i=0;i<array.length;i++){
		
		if (array[i] == objKeys[i]){
			setBoolean = true;
		}
		else{
			setBoolean = false;
		}
		console.log(objKeys, array);
	}

	return setBoolean;

};