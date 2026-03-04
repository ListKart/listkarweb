const fs = require('fs');
const path = require('path');

const replacements = {
    'Espa├▒ol': 'Español',
    'Portugu├¬s': 'Português',
    '├ìslenska': 'Íslenska',
    'µùÑµ£¼Φ¬₧': '日本語',
    'φò£Ω╡¡∞û┤': '한국어',
    '╨á╤â╤ü╤ü╨║╨╕╨╣': 'Русский',
    'Σ╕¡µûç': '中文',
    'αª¼αª╛αªéαª▓αª╛': 'বাংলা',
    '╪º┘ä╪╣╪▒╪¿┘è╪⌐': 'العربية',
    '╨æ╤è╨╗╨│╨░╤Ç╤ü╨║╨╕': 'Български',
    '─îe┼ítina': 'Čeština',
    '╬ò╬╗╬╗╬╖╬╜╬╣╬║╬¼': 'Ελληνικά',
    '╪º╪▒╪»┘ê': 'اردو',
    'α«ñα««α«┐α«┤α»ì': 'தமிழ்',
    'α░ñα▒åα░▓α▒üα░ùα▒ü': 'తెలుగు',
    'αñ«αñ░αñ╛αñáαÑÇ': 'मराठी',
    'α▓òα▓¿α│ìα▓¿α▓í': 'ಕನ್ನಡ',
    'α¬ùα½üα¬£α¬░α¬╛α¬ñα½Ç': 'ગુજરાતી',
    '┘ü╪º╪▒╪│█î': 'فارسی',
    '╫ó╫æ╫¿╫Ö╫¬': 'עברית',
    'Lietuvi┼│': 'Lietuvių',
    'Latvie┼íu': 'Latviešu',
    'Rom├ón─â': 'Română',
    'Sloven─ìina': 'Slovenčina',
    'Sloven┼í─ìina': 'Slovenščina',
    '╨í╤Ç╨┐╤ü╨║╨╕': 'Српски',
    'α╣äα╕ùα╕ó': 'ไทย',
    'T├╝rk├ºe': 'Türkçe',
    '╨ú╨║╤Ç╨░╤ù╨╜╤ü╤î╨║╨░': 'Українська',
    'Tiß║┐ng Viß╗çt': 'Tiếng Việt',
    '╨æ╨╡╨╗╨░╤Ç╤â╤ü╨║╨░╤Å': 'Беларуская',
    'Catal├á': 'Català',
    'ßâÑßâÉßâáßâùßâúßâÜßâÿ': 'ქართული',
    'αñ╣αñ┐αñéαñªαÑÇ': 'हिन्दी',
    'Fran├ºais': 'Français'
};

function fixFile(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    let changed = false;
    for (const [bad, good] of Object.entries(replacements)) {
        if (html.includes(bad)) {
            html = html.split(bad).join(good);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(file, html, 'utf8');
        console.log('Fixed ' + file);
    }
}

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== '.git' && file !== 'node_modules') {
                walk(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            fixFile(fullPath);
        }
    }
}

walk('.');
console.log('Done');
