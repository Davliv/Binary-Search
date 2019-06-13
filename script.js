
let list = [2,1,8,9,15,45,78,41,24,56];

list.sort(function(a,b){return a-b});

console.log(list);

function binarySearch(value, list) {

        let first = 0;                
        let last = list.length-1;
        let position = 'element not found';
        let found = false;
        let middle;

    while (found === false && first <= last) {

        middle = Math.floor((first + last) / 2);

        if (list[middle] == value) {
            found = true;
            position = middle + ' index';
        } else if (list[middle] > value){
            last = middle - 1;
        } else {  
            first = middle + 1;
        }

    }

    return position;
}
console.log(binarySearch(9,list));
