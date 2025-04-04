function groupAnagrams(strs: string[]): string[][] {
    let lookUpMap = new Map();
    for (let i=0; i< strs.length; i++){
        let anagArr = new Array(26).fill(0);
        for(let j=0; j< strs[i].length; j++){
            anagArr[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++
        }
        let key = anagArr.join(',')
        if(lookUpMap.has(key)){
            lookUpMap.set(key, [...lookUpMap.get(key), strs[i]])
        } else {
            lookUpMap.set(key, [strs[i]])
        }
    }
    let anagramGrp = [];
    lookUpMap.forEach((value) => { anagramGrp.push(value)});
    return anagramGrp;
};
