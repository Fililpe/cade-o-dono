# Cadê o Dono? — Integração de Projeto HTML

## 📋 Visão Geral

Projeto integrado de plataforma para identificação de imóveis abandonados, com fluxos para Cidadãos, Agentes de Campo e Gestores.

---

## 🏚️ Escopo do Problema

**Programa de Mapeamento e Ação Integrada em Imóveis Fechados e Abandonados**
**Origem:** Prefeitura do Recife — Secretaria de Saúde | Prazo: 29/08/2025 | **ODS 3 · ODS 11**

### Contexto
Imóveis fechados ou abandonados em Recife são inacessíveis para agentes de vigilância, tornando-se criadouros de *Aedes aegypti*, ratos e escorpiões. O abandono gera insalubridade, risco de desabamento, desvalorização da vizinhança e degradação urbana progressiva.

### Objetivo
Criar um sistema integrado de mapeamento, vistoria e intervenção nesses imóveis, unificando o fluxo de trabalho entre **Saúde, Defesa Civil e Urbanismo**. Meta de longo prazo: tolerância zero com imóveis que violem sua função social.

### Resultados Esperados
- 🗺️ Cadastro georreferenciado de imóveis abandonados (vistorias + denúncias)
- 📋 Protocolo de Ação Integrada entre secretarias com responsabilidades definidas
- ⚖️ Processo legal otimizado para notificação de proprietários e entrada forçada
- 🔄 Programa contínuo de vistorias e intervenções saneadoras

### Indicadores de Sucesso
| Indicador | Direção |
|-----------|---------|
| Índice de Infestação Predial do *Aedes aegypti* nos quarteirões com imóveis intervenciados | ↓ Reduzir |
| Imóveis vistoriados e regularizados por ano | ↑ Aumentar |
| Tempo médio entre denúncia e primeira vistoria | ↓ Reduzir |
| Ocorrências de desabamento em imóveis abandonados | ↓ Reduzir |

### Riscos
| Tipo | Descrição |
|------|-----------|
| ⚖️ Jurídico | Dificuldade em localizar proprietários; entraves legais para entrada em propriedade privada |
| 💰 Financeiro | Custo de intervenções (limpeza, demolição) sem garantia de ressarcimento |
| 🔧 Operacional | Equipes insuficientes para o volume e complexidade das operações conjuntas |
| 👥 Social | Heranças em litígio ou proprietários sem condições financeiras de manutenção |

---

## 🎯 Entregáveis Implementados

### ✅ Estrutura de Diretórios

```
/projeto 2
├── assets/
│   ├── css/
│   │   ├── global.css        # Variáveis CSS e estilos base
│   │   ├── components.css    # Componentes reutilizáveis
│   │   └── layout.css        # Sidebar, topbar, grids
│   └── js/
│       ├── navigation.js     # Sistema de navegação legado
│       └── router.js         # Sistema de roteamento
├── 01-selecao-perfil.html    # Página inicial (INTEGRADA)
├── 02-dashboard-gestor.html  # Dashboard gestor
├── 03-detalhe-imovel.html    # Detalhe de imóvel
├── ... (18 páginas HTML)
└── README.md
```

### ✅ Sistema de CSS Global

Todos os estilos foram centralizados em 3 arquivos principais:

- **global.css**: Variáveis de cor, tipografia, animações base
- **components.css**: Botões, cards, badges, avatares, alerts
- **layout.css**: Sidebar, topbar, grids, responsividade

### ✅ Sistema de Navegação

Arquivo `router.js` gerencia:

- Detecção de página atual
- Identificação de tipo de usuário (morador/gestor/agente)
- Menu ativo automático
- Funções de navegação (navigate, goBack)

### ✅ Correção de Links

**Página 01 (Seleção de Perfil) - CORRIGIDA:**

- Cidadão → `cade_o_dono_home_morador.html`
- Agente → `17-agente-mapa.html`
- Gestor → `02-dashboard-gestor.html`

## 🔗 Mapa de Navegação

### Fluxo Cidadão/Morador

```
01-selecao-perfil.html
    ↓
cade_o_dono_home_morador.html (Home)
    ├→ denuncia.html (Nova Denúncia)
    ├→ 04-status-denuncia.html (Status)
    ├→ 06-notificacoes.html (Notificações)
    ├→ 08-meu-perfil.html (Perfil)
    └→ 09-configuracoes.html (Config)
```

### Fluxo Gestor

