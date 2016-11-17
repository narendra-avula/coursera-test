function Person() {
  this.fullName = "Narendra";
  this.fav = "Cookies";

  this.describe = function () {
    console.log('this is: ', this);
    console.log(this.fullName + " likes " + this.fav);
  };
}

var narendra = new Person();
narendra.describe();

var describe = narendra.describe;
describe();
describe.call(narendra);
