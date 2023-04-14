const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

class BinarySearchTree {
  rootNode = null;

  root() {
    if (!this.rootNode) return null;
    return this.rootNode;
  }

  add(data, parentNode = this.rootNode) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      parentNode = this.rootNode;
    }

    let newNode = new Node(data);
    if (data === parentNode.data) return undefined;
    if (parentNode.data > data) {
      if (parentNode.left === null) {
        parentNode.left = newNode;
      } else {
        this.add(data, parentNode.left);
      }
    } else {
      if (parentNode.right === null) {
        parentNode.right = newNode;
      } else {
        this.add(data, parentNode.right);
      }
    }
  }

  has(data, parentNode = this.rootNode) {
    let result = false;
    if (parentNode.data === data) return true;

    if (parentNode.data > data && parentNode.left) {
      result = result || this.has(data, parentNode.left);
    }

    if (parentNode.data < data && parentNode.right) {
      result = result || this.has(data, parentNode.right);
    }

    return result;
  }

  find(data, parentNode = this.rootNode) {
    let result = null;
    if (parentNode.data === data) return parentNode;

    if (parentNode.data > data && parentNode.left) {
      result = this.find(data, parentNode.left);
    }

    if (parentNode.data < data && parentNode.right) {
      result = this.find(data, parentNode.right);
    }

    return result;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    let currentNode = this.rootNode;
    let isLeft = true;
    while (isLeft) {
      if (currentNode.left) {
        currentNode = currentNode.left;
      } else {
        isLeft = false;
      }
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    let isRight = true;
    while (isRight) {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        isRight = false;
      }
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
