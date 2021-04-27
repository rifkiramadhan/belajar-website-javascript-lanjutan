// -- Membuat Object pada JavaScript --

// 1. Object Literal
// let mahasiswa1 = {
//     nama: 'Rifki Ramadhan',
//     energi: 10,
    
//     // Jika mahasiswa memakan sebanyak porsi yang dimakan
//     makan: function(porsi) {

//         // Tambahkan porsi dan energi yang diterima
//         this.energi = this.energi + porsi;

//         // Setelah itu cetak sambutan selamat makan!
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Rayani Putri',
//     energi: 20,

//     // Jika mahasiswa memakan sebanyak porsi yang dimakan
//     makan: function(porsi) {

//         // Tambahkan porsi dan energi yang diterima
//         this.energi = this.energi + porsi;

//         // Setelah itu cetak sambutan selamat makan!
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration
// // Object literal yang berisi function, ini akan disimpan satu kali di dalam memori
// const methodMahasiswa = {
//     // Jika mahasiswa memakan sebanyak porsi yang dimakan
//     makan: function(porsi) {

//         // Tambahkan energi dan porsi yang dimakan
//         this.energi += porsi;

//         // Setelah itu cetak sambutan selamat makan!
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     // Jika mahasiswa bermain game sabanyak waktu yang ditempuh
//     main: function(jam) {

//         // Tambahkan energi dan waktu yang ditempuh
//         this.energi -= jam;

//         // Setelah itu cetak sambutan selamat bermain!
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     // Method baru, Jika mahasiswa tidur sebanyak waktu yang ditempuh
//     tidur: function(jam) {

//         // Tambahkan energi dan waktu yang ditempuh kemudian dikalikan dua
//         this.energi += jam * 2;

//         // Setelah itu cetak sambutan selamat tidur!
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// // Object function declaration, Setiap menjalankan fungsi ini
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // Mendaftarkan method
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     // Mengembalikan object mahasiswa
//     return mahasiswa;
// }

// // Menginstansiasi object menggunakan function declaration
// let rifki = Mahasiswa('Rifki Ramadhan', 10);
// let rayani = Mahasiswa('Rayani Putri', 20);

// 3. Constructor Function (Keyword new)
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     // Jika mahasiswa memakan sebanyak porsi yang dimakan
//     this.makan = function(porsi) {

//         // Tambahkan energi dan porsi yang dimakan
//         this.energi += porsi;

//         // Setelah itu cetak sambutan selamat makan!
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     // Jika mahasiswa bermain game sabanyak waktu yang ditempuh
//     this.main = function(jam) {

//         // Tambahkan energi dan waktu yang ditempuh
//         this.energi -= jam;

//         // Setelah itu cetak sambutan selamat bermain!
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }

// // Menginstansiasi object menggunakan constructor function
// let rifki = new Mahasiswa('Rifki Ramadhan', 10);
// let rayani = new Mahasiswa('Rayani Putri', 20);

// 4. Object.create
// // Object literal yang berisi function, ini akan disimpan satu kali di dalam memori
// const methodMahasiswa = {
//     // Jika mahasiswa memakan sebanyak porsi yang dimakan
//     makan: function(porsi) {

//         // Tambahkan energi dan porsi yang dimakan
//         this.energi += porsi;

//         // Setelah itu cetak sambutan selamat makan!
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     // Jika mahasiswa bermain game sabanyak waktu yang ditempuh
//     main: function(jam) {

//         // Tambahkan energi dan waktu yang ditempuh
//         this.energi -= jam;

//         // Setelah itu cetak sambutan selamat bermain!
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     // Method baru, Jika mahasiswa tidur sebanyak waktu yang ditempuh
//     tidur: function(jam) {

//         // Tambahkan energi dan waktu yang ditempuh kemudian dikalikan dua
//         this.energi += jam * 2;

//         // Setelah itu cetak sambutan selamat tidur!
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// // Object function declaration, Setiap menjalankan fungsi ini
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // Mengembalikan object mahasiswa
//     return mahasiswa;
// }

// // Menginstansiasi object menggunakan function declaration
// let rifki = Mahasiswa('Rifki Ramadhan', 10);
// let rayani = Mahasiswa('Rayani Putri', 20);

// 5. Prototype (Prototyple inheritance)
// // Object constructor function, Setiap menjalankan fungsi ini
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// // Yang dikelola objecnya hanya satu, dan cukup mengambil prototype nya
// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// let rifki = new Mahasiswa ('Rifki Ramadhan', 10);

// 6. Prototype (JavaScript Class)
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     // Yang dikelola objecnya hanya satu, dan cukup mengambil prototype nya
//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let rifki = new Mahasiswa('Rifki Ramadhan', 10);
// let rayani = new Mahasiswa('Rayani Putri', 20);

// Contoh Prototype
// Variable angka yang berisi array dengan nilai satu, dua, tiga
let angka = [3, 2, 1];

// Method sort salah satu prototype dari object array
// console.log(angka.sort());
console.log(angka);

// // Jika menggunakan array
// let angka = new Array();

// // Pasti didalamnya ada syntax berikut yang terhubung ke parent class nya yaitu prototype dibelakang layar
// function Array() {
//     let this = Object.create(Array.prototype);   
// }