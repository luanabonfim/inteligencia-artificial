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
            enunciado: "Em um grupo de trabalho, qual papel você costuma assumir naturalmente?",

            alternativas: [
                {
                    texto: "Gosto de liderar, tomar decisões e organizar o time.",
                    afirmacao: "Você se destaca pela capacidade de tomar iniciativa, assumir responsabilidades e enxergar o todo. Tem uma mente estratégica e facilidade em influenciar e motivar pessoas. Consegue tomar decisões sob pressão e gosta de estruturar processos e direcionar a equipe. É confiante, ambicioso e naturalmente assume a frente em projetos. Seu desafio pode ser escutar mais e dividir o controle, mas sua presença é inspiradora e mobilizadora."
                },
                {
                    texto:    "Prefiro ficar nos bastidores, executando bem minhas tarefas.",
               
                    afirmacao: "Você é alguém prático, eficiente e comprometido. Gosta de ter clareza sobre seu papel e executa suas funções com excelência. É discreto, constante e confiável, preferindo evitar conflitos ou exposições desnecessárias. Seu foco está em entregar resultados de qualidade. Embora não busque liderar, sua contribuição é essencial para o sucesso coletivo. Seu ponto de atenção pode ser reconhecer mais o próprio valor e expressar suas ideias."
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