function collect_same_elements(collection_a, object_b) {
	/*
	var result = [];
		for (let element of object_b.value) {
			if (collection_a.indexOf(element) >= 0) {
				result.push(element);
			}
		}
	return result;
	*/
	var result = [];
		for (let element of collection_a) {
			if (object_b.value.indexOf(element) >= 0) {
				result.push(element);
			}
		}
	return result;
  //在这里写入代码
};

module.exports = collect_same_elements;
