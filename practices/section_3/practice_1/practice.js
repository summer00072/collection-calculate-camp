function create_updated_collection(collection_a, object_b) {
	
	for (let element1 of collection_a) {		
			if (object_b.value.indexOf(element1.key) >= 0) {
				element1.count -= 1;
			}
		}
		
	return collection_a;
  //在这里写入代码
}

module.exports = create_updated_collection;
