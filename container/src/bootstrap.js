import {mount} from  "products/ProductIndex";
import {cartMount} from   "carts/CartIndex"

console.log("Conatiner")
mount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-carts"))
