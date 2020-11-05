function palindrome(str) {
    let result = "";
    for(let i = str.length-1; i >= 0; i--){
      result += str[i];
    }
    if(result === str){
      return 'palindrome';
    }else {
      return 'bukan palindrome';
    }
  }
  
console.log(palindrome('malam'));