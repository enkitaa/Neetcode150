function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length){
        return false;
    }
    let stringCounterArr = new Array(26).fill(0);
    for(let i=0; i < s.length; i++){
        stringCounterArr[ s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        stringCounterArr[ t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }
    for(let k=0; k< stringCounterArr.length; k++){
        if (stringCounterArr[k] < 0) {
            return false;
        }
    }
    return true;
};
