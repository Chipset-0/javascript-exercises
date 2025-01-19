const palindromes = function (word) {
    if (word === "")
    {
        return true
    }
    let reverse = ""
    let input = word.replaceAll(" ", "").toUpperCase()
    input = input.replace(/\W/g, '')
    for (let i = input.length-1; i>=0; i--)
    {
        reverse += input.charAt(i)
    }
    
    return reverse === input
};

// Do not edit below this line
module.exports = palindromes;
