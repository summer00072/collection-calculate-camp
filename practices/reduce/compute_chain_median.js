'use strict';

function compute_chain_median(collection) {
	var result;
	var chain = [];
	var chain1 = [];
	var temp =  collection.split("->");
	for (var i = 0; i < temp.length; i++) {
		chain.push(parseInt(temp[i]));
	}
	function sortNumber(a,b) {
		return b - a;
	}
  	chain1 =  chain.sort(sortNumber);
  	if (chain1.length % 2) {
  		result = chain1[(chain1.length+1)/2-1];
  	} else {
  		var x = chain1[chain1.length/2-1];
  		var y = chain1[chain1.length/2];
  		result = (x+y)/2;
  	}
  	return result;
  //在这里写入代码
};

module.exports = compute_chain_median;
