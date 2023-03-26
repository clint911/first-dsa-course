function walk(curr: BinaryNode<T> | null, path: number[]): number[] {

  if(!curr) {
    return path;
  }


  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

}
export default function inOrderSearch(head: BinaryNode<T>): number[] {

    return walk(head, []);

}

