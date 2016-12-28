function solve(args) {
   numbers = args;
    let maxNumber = +numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {
        let currentNumber = +numbers[i];
        
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }

console.log(maxNumber);
}

solve(['5', '2', '2', '4', '1']);
solve(['-2', '-22', '1', '0', '0']);
solve(['-2', '4', '3', '2', '0']);
solve(['0', '-2.5', '0', '5', '5']);
solve(['-3', '-0.5', '-1.1', '-2', '-0.1']);