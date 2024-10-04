let name = 'Bobbo';
let foo = {
  name: 'From foo',
  sayName: function() {
    console.log(this.name, this);
  },
};

let baz = foo.sayName;

console.log(foo.sayName()) // from foo

// console.log(baz()); // 