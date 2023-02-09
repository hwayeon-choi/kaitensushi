let arr = [100, 8, 5];
let arr2 = [2, 3, 5, 7, 11, 13, 17, 19];
let sushi = [10, 20, 30, 40, 50];

function Seat(number) {
    this.number = number;
    this.bool = true;
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
console.log(seat);

function kaitensushi() {

    let count = 0;

    while(sushi.length !== 0) {
        for(let i = 0; i < arr[0]; i++) {

            let save = 0;

            if(sushi.length === 0) {
                break;

            } else {
                sushi = sushi.filter(x => !seat.includes(x));
                save = sushi.filter(x => seat.includes(x));
                console.log(save);
                // seat[n].bool = false;
                // save = n;

                // for(let n = 0; n < arr[1]; n++) {
                //     for(let m = 0; m < arr[2]; m++) {
                //         if(seat[n].bool) {
                //             // sushi.splice(m);
                //             seat[n].bool = false;
                //             save = n;
                //         } else continue;
                //     }
                // }
                if(sushi[sushi.length - 1] < arr[0]) {
                    sushi = sushi.map(m => m + 1);
                    console.log('pass')
                    count++;
                } else {
                    sushi[sushi.length - 1] = 0;
                    console.log('fail')

                    count++;
                }
                if(count === 10) {
                    seat[save].bool = true;
                }
            }
            console.log(sushi);
            console.log(count);
        }
    } 
    let result = count + 9;
    return result;
}

console.log(kaitensushi());