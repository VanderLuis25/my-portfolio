document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica do Menu Hambúrguer ---
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll("a");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  // Fecha o menu ao clicar em um link
  navLinks.forEach((link) =>
    link.addEventListener("click", () => navbar.classList.remove("active"))
  );

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

  /* criar os cards de projetos e colocar imagens do projeto */
  const projetos = [
    {
      imagem: "assets/techstore.png",
      nome: "Tech Store",
      descricao:
        "Projeto de uma loja de eletrônicos criado com HTML, CSS e JavaScript.",
      link: "https://tech-store-eletronicos.vercel.app/",
    },
    {
      imagem: "assets/cafe-aroma.png",
      nome: "Cafeteria",
      descricao: "Projeto de uma cafeteria criado com HTML, CSS e JavaScript.",
      link: "https://cafeteria-cafearoma.vercel.app/",
    },
    {
      imagem: "assets/Barbershop-New.png",
      nome: "Barbearia Edi Rodrigues",
      descricao: "Projeto de uma barbearia criado com HTML, CSS e JavaScript.",
      link: "https://barbershop-new.vercel.app/",
    },
  ];
  const containerProjetos = document.getElementById("container-projetos");
  projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.nome}">
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver Projeto</a>
    `;
    containerProjetos.appendChild(card);
  });

  const projetosSection = document.getElementById("projetos");
  const observer = new IntersectionObserver(
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
  observer.observe(projetosSection);

  // Animação e rolagem suave para a Seção "Contatos"
  const contatosSection = document.getElementById("contatos");
  const contactForm = document.querySelector("#contatos form");

  // Set initial state for the form animation
  contactForm.style.transform = "translateY(100%)";

  // Animação de surgimento (fade in)
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
    { threshold: 0.2 } // A animação começa quando 20% da seção estiver visível
  );
  contatosObserver.observe(contatosSection);

  // Inicializa o sistema de formulário
  new ContactForm();

  // --- Animação de cor do Header ---
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("main section[id]");

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
          }
        }
      });
    },
    {
      rootMargin: "-80px 0px 0px 0px", // O header tem 80px, então a "colisão" acontece logo abaixo dele
      threshold: 0.1, // Pelo menos 10% da seção precisa estar visível
    }
  );

  // Observa cada uma das seções
  sections.forEach((section) => headerObserver.observe(section));

  // --- Lógica do Modal de Certificados ---
  const modal = document.getElementById("certificado-modal");
  const modalImg = document.getElementById("certificado-img");
  const closeModal = document.querySelector(".close-modal");
  const viewCertButtons = document.querySelectorAll(".btn-certificado");

  viewCertButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const imgSrc = button.getAttribute("data-src");
      if (imgSrc) {
        modalImg.src = imgSrc;
        modal.classList.add("active");
      }
    });
  });

  // Função para fechar o modal
  const closeCertModal = () => {
    modal.classList.remove("active");
    modalImg.src = ""; // Limpa a imagem para evitar que a antiga apareça rapidamente
  };

  // Fecha ao clicar no 'X'
  closeModal.addEventListener("click", closeCertModal);

  // Fecha ao clicar fora da imagem
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeCertModal();
    }
  });
});

// Sistema de envio de email com Formspree
class ContactForm {
  constructor() {
    this.form = document.getElementById("contactForm");
    this.submitBtn = document.getElementById("submitBtn");
    this.btnText = this.submitBtn.querySelector(".btn-text");
    this.loadingSpinner = this.submitBtn.querySelector(".loading-spinner");
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
        // <-- SUBSTITUA PELO SEU HASH/ENDPOINT DO FORMSPREE
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
    if (loading) {
      this.btnText.style.display = "none";
      this.loadingSpinner.style.display = "block";
      this.submitBtn.disabled = true;
    } else {
      this.btnText.style.display = "block";
      this.loadingSpinner.style.display = "none";
      this.submitBtn.disabled = false;
    }
  }

  showSuccess() {
    this.successMessage.style.display = "flex";
    this.errorMessage.style.display = "none";

    setTimeout(() => {
      this.hideMessages();
    }, 5000);
  }

  showError() {
    this.successMessage.style.display = "none";
    this.errorMessage.style.display = "flex";

    setTimeout(() => {
      this.hideMessages();
    }, 5000);
  }

  hideMessages() {
    this.successMessage.style.display = "none";
    this.errorMessage.style.display = "none";
  }
}
