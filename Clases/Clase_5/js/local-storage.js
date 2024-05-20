// Local-storage.js

export function leer(clave){

    const str = localStorage.getItem(clave);
    return JSON.parse(str);
}

export function escribir(calve, valor) {

    const str = JSON.stringify(valor);
    localStorage.setItem(clave,str);
}

export function ObjtoJson()
{
    return JSON.
}