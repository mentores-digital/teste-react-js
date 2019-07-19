# React Challenge

Este é um desafio para testar seus conhecimentos em JavaScript, React e Redux;

Neste teste existem várias respostas corretas, pois o objetivo é avaliar a sua forma de codificação, e suas habilidades usando a tecnologia proposta.

## Obrigatoriedades

O projeto deve utilizar webpack, e deve ser desenvolvido em React, e utilizar Redux para o carrinho de compras.

O Front-End deve utilizar Bootstrap na versão 4.

Os produtos disponíveis devem ser recuperados através de uma API Rest, disponibilizada neste mesmo projeto.

## Carrinho de Compras

Seu objetivo é montar um carrinho de compras simples, conforme o prototipo a seguir:

O layout deve ser como de um site de vendas convencional, com uma listagem de produtos, e um icone de carrinho de compras no topo do site. 

O icone do carrinho de compras deve exibir uma badge com a quantidade de itens presente no carrinho.

A tela de listagem de produtos deve:

- Listar produtos
  - Ao entrar no projeto, deve exibir os produtos na listagem com foto, titulo e preço formatado em reais;
  - Ao clicar no produto da lista, deve exibir os detalhes de um produto individual;
- Permitir comprar 
  - Ao clicar em comprar, e o produto não estiver no carrinho, deve ser adicionado;
  - Ao clicar em comprar, e o produto ja existir no carrinho, deve ser incrementado em 1;
- Exibir resumo do carrinho
  - Exibir no icone do carrinho uma badge com quantidade de itens;
  - Exibir ao lado do icone, o valor total da compra;

O carrinho deve:

- Permitir remover itens;
  - Ao remover, liberar o estoque do produto;
- Permitir alterar a quantidade de um item;
  - Ao clicar em aumentar, deve incrementar em 1;
  - Ao clicar em diminuir, deve decrementar em 1;
  - Ao incrementar, deve validar se o produto ainda possui estoque;
  - Ao decrementar, deve liberar o estoque do produto;
  - Não deve permitir o usuário informar quantidade zero;
- Exibir o somatório total dos itens incluidos;

## Serviço Rest

Criar o backend não é o foco deste teste, portanto está sendo disponibilizado um serviço Rest que deve ser utilizado para recuperar a lista de produtos do projeto.

Para rodar o serviço, é necessário instalar o json-server:

`npm install -g json-server`

Após isso, rodar o comando: `json-server --watch rest-api/products.json`

Isso irá disponibilizar uma api REST rodando no endereço http://localhost:3000/products.

Um produto especifico pode ser acessado através da url http://localhost:3000/products/{id};

## O que vamos avaliar

* Automação de tasks com gulp, grunt ou outra ferramenta de sua escolha
* HTML5 escrito da maneira mais semântica possível
* CSS3 com um pre processador de sua escolha, aqui na Mentores utilizamos SASS SCSS.
* Layout responsivo
* Estruturação de pastas e organização
* Lógica de programação e Legibilidade do código

### O que nos impressionaria

* Testes de aceitação
* [BEM naming convention](http://getbem.com/naming/)
* Aplicação de animações em css quando possível
* Ver o código rodando live
* [Utilização do Git flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html)

### O que nós não gostaríamos

* Descobrir que não foi você quem fez seu teste
* Ver commits gigantes, sem mensagens ou com -m sem pé nem cabeça

## O que avaliaremos de seu teste

* Histórico de commits do git
* As instruções de como rodar o projeto
* Organização, semântica, estrutura, legibilidade, manutenibilidade, escalabilidade do seu código e suas tomadas de decisões
* Alcance dos objetivos propostos
* Componentização e extensibilidade dos componentes Javascript

## Como entrego meu teste?

Nos envie um email com o título "Desafio frontend - { seu nome }" contendo o link do seu fork para o email matheus@mentores.com.br
