'use strict';

function choose_no_common_elements(collection_a, collection_b) {
	if (!collection_a && !collection_b) {
		return;
	}
	var result = [];
	if (collection_a.length >= collection_b.length) {
		for (var j = 0; j <collection_a.length; j++) {
			if (collection_b.indexOf(collection_a[j]) < 0) {
				result.push(collection_a[j]);
			}
		}
	} else {
		for (var j = 0; j <collection_b.length; j++) {
			if (collection_a.indexOf(collection_b[j]) < 0) {
				result.push(collection_b[j]);
			}
		}
	}
	
	return result;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
