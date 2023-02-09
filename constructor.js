let arr2 = [1, 2, 3];

function Seat(number) {
    this.number = number;
    this.bool = true;
}

  
function obj (arr) {
    let seat = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = new Seat(arr[i]);
        seat.push(temp);
    }
    return seat;
}

console.log(obj(arr2)[0].number);