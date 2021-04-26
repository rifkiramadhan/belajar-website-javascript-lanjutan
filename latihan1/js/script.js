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
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     // Jika mahasiswa memakan sebanyak porsi yang dimakan
//     mahasiswa.makan = function(porsi) {

//         // Tambahkan energi dan porsi yang dimakan
//         this.energi += porsi;

//         // Setelah itu cetak sambutan selamat makan!
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     // Jika mahasiswa bermain game sabanyak waktu yang ditempuh
//     mahasiswa.main = function(jam) {

//         // Tambahkan energi dan waktu yang ditempuh
//         this.energi -= jam;

//         // Setelah itu cetak sambutan selamat bermain!
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     // Mengembalikan object mahasiswa
//     return mahasiswa;
// }

// // Menginstansiasi object menggunakan function declaration
// let rifki = Mahasiswa('Rifki Ramadhan', 10);
// let rayani = Mahasiswa('Rayani Putri', 20);

// 3. Constructor Function (Keyword new)
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    // Jika mahasiswa memakan sebanyak porsi yang dimakan
    this.makan = function(porsi) {

        // Tambahkan energi dan porsi yang dimakan
        this.energi += porsi;

        // Setelah itu cetak sambutan selamat makan!
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    // Jika mahasiswa bermain game sabanyak waktu yang ditempuh
    this.main = function(jam) {

        // Tambahkan energi dan waktu yang ditempuh
        this.energi -= jam;

        // Setelah itu cetak sambutan selamat bermain!
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

// Menginstansiasi object menggunakan constructor function
let rifki = new Mahasiswa('Rifki Ramadhan', 10);
let rayani = new Mahasiswa('Rayani Putri', 20);


// 4. Object.create
