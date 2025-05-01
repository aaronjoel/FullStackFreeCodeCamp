// Declare empty inventory array
let inventory = [];

function findProductIndex(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  let name = product.name.toLowerCase();
  let qty = product.quantity;

  let idx = findProductIndex(name);
  if (idx !== -1) {
    inventory[idx].quantity += qty;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: qty
    });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  let nameLower = name.toLowerCase();
  let idx = findProductIndex(nameLower);

  if (idx !== -1) {
    if (inventory[idx].quantity < quantity) {
      console.log(`Not enough ${nameLower} available, remaining pieces: ${inventory[idx].quantity}`);
    } else {
      inventory[idx].quantity -= quantity;
      if (inventory[idx].quantity === 0) {
        console.log(`Remaining ${nameLower} pieces: 0`);
        inventory.splice(idx, 1);
      } else {
        console.log(`Remaining ${nameLower} pieces: ${inventory[idx].quantity}`);
      }
    }
  } else {
    console.log(`${nameLower} not found`);
  }
}
