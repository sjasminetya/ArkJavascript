const name = [
  'Abigail','Alexandra','Alison',
  'Amanda','Angela','Bella',
  'Carol','Caroline','Carolyn',
  'Deirdre','Diana','Elizabeth',
  'Ella','Faith','Olivia','Penelope'
]

const searchName = (keyName,limit,myCallback) => {
  let arr = [];

  name.forEach((word,index) => {
    let res = word.toLowerCase();
    if (res.includes(keyName)) {
      arr.push(name[index]);
    }
  })
  let val = arr.slice(0, limit);
  myCallback(val);
}

function callback(array) {
  console.log(array);
}

searchName("an",3,callback);