
function hasOddNumber(arr) {
    return arr.some(function(val){
        return val % 2 !== 0; 
    })
}

function hasAZero(num) {
    const numStr = num.toString();
    const numArr = numStr.split('');
    return numArr.some(function(val){
        return val === '0';
    })
    
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val){
        return val % 2 !==0;
    })
}


function hasNoDuplicates(arr) {
    return arr.every(function(val, index){
        for(let i = index+1; i<arr.length; i++){
            if(val === arr[i]){
                return false;
            }
        }
        return true;
    })
}

function hasCertainKey(arr, key) {
    return arr.every(function(val){
        return(key in val);
    })
}


function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val){
        return val[key] === searchValue;
    })
}
