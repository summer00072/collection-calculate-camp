'use strict';
var is_exist_element = function(collection,element){
	var collection_a = even_group(collection);
	if (collection_a.indexOf(element) >= 0) {
		return true;
	} else {
		return false;
	}
	
	function even_group(collection){
		let collection_a = [];	
		for (let i = 0; i < collection.length; i++) {
			if (!(i%2)) {
				
				collection_a.push(collection[i]);
			}				
		}
		return collection_a;
	}
};
module.exports = is_exist_element;
