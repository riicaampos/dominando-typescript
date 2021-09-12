const sitee: unknown = 'https://hcode.com'
let listSites: string[] = [];

//2 jeitos diferentes de fazer um 'cast', de afirmar que o valor é uma string nesse caso
listSites.push(site as string);
listSites.push(<string> site);