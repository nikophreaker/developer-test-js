/**  
Selesaikan code program berikut, untuk menampilkan hasil hompimpa melawan computer
Gunakan console.log untuk menampilkan outputnya

example output
Kamu : Batu
Musuh : Gunting
Hasilnya : Kamu menang 
*/

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
Cari nilai Mean, Median, Mode, Min, Max pada array berikut (urutkan terlebih dahulu)
Gunakan console.log untuk menampilkan outputnya

example output
Mean is 26.2
Median is 23
Mode is 23
Min is 10
Max is 40
*/
aritmatika();

function aritmatika() {
    let arrData = [15, 23, 25, 23, 23, 10, 23, 40, 40, 40]
    arrData.sort();

    let mean = arrData.reduce((a, b) => (a + b)) / arrData.length;
    console.log(`Mean is ${mean}`);

    let median = (arrData.length % 2 === 0) ? (arrData[arrData.length / 2 - 1] + arrData[arrData.length / 2]) / 2 : arrData[(arrData.length - 1) / 2]
    console.log(`Median is ${median}`);

    const mode = a =>
        Object.values(
            a.reduce((count, e) => {
                if (!(e in count)) {
                    count[e] = [0, e];
                }

                count[e][0]++;
                return count;
            }, {})
        ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];;

    console.log(`Mode is ${mode(arrData)}`);

    let min = Math.min(...arrData);
    console.log(`Min is ${min}`);

    let max = Math.max(...arrData);
    console.log(`Max is ${max}`);

}