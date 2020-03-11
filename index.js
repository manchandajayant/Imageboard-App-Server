const express = require("express");
const app = express();
const cors = require("cors");
const jsonParser = express.json();
const albumRouter = require("./Albums/router");
const corsMiddleWare = cors();
const port = process.env.PORT || 4000;

app.use(jsonParser);
app.use(corsMiddleWare);
app.use(albumRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
