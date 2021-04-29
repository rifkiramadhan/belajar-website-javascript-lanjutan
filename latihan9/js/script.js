// Template literals / template string
// const nama = 'Rifki';
// const umur = 22;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// // 1. Menggunakan Concat
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');

// 2. Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('Halo!')}`);

// 3. Ternary Operator
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

// 4. HTML Fragments
const mhs = {
    nama: 'Rifki Ramadhan',
    umur: 22,
    nrp: '183112706470309',
    email: 'riifkiramadhan2@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>;`
console.log(el);