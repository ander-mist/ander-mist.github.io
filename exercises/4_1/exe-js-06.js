let peca = 'TORRE';

switch(peca.toLowerCase()){
    case 'peao': 
        console.log(peca+ " -> um passo pra frente de cada vez");  
    break;  
    case 'bispo':
        console.log(peca + " -> sempre cortando a diagonal");
    break;
    case "cavalo":
        console.log(peca + " -> de L em L ele te Ludibria");
    break;
    case 'torre':
        console.log(peca + " -> direto e reto essa é a torre");
    break;
    case 'rainha':
        console.log(peca + " -> para todos os lados não há lugar para se esconder da Rainha");
    break;
    case 'rei':
        console.log(peca + " -> para todos os lados um passo de cada vez, é melhor proteger o seu Rei");
    break;
    default:
        console.log(peca + " -> Não faz parte do nosso jogo");
    break;
}