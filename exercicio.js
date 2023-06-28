const form = document.getElementById('form-calculate');

let aNumber = document.getElementById('first-number');

let bNumber = document.getElementById('second-number');

function ValidaNumb (nA, nB){
    const valida = nA < nB
    return valida;
}

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    
    let formValido = false
    
    //let result = aNumber.value;
    
    //let messageFinal = `O Resultado  da expressão é: ${result}`;
    let messageFinal = `sucesso`;
    
    formValido = ValidaNumb(aNumber.value,bNumber.value)
    if(!formValido){

        document.querySelector('.error').style.display = 'block';

    }else {
        
        document.querySelector('.finalResult').style.display = 'block';

        //const containerMessageFinal = document.getElementByyClassName('.finalResult');
        //containerMessageFinal.innerHTML = messageFinal;

        aNumber.value = '';
        bNumber.value = '';
    };
});