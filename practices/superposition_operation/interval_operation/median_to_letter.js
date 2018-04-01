'use strict';

function median_to_letter(collection) {
	var median;
	var chain = [];
	var median_letter;

  	chain =  collection.sort(sortNumber);
  	if (chain.length % 2) {
  		median = chain[(chain.length+1)/2-1];
  	} else {
  		let x = chain[chain.length/2-1];
  		let y = chain[chain.length/2];
  		median = (x+y)/2;
  	}

  	median_letter = get_result(Math.ceil(median));
  	return median_letter;
  	function sortNumber(a,b) {
		return a - b;
	}
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
  	
  //在这里写入代码
}

module.exports = median_to_letter;
