export default function bs_list(haystack: number[], needle: number): boolean {
  //setting the low val and highest val
  let lo = 0;
  let hi = haystack.length;

  do {
    //grab the midpoint(m)
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (v === needle) {
      return true;
    }   else  if(v > needle) {
      hi = m;
    }  else  {
        lo = m + 1;
    }

  } while  (lo < hi);

      return false;

  }
