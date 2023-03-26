const a: number[] = [];

//measuring time in milliseconds
function time(fn: () => void) {
  const now = Date.now();
  fn();
  return Date.now() - now;
}

function unshift(number: number) {
  for(let i = 0; i < number; ++i) {
    a.unshift(Math.random());
  }
}

function shift(number: number) {
  for(let i = 0; i < number; ++i) {
    a.shift();
  }
}

function push(number:  number) {
  for(let i = 0; i < number; ++i) {
    a.push(Math.random());
  }
}

function pop(number: number) {
  for(let i = 0; i < number; ++i) {
    a.pop();
  }
}

function get(idx: number) {
  return function() {
    return a[idx];
  }
}

function pushArr(count: number) {
  return function() {
    push(count);
  };
}
