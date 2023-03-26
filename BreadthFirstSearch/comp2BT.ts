/*  Comparing two Binary trees to see if they are equal in both shapes and structures
  */
export default function Compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  //Note: We are going to use recursion so here is a look at the base case
  //structural check
  if (a === null && b == null) {
          return true;
  }

  //structural check
  if (a === null || b === null) {
            return false;
  }

  //value check
  if (a.value !== b.value) {
          return false;
  }

      return Compare(a.left, b.left) && Compare(a.right, b.right);

}

