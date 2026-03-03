const path = require('path');
const file = path.resolve('.next/server/app/api/sync/route.js');
try {
  const mod = require(file);
  console.log('Successfully loaded route.js:', !!mod.GET);
} catch (e) {
  console.error('ERROR LOADING ROUTE MODULE:');
  console.error(e);
}
