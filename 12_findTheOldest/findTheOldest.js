const findTheOldest = function(people) {
    const date = new Date()
    let oldest = null
    let oldestAge = -1
    for (let i = 0; i < people.length; i++)
    {
        let person = people[i]
        let age = 0
        if (Object.hasOwn(person, 'yearOfDeath'))
        {
            age = person.yearOfDeath - person.yearOfBirth
        }
        else
        {
            age = date.getFullYear() - person.yearOfBirth
        }
        if (age > oldestAge)
        {
            oldestAge = age
            oldest = person
        }
    }
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
