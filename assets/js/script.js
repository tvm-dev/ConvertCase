//01-Sentence-OK
function Sentence() {
    ////pegar content do textarea
    var text = document.getElementById('content').value;  
    //alert(text);
    //fazer a conversao
    var  textChanged= (text[0].toUpperCase() + text.slice(1).toLowerCase());
    //inserir o texto na testarea alterado!
    document.getElementById('content').value = textChanged;
}

//02-Lower-OK
function Lower() {
    var text = document.getElementById('content').value;
    var textChanged = (text.toLowerCase());
    document.getElementById('content').value = textChanged;
}

//03-Upper-OK
function Upper() {
    var text = document.getElementById('content').value;
    var textChanged = (text.toUpperCase());
    document.getElementById('content').value = textChanged;
}

//04-CapitalizedCase (1º letra de cada palavra em maiúscula)
function capitalizedCase(text) {
    
    var text = document.getElementById('content').value;
    var textChanged = text.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });
    return document.getElementById('content').value = textChanged;
}

//05-aLtErNaTiNg cAsE
function alternating() {
    var text = document.getElementById('content').value;
    const textChanged = text
    .split("")
    .map(c => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join("");
    return document.getElementById('content').value = textChanged;
      
    //alert(text);
    //console.log(text);
    //console.log(textChanged);
}
               


    

 












//10-Clean OK
function Clean() {
    document.getElementById('content').value = '';
}