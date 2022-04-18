/*
Tabla de multiplicar jose gallego
*/
let numero = prompt("ingresa un numero de la tabla de multiplicar") ;

let comprobacion = parseInt(numero)

for (let i = 0; 10 >= i; i++){
    if(!comprobacion){
        alert("ingresa un numero!");
        break;
    }
    let calculo =  prompt(`Cuanto es ${i} X ${numero} ?`);
    let rc = i*numero;

    if(rc != calculo){
        alert(`respuesta incorrecta, ${i} X ${numero} = ${rc}`);
    } else{
        alert(`${i} X ${numero} = ${rc}`)
    }
}