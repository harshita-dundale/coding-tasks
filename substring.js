//Longest substring without repeating charachter

var lengthOfLongestSubstring = function(s) {
    let maxL = 0;
    let char = new Set();
    let start = 0;

    for(let end=0; end<s.length; end++){
       while(char.has(s[end])){
           char.delete(s[start])
           start++;
       }
       char.add(s[end]);
       maxL = Math.max(maxL, end - start+ 1);
    }
    return maxL
};

console.log(lengthOfLongestSubstring("abcabcebb"));  