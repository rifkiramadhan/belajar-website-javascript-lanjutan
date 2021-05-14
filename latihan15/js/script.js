// Spread Opertaor
// Memecah iterables menjadi single element

// const mhs = ['Rifki', 'Rayani', 'Ardian'];
// console.log(...mhs[0]);

// 1. Menggabungkan dua buah array
// const mhs = ['Rifki', 'Rayani', 'Ardian'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, 'Aji', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// 2. Mengcopy array
// const mhs = ['Rifki', 'Rayani', 'Ardian'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);

// 3. Menggunakan for
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// 4. Menggunakan method map
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// 5. Membuat animasi pada javascript
// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;