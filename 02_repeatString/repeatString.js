const repeatString = function(string, num) {
    if (num < 0)
    {
        return "ERROR"
    }
    if (string == '')
    {
        return ''
    }
    message = ""
    for (let i = 0; i < num; i++)
    {
        message += string
    }
    return message
};

// Do not edit below this line
module.exports = repeatString;
