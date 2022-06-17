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
Tentukan probabilitas yang akan keluar di tiap value pada array 

example output
Kamu : Batu
Musuh : Gunting
Hasilnya : Kamu menang 
*/

function priorProbability() {
    let prior = [15, 23, 25, 23, 23, 10, 23, 40, 40, 40]
    var temp = [];
    for (var i = 0; i < prior.length; i++) {
        if (temp.length != 0) {

            if (prior[i] == temp) {
                temp.push(i)
            }
        } else {
            temp.push(i)
        }
    }
}