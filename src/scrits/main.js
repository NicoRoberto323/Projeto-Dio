function Dados() {
  let dados = document.getElementById("dados").value.split(", ");
  let nome = dados[0];
  let xp = parseInt(dados[1]);
  let mensagem = "";
  let nivel = "";


    switch(true){
        case (xp <= 1000):
            mensagem = 'Ferrão de Ferro.<br> Tosco Frio. Silencioso.<br> Para aqueles que ainda não sangraram. Uma lâmina sem nome, forjada apenas para sobreviver ao primeiro golpe. Não pede fidelidade, não oferece misericórdia.';
            nivel = "Ferro";       
            break;
        case (xp >= 1001 &&xp <= 2000):
            mensagem = 'Ferrão de Bronze.<br> Mais forma do que força.<br> Você começa a entender que o mundo não se curva diante da esperança. Este ferrão ouvirá sua determinação, ainda que sua lâmina se parta em dúvidas.';
            nivel = "Bronze" 
            break;
        case (xp >= 2001 &&xp <= 5000):
            mensagem = 'Ferrão de Prata. <br> Polido pelo tempo, mas ainda frágil diante do abismo.<br> Os que empunham prata já conhecem o gosto da queda e da ascensão. Uma lâmina que reflete o que você esconde de si.';
            nivel = "Prata" 
            break;
        case (xp >= 5001 &&xp <= 7000):
            mensagem = 'Ferrão de Ouro.<br> Brilhante, mas ainda mortal.<br> Você ousa se erguer contra o inevitável. Este ferrão brilha não por glória, mas pela vontade de ferir até a luz.';
            nivel = "Ouro" 
            break;
        case (xp >= 7001 &&xp <= 8000):
            mensagem = 'Ferrão de Platina. <br> Frio. Perfeito. Impiedoso. <br>Não é a beleza que o define, mas o silêncio de tudo que tombou ao seu redor. A platina não vacila. Ela corta destino e dúvida com igual precisão.';
            nivel = "Platina" 
            break;
        case (xp >= 8001 &&xp <=9000):
            mensagem = 'Ferrão Ascendente. <br> Os sonhos morrem para que você caminhe.<br> Cada passo que dá está pavimentado com os ossos dos que tentaram antes. Você carrega o peso de promessas não cumpridas — e o ferrão canta por eles.';
            nivel = "Ascendente" 
            break;
        case (xp >= 9001 &&xp <= 10000):
            mensagem = 'Ferrão Imortal.<br> Nem sombra, nem luz... apenas o vazio permanece.<br> O tempo não mais lhe toca. O Vazio já o abraçou. Mesmo o coração dos pesadelos se encolhe diante da sua presença. Esta arma já não fere... ela consome.';
            nivel = "Imortal" 
            break;
        case (xp >= 10000):
            mensagem = 'Ferrão Radiante.<br> Branco como o grito da deusa esquecida.<br> A própria Luz teme ser tocada por sua lâmina. Não há mais dúvida, nem retorno. Você se tornou o corte final... e tudo o que é belo se parte em sua presença.';
            nivel = "Radiante" 
            break;
    }
    
document.getElementById("resultado").innerHTML =
    `O herói <strong>${nome}</strong> está no nível <strong>${nivel}</strong>.<br><br>${mensagem}`;
}
