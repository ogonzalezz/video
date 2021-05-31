document.addEventListener('DOMContentLoaded', () => {

    vid = document.getElementById('video');

    var respuesta1 = document.querySelector('.btn1');
    var respuesta2 = document.querySelector('.btn2');
    var respuesta3 = document.querySelector('.btn3');
    var respuesta4 = document.querySelector('.btn4');
    var respuesta5 = document.querySelector('.btn5');
    var respuesta6 = document.querySelector('.btn6');
    var respuesta7 = document.querySelector('.btn7');
    var respuesta8 = document.querySelector('.btn8');

    const play = document.querySelector('.play');
    let isClicked = false;

    play.addEventListener('click', () => {
        if(isClicked == false){
            vid.play();
            isClicked = true;
        } else{
            vid.pause();
            isClicked = false;
        }
    });

    respuesta1.addEventListener('click', () => {
        acertar();
        respuesta1.style.visibility = 'hidden';
        respuesta2.style.visibility = 'hidden';
        setTimeout(function(){ vid.currentTime = 21; }, 5000);
    });

    respuesta2.addEventListener('click', () => {
        fallar();
        respuesta1.style.visibility = 'hidden';
        respuesta2.style.visibility = 'hidden';
        setTimeout(function(){ vid.currentTime = 21; }, 5000);
    });

    respuesta3.addEventListener('click', () => {
        acertar();
        respuesta3.style.visibility = 'hidden';
        respuesta4.style.visibility = 'hidden';
        setTimeout(function(){ vid.currentTime = 32; }, 5000);
    });

    respuesta4.addEventListener('click', () => {
        fallar();
        respuesta3.style.visibility = 'hidden';
        respuesta4.style.visibility = 'hidden';
        setTimeout(function(){ vid.currentTime = 32; }, 5000);
    });

    respuesta5.addEventListener('click', () => {
        fallar();
        respuesta5.style.visibility = 'hidden';
        respuesta6.style.visibility = 'hidden';
        setTimeout(function(){ vid.currentTime = 44; }, 5000);
    });

    respuesta6.addEventListener('click', () => {
        acertar();
        respuesta5.style.visibility = 'hidden';
        respuesta6.style.visibility = 'hidden';
        setTimeout(function(){ vid.currentTime = 44; }, 5000);
    });

    respuesta7.addEventListener('click', () => {
        acertar();
        respuesta1.style.visibility = 'hidden';
        respuesta2.style.visibility = 'hidden';
        setTimeout(function(){ window.location.reload(); }, 5000);
    });

    respuesta8.addEventListener('click', () => {
        fallar();
        respuesta1.style.visibility = 'hidden';
        respuesta2.style.visibility = 'hidden';
        setTimeout(function(){ window.location.reload(); }, 5000);
    });



    function acertar(){
        vid.currentTime = 52;
        vid.play();
    }
    
    function fallar(){
        vid.currentTime = 58;
        vid.play();
    }
    

    vid.addEventListener('timeupdate', iniciarJuego);

    function iniciarJuego() {
        if (vid.currentTime > 14 && vid.currentTime < 14.2)
        {
            respuesta1.style.visibility = 'visible';
            respuesta2.style.visibility = 'visible';
            vid.pause();
        }
        else if ( vid.currentTime > 26 && vid.currentTime < 26.2)
        {
            respuesta3.style.visibility = 'visible';
            respuesta4.style.visibility = 'visible';
            vid.pause();

        }
        else if ( vid.currentTime > 38 && vid.currentTime < 38.2)
        {
            respuesta5.style.visibility = 'visible';
            respuesta6.style.visibility = 'visible';
            vid.pause();

        }
        else if ( vid.currentTime > 50 && vid.currentTime < 50.2)
        {
            respuesta7.style.visibility = 'visible';
            respuesta8.style.visibility = 'visible';
            vid.pause();

        }
    
    }

    iniciarJuego();

})

