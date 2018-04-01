'use strict';

function compare_collections(collection_a, collection_b) {
	if (collection_b.length != collection_a.length) {
		return false;
	}
	
	for (var i = 0; i < collection_a.length; i++) {
		if (collection_b.indexOf(collection_a[i]) == -1) {
			return false;
		}
	}
	/*
	for (var i = 0; i < collection_a.length; i++) {
		if (collection_b[i] != collection_a[i]) {
			return false;
		}
	}
	*/
	return true;
  //在这里写入代码
};

module.exports = compare_collections;


