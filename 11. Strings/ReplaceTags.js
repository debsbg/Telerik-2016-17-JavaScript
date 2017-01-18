function solve(args) {
    const html = args[0],
    // matches <a(whatever)href="(whatever as a group)"(whatever)>(whatever as a group)</a>
    // g at the end stands for global - execute on the whole string
        hrefRegexp = /<a.*?href="(.+?)".*?>(.*?)<\/a>/g,
    /** 
     * replace can be used with regular expressions - $1 and $2 are a 
     * way to access the groups that the regex matches
     **/
        replacedHtml = html.replace(hrefRegexp, '[$2]($1)');

    console.log(replacedHtml);
}