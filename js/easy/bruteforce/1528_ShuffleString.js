/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let output = [];
  for (let i = 0; i < indices.length; i++) {
    output[indices[i]] = s[i];
  }
  return output.join('');
};

const testCases = () => {
  /** TEST 1
   * input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
    */
  console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]));

  /** TEST 2
   * input: s = "aiohn", indices = [3,1,4,2,0]
   */
  console.log(restoreString('aiohn', [3,1,4,2,0]));

  /** TEST 3
    * input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
    */
  console.log(restoreString('aaiougrt', [4,0,2,6,7,3,1,5]));

  /** TEST 4
    * input: s = "art", indices = [1,0,2]
    */
  console.log(restoreString('art', [1,0,2]));

  /** TEST 5
    * input: s = "abc", indices = [0,1,2]
    */
  console.log(restoreString('abc', [0,1,2]));
};

testCases();
