const stok = {
  bijiKopi: 250,
  air: 100,
}

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stok.bijiKopi >= 16 && stok.air >= 250) {
      resolve("Stok cukup, Bisa membuat kopi.");
    } else {
      reject("Stok tidak cukup, Periksa stok!!");
    }
  });
}

const sukses = nilai => {
  console.log(nilai);
}

const gagal = nilai => {
  console.log(nilai);
}

checkStock().then(sukses, gagal);