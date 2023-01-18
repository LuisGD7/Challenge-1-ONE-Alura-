/* Selecciona los elementos de input de texto, mensaje y botón de copiar del HTML */
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
/* Oculta el botón de copiar */
btnCopy.style.display = "none"

/* Función para encriptar el texto ingresado*/
function btnEncriptar() {
/*Ejecuta la función de encriptación con el texto ingresado */
    const textoEncriptado = encriptar(inputTexto.value)
/*Asigna el texto encriptado al área de texto de salida */
    mensaje.value = textoEncriptado
/*Remueve la imagen de fondo del área de texto de salida*/
    mensaje.style.backgroundImage="none"
/*Vacía el área de texto de entrada*/
    inputTexto.value = ""
/*Muestra el botón de copiar */
    btnCopy.style.display = "block"
}

/* Función para encriptar el texto */
function encriptar(stringEncriptada) {
/* Matriz con las letras a reemplazar y sus respectivas encriptaciones */
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
/* Convierte el texto ingresado a minúsculas */
    stringEncriptada = stringEncriptada.toLowerCase();
/* Recorre la matriz de encriptación */
    for(let i=0; i < matrizCodigo.length; i++) {
 /* Si el texto ingresado incluye una letra a reemplazar */
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
/*Retorna la string encriptada*/
    return stringEncriptada;

    
}


/* Función para desencriptar el texto ingresado */
function btnDesencriptar() {
    /* Ejecuta la función de desencriptación con el texto ingresado */
    const textoEncriptado = desencriptar(inputTexto.value)
    /* Asigna el texto desencriptado al área de texto de salida */
    mensaje.value = textoEncriptado
    /* Vacía el área de texto de entrada */
    inputTexto.value = ""  
}
/* Función para desencriptar el texto */
function desencriptar(stringDesencriptada) {
    /* Matriz con las encriptaciones a reemplazar y sus respectivas letras */
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    /* Convierte el texto ingresado a minúsculas */
    stringDesencriptada = stringDesencriptada.toLowerCase();
/* Recorre la matriz de desencriptación */
    for(let i=0; i < matrizCodigo.length; i++) {
/* Si el texto ingresado incluye una encriptación a reemplazar */
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            /* Reemplaza la encriptación con su respectiva letra */
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
/* Devuelve el texto desencriptado */
    return stringDesencriptada;
}

/* Función para copiar el texto del área de salida al portapapeles */
function copiar() {
    /* Selecciona el texto del área de salida */
    mensaje.select();
    /* Escribe el texto seleccionado al portapapeles */
    navigator.clipboard.writeText(mensaje.value)
    /* Vacía el área de salida */
    mensaje.value = "";
    /* Muestra una alerta informando que el texto ha sido copiado */
    alert("Texto Copiado")
}
