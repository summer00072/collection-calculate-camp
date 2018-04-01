'use strict';

function double_to_one(collection) {
	var temp = [].concat.apply([],collection);
	var result = [];
	for (var i = 0; i < temp.length; i++) {
		if (!result) {
			result.push(temp[i]);
		} else if (result.indexOf(temp[i]) == -1) {
			result.push(temp[i]);
		}
	}
	return result;
  //在这里写入代码
}

module.exports = double_to_one;
