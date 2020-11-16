import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { ThirdParty } from "./services/ThirdParty";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});

(async () => {
  const thirdParty = new ThirdParty();
  console.log(await thirdParty.getMovieTranslations("5"));
})();
