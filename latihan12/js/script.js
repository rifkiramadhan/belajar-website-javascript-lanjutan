// Destructuring Variable / Assignment

// 1. Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Rifki Ramadhan'];

// // Semua items dipetakan dalam variable
// // const [salam, satu, dua, nama] = perkenalan;

// // Skip items yang tidak diperlukan
// const [salam, , , nama] = perkenalan;

// console.log(nama);

// 2. Swap Items (Menukar isi variable)
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// 3. Return value pada function 
// function coba() {
//     return [1, 2];
// }

// // Unpack array menjadi variable
// console.log(b);

// 4. Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(c);

// ================================================

// 1. Destructuring Object
// const mhs = {
//     nama: 'Rifki Ramadhan',
//     umur: 22
// }

// const {nama, umur} = mhs;
// console.log(nama);

// 2. Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'Rifki Ramadhan',
//     umur: 22
// });
// console.log(nama);

// 3. Assign ke variable baru
// const mhs = {
//     nama: 'Rifki Ramadhan',
//     umur: 22
// }

// const {nama: n, umur: u} = mhs;
// console.log(n, u);

// 4. Memberikan default value
// const mhs = {
//     nama: 'Rifki Ramadhan',
//     umur: 22,
//     email: 'riifkiramadhan2@gmail.com'
// }

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// 5. Memberikan nilai default dan assign ke variable baru
// const mhs = {
//     nama: 'Rifki Ramadhan',
//     umur: 22,
//     email: 'riifkiramadhan2@gmail.com'
// }

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);

// 6. Memberikan rest parameter
// const mhs = {
//     nama: 'Rifki Ramadhan',
//     umur: 22,
//     email: 'riifkiramadhan2@gmail.com'
// }

// const {nama, ...value} = mhs;
// console.log(value);

// 7. Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 1234,
    nama: 'Rifki Ramadhan',
    umur: 22,
    email: 'riifkiramadhan2@gmail.com'
}

function getIdMhs({id}) {
    return id;
}
console.log(getIdMhs(mhs));


