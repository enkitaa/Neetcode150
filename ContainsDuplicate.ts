function containsDuplicate(nums: number[]): boolean {
    const numHash = new Set()
    for(let i = 0; i < nums.length; i++){
        if(numHash.has(nums[i])){
            return true;
        }
        else {
            numHash.add(nums[i]);
        }
    }
    return false;
};
