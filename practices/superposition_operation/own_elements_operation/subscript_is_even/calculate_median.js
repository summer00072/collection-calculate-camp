'use strict';
var calculate_median = function(collection){
	
	var collection_b = [];
	for (var i = 0; i < collection.length; i++) {
		if (!((i+1)%2)) {
			collection_b.push(collection[i]);
		}
	}
	return compute_median(collection_b);

	function compute_median(collection) {
		var collection_a = [];
		var median;
		collection_a =  collection.sort(sortNumber);
	  	if (collection_a.length % 2) {
	  		median = collection_a[(collection_a.length+1)/2-1];
	  	} else {
	  		let x = collection_a[collection_a.length/2-1];
	  		let y = collection_a[collection_a.length/2];
	  		median = (x+y)/2;
	  	}
	  	function sortNumber(a,b) {
			return a - b;
		}
		return median;
	}
};
module.exports = calculate_median;
