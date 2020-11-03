const seleksiNilai = (nilaiAwal,nilaiAkhir,dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
    if (dataArray.length < 5){
        console.log("Jumlah angka dalam dataArray tidak ada");
    } else {
        const filterArray = dataArray.filter(item => item < nilaiAkhir && item > nilaiAwal);
        console.log(filterArray.sort());
    }
}
  
seleksiNilai(5,10,[5,3,6,2,11,9]);