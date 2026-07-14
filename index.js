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
    console.log("1. Tarik saldo \n2. transfer dana \n3. Keluar");
    let c = await rl.question("Pilih menu.. : ") //T_T
    switch(c) { //INI UDAH KALI, COBA RUN LG, COBA RUN LAGI. JANGAN DI BLOK SEMUA DONG! HMP
        case "1":
            let tarik = await rl.question("Masukan jumlah saldo yang ingin ditarik : ");
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
            let transfer = await rl.question("Masukan jumlah saldo yang ingin ditransfer : ");
            if (isNaN(transfer)) {
              console.log("Mohon masukan saldo yang akan ditransfer berupa angka"); //I DONT EVEN KNOW IF THIS WOULD WORK BUT LETS SEE
            }
            else {
                console.log(`Saldo sebanyak ${transfer} berhasil ditransfer`)
                console.log("Sisa saldo di rekening anda :", card.saldo - transfer)
                menu();
            }
            break;//BINGUNG BANGET AGASTA
        case "3":
            console.clear();
            console.log("Terima kasih telah menggunakan ATM kami");
            rl.close();
            break;
        default:
            console.clear();
            console.log("MASUKKAN ANGKA YANG SESUAI");
            menu();
            break;
    }
   };

async function jawa() {
  let pinInput = await rl.question("Masukan pin anda..\n");
  let pinType = Number(pinInput);
  if (pinType === card.pw) {
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
  await jawa();
}
else {
  console.log("masukin yang bener");
  console.clear
  rl.close()
};