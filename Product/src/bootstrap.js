import faker from "faker";

const mount = (el) => {
  let products = "";
  for (let index = 0; index < 6; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// just for development so it will work in development in container & products
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}
export { mount };
