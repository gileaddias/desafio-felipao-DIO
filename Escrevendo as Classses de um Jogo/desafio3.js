
class Heroi {
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
        let ataque;

        if(this.tipo === 'mago'){
            ataque = 'magia';
        } else if(this.tipo === 'guerreiro'){
            ataque = 'espada';
        } else if(this.tipo === 'monge'){
            ataque = 'artes marciais';
        } else if(this.tipo === 'ninja'){
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }   

        console.log(`O ${this.tipo} atacou usando ${ataque}.`)

    }
}

let heroi1 = new Heroi('Merlin', 1000, 'mago')
let heroi2 = new Heroi('Arthur', 35, 'guerreiro');
let heroi3 = new Heroi('Naruto', 17,'ninja');
let heroi4 = new Heroi('Shaolin', 40, 'monge');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();