function decodificador (arrpalabras) {

    var subCadena = "";

    for (var i = 0; i < arrpalabras.length; i++){
        subCadena = Array.from(arrpalabras[i]);
        for (var j = 0; j < subCadena.length; j++){
            if (subCadena[j] == 'a'){
                if (subCadena[j+1] == 'i'){
                    subCadena.splice(j+1,1);
                }
            }else if (subCadena[j] == 'e'){
                if (subCadena[j+1] == 'n'){
                    if (subCadena[j+2] == 't'){
                            if(subCadena[j+3] == 'e'){
                                if(subCadena[j+4] == 'r'){
                                    subCadena.splice(j+1,4);
                                }
                            }
                        }
                    }
            }else if (subCadena[j] == 'i'){
                if (subCadena[j+1] == 'm'){
                    if (subCadena[j+2] == 'e'){
                            if(subCadena[j+3] == 's'){
                                    subCadena.splice(j+1,3);
                            }
                        }
                    }
            }else if (subCadena[j] == 'o'){
                if (subCadena[j+1] == 'b'){
                    if (subCadena[j+2] == 'e'){
                            if(subCadena[j+3] == 'r'){
                                    subCadena.splice(j+1,3);
                            }
                        }
                    }
            }else if (subCadena[j] == 'u'){
                if (subCadena[j+1] == 'f'){
                    if (subCadena[j+2] == 'a'){
                            if(subCadena[j+3] == 't'){
                                    subCadena.splice(j+1,3);
                            }
                        }
                    }
            }
        }
        arrpalabras[i] = subCadena.join("") + " ";
    }

    let stringArrtexto= arrpalabras.join("");
    return stringArrtexto;
}