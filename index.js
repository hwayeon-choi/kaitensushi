let arr = [100, 8, 5];
let arr2 = [2, 3, 5, 7, 11, 13, 17, 19];
let sushi = [10, 20, 30, 40, 50];
let saveIdx = [];

function Seat(number) {
    this.number = number;
    this.count = 0;
}

function object(array) {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
        let temp = new Seat(array[i]);
        arr.push(temp);
    }
    return arr;
}

let seat = object(arr2);
// console.log(seat);

function sushiCheck() {
    for(let i = 0; i < sushi.length; i++) {
        if(sushi[i] < arr[0] - 1) {
            sushi[i]++;
        } else {
            sushi[i] = 0;
        }
    }
    return sushi;
}

function countCheck() {
    for(let i = 0; i < saveIdx.length; i++) {
        if(0 < saveIdx.length && 0 < seat[saveIdx[i]].count) {
            seat[saveIdx[i]].count--;
            if(seat[saveIdx[i]].count === 0) {
                saveIdx.splice(i, 1);
            }
        } else break;
    }
    return seat;
}

function kaitensushi() {

    let time = 0;

    while(sushi.length !== 0) {
        for(let i = 0; i < arr[0]; i++) {

            if(sushi.length === 0) {
                break;

            } else {
                for(let n = 0; n < arr[1]; n++) {
                    for(let m = 0; m < arr[2]; m++) {
                        if(seat[n].count === 0 && seat[n].number === sushi[m]) {
                            sushi.splice(m, 1);
                            seat[n].count = 10;
                            saveIdx.push(n);
                        } 
                        else {
                            continue;
                        };
                    }  
                }
                time++;
                sushiCheck();
                countCheck();
            }
            console.log(time);
            console.log(sushi);
            console.log(seat);
        }
    } 
    let result = time + 9;
    return result;
}

console.log(kaitensushi());