'use strict';

function get_union(collection_a, collection_b) {
	if (!collection_a) {
		return collection_b;
	} else if (!collection_b) {
		return collection_a;
	}
	var result = collection_a.slice(0);
	for (var i = 0; i < collection_b.length; i++) {
		if ((collection_a.indexOf(collection_b[i]) == -1) && (result.indexOf(collection_b[i]) == -1)) {
			result.push(collection_b[i]);
		}
	}
	return result;
  //在这里写入代码
}

module.exports = get_union;

