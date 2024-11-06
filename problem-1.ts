const sumArray = (nums : number[]): number => {
    let sum = 0;

    for (const element of nums) {
        sum += element
    }

    return sum;
}

const nums: number[] = [1, 2, 3, 4, 5];

console.log(sumArray(nums));