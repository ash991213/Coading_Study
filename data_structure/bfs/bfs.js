const graph = {
	A: ['B', 'C'],
	B: ['A', 'D', 'E'],
	C: ['A', 'F', 'G'],
	D: ['B', 'H', 'I'],
	E: ['B', 'J'],
	F: ['C'],
	G: ['C', 'K'],
	H: ['D'],
	I: ['D'],
	J: ['E'],
	K: ['G'],
};

const bfs = (graph, startNode) => {
	const visited = [];
	let needVisit = [];

	needVisit.push(startNode);

	while (needVisit.length !== 0) {
		const node = needVisit.shift();
		if (!visited.includes(node)) {
			visited.push(node);
			needVisit = [...needVisit, ...graph[node]];
		}
	}

	return visited;
};

// [ 'A', 'B', 'C', 'D','E', 'F', 'G', 'H','I', 'J', 'K' ]
console.log(bfs(graph, 'A'));
