//helpers

function esPar(numerito){
    //return (numerito % 2 === 0);  ** Forma corta de retornar true or false
    if (numerito % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

function calculaPromedio(lista){

    const sumaLista = lista.reduce(
        function (sumaElemento = 0, nuevoElemento){
            return sumaElemento + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


//Calculadora de Mediana
//const mitadSalarios = parseInt(salariosColSorted.length / 2);
function medianaSalarios(lista){

    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calculaPromedio([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General

const salariosColom = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosColom.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

console.log(salariosColSorted);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
 
//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    
    medianaGeneralCol,
    medianaTop10Col,
}
);