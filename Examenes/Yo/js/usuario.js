export class Usuario{

    constructor(id=0,nombre,edad,email,contraseña,rock,reaggae,pop,sexo,color,pais,observaciones){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.contraseña = contraseña;
        this.rock = rock;
        this.reaggae = reaggae;
        this.pop = pop;
        this.sexo = sexo;
        this.color = color;
        this.pais = pais;
        this.observaciones = observaciones;
    }

    verify(){
        return this.nombre && this.edad >= 18;
    }

    mostrarConsola() {
        
        //#region console.log
        console.log("Id: "+this.id);
        console.log("Nombre: "+this.nombre);
        console.log("Edad: "+this.edad);
        console.log("Email: "+this.email);
        console.log("Contraseña: "+this.contraseña);
    
        //Musica
        console.log("Rock: "+this.rock)
        console.log("reaggea: "+this.reaggae);
        console.log("pop: "+this.pop);
    
        //sexo
        console.log("Sexo: "+ this.sexo);
    
        //Color
        console.log("Color: "+ this.color);
    
        //pais
        console.log("Pais: "+this.pais);

        //observaciones
        console.log("Observaciones: "+this.observaciones);

    }
}