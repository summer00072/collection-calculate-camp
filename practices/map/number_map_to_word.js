'use strict';
var number_map_to_word = function(collection){
	var result = [];
	for (var i = 0; i < collection.length; i++) {
		var j = Math.floor((collection[i]-1) / 26);
		var temp;
		if (j === 0) {
			temp = String.fromCharCode(96+collection[i]);
		} else{
			var temp1 = String.fromCharCode(96+j);
			if (!(i%26)) {
				var temp2 = String.fromCharCode(96+26);
			} else{
				var temp2 = String.fromCharCode(96+(collection[i]%26));
			}		
			temp = temp1+temp2;
		}
		result.push(temp);
	}
	return result;
  
};

module.exports = number_map_to_word;
