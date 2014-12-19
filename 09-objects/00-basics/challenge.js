module.exports.createCourse = function(courseTitle,courseDuration,courseStudents){
	var course = {};
	course = {title: courseTitle, duration: courseDuration, students: courseStudents };
	console.log(course);
	return course;
};

module.exports.addProperty = function(object,newProp,newValue){
	var newObject = object;

	if (newObject[newProp] != object.newProp){
		console.log(newObject);
		return newObject;	
	}
	else{
		newObject[newProp] = newValue;
		console.log(newObject);
		return newObject;	
	}
	
	
};

module.exports.formLetter = function(letter){
	var letterStr = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
	return letterStr;
};

module.exports.canIGet = function(item,money){
	var priceTag = {}
	priceTag["MacBook Air"] = 999;
	priceTag["MacBook Pro"] = 1299;
	priceTag["Mac Pro"] = 2499;
	priceTag["Apple Sticker"] = 1;
	return priceTag[item] <= money;
	
};