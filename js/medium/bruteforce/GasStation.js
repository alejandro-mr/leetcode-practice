/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (gas.length !== cost.length) {
    // Return -1 since same array size restriction is not present.
    return -1;
  }

  let startStation = -1;
  let tank = 0;

  // Initiate infinite loop to traverse gas array, until travel route cycle is completed or starting station not reached.
  let current = 0;
  let index = 0;
  // worst case the array should be traversed twice.
  const hardStop = gas.length * 2 - 1;
  while (current !== hardStop) {
    if (index === startStation || (startStation < 0 && current > gas.length - 1)) {
      break;
    }
    tank += gas[index];
    if (tank < cost[index] && startStation >= 0 && current > gas.length - 1) {
      // there is not enough fuel on tank to continue forward, time to break loop.
      return -1;
    }
    if (tank < cost[index]) {
      tank = 0;
      index++;
      current++;
      startStation = -1;

      continue;
    }

    if (startStation < 0) {
      startStation = index;
    }

    tank -= cost[index];

    if (index >= gas.length - 1) {
      index = 0;
    } else {
      index++;
    }
    current++;
  }

  return startStation;
};

const testCases = () => {
  /** TEST 1
   * gas = [1, 2, 3, 4, 5] cost = [3, 4, 5, 1, 2]
   */
  console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));

  /** TEST 2
   * gas = [2, 3, 4] cost = [3, 4, 3]
   */
  console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));

  /** TEST 3
   * gas = [5,1,2,3,4] cost = [4,4,1,5,1]
   */
  console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));

  /** TEST 4
   * gas = [6,0,1,3,2] cost = [4,5,2,5,5]
   */
  console.log(canCompleteCircuit([6, 0, 1, 3, 2], [4, 5, 2, 5, 5]));
};

testCases();
