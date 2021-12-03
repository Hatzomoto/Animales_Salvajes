import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/Tipo_Animal.js";
import Animales from "./Consulta.js";

let sujetos = []

document.getElementById("btnRegistrar").addEventListener("click", async () => {

    let nombre = document.getElementById("animal");
    let edad = document.getElementById("edad");
    let comentarios = document.getElementById("comentarios");
    let imagen = document.getElementById("imagen");
    const { animales } = await Animales.getData();
    let sonidoAnimal = animales.find((p) => p.name == nombre.value).sonido;

    let nuevoAnimal;

    switch(nombre.value) {
        case "Leon":
            nuevoAnimal = new Leon(nombre.value, edad.value, imagen.src, comentarios.value, sonidoAnimal);
          break;

        case "Lobo":
        nuevoAnimal = new Lobo(nombre.value, edad.value, imagen.src, comentarios.value, sonidoAnimal);
        break;

        case "Oso":
            nuevoAnimal = new Oso(nombre.value, edad.value, imagen.src, comentarios.value, sonidoAnimal);
        break;

        case "Serpiente":
            nuevoAnimal = new Serpiente(nombre.value, edad.value, imagen.src, comentarios.value, sonidoAnimal);
        break;

        case "Aguila":
            nuevoAnimal = new Aguila(nombre.value, edad.value, imagen.src, comentarios.value, sonidoAnimal);
        break;

        default:
          alert("Debe seleccionar un animal");
      };

      if(nombre.value && edad.selectedIndex > 0 && imagen.src && comentarios.value){
        
        sujetos.push(nuevoAnimal);
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentarios.value = "";
        document.getElementById("preview").innerHTML = "";
        reloadTable();
        reloadModal();
      }else{
          alert("Faltan datos por llenar");
      }

});

const reloadTable = () => {

    const AnimalesTemplate = document.getElementById("Animales");
    AnimalesTemplate.innerHTML = "";
    sujetos.forEach((p,i) => {
        AnimalesTemplate.innerHTML += 
        `<div class="px-2 pb-2">
            <div class="card">
                <img
                class="imagen2"
                id="${i}"
                src="${p.getImg()}"
                width="217px" 
                height="248px"/>

                <audio src="${p.getSonido()}"></audio>

                <button class="bg-secondary" onclick="activarSonido('${i}')">
                <i class="fas fa-volume-up fa-2x py-1" style="color: white;"></i> </button>
            </div>
        </div>`;
    })
};

const reloadModal = () => {

    document.querySelectorAll("#Animales img.imagen2").forEach( (i) =>{
        
        i.addEventListener("click", (e) => {
            
            let indiceAnimal = e.path[0].id;
    
            let imagenAnimal =  
                `<div class="px-2 pb-2 text-center ">
                        <div>
                        <img src="${sujetos[indiceAnimal].getImg()}"
                        class="card-img-top"/>
                            <div class="card-body text-light bg-dark">                                        
                                <p>${sujetos[indiceAnimal].getEdad()}</p>
                                <p>Comentarios</p>
                                <hr class="mx-auto"/>
                                <p>${sujetos[indiceAnimal].getComentarios()}</p>
                            </div>  
                        </div>      
                </div>`;      
        
            document.getElementsByClassName("modal-body")[0].innerHTML = imagenAnimal;
            $("#exampleModal").modal("toggle");
        })
    })
};


window.activarSonido = (i) => {
    const animal = sujetos[i];
    switch(animal.getNombre()) {
        case "Leon":
            animal.Rugir();
        break;

        case "Lobo":
            animal.Aullar();
        break;

        case "Oso":
            animal.Gruñir();
        break;

        case "Serpiente":
            animal.Sisear();
        break;

        case "Aguila":
            animal.Chillar();
        break;

        default:
            alert("Ha ocurrido un error, lo lamentamos!");
        };
};




