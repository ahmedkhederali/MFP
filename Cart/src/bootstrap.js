import faker from "faker";
// we create a function to handle this situation
//if i work in isoluation so i grantee there is a div with id but
// if i work on conatiner i not grantee there is an id
// so if there is id work if there nno id it work or if i bath diffrent id it will work
const cartMount = (el) => {

    let products = `<div> number is ${faker.random.number()}</div>`;
  

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-carts");
  if (el) {
    cartMount(el);
  }
}

export { cartMount };
