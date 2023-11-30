const fs = require('fs');
const envContent = `
API_URL=${process.env.API_URL}\n
API_KEY=${process.env.API_KEY}
`;

fs.writeFileSync('./.env', envContent.trim());