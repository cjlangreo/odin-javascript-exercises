const getOlder = (currentOldest, currentPerson) => {
  const birth = currentPerson.yearOfBirth
  const death = currentPerson.yearOfDeath ?? (new Date).getFullYear()
  currentPerson.age = death - birth

  
  return currentPerson.age > currentOldest.age ? currentPerson : currentOldest
}

const findTheOldest = function(people) {
  const oldestPerson = people.reduce(getOlder, {
    name: "Base", yearOfBirth: 0, yearOfDeath: 0, age: 0
  })
  return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
