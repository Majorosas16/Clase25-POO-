import { Persona } from "./utils.js"
const render =  () => {

    const personas= [
        {
            nombre: "Maria",
            apellido: "Perez",
            edad: "18"
        },
        {
            nombre: "Ana",
            apellido: "Rojas",
            edad: "15"  
        },
    ];

    const body= document.querySelector("body");

    for (const persona of personas){
        const instanciaPersona =new Persona(
            persona.nombre, 
            persona.apellido, 
            persona.edad);

            const nodoPersona = instanciaPersona.render();
            body.appendChild(nodoPersona);
            instanciaPersona.addEventListeners();   
    }

    // const personaUno = new Persona("laura", "gonzalez", 3); //Crear instancias (new)... al abrir ese paréntesis se ejecuta el cosntructor

    // personaUno.saludar();

    // const personaDOs= new Persona ("Lauro", "Gonzalez", 4);
    // personaDOs.saludar();


};
document.addEventListener("DOMContentLoaded", render);