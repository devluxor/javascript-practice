let a = 'A'
function makeObject() {
  console.log(1);
  return {
    a,
    b: function testy() { return 'testy'},
  }

}

let a1 = makeObject();
let b1 = makeObject();

console.log(a1.a)