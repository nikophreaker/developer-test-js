/**  
Selesaikan code program berikut, untuk menampilkan hasil janken atau hompimpa melawan computer
Gunakan console.log untuk menampilkan outputnya

example output
Kamu : Batu
Musuh : Gunting
Hasilnya : Kamu menang 
*/

function janken() {
    let arr = ["batu", "gunting", "kertas"];
    let enemy = arr[Math.floor(Math.random())];
    let you = prompt("keluarkan batu, gunting, kertas ?");


}


/**  
Tentukan berapa presentase di tiap value pada array 
Gunakan console.log untuk menampilkan outputnya

output:
15 adalah 
Musuh : Gunting
Hasilnya : Kamu menang 
*/
priorProbability()

function priorProbability() {
    let prior = [15, 23, 25, 23, 23, 10, 23, 40, 40, 40]
    var temp = 0;
    prior.sort();
    for (var i = 0; i < prior.length; i++) {
        if (prior[i + 1] != undefined) {
            if (prior[i] == prior[i + 1]) {
                temp += 1
            } else {
                temp += 1
                let result = (temp / prior.length) * 100;
                console.log(prior[i] + ` is ` + result + `%`);
                temp = 0;
            }
        } else {
            temp += 1
            let result = (temp / prior.length) * 100;
            console.log(prior[i] + ` is ` + result + `%`);
        }
    }
}

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