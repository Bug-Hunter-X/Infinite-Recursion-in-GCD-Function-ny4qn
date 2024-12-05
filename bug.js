function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This will cause an infinite loop below
  }
  return foo(b, a % b); 
}