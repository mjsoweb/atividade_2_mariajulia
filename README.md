# Exercício Integrador 02 – Pessoa Jurídica, Inscrição Estadual e ES Modules

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/mjsoweb/atividade_2_mariajulia)

<h3>Questões</h3>

---

### 1) Qual a vantagem de fazer PJ herdar da classe Pessoa?

A vantagem é que a classe `PJ` ganha de graça tudo o que a classe `Pessoa` já tem (como os métodos de nome e e-mail), sem precisar reescrever esse código do zero.

### 2) Por que não devemos copiar para PJ os métodos já implementados em Pessoa?

Porque copiar gera código duplicado. Se precisar mudar alguma regra no futuro, você teria que alterar em vários arquivos, o que aumenta a chance de erro, gera bagunça e dá muito mais trabalho.

### 3) Qual a finalidade do operador instanceof no método setPJ()?

A finalidade é garantir a segurança, checando se o objeto passado é realmente um exemplar legítimo da classe `PJ`, impedindo que objetos aleatórios ou incorretos entrem no sistema.

### 4) Qual a diferença entre `if (pj)` e `if (pj instanceof PJ)`?

* `if (pj)` apenas confere se a variável existe e não está vazia (ou nula).
* `if (pj instanceof PJ)` vai muito além: ele confirma se aquele objeto específico pertence exatamente à classe `PJ`.

### 5) Qual a diferença entre a classe IEclss e a função fábrica IEfunc()?

A classe `IEclss` usa a estrutura oficial de classes do JavaScript (com a palavra `class` e a exigência do `new`). Já a função fábrica `IEfunc()` é uma função comum que cria e devolve um objeto pronto para uso, sem precisar da palavra `new`.

### 6) Como a função fábrica protege seus dados internos?

Ela protege os dados usando o escopo da própria função (um conceito chamado *closure*). As variáveis ficam guardadas "lá dentro" e só podem ser mexidas se a função fábrica liberar métodos específicos (como getters e setters).

### 7) Qual a diferença entre o objeto literal IEjson e um documento JSON?

O `IEjson` é um objeto do próprio JavaScript vivo na memória, que pode ter métodos e lógica. Já um arquivo ou documento JSON é apenas um texto estático formatado em dados, usado para salvar ou trafegar informações.

### 8) Qual a diferença entre exportação padrão e exportação nomeada?

* **Exportação padrão (`export default`):** É a "estrela" do arquivo. Você pode importar com qualquer nome que quiser e **sem chaves `{ }**`.
* **Exportação nomeada (`export`):** Permite exportar várias coisas do mesmo arquivo, mas na hora de importar você é obrigado a usar os **nomes exatos entre chaves `{ }**`.

### 9) Por que IEclss utiliza new, enquanto IEfunc() não utiliza?

Porque `IEclss` é uma classe, e no JavaScript as classes exigem obrigatoriamente a palavra `new` para nascerem na memória. A `IEfunc()` é apenas uma função comum que você chama com parênteses normais para ela te devolver o objeto montado.

### 10) Qual a vantagem de organizar as classes e estruturas em arquivos separados?

Deixa o código organizado, limpo e muito mais fácil de manter. Se der um bug, você sabe exatamente em qual arquivo procurar, além de facilitar caso várias pessoas precisem trabalhar juntas no projeto.

### 11) Como o relacionamento entre IE e PJ é representado no código?

É representado por um atributo interno (como `#pj` ou `_pj`) dentro da Inscrição Estadual, que guarda a referência do objeto `PJ` que foi associado a ela.

### 12) Por que instanceof Date pode ser utilizado mesmo sem termos criado a classe Date?

Porque a classe `Date` já vem pronta e integrada nativamente no próprio ecossistema do JavaScript, existindo por padrão em qualquer ambiente sem precisar de nenhuma importação.
