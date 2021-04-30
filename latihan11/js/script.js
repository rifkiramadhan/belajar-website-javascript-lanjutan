// Tagged Templates

// const nama = 'Rifki Ramadhan';
// const umur = 22;

// function coba(strings, ...values) {

//     // Membuat variable kosong untuk merangkai satu persatu menggunakan forEach
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // })
//     // return result;

//     // Menggunakan reduce (Lebih ringkas)
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''} `, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// 2. Highlight
const nama = 'Rifki Ramadhan';
const umur = 22;
const email = 'riifkiramadhan2@gmail.com';

function highlight(strings, ...values) {

    // Menggunakan reduce (Lebih ringkas)
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

// Penggunaan sederhana tagged template, string dibawah ini dilewatkan terlebih dahulu kedalam function nya
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;
document.body.innerHTML = str;