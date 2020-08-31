const assert = require('assert');

var test = function() {
  assert.deepEqual(
    subsetWithoutDuplicates([1,1,2,3]),
    [
      [ 1, 1, 2, 3 ],
      [ 1, 1, 3, 2 ],
      [ 1, 2, 1, 3 ],
      [ 1, 2, 3, 1 ],
      [ 1, 3, 1, 2 ],
      [ 1, 3, 2, 1 ],
      [ 2, 1, 1, 3 ],
      [ 2, 1, 3, 1 ],
      [ 2, 3, 1, 1 ],
      [ 3, 1, 1, 2 ],
      [ 3, 1, 2, 1 ],
      [ 3, 2, 1, 1 ]
    ]
  );
}

module.exports.test = test;
