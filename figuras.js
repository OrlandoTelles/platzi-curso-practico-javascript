
//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden : " + ladoCuadrado + "cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es : " + areaCuadrado + "cm^2");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const base = 4;


//console.log("Los lados del triangulo miden :" 
  //  + ladoTriangulo1 + "cm, " 
    //+ ladoTriangulo2 + "cm, " 
    //+ base + "cm"
//);
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + base;
//console.log("El perimetro del triangulo es :" + perimetroTriangulo + "cm");

//const areaTriangulo = (base * alturaTriangulo) / 2;
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2) + base;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo del Circulo
console.group("Circulo");

/*const radioCirculo = 4;
console.log("El readio del circulo es: " + radioCirculo + "cm");
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("El valor de PI es: " + PI );
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");*/
const PI = Math.PI;

function diametroCirculo (radio){
    return radio * 2;
}

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro *PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("lado1");
    const value1 = input1.value;
    const a = Number(value1);

    const input2 = document.getElementById("lado2");
    const value2 = input2.value;
    const b = Number(value2);

    const input3 = document.getElementById("base");
    const value3 = input3.value;
    const c = Number(value3);

    const perimetro = perimetroTriangulo(a, b, c);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("base");
    const value1 = input1.value;

    const input2 = document.getElementById("altura");
    const value2 = input2.value;

    const area = areaTriangulo(value1, value2);
    alert(area);
}

function calcularDiametroCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("radio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}



function alturaIsosceles(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        const catBase = base / 2;
        return altura = Math.sqrt((lado1 * lado1) - (catBase * catBase));
    }
   
}

function calcularAlturaIsosceles(){
    const input1 = document.getElementById("ladoA");
    const value1 = input1.value;

    const input2 = document.getElementById("ladoB");
    const value2 = input2.value;

    const input3 = document.getElementById("base");
    const value3 = input3.value;

    const alturaIsos = alturaIsosceles(value1, value2, value3);
    alert(alturaIsos);
}