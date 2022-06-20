/**  
Selesaikan code program berikut, untuk menampilkan hasil hompimpa melawan computer
Gunakan console.log untuk menampilkan outputnya

example output
Kamu : Batu
Musuh : Gunting
Hasilnya : Kamu menang 
*/

hompimpa()

function hompimpa() {
    let arr = ["batu", "gunting", "kertas"];
    let enemy = arr[Math.floor(Math.random * arr.length)];
    let you = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    you.question("Keluarkan batu, gunting, kertas ?", hands => {
        console.log(`Kamu : ${hands}`);
        you.close();
    });
}


/**  
Tentukan berapa presentase di tiap value pada array 
Gunakan console.log untuk menampilkan outputnya

output:
10 is 10%
15 is 10%
23 is 45%
25 is 10%
40 is 25%
*/

// valuePercentage()

function valuePercentage() {
    let prior = [15, 23, 25, 23, 23, 10, 23, 40, 40, 40]

}

// function valuePercentage() {
//     let prior = [15, 23, 25, 23, 23, 10, 23, 40, 40, 40]
//     var temp = 0;
//     prior.sort();
//     for (var i = 0; i < prior.length; i++) {
//         if (prior[i + 1] != undefined) {
//             if (prior[i] == prior[i + 1]) {
//                 temp += 1
//             } else {
//                 temp += 1
//                 let result = (temp / prior.length) * 100;
//                 console.log(prior[i] + ` is ` + result + `%`);
//                 temp = 0;
//             }
//         } else {
//             temp += 1
//             let result = (temp / prior.length) * 100;
//             console.log(prior[i] + ` is ` + result + `%`);
//         }
//     }
// }

/**  
Ubah hasil yang ditampilkan menjadi hasil lain
Gunakan console.log untuk menampilkan outputnya

example output
Kamu : Batu
Musuh : Gunting
Hasilnya : Kamu menang
*/

function scameValue() {
    let arr = ["point 10000", "point 1000", "referral 5000", "referral 500"]
    let rand = Math.random() * arr.length;
}