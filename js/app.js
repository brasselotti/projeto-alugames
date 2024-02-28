var quantidadeAlugada = 1;
var palavraAlugada;

exibirQuantidade(); 

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    // alert(nomeJogo.innerHTML);

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo "${nomeJogo.textContent}"?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            quantidadeAlugada--;
            //alert('Jogo devolvido');
        }         
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        quantidadeAlugada++;
    }

exibirQuantidade();

}

function exibirQuantidade (){
    if (quantidadeAlugada === 1){
        palavraAlugada = 'jogo alugado';
    } else {
        palavraAlugada = 'jogos alugados';
    }
    console.log(`Você possui ${quantidadeAlugada} ${palavraAlugada}`);
}