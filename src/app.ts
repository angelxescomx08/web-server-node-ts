import express from "express";
import path from "path";
const app = express();

const port = 3000;
const baseURL = path.join(__dirname, "../public");

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Ángel Hernández",
    titulo: "Curso Node",
  });
});

app.get("*", (req, res) => {
  const url = path.join(baseURL, "404.html");
  res.sendFile(url);
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto: ${port}`);
});
