'use strict';

function choose_divisible_integer(collection_a, collection_b) {
	var result = [];
	for (var i = 0; i < collection_a.length; i++) {
		for (var j = 0; j < collection_b.length; j++) {
			if (!(collection_a[i] % collection_b[j])) {
				result.push(collection_a[i]);
				break
			}
		}
	}
	return result;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
