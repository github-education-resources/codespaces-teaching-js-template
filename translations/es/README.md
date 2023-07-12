[![Ábralo en GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526680454)

# Plantilla de CodeSpace para JavaScript

_Amplíe y use para sus lecciones de desarrollo web en minutos._

Esta plantilla de Codespace para JavaScript provee un ambiente normalizado que puede usar para impartir su clase. No es necesario dedicar tiempo para realizar alguna configuración de parte suya o de sus estudiantes, permitiéndole enfocarse en el contenido y las lecciones.

* **¿Para quién es este recurso?** _Para educadores de todos los niveles._
* **¿Cuánta experiencia necesitan los estudiantes?** _Cero_. Esta plantilla está construida con elementos básicos y completada con comentarios, así que puede ser usada tanto en lecciones para principiantes como para avanzados.
* **¿Puedo usar esta plantilla para otros frameworks web?** _Por supuesto_. Esta plantilla usa React como ejemplo, pero las [instrucciones están incluidas en este documento](https://github.com/microsoft/codespaces-teaching-template-js#step-2-change-to-a-different-frontend-web-framework) para ayudarle a usar esta plantilla con su framework web.
* **Prerrequisitos:** _Ninguno_. Esta plantilla le provee una aplicación web funcional y desplegable que puede extender inmediatamente para sus necesidades de enseñanza con [GitHub Copilot](https://github.com/features/copilot/) como un recurso de apoyo.

![Plantilla de enseñanza de JavaScript en Codespaces](/__images__/js-teaching-template-start.gif "JavaScript Codespaces teaching template")


## 🧑‍🏫 ¿Qué es GitHub Codespace y cómo puedo usarlo al enseñar?

Un Codespace es un ambiente de desarrollo que se encuentra hospedado en la nube que puede configurar. El beneficio de Codespaces Education ofrece a los profesores de Global Campus una asignación mensual gratuita de horas de GitHub Codespaces para usar en [GitHub Classroom](classroom.github.com). [Aquí](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom) puede aprender más acerca de cómo usar GitHub Codespaces con GitHub Classroom.

Si aún no es un profesor Global Campus, puede aplicar [aquí](https://education.github.com/discount_requests/pack_application)  o para más información, vea [Apply to GitHub Global Campus as a teacher](https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher).


### Guía rápida para iniciar

1. Haga clic en el botón **Use This Template** (Usar esta plantilla)
1. Seleccione el dueño del repositorio (por ejemplo, su cuenta de GitHub o su organización)
1. Introduzca un nombre único para su nuevo repositorio.
1. Haga clic en **Create repository from template** (Crear repositorio desde la plantilla)
1. Una vez que el repositorio ha sido creado, haga clic en el botón **Code** (Código)
1. Haga clic en el botón **Create Codespace on main** (Crear Codespace en main)  

### ¿Por qué usarlo?
* Evite el tiempo dedicado a las configuraciones tanto para usted como para sus estudiantes.
* Funciona desde la nube.
* Puede ser configurado y personalizado.
* Se integra con sus repositorios de GitHub.

> 🎥 **Vea el video tutorial para aprender más acerca de  Codespaces** <br/>
> <a href="https://aka.ms/CodespacesVideoTutorial">![image](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)</a>

### Personalización para sus lecciones

Al usar este proyecto de plantilla, puede personalizar los Codespaces de GitHub para satisfacer las necesidades de su lección enviando archivos de configuración a su repositorio (a menudo conocido como Configuración como Código). Luego puede usar esta plantilla para crear tareas en [GitHub Classroom](classroom.github.com). Esto crea una configuración de Codespace repetible para **todos** los estudiantes de su proyecto. Puede configurar cosas como:

* Extensiones: Puede especificar cuáles extensiones de Visual Studio Code deberían ser preinstaladas
* Archivos dotfiles y configuraciones
* Librerías y dependencias del sistema operativo  

Esto le permite configurar el entorno de Codespace exacto que necesita para sus lecciones y saber que todos sus alumnos tendrán exactamente el mismo entorno de proyecto. _No se necesita dedicar tiempo de la clase para la configuración_.

> 💡 Aprenda más aquí: [docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account](https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)

<br />

## 🗃️ Plantilla JavaScript de CodeSpace

Este repositorio es una plantilla de GitHub para una aplicación web que utiliza el framework web React. El objetivo aquí es brindarle una plantilla que pueda usar de inmediato. También puede utilizar los pasos de este documento para adaptarlo a sus necesidades particulares.

El repositorio contiene lo siguiente:

* `/src`: archivos HTML, JavaScript y CSS para la aplicación web.
* `.eslintrc`: Configuraciones para [ESLint](https://eslint.org/) que se incluyen para la consistencia y la calidad del código.
* `.prettierrc`: Configuraciones para [Prettier](https://prettier.io/) que se usan para darle formato al código.
* `package.json` y `package-lock.json`: Defina la información del proyecto para [Node.js](https://nodejs.org/), los paquetes dependientes y las versiones necesarias para cada uno.
* `docs`: Lecciones de muestra e inicios rápidos de herramientas para que los use en su enseñanza.

### Acerca de la aplicación web (`/src` )


Configuramos esta plantilla para mostrar una aplicación web que usa el framework [React](https://reactjs.org/) y [Parcel](https://parceljs.org/) para construir la aplicación dentro de Codespaces.

Hemos incluido la estructura de archivos mínima para una aplicación de trabajo, por lo que tiene la capacidad inmediata de personalizar. También se incluye un componente de muestra (Header) para demostrar cómo incorporar componentes en su aplicación.

La plantilla usa [Parcel](https://parceljs.org/) porque se considera una de las más fáciles de usar, con una configuración limitada. Por supuesto, puede ampliar o reemplazar esto.

![image](https://user-images.githubusercontent.com/82035/195201984-2ca8f38b-c834-4b94-a69a-5a727aaf90eb.png)

<br />

## 🚀 Ejecute esta plantilla

Para ejecutar lo que hay en este repositorio, primero debe iniciar una instancia de Codespaces.

1. Cree un repositorio a partir de esta plantilla. Use este [enlace para crear el repositorio](https://github.com/microsoft/codespaces-teaching-template-js/generate). Seleccione el propietario del repositorio, proporcione un nombre, una descripción si lo desea y si le gustaría que el nuevo repositorio sea público o privado.
1. Navegue a la página principal del repositorio recién creado.
1. Debajo del nombre del repositorio, use el menú desplegable Code y, en la pestaña Codespaces, seleccione "Create codespace on main".

     <img src="https://docs.github.com/assets/cb-138303/images/help/codespaces/new-codespace-button.png" alt="Create Codespace" style="width: 270px;"/>

1. Espere mientras GitHub inicializa Codespace.

     <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="width: 600px;"/>

1. Cuando termine, verá que Codespace se carga con una sección de terminal en la parte inferior. Codespaces instalará todas las extensiones requeridas en su contenedor, luego ejecutará el comando `npm install`. Una vez que se complete la instalación del paquete, Codespaces ejecutará el comando `npm start` para iniciar su aplicación web que se ejecuta dentro de su Codespace.

    Cuando la aplicación web se haya iniciado correctamente, verá un mensaje en Termin que indica que el servidor se está ejecutando en el puerto 1234 dentro de su Codespace:
  
    <img src="https://user-images.githubusercontent.com/82035/220460347-605293ba-d3d1-483a-8157-71eaabb7ef52.png" alt="La aplicación web se inició en el puerto 1234" style="width: 300px; "/>

<br />

## ✨ Personalice su Codespace

Esta plantilla está diseñada para ser completamente personalizable para sus necesidades particulares de enseñanza de Desarrollo Web. Aquí hay tres escenarios de desafío diferentes que es probable que desee hacer:

   1. [Agregar una extensión](#paso-1-agregar-una-extensión)
   2. [Actualizar configuración de linter](#paso-2-actualizar-configuración-linter)
   3. [Actualice la versión de Node.js](#paso-3-actualizar-la-versión-de-nodejs)
  
   > 💡 Aprenda más aquí: [docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account](https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)

### Paso 1: Agregar una extensión

Las extensiones de VS Code le permiten agregar funcionalidad a su instancia de VS Code para que pueda configurarla para cumplir con su flujo de trabajo de desarrollo particular. En [VS Code Marketplace](https://marketplace.visualstudio.com/VSCode?WT.mc_id=academic-79297-sagibbon) puede explorar la colección completa para encontrar el lenguaje exacto, el linter, los depuradores y más que necesite para su proyecto.

Dentro de esta plantilla tenemos extensiones preinstaladas para que las utilice en su Codespace. Aquí es como puede ver y cambiar con cuáles extensiones se inicializará su entorno de Codespaces:

1. Abra el archivo _.devcontainer/devcontainer.json_ y localice el siguiente elemento JSON **extensions**

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Agregue "_oderwat.indent-rainbow_" a la lista de extensiones. Debería terminar pareciéndose a lo siguiente:

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps",
        "oderwat.indent-rainbow"
   ]
   ```

La cadena agregada es el identificador único de [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79297-sagibbon), una extensión popular para hacer una indentación más legible. Agregar el identificador "_oderwat.indent-rainbow_" a la lista le permite a Codespaces saber que esta extensión debería instalarse previamente al inicio.

Para encontrar el identificador único de una extensión:

* Vaya a la página web de la extensión, por ejemplo [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79297-sagibbon)
* Ubique el campo _Unique Identifier_ en la sección **Más información** en su lado derecho.

### Paso 2: Actualizar la configuración de linter

Un linter es una herramienta que ayuda a mejorar la calidad y la consistencia del código. Este proyecto viene configurado con [ESLint](https://eslint.org/).

Para comenzar, incluimos algunas configuraciones básicas de linter que normalmente se encuentran en JavaScript y en las aplicaciones React. Incluye extensiones para [Prettier](https://prettier.io/) (para reglas de formato de código) y accesibilidad web con [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).

Ahora actualicemos las reglas de linter para verificar que los [tipos de accesorio](https://reactjs.org/docs/typechecking-with-proptypes.html) se definan en todos los componentes de React. Para establecer esta regla de linter, abra el archivo `.eslintrc`. Dentro del objeto `rules` agregue: `"react/prop-types": "warn"`. Entonces, sus reglas de ESLint deberían ser:

```javascript
"rules": {
   "prettier/prettier": ["warn", { "endOfLine": "auto" }],
   "react/prop-types": "warn"
}
```

> _Nota: los valores posibles para establecer una regla son "off", "warn" y "error". Cuando se establece en "warn", se notificará al estudiante sobre el problema, pero no se requerirá que lo resuelva. Establecer en "error" requerirá que un estudiante resuelva ese problema de linter._

Con eso en su lugar, todas las propiedades entrantes a un componente deberán definirse con el nombre y el tipo o el alumno verá una advertencia. Luego puede agregar un accesorio de título a `Header` y ver su nueva regla en acción:

<img src="https://user-images.githubusercontent.com/82035/198326157-3f6e28b4-d724-4725-b5ed-5331d8c17db7.png" alt="Componente de encabezado con accesorio de título y error de linter" style="width: 600px" />

Para resolver el problema de los tipos de accesorio en este ejemplo, necesitaría importar `PropTypes` y luego definir `propTypes` para `Header`, lo que le da:
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

### Paso 3: Actualizar la versión de Node.js

Si desea cambiar la versión de Node.js que usa este proyecto, siga estos pasos:

Abra *.devcontainer/devcontainer.json* y reemplace la siguiente sección:

```json
"VARIANT": "16-bullseye"
```

with the following instruction:

```json
"VARIANT": "18.9-bullseye"
```

Este cambio utilizará Node.js 18.9 en lugar de 16. La lista completa de todas las variantes de Node.js disponibles se puede encontrar en [hub.docker.com/_/node](https://hub.docker.com/_/node)

Recordatorio: cuando cambie cualquier configuración en el json, aparecerá un cuadro después de guardar.

Haga clic en reconstruir. Espere a que su codespace reconstruya el entorno de VS Code.

<br />

## 🤖 Crear una lección

Este proyecto de plantilla le proporciona una base sobre la que construir una lección personalizada. Usando GitHub Copilot, lo guiaremos a través de la creación de una lección de ejemplo en [Typescript](https://www.typescriptlang.org/) y un examen que podría usar para su clase siguiendo los siguientes pasos:

1. [Escribir una descripción de la lección](#step-1-write-a-lesson-description)
1. [Agregar pasos a la lección](#step-2-add-steps-to-lesson)
1. [Agregar desafíos de código](#step-3-add-code-challenges)
1. [Crear un examen](#step-4-create-a-quiz)

> 👋 Obtener acceso a Copilot
>
> GitHub Copilot es **GRATIS** para estudiantes y profesores, [aprenda más aquí](https://education.github.com/pack/join). Siga [estos pasos](https://techcommunity.microsoft.com/t5/educator-developer-blog/step-by-step-setting-up-github-student-and-github-copilot-as-an/ba-p/3736279?WT.mc_id=academic-0000-sagibbon) para verificar su membresía de estudiante o docente y habilitar Copilot de forma gratuita.

<br/>

### Paso 1: Escriba una descripción de la lección

Para nuestra lección de muestra, vamos a utilizar "Introducción a TypeScript" como tema de nuestra lección. Abra el archivo [`sample_lesson.md`](./docs/lessons/sample_lesson.md) donde verá que lo hemos comenzado con el título de la lección.

Después del título, presione la tecla enter dos veces para obtener una línea vacía y luego la nueva línea en la que está escribiendo (a Markdown le gusta que algunas líneas vacías se representen correctamente). En esta línea, solicite a Copilot algo sobre la descripción de nuestra lección. Comience a escribir: _En esta lección_

A medida que comience a escribir, verá que Copilot comienza a sugerir algún texto. Seleccione el texto sugerido presionando `tab`. Copilot luego agregará el texto a su archivo y le indicará la siguiente línea. Continúe escribiendo: _aprenderemos sobre_

-----
⭐ BONO COPILOT ⭐

Si desea ver a Copilot en acción, presione la tecla enter después de su descripción completa y vea lo que Copilot sugiere para su lección.

Requisitos previos, objetivos de aprendizaje, una introducción a lo que es TypeScript, tan solo con lo poco que le ha dado a Copilot hasta ahora, puede llenar todo esto por usted.

Acepte sugerencias, realice ediciones y continúe desarrollando esta parte inicial de su lección.

-----

<br/>

### Paso 2: Agregar pasos a la lección

Para que esta lección sea práctica para sus alumnos, agreguemos algunos pasos sobre cómo empezar.

Después de su descripción y las secciones de introducción en las que usó Copilot para ayudarse a construir, hagamos que Copilot nos ayude nuevamente y cree una lista de pasos enumerados para que los sigan nuestros estudiantes.

En una nueva línea, comience a escribir lo siguiente y vea lo que Copilot le sugerirá:

```markdown
## Pasos para iniciar

1. Haga un fork de este repositorio de plantilla en su propia cuenta de GitHub y ábralo en Codespaces.
2. Instale el paquete TypeScript.
3. Cree un archivo de configuración de TypeScript.
4. Convierta `index.js` a `index.tsx`.
5. Convierta `App.js` a `App.tsx`.
6. Ejecute el compilador de TypeScript.
7. Haga commit y push de sus cambios.
8. Inicie una discusión en la pestaña Discussions de este repositorio
```

_NOTA: Los pasos anteriores son solo un ejemplo, ¡sea creativo y personalícelo! Empuje a Copilot en el camino para ayudarlo a desarrollar los pasos de su lección._

<br/>

### Paso 3: Agregar desafíos de código

Ahora que tenemos una descripción de la lección y los pasos, agreguemos algunos desafíos de código para que nuestros estudiantes los completen y muestren su creatividad.

En una nueva línea, solicite a Copilot lo siguiente: ```## Desafíos de Código``` y vea qué le sugiere Copilot.

Como ejemplo, digamos que queremos agregar los desafíos a continuación. Es posible que Copilot no lo haga bien en el primer intento, pero podemos completar algunos y comenzará a captar el patrón y ayudarnos.

```markdown
## Desafíos de código

1. Cree un nuevo componente llamado `Header` y agréguelo al componente `App`.
2. Agregue un accesorio al componente `Header` llamado `title` y pásele un valor de cadena.
3. Agregue un accesorio al componente `Header` llamado `subtitle` y pásele un valor de cadena.
```

### Paso 4: Crear resumen y discusión

Esta lección de ejemplo ha enseñado a los estudiantes sobre TypeScript, les ha llevado a poder hacer fork de un repositorio de plantilla, instalar TypeScript y completar desafíos de TypeScript. Para completar esta lección, resumamos y hagamos que los estudiantes demuestren su aprendizaje a través de una discusión en la pestaña [Discussions](/../../discussions) de este repositorio.

En una nueva línea, pídale a Copilot lo siguiente: ```## Resumen``` y le sugerirá un resumen de la lección.

Después de eso, en una nueva línea, pídale a Copilot: ```## Discusión``` y comenzará a sugerir preguntas de discusión para que las respondan sus estudiantes.

-----
⭐ BONO COPILOT ⭐

Si desea ver a Copilot en acción, presione la tecla enter después de haber completado su resumen  y vea lo que Copilot sugiere a continuación para desarrollar su lección.

Intente hacer que cree una lista de recursos para sus estudiantes. O qué tal un exame. Siga guiando a Copilot hacia lo que está buscando y seguirá ayudándolo a desarrollar su lección.

-----

<br />

## 📚 Recursos

* [Resumen de documentos de GitHub Codespaces](https://docs.github.com/en/codespaces/overview)
* [Inicio rápido de documentos de GitHub Codespaces](https://docs.github.com/en/codespaces/getting-started/quickstart)
* [Documentos de GitHub Copilot](https://docs.github.com/en/copilot)
* [Usar contenedores de desarrollo localmente con VS Code y Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)
* [Uso de GitHub Codespaces con GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)

> #### Aplicación de navegador Codespaces
>
> Si está utilizando Edge o Chrome, verá una opción para instalar la aplicación Codespaces cuando inicie su Codespace. La aplicación Codespaces le permite iniciar su Codespace dentro de la aplicación para que pueda trabajar fuera del navegador. Busque el icono de la aplicación e instale la ventana emergente para probarla.
>
> <img src="https://user-images.githubusercontent.com/82035/196431310-806a36ca-f122-4739-83f6-79afa1543e7c.png" alt="La aplicación web se inició en el puerto 1234" style="width: 800px ;"/>

<br />

### 🔎 ¿Encontró un problema o tiene una idea de mejora?
Ayúdanos a mejorar este repositorio de plantilla [¡informándonos y abriendo un issue!](/../../issues/new).
