const numbers = [9, 3];

const largestNumber = (values) => {
    let highest = 0;
    for (let i = 0; i < values.length; i += 1) {
        if (values[i] > highest) {
            highest = values[i];
        }
    }
    return highest;
}

console.log(largestNumber(numbers));