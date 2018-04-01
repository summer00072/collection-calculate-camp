'use strict';
var calculate_average = function(collection){
	var temp = 0;;
	var sum = 0;
	for (var i = 0; i < collection.length; i++) {
		if (!((i+1)%2)) {
			sum += collection[i];
			temp += 1;
		}
	}
	return sum/temp;

};
module.exports = calculate_average;
