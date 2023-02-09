process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  
  let arr = lines[0].split(" ").map(Number);
  let arr2 = lines[1].split(" ").map(Number);
  let sushi = lines[2].split(" ").map(Number);
  
  function Seat(number) {
    this.number = number;
    this.bool = true;
  }

  function object(arr) {
      let obj = [];
      for(let i = 0; i < arr.length; i++) {
          let temp = new Seat(arr[i]);
          obj.push(temp);
      }
      return obj;
  }
  
  let seat = object(arr2);
  
  console.log(arr);
  console.log(seat);
  console.log(sushi);
  
  function kaitensushi() {

    let count = 0;

    while(sushi.length !== 0) {
        for(let i = 0; i < arr[0]; i++) {

            let save = 0;

            if(sushi.length === 0) {
                break;

            } else {
                for(let n = 0; n < arr[1]; n++) {
                    for(let m = 0; m < arr[2]; m++) {
                        if(seat[n].bool && seat[n].number === sushi[m]) {
                            sushi.splice(m);
                            seat[n].bool = false;
                            save = n;
                        } else continue;
                    }
                }
                if(sushi[sushi.length - 1] < arr[0] - 1) {
                    sushi = sushi.map(m => m + 1);
                    count++;
                } else {
                    sushi[sushi.length - 1] = 0;
                    count++;
                }
                if(count === 10) {
                    seat[save].bool = true;
                }
            }
        }
        console.log(sushi);
    } 
    let result = count + 9;
    return result;
　}

　console.log(kaitensushi());
  
});