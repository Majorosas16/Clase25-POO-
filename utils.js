export class Persona{

    nombre; apellido; #edad; #nodo; //Privado se coloca un numeral antes

    constructor(nom,ape,ed){
        this.nombre = nom;
        this.apellido=ape;
        this.#edad=ed;
    }

    saludar(){
        const mensaje= `Hola ${this.nombre}`
        alert(mensaje);
        this.#gritar(); //la forma de como acceder a los atributos o métodos privados.
    }

    #gritar(){
        const mensaje= `HOLA ${this.apellido}`
        alert(mensaje);     
    }

    render(){
        const body = document.querySelector("body");

        const parrafo =document.createElement("p");
        parrafo.classList.add("txt");
        
        parrafo.textContent= `${this.nombre} ${this.apellido} ${this.#edad}`;
        this.#nodo =parrafo;

        parrafo.id=this.nombre+this.apellido;
        return parrafo;

    }

    addEventListeners(){
        this.#nodo.addEventListener("click", ()=>{
            alert(`${this.nombre} ${this.apellido} ${this.#edad}`);
        })
    }

}