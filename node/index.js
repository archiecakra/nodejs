import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

const makeCoffee = (type, miligrams) => {
  if (stock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
}

makeCoffee("robusta", 100);