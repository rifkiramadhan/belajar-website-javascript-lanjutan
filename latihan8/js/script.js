// Seperti mengimplementasikan data API sederhana

// Mengambil semua element video
// Mengubah array dari document yang menyeleksi data-duration
const videos = Array.from(document.querySelectorAll('[data-duration]'));


// Memilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// Mengambil durasi masing-masing video
    .map(item => item.dataset.duration)

// Mengubah druasi menjadi float, mengubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] -> Split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// Menjumlahkan semua detik
    .reduce((total, detik) => total + detik, 0);

// Mengubah formatnya menjadi jam, menit , detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Menyimpan JavaScript DOM
// Mengambil jumlah durasi
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

// Mengambil jumlah video
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(detik);
console.log(jmlVideo);

