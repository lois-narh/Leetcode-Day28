# Remove Duplicates from Sorted Array

This project contains a simple JavaScript function to remove duplicates from a **sorted** array in-place and return the number of unique elements.

## Problem Statement

Given a **sorted** array `nums`, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same.

Return the number of unique elements `k` after removing the duplicates.

The first `k` elements of `nums` should contain the unique elements in the same order as they appeared.

This implementation does **not** return a new array — it modifies the original array in place and uses **O(1)** extra memory.

## Function Signature

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums)
