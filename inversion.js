function calcularInteres( inversion, annios,tiie, spred){
    const sumaTasa = tiie + spred;
    const interes = inversion * (0.1 + sumaTasa * annios);

    return interes;
}

function CalcularTasaTotal(){
    const inversion = document.getElementById("InputInversion");
    const valorInversion = inversion.value;
    const inversionInt = Number(valorInversion);

    const annios = document.getElementById("InputAños");
    const valorAnnios = annios.value;
    const anniosInt = Number(valorAnnios);

    const tiie28 = document.getElementById("Tasa28Dias");
    const valortiie = tiie28.value;
    const tiieIn = Number(valortiie);

    const spred = document.getElementById("SPRED");
    const valorSpred = spred.value;
    const spretInt = Number(valorSpred);

    const totalTasa = calcularInteres(inversionInt, anniosInt, tiieIn, spretInt);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El total de la tasa es: " + totalTasa;
}


//console.log(totalTasa);