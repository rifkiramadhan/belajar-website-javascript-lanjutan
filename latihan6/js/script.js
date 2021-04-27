// Konsep this Pada Arrow Function

// 1. Constructor function
// const Mahasiswa = function() {

//     // This mengacu kepada objectnya
//     this.nama = "Rifki Ramadhan";
//     this.umur = 22;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}, tahun.`);   
//     }

//     // // Begitu this maka akan mengacu ke Mahasiswa
//     // console.log(this);
// }

// // Ketika di instansiasi
// const rifki = new Mahasiswa();

// 2. Arrow Function Menggunakan Constructor Function
// const Mahasiswa = function() {
//     // This mengacu kepada objectnya
//     this.nama = "Rifki Ramadhan";
//     this.umur = 22;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}, tahun.`);   
//     }
// }

// // Ketika di instansiasi
// const rifki = new Mahasiswa();


// 3. Arrow Function Menggunakan Object Literal
// const mhs1 = {
    
//     // Lexical scope
//     nama: "Rifki Ramadhan",
//     umur: 22,

//     // Menggunakan function
//     // sayHello: function() {
//     //     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}, tahun.`);   
//     // }

//     // Menggunakan arrow function
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}, tahun.`);   
//     }
// }

// 4. Arrow Function Menggunakan Constructor Function dan set interval
// const Mahasiswa = function() {

//     // This mengacu kepada objectnya
//     this.nama = "Rifki Ramadhan";
//     this.umur = 22;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}, tahun.`);   
//     }

//     // Setiap setengah detik umurnya bertambah satu
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// // Ketika di instansiasi
// const rifki = new Mahasiswa();

// Membuat JavaScript Kotak
const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    
    this.classList.toggle(satu)
    // Menunggu beberapa detik kemudian jalankan sebuah function
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});
