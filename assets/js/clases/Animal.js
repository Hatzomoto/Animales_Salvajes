class Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentarios = comentarios;
        let Sonido = `/assets/sounds/${sonido}`;

        this.getNombre = () => Nombre
        this.getEdad = () => Edad
        this.getImg = () => Img
        this.getComentarios = () => Comentarios
        this.getSonido = () => Sonido

        this.setComentarios = (comentarios) => (Comentarios = comentarios);
    }

    get Nombre() {
        return this.getNombre();
    }
    get Edad() {
        return this.getEdad();
    }
    get Img() {
        return this.getImg();
    }
    get Sonido() {
        return this.getSonido();
    }

    set Comentarios(comentarios) {
        return this.setComentarios(comentarios);
    }
}

export default Animal;