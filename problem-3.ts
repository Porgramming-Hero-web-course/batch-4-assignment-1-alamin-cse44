{
    //

      const countWordOccurrences = (sentence: string, word: string): number => {
        let cnt=0;

        const words = sentence.split(' ');

        for(let w of words) {
            let exact_word = w.split("!").join("").split(".").join("").split(",").join("");
            if(exact_word.toLowerCase() === word.toLowerCase()) {
                cnt++;
            }
        }

        return cnt;
      } 

      console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"))

    //
}