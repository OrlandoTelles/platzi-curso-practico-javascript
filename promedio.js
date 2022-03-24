/*const lista1 = [
    100,
    3050,
    215,
    2000,
];

let sumaLista = 0;

for (let i = 0; i < lista1.length; i++) {
    sumaLista = sumaLista + lista1[i];
}

const promedioLista1 = sumaLista / lista1.length;
*/


let sumaLista = 0;
function calculaPromedio(lista){
       
    /*for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];        
    }*/

    const sumaLista = lista.reduce(
        function (sumaElemento = 0, nuevoElemento){
            return sumaElemento + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

