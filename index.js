let express  = require('express');
let dotenv = require("dotenv")
let cors = require("cors")
const app = express();

app.use(cors());

app.get('/config', (req, res) => {
  const configs = Object.assign({},process.env.config);
  res.json(configs);
});

app.listen(process.env.PORT || 3000, () =>
  console.log('Config App listening on port : '+process.env.PORT),
);