function count_same_elements(collection) {
/*
	var key_value = "";
	var count_value = 0;
	var element = {key:key_value,count:count_value};
	var result = [element];
	result[0].key = collection[0];
	result[0].count = 1;	
	for (var i = 1; i < collection.length; i++) {
		var temp = result.length;
		for (var j = 0; j < temp; j++) {
			if (result[j].key == collection[i]) {
				result[j].count += 1;
			}
		}
			if (result..indexOf(collection[i]) >= 0) {
				var temp = result.indexOf(collection[i]);
				result[temp].count += 1;
			} else {
				element.key = collection[i];
				element.count = 1;
				result.push(element);
				
			}				
	}
	return result;
	*/
	var result = [];
	var sum = [];
	var final = [];
	for (var i = 0; i < collection.length; i++) {
		if (!result) {
			result.push(collection[i]);
		} else if (result.indexOf(collection[i]) == -1) {
				result.push(collection[i]);			
		}
	}
	
	for (var j = 0; j < result.length; j++) {
		var temp = 0;
		for (var i = 0; i < collection.length; i++){
			if (collection[i] == result[j]) {
				temp += 1;
			}
		}
		sum.push(temp);
	}
	function count(key_value,count_value){
		let element = {key:key_value,count:count_value};
		return element;
	}
 	
	for (var k = 0; k < result.length; k++) {
		
		final.push(count(result[k],sum[k]));
	}
	return final;
  //在这里写入代码
};

module.exports = count_same_elements;
