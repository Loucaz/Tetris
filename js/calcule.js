/* global mur, hauteur, largeur, block */

var sNewPiece = 0,
sMovePiece = 1,
sDownPiece = 2,
sManageFullLine = 3,
sGameOver = 4,

state=sNewPiece,
touche=0,

niv=0,
tempsNiv =0,
score=0,

ypos=2,
xpos=5,
angle=0;

var grille = new Array();
for(var i=0; i<hauteur+mur; i++)
	grille[i] = new Array();
for(var i=0; i<hauteur+mur; i++){
   for(var j=0; j<largeur+mur; j++){
      grille[i][j] = -1;
    }
}

document.addEventListener('keydown', function(e) {
	touche=e.keyCode;
});

function initTab(){
	for(var i=1; i<hauteur; i++){
            for(var j=1; j<largeur; j++){
                grille[i][j] = 0;
            }
	}
	state=sNewPiece;
        score=0;
        niv=0;
};

function calcule () {
    switch (state) {
        case sNewPiece: {
                newPiece();
        } break;
        case sMovePiece: {
                movePiece();
        } break;
        case sDownPiece: {
        	downPiece();
        } break;
        case sManageFullLine: {
        	manageFullLine();
        } break;
        case sGameOver: {
        	gameOver();
        } break;
    }
};

function drawPiece(bool) {
    if (bool) {
        for (var l = 0; l < 4; l++) {
            for (var c = 0; c < 4; c++) {
                if (b.blc[angle][l][c] !== 0) {
                    grille[ypos + l][xpos + c] = b.blc[angle][l][c];
                }
            }
        }
    } else {
        for (var l = 0; l < 4; l++) {
            for (var c = 0; c < 4; c++) {
                if (b.blc[angle][l][c] !== 0) {
                    grille[ypos + l][xpos + c] = 0;
                }
            }
        }

    }
};

function verifBlock(a,y,x){
    for(var i=0; i<4; i++){
        for(var j=0; j<4; j++){
            if(b.blc[a][i][j]!==0 && grille[y+i][x+j]!==0){
                return false;
            }
	}
	
    }
    return true;
};

function nextAngle(){
    drawPiece(false);
    var anglenext= angle+1;
    if(anglenext>3)
        anglenext=0;
    if(verifBlock(anglenext,ypos,xpos))
        angle=anglenext;
    
    drawPiece(true);
};

function newPiece(){
    angle=0;
    ypos=mur;
    xpos=Math.round((largeur/2)-1.1);
    b = Object.create(block);
    b.initBlock();
    if(verifBlock(angle,ypos,xpos)){
    	drawPiece(true);
    	state=sMovePiece;
    }
    else{
    	state=sGameOver;
    }
   temps=0;
};

function movePiece(){
    drawPiece(false);
    if (touche===37) {
        if(verifBlock(angle,ypos,xpos-1)){
            xpos--;
        }
    }
    if (touche===38) {
         nextAngle();
    }
    if (touche===39) {
        if(verifBlock(angle,ypos,xpos+1)){
            xpos++;
   	}
    }
    if(temps*10>tempsNiv||touche===40){
    	state=sDownPiece;
    }
    touche=0;
    drawPiece(true);
};

function downPiece(){
    drawPiece(false);
    if(verifBlock(angle,ypos+1,xpos)){
        ypos++;
        state=sMovePiece;
    }
    else{
    	state=sManageFullLine;
    }
    drawPiece(true);
    temps=0;
};

function manageFullLine(){
    var sc=0,nbLigne=0;
    for (var l = (hauteur-mur); l >mur-1; l--) {
        if (isLineComplete(l) === true) {
            fall(l);			
            l++;
            nbLigne++;
        }
    }
    switch (nbLigne){
        case 0:{
        }break;
        case 1:{
            sc=40*(niv+1);
        }break;
        case 2:{
            sc=100*(niv+1);
        }break;
        case 3:{
            sc=300*(niv+1);
        }break;
        default:{
            sc=1200*(niv+1);    
        }break;
    }
    
    console.log("SCORE: "+score+" + "+sc);
    score+=sc;
    afficheScore();
    state=sNewPiece;
};

function fall(line) {
    for (var l = line; l > mur-1; l--) {
        for (var c = mur; c < largeur; c++) {
            grille[l][c] = grille[l-1][c];
        }
    }
    for (var c = mur; c < largeur; c++) {
        grille[mur][c] = 0;
    }
};

function isLineComplete(line) {
    for (var c = mur; c <largeur; c++) {
        if (grille[line][c]===0) {
            return false;
        }
    }
    return true;
};

function afficheScore (){
    tempsNiv=500-(niv*50);
    var s;
    if (score < 0)
        document.getElementById("score").innerHTML = "Perdu !";
    else if (score > 9999)
        document.getElementById("score").innerHTML = "Gagné !";
    else{
        s = "Score : " + score;
        document.getElementById("score").innerHTML = s;
    }
};

function gameOver(){
    score=-1;
    afficheScore();
    initTab();
};