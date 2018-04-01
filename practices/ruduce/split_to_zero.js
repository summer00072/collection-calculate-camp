'use strict';

function spilt_to_zero(number, interval) {
	var temp = number;
	var result = [];
	while (temp >= 0) {
		if (temp == 0) {
			result.push(parseFloat(temp.toFixed(0)));
		} else {
			result.push(parseFloat(temp.toFixed(1)));
		}
		
		temp = temp - interval;
	}
	if (result[result.length - 1] > 0) {
		temp = result[result.length - 1] - interval;
		result.push(parseFloat(temp.toFixed(1)));
	}
	return result;
  //在这里写入代码
};

module.exports = spilt_to_zero;
