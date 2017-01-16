function Solve(args) {
    let search = args[0].toLowerCase();
        str = args[1].toLowerCase();
        len = str.lenght;
        let count = 0;
     
   
   let searchCount = FindWordOccurences(search, str);
   console.log(searchCount);

function FindWordOccurences(word, text) {
        let wordsCount = 0,
            indexWord = text.indexOf(word, 0);

        while (indexWord !== -1) {
            wordsCount += 1;
            indexWord = text.indexOf(word, indexWord + 1);
        }

        return wordsCount;
}
}

//Solve(['in',
 //   'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);
//9

