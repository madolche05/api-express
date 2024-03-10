const express = require('express');
const app = express();
const cors = require('cors');
const routesPath = './src/routes';
const routesFiles = require('fs').readdirSync(routesPath).filter(file => file.endsWith('.js'));

app.use(cors());
app.use(express.json());

for (const file of routesFiles) {
  const route = require(`./src/routes/${file}`);
  const routeName = file.split('.')[0]; // Remove .js from filename
  app.use(`/${routeName}`, route);
}


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
