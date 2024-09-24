const data = require("./dados.json");

let fatTot = 0;
let fatMed = 0;
let fatMin = data[0].valor;
let fatMax = data[0].valor;
let diasUt = 0;
let diasMaiorMed = 0;

for (let i = 0; i < data.length; i++) {
  fatTot = fatTot + data[i].valor;
  data[i].valor != 0 ? diasUt++ : "";
  data[i].valor > fatMax ? (fatMax = data[i].valor) : "";
  data[i].valor < fatMin && data[i].valor != 0 ? (fatMin = data[i].valor) : "";
}

fatMed = fatTot / diasUt;

for (let i = 0; i < data.length; i++) {
  data[i].valor > fatMed ? diasMaiorMed++ : "";
}

console.log("Menor valor faturado: ", fatMin);
console.log("Maior valor faturado: ", fatMax);
console.log("Media de faturamento do mês: ", fatMed);
console.log(
  "Quantidade de dias do mês que o faturamento foi maior que a média: ",
  diasMaiorMed
);
