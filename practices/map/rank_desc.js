'use strict';
var rank_desc = function(collection){
  	function sortNumber(a,b) {
		return a - b;
	}
  return collection.sort(sortNumber);


};

module.exports = rank_desc;
