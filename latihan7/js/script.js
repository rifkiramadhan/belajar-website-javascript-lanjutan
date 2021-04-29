// Array 10 angka random
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// Menggunakan for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// Menggunakan filter
// Merepresentasikan / memfilter a dari tiap elament didalam array angka
// const newAngka = angka.filter(a => 

//     // Mengembalikan jika a lebih besar sama dengan tiga
//     a >= 3
// );
// console.log(newAngka);

// Menggunakan map
// Mengkalikan semua angka dengan dua
// Menelusuri tiap element yang ada pada angka lalu tiap elementnya dikali dua
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// Menggunakan reduce
// Menjumlahkan seluruh element pada array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentvalue) =>
//     accumulator + currentvalue, 0
// );
// console.log(newAngka);

// Method Chain (Method berantai)
// Cari angka > 5
// Kalikan 3
// Jumlahkan
const hasil = angka.filter(a => a > 5) // Hasilnya: 8, 9, 9 
    .map(a => a * 3) // 24, 27, 27
    .map(a => a / 2)
    .reduce((acc, cur) => acc + cur, 0); //78
console.log(hasil);