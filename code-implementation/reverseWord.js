function membalikKalimat(word) {
    let newString = "";
    let wordArr = word.split(" ");
  
    for(let i = wordArr.length - 1; i >= 0; i--) {
      newString += wordArr[i] + " ";
    }
    return newString;
  }
  
console.log(membalikKalimat("Saya belajar javascript"));