'use strict';
var single_element = function(collection){
	var collection_a = even_group(collection);
	var collection_b = choose_no_reprat(collection_a);
	return collection_b;


	function even_group(collection){
		let collection_a = [];	
		for (let i = 0; i < collection.length; i++) {
			if (!((i+1)%2)) {
				
				collection_a.push(collection[i]);
			}				
		}
		return collection_a;
	}
	function choose_no_reprat(collection){
		let result = [];
		for (let i = 0; i < collection.length; i++) {
			
			if (collection.indexOf(collection[i]) == collection.lastIndexOf(collection[i])) {
				result.push(collection[i]);
			}			
		}
		return result;
	}
	
};
module.exports = single_element;
