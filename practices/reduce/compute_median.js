'use strict';

function compute_median(collection) {
	var result;
	var chain = [];
	function sortNumber(a,b) {
		return b - a;
	}
  	chain =  collection.sort(sortNumber);
  	if (chain.length % 2) {
  		result = chain[(chain.length+1)/2-1];
  	} else {
  		let x = chain[chain.length/2-1];
  		let y = chain[chain.length/2];
  		result = (x+y)/2;
  	}
  	return result;
  //在这里写入代码
};

module.exports = compute_median;


