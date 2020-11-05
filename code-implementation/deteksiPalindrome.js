function palindrome(str) {
    let lowerCase = str.toLowerCase();
    let result = "";
    for(let i = lowerCase.length-1; i >= 0; i--){
      result += lowerCase[i];
    }
    if(result === lowerCase){
      return 'palindrome';
    }else {
      return 'bukan palindrome';
    }
  }
  
console.log(palindrome('Malam'));
