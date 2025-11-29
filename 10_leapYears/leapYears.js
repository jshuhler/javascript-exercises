const leapYears = function(year) {
    if (year % 400 === 0) {
        console.log(`${year} is a leap year.`)
    } else if (year % 4 === 0 && year % 100 !== 0) {
        console.log(`${year} is a leap year.`)
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        console.log(`${year} is a leap year.`)
    } else {console.log(`${year} is not a leap year.`)};
};

leapYears(34992);

// Do not edit below this line
module.exports = leapYears;
