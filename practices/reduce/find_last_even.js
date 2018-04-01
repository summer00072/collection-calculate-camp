'use strict';

function find_last_even(collection) {
	for (var i = (collection.length - 1); i >= 0; i--) {
		if (!(collection[i] % 2)) {
			return collection[i];
		}
	}
  //在这里写入代码
};

module.exports = find_last_even;
