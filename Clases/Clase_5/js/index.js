import {Casa} from "./casa.js";
import { leer, escribir } from "./local-storage.js";

const item = [];
const KEY_STORAGE = "casa";
document.addEventListener("DOMContentLoaded",onInit);

function onInit() 
{
    alert(document.getElementById("form-item"));
    escuchandoFormulario();
}

function escuchandoFormulario()
{
   

    form.addEventListener("submit", (e) => {

        alert("A");
        e.preventDefault();

        const model = new Casa(
            form.querySelector("#id").value,
        )

        const rta = model.verify();

        if(rta)
        {
            item.push(model);
            const str = 
            escribir(JEY_STORAGE,str);
        }
    })
}