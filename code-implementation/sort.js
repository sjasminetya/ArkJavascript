const divideAndSort = inputNumber => {
    if (typeof inputNumber === "number") {
        let arr = inputNumber.toString().split('').map(Number);

        if (arr.length - 1 !== 0) {
            arr.push(0);
        }

        let catchArray = [];
        let defaultNumber = 0;
        let previousZeroNumber = 0;

        for(let i = 0; i <= arr.length; i++) {
            if (arr[i] === defaultNumber) {
                if (previousZeroNumber === defaultNumber) {
                    catchArray.push(arr.slice(previousZeroNumber, i).sort());
                } else {
                    catchArray.push(arr.slice(previousZeroNumber + 1, i).sort());
                }
                previousZeroNumber = i;
            } 
        }
        const concatArray = [].concat(...catchArray).join('');
        console.log(concatArray);
    } else {
        console.log("Inputan harus angka!");
    }
}

divideAndSort(59056560159466056);

// slice (dari mana, sampai mana)
// slice (0,6)
// slice (6 + 1,13)
// slice (13 + 1, 16)