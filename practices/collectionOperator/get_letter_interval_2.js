'use strict';

function get_letter_interval_2(number_a, number_b) {
	var result = [];
	if (number_a < number_b) {
		for(var i = number_a; i <= number_b; i++) {
			result.push(get_result(i));
		}
	} else if (number_a > number_b) {
		for(var i = number_a; i >= number_b; i--) {
			result.push(get_result(i));
		}
	} else {
		result.push(get_result(number_a));
	}
	return result;
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
  //在这里写入代码
}

module.exports = get_letter_interval_2;

