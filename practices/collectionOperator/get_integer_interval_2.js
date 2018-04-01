'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
	if (number_a < number_b) {
		for (var i = number_a; i <= number_b; i++){
			if (!(i % 2)){
				result.push(i);
			}
		}
	} else if (number_a > number_b) {
		for (var i = number_a; i >= number_b; i--){
			if (!(i % 2)){
				result.push(i);
			}
		}
	} else if (number_a == number_b && !(number_a % 2)){
				result.push(number_a);
			}

	return result;
		
  //在这里写入代码
}

module.exports = get_integer_interval_2;
