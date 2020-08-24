import createQueue from './queue';

function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  }
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key))
    },
    getNode(key) {
      return nodes.find(node => node.key === key);
    },
    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },
    print() {
      return nodes.map(({ key, neighbors}) => {
        let result = key;
        if (neighbors.length) {
          result += `=> ${neighbors.map(neighbor => neighbor.key).join(' ')}`
        }
        return result;
      })
      .join('\n')
    },
    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});
      const queue = createQueue();
      queue.enqueue(startingNode);

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }

        currentNode.neighbors.forEach(neighbor => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        })
      }
    },
    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});

      function explore(node) {
        if (visited[node.key]) {
          return;
        }
        visitFn(node);
        visited[node.key] = true;

        node.neighbors.forEach(node => explore(node));
      }

      explore(startingNode)
    }
  }
}

const graph = createGraph(true);
graph.addNode('Robert');
graph.addNode('Mandi');
graph.addNode('Tucker');

graph.addEdge('Robert', 'Mandi');
graph.addEdge('Mandi', 'Robert');
graph.addEdge('Mandi', 'Tucker');

console.log(graph.print());
