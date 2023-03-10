//Primera parte
function suma(a,b,c){
    return a + b + c
}

suma(4,6,2)


//Segunda puerta
class Coche{
    constructor(puertas){
        this.puertas = puertas
    }

    incrementarPuertas(puertas){
        return puertas + 1
    }
}

const coche = new Coche()
console.log(coche.incrementarPuertas(2))