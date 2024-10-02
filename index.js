// Mengimpor modul readline-sync untuk mengambil input dari pengguna
const readline = require("readline-sync"); 

// Mengambil input angka pertama dari pengguna dan mengonversinya menjadi float
const angkaPertama = parseFloat(readline.question("Masukkan Angka Pertama: "));
// Mengambil input operator dari pengguna
const operator = readline.question("Masukkan Operator (+, -, *, /, %) : ");
// Mengambil input angka kedua dari pengguna dan mengonversinya menjadi float
const angkaKedua = parseFloat(readline.question("Masukkan Angka Kedua : "));

// Validasi inputan untuk memastikan angkaPertama dan angkaKedua adalah angka yang valid
if (isNaN(angkaPertama) || isNaN(angkaKedua)){
    // Jika input tidak valid, tampilkan pesan error
    return console.log("Inputan tidak sesuai !!!");
}else {
    // Jika input valid, lanjutkan eksekusi kode dengan menghitung hasil
    const hasil = execute(angkaPertama, angkaKedua, operator);
    console.log(`Hasilnya adalah ${hasil}`); // Menampilkan hasil perhitungan
}

// Fungsi untuk melakukan operasi matematika berdasarkan operator yang diberikan
function execute(angkaPertama, angkaKedua, operator){
    switch (operator) {
        case "+": // Jika operator adalah tambah
            return angkaPertama + angkaKedua;
        case "-": // Jika operator adalah kurang
            return angkaPertama - angkaKedua;
        case "*": // Jika operator adalah kali
            return angkaPertama * angkaKedua;
        case "/": // Jika operator adalah bagi
            // Memeriksa jika angkaKedua adalah nol untuk menghindari pembagian dengan nol
            if (angkaKedua === 0) {
                return console.log("Error: Tidak bisa dibagi dengan nol");
            }
            return angkaPertama / angkaKedua; // Mengembalikan hasil pembagian
        case "%": // Jika operator adalah modulus
            return angkaPertama % angkaKedua; // Mengembalikan sisa hasil bagi
        default: // Jika operator tidak valid
            console.log("operator tidak valid");
    }
}

/*
 Operasi matematika dasar yang bisa digunakan:
 &&
 ||
 +
 -
 *
 /
 %
 =
 ==
 ===
*/
