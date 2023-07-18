const notas = [10, 6.5, 8, 7.5];

notas.forEach(function (nota, i,) {
    somaNota+= nota;
    console.log(i)
});
const media = somaNota / notas.length;
console.log(`A média das notas é ${media}`)