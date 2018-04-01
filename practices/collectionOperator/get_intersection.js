'use strict';

function get_intersection(collection_a, collection_b) {
	
	var result = [];
	for (var i = 0; i < collection_b.length; i++) {
		if ((collection_a.indexOf(collection_b[i]) >= 0) && (result.indexOf(collection_a[i]) == -1)) {
			result.push(collection_b[i]);
		}
	}
	return result;
  //在这里写入代码
}

module.exports = get_intersection;
