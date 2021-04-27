// Arraow Function

// 1. Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Rifki Ramadhan'));

// 2. Arrow Function Sederhana
// Membuat arrow function satu parameter
// const tampilNama = (nama) => {
//     return `Halo ${nama}`;
// }
// console.log('Rifki Ramadhan');

// // Membuat arrow function dua parameter
// const tampilNama = (nama, waktu, pesan) => {
//     return `Selamat ${waktu}, ${nama}, ${pesan}`;
// }
// console.log(tampilNama('Rifki Ramadhan', 'Pagi', 'Semoga harimu menyenangkan!'));
// console.log(tampilNama('Rifki Ramadhan', 'Siang', 'Semoga harimu menyenangkan!'));
// console.log(tampilNama('Rifki Ramadhan', 'Sore', 'Semoga harimu menyenangkan!'));
// console.log(tampilNama('Rifki Ramadhan', 'Malam', 'Semoga harimu menyenangkan!'));

// Membuat arrow function satu parameter tidak menggunakan kurung pada parameter, return dan kurung kurawal
// Implisit return
// const tampilNama = nama => 
//     `Halo ${nama}`;
// console.log('Rifki Ramadhan');

// Membuat arrow function tidak memakai parameter tetapi wajib memakai "()"
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// 3. Arrow Function Map
// Untuk memetakan sebuah function kedalam array
let mahasiswa = ['Satu', 'Dua', 'Tiga', 'Empat'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// Merubah menjadi arrow function dan dipetakan sebagai array
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Merubah menjadi arrow function dan dipetakan sebagai object
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jumlahHuruf: nama.length
// }));

// // Agar lebih rapih
// console.table(jumlahHuruf);

// Mengembalikan object yang property nya sama dengan nilainya tidak perlu menuliskan kedua nilainya
let jumlahHuruf = mahasiswa.map(nama => ({
    nama, 
    jumlahHuruf: nama.length
}));

// Agar lebih rapih
console.table(jumlahHuruf);