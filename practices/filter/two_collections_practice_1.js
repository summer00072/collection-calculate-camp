'use strict';

function choose_common_elements(collection_a, collection_b) {
	var result = [];
		for (var j = 0; j <collection_a.length; j++) {
			if (collection_b.indexOf(collection_a[j]) >= 0) {
				result.push(collection_a[j]);
			}
		}
	return result;
	

  //在这里写入代码
}

module.exports = choose_common_elements;
