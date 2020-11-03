let indonesia = 60;
let inggris = 80;
let matematika = 70;
let ipa = 90;

const rataRata = (indonesia + inggris + matematika + ipa)/4;

if(indonesia == undefined || inggris == undefined || matematika == undefined || ipa == undefined){
  console.log("Anda harus mengisi semua nilai");
} else if(rataRata >=90 && rataRata <= 100){
  console.log(`Rata rata = ${rataRata}`);
  console.log("Grade = A");
} else if(rataRata >= 80 && rataRata <= 89){
  console.log(`Rata rata = ${rataRata}`);
  console.log("Grade = B");
} else if(rataRata >= 70 && rataRata <= 79){
  console.log(`Rata rata = ${rataRata}`);
  console.log("Grade = C");
} else if(rataRata >= 60 && rataRata <= 69){
  console.log(`Rata rata = ${rataRata}`);
  console.log("Grade = D");
} else if(rataRata >= 0 && rataRata <= 59){
  console.log(`Rata rata = ${rataRata}`);
  console.log("Grade = E");
}