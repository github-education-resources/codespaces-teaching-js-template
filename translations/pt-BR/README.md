[![Abrir em GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526680454)

# Ensine JavaScript no Codespaces 

_Amplie e use para suas aulas de Desenvolvimento Web em minutos._

Este modelo de JavaScript no Codespace fornece um ambiente normalizado para você construir um projeto com sua turma. Não é necessário tempo de configuração seu ou de seus alunos, permitindo que você se concentre no conteúdo e nas lições.

* **Para quem é isso?** _Educadores de todos os níveis_. 
* **De quanta experiência os alunos precisam?** _Nenhuma_. Este modelo é construído com elementos básicos completos com comentários para que possa ser usado em aulas de iniciante a avançado.
* **Posso usar este modelo para outros Web Frameworks?** _Com certeza_. Este modelo usa o React como exemplo, mas [as instruções estão incluídas neste documento](https://github.com/microsoft/codespaces-teaching-template-js#step-2-change-to-a-different-frontend-web-framework) para ajudá-lo a usar este modelo com seu web framework.
* **Pré-requisitos:** _Nenhum_. Este modelo fornecerá um aplicativo da Web funcional e implementável que você pode estender imediatamente para suas necessidades de ensino com [GitHub Copilot](https://github.com/features/copilot/) para ajudar.

![Ensine JavaScript no Codespace ](/__images__/js-teaching-template-start.gif "Ensine JavaScript no Codespace ")

## 🧑‍🏫 O que é GitHub Codespace e como posso usá-lo no meu ensino?

Um Codespace é um ambiente de desenvolvimento hospedado na nuvem que você pode configurar. O benefício Codespaces Education oferece aos professores do Global Campus um subsídio mensal gratuito de horas GitHub Codespaces para usar em [GitHub Classroom](classroom.github.com). Saiba mais [aqui](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom) sobre usar GitHub Codespaces com GitHub Classroom.

Se você ainda não é professor do Global Campus, Inscreva-se [aqui](https://education.github.com/discount_requests/pack_application) ou para mais informações, veja [Inscreva-se no GitHub Global Campus como professor](https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher).


### Início Rápido

1. Clique no botão **Usar este modelo**
1. Selecione o proprietário do repositório (por exemplo, sua conta da organização ou do GitHub)
1. Insira um nome exclusivo para seu novo repositório
1. Clique em **Criar repositório a partir do modelo**
1. Uma vez criado o repositório, clique no botão **Código**
1. Clique no botão **Create Codespace on main**

### Por que usá-lo:

* Evite o tempo de configuração do ambiente para você e seus alunos.
* Executa na nuvem.
* Pode ser configurado e personalizado.
* Integra-se com seus repositórios no GitHub.

> 🎥 **Assista ao tutorial em vídeo para saber mais sobre Codespaces**<br/>
> <a href="https://aka.ms/CodespacesVideoTutorial">![image](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)</a>

### Personalização para suas aulas

Ao usar este Modelo de projeto, você pode personalizar os Codespaces do GitHub para atender às suas necessidades de aula, enviando arquivos de configuração para o seu repositório (geralmente conhecido como Configuration-as-Code ou, em português, Configuração-como-Código). Você pode então usar este modelo para criar atribuição em [GitHub Classroom](classroom.github.com). Isso cria uma configuração de Codespace repetível para **todos** os alunos do seu projeto. Você pode configurar coisas como:

* Extensões: você pode especificar quais extensões do Visual Studio Code devem ser pré-instaladas.
* Dotfiles e configurações.
* Bibliotecas e dependências do sistema operacional.

Isso permite que você configure o ambiente Codespace exato necessário para suas aulas e saiba que todos os seus alunos terão exatamente o mesmo ambiente de projeto. _Não é necessário tempo de aula para configuração_.

> 💡 Saiba mais aqui, [docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account](https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)

<br />

## 🗃️ Modelo JavaScript de Codespaces

Este repositório é um modelo do GitHub para um aplicativo da Web usando a estrutura da Web do React. O objetivo aqui é fornecer um modelo para você usar imediatamente. Você também pode usar as etapas deste documento para adaptá-lo às suas necessidades específicas.

O repositório contém o seguinte:

* `/src`: Arquivos HTML, JavaScript e CSS para o aplicativo da web.
* `.eslintrc`: Configurações para [ESLint](https://eslint.org/) estão incluídas para consistência e qualidade do código.
* `.prettierrc`: Configurações para [Prettier](https://prettier.io/) que são usados para formatar o código.
* `package.json` e `package-lock.json`: Definir as informações do projeto para [Node.js](https://nodejs.org/), pacotes dependentes e as versões necessárias de cada um.
* `docs`: Amostras de lições e ferramentas de início rápido para você usar em seu ensino.

### Sobre o aplicativo Web (`/src` )

Definimos este modelo para demonstrar um aplicativo da web usando o framework do [React](https://reactjs.org/) e do [Parcel](https://parceljs.org/) para construir o aplicativo dentro de Codespaces.

Incluímos a estrutura de arquivo mínima para um aplicativo de trabalho, para que você tenha capacidade imediata de personalizar. Também está incluído um componente de amostra (cabeçalho) para demonstrar como incorporar componentes em seu aplicativo.

O modelo usa [Parcel](https://parceljs.org/) porque é considerado um dos mais fáceis de usar, com configuração limitada. É claro que você pode estender ou substituir isso.

![image](https://user-images.githubusercontent.com/82035/195201984-2ca8f38b-c834-4b94-a69a-5a727aaf90eb.png)

<br />

## 🚀 Executar este modelo

Para executar o que está neste repositório, você precisa primeiro iniciar uma instância do Codespaces.

1. Crie um repositório a partir deste modelo. Use isto [link de criação de repositório](https://github.com/microsoft/codespaces-teaching-template-js/generate). Selecione o proprietário do repositório, forneça um nome, uma descrição se desejar e se desejar que o novo repositório seja público ou privado.
1. Navegue até a página principal do repositório recém-criado.
1. Sob o nome do repositório, use o Menu Code(Código) e, na guia Codespaces, selecione "Criar codespace no principal".

   ![1_nfr02raZ86kskqTNC9jPFg](https://github.com/rogergcorrea27/codespaces-teaching-js-template/assets/81336896/906b59da-267a-47e9-b9b7-26056c437e27)

1. Aguarde enquanto o GitHub inicializa o Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace inicializando" style="width: 600px;"/>

1. Quando concluído, você verá o carregamento do Codespaces com uma seção de terminal na parte inferior. O Codespaces irá instalar todas as extensões necessárias em seu contêiner, seguido pela execução `npm install`. Assim que as instalações do pacote forem concluídas, os Codespaces executarão `npm start` para iniciar seu aplicativo da Web em execução no seu Codespace.

  Quando o aplicativo da web for iniciado com sucesso, você verá uma mensagem no Terminal, informando que o servidor está sendo executado na porta 1234 em seu Codespace:

   <img src="https://user-images.githubusercontent.com/82035/220460347-605293ba-d3d1-483a-8157-71eaabb7ef52.png" alt="Aplicativo da Web iniciado na porta 1234" style="width: 300px;"/>

<br />

## ✨ Personalize seu Codespace

Este modelo destina-se a ser totalmente personalizável para suas necessidades específicas de ensino de Desenvolvimento Web. Aqui estão três cenários de desafio diferentes que você provavelmente desejará fazer:

  1. [Adicionar uma extensão](#etapa-1-adicionar-uma-extensão)
  2. [Atualizar a configuração do linter](#etapa-2-atualizar-a-configuração-do-linter)
  3. [Atualizar a versão do Node.js](#etapa-3-atualizar-a-versão-do-nodejs)

  > 💡 Saiba mais aqui, [docs.github.com/pt/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account](https://docs.github.com/pt/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)

### Etapa 1: Adicionar uma extensão

As extensões VS Code permitem adicionar funcionalidade à instância do VS Code para que você possa configurar para atender ao seu fluxo de trabalho de desenvolvimento específico. No [VS Code Marketplace](https://marketplace.visualstudio.com/VSCode?WT.mc_id=academic-79297-sagibbon) você pode navegar pela coleção completa para encontrar a linguagem exata, linter, depuradores e muito mais que você precisa para o seu projeto.

Dentro deste modelo, temos extensões pré-instaladas para você utilizar dentro do seu Codespace. Veja como você pode exibir e alterar com quais extensões seu ambiente Codespaces começa:

1. Abra o arquivo .devcontainer/devcontainer.json e localize as seguintes **extensões** de elemento JSON

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Adicione "oderwat.indent-rainbow" à lista de extensões. Deve acabar parecendo com o seguinte:

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps",
        "oderwat.indent-rainbow"
   ]
   ```

A string adicionada é o identificador único de indent-rainbow, uma extensão popular para tornar a indentação mais legível. Adicionar o identificador "oderwat.indent-rainbow" à lista permite que o Codespaces saiba que esta extensão deve ser pré-instalada ao iniciar.

Para localizar o identificador exclusivo de uma extensão:

* Navegue até a página da Web da extensão, por exemplo [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79297-sagibbon)
* Localize o campo Identificador Exclusivo na seção **Mais informações** no lado direito.

### Etapa 2: Atualizar a configuração do linter

Um linter é uma ferramenta que ajuda a melhorar a qualidade e a consistência do código. Este projeto vem configurado com [ESLint](https://eslint.org/).

 Para começar, incluímos algumas configurações básicas de linter normalmente encontradas em aplicativos JavaScript e React. Incluindo extensões para [Prettier](https://prettier.io/) (para regras de formatação de código), e acessibilidade da Web com [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).

Vamos agora atualizar as regras do linter para verificar se [tipos de propriedade](https://reactjs.org/docs/typechecking-with-proptypes.html) devem ser definidos em todos os componentes do React. Para definir esta regra linter, abra o arquivo `.eslintrc`. Dentro do objeto `rules` adicione: `"react/prop-types": "warn"`. Suas regras ESLint devem ser:

```javascript
"rules": {
   "prettier/prettier": ["warn", { "endOfLine": "auto" }],
   "react/prop-types": "warn"
}
```

> _Nota: os valores possíveis para definir uma regra são "off", "warn" e "error". Quando definido como "warn", o aluno será notificado sobre o problema, mas não será obrigado a resolvê-lo. Definir como "error" exigirá que um aluno resolva esse problema de linter._

Com isso definido, todas as propriedades de entrada para um componente precisarão ser definidas com o nome e o tipo ou o aluno verá um aviso. Você pode então adicionar um prop de título a `Header` e ver sua nova regra em ação:

<img src="https://user-images.githubusercontent.com/82035/198326157-3f6e28b4-d724-4725-b5ed-5331d8c17db7.png" alt="Header component with title prop and linter error" style="width: 600px" />

Para resolver a questão dos tipos de prop neste exemplo, você precisaria importar `PropTypes` e então definir os `propTypes` para `Header`, dando a você:

```javascript
import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return <h1>Educator React Codespaces JS Template - {title}</h1>;
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
```

### Etapa 3: Atualizar a versão do Node.js

Se você deseja alterar a versão do Node.js esse projeto está usando, siga essas etapas:

Abra *.devcontainer/devcontainer.json* e substitua a seguinte ação:

```json
"VARIANT": "16-bullseye"
```

com a seguinte instrução:

```json
"VARIANT": "18.9-bullseye"
```

Essa alteração usará Node.js 18.9 em vez de 16. A lista completa de todas as versões Node.js disponíveis pode ser encontrada em [hub.docker.com/_/node](https://hub.docker.com/_/node)

Lembrete: Quando você alterar qualquer configuração no json, uma caixa aparecerá após salvar.

Clique em Rebuild(em português, "Reconstruir"). Aguarde até que seu Codespace recrie o ambiente VS Code.

<br />

## 🤖 Criar uma lição

Este modelo de projeto fornece uma base para você criar uma lição personalizada. Usando o GitHub Copilot, guiaremos você através da criação de um exemplo de lição e quiz em [Typescript](https://www.typescriptlang.org/) que você pode usar para sua classe nos seguintes passos:

1. [Escrever uma descrição da lição](#etapa-1-escrever-uma-descrição-para-lição)
1. [Adicionar etapas à lição](#etapa-2-adicionar-etapas-à-lição)
1. [Adicionar desafios de código](#etapa-3-adicionar-desafios-de-código)
1. [Criar um quiz](#etapa-4-criar-resumo-e-discussão)

> 👋 Obtendo acesso ao Copilot
>
> O GitHub Copilot é **GRATUITO** para estudantes e professores, [saiba mais aqui](https://education.github.com/pack/join). Siga [essas etapas](https://aka.ms/copilot-estudantes) para verificar sua associação de alunos ou professores e habilitar o Copilot gratuitamente.

<br/>

### Etapa 1: Escrever uma descrição para lição

Para nossa lição de exemplo, usaremos "Introdução ao TypeScript" como nosso tópico de lição. Abra o arquivo [`sample_lesson.md`](./docs/lessons/sample_lesson.md) onde você verá que começamos com o título da lição.

Após o título, pressione Enter duas vezes para obter uma linha vazia e, em seguida, a nova linha na qual você está digitando (markdown gosta de algumas linhas vazias para renderizar corretamente). Nesta linha, certifique-se que o Copilot está habilitado, clicando no ícone da extensão. Comece a digitar: _Nesta lição_

Ao começar a digitar, você verá o Copilot começar a sugerir algum texto. Selecione o texto sugerido pressionando `tab`. O Copilot adicionará o texto ao seu arquivo e solicitará a próxima linha. Continue digitando: _vamos aprender sobre_

-----
⭐ BÔNUS DO COPILOT ⭐

Se você quiser ver o Copilot em ação, pressione Enter após sua descrição completa e veja o que o Copilot sugere ao lado para construir sua lição.

Pré-requisitos, objetivos de aprendizagem, uma introdução ao que é o TypeScript, apenas pelo pouco que você deu ao Copilot até agora ele pode preencher tudo isso para você.

Aceite sugestões, faça edições e continue a construir essa parte inicial da sua lição.

-----

<br/>

### Etapa 2: Adicionar etapas à lição

Para tornar esta lição acionável para alunos, vamos adicionar algumas etapas sobre como eles começam.

Depois de suas seções de descrição e introdução que você usou o Copilot para ajudar a construir para você, vamos ter o Copilot novamente nos ajudando e construindo uma lista de etapas numeradas para nossos alunos seguirem.

Em uma nova linha, comece a digitar o seguinte e veja o que o Copilot irá sugerir para você:

```markdown
## Etapas para começar

1. Estenda(fork) este repositório de modelos para sua própria conta do GitHub e abra-o no Codespaces.
2. Instale o pacote TypeScript.
3. Crie um arquivo de configuração TypeScript.
4. Converta `index.js` em `index.tsx`.
5. Converta `App.js` em `App.tsx`.
6. Execute o compilador TypeScript.
7. Confirme e envie suas alterações.
8. Inicie uma discussão na guia Discussões deste repositório.
```

_NOTA: Os passos acima são apenas um exemplo, seja criativo e faça com que seja seu próprio! Dê um empurrãozinho ao Copilot ao longo do caminho, inserindo mais informações, para ajudar a construir os passos da sua aula._

<br/>

### Etapa 3: Adicionar desafios de código

Agora que temos uma descrição da lição e etapas, vamos adicionar alguns desafios de código para nossos alunos completarem e mostrarem sua criatividade.

Em uma nova linha, avise o Copilot com: ```## Code Challenges``` e veja o que o Copilot sugere para você.

Como exemplo, digamos que queremos adicionar os desafios abaixo. O Copilot pode não acertar na primeira tentativa, mas podemos preencher alguns e ele começará a pegar o padrão e nos ajudar.

```markdown
## Desafios de Código 

1. Crie um novo componente chamado `Header` e adicione-o ao componente `App`.
2. Adicione um prop ao componente `Header` chamado `title` e passe um valor de string.
3. Adicione um prop ao componente `Header` chamado `subtitle` e passe um valor de string.
```

### Etapa 4: Criar resumo e discussão

Esta lição de exemplo ensinou os alunos sobre o TypeScript, fez com que eles estendessem um repositório de modelos, instalassem o TypeScript e concluíssem desafios do TypeScript. Para concluir esta lição, vamos resumir e fazer com que os alunos demonstrem seu aprendizado por meio de uma discussão na guia [Discussions](/../../discussions) deste repositório.

Em uma nova linha, comece a instruir o Copilot com:```## Resumo``` e ele irá sugerir um resumo da lição para você.

Depois disso, em uma nova linha comece a instruir o Copilot com:```## Discussão``` e ele começará a sugerir perguntas de discussão para seus alunos responderem.

-----
⭐ BÔNUS DO COPILOT ⭐

Se você quiser ver o Copilot em ação, pressione Enter após o resumo completo e veja o que o Copilot sugere ao lado para construir sua lição.

Tente fazer com que ele crie uma lista de recursos para seus alunos. Ou que tal um quiz. Continue guiando o Copilot para o que você está procurando, e ele continuará a ajudá-lo a construir sua lição.

-----

<br />

## 📚 Recursos

* [Visão geral dos documentos do Github Codespaces](https://docs.github.com/pt/codespaces/overview)
* [Guia de início rápido dos documentos do GitHub Codespaces](https://docs.github.com/pt/codespaces/getting-started/quickstart)
* [Documentos do GitHub Copilot](https://docs.github.com/pt/copilot)
* [Use dev containers localmente com o VS Code e o Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)
* [Usando o GitHub Codespaces com o GitHub Classroom](https://docs.github.com/pt/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)

> #### Aplicativo de navegador Codespaces
>
> Se você estiver usando o Edge ou o Chrome, verá uma opção para instalar o aplicativo Codespaces ao iniciar o Codespace. O aplicativo Codespaces permite que você inicie seu Codespace dentro do aplicativo para que você possa trabalhar fora do navegador. Procure o ícone do aplicativo e instale o pop-up para experimentá-lo.
>
> <img src="https://user-images.githubusercontent.com/82035/196431310-806a36ca-f122-4739-83f6-79afa1543e7c.png" alt="Web application started on port 1234" style="width: 800px;"/>

<br />

### 🔎 Encontrou um problema ou tem uma ideia de melhoria? 
Ajude-nos a melhorar este modelo de repositório, [informando-nos e abrindo um problema!](https://github.com/education/codespaces-teaching-js-template/issues/new). 
