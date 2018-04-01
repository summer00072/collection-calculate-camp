'use strict';
function one_add_next_multiply_three(collection){
	var collection_a = [];
	for (let i = 0; i < (collection.length-1); i++) {
		collection_a[i] = (collection[i] + collection[i+1]) * 3;
	}
  	return collection_a;
}
module.exports = one_add_next_multiply_three;
