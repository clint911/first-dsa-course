function main() {
  let arrToSort: number[] = [1, 4, 7, 3, 6, 9, 12];
  let arrSorted: number[] = bubble_sort(arrToSort);
  console.log(arrSorted);

}
export default function bubble_sort(arr: number[]): number[] {
  for(let i = 0; i < arr.length;  ++i) {
    for(let j = 0; j < arr.length - 1 - i; ++j) {
      if(arr[j] > arr[j + 1]) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          console.log(arr);

      }
    }
  }
  return arr;

}
main();
