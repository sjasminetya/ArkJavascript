// 1. pop()
let city = ["Jakarta","Bogor","Depok","Bandung","Yogyakarta"];

let removeItem = city.pop();
console.log(city);

//penjelasan = method pop() digunakan untuk menghapus item terakhir dalam array.

// 2. shift()
let hobbies = ["Memasak","Mendengarkan musik","Membaca novel"];
let removeItemBeginning = hobbies.shift();
console.log(hobbies);

//penjelasan = method shift() digunakan untuk menghapus item pertama dalam array

// 3. unshift()
let addItemBeginning = hobbies.unshift("Memasak");
console.log(hobbies);

//penjelasan = method unshift() digunakan untuk menambah item di paling pertama dalam array

// 4. indexOf()
let fruits = ["Apple","Banana","Strawberry","Kiwi"]
let findIndex = fruits.indexOf("Banana");
console.log(findIndex);

//penjelasan = method indexOf() digunakan untuk mencari berapa index item di array

// 5. join()
let joinArray = fruits.join(", ");
console.log(joinArray);

//penjelasan = method join() digunakan untuk menjadikan array menjadi string

// 6. reverse()
let namaSiswa = ["Siti","Joko","Budi","Paijo","Rehan"]
let reverseArray = namaSiswa.reverse();
console.log(reverseArray);

//penjelasan = method reverse() digunakan untuk membalik atau memutar array dari belakang ke depan

// 7. splice()
let spliceArray = namaSiswa.splice(2,0,"Endah");
console.log(namaSiswa);

// penjelasan = method splice() digunakan untuk menambahkan item di dalam array secara spesifik. Contoh diatas: 4 artinya,
//  di index ke berapa kita akan menaruh item baru. 0 berarti berapa banyak item yang harus diremove

// 8. concat()
let namaSiswa2 = ["Putri","Ayu","Bintang","Rangga"];
let addArray = namaSiswa.concat(namaSiswa2);
console.log(addArray);

//penjelasan = method concat() digunakan untuk menggabungkan 2 array

// 9. slice()
let perlengkapanSekolah = ["Baju","Celana","Penggaris","Pensil","Buku","Penghapus"]
let sliceArray = perlengkapanSekolah.slice(2);
console.log(sliceArray);

//penjelasan = method slice() memotong array menjadi array baru. Contoh diatas berarti memotong item array, 
// yang dari index ke 2

// 10. some()
let number = [4,10,20,100];

function checkOver(num) {
  return num > 100;
}

function result () {
  return number.some(checkOver);
}

result();

//penjelasan = method some() digunakan di sebuah function untuk mengecek nilai item apakah true or false