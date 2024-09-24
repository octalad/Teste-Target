let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;

let total = sp + rj + mg + es + outros;

let pSp = (sp / total) * 100;
let pRj = (rj / total) * 100;
let pMg = (mg / total) * 100;
let pEs = (es / total) * 100;
let pOutros = (outros / total) * 100;

console.log("Porcentadem do estado de SP: ", pSp);
console.log("Porcentadem do estado de RJ", pRj);
console.log("Porcentadem do estado de ES", pEs);
console.log("Porcentadem do estado de MG", pMg);
console.log("Porcentadem de outros estados: ", pOutros);
