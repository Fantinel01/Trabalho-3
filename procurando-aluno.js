const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];

function exibeNomeNota(aluno) {
    if (listaAlunosMedias[0].includes(aluno)) {
        //const alunos = listaAlunosMedias[0];
        //const medias = listaAlunosMedias[1];
        const [alunos, medias] = listaAlunosMedias;
        const indice = listaAlunosMedias[0].indexOf(aluno);
        const  mediaAluno = medias[indice];
        console.log(indice)
        console.log(`${aluno} tem a média ${mediaAluno}.`)
    }
    else {
        console.log("Aluno não encontrado.");
    }
}
exibeNomeNota("Ana")