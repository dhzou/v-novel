//




//
// 1.opt(i) = opt(i-2) + arr[i]
//          = opt(i-1)

var arr =[1,1,4,2,9];
function maxsum(i) {
    if (i === 0) return arr[0];
    if (i === 1) return   arr[0] > arr[1]?arr[0]:arr[1];
    const  a = maxsum(i-2) + arr[i]
    const  b = maxsum(i-1);
    return a > b ? a:b;


}

function maxsum() {
    if(arr.length === 0) return arr[0];
    if (arr.length === 1) return arr[0] > arr[1]?arr[0]:arr[1];
    const opt = [arr[0],arr[1]];
    for (let i = 2; i <= arr.length; i++) {
        const  a = opt[i-2] + arr[i]
        const  b = opt[i-1];
        opt[i] = a > b ? a:b;
    }
    return opt.pop();
}

console.log(maxsum());
