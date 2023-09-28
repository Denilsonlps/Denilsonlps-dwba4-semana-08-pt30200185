// Definição da classe Aluno
class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

// Array com objetos Aluno
var alunos = [
    new Aluno("João", "Silva", 7, 8.5),
    new Aluno("Maria", "Oliveira", 8, 9.5),
    new Aluno("Pedro", "Santos", 5, 6),
    new Aluno("Ana", "Ferreira", 6, 7)
];

// Função para mostrar os dados dos alunos
function mostrarDadosDosAlunos() {
    for (var i = 0; i < alunos.length; i++) {
        alert("Aluno: " + alunos[i].nomeCompleto() + "\n" +
              "Primeira Nota: " + alunos[i].primeiraNota + "\n" +
              "Segunda Nota: " + alunos[i].segundaNota + "\n" +
              "Nota Total: " + alunos[i].media().toFixed(2) + "\n" +
              "Situação: " + alunos[i].situacao());
    }
}

// Chamar a função para mostrar os dados dos alunos
mostrarDadosDosAlunos();
