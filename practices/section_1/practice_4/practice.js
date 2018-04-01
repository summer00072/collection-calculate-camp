function collect_same_elements(collection_a, object_b) {
	var result = [];
		for (let element1 of collection_a) {		
				if ((object_b.value.indexOf(element1.key) >= 0) && (result.indexOf(element1.key) == -1)) {
					result.push(element1.key);
				}
			}
		
	return result;
  //在这里写入代码
};

module.exports = collect_same_elements;
