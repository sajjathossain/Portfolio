const express = require('express');
const path = require('path');
// const fileRouter = express.Router();

const app = express();
// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "templates", "pug"));


app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "templates", "html", "index.html"));
});

// app.use("/", fileRouter);
app.listen(process.env.PORT || 8080, () => console.log("Server Running At PORT 8080"));