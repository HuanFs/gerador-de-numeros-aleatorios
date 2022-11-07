//Declaração de variável ao elemento click
const button=document.getElementById('generate');
button.addEventListener('click',function() {
    //Comando a ser executado apos o evento
    const min= parseInt(document.getElementById('min').value);
    const max= parseInt(document.getElementById('max').value);
    let result = Math.floor(Math.random()*(max-min+1))+min;
//Caso os valores informados não atendam a requisição execute isto
    if(isNaN(result)){
        result='Valor Inválido!'
    }
    //Saída de dados
    document.querySelector('#result>span').textContent=result;
})