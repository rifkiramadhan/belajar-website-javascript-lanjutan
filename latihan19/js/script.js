// 1. Versi AJAX
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=7cf6431&s=avengers',
//     success: movies => console.log(movies),
// });

// 2. Versi Object AJAX Vanilla JavaScriot
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=7cf6431&s=avengers');
// xhr.send();

// 3. Menggunakan Modern JavaScript (Fetch)
// fetch('http://www.omdbapi.com/?apikey=7cf6431&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response));

// 4. Menggunakan Promise
// Contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji..');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('Not OK! : ' + response));

// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//            resolve('Ditepati setelah beberapa waktu!'); 
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu!'); 
//          }, 2000);
//     }
// });

// console.log('Mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('Selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('Not OK! : ' + response));

// console.log('Selesai');

// Menggunakan Promise.All
const film = new Promise(resolve => {
   setTimeout(() => {
      resolve([{
          judul: 'Avengers',
          sutradara: 'Rifki Ramadhan',
          pemeran: 'Yaya, Mpew'
      }]) 
   }, 1000); 
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Jakarta Selatan',
            temp: 28,
            kondisi: 'Cerah Berawan'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// Untuk menjalankan sekaligus
Promise.all([film, cuaca])
// .then(response => console.log(response));
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});