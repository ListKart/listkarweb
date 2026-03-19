/**
 * i18n.js - Multilingual Management for ListKart
 * Handles language detection, user preference persistence, and routing.
 */

const SUPPORTED_LANGS = ['en', 'hi', 'es', 'fr', 'de', 'mr', 'pt'];
const LANG_NAMES = {
    'en': 'English',
    'hi': 'हिन्दी',
    'es': 'Español',
    'fr': 'Français',
    'de': 'Deutsch',
    'mr': 'मराठी',
    'pt': 'Português'
};

function getLang() {
    // 1. Check local storage
    let lang = localStorage.getItem('listkart_lang');
    if (lang && SUPPORTED_LANGS.includes(lang)) return lang;

    // 2. Check path prefix
    const path = window.location.pathname;
    for (const l of SUPPORTED_LANGS) {
        if (l === 'en') continue;
        if (path.includes(`/${l}/`)) return l;
    }

    // 3. Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

    return 'en';
}

function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    localStorage.setItem('listkart_lang', lang);
    
    // Calculate new path
    let currentPath = window.location.pathname;
    let fileName = currentPath.split('/').pop() || 'index.html';
    
    // Normalize fileName (remove directory parts)
    if (fileName === '' || fileName === '/' ) fileName = 'index.html';

    // Destination URL construction
    let dest = '/';
    if (lang !== 'en') {
        dest += lang + '/';
    }
    dest += fileName;

    // Safety check: ensure we don't end up with //
    dest = dest.replace(/\/+/g, '/');

    window.location.href = dest;
}

// Language Switcher Injection
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;

    const currentLang = getLang();
    
    const switcher = document.createElement('div');
    switcher.className = 'nav-item language-switcher';
    switcher.style.marginLeft = '1rem';
    
    let dropdownHtml = `
        <div class="dropdown-trigger" style="cursor: pointer; display: flex; align-items: center; gap: 0.5rem; color: var(--text-color); font-weight: 500;">
            🌐 ${LANG_NAMES[currentLang]}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </div>
        <div class="dropdown-menu" id="lang-menu">
    `;

    SUPPORTED_LANGS.forEach(lang => {
        dropdownHtml += `
            <a href="javascript:void(0)" onclick="setLanguage('${lang}')" class="dropdown-item ${currentLang === lang ? 'active' : ''}" style="display: flex; align-items: center; padding: 0.75rem 1rem; color: var(--text-color); text-decoration: none; transition: background 0.2s;">
                ${LANG_NAMES[lang]} ${currentLang === lang ? '✓' : ''}
            </a>
        `;
    });

    dropdownHtml += `</div>`;
    switcher.innerHTML = dropdownHtml;
    
    // Append to nav
    // Find the last nav-item or just append to navMenu
    const lastNav = navMenu.querySelector('.nav-item:last-of-type');
    if (lastNav) {
        lastNav.insertAdjacentElement('afterend', switcher);
    } else {
        navMenu.appendChild(switcher);
    }

    // Add simple CSS for hover functionality if not already handled by site styles
    if (!document.getElementById('i18n-styles')) {
        const style = document.createElement('style');
        style.id = 'i18n-styles';
        style.innerHTML = `
            .language-switcher { position: relative; }
            .language-switcher .dropdown-menu { 
                display: none; 
                position: absolute; 
                top: 100%; 
                right: 0; 
                background: var(--card-bg, #ffffff); 
                box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
                border-radius: 12px; 
                min-width: 160px; 
                z-index: 1000;
                border: 1px solid rgba(0,0,0,0.05);
                overflow: hidden;
            }
            .language-switcher:hover .dropdown-menu { display: block; }
            .language-switcher .dropdown-item:hover { background: rgba(0,0,0,0.02); color: var(--primary-color); }
            .language-switcher .dropdown-item.active { font-weight: 700; color: var(--primary-color); }
            @media (max-width: 768px) {
                .language-switcher { margin-top: 1rem; width: 100%; }
                .language-switcher .dropdown-menu { position: static; box-shadow: none; border: none; display: block; width: 100%; }
            }
        `;
        document.head.appendChild(style);
    }
});

// Initialization: Auto-redirect only on home page visit without preference
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    const savedLang = localStorage.getItem('listkart_lang');
    if (savedLang && savedLang !== 'en' && SUPPORTED_LANGS.includes(savedLang)) {
         // Temporarily disabled to avoid infinite loops until verified
         // window.location.href = '/' + savedLang + '/index.html';
    }
}
