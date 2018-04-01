'use strict';

function grouping_count(collection) {
	var result = [];
	var sum = [];
	var final = {};
	for (var i = 0; i < collection.length; i++) {
		if (!result) {
			result.push(collection[i]);
		} else if (result.indexOf(collection[i]) == -1) {
				result.push(collection[i]);			
		}
	}
	
	for (var j = 0; j < result.length; j++) {
		var temp = 0;
		for (var i = 0; i < collection.length; i++){
			if (collection[i] == result[j]) {
				temp += 1;
			}
		}
		sum.push(temp);
	}
	for (var i = 0; i < result.length; i++) {
		final[result[i]] = sum[i];
	}
	
	return final; 
 


  //在这里写入代码
}

module.exports = grouping_count;
