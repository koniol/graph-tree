const tree = new Tree();

for (let i = 0; i < 10000; i++) {
	const ran = Math.floor((Math.random() * 1000) + 1);
	tree.addValue(ran);
}

console.log(tree);
tree.traverse();
