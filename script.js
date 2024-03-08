//Criando a classe de heróis
class heroe {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    //Metodo para ação de atacar
    atacar() {
        //Declarando variável para guardar tipo de ataque de cada herói
        let tipoDeAtaque = ["magia", "espada", "artes marciais", "shuriken"]

        if (this.tipo === "mago") {
            console.log(`O tipo ${this.tipo} ataca usando ${tipoDeAtaque[0]}`);
        } else if (this.tipo === "guerreiro") {
            console.log(`O tipo ${this.tipo} ataca usando ${tipoDeAtaque[1]}`);
        } else if (this.tipo === "monge") {
            console.log(`O tipo ${this.tipo} ataca usando ${tipoDeAtaque[2]}`);
        } else {
            console.log(`O tipo ${this.tipo} ataca usando ${tipoDeAtaque[3]}`);
        }

    }

}

//Saída
let ataque = new heroe("Luna", 20, "mago");
ataque.atacar();
