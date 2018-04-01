function collect_same_elements(collection_a, collection_b) {
	//适用于B集合中有多个子数组
	/*
	var result = [];
	
	for (var i = 0; i < collection_b.length; i++) {
		var temp = [];
		for (var j = 0; j <collection_b[i].length; j++) {
			if (collection_a.indexOf(collection_b[i][j]) != -1) {
				temp.push(collection_b[i][j]); 
			}
		}
		result.push(temp);
	}
	return result;
	*/

		var temp = [];
		for (var j = 0; j < collection_a.length; j++) {
			if (collection_b[0].indexOf(collection_a[j]) != -1) {
				temp.push(collection_a[j]); 
			}
		}
		
	
	return temp;
	
/*
var temp = [];
		for (var j = 0; j <collection_a.length; j++) {
			if (collection_b[1].indexOf(collection_a[j]) != -1) {
				temp.push(collection_a[j]); 
			}
		}
		
	
	return temp;
	*/
  //在这里写入代码
};

module.exports = collect_same_elements;
