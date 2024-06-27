const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
      const currentAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
      const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
      
      return currentAge > oldestAge ? person : oldest;
    });
  }
// Do not edit below this line
module.exports = findTheOldest;
