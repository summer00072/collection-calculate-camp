'use strict';
function rank_by_two_large_one_small(collection){
	var collection_a = collection.sort(sortNumber);
	var result;
	var temp;
	for (var i = 0; i < collection_a.length;) {
		if ((collection_a.length - i) >= 3) {
			temp = collection_a[i];
			collection_a[i] = collection_a[i+1];
			collection_a[i+1] = collection_a[i+2];
			collection_a[i+2] = temp;
			i = i + 3;
		} else {
			i = i + 1;
		}
		
	}
	return collection_a;
	function sortNumber(a,b) {
		return a - b;
	}
  //这里写代码。。。
}
module.exports = rank_by_two_large_one_small;
