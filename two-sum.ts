function twoSum(nums: number[], target: number): number[] {
    let lookUp = new Map();
    for( let i=0; i < nums.length; i++){
        const toLook = target - nums[i]
        if(lookUp.has(toLook)){
            return [i,lookUp.get(toLook)]
        }
        else {
            lookUp.set(nums[i],i)
        }
    }
    return;
};
