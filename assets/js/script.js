//Sentence
function Sentence() {
    ////pegar content do textarea
    var text = document.getElementById('content').value;  
    
    var  textChanged= (text[0].toUpperCase() + text.slice(1).toLowerCase());
    
    document.getElementById('content').value = textChanged;


    
}
