'use strict';

function hybrid_operation(collection) {
	var temp;
	var sum = 0;
	for (let i = 0; i < collection.length; i++) {
		temp = collection[i]*3 + 2;
		sum += temp;
	}
	return sum;
  //在这里写入代码
}

module.exports = hybrid_operation;

