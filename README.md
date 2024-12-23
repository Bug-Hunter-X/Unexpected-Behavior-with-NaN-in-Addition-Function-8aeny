# Unexpected NaN Behavior in JavaScript Addition Function

This repository demonstrates a common but subtle error in JavaScript when dealing with `NaN` (Not a Number) values in arithmetic operations.

The `foo` function attempts to add two numbers.  It checks for null values but doesn't correctly handle `NaN`. This leads to unexpected results, particularly when one or both input arguments are `NaN`.

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Observe the incorrect results when running the code.
4. Open `bugSolution.js` to see the corrected code.

## Bug Solution
The solution is to explicitly check for `isNaN()` before attempting the addition.