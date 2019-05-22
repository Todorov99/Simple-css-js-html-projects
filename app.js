window.addEventListener('load', () => {
    const sound = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div');

    // funnction for making sounds

    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function() {
            sound[index].play();
            sound[index].currentTime = 0;

        });
    });

});

