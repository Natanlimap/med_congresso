// Dados da jornada carregados do textos.txt
const jornadaData = {
  titulo: "I JORNADA DE CLÍNICA MÉDICA DO RN",
  organizador: "Liga Acadêmica de Clínica Médica do RN (CLIMERN)",
  dataEvento: "08/11/2025",
  local: "Associação Médica do RN",
  inscricoes: {
    inicio: "01/09/2025",
    fim: "06/11/2025",
  },
  redes: {
    liga: "@climernunp",
    evento: "@jornadacmrn",
  },
};

// Cronograma da jornada
const cronograma = [
  { horario: "08:00 - 08:30", atividade: "Credenciamento", palestrante: "" },
  {
    horario: "08:30 - 09:00",
    atividade: "Abertura (Diretoria + Dr. Matheus)",
    palestrante: "",
  },
  {
    horario: "09:00 - 09:30",
    atividade: "Cardiologia",
    palestrante: "Dr. Leandro (a confirmar)",
  },
  {
    horario: "09:30 - 10:00",
    atividade: "Endocrinologia",
    palestrante: "Dra. Reivla (a confirmar)",
  },
  {
    horario: "10:00 - 10:15",
    atividade: "Apresentação Oral 1",
    palestrante: "",
  },
  {
    horario: "10:15 - 11:15",
    atividade: "Coffee Break / Exibição de pôsteres",
    palestrante: "",
  },
  {
    horario: "11:15 - 11:30",
    atividade: "Apresentação Oral 2",
    palestrante: "",
  },
  {
    horario: "11:30 - 12:00",
    atividade: "Oncologia",
    palestrante: "Dr. Moisés (a confirmar)",
  },
  {
    horario: "12:00 - 12:30",
    atividade: "Nefrologia",
    palestrante: "Dr. Felipe Guedes (a confirmar)",
  },
  {
    horario: "12:30 - 14:00",
    atividade: "Intervalo de almoço",
    palestrante: "",
  },
  {
    horario: "14:00 - 14:30",
    atividade: "Hematologia",
    palestrante: "Dr. Daniel ou Marcos Leão (a confirmar)",
  },
  {
    horario: "14:30 - 15:00",
    atividade: "Gastroenterologia",
    palestrante: "Dra. Regina (a confirmar)",
  },
  {
    horario: "15:00 - 15:15",
    atividade: "Apresentação Oral 3",
    palestrante: "",
  },
  {
    horario: "15:15 - 15:45",
    atividade: "Cardiologia",
    palestrante: "Dr. Itamar (a confirmar)",
  },
  {
    horario: "15:45 - 16:45",
    atividade: "Coffee Break / Exibição de pôsteres",
    palestrante: "",
  },
  {
    horario: "16:45 - 17:00",
    atividade: "Apresentação Oral 4",
    palestrante: "",
  },
  {
    horario: "17:00 - 17:30",
    atividade: "Pneumologia",
    palestrante: "Dr. Thiago (a confirmar)",
  },
  {
    horario: "17:30 - 18:00",
    atividade: "Reumatologia",
    palestrante: "Dr. Matheus Staufackar (a confirmar)",
  },
  {
    horario: "18:00 - 18:30",
    atividade: "Encerramento (Diretoria + Dr. Matheus)",
    palestrante: "",
  },
];

// Função para calcular o lote atual baseado na data
function getLoteAtual() {
  const hoje = new Date();
  const lote1 = new Date("2025-09-30");
  const lote2 = new Date("2025-10-31");
  const lote3 = new Date("2025-11-06");

  if (hoje <= lote1) {
    return {
      nome: "1º Lote",
      fim: "30/09/2025",
      ligantes: "R$ 50,00",
      externos: "R$ 70,00",
    };
  } else if (hoje <= lote2) {
    return {
      nome: "2º Lote",
      fim: "31/10/2025",
      ligantes: "R$ 60,00",
      externos: "R$ 80,00",
    };
  } else if (hoje <= lote3) {
    return {
      nome: "3º Lote",
      fim: "06/11/2025",
      ligantes: "R$ 70,00",
      externos: "R$ 90,00",
    };
  } else {
    return null; // Inscrições encerradas
  }
}

