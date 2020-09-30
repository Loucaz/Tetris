/* global context, largeur, ecart, mur, dimension, hauteur, grille */

function initDessin(){ 
    context.fillStyle= "rgb(0, 0, 0)";
    context.fillRect(0, 0, (largeur+mur)*dimension+(largeur+mur+1)*ecart,(hauteur+mur)*dimension+(hauteur+mur+1)*ecart); 
    context.fillStyle= "rgb(150, 150, 150)"; 
    for(var i=0; i<hauteur+mur; i++){
        for(var j=0; j<largeur+mur; j++){
            if(grille[i][j] === -1){
                context.fillRect(j*(dimension+ecart)+ecart, i*(dimension+ecart)+ecart, dimension,dimension);
            }
        }
    }
};

function dessin(){
    for(var i=1; i<hauteur; i++){
        for(var j=1; j<largeur; j++){
            context.fillStyle= "rgb(0, 0, 0)";
            if(grille[i][j] === 1)
                context.fillStyle= "rgb(0, 255, 255)";
            if(grille[i][j] === 2)
                context.fillStyle= "rgb(255,255,0)";
            if(grille[i][j] === 3)
                context.fillStyle= "rgb(170, 0, 255)";
            if(grille[i][j] === 4)
                context.fillStyle= "rgb(255, 165, 0)";
            if(grille[i][j] === 5)
                context.fillStyle= "rgb(0, 0, 255)";
            if(grille[i][j] === 6)
                context.fillStyle= "rgb(255, 0, 0)";
            if(grille[i][j] === 7)
                context.fillStyle= "rgb(0, 255, 0)";
            context.fillRect(j*(dimension+ecart)+ecart, i*(dimension+ecart)+ecart, dimension,dimension);
        }
    }
};