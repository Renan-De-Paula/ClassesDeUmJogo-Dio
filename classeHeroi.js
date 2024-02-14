class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome; // Atribui o parâmetro 'nome' à propriedade 'nome' do objeto
      this.idade = idade; // Atribui o parâmetro 'idade' à propriedade 'idade' do objeto
      this.tipo = tipo; // Atribui o parâmetro 'tipo' à propriedade 'tipo' do objeto
    }
  
    atacar() {
      let ataque; // Declaração da variável 'ataque'
  
      if (this.tipo === "mago") { // Verifica se o tipo é "mago"
        ataque = "usou magia"; // Atribui "usou magia" à variável 'ataque'
      } else if (this.tipo === "guerreiro") { // Verifica se o tipo é "guerreiro"
        ataque = "usou espada"; // Atribui "usou espada" à variável 'ataque'
      } else if (this.tipo === "monge") { // Verifica se o tipo é "monge"
        ataque = "usou artes marciais"; // Atribui "usou artes marciais" à variável 'ataque'
      } else if (this.tipo === "ninja") { // Verifica se o tipo é "ninja"
        ataque = "usou shuriken"; // Atribui "usou shuriken" à variável 'ataque'
      } else {
        ataque = "usou um ataque desconhecido"; // Atribui "usou um ataque desconhecido" à variável 'ataque' se o tipo não for reconhecido
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`); // Exibe a mensagem no console com o tipo e o ataque correspondentes
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi("Gandalf", 1000, "mago"); // Cria uma instância da classe Heroi com os valores especificados
  heroi1.atacar();  // Saída: "O mago atacou usando usou magia"
  
  const heroi2 = new Heroi("Conan", 250, "guerreiro"); // Cria outra instância da classe Heroi com os valores especificados
  heroi2.atacar();  // Saída: "O guerreiro atacou usando usou espada"

  const heroi3 = new Heroi("Kakashi", 400, "ninja"); // Cria outra instância da classe Heroi com os valores especificados
  heroi3.atacar();  // Saída: "O guerreiro atacou usando usou espada"
  
  const heroi4 = new Heroi("Ang", 200, "monge"); // Cria outra instância da classe Heroi com os valores especificados
  heroi4.atacar();  // Saída: "O guerreiro atacou usando usou espada"