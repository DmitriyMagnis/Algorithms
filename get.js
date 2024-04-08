
const get = (obj, path) => {
	const queue = path.split('.');
	let cNode = {...obj};
	while(queue.length) {
		const step = queue.shift();
		
		if (step in cNode) {
			cNode = cNode[step]?.constructor ===  Object ? {...cNode[step]} : cNode[step]
			
			if (queue.length === 0) {
				return cNode
			}
		} else {
			return false
		}
	} 
}

const obj = {
	a: {
		b: {
			c: null
		},
		e: 'f'
	}
}

console.log(get(obj, 'a.b'))
console.log(get(obj, 'a.b.c'))
console.log(get(obj, 'a.e'))
console.log(get(obj, 'a.x.e'))