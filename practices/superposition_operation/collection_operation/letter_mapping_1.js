'use strict';

function even_to_letter(collection) {

	function get_result(i) {
	var j = Math.floor((i-1) / 26);
	var temp;
	if (j === 0) {
		temp = String.fromCharCode(96+i);
	} else{
		var temp1 = String.fromCharCode(96+j);
		if (!(i%26)) {
			var temp2 = String.fromCharCode(96+26);
		} else{
			var temp2 = String.fromCharCode(96+(i%26));
		}		
		temp = temp1+temp2;
	}
	return temp;
	}
	var result = [];
	for (var j = 0; j < collection.length; j++) {
		if (!(collection[j]%2)) {
			result.push(get_result(collection[j]));
		}
	}
	return result;
  //在这里写入代码
}

module.exports = even_to_letter;
