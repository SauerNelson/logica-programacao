function mediaAluno() {






// Lógica de Programação
// Problema : Obter 3 notas de um aluno, calcular a média.
// exibir a média e exibir a situação do aluno: aprovado,
// em exame ou reprovado,

console.log('Inicio do programa');

//declaração das variaveis:
// Variavel constante
// parseInt serve para converter caracteres em numeros. 
const nota1 = parseInt(document.getElementById("nota1").value);
const nota2 = parseInt(document.getElementById("nota2").value);
const nota3 = parseInt(document.getElementById("nota3").value);


// cálculo da média 
const media= (nota1 + nota2 + nota3) / 3;

console.log('A nota 1 é:', nota1);
console.log('A nota 2 é:', nota2);
console.log('A nota 3 é:', nota3);
console.log('A média do aluno é:' , media);

if (media >= 7) {
    console.log('APROVADO');
} else if (media >= 5) {
    console.log('EXAME');
}else {
    console.log('REPROVADO')
}

if (media >= 7) {
    document.getElementById('resultado').innerHTML = 'A média do aluno é:' + media + '<br>' + 'APROVADO'; 
}else if (media >= 5) {
    document.getElementById('resultado').innerHTML = 'A média do aluno é:' + media + '<br>' + 'EXAME'; 
}else {
    document.getElementById('resultado').innerHTML = 'A média do aluno é:' + media + '<br>' + 'REPROVADO'; 
}
    


console.log('Fim do programa');
}