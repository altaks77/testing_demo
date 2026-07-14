console.log('tetesttetstes') //KNP DI BLOK SEMUA WEH T_T, INI RUNNYA GIMANA
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

let card = {
  nama: "jawa",
  pw: 567,
  id: 12345678,
  saldo: 100000,
  utang: 500000
};

async function menu() {
    console.log("1. Tarik saldo \n2. Setor saldo \n3. Keluar");
    let c = await rl.question("Pilih menu.. : ", function(choose) { //T_T
    switch(choose) { //INI UDAH KALI, COBA RUN LG, COBA RUN LAGI. JANGAN DI BLOK SEMUA DONG! HMP
        case "1":
            let tarik = rl.question("Masukan jumlah saldo yang ingin ditarik : ");
            if (isNaN(tarik)) {
              console.log("Input harus berupa angka");
              menu();
            }
            else if (tarik > card.saldo) {
              console.log("maaf, anda teridentifikasi miskin")
              menu();
            }
            else {
              card.saldo -= tarik;
              console.log('Nih narik segini' + tarik + ' \nsisa saldo anda ' + card.saldo);
              menu();
            }
            break;
        case "2":
            let setor = rl.question("Masukan jumlah saldo yang ingin disetorkan : ");
            if (isNaN(setor)) {
              console.log("Mohon masukan saldo yang akan ditarik berupa angka"); //I DONT EVEN KNOW IF THIS WOULD WORK BUT LETS SEE
            }
            else {
                console.log(card.id + setor)
            }
            break;//BINGUNG BANGET AGASTA
        case "3":
            console.clear();
            console.log("Terima kasih telah menggunakan ATM kami");
            break;
            rl.close()
    }
    rl.close()
   });
}
async function jawa() {
  let b = await rl.question("Masukan pin anda..\n")
  if (b == card.pw) {
    console.log("Pin benar\n Selamat datang!");
    console.log(`nama : ${card.nama} \n id card : ${card.id} \n saldo : ${card.saldo} \n Utang : ${card.utang}`);
    if (card.utang > card.saldo) {
        console.log("defisit")
    }
    else {
        console.log("surplus")
    }
    menu();
  } else {
    console.log("Pin salah, gagal login");
    rl.close()
  }
}

let a = await rl.question("Tekan p untuk masukan kartu..\n"); //biar masukin kartunya, hehe
if (a === "p") {
  console.log("Kartu dimasukan");
  console.clear()
  jawa();
}
// masih follow
// gw mencet apaan ampe ngefollow begini, coba run lagi rip qi, i mau main, hehe
// eror syid, di bagian tarik ada await
// async fucntion (choose)ny coba diapain, run lagi coba
// pas bagian setor ato tariknya, dia kayak mandet gitu jadi kyk bisa ngespam jawaban. apa gr2 sistem async sama awaitnya ya.
// coba g pake bisa g
// malah eror di bagian isNaN nya. bingung suer dah, coba run rip qi gimme the runing thing
//udh tu
// mengapa begini ;-
//coba tanya sajat:)
//yey
//msh follow ya apa udh ngga, follow aoa bobo yu, bole, besok tanya kk ny aaj