import Animales from "./Consulta.js";

document.getElementById("animal").addEventListener("change", async () => {
    
    const { animales } = await Animales.getData();
    console.log(animales)
    const animal = document.getElementById("animal").value;
    const imagenAnimal = animales.find((p) => p.name == animal).imagen;
    const MostrarImg = document.getElementById("preview");
    MostrarImg.className ="d-flex justify-content-center";
    MostrarImg.parentNode.className ="pb-5 card bg-dark"
    MostrarImg.innerHTML = `<img id="imagen" width="230" height="248" src="/assets/imgs/${imagenAnimal}" />`;

});

