function Node(data) {
    this.data = data;
    this.children = [];
}

function Tree() {
    this.root = null;
}

Tree.prototype.add = function(childName, toParentNode) {
    const newNode = new Node(childName);
    const parent = toParentNode ? this.findBFS(toParentNode) : null;
    if (parent) {
        parent.children.push(newNode);
    } else {
        if (!this.root) {
            this.root = newNode;
        } else {
            return 'Root node is already assigned';
        }
    }
};

Tree.prototype.findBFS = function(data) {
    var queue = [this.root];

    while (queue.length) {
        const node = queue.shift();
        if (node.data === data) {
            return node;
        }
        for (var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    return null;
};

export default Tree;
