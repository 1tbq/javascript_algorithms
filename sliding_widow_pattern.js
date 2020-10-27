// Find the longest continues maximum based on the input below
// solution is O(n^2) the better solution is the next on using sliding
// window approch

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }

//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// The sliding window approch

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
