#!/usr/bin/env python3
"""
Script para integrar todas as páginas HTML do projeto
Tarefas:
1. Adicionar links CSS globais se não existir
2. Adicionar script router.js se não existir
3. Corrigir links quebrados
"""

import os
import re
from pathlib import Path

PROJECT_DIR = Path(r"c:\Users\dont leave me alone\Documents\projeto 2")
EXCLUDE_FILES = ["01-selecao-perfil.html"]  # Já foi atualizado

# Mapa de links que precisam ser corrigidos (padrão de busca -> arquivo correto)
LINK_CORRECTIONS = {
    # Links quebrados (não existem)
    r"02-home-morador\.html": "cade_o_dono_home_morador.html",
    r"01-status-denuncia\.html": "04-status-denuncia.html",
    r"03-home-morador\.html": "cade_o_dono_home_morador.html",
    
    # Links de alert que devem virar onclick
    r"alert\('([^']+) — em construção'\)": lambda m: f"window.location.href='{get_route(m.group(1))}'",
}

CSS_LINKS = '''  <link rel="stylesheet" href="assets/css/global.css">
  <link rel="stylesheet" href="assets/css/components.css">
  <link rel="stylesheet" href="assets/css/layout.css">'''

ROUTER_SCRIPT = '  <script src="assets/js/router.js"></script>'

ROUTE_MAPPING = {
    "Dashboard Gestor": "02-dashboard-gestor.html",
    "Detalhe Imóvel": "03-detalhe-imovel.html",
    "Status Denúncia": "04-status-denuncia.html",
    "Mapa de Imóveis": "05-mapa-imoveis.html",
    "Notificações": "06-notificacoes.html",
    "Status Bairro": "07-status-bairro.html",
    "Meu Perfil": "08-meu-perfil.html",
    "Configurações": "09-configuracoes.html",
    "Mapa Georreferenciado": "10-mapa-georef.html",
    "Imóveis Críticos": "11-imoveis-criticos.html",
    "Gestão de Equipes": "12-gestao-equipes.html",
    "Relatórios": "13-relatorios.html",
    "Agendamentos": "14-agendamentos.html",
    "Vigilância Ambiental": "15-vigilancia-ambiental.html",
    "Defesa Civil": "16-defesa-civil.html",
    "Mapa de Ocorrências": "17-agente-mapa.html",
    "Em Vistoria": "18-agente-vistoria.html",
    "Sincronização": "19-agente-sync.html",
}

def get_route(title):
    """Retorna o arquivo correspondente ao título"""
    return ROUTE_MAPPING.get(title, "#")

def add_css_links(content):
    """Adiciona links CSS globais se não existir"""
    if "assets/css/global.css" in content:
        print("  ✓ CSS global já existe")
        return content
    
    # Encontra a posição após </title>
    match = re.search(r'</title>\s*\n', content)
    if match:
        pos = match.end()
        new_content = content[:pos] + CSS_LINKS + "\n" + content[pos:]
        print("  + CSS links adicionados")
        return new_content
    
    return content

def add_router_script(content):
    """Adiciona script de roteamento se não existir"""
    if "assets/js/router.js" in content:
        print("  ✓ Script router já existe")
        return content
    
    # Encontra a posição antes de </body>
    match = re.search(r'</body>', content, re.IGNORECASE)
    if match:
        pos = match.start()
        new_content = content[:pos] + ROUTER_SCRIPT + "\n  " + content[pos:]
        print("  + Router script adicionado")
        return new_content
    
    return content

def fix_broken_links(content):
    """Corrige links quebrados"""
    original = content
    
    # Corrigir links de arquivo
    for pattern, target in LINK_CORRECTIONS.items():
        if callable(target):
            # Padrão com função de transformação
            content = re.sub(pattern, target, content)
        else:
            # Padrão simples
            if pattern in content:
                content = content.replace(pattern, target)
                print(f"  ~ Link corrigido: {pattern} → {target}")
    
    return content

def process_file(filepath):
    """Processa um arquivo HTML"""
    filename = filepath.name
    
    if filename in EXCLUDE_FILES:
        print(f"⊘ {filename} - pulado (já atualizado)")
        return False
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Aplicar transformações
        content = add_css_links(content)
        content = add_router_script(content)
        content = fix_broken_links(content)
        
        # Salvar se houver mudanças
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ {filename} - atualizado")
            return True
        else:
            print(f"= {filename} - sem mudanças")
            return False
            
    except Exception as e:
        print(f"✗ {filename} - erro: {e}")
        return False

def main():
    """Processa todos os arquivos HTML"""
    print("=" * 60)
    print("Integrando projeto HTML - Cadê o Dono?")
    print("=" * 60)
    print()
    
    # Encontrar todos os arquivos .html
    html_files = sorted(PROJECT_DIR.glob("*.html"))
    
    if not html_files:
        print("Nenhum arquivo HTML encontrado!")
        return
    
    print(f"Encontrados {len(html_files)} arquivos HTML\n")
    
    updated = 0
    for filepath in html_files:
        if process_file(filepath):
            updated += 1
    
    print()
    print("=" * 60)
    print(f"Resumo: {updated} arquivo(s) atualizado(s)")
    print("=" * 60)

if __name__ == "__main__":
    main()
