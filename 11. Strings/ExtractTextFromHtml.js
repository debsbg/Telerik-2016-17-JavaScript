function solve(args) {
    let str = '';
    for (let i = 0; i < args.length; i+=1) {
      let strTmp = args[i].trim();
      let regex = /<.*?>/g;
      strTmp = strTmp.replace(regex, '');
      str += strTmp.trim();
    }
    console.log(str);

}