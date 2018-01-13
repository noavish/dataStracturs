function Node(value) {
    this.data = value;
    this.left = null;
    this.right= null;
}

function BinaryTree () {
    this.root = null;
    this.size = 0;
}

BinaryTree.prototype.addToHead = function (newNode) {
    if (this.size == 0) {
        this.root = newNode;
        this.size++;
    }
}

BinaryTree.prototype.addToTree = function (newNode, beginNode) {
   if (this.size == 0) {
       this.addToHead(newNode);
       return;
   }
   if (beginNode == undefined) {
       beginNode = this.root;
   }
   if (newNode.data < beginNode.data) {
       if (beginNode.left == null) {
           beginNode.left = newNode;
           this.size++;
           return;
       }
       this.addToTree(newNode, beginNode.left);
   } else if (newNode.data > beginNode.data) {
       if (beginNode.right == null) {
           beginNode.right = newNode;
           this.size++;
           return;
       }
       this.addToTree(newNode, beginNode.right);
   } else {
       return;
   }
}

BinaryTree.prototype.print = function (beginNode) {
    if (this.size == 0) {
        console.log('empty');
    }
    if (beginNode == undefined) {
        beginNode = this.root;
    }
    if (beginNode.left !== null) {
        this.print(beginNode.left);
    }
    console.log(beginNode);
    if (beginNode.right !== null) {
        this.print(beginNode.right);        
    }
}

BinaryTree.prototype.searchNode = function (dataToSearch, beginNode) {
    if (this.size == 0) {
        console.log('The tree is empty');
        return;
    }
    if (beginNode == undefined) {
        beginNode = this.root;
    }
    if (dataToSearch < beginNode.data) {
        if (beginNode.left !== null) {
            return this.searchNode(dataToSearch, beginNode.left);
        }
    } else if (dataToSearch > beginNode.data) {
        if (beginNode.right !== null) {
            return this.searchNode(dataToSearch, beginNode.right);
        }
    } else if (dataToSearch == beginNode.data) {
        return beginNode;
    }
}

var newNode = new Node(4);
var binary1 = new BinaryTree();

binary1.addToHead(newNode);
binary1.addToTree(new Node(1));
binary1.addToTree(new Node(2));
binary1.addToTree(new Node(3));
binary1.addToTree(new Node(4));
binary1.addToTree(new Node(5));
binary1.addToTree(new Node(6));
binary1.print();
console.log(binary1.size);
console.log(binary1.searchNode(2));
