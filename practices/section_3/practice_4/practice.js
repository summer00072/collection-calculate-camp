function create_updated_collection(collection_a, object_b) {
	var result = [];
	var sum = [];
	var final = [];
	for (var i = 0; i < collection_a.length; i++) {
		var temp1 = collection_a[i].replace(/[^a-z]/ig,"");
		if (!result) {
			result.push(temp1);
		} else if (result.indexOf(temp1) == -1) {
				result.push(temp1);			
		}
	}
	
	for (var j = 0; j < result.length; j++) {
		var temp2 = 0;
		for (var i = 0; i < collection_a.length; i++){
			if (collection_a[i] == result[j]) {
				temp2 += 1;
			} else {
				var temp3 = collection_a[i].replace(/[^a-z]/ig,"");
				if (temp3 == result[j]) {
					var num= collection_a[i].replace(/[^0-9]/ig,"");
					temp2 += parseInt(num);
				}

			}
		}
		sum.push(temp2);
	}
	function count(key_value,count_value){
		let element = {key:key_value,count:count_value};
		return element;
	}
 	
	for (var k = 0; k < result.length; k++) {
		
		final.push(count(result[k],sum[k]));
	}
	
	for (let element1 of final) {		
			if (object_b.value.indexOf(element1.key) >= 0) {
				let temp = Math.floor(element1.count/3);
				if (temp) {
					element1.count -= temp;
				}				
			}
		}
		
	return final;
  //在这里写入代码
};

module.exports = create_updated_collection;
