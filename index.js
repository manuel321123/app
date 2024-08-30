const express = require('express');
const app = express();

const route1 = require('./routes/route1');
const route2 = require('./routes/route2');

app.use('/route1', route1);
app.use('/route2', route2);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
