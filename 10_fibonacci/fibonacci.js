const fibonacci = function(seqNum) {
    if (seqNum < 3)
    {
        if (seqNum < 0)
        {
            return "OOPS"
        }
        if (seqNum == 0)
        {
            return 0
        }
        else
        {
            return 1
        }
    }
    let targetIdx = 0

    if (typeof seqNum == "string" && !isNaN(seqNum))
    {
        targetIdx = parseInt(seqNum)
    }
    else if (typeof seqNum == "number")
    {
        targetIdx = seqNum
    }

    let last = 1
    let curr = 1
    let currIdx = 2

    for (let i = currIdx; i < targetIdx; i++)
    {
        let temp = curr
        curr = curr + last
        last = temp
    }
    return curr

};

// Do not edit below this line
module.exports = fibonacci;
