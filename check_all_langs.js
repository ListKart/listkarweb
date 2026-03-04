const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

// The regex matches typical CP850/Windows-1252 garbled UTF-8 artifacts.
const langChips = content.match(/<span class="lang-chip">.*?<\/span>/gs);

if (langChips) {
    for (const chip of langChips) {
        const textMatch = chip.match(/>\s*([^<]+)<\/span>/);
        if (textMatch) {
            console.log(textMatch[1].trim());
        }
    }
}
