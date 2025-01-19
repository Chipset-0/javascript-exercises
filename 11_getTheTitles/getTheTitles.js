const getTheTitles = function(dictionary) {
    let a = []
    for (let i = 0; i < dictionary.length; i++)
    {
        let elem = dictionary[i]
        a.push(elem.title)
    }
    return a
};  

// Do not edit below this line
module.exports = getTheTitles;
