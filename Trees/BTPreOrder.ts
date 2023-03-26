function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
         if(!curr) {
           return path;
         }

         //recurse
         //pre --here we will push some value first to the node
         path.push(curr.value);

         //recurse --we need to visit the L.H.S then the R.H.S
          walk(curr.left, path);
          walk(curr.right, path);

         //post
         return path;

}
export default function preOrderSearch(head: BinaryNode<number>): number[] {

             return walk(head, []);
}
