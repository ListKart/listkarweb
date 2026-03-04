const fs = require('fs');

function fixFile(filename, doctypeIndex) {
    let content = fs.readFileSync(filename, 'utf8');
    let parts = content.split('<!DOCTYPE html>').filter(p => p.trim() !== '');
    if (parts.length > doctypeIndex) {
        fs.writeFileSync(filename, '<!DOCTYPE html>\n' + parts[doctypeIndex].trim(), 'utf8');
        console.log('Fixed ' + filename);
    }
}

// blog.html has blog as its 1st part (index 0)
fixFile('blog.html', 0);

// faq.html seems to have blog, then empty ?, then faq? Let's check part contents 
// We can just find the part that contains the relevant title
function extractByTitle(filename, titleSubstring) {
    let content = fs.readFileSync(filename, 'utf8');
    let parts = content.split('<!DOCTYPE html>').filter(p => p.trim() !== '');
    for(let part of parts) {
        if(part.includes('<title>') && part.includes(titleSubstring)) {
             fs.writeFileSync(filename, '<!DOCTYPE html>\n' + part.trim() + '\n', 'utf8');
             console.log('Fixed ' + filename + ' by title: ' + titleSubstring);
             return;
        }
    }
}

extractByTitle('faq.html', 'FAQ');
extractByTitle('privacy.html', 'Privacy Policy');

