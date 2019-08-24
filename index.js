let express  = require('express');
let dotenv = require("dotenv")
const app = express();

app.get('/config', (req, res) => {
  const configs = {
      "FIRESTORE_KEY" : "something_else",
      "MY_KEY" : "something"
  }
  res.send(configs);
});

app.listen(3000, () =>
  console.log('Config App listening on port 3000!'),
);