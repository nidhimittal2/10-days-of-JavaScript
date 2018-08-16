//find second largest element in array

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
        for(var i=0;i<nums.length;i++){
            for(var j=0;j<nums.length;j++){
                if(nums[i]>nums[j]){
                    var t = nums[i];
                    nums[i] = nums[j];
                    nums[j] = t;
                }
            }
        }
    var m = nums[0]
    for(var i=0;i<nums.length;i++){
        if(m>nums[i]){
            var p = nums[i];
            break;
        }
    }
    return p;
    
}
