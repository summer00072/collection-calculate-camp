'use strict';

function average_uneven(collection) {
	var sum = 0;
	var temp = 0;
	for (let i = 0; i < collection.length; i++) {
		if (collection[i]%2 && 1 <= collection[i] <= 10) {			
			sum += collection[i];
			temp += 1;
		}				
	}
	return sum/temp;
  //在这里写入代码
}

module.exports = average_uneven;
