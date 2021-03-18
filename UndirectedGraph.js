// Graph Implementation

/*
(3)---(4)---(5)
 |     |     |
(1)---(2)   (6)
 \     /
  \   /
   (0)

 */

class Graph{
  constructor(){
    this.numberOfNodes = 0;
    this.adjacencyList = {};
  }
  
  addVertex(node){
      this.adjacencyList[node] = [];
      this.numberOfNodes++;
  }

  addEdge(node1, node2){
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  // Graph connections
  showConnections(){
    const allNodes = Object.keys(this.adjacencyList);
    for(let node of allNodes){
      let nodeConnections = this.adjacencyList[node];
      let connections="";
      let vertex;
      for(vertex of nodeConnections){
         connections+=vertex + " "; 
      }
      console.log(node+"-->"+connections);
    }
  }
}

const myGraph = new Graph();
// add nodes
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
// add edges
myGraph.addEdge('3','1');
myGraph.addEdge('3','4');
myGraph.addEdge('4','2');
myGraph.addEdge('4','5');
myGraph.addEdge('1','2');
myGraph.addEdge('1','0');
myGraph.addEdge('0','2');
myGraph.addEdge('6','5');
// show Connections
myGraph.showConnections();

// This graph is represented with Adjacency list
/*
0-->1 2 
1-->3 2 0 
2-->4 1 0 
3-->1 4 
4-->3 2 5 
5-->4 6 
6-->5 
*/
