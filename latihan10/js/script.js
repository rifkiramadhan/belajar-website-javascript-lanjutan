// 1. HTML Fragments
// const mhs = {
//     nama: 'Rifki Ramadhan',
//     umur: 33,
//     nrp: '8080808080',
//     email: 'riifkiramadhan2@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>    
// </div>`;

// Memangil ke DOM
// document.body.innerHTML = el;

// 2. Looping, Array of Object (Contoh mengambil API)
// const mhs = [
//     {
//         nama: 'Rifki Ramadhan',
//         email: 'riifkiramadhan2@gmail.com'
//     },
//     {
//         nama: 'Adrian Ajah',
//         email: 'adrianajah@gmail.com'
//     },
//     {
//         nama: 'Rayani Putri',
//         email: 'rayaniputri@gmail.com'
//     }
// ];

// // Melakukan perulangan untuk mendapatkan data dari array object
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')} // Menggunakan chaining agar koma nya hilang
// </div>`;
// document.body.innerHTML = el;

// 3. Conditional
// Menggunakan ternary function
// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }

// // Jika judul lagu ada feat nya maka tampilkan nama orangnya
// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;
// document.body.innerHTML = el;

// 4. Nested
// Menggunakan HTML Fragment Bersarang (Array of Object)
const mhs = {
    nama: 'Rifki Ramadhan',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web', 
        'Analisa dan Perancangan Sistem Informasi',
        'Pemrogarman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object' 
    ]
};

// Mencetak list mata kuliah menggunakan perulangan method map yang disimpan kedalam function cetakMataKuliah
function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

// Mencetak lsit nama dan semester dari object
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;