function Solve(args) {
    let str = args[0].split("");
        search1 = "(";
        search2 = ")";
        count1 = 0;
        count2 = 0;
        len = str.lenght;
//    console.log(str);

for (let i = 0; i < str.length; i++) {
    let element = str[i];
    if (element === search1) {
        count1+=1;
    }
    else if ( element === search2) {
        count2+=1;
    }
    
}

if (count1===count2) {
    console.log("Correct");
}
else{
    console.log("Incorrect");
}
}

//Solve(['((a+b)/5-d)']);
//Correct

