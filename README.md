# Vuex Basics in Vue 3 with Composition API  (vue-with-vuex-options-vs-composition)
Today we will be creating a simple counter app from scratch to learn the basics of using Vuex 4 with Vue 3 Composition API. We'll start by taking a look at Vuex concepts like state, getters, and mutations and how to use them within the options API, then we will switch over the compositions API and implement the same functionality. We'll also create some reusable helper functions to make accessing the store in the composition API more readable.

## --Fresh Vue Project with router-vuex using Vue-cli @vue/cli 4.5.13--
### Installation
- To install the new package, use one of the following commands. You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager (e.g. n or nvm).
```sh
☑ npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
- You can check you have the right version with this command:
```sh
vue --version
```
### Upgrading
- To upgrade the global Vue CLI package, you need to run:
```sh
npm update -g @vue/cli
# OR
yarn global upgrade --latest @vue/cli
```
### Creating a Project
- To create a new project, run:
```sh
vue vue-with-vuex-options-vs-composition
```
### Run the project
```
cd vue-with-vuex-options-vs-composition
npm run serve
```
