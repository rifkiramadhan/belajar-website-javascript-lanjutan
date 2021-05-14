// const coba = new Promise(resolve =>  {
//     setTimeout(() => {
//         resolve('selesai')        
//     }, 2000);
// });
// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) =>  {
        const waktu = 5000;
        if(waktu < 5000) {
            setTimeout(() => {
            resolve('Selesai')        
            }, waktu);
        } else {
            reject('Kelamaan!');
        }
    });
}

// 1. Menggunakan then dan catch
// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));


// 2. Menggunakan async dan await
// Meminta javascript untuk mencari script didalam function cobaAsync yang terdapat asyncronous
async function cobaAsync() {
    // Sebelum dijalankan tunggu sampai promise nya resolve atau tunggu dua detik

    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (error) {
        console.error(error);
    }
}
cobaAsync();