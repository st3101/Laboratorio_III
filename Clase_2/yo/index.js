// Esto no es un lenguaje compilado, si no interpretado
// Entonces el navegador recorre el archivo js linea a linea

// En js, a esto lo llamamos callbacks: es pasarle como parametro a una funcion, otra función
// Js es asincronico, es decir, en algun momento se cargará el navegador. Recién ahí se ejecuta la funcion

// document.addEventListener("DOMContentLoaded", onInit); // importante no poner parentesis

//const form;
const array = [];

document.addEventListener("DOMContentLoaded",onInit);

function onInit(){
    form = document.getElementById("form-usuario");
    

    form.addEventListener("submit", (e) => {
        
        // Luego del primer parcial, comenzaremos a enviar los datos a un externo
        // evito el comportamiento que realiza por defecto
        e.preventDefault();
        
        for (let i = 0; i < form.length; i++) {
    
            const element = form.elements[i];
            let str;        
            let val;
            if (element.type === "radio" || element.type === "checkbox") {
                //str = element.id + ": " + (element.checked ? "on" : "off");
                if(element.checked ==! true)
                    continue;
                str = element.name + ": " + element.id;
                val = element.checked ? "on" : "off";

            }
            else
            {
                str = element.name + ": " + element.value;
                val = element.checked ? "on" : "off";
            }
            
            const aux = { key: element.name, value: val}
            array.push(aux);
        }

        console.log(array);
    });
}

