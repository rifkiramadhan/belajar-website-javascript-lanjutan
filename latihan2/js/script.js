// 1. Execution Context, Hoisting, Scope:
// Contoh 1
// var nama = 'Rifki Ramadhan';
// console.log(nama);

// Creation phase pada Global Context
    // - Nama var = Undefined
    // - Nama function = fn()
// - Hoisting
    // - Window = Global object
    // - This = Window

// Function membuat local execution context
// - Yang didalamnya terdapat creation dan execution phase
    // - Window
    // - Arguments
    // - Hoisting local

// Contoh 2
// var nama = 'Rifki Ramadhan';
// var umur = 22;
// console.log(sayHello());

// function sayHello() {
//     return(`Halo, namasaya ${nama}, saya ${umur} tahun`);
// }

// Contoh 3, Mengecek argument (Scope)
// var nama = 'Rifki Ramadhan';
// var username = '@rifkiromdons';

// function cetakURL() {
//     // console.log(arguments[0]);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@rayani'));

// Contoh 4, Function di dalam function
// function a() {
//     console.log('Ini a');

//     function b() {
//         console.log('Ini b');

//         function c() {
//             console.log('Ini c');
//         }
//         // Panggil function menggunakan Execution Stack (Tumpukan eksekusi)
//         c();
//     }

//     b();
// }

// a();


// Contoh 5
function satu() {
    var nama = 'Rifki Ramadhan';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Rayani');
console.log(nama);