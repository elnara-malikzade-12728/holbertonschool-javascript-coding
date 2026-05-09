const start = performance.now();
function countPrimeNumbers() {
    for (let i = 2; i <= 100; i++){
        if (i / 1 == i || i / i == 1){}
    }
}
const end = performance.now();
const timeUsed = end - start;
console.log(`Execution time of printing countPrimeNumbers was ${timeUsed} milliseconds`);
