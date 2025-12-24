const people = [
    {
    name: "Carly",
    yearOfBirth: 1066,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

console.log(people[0].yearOfDeath);

const findTheOldest = function (people) {
    let currentYear = new Date().getFullYear(); // 2025
    // if (people.yearOfDeath = "") {
    //     let getAge = currentYear - people.yearOfBirth;
    // } else {
    //     let getAge = people.yearOfDeath - people.yearOfBirth;
    // }
    let oldest = people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)); // finds name of oldest person given birth & death dates
    return oldest[0];
};

findTheOldest(people); // for debugging 

// Do not edit below this line
// module.exports = findTheOldest;
