//promise 1
const exam = new Promise((resolve, reject) => {
      setTimeout(() => {
        let rataRataLulus = 65;
        let hasilExam = 70;
        if (hasilExam > rataRataLulus) {
            resolve("Horayy!! Kamu lulus!");
        } else {
            reject(new Error("Maaf, kamu harus mengulang"));
        }
      }, 3000)
    })

exam
    .then ((res) => {
        console.log(res);
    })
    .catch ((res) => {
        console.log(res.message);
    })

//promise 2
const totalBelanja = inputTotal => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inputTotal >= 100000) {
                resolve("Selamat! Anda mendapatkan sebuah piring!");
            } else {
                reject(new Error("Maaf, Anda belum beruntung"));
            }
        }, 2000)
    })
}

const resultTotal = async() => {
    try {
        const total = await totalBelanja(80000);
        console.log(total);
    }
    catch(error) {
        console.log(error.message);
    }
}

resultTotal()