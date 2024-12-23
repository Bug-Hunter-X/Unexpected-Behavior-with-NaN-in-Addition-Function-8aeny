function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Correctly handle NaN values
  } else if (a === null || b === null) {
    return 0; 
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, NaN)); // NaN
console.log(foo(NaN, 2)); // NaN
console.log(foo(NaN, null)); // NaN