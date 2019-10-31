class Node {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(n) {
    if (n.value < this.value) {
      if (this.left == null) {
        this.left = n;
      } else {
        this.left.addNode(n);
      }
    } else if (n.value > this.value) {
      if (this.right == null) {
        this.right = n;
      } else {
        this.right.addNode(n);
      }
    }
  }

  visit() {
    if (this.left != null) {
      this.left.visit();
    }
    console.log(this.value)
    if (this.right != null) {
      this.right.visit();
    }

  }
}
