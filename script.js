const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navCertificates: "Certificates",
    navContact: "Contact",
    homeTitle: "Vander Luis de Oliveira",
    homeSubtitle: "Full Stack Developer in training",
    homeDescription:
      "Every line of code is a firm step. Let's turn the learning journey into the architecture of great solutions.",
    aboutTitle: "About Me",
    aboutGreeting: "Hello, I'm Vander Luis!",
    aboutP1:
      "I am a <strong>Full Stack Developer</strong> passionate about technology. I am 36 years old and currently studying <strong>Computer Engineering</strong> at Univesp, combining my academic background with web development practice.",
    aboutP2:
      "To accelerate my career, I joined <strong>DevClub</strong>, where I have been consolidating my knowledge through practical projects and a curriculum aligned with market demands, with certifications in <strong>HTML, CSS, and Git/GitHub</strong>.",
    aboutP3:
      "Currently, I am pursuing certification in <strong>JavaScript and React</strong> as the next steps in my full-stack evolution, applying all my learning to <strong>real solutions</strong> and writing code with excellence.",
    aboutP4:
      "I believe that <strong>dedication and constant evolution</strong> are the foundation for quality work.",
    downloadCV: "Download CV",
    profilePicAlt: "Profile Picture",
    projectsTitle: "Projects",
    projectTechStoreDesc:
      "Project of an electronics store created with HTML, CSS, and JavaScript.",
    projectCafeAromaDesc:
      "Project of a coffee shop created with HTML, CSS, and JavaScript.",
    projectBarbershopDesc:
      "Project of a barbershop created with HTML, CSS, and JavaScript.",
    projectconversorDeMoedaDesc:
      "Currency converter project developed with HTML, CSS, and JavaScript, applying concepts learned at DevClub.",
    viewProject: "View Project",
    certificatesTitle: "Certificates",
    certPlatform: "Platform:",
    certCompleted: "Completed on:",
    certInstructor: "Instructor:",
    certView: "View Certificate",
    contactTitle: "Let's Connect!",
    contactIntro:
      "I am open to new opportunities and collaborations. Feel free to get in touch through the form or the links below.",
    formName: "Your name",
    formEmail: "Your email",
    formSubject: "Subject",
    formMessage: "Your message",
    formSubmit: "Send Message",
    successMessage: "Message sent successfully! I will get in touch soon.",
    errorMessage:
      "Error sending message. Please try again or contact me via social media.",
    footerRights: "© 2024 Vander Luis de Oliveira. All rights reserved.",
    modalCertAlt: "Certificate",
  },
  pt: {
    navHome: "Home",
    navAbout: "Sobre",
    navProjects: "Projetos",
    navCertificates: "Certificados",
    navContact: "Contato",
    homeTitle: "Vander Luis de Oliveira",
    homeSubtitle: "Desenvolvedor Full Stack em formação",
    homeDescription:
      "Cada linha de código é um passo firme. Vamos transformar a jornada do aprendizado na arquitetura de grandes soluções.",
    aboutTitle: "Sobre Mim",
    aboutGreeting: "Olá, eu sou o Vander Luis!",
    aboutP1:
      "Sou um <strong>Desenvolvedor FullStack</strong> apaixonado por tecnologia. Tenho 36 anos e atualmente curso <strong>Engenharia da Computação</strong> pela Univesp, combinando minha formação acadêmica com a prática no desenvolvimento web.",
    aboutP2:
      "Para acelerar minha trajetória, ingressei no <strong>DevClub</strong>, onde tenho consolidado meu conhecimento através de projetos práticos e um currículo alinhado com as demandas do mercado, com certificações em <strong>HTML, CSS e Git/GitHub</strong>.",
    aboutP3:
      "Atualmente, estou em busca da certificação em <strong>JavaScript e React</strong> como próximos passos na minha evolução full-stack, aplicando todo o aprendizado em <strong>soluções reais</strong> e escrevendo código com excelência.",
    aboutP4:
      "Acredito que <strong>dedicação e evolução constante</strong> são a base para um trabalho de qualidade.",
    downloadCV: "Baixar Currículo",
    profilePicAlt: "Foto de Perfil",
    projectsTitle: "Projetos",
    projectTechStoreDesc:
      "Projeto de uma loja de eletrônicos criado com HTML, CSS e JavaScript.",
    projectCafeAromaDesc:
      "Projeto de uma cafeteria criado com HTML, CSS e JavaScript.",
    projectBarbershopDesc:
      "Projeto de uma barbearia criado com HTML, CSS e JavaScript.",
    projectconversorDeMoedaDesc:
      "Projeto de um conversor de moedas desenvolvido com HTML, CSS e JavaScript, aplicando conceitos aprendidos no DevClub.",
    viewProject: "Ver Projeto",
    certificatesTitle: "Certificados",
    certPlatform: "Plataforma:",
    certCompleted: "Concluído em:",
    certInstructor: "Instrutor:",
    certView: "Ver Certificado",
    contactTitle: "Vamos nos Conectar!",
    contactIntro:
      "Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato através do formulário ou dos links abaixo.",
    formName: "Seu nome",
    formEmail: "Seu email",
    formSubject: "Assunto",
    formMessage: "Sua mensagem",
    formSubmit: "Enviar Mensagem",
    successMessage:
      "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    errorMessage:
      "Erro ao enviar mensagem. Tente novamente ou entre em contato pelas redes sociais.",
    footerRights:
      "© 2024 Vander Luis de Oliveira. Todos os direitos reservados.",
    modalCertAlt: "Certificado",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica do Menu Hambúrguer ---
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll("a");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach((link) =>
      link.addEventListener("click", () => navbar.classList.remove("active"))
    );
  }

  // --- Lógica de Rolagem Suave (Smooth Scroll) ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Animação da Seção "Sobre"
  const sobreSection = document.getElementById("sobre");
  const sobreContent = document.querySelector(".sobre-content");
  const fotoPerfil = document.querySelector(".foto-perfil");

  if (sobreSection && sobreContent && fotoPerfil) {
    // Define os estados iniciais
    sobreContent.style.transform = "translateX(-100%)";
    sobreContent.style.opacity = "0";
    sobreContent.style.transition = "transform 0.8s ease, opacity 0.8s ease";

    fotoPerfil.style.transform = "translateX(100%)";
    fotoPerfil.style.opacity = "0";
    fotoPerfil.style.transition = "transform 0.8s ease, opacity 0.8s ease";

    const sobreObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Anima o texto da esquerda para a direita
            sobreContent.style.transform = "translateX(0)";
            sobreContent.style.opacity = "1";
            // Anima a imagem da direita para a esquerda
            fotoPerfil.style.transform = "translateX(0)";
            fotoPerfil.style.opacity = "1";
          } else {
            // Reverte a animação do texto quando a seção sai da tela
            sobreContent.style.transform = "translateX(-100%)";
            sobreContent.style.opacity = "0";
            // Reverte a animação da imagem quando a seção sai da tela
            fotoPerfil.style.transform = "translateX(100%)";
            fotoPerfil.style.opacity = "0";
          }
        });
      },
      { threshold: 0.25 } // A animação começa quando 25% da seção estiver visível
    );

    sobreObserver.observe(sobreSection);
  }

  // --- Projetos ---
  const projetos = [
    {
      imagem: "assets/techstore.png",
      nome: "Tech Store",
      descricaoKey: "projectTechStoreDesc",
      link: "https://tech-store-eletronicos.vercel.app/",
    },
    {
      imagem: "assets/cafe-aroma.png",
      nome: "Cafeteria",
      descricaoKey: "projectCafeAromaDesc",
      link: "https://cafeteria-cafearoma.vercel.app/",
    },
    {
      imagem: "assets/Barbershop-New.png",
      nome: "Barbershop-New",
      descricaoKey: "projectBarbershopDesc",
      link: "https://barbershop-new.vercel.app/",
    },
    {
      imagem: "assets/Conversor de Moeda.png",
      nome: "Conversor de Moeda",
      descricaoKey: "projectconversorDeMoedaDesc",
      link: "https://conversor-de-moedas-vl.vercel.app/",
    },
  ];

  const containerProjetos = document.getElementById("container-projetos");

  function renderProjects(lang) {
    if (!containerProjetos) return;

    containerProjetos.innerHTML = ""; // Limpa os projetos existentes
    const currentTranslations = translations[lang];

    projetos.forEach((projeto) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.nome}">
        <h3>${projeto.nome}</h3>
        <p data-key="${projeto.descricaoKey}">${
        currentTranslations[projeto.descricaoKey]
      }</p>
        <a href="${projeto.link}" target="_blank" data-key="viewProject">${
        currentTranslations.viewProject
      }</a>
      `;
      containerProjetos.appendChild(card);
    });
  }

  // Animação da Seção "Projetos"
  const projetosSection = document.getElementById("projetos");

  if (containerProjetos && projetosSection) {
    // Define estado inicial
    containerProjetos.style.transform = "translateX(-100%)";
    containerProjetos.style.opacity = "0";
    containerProjetos.style.transition =
      "transform 0.8s ease, opacity 0.8s ease";

    const observerProjetos = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            containerProjetos.style.transform = "translateX(0)";
            containerProjetos.style.opacity = "1";
          } else {
            containerProjetos.style.transform = "translateX(-100%)";
            containerProjetos.style.opacity = "0";
          }
        });
      },
      { threshold: 0.1 }
    );
    observerProjetos.observe(projetosSection);
  }

  // Animação da Seção "Contatos"
  const contatosSection = document.getElementById("contatos");
  const contactForm = document.querySelector("#contatos form");

  if (contatosSection && contactForm) {
    // Set initial state for the form animation
    contactForm.style.transform = "translateY(100%)";
    contactForm.style.opacity = "0";
    contactForm.style.transition = "transform 0.8s ease, opacity 0.8s ease";

    contatosSection.style.opacity = "0";
    contatosSection.style.transition = "opacity 0.8s ease";

    const contatosObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contatosSection.style.opacity = "1";
            contactForm.style.transform = "translateY(0)";
            contactForm.style.opacity = "1";
          } else {
            contatosSection.style.opacity = "0";
            contactForm.style.transform = "translateY(100%)";
            contactForm.style.opacity = "0";
          }
        });
      },
      { threshold: 0.2 }
    );
    contatosObserver.observe(contatosSection);
  }

  // --- Animação de cor do Header ---
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("main section[id]");

  if (header && sections.length > 0) {
    // Mapeia o ID da seção para a cor desejada do header
    const sectionColors = {
      home: "var(--primary-color)",
      sobre: "var(--background-dark)",
      projetos: "var(--background-light)",
      contatos: "var(--background-dark)",
    };

    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const color = sectionColors[sectionId];
            if (color) {
              header.style.backgroundColor = color;
              header.style.transition = "background-color 0.3s ease";
            }
          }
        });
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0.1,
      }
    );

    // Observa cada uma das seções
    sections.forEach((section) => headerObserver.observe(section));
  }

  // --- Lógica de Tradução ---
  const langButtons = document.querySelectorAll(".lang-btn");

  const setLanguage = (lang) => {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-key");
      const translation = translations[lang][key];
      if (translation) {
        // Verifica se o elemento é um placeholder
        if (element.placeholder !== undefined) {
          element.placeholder = translation;
        } else {
          element.innerHTML = translation;
        }
      }
    });
    // Renderiza os projetos com o idioma correto
    renderProjects(lang);
    // Atualiza o botão ativo
    langButtons.forEach((btn) => btn.classList.remove("active"));
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (activeBtn) {
      activeBtn.classList.add("active");
    }
    // Salva a preferência no localStorage
    localStorage.setItem("language", lang);
  };

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Verifica se há um idioma salvo e aplica, ou usa 'pt' como padrão
  const savedLang = localStorage.getItem("language") || "pt";
  setLanguage(savedLang);

  // --- Lógica do Modal de Certificados ---
  const modal = document.getElementById("certificado-modal");
  const modalImg = document.getElementById("certificado-img");
  const closeModal = document.querySelector(".close-modal");
  const viewCertButtons = document.querySelectorAll(".btn-certificado");

  if (modal && modalImg && closeModal) {
    viewCertButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const imgSrc = button.getAttribute("data-src");
        if (imgSrc) {
          modalImg.src = imgSrc;
          modalImg.alt = translations[savedLang].modalCertAlt;
          modal.classList.add("active");
          document.body.style.overflow = "hidden"; // Previne scroll no body
        }
      });
    });

    // Função para fechar o modal
    const closeCertModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = ""; // Restaura scroll
    };

    // Fecha ao clicar no 'X'
    closeModal.addEventListener("click", closeCertModal);

    // Fecha ao clicar fora da imagem
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeCertModal();
      }
    });

    // Fecha com a tecla ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeCertModal();
      }
    });
  }

  // Inicializa o sistema de formulário
  if (document.getElementById("contactForm")) {
    new ContactForm();
  }
});

// Sistema de envio de email com Formspree
class ContactForm {
  constructor() {
    this.form = document.getElementById("contactForm");
    if (!this.form) return;

    this.submitBtn = document.getElementById("submitBtn");
    this.btnText = this.submitBtn?.querySelector(".btn-text");
    this.loadingSpinner = this.submitBtn?.querySelector(".loading-spinner");
    this.successMessage = document.getElementById("successMessage");
    this.errorMessage = document.getElementById("errorMessage");

    this.init();
  }

  init() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));

    // Validação em tempo real
    this.form.querySelectorAll("input, textarea").forEach((input) => {
      input.addEventListener("blur", () => this.validateField(input));
      input.addEventListener("input", () => this.clearFieldError(input));
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;

    // Limpa erro anterior
    this.clearFieldError(field);

    // Validações específicas por campo
    switch (fieldName) {
      case "name":
        if (value.length < 2) {
          this.showFieldError(field, "Nome deve ter pelo menos 2 caracteres");
          return false;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          this.showFieldError(field, "Email inválido");
          return false;
        }
        break;

      case "subject":
        if (value.length < 3) {
          this.showFieldError(
            field,
            "Assunto deve ter pelo menos 3 caracteres"
          );
          return false;
        }
        break;

      case "message":
        if (value.length < 10) {
          this.showFieldError(
            field,
            "Mensagem deve ter pelo menos 10 caracteres"
          );
          return false;
        }
        break;
    }

    return true;
  }

  showFieldError(field, message) {
    field.style.borderColor = "#e74c3c";
    // Cria ou atualiza mensagem de erro
    let errorElement = field.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains("field-error")) {
      errorElement = document.createElement("span");
      errorElement.className = "field-error";
      errorElement.style.cssText =
        "color: #e74c3c; font-size: 0.8rem; margin-top: 0.25rem; display: block;";
      field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    errorElement.textContent = message;
  }

  clearFieldError(field) {
    field.style.borderColor = "";
    const errorElement = field.nextElementSibling;
    if (errorElement && errorElement.classList.contains("field-error")) {
      errorElement.remove();
    }
  }

  validateForm() {
    let isValid = true;
    const fields = this.form.querySelectorAll(
      "input[required], textarea[required]"
    );

    fields.forEach((field) => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    this.setLoading(true);
    this.hideMessages();

    try {
      const formData = new FormData(this.form);

      // Envia para o Formspree
      const response = await fetch("https://formspree.io/f/xkgpngla", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        this.showSuccess();
        this.form.reset();
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      this.showError();
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(loading) {
    if (!this.submitBtn || !this.btnText || !this.loadingSpinner) return;

    if (loading) {
      this.btnText.style.display = "none";
      this.btnText.textContent = "Enviando..."; // Altera o texto para o estado de carregamento
      this.loadingSpinner.style.display = "block";
      this.submitBtn.disabled = true;
    } else {
      this.btnText.style.display = "block";
      this.loadingSpinner.style.display = "none";
      this.submitBtn.disabled = false;
      // Restaura o texto original do botão usando o data-key para o idioma atual
      const currentLang = localStorage.getItem("language") || "pt";
      this.btnText.textContent = translations[currentLang].formSubmit;
    }
  }

  showSuccess() {
    if (!this.successMessage || !this.errorMessage) return;

    this.successMessage.style.display = "flex";
    this.errorMessage.style.display = "none";

    setTimeout(() => {
      this.hideMessages();
    }, 5000);
  }

  showError() {
    if (!this.successMessage || !this.errorMessage) return;

    this.successMessage.style.display = "none";
    this.errorMessage.style.display = "flex";

    setTimeout(() => {
      this.hideMessages();
    }, 5000);
  }

  hideMessages() {
    if (this.successMessage) this.successMessage.style.display = "none";
    if (this.errorMessage) this.errorMessage.style.display = "none";
  }
}
