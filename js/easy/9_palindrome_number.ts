function isPalindrome(x: number): boolean {
  const digits = getDigits(x);

  let left = 0;
  let right = digits.length - 1;

  while (right >= left) {
    if (digits[left] !== digits[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
}

function getDigits(value: number): Array<string | number> {
  const digits = [];

  let remaining = Math.abs(value);

  while (remaining) {
    digits.push(remaining % 10);

    remaining = Math.floor(remaining / 10);
  }

  if (value < 0) {
    digits.push("-");
  }

  return digits;
}

(() => {
  // Test

  console.log(isPalindrome(-121));
  console.log(isPalindrome(111));
  console.log(isPalindrome(1111));
  console.log(isPalindrome(1234421));
})();