// Função para calcular dias restantes
function getDiasRestantes() {
  const hoje = new Date();
  const dataEvento = new Date("2025-11-08");
  const diferenca = dataEvento.getTime() - hoje.getTime();
  const dias = Math.ceil(diferenca / (1000 * 3600 * 24));
  return dias > 0 ? dias : 0;
}

// Função para gerar tabela do cronograma
function gerarTabelaCronograma() {
  const tbody = document.getElementById("cronograma-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  cronograma.forEach((item) => {
    const tr = document.createElement("tr");

    // Determinar o tipo de atividade para coloração
    let tipoAtividade = "palestra"; // padrão
    const atividade = item.atividade.toLowerCase();

    if (atividade.includes("apresentação oral")) {
      tipoAtividade = "apresentacao";
    } else if (
      atividade.includes("coffee break") ||
      atividade.includes("intervalo") ||
      atividade.includes("credenciamento") ||
      atividade.includes("exibição de pôsteres")
    ) {
      tipoAtividade = "intervalo";
    } else if (
      atividade.includes("abertura") ||
      atividade.includes("encerramento")
    ) {
      tipoAtividade = "abertura";
    }

    // Adicionar atributo data-tipo para CSS
    tr.setAttribute("data-tipo", tipoAtividade);

    // Estrutura para desktop e mobile
    tr.innerHTML = `
            <td><span class="time">${item.horario}</span></td>
            <td>
                <div class="activity-mobile">
                    <span class="main-activity">${item.atividade}</span>
                    <span class="speaker-mobile">${item.palestrante}</span>
                </div>
                <span class="activity desktop-only">${item.atividade}</span>
            </td>
            <td class="desktop-only"><span class="speaker">${item.palestrante}</span></td>
        `;

    tbody.appendChild(tr);
  });

  // Adicionar classes CSS para controlar visibilidade
  addResponsiveClasses();
}

// Função para adicionar classes responsivas
function addResponsiveClasses() {
  // Adicionar CSS dinâmico se não existir
  if (!document.getElementById("responsive-schedule-css")) {
    const style = document.createElement("style");
    style.id = "responsive-schedule-css";
    style.textContent = `
            .desktop-only { display: table-cell; }
            .activity-mobile { display: none; }
            
            @media (max-width: 768px) {
                .desktop-only { display: none !important; }
                .activity-mobile { display: block !important; }
            }
        `;
    document.head.appendChild(style);
  }
}

// Função para atualizar informações dinâmicas
function atualizarInformacoes() {
  // Atualizar contador de dias
  const diasElement = document.getElementById("dias-restantes");
  if (diasElement) {
    const dias = getDiasRestantes();
    diasElement.textContent = dias;
  }

  // Atualizar lote atual
  const loteAtual = getLoteAtual();
  const loteElement = document.getElementById("lote-atual");

  if (loteElement && loteAtual) {
    loteElement.innerHTML = `
            <div class="pricing-card" style="border: 3px solid var(--accent-color);">
                <h3>${loteAtual.nome} - Válido até ${loteAtual.fim}</h3>
                <ul class="price-list">
                    <li>Ligantes <span class="price">${loteAtual.ligantes}</span></li>
                    <li>Alunos externos <span class="price">${loteAtual.externos}</span></li>
                </ul>
                <div class="mt-1">
                    <a href="#inscricoes" class="btn">Inscrever-se Agora</a>
                </div>
            </div>
        `;
  } else if (loteElement) {
    loteElement.innerHTML = `
            <div class="pricing-card" style="border: 3px solid #ef4444;">
                <h3>Inscrições Encerradas</h3>
                <p>As inscrições foram encerradas em 06/11/2025</p>
            </div>
        `;
  }
}

