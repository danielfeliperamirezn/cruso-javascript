
//Cuadrado

// const ladoCuadrado = 5;
// console.log('lados del cuadrado es ' + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(12);

// console.log('el Perímetro es: ' + perimetroCuadrado + "cm");

// const AreaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log('El Area del cuadrado es: ' + AreaCuadrado + "cm^2")

function AreaCuadrado(lado) {
    return lado * lado;
}

perimetroCuadrado(12);


//Triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

// console.log("los lados del triangulo miden "+ ladoTriangulo1 + "cm" + " y la base " + baseTriangulo + "cm");
// console.log("la altura del triangulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo( lado1, lado2, base) {
    return lado1 + lado2, base;
}

function AreaTriangulo( baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo)/2
}

//circulos


const radioCirculo = 4;

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diamentro = diametroCirculo(radio);
    return diamentro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}


// function para calcular el perimetro de los CUADRADOS


function calcularPerimetoCuadrado() {

    let inputCuadrado = document.getElementById("inputCuadrado");
    let inputCuadradoValue = inputCuadrado.value;

    const perimetro = perimetroCuadrado(inputCuadradoValue);
    alert("el perímetro es: " + perimetro);
}

function calcularAreaCuadrado() {

    let inputCuadrado = document.getElementById("inputCuadrado");
    let inputCuadradoValue = inputCuadrado.value;

    const perimetro = AreaCuadrado(inputCuadradoValue);
    alert("el Area es: " + perimetro);
    
}

// calcularPerimetroTriangulo

function calcularPerimetroTriangulo() {

    let inputTrianguloLado1 = document.getElementById("inputTrianguloLado1");
    let inputTrianguloDataLado1 = inputTrianguloLado1.value;

    let inputTrianguloLado2 = document.getElementById("inputTrianguloLado2");
    let inputTrianguloDataLado2 = inputTrianguloLado2.value;

    let inputTrianguloBase = document.getElementById("inputTrianguloBase");
    let inputTrianguloDataBase = inputTrianguloBase.value;


    const periTriangulo = perimetroTriangulo(inputTrianguloDataLado1, inputTrianguloDataLado2, inputTrianguloDataBase);
    alert("El Perímetro del triangulo es: " + periTriangulo);

}

function calcularAreaTriangulo() {

    let inputTrianguloLado1 = document.getElementById("inputTrianguloLado1");
    let inputTrianguloDataLado1 = inputTrianguloLado1.value;

    let inputTrianguloBase = document.getElementById("inputTrianguloBase");
    let inputTrianguloDataBase = inputTrianguloBase.value;

    const periTriangulo = AreaTriangulo(inputTrianguloDataBase, inputTrianguloDataLado1);
    alert("El Área del Triangulo es: " + periTriangulo);

}

function calcularAlturaIsoseles(altura, base) {

    let altura2 = (altura * altura)

}

function alturaTrianguloIsoseles() {
    
    let inputTrianguloLado1 = document.getElementById("inputTrianguloLado1Iso");
    let inputTrianguloDataLado1 = inputTrianguloLado1.value;

    let inputTrianguloBase = document.getElementById("inputTrianguloBaseIso");
    let inputTrianguloDataBase = inputTrianguloBase.value;

}