function Solve(args) {
    let numbers = args[1].split(' ').map(Number),
        appsCount = 0;
    // console.log(numbers);
    for (let i = 1; i < numbers.length - 1; i += 1) {
        if (IsLargerThanNeighbours(numbers, i)) {
            //appsCount += 1;
            return i;
        }
    }
    return -1;

    function IsLargerThanNeighbours(numbersArr, index) {
        index = index | 0;
        return numbersArr[index] > numbersArr[index - 1] && numbersArr[index] > numbers[index + 1];
    }
}