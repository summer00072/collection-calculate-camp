'use strict';

function hybrid_operation_to_uneven(collection) {
	var collection_a = [];
	
	for (let i = 0; i < collection.length; i++) {
		if (collection[i]%2) {
			var temp = collection[i]*3 + 2;
			collection_a.push(temp);
		}				
	}
	return collection_a;
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

