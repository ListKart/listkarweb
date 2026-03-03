const { spawn } = require('child_process');
const fs = require('fs');
const dev = spawn('node', ['node_modules/next/dist/bin/next', 'dev']);
const logStream = fs.createWriteStream('next-dev.log');
dev.stdout.pipe(logStream);
dev.stderr.pipe(logStream);
setTimeout(() => {
  console.log('Fetching local API...');
  fetch('http://localhost:3000/api/sync?action=debug_env')
    .then(res => res.text())
    .then(t => { console.log('Response:', t.substring(0, 100)); dev.kill(); })
    .catch(e => { console.log('Fetch error:', e); dev.kill(); });
}, 7000);
