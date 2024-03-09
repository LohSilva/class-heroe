//Classe que representa um heroi em um jogo
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    //Metodo para ação de atacar
    atacar() {
        // Array que armazena os tipos de ataque para cada tipo de herói
        const tiposDeAtaque = [
            { tipo: "mago", ataque: "magia" },
            { tipo: "guerreiro", ataque: "espada" },
            { tipo: "monge", ataque: "artes marciais" },
            { tipo: "ninja", ataque: "shuriken" },
        ];
        // Encontra o tipo de ataque para o tipo de herói atual
        const tipoDeAtaque = tiposDeAtaque.find((ataque) => ataque.tipo === this.tipo);
        // Exibe a mensagem de ataque formatada
        console.log(`O tipo ${this.tipo} ataca usando ${tipoDeAtaque.ataque}`);

    }

}

//Instanciando objeto
const mago = new heroi("Gandalf", 100, "mago");
const guerreiro = new heroi("Bjorn", 75, "guerreiro");
const monge = new heroi("Benkei", 65, "monge");
const ninja = new heroi("Naruto", 15, "ninja");

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
