const removeFromArray = function(array, ...elems) {
    for (let i=0; i < array.length; i++)
    {
        let num = array[i]
        let toBeRemoved = false
        for (let j=0; j < elems.length; j++)
        {
            if (elems[j] === num)
            {
                toBeRemoved = true
                break
            }
        }
        if (toBeRemoved)
        {
            array.splice(i, 1)
            i--
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
