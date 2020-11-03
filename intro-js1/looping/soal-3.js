const printSegitiga = num => {
  let str = "";
  if(typeof num === "number"){
    for(let i = 0; i <= num; i++){
      for(let j = 1; j <= num - i; j++){
        str += j;
      }
      str += "\n";
    }
    console.log(str);
  }else{
    console.log("Data harus number")
  }
}

printSegitiga(5);