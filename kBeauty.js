

function findK(num) {
    return (num).toString().split("").filter((item, i, ar) => ar.indexOf(item) === i).length;
}
function findKBeautiful(num, k) {
    let numLength = Math.log(num) * Math.LOG10E + 1 | 0;  // for positive integers
    let numberOfUniqueNumbersInNum = findK(num);
    if (numberOfUniqueNumbersInNum == k) {
        return num;
    } else if (k >= numLength) {
        return num;
    } else {
        let potentialnum = num;
        let notFind = true;
        while (notFind) {
            if (k == findK(potentialnum)) {
                notFind = false;
                return potentialnum;
            }
            potentialnum++;
        }
    }
}
var t0 = performance.now()

console.log(findKBeautiful(2021, 3));
console.log(findKBeautiful(177890, 2));
console.log(findKBeautiful(34512, 3));
console.log(findKBeautiful(724533, 4));
console.log(findKBeautiful(998244353, 1));
console.log(findKBeautiful(12345678, 10));


var t1 = performance.now()
console.log("[" + (t1 - t0) + " milliseconds] - Examples Test Cases.")


t0 = performance.now()

for (let n = 1; n < 1000; n++) {
    for (let k = 1; k < 10; k++) {
        findKBeautiful(n, k);
    }
}


t1 = performance.now()
console.log("[" + (t1 - t0) + " milliseconds] - n 1-1000 k 1-10.")


console.log("n:99 k:2 bk:" + findKBeautiful(99, 2));
console.log("n:99 k:3 bk:" + findKBeautiful(99, 3));
console.log("n:99 k:4 bk:" + findKBeautiful(99, 4));
console.log("n:99 k:4 bk:" + findKBeautiful(99, 1));
console.log("n:1111 k:1 bk:" + findKBeautiful(1111, 1));
console.log("n:1111 k:2 bk:" + findKBeautiful(1111, 2));
console.log("n:1111 k:3 bk:" + findKBeautiful(1111, 3));
console.log("n:1111 k:4 bk:" + findKBeautiful(1111, 4));
console.log("n:1111 k:5 bk:" + findKBeautiful(1111, 5));
console.log("n:8888 k:1 bk:" + findKBeautiful(8888, 1));
console.log("n:8888 k:2 bk:" + findKBeautiful(8888, 2));
console.log("n:8888 k:3 bk:" + findKBeautiful(8888, 3));
console.log("n:8888 k:4 bk:" + findKBeautiful(8888, 4));
console.log("n:8888 k:5 bk:" + findKBeautiful(8888, 5));







