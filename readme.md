# 🐶 Mundo.Pet — Pet Shop Website

## Identificação do Projeto

| Campo | Descrição |
|---|---|
| **Nome do Autor** | Mateus José Souza Fonseca |
| **Nome do Projeto** | Mundo.Pet |
| **Tipo** | Website institucional para pet shop |
| **Tecnologias** | HTML5, CSS3, JavaScript (Vanilla) |
| **Ano** | 2026 |

---

## 📋 Descrição do Projeto

O **Mundo.Pet** é um website institucional desenvolvido para um pet shop fictício, com o objetivo de apresentar os serviços oferecidos, informações sobre o negócio e um canal de contato com os clientes.

O site foi construído com foco em responsividade, acessibilidade e uma identidade visual acolhedora, que transmite cuidado e carinho pelos animais.

### Funcionalidades principais

- **Navbar fixa** com menu de navegação e menu hambúrguer para dispositivos móveis
- **Seção Hero** com apresentação visual do pet shop e chamadas para ação
- **Seção Sobre** com informações da empresa e estatísticas de atendimento
- **Seção Serviços** gerada dinamicamente via JavaScript
- **Seção Contato** com informações de atendimento e formulário funcional
- **Footer** com links de navegação e listagem de serviços

---

## 🛠️ Etapas de Desenvolvimento

### Etapa 1 — Planejamento e estruturação

Definição da identidade visual do projeto: paleta de cores em tons de marrom, amarelo e laranja, transmitindo alegria e acolhimento. Levantamento das seções necessárias para um site institucional de pet shop.

### Etapa 2 — Estrutura HTML (`index.html`)

Criação do esqueleto do site com HTML5 semântico, organizado nas seguintes seções:

- `<nav>` — Barra de navegação com logo e links
- `<header>` — Seção hero com chamada principal
- `<section id="sobre">` — Apresentação da empresa
- `<section id="servicos">` — Grade de serviços (container para JS)
- `<section id="contato">` — Informações e formulário de contato
- `<footer>` — Rodapé com links e créditos

### Etapa 3 — Estilização CSS (`style.css`)

Desenvolvimento do visual completo do site:

- Definição de variáveis CSS (`--brown-dark`, `--yellow`, `--orange`, etc.) para manutenção centralizada da paleta de cores
- Importação de fontes do Google Fonts: **Fredoka** (títulos), **Poppins** (corpo), **Mona Sans**
- Estilização de cada componente: navbar, hero, cards de serviço, formulário e footer
- Implementação de efeitos de hover, transições e `scroll-behavior: smooth`
- Responsividade com **media queries** para os breakpoints: `1115px`, `900px`, `819px`, `768px` e `620px`

### Etapa 4 — Interatividade JavaScript (`servicos.js`)

Implementação de duas funcionalidades via JavaScript:

1. **Geração dinâmica dos cards de serviço**: um array de objetos (`servicos`) define os dados de cada serviço (título, descrição, imagem e link). O script itera sobre o array e cria os elementos HTML automaticamente, inserindo-os no container `#servicos-lista`.

2. **Captura do formulário de contato**: o script escuta o evento `submit` do formulário, previne o comportamento padrão e coleta os valores dos campos para processamento.

3. **Menu hambúrguer** (no próprio `index.html`): alternância da classe `.ativo` no menu ao clicar no botão hambúrguer, exibindo ou ocultando a navegação em telas pequenas.

### Etapa 5 — Testes e ajustes

Verificação do layout em diferentes tamanhos de tela, ajuste de espaçamentos, revisão da acessibilidade (atributos `aria-label`, `aria-hidden`, atributos `alt` nas imagens) e refinamento visual geral.

---

## 🚀 Guia Rápido — Como executar o projeto localmente

### Pré-requisitos

- Um navegador moderno (Google Chrome, Firefox, Edge, etc.)
- Opcional: extensão **Live Server** para o VS Code

### Estrutura de arquivos esperada

```
mundo-pet/
├── index.html
├── style.css
├── servicos.js
└── assets/
    ├── yorkshire.png
    ├── dog-and-a-cat-sitting.png
    ├── vacinacao-red.jpg
    ├── tossa-red.jpg
    └── produtos-red.jpg
```

### Opção 1 — Abrir diretamente no navegador

1. Faça o download ou clone os arquivos do projeto
2. Certifique-se de que a pasta `assets/` está no mesmo diretório que o `index.html`
3. Clique duas vezes no arquivo `index.html`
4. O site será aberto no seu navegador padrão

### Opção 2 — Via Live Server (VS Code) *(recomendado)*

1. Abra a pasta do projeto no **Visual Studio Code**
2. Instale a extensão **Live Server** (caso não tenha)
3. Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**
4. O site abrirá automaticamente em `http://127.0.0.1:5500`
5. Alterações nos arquivos serão refletidas automaticamente no navegador

---

## 📁 Descrição dos Arquivos

| Arquivo | Descrição |
|---|---|
| `index.html` | Estrutura principal do site |
| `style.css` | Estilos visuais e responsividade |
| `servicos.js` | Geração dinâmica dos serviços e captura do formulário |
| `assets/` | Pasta com imagens utilizadas no site |

---