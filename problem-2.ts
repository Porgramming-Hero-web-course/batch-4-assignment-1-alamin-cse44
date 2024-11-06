{
  //

  // set return only unique values & when we use STL, we don't need to write another loop that reduces the code size

  //   const removeDuplicates = (nums: number[]): number[] => {
  //     const newArray: number[] = [];
  //     for (const element of nums) {
  //       if (!newArray.includes(element)) {
  //         newArray.push(element);
  //       }
  //     }

  //     return newArray;
  //   };

  const removeDuplicates = (nums: number[]): number[] => {
    const newArray: number[] = [];
    for (const element of nums) {
      let isDuplicate: boolean = false;
      for (const newElement of newArray) {
        if (element === newElement) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        newArray.push(element);
      }
    }

    return newArray;
  };

  const nums: number[] = [1, 2, 2, 3, 4, 4, 5, 8, 6, 6, 7];

  const uniqueNums: number[] = removeDuplicates(nums);
  console.log(uniqueNums);

  //
}
