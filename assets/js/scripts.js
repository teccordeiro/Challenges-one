function criptografar(){
    limpar();

    let textoDigitado = pegarTextoDigitado()
    
    const a = /a/g;
    const e = /e/g;
    const i = /i/g;
    const o = /o/g;
    const u = /u/g;
  
    return textoDigitado
    .replace(e, "enter")  
    .replace(i, "imes")
    .replace(a, "ai")     
    .replace(o, "ober")
    .replace(u, "ufat");

}

function descriptografar(){
    limpar();

    let textoDigitado = pegarTextoDigitado()
    
    const ai = /ai/g;
    const enter = /enter/g;
    const imes = /imes/g;
    const ober = /ober/g;
    const ufat = /ufat/g;
  
    return textoDigitado
    .replace(enter, "e")  
    .replace(imes, "i")
    .replace(ai, "a")     
    .replace(ober, "o")
    .replace(ufat, "u");    
}

function limpar()
{
    document.getElementById('imagem-lateral').style.display = "none";
    document.getElementById('nenhumaMensagem').style.visibility = "hidden";
    document.getElementById('texto_paragrafo').style.display = "none";
    document.getElementById('texto-usuario-paragrafo-criptografado').style.display = "block";
    
    
}



function pegarTextoDigitado(){
   var texto =  document.getElementById('texto-digitado').value;
   return texto;
}

function exibirTextoDigitado()
{   
    let texto = criptografar();
    document.getElementById('texto-usuario').style.display = "flex";
    document.getElementById("texto-usuario-paragrafo-criptografado").innerHTML = texto;

    
}

function exibirTextoDescriptografar()
{   
    let texto = descriptografar();
    document.getElementById('texto-usuario').style.display = "flex";
    document.getElementById("texto-usuario-paragrafo-criptografado").innerText = texto;

    
}


function limparTextArea(){
     document.getElementById("texto-digitado").innerText ="";

}


function copiarTexto()
{
    document.getElementById('nenhumaMensagem').style.display = "flex";
    var textoCriptografado =  document.getElementById("texto-usuario-paragrafo-criptografado").innerText;
    navigator.clipboard.writeText(textoCriptografado);
    document.getElementById('nenhumaMensagem').style.visibility = "visible";
    document.getElementById('texto-usuario-paragrafo-criptografado').style.visibility = "hidden";
   

}
