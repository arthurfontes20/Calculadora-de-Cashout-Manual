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

    
    
    let resultadoA = 0; let resultadoB = 0; let resultadotex = '';
    
    if (entrada1 !== '' && odd1 !== '') {
        resultadoA = ((entrada1 * odd1) - entrada1 );

        lucroA.textContent = resultadoA.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    if (((entrada2 == resultadoA) && odd2 !== '') || ((entrada2 > resultadoA)&& odd2 !== '') || ((entrada2 < resultadoA)&& odd2 !== '')) {          
        resultadoA = (resultadoA - entrada2);
        resultadoB = (((entrada2 * odd2) - entrada2)-entrada1 );

        lucroA.textContent = resultadoA.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});   
        lucroB.textContent = resultadoB.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});   

    } else if ((entrada2 > resultadoA) && odd2 !== ''){
        resultadoA = (resultadoA - entrada2);
        resultadoB = (((entrada2 * odd2) - entrada2)-entrada1 );

        lucroA.textContent = resultadoA.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});   
        lucroB.textContent = resultadoB.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});  

    }else if ((entrada2 < resultadoA) && odd2 !== ''){
        resultadoA = (resultadoA - entrada2);
        resultadoB = (((entrada2 * odd2) - entrada2)-entrada1 );

        lucroA.textContent = resultadoA.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});   
        lucroB.textContent = resultadoB.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});  
    }

    if (odd1 !== '') {        
        let result = (odd1 / (odd1 - 1)).toFixed(2);

        oddMinima.textContent = result;
    }
        
        resultadotexto.textContent = resultadotex   
        
}

calcular.addEventListener('click', calculo);