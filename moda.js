/*const lista1 = [
    1,
    2,
    3,
    1,
    4,
    3,
    2,
    2,
    2,
    1,
];

const lista1count = {};

lista1.map(
    function (elemento){
        if (lista1count[elemento]) {
            //lista1count[elemento] = lista1count[elemento] + 1;    **Esta es una forma de acumular las veces que se presenta un valor igual
            lista1count[elemento] += 1; // **Esta es la forma corta.
        } else{
            lista1count[elemento] = 1;
        }
        
    }
);

const lista1Array = Object.entries(lista1count).sort(
    function (elementoA, elementoB){

    return elementoA[1] - elementoB[1];

    }
);

const moda = lista1Array[lista1Array.length - 1];
*/

function calcularModa(lista){

    const listaCount = {};

    lista.map(
        function(elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;
};






