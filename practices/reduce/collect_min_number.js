'use strict';

function collect_min_number(collection) {
	var temp = collection[1];
	for (var i = 0; i < collection.length; i++) {
		if (temp > collection[i]) {
			temp = collection[i];
		}
	}
	return temp;
  //在这里写入代码
};

module.exports = collect_min_number;

