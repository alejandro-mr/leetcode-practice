/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  if (arr.length <= 2) {
    return true;
  }
  // Manual insert sorting of array of numbers
  for (let i = 1; i < arr.length; i++) {
    let current = i;
    while (arr[current - 1] !== undefined && arr[current] < arr[current - 1] && current > 0) {
      [arr[(current-1)], arr[(current)]] = [arr[(current)], arr[(current-1)]];
      current -= 1;
    }
  }
  // using JavaScript built-in sort
  // arr.sort();

  let leftSequence = true;
  const diff = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    const currentDiff = arr[i] - arr[i-1];
    if (currentDiff !== diff) {
      leftSequence = false;
    }
  }

  let rightSequence = true;
  const reverseDiff = arr[arr.length-2] - arr[arr.length-1];
  for (let i = arr.length-2; i > 0; i--) {
    const currentDiff = arr[i-1] - arr[i];
    if (currentDiff !== reverseDiff) {
      rightSequence = false;
    }
  }
  return leftSequence || rightSequence;
};

const testCases = () => {
  // TEST 1
  console.log(canMakeArithmeticProgression([3, 5, 1]));
  // TEST 2
  console.log(canMakeArithmeticProgression([1, 2, 4]));
  // TEST 3
  console.log(canMakeArithmeticProgression([1]));
  // TEST 4
  console.log(canMakeArithmeticProgression([1, 100]));
  // TEST 5
  console.log(canMakeArithmeticProgression([20,17,-18,-13,13,-14,-8,10,1,14,-19]));
  // TEST 6
  console.log(canMakeArithmeticProgression([0,12,6,18,-18,-6,-24,-12]));
}

testCases();
