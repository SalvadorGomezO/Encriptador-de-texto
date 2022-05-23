function codificador (arrtexto){
    for (let i=0; i<arrtexto.length;i++){
        if (arrtexto[i] == "a" ){
            arrtexto.splice(i+1,0,"i");
            i++;
        }else if (arrtexto[i] == "e"){
            arrtexto.splice(i+1,0,"n");
            i++;
            arrtexto.splice(i+1,0,"t");
            i++;
            arrtexto.splice(i+1,0,"e");
            i++;
            arrtexto.splice(i+1,0,"r");
            i++;
        }else if (arrtexto[i] == "i"){
            arrtexto.splice(i+1,0,"m");
            i++;
            arrtexto.splice(i+1,0,"e");
            i++;
            arrtexto.splice(i+1,0,"s");
            i++;
        }else if (arrtexto[i] == "o"){
            arrtexto.splice(i+1,0,"b");
            i++;
            arrtexto.splice(i+1,0,"e");
            i++;
            arrtexto.splice(i+1,0,"r");
            i++;
        }else if (arrtexto[i] == "u"){
            arrtexto.splice(i+1,0,"f");
            i++;
            arrtexto.splice(i+1,0,"a");
            i++;
            arrtexto.splice(i+1,0,"t");
            i++;
        }
    }
    let stringArrtexto= arrtexto.join("");
    return stringArrtexto;
}