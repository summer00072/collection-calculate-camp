function count_same_elements(collection) {
	var result = [];
	var sum = [];
	var final = [];
	for (var i = 0; i < collection.length; i++) {
		var temp1 = collection[i].replace(/[^a-z]/ig,"");
		if (!result) {
			result.push(temp1);
		} else if (result.indexOf(temp1) == -1) {
				result.push(temp1);			
		}
	}
	
	for (var j = 0; j < result.length; j++) {
		var temp2 = 0;
		for (var i = 0; i < collection.length; i++){
			if (collection[i] == result[j]) {
				temp2 += 1;
			} else {
				var temp3 = collection[i].replace(/[^a-z]/ig,"");
				if (temp3 == result[j]) {
					var num= collection[i].replace(/[^0-9]/ig,"");
					temp2 += parseInt(num);
				}

			}
		}
		sum.push(temp2);
	}
	function count(name_value,summary_value){
		let element = {name:name_value,summary:summary_value};
		return element;
	}
 	
	for (var k = 0; k < result.length; k++) {
		
		final.push(count(result[k],sum[k]));
	}
	return final;
  //在这里写入代码
}

module.exports = count_same_elements;
