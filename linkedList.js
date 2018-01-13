function LinkedList () {
    this.head = null;
    this.Length = 0;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

LinkedList.prototype.print = function () {
    currentNode = this.head;
    while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

LinkedList.prototype.addToTheBeginning = function (newNode) {
    newNode.next = this.head;
    this.head = newNode;
    this.Length++;
}

// AddToTheEnd - first solution
// LinkedList.prototype.addToTheEnd = function (newNode) {
//     currentNode = this.head;
//     if (this.head === null) {
//         this.head = newNode;
//         this.Length++;
//         return;
//     }

//     while (currentNode !== null) {
//         if (currentNode.next === null) {
//             currentNode.next = newNode;
//             break;
//         }
//         currentNode = currentNode.next;
//         this.Length++;
//     }
    
// }

LinkedList.prototype.addToTheEnd = function (newNode) {
    this.Length++;
    if (this.head === null) {
        this.head = newNode;
        return;
    }

    var currentNode = this.head;
    while (currentNode.next !== null) {
        currentNode = currentNode.next;        
    }
    currentNode.next = newNode;
}

// Detele Item - first solution
// LinkedList.prototype.deleteItem = function (nodeToDelete) {
//     if (this.Length === 0) {
//         return;
//     } 
//     if (this.head === nodeToDelete) {
//         this.head = this.head.next;
//         this.Length--;
//         return;
//     }
//     currentNode = this.head;
//     while (currentNode.next !== null) {
//         if (nodeToDelete === currentNode.next) {
//             currentNode.next = currentNode.next.next;
//             this.Length--;
//             return;
//         }
//         currentNode = currentNode.next;
//     }
// }

// Detele Item - second solution
LinkedList.prototype.deleteItem = function (nodeToDelete) {
    if (this.Length === 0) {
        return;
    } 
    var dummyNode = new Node(0);
    dummyNode.next = this.head;
    currentNode = dummyNode;
    while (currentNode.next !== null) {
        if (nodeToDelete === currentNode.next) {
            currentNode.next = currentNode.next.next;
            this.Length--;
            return;
        }
        currentNode = currentNode.next;
    }
}

// Delete Item by Index - first solution
// LinkedList.prototype.removeItemByIndex = function (index) {
//     if (index > this.Length-1) {
//         return;
//     }
//     if (index === 0) {
//         this.head = this.head.next;
//         this.Length--;
//         return;
//     }
//     var currentNode = this.head;
//     var currentIndex = 0;
//     while (currentNode.next !== null) {
//         if (currentIndex === index-1) {
//             currentNode.next = currentNode.next.next;
//             this.Length--;
//             return;
//         }
//         currentNode = currentNode.next;
//         currentIndex++;
//     }
// }

// Delete Item by Index - second solution
LinkedList.prototype.removeItemByIndex = function (index) {
    if (index > this.Length-1) {
        return;
    }
    if (index === 0) {
        this.head = this.head.next;
        this.Length--;
        return;
    }
    var currentNode = this.head;
    for (var i=1; i < index && currentNode !== null; i++) {
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    this.Length--;
}

var list = new LinkedList();
list.addToTheBeginning(new Node(3));
var nodeToSearch = new Node(4);
list.addToTheEnd(nodeToSearch);
list.addToTheEnd(new Node(5));
list.addToTheBeginning(new Node(1));
list.print();
list.deleteItem(nodeToSearch);
list.removeItemByIndex(1);
list.print();
