let ult = 1;
let pen = 0;
let fib = 0;
let num = 8; //informar o numero desejado.

for (let i = 0; i < num; i++) {
  fib = ult + pen;
  pen = ult;
  ult = fib;
  if (fib == num) {
    console.log("Esta na sequencia");
    return;
  }
  if (i == num - 1) {
    console.log("Não esta na sequencia");
  }
}
