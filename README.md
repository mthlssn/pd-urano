# pd-urano-frontend

_Padrões_

---

#### 1. Branches

##### 1.1 Branche de Produção

Essa é a branche base do projeto.

- **main**: Branch principal de produção.

##### 1.2 Branches de Release

Criadas para preparar uma nova versão.

- **release/1.0.0**
- **release/v2.0.0**

##### 1.3 Branches de Pages

Criadas para desenvolver uma única página.

- **pages/index**
- **pages/sobre**
- **pages/portal-de-credito**

#### 2. Commits

##### 2.1 Padrão de Commits Semânticos

Esse é o padrão de commit:

```
 <tipo>(escopo opcional): <descrição breve> <issue>
```

Exemplos:

```
 feat(auth): adicionar suporte para autenticação via Google #68
 fix(navbar): corrigir problema de exibição em telas menores #15
 docs(readme): atualizar instruções de instalação #37
 style(css): ajustar indentação no arquivo de estilos #123
 merge(branch-pages/sobre): realizando merge na branch main #13 
```

##### 2.2 Tipos de commits

- **feat**: utilizado para desenvolver uma nova funcionalidade no projeto.

  - Exemplos: Adicionar funcionalidade de upload de imagens. Criar novas páginas.

- **fix**: utilizado para corrigir erros/bugs no projeto.

  - Exemplos: Ajustar cálculos incorretos na função de conversão de moedas.

- **style**: utilizado para alterar a estrutura do projeto que não irá impactar em seu funcionamento de nenhuma forma.

  - Exemplos: Aplicar convenções de nomeação para variáveis e métodos seguindo o style-guide.

- **refactor**: utilizado para alterar a estrutura do projeto que não irá impactar em sua lógica de funcionamento.

  - Exemplos: Melhorar a estrutura de um componente para torná-lo mais reutilizável, sem alterar o comportamento.

- **test**: utilizado para criar e alterar testes.

  - Exemplos: Escrever testes de integração para a nova API de autenticação.

- **chore**: utilizado para realizar mudanças de desenvolvimento do projeto.

  - Exemplos: Configurar scripts de automação para build e deploy.

- **docs**:utilizado para realizar alterações nas documentações.
  - Exemplos: Adicionar um guia de instalação passo a passo para desenvolvedores.

- **merge**:utilizado para realizar merges.
  - Exemplos: Realizar o merge de uma branch de páginas na branch main. 

##### 2.3 Modelo de descrições dos commits

As descrições deverão ser escritas sendo composta por duas partes:

- **Título:** Em uma única linha deve ser escrito o que faz o commit.
- **Corpo(opcional):** Em uma ou mais linhas pode ser escrito com mais detalhes a alteração feita.

Exemplo de commit simples:

```
fix(api): corrigir erro de timeout nas requisições de login #345

```

Exemplo de commit mais detalhado:

```
feat(search): implementar filtro de busca por categoria

Adiciona funcionalidade de filtro para que o usuário possa buscar itens por categoria na página principal.

#134
```

##### 2.4 Framework Angular

Nomenclaturas utilizadas em projetos com framework Angular.

- build: utilizada para indicar mudanças na estrutura do projeto.
  - Exemplos: Criar componentes com o ng generator component.

#### 3. Padronização visual

Neste projeto seguiremos a seguinte identidade visual:

##### 3.1 Textos

- H1 (Título - Index)

  - font: Vollkorn, sans-serif
  - tamanho: 64
  - bold

- H2 (Subtítulo - Index)

  - font: Raleway, sans-serif
  - tamanho: 24
  - bold

- H2 (Título 2 - Index)

  - font: Vollkorn, sans-serif
  - tamanho: 48
  - bold

- H3 (Subtítulo 2 - Index)

  - font: Raleway, sans-serif
  - tamanho: 24
  - bold

- H1 (Título da página)

  - font: Vollkorn, serif
  - tamanho: 48
  - bold

- H3 (Título do Texto)

  - font: Raleway, sans-serif
  - tamanho: 24
  - bold

- P (Texto)
  - font: Raleway, sans-serif
  - Tamanho: 18
  - normal

##### 3.2 Paleta de cores

    cor-primaria: #243650;
    cor-primaria-bg: rgba(42, 109, 210, 0.3);
    cor-secundaria: #F4BC1D;
    cor-terciaria: #A3C4BC;
    cor-secundaria-bg: rgba(243, 188, 50, 0.3);
    cor-cinza: #F7F6F4;
    cor-separador: rgba(0, 0, 0, .08);
    cor-bg: #161d26;
    cor-fonte: rgba(255, 255, 255, .85);
    cor-fonte-forte: #fff;
    cor-fonte-fraca: rgba(255, 255, 255, .5);

#### 4. Versionamento

Este projeto utiliza o versionamento semântico (Semantic Versioning, ou SemVer), que segue o formato MAJOR.MINOR.PATCH:

- MAJOR: Mudanças incompatíveis na API, ou seja, grandes mudanças que quebram funcionalidades existentes.
- MINOR: Novas funcionalidades adicionadas de forma retrocompatível.
- PATCH: Correções de bugs e melhorias pequenas que não quebram funcionalidades.

##### 4.1 Estrutura de Versionamento

- A versão atual do projeto está descrita no formato vX.Y.Z, onde:
  - X é o número da versão MAJOR.
  - Y é o número da versão MINOR.
  - Z é o número da versão PATCH.

##### 4.2 Exemplo

- 1.0.0 - Primeira versão estável do projeto.
- 1.1.0 - Uma nova funcionalidade foi adicionada de forma retrocompatível.
- 1.1.1 - Correção de um bug na versão 1.1.0.

##### 4.3 Controle de Versões

O controle de versões é feito utilizando o sistema Git. Para facilitar o entendimento e o uso, cada versão é documentada em um changelog que descreve as mudanças feitas.

Recomenda-se o uso de tags para identificar versões importantes no histórico do Git, como _v1.0.0_ , _v1.1.0_, etc.

#### 5. Dependências

Este projeto utiliza:
- Angular CLI: 19.0.1
- Angular: 19.0.0
- Node: 20.18.0
- npm: 10.8.2

Confira o arquivo [package.json](./package.json) para mais detalhes.

