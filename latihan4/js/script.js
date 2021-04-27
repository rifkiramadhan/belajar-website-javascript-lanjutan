// 1. Menggunakan var

// Meminta javascript untuk mengassign i menjadi angka sepuluh dengan variable var
// var i = 10;
// console.log(i);

// Meminta javascript untuk menambahkan keyword var dan mengassign i menjadi angka sepuluh
// i = 10;
// console.log(i);

// console.log(i);
// var i = 10;
// Hasilnya: Undefined / Hoisting (Tetapi tetap ada nilai dibelakangnya)

// console.log(i);
// let i = 10;
// Hasilnya: Error / seperti error pada bahasa pemrograman selain javascript

// console.log(i);
// const i = 10;
// Hasilnya: Error / seperti error pada bahasa pemrograman selain javascript

// 2. Menggunakan for (Perulangan)

// Ini adalah javascript function scope
// function test() {
//     for(var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }
// test();

// // Meminta javascript untuk mengincrement i yang ada di luarnya
// // console.log(i);

// 3. Menggunakan SIAF/ IIFE
// (function() {
//     for(var i = 0; i < 10; i++) {
//                 console.log(i);
//     }
// }());

// Menggunakan let menganut block scope
// for(let i = 0; i < 10; i++) {
//             console.log(i);
// }

// 4. Menggunakan Const yang nilainya tidak bisa berubah
// const i = 10;
// i = 15;

// Menggunakan const yang nilainya bisa berubah
// const mhs = {
//     nama: "Rifki Ramadhan",
//     umur: 22
// }

// // Bisa berubah ketika objectnya tidak diganti
// mhs.umur = 90;

// console.log(mhs);

// 5. Menggunakan const pada array
const i = [1, 2, 3]
i.push(4);

console.log(i);