//
export function leer(key){
    return JSON.parse(localStorage(key) );
} 

//key: string
//valor: objeto
export function escribir(key, valor){
    localStorage.setItem(key,JSON.stringify(valor))
}  

// Funcion para convertir de JSON string a objeto
export function jsonToObject(jsonString){
    return JSON.parse(jsonString)
}

// Funcion para convertir de objeto a JSON string
export function objectToJson(object){
    return JSON.stringify(object);
}