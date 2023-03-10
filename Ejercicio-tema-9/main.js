class Persona{
    constructor(edad,nombre,telefono){
        this.edad = edad
        this.nombre = nombre
        this.telefono = telefono
    }
}

class Cliente extends Persona{
    constructor(edad,nombre,telefono,credito){
    super(edad,nombre,telefono)
    this.credito = credito
    }
}

class Trabajador extends Persona{
    constructor(edad,nombre,telefono,salario){
    super(edad,nombre,telefono)
    this.salario = salario
    }

}


const cliente = new Cliente
cliente.edad = 23
cliente.nombre = "Juan"
cliente.telefono = "123-456"
cliente.credito = "$400"

console.log(`
Edad: ${cliente.edad}
Nombre: ${cliente.nombre}
Teléfono: ${cliente.telefono}
Crédito: ${cliente.credito}
`)

const trabajador = new Trabajador
trabajador.edad = 24
trabajador.nombre = "Pedro"
trabajador.telefono = "123-456"
trabajador.salario = "$1000"

console.log(`
Edad: ${trabajador.edad}
Nombre: ${trabajador.nombre}
Teléfono: ${trabajador.telefono}
Salario: ${trabajador.salario}
`)