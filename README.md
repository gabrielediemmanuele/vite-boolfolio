# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# VITE Setup Iniziale

npm create vite@latest nomeprogetto

- VUE
- JS

- cd nomeprogetto
- npm install
- npm run dev

Poi.. per installare scss
npm install -D sass-loader sass

su main.js togliere style.css

creare una cartella su assets -> scss folder e style.scss

importarla su main.js
import "./assets/scss/style.css";

per bootstrap
npm i bootstrap@5.3.2

dentro main.js
import \* as bootstrap from "bootstrap";

dentro style.scss
@import "bootstrap/scss/bootstrap";

creare componenti...e ora si comincia!

## AXIOS

npm i axios
