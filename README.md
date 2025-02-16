# Type 'string[]' is not assignable to type 'string'

This repository contains a TypeScript code example demonstrating a common type error: attempting to pass an array of strings to a function expecting a single string.

## Bug

The `greeter` function expects a single string argument but is called with an array of strings `user`. TypeScript's type system correctly identifies this type mismatch and throws an error.

## Solution

The solution involves modifying the `greeter` function to accept an array of strings or processing the array to extract the desired string element before passing it to the function.  The solution demonstrates the latter approach.

## How to reproduce

1. Clone this repository.
2. Compile the code using the TypeScript compiler (`tsc bug.ts`).
3. Observe the type error message.