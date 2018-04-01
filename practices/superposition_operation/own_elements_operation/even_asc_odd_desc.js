'use strict';
var even_asc_odd_desc = function(collection){
	var collection_a = even_group(collection);
	var collection_b = asc_group(collection);
	var collection_even = collection_a.sort(sortNumber1);
	var collection_asc = collection_b.sort(sortNumber2);
	return collection_even.concat(collection_asc);
	
	function even_group(collection){
		let collection_a = [];	
		for (let i = 0; i < collection.length; i++) {
			if (!(collection[i]%2)) {				
				collection_a.push(collection[i]);
			}				
		}
		return collection_a;
	}
	function asc_group(collection){
		let collection_b = [];	
		for (let i = 0; i < collection.length; i++) {
			if (collection[i]%2) {				
				collection_b.push(collection[i]);
			}				
		}
		return collection_b;
	}
	function sortNumber1(a,b) {
		return a - b;
	}
	function sortNumber2(a,b) {
		return b - a;
	}
};
module.exports = even_asc_odd_desc;
