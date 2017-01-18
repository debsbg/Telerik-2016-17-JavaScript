function solve(args){
    const s = +args[0];

    let result = [];

    for(let cars = 0; cars * 4 <= s; cars +=1){
        for(let trucks = 0; trucks * 10 + cars * 4 <= s; trucks += 1){
            for(let trikes = 0; trikes * 3 + trucks * 10 + cars * 4 <= s; trikes +=1){
                if(cars * 4 + trucks * 10 + trikes * 3 ===s){
                    result.push(`Cars: ${cars}, Trucks: ${trucks}, Trikes: ${trikes}`);
                }
               // console.log(result);
            }
           // console.log(result);
        }
        console.log(result);
    }
}

solve(['7']);
solve(['40']);