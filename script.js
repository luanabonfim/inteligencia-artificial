const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem um fim de semana totalmente livre. O que prefere fazer?",
        alternativas: [
            {
                texto: "Viajar para um lugar novo, explorar, experimentar comidas diferentes e conhecer novas pessoas.",
                afirmacao: "Você é aventureiro(a), curioso(a) e busca constantemente novas experiências. Gosta de sair da rotina e se sente energizado(a) por ambientes dinâmicos e cheios de novidade. Provavelmente valoriza liberdade, espontaneidade e é sociável."
            },
            {
                texto:  "Ficar em casa, maratonar uma série, ler um bom livro ou curtir um tempo tranquilo sozinho ou com poucos amigos.",
                afirmacao: "Você valoriza o conforto, a estabilidade e momentos de introspecção. Prefere qualidade à quantidade nas relações e costuma ser mais reservado(a). Ambientes tranquilos e seguros te ajudam a recarregar as energias."
            }    
           
        ]
    },
    {
       
            enunciado: "Se você ganhasse um ano sabático com todas as despesas pagas, o que você faria com esse tempo?",
            alternativas: [
                {
                    texto: "Viajaria o mundo para conhecer novas culturas e pessoas.",
                    afirmacao: "Você é movido por experiências, descobertas e contato com o novo. Tem uma mentalidade aberta e valoriza a diversidade cultural, a liberdade e o crescimento pessoal que vem de viver fora da zona de conforto. É alguém espontâneo, com facilidade de adaptação e interesse genuíno por pessoas e histórias. Costuma aprender mais com vivências do que com teorias. Seu desafio pode ser manter foco em objetivos de longo prazo, mas sua flexibilidade e criatividade são grandes forças."
                },
                {
                    texto:  "Aproveitaria para estudar, fazer cursos e me especializar.",
                    afirmacao: "Você tem um forte desejo de evoluir, aprender e conquistar metas pessoais e profissionais. É disciplinado, determinado e gosta de usar o tempo de forma produtiva. Enxerga o conhecimento como ferramenta de transformação. Prefere ambientes estruturados e metas bem definidas. Seu foco e comprometimento fazem de você alguém confiável e competente, embora, às vezes, possa se cobrar demais ou esquecer de descansar."
                }    
               
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();