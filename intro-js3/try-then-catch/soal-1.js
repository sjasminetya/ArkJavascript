const cekHariKerja = day => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat'];
            let cek = dataDay.find((item) => {
                return item === day;
            })
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3000)  
    })
}

// try catch
const resultDay = async() => {
    try {
        const result = await cekHariKerja('sabtu');
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

resultDay();

// then catch
cekHariKerja('rabu')
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.message);
})

// perbedaan then catch dan try catch

// try catch digunakan untuk menghandle error. try untuk menguji kesalahan 
// saat program dijalankan. catch digunakan untuk menangkap error yang terjadi 
// di try. try catch dibungkus dengan async await

// then akan dipanggil jika sebuah promise berhasil atau statusnya fulfiled. 
// sedangkan catch akan dipanggil ketika sebuah promise gagal atau statusnya 
// rejected