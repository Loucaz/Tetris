var block={
    initBlock: function() {
        this.blc = new Array();
        for(var k=0; k<4; k++){
            this.blc[k] = new Array();
            for(var i=0; i<4; i++){
                this.blc[k][i] = new Array();
            }
        }
        for(var k=0; k<4; k++){
            for(var i=0; i<4; i++){
                for(var j=0; j<4; j++){
                this.blc[k][i][j] = 0;
                }
            }
        }
	switch (Random(7)) {
            case 0: {   
                this.blc[0][1][0]=1;
                this.blc[0][1][1]=1;
                this.blc[0][1][2]=1;
                this.blc[0][1][3]=1;
             
                this.blc[1][0][2]=1;
                this.blc[1][1][2]=1;
                this.blc[1][2][2]=1;
                this.blc[1][3][2]=1;
                
                this.blc[2][2][0]=1;
                this.blc[2][2][1]=1;
                this.blc[2][2][2]=1;
                this.blc[2][2][3]=1;
                
                this.blc[3][0][1]=1;
                this.blc[3][1][1]=1;
                this.blc[3][2][1]=1;
                this.blc[3][3][1]=1;
            } break;
            
            case 1: {   
                this.blc[0][1][1]=2;
                this.blc[0][1][2]=2;
                this.blc[0][2][2]=2;
                this.blc[0][2][1]=2;
                
                this.blc[1][1][1]=2;
                this.blc[1][1][2]=2;
                this.blc[1][2][2]=2;
                this.blc[1][2][1]=2;
                
                this.blc[2][1][1]=2;
                this.blc[2][1][2]=2;
                this.blc[2][2][2]=2;
                this.blc[2][2][1]=2;
                
                this.blc[3][1][1]=2;
                this.blc[3][1][2]=2;
                this.blc[3][2][2]=2;
                this.blc[3][2][1]=2;
            } break;
            
            case 2: {   
                this.blc[0][1][1]=3;
                this.blc[0][1][2]=3;
                this.blc[0][2][2]=3;
                this.blc[0][1][3]=3;
                
                this.blc[1][0][2]=3;
                this.blc[1][1][2]=3;
                this.blc[1][2][2]=3;
                this.blc[1][1][1]=3;
                
                this.blc[2][1][1]=3;
                this.blc[2][1][2]=3;
                this.blc[2][0][2]=3;
                this.blc[2][1][3]=3;
                
                this.blc[3][0][2]=3;
                this.blc[3][1][2]=3;
                this.blc[3][2][2]=3;
                this.blc[3][1][3]=3;
            } break;

            case 3: {   
                this.blc[0][1][1]=4;
                this.blc[0][1][2]=4;
                this.blc[0][1][3]=4;
                this.blc[0][2][1]=4;
                
                this.blc[1][0][1]=4;
                this.blc[1][0][2]=4;
                this.blc[1][1][2]=4;
                this.blc[1][2][2]=4;
                
                this.blc[2][1][1]=4;
                this.blc[2][1][2]=4;
                this.blc[2][1][3]=4;
                this.blc[2][0][3]=4;
                
                this.blc[3][2][3]=4;
                this.blc[3][0][2]=4;
                this.blc[3][1][2]=4;
                this.blc[3][2][2]=4;
            } break;

           case 4: {   
                this.blc[0][1][1]=5;
                this.blc[0][1][2]=5;
                this.blc[0][2][3]=5;
                this.blc[0][1][3]=5;
                
                this.blc[1][0][2]=5;
                this.blc[1][1][2]=5;
                this.blc[1][2][2]=5;
                this.blc[1][2][1]=5;
                
                this.blc[2][1][1]=5;
                this.blc[2][1][2]=5;
                this.blc[2][0][1]=5;
                this.blc[2][1][3]=5;
                
                this.blc[3][0][2]=5;
                this.blc[3][1][2]=5;
                this.blc[3][2][2]=5;
                this.blc[3][0][3]=5;
            } break;
            
            case 5: {   
                this.blc[0][1][1]=6;
                this.blc[0][1][2]=6;
                this.blc[0][2][2]=6;
                this.blc[0][2][3]=6;
                
                this.blc[1][1][1]=6;
                this.blc[1][1][2]=6;
                this.blc[1][2][1]=6;
                this.blc[1][0][2]=6;
                
                this.blc[2][0][1]=6;
                this.blc[2][1][2]=6;
                this.blc[2][0][2]=6;
                this.blc[2][1][3]=6;
                
                this.blc[3][1][3]=6;
                this.blc[3][1][2]=6;
                this.blc[3][2][2]=6;
                this.blc[3][0][3]=6;
            } break;
            
            case 6: {   
                this.blc[0][1][3]=7;
                this.blc[0][1][2]=7;
                this.blc[0][2][2]=7;
                this.blc[0][2][1]=7;
                
                this.blc[1][1][1]=7;
                this.blc[1][1][2]=7;
                this.blc[1][2][2]=7;
                this.blc[1][0][1]=7;
                
                this.blc[2][1][1]=7;
                this.blc[2][1][2]=7;
                this.blc[2][0][2]=7;
                this.blc[2][0][3]=7;
                
                this.blc[3][1][3]=7;
                this.blc[3][1][2]=7;
                this.blc[3][0][2]=7;
                this.blc[3][2][3]=7;
            } break;
	}
    }
};


function Random(max) {
  return Math.floor(Math.random() * Math.floor(max));
};


