# Portfólio Pessoal - Vander Luis de Oliveira

 <!-- Substitua pela URL de uma captura de tela do seu projeto -->

Este é o repositório do meu portfólio pessoal, uma Single Page Application (SPA) desenvolvida para apresentar minhas habilidades, projetos e trajetória como Desenvolvedor Full Stack em formação. O site foi construído com foco em interatividade, design responsivo e uma experiência de usuário moderna.

**Visite o site:** [**seu-portfolio.vercel.app**](https://seu-portfolio.vercel.app) <!-- Substitua pelo link do seu site online -->

---

## ✨ Funcionalidades Principais

- **Design Totalmente Responsivo:** Interface adaptável para uma visualização otimizada em desktops, tablets e smartphones.
- **Animações Interativas:**
  - Animações de entrada acionadas por scroll (efeito _fade-in_ e _slide-in_) nas seções "Sobre", "Projetos" e "Contato", implementadas com `IntersectionObserver`.
  - Animação de digitação ("typing effect") no título principal.
  - Bordas animadas e coloridas nos cards de certificados, utilizando `keyframes` e `hue-rotate` para um efeito dinâmico.
  - Efeitos de _hover_ em botões, links e cards para feedback visual.
- **Navegação Suave:** Rolagem suave entre as seções para uma experiência de navegação fluida.
- **Modal de Certificados:** Visualização de certificados em um modal pop-up, que pode ser fechado ao clicar no 'X' ou fora da imagem.
- **Carregamento Dinâmico de Projetos:** Os cards da seção "Projetos" são gerados dinamicamente a partir de um array de objetos em JavaScript, facilitando a manutenção e adição de novos projetos.
- **Formulário de Contato Funcional:**
  - Integração com o serviço **Formspree** para recebimento de mensagens por e-mail.
  - Validação de campos em tempo real (nome, e-mail, assunto, mensagem).
  - Feedback visual para o usuário com mensagens de sucesso, erro e um indicador de carregamento (_spinner_) durante o envio.
- **Botão para Download de Currículo:** Um botão de destaque na seção "Sobre Mim" permite que recrutadores baixem meu currículo em formato PDF com um único clique.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

- **Frontend:**

  - **HTML5:** Estrutura semântica e bem organizada.
  - **CSS3:** Estilização avançada com:
    - **Flexbox** e **Grid Layout** para layouts complexos.
    - **Variáveis CSS** (`:root`) para um tema de cores consistente e de fácil manutenção.
    - **Animações e Transições** (`@keyframes`, `transition`).
    - **Pseudo-elementos** (`::before`, `::after`) para efeitos visuais complexos, como o brilho nos botões e as bordas animadas.
  - **JavaScript (ES6+):**
    - Manipulação do DOM para interatividade.
    - Programação Orientada a Objetos (classe `ContactForm`) para organizar a lógica do formulário.
    - Uso da API `IntersectionObserver` para otimização de performance nas animações.
    - Requisições assíncronas (`async/await` e `fetch`) para o envio do formulário.

- **Ferramentas e Serviços:**
  - **Font Awesome:** Para a utilização de ícones em todo o site.
  - **Google Fonts:** Para a tipografia (`Roboto` e `Roboto Condensed`).
  - **Formspree:** Para o backend do formulário de contato.
  - **Git & GitHub:** Para versionamento de código.

---

## 📂 Estrutura do Projeto

```
meu-portfolio/
├── assets/
│   ├── certificados/
│   │   ├── Certificado-CSS-DevClub-Full-Stack.png
│   │   └── ... (outros certificados)
│   ├── CV_Vander_Luis_desenvolvedor-frontend.pdf
│   └── ... (outras imagens e logo)
├── index.html         # Arquivo principal da estrutura HTML
├── style.css          # Folha de estilos principal
├── script.js          # Lógica de interatividade e manipulação do DOM
└── README.md          # Este arquivo
```

---

## 🛠️ Como Executar Localmente

Para visualizar o projeto em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd seu-repositorio
    ```

3.  **Abra o arquivo `index.html` no seu navegador de preferência.**

    Você pode simplesmente clicar duas vezes no arquivo ou usar uma extensão como o Live Server no VS Code para uma melhor experiência de desenvolvimento.

---

## 📬 Contato

**Vander Luis de Oliveira**

- **LinkedIn:** **seu-linkedin**
- **GitHub:** **@VanderLuis25**

Sinta-se à vontade para entrar em contato, conectar-se ou dar feedback sobre o projeto!
