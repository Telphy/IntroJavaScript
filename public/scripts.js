
function fillDiv1 (){
    let frase = document.getElementById('frase').value
    const div1 = document.querySelector('.div1')
    const cbVermelho = document.getElementById('cbVermelho')
    const cbVerde = document.getElementById('cbVerde')

    if(cbVermelho.checked){
        fillDiv1.style.color = 'red'
        document.getElementById('div1').innerHTML = frase

    }
    if(cbVerde.checked){
        div1.style.color = 'green'
        document.getElementById('div1').innerHTML = frase

    }


}

function clearDiv1 (){
    document.getElementById('div1').innerHTML = '';
    document.getElementById('frase').value = '';

}