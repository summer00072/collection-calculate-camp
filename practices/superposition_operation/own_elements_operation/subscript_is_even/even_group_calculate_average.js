'use strict';
var even_group_calculate_average = function(collection){
	
	var collection_a = even_group(collection);
	var sum = [0,0,0];
	var num = [0,0,0];
	var temp = 0;
	var average = [];
	for (let i = 0; i < collection_a.length; i++) {
		if (!(collection_a[i]%2)) {
			for (let j = 0; j < sum.length; j++) {
				if (collection_a[i].toString().length == (j+1)) {
					sum[j] += collection_a[i];
					num[j] += 1;
				}
			}			
		}
	}

	for (let k = 0; k < sum.length; k++) {
		if (num[k]){
			average.push(sum[k]/num[k]);
		}
		temp += sum[k];
		
	}
	if (!temp) {
		average = [0];
	}
	return average;

	function even_group(collection){
		let collection_a = [];	
		for (let i = 0; i < collection.length; i++) {
			if (!((i+1)%2)) {
				
				collection_a.push(collection[i]);
			}				
		}
		return collection_a;
	}
};
module.exports = even_group_calculate_average;