// Função para navegação suave
function navegacaoSuave() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Função para animações ao scroll
function animarAoScroll() {
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.6s ease-out";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Função para destacar seção ativa na navegação
function destacarSecaoAtiva() {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          // Remove classe ativa de todos os links
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          // Adiciona classe ativa ao link correspondente
          const activeLink = document.querySelector(`.nav a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Função para controlar o menu hambúrguer
function toggleMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("mobile-hidden");
    });

    // Fechar menu ao clicar em um link (mobile)
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove("active");
          navMenu.classList.add("mobile-hidden");
        }
      });
    });

    // Controlar visibilidade do menu baseado no tamanho da tela
    function handleResize() {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("mobile-hidden");
        hamburger.classList.remove("active");
      } else {
        navMenu.classList.add("mobile-hidden");
      }
    }

    // Executar na inicialização e no redimensionamento
    handleResize();
    window.addEventListener("resize", handleResize);

    // Fechar menu ao clicar fora dele
    document.addEventListener("click", function (event) {
      const isClickInsideNav =
        navMenu.contains(event.target) || hamburger.contains(event.target);

      if (!isClickInsideNav && window.innerWidth <= 768) {
        hamburger.classList.remove("active");
        navMenu.classList.add("mobile-hidden");
      }
    });
  }
}

// Função para copiar link do Instagram
function copiarInstagram(elemento, username) {
  const textToCopy = `https://instagram.com/${username.replace("@", "")}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      mostrarNotificacao("Link copiado!");
    });
  } else {
    // Fallback para navegadores mais antigos
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    mostrarNotificacao("Link copiado!");
  }
}

// Função para mostrar notificação
function mostrarNotificacao(mensagem) {
  const notificacao = document.createElement("div");
  notificacao.textContent = mensagem;
  notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--secondary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: fadeInUp 0.3s ease-out;
    `;

  document.body.appendChild(notificacao);

  setTimeout(() => {
    notificacao.remove();
  }, 3000);
}

// Função para filtrar cronograma por tipo de atividade
function filtrarCronograma(tipo) {
  const tbody = document.getElementById("cronograma-tbody");
  const rows = tbody.querySelectorAll("tr");

  rows.forEach((row) => {
    const atividade = row.cells[1].textContent.toLowerCase();

    switch (tipo) {
      case "palestras":
        row.style.display =
          atividade.includes("cardiologia") ||
          atividade.includes("endocrinologia") ||
          atividade.includes("oncologia") ||
          atividade.includes("nefrologia") ||
          atividade.includes("hematologia") ||
          atividade.includes("gastroenterologia") ||
          atividade.includes("pneumologia") ||
          atividade.includes("reumatologia")
            ? "table-row"
            : "none";
        break;
      case "apresentacoes":
        row.style.display = atividade.includes("apresentação oral")
          ? "table-row"
          : "none";
        break;
      case "intervalos":
        row.style.display =
          atividade.includes("coffee") ||
          atividade.includes("intervalo") ||
          atividade.includes("credenciamento")
            ? "table-row"
            : "none";
        break;
      default:
        row.style.display = "table-row";
    }
  });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  console.log("🏥 I Jornada de Clínica Médica do RN - Sistema Carregado");

  // Executar funções de inicialização
  atualizarInformacoes();
  gerarTabelaCronograma();
  navegacaoSuave();
  animarAoScroll();
  destacarSecaoAtiva();
  toggleMobileMenu(); // Adicionar controle do menu hambúrguer

  // Adicionar event listeners para os links do Instagram
  document.querySelectorAll(".social-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      const username = this.textContent.trim();
      if (username.includes("@")) {
        // Opcional: abrir em nova aba e copiar link
        setTimeout(() => copiarInstagram(this, username), 100);
      }
    });
  });

  // Atualizar informações a cada minuto
  setInterval(atualizarInformacoes, 60000);

  // Adicionar filtros do cronograma se existirem
  const filtros = document.querySelectorAll(".cronograma-filtro");
  filtros.forEach((filtro) => {
    filtro.addEventListener("click", function () {
      const tipo = this.dataset.filtro;
      filtrarCronograma(tipo);

      // Atualizar aparência dos filtros
      filtros.forEach((f) => f.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// Exportar funções para uso global
window.jornadaCM = {
  gerarTabelaCronograma,
  atualizarInformacoes,
  filtrarCronograma,
  getLoteAtual,
  getDiasRestantes,
  copiarInstagram,
};
