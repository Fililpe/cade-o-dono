// Components for repeated elements

export function createSidebar() {
  return `
    <div class="sidebar-overlay" id="overlay" onclick="closeSidebar()"></div>

    <div class="app-shell">
      <aside
        class="sidebar"
        id="sidebar"
        role="navigation"
        aria-label="Menu principal"
      >
        <div class="sidebar-logo">
          <div class="logo-mark">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </div>
          <div>
            <div class="logo-text">Cadê o Dono?</div>
            <div class="logo-sub">Vigilância Urbana</div>
          </div>
        </div>
        <nav class="sidebar-nav">
          <span class="nav-section-label">Principal</span>
          <a class="nav-item active" href="#" aria-current="page">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>Home</span>
          </a>
        </nav>
      </aside>
    </div>
  `;
}

export function createNavbar() {
  return `
    <header class="navbar">
      <div class="navbar-brand">Cadê o Dono?</div>
      <nav class="navbar-menu">
        <a href="#" class="navbar-item">Início</a>
        <a href="#" class="navbar-item">Sobre</a>
      </nav>
    </header>
  `;
}

export function createFooter() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2026 Cadê o Dono? Todos os direitos reservados.</p>
      </div>
    </footer>
  `;
}
