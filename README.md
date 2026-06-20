<h1 align="center"> 🔗 Site.Set - Next.Js </h1>

<p align="center">
  Site.Set é uma landing page moderna desenvolvida para apresentar uma plataforma de criação de lojas online voltada para afiliados. O site tem como objetivo mostrar que é possível montar uma loja digital de forma rápida, simples e personalizada, sem necessidade de cartão de crédito e com suporte dedicado.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aprendizado">Aprendizado</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-deploy">Deploy do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

[![NEXT_JS](https://img.shields.io/badge/NEXT-111?style=for-the-badge&logo=next.js&logoColor-)](https://nextjs.org/docs)
[![REACT](https://img.shields.io/badge/REACT-111?style=for-the-badge&logo=react&logoColor=)](https://react.dev/learn)
[![TYPESCRIPT](https://img.shields.io/badge/TypeScript-111?style=for-the-badge&logo=TypeScript&logoColor=)](https://www.typescriptlang.org/docs/)
[![TAILWINDCSS](https://img.shields.io/badge/Tailwind_CSS-111?style=for-the-badge&logo=tailwind-css&logoColor=)](https://tailwindcss.com/docs)
[![POSTCSS](https://img.shields.io/badge/postcss-111?style=for-the-badge&logo=postcss&logoColor=)](https://postcss.org/docs/)


## 💻 Projeto

O site-blog é um blog pessoal construído com Next.js e TypeScript, pensado para publicar posts em Markdown/MDX com uma UI componentizada e layout responsivo. Ideal para compartilhar artigos, mostrar projetos e centralizar conteúdos com navegação clara entre lista de posts e páginas individuais.

Conteúdo: posts em Markdown/MDX (fácil de criar e versionar)
Estrutura: usa o App Router em app para rotas e layouts
Componentes: cabeçalho, rodapé, avatar, cards de post e templates reutilizáveis
Funcionalidades auxiliares: parsing de posts (gray-matter), renderização Markdown/MDX, hooks para

Como rodar localmente:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🎓 Aprendizado

Neste projeto coloquei em prática e aprofundei diversos conceitos essenciais de desenvolvimento web:

- **HTML semântico & Acessibilidade:** estruturação de conteúdo e atenção a marcação semântica para melhor SEO e leitura por leitores de tela.  
- **CSS / Tailwind CSS:** uso do utility-first, responsividade com breakpoints, organização de estilos e implementação de temas (Dark/Light) com classes e utilitários; inclusão de animações com `tailwindcss-animate` e `tw-animate-css`.  
- **TypeScript:** tipagem de componentes e dados (ex.: tipos de posts em posts-types.ts), evitando erros em tempo de compilação.  
- **React:** componentização, composição, gerenciamento de estado e props, além de boas práticas para organizar UI em componentes reutilizáveis.  
- **Next.js (App Router):** criação de rotas, layouts e páginas dinâmicas com app (ex.: page.tsx e page.tsx), além de fluxo de build/servidor via scripts (package.json).  
- **Markdown / MDX:** leitura e parsing de conteúdo em posts com `gray-matter`, renderização com `react-markdown` / `next-mdx-remote` e suporte a GFM (`remark-gfm`); implementação da lógica de listagem/geração de posts em posts.ts.  
- **Hooks e funcionalidades utilitárias:** criação/uso de hooks customizados como os em hooks (`use-clipboard`, `use-share`) para funcionalidades práticas (compartilhar, copiar).  
- **Ferramentas e qualidade:** configuração e uso de Tailwind + PostCSS, ESLint (configuração Next) e gerenciamento de dependências com `npm`.  
- **UI/UX e bibliotecas:** integração de bibliotecas de UI e ícones (`@radix-ui`, `@base-ui/react`, `lucide-react`, `@tabler/icons-react`) e helpers de classe como `clsx`, `class-variance-authority` e `tailwind-merge`.  
- **Workflow e versão:** uso de Git/GitHub para controle de versão, organização do repositório e deploy contínuo (conceitos aplicados).  
- **Arquitetura e boas práticas:** separar lógica de parsing, componentes e templates (components, `src/styles/templates/`), pensando em reaproveitamento e manutenibilidade.

Adorei construir esse projeto — ele consolidou muitos conceitos práticos e me deixou motivado a avançar em rotas avançadas do Next.js, testes e otimizações de performance.


## 🚀 Deploy
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?logo=vercel)](https://projetonext-ochre.vercel.app/)

O site está hospedado no Vercel e está disponível em: [https://projetonext-ochre.vercel.app/](https://projetonext-ochre.vercel.app/)

- Host: Vercel (deploy contínuo a partir do repositório Git).  
- Link público: https://projetonext-ochre.vercel.app/  
- Comando de build usado pelo Vercel: `npm run build` (definido em `package.json`).  
- Branch de deploy: branch principal do repositório.  
- Variáveis de ambiente: adicione no painel do Vercel caso o projeto precise (ex.: chaves de API).  
- Preview deploys: PRs e commits geram previews automáticos no Vercel.  

## :memo: Licença

Esse projeto está sob a licença MIT.


