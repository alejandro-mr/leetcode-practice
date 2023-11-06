function isPalindrome(x: number): boolean {
  const chars = x.toString();

  let left = 0;
  let right = chars.length - 1;

  while (right >= left) {
    if (chars[left] !== chars[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
}

(() => {
  // Test

  console.log(isPalindrome(-121));
  console.log(isPalindrome(111));
  console.log(isPalindrome(1111));
  console.log(isPalindrome(1234421));
})();
