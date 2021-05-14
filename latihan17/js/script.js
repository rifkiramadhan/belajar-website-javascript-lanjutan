// Callback

// 1. Menggunakan Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }
// tampilkanPesan(halo);

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => {
//     alert(`Halo, ${nama}`);
// });

// Data array of object
// const mhs = [
//     {
//         "nama" : "Rifki Ramadhan",
//         "nrp" : "0001",
//         "email" : "riifkiramadhan2@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "IdMhs" : 1
//     },
//     {
//         "nama" : "Rayani Putri",
//         "nrp" : "0002",
//         "email" : "rayani@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "IdMhs" : 2
//     },
//     {
//         "nama" : "Ardian",
//         "nrp" : "0003",
//         "email" : "ardian@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "IdMhs" : 3
//     },
//     {
//         "nama" : "Faqih Yugo",
//         "nrp" : "0004",
//         "email" : "faqih@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "IdMhs" : 4
//     },
//     {
//         "nama" : "Raras Wati",
//         "nrp" : "0005",
//         "email" : "raraswati@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "IdMhs" : 5
//     }
// ];

// console.log('Mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('Selesai');

// 2. Menggunakan Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// // function success() {

// // }

// // function error() {

// // }

// console.log('Mulai');
// getDataMahasiswa('js/DATA.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('Selesai');

// 3. Menggunakan JQuery
console.log('Mulai');
$.ajax({
    url: 'js/DATA.json',
    success: (mhs) => {
        mhs.forEach(m => {
            console.log(m.nama);
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('Selesai');