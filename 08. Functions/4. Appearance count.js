function solve(args){
    let size = +args[0],
        n = args[1].split(' '),
        searchN = +args[2];

console.log(result(n, searchN));

        function result(n){
            let count = 0;

           for (let i=0; i < size; i +=1){
               if (n[i]==searchN) {
                   count += 1 ;
               }
           }
           return count;
        }



}

//solve(['8', '28 6 21 6 -7856 73 73 73 -56', '73']);
// 3
