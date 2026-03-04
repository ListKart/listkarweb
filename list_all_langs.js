const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

// The regex matches typical CP850/Windows-1252 garbled UTF-8 artifacts.
// Non-ASCII characters that usually form from mistranslating UTF-8.
const langChips = content.match(/<span class="lang-chip">.*?<\/span>/g);

if (langChips) {
    for (const chip of langChips) {
        // Find if there is any text that looks garbled
        // Basically anything that isn't standard ASCII or the expected native characters.
        // Let's just print the text content of all language chips to see what we have.
        const textMatch = chip.match(/alt="[^"]*">\s*([^<]+)<\/span>/);
        if (textMatch) {
            const text = textMatch[1].trim();
            if (/[^a-zA-Z\s\(\)\-\.,0-9]/.test(text)) {
                 console.log(text);
            }
        }
    }
}
