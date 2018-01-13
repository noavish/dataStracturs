function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
  }
   
  function LinkedList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  LinkedList.prototype.addToTheBeginning = function (newNode) {
    newNode.next = this.head;
    this.head = newNode;
    if (this._length === 0) {
        this.tail = this.head;
    }
    if (this.head.next !== null) {
        this.head.next.previous = this.head;
    }   
    this._length++;
  }

  LinkedList.prototype.addToTheEnd = function (newNode) {
    newNode.previous = this.tail;
    this.tail = newNode;
    if (this._length === 0) {
        this.head = this.tail;
    }
    if (this.tail.previous !== null) {
        this.tail.previous.next = this.tail;
    } 
    this._length++;
  }

  LinkedList.prototype.deleteItem = function (nodeToDelete) {
    if (this._length === 0) {
        return;
    }
    var dummyNode = new Node ();
    dummyNode.next = this.head;
    var currentNode = dummyNode;
    while (currentNode.next !== null) {
        if (currentNode.next === nodeToDelete) {
            currentNode.next = currentNode.next.next;
            if(currentNode.next !== null) {
                currentNode.next.previous = currentNode;
            } else {
                this.tail = currentNode;
            }
            this._length--;
        }
        currentNode = currentNode.next;
    } 
  }

  LinkedList.prototype.print = function () {
    currentNode = this.head;
    while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
  }

  LinkedList.prototype.deleteItemByIndex = function (index) {
    if (this._length === 0) {
        return;
    }
    var currentNode = this.head;
    for (var i=0; i<index-1 && currentNode !== null; i++) {
        currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
    if (currentNode.next !== null) {
        currentNode.next.previous = currentNode;        
    }
    this._length--;
  }


  var list = new LinkedList();
  list.addToTheBeginning(new Node(1));
  list.addToTheBeginning(new Node(2));
  var three = new Node (3);
  list.addToTheEnd(three);
  list.addToTheBeginning(new Node(4));
  list.addToTheEnd(new Node(5));

  list.print();

  list.deleteItem(three);
  

  list.deleteItemByIndex(1);
  list.print();