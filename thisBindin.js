const obj = {
  firstName: "Vakil Singh",
  fn2: () => {
    console.log(this.firstName);
  },
  fn: function () {
    console.log(this.firstName);
  },
  fn3: function () {
    console.log(this.firstName);
  },
};
const obj2={
    firstName: "John Doe",
}
obj.fn2();
obj.fn.call(obj2); 
obj.fn3(); 
