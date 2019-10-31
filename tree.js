class Tree {
  root = new Node(null);

  addValue(n) {
    if (this.root == null) {
      this.root = new Node(n);
    } else {
      this.root.addNode(new Node(n));
    }
  }

  traverse() {
    this.root.visit();
  }

}