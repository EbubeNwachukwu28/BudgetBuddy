# 💰 Budget Buddy  

Budget Buddy is a personal finance dashboard that helps users track income, expenses, and savings goals. Built with **React + TypeScript**, **Tailwind CSS**, and **Supabase**, it provides a clean and interactive interface for managing finances with ease.  

---

## 🚀 Features  

- 📊 Dashboard overview of accounts, income, and expenses  
- 📝 Add, edit, and delete transactions  
- 🏦 Manage multiple accounts (checking, savings, credit, etc.)  
- 📈 Reports & analytics (spending categories, monthly breakdowns)  
- 💡 Smart suggestions for saving and budgeting (planned)  
- 🔐 User authentication with Supabase Auth  
- ☁️ Secure cloud-based data storage  

---

## 🛠️ Tech Stack  

- **Frontend**: React, TypeScript, Tailwind CSS  
- **Backend**: Supabase (PostgreSQL + Auth)  
- **Database**: PostgreSQL via Supabase  
- **Version Control**: GitHub  

---

## 📦 Installation  

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/budget-buddy.git
   cd budget-buddy




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
