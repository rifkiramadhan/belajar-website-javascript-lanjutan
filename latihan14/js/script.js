// For..off

// Menggunakan Array
// const mhs = ['Rifki', 'Rayani', 'Ardian'];

// 1. Menggunakan for biasa
// for(let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// 2. Menggunakan forEach
// mhs.forEach(m => console.log(m));

// 3. Menggunakan for..off
// for(const m of mhs) {
//     console.log(m);
// }

// Menggunakan String
// const nama = 'Rifki';
// for(const n of nama) {
//     console.log(n);
// }

// const mhs = ['Rifki', 'Rayani', 'Ardian'];
// 1. Menggunakan forEach
// mhs.forEach((m, i) =>{
//     console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
// });

// 2. Menggunakan for tetapi menggakali dengan menambahkan entries()
// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
// }

// NodeList
const liNama = document.querySelectorAll('.nama');

// 1. Menggunakan foreach
// liNama.forEach(n => console.log(n.innerHTML));

// 2. Menggunaakn for..of
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// Arguments
// function jumlahkanAngka() {
//     // 1. Menggunakan reduce tidak bisa
//     // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);

//     // 2. Menggunakan foreach tidak bisa
//     // arguments.forEach(a => jumlah += a);

//     let jumlah = 0;
//     // 3. Menggunakan for..of bisa
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For..in
const mhs = {
    nama: 'Rifki Ramadhan',
    umur: 22,
    email: 'riifkiramadhan2@gmail.com'
}

for(m in mhs) {
    // Memanggil fungsi mhs index ke inisial m
    console.log(mhs[m]);
}