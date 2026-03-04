const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const idx = content.indexOf('(Catalan');
if (idx !== -1) {
    const text = content.substring(idx - 15, idx + 10);
    console.log("Found text:", text);
    console.log("Bytes:", Buffer.from(text).toString('hex'));
} else {
    console.log("Not found Catalan");
}
