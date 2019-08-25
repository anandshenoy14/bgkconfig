let express = require('express');
let dotenv = require("dotenv")
let cors = require("cors")
const app = express();
const CONFIG_PREFIX = "BGK"
app.use(cors());

app.get('/config', (req, res) => {
    const allConfigKeys = Object.keys(process.env).filter(k => k.indexOf(CONFIG_PREFIX) !== -1);
    if(allConfigKeys.length > 0){
        const allConfigs = {};
        allConfigKeys.forEach(k => allConfigs[k] = process.env[k])
        res.json(allConfigs);
    }else{
        res.json({"error" : "No Config Found"})
    }    
});

app.listen(process.env.PORT || 3000, () =>
    console.log('Config App listening on port : ' + process.env.PORT),
);