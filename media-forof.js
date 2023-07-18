const notas = [10, 6.5, 8, 7.5];
let somaNota = 0;
for (let nota of notas) {
    somaNota += nota
}
const media = somaNota / notas.length;
console.log(`A média das notas é ${media}`)