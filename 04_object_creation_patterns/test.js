// 1. Create an object called `shape` that has a `getType` method.
// 2. Define a `Triangle` constructor function whose prototype is `shape`. 
  // Objects created with `Triangle` should have four own properties: `a`, `b`, `c `(representing the sides of a triangle), and type.
// 3. Add a new method to the prototype called `getPerimeter`.

// Test your implementation with the following code:

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;  
  this.c = c;
  this.type = 'triangle';
}
let shape = {
  getType() { return this.type },
}
Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}
Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"


