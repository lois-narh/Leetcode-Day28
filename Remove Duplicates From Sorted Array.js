/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // If array has 0 or 1 element, no duplicates possible
    if (nums.length <= 1) return nums.length;
    
    // Initialize pointer for next unique element position
    let k = 1;
    
    // Iterate through array starting from second element
    for (let i = 1; i < nums.length; i++) {
        // If current element is different from previous
        if (nums[i] !== nums[i-1]) {
            // Place it at position k and increment k
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
};