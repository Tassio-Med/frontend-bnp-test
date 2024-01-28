# Projeto Next.js com TypeScript

Projeto desenvolvido em Next.js com TypeScript para o teste de Desenvolvedor Front-End na empresa BNP Soluções em T.I.

## Desafios

### 1. Modal Component

**Caminho:** `components/Modal/index.tsx`

- Ao clicar no wrapper do modal, o modal deve ser fechado. Esta ação deve ser ignorada caso o usuário clique em qualquer elemento dentro do modal.

### 2. API para Leitura de Usuários

**Caminho:** `pages/api/users/read.ts`

- Crie uma API que retorne uma lista de usuários.
- A request deve receber apenas o método GET.
- A lista deve conter pelo menos 2 usuários.
- Cada usuário deve ter um id, nome e email.
- Utilize a interface IUser para tipar os dados.


### 3. Ciclo de Vida

**Caminho:** `pages/ciclo-de-vida.tsx`

- No evento de montagem deste componente, devem ser registrados os seguintes event listeners:
  - onCounterMount
  - onCounterUnmount
  - onCounterUpdate
- Os eventos devem ser disparados no componente Counter, seguindo o ciclo de vida do mesmo.
- Ao atualizar o contador, deverá ser passado o valor atualizado no evento onCounterUpdate. Quando o valor chegar a 10, o Counter deve ser desmontado.

> (Opcional) Ao observar os eventos, você verá que eles são disparados mais de uma vez. Isso acontece porque o componente Counter é desmontado e montado novamente, e os eventos são registrados novamente. Isso é um problema comum no Next.js, você deve resolver este problema.

### 4. Context API

**Caminho:** `pages/context-api.tsx`

- Criar um contexto para exibir mensagens de sucesso e erro.
- Criar um componente para exibir as mensagens.
- Criar um hook para disparar e consumir as mensagens.
- Disparar as mensagens a partir dos botões abaixo.

### 5. Formulário

**Caminho:** `pages/formulario.tsx`

- Primeiramente vá até `/src/pages/api/users/create.ts` e implemente a API.
- Deve ser implementado utilizando a lib react-hook-form.
- O formulário deve ter os seguintes campos: nome, e-mail.
- Os dois campos são obrigatórios e precisam de validação.
- Ao dar 'submit', deve ser feita uma request para `/api/users/create`.
- Lide com os possíveis erros.



### 6. Lista

**Caminho:** `pages/lista.tsx`

- Primeiramente vá até `/src/pages/api/users/index.ts` e implemente a API.
- Obter a lista de usuários da API.
- Renderizar a lista de usuários.



### 7. Modal de Confirmação

**Caminho:** `pages/modal-de-confirmacao.tsx`

- Crie um componente para o modal de confirmação.
- Utilize o código abaixo como base.
- O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação".
- O título deve ser "Confirmação".
- O conteúdo deve ser dinâmico.

### 8. Modal

**Caminho:** `pages/modal.tsx`

- O modal fecha ao clicar em qualquer elemento, resolva o problema.

### 9. Página Estática

**Caminho:** `pages/pagina-estatica.tsx`

- Atualmente, o conteúdo é gerado no momento em que a requisição é feita.
- Transforme essa página em uma página estática.
- A página deve ser gerada no momento da build.
- A página deve ser atualizada a cada 1 minuto.

## Checkpoints

- [x] 1 - `components/modal.tsx` - Modal
- [x] 2 - `pages/api/users/index.ts` - Read List
- [x] 3 - `pages/ciclo-de-vida.tsx` - Ciclo de Vida
- [x] 4 - `pages/context-api.tsx` - Context Api
- [ ] 5 - `pages/formulario.tsx` - Formulário
- [x] 6 - `pages/lista.tsx` - Lista
- [x] 7 - `pages/modal-de-confirmacao.tsx` - Modal de confirmação
- [x] 8 - `pages/modal.tsx` - Modal
- [x] 9 - `pages/pagina-estatica.tsx` - Página estática

## Site da Empresa

[BNP Soluções em T.I](https://bnpsolucoes.com.br/)
