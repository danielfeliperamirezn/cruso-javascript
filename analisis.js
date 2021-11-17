
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numer) {
    return (numer % 2 === 0 );
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    
}