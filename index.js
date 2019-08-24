let express  = require('express');
let dotenv = require("dotenv")
const app = express();

app.get('/config', (req, res) => {
  const configs = {
      "FIRESTORE_KEY" : process.env.BGK_FIRESTORE
  }
  res.send(configs);
});

app.listen(process.env.PORT || 3000, () =>
  console.log('Config App listening on port : '+process.env.PORT),
);