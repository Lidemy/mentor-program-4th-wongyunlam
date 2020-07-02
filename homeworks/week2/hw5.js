function join(arr, concatStr) {
    if (arr.length === 0){
        return '';
    }

    var result = arr[0];
    for(i=1; i<arr.length; i++){
        result += concatStr + arr[i];
    }
    return result;
}

function repeat(str, times) {
    var result = '';
    for(i=1; i<=times; i++){
        result += str;
    }
    return result;
}

console.log(join(["a", "b", "c"], " "));
console.log(repeat('xd', 5));


function isValid(arr) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] <= 0) return 'invalid'
    }
    for(var i=2; i<arr.length; i++) {
        if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
    }
    return 'valid'
}

console.log(isValid([3, 5, 8, 13, 22, 35]))