'use strict';

function hybrid_operation_to_uneven(collection) {
	var temp;
	var sum = 0;
	for (let i = 0; i < collection.length; i++) {
		if (collection[i]%2) {
			temp = collection[i]*3 + 5;
			sum += temp;
		}				
	}
	return sum;
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

