import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, '..');
const dest = __dirname;
const destPublic = path.join(dest, 'assets');

// Folders to copy
const foldersToCopy = ['assets'];
// Folders to copy to root
const rootFoldersToCopy = ['blog', 'solutions'];
// HTML files to copy
const filesToCopy = ['faq.html', 'blog.html', 'food-facts.html', 'compare-grocery-list-apps.html', 'privacy.html', 'grocery-list-app.html'];

function copyRecursiveSync(src, destPath) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(destPath, childItemName));
    });
  } else if (exists) {
    fs.copyFileSync(src, destPath);
  }
}

console.log('Copying files from GetListKart to ListKartPremium...');

// Copy assets
if (!fs.existsSync(destPublic)) fs.mkdirSync(destPublic, { recursive: true });
foldersToCopy.forEach(folder => {
    console.log(`Copying ${folder}...`);
    copyRecursiveSync(path.join(source, folder), path.join(destPublic, folder));
});

// Copy HTML pages and subfolders
rootFoldersToCopy.forEach(folder => {
    console.log(`Copying ${folder}...`);
    copyRecursiveSync(path.join(source, folder), path.join(dest, folder));
});

filesToCopy.forEach(file => {
    console.log(`Copying ${file}...`);
    if(fs.existsSync(path.join(source, file))) {
        fs.copyFileSync(path.join(source, file), path.join(dest, file));
    }
});

console.log('Done! All assets and files are now fully copied and independent.');