```
01-selecao-perfil.html
    ↓
02-dashboard-gestor.html (Dashboard)
    ├→ 03-detalhe-imovel.html (Detalhe)
    ├→ 05-mapa-imoveis.html (Mapa)
    ├→ 07-status-bairro.html (Status Bairro)
    ├→ 10-mapa-georef.html (Mapa Geo)
    ├→ 11-imoveis-criticos.html (Críticos)
    ├→ 12-gestao-equipes.html (Equipes)
    ├→ 13-relatorios.html (Relatórios)
    ├→ 14-agendamentos.html (Agendamentos)
    ├→ 15-vigilancia-ambiental.html (Vigilância)
    ├→ 16-defesa-civil.html (Defesa Civil)
    ├→ 06-notificacoes.html (Notificações)
    ├→ 08-meu-perfil.html (Perfil)
    └→ 09-configuracoes.html (Config)
```

### Fluxo Agente de Campo

```
01-selecao-perfil.html
    ↓
17-agente-mapa.html (Mapa)
    ├→ 18-agente-vistoria.html (Vistoria)
    ├→ 19-agente-sync.html (Sincronização)
    ├→ 08-meu-perfil.html (Perfil)
    └→ 09-configuracoes.html (Config)
```

## 🚀 Como Usar

### Para o Desenvolvedor

1. **Incluir CSS global** em todas as páginas:

```html
<link rel="stylesheet" href="assets/css/global.css" />
<link rel="stylesheet" href="assets/css/components.css" />
<link rel="stylesheet" href="assets/css/layout.css" />
```

2. **Incluir script de navegação** ao final do body:

```html
<script src="assets/js/router.js"></script>
```

3. **Certificar que sidebar tem classe `.sb-item`** para links:

```html
<a class="sb-item" href="02-dashboard-gestor.html">Dashboard</a>
```

4. **Padrão de estrutura HTML** (para páginas com sidebar):

```html
<div class="app">
  <aside class="sidebar">
    <!-- Menu aqui -->
  </aside>
  <div class="main">
    <header class="topbar">
      <!-- Top bar aqui -->
    </header>
    <main class="page">
      <!-- Conteúdo aqui -->
    </main>
  </div>
</div>
```

### Para o Usuário Final

- Abrir `01-selecao-perfil.html` no navegador
- Selecionar seu perfil (Cidadão, Agente ou Gestor)
- Todos os links e navegação funcionam normalmente

## 📱 Responsividade

Todos os CSS incluem media queries para:

- Desktop (padrão)
- Tablet (até 1200px)
- Mobile (até 768px)
- Extra pequeno (até 480px)

Sidebar desaparece em móveis, deixando apenas topbar.

## 🎨 Sistema de Cores

```css
--primary: #2563EB (Azul)
--secondary: #6275AF (Roxo)
--tertiary: #BC4800 (Laranja)
--neutral: #757681 (Cinza)

--success: #059669 (Verde)
--warning: #B45309 (Âmbar)
--danger: #DC2626 (Vermelho)
```

## 📦 Componentes Disponíveis

### Botões

- `.btn-primary` - Botão principal
- `.btn-secondary` - Botão secundário
- `.btn-ghost` - Botão com contorno
- `.btn-sm`, `.btn-lg` - Tamanhos

### Cards

- `.card` - Card com hover
- `.card-header`, `.card-body`, `.card-footer`

### Badges

- `.badge`, `.badge-primary`, `.badge-success`, etc.

### Alerts

- `.alert`, `.alert-primary`, `.alert-warning`, etc.

### Avatares

- `.avatar`, `.avatar-sm`, `.avatar-md`, `.avatar-lg`
- `.avatar-circle`, `.avatar-primary`, etc.

### Layouts

- `.grid`, `.grid-2`, `.grid-3`, `.grid-4`
- `.main-grid` (grid com sidebar)
- `.kpi-grid` - Grid para KPIs

## ⚙️ Variáveis de Ambiente

Não há dependências externas. Tudo funciona com:

- HTML5
- CSS3 (Custom Properties / CSS Variables)
- JavaScript Vanilla (ES6+)

## 📝 Próximos Passos

1. **Atualizar todas as páginas** com referência aos CSS globais
2. **Corrigir todos os links** de navegação (botões, cards, links)
3. **Remover CSS inline** de todas as páginas
4. **Criar modelos de componentes** (header, footer, modals)
5. **Otimizar responsividade** em mobile
6. **Adicionar transições** suaves de página

## 🐛 Problemas Conhecidos

- [ ] Algumas páginas ainda têm CSS inline (em andamento)
- [ ] Alguns links apontam para páginas que não existem
- [ ] Responsividade mobile precisa de melhorias
- [ ] Faltam ícones SVG em alguns menus

## 📚 Referências

- Font: [Sora - Google Fonts](https://fonts.google.com/specimen/Sora)
- Design System: Custom Design System baseado em Eisenhower Matrix
- Framework: Vanilla HTML/CSS/JS (sem dependências)

---

**Última atualização**: Maio 2026
**Status**: Em desenvolvimento - Fase 1 (Estrutura Base Completa)
