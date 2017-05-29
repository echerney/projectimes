const express     = require('express');
const path        = require('path');

const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.use( express.static(path.join(__dirname, 'dist')) )


// Let's go!
app.listen(PORT , ()=> console.log(`I have the honor to be your obedient serv-er`, PORT ) )
