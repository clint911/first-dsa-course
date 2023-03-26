function main(){
  //declare the array we are going to sort
  let arrToSort: number[] = [1, 2, 4, 9];
  let arrSorted: number[] = bubbleSort(arrToSort);
  console.log(arrSorted);
}
function bubbleSort(arr: number[]): number[] {
  //iterating through the whole fucking array
  for(let i = 0; i < arr.length; ++i) {
    //inner loop to do the checks
    for(let j = 0; j < arr.length - 1 - i; ++j) {
      //do the swapping  after performing a simple check
      if(arr[j] > arr[j + 1]) {
      const tempVar = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tempVar;
      }
    }

  }
  return arr;
}
main()
