'use strict';

function average_to_letter(collection) {
	function get_result(i) {
	var j = Math.floor((i-1) / 26);
	var temp;
	if (j === 0) {
		temp = String.fromCharCode(96+i);
	} else{
		var temp1 = String.fromCharCode(96+j);
		if (!(i%26)) {
			var temp2 = String.fromCharCode(96+26);
		} else{
			var temp2 = String.fromCharCode(96+(i%26));
		}		
		temp = temp1+temp2;
	}
	return temp;
	}
	var result;
	var sum = 0;
	for (var j = 0; j < collection.length; j++) {
		sum += collection[j];
	}
	var average = Math.ceil(sum / collection.length);
	result = get_result(average);
	return result;

  //在这里写入代码
}

module.exports = average_to_letter;

