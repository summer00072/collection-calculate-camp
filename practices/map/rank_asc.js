'use strict';
var rank_asc = function(collection){
	function sortNumber(a,b) {
		return b - a;
	}
  return collection.sort(sortNumber);
};

module.exports = rank_asc;
