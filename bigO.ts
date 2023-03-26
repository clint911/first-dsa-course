function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    const charCode = n.charCodeAt(i);
    //Capital E
    if (charCode === 69) {
      return sum;
    }
    sum += charCode;
  }
  return sum;
}
/*  Big O, as your input grows, how fast does computation or memory grow
  * important concepts: Growth occurs with respect to the input
  * constants are usually dropped
  * Worst case is usually the way we measure
  */

//O(N^2)
function sum_char_codes2(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++i) {
      sum += charCode2;
    }
  }
  return sum;
}
