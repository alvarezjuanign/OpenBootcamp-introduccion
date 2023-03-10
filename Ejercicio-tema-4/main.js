//Condiconales
numeroIf = 2
if (numeroIf < 0) console.log("Es negativo")
else if (numeroIf > 0) console.log("Es positivo")
else console.log("Es 0")

//Bucle WHILE
numeroWhile = 0
while(numeroWhile < 3){
    console.log(numeroWhile)
    numeroWhile++
}

//Bucle DO WHILE
do {
    console.log(numeroWhile)
    numeroWhile++
} while(numeroWhile >= 3)

//Bucle FOR
for(let numeroFor = 0; numeroFor <= 3; numeroFor++){
    console.log(numeroFor)
}

//Sentencia SWITCH
const estacion = "otoño"
switch(estacion){
    case "verano":
        console.log("ES VERANO")
        break
    case "invierno":
        console.log("ES INVIERNO")
        break
    case "otoño":
        console.log("ES OTOÑO")
        break
    case "primavera":
        console.log("ES PRIMAVERA")
        break
    default:
        console.log("No es una estación del año")
}