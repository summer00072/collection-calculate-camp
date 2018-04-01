'use strict';

function find_first_even(collection) {
	for (var i = 0; i < collection.length; i++) {
		if (!(collection[i] % 2)) {
			return collection[i];
		}
	}
  //在这里写入代码
};

module.exports = find_first_even;

