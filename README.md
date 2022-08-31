# Teste Técnico de Desenvolvedor Júnior Bluecore.it

### Explicação
Esta é uma aplicação que simula um blog, nela existem duas páginas, a inicial que contêm a lista de posts cadastrados, e a segunda tela é a de detalhes do post aonde é exibido o conteúdo e também os comentários relacionados a aquele post. Mas a aplicação se encontra incompleta, restando ainda realizar a listagem dos comentários dentro da página de detalhes do post, e essa será a sua missão neste projeto.
Antes de começar tem alguns pontos que podem te ajudar, se atente aos TODOs existentes no código eles indicam exatamente onde devem ser feitas as alterações para que você consiga finalizar sua missão. Uma dica que pode ser muito útil é se basear na entidade Post, a qual já está com toda a sua implementação finalizada.

**EXTRA**: Será considerado um extra, se na página de post, for criado um formulário que realiza a criação de um novo comentário, salvando ele em banco de dados.

### Sobre a entrega
- Você tem 48 horas para a realização deste teste após recebê-lo.
- A entrega deve ser feita através de arquivo `.zip`ou link de um repositório público (GitHub, GitLab, etc.)
- Em caso de dúvida com relação ao teste ou qualquer tecnologia utilizada nele, fique a vontade para tirá-las com o aplicador do seu teste
Boa sorte!

### Tecnologias presente neste projeto
  - Node
  - ExpressJS
  - EJS
  - Knex
  - SQLite
  - VueJS

### Estrutura de pastas
```
src
│   README.md
│   app.js    
│   server.js
└───config --> Pasta para os arquivos de configuraçã do projeto
└───controllers --> Camada que recebe as requisições e encaminha para as services
└───database
|    └───db --> Arquivos do SQLite
|    └───migrations --> Migrations para criar a estrutura de tabelas no banco de dados
|    └───seeds --> Arquivos para popular o banco com dados de exemplo
└───middlewares --> Camada intermediária entre a requisição e as controllers
└───public --> Arquivos publicos como CSS e JS renderizados no front-end
└───repository --> Camada de acesso ao banco de dados
└───routes --> Configuração de rotas da aplicação
└───service --> Camada das regras de negócios da aplicação
└───util --> Funções uteis a toda a plicação
└───views --> Os arquivos que renderizam no front-end
```
### Instalação
Para realizar a instalação da aplicação:
 - Instale as dependências pelo comando `npm install`
 - Execute as migrations no banco de dados pelo comando `knex migrate:latest`
 - Popule o banco com dados de exemplo pelo comando `knex seed:run`
 - Por fim execute o comando `npm run dev`
 - A aplicação rodará na porta **3000** [localhost:3000](http://localhost:3000)

 ### Comandos úteis
`npx knex migrate:rollback --all` - Reseta todo o banco de dados

### Links úteis
- [Documentação do Knex](https://knexjs.org/guide/)
- [Documentação do Vue JS](https://vuejs.org/guide/introduction.html)
- [Documentação EJS](https://ejs.co/#install)
