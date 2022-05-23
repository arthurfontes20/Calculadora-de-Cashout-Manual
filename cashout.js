const calcular = document.getElementById('calcular');

function calculo(){
    let entrada1 = document.getElementById('entrada1').value;
    let entrada2 = document.getElementById('entrada2').value;
    let odd1 = document.getElementById('odd1').value;
    let odd2 = document.getElementById('odd2').value;
    let oddMinima = document.getElementById('oddminima');
    let lucroA = document.getElementById('lucroA');
    let lucroB = document.getElementById('lucroB');
    let resultadotexto = document.getElementById('resultadotexto');
    
    // Coloquei a criação da variável fora do IF para que seja possível acessar o valor nos outros IFs
    let resultadoA = 0; let resultadoB = 0; 
    
    if (entrada1 !== '' && odd1 !== '') {
        resultadoA = ((entrada1 * odd1) - entrada1 ).toFixed(2);

        lucroA.textContent = resultadoA;
    }

    if (entrada2 !== '' && odd2 !== '') {    
        resultadoB = ((entrada2 * odd2) - entrada2 ).toFixed(2);
    
        lucroB.textContent = resultadoB;    
    }

    if (odd1 !== '') {        
        let result = (odd1 / (odd1 - 1)).toFixed(2);

        oddMinima.textContent = result;
    }
    
    // Você tava comparando com o "lucroA", mas essa variável não tá acessando o valor do campo!
    if (entrada2 > resultadoA){
        let resultadotex = `TEAM A WIN = (${resultadoA-entrada2}) / TEAM B WIN = (${resultadoB})`;

        resultadotexto.textContent = resultadotex;

    }

    


}

calcular.addEventListener('click', calculo);