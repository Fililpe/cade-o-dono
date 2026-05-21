/* ============================================
   SISTEMA DE NAVEGAÇÃO E ROTEAMENTO
   Versão única e definitiva — navigation.js foi removido
   ============================================ */

const ROUTES = {
  // Seleção de perfil (raiz do projeto)
  HOME: "../../index.html",

  // Morador
  MORADOR_HOME:    "../morador/cade_o_dono_home_morador.html",
  MORADOR_DENUNCIA:"../morador/denuncia.html",
  MORADOR_STATUS:  "../morador/04-status-denuncia.html",
  MORADOR_NOTIF:   "../morador/06-notificacoes.html",
  MORADOR_PERFIL:  "../morador/08-meu-perfil.html",
  MORADOR_CONFIG:  "../morador/09-configuracoes.html",

  // Gestor
  GESTOR_DASHBOARD:  "../gestor/02-dashboard-gestor.html",
  GESTOR_DETALHE:    "../gestor/03-detalhe-imovel.html",
  GESTOR_MAPA:       "../gestor/05-mapa-imoveis.html",
  GESTOR_BAIRRO:     "../gestor/07-status-bairro.html",
  GESTOR_GEO:        "../gestor/10-mapa-georef.html",
  GESTOR_CRITICOS:   "../gestor/11-imoveis-criticos.html",
  GESTOR_EQUIPES:    "../gestor/12-gestao-equipes.html",
  GESTOR_RELATORIOS: "../gestor/13-relatorios.html",
  GESTOR_AGENDAMENTOS:"../gestor/14-agendamentos.html",
  GESTOR_VIGILANCIA: "../gestor/15-vigilancia-ambiental.html",
  GESTOR_DEFESA:     "../gestor/16-defesa-civil.html",
  GESTOR_NOTIF:      "../morador/06-notificacoes.html",
  GESTOR_PERFIL:     "../morador/08-meu-perfil.html",
  GESTOR_CONFIG:     "../morador/09-configuracoes.html",
  GESTOR_STATUS:     "../morador/04-status-denuncia.html",

  // Agente
  AGENTE_MAPA:    "../agente/17-agente-mapa.html",
  AGENTE_VISTORIA:"../agente/18-agente-vistoria.html",
  AGENTE_SYNC:    "../agente/19-agente-sync.html",
  AGENTE_PERFIL:  "../morador/08-meu-perfil.html",
  AGENTE_CONFIG:  "../morador/09-configuracoes.html",
};

/**
 * Obtém apenas o nome do arquivo da página atual
 */
function getCurrentPage() {
  const path = window.location.pathname;
  return path.split("/").pop() || "index.html";
}

/**
 * Determina o tipo de usuário baseado na página atual
 */
function getUserType() {
  const page = getCurrentPage();

  if (
    page.startsWith("cade_o_dono_") ||
    page === "denuncia.html" ||
    page === "04-status-denuncia.html" ||
    page === "06-notificacoes.html" ||
    page === "08-meu-perfil.html" ||
    page === "09-configuracoes.html"
  ) {
    return "morador";
  } else if (
    page.startsWith("02-") ||
    page.startsWith("03-") ||
    page.startsWith("05-") ||
    page.startsWith("07-") ||
    page.startsWith("10-") ||
    page.startsWith("11-") ||
    page.startsWith("12-") ||
    page.startsWith("13-") ||
    page.startsWith("14-") ||
    page.startsWith("15-") ||
    page.startsWith("16-")
  ) {
    return "gestor";
  } else if (
    page.startsWith("17-") ||
    page.startsWith("18-") ||
    page.startsWith("19-")
  ) {
    return "agente";
  }

  return "unknown";
}

/**
 * Inicializa o sistema de navegação:
 * marca o item de menu da página atual como active
 */
function initNavigation() {
  const currentPage = getCurrentPage();
  const menuItems = document.querySelectorAll(".sb-item");

  menuItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href && href.endsWith(currentPage)) {
      item.classList.add("active");
      item.setAttribute("aria-current", "page");
    } else {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    }
  });
}

/**
 * Navega para uma rota do objeto ROUTES ou qualquer URL
 */
function navigate(route) {
  if (route) {
    window.location.href = route;
  }
}

/**
 * Volta para a página anterior
 */
function goBack() {
  window.history.back();
}

// Inicializar quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", initNavigation);
