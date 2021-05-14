// Rest Parameter

// 1. Menggunakan array notasi "..."
// function myFunction(...myArguments) {
//     // return `a = ${a}, b = ${b}, myArguments = ${myArguments}`;
//     return myArguments;
// }
// console.log(myFunction(1, 2, 3, 4, 5));

// function myFunction() {
//     // return Array.from(arguments);
//     return [...arguments];
// }
// console.log(myFunction(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     // let total = 0;
    
//     // 1. Menggunakan for..of
//     // for(const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     // 2. Menggunakan reduce
//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// 2. Menggunakan array destructuring
// const kelompok1 = ['Rifki', 'Rayani', 'Ardian', 'Faqih', 'Dian'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);

// 3. Object destructuring
// const team = {
//     pm: 'Rifki',
//     frontEnd1: 'Rayani',
//     frontEnd2: 'Andri',
//     backEnd: 'Faqih',
//     ux: 'Angga',
//     devOps: 'Kanu'    
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam);

// 4. Filtering
function filterBy(type, ...value) {
    // Menggunakan operator identitas agar tidak salah antara string satu dan angka satu
    return value.filter(v => typeof v === type);
}
console.log(filterBy('boolean', 1, 2, 'Rifki', false, 10, true, 'Rayani'));