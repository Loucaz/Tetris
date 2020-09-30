var dimension=window.innerHeight/30,
    ecart=2,
    mur=1,
    largeur=11,
    hauteur=21,
    temps=0;

//inicialisation de canvas
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (largeur+mur)*dimension+(largeur+mur+1)*ecart,//window.innerWidth,
    height = (hauteur+mur)*dimension+(hauteur+mur+1)*ecart;//window.innerHeight;
    

function init(){
    var ratio = window.devicePixelRatio;
    canvas.width  = width  * ratio;
    canvas.height = height * ratio;
    canvas.style.width  = width  + "px";
    canvas.style.height = height + "px";
    context.scale(ratio, ratio);

    context.fillStyle = "rgb(230, 230, 230)";
    context.fillRect(0, 0, width,height);
    play('music');
    volume("music", 0.1);
    initTab();
    initDessin();
    afficheScore();
};



window.onload = function(){
    init();
    console.log("LOAD");
    var jeu = setInterval(process, 10);
};

function process(){
    calcule();
    dessin();
    temps++;
};
