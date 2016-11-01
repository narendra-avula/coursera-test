// **  Prototypal inheritance
var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: function () {
    console.log("walking!");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("*** CHANGED: child.value = 'childValue'");
console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("parent: ", parent);
console.log("child: ", child);

console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
console.log("CHILD - child.value: ", child.value);
console.log("PARENT - parent.value: ", parent.value);
console.log("child.value === parent.value ? ", child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("Grandchild: ", grandChild);
grandChild.walk();

//** Function constructors
// See my other course: HTML, CSS, and Javascript for Web Developers
// Lecture #48
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("myDog: ", myDog);

// Not being used as a function constructor
Dog("Max2");

//Quiz 16
//1
var student1 = {
    message : 'I love this course!!'
};
var student2 = Object.create(student1);
console.log(student2);
console.log(student2.message);

//2
var student1 = {
  message: "I LOVE this course!"
};

var student2 = Object.create(student1);
student2.getMessage = function () {
  this.message = "Student 1 was paid off by Yaakov to say that!";
  return this.message;
};
var coverUp = student2.getMessage();
console.log(student2.message);

//3
function Person(name) {
  this.name = name;
}
// var p = Person("Yaakov");
// console.log(p.name);
var p = new Object(Person, "Yaakov");
console.log(p.name);
var p = new Person("Yaakov");
console.log(p.name);
var p = new Object("Yaakov");
console.log(p.name);
