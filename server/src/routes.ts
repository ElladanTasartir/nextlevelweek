import express from "express";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
//passaremos o upload como middleware para a rota de post, onde enviaremos a imagem
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

//index, show, create, update, delete

routes.get("/items", itemsController.index); //transformar informações = serializações de dados
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.post(
  "/points",
  upload.single("image"),
  celebrate(
    {
      body: Joi.object().keys({
        //dentro disso colocamos os campos que queremos validar
        name: Joi.string().required(),
        email: Joi.string().required(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
        //A imagem validamos no multer, utilizando o filefilter, por exemplo
      }),
    },
    {
      abortEarly: false, //Vai continuar a validação, mesmo que um dado já esteja errado
    }
  ),
  pointsController.create
);
//upload.single porque receberemos apenas 1 arquivo, e o nome do campo que enviaremos ela no post
//pelo fato do json não receber arquivos, para enviarmos esse post, precisaremos realizar o post
//com o tipo de requisição formData ou Multipart

export default routes;
