# test-lead
Esse é um projeto composto por uma API desenvolvida em Spring Boot(branch master), que é uma biblioteca escrita em Java, e uma camada visual utilizando a biblioteca javascript React.js.

Foi realizado o deploy da API no site Heroku com -> https://test-lead-api.herokuapp.com/ e utilizando os endpoints https://test-lead-api.herokuapp.com/lead e
https://test-lead-api.herokuapp.com/lead/{id} pode-se cadastrar, editar ou excluir dados através dos verbos GET, POST, DELETE e PUT.

Esse projeto pode ser facilmente executado utilizando a IDE Eclipse que se encontra no endereço https://spring.io/tools bastando clicar na opção "Maven Install" e em seguida "Spring Boot App".

Na camada visual, foi utilizada uma página HTML já criada com uma estrutura, sendo dividida em componentes através da biblioteca React.js, também sendo acrescentada várias alterações para se adequar a nova estrutura. Uma outra página também foi criada para testar a API citada anteriormente, podendo-se fazer consultas, edição e exclusão de dados. Foi realizado o deploy do projeto React no Heroku, podendo ser acessado por meio do endereco:

##https://lead-react.herokuapp.com/ 

Essa aplicação, por sua vez, já está utilizando a API diretamente do endereço:

##https://test-lead-api.herokuapp.com/lead

As instruções para se executar o projeto React encontram-se no README do projeto que está na branch React, mas é bastante simples. após fazer o download do projeto, executa-se o comando "yarn install" para carregar os "node modules", em seguida, executa-se o comando yarn start. 
