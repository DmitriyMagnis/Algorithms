function BTreeToArray(map) {
	if (map.size < 1) return new Array()

	const uMap = new Map()
	const i = 0
	uMap.set('root', i)
	for (const index of map.keys()) {
		if (index != 'root') {
			i++
			uMap.set(index, i)
		}
	}

	const array = new Array(map.size)
	for (const [index, block] of map.entries()) {
		const block1 = new Array(block.length)
		for (const j = 0; j < block.length; j++) {
			// link in j cell of block = number corresponding previous uuid in j cell of block
			if (block[j] != null)
				block1[j] = j % 2 == 0 ? uMap.get(block[j]) : new Number(block[j])
			else block1[j] = null
		}
		array[uMap.get(index)] = block1
	}

	return array
}
