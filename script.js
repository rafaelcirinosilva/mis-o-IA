const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultados");

const textoResultado = document.querySelector(".texto-resultado");

const lista = [];

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 1 ","alternativa 2"],
    }
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "alternativa 1 ",
            "alternativa 2",
        ]
    }