var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

pincel.fillStyle = "gray";
pincel.fillRect(0, 0, tela.width, tela.height);
var paraDireita = true
var baixo = true

var bolinha =
{
    dirX: 600,
    dirY: Math.floor(Math.random() * 710) + 10
}

var player1 = {
    dirX: 10,
    dirY: 360,
    pontos: 0
}


var player2 = {
    dirX: 1190,
    dirY: 360,
    pontos: 0
}

function desenharPontos()
{
    pincel.font = "30px Arial";
    pincel.fillStyle = "white";
    pincel.fillText("Player 1: " + player1.pontos, 100, 100);

    pincel.font = "30px Arial";
    pincel.fillStyle = "white";
    pincel.fillText("Player 2: " + player2.pontos, 900, 100);
}

function desenhar()
{
    pincel.fillStyle = "red";
    pincel.beginPath();
    pincel.arc(bolinha.dirX, bolinha.dirY, 15, 0, 2*Math.PI);
    pincel.fill();
    pincel.closePath;

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.rect(player1.dirX, player1.dirY-100, -20, 200);
    pincel.fill();

    pincel.rect(player2.dirX, player2.dirY-100, 20, 200);
    pincel.fill();

    desenharPontos();
}

function Main()
{
    limpaTela();
    movimentoBolinha();
    InputPlayer();
    desenhar();
}

function limpaTela()
{
    pincel.clearRect(0, 0, 1200, 720)
    pincel.fillStyle = "gray";
    pincel.fillRect(0, 0, tela.width, tela.height);
}

function movimentoBolinha()
{
    if(bolinha.dirX > 1650)
    {
        ponto(player1)
    }else if(bolinha.dirX < -450)
    {
        ponto(player2)
    }
    if(bolinha.dirY > 580)
    {
        baixo = false;
    }
    else if(bolinha.dirY < 80)
    {
        baixo = true;
    }

    if(bolinha.dirX == player1.dirX && (bolinha.dirY <= player1.dirY+110 && bolinha.dirY >= player1.dirY-110))
    {
        paraDireita = true;
    }
    if(bolinha.dirX == player2.dirX && (bolinha.dirY <= player2.dirY+110 && bolinha.dirY >= player2.dirY-110))
    {
        paraDireita = false;
    }


    if(paraDireita)
    {
        bolinha.dirX += 10;
    }else{
        bolinha.dirX -= 10;
    }
    if(baixo)
    {
        bolinha.dirY += 10;
    }
    else{
        bolinha.dirY -= 10;
    }
    
}

function ponto(player)
{
    player.pontos++;
    bolinha.dirX = 600;
    bolinha.dirY = Math.floor(Math.random() * 710) + 10;;
}


function InputPlayer()
{
    document.addEventListener('keydown', function(e){
        if(e.key === 'w' || e.key === 's')
        {
            movimentoPlayer(player1, e.key);
            e.stopImmediatePropagation();
        }
        if(e.key === 'ArrowUp' || e.key === 'ArrowDown')
        {
            movimentoPlayer(player2, e.key);
            e.stopImmediatePropagation();
        }
    })
}

function movimentoPlayer(player, key)
{
    console.log("movimento");
    if(key === "w" || key === "ArrowUp")
    {
        player.dirY -= 100;
    }
    if(key === "s" || key === "ArrowDown")
    {
        player.dirY += 100;
    }
}

setInterval(Main, 10);
paraDireita = true;
desenhar();
Main();
