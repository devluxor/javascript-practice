// getObject({
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 17, name: "julie", marks: "400" },
//   "2": { age: 16, name: "Robin", marks: "200" },
//   "3": { age: 16, name: "Bella", marks: "300" }
// }) ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

// getObject({
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 17, name: 'julie', marks: '400'},
//   2: {age: 16, name: 'Robin', marks: '200'},
//   3: {age: 16, name: 'Bella', marks: '300'},
//   4: {age: 16, name: 'john', marks: '250'},
//   5: {age: 15, name: 'julie', marks: '250'}
// }) ➞    {
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 16, name: 'Robin', marks: '200'},
//   2: {age: 16, name: 'Bella', marks: '300'},
//   3: {age: 16, name: 'john', marks: '250'}
// }

function sortByAge(persons) {
  let sortedKeys = Object.keys(persons).sort((personA, personB) => {
    return Number(persons[personB].age) - Number(persons[personA].age);
  } )

  return sortedKeys;
}

console.log(
  sortByAge({
    "1": { age: 17, name: "julie", marks: "400" },
    "3": { age: 16, name: "Bella", marks: "300" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "0": { age: 18, name: "john", marks: "400" },
    })
)
