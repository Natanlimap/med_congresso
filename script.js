// Dados da jornada carregados do textos.txt
const jornadaData = {
  titulo: "I JORNADA DE CLÍNICA MÉDICA DO RN",
  organizador: "Liga Acadêmica de Clínica Médica do RN (CLIMERN)",
  dataEvento: "08/11/2025",
  local: "Associação Médica do RN",
  inscricoes: {
    inicio: "05/09/2025",
    fim: "07/11/2025",
  },
  redes: {
    liga: "@climernunp",
    evento: "@jornadacmrn",
  },
};

// Data alvo do evento (BRT)
const TARGET_DATE = new Date("2025-11-08T00:00:00-03:00");

// Função do countdown
function initCountdown() {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const countdownGrid = document.querySelector(".countdown-grid");
  const eventStartedElement = document.getElementById("event-started");

  if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
    return;
  }

  function updateCountdown() {
    const now = new Date();
    const difference = TARGET_DATE.getTime() - now.getTime();

    if (difference <= 0) {
      // Evento iniciado
      countdownGrid.style.display = "none";
      eventStartedElement.classList.remove("hidden");
      document.querySelector(".countdown-title").style.display = "none";
      return;
    }

    // Calcular tempo restante
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Formatar números com locale pt-BR
    const formatter = new Intl.NumberFormat("pt-BR", {
      minimumIntegerDigits: 2,
    });

    daysElement.textContent = formatter.format(days);
    hoursElement.textContent = formatter.format(hours);
    minutesElement.textContent = formatter.format(minutes);
    secondsElement.textContent = formatter.format(seconds);
  }

  // Atualizar imediatamente
  updateCountdown();

  // Atualizar a cada segundo
  setInterval(updateCountdown, 1000);
}

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
  // Definir as datas com horário final do dia para garantir que o dia inteiro seja incluído
  const lote1Fim = new Date("2025-09-30T23:59:59");
  const lote2Fim = new Date("2025-10-31T23:59:59");
  const lote3Fim = new Date("2025-11-07T23:59:59");

  if (hoje <= lote1Fim) {
    return {
      nome: "1º Lote",
      fim: "30/09/2025",
      ligantes: "R$ 50,00",
      naoLigantes: "R$ 70,00",
      residentes: "R$ 100,00",
      medicos: "R$ 150,00",
    };
  } else if (hoje <= lote2Fim) {
    return {
      nome: "2º Lote",
      fim: "31/10/2025",
      ligantes: "R$ 60,00",
      naoLigantes: "R$ 80,00",
      residentes: "R$ 110,00",
      medicos: "R$ 160,00",
    };
  } else if (hoje <= lote3Fim) {
    return {
      nome: "3º Lote",
      fim: "07/11/2025",
      ligantes: "R$ 70,00",
      naoLigantes: "R$ 90,00",
      residentes: "R$ 120,00",
      medicos: "R$ 170,00",
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
          <li>Acadêmico de Medicina - Ligante da CLIMERN <span class="price">${loteAtual.ligantes}</span></li>
          <li>Acadêmico de Medicina - Não Ligante <span class="price">${loteAtual.naoLigantes}</span></li>
          <li>Médico Residente <span class="price">${loteAtual.residentes}</span></li>
          <li>Médico <span class="price">${loteAtual.medicos}</span></li>
        </ul>
        <div class="mt-1">
          <a href="https://forms.gle/BwwhhvebvoemyYDQ7" class="btn" target="_blank" rel="noopener">Inscrever-se Agora</a>
        </div>
      </div>
    `;
  } else if (loteElement) {
    loteElement.innerHTML = `
            <div class="pricing-card" style="border: 3px solid #ef4444;">
                <h3>Inscrições Encerradas</h3>
                <p>As inscrições foram encerradas em 07/11/2025</p>
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
    // Criar overlay se não existir
    let overlay = document.querySelector(".mobile-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "mobile-overlay";
      document.body.appendChild(overlay);
    }

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("mobile-active");
      overlay.classList.toggle("active");

      // Prevenir scroll do body quando menu estiver aberto
      if (navMenu.classList.contains("mobile-active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Fechar menu ao clicar no overlay
    overlay.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("mobile-active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });

    // Fechar menu ao clicar em um link (mobile)
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("mobile-active");
          overlay.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    });

    // Controlar visibilidade do menu baseado no tamanho da tela
    function handleResize() {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("mobile-active");
        hamburger.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    }

    // Executar na inicialização e no redimensionamento
    handleResize();
    window.addEventListener("resize", handleResize);

    // Fechar menu com tecla ESC
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        navMenu.classList.contains("mobile-active")
      ) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("mobile-active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
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
  initCountdown(); // Adicionar countdown
  atualizarInformacoes();
  gerarTabelaCronograma();
  navegacaoSuave();
  animarAoScroll();
  destacarSecaoAtiva();
  toggleMobileMenu(); // Adicionar controle do menu hambúrguer
  initInscriptionButton(); // Adicionar funcionalidade do botão de inscrição

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

// Função para inicializar o botão de inscrição
function initInscriptionButton() {
  const inscriptionBtn = document.getElementById("inscription-btn");

  if (inscriptionBtn) {
    inscriptionBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Verificar se as inscrições ainda estão abertas
      const hoje = new Date();
      const fimInscricoes = new Date("2025-11-07T23:59:59-03:00");

      if (hoje > fimInscricoes) {
        // Inscrições encerradas
        mostrarNotificacao(
          "As inscrições foram encerradas em 07/11/2025",
          "error"
        );
        return;
      }

      // Verificar se as inscrições já começaram
      const inicioInscricoes = new Date("2025-09-05T00:00:00-03:00");

      if (hoje < inicioInscricoes) {
        // Inscrições ainda não começaram
        mostrarNotificacao("As inscrições começam em 05/09/2025", "warning");
        return;
      }

      // Simular redirecionamento para Google Forms
      // URL placeholder - deve ser substituída pela URL real do Google Forms
      const googleFormsUrl = "https://forms.google.com/your-form-url-here";

      // Mostrar loading
      const originalText = inscriptionBtn.innerHTML;
      inscriptionBtn.innerHTML = "<span>⏳ Redirecionando...</span>";
      inscriptionBtn.style.pointerEvents = "none";

      setTimeout(() => {
        // Restaurar texto original
        inscriptionBtn.innerHTML = originalText;
        inscriptionBtn.style.pointerEvents = "auto";

        // Por enquanto, mostrar modal de informações
        mostrarModalInscricao();

        // Para produção, descomentar a linha abaixo:
        // window.open(googleFormsUrl, '_blank');
      }, 1500);
    });
  }
}

// Função para mostrar modal de informações sobre inscrição
function mostrarModalInscricao() {
  // Criar modal
  const modal = document.createElement("div");
  modal.className = "inscription-modal";
  modal.innerHTML = `
    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3>🎓 Inscrições - I Jornada de Clínica Médica do RN</h3>
          <button class="modal-close" onclick="this.closest('.inscription-modal').remove()">×</button>
        </div>
        <div class="modal-body">
          <div class="inscription-info">
            <div class="info-item">
              <strong>📅 Período de Inscrições:</strong>
              <p>05 de setembro a 07 de novembro de 2025</p>
            </div>
            <div class="info-item">
              <strong>💰 Valores:</strong>
              <ul>
                <li>Médicos: R$ 150,00</li>
                <li>Estudantes: R$ 80,00 (com comprovante)</li>
                <li>Outros Profissionais: R$ 120,00</li>
              </ul>
            </div>
            <div class="info-item">
              <strong>💳 Pagamento:</strong>
              <p>PIX (5% desconto), cartão de crédito (3x sem juros) ou débito</p>
            </div>
            <div class="info-item">
              <strong>📞 Dúvidas:</strong>
              <p>📧 inscricoes@climern.org.br<br>📱 (84) 99999-9999</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <p><small>🔗 O formulário de inscrição será disponibilizado em breve via Google Forms</small></p>
          <button class="modal-btn" onclick="this.closest('.inscription-modal').remove()">Entendido</button>
        </div>
      </div>
    </div>
  `;

  // Adicionar estilos do modal
  if (!document.getElementById("modal-styles")) {
    const modalStyles = document.createElement("style");
    modalStyles.id = "modal-styles";
    modalStyles.textContent = `
      .inscription-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
      }
      
      .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }
      
      .modal-content {
        background: white;
        border-radius: 20px;
        max-width: 500px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        animation: slideUp 0.3s ease-out;
      }
      
      .modal-header {
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 20px 20px 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .modal-header h3 {
        margin: 0;
        font-size: 1.3rem;
      }
      
      .modal-close {
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s ease;
      }
      
      .modal-close:hover {
        background: rgba(255,255,255,0.2);
      }
      
      .modal-body {
        padding: 2rem;
      }
      
      .info-item {
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--light-gray);
      }
      
      .info-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }
      
      .info-item strong {
        color: var(--primary-color);
        display: block;
        margin-bottom: 0.5rem;
      }
      
      .info-item ul {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
      }
      
      .info-item li {
        margin-bottom: 0.3rem;
      }
      
      .modal-footer {
        background: var(--light-gray);
        padding: 1.5rem 2rem;
        border-radius: 0 0 20px 20px;
        text-align: center;
      }
      
      .modal-btn {
        background: var(--accent-color);
        color: white;
        border: none;
        padding: 0.8rem 2rem;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 1rem;
        transition: all 0.3s ease;
      }
      
      .modal-btn:hover {
        background: #e6a503;
        transform: translateY(-2px);
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @media (max-width: 768px) {
        .modal-content {
          margin: 1rem;
          max-width: none;
        }
        
        .modal-header,
        .modal-body,
        .modal-footer {
          padding: 1rem 1.5rem;
        }
        
        .modal-header h3 {
          font-size: 1.1rem;
        }
      }
    `;
    document.head.appendChild(modalStyles);
  }

  document.body.appendChild(modal);

  // Fechar ao clicar no overlay
  modal.querySelector(".modal-overlay").addEventListener("click", function (e) {
    if (e.target === this) {
      modal.remove();
    }
  });
}

// Atualizar função de notificação para suportar tipos
function mostrarNotificacao(mensagem, tipo = "success") {
  const cores = {
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#3b82f6",
  };

  const notificacao = document.createElement("div");
  notificacao.textContent = mensagem;
  notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${cores[tipo]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: fadeInUp 0.3s ease-out;
        max-width: 300px;
        font-size: 0.9rem;
        line-height: 1.4;
    `;

  document.body.appendChild(notificacao);

  setTimeout(() => {
    notificacao.style.animation = "fadeOut 0.3s ease-out forwards";
    setTimeout(() => notificacao.remove(), 300);
  }, 4000);
}

// Exportar funções para uso global
window.jornadaCM = {
  gerarTabelaCronograma,
  atualizarInformacoes,
  filtrarCronograma,
  getLoteAtual,
  getDiasRestantes,
  copiarInstagram,
};
