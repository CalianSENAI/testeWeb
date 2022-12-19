// Comparação entre programação Estrutural e Orientada a Objetos -- Código com a mesma funcionalidade

/*

    Estrutural

*/

let altura = 50
let largura = 60

function calcularArea() {
    return altura * largura
}

let area = calcularArea()

/*

    Orientado a Objetos

*/


class Poligono {
    constructor(altura,largura) {
        this.altura = altura
        this.largura = largura
    }
    get area() {
        return this.#calcularAreaPOO() // usa a # para dize rque essa função só é visivel ali dentro, em mais nenhum lugar
    }
    #calcularAreaPOO() {
        return this.altura * this.largura
    }
}

// criar um objeto areaQuadrado na classe Poligono

let areaQuadrado = new Poligono(60,60)


