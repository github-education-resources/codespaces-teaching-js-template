[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526680454)

# JavaScript Codespace Template

_Extend and use for your Web Development lessons in minutes._

This JavaScript Codespace template provides you a normalized environment for you to build your class on. No setup time needed from you or your students, allowing you to focus on the content and lessons.

* **Who is this for?** _Educators of all levels_. 
* **How much experience do students need?** _Zero_. This template is built with basic elements complete with comments so it can be used in beginner to advanced lessons.
* **Can I use this template for other Web Frameworks?** _Absolutely_. This template uses React as an example, but [instructions are included in this document](https://github.com/microsoft/codespaces-teaching-template-js#step-2-change-to-a-different-frontend-web-framework) to help you use this template with your web framework.
* **Prerequisites:** _None_. This template will provide a working and deployable web app you can immediately extend for your teaching needs with [GitHub Copilot](https://github.com/features/copilot/) to help.

![JavaScript Codespaces teaching template](/__images__/js-teaching-template-start.gif "JavaScript Codespaces teaching template")

## 🧑‍🏫 What is GitHub Codespace and how can I use it in my teaching?

A Codespace is a development environment that's hosted in the cloud that you can configure. The Codespaces Education benefit gives Global Campus teachers a free monthly allowance of GitHub Codespaces hours to use in [GitHub Classroom](classroom.github.com). Learn more [here](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom) about Using GitHub Codespaces with GitHub Classroom.

If you are not already a Global Campus teacher, apply [here](https://education.github.com/discount_requests/pack_application) or for more information, see [Apply to GitHub Global Campus as a teacher](https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher).


### Quick Start

1. Click the **Use this Template** button
1. Select the repository owner (e.g. your GitHub account or organization)
1. Enter a unique name for your new repository
1. Click **Create repository from template**
1. Once repository created, click the **Code** button
1. Click **Create Codespace on main** button
 
### Why use it

* Avoid environment setup time for you and your students.
* Runs in the cloud.
* Can be configured and customized.
* Integrates with your repositories on GitHub.

> 🎥 **Watch the video tutorial to learn more about Codespaces** <br/>
> <a href="https://aka.ms/CodespacesVideoTutorial">![image](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)</a>
   
### Customization for your lessons

When using this template project, you can customize the GitHub Codespaces to meet your lesson needs by committing configuration files to your repository (often known as Configuration-as-Code). You can then use this template to create assignment in [GitHub Classroom](classroom.github.com). This creates a repeatable Codespace configuration for **all** students of your project. You can configure things like:

* Extensions: You can specify what Visual Studio Code extensions should be preinstalled
* Dotfiles and settings
* Operating system libraries and dependencies

This allows you to configure the exact Codespace environment needed for your lessons, and know that all your students will have the exact same project environment. _No class time needed for setup_.

> 💡 Learn more here, [docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account](https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)

<br />

## 🗃️ Codespaces JavaScript template

This repository is a GitHub template for a web application using the React web framework. The goal here is to give you a template to you can immediately use. You can also use the steps in this document to adapt it for your particular needs.

The repository contains the following:

* `/src`: HTML, JavaScript and CSS files for the web application.
* `.eslintrc`: Settings for [ESLint](https://eslint.org/) that is included for code consistency and quality.
* `.prettierrc`: Settings for [Prettier](https://prettier.io/) that is used to format code.
* `package.json` and `package-lock.json`: Define the project information for [Node.js](https://nodejs.org/), dependent packages and the versions needed of each. 
* `docs`: Sample lessons and tool quickstarts for you to use in your teaching.

### About the Web application (`/src` )

We set this template to demonstrate a web application using the [React](https://reactjs.org/) framework and [Parcel](https://parceljs.org/) to build the application within Codespaces.

We've included the bare minimum file structure for a working application, so you have immediate ability to customize. Also included is a sample component (Header) to demonstrate how to incorporate components into your application. 

The template uses [Parcel](https://parceljs.org/) because it's regarded one of the eaisest to use, with limited configuration. You can of course extend or replace this.

![image](https://user-images.githubusercontent.com/82035/195201984-2ca8f38b-c834-4b94-a69a-5a727aaf90eb.png)

<br />

## 🚀 Run this template

To run what's in this repository, you need to first start a Codespaces instance.

1. Create a repository from this template. Use this [create repo link](https://github.com/microsoft/codespaces-teaching-template-js/generate). Select the repository owner, provide a name, a description if you'd like and if you'd like the new repository to be public or private.
1. Navigate to the main page of the newly created repository.
1. Under the repository name, use the Code drop-down menu, and in the Codespaces tab, select "Create codespace on main".

    <img src="https://docs.github.com/assets/cb-138303/images/help/codespaces/new-codespace-button.png" alt="Create Codespace" style="width: 270px;"/>

1. Wait as GitHub initializes the Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="width: 600px;"/>

1. When complete you will see your Codespace load with a terminal section at the bottom. Codespaces will install all the required extensions in your container, followed by executing `npm install`. Once the package installs are completed, Codesaces will execute `npm start` to start your web application running within your Codespace.  

   When the web application has successfully started you will see a message in Termin that the server is running on port 1234 within your Codespace:
  
   <img src="https://user-images.githubusercontent.com/82035/220460347-605293ba-d3d1-483a-8157-71eaabb7ef52.png" alt="Web application started on port 1234" style="width: 300px;"/>

<br />

## ✨ Customize your Codespace

This template is intended to be fully customizable for your particular Web Development teaching needs. Here are three different challenge scenarios you are likely to want to do:

  1. [Add an extension](#step-1-add-an-extension)
  2. [Update linter configuration](#step-2-update-linter-configuration)
  3. [Update the version of Node.js](#step-3-update-the-version-of-nodejs)

  > 💡 Learn more here, [docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account](https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)

### Step 1: Add an extension

VS Code extensions let you add functionality to your VS Code instance so that you can setup to meet your particular development  workflow. In [VS Code Marketplace](https://marketplace.visualstudio.com/VSCode?WT.mc_id=academic-79297-sagibbon) you can browse the complete collection to find the exact language, linter, debuggers, and more that you need for your project.

Within this template we have preinstalled extensions for you to utilize within your Codespace. Here is how you can view and change which extensions your Codespaces environment starts with::

1. Open file _.devcontainer/devcontainer.json_ and locate the following JSON element **extensions**

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Add "_oderwat.indent-rainbow_" to the list of extensions. It should end up looking like the following:

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps",
        "oderwat.indent-rainbow"
   ]
   ```
 
The string added is the unique identifier of [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79297-sagibbon), a popular extension to make indentation more readable. Adding "_oderwat.indent-rainbow_" identifier to the list lets Codespaces know that this extenion should be pre-installed upon startup. 

To find the unique identifier of an extension:

* Navigate to the extension's web page, for example [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79297-sagibbon)
* Locate the _Unique Identifier_ field under **More info** section on your right side.

### Step 2: Update linter configuration

A linter is a tool that helps improve quality and consistency of code. This project comes configured with [ESLint](https://eslint.org/).

To get you started we included some basic linter settings typically found in JavaScript, and React applications. Including extensions for [Prettier](https://prettier.io/) (for code formatting rules), and web accessibility with [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).

Let's now update the linter rules to check for [prop types](https://reactjs.org/docs/typechecking-with-proptypes.html) to be defined on all React components. To set this linter rule, open the `.eslintrc` file. Within the `rules` object add: `"react/prop-types": "warn"`. Your ESLint rules should then be:

```javascript
"rules": {
   "prettier/prettier": ["warn", { "endOfLine": "auto" }],
   "react/prop-types": "warn"
}
```

> _Note: possible values to set a rule to are "off", "warn" and "error". When set to "warn" student will ne notified of issue, but not required to resolve. Set to "error" will require a student to resolve that linter issue._
    
With that in place, all incoming properties to a component will need to be definied with the name and type or the student will see a warning. You can then add a title prop to `Header` and see your new rule in action:

<img src="https://user-images.githubusercontent.com/82035/198326157-3f6e28b4-d724-4725-b5ed-5331d8c17db7.png" alt="Header component with title prop and linter error" style="width: 600px" />

To resolve the prop types wanring in this example,  you would need to import `PropTypes` and then define the `propTypes` for `Header`, giving you:
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

### Step 3: Update the version of Node.js

If you want to change what version of Node.js this project is using, follow these steps:

Open *.devcontainer/devcontainer.json* and replace the following section:

```json
"VARIANT": "16-bullseye"
```

with the following instruction:

```json
"VARIANT": "18.9-bullseye"
```

This change will use Node.js 18.9 instead of 16. The complete list of all Node.js variants available can be found at [hub.docker.com/_/node](https://hub.docker.com/_/node)

Reminder: When you change any configuration on the json, a box will appear after saving.

Click on rebuild. Wait for your codespace to rebuild the VS Code environment.

<br />

## 🤖 Create a Lesson

This template project gives you a base for you to build a customized lesson on. Using GitHub Copilot we will walk you through creating a sample [Typescript](https://www.typescriptlang.org/) lesson and quiz you could use for your class in the following steps:

1. [Write a lesson description](#step-1-write-a-lesson-description)
1. [Add steps to lesson](#step-2-add-steps-to-lesson)
1. [Add code challenges](#step-3-add-code-challenges)
1. [Create a quiz](#step-4-create-a-quiz)

> 👋 Getting Copilot access
>
> GitHub Copilot is **FREE** for students and faculty, [learn more here](https://education.github.com/pack/join). Follow [these steps](https://techcommunity.microsoft.com/t5/educator-developer-blog/step-by-step-setting-up-github-student-and-github-copilot-as-an/ba-p/3736279?WT.mc_id=academic-0000-sagibbon) to verify your student or faculty membership and enable Copilot for free.

<br/>

### Step 1: Write a lesson description

For our sample lesson, we are going to use "Introduction to TypeScript" as our lesson topic. Open the [`sample_lesson.md`](./docs/lessons/sample_lesson.md) file where you will see we have started you with the lesson title. 

After the title, press enter two times to get a empty line and then the new line you are typing on (markdown likes some empty lines to render correctly). On this line, prompt Copilot with some on our lesson description. Start typing: _In this lesson_

As you start typing you will see Copilot start to suggest some text. Select the suggested text by pressing `tab`. Copilot will then add the text to your file and prompt you for the next line. Continue typing: _we will learn about_

-----
⭐ COPILOT BONUS ⭐

If you want to see Copilot in action, press enter after your completed description and see what Copilot suggests next to built out your lesson. 

Prerequisites, learning objectives, an introduction to what TypeScript is, just from the little you have given Copilot so far it may fill all this in for you.

Accept suggestions, make edits, and continue to build out this beginning part of your lesson.

-----

<br/>

### Step 2: Add steps to lesson

To make this lesson actionable for your students, let's add some steps on how they get started. 

After your description and intro sections you used Copilot to help build out for you, let's have Copilot again help us out and built a list of numbered steps for our students to follow.

On a new line, start typing the following and see what Copilot will suggest for you:

```markdown
## Steps to get started

1. Fork this template repository to your own GitHub account and open it in Codespaces.
2. Install the TypeScript package.
3. Create a TypeScript configuration file.
4. Convert `index.js` to `index.tsx`.
5. Convert `App.js` to `App.tsx`.
6. Run the TypeScript compiler.
7. Commit and push your changes.
8. Start a discussion in the Discussions tab of this repository.
```

_NOTE: The steps above are just an example, be creative, and make it your own! Nudge Copilot along the way to help built out your lesson steps._

<br/>

### Step 3: Add code challenges

Now that we have a lesson description and steps, let's add some code challenges for our students to complete and show their creativity.

On a new line, prompt Copilot with: ```## Code Challenges``` and see what Copilot suggests for you.

As an example, let's say we want to add the challenges below. Copilot may not get this right on the first try, but we can fill in some and it will start to pick up the pattern and help us out.

```markdown
## Code Challenges

1. Create a new component called `Header` and add it to the `App` component.
2. Add a prop to the `Header` component called `title` and pass in a string value.
3. Add a prop to the `Header` component called `subtitle` and pass in a string value.
```

### Step 4: Create summary and discussion

This example lesson has taught students about TypeScript, had them fork a template repository, install TypeScript, and complete TypeScript challenges. To complete this lesson, let's summarize and have the students demonstrate their learning through a discussion in the [Discussions](/../../discussions) tab of this repository. 

On a new line start prompting Copilot with: ```## Summary``` and it will suggest a lesson summary for you.

After that, on a new line start prompting Copilot with: ```## Discussion``` and it will begin to suggest discussion questions for your students to answer.

-----
⭐ COPILOT BONUS ⭐

If you want to see Copilot in action, press enter after your completed summary and see what Copilot suggests next to built out your lesson. 

Try having it build out a list of resources for your students. Or how about a quiz. Keep guiding Copilot to what you are looking for, and it will continue to help you build out your lesson.

-----

<br />

## 📚 Resources

* [GitHub Codespaces docs overview](https://docs.github.com/en/codespaces/overview)
* [GitHub Codespaces docs quickstart](https://docs.github.com/en/codespaces/getting-started/quickstart)
* [GitHub Copilot docs](https://docs.github.com/en/copilot)
* [Use dev containers locally with VS Code and Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)
* [Using GitHub Codespaces with GitHub Classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom)

> #### Codespaces Browser App
>
> If you are using Edge or Chrome you will see an option to install the Codespaces app when you launch your Codespace. The Codespaces app let's you launch your Codespace within the app so you can work outside of the browser.  Look for the app icon and install pop-up to try it out.
>
> <img src="https://user-images.githubusercontent.com/82035/196431310-806a36ca-f122-4739-83f6-79afa1543e7c.png" alt="Web application started on port 1234" style="width: 800px;"/>

<br />

### 🔎 Found an issue or have an idea for improvement? 
Help us make this template repository better by [letting us know and opening an issue!](/../../issues/new). 
