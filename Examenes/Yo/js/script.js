import { Usuario } from "./usuario.js";
import { leer, escribir, objectToJson } from "./local-storage.js";

const KEY_STORAGE = "usuario";
let array = [];
let form = null;

document.addEventListener("DOMContentLoaded", onInit);

function onInit() {
    cargarFormulario();
    EscuchandoFormulario();
}

function cargarFormulario(){
    form = document.getElementById('formulario-test');
}

function EscuchandoFormulario() {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        //#region mapeo Sexo
        let sexo;
        if (true == document.getElementById("rFemenino").checked) {
            sexo = "femenino"
        } else if (true == document.getElementById("rMasculino").checked) {
            sexo = "masculino";
        }
        else {
            sexo = "transformer";
        }
        //#endregion
        //#region mapeo Color

        let color;
        if (true == document.getElementById("blanco").checked) {
            color = "blanco";
        } else if (true == document.getElementById("marron").checked) {
            color = "marron";
        } else {
            color = "negro";
        }
        //#endregion
        //#region contructor
        let buffer = new Usuario(0,
            form.querySelector("#nombre").value,
            form.querySelector("#edad").value,
            form.querySelector("#email").value,
            form.querySelector("#contraseña").value,
            form.querySelector("#rock").checked,
            form.querySelector("#reggea").checked, 
            form.querySelector("#pop").checked,
            sexo,
            color,
            form.querySelector("#pais").value,
            form.querySelector("#observacion").value);
        //#endregion 
            
        //Verifica que los datos sean validos
        if(buffer.verify()){
            array.push(buffer); //guardar elementoo en el array
            escribir(objectToJson(array));     
            limpiarFormulario(); 
        }
    
    })
}

function limpiarFormulario(){
    form = document.getElementById('formulario-test');

    form.reset();

}

function rellenarTabla(){

}
