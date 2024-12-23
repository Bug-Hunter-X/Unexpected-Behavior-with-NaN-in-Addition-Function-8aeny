function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This is problematic if either a or b is NaN
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, NaN)); // NaN
console.log(foo(NaN, 2)); // NaN
console.log(foo(NaN, null)); // 0, incorrect behavior