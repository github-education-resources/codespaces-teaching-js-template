[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526680454)

# JavaScript Codespace Template

_Extend and use for your Web Development lessons in minutes._

With this JavaScript Codespace template you can immediately create a normalized environemnt to teach or learn web development. This enables you to focus on the web development content you are teaching, and let Codespaces handle the environment setup for you.

* **Who is this for?** Educators of all levels, and those looking for a great template to build a web app.
* **How much experience do students need?** Zero. This template is built with basic elements complete with comments so it can be used in beginner to advanced lessons.
* **Can I use this template for other Web Frameworks?** Absolutely. This template uses React as an example, but instructions are included in this document to help you use this template with your web framework.
* **Prerequisites:** None. This template will provide a working and deployable web app you can immediately extend for your needs.

## What is GitHub Codespace and how can I use it in my teaching?

A Codespace is a development environment that's hosted in the cloud that you can configure.


### Quick Start

1. Click the **Use this Template** button
2. Select the repository owner (e.g. your GitHub account)
3. Enter a unique name for your new repository
4. Click the **Code** button
5. Click **Create Codespace on main** button
 
### Why use it

* Repeatable environment offering a zero-config experience.
* Runs in the cloud.
* Can be configured and customized.
* Integrates with your repositories on GitHub.

<details>
   <summary><b>🎥 Watch the video tutorial to learn more about Codespaces</b></summary>
   
   [![Codespaces Tutorial](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)](https://aka.ms/CodespacesVideoTutorial "Codespaces Tutorial")
</details>

## Customization

You can customize your project for GitHub Codespaces by committing configuration files to your repository (often known as Configuration-as-Code), which creates a repeatable Codespace configuration for all users of your project.

You can configure things like:

* Extensions: You can specify what Visual Studio Code extensions should be preinstalled
* Dotfiles and settings
* Operating system libraries and dependencies

> 💡 Learn more here, <https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account>

## Codespaces JavaScript template

This repository is a GitHub template for a web application using the React web framework. The goal here is to give you a template to you can immediately use. You can also use the steps in this document to adapt it for your particular needs.

The repository contains the following:

* `/src`: HTML, JavaScript and CSS files for the web application.
* `.eslintrc`: Settings for <a href="https://eslint.org/" target="_blank">ESLint</a> that is included for code consistency and quality.
* `.prettierrc`: Settings for <a href="https://prettier.io/" target="_blank">Prettier</a> that is used to format code.
* `package.json` and `package-lock.json`: Define the project information for <a href="https://nodejs.org/" target="_blank">Node.js</a>, dependent packages and the versions needed of each. 

### About the Web application (`/src` )

We set this template to demonstrate a web application using the <a href="https://reactjs.org/" target="_blank">React</a> framework and <a href="https://parceljs.org/" target="_blank">Parcel</a> to build the application within Codespaces.

We've included the bare minimum file structure for a working application, so you have immediate ability to customize. Also included is a sample component (Header) to demonstrate how to incorporate components into your application. 

The template uses <a href="https://parceljs.org/" target="_blank">Parcel</a> because it's regarded one of the eaisest to use, with limited configuration. You can of course extend or replace this.

## Run this template

To run what's in this repository, you need to first start a Codespaces instance.

1. Create a repository from this template. Use this [create repo link](https://github.com/microsoft/codespaces-teaching-template-js/generate). Select the repository owner, provide a name, a description if you'd like and if you'd like the new repository to be public or private.
2. Navigate to the main page of the newly created repository.
3. Under the repository name, use the Code drop-down menu, and in the Codespaces tab, select "Create codespace on main".
<img src="https://docs.github.com/assets/cb-138303/images/help/codespaces/new-codespace-button.png" alt="Create Codespace" style="width:270px; padding: 1rem;"/>
4. Wait as GitHub initializes the Codespace.
<img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="max-width:400px; padding: 1rem;"/>

When complete you will see your Codespace load with a terminal section at the bottom. Here you will see `npm install` executing. When complete you will return to the terminal prompt where you can run the web application by executing: `npm run start` 

When the web application is started you will see a prompt telling you it started successfully on port 1234, and you can open that site within your browser:
<img src="https://user-images.githubusercontent.com/82035/194709984-7e01f9db-df3e-41dc-bc1d-ce38b16b812d.png" alt="Web application started on port 1234" style="width:270px; padding: 1rem;"/>


## Customize the Codespace

This template is intended to be fully customizable for your particular Web Development teaching needs. Here are a few challenge scenarios we will cover, when you are ready.

### Step 1: Add an extension

Your environment comes with preinstalled extensions. You can change which extensions your Codespaces environment starts with. Here's how:

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
 
The string added is the unique identifier of <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">indent-rainbow</a>, a popular extension to make indentation more readable. Adding "_oderwat.indent-rainbow_" identifier to the list lets Codespaces know that this extenion should be pre-installed upon startup. 

To find the unique identifier of an extension:

* Navigate to the extension's web page, like so <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">
* Locate the _Unique Identifier_ field under **More info** section on your right side.


### Step 2: Change to a different frontend web framework

At the core of this template app is <a href="https://nodejs.org/" target="_blank">Node.js</a>. On top of a Node.js base app you can utilize multiple Web frameworks to create an <a href="http://expressjs.com/" target="_blank">Express</a> backend application. 

To get started customizing for your needs:

1. Open the repository you created from this template in Codespaces. 
1. Remove the packages listed in `dependencies` and `devDependencies` from `package.json` that you will not be using.
1. In the terminal  within your Codespace, run `npm install` to clear the removed packages.
1. You can now install the packages for the project needed for your lesson through the recommended paths provided through the framework documentation.

Once you have your updates packages you will then need to:

* Update/Remove the source files referencing React.
* Update the ESLint configuration to match your desired Web framework.
* Update any Prettier configuration, if required.

In some cases, the initialization of a new framework may overwrite existing `/src` files, not a problem. The Codespace is set to run `npm install` and `npm run start` on start. As long as those are still valid for your framework Codespace will continue to work as expected.

If running `npm install` and `npm run start` in the root of your Codespace are no longer valid, open `/.devcontainer/devcontainer.json` and update the `postCreateCommand` for what you require for your updated framework and application.

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


## Learn more

* [GitHub Codespaces docs overview](https://docs.github.com/en/codespaces/overview)
* [GitHub Codespaces docs quickstart](https://docs.github.com/en/codespaces/getting-started/quickstart)

### 🔎 Found an issue or have an idea for improvement? 
Help us make this template repository better by [letting us know and opening an issue!](/../../issues/new). 
