import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/data", (req, res) => {
  let persone = [
    { nome: "Stefno", cognome: "De Marco" },
    { nome: "Mario", cognome: "Rossi" },
  ];
  res.send(persone);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
