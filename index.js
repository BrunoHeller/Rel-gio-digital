// variaveis de hora, minutos e segundos//
let hor = document.querySelector('.hora');  // Seleciona o elemento HTML com a classe 'hora'
let min = document.querySelector('.minuto'); // Seleciona o elemento HTML com a classe 'minuto'
let sec = document.querySelector('.segundo'); // Seleciona o elemento HTML com a classe 'segundo'

//taxa de atualizacao 
function taxa() {
    // Cria um novo objeto Date para obter a hora atual
    let tempoReal = new Date();

    // Obtém as horas, minutos e segundos da hora atual
    let horas = tempoReal.getHours();
    let minutos = tempoReal.getMinutes();
    let segundos = tempoReal.getSeconds();

    // Formata os valores para ter sempre dois dígitos, adicionando um zero à esquerda se necessário
    horas = horas.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    segundos = segundos.toString().padStart(2, '0');

    // Atualiza o conteúdo dos elementos HTML com os valores formatados
    hor.innerHTML = `${horas}`;
    min.innerHTML = `${minutos}`;
    sec.innerHTML = `${segundos}`;
}

// Chama a função 'taxa' a cada 1000 milissegundos (1 segundo) para atualizar o relógio
setInterval(taxa, 1000);

// Chama a função 'taxa' uma vez no início para inicializar o relógio
taxa()