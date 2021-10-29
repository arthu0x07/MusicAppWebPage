const menu = document.querySelector(".aside-barralateral");
const botaomenu = document.querySelector(".botaomenu");
var menuaberto = false;

botaomenu.addEventListener('click', () => {

    if(menuaberto == true){
        fecharmenu();
        animacaobotaofechado();
        setTimeout(()=> {
            console.log('foi');
            menu.style.animationName = "x";
        }, 2000)

        menuaberto = false;
    } else {
        abrirmenu();
        animacaobotaoaberto();

        menuaberto = true;
    }
})

function abrirmenu(){
    menu.style.animationName = "abrirmenu";
}

function fecharmenu(){
    menu.style.animationName = "fecharmenu";
}

function animacaobotaoaberto(){
    botaomenu.style.animationName = "rodarbotaoabrir"
    
}

function animacaobotaofechado(){
    botaomenu.style.animationName = "rodarbotaofechar"

}
