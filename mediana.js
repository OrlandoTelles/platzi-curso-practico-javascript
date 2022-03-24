function calculaPromedio(lista){

    const sumaLista = lista.reduce(
        function (sumaElemento = 0, nuevoElemento){
            return sumaElemento + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


/*function calculaPromedio(lista){

    const sumaLista = lista.reduce(
        function (sumaElemento = 0, nuevoElemento){
            return sumaElemento + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};



const lista1 = [
    200,
    700,
    1000,
    1200,
    100000000,
    
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if ( numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let media;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedio1y2 = calculaPromedio([
        elemento1,
        elemento2,
    ]);
    media = promedio1y2;
    
}else{
    media = lista1[mitadLista1];
}*/


function calcularMediana(lista){
    /*function ordenarLista(lista){

        for (let i = 0; i < lista.length-1; i++){
            for (let j = 0; j < lista.length-1; j++) {
                if (lista[j] > lista[j+1]) {
                    let aux = lista[j];
                    lista[j] = lista[j+1];
                    lista[j+1] = aux;
                }
            }
        }
        return lista;
    }*/   

    lista.sort(
        function(a,b){
        return a-b;
    });

    const mitadLista = parseInt(lista.length / 2);

    function esPar(numerito){
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

    if (esPar(lista.length)) {

        const elemento1 = lista[mitadLista -1];
        const elemento2 = lista[mitadLista];

        const prom2elementos = calculaPromedio([
            elemento1,
            elemento2,
        ]);

        return prom2elementos;
        
    } else {
        return mediana = lista[mitadLista];
    }
}