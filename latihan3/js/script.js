// 1. Salah satu contoh syntax menggunakan closures
// function init() {
//     // let nama = 'Rifki';

//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();

// // Menjalankaan tampilNama
// panggilNama('Rifki');
// panggilNama('Rayani');

// 2. Function Factories
// // Closure lexical waktu pagi, siang, sore, malam
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu} Semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatSore = ucapkanSalam('Sore');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Rifki Ramadhan');
// selamatSiang('Rifki Ramadhan');
// selamatSore('Rifki Ramadhan');
// selamatMalam('Rifki Ramadhan');

// // 3. Function Expression (Private method)
// let add = function() {

//     // Counter jadi private scope dan tidak bisa di akses dari luar tapi nilainya tetap bertahan karena closure
//     let counter = 0;
//     return function() {
//         return ++counter;
//     }
// }

// // Untuk menjalankan semua let dan functionnya
// let a = add();

// console.log(a())
// console.log(a())
// console.log(a())

// 4. Function Expression (Private method) Cara Mudah
// Mmenggunakan immediately invoked function
let add = (function() {

    // Counter jadi private scope dan tidak bisa di akses dari luar tapi nilainya tetap bertahan karena closure
    let counter = 0;
    return function() {
        return ++counter;
    }

    // Menjalankan immediately invoked function menggukan "(); Execution"
})();

// Tidak akan bisa dieksekusi / tidak dapat mengganggu function nya
counter = 100;

console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())