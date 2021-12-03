import Animal from "./Animal.js";

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Rugir(){
        let audioEtiqueta = document.querySelector("audio")
        audioEtiqueta.setAttribute("src", `${this.getSonido()}`)
        audioEtiqueta.play()
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar(){
        let audioEtiqueta = document.querySelector("audio")
        audioEtiqueta.setAttribute("src", `${this.getSonido()}`)
        audioEtiqueta.play()
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Gruñir(){
        let audioEtiqueta = document.querySelector("audio")
        audioEtiqueta.setAttribute("src", `${this.getSonido()}`)
        audioEtiqueta.play()
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Sisear(){
        let audioEtiqueta = document.querySelector("audio")
        audioEtiqueta.setAttribute("src", `${this.getSonido()}`)
        audioEtiqueta.play()
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar(){
        let audioEtiqueta = document.querySelector("audio")
        audioEtiqueta.setAttribute("src", `${this.getSonido()}`)
        audioEtiqueta.play()
    }
}

export {Leon, Lobo, Oso, Serpiente, Aguila};