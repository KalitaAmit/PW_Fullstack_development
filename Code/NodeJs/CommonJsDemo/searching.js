//  linearSearch function
function linearSearch(arr, val) {
    for (let i = 0; i < this.length; i++) {
        if (arr[i] == val)
            return i;
    }
    return -1;
}

//  binarySearch function
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== val && left <= right) {
        if (val < arr[middle])
            right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }
    return arr[middle == val ? middle : -1];
}

//  export only one function
//  module.exports = linerSearch;

//  export group of function or things
module.exports = {
    linearSearch,
    binarySearch
}

