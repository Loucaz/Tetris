function volume(idPlayer, vol) {
    var player = document.querySelector('#' + idPlayer);
	
    player.volume = vol;	
};

function play(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
	
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
};


