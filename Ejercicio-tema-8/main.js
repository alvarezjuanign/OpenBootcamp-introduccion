"use strict"

class Persona {
        _edad = 0
        _nombre = 0
        _telefono = 0

        set Edad(value){
            this._edad = value
        }
        get Edad(){
            return this._edad
        }

        set Nombre(value){
            this._nombre = value
        }
        get Nombre(){
            return this._nombre
        }

        set Tel(value){
            this._telefono = value
        }
        get Tel(){
            return this._telefono
        }
}

const persona = new Persona()

persona.Edad = 23
persona.Nombre = "Juan"
persona.Tel = "123-4567"

console.log(`
${persona._edad}
${persona._nombre}
${persona._telefono}
`)