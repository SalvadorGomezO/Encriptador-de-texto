var botonEncriptar = document.querySelector("#ButEncriptar");
var botonDesencriptar = document.querySelector("#ButDesencriptar");
var botonCopiar = document.querySelector("#copiar");
var botonPegar = document.querySelector("#Pegar");

function obtenerCaracteres () {
    let textoCodificar = document.querySelector("#TextoOrigen").value;
    let arrtexto = Array.from(textoCodificar); 
    return arrtexto;
}

function obtenerPalabras () {
    let textoCodificar = document.querySelector("#TextoOrigen").value;
    let arrpalabra = textoCodificar.split(' ');
    return arrpalabra
}

function codificar (){
    let arrCaracteres = obtenerCaracteres();
    if (arrCaracteres.length != 0){
        var texto = codificador(arrCaracteres);
        mostarElemento(texto);
    }else {
        alert('Debe Ingresar Texto')
    }
}

function decodifica (){
    let arrPalabras = obtenerPalabras();
    if (!(arrPalabras[0] === "")){
        var texto = decodificador(arrPalabras);
        mostarElemento(texto);
    }else {
        alert('Debe Ingresar Texto')
    }
}

function mostarElemento (texto){
    let elementoTxt = document.querySelector("#textareaDeco");
    let elementoBut = document.querySelector("#copiar");
    let elementoImg = document.querySelector("#muneco");
    let elementoTxt1 = document.querySelector("#NingunMsj");
    let elementoTxt2 = document.querySelector("#IngreseTexto");
    elementoTxt.value = texto;
    elementoImg.classList.add('ocultar');
    elementoTxt1.classList.add('ocultar');
    elementoTxt2.classList.add('ocultar');
    elementoTxt.classList.remove('ocultar');
    elementoBut.classList.add('ButDesencriptar');
    elementoTxt.classList.add('textoDeco');
}

function copiar (){
    var texto = document.querySelector("#textareaDeco");
    texto.select();
    document.execCommand("copy");
}

async function pegara (){
    if (navigator.clipboard) console.log('Clipboard API available');
    try{
        const text =await navigator.clipboard.readText();
        var pega = document.querySelector("#TextoOrigen");
        pega.value = "";
        pega.value=text;
        console.log('Pasted content: ',text);
    }catch(err){
        console.error('Fallo leer clipboard: ',err);
    }
}

botonEncriptar.addEventListener('click',codificar);
botonDesencriptar.addEventListener('click',decodifica);
botonCopiar.addEventListener('click',copiar);
botonPegar.addEventListener("click",pegara);