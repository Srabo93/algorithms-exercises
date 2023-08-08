/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j + 1] < nums[j]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;

  // let swapped = false;
  // let count = 0;
  // do {
  //   swapped = false;
  //   for (let index = 0; index < nums.length - 1 - count; index++) {
  //     if (nums[index] > nums[index + 1]) {
  //       let temp = nums[index];
  //       nums[index] = nums[index + 1];
  //       nums[index + 1] = temp;
  //       swapped = true;
  //     }
  //   }
  //   count++;
  // } while (swapped);
  // return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
