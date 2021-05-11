// Destructuring Function Return Value

//1. Mendestructuring ketika valuenya array
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// Mendestructuring perkalian dua dikali tiga atau return falue dari function
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);

// 2. Mendestructuring ketika valuenya object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(kurang);


// Destructuring Function Arguments

const mhs1 = {
    nama: 'Rifki Ramadhan',
    umur: 22,
    email: 'riifkiramadhan2@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas:75
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai UAS saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));