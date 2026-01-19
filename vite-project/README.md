# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# This is a youtube clone project


# Debouncing 
 - typing slow = 200ms
 - typing fast = 50ms


 # performance
   ipone pro max = 14 letters * 1000 call = 14000
   with debouncing = 3 API calls = 3*1000 = 3000



 # How can we do that -
  - if difference between 2 keystrokes is < 200ms - IGNORE/ DECLINE the API call
  - if >200ms = Make an API call


  # cache

  -time complexity to search in an array = O(n)
  -time complexity to search in an object = O(1)


<!--
  "i":
  "ip":
   "iph" :
   "ipho" :
    "iphone":  


    We can also use new map() / set() also 
  -->