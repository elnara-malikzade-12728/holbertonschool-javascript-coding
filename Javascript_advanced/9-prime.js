const { performance } = require('perf_hooks');
const start = performance.now();
function countPrimeNumbers() {
    let count = onabort;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    return count;
}
const end = performance.now();
const timeUsed = end - start;
console.log(`Execution time of printing countPrimeNumbers was ${timeUsed} milliseconds`);
