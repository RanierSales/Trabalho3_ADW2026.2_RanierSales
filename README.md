# Trabalho 3 – Refatoração Semântica e Acessibilidade Web

Este repositório contém a refatoração do blog pessoal desenvolvida para a disciplina **DCC 704 – Arquitetura e Tecnologias de Sistemas WEB** da Universidade Federal de Roraima (UFRR), sob orientação do Prof. Jean Bertrand.

## 🎯 Objetivo
Refatorar a estrutura do site original aplicando **HTML5 Semântico**, **acessibilidade (WCAG)** e **responsividade**, com o objetivo de otimizar as métricas do Google Lighthouse / PageSpeed Insights.

---

## 📊 Resultados do Lighthouse / PageSpeed Insights

| Categoria | Versão Original | Versão Refatorada |
| :--- | :---: | :---: |
| **Acessibilidade** | 80 | **100** 🟢 |
| **Desempenho** | 100 | **100** 🟢 |
| **Práticas Recomendadas** | 100 | **100** 🟢 |
| **SEO** | 100 | **100** 🟢 |

---

## 🛠️ Principais Melhorias Aplicadas

- **HTML Semântico:** Substituição de `<div>`s genéricas por tags semânticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`).
- **Acessibilidade (WCAG):**
  - Ajuste na taxa de contraste das cores (textos, subtítulos e botões).
  - Adição de marcação de *landmark* principal (`<main>`).
  - Navegação do menu e botões ajustados para acessibilidade por teclado e leitores de tela (`<a>`, `<button>`, `aria-expanded`, `aria-hidden`).
- **Responsividade:** Substituição do layout de largura fixa (`1000px`) por um layout flexível em CSS Flexbox.

---

## 💻 Como Visualizar

Acesse a página publicada via GitHub Pages:  
👉 **[Link do Site Publicado](https://raniersales.github.io/Trabalho3_ADW2026.2_RanierSales/)**

---

**Autor:** Ranier Sales  
**Instituição:** Universidade Federal de Roraima (UFRR) – Departamento de Ciência da Computação (DCC)
