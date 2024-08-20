

let store = [];

function watch() {
  store.forEach((el, index) => {
    console.log(el);
  });
}

function add() {
  let PhoneName = prompt("Enter Phone Name ");
  let PhonePrice = +prompt("Enter Phone Price ");
  let NewOne = { Name: PhoneName, price: PhonePrice };
  store.push(NewOne);
  // console.log(store);
  console.clear();
  watch();
}

function del() {
  let ObjectNum = +prompt("Enter the number of object you want delete ") - 1;
  store.splice(ObjectNum, 1);
  console.clear();
  watch();
}
function edit() {
  let ObjectNum = +prompt("Enter the index of object you want update  ") - 1;
  let NewPrice = +prompt("Enter the new prie  ");
  store[ObjectNum].price = NewPrice;

  console.clear();

  watch();
}
